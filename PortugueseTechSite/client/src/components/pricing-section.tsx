import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

export default function PricingSection() {
  const plans = [
    {
      name: "Essencial",
      price: "299€",
      period: "/mês",
      description: "Perfeito para pequenas empresas que começam a digitalizar-se",
      features: [
        "Website responsivo (até 5 páginas)",
        "Formulário de contacto básico",
        "Integração Google Analytics",
        "SSL e hosting incluído",
        "Suporte por email",
        "Manutenção básica mensal"
      ],
      popular: false,
      cta: "Começar Agora"
    },
    {
      name: "Profissional",
      price: "599€",
      period: "/mês",
      description: "Ideal para empresas em crescimento que precisam de automatização",
      features: [
        "Website completo (até 15 páginas)",
        "Chatbot com IA básico",
        "Automatização de emails",
        "Integração CRM",
        "Dashboard de analytics",
        "Suporte prioritário",
        "2 horas de consultoria mensal",
        "Backup diário automático"
      ],
      popular: true,
      cta: "Plano Recomendado"
    },
    {
      name: "Enterprise",
      price: "1299€",
      period: "/mês",
      description: "Solução completa para empresas que querem liderança digital",
      features: [
        "Plataforma web personalizada",
        "IA avançada e machine learning",
        "Automatização completa de processos",
        "Integrações ilimitadas",
        "Dashboard executivo em tempo real",
        "Suporte 24/7 dedicado",
        "Consultoria estratégica semanal",
        "Garantia de uptime 99.9%"
      ],
      popular: false,
      cta: "Contactar Equipa"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            Preços Transparentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Investimento que 
            <span className="text-neon-green"> Gera Resultados</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Escolha o plano ideal para o seu negócio. Todos incluem configuração gratuita e primeira consulta sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                plan.popular 
                  ? 'border-blue-accent shadow-lg scale-105' 
                  : 'border-border'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-accent to-neon-green text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-text-secondary text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-text-secondary ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-neon-green flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-blue-accent hover:bg-blue-accent/90 text-white'
                    : 'bg-transparent border-2 border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white'
                }`}
                onClick={() => scrollToSection('contacto')}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-text-secondary mb-6">
              Desenvolvemos soluções sob medida para empresas com necessidades específicas. 
              Contacte-nos para um orçamento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                className="border-blue-accent text-blue-accent hover:bg-blue-accent hover:text-white"
                onClick={() => scrollToSection('contacto')}
              >
                Orçamento Personalizado
              </Button>
              <Button
                className="bg-neon-green hover:bg-neon-green/90 text-white"
                onClick={() => window.open('https://wa.me/351937059712', '_blank')}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}