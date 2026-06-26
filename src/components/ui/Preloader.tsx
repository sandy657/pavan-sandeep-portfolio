import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const words = ['NIDUBROLU', 'PAVAN', 'SANDEEP'];

interface PreloaderProps {
  onComplete: () => void;
}

/**
 * Full-screen intro: the name reveals word-by-word while a counter and a
 * bottom progress bar fill from 0–100%, then the whole panel slides up to
 * unveil the portfolio.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out so it slows near the end
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
      {/* ambient glow + grid */}
      <div className="absolute h-80 w-80 rounded-full bg-accent/20 blur-[130px]" />
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Name — word-by-word reveal */}
      <h1 className="relative flex flex-wrap items-center justify-center gap-x-5 px-6 text-center font-display text-3xl font-bold uppercase tracking-tight sm:text-6xl">
        {words.map((word, i) => (
          <span key={word} className="overflow-hidden pb-2">
            <motion.span
              className="inline-block text-gradient"
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              transition={{
                delay: 0.2 + i * 0.16,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="relative mt-4 font-display text-xs uppercase tracking-[0.4em] text-muted sm:text-sm"
      >
        Frontend Developer · UI/UX · GenAI
      </motion.p>

      {/* Big counter, bottom-right */}
      <div className="pointer-events-none absolute bottom-6 right-6 font-display text-5xl font-bold tabular-nums text-strong/90 sm:bottom-10 sm:right-12 sm:text-7xl">
        {count}
        <span className="text-accent">%</span>
      </div>

      {/* Loading label, bottom-left */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-9 left-6 font-display text-xs uppercase tracking-[0.3em] text-muted sm:bottom-14 sm:left-12"
      >
        Loading
      </motion.span>

      {/* Full-width progress bar pinned to the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-soft via-accent to-accent-glow"
          initial={{ width: '0%' }}
          animate={{ width: `${count}%` }}
          transition={{ ease: 'linear', duration: 0.05 }}
        />
      </div>
    </motion.div>
  );
}
