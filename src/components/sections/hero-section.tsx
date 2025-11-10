// src/components/sections/hero-section.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DownloadCVButton } from '@/components/download-cv-button';
import { Mail } from 'lucide-react';
import { javaCodeSnippets } from '@/data/hero-data';
import BlobImage from '../blob-image';

const TYPING_PERIOD = 1500; // Time to pause after typing or deleting
const TYPING_SPEED_INITIAL = 120;
const DELETING_SPEED = 60;

const TITLES_TO_TYPE = [
  "JAVA FULL STACK DEVELOPER",
  "BACKEND DEVELOPER",
  "SOFTWARE ENGINEER"
];

export function HeroSection() {
  const [typedText, setTypedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(TYPING_SPEED_INITIAL);

  React.useEffect(() => {
    const handleTyping = () => {
      const currentTextToType = TITLES_TO_TYPE[loopNum % TITLES_TO_TYPE.length];
      let newText;

      if (isDeleting) {
        newText = typedText.substring(0, typedText.length - 1);
      } else {
        newText = currentTextToType.substring(0, typedText.length + 1);
      }

      setTypedText(newText);

      if (!isDeleting && newText === currentTextToType) {
        // Pause at end of typing
        setTypingSpeed(TYPING_PERIOD);
        setIsDeleting(true);
      } else if (isDeleting && newText === '') {
        // Pause at end of deleting
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(TYPING_SPEED_INITIAL / 2); // Short pause before re-typing
      } else if (isDeleting) {
        setTypingSpeed(DELETING_SPEED);
      } else if (!isDeleting) {
        setTypingSpeed(TYPING_SPEED_INITIAL);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typingSpeed, loopNum]);

  return (
    <section id="home" className="relative min-h-[calc(100vh-5rem-70px)] flex items-center justify-center overflow-hidden fade-in-section py-16 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-primary/5 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-purple-600 leading-tight min-h-[100px] md:min-h-[150px]">
              <span>{typedText}</span>
              <span className="hero-cursor">|</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              Hi, I&apos;m Ashish Kumar Rajak - a <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-400">Full-Stack Software Developer</span> with 3+ years of experience in building scalable applications using Java, Spring Boot, and Angular. Skilled in back-end development, front-end integration, and REST API design, focused on solving complex challenges and delivering influential solutions in Agile environments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                asChild
                className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-primary-foreground transition-all duration-300 ease-in-out overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
                style={{ background: 'linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))' }}
              >
                <Link href="/#contact">
                  Contact Me
                  <Mail className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <DownloadCVButton />
            </div>
          </div>
          
          {/* This div contains the image and associated elements */}
          <div className="relative w-full max-w-md mx-auto md:max-w-lg h-80 md:h-[500px] group hidden md:flex items-center justify-center">
            <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse md:block hidden"></div>
            
            <BlobImage
              imageUrl="/images/profile.png" 
              alt="Ashish Kumar Rajak - Java Full Stack Developer"
              className="relative z-10 w-72 h-72 md:w-96 md:h-96 transform transition-transform duration-500 group-hover:scale-105"
            />

            {javaCodeSnippets.map((snippet, index) => (
              <div
                key={index}
                className={`absolute font-mono text-xs md:text-sm text-foreground/70 ${snippet.opacity} transform group-hover:scale-110 transition-all duration-500 animate-fadeInHeroSnippet z-0`}
                style={{ animationDelay: snippet.animationDelay, top: snippet.top, left: snippet.left }}
              >
                {snippet.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
