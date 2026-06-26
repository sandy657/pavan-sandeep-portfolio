import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import { profile, resumeFile } from '../../data/portfolio';
import { AnimatedText } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/MagneticButton';
import { RotatingRoles } from '../ui/RotatingRoles';

const floaters = [
  { label: 'React', className: 'left-[6%] top-[26%]', delay: 0 },
  { label: 'TypeScript', className: 'right-[8%] top-[20%]', delay: 0.4 },
  { label: 'Next.js', className: 'left-[14%] bottom-[20%]', delay: 0.8 },
  { label: 'GenAI', className: 'right-[12%] bottom-[24%]', delay: 1.2 },
  { label: 'Framer Motion', className: 'right-[26%] top-[40%]', delay: 1.6 },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-28"
    >
      {/* Floating tech badges (desktop only) */}
      {floaters.map((f) => (
        <motion.span
          key={f.label}
          className={`pointer-events-none absolute hidden select-none rounded-full border border-line/10 bg-card/[0.04] px-4 py-1.5 font-display text-sm text-base backdrop-blur lg:block ${f.className}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, y: [0, -14, 0] }}
          transition={{
            opacity: { delay: 1 + f.delay, duration: 0.6 },
            scale: { delay: 1 + f.delay, duration: 0.6 },
            y: { duration: 5 + f.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {f.label}
        </motion.span>
      ))}

      <div className="container-px flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="chip mb-8 gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for new opportunities · {profile.location}
        </motion.div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] text-strong sm:text-7xl lg:text-8xl">
          <AnimatedText text="Nidubrolu Pavan" className="justify-center" />
          <span className="mt-2 block">
            <AnimatedText
              text="Sandeep"
              delay={0.3}
              className="justify-center text-gradient"
            />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-6 flex items-center gap-2 font-display text-xl font-medium text-base sm:text-2xl"
        >
          <span className="text-faint">{'>'}</span>
          <RotatingRoles roles={profile.roles} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-6 max-w-xl text-balance text-base text-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            onClick={() => {}}
            className="rounded-full bg-gradient-to-r from-accent to-accent-glow px-7 py-3 font-semibold text-ink-900 shadow-glow"
          >
            View My Work
          </MagneticButton>
          <MagneticButton
            href={`mailto:${profile.email}`}
            className="rounded-full border border-line/20 bg-card/[0.04] px-7 py-3 font-semibold text-strong"
          >
            <HiOutlineMail className="text-lg" />
            Get in touch
          </MagneticButton>
          <MagneticButton
            href={resumeFile}
            download
            className="rounded-full border border-line/20 bg-card/[0.04] px-7 py-3 font-semibold text-strong"
          >
            <HiOutlineDocumentArrowDown className="text-lg" />
            Résumé
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-8 flex gap-4"
        >
          {[
            { Icon: FaGithub, href: profile.socials[0].href },
            { Icon: FaLinkedinIn, href: profile.linkedin },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="grid h-11 w-11 place-items-center rounded-full border border-line/10 text-lg text-base transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-strong"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <HiArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
