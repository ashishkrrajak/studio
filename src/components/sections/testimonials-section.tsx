
// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FADE_DURATION = 600; // ms
const CYCLE_INTERVAL = 3000; // ms, time testimonial is visible before starting to fade out

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const scheduleNextCycle = React.useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false);
      }, FADE_DURATION);
    }, CYCLE_INTERVAL + FADE_DURATION);
  }, []);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) { // If only one or zero, no need to cycle
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }
    scheduleNextCycle(); // Initial schedule

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovering, scheduleNextCycle, testimonials.length]);

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

  const getDisplayedTestimonials = () => {
    if (testimonials.length === 0) return [];
    const displayCount = Math.min(testimonials.length, 3);
    const result: Testimonial[] = [];
    for (let i = 0; i < displayCount; i++) {
      result.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return result;
  };

  const displayedTestimonials = getDisplayedTestimonials();

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Words From Colleagues</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {displayedTestimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${currentIndex}-${index}`} // Dynamic key to ensure re-render for fade effect
              className={`w-full bg-card shadow-xl border-border/70 flex flex-col transition-opacity duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <CardContent className="p-6 md:p-8 flex-grow flex flex-col items-center text-center justify-center min-h-[400px]">
                <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent mb-4 md:mb-6" />
                <p className="text-foreground/80 italic leading-relaxed mb-4 md:mb-6 flex-grow text-sm md:text-base">
                  "{testimonial.quote}"
                </p>
                <Avatar className="w-16 h-16 md:w-20 md:h-20 mb-3 md:mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-md md:text-lg text-primary">{testimonial.name}</h4>
                <p className="text-xs md:text-sm text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
