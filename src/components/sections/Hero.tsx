import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Accent orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-accent-cyan/10 blur-3xl" />

      <div className="section-container relative z-10 py-8 sm:py-16 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
          >
            <Zap size={16} className="text-accent-cyan" />
            <span className="text-sm font-medium text-white/80">AI Automation & Workflow Optimization</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-hero-mobile md:text-hero text-white mb-6"
          >
            Your time is valuable:
            <br />
            <span className="text-accent-cyan">stop doing work</span> that
            shouldn't exist.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-white/70 max-w-2xl mb-10"
          >
            We build intelligent automation for the repetitive tasks draining your
            time. Custom workflow solutions that actually deliver results—not
            generic AI tools that sit unused.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="purple" size="hero" asChild>
              <Link to="/contact">
                Schedule Strategy Call
                <ArrowRight size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
