// src/data/skills-data.tsx
import type { SkillItem } from '@/types';
import Image from 'next/image';
import {
  Database, // For SQL
  Type,     // For TypeScript
  LibraryBig, // For Collections
  Shapes,   // For OOP
  Network,  // For Data Structures
  Github,   // For Git/GitHub
  SearchCheck, // For Insomnia
  Wand2,    // For Tabnine
  Sparkles, // For Gen AI
  Palette,  // For Firebase Studio
  Bot,      // For Chat GPT
  Cpu,       // For Claude AI
  Send      // For Postman
} from 'lucide-react';

// --- Image-based Icon Components from icons8.com & other sources ---
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
const LinuxIcon = () => (<Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux icon" width={20} height={20} />);

// New image-based icons from user request
const ReactJsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React.js icon" width={20} height={20} />);
const NextJsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="Next.js icon" width={20} height={20} />);
const AngularJsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000" alt="Angular.js icon" width={20} height={20} />);
const TailwindCssIcon = () => (<Image src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind CSS icon" width={20} height={20} />);
const HtmlIcon = () => (<Image src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML icon" width={20} height={20} />);
const CssIcon = () => (<Image src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS icon" width={20} height={20} />);
const BootstrapIcon = () => (<Image src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="Bootstrap icon" width={20} height={20} />);


export const skills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: JavaIcon },
  { name: 'Python', icon: PythonIcon },
  { name: 'SQL', icon: Database },
  { name: 'JavaScript', icon: JavaScriptIcon },
  { name: 'TypeScript', icon: Type },
  { name: 'HTML', icon: HtmlIcon },
  { name: 'CSS', icon: CssIcon },

  // Frameworks & Concepts
  { name: 'Spring', icon: SpringIcon },
  { name: 'Angular.js', icon: AngularJsIcon },
  { name: 'React.js', icon: ReactJsIcon },
  { name: 'Next.js', icon: NextJsIcon },
  { name: 'Tailwind CSS', icon: TailwindCssIcon },
  { name: 'Bootstrap', icon: BootstrapIcon },
  { name: 'Collections', icon: LibraryBig },
  { name: 'OOP', icon: Shapes },
  { name: 'Data Structures', icon: Network },

  // Technologies
  { name: 'PostgreSQL', icon: PostgreSQLIcon },
  { name: 'MySQL', icon: MySQLIcon },
  { name: 'Git/GitHub', icon: Github },
  { name: 'AWS S3', icon: AWSS3Icon },
  { name: 'AWS Lambda', icon: AWSLambdaIcon },
  { name: 'Linux', icon: LinuxIcon },

  // Tools & Platforms
  { name: 'Jenkins', icon: JenkinsIcon },
  { name: 'Postman', icon: Send }, // Reverted to Lucide Send icon
  { name: 'Insomnia', icon: SearchCheck },
  { name: 'Tabnine', icon: Wand2 },
  { name: 'IntelliJ IDEA', icon: IntelliJIcon },
  { name: 'Gen AI', icon: Sparkles },
  { name: 'Firebase Studio', icon: Palette },
  { name: 'Chat GPT', icon: Bot },
  { name: 'Claude AI', icon: Cpu },
];
