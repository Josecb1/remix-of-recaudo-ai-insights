import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import CompetitiveAdvantages from "@/components/CompetitiveAdvantages";
import DashboardSection from "@/components/DashboardSection";
import PilotSection from "@/components/PilotSection";
import RoadmapSection from "@/components/RoadmapSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ResultsSection />
        <CompetitiveAdvantages />
        <DashboardSection />
        <ProblemSection />
        <PilotSection />
        <RoadmapSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
