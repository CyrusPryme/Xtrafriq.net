import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

const trust = [
  "iSTC Ghana",
  "GIZ",
  "MyAfriqueMart",
  "KTZ",
  "FarmerTorks",
]

export function Hero() {
  return (
    <section className="relative min-h-[75vh] pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/hero/tech-texture.webp"
          alt=""
          aria-hidden="true"
          priority
          fill
          className="object-cover opacity-[0.22] dark:opacity-[0.28] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      <div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[128px] motion-safe:animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px] motion-safe:animate-pulse"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Accra · Global Delivery
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-4 sm:mb-6">
              Digital products that{" "}
              <span className="text-gradient">scale</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-6 text-pretty">
              Product and project management from Accra to the world—AI-enhanced delivery for platforms teams
              can trust.
            </p>

            <ul className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-8 text-sm text-muted-foreground">
              {["PM-led delivery", "AI-optimized", "50+ projects shipped"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <Button asChild size="lg" className="w-full sm:w-auto gap-2 px-8">
                <a href="/#contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto px-8">
                <a href="/#work">View Our Work</a>
              </Button>
            </div>

            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Trusted by</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-1">
                {trust.map((name) => (
                  <span key={name} className="text-sm font-medium text-foreground/60">{name}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden sm:block lg:col-span-6 mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-2xl">
              <div className="relative aspect-[16/10] overflow-hidden border border-border/60 shadow-2xl shadow-primary/10 rounded-md bg-muted/40">
                <Image
                  src="/hero/dashboard.webp"
                  alt="Product analytics dashboard preview"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none rounded-md" />
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 bg-card border border-border rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="text-xs text-muted-foreground mb-0.5">Projects delivered</div>
                <div className="text-xl font-bold text-foreground font-display">50+</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-1.5 rounded-full bg-primary/70" />
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-[34%] sm:w-[30%] max-w-[150px]">
                <div className="relative aspect-[3/4] overflow-hidden border border-border shadow-xl rounded-xl bg-muted/40">
                  <Image
                    src="/hero/mobile.webp"
                    alt="Mobile product roadmap preview"
                    fill
                    sizes="(min-width: 1024px) 15vw, 28vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 left-4 sm:left-6 bg-card border border-border rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-card"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-foreground">40+ clients</div>
                    <div className="text-[10px] text-muted-foreground">10+ countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
