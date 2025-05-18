// src/components/sections/skills-section.tsx
import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills-data';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">My Core Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill) => (
            <Badge 
              key={skill.name} 
              variant="secondary" 
              className="flex items-center justify-center space-x-2 cursor-default shadow-md transition-all duration-200 ease-in-out hover:scale-110 px-2 py-1 text-xs min-w-[96px] sm:px-4 sm:py-3 sm:text-md sm:min-w-40 bg-secondary/80 text-secondary-foreground hover:bg-secondary"
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
