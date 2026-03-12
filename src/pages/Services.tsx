import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services-data";

const accentMap: Record<string, { border: string; icon: string; bg: string }> = {
  purple: { border: "hover:border-accent-purple", icon: "text-accent-purple", bg: "bg-accent-purple/10" },
  pink: { border: "hover:border-accent-pink", icon: "text-accent-pink", bg: "bg-accent-pink/10" },
  cyan: { border: "hover:border-accent-cyan", icon: "text-accent-cyan", bg: "bg-accent-cyan/10" },
  green: { border: "hover:border-accent-green", icon: "text-accent-green", bg: "bg-accent-green/10" },
};

const colorSequence = ["purple", "pink", "cyan", "green"];

const Services = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-8 sm:pt-16 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10 text-center">
          <AnimateIn>
            <h1 className="text-hero-mobile md:text-hero text-primary-foreground mb-4">
              Services for Custom Workflows
            </h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Find the service that solves your specific workflow challenge.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.map((service, index) => {
              const accentColor = colorSequence[index % colorSequence.length];
              const colors = accentMap[accentColor];
              const Icon = service.icon;
              return (
                <StaggerItem key={service.title}>
                  <Link
                    to={service.link}
                    className={`rounded-xl border-2 border-border bg-card p-8 lg:p-10 transition-all duration-300 ${colors.border} hover:shadow-lg hover:-translate-y-0.5 flex flex-col h-full group`}
                  >
                    <div className={`p-3 rounded-lg ${colors.bg} w-fit mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} className={colors.icon} />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-body-lg text-muted-foreground flex-1 mb-6">{service.subtitle}</p>

                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground group-hover:gap-3 transition-all">
                      Learn More <ArrowRight size={16} className={colors.icon} />
                    </div>
                  </Link>
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
            <h2 className="text-section-mobile md:text-section mb-4">Ready to Transform Your Workflows?</h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss which service matches your needs and create a plan to eliminate repetitive work.
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
