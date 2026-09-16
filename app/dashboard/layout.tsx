import { noIndexMetadata } from "@/lib/site"

export const metadata = noIndexMetadata({
  title: "Dashboard",
  description: "Your project dashboard—track progress, timelines, and updates in one place.",
  path: "/dashboard",
})

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}
