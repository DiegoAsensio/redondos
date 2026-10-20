import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { DiscographyGrid } from '../../components/DiscographyGrid/DiscographyGrid';
import { ScrollProgress } from '../../components/ScrollProgress/ScrollProgress';
import { VinylPlayer } from '../../components/VinylPlayer/VinylPlayer';
import { albums, studioAlbums } from '../../data/albums';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { INTRO, albumCenter, useVinylScroll } from '../../hooks/useVinylScroll';
import { scrollToJourneyProgress } from '../../utils/scrollToJourney';
import { AlbumStop } from './AlbumStop';
import styles from './Home.module.css';

const COUNT = studioAlbums.length;

export default function Home() {
  useDocumentTitle('Los Redondos. La discografía');

  const trackRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const narrow = useMediaQuery('(max-width: 760px)');
  const location = useLocation();

  const { progress, rotation, activeIndex } = useVinylScroll(trackRef, COUNT, reduced);

  useEffect(() => {
    const state = location.state as { focus?: string; index?: number } | null;
    if (state?.focus !== 'journey') return;
    const target = albumCenter(Math.min(COUNT - 1, Math.max(0, state.index ?? 0)), COUNT);
    let id2 = 0;
    const id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => scrollToJourneyProgress(target, 'auto'));
    });
    return () => {
      cancelAnimationFrame(id1);
      cancelAnimationFrame(id2);
    };
  }, [location.key, location.state]);

  const vinylX = useTransform(progress, [0, INTRO], ['0vw', '-24vw']);
  const vinylY = useTransform(progress, [0, INTRO], ['0vh', '-27vh']);
  const vinylScale = useTransform(progress, [0, INTRO], [1, 0.8]);
  const heroOpacity = useTransform(progress, [0, INTRO * 0.55], [1, 0]);
  const heroY = useTransform(progress, [0, INTRO * 0.55], ['0px', '-24px']);
  const heroEvents = useTransform(heroOpacity, (o) => (o < 0.05 ? 'none' : 'auto'));

  const onSelect = (i: number) =>
    scrollToJourneyProgress(albumCenter(i, COUNT), reduced ? 'auto' : 'smooth');

  const others = albums.length - COUNT;

  return (
    <>
      <section
        id="recorrido"
        ref={trackRef}
        className={styles.track}
        style={{ '--albums': COUNT } as React.CSSProperties}
        aria-label="Recorrido por la discografía"
      >
        <div className={styles.stage}>
          <div className={styles.vinylLayer}>
            <motion.div
              className={styles.vinylMove}
              style={{
                x: narrow ? 0 : vinylX,
                y: narrow ? vinylY : 0,
                scale: vinylScale,
              }}
            >
              <VinylPlayer rotation={rotation} bands={COUNT} />
            </motion.div>
          </div>

          <motion.div
            className={styles.hero}
            style={reduced ? { opacity: heroOpacity } : { opacity: heroOpacity, y: heroY }}
          >
            <div className={styles.heroTop}>
              <h1 className={styles.title}>
                <span>PATRICIO REY Y SUS</span>
                <span>REDONDITOS DE RICOTA</span>
              </h1>
              <p className={styles.subtitle}>La discografía. Un viaje por el rock de acá</p>
            </div>

            <motion.div className={styles.heroBottom} style={{ pointerEvents: heroEvents }}>
              <p className={styles.counter}>
                <span className={styles.counterNum}>{albums.length}</span>
                <span>
                  lanzamientos en la colección,
                  <br />
                  {COUNT} de estudio{others > 0 ? ` y ${others} en vivo` : ''}
                </span>
              </p>
              <p className={styles.cue}>
                <span>SCROLLEÁ PARA RECORRER LA DISCOGRAFÍA</span>
                <span className={styles.cueTrack} aria-hidden="true">
                  <span className={styles.cueDot} />
                </span>
              </p>
            </motion.div>
          </motion.div>

          {albums
            .filter((a) => a.position !== null)
            .map((album, i) => (
              <AlbumStop
                key={album.id}
                album={album}
                index={i}
                count={COUNT}
                progress={progress}
                active={activeIndex === i}
                narrow={narrow}
                reduced={reduced}
              />
            ))}

          {activeIndex >= 0 && (
            <ScrollProgress albums={studioAlbums} activeIndex={activeIndex} onSelect={onSelect} />
          )}
        </div>
      </section>

      <section className={styles.closing} aria-labelledby="cierre-titulo">
        <div className={styles.closingHead}>
          <h2 id="cierre-titulo" className={styles.closingTitle}>
            La colección completa
          </h2>
          <p className={styles.closingText}>
            {COUNT} discos de estudio, de {studioAlbums[0].title} a {studioAlbums[COUNT - 1].title}.
            Elegí uno para ver su lista de temas, o mirá todos los lanzamientos juntos, con filtros.
          </p>
          <Link to="/coleccion" className={styles.closingCta}>
            Ver toda la discografía
          </Link>
        </div>
        <DiscographyGrid albums={studioAlbums} compact />
      </section>
    </>
  );
}
