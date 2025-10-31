import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function AccessSection() {
  const accessItems = [
    {
      title: "Complete Video Course Library",
      items: [
        "100+ HD video lessons",
        "Lifetime access to all content",
        "Mobile & desktop streaming",
        "Download for offline viewing",
      ],
    },
    {
      title: "Exclusive Community & Support",
      items: [
        "Private community forum",
        "Weekly live Q&A sessions",
        "Direct instructor access",
        "Peer networking opportunities",
      ],
    },
    {
      title: "Premium Resources & Tools",
      items: [
        "Downloadable templates & guides",
        "Trading indicators & scripts",
        "Security checklists & tools",
        "Marketing automation tools",
      ],
    },
    {
      title: "Continuous Updates & Bonuses",
      items: [
        "Free lifetime course updates",
        "New modules added regularly",
        "Exclusive bonus content",
        "Early access to new features",
      ],
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            You Will Get <span className="text-primary">Access To</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            Everything you need to master trading, security, business building, and marketing - all in one comprehensive package.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {accessItems.map((section, index) => (
            <Card key={index} className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/50">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary">{section.title}</h3>
                <ul className="space-y-3 sm:space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus callout */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center">
          <Card className="inline-block border-2 border-primary/30 bg-primary/5 max-w-2xl">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">🎁 Plus Exclusive Bonuses</h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Get additional bonus materials worth over $500, including advanced trading strategies, 
                hardware wallet security guides, and premium marketing templates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

