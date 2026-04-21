import type { Metadata } from "next"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://xtrafriq.com").replace(/\/$/, "")

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin dashboard for managing users and projects.",
  alternates: { canonical: `${siteUrl}/admin` },
  openGraph: {
    title: "Admin | Xtrafriq Tech Consult",
    description: "Admin dashboard for managing users and projects.",
    url: `${siteUrl}/admin`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin | Xtrafriq Tech Consult",
    description: "Admin dashboard for managing users and projects.",
    images: [`${siteUrl}/logo.jpg`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}

