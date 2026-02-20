import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { statistics } from "@/data/statistics-data";
import { X, Check } from "lucide-react";

const accentColorMap: Record<string, string> = {
  pink: "text-accent-pink",
  purple: "text-accent-purple",
  cyan: "text-accent-cyan",
  orange: "text-accent-orange",
  green: "text-accent-green",
};

const accentBorderMap: Record<string, string> = {
  pink: "hover:border-accent-pink",
  purple: "hover:border-accent-purple",
  cyan: "hover:border-accent-cyan",
  orange: "hover:border-accent-orange",
  green: "hover:border-accent-green",
};

const differences = [
  { wrong: "\"Let's give everyone an AI assistant\"", right: "\"Let's eliminate the 40 hours our team spends on manual data entry\"" },
  { wrong: "\"We need an AI strategy\"", right: "\"We need to fix our broken invoice processing workflow\"" },
  { wrong: "\"Creative AI for everyone!\"", right: "\"Automated systems for specific bottlenecks\"" },
];

export const HardTruth = () => {
  return (
    <section className="section-padding surface-bg" id="hard-truth">
      <div className="section-container">
        <AnimateIn className="text-center mb-6">
          <h2 className="text-section-mobile md:text-section">
            Why Your AI Investment Isn't Working
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1} className="text-center mb-4">
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            88% of companies now use AI. Most see zero ROI. Here's what the
            research shows:
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15} className="text-center mb-12">
          <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto">
            The 88% figure comes from McKinsey's State of AI Report 2024, which
            found widespread adoption but limited success in converting that
            adoption into business value.
          </p>
        </AnimateIn>

        {/* Stats Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.1}>
          {statistics.map((stat) => (
            <StaggerItem key={stat.number}>
              <div
                className={`rounded-xl border-2 border-border bg-card p-6 transition-all duration-300 ${accentBorderMap[stat.accentColor]} hover:shadow-lg hover:-translate-y-0.5`}
              >
                <div className={`text-5xl font-bold mb-3 ${accentColorMap[stat.accentColor]}`}>
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {stat.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{stat.context}</p>
                <p className="text-xs text-muted-foreground/60">{stat.source}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* The Pattern */}
        <AnimateIn className="max-w-3xl mx-auto">
          <div className="rounded-xl border-2 border-border bg-card p-8">
            <h3 className="text-card-title mb-4">The Pattern:</h3>
            <p className="text-muted-foreground mb-6">
              Companies that fail bought generic tools and hoped for magic.
              Companies that succeed redesigned specific workflows first, then
              added targeted automation.
            </p>

            <h4 className="font-semibold text-foreground mb-4">The Difference:</h4>
            <div className="space-y-4 mb-6">
              {differences.map((d, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <X size={18} className="text-accent-orange mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{d.wrong}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-accent-green mt-0.5 shrink-0" />
                    <span className="text-foreground font-medium">{d.right}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-foreground font-semibold">
                Bottom Line:{" "}
                <span className="font-normal text-muted-foreground">
                  Generic LLMs help you write emails faster. Process automation
                  eliminates emails that shouldn't exist.
                </span>
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
};
