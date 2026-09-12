import type { Metadata } from "next"
import { siteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in or create an account to access your dashboard and manage your projects.",
  alternates: { canonical: `${siteUrl}/auth` },
  openGraph: {
    title: "Sign in | Xtrafriq Tech Consult",
    description: "Sign in or create an account to access your dashboard and manage your projects.",
    url: `${siteUrl}/auth`,
    type: "website",
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign in | Xtrafriq Tech Consult",
    description: "Sign in or create an account to access your dashboard and manage your projects.",
    images: [`${siteUrl}/logo.jpg`],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children
}

