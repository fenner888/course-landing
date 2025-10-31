import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-black border-t border-border/50 py-8 sm:py-10 md:py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-red-950/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="text-center space-y-4 sm:space-y-6">
          <div className="px-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Master the Skills That Matter</h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto text-pretty">
              Learn trading, security, business building, and marketing from an experienced instructor.
            </p>
          </div>

          <Separator className="max-w-xs mx-auto" />

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground px-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact Support
            </a>
          </div>

          <div className="text-xs text-muted-foreground px-4">© 2024 Trading & Business Mastery Course. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
