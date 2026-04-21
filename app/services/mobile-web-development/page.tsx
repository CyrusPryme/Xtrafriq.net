import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Mobile & Web App Development",
  description:
    "Production-ready mobile and web applications with product-led UX, performance, and maintainability—built to scale with your team and users.",
  alternates: { canonical: `${siteUrl}/services/mobile-web-development` },
  openGraph: {
    title: "Mobile & Web App Development | Xtrafriq Services",
    description:
      "Production-ready mobile and web applications with product-led UX, performance, and maintainability—built to scale with your team and users.",
    url: `${siteUrl}/services/mobile-web-development`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile & Web App Development | Xtrafriq Services",
    description:
      "Production-ready mobile and web applications with product-led UX, performance, and maintainability—built to scale with your team and users.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

const deliverables = [
  "Responsive web apps and mobile experiences",
  "Clean component systems and design consistency",
  "Performance, accessibility, and SEO best practices",
  "Release workflows and production readiness",
]

export default function MobileWebDevelopmentPage() {
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
              Mobile & Web App Development
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              We build user-first applications that feel fast, polished, and reliable—backed by an engineering approach
              that makes your product easy to iterate and scale.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {deliverables.map((d) => (
                <div key={d} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Need a product team that ships?</h2>
                <p className="text-muted-foreground">Share your goals and we’ll propose an execution plan.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start your project <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

