
// src/components/layout/header.tsx
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-3 border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity tracking-tight">
            Ashish Kumar Rajak
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/#about" className="text-md font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/#skills" className="text-md font-medium text-foreground/80 hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="/#journey" className="text-md font-medium text-foreground/80 hover:text-primary transition-colors">
              Journey
            </Link>
            <Link href="/#contact" className="text-md font-medium text-foreground/80 hover:text-primary transition-colors">
              Let's Connect!
            </Link>
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
