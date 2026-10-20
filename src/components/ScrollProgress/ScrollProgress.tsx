import type { Album } from '../../types/album';
import styles from './ScrollProgress.module.css';

interface Props {
  albums: Album[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function ScrollProgress({ albums, activeIndex, onSelect }: Props) {
  const total = albums.length;
  const started = activeIndex >= 0;
  const remaining = total - 1 - activeIndex;

  return (
    <nav className={styles.root} aria-label="Progreso del recorrido">
      <p className={styles.status}>
        {started ? (
          <>
            <span className={styles.position}>
              <span className={styles.current}>{activeIndex + 1}</span> de {total}
            </span>
            <span className={styles.remaining}>
              {remaining === 0 ? 'Colección completa' : `Faltan ${remaining}`}
            </span>
          </>
        ) : (
          <span className={styles.remaining}>Inicio</span>
        )}
      </p>
      <ol className={styles.ticks}>
        {albums.map((album, i) => (
          <li key={album.id}>
            <button
              type="button"
              className={`${styles.tick} ${i === activeIndex ? styles.active : ''} ${
                i < activeIndex ? styles.done : ''
              }`}
              aria-label={`Ir a ${album.title}, ${album.year}`}
              aria-current={i === activeIndex ? 'step' : undefined}
              title={`${album.title} (${album.year})`}
              onClick={() => onSelect(i)}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
