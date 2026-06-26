import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RotatingRolesProps {
  roles: string[];
  className?: string;
  interval?: number;
}

/** Cycles through a list of roles with a vertical flip transition. */
export function RotatingRoles({
  roles,
  className = '',
  interval = 2400,
}: RotatingRolesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      interval,
    );
    return () => clearInterval(id);
  }, [roles.length, interval]);

  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          className="text-shimmer whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
