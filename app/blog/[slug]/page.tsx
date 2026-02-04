import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { allPosts, getPostBySlug } from "@/lib/blog-posts"

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Xtrafriq Tech Consult Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 border border-border">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                {post.category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This article is coming soon. In the meantime, explore our other
              insights on the blog or get in touch to discuss how we can help
              with your product management needs.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
