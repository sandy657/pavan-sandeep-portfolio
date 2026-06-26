import type {
  EducationItem,
  ExperienceItem,
  NavLink,
  Profile,
  SkillGroup,
  Stat,
} from '../types';

/** Résumé PDF served from /public — used by the download buttons.
 *  BASE_URL keeps the link correct whether hosted at root or a sub-path. */
export const resumeFile = `${import.meta.env.BASE_URL}Nidubrolu_Pavan_Sandeep_Resume.pdf`;

/** Background-removed hero portrait served from /public. */
export const profileImage = `${import.meta.env.BASE_URL}profile.png`;

export const navLinks: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const profile: Profile = {
  name: 'Nidubrolu Pavan Sandeep',
  firstName: 'Pavan',
  lastName: 'Sandeep',
  roles: [
    'Frontend Developer',
    'UI/UX Designer',
    'GenAI Engineer',
    'Prompt Engineer',
  ],
  tagline:
    'I build responsive, animated and intelligent web experiences with React, TypeScript & AI.',
  location: 'Chennai, India',
  phone: '+91 97015 97353',
  email: 'sandeepnidubrolu@gmail.com',
  linkedin:
    'https://www.linkedin.com/in/pavan-sandeep-nidubrolu-87b002247/',
  summary: [
    'Front-End Developer with hands-on experience in React.js, TypeScript, JavaScript, Redux Toolkit, React Router, Vite, HTML, CSS and Tailwind CSS. Skilled in building responsive web applications, reusable component architectures, API integration, state management, authentication systems and enterprise-grade user interfaces.',
    'Experienced in collaborating with cross-functional teams to develop scalable solutions and improve application performance. Passionate about modern frontend development, user experience and writing clean, maintainable code.',
    'GenAI and Prompt Engineering professional with experience in prompt design, dataset management and Natural Language Processing (NLP) — focused on building AI-driven solutions and optimizing model performance.',
  ],
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pavan-sandeep-nidubrolu-87b002247/',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      href: 'mailto:sandeepnidubrolu@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Phone',
      href: 'tel:+919701597353',
      icon: 'phone',
    },
  ],
};

