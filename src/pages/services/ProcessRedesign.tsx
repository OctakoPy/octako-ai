import { ServicePageLayout } from "@/layouts/ServicePageLayout";
import { Layers } from "lucide-react";

const ProcessRedesign = () => (
  <ServicePageLayout
    title="Process Redesign"
    subtitle="For when you need to fix the workflow first. Because automating a broken process just makes it break faster."
    accentColor="cyan"
    icon={Layers}
    whatThisIs="Process redesign means stepping back and asking 'should this step even exist?' before trying to make it faster. Most companies try to automate their current workflow. The smart ones redesign the workflow first, then automate what's left."
    whatWeBuild={{
      title: "What We Do",
      items: [
        "Audit your current processes end-to-end",
        "Identify bottlenecks, redundancies, and waste",
        "Map optimized workflows with clear documentation",
        "Design automation strategy with ROI projections",
        "Implement changes with your team",
        "Measure results and iterate",
        "Train your team on new processes",
        "Create SOPs and documentation",
      ],
    }}
    howItWorks={[
      { title: "Discovery call", detail: "Understand your operations, pain points, and goals" },
      { title: "Observation and audit", detail: "Shadow your team, map current workflows, identify opportunities" },
      { title: "Redesign proposal", detail: "Present optimized workflows with clear ROI projections" },
      { title: "Implementation", detail: "Execute changes incrementally with your team" },
      { title: "Measure and optimize", detail: "Track results, refine, and expand what works" },
    ]}
    exampleResult="We discovered our 'efficiency problem' was actually 3 redundant approval steps. Eliminating those saved 40 hours/week before we automated anything."
    whoFor="Companies serious about transformation, not just tools"
    pricing="Custom pricing. Discovery audit can be standalone or part of larger engagement."
    relatedServices={[
      { title: "Workflow Automation", href: "/services/workflow-automation" },
      { title: "AI Integration", href: "/services/ai-integration" },
      { title: "FixMySheet", href: "/services/fixmysheet" },
    ]}
    ctaText="Audit Our Workflows"
  />
);

export default ProcessRedesign;
