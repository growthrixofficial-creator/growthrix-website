import { motion } from "framer-motion";
import { Quote, Star, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Tours & Travel Client",
    industry: "Tours & Travel",
    text: "We scaled from almost no online presence to 30–40 leads per day with just Meta Ads. Our monthly bookings and revenue increased significantly. Growthrix is the best decision we made for digital growth.",
    rating: 5,
  },
  {
    name: "Solar Industry Client",
    industry: "Solar Energy",
    text: "The team helped us set up performance marketing and lead generation systems that brought consistent, quality leads. They understand business deeply and optimize campaigns like an in-house team. Amazing experience.",
    rating: 5,
  },
  {
    name: "Flowmint Solutions",
    industry: "Fintech",
    text: "Flowmint Solutions appreciated our complete digital setup. Achieved 20–25 daily leads and onboarded 5 clients in just 3 months, driving measurable business growth.",
    rating: 5,
  },
  {
    name: "KS Design Studio",
    industry: "Interior Design",
    text: "Growthrix has completely transformed our online presence. Their Meta Ads and SEO strategy helped us get consistent inquiries every day. The communication, execution, and clarity in reporting are top-notch.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="about" className="py-28 section-dark relative overflow-hidden">
      {/* Animated glow effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-4"
          >
            <Star size={14} className="fill-primary" />
            Client Reviews
          </motion.span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            What Our <span className="text-gradient">Partners</span> Say
          </h2>
          <p className="text-hero-muted max-w-2xl mx-auto text-lg">
            Real feedback from real clients who have experienced measurable growth with Growthrix Club.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative p-8 rounded-2xl border border-primary/10 bg-primary/5 hover:bg-primary/[0.08] hover:border-primary/25 transition-colors duration-500 group"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <Quote size={36} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-accent/10 text-accent border border-accent/20">
                    <Building2 size={11} />
                    {t.industry}
                  </span>
                </div>

                <p className="text-hero-foreground/80 leading-relaxed mb-6 text-[15px] italic">
                  "{t.text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-hero-foreground">{t.name}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* About blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
            About <span className="text-gradient">Growthrix Club</span>
          </h3>
          <p className="text-hero-muted leading-relaxed text-lg">
            We're a team of performance marketers, data nerds, and creative strategists obsessed with one thing: 
            measurable growth. From real estate developers in India to eCommerce brands expanding internationally, 
            we build custom growth engines that turn ad spend into revenue. No fluff. No vanity metrics. Just results.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
