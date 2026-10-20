import { Link, useNavigate } from 'react-router-dom';
import { type MotionValue, motion, useTransform } from 'framer-motion';
import { Disc3 } from 'lucide-react';
import { AlbumCover } from '../../components/AlbumCover/AlbumCover';
import { albumCenter, segmentSize } from '../../hooks/useVinylScroll';
import type { Album } from '../../types/album';
import styles from './Home.module.css';

interface Props {
  album: Album;
  index: number;
  count: number;
  progress: MotionValue<number>;
  active: boolean;
  narrow: boolean;
  reduced: boolean;
}

export function AlbumStop({ album, index, count, progress, active, narrow, reduced }: Props) {
  const navigate = useNavigate();
  const isLast = index === count - 1;
  const c = albumCenter(index, count);
  const s = segmentSize(count);

  const inStart = c - s * 0.44;
  const inEnd = c - s * 0.22;
  const outStart = c + s * 0.22;
  const outEnd = c + s * 0.44;

  const opacity = useTransform(
    progress,
    isLast ? [inStart, inEnd] : [inStart, inEnd, outStart, outEnd],
    isLast ? [0, 1] : [0, 1, 1, 0],
  );
  const visibility = useTransform(opacity, (o) => (o < 0.02 ? 'hidden' : 'visible'));

  const xWide = useTransform(progress, [inStart, inEnd], ['-42%', '0%']);
  const yWide = useTransform(
    progress,
    isLast ? [inStart, inEnd] : [outStart, outEnd],
    isLast ? ['0%', '0%'] : ['0%', '-7%'],
  );
  const rotateWide = useTransform(progress, [inStart, inEnd], [-5, 0]);

  const yNarrow = useTransform(
    progress,
    isLast ? [inStart, inEnd] : [inStart, inEnd, outStart, outEnd],
    isLast ? ['-24%', '0%'] : ['-24%', '0%', '0%', '-8%'],
  );

  const motionStyle = reduced
    ? undefined
    : narrow
      ? { y: yNarrow }
      : { x: xWide, y: yWide, rotate: rotateWide };

  const goToAlbum = () => navigate(`/disco/${album.id}`, { state: { from: 'journey' } });

  return (
    <motion.div className={styles.stop} style={{ opacity, visibility }} data-active={active}>
      <motion.div className={styles.stopInner} style={motionStyle}>
        <button
          type="button"
          className={styles.coverButton}
          onClick={goToAlbum}
          tabIndex={-1}
          aria-hidden="true"
        >
          <AlbumCover album={album} eager={index < 2} className={styles.stopCover} />
        </button>

        <div className={styles.stopText}>
          <p className={styles.stopCount}>
            Álbum {album.position} de {count}
          </p>
          <h2 className={styles.stopTitle}>{album.title}</h2>
          <p className={styles.stopYear}>{album.year}</p>
          <p className={styles.stopTagline}>{album.tagline}</p>
          <Link
            to={`/disco/${album.id}`}
            state={{ from: 'journey' }}
            className={styles.cta}
            tabIndex={active ? 0 : -1}
          >
            <Disc3 size={18} aria-hidden="true" />
            Explorar álbum
            <span className="visually-hidden">: {album.title}</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
