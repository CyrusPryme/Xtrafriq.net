import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@xtrafriq.com'
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Xtrafriq Contact <onboarding@resend.dev>'

async function readContactFields(request: NextRequest): Promise<{
  name?: unknown
  email?: unknown
  message?: unknown
}> {
  const contentType = request.headers.get("content-type") ?? ""

  if (contentType.includes("application/json")) {
    return await request.json()
  }

  if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
    const form = await request.formData()
    return {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    }
  }

  try {
    return await request.json()
  } catch {
    const form = await request.formData()
    return {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    }
  }
}

function wantsJsonResponse(request: NextRequest): boolean {
  const accept = request.headers.get("accept") ?? ""
  const contentType = request.headers.get("content-type") ?? ""
  return accept.includes("application/json") || contentType.includes("application/json")
}

function contactResponse(
  request: NextRequest,
  body: Record<string, unknown>,
  status: number,
) {
  if (wantsJsonResponse(request)) {
    return NextResponse.json(body, { status })
  }

  const destination = new URL("/#contact", request.url)
  destination.searchParams.set("contact", status < 400 ? "success" : "error")
  return NextResponse.redirect(destination, 303)
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await readContactFields(request)

    if (!name || typeof name !== 'string') {
      return contactResponse(request, { error: 'Name is required' }, 400)
    }
    if (!email || typeof email !== 'string') {
      return contactResponse(request, { error: 'Email is required' }, 400)
    }
    if (!message || typeof message !== 'string') {
      return contactResponse(request, { error: 'Message is required' }, 400)
    }

    const trimmedName = name.trim()
    const trimmedEmail = email.trim().toLowerCase()
    const trimmedMessage = message.trim()

    if (trimmedName.length < 2) {
      return contactResponse(request, { error: 'Name must be at least 2 characters' }, 400)
    }
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return contactResponse(request, { error: 'Please enter a valid email address' }, 400)
    }
    if (trimmedMessage.length < 10) {
      return contactResponse(request, { error: 'Message must be at least 10 characters' }, 400)
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('[Contact] RESEND_API_KEY is not set in .env.local')
      return contactResponse(
        request,
        { error: 'Email is not configured. Please try again later or email us directly.' },
        503
      )
    }

    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: trimmedEmail,
      subject: `Contact form: ${trimmedName} (${trimmedEmail})`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(trimmedEmail)}">${escapeHtml(trimmedEmail)}</a></p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(trimmedMessage)}</pre>
        <p><em>Sent from Xtrafriq Tech Consult contact form</em></p>
      `,
    })

    if (error) {
      console.error('[Contact] Resend error:', error)
      return contactResponse(
        request,
        { error: 'Failed to send message. Please try again or email us directly.' },
        500
      )
    }

    return contactResponse(request, {
      success: true,
      message: 'Thank you for reaching out! We\'ll get back to you soon.'
    }, 200)
  } catch (error) {
    console.error('Contact form error:', error)
    return contactResponse(
      request,
      { error: 'Something went wrong. Please try again.' },
      500
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
