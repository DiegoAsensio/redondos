import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Disc3 } from 'lucide-react';
import { categoryLabel, getNeighbors, studioAlbums } from '../../data/albums';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import type { Album } from '../../types/album';
import { AlbumCover } from '../AlbumCover/AlbumCover';
import { AlbumTracklist } from '../AlbumTracklist/AlbumTracklist';
import styles from './AlbumDetail.module.css';

interface Leaving {
  to: string;
  state?: unknown;
}

export function AlbumDetail({ album }: { album: Album }) {
  const navigate = useNavigate();
  const reduce = useReducedMotion();
  const { prev, next } = getNeighbors(album);
  const [leaving, setLeaving] = useState<Leaving | null>(null);

  useDocumentTitle(`${album.title} (${album.year}). Los Redondos`);

  const leave = (to: string, state?: unknown) => {
    if (reduce) navigate(to, { state });
    else setLeaving({ to, state });
  };

  const go = (e: React.MouseEvent, to: string, state?: unknown) => {

    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    leave(to, state);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key === 'ArrowLeft' && prev) leave(`/disco/${prev.id}`);
      if (e.key === 'ArrowRight' && next) leave(`/disco/${next.id}`);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);

  }, [prev?.id, next?.id, reduce]);

  const inJourney = album.position !== null;

  return (
    <motion.article
      className={styles.page}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={leaving ? { opacity: 0, y: -14 } : { opacity: 1, y: 0 }}
      transition={{ duration: leaving ? 0.2 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={() => {
        if (leaving) navigate(leaving.to, { state: leaving.state });
      }}
    >
      <div className={styles.top}>
        <Link
          to="/coleccion"
          className={styles.back}
          onClick={(e) => go(e, '/coleccion')}
        >
          <ChevronLeft size={18} aria-hidden="true" />
          Volver a la colección
        </Link>
        {inJourney && (
          <Link
            to="/"
            state={{ focus: 'journey', index: (album.position ?? 1) - 1 }}
            className={styles.textLink}
            onClick={(e) => go(e, '/', { focus: 'journey', index: (album.position ?? 1) - 1 })}
          >
            <Disc3 size={16} aria-hidden="true" />
            Volver al recorrido
          </Link>
        )}
      </div>

      <div className={styles.layout}>
        <motion.div
          className={styles.coverCol}
          initial={reduce ? false : { x: -36, rotate: -3, opacity: 0 }}
          animate={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <AlbumCover album={album} eager className={styles.cover} />
        </motion.div>

        <div className={styles.info}>
          <p className={styles.kind}>{categoryLabel[album.category]}</p>
          <h1 className={styles.title}>{album.title}</h1>

          <dl className={styles.facts}>
            <div>
              <dt>Año</dt>
              <dd>{album.year}</dd>
            </div>
            {album.releaseDate && (
              <div>
                <dt>Publicación</dt>
                <dd>{album.releaseDate}</dd>
              </div>
            )}
            <div>
              <dt>Canciones</dt>
              <dd>{album.tracks.length > 0 ? album.tracks.length : 'Sin cargar'}</dd>
            </div>
            {inJourney && (
              <div>
                <dt>En la colección</dt>
                <dd>
                  Álbum {album.position} de {studioAlbums.length}
                </dd>
              </div>
            )}
          </dl>

          <p className={styles.description}>{album.description}</p>
        </div>

        <div className={styles.tracks}>
          <AlbumTracklist album={album} />
        </div>
      </div>

      <nav className={styles.pager} aria-label="Navegar entre discos">
        {prev ? (
          <Link
            to={`/disco/${prev.id}`}
            className={`${styles.pagerLink} ${styles.pagerPrev}`}
            onClick={(e) => go(e, `/disco/${prev.id}`)}
          >
            <ChevronLeft size={22} aria-hidden="true" />
            <span>
              <span className={styles.pagerHint}>Disco anterior</span>
              <span className={styles.pagerName}>{prev.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to={`/disco/${next.id}`}
            className={`${styles.pagerLink} ${styles.pagerNext}`}
            onClick={(e) => go(e, `/disco/${next.id}`)}
          >
            <span>
              <span className={styles.pagerHint}>Disco siguiente</span>
              <span className={styles.pagerName}>{next.title}</span>
            </span>
            <ChevronRight size={22} aria-hidden="true" />
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </motion.article>
  );
}
