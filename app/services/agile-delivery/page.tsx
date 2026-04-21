import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Agile Delivery & Team Enablement",
  description:
    "Structured sprint planning, QA gates, GitHub workflows, and team enablement to improve delivery speed, quality, and predictability.",
  alternates: { canonical: `${siteUrl}/services/agile-delivery` },
  openGraph: {
    title: "Agile Delivery & Team Enablement | Xtrafriq Services",
    description:
      "Structured sprint planning, QA gates, GitHub workflows, and team enablement to improve delivery speed, quality, and predictability.",
    url: `${siteUrl}/services/agile-delivery`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agile Delivery & Team Enablement | Xtrafriq Services",
    description:
      "Structured sprint planning, QA gates, GitHub workflows, and team enablement to improve delivery speed, quality, and predictability.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const practices = [
  "Sprint rituals, backlog hygiene, and roadmap alignment",
  "Definition of Done and QA gates for quality",
  "Release planning and lightweight delivery metrics",
  "GitHub workflows (PR discipline, reviews, CI hygiene)",
]

export default function AgileDeliveryPage() {
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
              Agile Delivery & Team Enablement
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We bring execution discipline—so teams ship faster without sacrificing quality. Expect pragmatic agile,
              clean workflows, and lightweight metrics that help you continuously improve.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {practices.map((p) => (
                <div key={p} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{p}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Want predictable delivery?</h2>
                <p className="text-muted-foreground">We’ll standardize your workflow and improve sprint execution.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Improve delivery <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

