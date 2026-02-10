import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, BadgeCheck } from "lucide-react";
import result1 from "@/assets/result-1.jpeg";
import result2 from "@/assets/result-2.jpeg";
import result3 from "@/assets/result-3.jpeg";
import campaignScreenshot1 from "@/assets/campaign-screenshot-1.png";
import campaignScreenshot2 from "@/assets/campaign-screenshot-2.png";

const caseStudies = [
  {
    industry: "Fintech",
    title: "₹18.7L Monthly Revenue from Scratch",
    metrics: ["₹18.7L MRR", "8 B2B Acquisitions", "₹2.4L Onboarding Revenue"],
    description: "Built complete digital acquisition infrastructure for a fintech startup across 4 product verticals — from zero to ₹18.7L monthly recurring revenue.",
    tools: "Meta Ads, GA4, GTM, HubSpot, Pixel + CAPI",
    gradient: "from-primary to-accent",
  },
  {
    industry: "Real Estate",
    title: "40% Reduction in Cost Per Lead",
    metrics: ["40% Lower CPL", "15+ Landing Pages", "Daily Qualified Leads"],
    description: "Multi-location lead generation with geo-specific targeting, 15+ A/B tested landing pages, and automated qualification workflows.",
    tools: "Meta Ads, Google Ads, GA4, GTM",
    gradient: "from-accent to-success",
  },
  {
    industry: "Tours & Travel",
    title: "150 WhatsApp Leads at ₹10.70 Each",
    metrics: ["150 Leads", "₹10.70 CPL", "40-50% Conversion"],
    description: "WhatsApp-first lead gen campaign generating 60-75 confirmed bookings with industry-leading 40-50% conversion rate.",
    tools: "Meta Ads, WhatsApp Business, Meta Pixel",
    gradient: "from-success to-primary",
  },
  {
    industry: "E-Commerce",
    title: "3x ROAS with Dynamic Product Ads",
    metrics: ["3x ROAS", "Full Pixel Setup", "Cart Recovery Revenue"],
    description: "Complete Shopify tracking infrastructure, DPA catalog setup, and abandoned cart retargeting delivering 3x return on ad spend.",
    tools: "Shopify, Meta Pixel, CAPI, Catalog Manager",
    gradient: "from-primary to-glow",
  },
  {
    industry: "Interior Design",
    title: "65 Leads at ₹40 CPL Across 2 Cities",
    metrics: ["65 Qualified Leads", "₹40.30 CPL", "20-30% Close Rate"],
    description: "Multi-city campaign for KS Design Studio across Pune and Bangalore, generating project-ready leads with budget qualifiers.",
    tools: "Meta Ads, WhatsApp, Geo-targeting, Lookalike Audiences",
    gradient: "from-accent to-primary",
  },
];

const screenshots = [result1, result2, result3, campaignScreenshot1, campaignScreenshot2];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-28 section-light overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/5 border border-success/10 text-success text-sm font-bold uppercase tracking-widest mb-4"
          >
            <BadgeCheck size={14} />
            Proven Results
          </motion.span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-5">
            Real Campaigns. <span className="text-gradient">Real Revenue.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't just run ads — we build growth engines. Here's the proof.
          </p>
        </motion.div>

        {/* Screenshot gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {screenshots.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden border border-border bg-card card-shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <img
                  src={src}
                  alt={`Campaign performance result ${i + 1}`}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case study cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl border border-border bg-card hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-500"
            >
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cs.gradient} text-primary-foreground mb-4`}>
                <TrendingUp size={12} />
                {cs.industry}
              </div>

              <h3 className="font-display text-xl font-bold mb-3 text-card-foreground">{cs.title}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {cs.metrics.map((metric) => (
                  <span key={metric} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary/8 text-primary border border-primary/10">
                    {metric}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{cs.description}</p>

              <p className="text-xs text-muted-foreground/60 font-medium">
                <span className="text-foreground/50">Tools:</span> {cs.tools}
              </p>

              <ArrowUpRight size={16} className="absolute top-7 right-7 text-muted-foreground/20 group-hover:text-primary group-hover:rotate-12 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
