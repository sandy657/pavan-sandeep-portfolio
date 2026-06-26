import { motion } from 'framer-motion';
import { profileImage } from '../../data/portfolio';

const badges = [
  { label: 'React', className: '-left-4 top-10 sm:-left-8' },
  { label: 'TypeScript', className: '-right-4 top-1/3 sm:-right-10' },
  { label: 'GenAI', className: 'bottom-12 -left-2 sm:-left-6' },
];

/**
 * The hero portrait: a background-removed photo inside a violet/cyan oval
 * frame, wrapped by a rotating gradient ring, an outer glow and floating
 * tech badges — styled to match the site's accent theme.
 */
export function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative mx-auto w-full max-w-[20rem] sm:max-w-[22rem]"
    >
      {/* Outer ambient glow */}
      <div className="absolute -inset-6 rounded-[50%] bg-gradient-to-tr from-accent/40 via-accent-soft/20 to-accent-glow/40 blur-3xl" />

      {/* Rotating accent ring */}
      <motion.div
        aria-hidden
        className="absolute -inset-3 rounded-[50%] border-2 border-transparent"
        style={{
          borderTopColor: 'rgb(34 211 238)',
          borderRightColor: 'rgb(124 92 255)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />
      {/* Counter-rotating thinner ring */}
      <motion.div
        aria-hidden
        className="absolute -inset-1 rounded-[50%] border border-transparent"
        style={{ borderBottomColor: 'rgba(167,139,255,0.7)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />

      {/* Gradient-bordered oval holding the photo */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-[50%] bg-gradient-to-tr from-accent via-accent-soft to-accent-glow p-[3px] shadow-glow"
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-[50%] bg-gradient-to-b from-accent/10 to-ink-900/40">
          {/* inner violet glow behind subject */}
          <div className="absolute inset-x-0 bottom-0 top-1/4 bg-[radial-gradient(ellipse_at_bottom,_rgba(124,92,255,0.35),_transparent_70%)]" />
          <img
            src={profileImage}
            alt="Nidubrolu Pavan Sandeep"
            loading="eager"
            className="relative h-full w-full -scale-x-100 object-cover object-top drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
          />
          {/* subtle bottom fade into the frame */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/5 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </motion.div>

      {/* Floating tech badges */}
      {badges.map((b, i) => (
        <motion.span
          key={b.label}
          className={`absolute z-10 select-none rounded-full border border-line/15 bg-surface/70 px-3 py-1.5 font-display text-xs font-medium text-strong shadow-card backdrop-blur ${b.className}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: 0.8 + i * 0.2, duration: 0.5 },
            scale: { delay: 0.8 + i * 0.2, duration: 0.5 },
            y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {b.label}
        </motion.span>
      ))}
    </motion.div>
  );
}
