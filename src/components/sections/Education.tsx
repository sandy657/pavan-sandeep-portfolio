import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi2';
import { education } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <SectionHeading index="05" title="Education" subtitle="My Foundation" />

        <div className="mt-14 grid gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard intensity={5}>
                <div className="glass flex flex-col gap-5 rounded-2xl p-7 shadow-card sm:flex-row sm:items-center">
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent-glow/20 text-3xl text-white">
                    <HiAcademicCap />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-xl font-bold text-white">
                        {edu.degree} — {edu.field}
                      </h3>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                        {edu.period}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-300">{edu.institution}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center">
                    <div className="font-display text-2xl font-bold text-gradient">
                      {edu.detail.split(':')[1]?.trim() ?? edu.detail}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-slate-500">
                      CGPA
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
