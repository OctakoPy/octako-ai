import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { Check, Zap, Target, Lightbulb, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Fix Processes First, Then Add AI",
    description: "Most companies fail because they throw AI at broken workflows. We redesign the process first, then add targeted automation where it actually matters.",
  },
  {
    icon: Lightbulb,
    title: "Specific Over Generic",
    description: "Generic tools help a little with everything. Custom solutions transform specific workflows completely. We build the latter.",
  },
  {
    icon: Wrench,
    title: "Results Over Hype",
    description: "We measure success in hours saved, costs reduced, and errors eliminated—not 'adoption rates' or 'AI maturity scores.'",
  },
  {
    icon: Zap,
    title: "We Practice What We Preach",
    description: "Our own operations run on the same automation principles we implement for clients. Automated pipelines, zero manual reporting, intelligent routing.",
  },
];

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10">
          <AnimateIn>
            <h1 className="text-hero-mobile md:text-hero text-white mb-6 max-w-3xl">
              We Automate the Work That Shouldn't Exist
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl">
              Streamline Systems is an AI automation and workflow optimization consultancy.
              We help individuals and companies eliminate repetitive tasks and build
              intelligent systems that actually deliver ROI.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Why We Started */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-6">Why We Started This</h2>
            <div className="space-y-4 text-body-lg text-muted-foreground">
              <p>
                We've watched companies spend millions on AI tools that sit unused.
                We've seen individuals waste thousands of hours on tasks a script could
                handle in seconds.
              </p>
              <p>
                The problem isn't technology—it's approach. Companies buy horizontal tools
                and hope for vertical transformation. They skip the hard work of understanding
                their processes and jump straight to "AI strategy."
              </p>
              <p>
                We started Streamline Systems because we believe in a different approach:
                understand the workflow, fix the process, then automate what matters.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding surface-bg">
        <div className="section-container">
          <AnimateIn className="text-center mb-16">
            <h2 className="text-section-mobile md:text-section">Our Philosophy</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimateIn key={i} delay={i * 0.1}>
                  <div className="rounded-xl border-2 border-border bg-card p-6 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                    <Icon size={28} className="text-accent-purple mb-4" />
                    <h3 className="text-card-title mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="section-container text-center">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-4">Ready to Get Started?</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Whether you need a spreadsheet fixed or an entire workflow redesigned,
              we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="purple" size="hero" asChild>
                <Link to="/contact">Schedule a Call</Link>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <Link to="/#services">View Services</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
