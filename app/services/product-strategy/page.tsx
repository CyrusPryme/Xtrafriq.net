import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Product Strategy & Leadership",
  description:
    "Product discovery, roadmaps, OKRs, and leadership to build digital products that scale—aligned to users, business goals, and execution realities.",
  alternates: { canonical: `${siteUrl}/services/product-strategy` },
  openGraph: {
    title: "Product Strategy & Leadership | Xtrafriq Services",
    description:
      "Product discovery, roadmaps, OKRs, and leadership to build digital products that scale—aligned to users, business goals, and execution realities.",
    url: `${siteUrl}/services/product-strategy`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Strategy & Leadership | Xtrafriq Services",
    description:
      "Product discovery, roadmaps, OKRs, and leadership to build digital products that scale—aligned to users, business goals, and execution realities.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const outcomes = [
  "Clarity on what to build and why (positioning, ICP, problem framing)",
  "A measurable roadmap tied to OKRs and delivery milestones",
  "Execution cadence that keeps teams shipping with quality",
  "Decision-making support across stakeholders and constraints",
]

export default function ProductStrategyPage() {
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
              Product Strategy & Leadership
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We help teams move from ideas to outcomes—using structured discovery, roadmap discipline, and leadership
              that keeps execution aligned to real user value and business goals.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{o}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Want a roadmap you can ship?</h2>
                <p className="text-muted-foreground">
                  Tell us your product context and we’ll propose a discovery-to-delivery plan.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start a conversation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

