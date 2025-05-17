// src/components/project-showcase.tsx
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-primary">My Projects</h2>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects to display yet. Check back soon!</p>
      )}
    </section>
  );
}
