import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd, servicesCatalogJsonLd } from "@/lib/json-ld"
import { SERVICES } from "@/lib/services"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Product & Tech Services",
  description:
    "Product strategy, project delivery, enterprise platforms, app development, cybersecurity, cloud, and agile enablement—led from Accra for teams that need to ship.",
  path: "/services",
})

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        id="ld-breadcrumb-services"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <JsonLd id="ld-services-list" data={servicesCatalogJsonLd()} />
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Services built for modern product teams
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Xtrafriq Tech Consult helps organizations design, build, and scale digital products with product
              management at the core.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group p-6 rounded-2xl border border-border bg-card/60 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to talk through your roadmap?</h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-6">
              Tell us what you are building—we will help you shape scope, delivery, and the systems that scale.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
