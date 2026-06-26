import { motion } from 'framer-motion';
import { HiArrowUpRight, HiCheckBadge } from 'react-icons/hi2';
import { experiences } from '../../data/portfolio';
import type { ProjectItem } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';

// Flatten all projects from every role into one showcase list.
const allProjects: ProjectItem[] = experiences.flatMap((e) => e.projects);

const gradients = [
  'from-violet-500/30 to-fuchsia-500/20',
  'from-cyan-500/30 to-blue-500/20',
  'from-emerald-500/30 to-teal-500/20',
  'from-amber-500/30 to-pink-500/20',
];

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <SectionHeading index="04" title="Featured Projects" subtitle="Things I've Built" />

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {allProjects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.6 }}
            >
              <TiltCard intensity={5} className="h-full">
                <article className="glass relative flex h-full flex-col overflow-hidden rounded-2xl shadow-card transition-colors duration-300 hover:border-accent/40">
                  {/* Decorative header band */}
                  <div
                    className={`relative h-32 overflow-hidden bg-gradient-to-br ${
                      gradients[i % gradients.length]
                    }`}
                  >
                    <div className="absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-40" />
                    <span className="absolute right-5 top-5 font-display text-6xl font-bold text-white/10">
                      0{i + 1}
                    </span>
                    <div className="absolute bottom-4 left-6">
                      <p className="font-display text-2xl font-bold text-white">
                        {project.name}
                      </p>
                      <p className="text-sm text-white/70">{project.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-soft">
                      <HiArrowUpRight /> {project.role}
                    </span>

                    <p className="text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {project.highlights.slice(0, 3).map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-slate-400">
                          <HiCheckBadge className="mt-0.5 shrink-0 text-accent-glow" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 pt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
