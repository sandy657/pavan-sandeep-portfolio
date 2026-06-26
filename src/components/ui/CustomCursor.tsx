import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * A two-layer custom cursor: a small solid dot that tracks instantly and a
 * larger ring that lags behind with spring physics and grows on hover targets.
 * Disabled automatically on touch / coarse-pointer devices.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 28, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor-active');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        Boolean(
          target.closest('a, button, [data-cursor="hover"]'),
        ),
      );
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-glow"
        style={{ x, y }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          backgroundColor: hovering
            ? 'rgba(124,92,255,0.12)'
            : 'rgba(124,92,255,0)',
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      />
    </>
  );
}
