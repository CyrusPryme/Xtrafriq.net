import { noIndexMetadata } from "@/lib/site"

export const metadata = noIndexMetadata({
  title: "Sign in",
  description: "Sign in or create an account to access your dashboard and manage your projects.",
  path: "/auth",
})

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children
}
