import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent pb-4 sm:pb-6 md:pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-red-950/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center relative z-10">
        {/* Limited Time Offer Badge */}
        <Badge variant="secondary" className="mb-6 sm:mb-8 text-sm font-medium px-4 py-2 bg-accent text-accent-foreground">
          🔥 Limited Spots Available - Join Now!
        </Badge>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-2 sm:px-4">
          Master Trading &
          <span className="text-primary block">Digital Business</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto text-pretty px-4 sm:px-6">
          Learn cryptocurrency & stock trading, security best practices, business building, content creation, and marketing 
          strategies from an industry expert. Everything you need in one comprehensive course.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <a href="https://whop.com/exposed-media/digital-course-d9/" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
            <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-auto">
              Get Instant Access
            </Button>
          </a>
          <a href="#video-section" className="flex-1 sm:flex-none">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 h-auto bg-transparent">
              Watch Preview
            </Button>
          </a>
        </div>

        {/* Social Proof Numbers */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto px-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">6+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">Core Topics Covered</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">100+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">Video Lessons</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">∞</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1">Lifetime Access</div>
          </div>
        </div>
      </div>
    </section>
  )
}
