import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Enterprise & Government Platforms",
  description:
    "National-scale platforms for regulated environments—transport, logistics, operations, and finance—built with reliability, security, and governance in mind.",
  alternates: { canonical: `${siteUrl}/services/enterprise-platforms` },
  openGraph: {
    title: "Enterprise & Government Platforms | Xtrafriq Services",
    description:
      "National-scale platforms for regulated environments—transport, logistics, operations, and finance—built with reliability, security, and governance in mind.",
    url: `${siteUrl}/services/enterprise-platforms`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise & Government Platforms | Xtrafriq Services",
    description:
      "National-scale platforms for regulated environments—transport, logistics, operations, and finance—built with reliability, security, and governance in mind.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const highlights = [
  "Requirements discovery with operational stakeholders",
  "Role-based access, auditability, and security-by-design",
  "Scalable architecture for high availability and growth",
  "Dashboards for real-time operational visibility",
]

export default function EnterprisePlatformsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Enterprise & Government Platforms
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We deliver complex platforms that support real-world operations—booking, logistics, workflows, finance, and reporting—
              with reliability and governance that regulated environments demand.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{h}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Building a platform with real constraints?</h2>
                <p className="text-muted-foreground">We can help define scope, risks, delivery phases, and governance.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Talk to us <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

