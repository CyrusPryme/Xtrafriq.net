"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react"
import { site } from "@/lib/site"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const submitted = new FormData(e.currentTarget)
    const payload = {
      name: String(submitted.get('name') ?? '').trim(),
      email: String(submitted.get('email') ?? '').trim(),
      message: String(submitted.get('message') ?? '').trim(),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-12 lg:py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/15 text-primary text-sm font-medium mb-4">
            Get in touch
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let{"'"}s Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Ready to transform your ideas into reality? Get in touch and let{"'"}s discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <a href={`mailto:${site.contactEmail}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {site.contactEmail}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a href={`tel:${site.contactPhone}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {site.formattedPhone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Location</div>
                  <span className="text-muted-foreground">
                    Accra, Ghana | Remote Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative glass quote card */}
            <div className="mt-12 p-6 rounded-2xl glass-card">
              <p className="text-muted-foreground italic leading-relaxed">
                {"\""}Great products are built through understanding, collaboration, and relentless 
                attention to detail. We bring all three to every project.{"\""}
              </p>
              <div className="mt-4 text-sm font-medium text-foreground">
                — The Xtrafriq Team
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card rounded-2xl p-5 sm:p-8">
            <form
              action="/api/contact"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                    if (status !== 'idle') setStatus('idle')
                  }}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value })
                    if (status !== 'idle') setStatus('idle')
                  }}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value })
                    if (status !== 'idle') setStatus('idle')
                  }}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  required
                />
              </div>
              
              {status === 'error' && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMessage}
                </p>
              )}
              {status === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2" role="status">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  Thank you! We&apos;ll get back to you soon.
                </p>
              )}
              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 shadow-lg shadow-primary/25 disabled:opacity-70"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
