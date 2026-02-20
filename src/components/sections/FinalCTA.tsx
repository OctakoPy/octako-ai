import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/AnimateIn";
import { Check, ArrowRight, Clock } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="section-padding gradient-cta relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="section-container relative z-10">
        <AnimateIn className="text-center mb-12">
          <h2 className="text-section-mobile md:text-[3rem] md:leading-tight text-white">
            Stop Wasting Time on Work
            <br />
            That Shouldn't Exist
          </h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Path 1 */}
          <AnimateIn delay={0.1}>
            <div className="rounded-xl bg-white p-6 lg:p-8 shadow-xl h-full flex flex-col">
              <h3 className="text-card-title text-foreground mb-2">Start Small</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Perfect if you're:</p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "An individual with a specific repetitive task",
                  "Testing the waters",
                  "Need a quick win",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent-cyan mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="space-y-2 text-sm text-muted-foreground mb-6">
                {[
                  { label: "Fix my broken spreadsheet", link: "/services/fixmysheet" },
                  { label: "Automate one repetitive task", link: "/contact" },
                  { label: "Get expert advice", link: "/contact" },
                ].map((opt) => (
                  <Link
                    key={opt.label}
                    to={opt.link}
                    className="flex items-center gap-2 hover:text-accent-cyan transition-colors"
                  >
                    <ArrowRight size={14} className="text-accent-cyan" />
                    {opt.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Clock size={12} /> Days to 2 weeks · Negotiable pricing
              </div>

              <Button variant="cyan" size="lg" className="w-full" asChild>
                <Link to="/contact">Start Small</Link>
              </Button>
            </div>
          </AnimateIn>

          {/* Path 2 */}
          <AnimateIn delay={0.2}>
            <div className="rounded-xl bg-white p-6 lg:p-8 shadow-xl ring-2 ring-accent-purple/20 h-full flex flex-col">
              <h3 className="text-card-title text-foreground mb-2">Transform Your Operations</h3>
              <p className="text-sm font-medium text-muted-foreground mb-4">Perfect if you're:</p>
              <ul className="space-y-2 mb-6 flex-1">
                {[
                  "A company ready to scale",
                  "Tired of generic AI that doesn't deliver",
                  "Serious about process optimization",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent-purple mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <ol className="space-y-2 text-sm text-muted-foreground mb-6">
                {[
                  "Free 30-minute discovery call",
                  "Full workflow audit",
                  "Custom solution roadmap",
                  "Implementation and optimization",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-xs font-bold text-accent-purple bg-accent-purple/10 w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Clock size={12} /> 4-12 weeks · Custom pricing based on ROI
              </div>

              <Button variant="purple" size="lg" className="w-full" asChild>
                <Link to="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.3}>
          <p className="text-center text-white/80 max-w-2xl mx-auto text-body-lg">
            Whether you're drowning in weekly reports or leading a company that needs
            to scale, the principle is the same:{" "}
            <strong className="text-white">your time is too valuable for robot work.</strong>
          </p>
          <p className="text-center text-white font-semibold text-xl mt-4">
            Let's automate it.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
};
