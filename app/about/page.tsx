import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"

export const metadata = {
  title: "About | Xtrafriq Tech Consult",
  description: "About Xtrafriq Tech Consult — mission, vision, and our approach to building production-ready systems.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
