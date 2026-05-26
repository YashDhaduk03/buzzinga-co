import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ContactPageSection } from "@/components/sections/ContactSection";
import {
  JabfabApproachSection,
  JabfabApproachMediaSection,
  JabfabBriefSection,
  JabfabChallengeDivider,
  JabfabChallengeSection,
  JabfabDiscoverySection,
  JabfabHeroSection,
  JabfabOutcomeMediaSection,
  JabfabOutcomeSection,
  JabfabUxArchitectureSection,
  JabfabUxMediaSection,
  JabfabVisualDesignSection,
} from "@/components/sections/ProjectJabfabSections";

export default function ProjectJabfab() {
  return (
    <>
      <Header />
      <main className="page-animated">
        <JabfabHeroSection />
        <JabfabBriefSection />
        <JabfabChallengeDivider />
        <JabfabChallengeSection />
        <JabfabDiscoverySection />
        <JabfabApproachMediaSection />
        <JabfabApproachSection />
        <JabfabUxMediaSection />
        <JabfabUxArchitectureSection />
        <JabfabVisualDesignSection />
        <JabfabOutcomeMediaSection />
        <JabfabOutcomeSection />
        <ContactPageSection className="!pt-16" />
      </main>
      <Footer />
    </>
  );
}
