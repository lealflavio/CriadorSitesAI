import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Mail, Phone, MapPin, Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(9, "Número de telefone inválido"),
  company: z.string().optional(),
  service: z.string().min(1, "Por favor seleccione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contacto consigo em breve.",
      });
      form.reset();
      setSelectedFiles([]);
    },
    onError: () => {
      toast({
        title: "Erro ao Enviar",
        description: "Tente novamente ou contacte-nos directamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactForm) => {
    contactMutation.mutate(data);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
    }
  };

  const services = [
    { value: "website", label: "Desenvolvimento Web" },
    { value: "chatbot", label: "Chatbot com IA" },
    { value: "automation", label: "Automatização de Processos" },
    { value: "integration", label: "Integração de Workflows" },
    { value: "analytics", label: "Análise Preditiva" },
    { value: "consulting", label: "Consultoria Digital" },
  ];

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-4 block">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vamos Modernizar o seu 
            <span className="text-neon-green"> Negócio</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Entre em contacto connosco para uma consulta gratuita e descubra como podemos transformar a sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">Informações de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:geral@moderniza.pt" className="text-text-secondary hover:text-blue-accent transition-colors">
                      geral@moderniza.pt
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neon-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                    <a href="tel:+351937059712" className="text-text-secondary hover:text-neon-green transition-colors">
                      +351 937 059 712
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                    <a 
                      href="https://maps.google.com/?q=Coimbra,+Portugal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-blue-accent transition-colors"
                    >
                      Coimbra, Portugal
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-accent/5 to-neon-green/5 rounded-lg border border-blue-accent/20">
                <h4 className="font-semibold text-foreground mb-2">Consulta Gratuita</h4>
                <p className="text-sm text-text-secondary">
                  Agende uma chamada de 30 minutos para discutir as suas necessidades digitais sem qualquer compromisso.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome *</FormLabel>
                          <FormControl>
                            <Input placeholder="O seu nome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+351 000 000 000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nome da empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço de Interesse *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Descreva o seu projecto ou necessidades..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2">Anexar Documentos (Opcional)</label>
                    <div 
                      className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-blue-accent transition-colors cursor-pointer"
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      <Upload className="w-8 h-8 text-text-secondary mx-auto mb-2" />
                      <p className="text-text-secondary text-sm">Arraste ficheiros aqui ou clique para seleccionar</p>
                      <p className="text-text-secondary text-xs mt-1">PDF, DOC, DOCX, JPEG até 10MB</p>
                      <input 
                        id="file-upload"
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx,.jpeg,.jpg" 
                        multiple 
                        onChange={handleFileUpload}
                      />
                      {selectedFiles.length > 0 && (
                        <div className="mt-2 text-xs text-blue-accent">
                          {selectedFiles.length} ficheiro(s) seleccionado(s)
                        </div>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-accent hover:bg-blue-accent/90 text-white"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? (
                      "A Enviar..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}