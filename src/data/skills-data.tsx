
// src/data/skills-data.tsx
import type { SkillItem } from '@/types';
import {
  Coffee,
  Database,
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
  Layers3,
  Sparkles,
  Palette,
  Bot,
  Cpu
} from 'lucide-react';

// Simple SVG Logo Components with Brand Colors

const AngularLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Angular logo" className="w-5 h-5 mr-2">
    <path d="M12 2L2.96875 7.03125L4.5 19.5H19.5L21.0312 7.03125L12 2Z" fill="#DD0031"/>
    <path d="M12 2V11L5.5 7.5L12 2Z" fill="#B30027"/>
    <path d="M12 2V11L18.5 7.5L12 2Z" fill="#B30027"/>
    <path d="M12 5.34375L6.21875 17H8.34375L9.34375 14.5H14.625L15.6562 17H17.75L12 5.34375ZM12 9.03125L13.8438 13.25H10.1562L12 9.03125Z" fill="white"/>
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

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="JavaScript logo" className="w-5 h-5 mr-2">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M4.342 18.018h2.582V13.86H9.36v4.158h2.58V9.775H9.36v3.248H6.924V9.775H4.342v8.243zm10.12-3.902c0 .864-.22 1.528-.66 1.991-.44.463-1.041.694-1.803.694-.82 0-1.448-.241-1.884-.724-.436-.483-.654-1.16-.654-2.033V9.775h2.55v4.158c0 .493.078.83.234 1.01.156.18.39.27.702.27.321 0 .563-.088.729-.264.166-.176.249-.505.249-.985V9.775h2.538v4.341z" fill="black"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Python logo" className="w-5 h-5 mr-2">
    <rect x="2.5" y="2.5" width="19" height="19" rx="2" ry="2" fill="#3776AB"/>
    <path d="M12 5.5c-2.43 0-4.55.98-5.08 2.74-.02.05-.03.1-.03.16v1.69c0 .3.13.58.35.78.22.2.5.32.8.32h2.13c.46 0 .83-.37.83-.83V9.5c0-.63.29-1.2.76-1.56.47-.36 1.04-.54 1.67-.54s1.2.18 1.67.54c.47.36.76.93.76 1.56v4.31c0 .46-.37.83-.83.83H9.5c-.3 0-.58-.13-.78-.35s-.32-.5-.32-.8V12.5c0-.63-.29-1.2-.76-1.56S6.6 10.4 6 10.4c-.63 0-1.2.18-1.67.54-.47.36-.76.93-.76 1.56v1.38c0 .05.01.1.03.16C4.03 16.3 5.93 18.5 8.5 18.5c2.43 0 4.55-.98 5.08-2.74.02-.05.03-.1.03-.16v-1.69c0-.3-.13-.58-.35-.78-.22-.2-.5-.32-.8-.32h-2.13c-.46 0-.83.37-.83.83V14.5c0 .63-.29 1.2-.76 1.56-.47.36-1.04.54-1.67.54s-1.2-.18-1.67-.54c-.47-.36-.76-.93-.76-1.56V9.69c0-.05-.01-.1-.03-.16C10.47 7.77 8.57 5.5 6 5.5c-2.43 0-4.55.98-5.08 2.74" fill="#FFD43B" transform="translate(5.5, 0)"/>
  </svg>
);


export const skills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: PythonLogo },
  { name: 'SQL', icon: Database },
  { name: 'JavaScript', icon: JavaScriptLogo },
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

    