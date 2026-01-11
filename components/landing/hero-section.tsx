import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Image from "next/image"

const STOCKSHIFT_APP_URL = "https://stock-shift-4305cb95.base44.app"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pb-16 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-primary-foreground">AI-Powered Inventory Intelligence</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              Eliminate Dead Stock. <span className="text-amber-400">Maximize Revenue.</span>
            </h1>

            <p className="mt-6 text-pretty text-lg text-primary-foreground/80 sm:text-xl">
              StockShift uses decision intelligence to automatically detect slow-moving inventory, recommend optimal
              redistribution, and recover revenue across your fashion retail stores.
            </p>

            {/* CTA Buttons - Updated links to point to the StockShift app */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full bg-amber-500 text-primary hover:bg-amber-400 sm:w-auto" asChild>
                <a href={STOCKSHIFT_APP_URL} target="_blank" rel="noopener noreferrer">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                asChild
              >
                <a href="#demo-video">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-col items-center gap-4 lg:items-start">
              <p className="text-sm text-primary-foreground/60">Trusted by leading fashion retailers</p>
              <div className="flex items-center gap-6 opacity-70">
                <div className="text-primary-foreground/80 font-semibold">FashionHub</div>
                <div className="text-primary-foreground/80 font-semibold">StyleCo</div>
                <div className="text-primary-foreground/80 font-semibold">TrendRetail</div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview - Made dashboard image clickable */}
          <div className="relative">
            <a href={STOCKSHIFT_APP_URL} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative rounded-xl border border-primary-foreground/10 bg-card shadow-2xl overflow-hidden transition-transform hover:scale-[1.02]">
                <Image
                  src="/images/image.png"
                  alt="StockShift Dashboard showing inventory intelligence analytics"
                  width={700}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </a>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 rounded-lg border border-border bg-card p-4 shadow-xl sm:-bottom-6 sm:-left-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">₹4.3L</p>
                  <p className="text-xs text-muted-foreground">Revenue Recovered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
