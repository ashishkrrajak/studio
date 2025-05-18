// src/data/skills-data.ts
import type { SkillItem } from '@/types';
import { 
  Coffee, Leaf, Atom, Database, Cloud, Braces, Github, Repeat, Network, FastForward, Puzzle, DatabaseZap
} from 'lucide-react';

// Simple SVG Logo Components
const AngularLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <path d="M12 2L2 7l2 12h16l2-12L12 2z" />
    <path d="M12 2v5l6 3" />
    <path d="M12 2v5l-6 3" />
    <path d="M8 17h8" />
    <path d="M10 12l2 5 2-5" />
  </svg>
);


const Html5Logo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M2 3l1.612 18L12 23.311 20.388 21 22 3H2zm10.449 15.199H8.924l-.471-4.73h3.528v-1.902H7.901l-.358-4.083h8.458l-.338 3.892H11.8v1.91h4.031l-.622 6.71z"/>
  </svg>
);

const Css3Logo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
     <path d="M2 3l1.612 18L12 23.311 20.388 21 22 3H2zm8.449 15.199H6.923l-.472-4.73h3.529v-1.902H5.901l-.359-4.083h10.458l-.141 1.551H7.731l.179 2.532h6.15l-.42 4.72H8.237l.212 2.33h4.031l-.622 6.71zM17.1 10.272h-4.03V8.369h4.32l.199-2.089H8.93V4.2h8.458l-.288 6.072z"/>
  </svg>
);

export const skills: SkillItem[] = [
  { name: 'Java', icon: Coffee },
  { name: 'Spring Boot', icon: Leaf },
  { name: 'Microservices', icon: Puzzle },
  { name: 'React', icon: Atom },
  { name: 'Angular', icon: AngularLogo },
  { name: 'SQL', icon: Database },
  { name: 'NoSQL (MongoDB)', icon: DatabaseZap },
  { name: 'AWS/Cloud', icon: Cloud },
  { name: 'JavaScript/TypeScript', icon: Braces },
  { name: 'HTML5', icon: Html5Logo },
  { name: 'CSS3', icon: Css3Logo },
  { name: 'Git & GitHub', icon: Github },
  { name: 'Agile Methodologies', icon: Repeat },
  { name: 'REST APIs', icon: Network },
  { name: 'CI/CD', icon: FastForward },
];
