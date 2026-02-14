import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "497",
    period: "/mois",
    description: "Parfait pour démarrer l'automatisation de votre business",
    features: [
      "1 agent IA conversationnel",
      "1 000 messages/mois",
      "Intégration WhatsApp ou Instagram",
      "Dashboard de suivi",
      "Support par email",
      "Formation initiale (1h)",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "997",
    period: "/mois",
    description: "Pour les entreprises qui veulent scaler leur automatisation",
    features: [
      "3 agents IA conversationnels",
      "10 000 messages/mois",
      "Toutes les intégrations",
      "Dashboard avancé + analytics",
      "Support prioritaire",
      "Formation complète (5h)",
      "Optimisation mensuelle",
      "A/B testing des réponses",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "2 497",
    period: "/mois",
    description: "Solution complète pour les entreprises ambitieuses",
    features: [
      "Agents IA illimités",
      "Messages illimités",
      "Toutes les intégrations",
      "Dashboard white-label",
      "Support dédié 24/7",
      "Formation sur-mesure",
      "Account manager dédié",
      "API personnalisée",
      "SLA garanti 99.9%",
    ],
    popular: false,
  },
];

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl p-8 ${plan.popular ? "glass-card border-primary/40 glow-border" : "glass-card"}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full">
            Le Plus Populaire
          </span>
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-bold">{plan.price}€</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="/contact"
        className={`block text-center py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
          plan.popular
            ? "btn-primary w-full !py-3"
            : "border border-border hover:border-primary/50 hover:bg-primary/5"
        }`}
      >
        Choisir {plan.name}
      </a>
    </motion.div>
  );
};

const Pricing = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label text-primary mb-4 block">Tarifs</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Des Tarifs <span className="gradient-text">Transparents</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Investissez dans l'automatisation et voyez votre ROI dès le premier mois
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
