import Link from "next/link"
import { ArrowRight, Boxes, BriefcaseBusiness } from "lucide-react"

export function HowWeOperate() {
  return (
    <section aria-label="How we operate" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[110px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            How we operate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Dual Engines. <span className="text-gradient">Singular Focus.</span>
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            We operate as a product-led studio. By building and scaling our own internal ventures, we battle-test our strategies in the real world before applying those same high-stakes execution capabilities to your projects. No ivory tower theories—just delivery grounded in the reality of the marketplace. We implement leading principles of product management and project management—optimized and powered by AI—so we consistently offer world-class solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-primary/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center mb-6">
              <Boxes className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Product Portfolio</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We identify gaps, validate quickly, and build scalable solutions. Shipping our own products keeps us sharp on UX, engineering, reliability, and growth.
            </p>
            <Link href="/#work" className="inline-flex items-center gap-2 text-primary font-medium">
              Explore what we ship <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="glass-card rounded-2xl p-8 border border-border hover:shadow-2xl hover:shadow-accent/10 transition-all">
            <div className="w-12 h-12 rounded-xl bg-accent/10 ring-2 ring-accent/20 flex items-center justify-center mb-6">
              <BriefcaseBusiness className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Client Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Product strategy, delivery leadership, engineering, and enablement—designed to help teams ship faster with quality and build systems that scale.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium">
              See our services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

