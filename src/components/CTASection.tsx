import { motion } from "framer-motion";
import { ArrowRight, Rocket, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free 30-minute strategy audit",
  "Custom growth roadmap for your brand",
  "No strings attached — zero commitment",
];

const CTASection = () => {
  return (
    <section id="results" className="py-28 section-light relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden section-dark p-12 lg:p-20"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/15 text-primary mb-8 animate-pulse-glow"
            >
              <Rocket size={32} />
            </motion.div>

            <h2 className="font-display text-3xl lg:text-5xl font-bold text-hero-foreground mb-5">
              Ready to <span className="text-gradient">10x</span> Your Growth?
            </h2>
            <p className="text-hero-muted text-lg max-w-xl mx-auto mb-8">
              Book a free 30-minute strategy call. We'll audit your current marketing,
              identify gaps, and give you an actionable growth roadmap.
            </p>

            <div className="flex flex-col items-center gap-3 mb-10">
              {benefits.map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 text-hero-muted"
                >
                  <CheckCircle2 size={16} className="text-success" />
                  <span className="text-sm">{b}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Your Free Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:hello@growthrix.club"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl border border-hero-muted/30 text-hero-foreground/80 font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Or Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
