import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Navigation } from './components/Navigation/Navigation';

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Navigation />
      <main id="contenido">
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
