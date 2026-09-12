import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: "About Xtrafriq Tech Consult — mission, vision, and our approach to building production-ready systems.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About | Xtrafriq Tech Consult",
    description: "About Xtrafriq Tech Consult — mission, vision, and our approach to building production-ready systems.",
    url: `${siteUrl}/about`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Xtrafriq Tech Consult",
    description: "About Xtrafriq Tech Consult — mission, vision, and our approach to building production-ready systems.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
