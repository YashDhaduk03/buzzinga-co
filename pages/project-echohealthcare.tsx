import Header from "@/components/layout/Header";
import {
  EchoHealthcareApproachSection,
  EchoHealthcareBriefSection,
  EchoHealthcareChallengeSection,
  EchoHealthcareDiscoverySection,
  EchoHealthcareHeroSection,
} from "@/components/sections/ProjectEchoHealthcareSections";

export default function ProjectEchoHealthcare() {
  return (
    <>
      <Header />
      <main>
        <EchoHealthcareHeroSection />
        <EchoHealthcareBriefSection />
        <EchoHealthcareChallengeSection />
        <EchoHealthcareDiscoverySection />
        <EchoHealthcareApproachSection />
      </main>
    </>
  );
}
