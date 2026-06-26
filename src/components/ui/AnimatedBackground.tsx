import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

/**
 * Fixed, full-page ambient background: a faint grid, three drifting gradient
 * blobs and a soft glow that follows the cursor. Sits behind all content.
 */
export function AnimatedBackground() {
  const { x, y } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,92,255,0.12),_transparent_55%)]" />

      {/* Faint grid */}
      <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      {/* Drifting blobs */}
      <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-[120px] animate-blob" />
      <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent-glow/15 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-accent-warm/10 blur-[120px] animate-blob [animation-delay:-12s]" />

      {/* Cursor-following glow */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
        animate={{ x: x - 144, y: y - 144 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />
    </div>
  );
}
