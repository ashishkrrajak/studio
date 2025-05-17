// src/components/project-card.tsx
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { ProjectSummaryLoader } from './project-summary-loader';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-card border-border hover:border-primary/50 transform hover:-translate-y-1">
      <CardHeader className="p-0 relative">
        <div className="aspect-video w-full overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={project.dataAiHint}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-2xl font-semibold mb-2 text-primary group-hover:text-primary/90 transition-colors">{project.name}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
          {project.description}
        </CardDescription>
        <div className="mb-4">
          <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-secondary/70 text-secondary-foreground hover:bg-secondary transition-colors text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <ProjectSummaryLoader
            projectDescription={project.longDescription || project.description}
            projectTechnologies={project.technologies}
        />
      </CardContent>
      <CardFooter className="p-6 bg-card-foreground/5 border-t border-border">
        <div className="flex space-x-3 w-full">
          {project.liveUrl && (
            <Button asChild variant="default" className="flex-1 bg-primary hover:bg-primary/80 text-primary-foreground transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out shadow-md hover:shadow-lg">
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
