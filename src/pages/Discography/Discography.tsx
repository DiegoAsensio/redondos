import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { DiscographyGrid } from '../../components/DiscographyGrid/DiscographyGrid';
import { albums, categoryFilterLabel } from '../../data/albums';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import type { AlbumCategory } from '../../types/album';
import styles from './Discography.module.css';

type Filter = 'todos' | AlbumCategory;

const FILTERS: Filter[] = ['todos', 'estudio', 'vivo'];

export default function Discography() {
  useDocumentTitle('Toda la discografía. Los Redondos');
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Filter>('todos');

  const count = (f: Filter) =>
    f === 'todos' ? albums.length : albums.filter((a) => a.category === f).length;
  const visible = filter === 'todos' ? albums : albums.filter((a) => a.category === filter);

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <h1 className={styles.title}>Toda la discografía</h1>
        <p className={styles.lead}>
          Los lanzamientos en orden cronológico. Cada tapa abre la ficha del disco, con su lista de
          temas.
        </p>

        <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`${styles.chip} ${filter === f ? styles.chipOn : ''}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f === 'todos' ? 'Todo' : categoryFilterLabel[f]}
              <span className={styles.chipCount}>{count(f)}</span>
            </button>
          ))}
        </div>
      </header>

      <motion.div
        key={filter}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <DiscographyGrid albums={visible} showCategory />
      </motion.div>
    </div>
  );
}
