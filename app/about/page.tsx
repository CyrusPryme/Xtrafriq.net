import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"
import { JsonLd } from "@/components/json-ld"
import { breadcrumbJsonLd } from "@/lib/json-ld"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About Xtrafriq Tech Consult",
  description:
    "Xtrafriq Tech Consult is a Product Management & Technology Consulting Company combining product strategy, delivery leadership, and engineering to ship production-ready systems for African organisations and global teams.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd
        id="ld-breadcrumb-about"
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
