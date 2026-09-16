export type BlogPost = {
  title: string
  excerpt: string
  image: string
  /** Plain-language image description; falls back to title when omitted */
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  author: string
  date: string
  /** ISO date for metadata / sitemap */
  publishedAt: string
  /** ISO date when the article was last substantively updated */
  updatedAt?: string
  /** Shorter document title for SERP; Open Graph still uses `title` */
  seoTitle?: string
  readTime: string
  category: string
  tags?: string[]
  slug: string
}

export const featuredPost: BlogPost = {
  title: "AI Is Moving Faster Than Your Process: What Product and Project Teams Should Change Now",
  seoTitle: "AI Is Moving Faster Than Your Process",
  excerpt:
    "AI is compressing some work and inflating stakeholder expectations at the same time. Here is how product managers, project managers, and delivery leads keep scope, quality, and trust intact.",
  image: "/blog-ai-advancing-product-teams.png",
  imageAlt:
    "Silhouettes of a product team around a conference table, with product boards and a teal neural-network wave connecting into a digital grid",
  imageWidth: 1280,
  imageHeight: 720,
  author: "Xtrafriq Team",
  date: "Sep 12, 2026",
  publishedAt: "2026-09-12",
  readTime: "10 min read",
  category: "Product Management",
  tags: ["Product Management", "Project Delivery", "AI"],
  slug: "ai-advancing-product-project-teams",
}

export const blogPosts: BlogPost[] = [
  {
    title: "Thriving as a Remote Product Manager: Strategies for Success in a Distributed World",
    seoTitle: "Thriving as a Remote Product Manager",
    excerpt:
      "Master the art of product management from anywhere. Discover proven strategies, tools, and mindsets that separate good remote PMs from great ones.",
    image: "/remote-pm-success-tips.png",
    imageAlt:
      "Illustration of remote product-management habits: strong leadership, organizational prowess, and effective communication",
    imageWidth: 1280,
    imageHeight: 720,
    author: "Xtrafriq Team",
    date: "Feb 16, 2026",
    publishedAt: "2026-02-16",
    readTime: "12 min read",
    category: "Product Management",
    tags: ["Product Management", "Remote Work"],
    slug: "remote-product-manager",
  },
  {
    title: "The Ultimate Guide to Product Management in 2025",
    excerpt:
      "Discover essential strategies and frameworks that successful product managers use to build products that users love and businesses thrive on.",
    image: "/blog-product-management-2025.png",
    imageAlt: "Product manager reviewing a roadmap and discovery notes on a laptop",
    imageWidth: 1280,
    imageHeight: 720,
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
    imageAlt: "Team collaborating on a digital transformation roadmap for an African business",
    imageWidth: 1280,
    imageHeight: 720,
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
    imageAlt: "Delivery team at a sprint board discussing work in progress",
    imageWidth: 1280,
    imageHeight: 720,
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
    imageAlt: "Skyline and workspace collage representing growing African tech hubs",
    imageWidth: 1280,
    imageHeight: 720,
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
    imageAlt: "Founders reviewing growth metrics after launching an MVP",
    imageWidth: 1280,
    imageHeight: 720,
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
    imageAlt: "Diagram-style illustration of a scalable cloud architecture",
    imageWidth: 1280,
    imageHeight: 720,
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

export function latestPostDate(): string {
  return allPosts.reduce((latest, post) => (post.publishedAt > latest ? post.publishedAt : latest), "1970-01-01")
}
