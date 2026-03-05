import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/AnimateIn";
import { fixedDeliverables, customSystems } from "@/data/pricing-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Star } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="section-padding surface-bg" id="pricing">
      <div className="section-container">
        <AnimateIn className="text-center mb-4">
          <h2 className="text-section-mobile md:text-section">
            Two Types of Projects, Two Types of Pricing
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1} className="text-center mb-16">
          <p className="text-body-lg text-muted-foreground">
            We charge based on what you need: a one-time deliverable or an ongoing system.
          </p>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Type 1: Fixed Deliverables */}
          <AnimateIn delay={0.1}>
            <div className="rounded-xl border-2 border-border bg-card p-6 lg:p-8 h-full flex flex-col">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan mb-4 w-fit">
                Type 1
              </span>
              <h3 className="text-subsection mb-2">Fixed Deliverables</h3>
              <p className="text-sm text-muted-foreground mb-6">
                For clearly defined, one-time tasks. You know exactly what you need done,
                we deliver it, and you're set.
              </p>

              <Accordion type="multiple" className="mb-6 flex-1">
                {fixedDeliverables.map((cat, i) => (
                  <AccordionItem key={i} value={`fixed-${i}`}>
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                      {cat.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5 pl-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-accent-cyan mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p><span className="font-medium text-foreground">Pricing:</span> Fixed price quoted upfront</p>
                <p><span className="font-medium text-foreground">Timeline:</span> Most projects within 1-2 weeks</p>
                <p><span className="font-medium text-foreground">Range:</span> Negotiable based on scope</p>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <p className="font-medium text-foreground">Perfect for:</p>
                <ul className="space-y-1 text-muted-foreground">
                  {["One-time cleanups or transformations", "Backlog processing", "Audit preparation", "Data migrations"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={14} className="text-accent-cyan shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="cyan" size="lg" className="w-full mt-auto" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </AnimateIn>

          {/* Type 2: Custom Systems */}
          <AnimateIn delay={0.2}>
            <div className="rounded-xl border-2 border-accent-purple/30 bg-card p-6 lg:p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/5 rounded-bl-full" />
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-purple/10 text-accent-purple">
                  Type 2
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-accent-orange/10 text-accent-orange">
                  <Star size={12} /> Most Popular
                </span>
              </div>
              <h3 className="text-subsection mb-2">Custom Systems</h3>
              <p className="text-sm text-muted-foreground mb-6">
                For complex workflows that need integration and iteration.
                We build something that becomes part of your operations.
              </p>

              <Accordion type="multiple" className="mb-6 flex-1">
                {customSystems.map((cat, i) => (
                  <AccordionItem key={i} value={`custom-${i}`}>
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                      {cat.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-1.5 pl-1">
                        {cat.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check size={14} className="text-accent-purple mt-0.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <p><span className="font-medium text-foreground">Timeline:</span> 4-12 weeks for full implementation</p>
                <p><span className="font-medium text-foreground">Includes:</span> Workflow analysis, custom dev, training, 30-60 day support</p>
                <p><span className="font-medium text-foreground">Range:</span> Custom pricing based on scope and ROI</p>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <p className="font-medium text-foreground">Perfect for:</p>
                <ul className="space-y-1 text-muted-foreground">
                  {["Companies scaling operations", "Complex multi-system workflows", "Processes requiring team collaboration", "When you need strategic guidance + implementation"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check size={14} className="text-accent-purple shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button variant="purple" size="lg" className="w-full mt-auto" asChild>
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
