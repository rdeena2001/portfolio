import { EngineeringPillar, PersonalInfoItem } from './About.interface';

export const ABOUT_SECTION_HEADER = {
  eyebrow: 'About Me',
  titleStart: 'Full Stack',
  titleHighlight: 'AI Engineer',
  subtitle:
    'Full Stack Developer with 4+ years of hands-on professional experience building robust, large-scale web and mobile applications across enterprise, R&D, and AI-integrated product ecosystems.',
};

export const ABOUT_BIO_PARAGRAPHS: string[] = [
  'I am R Deena, a Full Stack Developer with 4+ years of professional experience building large-scale web and mobile applications. I am currently an Associate at Cognizant in the Insurance R&D Delivery team, working with Java, React, Node.js, iOS Swift, and cloud services.',
  'My experience covers the software development lifecycle, MERN stack development, AWS and Azure architectures, and cross-platform applications. I have developed an AI insurance chatbot with Azure OpenAI, LangChain, LangGraph, Qdrant, FastAPI, and Streamlit using a RAG pipeline.',
  'My AI engineering work includes LLM integration, semantic and similarity search, document chunking, prompt engineering, and agent workflows, using tools including Windsurf, Claude, and Codex.',
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
      'Building RAG-based AI applications with Azure OpenAI, LangChain, LangGraph, vector databases, semantic search, and agent workflows.',
    iconName: 'cpu',
    tags: ['Azure OpenAI', 'LangChain', 'LangGraph', 'Qdrant', 'RAG'],
  },
];

export const PERSONAL_INFO_ITEMS: PersonalInfoItem[] = [
  { label: 'Name', value: 'R Deena' },
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
