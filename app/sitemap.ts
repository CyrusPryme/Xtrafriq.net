import type { MetadataRoute } from "next"
import { allPosts, latestPostDate } from "@/lib/blog-posts"
import { SERVICES } from "@/lib/services"
import { absoluteUrl, marketingContentUpdatedAt, policyUpdatedAt } from "@/lib/site"

function dateAt(isoDate: string): Date {
  return new Date(`${isoDate}T00:00:00.000Z`)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const marketing = dateAt(marketingContentUpdatedAt)
  const policy = dateAt(policyUpdatedAt)
  const blogIndex = dateAt(latestPostDate())

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: marketing, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/about"), lastModified: marketing, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/company-profile"), lastModified: marketing, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/clients"), lastModified: marketing, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: blogIndex, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/services"), lastModified: marketing, changeFrequency: "monthly", priority: 0.8 },
    ...SERVICES.map((service) => ({
      url: absoluteUrl(service.href),
      lastModified: marketing,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/privacy"), lastModified: policy, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: policy, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: dateAt(post.updatedAt ?? post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
