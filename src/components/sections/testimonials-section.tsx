
// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds

    return () => clearInterval(timer);
  }, [isHovering, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Words From Colleagues</h2>
        <div 
          className="relative w-full min-h-[400px] md:min-h-[350px] flex items-center justify-center" // Adjusted min-height
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name + index} 
              className={`absolute inset-x-0 top-0 transition-opacity duration-1000 ease-in-out transform 
                          ${index === currentIndex 
                            ? 'opacity-100 translate-y-0 z-10' 
                            : 'opacity-0 -translate-y-5 pointer-events-none z-0'
                          }`}
              style={{transitionDelay: index === currentIndex ? '0.3s' : '0s'}} // Delay appearance slightly
            >
              <Card className="bg-card shadow-lg hover:shadow-xl border-border/70 flex flex-col w-full max-w-lg mx-auto"> {/* Max width for better readability */}
                <CardContent className="p-8 flex-grow flex flex-col items-center text-center">
                  <Quote className="w-10 h-10 text-accent mb-6" />
                  <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow min-h-[100px]">"{testimonial.quote}"</p>
                  <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                    <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
                    <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        {/* Optional: Navigation dots */}
        {testimonials.length > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-primary' : 'bg-muted hover:bg-primary/50'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        )}
      </div>
    </section>
  );
}
