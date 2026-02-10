import { motion } from "framer-motion";
import { Handshake, Globe, Zap, BarChart3, Users, Award } from "lucide-react";

const highlights = [
  { icon: <Globe size={22} />, text: "Startups to Enterprise" },
  { icon: <Zap size={22} />, text: "Google Ads & Meta Ads" },
  { icon: <BarChart3 size={22} />, text: "AI-Powered SEO" },
  { icon: <Users size={22} />, text: "Cross-Industry Expertise" },
  { icon: <Award size={22} />, text: "Innovation-Driven" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ClientsPartnersSection = () => {
  return (
    <section className="py-28 section-light relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-primary text-sm font-bold uppercase tracking-widest mb-6"
            >
              <Handshake size={14} />
              Partnerships
            </motion.span>

            <h2 className="font-display text-3xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Our Clients &{" "}
              <span className="text-gradient">Partners</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We work with a diverse range of clients across industries, from startups to 
              established brands, helping them achieve measurable growth through Google Ads, 
              Meta Ads, and AI-powered SEO.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our partners share our vision for innovation, collaboration, and delivering results. 
              Together, we create strategies that drive leads, increase revenue, and build lasting 
              impact in the digital space.
            </p>
          </motion.div>

          {/* Right: Animated highlight cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.text}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.25 } }}
                className={`relative p-6 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group ${
                  i === highlights.length - 1 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="font-display font-bold text-foreground text-sm">{item.text}</p>
              </motion.div>
            ))}

            {/* Decorative animated card */}
            <motion.div
              variants={itemVariants}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-24 h-24 border border-primary-foreground/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 border border-primary-foreground/10 rounded-full"
              />
              <div className="relative z-10">
                <p className="font-display text-3xl font-bold">50+</p>
                <p className="text-sm font-medium opacity-90">Brands Scaled</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsPartnersSection;
