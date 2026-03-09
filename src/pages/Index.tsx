import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import StacksSection from "@/components/StacksSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import SplashCursor from "@/components/SplashCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SplashCursor />
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <StacksSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
