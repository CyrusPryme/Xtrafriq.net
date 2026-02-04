import { CheckCircle2, Heart } from "lucide-react"
import Image from "next/image"

const charityImages = [
  { src: "/about/charity-youth-soccer.png", alt: "Youth playing soccer—community programs supported by our charity partners" },
  { src: "/about/charity-community-event.png", alt: "Community event with Blacksheep Foundation and Awisi Foundation beneficiaries" },
  { src: "/about/charity-coaching.png", alt: "Youth sports coaching session supported by our charitable giving" },
]

const values = [
  "Full product lifecycle from discovery to post-launch optimization",
  "Mobile and desktop app development with product-led strategy",
  "Structured sprint planning with QA gates for quality delivery",
  "Product management expertise across consumer, enterprise, and government sectors",
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              Product Leadership You Can Trust
            </h2>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-accent opacity-60" />
          </div>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-6 rounded-xl border border-border bg-secondary/40 backdrop-blur-sm">
              <h4 className="text-sm font-semibold text-foreground mb-2">Our Mission</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To help African organisations and startups transform ideas into production-ready digital
                products by combining product-led strategy, engineering excellence, and local capacity building.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-secondary/40 backdrop-blur-sm">
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

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {values.map((value) => (
              <div key={value} className="flex items-start gap-4 p-4 rounded-lg bg-card hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div className="text-foreground">{value}</div>
              </div>
            ))}
          </div>

          {/* Images placed under the text */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {['about-1.jpeg','about-2.jpeg','about-3.jpeg'].map((file, idx) => (
              <div key={file} className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border ${idx === 1 ? 'bg-muted/10 p-4' : ''} shadow-sm hover:shadow-lg transition-shadow transform-gpu hover:-translate-y-1`}>
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

          {/* Charity Giving */}
          <div className="mb-10 p-6 rounded-2xl bg-primary/5/80 border border-primary/10 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-semibold text-foreground">Giving Back</h4>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We donate a portion of our proceeds to <strong className="text-foreground">Blacksheep Foundation</strong> and{' '}
              <strong className="text-foreground">Awisi Foundation</strong>—charity organizations in Ghana that support youth development,
              community programs, and education. When you work with us, you help create positive impact beyond technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {charityImages.map((img) => (
                <div key={img.src} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
