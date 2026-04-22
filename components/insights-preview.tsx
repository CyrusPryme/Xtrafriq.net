import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"

export function InsightsPreview() {
  const topPosts = blogPosts.slice(0, 3)

  return (
    <section aria-label="Insights" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[110px]" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Ideas you can <span className="text-gradient">ship</span>
            </h2>
            <p className="text-muted-foreground text-lg text-pretty">
              Practical guidance on product management, delivery, and technology—written from real execution experience.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium">
            View all articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
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
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-5 mt-5 border-t border-border">
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
      </div>
    </section>
  )
}

