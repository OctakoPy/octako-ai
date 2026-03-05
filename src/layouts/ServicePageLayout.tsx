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
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-6">What This Is</h2>
            <p className="text-body-lg text-muted-foreground">{whatThisIs}</p>
          </AnimateIn>
        </div>
      </section>

      {/* What We Build & How It Works */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Build */}
            <AnimateIn>
              <div className="max-w-3xl">
                <h2 className="text-section-mobile md:text-section mb-6">{whatWeBuild.title}</h2>
                <ul className="space-y-3">
                  {whatWeBuild.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={18} className={`${colors.text} mt-0.5 shrink-0`} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* How It Works */}
            <AnimateIn>
              <div className="max-w-3xl">
                <h2 className="text-section-mobile md:text-section mb-8">How It Works</h2>
                <div className="space-y-6">
                  {howItWorks.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
                        <span className={`text-sm font-bold ${colors.text}`}>{i + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{step.title}</p>
                        <p className="text-sm text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Example Result */}
      <section className="section-padding surface-bg">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <div className="rounded-xl border-2 border-border bg-card p-8">
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

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-card-title mb-6">Related Services</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {relatedServices.map((s) => (
                <Link
                  key={s.title}
                  to={s.href}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-surface transition-colors"
                >
                  {s.title} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
            <Button variant={colors.button} size="hero" className="w-full sm:w-auto" asChild>
              <Link to="/contact">{ctaText}</Link>
            </Button>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};
