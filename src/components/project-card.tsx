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
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out fade-in-section bg-card">
      <CardHeader className="p-0">
        <div className="aspect-video relative w-full">
          <Image
            src={project.imageUrl}
            alt={project.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-bold mb-2 text-primary">{project.name}</CardTitle>
        <CardDescription className="text-muted-foreground mb-3 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </div>
        <ProjectSummaryLoader
            projectDescription={project.longDescription || project.description}
            projectTechnologies={project.technologies}
        />
      </CardContent>
      <CardFooter className="p-6 bg-muted/30">
        <div className="flex space-x-3 w-full">
          {project.liveUrl && (
            <Button asChild variant="default" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-200 ease-in-out transform hover:scale-105">
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="outline" className="flex-1 hover:bg-accent hover:text-accent-foreground border-accent text-accent transition-all duration-200 ease-in-out transform hover:scale-105">
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
