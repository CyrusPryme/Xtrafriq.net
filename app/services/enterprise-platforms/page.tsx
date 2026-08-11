import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Enterprise & Government Platforms",
  description:
    "National-scale platforms for regulated environments—transport, logistics, operations, and finance—built with reliability, security, and governance in mind.",
  path: "/services/enterprise-platforms",
  ogTitle: "Enterprise & Government Platforms | Xtrafriq Services",
})

export default function EnterprisePlatformsPage() {
  return (
    <ServiceDetailPage
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
