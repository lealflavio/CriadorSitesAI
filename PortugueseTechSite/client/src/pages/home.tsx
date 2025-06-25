import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SolutionsSection from "@/components/solutions-section";
import AISection from "@/components/ai-section";
import PricingSection from "@/components/pricing-section";
import TemplatesSection from "@/components/templates-section";
import ReviewsSection from "@/components/reviews-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  useEffect(() => {
    // Navbar shrink effect on scroll
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add('nav-shrink');
        } else {
          navbar.classList.remove('nav-shrink');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary-dark text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <AISection />
      <PricingSection />
      <TemplatesSection />
      <ReviewsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
