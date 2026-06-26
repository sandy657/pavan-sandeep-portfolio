import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Delay before the whole line starts animating (seconds). */
  delay?: number;
  /** Stagger between words (seconds). */
  stagger?: number;
  once?: boolean;
}

const container: Variants = {
  hidden: {},
  visible: (custom: { delay: number; stagger: number }) => ({
    transition: {
      delayChildren: custom.delay,
      staggerChildren: custom.stagger,
    },
  }),
};

const word: Variants = {
  hidden: { y: '120%', opacity: 0, rotateX: -40 },
  visible: {
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: { type: 'spring', damping: 14, stiffness: 110 },
  },
};

/**
 * Reveals a string word-by-word with a spring "slide up" effect.
 * Each word lives in an overflow-hidden mask so it appears to roll into view.
 */
export function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.06,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      custom={{ delay, stagger }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-10% 0px' }}
      style={{ perspective: 600 }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="mr-[0.25em] inline-block overflow-hidden py-[0.05em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
