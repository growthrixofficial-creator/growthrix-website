import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, TrendingUp, Users, Zap, LineChart, MousePointerClick, Search } from "lucide-react";

const services = [
  {
    icon: <Target size={32} />,
    title: "Meta Ads",
    subtitle: "Facebook & Instagram Advertising",
    description: "High-ROI campaigns across Facebook and Instagram. From DPA catalogs to WhatsApp lead gen — we build full-funnel strategies that convert scrollers into customers.",
    features: ["Audience Targeting & Lookalikes", "Dynamic Product Ads (DPA)", "WhatsApp Lead Generation", "Retargeting & Cart Recovery", "Creative A/B Testing"],
    gradient: "from-primary to-accent",
  },
  {
    icon: <Search size={32} />,
    title: "Google Ads",
    subtitle: "Search, Display & YouTube",
    description: "Capture high-intent buyers at the moment they search. We build Google campaigns that dominate search results and drive qualified leads at scale.",
    features: ["Search Campaign Optimization", "Display & Remarketing", "Shopping & PMax Campaigns", "YouTube Video Ads", "Conversion Tracking & GA4"],
    gradient: "from-accent to-success",
  },
];

const performanceFeatures = [
  { icon: <BarChart3 size={20} />, title: "Full-Funnel Analytics", desc: "GA4, GTM, Meta Pixel, CAPI & custom dashboards" },
  { icon: <LineChart size={20} />, title: "Revenue Attribution", desc: "Know exactly which ad drives every rupee of revenue" },
  { icon: <MousePointerClick size={20} />, title: "CRO & Landing Pages", desc: "Conversion-optimized pages that turn traffic into leads" },
  { icon: <Zap size={20} />, title: "AI Automation", desc: "Automated bid strategies, lead scoring & workflows" },
  { icon: <Users size={20} />, title: "Audience Intelligence", desc: "Data-driven audience building & segmentation" },
  { icon: <TrendingUp size={20} />, title: "Scale & Optimization", desc: "Continuous testing and scaling of winning campaigns" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 section-light overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Zap size={14} />
            Our Services
          </motion.span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-5">
            Two Platforms. <span className="text-gradient">Unlimited Growth.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We specialize in what works: Meta Ads & Google Ads — backed by deep performance marketing expertise.
          </p>
        </motion.div>

        {/* Main Service Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-3xl border border-border bg-card p-8 lg:p-10 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-primary-foreground mb-6`}>
                {service.icon}
              </div>

              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-1">{service.title}</h3>
              <p className="text-primary font-medium text-sm mb-4">{service.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Performance Marketing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl section-dark p-10 lg:p-16"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="font-display text-2xl lg:text-4xl font-bold text-hero-foreground mb-3">
                <span className="text-gradient">Performance Marketing</span> That Delivers
              </h3>
              <p className="text-hero-muted max-w-xl mx-auto">
                Beyond just running ads — we build complete growth infrastructure for measurable results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceFeatures.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-primary/10 bg-primary/5 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="text-primary mt-0.5">{feat.icon}</div>
                  <div>
                    <h4 className="font-display font-bold text-hero-foreground text-sm mb-1">{feat.title}</h4>
                    <p className="text-hero-muted text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get a Custom Growth Plan
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
