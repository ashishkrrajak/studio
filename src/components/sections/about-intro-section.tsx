// src/components/sections/about-intro-section.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Puzzle, Code } from 'lucide-react';

export function AboutIntroSection() {
  const coreStrengths = [
    { icon: Zap, title: "Scalability", text: "Building systems that grow with demand." },
    { icon: Puzzle, title: "Problem Solving", text: "Elegant solutions for complex challenges." },
    { icon: Code, title: "Clean Code", text: "Focusing on maintainable and efficient code." },
  ];

  return (
    <section id="about-intro">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl bg-card border-border">
          <div className="md:flex md:items-stretch">
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-4xl md:text-5xl font-bold text-primary mb-3">About Me</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  I’m a Full-Stack Software Developer focused on building scalable and efficient applications using Java, Spring Boot, and Angular. My work spans backend development, API design, and frontend integration, with experience delivering features like bulk data processing, payment gateway integration, and system migrations.
                </p>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  Throughout my journey, I’ve faced real-world challenges that pushed me to grow—debugging complex issues, optimizing performance, and adapting to evolving requirements. These experiences taught me to think beyond code, consider long-term maintainability, and build with both users and systems in mind.
                </p>
                <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                  Driven by curiosity and a growth mindset, I’m always learning—whether it’s a new framework, architectural pattern, or tool that can improve development. I strive to create meaningful software and continuously evolve as a developer.
                </p>
              </CardContent>
            </div>
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?t=st=1747492111~exp=1747495711~hmac=4f82d45da9d03f492a3cf5b54c84d36afe3310ca197c83a1736463ceca42eb5b&w=2000"
                alt="Coding screen workspace"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="coding screen"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center">
          {coreStrengths.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg border border-border/70 hover:shadow-xl transition-shadow" >
              <item.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-semibold text-xl text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
