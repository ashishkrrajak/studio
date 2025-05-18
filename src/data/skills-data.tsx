
// src/data/skills-data.tsx
import type { SkillItem } from '@/types';
import Image from 'next/image';
import {
  Database, // For SQL
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
  Send,      // For Postman
  Construction, // For Jenkins (replaced by image)
} from 'lucide-react';

// --- Image-based Icon Components from icons8.com & other sources ---
const SpringIcon = () => (<Image src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000" alt="Spring icon" width={20} height={20} />);
const JavaIcon = () => (<Image src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java icon" width={20} height={20} />);
const JavaScriptIconComponent = () => (<Image src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript icon" width={20} height={20} />);
const PythonIconComponent = () => (<Image src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="Python icon" width={20} height={20} />);
const IntelliJIcon = () => (<Image src="https://img.icons8.com/?size=100&id=61466&format=png&color=000000" alt="IntelliJ IDEA icon" width={20} height={20} />);
const AWSLambdaIcon = () => (<Image src="https://img.icons8.com/?size=100&id=Y9Kxy8Xl1id8&format=png&color=000000" alt="AWS Lambda icon" width={20} height={20} />);
const AWSS3Icon = () => (<Image src="https://img.icons8.com/?size=100&id=33039&format=png&color=000000" alt="AWS S3 icon" width={20} height={20} />);
const MySQLIcon = () => (<Image src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="MySQL icon" width={20} height={20} />);
const PostgreSQLIcon = () => (<Image src="https://img.icons8.com/?size=100&id=38561&format=png&color=000000" alt="PostgreSQL icon" width={20} height={20} />);
const JenkinsIconComponent = () => (<Image src="https://img.icons8.com/?size=100&id=39292&format=png&color=000000" alt="Jenkins icon" width={20} height={20} />);
const LinuxIcon = () => (<Image src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux icon" width={20} height={20} />);

const ReactJsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React.js icon" width={20} height={20} />);
const AngularJsIcon = () => (<Image src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000" alt="Angular.js icon" width={20} height={20} />);
const TailwindCssIcon = () => (<Image src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind CSS icon" width={20} height={20} />);
const HtmlIcon = () => (<Image src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML icon" width={20} height={20} />);
const CssIcon = () => (<Image src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS icon" width={20} height={20} />);
const BootstrapIcon = () => (<Image src="https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000" alt="Bootstrap icon" width={20} height={20} />);
const TypeScriptIconComponent = () => (<Image src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" alt="TypeScript icon" width={20} height={20} />);
const VSCodeIcon = () => (<Image src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000" alt="VS Code icon" width={20} height={20} />);


const NextJsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256" className="w-5 h-5">
    <defs>
      <linearGradient x1="24" y1="43.734" x2="24" y2="4.266" gradientUnits="userSpaceOnUse" id="color-1_MWiBjkuHeMVq_gr1_nextjs">
        <stop offset="0" stopColor="#003243"></stop>
        <stop offset="0.465" stopColor="#0097dc"></stop>
        <stop offset="1" stopColor="#0075ab"></stop>
      </linearGradient>
      <linearGradient x1="30.512" y1="33.021" x2="30.512" y2="18.431" gradientUnits="userSpaceOnUse" id="color-2_MWiBjkuHeMVq_gr2_nextjs">
        <stop offset="0.377" stopColor="#ffffff" stopOpacity="0"></stop>
        <stop offset="0.666" stopColor="#ffffff" stopOpacity="0.3"></stop>
        <stop offset="0.988" stopColor="#ffffff"></stop>
      </linearGradient>
      <linearGradient x1="22.102" y1="21.443" x2="36.661" y2="40.529" gradientUnits="userSpaceOnUse" id="color-3_MWiBjkuHeMVq_gr3_nextjs">
        <stop offset="0.296" stopColor="#ffffff"></stop>
        <stop offset="0.521" stopColor="#ffffff" stopOpacity="0.50196"></stop>
        <stop offset="0.838" stopColor="#ffffff" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
    <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}>
      <g transform="scale(5.33333,5.33333)">
        <circle cx="24" cy="24" r="19.734" fill="url(#color-1_MWiBjkuHeMVq_gr1_nextjs)"></circle>
        <rect x="15.992" y="16.027" width="3.023" height="15.996" fill="#ffffff"></rect>
        <rect x="29.035" y="15.957" width="2.953" height="14.59" fill="url(#color-2_MWiBjkuHeMVq_gr2_nextjs)"></rect>
        <path d="M36.781,38.094l-2.613,0.996l-18.176,-23.063h3.516z" fill="url(#color-3_MWiBjkuHeMVq_gr3_nextjs)"></path>
      </g>
    </g>
  </svg>
);


export const skills: SkillItem[] = [
  // Languages
  { name: 'Java', icon: JavaIcon },
  { name: 'Python', icon: PythonIconComponent },
  { name: 'SQL', icon: Database },
  { name: 'JavaScript', icon: JavaScriptIconComponent },
  { name: 'TypeScript', icon: TypeScriptIconComponent },
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
  { name: 'Jenkins', icon: JenkinsIconComponent },
  { name: 'Postman', icon: Send },
  { name: 'Insomnia', icon: SearchCheck },
  { name: 'Tabnine', icon: Wand2 },
  { name: 'IntelliJ IDEA', icon: IntelliJIcon },
  { name: 'VS Code', icon: VSCodeIcon },
  { name: 'Gen AI', icon: Sparkles },
  { name: 'Firebase Studio', icon: Palette },
  { name: 'Chat GPT', icon: Bot },
  { name: 'Claude AI', icon: Cpu },
];

    