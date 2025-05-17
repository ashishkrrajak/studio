// src/components/project-showcase.tsx
import { projects } from '@/data/projects';
import { ProjectCard } from './project-card';

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
          Featured Projects
        </h2>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No projects to display yet. Check back soon!</p>
        )}
      </div>
    </section>
  );
}
