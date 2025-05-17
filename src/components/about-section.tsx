// src/components/about-section.tsx
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Briefcase, Coffee } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-16 fade-in-section">
      <Card className="overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3">
            <div className="relative h-64 md:h-full w-full">
              <Image
                src="https://placehold.co/400x600.png"
                alt="Professional Headshot"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="professional person"
              />
            </div>
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-4xl font-bold text-primary mb-2">About Me</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                Hello! I'm a passionate and results-driven [Your Profession/Title, e.g., Full Stack Developer] with a knack for creating elegant and efficient digital solutions. With [X] years of experience in the tech industry, I've honed my skills in [mention 2-3 key skills, e.g., front-end development, backend architecture, UI/UX design].
              </p>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                My journey in technology began with [mention a brief starting point or inspiration]. Since then, I've had the privilege of working on diverse projects, from [mention a type of project] to [mention another type]. I thrive on challenges and am constantly exploring new technologies to stay at the forefront of innovation.
              </p>
              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                When I'm not coding, you can find me [mention a hobby or interest, e.g., exploring hiking trails, experimenting with new recipes, or contributing to open-source projects]. I believe in continuous learning and am always excited to connect with like-minded professionals and collaborators.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                  <Briefcase className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold text-lg">Experience</h3>
                  <p className="text-sm text-muted-foreground">[X]+ Years</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold text-lg">Projects</h3>
                  <p className="text-sm text-muted-foreground">[Y]+ Completed</p>
                </div>
                <div className="flex flex-col items-center p-4 bg-muted/50 rounded-lg">
                  <Coffee className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold text-lg">Passion</h3>
                  <p className="text-sm text-muted-foreground">Code & Coffee</p>
                </div>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </section>
  );
}
