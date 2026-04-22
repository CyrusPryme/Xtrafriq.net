import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProofMetrics } from "@/components/proof-metrics"
import { Services } from "@/components/services"
import { HowWeOperate } from "@/components/how-we-operate"
import { ProductsPortfolio } from "@/components/products-portfolio"
import { CaseStudies } from "@/components/case-studies"
import { InsightsPreview } from "@/components/insights-preview"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Home",
  description:
    "Product management and project management expertise in Africa—based in Accra, Ghana. We build, scale, and optimize digital products with innovation and trust.",
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: "Xtrafriq Tech Consult | Product Management & Tech Services",
    description:
      "Product management and project management expertise in Africa—based in Accra, Ghana. We build, scale, and optimize digital products with innovation and trust.",
    url: `${siteUrl}/`,
    siteName: "Xtrafriq Tech Consult",
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtrafriq Tech Consult | Product Management & Tech Services",
    description:
      "Product management and project management expertise in Africa—based in Accra, Ghana. We build, scale, and optimize digital products with innovation and trust.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofMetrics />
        <Services />
        <HowWeOperate />
        <ProductsPortfolio />
        <CaseStudies />
        <InsightsPreview />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
