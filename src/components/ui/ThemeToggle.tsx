import { AnimatePresence, motion } from 'framer-motion';
import { HiMoon, HiSun } from 'react-icons/hi2';
import { useTheme } from '../../context/ThemeContext';

/** Animated dark/light switch with a sun/moon crossfade. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      data-cursor="hover"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-line/15 bg-card/[0.04] text-lg text-strong transition-colors hover:border-accent/50"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.3 }}
          className="absolute"
        >
          {isDark ? (
            <HiMoon className="text-accent-soft" />
          ) : (
            <HiSun className="text-amber-400" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
