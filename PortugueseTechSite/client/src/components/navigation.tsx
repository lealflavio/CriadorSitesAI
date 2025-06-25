import { useState } from "react";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "@/lib/theme-context";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className="fixed top-0 w-full z-50 transition-all duration-300 bg-primary-dark/80 backdrop-blur-md border-b border-border-dark">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            Moderniza<span className="text-neon-green">.pt</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('inicio')} className="text-text-secondary hover:text-foreground transition-colors">
              Início
            </button>
            <button onClick={() => handleNavClick('sobre')} className="text-text-secondary hover:text-foreground transition-colors">
              Sobre
            </button>
            <button onClick={() => handleNavClick('solucoes')} className="text-text-secondary hover:text-foreground transition-colors">
              Soluções
            </button>
            <button onClick={() => handleNavClick('precos')} className="text-text-secondary hover:text-foreground transition-colors">
              Preços
            </button>
            <button onClick={() => handleNavClick('templates')} className="text-text-secondary hover:text-foreground transition-colors">
              Templates
            </button>
            <button onClick={() => handleNavClick('contacto')} className="text-text-secondary hover:text-foreground transition-colors">
              Contacto
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-text-secondary hover:text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-text-secondary hover:text-foreground" />
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-text-secondary" />
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-text-secondary" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border-dark">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => handleNavClick('inicio')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Início
              </button>
              <button onClick={() => handleNavClick('sobre')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Sobre
              </button>
              <button onClick={() => handleNavClick('solucoes')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Soluções
              </button>
              <button onClick={() => handleNavClick('precos')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Preços
              </button>
              <button onClick={() => handleNavClick('templates')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Templates
              </button>
              <button onClick={() => handleNavClick('contacto')} className="text-left text-text-secondary hover:text-foreground transition-colors">
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}