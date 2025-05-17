
import { FlippableContactCard } from '@/components/flippable-contact-card';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutIntroSection } from '@/components/sections/about-intro-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProfessionalJourneySection } from '@/components/sections/professional-journey-section';
import { EducationalJourneySection } from '@/components/sections/educational-journey-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CodingProfilesSection } from '@/components/sections/coding-profiles-section';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection />
      
      {/* Wrapper for About, Skills, Journey for #about anchor */}
      <div id="about" className="space-y-20 md:space-y-28 pt-16">
        <AboutIntroSection />
        <SkillsSection />
        {/* Journey Sections Wrapper for #journey anchor */}
        <div id="journey" className="space-y-16 md:space-y-20">
            <ProfessionalJourneySection />
            <EducationalJourneySection />
        </div>
        <TestimonialsSection />
        <CodingProfilesSection />
      </div> 

      <FlippableContactCard />
    </div>
  );
}
