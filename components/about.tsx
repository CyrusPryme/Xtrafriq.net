import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const values = [
  "Full product lifecycle from discovery to post-launch optimization",
  "Cyber Security and Data Analytics",
  "Structured sprint planning with QA gates for quality delivery",
  "Data-driven decisions using GA4, Mixpanel, and custom analytics",
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Product Leadership You Can Trust
          </h2>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To help African organisations and startups transform ideas into production-ready digital
                products by combining product-led strategy, engineering excellence, and local capacity building.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Our Vision</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To be the trusted partner for tech transformation across Africa—delivering scalable,
                secure, and inclusive digital systems that drive socio-economic growth.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            We specialize in translating real-world operational needs into scalable digital solutions. 
            From nationwide transport platforms to government food distribution systems, we deliver 
            complex products in high-stakes, regulated environments.
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Our track record includes building and leading cross-functional teams, implementing 
            Agile frameworks that improve delivery predictability, and training 100+ African 
            entrepreneurs in digital growth strategies.
          </p>

          <ul className="space-y-4 mb-8">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{value}</span>
              </li>
            ))}
          </ul>

          {/* Images placed under the text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {['about-1.jpeg','about-2.jpeg','about-3.jpeg'].map((file, idx) => (
              <div key={file} className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border ${idx === 1 ? 'bg-muted/10 p-4' : ''}`}>
                <Image
                  src={`/about/${file}`}
                  alt={`About image ${file}`}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className={idx === 1 ? 'object-contain object-center' : 'object-cover object-center'}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
