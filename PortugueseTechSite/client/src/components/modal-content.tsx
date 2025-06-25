import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "terms" | "privacy";
}

export default function ModalContent({ isOpen, onClose, type }: ModalProps) {
  const content = {
    terms: {
      title: "Termos de Serviço",
      content: (
        <div className="space-y-6 text-text-secondary">
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Aceitação dos Termos</h3>
            <p>Ao utilizar os serviços da Moderniza.pt, aceita estar vinculado aos presentes termos e condições.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Descrição dos Serviços</h3>
            <p>A Moderniza.pt oferece serviços de desenvolvimento web, automatização com IA, chatbots inteligentes e consultoria digital.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Responsabilidades do Cliente</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações precisas e atualizadas</li>
              <li>Cooperar durante o processo de desenvolvimento</li>
              <li>Efetuar pagamentos nas datas acordadas</li>
              <li>Respeitar os direitos de propriedade intelectual</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. Propriedade Intelectual</h3>
            <p>Todo o código e design desenvolvido pela Moderniza.pt permanece propriedade do cliente após o pagamento integral dos serviços.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">5. Limitação de Responsabilidade</h3>
            <p>A Moderniza.pt não se responsabiliza por danos indiretos ou lucros cessantes decorrentes da utilização dos nossos serviços.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">6. Modificações</h3>
            <p>Reservamo-nos o direito de modificar estes termos a qualquer momento, notificando os clientes com antecedência.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">7. Lei Aplicável</h3>
            <p>Estes termos são regidos pela lei portuguesa e qualquer disputa será resolvida nos tribunais de Coimbra.</p>
          </section>
        </div>
      )
    },
    privacy: {
      title: "Política de Privacidade",
      content: (
        <div className="space-y-6 text-text-secondary">
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Recolha de Dados</h3>
            <p>Recolhemos apenas os dados necessários para prestar os nossos serviços, incluindo nome, email, telefone e informações sobre o projeto.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Utilização dos Dados</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comunicação sobre projetos e serviços</li>
              <li>Desenvolvimento e entrega de soluções</li>
              <li>Suporte técnico e assistência</li>
              <li>Melhoramento dos nossos serviços</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Partilha de Dados</h3>
            <p>Não partilhamos os seus dados com terceiros, exceto quando necessário para a prestação dos serviços (ex: integrações técnicas).</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. Segurança</h3>
            <p>Implementamos medidas de segurança adequadas para proteger os seus dados contra acesso não autorizado, alteração ou destruição.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">5. Direitos do Titular</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direito de acesso aos seus dados</li>
              <li>Direito de retificação</li>
              <li>Direito de eliminação</li>
              <li>Direito de portabilidade</li>
              <li>Direito de oposição</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">6. Cookies</h3>
            <p>Utilizamos cookies técnicos essenciais para o funcionamento do website e cookies de análise para melhorar a experiência do utilizador.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">7. Contactos</h3>
            <p>Para questões sobre privacidade, contacte-nos através de ola@moderniza.pt ou +351 937 059 712.</p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">8. Conformidade RGPD</h3>
            <p>Esta política está em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) da União Europeia.</p>
          </section>
        </div>
      )
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto glassmorphism border-border-dark">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {content[type].title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          {content[type].content}
        </div>
        <div className="mt-8 text-sm text-text-secondary">
          <p>Última atualização: 25 de junho de 2025</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}