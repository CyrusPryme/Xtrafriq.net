import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Product Strategy & Leadership",
  description:
    "Product discovery, roadmaps, OKRs, and leadership to build digital products that scale—aligned to users, business goals, and execution realities.",
  path: "/services/product-strategy",
  ogTitle: "Product Strategy & Leadership | Xtrafriq Services",
})

export default function ProductStrategyPage() {
  return (
    <ServiceDetailPage
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
