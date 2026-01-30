import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
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
    url: 'https://your-domain.com',
    siteName: 'Xtrafriq Tech Consult',
    images: [
      {
        url: '/og-image.png',
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
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <div id="content">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
