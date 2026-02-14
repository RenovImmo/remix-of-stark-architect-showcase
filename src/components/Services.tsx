import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, HeadphonesIcon, Target, Instagram, CalendarCheck, Settings2 } from "lucide-react";

const services = [
  {
    icon: MessageCircle,
    title: "Agent WhatsApp",
    description: "Automatisez vos conversations WhatsApp Business et convertissez plus de prospects en clients.",
    price: "À partir de 497€/mois",
  },
  {
    icon: HeadphonesIcon,
    title: "Agent Support Client",
    description: "Répondez instantanément aux questions de vos clients 24/7 avec une IA formée sur vos données.",
    price: "À partir de 397€/mois",
  },
  {
    icon: Target,
    title: "Agent Prospection",
    description: "Qualifiez et engagez vos leads automatiquement avec des conversations personnalisées.",
    price: "À partir de 597€/mois",
  },
  {
    icon: Instagram,
    title: "Agent Instagram",
    description: "Gérez vos DMs Instagram automatiquement et ne perdez plus jamais une opportunité.",
    price: "À partir de 447€/mois",
  },
  {
    icon: CalendarCheck,
    title: "Agent Prise de RDV",
    description: "Laissez l'IA planifier vos rendez-vous et synchroniser votre calendrier automatiquement.",
    price: "À partir de 347€/mois",
  },
  {
    icon: Settings2,
    title: "Solutions Sur-Mesure",
    description: "Un besoin spécifique ? Nous créons des agents IA personnalisés adaptés à votre métier.",
    price: "Sur devis",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card-hover p-8 group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
      
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <service.icon className="w-6 h-6 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
      
      <div className="text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {service.price}
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-label text-primary mb-4 block">Nos Services</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Des Agents IA Pour{" "}
              <span className="gradient-text">Chaque Besoin</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Optimisez chaque aspect de votre business avec nos agents IA spécialisés
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
