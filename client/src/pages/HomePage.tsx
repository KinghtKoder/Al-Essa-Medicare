import Hero from "../components/Hero";
import DivisionsSection from "../components/DivisionsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <DivisionsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}