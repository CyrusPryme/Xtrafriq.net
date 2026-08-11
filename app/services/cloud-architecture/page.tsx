import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Cloud Architecture & Reliability",
  description:
    "Scalable cloud foundations, cost optimization, and reliability practices—so your product stays fast, available, and secure as it grows.",
  path: "/services/cloud-architecture",
  ogTitle: "Cloud Architecture & Reliability | Xtrafriq Services",
})

export default function CloudArchitecturePage() {
  return (
    <ServiceDetailPage
      title="Cloud Architecture & Reliability"
      description="We help you design cloud systems that are scalable, resilient, and cost-aware—so you can grow without firefighting."
      outcomes={[
        "Architecture review and scaling strategy",
        "Cost optimization and performance tuning",
        "Observability (logging/metrics/alerts) guidance",
        "Deployment hygiene and reliability practices",
      ]}
      ctaTitle="Need a scalable foundation?"
      ctaDescription="We’ll review architecture and recommend high-leverage upgrades."
      ctaLabel="Plan your cloud strategy"
    />
  )
}
