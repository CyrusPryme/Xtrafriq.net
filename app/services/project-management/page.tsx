import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Project Management (Technology + AI)",
  description:
    "Project management for any industry—optimized with technology and AI to improve delivery speed, cost efficiency, and predictability.",
  alternates: { canonical: `${siteUrl}/services/project-management` },
  openGraph: {
    title: "Project Management (Technology + AI) | Xtrafriq Services",
    description:
      "Project management for any industry—optimized with technology and AI to improve delivery speed, cost efficiency, and predictability.",
    url: `${siteUrl}/services/project-management`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management (Technology + AI) | Xtrafriq Services",
    description:
      "Project management for any industry—optimized with technology and AI to improve delivery speed, cost efficiency, and predictability.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const outcomes = [
  "Clear scope, milestones, and stakeholder alignment",
  "Risk, dependency, and change management that keeps delivery predictable",
  "Automation and AI workflows to reduce manual coordination overhead",
  "Dashboards and reporting that make progress visible and actionable",
]

const examples = [
  "Operations and logistics programs",
  "Construction and infrastructure support workflows",
  "Education and training programs",
  "Marketing and growth initiatives",
  "Digital transformation and tool rollout projects",
]

export default function ProjectManagementPage() {
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
              Project Management (Technology + AI)
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We manage projects beyond software. If your initiative can be made faster, cheaper, or more predictable
              through better tooling, automation, and AI-assisted workflows—this service is for you.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{o}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <h2 className="text-lg font-semibold text-foreground mb-3">Common project types</h2>
                <ul className="space-y-2 text-muted-foreground">
                  {examples.map((e) => (
                    <li key={e} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-secondary/30">
                <h2 className="text-lg font-semibold text-foreground mb-3">What you get</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A delivery plan with milestones, governance, and reporting—plus an automation roadmap for removing bottlenecks and
                  improving coordination using modern tools and AI.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Want a predictable delivery plan?</h2>
                <p className="text-muted-foreground">Share your initiative and we’ll propose an execution approach.</p>
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

