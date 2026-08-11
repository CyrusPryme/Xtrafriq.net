import type { MetadataRoute } from "next"
import { allPosts } from "@/lib/blog-posts"
import { SERVICES } from "@/lib/services"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/clients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...SERVICES.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}
