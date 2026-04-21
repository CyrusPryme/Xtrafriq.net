import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Decorative background layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero/tech-texture.png"
          alt=""
          aria-hidden="true"
          priority={false}
          fill
          className="object-cover opacity-[0.18] dark:opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6">
          {/* Glass badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Product Management Experts
            </div>
          
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Building Digital Products That
              <span className="text-gradient"> Scale</span>
            </h1>
          
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty">
              From national transport systems to mobile apps with 30K+ users. We lead product strategy,
              build high-performing teams, and deliver production-ready platforms.
            </p>
          
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                asChild
                size="lg"
                className="gap-2 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 glass-button hover:bg-muted/50">
                <a href="/#work">View Our Work</a>
              </Button>
            </div>
          </div>

          {/* Visuals */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-2xl">
              {/* Dashboard */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border glass-card shadow-2xl shadow-primary/10">
                <Image
                  src="/hero/dashboard.png"
                  alt="Product analytics dashboard preview"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
              </div>

              {/* Mobile overlay */}
              <div className="absolute -bottom-10 -right-4 sm:-right-10 w-[45%] sm:w-[38%]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border glass-card shadow-xl shadow-accent/10">
                  <Image
                    src="/hero/mobile.png"
                    alt="Mobile product roadmap preview"
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Accent glow */}
              <div
                className="absolute -z-10 -bottom-20 -left-10 h-56 w-56 rounded-full bg-primary/20 blur-[90px]"
                aria-hidden="true"
              />
              <div
                className="absolute -z-10 -top-10 -right-10 h-56 w-56 rounded-full bg-accent/20 blur-[90px]"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

          {/* Glass stats card */}
        <div className="glass-card rounded-2xl p-8 mt-20 max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">7+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center border-x border-border/30">
                <div className="text-3xl md:text-4xl font-bold text-gradient">95%</div>
                <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Entrepreneurs Trained</div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
