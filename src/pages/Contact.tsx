import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { Mail, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {

  return (
    <MainLayout>
      <section className="pt-8 sm:pt-16 md:pt-32 pb-8 sm:pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10 max-w-4xl">
          <AnimateIn>
            <p className="text-sm font-medium text-accent-cyan mb-4 tracking-wide uppercase">
              Get in Touch
            </p>
            <h1 className="text-hero-mobile md:text-hero text-white mb-6">
              Let's Talk
            </h1>
            <p className="text-body-lg text-white/70 max-w-2xl">
              Tell us about your workflow challenge and we'll figure out the best
              path forward.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-5xl">
          {/* Contact Methods Grid */}
          <AnimateIn className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Email */}
              <div className="rounded-xl border border-border bg-surface p-8 hover:border-accent-cyan hover:shadow-lg transition-all group">
                <div className="p-3 rounded-lg bg-accent-cyan/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Directly</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Send us an email with your workflow challenge and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:octakopy@gmail.com" className="inline-flex items-center gap-2 text-accent-cyan font-medium hover:gap-3 transition-all">
                  octakopy@gmail.com <ArrowRight size={16} />
                </a>
              </div>

              {/* Response Time */}
              <div className="rounded-xl border border-border bg-surface p-8 hover:border-accent-purple hover:shadow-lg transition-all group">
                <div className="p-3 rounded-lg bg-accent-purple/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Clock size={24} className="text-accent-purple" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Response</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  I typically respond within a few hours. Most inquiries get a response the same day.
                </p>
                <p className="inline-flex items-center gap-2 text-accent-purple font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
                  Let's get in touch!
                </p>
              </div>

              {/* Discovery Call */}
              <div className="rounded-xl border border-border bg-surface p-8 hover:border-accent-green hover:shadow-lg transition-all group">
                <div className="p-3 rounded-lg bg-accent-green/10 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare size={24} className="text-accent-green" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Discovery Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a free 30-minute call to discuss your workflows, pain points, and opportunities.
                </p>
                <p className="inline-flex items-center gap-2 text-accent-green font-medium">
                  <span className="inline-block px-2 py-1 rounded bg-accent-green/10 text-xs font-bold">Free</span>
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* CTA Card */}
          <AnimateIn>
            <div className="rounded-xl border-2 border-accent-purple/30 bg-gradient-to-br from-accent-purple/5 to-accent-pink/5 p-8 md:p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">Not sure where to start?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Just tell us what's eating into your day. We'll give you an honest assessment of whether we can help and the best approach to take. No pressure, no sales pitch—just real advice.
              </p>
              <Button variant="purple" size="hero" asChild>
                <a href="mailto:octakopy@gmail.com">
                  Start the Conversation
                </a>
              </Button>
            </div>
          </AnimateIn>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
