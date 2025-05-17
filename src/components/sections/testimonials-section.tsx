
// src/components/sections/testimonials-section.tsx
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { Testimonial } from '@/types';
import { Quote } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    quote: "Ashish is a phenomenal Java Full Stack Developer. His problem-solving skills and deep understanding of the Spring ecosystem were invaluable to our project's success. A true team player!",
    name: "Emily Carter",
    title: "Lead Software Architect, Tech Solutions Inc.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "architect person"
  },
  {
    quote: "Ashish's ability to seamlessly bridge backend and frontend development is remarkable. He consistently delivered robust and scalable solutions. Highly recommended!",
    name: "Michael B. Jordan",
    title: "Engineering Manager, Innovate Solutions",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "manager professional"
  },
  {
    quote: "Working alongside Ashish was a masterclass in clean code and efficient design. His dedication to quality and collaborative spirit make him a standout developer.",
    name: "Priya Sharma",
    title: "Senior Backend Engineer, CloudNine Ltd.",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "engineer female"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-card/50 fade-in-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">Words From Colleagues</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow border-border/70 flex flex-col">
              <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
                <Quote className="w-10 h-10 text-accent mb-6" />
                <p className="text-foreground/80 italic leading-relaxed mb-6 flex-grow">"{testimonial.quote}"</p>
                <Avatar className="w-20 h-20 mb-4 border-2 border-primary">
                  <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint}/>
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
