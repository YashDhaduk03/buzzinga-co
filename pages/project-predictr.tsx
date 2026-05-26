import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ContactPageSection } from "@/components/sections/ContactSection";
import { ProjectCaseStudySections } from "@/components/sections/ProjectCaseStudySections";

export default function ProjectPredictr() {
  return (
    <>
      <Header />
      <main className="page-animated">
        <ProjectCaseStudySections projectKey="predictr" />
        <ContactPageSection className="!pt-16" />
      </main>
      <Footer />
    </>
  );
}
