"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="video-section" className="pt-2 sm:pt-4 md:pt-6 pb-12 sm:pb-16 md:pb-20 bg-black/50 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            A Message <span className="text-primary">From Your Instructor</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            Watch this exclusive message where I share my journey and what you'll learn inside this comprehensive course.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-0 sm:px-4">
          <Card className="relative overflow-hidden bg-card border-2">
            <div className="aspect-video relative">
              {!isPlaying ? (
                <>
                  {/* Video Thumbnail */}
                  <img
                    src="/professional-entrepreneur-speaking-in-modern-offic.jpg"
                    alt="Entrepreneur testimonial video"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(true)}
                      className="rounded-full w-20 h-20 p-0 bg-primary hover:bg-primary/90"
                    >
                      <Play className="w-8 h-8 ml-1" fill="currentColor" />
                    </Button>
                  </div>

                  {/* Video Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">3:47</div>
                </>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <div className="text-2xl mb-4">🎬</div>
                    <p className="text-lg mb-2">Video Playing...</p>
                    <p className="text-sm opacity-75 max-w-lg mx-auto">
                      "Hi, I'm your instructor. In this course, I'll teach you everything I know about crypto & stock trading, 
                      how to secure your assets, build profitable online businesses, create engaging content, and master marketing. 
                      These are the exact strategies I use every day..."
                    </p>
                    <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setIsPlaying(false)}>
                      Close Video
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Video Description */}
          <div className="text-center mt-8">
            <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
              "I've spent years mastering crypto trading, stock markets, security, and building successful online businesses. 
              In this course, I'll share everything I know about trading, security, content creation, and marketing strategies that actually work."
            </blockquote>
            <cite className="block mt-4 font-semibold">— Your Course Instructor</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
