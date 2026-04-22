"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowRight, Bus, GraduationCap, Smartphone, ShoppingCart } from "lucide-react"

type PortfolioItem = {
  title: string
  client: string
  description: string
  highlights: string[]
  tags: string[]
  icon: React.ComponentType<{ className?: string }>
}

const portfolio: PortfolioItem[] = [
  {
    icon: Bus,
    title: "Integrated Transport System (iSTC)",
    client: "STC Ghana",
    description:
      "Nationwide transport platform spanning passenger booking, fleet management, terminal operations, and finance dashboards.",
    highlights: ["Operational visibility", "Booking reliability", "Enterprise reporting"],
    tags: ["Enterprise", "Government", "Platforms"],
  },
  {
    icon: Smartphone,
    title: "KTZ Astrology App",
    client: "Xtrafriq Tech Consult",
    description:
      "Mobile product shipped end-to-end—from roadmap and UX collaboration to App Store launch and growth execution.",
    highlights: ["30K+ installs", "95% satisfaction", "Growth experimentation"],
    tags: ["Mobile", "Consumer", "Growth"],
  },
  {
    icon: GraduationCap,
    title: "GIZ Digital Skills Program",
    client: "GIZ",
    description:
      "Capacity-building program with curriculum design, workshops, and delivery systems to upskill local teams.",
    highlights: ["200+ trained", "Adopted curriculum", "Measurable outcomes"],
    tags: ["Training", "Enablement", "Impact"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    client: "MyAfriqueMart & FarmerTorks",
    description:
      "Multi-vendor commerce platforms delivered from concept to launch with scalable architecture and clear product ops.",
    highlights: ["Marketplace support", "Scalable architecture", "End-to-end delivery"],
    tags: ["E-Commerce", "Web", "Platforms"],
  },
]

const allFilters = ["All", "Enterprise", "Government", "Platforms", "Mobile", "Consumer", "Growth", "Training", "Impact", "E-Commerce", "Web", "Enablement"]

export function ProductsPortfolio() {
  const [filter, setFilter] = useState<string>("All")

  const filtered = useMemo(() => {
    if (filter === "All") return portfolio
    return portfolio.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <section aria-label="Portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Shipped work. <span className="text-gradient">Scaling impact.</span>
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Not prototypes—real products and platforms delivered across transportation, mobile, e-commerce, and skills enablement.
            </p>
          </div>
          <Link href="/clients" className="inline-flex items-center gap-2 text-primary font-medium">
            See clients & partners <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {allFilters.map((f) => {
            const active = f === filter
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background/60 text-muted-foreground border-border hover:text-foreground hover:bg-muted/40"
                }`}
              >
                {f}
              </button>
            )
          })}
        </div>

        {/* Horizontal carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [-webkit-overflow-scrolling:touch]">
            {filtered.map((p) => (
              <div
                key={p.title}
                className="snap-start shrink-0 w-[88%] sm:w-[70%] lg:w-[46%] xl:w-[40%] glass-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center">
                    <p.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs px-3 py-1.5 rounded-full glass-button text-muted-foreground">{p.client}</span>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                <div className="space-y-2 mb-6">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
                      {h}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full glass-button text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-3">
            Tip: scroll sideways to explore more.
          </p>
        </div>
      </div>
    </section>
  )
}

