import { Card, CardContent } from "@/components/ui/card"
import { Wallet, TrendingUp, Shield, FileText, Users, Zap } from "lucide-react"

export function ToolsSection() {
  const tools = [
    {
      icon: TrendingUp,
      title: "Trading Dashboard",
      description: "Real-time market analysis tools and indicators for crypto & stocks.",
    },
    {
      icon: Shield,
      title: "Security Toolkit",
      description: "Essential security tools to protect your digital assets and investments.",
    },
    {
      icon: FileText,
      title: "Templates & Checklists",
      description: "Ready-to-use templates for business plans, content creation, and marketing.",
    },
    {
      icon: Wallet,
      title: "Portfolio Tracker",
      description: "Track your trades, investments, and overall portfolio performance.",
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Private Discord/Telegram group with fellow students and mentors.",
    },
    {
      icon: Zap,
      title: "Automation Scripts",
      description: "Time-saving automation tools for trading, content, and marketing tasks.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black/80 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-red-950/10 pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            Tools to <span className="text-primary">Maximize Your Income</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            Get access to premium tools and resources designed to accelerate your success in trading, security, and business.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className="text-center border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6">
                  <tool.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">{tool.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-pretty">{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

