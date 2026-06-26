import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiLocationMarker } from 'react-icons/hi';
import { experiences } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 60%', 'end 60%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <SectionHeading index="03" title="Work Experience" subtitle="My Journey" />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-12">
          {/* Timeline rail */}
          <div className="absolute left-[7px] top-2 h-full w-px bg-white/10 sm:left-[15px]" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[7px] top-2 h-full w-px origin-top bg-gradient-to-b from-accent via-accent-glow to-transparent sm:left-[15px]"
          />

          <div className="space-y-16">
            {experiences.map((exp, ei) => (
              <div key={exp.company} className="relative">
                {/* Node */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                  className="absolute -left-8 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-accent shadow-glow ring-4 ring-ink-900 sm:-left-12"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                </motion.span>

                <Reveal>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-accent-soft">
                      <HiBriefcase /> {exp.title}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <HiLocationMarker /> {exp.location}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl text-slate-300">{exp.summary}</p>
                </Reveal>

                {/* Projects within the role */}
                <div className="mt-6 grid gap-4">
                  {exp.projects.map((project, pi) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-8% 0px' }}
                      transition={{ delay: pi * 0.1, duration: 0.5 }}
                      className="glass rounded-2xl p-5 shadow-card transition-colors hover:border-accent/30"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="font-display text-lg font-semibold text-white">
                          {project.name}{' '}
                          <span className="text-sm font-normal text-accent-soft">
                            — {project.subtitle}
                          </span>
                        </h4>
                        <span className="text-xs text-slate-500">{project.role}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-400">{project.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {ei < experiences.length - 1 && <div className="h-2" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
