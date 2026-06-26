import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LogoMark } from './LogoMark';

const words = ['Pavan', 'Sandeep', 'Nidubrolu'];

interface PreloaderProps {
  onComplete: () => void;
}

/**
 * Full-screen intro that plays once on load: the NPS logo and name reveal
 * with a counting progress bar, then the whole panel slides up to unveil the
 * portfolio underneath.
 */
export function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1700;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.round(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // brief hold at 100% before the panel slides away
        setTimeout(onComplete, 450);
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
      {/* ambient glow */}
      <div className="absolute h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative mb-8"
      >
        <LogoMark className="h-16 w-auto drop-shadow-[0_0_20px_rgba(124,92,255,0.5)]" />
      </motion.div>

      {/* name */}
      <h1 className="relative flex flex-wrap justify-center gap-x-4 px-6 text-center font-display text-4xl font-bold leading-tight sm:text-6xl">
        {words.map((word, i) => (
          <span key={word} className="overflow-hidden pb-2">
            <motion.span
              className="inline-block text-gradient"
              initial={{ y: '120%' }}
              animate={{ y: '0%' }}
              transition={{
                delay: 0.25 + i * 0.14,
                type: 'spring',
                damping: 14,
                stiffness: 110,
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="relative mt-3 font-display text-xs uppercase tracking-[0.3em] text-muted sm:text-sm"
      >
        Frontend Developer · UI/UX · GenAI
      </motion.p>

      {/* progress */}
      <div className="relative mt-12 flex w-60 items-center gap-3 sm:w-72">
        <div className="h-px flex-1 overflow-hidden bg-white/10">
          <motion.div
            className="h-full bg-gradient-to-r from-accent to-accent-glow"
            initial={{ width: '0%' }}
            animate={{ width: `${count}%` }}
            transition={{ ease: 'linear', duration: 0.05 }}
          />
        </div>
        <span className="font-display text-sm tabular-nums text-muted">{count}%</span>
      </div>
    </motion.div>
  );
}
