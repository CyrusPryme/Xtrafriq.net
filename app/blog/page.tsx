import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const featuredPost = {
  title: "The Ultimate Guide to Product Management in 2025",
  excerpt: "Discover the essential strategies and frameworks that successful product managers use to build products that users love and businesses thrive on.",
  image: "/blog/product-management-guide.jpg",
  author: "Xtrafriq Team",
  date: "Jan 20, 2026",
  readTime: "8 min read",
  category: "Product Management",
  slug: "product-management-guide-2025"
}

const blogPosts = [
  {
    title: "Digital Transformation: A Roadmap for African Businesses",
    excerpt: "How businesses across Africa are leveraging technology to compete globally and drive innovation.",
    image: "/blog/digital-transformation.jpg",
    author: "Xtrafriq Team",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Digital Strategy",
    slug: "digital-transformation-africa"
  },
  {
    title: "Agile Methodology: Beyond the Basics",
    excerpt: "Advanced agile practices that help teams deliver faster while maintaining quality and team morale.",
    image: "/blog/agile-methodology.jpg",
    author: "Xtrafriq Team",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    category: "Methodology",
    slug: "agile-beyond-basics"
  },
  {
    title: "The Rise of African Tech Ecosystem",
    excerpt: "Exploring the rapid growth of tech hubs across Africa and opportunities for global partnerships.",
    image: "/blog/african-tech-ecosystem.jpg",
    author: "Xtrafriq Team",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    category: "Industry Insights",
    slug: "african-tech-ecosystem"
  },
  {
    title: "Scaling Your Startup: From MVP to Market Leader",
    excerpt: "Proven strategies for growing your tech startup from initial concept to industry dominance.",
    image: "/blog/startup-scaling.jpg",
    author: "Xtrafriq Team",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    category: "Startups",
    slug: "scaling-startup-mvp-market-leader"
  },
  {
    title: "Cloud Architecture Best Practices for 2026",
    excerpt: "Design patterns and strategies for building scalable, secure, and cost-effective cloud infrastructure.",
    image: "/blog/cloud-architecture.jpg",
    author: "Xtrafriq Team",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "Technology",
    slug: "cloud-architecture-best-practices"
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert insights on product management, technology trends, and digital innovation from Africa to the world.
            </p>
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featuredPost.slug}`} className="group block mb-16">
            <article className="grid lg:grid-cols-2 gap-8 bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors">
              <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:py-12 flex flex-col justify-center">
                <span className="text-primary text-sm font-medium mb-3">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-balance">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          </Link>

          {/* Blog Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Latest Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for the latest insights on product management and tech innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
