"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <a href="#content" className="skip-link absolute left-4 top-4 z-50 rounded-xl glass px-3 py-2 text-sm font-medium text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50">Skip to content</a>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Xtrafriq Tech Consult Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold text-lg text-foreground hidden sm:block">Xtrafriq Tech Consult</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {['Home', 'Services', 'About', 'Blog', 'Clients', 'Contact'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item === 'Services' || item === 'Contact' ? '#' + item.toLowerCase() : item.toLowerCase()}`
              return (
                <Link 
                  key={item} 
                  href={href} 
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  {item}
                </Link>
              )
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-lg hover:bg-white/10 transition-colors"
            >
              {mounted ? (theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-foreground" />) : <span className="w-5 h-5 inline-block" />}
            </button>

            <Button variant="ghost" size="sm" className="hover:bg-white/10">
              Sign In
            </Button>
            <Button size="sm" asChild className="shadow-lg shadow-primary/25">
              <Link href="/#contact">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-2">
              {['Home', 'Services', 'About', 'Blog', 'Clients', 'Contact'].map((item) => {
                const href = item === 'Home' ? '/' : `/${item === 'Services' || item === 'Contact' ? '#' + item.toLowerCase() : item.toLowerCase()}`
                return (
                  <Link 
                    key={item} 
                    href={href} 
                    className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                )
              })}
              <div className="flex items-center justify-between gap-4 pt-4 mt-2 border-t border-white/10">
                <button
                  type="button"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg hover:bg-white/10"
                >
                  {mounted ? (theme === 'dark' ? <Sun className="w-5 h-5 text-primary" /> : <Moon className="w-5 h-5 text-foreground" />) : <span className="w-5 h-5 inline-block" />}
                </button>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="hover:bg-white/10">
                    Sign In
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/#contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
