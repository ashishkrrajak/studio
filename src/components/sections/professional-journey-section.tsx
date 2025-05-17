
// src/components/sections/professional-journey-section.tsx
import { Card } from '@/components/ui/card';
import { professionalJourneyPoints } from '@/data/journey-data';

export function ProfessionalJourneySection() {
  return (
    // Removed fade-in-section, will be handled by AnimateOnScrollWrapper
    <section id="professional-journey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Professional Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
          {professionalJourneyPoints.map((point, index) => (
            <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex md:w-5/12"></div>
              <div className="hidden md:flex justify-center md:w-2/12">
                <div className="relative">
                  <div className="absolute w-8 h-8 bg-primary rounded-full z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-card shadow-lg flex items-center justify-center">
                    <point.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 p-6 rounded-lg">
                  <div className="flex items-center md:hidden mb-4">
                     <div className="w-8 h-8 bg-primary rounded-full z-10 border-4 border-card shadow-lg flex items-center justify-center mr-4">
                       <point.icon className="h-4 w-4 text-primary-foreground" />
                     </div>
                     <h3 className="text-xl font-semibold text-accent">{point.title}</h3>
                  </div>
                   <h3 className="hidden md:block text-xl font-semibold text-accent mb-3">{point.title}</h3>
                  <p className="text-md text-foreground/80 leading-relaxed">{point.text}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
