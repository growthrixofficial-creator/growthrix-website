import { motion } from "framer-motion";
import { Rocket, ArrowRight, Search, Lightbulb, Play, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Search size={24} />,
    step: "01",
    title: "Discovery",
    description: "We audit your current marketing, analyze competitors, and identify high-impact growth opportunities.",
  },
  {
    icon: <Lightbulb size={24} />,
    step: "02",
    title: "Strategy",
    description: "Custom growth roadmap with channel mix, audience targeting, creative strategy, and conversion tracking.",
  },
  {
    icon: <Play size={24} />,
    step: "03",
    title: "Launch",
    description: "Campaign deployment across Meta Ads & Google Ads with pixel setup, CAPI integration, and A/B testing.",
  },
  {
    icon: <TrendingUp size={24} />,
    step: "04",
    title: "Scale",
    description: "Continuous optimization, scaling winning campaigns, expanding to new markets, and maximizing ROAS.",
  },
];

const LaunchScaleSection = () => {
  return (
    <section className="py-28 section-dark relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-2 h-2 rounded-full bg-primary/40"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 left-32 w-1.5 h-1.5 rounded-full bg-accent/40"
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 right-1/4 w-3 h-3 rounded-full bg-success/30"
      />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/15 text-primary mb-6"
          >
            <Rocket size={28} />
          </motion.div>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4 text-hero-foreground">
            Launch & Scale{" "}
            <span className="text-gradient">Together</span>
          </h2>
          <p className="text-hero-muted max-w-2xl mx-auto text-lg">
            Our proven 4-step process takes your brand from audit to aggressive scaling — with full transparency at every stage.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.15 }}
                    className="h-px bg-gradient-to-r from-primary/40 to-primary/10 origin-left"
                  />
                </div>
              )}

              <div className="p-7 rounded-2xl border border-primary/10 bg-primary/5 hover:bg-primary/[0.08] hover:border-primary/25 transition-all duration-500 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  >
                    {s.icon}
                  </motion.div>
                  <span className="font-display text-2xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                    {s.step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-hero-foreground mb-2">{s.title}</h3>
                <p className="text-hero-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            Start Your Growth Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchScaleSection;
