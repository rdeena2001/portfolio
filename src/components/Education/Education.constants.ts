import { EducationRecord, LanguageItem } from './Education.interface';

export const EDUCATION_SECTION_HEADER = {
  eyebrow: 'Academic Foundation & Credentials',
  titleStart: 'Education &',
  titleHighlight: 'Languages',
  subtitle:
    'Strong academic foundation in computer science and software engineering supporting a practical, product-focused full-stack engineering career.',
};

export const EDUCATION_RECORDS: EducationRecord[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    field: 'Computer Applications',
    institution: 'University of Madras',
    location: 'Distance Learning',
    period: 'Distance Learning',
    primary: true,
  },
  {
    id: 'bsc-cs',
    degree: 'B.SC Computer Science',
    field: 'Computer Science',
    institution: 'Thiruthangal Nadar College',
    location: 'Chennai, India',
    period: '2021',
    primary: true,
  },
];

export const SPOKEN_LANGUAGES: LanguageItem[] = [
  {
    name: 'English',
    proficiency: 'Professional Working Proficiency',
  },
  {
    name: 'Tamil',
    proficiency: 'Native / Bilingual Proficiency',
  },
];
