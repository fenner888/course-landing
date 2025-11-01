import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Shield, Zap, Bitcoin, BarChart3, Megaphone, Building2 } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Bitcoin,
      title: "Crypto & Stock Trading",
      description: "Master cryptocurrency and stock market trading with proven strategies and real-world techniques.",
    },
    {
      icon: Shield,
      title: "Crypto Security",
      description: "Learn essential security practices to protect your digital assets and investments from threats.",
    },
    {
      icon: Building2,
      title: "Business Building",
      description: "Build and scale successful online businesses from the ground up with tested frameworks.",
    },
    {
      icon: Megaphone,
      title: "Content & Marketing",
      description: "Create compelling content and master marketing strategies that drive real results and growth.",
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Develop skills to analyze markets, identify opportunities, and make informed trading decisions.",
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Start applying strategies immediately with step-by-step action plans and real examples.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black/50 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            What You'll <span className="text-primary">Master</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            A comprehensive curriculum covering everything from trading and security to business building and marketing. 
            Real strategies that work in today's market.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/20 transition-colors">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">{benefit.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Urgency Element */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16 px-4">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-lg p-4 sm:p-6 max-w-lg">
            <p className="text-accent font-semibold mb-2 text-sm sm:text-base">⏰ Limited Spots Available</p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Join our exclusive community before enrollment closes. Don't miss your chance to transform your future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
