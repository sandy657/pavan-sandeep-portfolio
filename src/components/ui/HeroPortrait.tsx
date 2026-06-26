import { motion } from 'framer-motion';
import { profileImage } from '../../data/portfolio';

/**
 * The hero portrait: a background-removed photo inside a circular violet/cyan
 * frame, with a soft outer glow, a faint static ring and a single glowing dot
 * orbiting the circle — styled to match the site's accent theme.
 */
export function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[16rem] sm:max-w-[18rem]"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-accent/40 via-accent-soft/20 to-accent-glow/40 blur-3xl" />

      {/* Faint static outer ring */}
      <div className="absolute -inset-4 rounded-full border border-accent/20" />

      {/* Single glowing dot orbiting the circle */}
      <motion.div
        aria-hidden
        className="absolute -inset-4 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-accent-glow shadow-glow" />
      </motion.div>

      {/* Gradient-bordered circle holding the photo */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-full bg-gradient-to-tr from-accent via-accent-soft to-accent-glow p-[3px] shadow-glow"
      >
        <div className="relative aspect-square overflow-hidden rounded-full bg-gradient-to-b from-accent/10 to-ink-900/40">
          {/* inner violet glow behind subject */}
          <div className="absolute inset-x-0 bottom-0 top-1/4 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,92,255,0.35),_transparent_70%)]" />
          <img
            src={profileImage}
            alt="Nidubrolu Pavan Sandeep"
            loading="eager"
            className="relative h-full w-full object-cover object-top drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          />
          {/* subtle bottom fade into the frame */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}
