import { motion } from "framer-motion";
import { Code, Bot, Workflow, Database, BarChart3, Users } from "lucide-react";

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Websites modernos, responsivos e optimizados para conversão, desenvolvidos com as mais recentes tecnologias web.",
      features: ["React & Next.js", "Design Responsivo", "SEO Optimizado", "Performance Elevada"]
    },
    {
      icon: Bot,
      title: "Chatbots com IA",
      description: "Assistentes virtuais inteligentes que automatizam o atendimento ao cliente 24/7 em português natural.",
      features: ["Processamento Natural", "Integração WhatsApp", "Aprendizagem Contínua", "Análise de Sentimentos"]
    },
    {
      icon: Workflow,
      title: "Automatização de Processos",
      description: "Eliminamos tarefas manuais repetitivas através de workflows automatizados personalizados.",
      features: ["Email Marketing", "Gestão de Leads", "Processamento de Docs", "Notificações Automáticas"]
    },
    {
      icon: Database,
      title: "Integração de Workflows",
      description: "Conectamos diferentes sistemas e plataformas para criar fluxos de trabalho seamless e eficientes.",
      features: ["APIs Personalizadas", "Sincronização de Dados", "Conectores Nativos", "Monitorização 24/7"]
    },
    {
      icon: BarChart3,
      title: "Análise Preditiva",
      description: "Transformamos dados em insights accionáveis com machine learning e algoritmos avançados.",
      features: ["Previsão de Vendas", "Análise de Comportamento", "Dashboards Interactivos", "Relatórios Automáticos"]
    },
    {
      icon: Users,
      title: "Consultoria Digital",
      description: "Estratégia digital completa para transformar o seu negócio e optimizar todos os processos empresariais.",
      features: ["Auditoria Digital", "Plano de Transformação", "Formação de Equipas", "Suporte Contínuo"]
    }
  ];

  return (
    <section id="solucoes" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            As Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tecnologia que 
            <span className="text-neon-green"> Impulsiona Resultados</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Oferecemos soluções digitais completas que transformam a forma como as empresas operam e crescem no mercado digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-accent/10 to-neon-green/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-accent" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-8 bg-card border border-border rounded-lg px-8 py-6 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-accent mb-1">100%</div>
              <div className="text-xs text-text-secondary">Soluções Personalizadas</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green mb-1">24/7</div>
              <div className="text-xs text-text-secondary">Suporte Técnico</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-accent mb-1">30 dias</div>
              <div className="text-xs text-text-secondary">Garantia Total</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}