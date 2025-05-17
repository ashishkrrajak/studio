// src/app/page.tsx
import { ProjectShowcase } from '@/components/project-showcase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <section className="py-16 md:py-24 fade-in-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Alex Johnson</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">
                Frontend Developer & UI/UX Enthusiast
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                I craft engaging and accessible digital experiences with a passion for clean code and user-centric design. Exploring the synergy between technology and creativity to build impactful web solutions.
              </p>
              <div className="flex items-center space-x-6 mb-10">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-7 w-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-7 w-7" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-7 w-7" />
                </a>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-transform hover:scale-105 shadow-lg">
                  <a href="/alex-johnson-cv.pdf" download> {/* Placeholder CV link */}
                    <Download className="mr-2 h-5 w-5" /> Download CV
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-transform hover:scale-105 shadow-lg">
                  <Link href="/contact">
                    Contact Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto md:max-w-none h-80 md:h-[450px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Image
                src="https://placehold.co/600x600.png"
                alt="Alex Johnson - Frontend Developer"
                width={600}
                height={600}
                priority
                className="rounded-full object-cover shadow-2xl border-4 border-card relative z-10"
                data-ai-hint="developer portrait"
              />
            </div>
          </div>
        </div>
      </section>
      
      <ProjectShowcase />
    </div>
  );
}
