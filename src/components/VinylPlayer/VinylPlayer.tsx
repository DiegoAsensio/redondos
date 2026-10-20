import { useId } from 'react';
import { type MotionValue, motion, useTransform } from 'framer-motion';
import styles from './VinylPlayer.module.css';

interface Props {

  rotation: MotionValue<number>;

  bands?: number;
}

const BAND_START = 27;
const BAND_END = 46.5;

export function VinylPlayer({ rotation, bands = 10 }: Props) {
  const arcId = useId();

  const sheenRotation = useTransform(rotation, (deg) => 28 + deg * 0.12);

  const radii = Array.from({ length: bands + 1 }, (_, i) =>
    BAND_START + ((BAND_END - BAND_START) * i) / bands,
  );

  return (
    <div className={styles.root} role="img" aria-label="Disco de vinilo que gira con el scroll">
      <div className={styles.shadow} />
      <motion.div className={styles.disc} style={{ rotate: rotation }}>
        <div className={styles.grooves} />
        <svg className={styles.bands} viewBox="0 0 100 100" aria-hidden="true">
          {radii.map((r) => (
            <g key={r}>
              <circle cx="50" cy="50" r={r} className={styles.bandDark} />
              <circle cx="50" cy="50" r={r + 0.45} className={styles.bandLight} />
            </g>
          ))}
        </svg>
        <svg className={styles.label} viewBox="0 0 200 200" aria-hidden="true">
          <defs>
            <path id={arcId} d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0" />
          </defs>
          <circle cx="100" cy="100" r="99" fill="#b8261d" />
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(232,222,198,.5)" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="46" fill="#e8dec6" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#1b1713" strokeWidth=".8" />
          <text className={styles.labelText}>
            <textPath href={`#${arcId}`} startOffset="0" textLength="424" lengthAdjust="spacing">
              PATRICIO REY Y SUS REDONDITOS DE RICOTA
            </textPath>
          </text>
          <circle cx="100" cy="100" r="5" fill="#15120f" />
        </svg>
      </motion.div>
      <motion.div className={styles.sheen} style={{ rotate: sheenRotation }} aria-hidden="true" />
      <div className={styles.rim} aria-hidden="true" />
    </div>
  );
}
