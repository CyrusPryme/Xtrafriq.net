import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product and project management-led services: delivery leadership, enterprise platforms, mobile & web development, cybersecurity, cloud, agile enablement, and project optimization with technology and AI.",
  alternates: { canonical: `${siteUrl}/services` },
  openGraph: {
    title: "Services | Xtrafriq Tech Consult",
    description:
      "Product and project management-led services: delivery leadership, enterprise platforms, mobile & web development, cybersecurity, cloud, agile enablement, and project optimization with technology and AI.",
    url: `${siteUrl}/services`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Xtrafriq Tech Consult",
    description:
      "Product management-led tech services: product strategy, enterprise platforms, mobile & web development, cybersecurity, cloud, and agile delivery.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const services = [
  {
    title: "Product Strategy & Leadership",
    description: "Discovery, roadmaps, OKRs, and execution leadership that turns ideas into scalable products.",
    href: "/services/product-strategy",
  },
  {
    title: "Project Management (Technology + AI)",
    description:
      "End-to-end project leadership for any domain—optimized with modern tooling, automation, and AI to improve speed, cost, and predictability.",
    href: "/services/project-management",
  },
  {
    title: "Enterprise & Government Platforms",
    description: "National-scale platforms for regulated environments—transport, logistics, finance, and operations.",
    href: "/services/enterprise-platforms",
  },
  {
    title: "Mobile & Web App Development",
    description: "Production-ready apps with strong UX, performance, and maintainability across web and mobile.",
    href: "/services/mobile-web-development",
  },
  {
    title: "Cybersecurity & Risk Management",
    description: "Secure SDLC, threat modeling, and risk controls to protect systems and user data.",
    href: "/services/cybersecurity",
  },
  {
    title: "Cloud Architecture & Reliability",
    description: "Scalable cloud foundations, cost optimization, and reliability practices for growth.",
    href: "/services/cloud-architecture",
  },
  {
    title: "Agile Delivery & Team Enablement",
    description: "Sprints, QA gates, workflows, and team enablement that increases delivery predictability.",
    href: "/services/agile-delivery",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Services built for modern product teams
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Xtrafriq Tech Consult helps organizations design, build, and scale digital products with product management at the core.
              Choose a service area below to learn how we deliver outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group glass-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all"
              >
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Ready to start?</h3>
              <p className="text-muted-foreground">
                Tell us what you’re building and we’ll recommend the right engagement model.
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

