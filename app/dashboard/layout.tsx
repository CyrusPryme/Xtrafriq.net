import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your project dashboard—track progress, timelines, and updates in one place.",
  alternates: { canonical: `${siteUrl}/dashboard` },
  openGraph: {
    title: "Dashboard | Xtrafriq Tech Consult",
    description: "Your project dashboard—track progress, timelines, and updates in one place.",
    url: `${siteUrl}/dashboard`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | Xtrafriq Tech Consult",
    description: "Your project dashboard—track progress, timelines, and updates in one place.",
    images: [`${siteUrl}/logo.jpg`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}

