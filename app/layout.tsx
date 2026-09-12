import React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { AuthProvider } from "@/components/auth-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { defaultTitle, siteUrl } from "@/lib/site"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["500", "600", "700", "800"] })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Xtrafriq Tech Consult",
  },
  description:
    "Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.",
  keywords: [
    "product management africa",
    "product management ghana",
    "product management accra",
    "project management africa",
    "project management ghana",
    "project management accra",
    "product management",
    "project management",
    "tech consulting",
    "software development",
    "digital products",
    "product strategy",
    "Africa",
    "Ghana",
    "Accra",
  ],
  authors: [{ name: "Xtrafriq Tech Consult", url: siteUrl }],
  creator: "Xtrafriq Tech Consult",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: defaultTitle,
    description:
      "Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.",
    url: siteUrl,
    siteName: "Xtrafriq Tech Consult",
    images: [
      {
        url: "/logo.jpg",
        width: 512,
        height: 512,
        alt: "Xtrafriq Tech Consult",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: "Expert product management and comprehensive tech services from Africa to the world.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const sameAs = [
    process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
    process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
    process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE,
  ].filter((v): v is string => Boolean(v))

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xtrafriq Tech Consult",
    url: siteUrl,
    logo: `${siteUrl}/logo.jpg`,
    sameAs,
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Xtrafriq Tech Consult",
    url: siteUrl,
  }

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <div id="content">{children}</div>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
