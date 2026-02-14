import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sophie Martin",
    company: "E-Commerce Plus",
    role: "CEO",
    content: "Notre agent WhatsApp a multiplié nos conversions par 3. L'investissement est rentabilisé en moins d'un mois. Incroyable.",
    rating: 5,
  },
  {
    name: "Marc Dubois",
    company: "TechVision SAS",
    role: "Directeur Commercial",
    content: "L'agent de prospection nous génère 50 leads qualifiés par jour. Notre équipe commerciale se concentre maintenant sur la conclusion des ventes.",
    rating: 5,
  },
  {
    name: "Amélie Chen",
    company: "HealthCare Pro",
    role: "Fondatrice",
    content: "La prise de rendez-vous automatisée a libéré 20h par semaine pour notre secrétariat. Le ROI est tout simplement extraordinaire.",
    rating: 5,
  },
  {
    name: "Thomas Petit",
    company: "Immo360",
    role: "Gérant",
    content: "Nos clients sont ravis de l'instantanéité des réponses. Le support client est passé de 24h à moins de 30 secondes de temps de réponse.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label text-primary mb-4 block">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Ce Que Disent <span className="gradient-text">Nos Clients</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center relative">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                "{testimonials[active].content}"
              </p>

              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonials[active].name[0]}
                  </span>
                </div>
                <p className="font-semibold">{testimonials[active].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[active].role} — {testimonials[active].company}</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button onClick={prev} className="glass-card p-3 hover:bg-primary/10 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="glass-card p-3 hover:bg-primary/10 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
