import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('No encontrado. Los Redondos');
  return (
    <div style={{ padding: 'calc(var(--nav-h) + 4rem) var(--gutter) 4rem', maxWidth: '40rem' }}>
      <h1 style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)', marginBottom: '1rem' }}>
        Ese disco no está en la colección
      </h1>
      <p style={{ marginBottom: '1.5rem', color: 'var(--paper-dim)' }}>
        La dirección no corresponde a ninguna página ni a ningún álbum cargado.
      </p>
      <Link to="/coleccion" style={{ textUnderlineOffset: '3px' }}>
        Ver toda la discografía
      </Link>
    </div>
  );
}
