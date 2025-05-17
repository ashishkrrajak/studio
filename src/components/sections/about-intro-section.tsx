
// src/components/sections/about-intro-section.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Puzzle, Code } from 'lucide-react';

export function AboutIntroSection() {
  return (
    <section id="about-intro" className="fade-in-section">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl bg-card border-border">
          <div className="md:flex md:items-stretch">
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-4xl md:text-5xl font-bold text-primary mb-3">About Me</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  Hello! I'm Ashish Kumar Rajak, a dedicated Java Full Stack Developer. I specialize in architecting and developing robust, scalable, and high-performance applications, from backend microservices with Spring Boot to dynamic frontends with modern JavaScript frameworks.
                </p>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  My passion lies in tackling complex challenges and delivering elegant, efficient solutions. I thrive in collaborative environments, leveraging Agile methodologies to build impactful software. I'm proficient across the full development lifecycle, from concept to deployment and maintenance.
                </p>
                <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                  Beyond coding, I'm an avid learner, always exploring new tools and techniques to enhance my craft and contribute to innovative projects.
                </p>
              </CardContent>
            </div>
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://placehold.co/800x1200.png"
                alt="Ashish Kumar Rajak working at a desk with Java code"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                data-ai-hint="workspace developer java"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { icon: Zap, title: "Scalability", text: "Building systems that grow with demand." },
            { icon: Puzzle, title: "Problem Solving", text: "Elegant solutions for complex challenges." },
            { icon: Code, title: "Clean Code", text: "Focusing on maintainable and efficient code." },
          ].map((item, idx) => (
            <div key={item.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg border border-border/70 hover:shadow-xl transition-shadow fade-in-section" style={{animationDelay: `${0.2 * (idx + 1)}s`}}>
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
