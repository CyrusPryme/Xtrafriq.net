export type BlogPost = {
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  slug: string
}

export const featuredPost: BlogPost = {
  title: "The Ultimate Guide to Product Management in 2025",
  excerpt: "Discover the essential strategies and frameworks that successful product managers use to build products that users love and businesses thrive on.",
  image: "/blog/product-management-guide.jpg",
  author: "Xtrafriq Team",
  date: "Jan 20, 2026",
  readTime: "8 min read",
  category: "Product Management",
  slug: "product-management-guide-2025",
}

export const blogPosts: BlogPost[] = [
  {
    title: "Digital Transformation: A Roadmap for African Businesses",
    excerpt: "How businesses across Africa are leveraging technology to compete globally and drive innovation.",
    image: "/blog/digital-transformation.jpg",
    author: "Xtrafriq Team",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    category: "Digital Strategy",
    slug: "digital-transformation-africa",
  },
  {
    title: "Agile Methodology: Beyond the Basics",
    excerpt: "Advanced agile practices that help teams deliver faster while maintaining quality and team morale.",
    image: "/blog/agile-methodology.jpg",
    author: "Xtrafriq Team",
    date: "Jan 10, 2026",
    readTime: "5 min read",
    category: "Methodology",
    slug: "agile-beyond-basics",
  },
  {
    title: "The Rise of African Tech Ecosystem",
    excerpt: "Exploring the rapid growth of tech hubs across Africa and opportunities for global partnerships.",
    image: "/blog/african-tech-ecosystem.jpg",
    author: "Xtrafriq Team",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    category: "Industry Insights",
    slug: "african-tech-ecosystem",
  },
  {
    title: "Scaling Your Startup: From MVP to Market Leader",
    excerpt: "Proven strategies for growing your tech startup from initial concept to industry dominance.",
    image: "/blog/startup-scaling.jpg",
    author: "Xtrafriq Team",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    category: "Startups",
    slug: "scaling-startup-mvp-market-leader",
  },
  {
    title: "Cloud Architecture Best Practices for 2026",
    excerpt: "Design patterns and strategies for building scalable, secure, and cost-effective cloud infrastructure.",
    image: "/blog/cloud-architecture.jpg",
    author: "Xtrafriq Team",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    category: "Technology",
    slug: "cloud-architecture-best-practices",
  },
]

export const allPosts: BlogPost[] = [featuredPost, ...blogPosts]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug)
}
