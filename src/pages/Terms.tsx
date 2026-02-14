import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <section className="section-padding pt-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Conditions Générales d'Utilisation</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Dernière mise à jour : Février 2026</p>
          <h2 className="text-xl font-semibold text-foreground">1. Objet</h2>
          <p>Les présentes conditions générales régissent l'utilisation des services proposés par Nova Studio Agent, société spécialisée dans la création d'agents IA conversationnels.</p>
          <h2 className="text-xl font-semibold text-foreground">2. Services</h2>
          <p>Nova Studio Agent propose des services de conception, développement, déploiement et maintenance d'agents conversationnels basés sur l'intelligence artificielle.</p>
          <h2 className="text-xl font-semibold text-foreground">3. Engagements</h2>
          <p>Nous nous engageons à fournir un service de qualité, avec un support réactif et des performances optimales pour vos agents IA.</p>
          <h2 className="text-xl font-semibold text-foreground">4. Responsabilité</h2>
          <p>Nova Studio Agent ne saurait être tenu responsable des dommages indirects résultant de l'utilisation de ses services.</p>
          <h2 className="text-xl font-semibold text-foreground">5. Contact</h2>
          <p>Pour toute question relative aux présentes conditions, contactez-nous à contact@novastudio.ai.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Terms;
