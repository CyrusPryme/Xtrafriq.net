import Link from "next/link"
import Image from "next/image"
import { FOOTER_SERVICES } from "@/lib/services"
import { primaryPositioning, site } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="sm:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Xtrafriq Tech Consult - Home">
              <Image
                src="/logo.jpg"
                alt="Xtrafriq Tech Consult Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain rounded-lg bg-background p-1 dark:ring-1 dark:ring-background/50"
              />
              <span className="font-semibold text-lg">Xtrafriq Tech Consult</span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Product Management & Technology Consulting Company. {primaryPositioning}
            </p>
            <p className="mt-4 text-sm text-background/70">
              <a href={`mailto:${site.contactEmail}`} className="hover:text-background transition-colors">
                {site.contactEmail}
              </a>
              <span className="mx-2 text-background/40" aria-hidden="true">
                ·
              </span>
              <a href={`tel:${site.contactPhone}`} className="hover:text-background transition-colors">
                {site.formattedPhone}
              </a>
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Quick Links</p>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                Services
              </Link>
              <Link href="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link href="/company-profile" className="text-background/70 hover:text-background transition-colors text-sm">
                Company profile
              </Link>
              <Link href="/clients" className="text-background/70 hover:text-background transition-colors text-sm">
                Portfolio
              </Link>
              <Link href="/blog" className="text-background/70 hover:text-background transition-colors text-sm">
                Blog
              </Link>
              <Link href="/#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-semibold mb-4">Services</p>
            <nav className="flex flex-col gap-3" aria-label="Footer services">
              {FOOTER_SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {service.footerLabel}
                </Link>
              ))}
              <Link href="/services" className="text-background/70 hover:text-background transition-colors text-sm">
                All services
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Xtrafriq Tech Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-background/50 hover:text-background transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/50 hover:text-background transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
