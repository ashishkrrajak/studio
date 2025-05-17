// src/components/layout/footer.tsx
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground py-10 mt-auto border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Linkedin className="h-7 w-7" />
          </a>
          <a href="https://twitter.com/alexjohnsondev" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Twitter className="h-7 w-7" />
          </a>
           <a href="mailto:alex.johnson.dev@example.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110">
            <Mail className="h-7 w-7" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Alex Johnson. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Crafted with <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Next.js</a> and <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  );
}
