import { ArrowUpRight, Bus, Smartphone, ShoppingCart, GraduationCap } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    icon: Bus,
    title: "Integrated Transport System (iSTC)",
    client: "STC Ghana",
    description: "Led the full product lifecycle for a nationwide transport platform covering passenger booking, fleet management, terminal operations, and finance dashboards.",
    outcomes: [
      "Nationwide operational scale",
      "Improved booking reliability",
      "Real-time operational visibility",
    ],
    tags: ["Product Strategy", "Enterprise Platform", "Government"],
  },
  {
    icon: Smartphone,
    title: "KTZ Astrology App",
    client: "Xtrafriq Tech Consult",
    description: "Full-cycle product management from ideation to App Store launch. Led roadmap development, UX collaboration, and sprint execution across iOS and Android.",
    outcomes: [
      "30K+ installs achieved",
      "95% user satisfaction",
      "40% increase in weekly active users",
    ],
    tags: ["Mobile App", "Consumer Product", "Growth"],
  },
  {
    icon: GraduationCap,
    title: "NAFCO Distribution System",
    client: "Ghana National Food Buffer Stock Company",
    description: "Leading product discovery for a national food allocation and distribution management system. Designing centralized workflows for government allocation, supplier compliance, and school distribution.",
    outcomes: [
      "Stakeholder alignment achieved",
      "MVP scope defined",
      "Phased rollout strategy",
    ],
    tags: ["Government", "Discovery Phase", "National Scale"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    client: "MyAfriqueMart & FarmerTorks",
    description: "Built e-commerce platforms from scratch, leading cross-functional teams through the complete product lifecycle from concept to launch.",
    outcomes: [
      "End-to-end platform delivery",
      "Scalable architecture",
      "Multi-vendor support",
    ],
    tags: ["E-Commerce", "Web Platform", "Marketplace"],
  },
]

export function CaseStudies() {
  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proven Track Record
          </h2>
          <p className="text-muted-foreground text-lg">
            Complex digital platforms delivered across transportation, government, mobile, and e-commerce sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="text-sm text-primary font-medium mb-2">{project.client}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

              <div className="space-y-2 mb-6">
                {project.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {outcome}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
