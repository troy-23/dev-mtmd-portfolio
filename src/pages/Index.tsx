import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import StacksSection from "@/components/StacksSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { AnimationsProvider } from "@/hooks/use-animations";
import { useAnimations } from "@/hooks/use-animations";

const PortfolioContent = () => {
  const { enabled } = useAnimations();
  return (
    <div className="min-h-screen bg-background">
      {enabled && <SplashCursor />}
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <StacksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

const Index = () => {
  return (
    <AnimationsProvider>
      <PortfolioContent />
    </AnimationsProvider>
  );
};

export default Index;

