import { ProjectCategoryOption, ProjectItem } from './Projects.interface';

export const PROJECTS_SECTION_HEADER = {
  eyebrow: 'Key Projects',
  titleStart: 'Enterprise Products &',
  titleHighlight: 'AI-Driven Solutions',
  subtitle:
    'Applications delivered across insurance, AI-powered document interaction, CRM, education, e-commerce, and logistics.',
};

export const PROJECT_CATEGORIES: ProjectCategoryOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise-saas', label: 'Enterprise & B2B SaaS' },
  { id: 'ai-fullstack', label: 'AI & Full-Stack Apps' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'health-insurance-rnd',
    title: 'Health & Insurance R&D Projects',
    subtitle: 'Web and Mobile Apps for Insurance & Healthcare Solutions',
    category: 'enterprise-saas',
    categoryLabel: 'Enterprise R&D',
    clientOrContext: 'Cognizant • Insurance R&D Delivery',
    description:
      'Built web and mobile (iOS/Android) applications for health and insurance, including a specialized Android app for Pepper Robot, with AWS cloud services and LLM-powered RAG applications.',
    modulesList: [
      'Health & Insurance Apps',
      'Pepper Robot Android App',
      'AWS Integration',
      'LLM + RAG',
      'Secure Cloud Delivery',
    ],
    highlights: [
      'Built robust web and mobile applications for insurance and healthcare use cases.',
      'Integrated AWS services including S3, Lambda, API Gateway, and EC2 for scalable cloud-based delivery.',
      'Developed AI-powered applications using LLMs and retrieval-augmented generation patterns for smarter information access.',
    ],
    technologies: ['React', 'Node.js', 'Java', 'iOS Swift', 'Android', 'AWS', 'LLM', 'RAG'],
    featured: true,
  },
  {
    id: 'ai-insurance-chatbot',
    title: 'AI Insurance Chatbot',
    subtitle: 'Natural Language Document Interaction with RAG',
    category: 'ai-fullstack',
    categoryLabel: 'AI & RAG Application',
    clientOrContext: 'Cognizant • Insurance R&D Delivery',
    description:
      'Developed an AI insurance chatbot for natural language interaction with documents using an Azure OpenAI and LangChain/LangGraph RAG pipeline, backed by Qdrant, FastAPI, and Streamlit.',
    highlights: [
      'Integrated Azure OpenAI GPT-4.1 and embeddings for document question answering.',
      'Used Qdrant vector search, document chunking, and semantic retrieval in the RAG pipeline.',
      'Built the application with FastAPI and Streamlit.',
    ],
    technologies: [
      'Azure OpenAI',
      'LangChain',
      'LangGraph',
      'RAG',
      'Qdrant',
      'FastAPI',
      'Streamlit',
    ],
    featured: true,
  },
  {
    id: 'crm-system',
    title: 'Customer Relationship Management',
    subtitle: 'React.js Frontend, Nest.js Backend, MongoDB',
    category: 'enterprise-saas',
    categoryLabel: 'CRM Platform',
    clientOrContext: 'Customer Relationship Management',
    description:
      'Built a CRM system with a React.js frontend, Nest.js backend, and MongoDB.',
    technologies: ['React.js', 'Nest.js', 'MongoDB', 'Socket.io', 'Firebase'],
    featured: true,
  },
  {
    id: 'indian-pistol',
    title: 'Indian Pistol Limited',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'ai-fullstack',
    categoryLabel: 'E-Commerce Platform',
    clientOrContext: 'Full-Stack Product Engineering',
    description:
      'Developed and maintained a full-stack e-commerce platform for Indian Pistol Limited using Node.js, MySQL, Azure, and Redis.',
    technologies: ['Node.js', 'MySQL', 'Azure', 'Redis'],
    featured: true,
  },
  {
    id: 'mindchamps',
    title: 'MindChamps Education',
    subtitle: 'Education Platform Built with Node.js, PostgreSQL, Firebase, Socket.IO',
    category: 'ai-fullstack',
    categoryLabel: 'Education Platform',
    clientOrContext: 'MindChamps',
    description:
      'MindChamps Education is an education platform built with Node.js, PostgreSQL, Firebase, and Socket.IO.',
    technologies: ['Node.js', 'PostgreSQL', 'Firebase', 'Socket.IO'],
    featured: true,
  },
  {
    id: 'waycool-2',
    title: 'Waycool 2.0',
    subtitle: 'E-Commerce Logistics Platform',
    category: 'enterprise-saas',
    categoryLabel: 'E-Commerce Logistics',
    clientOrContext: 'Waycool 2.0',
    description:
      'Waycool 2.0 is an e-commerce logistics platform built with Node.js, Redis, MongoDB, AWS, and Apache Kafka.',
    technologies: ['Node.js', 'Redis', 'MongoDB', 'AWS', 'Apache Kafka'],
    featured: true,
  },
];
