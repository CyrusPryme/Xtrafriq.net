import {
  LayoutDashboard,
  Smartphone,
  Building2,
  Shield,
  ClipboardList,
  Cloud,
  Rocket,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { SERVICES } from "@/lib/services"

const iconBySlug: Record<string, LucideIcon> = {
  "product-strategy": LayoutDashboard,
  "project-management": ClipboardList,
  "enterprise-platforms": Building2,
  "mobile-web-development": Smartphone,
  cybersecurity: Shield,
  "cloud-architecture": Cloud,
  "agile-delivery": Rocket,
}

/* Gradient pairs per service — gives each card a distinct tinted bg */
const gradientBySlug: Record<string, string> = {
  "product-strategy": "from-primary/10 to-primary/5",
  "project-management": "from-accent/10 to-accent/5",
  "enterprise-platforms": "from-chart-3/10 to-chart-3/5",
  "mobile-web-development": "from-chart-4/10 to-chart-4/5",
  cybersecurity: "from-destructive/8 to-destructive/3",
  "cloud-architecture": "from-chart-5/10 to-chart-5/5",
  "agile-delivery": "from-accent/10 to-primary/5",
}

export function Services() {
  return (
    <section id="services" className="py-12 lg:py-20 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 motion-safe:animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium mb-4">
            What we do
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Product Management-Led{" "}
            <span className="text-gradient">Technology Delivery</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            7+ years delivering complex digital platforms—with product and project management at the core of
            every engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SERVICES.map((service) => {
            const Icon = iconBySlug[service.slug] ?? LayoutDashboard
            const grad = gradientBySlug[service.slug] ?? "from-primary/10 to-primary/5"
            return (
              <Link
                key={service.slug}
                href={service.href}
                className={`group relative p-5 sm:p-7 rounded-2xl border border-border bg-gradient-to-br ${grad} transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden`}
              >
                {/* Subtle top-right corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-2xl pointer-events-none" />

                {service.featured && (
                  <div className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow">
                    Our Focus
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-background/60 border border-border/60 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary translate-x-0 group-hover:translate-x-1 transition-transform">
                  Learn more →
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
