import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://xtrafriq.com'),
  title: 'Xtrafriq Tech Consult | Product Management & Tech Services',
  description: 'Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/african-motif.png',
        media: '(prefers-color-scheme: light)'
      },
      {
        url: '/african-motif.png',
        media: '(prefers-color-scheme: dark)'
      }
    ],
    apple: '/african-motif.png',
  },
  openGraph: {
    title: 'Xtrafriq Tech Consult | Product Management & Tech Services',
    description: 'Expert product management and comprehensive tech services from Africa to the world. We build, scale, and optimize digital products with innovation and trust.',
    url: 'https://xtrafriq.com',
    siteName: 'Xtrafriq Tech Consult',
    images: [
      {
        url: '/african-motif.png',
        width: 1200,
        height: 630,
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
    images: ['/african-motif.png'],
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="content">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
