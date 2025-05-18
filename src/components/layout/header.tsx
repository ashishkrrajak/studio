// src/components/layout/header.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-3 border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity tracking-tight">
            Ashish Kumar Rajak
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-foreground/80 focus-visible:ring-primary transition-all duration-200 ease-in-out hover:shadow-[0_0_0_2px_hsl(var(--accent))]"
            >
              <Link href="/#about">About</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-foreground/80 focus-visible:ring-primary transition-all duration-200 ease-in-out hover:shadow-[0_0_0_2px_hsl(var(--accent))]"
            >
              <Link href="/#skills">Skills</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-foreground/80 focus-visible:ring-primary transition-all duration-200 ease-in-out hover:shadow-[0_0_0_2px_hsl(var(--accent))]"
            >
              <Link href="/#journey">Journey</Link>
            </Button>
          </nav>
          <div className="md:hidden">
            {/* Placeholder for mobile menu icon */}
            <button className="text-foreground/80 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
