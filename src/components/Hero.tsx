import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, Sparkles } from "lucide-react";

const FloatingIcon = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <div className={`absolute ${className}`}>
    <div className="glass-card p-3 md:p-4">
      {children}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Floating icons */}
      <FloatingIcon className="top-[20%] left-[10%] animate-float hidden md:block">
        <Bot className="w-6 h-6 text-primary" />
      </FloatingIcon>
      <FloatingIcon className="top-[30%] right-[12%] animate-float-delayed hidden md:block">
        <Zap className="w-6 h-6 text-secondary" />
      </FloatingIcon>
      <FloatingIcon className="bottom-[25%] left-[15%] animate-float-slow hidden md:block">
        <MessageSquare className="w-6 h-6 text-primary" />
      </FloatingIcon>
      <FloatingIcon className="bottom-[20%] right-[10%] animate-float hidden md:block">
        <Sparkles className="w-6 h-6 text-secondary" />
      </FloatingIcon>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Agence d'Automatisation IA #1 en France</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          Automatisez Votre{" "}
          <br className="hidden md:block" />
          Business Avec{" "}
          <span className="gradient-text">L'IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Créez des agents IA conversationnels qui travaillent 24/7 pour vous.
          Prospection, support client, prise de rendez-vous — tout automatisé.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="/#pricing" className="btn-primary text-base">
            Démarrer Gratuitement
          </a>
          <a href="/#how-it-works" className="btn-secondary text-base">
            Voir Comment ça Marche
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-muted-foreground/50"
        >
          {["500+ agents déployés", "98% satisfaction", "24/7 disponibilité"].map((text) => (
            <span key={text} className="text-sm tracking-wide">{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
