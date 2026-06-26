import { motion } from 'framer-motion';
import { profile, stats } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <SectionHeading index="01" title="About Me" subtitle="Who I Am" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Summary */}
          <div className="space-y-5">
            {profile.summary.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className="text-lg leading-relaxed text-base">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3 pt-2">
                {['React.js', 'TypeScript', 'Next.js', 'Redux', 'Tailwind', 'GenAI', 'Prompt Engineering'].map(
                  (tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  delay: i * 0.1,
                  type: 'spring',
                  stiffness: 120,
                  damping: 14,
                }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-6 shadow-card"
              >
                <div className="font-display text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
