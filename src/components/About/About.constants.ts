import { EngineeringPillar, PersonalInfoItem } from './About.interface';

export const ABOUT_SECTION_HEADER = {
  eyebrow: 'About Me',
  titleStart: 'Full Stack',
  titleHighlight: 'AI Engineer',
  subtitle:
    'Full Stack Developer with 4+ years of hands-on professional experience building robust, large-scale web and mobile applications across enterprise, R&D, and AI-integrated product ecosystems.',
};

export const ABOUT_BIO_PARAGRAPHS: string[] = [
  'I am DEENA R, a Full Stack Developer currently working as an Associate at Cognizant within the Insurance R&D Delivery team. My work focuses on creating scalable web and mobile applications using Java, React, Node.js, and iOS Swift.',
  'My experience spans the full software development lifecycle, from architecture and implementation to cloud deployment and performance tuning. I specialize in MERN stack development, AWS and Azure architecture, and AI-integrated solutions including LLM model integration and RAG application development.',
  'I enjoy solving real-world business problems with a mix of clean engineering practices, cloud-native thinking, and AI-assisted development workflows using tools like Windsurf, Claude, and Codex.',
];

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    id: 'architecture',
    title: 'Full-Stack Product Engineering',
    description:
      'Developing enterprise applications that integrate frontend, backend, and mobile experiences across the complete product lifecycle.',
    iconName: 'layers',
    tags: ['React.js', 'Node.js', 'Java', 'Swift'],
  },
  {
    id: 'accessibility',
    title: 'Cloud Architecture & Scalability',
    description:
      'Designing and deploying resilient cloud solutions using AWS, Azure, Docker, and modern deployment practices for production readiness.',
    iconName: 'shield',
    tags: ['AWS', 'Azure', 'Docker', 'Kafka'],
  },
  {
    id: 'performance',
    title: 'Data & Workflow Optimization',
    description:
      'Building secure, efficient systems for CRM, insurance, and e-commerce use cases with strong backend logic and scalable data handling.',
    iconName: 'zap',
    tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'ai-workflow',
    title: 'AI-Augmented Development',
    description:
      'Integrating LLM models and RAG architectures to improve data retrieval, business insight generation, and product intelligence.',
    iconName: 'cpu',
    tags: ['Windsurf', 'Claude', 'Codex', 'LLM', 'RAG'],
  },
];

export const PERSONAL_INFO_ITEMS: PersonalInfoItem[] = [
  { label: 'Name', value: 'DEENA R' },
  { label: 'Current Role', value: 'Full Stack AI Engineer | Associate Software Engineer @ Cognizant' },
  { label: 'Location', value: 'Chennai, India' },
  {
    label: 'Email',
    value: 'rdeena549@gmail.com',
    href: 'mailto:rdeena549@gmail.com',
  },
  {
    label: 'Phone',
    value: '+91-9025282820',
    href: 'tel:+919025282820',
  },
  { label: 'Languages', value: 'English, Tamil' },
];
