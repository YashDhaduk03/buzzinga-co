import Image from "next/image";
import { ImageBoxSlider } from "@/components/ui/ImageBoxSlider";

const SERVICES = [
  "Project Management",
  "UX Research",
  "User Interface Design",
  "React Native Development",
  "Back-end Development",
];

const DELIVERABLES = ["MeLiSA Mobile App", "MeLiSA Admin Mobile App"];

const DISCOVERY_APPS = [
  {
    title: "MeLiSA App",
    description: "For end-users to request and receive live or scheduled support.",
  },
  {
    title: "Echo Company App",
    description: "For representatives to manage requests, availability, and support sessions.",
  },
];

const APPROACH_ITEMS = [
  {
    title: "Simple",
    description: "One-tap access to help.",
  },
  {
    title: "Consistent",
    description: "Unified interface across roles.",
  },
  {
    title: "Reliable",
    description: "Built for real-time use in high-pressure environments.",
  },
];

const DESIGN_DEVELOPMENT_GROUPS = [
  {
    title: "MeLiSA App (End-users)",
    items: [
      "Quick connection for live audio, video, or chat support",
      "Scheduling and support history tracking",
      "Real-time notifications and FAQs",
    ],
  },
  {
    title: "Echo Company App (Representatives & Admins)",
    items: [
      "Quick connection for live audio, video, or chat support",
      "Scheduling and support history tracking",
      "Real-time notifications and FAQs",
    ],
  },
];

const ROLE_SLIDERS = [
  {
    label: "MeLiSA / End-users",
    images: [
      "echohealthcare-melisa-end-users-1.png",
      "echohealthcare-melisa-end-users-2.png",
      "echohealthcare-melisa-end-users-3.png",
      "echohealthcare-melisa-end-users-4.png",
    ],
  },
  {
    label: "Echo Company / Company Representatives",
    images: [
      "echohealthcare-company-reps-1.png",
      "echohealthcare-company-reps-2.png",
      "echohealthcare-company-reps-3.png",
    ],
  },
  {
    label: "Echo Company / Admin",
    images: [
      "echohealthcare-admin-1.png",
      "echohealthcare-admin-2.png",
      "echohealthcare-admin-3.png",
    ],
  },
];

const OUTCOME_ITEMS = [
  "Response times dropped from minutes to seconds",
  "User satisfaction improved across institutions",
  "Administrative overhead reduced significantly",
];

function EchoHealthcareDivider() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="h-px w-full max-w-[700px] bg-[#262D30]" />
    </section>
  );
}

function EchoHealthcareMediaBox({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full justify-center overflow-hidden rounded-2xl bg-[#EBEBEB] px-12 pb-0 pt-12 ${className}`}
    >
      {children}
    </div>
  );
}

function EchoHealthcareDiagramMedia() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[1152px] flex-col gap-6 min-[810px]:gap-16">
        <EchoHealthcareMediaBox>
          <Image
            src="/buzzinga-assets/images/project-detail/echohealthcare-discovery-approach.png"
            alt=""
            width={2099}
            height={1804}
            unoptimized
            className="block h-auto w-[65.8667vw] max-w-[893px] min-[810px]:w-[69.765625vw]"
          />
        </EchoHealthcareMediaBox>
      </div>
    </section>
  );
}

