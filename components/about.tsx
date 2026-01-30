import { CheckCircle2 } from "lucide-react"

const values = [
  "Full product lifecycle from discovery to post-launch optimization",
  "Stakeholder alignment and executive management",
  "Structured sprint planning with QA gates for quality delivery",
  "Data-driven decisions using GA4, Mixpanel, and custom analytics",
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder with African-inspired pattern frame */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden relative">
              {/* Placeholder for team/office image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/10 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Your team image here</span>
              </div>
            </div>
            {/* Decorative African pattern element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                <pattern id="kente" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="12" height="12" fill="currentColor" />
                  <rect x="13" y="13" width="12" height="12" fill="currentColor" />
                </pattern>
                <rect width="100" height="100" fill="url(#kente)" />
              </svg>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Product Leadership You Can Trust
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We specialize in translating real-world operational needs into scalable digital solutions. 
              From nationwide transport platforms to government food distribution systems, we deliver 
              complex products in high-stakes, regulated environments.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our track record includes building and leading cross-functional teams, implementing 
              Agile frameworks that improve delivery predictability, and training 100+ African 
              entrepreneurs in digital growth strategies.
            </p>

            <ul className="space-y-4">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
