import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Decorative background image (subtle, blended) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/c00bce58c817ec3a16945711111641d37320ae67-2240x1260.svg"
          alt="Decorative background"
          priority={false}
          fill
          className="object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glass badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Product Management Experts
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            Building Digital Products That
            <span className="text-gradient"> Scale</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
            From national transport systems to mobile apps with 30K+ users. We lead product strategy, 
            build high-performing teams, and deliver production-ready platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="gap-2 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
              <a href="/#contact">
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 glass-button hover:bg-white/20">
              <a href="/#work">View Our Work</a>
            </Button>
          </div>

          {/* Glass stats card */}
          <div className="glass-card rounded-2xl p-8 mt-20 max-w-2xl mx-auto">
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
      </div>
    </section>
  )
}