export const stats: Stat[] = [
  { value: '2+', label: 'Years of Experience' },
  { value: '4', label: 'Major Products Shipped' },
  { value: '8.73', label: 'CGPA / 10' },
  { value: '15+', label: 'Technologies' },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    skills: [
      'React.js',
      'Next.js',
      'React Router',
      'Redux Toolkit',
      'React Flow',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'AI / ML',
    icon: 'sparkles',
    skills: [
      'Gen AI',
      'Prompt Engineering',
      'LangChain',
      'LLM Models',
      'OpenCV',
      'YOLO',
      'Machine Learning',
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    skills: ['MySQL', 'Supabase'],
  },
  {
    category: 'Tools & DevOps',
    icon: 'tools',
    skills: [
      'Git',
      'GitHub Actions',
      'Bitbucket',
      'SonarQube',
      'JIRA',
      'Postman',
      'Figma',
      'VS Code',
      'Cursor',
    ],
  },
  {
    category: 'AI Assistants',
    icon: 'bot',
    skills: ['ChatGPT', 'Claude AI', 'DeepSeek'],
  },
  {
    category: 'Other',
    icon: 'check',
    skills: [
      'Code Review',
      'Software Testing',
      'Progressive Web Apps',
      'Performance Optimization',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: 'BitCot Technologies Pvt Ltd',
    location: 'Chennai, India',
    period: 'Jan 2025 – Jan 2026',
    title: 'Front-End Developer / UI/UX',
    summary:
      'Built and shipped enterprise-grade web platforms across healthcare, facility management and fleet tracking domains.',
    projects: [
      {
        name: 'Medical Image Transfer',
        subtitle: 'LSR – Light Source Research',
        role: 'Front-End Developer',
        description:
          'A web-based medical imaging platform for analyzing and visualizing spine-related diagnostic data using DICOM medical images.',
        highlights: [
          'Developed a Next.js-based medical imaging platform for viewing and analyzing spine-related DICOM images.',
          'Integrated and customized Cornerstone.js to render and interact with medical images directly in the browser.',
          'Implemented imaging tools such as zoom, pan, measurements, annotations and window-level adjustments for X-Ray, CT and MRI analysis.',
          'Utilized Redux for centralized state management and efficient handling of viewer and image data.',
          'Integrated a 3D DICOM Viewer to enhance visualization of anatomical structures and diagnostic workflows.',
          'Built reusable React components and optimized performance for large medical imaging datasets.',
        ],
        technologies: [
          'Next.js',
          'React',
          'Redux',
          'JavaScript',
          'Cornerstone.js',
          'DICOM',
          '3D DICOM Viewer',
          'REST APIs',
        ],
      },
      {
        name: 'PegDesk',
        subtitle: 'Shaping the Future',
        role: 'Front-End Developer',
        description:
          'A React.js-based platform for managing commercial cleaning and facility maintenance operations.',
        highlights: [
          'Worked on a class-based React architecture — feature development, bug fixes and maintenance of legacy code.',
          'Built and improved interfaces for service request management, workforce scheduling and client communication workflows.',
          'Developed reusable UI components and optimized application performance to improve user experience.',
          'Collaborated with cross-functional teams to implement business requirements and deliver platform enhancements.',
        ],
        technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'Redux'],
      },
      {
        name: 'TrackPro',
        subtitle: 'Fleet Management & GPS Tracking System',
        role: 'Front-End Developer & UI/UX Design',
        description:
          'A real-time fleet management and GPS tracking platform for monitoring vehicle locations, status and operational data.',
        highlights: [
          'Built real-time dashboards to monitor vehicle location, status, speed, mileage, fuel levels and trip data.',
          'Developed modules for vehicle and driver information, tracking operational metrics and fleet activity.',
          'Used React.js, TypeScript and Redux to build scalable and responsive user interfaces.',
          'Created reusable components and optimized state management across tracking and reporting features.',
          'Enhanced UX with GSAP and Framer Motion animations and responsive Bootstrap-based layouts.',
        ],
        technologies: [
          'React.js',
          'TypeScript',
          'Redux',
          'GSAP',
          'Framer Motion',
          'Bootstrap',
          'REST APIs',
        ],
      },
    ],
  },
  {
    company: 'Photon Interactive Pvt Ltd',
    location: 'Chennai, India',
    period: 'Mar 2024 – Dec 2024',
    title: 'Prompt Engineer / GenAI Developer (Apprentice)',
    summary:
      'Designed prompts and computer-vision pipelines for an intelligent, automated interview assessment system.',
    projects: [
      {
        name: 'AI Interviewer',
        subtitle: 'Automated Interview Assessment System',
        role: 'Prompt Engineer / GenAI Developer',
        description:
          'An intelligent automated interview assessment system combining computer vision with AI analysis.',
        highlights: [
          'Designed and optimized prompts to improve the accuracy and relevance of AI-generated responses.',
          'Collaborated with developers to integrate AI-powered features into applications and internal tools.',
          'Implemented real-time eye tracking and gaze estimation using OpenCV, MediaPipe and YOLO.',
          'Improved model efficiency and user experience through testing, debugging and iterative enhancements.',
          'Evaluated AI model outputs and refined prompts to enhance response quality and consistency.',
        ],
        technologies: [
          'Python',
          'OpenCV',
          'MediaPipe',
          'YOLOv5',
          'Computer Vision',
          'Prompt Engineering',
          'Generative AI',
          'NLP',
          'LLMs',
          'Deep Learning',
        ],
      },
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Engineering',
    field: 'Computer Science Engineering',
    institution: 'Sathyabama Institute of Science and Technology, Chennai',
    period: '2020 – 2024',
    detail: 'CGPA: 8.73 / 10',
  },
];
