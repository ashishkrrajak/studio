
// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FLIP_INTERVAL = 3000; // 3 seconds
const FLIP_ANIMATION_DURATION = 800; // Corresponds to CSS transition

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [nextIndex, setNextIndex] = React.useState(1 % testimonials.length);
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonial = testimonials[nextIndex];

  const triggerFlip = React.useCallback(() => {
    setIsFlipped(true);
    // After half the animation, update content and flip back
    setTimeout(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((prevNextIndex) => (prevNextIndex + 1) % testimonials.length);
      setIsFlipped(false);
    }, FLIP_ANIMATION_DURATION / 2);
  }, [nextIndex]);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(triggerFlip, FLIP_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, triggerFlip, testimonials.length]);

  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  
  const renderTestimonialCardContent = (testimonial: Testimonial | undefined) => {
    if (!testimonial) {
      return <div className="w-full h-full bg-card flex items-center justify-center"><p>Loading...</p></div>;
    }
    return (
      <Card className="w-full h-full bg-card shadow-xl border-border/70 flex flex-col">
        <CardContent className="p-8 flex-grow flex flex-col items-center text-center justify-center">
          <Quote className="w-10 h-10 text-accent mb-6" />
          <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow min-h-[100px] text-sm md:text-base">
            "{testimonial.quote}"
          </p>
          <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
            <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
            <AvatarFallback>{testimonial.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
        </CardContent>
      </Card>
    );
  };


  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Words From Colleagues</h2>
        <div 
          className="testimonial-flip-card-outer" // Use specific class for height
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

    