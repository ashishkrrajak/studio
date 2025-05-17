
// src/components/sections/testimonials-section.tsx
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials-data';
import type { Testimonial } from '@/types';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const advanceSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  React.useEffect(() => {
    if (isHovering || testimonials.length <= 1) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      return;
    }

    timeoutRef.current = setTimeout(advanceSlide, 1000); // Change testimonial every 1 second

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isHovering, testimonials.length, advanceSlide]);

  if (!testimonials || testimonials.length === 0) {
    return null; // Don't render if no testimonials
  }

  const getVisibleTestimonials = () => {
    const visible: Testimonial[] = [];
    if (testimonials.length === 0) return visible;
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Words From Colleagues</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px] md:min-h-[350px]"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {visibleTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${currentIndex}-${index}`} // Ensure key changes for re-render/animation
              className="bg-card shadow-lg hover:shadow-xl border-border/70 flex flex-col transition-all duration-500 ease-in-out opacity-0 animate-testimonial-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 flex-grow flex flex-col items-center text-center">
                <Quote className="w-10 h-10 text-accent mb-6" />
                <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow min-h-[100px]">"{testimonial.quote}"</p>
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                  <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add this to your globals.css or a relevant CSS file
/*
@keyframes testimonial-fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-testimonial-fade-in {
  animation: testimonial-fade-in 0.5s ease-out forwards;
}
*/
