import { ProjectCategoryOption, ProjectItem } from './Projects.interface';

export const PROJECTS_SECTION_HEADER = {
  eyebrow: 'Key Projects',
  titleStart: 'Enterprise Products &',
  titleHighlight: 'AI-Driven Solutions',
  subtitle:
    'Applications delivered across insurance, CRM, education, e-commerce, and logistics with a focus on scalable architecture, real-time workflows, and AI-enhanced product experiences.',
};

export const PROJECT_CATEGORIES: ProjectCategoryOption[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'enterprise-saas', label: 'Enterprise & B2B SaaS' },
  { id: 'ai-fullstack', label: 'AI & Full-Stack Apps' },
  { id: 'ui-templates', label: 'UI Concepts' },
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
      'Built robust web and mobile (iOS/Android) applications, including a specialized Android app for Pepper Robot, integrating AWS cloud services and LLM models for intelligent RAG applications.',
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
    technologies: ['React', 'Node', 'Java', 'Swift', 'Android', 'AWS', 'LLM', 'RAG'],
    featured: true,
  },
  {
    id: 'crm-system',
    title: 'Customer Relationship Management',
    subtitle: 'React.js Frontend, Nest.js Backend, MongoDB',
    category: 'enterprise-saas',
    categoryLabel: 'CRM Platform',
    clientOrContext: 'Openwave Computing Services Pvt Ltd',
    description:
      'Built a CRM system with React.js for the frontend and Nest.js for the backend, enabling efficient customer interaction management, sales tracking, and service optimization.',
    highlights: [
      'Implemented real-time messaging and push notifications using Socket.io and Firebase Cloud Messaging.',
      'Designed intuitive user interfaces to improve operational efficiency and customer engagement.',
    ],
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
      'Developed and maintained a full-stack e-commerce platform for Indian Pistol Limited, integrating payment gateways, user authentication, and order processing for a seamless shopping experience.',
    highlights: [
      'Leveraged MySQL for robust and secure data management, ensuring reliable transaction handling.',
      'Built secure, user-friendly commerce workflows across product, cart, and order flows.',
    ],
    technologies: ['Node.js', 'MySQL', 'Swagger', 'Azure', 'Redis'],
    featured: true,
  },
  {
    id: 'mindchamps',
    title: 'MindChamps Education',
    subtitle: 'Education Platform Built with Node.js, PostgreSQL, Firebase, Socket.IO',
    category: 'ai-fullstack',
    categoryLabel: 'Education Platform',
    clientOrContext: 'Full-Stack Development',
    description:
      'Developed an education platform for MindChamps with features such as course management, student enrollment, and content delivery, ensuring a scalable and efficient solution for educators and learners.',
    highlights: [
      'Implemented course and enrollment flows for digital learning experiences.',
      'Used Firebase and Socket.IO to support communication and engagement features.',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Firebase', 'Socket.IO'],
    featured: true,
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    subtitle: 'Node.js, PostgreSQL, Swagger',
    category: 'enterprise-saas',
    categoryLabel: 'Business Management',
    clientOrContext: 'MindChamps',
    description:
      'Built a franchise management application for MindChamps, providing comprehensive insights into franchise performance with detailed revenue and profit calculations.',
    highlights: [
      'Created modules to support franchise performance analytics and financial tracking.',
      'Delivered secure API-driven functionality for managing business operations and metrics.',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'Swagger'],
    featured: true,
  },
  {
    id: 'waycool-2',
    title: 'Waycool 2.0',
    subtitle: 'E-Commerce Logistics Platform',
    category: 'enterprise-saas',
    categoryLabel: 'E-Commerce Logistics',
    clientOrContext: 'Scalable Commerce & Logistics Product',
    description:
      'Led the development of Waycool\'s e-commerce platform (v2), emphasizing scalability, performance optimization, and enhanced logistics integration.',
    highlights: [
      'Built a high-performance platform using Node.js, Redis, MongoDB, AWS, and Apache Kafka.',
      'Improved logistics and commerce efficiency with scalable backend and data handling.',
    ],
    technologies: ['Node.js', 'Redis', 'MongoDB', 'AWS', 'Apache Kafka'],
    featured: true,
  },
  {
    id: 'sunnybee',
    title: 'SunnyBee',
    subtitle: 'Node.js, React.js, Docker, MySQL',
    category: 'ai-fullstack',
    categoryLabel: 'E-Commerce Platform',
    clientOrContext: 'End-to-End Commerce Solution',
    description:
      'Created an end-to-end e-commerce platform for SunnyBee, incorporating product management, order processing, and payment system integration.',
    highlights: [
      'Built a complete commerce stack with shipping, order, and management workflows.',
      'Used Docker to support consistent deployment and environment management.',
    ],
    technologies: ['Node.js', 'React.js', 'Docker', 'MySQL'],
    featured: true,
  },
  {
    id: 'case-management',
    title: 'Case Management System',
    subtitle: 'Node.js, MSSQLServer, Redis, Swagger, Azure',
    category: 'enterprise-saas',
    categoryLabel: 'Case Management',
    clientOrContext: 'Customer Helpline Platform',
    description:
      'Designed a case management system for a customer helpline, incorporating features like ticketing, case tracking, and customer communication tools.',
    highlights: [
      'Improved support operations with structured ticketing and case tracking workflows.',
      'Delivered a scalable solution using Azure and Redis-backed service architecture.',
    ],
    technologies: ['Node.js', 'MSSQLServer', 'Redis', 'Swagger', 'Azure'],
    featured: true,
  },
];
