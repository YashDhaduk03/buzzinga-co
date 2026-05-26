import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ContactPageSection } from "@/components/sections/ContactSection";
import { ProjectCaseStudySections } from "@/components/sections/ProjectCaseStudySections";

export default function Project911Switch() {
  return (
    <>
      <Header />
      <main className="page-animated">
        <ProjectCaseStudySections projectKey="911switch" />
        <ContactPageSection className="!pt-16" />
      </main>
      <Footer />
    </>
  );
}
