import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "I've never traded before. Is this course for me?",
      answer: "Absolutely! This course is designed for complete beginners. We start with the fundamentals and gradually build up to advanced strategies. No prior trading or business experience required.",
    },
    {
      question: "What tools or software do I need?",
      answer: "You'll need a computer or smartphone and an internet connection. We'll guide you through setting up free trading platforms and all necessary tools. No expensive software required to get started.",
    },
    {
      question: "How long does it take to complete the course?",
      answer: "The course includes 100+ video lessons that you can complete at your own pace. Most students finish within 4-8 weeks, but you have lifetime access so you can take as long as you need.",
    },
    {
      question: "What if I don't see results?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, just send us an email within 30 days and we'll refund you in full - no questions asked.",
    },
    {
      question: "How do I access the course after purchase?",
      answer: "Immediately after purchase, you'll receive an email with your login credentials and access instructions. You can access the course on any device through our platform, anytime you want.",
    },
    {
      question: "Is this a one-time payment or subscription?",
      answer: "It's a one-time payment of $100 for lifetime access. No recurring fees, no hidden costs. Once you purchase, the course is yours forever, including all future updates.",
    },
    {
      question: "Do you offer support if I get stuck?",
      answer: "Yes! You get access to our private community where you can ask questions, share progress, and get help from both instructors and fellow students. We're here to support your success.",
    },
    {
      question: "Will this work in my country?",
      answer: "Yes! The strategies taught work globally. While some specific trading platforms may have country restrictions, we cover multiple alternatives that work worldwide.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black/50 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-balance px-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 sm:px-6">
            Got questions? We've got answers. Here's everything you need to know before enrolling.
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm sm:text-base hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

