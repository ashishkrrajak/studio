
// src/components/sections/educational-journey-section.tsx
import { Card } from '@/components/ui/card';
import { educationalJourneyPoints } from '@/data/journey-data';

export function EducationalJourneySection() {
  return (
    <section id="educational-journey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Educational Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/50 -translate-x-1/2 hidden md:block"></div>
          {educationalJourneyPoints.map((point, index) => (
            <div key={index} className={`mb-12 flex md:items-start w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="hidden md:flex md:w-5/12"></div>
              <div className="hidden md:flex justify-center md:w-2/12">
                <div className="relative">
                  <div className="absolute w-8 h-8 bg-primary rounded-full z-10 left-1/2 top-4 -translate-x-1/2 border-4 border-card shadow-lg flex items-center justify-center">
                    <point.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-5/12">
                <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 p-6 rounded-lg">
                   <div className="flex items-start md:hidden mb-4">
                     <div className="w-8 h-8 bg-primary rounded-full z-10 border-4 border-card shadow-lg flex items-center justify-center mr-4 mt-1 shrink-0">
                       <point.icon className="h-4 w-4 text-primary-foreground" />
                     </div>
                     <div>
                       <h3 className="text-xl font-semibold text-accent mb-1">{point.title}</h3>
                       <p className="text-sm text-muted-foreground mb-3">{point.date}</p>
                     </div>
                  </div>
                   <h3 className="hidden md:block text-xl font-semibold text-accent mb-1">{point.title}</h3>
                   <p className="hidden md:block text-sm text-muted-foreground mb-3">{point.date}</p>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 leading-relaxed">
                    {point.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
