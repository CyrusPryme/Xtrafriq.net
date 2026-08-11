import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Boxes, BriefcaseBusiness } from "lucide-react"

export function HowWeOperate() {
  return (
    <section aria-label="How we operate" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[110px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top: heading + image side by side on lg */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center mb-10 sm:mb-14">

          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium mb-5">
              How we operate
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Dual Engines.{" "}
              <span className="text-gradient">Singular Focus.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg text-pretty mb-6">
              A product-led studio that battle-tests strategies through its own ventures before applying the
              same execution rigour to client work—powered by AI-optimized product and project management.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-medium text-sm sm:text-base hover:gap-3 transition-all">
              Learn about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/60 shadow-xl aspect-[4/3] bg-muted/30">
            <Image
              src="/about/team.webp"
              alt="Xtrafriq team collaborating on a product sprint"
              fill
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bottom: two engine cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/8 to-primary/3 p-6 sm:p-8 hover:border-primary/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-background/60 border border-border/60 flex items-center justify-center mb-5 shadow-sm">
              <Boxes className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Product Portfolio</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
              We identify gaps, validate quickly, and build scalable solutions. Shipping our own products
              keeps us sharp on UX, engineering, reliability, and growth.
            </p>
            <Link href="/#work" className="inline-flex items-center gap-2 text-primary font-medium text-sm sm:text-base hover:gap-3 transition-all">
              Explore what we ship <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/8 to-accent/3 p-6 sm:p-8 hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="w-11 h-11 rounded-xl bg-background/60 border border-border/60 flex items-center justify-center mb-5 shadow-sm">
              <BriefcaseBusiness className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Client Services</h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-5">
              Product strategy, delivery leadership, engineering, and enablement—designed to help teams ship
              faster with quality and build systems that scale.
            </p>
            <Link href="/services" className="inline-flex items-center gap-2 text-primary font-medium text-sm sm:text-base hover:gap-3 transition-all">
              See our services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
