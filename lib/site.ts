import type { Metadata } from "next"

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

export const defaultTitle = "Xtrafriq Tech Consult | Product Management & Tech Services"

export function pageMetadata(opts: {
  title: string
  description: string
  path: string
  ogTitle?: string
  /** Use a full document title and skip the layout "%s | …" template. */
  absoluteTitle?: boolean
}): Metadata {
  const url = `${siteUrl}${opts.path === "/" ? "/" : opts.path}`
  const ogTitle = opts.ogTitle ?? `${opts.title} | Xtrafriq Tech Consult`

  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url,
      type: "website",
      images: [{ url: `${siteUrl}/logo.jpg` }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: opts.description,
      images: [`${siteUrl}/logo.jpg`],
    },
  }
}
