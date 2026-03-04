import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { Network, Brain, Layers, Table, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Network,
    title: "Workflow Automation",
    subtitle: "For when you're doing the same task over and over",
    description: "What we automate:",
    bullets: [
      "Data entry and system synchronization",
      "Report generation and distribution",
      "Document processing (invoices, contracts, forms)",
      "Email workflows and responses",
      "File organization and management",
    ],
    whoFor: "Anyone spending 5+ hours/week on repetitive tasks",
    example: '"We went from 12 hours/week compiling sales reports to 20 minutes reviewing auto-generated dashboards"',
    link: "/services/workflow-automation",
    linkText: "Learn More",
    accentColor: "purple" as const,
  },
  {
    icon: Brain,
    title: "AI Integration (Not LLMs)",
    subtitle: "For when you need intelligence, not creativity",
    description: "What we build:",
    bullets: [
      "Document analysis systems (extract, categorize, flag)",
      "Intelligent routing (tickets, inquiries, leads)",
      "Predictive alerts (inventory, cashflow, risks)",
      "Automated decision-making (approvals, scoring, prioritization)",
      "Custom chatbots for specific workflows",
    ],
    whoFor: "Companies with complex processes that need smart automation",
    example: '"Our support team handles 3x more tickets because AI handles 70% of routing and initial responses"',
    link: "/services/ai-integration",
    linkText: "Learn More",
    accentColor: "pink" as const,
  },
  {
    icon: Layers,
    title: "Process Redesign",
    subtitle: "For when you need to fix the workflow first",
    description: "What we do:",
    bullets: [
      "Audit your current processes",
      "Identify bottlenecks and waste",
      "Map optimized workflows",
      "Design automation strategy",
      "Implement and measure",
    ],
    whoFor: "Companies serious about transformation, not just tools",
    example: '"We discovered our \'efficiency problem\' was actually 3 redundant approval steps. Eliminating those saved 40 hours/week before we automated anything."',
    link: "/services/process-redesign",
    linkText: "Learn More",
    accentColor: "cyan" as const,
  },
  {
    icon: Table,
    title: "FixMySheet",
    subtitle: "For when Excel is your enemy",
    description: "What we fix:",
    bullets: [
      "Broken formulas and slow spreadsheets",
      "Data cleaning and transformation",
      "Automated templates and reports",
      "Integration with other systems",
      "Migration from spreadsheets to real systems",
    ],
    whoFor: "Anyone fighting with spreadsheets instead of making decisions",
    example: '"My monthly reconciliation went from 8 hours of formula-fighting to a 5-minute button click"',
    link: "/services/fixmysheet",
    linkText: "Get Your Sheet Fixed",
    accentColor: "green" as const,
  },
];

const accentClasses: Record<string, { icon: string; border: string }> = {
  purple: { icon: "text-accent-purple", border: "hover:border-accent-purple" },
  pink: { icon: "text-accent-pink", border: "hover:border-accent-pink" },
  cyan: { icon: "text-accent-cyan", border: "hover:border-accent-cyan" },
  green: { icon: "text-accent-green", border: "hover:border-accent-green" },
};

const Services = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10">
          <AnimateIn>
            <h1 className="text-hero-mobile md:text-hero text-primary-foreground mb-4">
              What We Actually Build
            </h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-2xl">
              Not generic tools. Custom solutions for your specific workflows.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service) => {
              const colors = accentClasses[service.accentColor];
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <div className={`rounded-xl border-2 border-border bg-card p-6 lg:p-8 transition-all duration-300 ${colors.border} hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg surface-bg ${colors.icon}`}>
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

      {/* CTA */}
      <section className="section-padding surface-bg">
        <div className="section-container text-center">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-4">Not Sure Where to Start?</h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Book a free 15-minute call and we'll help you figure out what to automate first.
            </p>
            <Button variant="purple" size="hero" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
