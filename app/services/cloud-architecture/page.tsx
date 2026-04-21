import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Cloud Architecture & Reliability",
  description:
    "Scalable cloud foundations, cost optimization, and reliability practices—so your product stays fast, available, and secure as it grows.",
  alternates: { canonical: `${siteUrl}/services/cloud-architecture` },
  openGraph: {
    title: "Cloud Architecture & Reliability | Xtrafriq Services",
    description:
      "Scalable cloud foundations, cost optimization, and reliability practices—so your product stays fast, available, and secure as it grows.",
    url: `${siteUrl}/services/cloud-architecture`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Architecture & Reliability | Xtrafriq Services",
    description:
      "Scalable cloud foundations, cost optimization, and reliability practices—so your product stays fast, available, and secure as it grows.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const items = [
  "Architecture review and scaling strategy",
  "Cost optimization and performance tuning",
  "Observability (logging/metrics/alerts) guidance",
  "Deployment hygiene and reliability practices",
]

export default function CloudArchitecturePage() {
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
              Cloud Architecture & Reliability
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We help you design cloud systems that are scalable, resilient, and cost-aware—so you can grow without
              firefighting.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {items.map((i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{i}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Need a scalable foundation?</h2>
                <p className="text-muted-foreground">We’ll review architecture and recommend high-leverage upgrades.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Plan your cloud strategy <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

