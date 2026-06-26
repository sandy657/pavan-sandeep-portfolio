import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';
import { profile } from '../../data/portfolio';
import { AnimatedText } from '../ui/AnimatedText';
import { MagneticButton } from '../ui/MagneticButton';
import { Reveal } from '../ui/Reveal';

const contactRows = [
  { Icon: HiOutlineMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { Icon: HiOutlinePhone, label: 'Phone', value: profile.phone, href: 'tel:+919701597353' },
  { Icon: HiOutlineLocationMarker, label: 'Location', value: profile.location },
];

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <Reveal direction="none">
          <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center shadow-card sm:px-16">
            {/* glow */}
            <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

            <span className="relative font-display text-sm font-medium uppercase tracking-[0.3em] text-accent-soft/80">
              <span className="text-accent">06</span> — Get in touch
            </span>

            <h2 className="relative mt-4 font-display text-4xl font-bold text-strong sm:text-6xl">
              <AnimatedText text="Let's build something" className="justify-center" />
              <span className="mt-1 block">
                <AnimatedText text="great together." className="justify-center text-gradient" delay={0.2} />
              </span>
            </h2>

            <p className="relative mx-auto mt-6 max-w-lg text-muted">
              I'm currently open to new opportunities and collaborations. Whether you
              have a project in mind or just want to say hi, my inbox is always open.
            </p>

            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="rounded-full bg-gradient-to-r from-accent to-accent-glow px-8 py-3.5 font-semibold text-ink-900 shadow-glow"
              >
                <HiOutlineMail className="text-lg" />
                Say hello
              </MagneticButton>
              <MagneticButton
                href={profile.linkedin}
                className="rounded-full border border-line/20 bg-card/[0.04] px-8 py-3.5 font-semibold text-strong"
              >
                <FaLinkedinIn />
                Connect on LinkedIn
              </MagneticButton>
            </div>

            {/* Contact details */}
            <div className="relative mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              {contactRows.map(({ Icon, label, value, href }, i) => {
                const inner = (
                  <div className="glass flex h-full flex-col items-center gap-2 rounded-xl px-4 py-5 transition-colors hover:border-accent/40">
                    <Icon className="text-2xl text-accent-soft" />
                    <span className="text-xs uppercase tracking-wider text-faint">
                      {label}
                    </span>
                    <span className="break-all text-sm text-base">{value}</span>
                  </div>
                );
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {href ? (
                      <a href={href} data-cursor="hover" className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="relative mt-10 flex justify-center gap-4">
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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
