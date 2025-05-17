// src/components/layout/header.tsx
import Link from 'next/link';
import { Briefcase, User, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors">
            FolioForge
          </Link>
          <nav className="flex space-x-6 items-center">
            <Link href="/" className="flex items-center text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Briefcase className="mr-2 h-5 w-5" />
              Projects
            </Link>
            <Link href="/about" className="flex items-center text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <User className="mr-2 h-5 w-5" />
              About
            </Link>
            <Link href="/contact" className="flex items-center text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium">
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
