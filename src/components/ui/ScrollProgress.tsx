import { motion, useScroll, useSpring } from 'framer-motion';

/** A thin gradient bar pinned to the top, filling as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left bg-gradient-to-r from-accent-soft via-accent to-accent-glow"
      style={{ scaleX }}
    />
  );
}
