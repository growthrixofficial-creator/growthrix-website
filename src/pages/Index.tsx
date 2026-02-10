import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsPartnersSection from "@/components/ClientsPartnersSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LaunchScaleSection from "@/components/LaunchScaleSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ClientsPartnersSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <LaunchScaleSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
