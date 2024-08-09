import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/Nishant-Bage',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/nishant_bage/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/nishant-bage/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://x.com/NishantBage',
    label: 'Twitter',
    icon: faXTwitter,
  },
  {
    link: 'mailto:hello@nishantbage.in',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
