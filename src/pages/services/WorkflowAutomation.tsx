import { ServicePageLayout } from "@/layouts/ServicePageLayout";
import { Network } from "lucide-react";

const WorkflowAutomation = () => (
  <ServicePageLayout
    title="Workflow Automation"
    subtitle="For when you're doing the same task over and over. We build custom automation that eliminates repetitive work."
    accentColor="purple"
    icon={Network}
    whatThisIs="Workflow automation takes the tasks you do repeatedly—data entry, report generation, document processing—and turns them into automated systems. Instead of spending hours every week on manual work, you set it up once and let the system handle it."
    whatWeBuild={{
      title: "What We Automate",
      items: [
        "Data entry and system synchronization",
        "Report generation and distribution",
        "Document processing (invoices, contracts, forms)",
        "Email workflows and responses",
        "File organization and management",
        "Multi-step approval processes",
        "Data validation and quality checks",
        "Scheduled tasks and notifications",
      ],
    }}
    howItWorks={[
      { title: "Describe your task", detail: "Tell us what you're doing manually and how often" },
      { title: "We assess and quote", detail: "Same-day evaluation of automation potential with clear pricing" },
      { title: "We build it", detail: "Custom automation solution tailored to your exact workflow" },
      { title: "You review and launch", detail: "Test with real data, make adjustments, and go live" },
    ]}
    exampleResult="We went from 12 hours/week compiling sales reports to 20 minutes reviewing auto-generated dashboards"
    whoFor="Anyone spending 5+ hours/week on repetitive tasks"
    pricing="Fixed price for defined automations. Negotiable based on complexity."
    relatedServices={[
      { title: "AI Integration", href: "/services/ai-integration" },
      { title: "Process Redesign", href: "/services/process-redesign" },
      { title: "FixMySheet", href: "/services/fixmysheet" },
    ]}
    ctaText="Automate My Workflow"
  />
);

export default WorkflowAutomation;
