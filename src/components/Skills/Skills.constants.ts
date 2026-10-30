import { SkillCategoryFilter, SkillGroup } from './Skills.interface';

export const SKILLS_SECTION_HEADER = {
  eyebrow: 'Technical Skills',
  titleStart: 'Full-Stack',
  titleHighlight: 'AI Engineering',
  subtitle:
    'Hands-on expertise across frontend, backend, mobile, cloud, deployment, and AI tooling needed to build enterprise-grade digital products and intelligent solutions.',
};

export const SKILL_CATEGORY_FILTERS: SkillCategoryFilter[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'frontend', label: 'Frontend & Mobile' },
  { id: 'state-ui', label: 'Database' },
  { id: 'backend-api', label: 'Backend' },
  { id: 'testing-devops', label: 'Cloud & DevOps' },
  { id: 'ai-tools', label: 'AI Tools & Integration' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Modern frontend and cross-platform mobile development',
    iconName: 'code',
    skills: [
      { name: 'React.js', level: 'Expert', percentage: 96, highlight: true },
      { name: 'iOS Swift', level: 'Advanced', percentage: 84 },
      { name: 'Android', level: 'Advanced', percentage: 82 },
      { name: 'Streamlit', level: 'Advanced', percentage: 82 },
      { name: 'HTML5', level: 'Expert', percentage: 95 },
      { name: 'CSS3', level: 'Expert', percentage: 95 },
      { name: 'JavaScript', level: 'Expert', percentage: 95, highlight: true },
      { name: 'TypeScript', level: 'Expert', percentage: 92, highlight: true },
    ],
  },
  {
    id: 'state-ui',
    title: 'Database',
    subtitle: 'Relational, document, cache, and vector database technologies',
    iconName: 'sliders',
    skills: [
      { name: 'MongoDB', level: 'Advanced', percentage: 88 },
      { name: 'MySQL', level: 'Advanced', percentage: 85 },
      { name: 'PostgreSQL', level: 'Advanced', percentage: 83 },
      { name: 'Redis', level: 'Advanced', percentage: 82 },
      { name: 'Qdrant', level: 'Advanced', percentage: 82 },
      { name: 'Vector Databases', level: 'Advanced', percentage: 82 },
    ],
  },
  {
    id: 'backend-api',
    title: 'Backend',
    subtitle: 'Backend services, APIs, and application development',
    iconName: 'server',
    skills: [
      { name: 'Node.js', level: 'Expert', percentage: 91, highlight: true },
      { name: 'Express.js', level: 'Expert', percentage: 90, highlight: true },
      { name: 'Nest.js', level: 'Advanced', percentage: 86 },
      { name: 'Java', level: 'Advanced', percentage: 84 },
      { name: 'Python', level: 'Advanced', percentage: 84 },
      { name: 'FastAPI', level: 'Advanced', percentage: 84 },
    ],
  },
  {
    id: 'testing-devops',
    title: 'Cloud & DevOps',
    subtitle: 'Deployment, automation, and cloud-native architecture',
    iconName: 'terminal',
    skills: [
      { name: 'AWS (S3, Lambda, API Gateway, EC2, DynamoDB)', level: 'Advanced', percentage: 88, highlight: true },
      { name: 'Azure', level: 'Advanced', percentage: 86, highlight: true },
      { name: 'Docker', level: 'Advanced', percentage: 82 },
      { name: 'Apache Kafka', level: 'Advanced', percentage: 80 },
      { name: 'GitHub', level: 'Expert', percentage: 92 },
      { name: 'GitLab', level: 'Expert', percentage: 90 },
      { name: 'CI/CD Pipeline', level: 'Advanced', percentage: 88 },
      { name: 'Jira', level: 'Advanced', percentage: 84 },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Integration',
    subtitle: 'LLM integration and intelligent solution delivery',
    iconName: 'sparkles',
    skills: [
      { name: 'Windsurf', level: 'Advanced', percentage: 90, highlight: true },
      { name: 'Claude', level: 'Advanced', percentage: 89, highlight: true },
      { name: 'Codex', level: 'Advanced', percentage: 88 },
      { name: 'Azure OpenAI (GPT-4.1, Embeddings)', level: 'Advanced', percentage: 90, highlight: true },
      { name: 'LangChain', level: 'Advanced', percentage: 88 },
      { name: 'LangGraph', level: 'Advanced', percentage: 88 },
      { name: 'RAG', level: 'Advanced', percentage: 88 },
      { name: 'Semantic Search', level: 'Advanced', percentage: 88 },
      { name: 'Similarity Search', level: 'Advanced', percentage: 88 },
      { name: 'Document Chunking', level: 'Advanced', percentage: 88 },
      { name: 'Prompt Engineering', level: 'Advanced', percentage: 88 },
      { name: 'Agent Workflows', level: 'Advanced', percentage: 88 },
    ],
  },
];
