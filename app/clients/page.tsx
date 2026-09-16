import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Building2, Globe, Layers, Users } from "lucide-react"
import { SITE_METRICS } from "@/lib/site-metrics"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Client Portfolio",
  description:
    "Selected delivery work with organisations such as iSTC Ghana, GIZ, KTZ, and MyAfriqueMart—platforms, programs, and product leadership from Accra.",
  path: "/clients",
})

type PortfolioClient = {
  name: string
  logo: string
  category: string
  writeup: string
  highlights: string[]
}

// Client logos (using kebab-case filenames)
const clients: PortfolioClient[] = [
  {
    name: "iStc Ghana",
    logo: "/clients/istc-ghana.png",
    category: "Software Development",
    writeup: "Product delivery leadership for nationwide transport platforms and operational visibility.",
    highlights: ["Booking + fleet workflows", "Operational dashboards", "End-to-end delivery leadership"],
  },
  {
    name: "KTZ",
    logo: "/clients/ktz-logo.png",
    category: "Technology",
    writeup: "End-to-end product management for a mobile astrology app with launch and growth execution.",
    highlights: ["Roadmap + UX collaboration", "App Store launch execution", "User growth experimentation"],
  },
  {
    name: "GIZ",
    logo: "/clients/giz.png",
    category: "Development",
    writeup: "Capacity building and digital learning program delivery with practical rollout support.",
    highlights: ["Curriculum + workshops", "Lightweight training systems", "Partner adoption support"],
  },
  {
    name: "MyAfriqueMart",
    logo: "/clients/my-afrique-mart.jpg",
    category: "E-commerce",
    writeup: "Marketplace platform delivery designed for multi-vendor scale and clear product operations.",
    highlights: ["Multi-vendor commerce systems", "Scalable architecture", "Delivery from concept to launch"],
  },
  {
    name: "Farmer Torks",
    logo: "/clients/farmer-torks.jpg",
    category: "Agriculture",
    writeup: "Agriculture commerce support for multi-vendor marketplaces and operational reliability.",
    highlights: ["Vendor onboarding flows", "Marketplace operations", "Scalable commerce UX"],
  },
  {
    name: "BFNG",
    logo: "/clients/BFNG.jpeg",
    category: "Agri-commerce",
    writeup: "Bulk foods and grocery sourcing systems designed for dependable weekly operations and scaling.",
    highlights: ["Workflow digitization", "Logistics + fulfillment planning", "Subscription-ready processes"],
  },
  {
    name: "Absolute Surge Group Ghana",
    logo: "/clients/absolute-surge-group-ghana.jpg",
    category: "Training & Development",
    writeup: "Enablement and delivery coaching for teams building sustainable digital capabilities.",
    highlights: ["Workshops and training", "Delivery leadership support", "Product readiness enablement"],
  },
  {
    name: "Scorpio Mystique",
    logo: "/clients/scorpio-mystique.jpeg",
    category: "Astrology & Wellness",
    writeup: "Wellness product experiences designed around user journeys and consistent content delivery.",
    highlights: ["Experience design", "User journey optimization", "Reliable content systems"],
  },
]

const statIcons = [Layers, Building2, Globe, Users] as const

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        id="ld-breadcrumb-clients"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Portfolio", path: "/clients" },
        ])}
      />
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              Our Portfolio
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 text-balance">
              Trusted by Leading
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Organizations</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We are proud to partner with innovative companies across Africa and beyond, 
              helping them achieve their digital transformation goals.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 sm:py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {SITE_METRICS.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <div key={stat.label} className="text-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-14 sm:py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4">
                Projects by Client
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
                From startups to enterprises, we deliver tailored solutions that drive growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {clients.map((client) => (
                <article
                  key={client.name}
                  className="bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full aspect-[3/2] relative rounded-lg overflow-hidden bg-muted/50 dark:bg-muted/30 border border-border mb-4">
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-contain p-4"
                    />
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground text-base">{client.name}</h3>
                    <div className="text-xs text-muted-foreground mt-1">{client.category}</div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                    {client.writeup}
                  </p>

                  <ul className="mt-3 space-y-1">
                    {client.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-14 sm:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to Join Our Growing List of Partners?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Let us help you transform your ideas into successful digital products. 
              Get in touch to discuss your project.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
