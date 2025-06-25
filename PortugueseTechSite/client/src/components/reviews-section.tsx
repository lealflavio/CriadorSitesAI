import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Maria Silva",
      company: "TechLisboa",
      role: "CEO",
      rating: 5,
      text: "A Moderniza.pt transformou completamente o nosso processo de atendimento ao cliente. O chatbot com IA reduziu 80% das consultas manuais.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "João Costa",
      company: "InnovaPorto",
      role: "Director de TI",
      rating: 5,
      text: "Excelente trabalho na automatização dos nossos workflows. Poupamos 15 horas semanais em tarefas repetitivas.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ana Rodrigues",
      company: "DigitalCoimbra",
      role: "Gestora de Projetos",
      rating: 5,
      text: "O website desenvolvido pela equipa superou todas as expectativas. Design moderno e funcionalidades incríveis.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Pedro Santos",
      company: "SmartBraga",
      role: "Fundador",
      rating: 5,
      text: "Profissionalismo exemplar e resultados comprovados. Recomendo vivamente os serviços da Moderniza.pt.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Carla Mendes",
      company: "FutureAveiro",
      role: "COO",
      rating: 5,
      text: "A integração de sistemas foi perfeita. Agora todos os nossos dados fluem automaticamente entre plataformas.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Ricardo Ferreira",
      company: "NextGenFaro",
      role: "CTO",
      rating: 5,
      text: "Suporte técnico excepcional e soluções que realmente funcionam. Parceria de longo prazo garantida.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            Testemunhos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que dizem os nossos 
            <span className="text-neon-green"> Clientes</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Histórias reais de empresas que transformaram os seus negócios connosco.
          </p>
        </motion.div>

        <Carousel 
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="bg-card border border-border rounded-xl p-6 h-full shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-text-secondary">{review.role}</p>
                      <p className="text-xs text-blue-accent font-medium">{review.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(review.rating)}
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed text-sm">
                    "{review.text}"
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-8 bg-card border border-border rounded-lg px-8 py-4 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green">5.0</div>
              <div className="flex justify-center mb-1">
                {renderStars(5)}
              </div>
              <div className="text-xs text-text-secondary">Avaliação Média</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-accent">50+</div>
              <div className="text-xs text-text-secondary">Clientes Satisfeitos</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-green">100%</div>
              <div className="text-xs text-text-secondary">Taxa de Sucesso</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}