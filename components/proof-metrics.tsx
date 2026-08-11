import { Building2, Globe, Layers, Users } from "lucide-react"
import { SITE_METRICS } from "@/lib/site-metrics"

const metricIcons = [Layers, Building2, Globe, Users] as const
const metricGradients = [
  "from-primary/15 to-primary/5 border-primary/20",
  "from-accent/15 to-accent/5 border-accent/20",
  "from-chart-3/15 to-chart-3/5 border-chart-3/20",
  "from-chart-4/15 to-chart-4/5 border-chart-4/20",
] as const
const metricIconColors = [
  "text-primary",
  "text-accent",
  "text-chart-3",
  "text-chart-4",
] as const

export function ProofMetrics() {
  return (
    <section aria-label="Proof metrics" className="py-8 sm:py-10 border-y border-border/60 bg-background/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {SITE_METRICS.map((m, i) => {
            const Icon = metricIcons[i]
            return (
              <div
                key={m.label}
                className={`rounded-2xl border bg-gradient-to-br ${metricGradients[i]} p-4 sm:p-6 text-center transition-transform hover:-translate-y-0.5 hover:shadow-md`}
              >
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${metricIconColors[i]} mx-auto mb-2 sm:mb-3`} />
                <div className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{m.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{m.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
