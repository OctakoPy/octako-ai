import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { MessageSquare, Search, Wrench, Rocket, Settings, Clock } from "lucide-react";

const individualSteps = [
  { icon: MessageSquare, title: "Describe your repetitive task", detail: "5 minutes" },
  { icon: Search, title: "Assessment: is it automatable?", detail: "Same day" },
  { icon: Wrench, title: "Your solution is built", detail: "1-2 weeks" },
  { icon: Rocket, title: "You get your time back", detail: "" },
];

const companySteps = [
  { icon: MessageSquare, title: "Discovery Call", detail: "Understand your processes, identify bottlenecks, spot automation opportunities", time: "30 minutes" },
  { icon: Search, title: "Workflow Audit", detail: "Detailed analysis with clear ROI projections and implementation roadmap", time: "1 week" },
  { icon: Wrench, title: "Custom Build", detail: "Design, develop, and test your automation system", time: "2-8 weeks" },
  { icon: Rocket, title: "Deploy & Train", detail: "Seamless implementation with documentation and team training", time: "1 week" },
  { icon: Settings, title: "Optimize", detail: "Monitor, refine, and scale what works", time: "Ongoing" },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-background" id="how-it-works">
      <div className="section-container">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section">From Problem to Solution</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Individuals */}
          <AnimateIn delay={0.1}>
            <div className="rounded-xl border-2 border-border bg-card p-8 h-full flex flex-col">
              <h2 className="text-base font-semibold text-accent-cyan mb-4">For Individuals</h2>
              <h3 className="text-subsection mb-6">Start Small, See Results Fast</h3>

              <StaggerChildren className="space-y-6 mb-8 flex-1" staggerDelay={0.1}>
                {individualSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <StaggerItem key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-accent-cyan/10 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-accent-cyan">{i + 1}</span>
                        </div>
                        {i < individualSteps.length - 1 && (
                          <div className="w-px flex-1 bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-medium text-foreground">{step.title}</p>
                        {step.detail && <p className="text-sm text-muted-foreground">{step.detail}</p>}
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerChildren>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-accent-cyan" />
                  Days to 2 weeks
                </div>
              </div>

              <Button variant="cyan" size="lg" className="w-full" asChild>
                <Link to="/services">Start Here: Quick Automation</Link>
              </Button>
            </div>
          </AnimateIn>

          {/* Companies */}
          <AnimateIn delay={0.2}>
            <div className="rounded-xl border-2 border-border bg-card p-8 h-full flex flex-col">
              <h2 className="text-base font-semibold text-accent-purple mb-4">For Companies</h2>
              <h3 className="text-subsection mb-6">Transform Your Operations</h3>

              <StaggerChildren className="space-y-5 mb-8 flex-1" staggerDelay={0.1}>
                {companySteps.map((step, i) => (
                  <StaggerItem key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-accent-purple">{i + 1}</span>
                      </div>
                      {i < companySteps.length - 1 && (
                        <div className="w-px flex-1 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-2">
                      <p className="font-medium text-foreground">
                        {step.title}{" "}
                        <span className="text-xs text-muted-foreground font-normal">({step.time})</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{step.detail}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>

              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-accent-purple" />
                  4-12 weeks for full implementation
                </div>
              </div>

              <Button variant="purple" size="lg" className="w-full" asChild>
                <Link to="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
