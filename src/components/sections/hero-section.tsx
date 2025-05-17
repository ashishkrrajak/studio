
// src/components/sections/hero-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadCVButton } from '@/components/download-cv-button';
import { Mail } from 'lucide-react';
import { javaCodeSnippets } from '@/data/hero-data';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem-70px)] flex items-center justify-center overflow-hidden fade-in-section py-16 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6"> {/* Reduced font size */}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight">
                JAVA FULL STACK
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight mt-1 md:mt-2">
                DEVELOPER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              Hi, I'm Ashish Kumar Rajak - a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Java Full Stack Developer</span> with a passion for building robust, scalable, and efficient applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                asChild
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
                style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
              >
                <Link href="/#contact">
                  Contact Me
                  <Mail className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <DownloadCVButton />
            </div>
          </div>
          
          <div className="relative w-full max-w-md mx-auto md:max-w-lg h-80 md:h-[500px] group">
            <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
            <Image
              src="/images/profile.jpg" 
              alt="Ashish Kumar Rajak - Java Full Stack Developer"
              width={800}
              height={800}
              priority
              className="rounded-lg object-cover shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="background removal" 
            />
            {javaCodeSnippets.map((snippet, index) => (
              <div
                key={index}
                className={`absolute font-mono text-xs md:text-sm text-foreground/70 ${snippet.opacity} transform group-hover:scale-110 transition-all duration-500 animate-fadeIn`}
                style={{ animationDelay: snippet.animationDelay, top: snippet.top, left: snippet.left }}
              >
                {snippet.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
