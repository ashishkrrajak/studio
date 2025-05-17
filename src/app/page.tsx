// src/app/page.tsx
import { ProjectShowcase } from '@/components/project-showcase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="text-center py-16 fade-in-section">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-primary">FolioForge</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover a curated collection of my work, showcasing innovative solutions and technical expertise. Powered by AI for insightful project summaries.
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-accent border-accent hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105">
            <Link href="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      
      <ProjectShowcase />
    </div>
  );
}
