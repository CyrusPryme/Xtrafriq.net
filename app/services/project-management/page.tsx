import { ServiceDetailPage } from "@/components/service-detail"
import { pageMetadata } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Project Management (Technology + AI)",
  description:
    "End-to-end project leadership for software and non-software work—using tooling, automation, and AI to keep delivery faster, cheaper, and more predictable.",
  path: "/services/project-management",
})

const examples = [
  "Operations and logistics programs",
  "Construction and infrastructure support workflows",
  "Education and training programs",
  "Marketing and growth initiatives",
  "Digital transformation and tool rollout projects",
]

export default function ProjectManagementPage() {
  return (
    <ServiceDetailPage
      slug="project-management"
      title="Project Management (Technology + AI)"
      description="We manage projects beyond software. If your initiative can be made faster, cheaper, or more predictable through better tooling, automation, and AI-assisted workflows—this service is for you."
      outcomes={[
        "Clear scope, milestones, and stakeholder alignment",
        "Risk, dependency, and change management that keeps delivery predictable",
        "Automation and AI workflows to reduce manual coordination overhead",
        "Dashboards and reporting that make progress visible and actionable",
      ]}
      ctaTitle="Want a predictable delivery plan?"
      ctaDescription="Share your initiative and we’ll propose an execution approach."
    >
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl border border-border bg-secondary/30">
          <h2 className="text-lg font-semibold text-foreground mb-3">Common project types</h2>
          <ul className="space-y-2 text-muted-foreground">
            {examples.map((e) => (
              <li key={e} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-2xl border border-border bg-secondary/30">
          <h2 className="text-lg font-semibold text-foreground mb-3">What you get</h2>
          <p className="text-muted-foreground leading-relaxed">
            A delivery plan with milestones, governance, and reporting—plus an automation roadmap for removing
            bottlenecks and improving coordination using modern tools and AI.
          </p>
        </div>
      </div>
    </ServiceDetailPage>
  )
}
