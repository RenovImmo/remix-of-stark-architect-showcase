import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      window.location.href = `/contact?email=${encodeURIComponent(email.trim())}`;
    }
  };

  return (
    <section className="section-padding relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="glass-card glow-border p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Prêt à Automatiser{" "}
              <span className="gradient-text">Votre Business ?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
              Rejoignez les 500+ entreprises qui ont révolutionné leur activité grâce à nos agents IA
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="btn-primary !py-3 flex items-center justify-center gap-2 whitespace-nowrap">
                Commencer
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
