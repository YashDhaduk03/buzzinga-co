import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/HomeSections";
import ApproachPageSections from "@/components/sections/ApproachPageSections";

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main>
        <ApproachPageSections />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
