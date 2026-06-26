export interface NavLink {
  id: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'phone';
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  roles: string[];
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string[];
  socials: SocialLink[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export interface ProjectItem {
  name: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  title: string;
  summary: string;
  projects: ProjectItem[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  detail: string;
}

export interface Stat {
  value: string;
  label: string;
}
