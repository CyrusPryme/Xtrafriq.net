import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Xtrafriq Tech Consult Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain rounded-lg bg-background p-1"
              />
              <span className="font-semibold text-lg">Xtrafriq Tech Consult</span>
            </Link>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Transforming ideas into exceptional digital products through 
              expert product management and innovative tech solutions from Africa to the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                Services
              </Link>
              <Link href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-background/70 text-sm">Product Management</span>
              <span className="text-background/70 text-sm">Software Development</span>
              <span className="text-background/70 text-sm">Mobile Solutions</span>
              <span className="text-background/70 text-sm">Cloud Services</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Xtrafriq Tech Consult. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-background/50 hover:text-background transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/50 hover:text-background transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
