import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Agents Déployés" },
  { value: 98, suffix: "%", label: "Satisfaction Client" },
  { value: 2, suffix: "M+", label: "Messages Traités" },
  { value: 24, suffix: "/7", label: "Disponibilité" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <Counter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground mt-3 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
