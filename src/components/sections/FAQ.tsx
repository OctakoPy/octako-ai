import { AnimateIn } from "@/components/AnimateIn";
import { individualFAQs, companyFAQs } from "@/data/faq-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="section-padding bg-background" id="faq">
      <div className="section-container">
        <AnimateIn className="text-center mb-16">
          <h2 className="text-section-mobile md:text-section">Common Questions</h2>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Individual FAQs */}
          <AnimateIn delay={0.1}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent-cyan" />
                For Individuals
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {individualFAQs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`ind-${i}`}
                    className="border border-border rounded-lg px-4 data-[state=open]:bg-surface"
                  >
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateIn>

          {/* Company FAQs */}
          <AnimateIn delay={0.2}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-accent-purple" />
                For Companies
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {companyFAQs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`comp-${i}`}
                    className="border border-border rounded-lg px-4 data-[state=open]:bg-surface"
                  >
                    <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
};
