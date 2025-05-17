
// src/components/sections/skills-section.tsx
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills-data';

export function SkillsSection() {
  return (
    // Removed fade-in-section, will be handled by AnimateOnScrollWrapper
    <section id="skills" className="py-16 md:py-20 bg-card/50">
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
```