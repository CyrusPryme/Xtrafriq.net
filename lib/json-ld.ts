import { allPosts, type BlogPost } from "@/lib/blog-posts"
import { SERVICES, type ServiceCatalogItem } from "@/lib/services"
import {
  absoluteUrl,
  defaultDescription,
  defaultOgImage,
  logoImage,
  site,
  siteName,
  siteUrl,
  toIsoDate,
} from "@/lib/site"

function socialProfiles(): string[] {
  return [
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
  ].filter((v): v is string => Boolean(v))
}

export function organizationId(): string {
  return `${siteUrl}/#organization`
}

export function websiteId(): string {
  return `${siteUrl}/#website`
}

export function organizationJsonLd() {
  const sameAs = socialProfiles()
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": organizationId(),
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(logoImage.path),
      width: logoImage.width,
      height: logoImage.height,
    },
    image: absoluteUrl(defaultOgImage.path),
    description: defaultDescription,
    email: site.contactEmail,
    telephone: site.contactPhone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    areaServed: ["Ghana", "Worldwide"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.contactEmail,
      telephone: site.contactPhone,
      areaServed: "GH",
      availableLanguage: ["English"],
    },
    knowsAbout: SERVICES.map((service) => service.title),
    ...(sameAs.length ? { sameAs } : {}),
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(),
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    inLanguage: "en",
    publisher: { "@id": organizationId() },
  }
}

export function serviceJsonLd(service: ServiceCatalogItem) {
  const url = absoluteUrl(service.href)
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url,
    provider: { "@id": organizationId(), name: siteName, url: siteUrl },
    areaServed: ["Ghana", "Worldwide"],
    serviceType: service.title,
  }
}

export function servicesCatalogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteName} services`,
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(service.href),
      name: service.title,
    })),
  }
}

export function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${siteName} Blog`,
    description:
      "Writing on product management, project delivery, and building digital products from Accra.",
    url: absoluteUrl("/blog"),
    inLanguage: "en",
    publisher: { "@id": organizationId() },
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: toIsoDate(post.publishedAt),
    })),
  }
}

export function blogPostingJsonLd(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`)
  const imageUrl = absoluteUrl(post.image)
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl],
    datePublished: toIsoDate(post.publishedAt),
    dateModified: toIsoDate(post.updatedAt ?? post.publishedAt),
    author: { "@type": "Organization", name: post.author, url: siteUrl },
    publisher: {
      "@type": "Organization",
      "@id": organizationId(),
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(logoImage.path),
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en",
    articleSection: post.category,
    keywords: (post.tags ?? [post.category]).join(", "),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}
