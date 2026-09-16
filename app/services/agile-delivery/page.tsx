import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Agile Delivery & Team Enablement",
  description:
    "Sprint discipline, QA gates, and GitHub workflows that help teams ship faster without trading away quality or predictability.",
  path: "/services/agile-delivery",
})

export default function AgileDeliveryPage() {
  return (
    <ServiceDetailPage
      slug="agile-delivery"
      title="Agile Delivery & Team Enablement"
      description="We bring execution discipline—so teams ship faster without sacrificing quality. Expect pragmatic agile, clean workflows, and lightweight metrics that help you continuously improve."
      outcomes={[
        "Sprint rituals, backlog hygiene, and roadmap alignment",
        "Definition of Done and QA gates for quality",
        "Release planning and lightweight delivery metrics",
        "GitHub workflows (PR discipline, reviews, CI hygiene)",
      ]}
      ctaTitle="Want predictable delivery?"
      ctaDescription="We’ll standardize your workflow and improve sprint execution."
      ctaLabel="Improve delivery"
    />
  )
}
