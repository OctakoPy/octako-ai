import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10 max-w-4xl">
          <AnimateIn>
            <p className="text-sm font-medium text-accent-cyan mb-4 tracking-wide uppercase">
              Meet the Founder
            </p>
            <h1 className="text-hero-mobile md:text-hero text-primary-foreground mb-6">
              Hi, I'm [Your Name]
            </h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-2xl">
              I help businesses and individuals eliminate repetitive work through
              intelligent automation and process design.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Photo placeholder */}
              <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl bg-muted border-2 border-border flex items-center justify-center text-muted-foreground text-sm text-center p-4">
                [Your photo here — replace this div with an img tag]
              </div>

              <div className="space-y-4 text-muted-foreground">
                <h2 className="text-section-mobile md:text-section text-foreground">
                  The Short Version
                </h2>
                <p className="text-body-lg">
                  I'm a [your role/title] based in [your city/country]. I founded
                  Streamline Systems because I kept seeing the same problem: smart people
                  wasting hours on work that a well-designed system could handle in seconds.
                </p>
                <p>
                  Before starting Streamline, I [brief background — e.g., "spent X years
                  in operations/consulting/engineering at Company, where I first saw how
                  much time teams waste on manual processes"].
                </p>
                <p>
                  I specialise in [your key specialisms — e.g., "workflow automation,
                  process redesign, and building AI-powered systems that solve specific
                  problems, not generic ones"].
                </p>

                {/* Social / contact links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href="mailto:hello@streamlinesystems.com"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <Mail size={16} /> Email
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={16} /> [Your City, Country]
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Background / Story */}
      <section className="section-padding surface-bg">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-6">My Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                [Write your personal story here. What led you to automation and process
                design? What moment made you realise this was the work you wanted to do?]
              </p>
              <p>
                [Talk about a formative experience — maybe a project where you saw
                first-hand how much time was being wasted, or a client who changed how
                you think about efficiency.]
              </p>
              <p>
                [Mention any relevant education, certifications, or technical skills that
                build credibility — but keep it conversational, not résumé-like.]
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-6">How I Work</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Fix the process first, then add technology",
                  detail:
                    "Most companies fail because they throw AI at broken workflows. I redesign the process first, then automate what actually matters.",
                },
                {
                  title: "Specific beats generic, every time",
                  detail:
                    "Generic tools help a little with everything. Custom solutions transform specific workflows completely. I build the latter.",
                },
                {
                  title: "Measure in real outcomes",
                  detail:
                    "Hours saved, costs reduced, errors eliminated. Not 'adoption rates' or 'AI maturity scores.'",
                },
                {
                  title: "I practise what I preach",
                  detail:
                    "My own operations run on the same automation principles I implement for clients. Automated pipelines, zero manual reporting, intelligent routing.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-accent-purple">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding surface-bg">
        <div className="section-container text-center">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-4">
              Let's Talk About Your Workflow
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need a spreadsheet fixed or an entire operation redesigned, I'd
              love to hear about the problem you're solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="purple" size="hero" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
