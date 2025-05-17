// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

const FLIP_CYCLE_INTERVAL = 3000; // Time for the start of a new flip sequence
const FLIP_ANIMATION_DURATION = 800; // Must match CSS transition in globals.css
const STAGGER_CARD2_DELAY = FLIP_ANIMATION_DURATION; // Delay for Card 2 flip after Card 1 starts

export function TestimonialsSection() {
  const [dataPointer1, setDataPointer1] = React.useState(0);
  const [dataPointer2, setDataPointer2] = React.useState(testimonials.length > 1 ? 1 : 0);

  const [isFlipped1, setIsFlipped1] = React.useState(false);
  const [isFlipped2, setIsFlipped2] = React.useState(false);
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    if (isHovering || testimonials.length === 0) {
      return;
    }

    const cycleId = setInterval(() => {
      // --- Flip Card 1 ---
      if (testimonials.length > 0) {
        setIsFlipped1(true); // Start flipping card 1
        setTimeout(() => {
          setDataPointer1(prev => (prev + (testimonials.length === 1 ? 1 : 2)) % testimonials.length);
          setIsFlipped1(false); // Flip card 1 back to show new front

          // --- Flip Card 2 (staggered) ---
          if (testimonials.length > 1) {
            setTimeout(() => {
              setIsFlipped2(true); // Start flipping card 2
              setTimeout(() => {
                setDataPointer2(prev => (prev + 2) % testimonials.length);
                setIsFlipped2(false); // Flip card 2 back
              }, FLIP_ANIMATION_DURATION); // Changed: Wait for full flip
            }, STAGGER_CARD2_DELAY);
          }
        }, FLIP_ANIMATION_DURATION); // Changed: Wait for full flip
      }
    }, FLIP_CYCLE_INTERVAL);

    return () => clearInterval(cycleId);
  }, [isHovering, testimonials.length]);
  
  // Prepare content for rendering
  const testimonial1Front = testimonials.length > 0 ? testimonials[dataPointer1] : undefined;
  const testimonial1Back = testimonials.length > 0 ? testimonials[(dataPointer1 + (testimonials.length === 1 ? 1 : 2)) % testimonials.length] : undefined;
  
  let testimonial2Front: Testimonial | undefined;
  let testimonial2Back: Testimonial | undefined;

  if (testimonials.length > 1) {
    testimonial2Front = testimonials[dataPointer2];
    testimonial2Back = testimonials[(dataPointer2 + 2) % testimonials.length];
  }


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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Card 1 */}
          <div className="testimonial-flip-card-outer">
            <div className={`flip-card-inner ${isFlipped1 ? 'is-flipped' : ''}`}>
              <div className="flip-card-front">
                {renderTestimonialCardContent(testimonial1Front)}
              </div>
              <div className="flip-card-back">
                {renderTestimonialCardContent(testimonial1Back)}
              </div>
            </div>
          </div>

          {/* Card 2: Only render if there's more than one testimonial */}
          {testimonials.length > 1 && (
            <div className="testimonial-flip-card-outer">
              <div className={`flip-card-inner ${isFlipped2 ? 'is-flipped' : ''}`}>
                <div className="flip-card-front">
                  {renderTestimonialCardContent(testimonial2Front)}
                </div>
                <div className="flip-card-back">
                  {renderTestimonialCardContent(testimonial2Back)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
