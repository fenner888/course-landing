import { Card, CardContent } from "@/components/ui/card"

export function StorySection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black/50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            Why I Created <span className="text-primary">This Course</span>
          </h2>
        </div>

        <Card className="border-2 border-primary/20 bg-gradient-to-br from-card to-card/80">
          <CardContent className="p-6 sm:p-8 md:p-12">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                A few years ago, I was exactly where you might be now - overwhelmed by the complexity of 
                trading, confused about crypto security, and struggling to build a sustainable online business.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                I spent thousands of dollars on courses that promised the world but delivered generic theory. 
                I made costly mistakes with my crypto investments because I didn't understand proper security. 
                I watched my attempts at online business fail because I lacked the right strategies.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                But through years of trial and error, I figured it out. I developed strategies that actually work. 
                I learned how to protect my digital assets properly. I built profitable businesses and created content 
                that converts. Now, I've been trading successfully, securing my assets, and running multiple online 
                ventures for years.
              </p>

              <div className="border-l-4 border-primary pl-4 sm:pl-6 my-6 sm:my-8">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-foreground italic">
                  "I created this course to give you the exact roadmap I wish I had when I started - 
                  no fluff, no theory, just real strategies that work."
                </p>
              </div>

              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                This isn't just another course. It's everything I've learned condensed into actionable lessons 
                that you can implement immediately. Whether you're interested in trading, securing your crypto, 
                building an online business, or mastering content creation and marketing - I'm sharing the exact 
                strategies I use every single day.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-foreground font-semibold leading-relaxed">
                My mission is simple: To help you skip the expensive mistakes I made and fast-track your success 
                in the digital economy.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

