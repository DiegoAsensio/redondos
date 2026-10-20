import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import styles from './About.module.css';

interface Entry {
  when: string;
  text: string;
}

const TIMELINE: Entry[] = [
  { when: 'Mediados de los setenta', text: 'Se forma la banda en La Plata.' },
  {
    when: '26 de noviembre de 1977',
    text: 'Presentación documentada en el Teatro Lozano de La Plata.',
  },
  {
    when: '1985',
    text: 'Edición independiente de Gulp!, el primer álbum de estudio. Se presenta oficialmente el 23 de agosto en Cemento.',
  },
  { when: '1986', text: 'Oktubre. Se presenta en Paladium el 18 y el 25 de octubre.' },
  { when: '1988', text: 'Un baión para el ojo idiota, el primero con Sergio Dawi y Walter Sidotti.' },
  {
    when: '1989',
    text: '¡Bang! ¡Bang!... Estás liquidado, el primer disco grabado en Del Cielito Records.',
  },
  {
    when: 'Abril de 1991',
    text: 'Antes de un recital en el estadio Obras, la policía detiene a Walter Bulacio, que muere a causa de los golpes recibidos.',
  },
  { when: '1991', text: 'La mosca y la sopa, publicado el 27 de octubre.' },
  { when: '1992', text: 'En directo, el primer álbum en vivo, registrado en Obras Sanitarias.' },
  {
    when: '1993',
    text: 'Lobo suelto, cordero atado, el único álbum doble. Se presenta en el estadio de Huracán el 19 y el 20 de noviembre.',
  },
  { when: '1996', text: 'Luzbelito, un disco conceptual.' },
  {
    when: '1998',
    text: 'Último bondi a Finisterre, el primero grabado en Luzbola, el estudio de Indio Solari.',
  },
  { when: '2000', text: 'Momo Sampler, el último álbum de estudio.' },
  {
    when: '2001',
    text: 'Dos shows en el Estadio Centenario de Montevideo en abril. El último concierto es el 4 de agosto, en el estadio Chateau Carreras de Córdoba.',
  },
  { when: '5 de junio de 2026', text: 'Muere Indio Solari, a los 77 años.' },
];

export default function About() {
  useDocumentTitle('La banda. Los Redondos');

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <h1 className={styles.title}>La banda</h1>
        <div className={styles.intro}>
          <p>
            Patricio Rey y sus Redonditos de Ricota fue una banda argentina de rock formada en La
            Plata a mediados de los años setenta. Sus primeras presentaciones mezclaban canciones,
            teatro, poesía y danza.
          </p>
          <p>
            Patricio Rey no es un integrante real: es un personaje imaginario que representa el
            carácter colectivo del grupo. El núcleo creativo fue la dupla de Indio Solari, en la
            voz, y Skay Beilinson, en la guitarra.
          </p>
        </div>
      </header>

      <section aria-labelledby="cronologia">
        <h2 id="cronologia" className={styles.sectionTitle}>
          Cronología resumida
        </h2>
        <ol className={styles.timeline}>
          {TIMELINE.map((e) => (
            <li key={`${e.when}-${e.text.slice(0, 12)}`} className={styles.entry}>
              <span className={styles.when}>{e.when}</span>
              <span className={styles.what}>{e.text}</span>
            </li>
          ))}
        </ol>
      </section>

    </div>
  );
}
