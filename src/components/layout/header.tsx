// src/components/layout/header.tsx
import Link from 'next/link';
import { Briefcase, User, Mail, Terminal } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
            <Terminal className="mr-3 h-8 w-8" />
            Alex Johnson
          </Link>
          <nav className="hidden md:flex space-x-2 items-center">
            <Link href="/#projects" className="flex items-center text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md text-sm font-medium">
              <Briefcase className="mr-2 h-4 w-4" />
              Projects
            </Link>
            <Link href="/about" className="flex items-center text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md text-sm font-medium">
              <User className="mr-2 h-4 w-4" />
              About
            </Link>
            <Link href="/contact" className="flex items-center text-foreground hover:text-primary transition-colors px-4 py-2 rounded-md text-sm font-medium bg-primary/10 hover:bg-primary/20">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Link>
          </nav>
          {/* TODO: Add mobile navigation (e.g., hamburger menu) */}
        </div>
      </div>
    </header>
  );
}
