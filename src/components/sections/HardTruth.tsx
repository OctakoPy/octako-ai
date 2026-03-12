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
            Only 5% of companies are generating substantial value from AI while 60% are seeing absolutely no gains. Here's what the
            research shows:
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15} className="text-center mb-12">
          <p className="text-sm text-muted-foreground/70 max-w-2xl mx-auto">
            This statistic comes from BCG's The Widening AI Value Gap Report 2025, which
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
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {stat.title}
                </h3>
                <p className="text-base text-muted-foreground mb-4">{stat.context}</p>
                <p className="text-sm text-muted-foreground/60">{stat.source}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

{/* The Pattern */}
<AnimateIn className="max-w-5xl mx-auto">
  <div className="rounded-xl border-2 border-border bg-card p-8 shadow-sm">
    <div className="mb-8 flex items-center justify-between">
      <h3 className="text-2xl font-bold text-foreground">The AI Reality Check</h3>
      <span className="rounded-full bg-accent-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-orange">
        What's actually happening
      </span>
    </div>

    <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
      The gap isn't just about who has AI—it's about who is actually winning with it. 
      Most companies are just <span className="text-foreground font-semibold">"dabbling"</span> with basic tools, while the leaders are 
      <span className="text-foreground font-semibold"> changing the way they work</span> to pull ahead.
    </p>

    <h4 className="mb-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
      The Winning Difference:
    </h4>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* Wrong Approach vs Right Approach Cards */}
      {[
        {
          wrong: "Waiting for the \"perfect time\" to start.",
          right: "Getting in the game now to chase the 1.7x revenue growth seen by those who do."
        },
        {
          wrong: "Buying a few generic tools and hoping for a miracle.",
          right: "Fixing the process first—the critical step 84% of your peers are missing."
        }
      ].map((item, i) => (
        <div key={i} className="space-y-3">
          {/* Wrong Approach */}
          <div className="rounded-lg border border-accent-orange/30 bg-accent-orange/5 p-4">
            <div className="flex items-start gap-3">
              <X size={18} className="mt-0.5 shrink-0 text-accent-orange" />
              <span className="text-muted-foreground text-sm italic">{item.wrong}</span>
            </div>
          </div>
          
          {/* Right Approach */}
          <div className="rounded-lg border border-accent-green/30 bg-accent-green/5 p-4">
            <div className="flex items-start gap-3">
              <Check size={18} className="mt-0.5 shrink-0 text-accent-green" />
              <span className="text-foreground text-sm font-medium">{item.right}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 p-6">
      <p className="text-foreground font-bold text-lg mb-3">
        The Bottom Line:
      </p>
      <p className="text-muted-foreground leading-relaxed">
        If you're still on the sidelines, you're handing a massive lead to your competition. 
        But if you've already started and aren't seeing a difference, you're likely among the 
        <span className="text-foreground font-semibold"> 80% seeing zero impact</span> because you're 
        automating the old way of working instead of building a new one.
      </p>
    </div>
  </div>
</AnimateIn>
      </div>
    </section>
  );
};
