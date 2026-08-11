import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import type { ReactNode } from "react"

type ServiceDetailProps = {
  title: string
  description: string
  outcomes: string[]
  ctaTitle: string
  ctaDescription: string
  ctaLabel?: string
  children?: ReactNode
}

export function ServiceDetailPage({
  title,
  description,
  outcomes,
  ctaTitle,
  ctaDescription,
  ctaLabel = "Start a conversation",
  children,
}: ServiceDetailProps) {
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

          <div className="rounded-2xl border border-border bg-card/70 p-8 md:p-10">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">{description}</p>

            <div className="grid md:grid-cols-2 gap-6">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground">{o}</p>
                </div>
              ))}
            </div>

            {children}

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-foreground">{ctaTitle}</h2>
                <p className="text-muted-foreground">{ctaDescription}</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                {ctaLabel} <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
