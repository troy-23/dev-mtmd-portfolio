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
import Chatbot from "@/components/Chatbot";
import LoadingScreen from "@/components/LoadingScreen";
import { useLoadingState } from "@/hooks/useLoadingState";
import { AnimationsProvider } from "@/hooks/use-animations";
import { useAnimations } from "@/hooks/use-animations";

const PortfolioContent = () => {
  const { enabled } = useAnimations();
  const { isLoading, isContentReady } = useLoadingState();
  
  return (
    <>
      <LoadingScreen />
      <div className={`min-h-screen bg-background overflow-x-hidden transition-opacity duration-500 ${!isContentReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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
        <Chatbot />
      </div>
    </>
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

