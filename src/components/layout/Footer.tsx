import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import type { IconType } from 'react-icons';
import { navLinks, profile } from '../../data/portfolio';
import type { SocialLink } from '../../types';

const iconMap: Record<SocialLink['icon'], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  mail: HiOutlineMail,
  phone: HiOutlinePhone,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="container-px flex flex-col items-center gap-8">
        <button
          onClick={() =>
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="font-display text-2xl font-bold text-white"
        >
          <span className="text-gradient">{profile.firstName}</span> {profile.lastName}
        </button>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() =>
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })
                }
                className="text-sm text-slate-400 transition-colors hover:text-accent-soft"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {profile.socials.map((social) => {
            const Icon = iconMap[social.icon];
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.icon === 'github' || social.icon === 'linkedin' ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={social.label}
                data-cursor="hover"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-lg text-slate-300 transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-white hover:shadow-glow"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <p className="text-center text-sm text-slate-500">
          © {year} {profile.name}. Designed & built with React, TypeScript & Framer Motion.
        </p>
      </div>
    </footer>
  );
}
