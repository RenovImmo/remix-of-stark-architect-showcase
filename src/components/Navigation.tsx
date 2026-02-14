import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "/#services" },
    { label: "Comment ça marche", href: "/#how-it-works" },
    { label: "Tarifs", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">N</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Nova Studio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              {link.label}
            </a>
          ))}
          <a href="/#pricing" className="btn-primary text-sm !py-2.5 !px-6">
            Démarrer
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-lg text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="/#pricing" className="btn-primary block text-center mt-4">Démarrer</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
