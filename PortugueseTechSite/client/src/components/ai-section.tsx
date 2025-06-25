import { useState } from "react";
import { motion } from "framer-motion";

export default function AISection() {
  const [activeUseCase, setActiveUseCase] = useState("chatbots");

  const useCases = [
    {
      id: "chatbots",
      title: "Chatbots Inteligentes",
      description: "Atendimento automatizado 24/7 com IA avançada que compreende e responde em português natural.",
      features: [
        "Integração com WhatsApp, Facebook e Website",
        "Processamento de linguagem natural em português",
        "Aprendizagem contínua das interações",
        "Relatórios detalhados de conversas"
      ],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "automation",
      title: "Automatização de Processos",
      description: "Eliminamos tarefas repetitivas e optimizamos workflows com automação inteligente personalizada.",
      features: [
        "Automatização de emails e follow-ups",
        "Processamento automático de documentos",
        "Integração entre sistemas diferentes",
        "Notificações e alertas personalizados"
      ],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    },
    {
      id: "analytics",
      title: "Análise Preditiva",
      description: "Transformamos os seus dados em insights accionáveis com algoritmos de machine learning.",
      features: [
        "Previsão de vendas e tendências",
        "Análise comportamental de clientes",
        "Optimização de inventário",
        "Dashboards interactivos em tempo real"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
    }
  ];

  const activeCase = useCases.find(useCase => useCase.id === activeUseCase);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            IAs em Ação
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Inteligência Artificial que 
            <span className="text-neon-green"> Transforma Negócios</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Descubra como as nossas soluções de IA podem revolucionar a forma como a sua empresa opera.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 bg-card rounded-lg p-2 border border-border shadow-sm max-w-full">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveUseCase(useCase.id)}
                className={`px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap ${
                  activeUseCase === useCase.id
                    ? 'bg-blue-accent text-white shadow-md'
                    : 'text-text-secondary hover:text-foreground hover:bg-accent'
                }`}
              >
                {useCase.title}
              </button>
            ))}
          </div>
        </div>

        {activeCase && (
          <motion.div
            key={activeCase.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {activeCase.title}
              </h3>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="space-y-4">
                {activeCase.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0"></div>
                    <span className="text-text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={activeCase.image}
                alt={activeCase.title}
                className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-accent/10 to-neon-green/10 rounded-xl"></div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}