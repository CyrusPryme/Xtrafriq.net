import Link from "next/link"
import { FileText } from "lucide-react"
import { COMPANY_PROFILE_DOCS } from "@/lib/company-profile"

type CompanyProfileDownloadsProps = {
  heading?: string
  compact?: boolean
}

export function CompanyProfileDownloads({
  heading = "Company profile",
  compact = false,
}: CompanyProfileDownloadsProps) {
  return (
    <section aria-labelledby="company-profile-downloads" className={compact ? "" : "mt-10"}>
      <h2 id="company-profile-downloads" className="text-lg font-semibold text-foreground mb-2">
        {heading}
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        Download institutional profiles for tenders, proposals, and partnership conversations.
      </p>
      <ul className="space-y-3">
        {COMPANY_PROFILE_DOCS.map((doc) => (
          <li
            key={doc.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 rounded-xl border border-border bg-card/60"
          >
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-foreground">{doc.title}</p>
                <p className="text-sm text-muted-foreground">
                  {doc.pages} · {doc.audience}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm sm:pl-8">
              <a href={doc.pdf} className="font-medium text-primary hover:underline" download>
                Download PDF
              </a>
              <a href={doc.html} className="text-muted-foreground hover:text-foreground">
                View
              </a>
              <a href={doc.markdown} className="text-muted-foreground hover:text-foreground">
                Markdown
              </a>
            </div>
          </li>
        ))}
      </ul>
      {!compact && (
        <p className="text-sm text-muted-foreground mt-4">
          All documents:{" "}
          <Link href="/company-profile" className="text-primary font-medium hover:underline">
            Company profile
          </Link>
        </p>
      )}
    </section>
  )
}
