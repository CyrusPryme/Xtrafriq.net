import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Product Strategy & Leadership",
  description:
    "Discovery, roadmaps, OKRs, and product leadership so Accra and remote teams know what to build, why it matters, and how execution stays aligned.",
  path: "/services/product-strategy",
})

export default function ProductStrategyPage() {
  return (
    <ServiceDetailPage
      slug="product-strategy"
      title="Product Strategy & Leadership"
      description="We help teams move from ideas to outcomes—using structured discovery, roadmap discipline, and leadership that keeps execution aligned to real user value and business goals."
      outcomes={[
        "Clarity on what to build and why (positioning, ICP, problem framing)",
        "A measurable roadmap tied to OKRs and delivery milestones",
        "Execution cadence that keeps teams shipping with quality",
        "Decision-making support across stakeholders and constraints",
      ]}
      ctaTitle="Want a roadmap you can ship?"
      ctaDescription="Tell us your product context and we’ll propose a discovery-to-delivery plan."
    />
  )
}
