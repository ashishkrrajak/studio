
// src/data/skills-data.tsx
import type { SkillItem } from '@/types';
import Image from 'next/image';
import {
  // Coffee, // Replaced by JavaIcon
  Database,
  Type,
  // Leaf, // Replaced by SpringIcon
  LibraryBig,
  Shapes,
  Network,
  Github,
  // Archive, // Replaced by AWSS3Icon
  // Zap, // Replaced by AWSLambdaIcon
  // Construction, // Replaced by JenkinsIcon
  // Send, // Replaced by PostmanIcon
  SearchCheck,
  Wand2,
  // Keyboard, // Replaced by IntelliJIcon
  Atom,
  Layers3,
  Sparkles,
  Palette,
  Bot,
  Cpu
} from 'lucide-react';

// --- Custom SVG Logo Components (Retained if still used) ---
const AngularLogo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="Angular logo" className="w-5 h-5">
    <path d="M12 2L2.96875 7.03125L4.5 19.5H19.5L21.0312 7.03125L12 2Z" fill="#DD0031"/>
    <path d="M12 2V11L5.5 7.5L12 2Z" fill="#B30027"/>
    <path d="M12 2V11L18.5 7.5L12 2Z" fill="#B30027"/>
    <path d="M12 5.34375L6.21875 17H8.34375L9.34375 14.5H14.625L15.6562 17H17.75L12 5.34375ZM12 9.03125L13.8438 13.25H10.1562L12 9.03125Z" fill="white"/>
  </svg>
);

const Html5Logo = () => (
  <svg viewBox="0 0 24 24" role="img" aria-label="HTML5 logo" className="w-5 h-5">
    <path d="M1.266 2.078l1.718 19.235L11.5 23.31l8.516-1.997 1.718-19.235H1.266z" fill="#E34F26"/>
    <path d="M11.5 21.527V4.01h8.03l-1.485 16.61-6.545 1.814z" fill="#F06529"/>
    <path d="M11.5 8.63H8.047l-.234-2.618h3.687V4.01H4.23l.528 5.907h6.742V8.63zm0 3.882H7.58l-.351 3.912 4.27.998.001-2.003h-2.21l.117-1.31h2.102l-.019-1.597z" fill="#EBEBEB"/>
    <path d="M11.5 12.512v1.998l-.018.002-2.102.002.117 1.31h2.003l-.002 2.003-4.27-.998.08-.898h3.84l.352-3.912H7.697l-.117-1.287h4.037l-.117 1.31zM11.5 8.63v1.998h3.453l-.234 2.618h-3.22v1.998h2.986l-.352 3.91L11.5 20.513v-2.003l2.1-.557.234-2.616h-2.333V8.63h3.688l-.234-2.618H11.5V4.01h6.742l-.528 5.907h-2.62V8.63h-.094z" fill="#FFFFFF"/>
  </svg>
);

const Css3Logo = () => (
 <svg viewBox="0 0 24 24" role="img" aria-label="CSS3 logo" className="w-5 h-5">
    <path d="M1.266 2.078l1.718 19.235L11.5 23.31l8.516-1.997 1.718-19.235H1.266z" fill="#1572B6"/>
    <path d="M11.5 21.527V4.01h8.03l-1.485 16.61-6.545 1.814z" fill="#33A9DC"/>
    <path d="M11.5 8.63H8.047l-.234-2.618h3.687V4.01H4.23l.528 5.907h6.742V8.63zm-.032 5.88H8.34l.234 2.617L11.5 17.7V15.7l-1.375-.36.094-1.042h1.25v-1.786z" fill="#EBEBEB"/>
    <path d="M11.5 12.512v1.786h1.25l.094 1.042L11.5 15.7v2.002l2.928-.81.234-2.616.094-1.043h-1.75v-1.786h1.875l.125-1.31h-1.875l.125-1.31H11.5V8.63h3.453l-.234 2.618h-3.22v1.264zm0-3.882V6.012h3.688l-.234-2.618H11.5V4.01h6.742l-.528 5.907h-2.62V8.63h-.094z" fill="#FFFFFF"/>
  </svg>
);

// --- New Image-based Icon Components ---
const SpringIcon = () => (<Image src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="Spring icon" width={20} height={20} />);
const JavaIcon = () => (<Image src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java icon" width={20} height={20} />);
const JavaScriptIcon = () => (<Image src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript icon" width={20} height={20} />);
const PythonIcon = () => (<Image src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python icon" width={20} height={20} />);
const IntelliJIcon = () => (<Image src="https://img.icons8.com/?size=100&id=61466&format=png&color=000000" alt="IntelliJ IDEA icon" width={20} height={20} />);
const AWSLambdaIcon = () => (<Image src="https://img.icons8.com/?size=100&id=Y9Kxy8Xl1id8&format=png&color=000000" alt="AWS Lambda icon" width={20} height={20} />);
const AWSS3Icon = () => (<Image src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS S3 icon" width={20} height={20} />);
const MySQLIcon = () => (<Image src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="MySQL icon" width={20} height={20} />);
const PostgreSQLIcon = () => (<Image src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="PostgreSQL icon" width={20} height={20} />);
const JenkinsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=39292&format=png&color=000000" alt="Jenkins icon" width={20} height={20} />);
const PostmanIcon = () => (<Image src="https://camo.githubusercontent.com/5c2595c2fcc9ef7ffa97d14f868547d945d5cee65045377c7c34611b5a67c139/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" alt="Postman icon" width={20} height={20} />);
const LinuxIcon = () => (<Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux icon" width={20} height={20} />);


export const skills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: JavaIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'SQL', icon: Database },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: Type },
  { name: 'HTML', icon: Html5Logo },
  { name: 'CSS', icon: Css3Logo },

  // Frameworks & Concepts
  { name: 'Spring', icon: SpringIcon }, // Renamed from Spring Boot based on user image
  { name: 'Angular', icon: AngularLogo },
  { name: 'React.js', icon: Atom },
  { name: 'Next.js', icon: Layers3 },
  { name: 'Collections', icon: LibraryBig },
  { name: 'OOP', icon: Shapes },
  { name: 'Data Structures', icon: Network },

  // Technologies
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'MySQL', icon: MySQLIcon },
  { name: 'Git/GitHub', icon: Github },
  { name: 'AWS S3', icon: AWSS3Icon }, // Renamed from AWS Cloud Storage
  { name: 'AWS Lambda', icon: AWSLambdaIcon },
  { name: 'Linux', icon: LinuxIcon }, // Added Linux

  // Tools & Platforms
  { name: 'Jenkins', icon: JenkinsIcon },
  { name: 'Postman', icon: PostmanIcon },
  { name: 'Insomnia', icon: SearchCheck },
  { name: 'Tabnine', icon: Wand2 },
  { name: 'IntelliJ IDEA', icon: IntelliJIcon }, // Renamed from Jet-Brains IDEs
  { name: 'Gen AI', icon: Sparkles },
  { name: 'Firebase Studio', icon: Palette },
  { name: 'Chat GPT', icon: Bot },
  { name: 'Claude AI', icon: Cpu },
];
