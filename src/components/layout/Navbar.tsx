import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import { useActiveSection } from '../../hooks/useActiveSection';
import { navLinks, profile, resumeFile } from '../../data/portfolio';
import { LogoMark } from '../ui/LogoMark';

const sectionIds = navLinks.map((l) => l.id);

export function Navbar() {
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="container-px mt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-5 py-3 shadow-card">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            data-cursor="hover"
            aria-label="Home"
            className="group flex items-center"
          >
            <LogoMark className="h-9 w-auto drop-shadow-[0_0_10px_rgba(124,92,255,0.4)] transition-transform duration-300 group-hover:scale-110" />
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    data-cursor="hover"
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      active ? 'text-strong' : 'text-muted hover:text-strong'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent/20 ring-1 ring-accent/40"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href={resumeFile}
              download
              data-cursor="hover"
              aria-label="Download résumé"
              className="hidden items-center gap-2 rounded-full border border-line/15 bg-card/[0.04] px-4 py-2 text-sm font-medium text-strong transition-colors hover:border-accent/50 sm:inline-flex"
            >
              <HiOutlineDocumentArrowDown className="text-base" />
              Résumé
            </a>

            <a
              href={`mailto:${profile.email}`}
              data-cursor="hover"
              className="hidden rounded-full bg-gradient-to-r from-accent to-accent-glow px-5 py-2 text-sm font-semibold text-ink-900 shadow-glow transition-transform hover:scale-105 lg:inline-flex"
            >
              Let's talk
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-2xl text-strong md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <HiX /> : <HiMenuAlt4 />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="glass mt-2 overflow-hidden rounded-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className={`block w-full px-6 py-3 text-left text-sm font-medium transition-colors ${
                      activeId === link.id
                        ? 'bg-accent/10 text-strong'
                        : 'text-base hover:bg-card/[0.05]'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={resumeFile}
                  download
                  className="flex items-center gap-2 px-6 py-3 text-sm font-medium text-accent-soft hover:bg-card/[0.05]"
                >
                  <HiOutlineDocumentArrowDown /> Download Résumé
                </a>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
