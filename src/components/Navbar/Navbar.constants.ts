import resumePdf from '../../assets/Deena_R_Fullstack_AI_Engineer.pdf';
import { NavItem } from './Navbar.interface';

export const BRAND_NAME = 'DEENA R';
export const BRAND_ROLE_BADGE = 'Full Stack AI Engineer';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const RESUME_DOWNLOAD_URL = resumePdf;
