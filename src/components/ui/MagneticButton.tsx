import { motion, useMotionValue, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** How strongly the element follows the cursor (px range). */
  strength?: number;
  download?: boolean;
}

/**
 * A button/link that is magnetically attracted to the cursor while hovered.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  strength = 18,
  download,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      download={download}
      data-cursor="hover"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-flex cursor-pointer items-center justify-center gap-2 ${className}`}
    >
      {children}
    </motion.a>
  );
}
