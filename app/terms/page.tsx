import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { site, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Xtrafriq Tech Consult - our terms and conditions for using our services.',
  alternates: { canonical: `${siteUrl}/terms` },
  openGraph: {
    title: 'Terms of Service | Xtrafriq Tech Consult',
    description: 'Terms of service for Xtrafriq Tech Consult - our terms and conditions for using our services.',
    url: `${siteUrl}/terms`,
    type: 'website',
    images: [{ url: `${siteUrl}/logo.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Xtrafriq Tech Consult',
    description: 'Terms of service for Xtrafriq Tech Consult - our terms and conditions for using our services.',
    images: [`${siteUrl}/logo.jpg`],
  },
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="glass-card rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Xtrafriq Tech Consult's website and services, you accept and agree 
                to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Services Description</h2>
              <p className="leading-relaxed">
                Xtrafriq Tech Consult provides product management, software development, and technology 
                consulting services. We work with clients to develop digital products, build technical 
                solutions, and provide strategic guidance for technology initiatives.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Client Responsibilities</h2>
              <p className="leading-relaxed">
                Clients are responsible for providing accurate information, timely feedback, and necessary 
                resources required for project completion. Clients must ensure they have the legal right 
                to use any materials provided to us for their projects.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Payment Terms</h2>
              <p className="leading-relaxed">
                Payment terms are specified in individual project agreements. All payments are due as 
                outlined in the project scope and timeline. Late payments may incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Intellectual Property</h2>
              <p className="leading-relaxed">
                Upon full payment, clients own the final deliverables created specifically for their project. 
                Xtrafriq Tech Consult retains rights to our methodologies, processes, and any reusable 
                components not specifically created for the client's unique project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
              <p className="leading-relaxed">
                Xtrafriq Tech Consult shall not be liable for any indirect, incidental, special, or 
                consequential damages resulting from the use of our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Termination</h2>
              <p className="leading-relaxed">
                Either party may terminate the service agreement with written notice. Termination does not 
                relieve the client of payment obligations for work completed prior to termination.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Information</h2>
              <p className="leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-2 space-y-1">
                <p>Email: {site.contactEmail}</p>
                <p>Phone: {site.contactPhone.replace(/(\+\d{3})(\d{3})(\d{3})(\d+)/, '$1 $2 $3 $4')}</p>
                <p>Location: Accra, Ghana | Remote Worldwide</p>
              </div>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
