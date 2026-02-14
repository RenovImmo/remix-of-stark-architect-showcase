import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">N</span>
                </div>
                <span className="text-lg font-bold tracking-tight">Nova Studio Agent</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                Nous créons des agents IA conversationnels qui automatisent votre business et vous font gagner du temps et de l'argent.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Liens</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/#services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="/#pricing" className="hover:text-foreground transition-colors">Tarifs</a></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Légal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Conditions Générales</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Politique de Confidentialité</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Nova Studio Agent. Tous droits réservés.</p>
            <div className="flex gap-6">
              {["LinkedIn", "Instagram", "Twitter"].map((social) => (
                <a key={social} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
