// src/app/page.tsx
import { ProjectShowcase } from '@/components/project-showcase';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const codeSnippets = [
    { text: "console.log('Hello World!');", top: "15%", left: "55%", opacity: "opacity-40", animationDelay: "0.1s" },
    { text: "<html>", top: "25%", left: "75%", opacity: "opacity-30", animationDelay: "0.2s" },
    { text: "$ npm install react", top: "40%", left: "50%", opacity: "opacity-50", animationDelay: "0.3s" },
    { text: "class='container'>", top: "60%", left: "80%", opacity: "opacity-30", animationDelay: "0.4s" },
    { text: "Mobile First */", top: "75%", left: "60%", opacity: "opacity-40", animationDelay: "0.5s" },
    { text: "Grid Layout", top: "50%", left: "45%", opacity: "opacity-20", animationDelay: "0.6s" },
    { text: "// Responsive Design", top: "5%", left: "65%", opacity: "opacity-30", animationDelay: "0.7s" },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden fade-in-section py-16 md:py-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:pr-8 text-center md:text-left">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight">
                  FRONTEND
                </span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight mt-1 md:mt-2">
                  DEVELOPER
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                I'm Alex Johnson - a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">web-developer</span> with a passion for creating beautiful, responsive, and user-centric websites.
              </p>
              <div className="flex justify-center md:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
                >
                  <Link href="/#projects">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative w-full max-w-md mx-auto md:max-w-lg h-80 md:h-[500px] group">
              <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>
              <Image
                src="https://placehold.co/600x700.png" 
                alt="Alex Johnson - Frontend Developer"
                width={600}
                height={700}
                priority
                className="rounded-lg object-cover shadow-2xl border-2 border-card/50 relative z-10 transform transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="developer portrait professional"
              />
              {/* Decorative Code Snippets */}
              {codeSnippets.map((snippet, index) => (
                <div
                  key={index}
                  className={`absolute font-mono text-xs md:text-sm text-foreground/70 ${snippet.opacity} transform group-hover:scale-110 transition-all duration-500 animate-fadeIn`}
                  style={{ top: snippet.top, left: snippet.left, animationDelay: snippet.animationDelay }}
                >
                  {snippet.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <ProjectShowcase />
    </div>
  );
}

// Add fadeIn animation to globals.css if it's not already there for the code snippets.
// @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
// The base fadeIn is already in globals.css so this comment is for context.
