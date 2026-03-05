import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from "@/components/auth-provider"
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://xtrafriq.com'),
  title: {
    default: 'Xtrafriq Tech Consult | Product Management & Tech Services',
    template: '%s | Xtrafriq Tech Consult',
  },
  description: 'Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.',
  keywords: ['product management', 'tech consulting', 'software development', 'Africa', 'digital products', 'product strategy'],
  authors: [{ name: 'Xtrafriq Tech Consult', url: 'https://xtrafriq.com' }],
  creator: 'Xtrafriq Tech Consult',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Xtrafriq Tech Consult | Product Management & Tech Services',
    description: 'Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.',
    url: 'https://xtrafriq.com',
    siteName: 'Xtrafriq Tech Consult',
    images: [
      {
        url: '/logo.jpg',
        width: 512,
        height: 512,
        alt: 'Xtrafriq Tech Consult',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xtrafriq Tech Consult | Product Management & Tech Services',
    description: 'Expert product management and comprehensive tech services from Africa to the world.',
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
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="antialiased">
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
