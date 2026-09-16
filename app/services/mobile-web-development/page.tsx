import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Mobile & Web App Development",
  description:
    "Production-ready web and mobile apps with product-led UX, performance, and maintainable architecture—built to ship and to keep working as you grow.",
  path: "/services/mobile-web-development",
})

export default function MobileWebDevelopmentPage() {
  return (
    <ServiceDetailPage
      slug="mobile-web-development"
      title="Mobile & Web App Development"
      description="We build production-ready mobile and web applications with product-led UX, strong performance, and maintainable architecture."
      outcomes={[
        "Responsive web apps and mobile experiences",
        "Clean component systems and design consistency",
        "Performance, accessibility, and SEO best practices",
        "Release workflows and production readiness",
      ]}
      ctaTitle="Ready to ship a product users love?"
      ctaDescription="Share your product goals and we will propose a delivery plan."
    />
  )
}
