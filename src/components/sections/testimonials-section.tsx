
// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FADE_DURATION = 300; // ms
const CYCLE_INTERVAL = 3000; // ms

export function TestimonialsSection() {
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleCycle = React.useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setDisplayIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      setIsTransitioning(false);
    }, FADE_DURATION);
  }, []);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(handleCycle, CYCLE_INTERVAL);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovering, handleCycle, testimonials.length]);

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-16 md:py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Words From Colleagues</h2>
          <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  const currentTestimonial = testimonials[displayIndex];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Words From Colleagues</h2>
        <div
          className="max-w-lg mx-auto h-[420px] flex items-center justify-center" // Container for centering and height
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {currentTestimonial && (
            <Card
              className={`w-full h-full bg-card shadow-xl border-border/70 flex flex-col transition-opacity duration-${FADE_DURATION} ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <CardContent className="p-6 md:p-8 flex-grow flex flex-col items-center text-center justify-center">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent mb-4 md:mb-6" />
                <p className="text-foreground/80 italic leading-relaxed mb-4 md:mb-6 flex-grow min-h-[80px] md:min-h-[100px] text-sm md:text-base">
                  "{currentTestimonial.quote}"
                </p>
                <Avatar className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 border-2 border-primary">
                  <AvatarImage src={currentTestimonial.avatarUrl} alt={currentTestimonial.name} data-ai-hint={currentTestimonial.dataAiHint} />
                  <AvatarFallback>{currentTestimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-md md:text-lg text-primary">{currentTestimonial.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{currentTestimonial.title}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
