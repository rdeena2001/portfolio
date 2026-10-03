import { ContactChannel, ContactFormState } from './Contact.interface';

export const CONTACT_SECTION_HEADER = {
  eyebrow: 'Get In Touch',
  titleStart: "Let's Build Something",
  titleHighlight: 'Impactful Together',
  subtitle:
    'Looking for a full-stack developer with enterprise app, cloud, and AI integration expertise? Reach out directly via email, phone, or LinkedIn.',
};

export const CONTACT_EMAIL = 'rdeena549@gmail.com';

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    label: 'Email Address',
    value: 'rdeena549@gmail.com',
    href: 'mailto:rdeena549@gmail.com',
    copyable: true,
    iconName: 'mail',
  },
  {
    id: 'phone',
    label: 'Phone / WhatsApp',
    value: '+91-9025282820',
    href: 'tel:+919025282820',
    copyable: true,
    iconName: 'phone',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn Profile',
    value: 'LinkedIn Profile',
    href: 'https://www.linkedin.com/in/deena-r-154443217',
    copyable: false,
    iconName: 'linkedin',
  },
  {
    id: 'location',
    label: 'Current Location',
    value: 'Chennai, India',
    copyable: false,
    iconName: 'map-pin',
  },
];

export const INITIAL_CONTACT_FORM: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
