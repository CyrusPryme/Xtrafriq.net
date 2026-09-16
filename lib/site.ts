import type { Metadata } from "next"
import type { BlogPost } from "@/lib/blog-posts"

/**
 * Site-wide contact and company info.
 * Override with env: NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE
 */
export const site = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@xtrafriq.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233243879212",
} as const

/**
 * Canonical site origin used by metadata, sitemap, robots, and OG/Twitter tags.
 *
 * Default is the current production host (Vercel). xtrafriq.com is the intended
 * future brand domain — set NEXT_PUBLIC_SITE_URL once that host actually resolves.
 * Do not default to a dead hostname; crawlers and share previews follow these URLs.
 */
export const DEFAULT_SITE_URL = "https://xtrafriq-net.vercel.app"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "")

export const siteName = "Xtrafriq Tech Consult"

export const defaultTitle = "Xtrafriq Tech Consult | Product Management & Tech Services"

export const defaultDescription =
  "Accra-based product and project management studio. We help teams design, ship, and scale digital products across Africa and with remote clients worldwide."

/** Default social share image: landscape 1200x630, not the square logo. */
export const defaultOgImage = {
  path: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Xtrafriq Tech Consult — product management and tech services from Accra",
} as const

export const logoImage = {
  path: "/logo.jpg",
  width: 1086,
  height: 982,
  alt: "Xtrafriq Tech Consult logo",
} as const

/** Last meaningful marketing-content update (not deploy time). */
export const marketingContentUpdatedAt = "2026-09-12"

/** Privacy / terms copy last reviewed. */
export const policyUpdatedAt = "2026-01-15"
export const policyUpdatedLabel = "15 January 2026"

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return siteUrl
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`
}

export function toIsoDate(date: string): string {
  if (date.includes("T")) return new Date(date).toISOString()
  return new Date(`${date}T00:00:00.000Z`).toISOString()
}

export function socialImage(opts?: {
  path?: string
  width?: number
  height?: number
  alt?: string
}): { url: string; width: number; height: number; alt: string } {
  return {
    url: absoluteUrl(opts?.path ?? defaultOgImage.path),
    width: opts?.width ?? defaultOgImage.width,
    height: opts?.height ?? defaultOgImage.height,
    alt: opts?.alt ?? defaultOgImage.alt,
  }
}

export function pageMetadata(opts: {
  title: string
  description: string
  path: string
  ogTitle?: string
  /** Use a full document title and skip the layout "%s | …" template. */
  absoluteTitle?: boolean
  image?: {
    path: string
    width?: number
    height?: number
    alt?: string
  }
  type?: "website" | "article"
}): Metadata {
  const url = absoluteUrl(opts.path)
  const ogTitle = opts.ogTitle ?? `${opts.title} | ${siteName}`
  const image = socialImage(opts.image)

  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      type: opts.type ?? "website",
      siteName,
      locale: "en_US",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [image],
    },
  }
}

export function articleMetadata(post: BlogPost): Metadata {
  const url = absoluteUrl(`/blog/${post.slug}`)
  const title = post.seoTitle ?? post.title
  const description = post.excerpt
  const image = socialImage({
    path: post.image,
    width: post.imageWidth ?? 1280,
    height: post.imageHeight ?? 720,
    alt: post.imageAlt ?? post.title,
  })
  const publishedTime = toIsoDate(post.publishedAt)

  return {
    title,
    description,
    authors: [{ name: post.author }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url,
      siteName,
      locale: "en_US",
      publishedTime,
      modifiedTime: toIsoDate(post.updatedAt ?? post.publishedAt),
      authors: [post.author],
      tags: post.tags ?? [post.category],
      section: post.category,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [image],
    },
  }
}

export function noIndexMetadata(opts: { title: string; description: string; path: string }): Metadata {
  const url = absoluteUrl(opts.path)
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
  }
}
