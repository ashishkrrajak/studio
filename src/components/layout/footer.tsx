// src/components/layout/footer.tsx
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-8 mt-auto shadow-t-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} FolioForge. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
