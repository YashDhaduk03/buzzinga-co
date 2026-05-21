import Header from "@/components/layout/Header";
import { ContactPageSection } from "@/components/sections/ContactSection";
import {
  EchoHealthcareApproachSection,
  EchoHealthcareApproachMediaSection,
  EchoHealthcareBriefSection,
  EchoHealthcareChallengeSection,
  EchoHealthcareChallengeDivider,
  EchoHealthcareDiscoverySection,
  EchoHealthcareDiscoveryApproachMediaSection,
  EchoHealthcareDesignDevelopmentSection,
  EchoHealthcareHeroSection,
  EchoHealthcareOutcomeSection,
  EchoHealthcareRoleSlidersSection,
} from "@/components/sections/ProjectEchoHealthcareSections";

export default function ProjectEchoHealthcare() {
  return (
    <>
      <Header />
      <main>
        <EchoHealthcareHeroSection />
        <EchoHealthcareBriefSection />
        <EchoHealthcareChallengeDivider />
        <EchoHealthcareChallengeSection />
        <EchoHealthcareDiscoverySection />
        <EchoHealthcareDiscoveryApproachMediaSection />
        <EchoHealthcareApproachSection />
        <EchoHealthcareApproachMediaSection />
        <EchoHealthcareDesignDevelopmentSection />
        <EchoHealthcareRoleSlidersSection />
        <EchoHealthcareOutcomeSection />
        <ContactPageSection className="!pt-16" />
      </main>
    </>
  );
}
