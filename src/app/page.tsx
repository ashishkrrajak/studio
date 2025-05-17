
import { FlippableContactCard } from '@/components/flippable-contact-card';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutIntroSection } from '@/components/sections/about-intro-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProfessionalJourneySection } from '@/components/sections/professional-journey-section';
import { EducationalJourneySection } from '@/components/sections/educational-journey-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CodingProfilesSection } from '@/components/sections/coding-profiles-section';
import AnimateOnScrollWrapper from '@/components/animate-on-scroll-wrapper';

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <HeroSection /> {/* Hero uses its own internal fade-in-section for once-on-load animation */}
      
      {/* Wrapper for About, Skills, Journey for #about anchor */}
      <div id="about" className="space-y-20 md:space-y-28 pt-16">
        <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
          <AboutIntroSection />
        </AnimateOnScrollWrapper>
        
        <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
          <SkillsSection />
        </AnimateOnScrollWrapper>
        
        {/* Journey Sections Wrapper for #journey anchor */}
        <div id="journey" className="space-y-16 md:space-y-20">
          <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
            <ProfessionalJourneySection />
          </AnimateOnScrollWrapper>
          <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
            <EducationalJourneySection />
          </AnimateOnScrollWrapper>
        </div>
      </div> 

      <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
        <TestimonialsSection />
      </AnimateOnScrollWrapper>
      
      <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
        <CodingProfilesSection />
      </AnimateOnScrollWrapper>

      {/* Note: FlippableContactCard is already wrapped with AnimateOnScrollWrapper in its own definition in the previous step */}
      {/* If it was not, it would be:
      <AnimateOnScrollWrapper initialClassName="scroll-fade-trigger">
      */}
      <div className="contact-flip-card-outer"> {/* Ensure this wrapper has a specific class for height if FlippableContactCard's root isn't 'contact-flip-card-outer' */}
        <FlippableContactCard id="contact" />
      </div>
      {/* </AnimateOnScrollWrapper> */}
    </div>
  );
}

    