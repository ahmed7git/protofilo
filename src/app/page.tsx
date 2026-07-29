import { HeroProfileCard } from '@/features/hero/components/hero-profile-card'
import { HeroSidebar } from '@/features/hero/components/hero-sidebar'
import { HeroIntroSection } from '@/features/hero/components/hero-intro-section'
import { AboutSection } from '@/features/about/components/about-section'
import { EducationSection } from '@/features/education/components/education-section'
import { WorkSection } from '@/features/work/components/work-section'
import { ServicesSection } from '@/features/services/components/services-section'
import { TechStackSection } from '@/features/tech/components/tech-stack-section'
import { TestimonialSection } from '@/features/testimonials/components/testimonials-section'
import { ContactSection } from '@/features/contact/components/contact-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full bg-background overflow-hidden selection:bg-accent/20">
      {/* Background Glow Effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row px-4 sm:px-6 lg:px-12">
        
        {/* Left Sticky Sidebar (Profile Card) */}
        <div className="w-full lg:w-[420px] shrink-0 pt-10 pb-10 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto hidden-scrollbar flex justify-center lg:justify-start">
          <HeroProfileCard />
        </div>

        {/* Right Scrolling Content */}
        <div className="flex-1 w-full lg:pl-16 pt-10 pb-32 flex flex-col gap-32">
          <HeroIntroSection />
          <AboutSection />
          <EducationSection />
          <WorkSection />
          <ServicesSection />
          <TechStackSection />
          <TestimonialSection />
          <ContactSection />
          <Footer />
        </div>
      </div>

      {/* Fixed Right Navigation Pill */}
      <HeroSidebar />
    </main>
  )
}
