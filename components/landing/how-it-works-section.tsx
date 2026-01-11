import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description:
      "Integrate your POS and inventory systems. StockShift automatically syncs sales and stock data across all your stores.",
  },
  {
    number: "02",
    title: "AI Analysis",
    description:
      "Our decision intelligence engine analyzes demand patterns, identifies dead stock, and calculates optimal redistribution routes.",
  },
  {
    number: "03",
    title: "Review Recommendations",
    description:
      "Get prioritized transfer recommendations with clear reasoning, impact simulations, and one-click approval workflows.",
  },
  {
    number: "04",
    title: "Execute & Track",
    description:
      "Approve transfers, generate packing slips, and track inventory movement with real-time status updates.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">How It Works</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From dead stock to revenue in 4 simple steps
          </h2>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className={`border-l-4 ${index === 0 ? "border-l-primary" : "border-l-border"} bg-card`}
              >
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Screenshot */}
          <div className="relative">
            <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
              <Image
                src="/images/image.png"
                alt="StockShift Smart Redistribution interface showing transfer recommendations"
                width={700}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
