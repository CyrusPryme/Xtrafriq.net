import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Mobile & Web App Development",
  description:
    "Production-ready mobile and web applications with product-led UX, performance, and maintainability—built to scale with your team and users.",
  path: "/services/mobile-web-development",
  ogTitle: "Mobile & Web App Development | Xtrafriq Services",
})

export default function MobileWebDevelopmentPage() {
  return (
    <ServiceDetailPage
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
