import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  HiCode,
  HiTemplate,
  HiSparkles,
  HiDatabase,
  HiCog,
  HiChip,
  HiCheckCircle,
} from 'react-icons/hi';
import { skillGroups } from '../../data/portfolio';
import { SectionHeading } from '../ui/SectionHeading';
import { TiltCard } from '../ui/TiltCard';

const iconMap: Record<string, IconType> = {
  code: HiCode,
  layout: HiTemplate,
  sparkles: HiSparkles,
  database: HiDatabase,
  tools: HiCog,
  bot: HiChip,
  check: HiCheckCircle,
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-28">
      <div className="container-px">
        <SectionHeading index="02" title="Technical Skills" subtitle="What I Use" />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = iconMap[group.icon] ?? HiCode;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ delay: gi * 0.08, duration: 0.6 }}
              >
                <TiltCard className="h-full">
                  <div className="glass flex h-full flex-col gap-4 rounded-2xl p-6 shadow-card transition-colors duration-300 hover:border-accent/40">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/30 to-accent-glow/20 text-xl text-white">
                        <Icon />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {group.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, si) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: gi * 0.08 + si * 0.04 }}
                          className="chip"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
