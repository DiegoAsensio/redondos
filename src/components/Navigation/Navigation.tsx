import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { albumCenter } from '../../hooks/useVinylScroll';
import { studioAlbums } from '../../data/albums';
import { scrollToJourneyProgress } from '../../utils/scrollToJourney';
import styles from './Navigation.module.css';

export function Navigation() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [inJourney, setInJourney] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setInJourney(y > window.innerHeight * 0.35);
  });

  const behavior: ScrollBehavior = reduce ? 'auto' : 'smooth';
  const onHome = pathname === '/';

  const goTop = (e: React.MouseEvent) => {
    if (!onHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior });
  };

  const goJourney = (e: React.MouseEvent) => {
    if (!onHome) return;
    e.preventDefault();
    scrollToJourneyProgress(albumCenter(0, studioAlbums.length), behavior);
  };

  const cls = (active: boolean) => `${styles.link} ${active ? styles.active : ''}`;

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.mark} onClick={goTop}>
        Patricio Rey
      </Link>
      <nav aria-label="Principal">
        <ul className={styles.list}>
          <li>
            <Link
              to="/"
              className={cls(onHome && !inJourney)}
              aria-current={onHome && !inJourney ? 'page' : undefined}
              onClick={goTop}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ focus: 'journey', index: 0 }}
              className={cls(onHome && inJourney)}
              aria-current={onHome && inJourney ? 'page' : undefined}
              onClick={goJourney}
            >
              Discografía
            </Link>
          </li>
          <li>
            <NavLink to="/coleccion" className={({ isActive }) => cls(isActive)}>
              Toda la colección
            </NavLink>
          </li>
          <li>
            <NavLink to="/banda" className={({ isActive }) => cls(isActive)}>
              La banda
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
