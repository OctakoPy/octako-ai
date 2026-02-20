import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <MainLayout>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10">
          <AnimateIn>
            <h1 className="text-hero-mobile md:text-hero text-white mb-4">
              Let's Talk
            </h1>
            <p className="text-body-lg text-white/70 max-w-xl">
              Tell us about your workflow challenge and we'll figure out the best
              path forward.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimateIn>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Tell us about your task or workflow</Label>
                  <Textarea
                    id="message"
                    placeholder="What repetitive task is eating your time? What workflow needs fixing?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="mt-2"
                  />
                </div>
                <Button variant="purple" size="xl" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </AnimateIn>

            {/* Info */}
            <AnimateIn delay={0.2}>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-purple/10">
                    <Clock size={24} className="text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">We respond within 24 hours. Usually much faster.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <Mail size={24} className="text-accent-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Directly</h3>
                    <a href="mailto:hello@streamlinesystems.com" className="text-accent-cyan hover:underline">
                      hello@streamlinesystems.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-green/10">
                    <MessageSquare size={24} className="text-accent-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Free Discovery Call</h3>
                    <p className="text-muted-foreground">
                      Not sure where to start? Book a free 30-minute call to discuss
                      your workflows and opportunities.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border-2 border-border bg-surface p-6">
                  <h3 className="font-semibold text-foreground mb-2">Not sure what you need?</h3>
                  <p className="text-sm text-muted-foreground">
                    Just describe what's eating your time. We'll tell you honestly
                    whether we can help and what the best approach would be. No pressure,
                    no sales pitch.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
