
// src/components/layout/header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu, Home, User, Wrench, Briefcase, Mail } from 'lucide-react';
import * as React from 'react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const navLinks = [
    { href: "/#about", label: "About", icon: User },
    { href: "/#skills", label: "Skills", icon: Wrench },
    { href: "/#journey", label: "Journey", icon: Briefcase },
    { href: "/#contact", label: "Contact", icon: Mail },
  ];

  // Filter out "Contact" link for desktop view
  const desktopNavLinks = navLinks.filter(link => link.label !== "Contact");

  return (
    <header className="bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 py-3 border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hover:opacity-80 transition-opacity tracking-tight">
            Ashish Kumar Rajak
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {desktopNavLinks.map((link) => (
               <Button
                key={link.label}
                asChild
                variant="ghost"
                size="sm"
                className="text-foreground/80 focus-visible:ring-primary transition-all duration-200 ease-in-out hover:shadow-[0_0_0_2px_hsl(var(--accent))_inset]"
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-primary">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] p-0 flex flex-col bg-sidebar text-sidebar-foreground">
                <SheetHeader className="p-5 border-b border-sidebar-border">
                  <SheetTitle asChild>
                    <SheetClose asChild>
                      <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        Ashish Kumar Rajak
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-grow p-4 space-y-2">
                  <SheetClose asChild>
                    <Link 
                      href="/" 
                      className="flex items-center py-3 px-4 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                    >
                      <Home className="mr-3 h-5 w-5" />
                      Home
                    </Link>
                  </SheetClose>
                  {navLinks.map((link) => ( // Mobile nav still uses all navLinks
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="flex items-center py-3 px-4 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                      >
                        <link.icon className="mr-3 h-5 w-5" />
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-4 border-t border-sidebar-border mt-auto">
                  <p className="text-xs text-muted-foreground text-center">
                    &copy; {new Date().getFullYear()} Ashish K. Rajak
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
