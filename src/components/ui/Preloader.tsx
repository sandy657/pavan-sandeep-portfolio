import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['NIDUBROLU', 'PAVAN', 'SANDEEP'];

// Flatten to letters with a running index so each letter can stagger.
let letterIndex = 0;
const lines = words.map((word) =>
  word.split('').map((char) => ({ char, i: letterIndex++ })),
);

interface PreloaderProps {
  onComplete: () => void;
}

/**
 * Intro screen: a "PORTFOLIO" label, the name revealing letter-by-letter in
 * white, and a thin gradient line that fills from 0–100% — then the whole
 * panel slides up to reveal the portfolio.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-ink-900"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* PORTFOLIO label */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 font-display text-xs font-semibold uppercase tracking-[0.5em] text-accent-glow sm:text-sm"
      >
        Portfolio
      </motion.span>

      {/* Name — letter-by-letter reveal */}
      <h1 className="flex flex-wrap items-center justify-center gap-x-5 px-6 text-center font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-7xl">
        {lines.map((word, wi) => (
          <span key={wi} className="flex overflow-hidden pb-2">
            {word.map(({ char, i }) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{
                  delay: 0.25 + i * 0.04,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      {/* Thin gradient loading line */}
      <div className="mt-8 h-[2px] w-[440px] max-w-[78vw] overflow-hidden">
        <motion.div
          className="h-full w-full origin-center rounded-full bg-gradient-to-r from-accent via-accent-soft to-accent-glow"
          style={{ scaleX: count / 100 }}
        />
      </div>
    </motion.div>
  );
}
