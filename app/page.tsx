import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Home",
  description:
    "Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.",
  alternates: { canonical: `${siteUrl}/` },
  openGraph: {
    title: "Xtrafriq Tech Consult | Product Management & Tech Services",
    description:
      "Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.",
    url: `${siteUrl}/`,
    siteName: "Xtrafriq Tech Consult",
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xtrafriq Tech Consult | Product Management & Tech Services",
    description:
      "Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.",
    images: [`${siteUrl}/logo.jpg`],
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
