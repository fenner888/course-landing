import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ToolsSection } from "@/components/tools-section"
import { AccessSection } from "@/components/access-section"
import { StorySection } from "@/components/story-section"
import { FAQSection } from "@/components/faq-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function CourseLandingPage() {
  return (
    <main className="min-h-screen relative">
      {/* Global animated background for entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <AnimatedBackground />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        <HeroSection />
        <VideoSection />
        <BenefitsSection />
        <ToolsSection />
        <AccessSection />
        <StorySection />
        <FAQSection />
        <RegistrationSection />
        <Footer />
      </div>
    </main>
  )
}
