import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Target, DollarSign } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  delay: number;
}

const StatItem = ({ icon, value, suffix, label, delay }: StatItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative text-center p-8 rounded-2xl bg-card border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/15 transition-all duration-500 group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="font-display text-4xl lg:text-5xl font-bold text-foreground">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm font-medium">{label}</p>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 section-light relative overflow-hidden">
      {/* Scrolling marquee band */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden bg-primary/5 py-3 border-y border-primary/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, repeat) => (
            <div key={repeat} className="flex gap-12 mr-12">
              {["Meta Ads Expert", "Google Ads Certified", "₹18L+ MRR Generated", "500+ Campaigns", "50+ Brands Scaled", "10,000+ Leads", "Shopify Partner", "Performance Marketing"].map((item) => (
                <span key={`${repeat}-${item}`} className="text-xs font-bold uppercase tracking-widest text-primary/60">
                  {item} <span className="mx-4 text-primary/30">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem icon={<TrendingUp size={24} />} value={500} suffix="+" label="Campaigns Managed" delay={0} />
          <StatItem icon={<Users size={24} />} value={50} suffix="+" label="Brands Scaled" delay={0.1} />
          <StatItem icon={<Target size={24} />} value={10000} suffix="+" label="Leads Generated" delay={0.2} />
          <StatItem icon={<DollarSign size={24} />} value={18} suffix="L+ MRR" label="Revenue Generated Monthly" delay={0.3} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
