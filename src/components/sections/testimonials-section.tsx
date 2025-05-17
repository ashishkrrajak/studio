// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FLIP_INTERVAL = 3000; // Time for a new testimonial to be shown
const FLIP_ANIMATION_DURATION = 800; // Must match CSS transition in globals.css

export function TestimonialsSection() {
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) {
      return;
    }

    const cycleId = setInterval(() => {
      setIsFlipped(true); // Start flipping to show the "back"

      setTimeout(() => {
        // After flip animation completes, update content and reset flip state
        setDisplayIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        setIsFlipped(false); // Snap to new front face (which was the back)
      }, FLIP_ANIMATION_DURATION);

    }, FLIP_INTERVAL);

    return () => clearInterval(cycleId);
  }, [isHovering, displayIndex, testimonials.length]);
  
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
  const nextTestimonial = testimonials.length > 1 ? testimonials[(displayIndex + 1) % testimonials.length] : currentTestimonial;

  const renderTestimonialCardContent = (testimonial: Testimonial | undefined) => {
    if (!testimonial) {
      return <div className="w-full h-full bg-card flex items-center justify-center p-4"><p className="text-muted-foreground">No testimonial data.</p></div>;
    }
    return (
      <Card className="w-full h-full bg-card shadow-xl border-border/70 flex flex-col">
        <CardContent className="p-6 md:p-8 flex-grow flex flex-col items-center text-center justify-center">
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-accent mb-4 md:mb-6" />
          <p className="text-foreground/80 italic leading-relaxed mb-4 md:mb-6 flex-grow min-h-[80px] md:min-h-[100px] text-sm md:text-base">
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
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Words From Colleagues</h2>
        <div 
          className="testimonial-flip-card-outer" // This div now controls centering and max-width
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="flip-card-front">
              {renderTestimonialCardContent(currentTestimonial)}
            </div>
            <div className="flip-card-back">
              {renderTestimonialCardContent(nextTestimonial)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
