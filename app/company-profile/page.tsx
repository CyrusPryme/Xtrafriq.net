import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CompanyProfileDownloads } from "@/components/company-profile-downloads"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Company Profile",
  description:
    "Download Xtrafriq Tech Consult company profiles: a corporate profile, a two-page capability statement for tenders, and a one-page introduction.",
  path: "/company-profile",
})

export default function CompanyProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        id="ld-breadcrumb-company-profile"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Company profile", path: "/company-profile" },
        ])}
      />
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
            Institutional documents
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Company profile
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-2">
            Xtrafriq Tech Consult is a Product Management & Technology Consulting Company.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            We design, build and deliver digital products and technology systems that help organisations
            operate, grow and scale. Use these documents for tenders, proposals, and partnership conversations.
          </p>
          <CompanyProfileDownloads compact heading="Downloadable profiles" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
