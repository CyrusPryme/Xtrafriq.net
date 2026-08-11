import type { Metadata } from "next"

/**
 * Site-wide contact and company info.
 * Override with env: NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_CONTACT_PHONE
 */
export const site = {
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@xtrafriq.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+233243879212",
} as const

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export function pageMetadata(opts: {
  title: string
  description: string
  path: string
  ogTitle?: string
}): Metadata {
  const url = `${siteUrl}${opts.path === "/" ? "/" : opts.path}`
  const ogTitle = opts.ogTitle ?? `${opts.title} | Xtrafriq Tech Consult`

  return {
    title: opts.title,
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
