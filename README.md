# Xtrafriq Tech Consult

Product management and tech services website for Xtrafriq Tech Consult. Built with Next.js 16, React 19, and Tailwind CSS.

## Features

- Marketing site with Hero, Services, Case Studies, Contact
- Blog with featured and latest articles
- User authentication (login/signup)
- User dashboard for project tracking
- Admin dashboard for managing users and projects
- Contact form with Resend email integration
- Dark/light theme with OS preference support

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui
- **Auth:** Custom (bcryptjs, localStorage)
- **Email:** Resend

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tech-company-website.git
cd tech-company-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values (contact email, Resend API key)
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_CONTACT_EMAIL` | Yes | Email displayed on contact section |
| `RESEND_API_KEY` | Yes | Resend API key for contact form emails |
| `RESEND_FROM_EMAIL` | No | Custom "from" address (verify domain first) |
| `NEXT_PUBLIC_SITE_URL` | No | Site URL for metadata |
| `NEXT_PUBLIC_CONTACT_PHONE` | No | Contact phone number |

## Project Structure

```
├── app/           # Next.js App Router pages & API routes
├── components/    # React components
├── lib/           # Utilities, auth, blog data
├── public/        # Static assets
└── hooks/         # Custom React hooks
```

## Default Credentials

For local development, a default admin user is seeded:
- **Email:** admin@xtrafriq.com
- **Password:** admin123

## License

Private – Xtrafriq Tech Consult
