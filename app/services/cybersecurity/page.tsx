import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Cybersecurity & Risk Management",
  description:
    "Security assessments, threat modeling, secure SDLC, and risk controls to protect systems and user data as you scale.",
  path: "/services/cybersecurity",
  ogTitle: "Cybersecurity & Risk Management | Xtrafriq Services",
})

export default function CybersecurityPage() {
  return (
    <ServiceDetailPage
      title="Cybersecurity & Risk Management"
      description="Security isn’t a checkbox. We help you build the right controls early—so you can ship quickly without accumulating hidden risk that becomes expensive later."
      outcomes={[
        "Threat modeling and security architecture reviews",
        "Secure SDLC practices and code review guardrails",
        "Access control and data protection recommendations",
        "Incident readiness and operational security basics",
      ]}
      ctaTitle="Want to reduce security risk fast?"
      ctaDescription="We’ll start with a practical review and prioritized fixes."
      ctaLabel="Get a security review"
    />
  )
}
