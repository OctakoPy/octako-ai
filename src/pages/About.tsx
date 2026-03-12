import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { TypingAnimation } from "@/components/TypingAnimation";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MapPin, Rss } from "lucide-react";
import { certifications, projects } from "@/data/portfolio-data";
import profilePic from "/profile_picture.png";

const About = () => {
  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-8 sm:pt-16 md:pt-32 pb-8 sm:pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10 max-w-4xl">
          <AnimateIn>
            <p className="text-sm font-medium text-accent-cyan mb-4 tracking-wide uppercase">
              Meet the Founder
            </p>
            <TypingAnimation
              text="Hi, I'm Caleb"
              speed={80}
              className="text-hero-mobile md:text-hero text-primary-foreground mb-6"
            />
            <p className="text-body-lg text-primary-foreground/70 max-w-2xl">
              I help businesses and individuals eliminate repetitive work through
              system automation and process design.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* Profile Picture */}
              <img
                src={profilePic}
                alt="Caleb - AI Automation Developer"
                className="w-48 h-48 md:w-56 md:h-56 shrink-0 rounded-2xl border-2 border-border object-cover"
              />

              <div className="space-y-4 text-muted-foreground">
                <h2 className="text-section-mobile md:text-section text-foreground">
                  About Me
                </h2>
                <p className="text-body-lg">
                  I'm an AI Automation Developer based in Selangor. I founded Octako AI because I firmly believe that most people are using AI wrongly. Instead of replacing humans with generative AI, outdated systems should be replaced with automation, freeing up your time to do things that matter.
                </p>
                <p>
                  Whenever you notice you have a repetitive task, it's highly likely that at least some part of the process can be automated. That's where I come in.
                </p>
                <p>
                  Certified by Microsoft, Google and IBM, I specialise in providing AI / automation solutions that minimise manual processes.
                </p>

                {/* Social / contact links */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/caleb-lim-88800a290/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    href="mailto:octakopy@gmail.com"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <Mail size={16} /> Email
                  </a>
                  <a
                    href="https://octako.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <Rss size={16} /> Substack
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin size={16} /> Selangor, Malaysia
                  </span>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Portfolio / Certifications & Projects */}
      <section className="section-padding surface-bg">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-6 text-center">Portfolio</h2>
            <div className="space-y-8">
              {/* Certifications */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {certifications.map((cert) => (
                    <a
                      key={cert.id}
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 border border-border rounded-lg bg-background hover:border-accent-purple transition-colors cursor-pointer"
                    >
                      {cert.image && (
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                      )}
                      <p className="font-medium text-foreground text-center">{cert.name}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Featured Projects - Hidden for now */}
              {false && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Featured Projects</h3>
                <div className="space-y-12">
                  {projects.map((project, index) => (
                    <a
                      key={project.id}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col md:flex-row gap-6 items-center hover:opacity-80 transition-opacity"
                      style={{
                        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                      }}
                    >
                      {project.image && (
                        <div className="w-full md:w-1/2 shrink-0">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover rounded-lg"
                          />
                        </div>
                      )}
                      <div className="w-full md:w-1/2">
                        <p className="font-medium text-lg text-foreground">{project.title}</p>
                        <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                        {project.technologies && project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="text-xs bg-accent-purple/10 text-accent-purple px-2 py-1 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              )}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl">
          <AnimateIn>
            <h2 className="text-section-mobile md:text-section mb-12 text-center">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div key={i} className="p-6 border border-border rounded-lg bg-surface-bg hover:border-accent-purple transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-lg font-bold text-accent-purple">{i + 1}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground mb-2">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </div>
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
              Spending Hours on Repetitive Work?
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              If the same tasks are eating into your day, I can help you automate them away.
              Let's talk about what's taking up your time and how to get it back.
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
