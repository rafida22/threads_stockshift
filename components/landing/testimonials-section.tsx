import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "StockShift identified ₹15L worth of dead inventory we didn't even know we had. The redistribution recommendations have been spot-on.",
    author: "Priya Sharma",
    role: "Head of Operations",
    company: "FashionHub India",
    initials: "PS",
  },
  {
    quote:
      "We reduced our markdown losses by 40% in the first quarter. The AI recommendations save our team hours of manual analysis every week.",
    author: "Rajesh Kumar",
    role: "Inventory Manager",
    company: "StyleCo Retail",
    initials: "RK",
  },
  {
    quote:
      "The impact simulation feature is a game-changer. We can now make data-driven decisions about inter-store transfers with confidence.",
    author: "Anita Patel",
    role: "CFO",
    company: "TrendRetail Group",
    initials: "AP",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/30 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by fashion retailers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-10 w-10 bg-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
