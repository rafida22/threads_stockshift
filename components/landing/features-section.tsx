import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, ArrowLeftRight, BarChart3, Brain, Settings2, Shield } from "lucide-react"

const features = [
  {
    icon: AlertTriangle,
    title: "Dead Stock Detection",
    description:
      "AI-powered identification of slow-moving and dead inventory across all stores with actionable insights.",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: ArrowLeftRight,
    title: "Smart Redistribution",
    description: "Automated inter-branch transfer recommendations based on demand patterns and sales velocity.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    icon: BarChart3,
    title: "Impact Simulation",
    description: "Simulate redistribution scenarios before execution to predict revenue recovery and ROI.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    description: "Machine learning models that learn from your data to provide increasingly accurate recommendations.",
    color: "text-primary",
    bgColor: "bg-primary/5",
  },
  {
    icon: Shield,
    title: "Store Protection Rules",
    description: "Custom business rules to maintain minimum stock thresholds and prevent over-transfers.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Settings2,
    title: "Seamless Integration",
    description: "Connect with your existing POS, ERP, and inventory management systems effortlessly.",
    color: "text-slate-500",
    bgColor: "bg-slate-50",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-muted/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Features</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to optimize inventory
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            StockShift provides a complete toolkit for fashion retailers to identify, analyze, and act on inventory
            inefficiencies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card transition-shadow hover:shadow-md">
              <CardHeader>
                <div className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor}`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
