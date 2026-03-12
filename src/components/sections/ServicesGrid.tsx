import { Link } from "react-router-dom";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { Network, Brain, Layers, Table, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Workflow Automation",
    subtitle: "For when you're doing the same task over and over",
    description: "Automations for:",
    bullets: [
      "Data entry and system synchronization",
      "Report generation and distribution",
      "Document processing (invoices, contracts, forms)",
      "Email workflows and responses",
      "File organization and management",
    ],
    whoFor: "Anyone spending 5+ hours/week on repetitive tasks",
    example: "\"Results: 12 hours/week compiling sales reports reduced to 20 minutes reviewing auto-generated dashboards\"",
    link: "/services/workflow-automation",
    linkText: "Learn More",
    accentColor: "purple" as const,
  },
  {
    icon: Brain,
    title: "AI Integration (Not LLMs)",
    subtitle: "For when you need intelligence, not creativity",
    description: "Built with:",
    bullets: [
      "Document analysis systems (extract, categorize, flag)",
      "Intelligent routing (tickets, inquiries, leads)",
      "Predictive alerts (inventory, cashflow, risks)",
      "Automated decision-making (approvals, scoring, prioritization)",
      "Custom chatbots for specific workflows",
    ],
    whoFor: "Companies with complex processes that need smart automation",
    example: "\"Support operations increased 3x: AI handles 70% of ticket routing and initial responses\"",
    link: "/services/ai-integration",
    linkText: "Learn More",
    accentColor: "pink" as const,
  },
  {
    icon: Layers,
    title: "Process Redesign",
    subtitle: "For when you need to fix the workflow first",
    description: "Services include:",
    bullets: [
      "Audit your current processes",
      "Identify bottlenecks and waste",
      "Map optimized workflows",
      "Design automation strategy",
      "Implement and measure",
    ],
    whoFor: "Companies serious about transformation, not just tools",
    example: "\"The 'efficiency problem' turned out to be 3 redundant approval steps. Eliminating those saved 40 hours/week before automation was needed.\"",
    link: "/services/process-redesign",
    linkText: "Learn More",
    accentColor: "cyan" as const,
  },
  {
    icon: Table,
    title: "FixMySheet",
    subtitle: "For when Excel is your enemy",
    description: "Solutions for:",
    bullets: [
      "Broken formulas and slow spreadsheets",
      "Data cleaning and transformation",
      "Automated templates and reports",
      "Integration with other systems",
      "Migration from spreadsheets to real systems",
    ],
    whoFor: "Anyone fighting with spreadsheets instead of making decisions",
    example: "\"Monthly reconciliation: 8 hours of formula-fighting reduced to a 5-minute button click\"",
    link: "/services/fixmysheet",
    linkText: "Get Your Sheet Fixed",
    accentColor: "green" as const,
  },
];

const accentClasses: Record<string, { icon: string; border: string; badge: string }> = {
  purple: { icon: "text-accent-purple", border: "hover:border-accent-purple", badge: "bg-accent-purple/10 text-accent-purple" },
  pink: { icon: "text-accent-pink", border: "hover:border-accent-pink", badge: "bg-accent-pink/10 text-accent-pink" },
  cyan: { icon: "text-accent-cyan", border: "hover:border-accent-cyan", badge: "bg-accent-cyan/10 text-accent-cyan" },
  green: { icon: "text-accent-green", border: "hover:border-accent-green", badge: "bg-accent-green/10 text-accent-green" },
};

export const ServicesGrid = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="section-container">
        <AnimateIn className="text-center mb-4">
          <h2 className="text-section-mobile md:text-section">Custom Solutions for Your Workflows</h2>
        </AnimateIn>
        <AnimateIn delay={0.1} className="text-center mb-16">
          <p className="text-body-lg text-muted-foreground">
            Not generic tools. Custom solutions for your specific workflows.
          </p>
        </AnimateIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {services.map((service) => {
            const colors = accentClasses[service.accentColor];
            const Icon = service.icon;
            return (
              <StaggerItem key={service.title}>
                <div className={`rounded-xl border-2 border-border bg-card p-6 lg:p-8 transition-all duration-300 ${colors.border} hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-surface ${colors.icon}`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-card-title">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm font-medium text-foreground mb-3">{service.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check size={14} className={`mt-0.5 shrink-0 ${colors.icon}`} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Who it's for: </span>
                    {service.whoFor}
                  </p>

                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-border pl-3 mb-6">
                    {service.example}
                  </blockquote>

                  <div className="mt-auto">
                    <Link
                      to={service.link}
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.icon} hover:underline`}
                    >
                      {service.linkText} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};
