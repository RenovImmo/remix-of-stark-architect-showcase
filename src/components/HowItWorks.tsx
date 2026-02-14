import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code2, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Consultation",
    description: "Nous analysons vos besoins et identifions les processus à automatiser pour maximiser votre ROI.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Développement",
    description: "Notre équipe développe votre agent IA sur-mesure, entraîné sur vos données et votre ton de communication.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "Formation",
    description: "Nous formons votre équipe à l'utilisation et au monitoring de votre agent pour garantir son efficacité.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Déploiement",
    description: "Lancement en production avec suivi en temps réel, optimisation continue et support dédié.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-label text-primary mb-4 block">Processus</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Comment Ça <span className="gradient-text">Marche</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Un processus simple et éprouvé pour déployer votre agent IA en quelques jours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30" />

            {steps.map((step, i) => {
              const StepCard = () => {
                const cardRef = useRef(null);
                const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
                return (
                  <motion.div
                    ref={cardRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={cardInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="text-center relative"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 relative">
                      <step.icon className="w-7 h-7 text-primary" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-xs font-bold text-primary-foreground">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                );
              };
              return <StepCard key={step.number} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
