import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Cloud Architecture & Reliability",
  description:
    "Cloud foundations, cost control, and reliability practices so products stay fast and available as traffic, teams, and features grow.",
  path: "/services/cloud-architecture",
})

export default function CloudArchitecturePage() {
  return (
    <ServiceDetailPage
      slug="cloud-architecture"
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
