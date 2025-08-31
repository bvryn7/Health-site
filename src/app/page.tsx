import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { PatientPortalSection } from "@/components/home/PatientPortalSection";
import { HealthInfoSection } from "@/components/home/HealthInfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PatientPortalSection />
      <HealthInfoSection />
      <Footer />
    </div>
  );
}
