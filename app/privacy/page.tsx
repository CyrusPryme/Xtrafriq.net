import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata, policyUpdatedLabel, site } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Xtrafriq Tech Consult collects, uses, and protects information you share through this website and our contact form.",
  path: "/privacy",
})

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <JsonLd
        id="ld-breadcrumb-privacy"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="glass-card rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as when you contact us through our website, 
                fill out a form, or send us an email. This may include your name, email address, phone number, and 
                any information you choose to provide about your project needs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to respond to your inquiries, provide our services, 
                and improve our website. We may also use your information to communicate with you about 
                our services, projects, and other relevant information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-2 space-y-1">
                <p>Email: {site.contactEmail}</p>
                <p>Phone: {site.contactPhone.replace(/(\+\d{3})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4")}</p>
              </div>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm">Last updated: {policyUpdatedLabel}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
