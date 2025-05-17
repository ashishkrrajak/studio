// src/types/index.ts
// Project type removed as project showcase is no longer part of the portfolio.
// If you add other specific types later, they can go here.

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
  name: string;
  url: string;
  icon: React.ElementType;
  username: string;
}

export interface SkillBadge {
  name: string;
}
