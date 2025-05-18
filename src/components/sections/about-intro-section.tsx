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
                  I am a Full-Stack Software Developer with 2.5+ years of experience in building scalable applications using Java, Spring Boot, and Angular. Skilled in back-end development, front-end integration, and REST API design, I am focused on solving complex challenges and delivering influential solutions in Agile environments.
                </p>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  My experience includes implementing high-impact features such as bulk data processing, payment gateway integrations, and API development, alongside critical system migrations and performance optimizations. I thrive in collaborative Agile settings, contributing to the full development lifecycle, from concept and design through to deployment and maintenance, always aiming to build impactful software.
                </p>
                <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                  Beyond coding, I'm an avid learner, always exploring new tools and techniques to enhance my craft and contribute to innovative projects.
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
