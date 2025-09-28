import EnhancedHero from "@/components/EnhancedHero";
import ElegantAbout from "@/components/ElegantAbout";
import TechLogos from "@/components/TechLogos";
import Experience from "@/components/Experience";
import MeteorCertifications from "@/components/MeteorCertifications";
import SophisticatedProjects from "@/components/SophisticatedProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Fixed Vertical Brand Text */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 z-50 pointer-events-none">
        {/* <div className="text-8xl md:text-9xl lg:text-[12rem] font-display font-bold text-white/5 select-none tracking-wider whitespace-nowrap">
          MATalogics
        </div> */}
      </div>

      <EnhancedHero />
      <ElegantAbout />
      <TechLogos />
      <Experience />
      <MeteorCertifications />
      <SophisticatedProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
