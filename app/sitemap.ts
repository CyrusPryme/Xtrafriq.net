import type { MetadataRoute } from 'next'
import { allPosts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://xtrafriq.com').replace(/\/$/, '')
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/clients`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/services/product-strategy`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/services/project-management`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/services/enterprise-platforms`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/services/mobile-web-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/services/cybersecurity`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/services/cloud-architecture`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/services/agile-delivery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes]
}

