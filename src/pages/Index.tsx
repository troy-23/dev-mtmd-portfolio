import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import StacksSection from "@/components/StacksSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";
import { AnimationsProvider } from "@/hooks/use-animations";
import { useAnimations } from "@/hooks/use-animations";

const PortfolioContent = () => {
  const { enabled } = useAnimations();
  return (
    <div className="min-h-screen bg-background">
      {enabled && <SplashCursor />}
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <StacksSection />
      <AboutSection />
      <Footer />
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