function BriefInfoCard({
  title,
  items,
  className = "",
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-4 rounded-2xl bg-[#F2F4F7] p-6 ${className}`}
    >
      <p className="m-0 w-full text-[14px] font-semibold leading-[21px] text-[#262D30] min-[810px]:text-[18px] min-[810px]:leading-[25.2px]">
        {title}
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {items.map((item) => (
          <p
            key={item}
            className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30]"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function DiscoveryAppCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-6 min-[810px]:h-[150px]">
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        {description}
      </p>
    </div>
  );
}

function ApproachFeatureCard({
  title,
  description,
  tall = false,
}: {
  title: string;
  description: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6 ${
        tall ? "min-[810px]:h-[150px]" : "min-[810px]:h-[118px]"
      }`}
    >
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        {description}
      </p>
    </div>
  );
}

function EchoHealthcareTwoColumnTextSection({
  title,
  children,
  className = "pt-16",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`flex w-full justify-center px-4 pb-0 min-[810px]:px-16 ${className}`}>
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            {title}
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 pt-0.5 min-[810px]:w-[466px]">
          {children}
        </div>
      </div>
    </section>
  );
}

function EchoHealthcareBulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex w-full list-disc flex-col gap-0 pl-[24.5px] text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
      {items.map((item) => (
        <li key={item} className="pl-0">
          <p className="m-0 text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
}

export function EchoHealthcareHeroSection() {
  return (
    <section className="flex w-full justify-center pb-12 pt-[120px] min-[810px]:pb-0 min-[810px]:pt-[162px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-6 min-[810px]:gap-16">
        <div className="flex w-full flex-col items-start gap-4 rounded-2xl">
          <p className="m-0 w-full text-[18px] text-center font-normal leading-[25.2px] text-[rgba(36,36,36,0.7)] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Echo Healthcare -&gt; MeLiSA
          </p>
          <h1 className="m-0 w-full text-center text-[28px] font-semibold leading-[33.6px] tracking-normal text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
            <span className="block">Enabling efficient medical</span>
            <span className="block">simulation support services</span>
          </h1>
        </div>

        <div className="flex w-full justify-center rounded-[32px] bg-[#EBEBEB] px-12 pb-0 pt-12">
          <Image
            src="/buzzinga-assets/images/project-detail/echohealthcare-hero.png"
            alt=""
            width={1520}
            height={1056}
            priority
            unoptimized
            className="block h-auto w-[clamp(217px,calc(88.04vw-113.15px),929px)]"
          />
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareBriefSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-0 min-[810px]:px-16 min-[810px]:pt-20">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4">
        <h3 className="m-0 w-full text-[20px] font-semibold leading-[26px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
          Brief
        </h3>

        <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
          Echo Healthcare provides advanced medical simulation and education products to leading
          universities and institutions. However, managing simulators required frequent expert
          assistance, which made real-time support difficult.
        </p>

        <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
          Buzzinga Co. partnered with Echo Healthcare to design and develop MeLiSA (Master Level
          Service Agreement), a mobile solution that connects users with simulator experts in under
          a minute, transforming their support operations.
        </p>

        <div className="flex w-full flex-col items-start gap-2 pt-4 min-[810px]:flex-row min-[810px]:pb-4">
          <BriefInfoCard
            title="Services"
            items={SERVICES}
            className="w-full min-[810px]:h-[271px] min-[810px]:w-[370px]"
          />

          <div className="flex w-full flex-col items-center justify-center gap-2 min-[810px]:w-[322px]">
            <BriefInfoCard title="Deliverables" items={DELIVERABLES} className="w-full" />
            <BriefInfoCard
              title="Domain"
              items={["Healthcare and Education Technology"]}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareChallengeDivider() {
  return <EchoHealthcareDivider />;
}

export function EchoHealthcareChallengeSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Challenge
          </p>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-[10px] pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
              The existing web-based system made real-time assistance slow and complex. Users in
              classrooms and labs often needed quick, hands-free help. We needed to create a
              mobile-first solution that offered instant connection to simulator experts through
              audio, video, or chat with minimal steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareDiscoveryApproachMediaSection() {
  return <EchoHealthcareDiagramMedia />;
}

export function EchoHealthcareDiscoverySection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Discovery
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[20px] font-normal leading-[30px] text-[#262D30] min-[810px]:leading-8">
              We conducted workshops with Echo Healthcare&rsquo;s support and sales teams to
              understand user needs and workflows. The research revealed three key user types:
              End-users, Company Representatives, and Admins, each requiring different tools and
              permissions.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              To address this, we proposed two mobile apps:
            </p>
            {DISCOVERY_APPS.map((app) => (
              <DiscoveryAppCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareApproachSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-20 min-[810px]:px-16 min-[810px]:pt-16">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4 min-[810px]:flex-row min-[810px]:gap-6">
        <div className="flex w-auto flex-col justify-center min-[810px]:w-[210px]">
          <p className="m-0 text-[18px] font-semibold leading-[25.2px] text-[#262D30] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            Approach
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-6 pt-0.5 min-[810px]:w-[466px]">
          <div className="flex w-full flex-col justify-center">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              Our process began with detailed user journey mapping and flow diagrams to ensure every
              scenario was covered. We validated low-fidelity wireframes with real users before
              finalizing the visual direction. Every design decision was guided by Echo
              Healthcare&rsquo;s brand and accessibility standards.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2">
            <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
              We focused on making the experience:
            </p>
            {APPROACH_ITEMS.map((item) => (
              <ApproachFeatureCard
                key={item.title}
                {...item}
                tall={item.title === "Reliable"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EchoHealthcareApproachMediaSection() {
  return (
    <ImageBoxSlider
      images={[
        "echohealthcare-approach-carousel-1.png",
        "echohealthcare-approach-carousel-2.png",
      ]}
    />
  );
}

export function EchoHealthcareDesignDevelopmentSection() {
  return (
    <EchoHealthcareTwoColumnTextSection title="Design and Development" className="pt-16">
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        We delivered two synchronized mobile apps with clear role-based functionality.
      </p>

      {DESIGN_DEVELOPMENT_GROUPS.map((group) => (
        <div key={group.title} className="flex w-full flex-col items-start gap-4 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6">
          <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
            {group.title}
          </p>
          <EchoHealthcareBulletList items={group.items} />
        </div>
      ))}
    </EchoHealthcareTwoColumnTextSection>
  );
}

export function EchoHealthcareRoleSlidersSection() {
  return (
    <>
      {ROLE_SLIDERS.map((slider, index) => (
        <ImageBoxSlider
          key={slider.label}
          images={slider.images}
          label={slider.label}
          className={index === 0 ? "pt-16" : "pt-16"}
        />
      ))}
    </>
  );
}

export function EchoHealthcareOutcomeSection() {
  return (
    <EchoHealthcareTwoColumnTextSection title="Outcome" className="pt-16">
      <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
        The new mobile ecosystem transformed how Echo Healthcare&rsquo;s support team operated.
      </p>
      <EchoHealthcareBulletList items={OUTCOME_ITEMS} />
    </EchoHealthcareTwoColumnTextSection>
  );
}
