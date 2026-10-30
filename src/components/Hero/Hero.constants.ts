import resumePdf from '../../assets/Deena_R_Fullstack_AI_Engineer.pdf';
import {
  HeroFloatingBadge,
  HeroSocialLink,
  HeroStatItem,
} from './Hero.interface';

export const HERO_CONTENT = {
  availabilityText: 'Full Stack AI Engineer • Associate Software Engineer',
  greeting: "Hello, I'm",
  fullName: 'R Deena',
  primaryTitle: 'Full Stack AI Engineer | Associate Software Engineer',
  location: 'Chennai, India',
  email: 'rdeena549@gmail.com',
  phone: '+91-9025282820',
  summary:
    'Full Stack Developer with 4+ years of hands-on professional experience building robust, large-scale web and mobile applications. Currently an Associate at Cognizant within the Insurance R&D Delivery team, specializing in developing AI-integrated solutions, cloud architectures, and cross-platform applications. Proficient in the complete software development lifecycle (SDLC), utilizing the MERN stack, Java, iOS Swift, and modern cloud services (AWS, Azure). Experienced in building RAG applications and integrating LLM models to drive innovation in collaborative Agile environments.',
  resumeUrl: resumePdf,
};

export const HERO_ANIMATED_ROLES: string[] = [
  'Full Stack AI Engineer',
  'Associate Software Engineer',
  'MERN Stack Developer',
  'AWS & Azure Cloud Engineer',
  'LLM & RAG Specialist',
];

export const HERO_SOCIAL_LINKS: HeroSocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/deena-r-154443217',
    iconName: 'linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    url: '#',
    iconName: 'github',
  },
  {
    id: 'email',
    label: 'rdeena549@gmail.com',
    url: 'mailto:rdeena549@gmail.com',
    iconName: 'mail',
  },
];

export const HERO_FLOATING_BADGES: HeroFloatingBadge[] = [
  {
    id: 'exp-badge',
    title: '4+ Years',
    subtitle: 'Full Stack Development',
    position: 'top-left',
  },
  {
    id: 'saas-badge',
    title: 'AWS / Azure',
    subtitle: 'Cloud Architectures',
    position: 'bottom-left',
  },
  {
    id: 'wcag-badge',
    title: 'LLM + RAG',
    subtitle: 'AI Integration',
    position: 'bottom-right',
  },
];

export const HERO_STATS: HeroStatItem[] = [
  {
    id: 'years',
    value: '4+',
    label: 'Years Experience',
    detail: 'Web, Mobile & Cloud',
  },
  {
    id: 'modules',
    value: '4',
    label: 'Career Stages',
    detail: 'From Junior to Associate',
  },
  {
    id: 'perf',
    value: 'SDLC',
    label: 'End-to-End Delivery',
    detail: 'Design to deployment',
  },
  {
    id: 'a11y',
    value: 'AI',
    label: 'RAG & LLM',
    detail: 'Intelligent product solutions',
  },
];
