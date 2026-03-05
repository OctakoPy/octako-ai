import { caseStudies } from "@/data/case-studies";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";

const accentBorderMap: Record<string, string> = {
  pink: "border-accent-pink/30",
  purple: "border-accent-purple/30",
  cyan: "border-accent-cyan/30",
  green: "border-accent-green/30",
  orange: "border-accent-orange/30",
};

const accentBgMap: Record<string, string> = {
  pink: "bg-accent-pink/5",
  purple: "bg-accent-purple/5",
  cyan: "bg-accent-cyan/5",
  green: "bg-accent-green/5",
  orange: "bg-accent-orange/5",
};

const accentTextMap: Record<string, string> = {
  pink: "text-accent-pink",
  purple: "text-accent-purple",
  cyan: "text-accent-cyan",
  green: "text-accent-green",
  orange: "text-accent-orange",
};

export const Testimonials = () => {
  return (
    <section className="section-padding bg-background" id="examples">
      <div className="section-container">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section">
            What This Actually Looks Like
          </h2>
        </AnimateIn>

        <StaggerChildren className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <div className="rounded-xl border-2 border-border bg-card p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 h-full flex flex-col">
                {study.badge && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 w-fit ${accentBgMap[study.accentColor]} ${accentTextMap[study.accentColor]}`}>
                    {study.badge}
                  </span>
                )}
                <h3 className="text-card-title mb-2">{study.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{study.client}</p>

                <div className="space-y-3 mb-6 flex-1">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">The Task</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.task}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">The Solution</span>
                    <p className="text-sm text-muted-foreground mt-1">{study.solution}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">The Result</span>
                    <ul className="mt-1 space-y-1">
                      {study.results.map((r, i) => (
                        <li key={i} className="text-sm font-medium text-foreground">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`rounded-lg p-4 ${accentBgMap[study.accentColor]} border ${accentBorderMap[study.accentColor]}`}>
                  {study.metrics.map((m, i) => (
                    <p key={i} className="text-sm font-semibold text-foreground">{m}</p>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
