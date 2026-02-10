import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Target, TrendingUp } from "lucide-react";
import campaignScreenshot1 from "@/assets/campaign-screenshot-1.png";
import campaignScreenshot2 from "@/assets/campaign-screenshot-2.png";

const floatingCards = [
  { icon: <TrendingUp size={18} />, text: "3x ROAS", color: "bg-success/10 text-success border-success/20" },
  { icon: <Target size={18} />, text: "₹10.70 CPL", color: "bg-primary/10 text-primary border-primary/20" },
  { icon: <BarChart3 size={18} />, text: "500+ Campaigns", color: "bg-accent/10 text-accent border-accent/20" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-light overflow-hidden">
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.02] blur-3xl" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Trusted by 50+ Brands Across India & Global Markets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] mb-6 text-foreground"
            >
              Scale Your Brand
              <br />
              With{" "}
              <span className="text-gradient">Data-Driven</span>
              <br />
              Advertising
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              We help eCommerce, real estate, and D2C brands generate qualified leads, boost revenue, and dominate their market — with Meta Ads, Google Ads & performance marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-primary-foreground font-bold text-base bg-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Free Strategy Call
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-border text-foreground font-semibold text-base hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                See Our Results
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              {["Meta Ads Partner", "Google Ads Certified", "Shopify Expert"].map((badge, i) => (
                <div key={badge} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success" />
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Floating dashboard mockup */}
          <div className="relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main screenshot card */}
              <div className="rounded-2xl overflow-hidden card-shadow border border-border bg-card p-2">
                <img
                  src={campaignScreenshot1}
                  alt="Campaign performance dashboard showing real results"
                  className="rounded-xl w-full"
                />
              </div>

              {/* Overlapping second screenshot */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -bottom-8 -left-8 w-64 rounded-xl overflow-hidden card-shadow border border-border bg-card p-1.5 animate-float-delayed"
              >
                <img
                  src={campaignScreenshot2}
                  alt="Campaign metrics"
                  className="rounded-lg w-full"
                />
              </motion.div>

              {/* Floating metric cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.8 + i * 0.15 }}
                  className={`absolute ${
                    i === 0 ? "-top-4 -right-4" : i === 1 ? "top-1/3 -left-12" : "-bottom-4 right-12"
                  }`}
                >
                  <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border backdrop-blur-sm ${card.color} shadow-lg animate-float`}
                    style={{ animationDelay: `${i * 0.8}s` }}
                  >
                    {card.icon}
                    <span className="text-sm font-bold">{card.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
