"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, CreditCard, Shield, Clock } from "lucide-react"
import { useState } from "react"

export function PaymentSection() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsPurchased(true)
    }, 2000)
  }

  if (isPurchased) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Welcome to the Course!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Congratulations! You now have full access to all course materials, exclusive bonuses, and our private
                  community of successful entrepreneurs.
                </p>
                <Button size="lg" className="text-lg px-8 py-4 h-auto">
                  Access Your Course Now
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Check your email for login details and getting started guide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Complete Your <span className="text-primary">Enrollment</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Secure your spot today and start your transformation journey. 30-day money-back guarantee included.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Badge variant="secondary" className="bg-accent text-accent-foreground">
                  Limited Time: 20% OFF
                </Badge>
              </div>
              <CardTitle className="text-2xl">Complete Your Purchase</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pricing */}
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <div className="text-sm text-muted-foreground line-through">Regular Price: $497</div>
                <div className="text-3xl font-bold text-primary">$397</div>
                <div className="text-sm text-muted-foreground">One-time payment • Lifetime access</div>
              </div>

              {/* What's Included */}
              <div className="space-y-3">
                <h4 className="font-semibold">What's Included:</h4>
                <div className="space-y-2">
                  {[
                    "Complete video course (8+ hours)",
                    "Downloadable resources & templates",
                    "Private community access",
                    "30-day money-back guarantee",
                    "Lifetime updates",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Button */}
              <Button onClick={handlePayment} disabled={isProcessing} className="w-full h-14 text-lg">
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Complete Purchase - $397
                  </>
                )}
              </Button>

              {/* Security & Guarantee */}
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  Secure 256-bit SSL encryption
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  30-day money-back guarantee
                </div>
              </div>

              {/* Urgency */}
              <div className="text-center p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm font-medium text-accent">⚡ Special pricing ends in 24 hours</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
