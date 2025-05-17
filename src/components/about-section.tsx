// src/components/about-section.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Briefcase, Coffee, Zap, Puzzle, Users } from 'lucide-react';

export function AboutSection() {
  const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Git & GitHub', 'REST APIs', 'UI/UX Principles', 'Agile Methodologies'];
  
  return (
    <section id="about" className="py-16 md:py-24 fade-in-section">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden shadow-xl bg-card border-border">
          <div className="md:flex md:items-stretch">
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-4xl md:text-5xl font-bold text-primary mb-3">About Me</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  Hello! I'm Alex Johnson, a dedicated Frontend Developer with a strong focus on creating intuitive, performant, and visually appealing web applications. With 5+ years of experience, I specialize in translating complex requirements into elegant, user-friendly interfaces.
                </p>
                <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                  My passion lies at the intersection of design and technology. I thrive on building responsive, accessible, and scalable solutions using modern JavaScript frameworks like React and Next.js, coupled with the power of TypeScript and utility-first CSS with Tailwind.
                </p>
                <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                  Beyond coding, I'm an avid learner, always exploring new tools and techniques to enhance my craft. I believe in collaborative development and enjoy working in agile environments to deliver high-quality products.
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">My Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm px-4 py-2 bg-secondary/70 text-secondary-foreground hover:bg-secondary transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </div>
            <div className="md:w-1/3 relative min-h-[300px] md:min-h-0">
              <Image
                src="https://placehold.co/800x1200.png"
                alt="Alex Johnson working at a desk"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="workspace desk"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent md:bg-gradient-to-r md:from-card md:via-card/50 md:to-transparent"></div>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-center">
          {[
            { icon: Zap, title: "Performance", text: "Optimizing for speed and efficiency." },
            { icon: Puzzle, title: "Problem Solving", text: "Creative solutions to complex challenges." },
            { icon: Users, title: "User-Centric", text: "Focusing on intuitive UX/UI." },
          ].map(item => (
            <div key={item.title} className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg border border-border/70 hover:shadow-xl transition-shadow">
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
