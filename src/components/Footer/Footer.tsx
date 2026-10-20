import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Proyecto de fans, sin fines comerciales. Las tapas y los discos pertenecen a sus
        titulares. Los datos provienen de fuentes públicas que se citan en cada ficha.
      </p>
    </footer>
  );
}
