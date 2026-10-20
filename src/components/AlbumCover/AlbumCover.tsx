import { useState } from 'react';
import { coverUrl } from '../../data/albums';
import type { Album } from '../../types/album';
import styles from './AlbumCover.module.css';

interface Props {
  album: Album;
  eager?: boolean;
  className?: string;
}

const missing = new Set<string>();

export function AlbumCover({ album, eager = false, className }: Props) {
  const src = coverUrl(album);
  const [broken, setBroken] = useState(() => missing.has(src));
  const classes = [styles.frame, className].filter(Boolean).join(' ');

  if (broken) {
    return (
      <div
        className={`${classes} ${styles.placeholder}`}
        role="img"
        aria-label={`Marcador de lugar para la tapa de «${album.title}», ${album.year}. La tapa original todavía no está cargada.`}
      >
        <div className={styles.phInner}>
          <span className={styles.phNote}>Tapa pendiente</span>
          <span className={styles.phTitle}>{album.title}</span>
          <span className={styles.phYear}>{album.year}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={classes}>
      <img
        src={src}
        width={800}
        height={800}
        alt={`Tapa del disco «${album.title}» (${album.year}) de Patricio Rey y sus Redonditos de Ricota`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => {
          missing.add(src);
          setBroken(true);
        }}
      />
    </div>
  );
}
