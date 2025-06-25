import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function TemplatesSection() {
  const templates = [
    {
      title: "RestauranteModerno",
      category: "Restauração",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Template elegante para restaurantes com menu digital e sistema de reservas integrado.",
      features: ["Menu Digital", "Reservas Online", "Galeria de Pratos"],
      rating: 4.9,
      downloads: "2.3k"
    },
    {
      title: "ClinicaVital",
      category: "Saúde",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Solução completa para clínicas médicas com agendamento e gestão de pacientes.",
      features: ["Agendamento Online", "Portal do Paciente", "Teleconsultas"],
      rating: 4.8,
      downloads: "1.8k"
    },
    {
      title: "TechStartup",
      category: "Tecnologia",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Website moderno para startups tecnológicas com foco em conversão e captação de leads.",
      features: ["Landing Page", "Blog Integrado", "Analytics Avançado"],
      rating: 4.9,
      downloads: "3.1k"
    },
    {
      title: "EcommerceMax",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Loja online completa com pagamentos integrados e gestão de inventário.",
      features: ["Carrinho de Compras", "Pagamentos Seguros", "Dashboard Admin"],
      rating: 4.7,
      downloads: "2.9k"
    },
    {
      title: "ImobiliariaPlus",
      category: "Imobiliário",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "Plataforma para agências imobiliárias com pesquisa avançada e tours virtuais.",
      features: ["Pesquisa Avançada", "Tours Virtuais", "CRM Integrado"],
      rating: 4.8,
      downloads: "1.5k"
    },
    {
      title: "FitnessFlow",
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      description: "App web para ginásios com agendamento de aulas e tracking de progresso.",
      features: ["Agendamento de Aulas", "Tracking de Progresso", "App Mobile"],
      rating: 4.6,
      downloads: "1.2k"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
    ));
  };

  return (
    <section id="templates" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            Templates Profissionais
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Acelere o seu 
            <span className="text-neon-green"> Projecto Digital</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Templates prontos a usar, desenvolvidos pela nossa equipa e testados em projetos reais. Personalizamos cada um às suas necessidades.
          </p>
        </motion.div>

        <div className="relative">
          <div 
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {templates.map((template, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-accent text-white text-xs px-3 py-1 rounded-full font-medium">
                      {template.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{template.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {template.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-neon-green rounded-full flex-shrink-0"></div>
                        <span className="text-text-secondary text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <div className="flex">{renderStars(template.rating)}</div>
                      <span className="text-sm text-text-secondary">({template.downloads})</span>
                    </div>
                    <button className="flex items-center space-x-2 text-blue-accent hover:text-blue-accent/80 transition-colors">
                      <span className="text-sm font-medium">Ver Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Não encontrou o template ideal?
            </h3>
            <p className="text-text-secondary mb-6">
              Criamos templates personalizados do zero, adaptados exactamente às suas necessidades e identidade visual.
            </p>
            <button className="bg-gradient-to-r from-blue-accent to-neon-green text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Solicitar Template Personalizado
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}