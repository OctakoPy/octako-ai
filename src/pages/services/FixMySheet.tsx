import { ServicePageLayout } from "@/layouts/ServicePageLayout";
import { Table } from "lucide-react";

const FixMySheet = () => (
  <ServicePageLayout
    title="FixMySheet"
    subtitle="For when Excel is your enemy. Broken spreadsheets fixed and rebuilt to actually work."
    accentColor="green"
    icon={Table}
    whatThisIs="FixMySheet is a fast-turnaround service for spreadsheet problems. Whether it's a broken formula, a spreadsheet that takes 5 minutes to open, or a manual process that should be automated—solutions provided quickly. Most fixes completed within 24-48 hours."
    whatWeBuild={{
      title: "Solutions for:",
      items: [
        "Broken formulas and circular references",
        "Slow spreadsheets (50,000+ rows optimized)",
        "Data cleaning and transformation",
        "Automated templates and reports",
        "Integration with other systems",
        "Migration from spreadsheets to real systems",
        "Custom dashboards and visualizations",
        "Validation rules and error checking",
      ],
    }}
    howItWorks={[
      { title: "Share your spreadsheet", detail: "Upload or describe what you need fixed" },
      { title: "Same-day assessment", detail: "Review and fixed price quote provided" },
      { title: "Fast fix", detail: "Most fixes completed within 24-48 hours" },
      { title: "You review", detail: "Test with your data, request adjustments if needed" },
    ]}
    exampleResult="My monthly reconciliation went from 8 hours of formula-fighting to a 5-minute button click"
    whoFor="Anyone fighting with spreadsheets instead of making decisions"
    pricing="Fixed pricing quoted upfront. Most fixes are very affordable."
    relatedServices={[
      { title: "Workflow Automation", href: "/services/workflow-automation" },
      { title: "AI Integration", href: "/services/ai-integration" },
      { title: "Process Redesign", href: "/services/process-redesign" },
    ]}
    ctaText="Get Your Sheet Fixed"
  />
);

export default FixMySheet;
