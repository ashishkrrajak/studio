
// src/data/skills-data.tsx
import type { SkillItem } from '@/types';
import {
  Coffee,
  FileCode2,
  Database,
  Braces,
  Type,
  Leaf,
  LibraryBig,
  Shapes,
  Network,
  Github,
  Archive,
  Zap,
  Construction,
  Send,
  SearchCheck,
  Wand2,
  Keyboard,
  Atom,
  Cloud,
  Puzzle,
  Repeat,
  FastForward,
  DatabaseZap,
  Layers3, 
  Sparkles, 
  Palette,  
  Bot,      
  Cpu       
} from 'lucide-react';

// Simple SVG Logo Components with Brand Colors
// Note: Lucide icons below will inherit color from the theme (accent color).
const AngularLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Angular logo" className="w-5 h-5 mr-2">
    {/* Red Shield Parts */}
    <path d="M12 2L2.96875 7.03125L4.5 19.5H19.5L21.0312 7.03125L12 2Z" fill="#DD0031"/>
    {/* Inner White 'A' Shape */}
    <path d="M12 2V11L5.5 7.5L12 2Z" fill="#B30027"/> {/* One side of the top part, slightly darker for depth */}
    <path d="M12 2V11L18.5 7.5L12 2Z" fill="#B30027"/> {/* Other side of the top part */}
    <path d="M12 5.34375L6.21875 17H8.34375L9.34375 14.5H14.625L15.6562 17H17.75L12 5.34375ZM12 9.03125L13.8438 13.25H10.1562L12 9.03125Z" fill="white"/>
  </svg>
);


const DockerLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Docker logo" className="w-5 h-5 mr-2" fill="#2496ED">
    <path d="M21.95 9.93C21.43 6.46 18.52 4 15 4H9c-3.31 0-6 2.69-6 6s2.69 6 6 6h.59c.25 1.49.92 2.83 1.88 3.92.82.93 1.88 1.66 3.04 2 .26.08.53.12.8.12.88 0 1.68-.38 2.27-.99.47-.5.78-1.12.91-1.8.1-.53.02-1.09-.21-1.59-.59-1.26-1.94-2.04-3.44-2.04H13v-2h1.5c2.48 0 4.5-2.02 4.5-4.5 0-.16-.01-.32-.03-.48.17-.01.33-.02.5-.02 1.02 0 1.9.46 2.48 1.19zM10 11H8v-1h2v1zm0 2H8v-1h2v1zm0 2H8v-1h2v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm3.5-1c-.83 0-1.5-.67-1.5-1.5S14.67 12 15.5 12s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const KubernetesLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Kubernetes logo" className="w-5 h-5 mr-2" fill="#326CE5">
    {/* Main ship wheel shape */}
    <path d="M12 2l8.625 4.875V11.25L12 15.75l-8.625-4.5V6.875L12 2zm0 1.875L5.25 7.5v3l6.75 3.75 6.75-3.75v-3L12 3.875zM5.25 12.375l6.75 3.75v5.25L5.25 17.625v-5.25zm13.5 0v5.25L12 21.375v-5.25l6.75-3.75z"/>
    {/* Spokes - these are typically lines, so fill might not be ideal, or they are part of the overall shape */}
    {/* Center circle */}
    <circle cx="12" cy="12" r="1.5" fill="white" />
 </svg>
);


const Html5Logo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="HTML5 logo" className="w-5 h-5 mr-2">
    <path d="M1.266 2.078l1.718 19.235L11.5 23.31l8.516-1.997 1.718-19.235H1.266z" fill="#E34F26"/>
    <path d="M11.5 21.527V4.01h8.03l-1.485 16.61-6.545 1.814z" fill="#F06529"/>
    <path d="M11.5 8.63H8.047l-.234-2.618h3.687V4.01H4.23l.528 5.907h6.742V8.63zm0 3.882H7.58l-.351 3.912 4.27.998.001-2.003h-2.21l.117-1.31h2.102l-.019-1.597z" fill="#EBEBEB"/>
    <path d="M11.5 12.512v1.998l-.018.002-2.102.002.117 1.31h2.003l-.002 2.003-4.27-.998.08-.898h3.84l.352-3.912H7.697l-.117-1.287h4.037l-.117 1.31zM11.5 8.63v1.998h3.453l-.234 2.618h-3.22v1.998h2.986l-.352 3.91L11.5 20.513v-2.003l2.1-.557.234-2.616h-2.333V8.63h3.688l-.234-2.618H11.5V4.01h6.742l-.528 5.907h-2.62V8.63h-.094z" fill="#FFFFFF"/>
  </svg>
);

const Css3Logo = () => (
 <svg viewBox="0 0 24 24" role="img" aria-label="CSS3 logo" className="w-5 h-5 mr-2">
    <path d="M1.266 2.078l1.718 19.235L11.5 23.31l8.516-1.997 1.718-19.235H1.266z" fill="#1572B6"/>
    <path d="M11.5 21.527V4.01h8.03l-1.485 16.61-6.545 1.814z" fill="#33A9DC"/>
    <path d="M11.5 8.63H8.047l-.234-2.618h3.687V4.01H4.23l.528 5.907h6.742V8.63zm-.032 5.88H8.34l.234 2.617L11.5 17.7V15.7l-1.375-.36.094-1.042h1.25v-1.786z" fill="#EBEBEB"/>
    <path d="M11.5 12.512v1.786h1.25l.094 1.042L11.5 15.7v2.002l2.928-.81.234-2.616.094-1.043h-1.75v-1.786h1.875l.125-1.31h-1.875l.125-1.31H11.5V8.63h3.453l-.234 2.618h-3.22v1.264zm0-3.882V6.012h3.688l-.234-2.618H11.5V4.01h6.742l-.528 5.907h-2.62V8.63h-.094z" fill="#FFFFFF"/>
  </svg>
);

export const skills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: FileCode2 },
  { name: 'SQL', icon: Database },
  { name: 'JavaScript', icon: Braces },
  { name: 'TypeScript', icon: Type },
  { name: 'HTML', icon: Html5Logo },
  { name: 'CSS', icon: Css3Logo },

  // Frameworks & Concepts
  { name: 'Spring Boot', icon: Leaf },
  { name: 'Angular', icon: AngularLogo },
  { name: 'React.js', icon: Atom },
  { name: 'Next.js', icon: Layers3 },
  { name: 'Collections', icon: LibraryBig },
  { name: 'OOP', icon: Shapes },
  { name: 'Data Structures', icon: Network },

  // Technologies
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Git/GitHub', icon: Github },
  { name: 'AWS Cloud Storage', icon: Archive },
  { name: 'AWS LAMBDA', icon: Zap },

  // Tools & Platforms
  { name: 'Jenkins', icon: Construction },
  { name: 'Postman', icon: Send },
  { name: 'Insomnia', icon: SearchCheck },
  { name: 'Tabnine', icon: Wand2 },
  { name: 'JetBrains IDEs', icon: Keyboard },
  { name: 'Gen AI', icon: Sparkles },
  { name: 'Firebase Studio', icon: Palette },
  { name: 'Chat GPT', icon: Bot },
  { name: 'Claude AI', icon: Cpu },
];

    