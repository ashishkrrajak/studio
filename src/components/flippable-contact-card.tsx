
// src/components/flippable-contact-card.tsx
'use client';

import * as React from 'react';
import { ContactForm, type ContactFormHandle } from './contact-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, ArrowRight, CheckCircle, Mail, Linkedin, Phone } from 'lucide-react';

interface FlippableContactCardProps {
  id?: string;
}

export function FlippableContactCard({ id }: FlippableContactCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const contactFormRef = React.useRef<ContactFormHandle>(null);

  const handleGetInTouchClick = () => {
    setIsFlipped(true);
    setShowSuccessMessage(false);
  };

  const handleFormSuccess = () => {
    setIsFlipped(false);
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 6000);
  };

  React.useEffect(() => {
    const currentCardElement = document.getElementById(id || '');
    if (!currentCardElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isFlipped) {
          // Check if form is dirty before flipping back
          if (contactFormRef.current && !contactFormRef.current.isFormDirty()) {
            setIsFlipped(false);
          }
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    observer.observe(currentCardElement);

    return () => {
      observer.unobserve(currentCardElement);
    };
  }, [isFlipped, id]);


  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        {/* This div now uses 'contact-flip-card-outer' to match CSS for height and perspective */}
        <div className="contact-flip-card-outer w-full max-w-2xl mx-auto">
          <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
            {/* Front of the card */}
            <div className="flip-card-front">
              <Card className="w-full h-full p-8 md:p-12 bg-gradient-to-br from-primary/90 to-accent/90 shadow-2xl border-none flex flex-col items-center justify-center text-primary-foreground">
                {showSuccessMessage ? (
                  <>
                    <CheckCircle className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Thank You!</h2>
                    <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                      Your message has been sent successfully. I'll get back to you soon.
                    </p>
                     <Button
                      size="lg"
                      variant="secondary"
                      onClick={() => setShowSuccessMessage(false)}
                      className="bg-card hover:bg-card/90 text-card-foreground transition-transform hover:scale-105 shadow-xl py-3 px-8 text-lg mt-4"
                    >
                      Got it!
                    </Button>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Collaborating?</h2>
                    <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                      I'm always excited to discuss new projects, innovative ideas, or potential opportunities. Let's connect and build something amazing together!
                    </p>
                    <div className="my-6 flex flex-col items-center space-y-3 text-primary-foreground/90">
                      <a href="mailto:ashish.kumarrajak765@gmail.com" className="flex items-center text-sm hover:underline">
                        <Mail className="mr-2 h-4 w-4" /> ashish.kumarrajak765@gmail.com
                      </a>
                       <a href="tel:+917004451549" className="flex items-center text-sm hover:underline"> {/* Replace with actual phone number */}
                        <Phone className="mr-2 h-4 w-4" /> +91 70044 51549 {/* Replace with actual phone number */}
                      </a>
                      <a href="https://linkedin.com/in/ashishkrrajak" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:underline">
                        <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                      </a>
                    </div>
                    <Button
                      size="lg"
                      variant="secondary"
                      onClick={handleGetInTouchClick}
                      className="bg-card hover:bg-card/90 text-card-foreground transition-transform hover:scale-105 shadow-xl py-3 px-8 text-lg"
                    >
                      Get In Touch! <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </>
                )}
              </Card>
            </div>

            {/* Back of the card */}
            <div className="flip-card-back">
              <ContactForm ref={contactFormRef} onSuccess={handleFormSuccess} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
