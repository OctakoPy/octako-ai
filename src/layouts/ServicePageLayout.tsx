import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceStep {
  title: string;
  detail: string;
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  accentColor: "purple" | "pink" | "cyan" | "green";
  icon: LucideIcon;
  whatThisIs: string;
  whatWeBuild: { title: string; items: string[] };
  howItWorks: ServiceStep[];
  exampleResult: string;
  whoFor: string;
  pricing: string;
  relatedServices: RelatedService[];
  ctaText: string;
  children?: ReactNode;
}

const accentMap: Record<string, { text: string; bg: string; button: "purple" | "cyan" | "green" }> = {
  purple: { text: "text-accent-purple", bg: "bg-accent-purple/10", button: "purple" },
  pink: { text: "text-accent-pink", bg: "bg-accent-pink/10", button: "purple" },
  cyan: { text: "text-accent-cyan", bg: "bg-accent-cyan/10", button: "cyan" },
  green: { text: "text-accent-green", bg: "bg-accent-green/10", button: "green" },
};

export const ServicePageLayout = ({
  title,
  subtitle,
  accentColor,
  icon: Icon,
  whatThisIs,
  whatWeBuild,
  howItWorks,
  exampleResult,
  whoFor,
  pricing,
  relatedServices,
  ctaText,
}: ServicePageLayoutProps) => {
  const colors = accentMap[accentColor];

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-8 sm:pt-16 md:pt-32 pb-8 sm:pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10">
          <AnimateIn>
            <div className={`inline-flex p-3 rounded-xl ${colors.bg} mb-6`}>
              <Icon size={32} className={colors.text} />
            </div>
            <h1 className="text-hero-mobile md:text-hero text-white mb-4">{title}</h1>
            <p className="text-body-lg text-white/70 max-w-2xl">{subtitle}</p>
          </AnimateIn>
        </div>
      </section>

      {/* What This Is */}
      <section className="pt-8 sm:pt-16 md:pt-16 pb-2 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <div className="rounded-xl border border-border bg-surface p-8">
              <h2 className="text-section-mobile md:text-section mb-4 text-center">What This Is</h2>
              <p className="text-body-lg text-muted-foreground text-center">{whatThisIs}</p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* What We Build & How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What We Build */}
            <AnimateIn>
              <div className="rounded-xl border border-border bg-surface p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><span className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center`}><Check size={18} className={colors.text} /></span>{whatWeBuild.title}</h2>
                <ul className="space-y-4">
                  {whatWeBuild.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} className={`${colors.text} mt-0.5 shrink-0`} />
                      <span className="text-muted-foreground text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* How It Works */}
            <AnimateIn>
              <div className="rounded-xl border border-border bg-surface p-8">
                <h2 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2"><span className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center text-sm font-bold ${colors.text}`}>⚙</span>How It Works</h2>
                <div className="space-y-4">
                  {howItWorks.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center shrink-0 flex-shrink-0`}>
                        <span className={`text-xs font-bold ${colors.text}`}>{i + 1}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-foreground text-base">{step.title}</p>
                        <p className="text-sm text-muted-foreground mt-0.5">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Example Result - Hidden for now */}
      {false && (
      <section className="section-padding surface-bg">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <div className="rounded-xl border-2 border-border bg-card p-8 text-center">
              <h3 className="text-card-title mb-2">Example Result</h3>
              <blockquote className="text-body-lg text-muted-foreground italic">
                "{exampleResult}"
              </blockquote>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p><span className="font-medium text-foreground">Who it's for:</span> {whoFor}</p>
                <p><span className="font-medium text-foreground">Pricing:</span> {pricing}</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
      )}

      {/* Related Services */}
      <section className="px-4 sm:px-6 lg:px-8 bg-background pb-16">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-8 text-center">Related Services</h2>
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {relatedServices.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:border-accent-purple hover:bg-accent-purple/5 transition-all"
                >
                  {s.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-4">
              <Button variant={colors.button} size="hero" asChild>
                <Link to="/contact">{ctaText}</Link>
              </Button>
              <Link to="/services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                View All Services →
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};
