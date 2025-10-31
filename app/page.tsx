import { HeroSection } from "@/components/hero-section"
import { VideoSection } from "@/components/video-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ToolsSection } from "@/components/tools-section"
import { AccessSection } from "@/components/access-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function CourseLandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <ToolsSection />
      <AccessSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
