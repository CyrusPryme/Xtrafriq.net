"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useAuth } from "@/components/auth-provider"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Portfolio", href: "/clients" },
  { label: "Contact", href: "/#contact" },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { user, logout } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-border",
        isMenuOpen ? "bg-background" : "glass",
      )}
    >
      <a
        href="#content"
        className="skip-link absolute left-4 top-4 z-50 rounded-xl glass px-3 py-2 text-sm font-medium text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        Skip to content
      </a>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" aria-label="Xtrafriq Tech Consult - Home">
            <Image
              src="/logo.jpg"
              alt="Xtrafriq Tech Consult Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain dark:ring-1 dark:ring-border dark:rounded-md"
            />
            <span className="font-semibold text-lg text-foreground hidden sm:block">Xtrafriq Tech Consult</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5 text-primary" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )
              ) : (
                <span className="w-5 h-5 inline-block" />
              )}
            </button>

            {user ? (
              <>
                <Button variant="ghost" size="sm" className="hover:bg-muted/50" asChild>
                  <Link href="/dashboard">{user.name}</Link>
                </Button>
                {user.role === "admin" && (
                  <Button variant="ghost" size="sm" className="hover:bg-muted/50" asChild>
                    <Link href="/admin">Admin</Link>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Sign Out
                </Button>
              </>
            ) : (
              <Button size="sm" asChild>
                <Link href="/#contact">Get Started</Link>
              </Button>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background overflow-y-auto border-t border-border"
          >
            <nav className="flex flex-col gap-1 px-4 sm:px-6 py-4" aria-label="Mobile">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-3 text-base text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between gap-4 pt-4 mt-2 border-t border-border">
                <button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-lg hover:bg-muted/50"
                >
                  {mounted ? (
                    theme === "dark" ? (
                      <Sun className="w-5 h-5 text-primary" />
                    ) : (
                      <Moon className="w-5 h-5 text-foreground" />
                    )
                  ) : (
                    <span className="w-5 h-5 inline-block" />
                  )}
                </button>
                <div className="flex items-center gap-2">
                  {user ? (
                    <>
                      <Button variant="ghost" size="sm" className="hover:bg-muted/50" asChild>
                        <Link href="/dashboard">{user.name}</Link>
                      </Button>
                      {user.role === "admin" && (
                        <Button variant="ghost" size="sm" className="hover:bg-muted/50" asChild>
                          <Link href="/admin">Admin</Link>
                        </Button>
                      )}
                      <Button size="sm" asChild>
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <Button variant="ghost" size="sm" onClick={logout}>
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" asChild>
                      <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
