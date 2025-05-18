// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FADE_DURATION = 500; // ms - Duration of the fade-out/fade-in animation
const CYCLE_INTERVAL = 3000; // ms - Time before the next card starts its update cycle
const NUM_DISPLAY_CARDS = 3;

export function TestimonialsSection() {
  const [numEffectiveDisplayCards, setNumEffectiveDisplayCards] = React.useState(0);
  
  const [currentTestimonialIndices, setCurrentTestimonialIndices] = React.useState<number[]>([]);
  const [fadingCardSlot, setFadingCardSlot] = React.useState<number | null>(null); // 0, 1, or 2
  const [cardToUpdateNext, setCardToUpdateNext] = React.useState<number>(0); // 0, 1, or 2
  const [isHovering, setIsHovering] = React.useState(false);
  
  const cycleTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const fadeTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const effectiveCards = Math.min(NUM_DISPLAY_CARDS, testimonials.length);
    setNumEffectiveDisplayCards(effectiveCards);
    
    if (testimonials.length > 0) {
      const initialIndices = Array.from(
        { length: effectiveCards },
        (_, k) => k % testimonials.length
      );
      setCurrentTestimonialIndices(initialIndices);
    } else {
      setCurrentTestimonialIndices([]);
    }
  }, []);


  const triggerNextCardUpdate = React.useCallback(() => {
    if (isHovering || testimonials.length === 0 || numEffectiveDisplayCards === 0) {
      return;
    }

    setFadingCardSlot(cardToUpdateNext); // Start fade-out for the designated card slot

    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = setTimeout(() => {
      setCurrentTestimonialIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        if (newIndices.length > 0 && testimonials.length > 0) {
             // Ensure the next testimonial is different from what's currently displayed in other slots if possible
            let nextPossibleIndex = (newIndices[cardToUpdateNext] + numEffectiveDisplayCards) % testimonials.length;
            
            // This logic is complex if testimonials.length is small.
            // A simpler approach is just to advance its own pointer.
            if (testimonials.length > numEffectiveDisplayCards) {
                 // Try to avoid immediate collision with other cards
                const otherVisibleIndices = newIndices.filter((_, i) => i !== cardToUpdateNext);
                while(otherVisibleIndices.includes(nextPossibleIndex)) {
                    nextPossibleIndex = (nextPossibleIndex + 1) % testimonials.length;
                }
                newIndices[cardToUpdateNext] = nextPossibleIndex;
            } else {
                 // If not enough unique items, just cycle its own
                 newIndices[cardToUpdateNext] = (newIndices[cardToUpdateNext] + 1) % testimonials.length;
            }

        }
        return newIndices;
      });
      setFadingCardSlot(null); // Start fade-in for the card slot with new content
      setCardToUpdateNext((prev) => (prev + 1) % numEffectiveDisplayCards);
    }, FADE_DURATION);

  }, [isHovering, cardToUpdateNext, testimonials.length, numEffectiveDisplayCards]);

  React.useEffect(() => {
    if (isHovering || testimonials.length === 0 || numEffectiveDisplayCards === 0) {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
      return;
    }

    if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    cycleTimerRef.current = setInterval(triggerNextCardUpdate, CYCLE_INTERVAL);

    return () => {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, [isHovering, triggerNextCardUpdate, testimonials.length, numEffectiveDisplayCards]);


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

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary">Words From Colleagues</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {Array.from({ length: numEffectiveDisplayCards }).map((_, slotIndex) => {
            const testimonialIndex = currentTestimonialIndices[slotIndex];
            // Ensure testimonialIndex is valid before trying to access testimonials[testimonialIndex]
            if (testimonialIndex === undefined || testimonialIndex >= testimonials.length) {
              // This can happen if testimonials array is empty or very short initially
              // Render a placeholder or null, or ensure initialIndices are always valid
              return <div key={`card-slot-placeholder-${slotIndex}`} className="w-full h-[400px] bg-muted rounded-lg"></div>; 
            }
            const testimonial = testimonials[testimonialIndex];
            if (!testimonial) return null; // Should not happen if testimonialIndex is valid

            return (
              <Card
                key={`card-slot-${slotIndex}`} // Stable key for the slot
                className={`w-full bg-card shadow-xl border-border/70 flex flex-col transition-opacity duration-500 ease-in-out ${
                  fadingCardSlot === slotIndex ? 'opacity-0' : 'opacity-100'
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
