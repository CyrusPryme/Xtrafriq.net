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
    title: "GIZ Digital Skills Program",
    client: "GIZ",
    description: "Delivered a digital skills and capacity-building program including curriculum development, workshops, and a lightweight LMS to upskill local teams.",
    outcomes: [
      "200+ participants trained",
      "Curriculum adopted by local partners",
      "Improved digital literacy metrics",
    ],
    tags: ["Capacity Building", "Training", "Development"],
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
    <section id="work" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proven <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Complex digital platforms delivered across transportation, government, mobile, and e-commerce sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full glass-button flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                <div className="inline-block text-sm text-primary font-medium mb-2 px-3 py-1 rounded-full glass">{project.client}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="space-y-2 mb-6">
                  {project.outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px] shadow-primary/50" />
                      {outcome}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full glass-button text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
