import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";
import {
  CapabilitiesSection,
  ContactSection,
  IntroSection,
  ProjectsSection,
  WhyClientsStaySection,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <CapabilitiesSection />
        <ProjectsSection />
        <Testimonials description="Don't just take our word for it. Here's what our clients say about working with us." />
        <WhyClientsStaySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
