// src/types/index.ts
import type React from 'react';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  dataAiHint: string;
}

export interface JourneyPoint {
  icon: React.ElementType;
  title: string;
  text: string;
}

export interface CodingProfile {
  name:string;
  url: string;
  icon: React.ElementType;
  username: string;
}

export interface SkillItem {
  name: string;
  icon: React.ElementType;
}

export interface HeroCodeSnippet {
  text: string;
  top: string;
  left: string;
  opacity: string;
  animationDelay: string;
}
