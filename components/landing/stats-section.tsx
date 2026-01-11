const stats = [
  { value: "48%", label: "Average Inventory at Risk Identified", description: "of total inventory" },
  { value: "₹4.3L+", label: "Revenue Recovered", description: "through redistribution" },
  { value: "0.41", label: "Average ROS Improvement", description: "units per day" },
  { value: "72hrs", label: "Time to First Recommendation", description: "after integration" },
]

export function StatsSection() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Proven Results for Fashion Retailers
          </h2>
          <p className="mt-2 text-primary-foreground/70">Real metrics from stores using StockShift</p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-amber-400 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-primary-foreground">{stat.label}</p>
              <p className="text-xs text-primary-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
