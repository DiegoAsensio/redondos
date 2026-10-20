import { type RefObject, useState } from 'react';
import {
  type MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export const INTRO = 0.08;
export const OUTRO = 0.04;
export const TURNS_PER_ALBUM = 0.7;

export const segmentSize = (count: number) => (1 - INTRO - OUTRO) / count;
export const albumCenter = (index: number, count: number) =>
  INTRO + (index + 0.5) * segmentSize(count);

export function indexAt(progress: number, count: number): number {
  if (progress < INTRO * 0.75) return -1;
  const raw = Math.floor((progress - INTRO) / segmentSize(count));
  return Math.min(count - 1, Math.max(0, raw));
}

interface VinylScroll {
  progress: MotionValue<number>;
  rotation: MotionValue<number>;
  activeIndex: number;
}

export function useVinylScroll(
  target: RefObject<HTMLElement>,
  count: number,
  reducedMotion: boolean,
): VinylScroll {
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end end'],
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0004,
  });
  const progress = reducedMotion ? scrollYProgress : spring;

  const totalDegrees = count * TURNS_PER_ALBUM * 360;
  const rotation = useTransform(progress, [0, 1], [0, reducedMotion ? 0 : totalDegrees]);

  const [activeIndex, setActiveIndex] = useState(() => indexAt(progress.get(), count));
  useMotionValueEvent(progress, 'change', (value) => {
    setActiveIndex((prev) => {
      const next = indexAt(value, count);
      return prev === next ? prev : next;
    });
  });

  return { progress, rotation, activeIndex };
}
