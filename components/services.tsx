import { 
  LayoutDashboard, 
  Code2, 
  Smartphone, 
  Building2, 
  LineChart, 
  Shield,
  Users,
  Target,
  Rocket
} from "lucide-react"

const services = [
  {
    icon: LayoutDashboard,
    title: "Product Strategy & Leadership",
    description: "End-to-end product lifecycle management from discovery to launch. We define roadmaps, OKRs, and execute with precision to deliver production-ready systems.",
    featured: false,
  },
  {
    icon: Building2,
    title: "Enterprise & Government Platforms",
    description: "Complex digital systems for transportation, logistics, and public sector operations. Proven delivery of national-scale platforms in regulated environments.",
    featured: false,
  },
  {
    icon: Users,
    title: "Cross-Functional Team Building",
    description: "We recruit, form, and lead high-performing engineering teams. From frontend to QA, we build the talent infrastructure your project needs.",
    featured: false,
  },
  {
    icon: Smartphone,
    title: "Mobile & Web App Development",
    description: "Native and cross-platform mobile apps plus responsive web applications. We deliver performant, maintainable code and production-ready deployments.",
    featured: false,
  },
  {
    icon: Target,
    title: "Product Management & Strategy",
    description: "End-to-end product strategy, roadmap development, OKR planning, and market fit validation. We help you define the right product and execute with precision.",
    featured: true,
  },
  {
    icon: Shield,
    title: "Cybersecurity & Risk Management",
    description: "Security assessments, threat modeling, secure SDLC practices, and incident readiness to protect systems and user data.",
    featured: false,
  },
  {
    icon: LineChart,
    title: "Digital Marketing & Growth",
    description: "Data-driven marketing strategies, ASO, SEO, and analytics implementation. We help startups and SMEs achieve 40%+ growth in organic traffic and user acquisition.",
    featured: false,
  },
  {
    icon: Rocket,
    title: "Agile & Scrum Implementation",
    description: "Structured sprint planning, GitHub workflows, and QA gates that improve delivery predictability. We bring execution discipline to your development process.",
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Product Management-Led <span className="text-gradient">Tech Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            7+ years of experience delivering complex digital platforms across transportation, government, logistics, e-commerce, and Web3—with product management at the core.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                service.featured 
                  ? "glass-card glow md:col-span-2 lg:col-span-1 ring-2 ring-primary/20" 
                  : "glass-card hover:shadow-xl"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 right-6 text-xs font-medium px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow-lg">
                  Our Focus
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                service.featured 
                  ? "bg-primary/20 ring-2 ring-primary/30" 
                  : "bg-primary/10 ring-2 ring-primary/20"
              }`}>
                <service.icon className={`w-7 h-7 ${
                  service.featured ? "text-primary" : "text-primary"
                }`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${
                service.featured ? "text-foreground" : "text-foreground"
              }`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed ${
                service.featured ? "text-muted-foreground" : "text-muted-foreground"
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
