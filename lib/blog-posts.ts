export type BlogPost = {
  title: string
  excerpt: string
  image: string
  /** Plain-language image description; falls back to title when omitted */
  imageAlt?: string
  author: string
  date: string
  /** ISO date for metadata / sitemap */
  publishedAt: string
  readTime: string
  category: string
  slug: string
}

export const featuredPost: BlogPost = {
  title: "AI Is Moving Faster Than Your Process: What Product and Project Teams Should Change Now",
  excerpt:
    "AI is compressing some work and inflating stakeholder expectations at the same time. Here is how product managers, project managers, and delivery leads keep scope, quality, and trust intact.",
  image: "/blog-ai-advancing-product-teams.png",
  imageAlt:
    "Silhouettes of a product team around a conference table, with product boards and a teal neural-network wave connecting into a digital grid",
  author: "Xtrafriq Team",
  date: "Sep 12, 2026",
  publishedAt: "2026-09-12",
  readTime: "10 min read",
  category: "Product Management",
  slug: "ai-advancing-product-project-teams",
}

export const blogPosts: BlogPost[] = [
  {
    title: "Thriving as a Remote Product Manager: Strategies for Success in a Distributed World",
    excerpt:
      "Master the art of product management from anywhere. Discover proven strategies, tools, and mindsets that separate good remote PMs from great ones.",
    image: "/remote-pm-success-tips.png",
    author: "Xtrafriq Team",
    date: "Feb 16, 2026",
    publishedAt: "2026-02-16",
    readTime: "12 min read",
    category: "Product Management",
    slug: "remote-product-manager",
  },
  {
    title: "The Ultimate Guide to Product Management in 2025",
    excerpt:
      "Discover essential strategies and frameworks that successful product managers use to build products that users love and businesses thrive on.",
    image: "/blog-product-management-2025.png",
    author: "Xtrafriq Team",
    date: "Jan 20, 2026",
    publishedAt: "2026-01-20",
    readTime: "8 min read",
    category: "Product Management",
    slug: "product-management-guide-2025",
  },
  {
    title: "Digital Transformation: A Roadmap for African Businesses",
    excerpt: "How businesses across Africa are leveraging technology to compete globally and drive innovation.",
    image: "/blog-digital-transformation-africa.png",
    author: "Xtrafriq Team",
    date: "Jan 15, 2026",
    publishedAt: "2026-01-15",
    readTime: "6 min read",
    category: "Digital Strategy",
    slug: "digital-transformation-africa",
  },
  {
    title: "Agile Methodology: Beyond the Basics",
    excerpt: "Advanced agile practices that help teams deliver faster while maintaining quality and team morale.",
    image: "/blog-agile-beyond-basics.png",
    author: "Xtrafriq Team",
    date: "Jan 10, 2026",
    publishedAt: "2026-01-10",
    readTime: "5 min read",
    category: "Methodology",
    slug: "agile-beyond-basics",
  },
  {
    title: "The Rise of African Tech Ecosystem",
    excerpt: "Exploring the rapid growth of tech hubs across Africa and opportunities for global partnerships.",
    image: "/blog-african-tech-ecosystem.png",
    author: "Xtrafriq Team",
    date: "Jan 5, 2026",
    publishedAt: "2026-01-05",
    readTime: "7 min read",
    category: "Industry Insights",
    slug: "african-tech-ecosystem",
  },
  {
    title: "Scaling Your Startup: From MVP to Market Leader",
    excerpt: "Proven strategies for growing your tech startup from initial concept to industry dominance.",
    image: "/blog-scaling-startup-mvp.png",
    author: "Xtrafriq Team",
    date: "Dec 28, 2025",
    publishedAt: "2025-12-28",
    readTime: "9 min read",
    category: "Startups",
    slug: "scaling-startup-mvp-market-leader",
  },
  {
    title: "Cloud Architecture Best Practices for 2026",
    excerpt: "Design patterns and strategies for building scalable, secure, and cost-effective cloud infrastructure.",
    image: "/blog-cloud-architecture.png",
    author: "Xtrafriq Team",
    date: "Dec 20, 2025",
    publishedAt: "2025-12-20",
    readTime: "6 min read",
    category: "Technology",
    slug: "cloud-architecture-best-practices",
  },
]

export const allPosts: BlogPost[] = [featuredPost, ...blogPosts]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug)
}
