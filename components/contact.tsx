"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Let{"'"}s Build Something <span className="text-gradient">Great Together</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to transform your ideas into reality? Get in touch and let{"'"}s discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
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
                  <a href="mailto:hello@xtrafriq.com" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@xtrafriq.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 ring-2 ring-primary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Phone</div>
                  <a href="tel:+233243879212" className="text-muted-foreground hover:text-primary transition-colors">
                    +233 243 879 212
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
          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                  required
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full gap-2 shadow-lg shadow-primary/25">
                Send Message
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
