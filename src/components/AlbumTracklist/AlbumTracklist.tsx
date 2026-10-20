import type { Album } from '../../types/album';
import styles from './AlbumTracklist.module.css';

export function AlbumTracklist({ album }: { album: Album }) {
  const { tracks } = album;

  return (
    <section className={styles.sleeve} aria-labelledby="tracklist-title">
      <header className={styles.head}>
        <h2 id="tracklist-title" className={styles.title}>
          Lista de temas
        </h2>
        <p className={styles.count}>
          {tracks.length === 1 ? '1 canción' : `${tracks.length} canciones`}
        </p>
      </header>

      {tracks.length === 0 ? (
        <p className={styles.empty}>La lista de temas todavía no está cargada.</p>
      ) : (
        <ol className={styles.list}>
          {tracks.map((track) => (
            <li key={track.trackNumber} className={styles.row}>
              <span className={styles.num}>{String(track.trackNumber).padStart(2, '0')}</span>
              <span className={styles.name}>{track.title}</span>
              {track.duration && (
                <>
                  <span className={styles.leader} aria-hidden="true" />
                  <span className={styles.time}>{track.duration}</span>
                </>
              )}
            </li>
          ))}
        </ol>
      )}

      {album.tracklistNote && <p className={styles.note}>{album.tracklistNote}</p>}
    </section>
  );
}
