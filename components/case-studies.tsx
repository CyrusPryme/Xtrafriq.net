import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Integrated Transport System (iSTC)",
    client: "STC Ghana",
    description:
      "Led the full product lifecycle for a nationwide transport platform covering passenger booking, fleet management, terminal operations, and finance dashboards.",
    outcomes: ["Nationwide operational scale", "Improved booking reliability"],
    tags: ["Product Strategy", "Enterprise Platform", "Government"],
    image: "/work/istc.jpg",
    imageAlt: "iSTC transport platform dashboard",
    accentColor: "from-primary/15 to-primary/5",
  },
  {
    title: "KTZ Astrology App",
    client: "Xtrafriq Tech Consult",
    description:
      "Full-cycle product management from ideation to App Store launch. Led roadmap development, UX collaboration, and sprint execution across iOS and Android.",
    outcomes: ["30K+ installs achieved", "95% user satisfaction"],
    tags: ["Mobile App", "Consumer Product", "Growth"],
    image: "/work/ktz.jpg",
    imageAlt: "KTZ astrology mobile app screens",
    accentColor: "from-accent/15 to-accent/5",
  },
  {
    title: "GIZ Digital Skills Program",
    client: "GIZ",
    description:
      "Delivered a digital skills and capacity-building program including curriculum development, workshops, and a lightweight LMS to upskill local teams.",
    outcomes: ["200+ participants trained", "Curriculum adopted by local partners"],
    tags: ["Capacity Building", "Training", "Development"],
    image: "/work/giz.jpg",
    imageAlt: "GIZ digital skills training workshop",
    accentColor: "from-chart-4/15 to-chart-4/5",
  },
  {
    title: "E-Commerce Platforms",
    client: "MyAfriqueMart & FarmerTorks",
    description:
      "Built e-commerce platforms from scratch, leading cross-functional teams through the complete product lifecycle from concept to launch.",
    outcomes: ["End-to-end platform delivery", "Multi-vendor support"],
    tags: ["E-Commerce", "Web Platform", "Marketplace"],
    image: "/work/ecommerce.webp",
    imageAlt: "MyAfriqueMart e-commerce platform",
    accentColor: "from-chart-3/15 to-chart-3/5",
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="py-12 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium mb-4">
              Case studies
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Proven <span className="text-gradient">Track Record</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Complex digital platforms delivered across transportation, government, mobile, and
              e-commerce—not prototypes, shipped systems.
            </p>
          </div>
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-primary font-medium shrink-0 text-sm sm:text-base hover:gap-3 transition-all"
          >
            See full portfolio <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/clients"
              className="group relative rounded-2xl border border-border bg-card/60 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className={`relative aspect-[16/8] overflow-hidden bg-gradient-to-br ${project.accentColor}`}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 45vw, (min-width: 640px) 45vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full shadow">
                    {project.client}
                  </span>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-primary" />
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="space-y-1.5 mb-4">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1.5 rounded-full bg-muted/60 text-muted-foreground border border-border/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
