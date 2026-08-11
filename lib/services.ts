export type ServiceCatalogItem = {
  slug: string
  title: string
  description: string
  href: string
  /** Homepage card emphasis */
  featured?: boolean
  /** Footer short label (optional subset) */
  footerLabel?: string
}

/**
 * Canonical services catalog — keep in sync with service detail pages under app/services.
 */
export const SERVICES: ServiceCatalogItem[] = [
  {
    slug: "product-strategy",
    title: "Product Strategy & Leadership",
    description:
      "Discovery, roadmaps, OKRs, and execution leadership that turns ideas into scalable products.",
    href: "/services/product-strategy",
    featured: true,
    footerLabel: "Product Strategy",
  },
  {
    slug: "project-management",
    title: "Project Management (Technology + AI)",
    description:
      "End-to-end project leadership for any domain—optimized with modern tooling, automation, and AI to improve speed, cost, and predictability.",
    href: "/services/project-management",
    footerLabel: "Project Management",
  },
  {
    slug: "enterprise-platforms",
    title: "Enterprise & Government Platforms",
    description:
      "National-scale platforms for regulated environments—transport, logistics, finance, and operations.",
    href: "/services/enterprise-platforms",
  },
  {
    slug: "mobile-web-development",
    title: "Mobile & Web App Development",
    description:
      "Production-ready apps with strong UX, performance, and maintainability across web and mobile.",
    href: "/services/mobile-web-development",
    footerLabel: "Mobile & Web",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity & Risk Management",
    description: "Secure SDLC, threat modeling, and risk controls to protect systems and user data.",
    href: "/services/cybersecurity",
  },
  {
    slug: "cloud-architecture",
    title: "Cloud Architecture & Reliability",
    description: "Scalable cloud foundations, cost optimization, and reliability practices for growth.",
    href: "/services/cloud-architecture",
  },
  {
    slug: "agile-delivery",
    title: "Agile Delivery & Team Enablement",
    description:
      "Sprints, QA gates, workflows, and team enablement that increases delivery predictability.",
    href: "/services/agile-delivery",
  },
]

export const FOOTER_SERVICES = SERVICES.filter((s) => s.footerLabel)
