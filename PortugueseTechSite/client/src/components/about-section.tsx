import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      title: "Experiência Comprovada",
      description: "Mais de 5 anos de experiência em desenvolvimento web e soluções digitais para empresas portuguesas.",
      icon: "🎯"
    },
    {
      title: "Tecnologia Avançada", 
      description: "Utilizamos as mais recentes tecnologias de IA e automatização para maximizar a eficiência dos nossos clientes.",
      icon: "🚀"
    },
    {
      title: "Suporte Dedicado",
      description: "Equipa técnica especializada disponível 24/7 para garantir o funcionamento perfeito das suas soluções.",
      icon: "🛡️"
    },
    {
      title: "Resultados Garantidos",
      description: "Compromisso com resultados mensuráveis e retorno do investimento comprovado em todos os projectos.",
      icon: "📈"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide">
                Sobre a Moderniza.pt
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Transformamos Ideias em 
              <span className="text-neon-green"> Soluções Digitais</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Somos uma empresa portuguesa especializada em desenvolvimento web, automatização com IA e integração de sistemas. 
              A nossa missão é ajudar empresas a modernizar os seus processos e aumentar a produtividade através da tecnologia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-text-secondary">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Modern workspace with digital technology and automation tools" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-accent/10 to-neon-green/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}