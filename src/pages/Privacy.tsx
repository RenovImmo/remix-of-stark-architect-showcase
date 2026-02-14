import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <section className="section-padding pt-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Politique de Confidentialité</h1>
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
          <p>Dernière mise à jour : Février 2026</p>
          <h2 className="text-xl font-semibold text-foreground">1. Collecte des données</h2>
          <p>Nous collectons uniquement les données nécessaires à la fourniture de nos services : nom, email, informations de contact professionnel.</p>
          <h2 className="text-xl font-semibold text-foreground">2. Utilisation des données</h2>
          <p>Vos données sont utilisées exclusivement pour la gestion de votre compte, la communication relative à nos services, et l'amélioration de nos produits.</p>
          <h2 className="text-xl font-semibold text-foreground">3. Protection des données</h2>
          <p>Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données personnelles conformément au RGPD.</p>
          <h2 className="text-xl font-semibold text-foreground">4. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.</p>
          <h2 className="text-xl font-semibold text-foreground">5. Contact DPO</h2>
          <p>Pour exercer vos droits, contactez notre délégué à la protection des données à privacy@novastudio.ai.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Privacy;
