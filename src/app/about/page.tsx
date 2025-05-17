// src/app/about/page.tsx
import { AboutSection } from '@/components/about-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Me | FolioForge',
  description: 'Learn more about my background, skills, and passion for technology.',
};

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
    </div>
  );
}
