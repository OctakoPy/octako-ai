import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const individualBullets = [
  "Copying data between systems",
  "Generating the same reports",
  "Formatting documents",
  "Chasing or reconciling information",
  "Fighting with Excel",
];

const individualBuilds = [
  "Automation that actually works",
  "Custom scripts for your repetitive tasks",
  "Data pipelines that eliminate manual entry",
  "Templates and systems that save hours",
];

const companyProblems = [
  "Broken workflows that waste hours daily",
  "Systems that don't talk to each other",
  "Manual handoffs causing delays",
  "No clear path from 'AI strategy' to actual results",
];

export const WhoThisIsFor = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section">
            Two Types of Workflow Automation
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individuals Card */}
          <AnimateIn delay={0.1}>
            <div className="group rounded-xl border-2 border-border bg-gradient-to-b from-surface to-background p-8 transition-all duration-300 hover:border-accent-cyan hover:shadow-lg hover:-translate-y-0.5 h-full">
              <h2 className="text-base font-semibold text-accent-cyan mb-4">For Individuals</h2>
              <h3 className="text-subsection mb-4">You Know There's a Better Way</h3>
              <p className="text-muted-foreground mb-4">
                You spend 5-10 hours every week doing the same repetitive tasks:
              </p>

              <StaggerChildren className="space-y-2 mb-6" staggerDelay={0.05}>
                {individualBullets.map((item) => (
                  <StaggerItem key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <p className="text-muted-foreground mb-6">
                You <em>know</em> there should be a faster way. You're right.
              </p>

              <h4 className="font-semibold text-foreground mb-3">Solutions Delivered:</h4>
              <ul className="space-y-2 mb-8">
                {individualBuilds.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check size={18} className="text-accent-cyan mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cyan" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/services">Fix My Repetitive Task</Link>
              </Button>
            </div>
          </AnimateIn>

          {/* Companies Card */}
          <AnimateIn delay={0.2}>
            <div className="group rounded-xl border-2 border-border bg-gradient-to-b from-surface to-background p-8 transition-all duration-300 hover:border-accent-purple hover:shadow-lg hover:-translate-y-0.5 h-full">
              <h2 className="text-base font-semibold text-accent-purple mb-4">For Companies</h2>
              <h3 className="text-subsection mb-4">You Want AI, But Not the Hype</h3>
              <p className="text-muted-foreground mb-4">
                You've been told "AI will transform your business." You bought the
                tools. Nothing changed.
              </p>
              <p className="text-muted-foreground mb-4">
                Here's why: Your team doesn't need ChatGPT. They need streamlined
                processes.
              </p>

              <h4 className="font-semibold text-foreground mb-3">The Real Problem:</h4>
              <StaggerChildren className="space-y-2 mb-6" staggerDelay={0.05}>
                {companyProblems.map((item) => (
                  <StaggerItem key={item} className="flex items-start gap-3">
                    <X size={18} className="text-accent-orange mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <h4 className="font-semibold text-foreground mb-3">What You Actually Need:</h4>
              <p className="text-muted-foreground mb-8">
                Process automation with AI where it matters—not "creative" LLMs,
                but intelligent systems that eliminate the grunt work.
              </p>

              <Button variant="purple" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/services">See What's Possible</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
