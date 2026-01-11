import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const STOCKSHIFT_APP_URL = "https://stock-shift-4305cb95.base44.app"

const benefits = [
  "14-day free trial",
  "No credit card required",
  "Full platform access",
  "Dedicated onboarding support",
]

export function CTASection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to optimize your inventory?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Join leading fashion retailers who are recovering revenue and eliminating dead stock with StockShift.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-amber-400" />
                  <span className="text-sm text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button - Updated link to point to the StockShift app */}
            <div className="mt-8">
              <Button size="lg" className="bg-amber-500 text-primary hover:bg-amber-400" asChild>
                <a href={STOCKSHIFT_APP_URL} target="_blank" rel="noopener noreferrer">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
