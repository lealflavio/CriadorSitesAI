import { motion } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import ParticleBackground from "./particle-background";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-foreground to-blue-accent bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Modernizamos o seu Negócio
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Soluções digitais inteligentes com IA, automatização de processos e desenvolvimento web de excelência para empresas portuguesas.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection('contacto')}
              className="px-8 py-4 bg-blue-accent text-white rounded-lg font-semibold hover:bg-blue-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Começar Agora
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="px-8 py-4 border-2 border-blue-accent text-blue-accent rounded-lg font-semibold hover:bg-blue-accent hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Saber Mais
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">50+</div>
                <div className="text-sm md:text-base text-text-secondary">Projectos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">100%</div>
                <div className="text-sm md:text-base text-text-secondary">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">24/7</div>
                <div className="text-sm md:text-base text-text-secondary">Suporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-green mb-2">5★</div>
                <div className="text-sm md:text-base text-text-secondary">Avaliação Média</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-text-secondary hover:text-foreground transition-colors"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}