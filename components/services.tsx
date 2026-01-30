import { 
  LayoutDashboard, 
  Code2, 
  Smartphone, 
  Building2, 
  LineChart, 
  Users,
  Target,
  Rocket
} from "lucide-react"

const services = [
  {
    icon: LayoutDashboard,
    title: "Product Strategy & Leadership",
    description: "End-to-end product lifecycle management from discovery to launch. We define roadmaps, OKRs, and execute with precision to deliver production-ready systems.",
    featured: true,
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
    title: "Mobile & Web Applications",
    description: "iOS, Android, and web platforms built for scale. From astrology apps with 30K+ users to e-commerce marketplaces, we deliver exceptional digital products.",
    featured: false,
  },
  {
    icon: LineChart,
    title: "Digital Marketing & Growth",
    description: "Data-driven marketing strategies, ASO, SEO, and analytics implementation. We help startups and SMEs achieve 40%+ growth in organic traffic and user acquisition.",
    featured: false,
  },
  {
    icon: Target,
    title: "Agile & Scrum Implementation",
    description: "Structured sprint planning, GitHub workflows, and QA gates that improve delivery predictability. We bring execution discipline to your development process.",
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            From Vision to Production-Ready Systems
          </h2>
          <p className="text-muted-foreground text-lg">
            7+ years of experience delivering complex digital platforms across transportation, government, logistics, e-commerce, and Web3.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative p-8 rounded-xl transition-all duration-300 hover:shadow-lg ${
                service.featured 
                  ? "bg-primary text-primary-foreground md:col-span-2 lg:col-span-1" 
                  : "bg-card hover:bg-card/80"
              }`}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground">
                  Our Focus
                </div>
              )}
              
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                service.featured 
                  ? "bg-primary-foreground/20" 
                  : "bg-primary/10"
              }`}>
                <service.icon className={`w-6 h-6 ${
                  service.featured ? "text-primary-foreground" : "text-primary"
                }`} />
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${
                service.featured ? "text-primary-foreground" : "text-foreground"
              }`}>
                {service.title}
              </h3>
              
              <p className={`leading-relaxed ${
                service.featured ? "text-primary-foreground/80" : "text-muted-foreground"
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
