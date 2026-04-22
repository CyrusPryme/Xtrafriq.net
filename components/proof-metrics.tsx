import { Building2, Globe, Layers, Users } from "lucide-react"
import { SITE_METRICS } from "@/lib/site-metrics"

const metricIcons = [Layers, Building2, Globe, Users] as const

export function ProofMetrics() {
  return (
    <section aria-label="Proof metrics" className="py-12 border-y border-border/60 bg-background/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {SITE_METRICS.map((m, i) => {
            const Icon = metricIcons[i]
            return (
              <div key={m.label} className="glass-card rounded-2xl p-6 text-center">
                <Icon className="w-7 h-7 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-foreground">{m.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

