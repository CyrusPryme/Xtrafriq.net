export type CompanyProfileDoc = {
  id: "corporate" | "capability" | "one-pager"
  title: string
  pages: string
  audience: string
  pdf: string
  html: string
  markdown: string
}

export const COMPANY_PROFILE_DOCS: CompanyProfileDoc[] = [
  {
    id: "corporate",
    title: "Corporate Company Profile",
    pages: "10 pages",
    audience: "Clients, partnerships, investors, and general corporate use",
    pdf: "/company-profile/xtrafriq-corporate-company-profile.pdf",
    html: "/company-profile/xtrafriq-corporate-company-profile.html",
    markdown: "/company-profile/xtrafriq-corporate-company-profile.md",
  },
  {
    id: "capability",
    title: "Capability Statement",
    pages: "2 pages",
    audience: "Tenders, RFPs, NGOs, government, and procurement",
    pdf: "/company-profile/xtrafriq-capability-statement.pdf",
    html: "/company-profile/xtrafriq-capability-statement.html",
    markdown: "/company-profile/xtrafriq-capability-statement.md",
  },
  {
    id: "one-pager",
    title: "One-page Company Profile",
    pages: "1 page",
    audience: "Proposals, quotations, introductions, and email attachments",
    pdf: "/company-profile/xtrafriq-one-page-company-profile.pdf",
    html: "/company-profile/xtrafriq-one-page-company-profile.html",
    markdown: "/company-profile/xtrafriq-one-page-company-profile.md",
  },
]
