import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Enterprise & Government Platforms",
  description:
    "National-scale platforms for transport, logistics, operations, and finance—designed for reliability, security, and the governance regulated environments require.",
  path: "/services/enterprise-platforms",
})

export default function EnterprisePlatformsPage() {
  return (
    <ServiceDetailPage
      slug="enterprise-platforms"
      title="Enterprise & Government Platforms"
      description="We deliver complex platforms that support real-world operations—booking, logistics, workflows, finance, and reporting—with reliability and governance that regulated environments demand."
      outcomes={[
        "Requirements discovery with operational stakeholders",
        "Role-based access, auditability, and security-by-design",
        "Scalable architecture for high availability and growth",
        "Dashboards for real-time operational visibility",
      ]}
      ctaTitle="Building a platform with real constraints?"
      ctaDescription="We can help define scope, risks, delivery phases, and governance."
      ctaLabel="Talk to us"
    />
  )
}
