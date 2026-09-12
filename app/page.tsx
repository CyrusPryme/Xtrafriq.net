import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProofMetrics } from "@/components/proof-metrics"
import { Services } from "@/components/services"
import { HowWeOperate } from "@/components/how-we-operate"
import { CaseStudies } from "@/components/case-studies"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { defaultTitle, pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: defaultTitle,
  description:
    "Product management and project management expertise in Africa—based in Accra, Ghana. We build, scale, and optimize digital products with innovation and trust.",
  path: "/",
  ogTitle: defaultTitle,
  absoluteTitle: true,
})

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProofMetrics />
        <Services />
        <HowWeOperate />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
