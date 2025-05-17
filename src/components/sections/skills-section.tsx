
// src/components/sections/skills-section.tsx
import { Badge } from '@/components/ui/badge';
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

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
    <path d="M21.95 9.93C21.43 6.46 18.52 4 15 4H9c-3.31 0-6 2.69-6 6s2.69 6 6 6h.59c.25 1.49.92 2.83 1.88 3.92.82.93 1.88 1.66 3.04 2 .26.08.53.12.8.12.88 0 1.68-.38 2.27-.99.47-.5.78-1.12.91-1.8.1-.53.02-1.09-.21-1.59-.59-1.26-1.94-2.04-3.44-2.04H13v-2h1.5c2.48 0 4.5-2.02 4.5-4.5 0-.16-.01-.32-.03-.48.17-.01.33-.02.5-.02 1.02 0 1.9.46 2.48 1.19zM10 11H8v-1h2v1zm0 2H8v-1h2v1zm0 2H8v-1h2v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm2-4h-1v-1h1v1zm0 2h-1v-1h1v1zm0 2h-1v-1h1v1zm3.5-1c-.83 0-1.5-.67-1.5-1.5S14.67 12 15.5 12s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const KubernetesLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
    <path d="M12 2l7.75 4.5V11L12 15.5 4.25 11V6.5L12 2z" />
    <path d="M4.25 11l7.75 4.5 7.75-4.5" />
    <path d="M12 22V15.5" />
    <circle cx="12" cy="15.5" r="1.5" fill="currentColor" stroke="none"/>
    <path d="M4.25 11v6.5L12 22l7.75-4.5V11" />
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

const skills: SkillItem[] = [
  { name: 'Java', icon: Coffee },
  { name: 'Spring Boot', icon: Leaf },
  { name: 'Microservices', icon: Puzzle },
  { name: 'React', icon: Atom },
  { name: 'Angular', icon: AngularLogo },
  { name: 'SQL', icon: Database },
  { name: 'NoSQL (MongoDB)', icon: DatabaseZap },
  { name: 'Docker', icon: DockerLogo },
  { name: 'Kubernetes', icon: KubernetesLogo },
  { name: 'AWS/Cloud', icon: Cloud },
  { name: 'JavaScript/TypeScript', icon: Braces },
  { name: 'HTML5', icon: Html5Logo },
  { name: 'CSS3', icon: Css3Logo },
  { name: 'Git & GitHub', icon: Github },
  { name: 'Agile Methodologies', icon: Repeat },
  { name: 'REST APIs', icon: Network },
  { name: 'CI/CD', icon: FastForward },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-card/50 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <Badge 
              key={skill.name} 
              variant="secondary" 
              className="text-md px-4 py-3 bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-all duration-200 ease-in-out hover:scale-110 cursor-default shadow-md flex items-center space-x-2"
            >
              <skill.icon />
              <span>{skill.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
