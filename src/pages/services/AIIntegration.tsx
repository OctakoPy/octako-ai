import { ServicePageLayout } from "@/layouts/ServicePageLayout";
import { Brain } from "lucide-react";

const AIIntegration = () => (
  <ServicePageLayout
    title="AI Integration (Not LLMs)"
    subtitle="For when you need intelligence, not creativity. AI systems that make decisions, not conversation."
    accentColor="pink"
    icon={Brain}
    whatThisIs="AI integration means adding targeted intelligence to your existing workflows. Not chatbots that write emails—but systems that analyze documents, route tickets, predict issues, and make decisions automatically. The kind of AI that saves serious time."
    whatWeBuild={{
      title: "Built with:",
      items: [
        "Document analysis systems (extract, categorize, flag)",
        "Intelligent routing (tickets, inquiries, leads)",
        "Predictive alerts (inventory, cashflow, risks)",
        "Automated decision-making (approvals, scoring, prioritization)",
        "Custom chatbots for specific workflows",
        "Data classification and enrichment",
        "Anomaly detection and alerting",
        "Smart search across your data",
      ],
    }}
    howItWorks={[
      { title: "Discovery call", detail: "Understand your process and identify where AI adds real value" },
      { title: "Workflow audit", detail: "Map the current process and design the AI integration points" },
      { title: "Build and train", detail: "Develop the system using your data and real-world scenarios" },
      { title: "Test and deploy", detail: "Validate accuracy, deploy to production with monitoring" },
      { title: "Optimize", detail: "Continuously improve based on performance data" },
    ]}
    exampleResult="Support operations increased 3x: AI handles 70% of ticket routing and initial responses"
    whoFor="Companies with complex processes that need smart automation"
    pricing="Custom pricing based on complexity and integration requirements"
    relatedServices={[
      { title: "Workflow Automation", href: "/services/workflow-automation" },
      { title: "Process Redesign", href: "/services/process-redesign" },
      { title: "FixMySheet", href: "/services/fixmysheet" },
    ]}
    ctaText="Integrate AI Into My Workflow"
  />
);

export default AIIntegration;
