import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Cybersecurity & Risk Management",
  description:
    "Security assessments, threat modeling, secure SDLC, and risk controls to protect systems and user data as you scale.",
  alternates: { canonical: `${siteUrl}/services/cybersecurity` },
  openGraph: {
    title: "Cybersecurity & Risk Management | Xtrafriq Services",
    description:
      "Security assessments, threat modeling, secure SDLC, and risk controls to protect systems and user data as you scale.",
    url: `${siteUrl}/services/cybersecurity`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity & Risk Management | Xtrafriq Services",
    description:
      "Security assessments, threat modeling, secure SDLC, and risk controls to protect systems and user data as you scale.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const focusAreas = [
  "Threat modeling and security architecture reviews",
  "Secure SDLC practices and code review guardrails",
  "Access control and data protection recommendations",
  "Incident readiness and operational security basics",
]

export default function CybersecurityPage() {
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
              Cybersecurity & Risk Management
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              Security isn’t a checkbox. We help you build the right controls early—so you can ship quickly without
              accumulating hidden risk that becomes expensive later.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {focusAreas.map((a) => (
                <div key={a} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Want to reduce security risk fast?</h2>
                <p className="text-muted-foreground">We’ll start with a practical review and prioritized fixes.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get a security review <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

