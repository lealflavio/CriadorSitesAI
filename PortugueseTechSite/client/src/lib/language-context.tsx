import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "pt" | "en" | "es" | "fr";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    // Navigation
    inicio: "Início",
    sobre: "Sobre",
    solucoes: "Soluções",
    precos: "Preços",
    templates: "Templates",
    contacto: "Contacto",
    
    // Hero Section
    heroSlogan: "Tecnologia. Eficiência. Inovação.",
    heroDescription: "Transformamos a sua empresa com soluções digitais inteligentes, automatização com IA e websites que convertem.",
    solicitarOrcamento: "Solicitar Orçamento",
    verModelos: "Ver Modelos de Sites",
    
    // About Section
    quemSomos: "Quem Somos",
    aboutDescription1: "Somos uma empresa portuguesa especializada em soluções digitais inovadoras. Combinamos tecnologia de ponta com expertise local para transformar processos empresariais através da automação inteligente e desenvolvimento web de qualidade superior.",
    aboutDescription2: "A nossa missão é democratizar o acesso à tecnologia avançada, oferecendo soluções personalizadas que aumentam a eficiência e competitividade das empresas portuguesas no mercado digital global.",
    digitalCem: "100% Digital",
    personalizacaoTotal: "Personalização Total",
    atendimentoHumanizado: "Atendimento Humanizado",
    
    // Solutions
    nossasSolucoes: "As Nossas Soluções",
    solutionsDescription: "Oferecemos um portfólio completo de serviços digitais para acelerar o crescimento da sua empresa",
    
    // Contact
    solicitarOrcamentoTitle: "Solicite um Orçamento",
    contactDescription: "Pronto para transformar a sua empresa? Fale connosco e receba uma proposta personalizada",
    nome: "Nome",
    email: "Email",
    telefone: "Telefone",
    empresa: "Empresa",
    servicoDesejado: "Serviço Desejado",
    mensagem: "Mensagem",
    enviarPedido: "Enviar Pedido de Orçamento",
    
    // Footer
    footerTagline: "© 2025 Moderniza.pt — Soluções Digitais para um Mundo Inteligente"
  },
  en: {
    // Navigation
    inicio: "Home",
    sobre: "About",
    solucoes: "Solutions",
    precos: "Pricing",
    templates: "Templates",
    contacto: "Contact",
    
    // Hero Section
    heroSlogan: "Technology. Efficiency. Innovation.",
    heroDescription: "We transform your business with intelligent digital solutions, AI automation and converting websites.",
    solicitarOrcamento: "Request Quote",
    verModelos: "View Website Templates",
    
    // About Section
    quemSomos: "Who We Are",
    aboutDescription1: "We are a Portuguese company specialized in innovative digital solutions. We combine cutting-edge technology with local expertise to transform business processes through intelligent automation and superior web development.",
    aboutDescription2: "Our mission is to democratize access to advanced technology, offering personalized solutions that increase efficiency and competitiveness of Portuguese companies in the global digital market.",
    digitalCem: "100% Digital",
    personalizacaoTotal: "Total Customization",
    atendimentoHumanizado: "Humanized Service",
    
    // Solutions
    nossasSolucoes: "Our Solutions",
    solutionsDescription: "We offer a complete portfolio of digital services to accelerate your company's growth",
    
    // Contact
    solicitarOrcamentoTitle: "Request a Quote",
    contactDescription: "Ready to transform your business? Talk to us and receive a personalized proposal",
    nome: "Name",
    email: "Email",
    telefone: "Phone",
    empresa: "Company",
    servicoDesejado: "Desired Service",
    mensagem: "Message",
    enviarPedido: "Send Quote Request",
    
    // Footer
    footerTagline: "© 2025 Moderniza.pt — Digital Solutions for an Intelligent World"
  },
  es: {
    // Navigation
    inicio: "Inicio",
    sobre: "Acerca",
    solucoes: "Soluciones",
    precos: "Precios",
    templates: "Plantillas",
    contacto: "Contacto",
    
    // Hero Section
    heroSlogan: "Tecnología. Eficiencia. Innovación.",
    heroDescription: "Transformamos su empresa con soluciones digitales inteligentes, automatización con IA y sitios web que convierten.",
    solicitarOrcamento: "Solicitar Presupuesto",
    verModelos: "Ver Plantillas de Sitios",
    
    // About Section
    quemSomos: "Quiénes Somos",
    aboutDescription1: "Somos una empresa portuguesa especializada en soluciones digitales innovadoras. Combinamos tecnología de vanguardia con experiencia local para transformar procesos empresariales a través de automatización inteligente y desarrollo web de calidad superior.",
    aboutDescription2: "Nuestra misión es democratizar el acceso a la tecnología avanzada, ofreciendo soluciones personalizadas que aumentan la eficiencia y competitividad de las empresas portuguesas en el mercado digital global.",
    digitalCem: "100% Digital",
    personalizacaoTotal: "Personalización Total",
    atendimentoHumanizado: "Atención Humanizada",
    
    // Solutions
    nossasSolucoes: "Nuestras Soluciones",
    solutionsDescription: "Ofrecemos un portafolio completo de servicios digitales para acelerar el crecimiento de su empresa",
    
    // Contact
    solicitarOrcamentoTitle: "Solicite un Presupuesto",
    contactDescription: "¿Listo para transformar su empresa? Hable con nosotros y reciba una propuesta personalizada",
    nome: "Nombre",
    email: "Email",
    telefone: "Teléfono",
    empresa: "Empresa",
    servicoDesejado: "Servicio Deseado",
    mensagem: "Mensaje",
    enviarPedido: "Enviar Solicitud de Presupuesto",
    
    // Footer
    footerTagline: "© 2025 Moderniza.pt — Soluciones Digitales para un Mundo Inteligente"
  },
  fr: {
    // Navigation
    inicio: "Accueil",
    sobre: "À propos",
    solucoes: "Solutions",
    precos: "Prix",
    templates: "Modèles",
    contacto: "Contact",
    
    // Hero Section
    heroSlogan: "Technologie. Efficacité. Innovation.",
    heroDescription: "Nous transformons votre entreprise avec des solutions numériques intelligentes, l'automatisation IA et des sites web qui convertissent.",
    solicitarOrcamento: "Demander un Devis",
    verModelos: "Voir les Modèles de Sites",
    
    // About Section
    quemSomos: "Qui Nous Sommes",
    aboutDescription1: "Nous sommes une entreprise portugaise spécialisée dans les solutions numériques innovantes. Nous combinons la technologie de pointe avec l'expertise locale pour transformer les processus d'entreprise grâce à l'automatisation intelligente et au développement web de qualité supérieure.",
    aboutDescription2: "Notre mission est de démocratiser l'accès à la technologie avancée, en offrant des solutions personnalisées qui augmentent l'efficacité et la compétitivité des entreprises portugaises sur le marché numérique mondial.",
    digitalCem: "100% Numérique",
    personalizacaoTotal: "Personnalisation Totale",
    atendimentoHumanizado: "Service Humanisé",
    
    // Solutions
    nossasSolucoes: "Nos Solutions",
    solutionsDescription: "Nous offrons un portefeuille complet de services numériques pour accélérer la croissance de votre entreprise",
    
    // Contact
    solicitarOrcamentoTitle: "Demandez un Devis",
    contactDescription: "Prêt à transformer votre entreprise? Parlez-nous et recevez une proposition personnalisée",
    nome: "Nom",
    email: "Email",
    telefone: "Téléphone",
    empresa: "Entreprise",
    servicoDesejado: "Service Désiré",
    mensagem: "Message",
    enviarPedido: "Envoyer la Demande de Devis",
    
    // Footer
    footerTagline: "© 2025 Moderniza.pt — Solutions Numériques pour un Monde Intelligent"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("moderniza-language") as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("moderniza-language", lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key as keyof typeof translations.pt] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}