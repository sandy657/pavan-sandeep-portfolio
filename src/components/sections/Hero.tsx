import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import { profile, resumeFile } from '../../data/portfolio';
import { AnimatedText } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/MagneticButton';
import { RotatingRoles } from '../ui/RotatingRoles';
import { HeroPortrait } from '../ui/HeroPortrait';

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-28 lg:py-0"
    >
      <div className="container-px grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
        {/* Portrait — first on mobile, right on desktop (nudged up) */}
        <div className="order-1 -mt-2 lg:order-2 lg:-mt-14">
          <HeroPortrait />
        </div>

        {/* Text content — left on desktop */}
        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="chip mb-6 gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new opportunities · {profile.location}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-lg font-medium text-muted"
          >
            Hello, I'm
          </motion.p>

          <h1 className="mt-1 font-display text-5xl font-bold leading-[1.05] text-strong sm:text-6xl lg:text-7xl">
            <AnimatedText
              text="Pavan Sandeep"
              className="justify-center text-gradient lg:justify-start"
            />
            <span className="mt-2 block">
              <AnimatedText
                text="Nidubrolu"
                delay={0.3}
                className="justify-center text-gradient lg:justify-start"
              />
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-5 flex items-center gap-2 font-display text-xl font-medium text-base sm:text-2xl"
          >
            <span className="text-faint">{'>'}</span>
            <RotatingRoles roles={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 max-w-xl text-base text-muted sm:text-lg lg:max-w-none lg:text-[0.95rem]"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <MagneticButton
              href="#projects"
              onClick={() => {}}
              className="rounded-full bg-gradient-to-r from-accent to-accent-glow px-7 py-3 font-semibold text-ink-900 shadow-glow"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              href={resumeFile}
              download
              className="rounded-full border border-line/20 bg-card/[0.04] px-7 py-3 font-semibold text-strong"
            >
              <HiOutlineDocumentArrowDown className="text-lg" />
              Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="hidden text-sm text-faint sm:inline">Find me on</span>
            {[
              { Icon: FaGithub, href: profile.socials[0].href },
              { Icon: FaLinkedinIn, href: profile.linkedin },
              { Icon: HiOutlineMail, href: `mailto:${profile.email}` },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                data-cursor="hover"
                className="grid h-11 w-11 place-items-center rounded-full border border-line/10 text-lg text-base transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-strong"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-faint lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <HiArrowDown className="text-2xl" />
      </motion.a>
    </section>
  );
}
