import { noIndexMetadata } from "@/lib/site"

export const metadata = noIndexMetadata({
  title: "Admin",
  description: "Admin dashboard for managing users and projects.",
  path: "/admin",
})

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children
}
