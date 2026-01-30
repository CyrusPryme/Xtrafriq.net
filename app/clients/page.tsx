import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Building2, Handshake, Globe } from "lucide-react"

export const metadata = {
  title: "Our Clients & Partners | Xtrafriq Tech Consult",
  description: "Trusted by leading companies across Africa and beyond. See the organizations we've partnered with to deliver exceptional tech solutions.",
}

// Client logos (using kebab-case filenames)
const clients = [
  {
    name: "Absolute Surge Group Ghana",
    logo: "/clients/absolute-surge-group-ghana.jpg",
    category: "Technology",
  },
  {
    name: "Farmer Torks",
    logo: "/clients/farmer-torks.jpg",
    category: "Agriculture",
  },
  {
    name: "GIZ",
    logo: "/clients/giz.png",
    category: "Development",
  },
  {
    name: "iStc Ghana",
    logo: "/clients/istc-ghana.png",
    category: "Software Development",
  },
  {
    name: "KTZ",
    logo: "/clients/ktz-logo.png",
    category: "Technology",
  },
  {
    name: "MyAfriqueMart",
    logo: "/clients/my-afrique-mart.jpg",
    category: "E-commerce",
  },
  {
    name: "Scorpio Mystique",
    logo: "/clients/scorpio-mystique.jpeg",
    category: "Retail",
  },
]

const stats = [
  { icon: Building2, value: "50+", label: "Clients Served" },
  { icon: Handshake, value: "100+", label: "Projects Delivered" },
  { icon: Globe, value: "15+", label: "Countries Reached" },
]

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Clients & Partners
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Trusted by Leading
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Organizations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              We are proud to partner with innovative companies across Africa and beyond, 
              helping them achieve their digital transformation goals.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Companies We Have Worked With
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From startups to enterprises, we deliver tailored solutions that drive growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              {clients.map((client) => (
                <div
                  key={client.name}
                  className="group relative bg-card border border-border rounded-xl p-6 lg:p-8 flex flex-col items-center justify-center hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Logo Display */}
                  <div className="w-full aspect-[3/2] relative mb-4 flex items-center justify-center bg-muted/50 rounded-lg overflow-hidden">
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 30vw, 45vw"
                      className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-medium text-foreground text-center text-sm lg:text-base">
                    {client.name}
                  </h3>
                  <span className="text-xs text-muted-foreground mt-1">
                    {client.category}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructional block removed — client logos are now displayed automatically. */}
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
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
