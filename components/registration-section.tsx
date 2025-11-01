import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function RegistrationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black/80 relative">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            Ready to <span className="text-primary">Get Started?</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            Master crypto & stock trading, security, business building, content creation, and marketing with lifetime access to all course materials.
          </p>
        </div>

        <div className="max-w-3xl mx-auto px-0 sm:px-4">
          {/* Main CTA Card */}
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background to-muted/30">
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
                  Start Learning Today
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto px-2">
                  Get instant access to all 6 core modules: Crypto Trading, Stock Trading, Crypto Security, Business Building, Content Creation, and Marketing.
                </p>
              </div>

              {/* Main CTA Button */}
              <a 
                href="https://whop.com/exposed-media/digital-course-d9/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 h-auto"
                >
                  Get Instant Access
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 px-4">
            By clicking above, you'll be redirected to our secure checkout page. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  )
}
