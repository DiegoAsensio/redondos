import { Link } from 'react-router-dom';
import { categoryLabel } from '../../data/albums';
import type { Album } from '../../types/album';
import { AlbumCover } from '../AlbumCover/AlbumCover';
import styles from './DiscographyGrid.module.css';

interface Props {
  albums: Album[];

  showCategory?: boolean;
  compact?: boolean;
}

export function DiscographyGrid({ albums, showCategory = false, compact = false }: Props) {
  return (
    <ul className={`${styles.grid} ${compact ? styles.compact : ''}`}>
      {albums.map((album) => (
        <li key={album.id}>
          <Link to={`/disco/${album.id}`} className={styles.card}>
            <AlbumCover album={album} className={styles.cover} />
            <span className={styles.meta}>
              <span className={styles.name}>{album.title}</span>
              <span className={styles.sub}>
                {album.year}
                {showCategory && `, ${categoryLabel[album.category].toLowerCase()}`}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
