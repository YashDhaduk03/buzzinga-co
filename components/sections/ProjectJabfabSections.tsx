import Image from "next/image";
import { ImageBoxSlider } from "@/components/ui/ImageBoxSlider";

const SERVICES = [
  "UX Research",
  "UX/UI Redesign",
  "Design system",
  "Visual Design",
  "AI Experience Strategy",
  "Full Stack Development",
  "Project Management",
  "Email Designs",
];

const DELIVERABLES = ["Web Application", "Ongoing Support"];

const DOMAINS = ["Enterprise SaaS", "Feedback & Engagement Platforms"];

const CHALLENGE_ITEMS = [
  "The UX was fragmented",
  "Operational data existed, but it wasn&rsquo;t being surfaced in a useful, actionable way",
  "The existing technology stack slowed down development and limited scalability",
  "New use cases and customization requests were difficult to implement",
  "The platform needed a stronger foundation to support AI-driven insights in the future",
];

const DISCOVERY_ITEMS = [
  "Too many steps to initiate feedback",
  "Lack of clarity in user roles and permissions",
  "Opportunities to automate repetitive tasks",
  "Valuable insights were captured but not surfaced clearly",
  "Different industries needed variations of the same features",
];

const APPROACH_LAYERS = [
  {
    title: "Real-Time Mode",
    description:
      "Instant feedback from QR codes, or short links at service points. When something goes wrong, teams get live alerts, can respond immediately, and recognize great service moments on the spot.",
  },
  {
    title: "Reflective Mode",
    description:
      "Post-experience MicroSurveys sent to customers, patients, or staff via email. These uncover patterns and help leadership teams see where to invest in process, training, or communication.",
  },
  {
    title: "RTLX Framework",
    description:
      "JabFab&rsquo;s AI tagging system (RTLX-A, L, X, and R) gives structure to every piece of feedback defining who, where, what, and why. It turns raw data into AI-interpretable context that can be searched, filtered, and explained naturally.",
  },
  {
    title: "Audience Map",
    description:
      "A unified data model that connects all feedback across sites, teams, and projects &mdash; without creating silos. It&rsquo;s flexible, attribute-driven, and scalable from one facility to an entire enterprise.",
  },
];

const UX_ITEMS = [
  "Frontline users receive alerts and respond to live service gaps.",
  "Managers review reflective dashboards and identify systemic issues.",
  "AI copilots summarize trends and recommend next steps.",
];

const VISUAL_ITEMS = [
  "Dual Dashboard Layout: one view for real-time signals, another for reflective analysis.",
  "AI Insight Cards: short, explainable summaries that reveal the &ldquo;why&rdquo; behind patterns.",
  "Dynamic Filters: simple controls powered by attributes like Region, Role, or Department.",
  "Recognition Stream: positive feedback flows that highlight great performance instantly.",
];

const OUTCOME_ITEMS = [
  "Onboard clients more efficiently",
  "Customise features for different industries",
  "Deploy updates faster",
  "Support AI-driven insights in future releases",
];

function JabfabDivider() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="h-px w-full max-w-[700px] bg-[#262D30]" />
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
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6">
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <p
        className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}

function JabfabTwoColumnTextSection({
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

function JabfabParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
      {children}
    </p>
  );
}

function JabfabRichParagraph({ html }: { html: string }) {
  return (
    <p
      className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function JabfabBulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex w-full list-disc flex-col gap-0 pl-[24.5px] text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
      {items.map((item) => (
        <li key={item} className="pl-0">
          <p
            className="m-0 text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        </li>
      ))}
    </ul>
  );
}

function JabfabImageGrid({
  images,
  className = "pt-16",
}: {
  images: { src: string; width: number; height: number; wide?: boolean }[];
  className?: string;
}) {
  return (
    <section className={`flex w-full justify-center px-4 min-[810px]:px-16 ${className}`}>
      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-2 min-[810px]:gap-4">
        {images.map((image) => (
          <div key={image.src} className={image.wide ? "col-span-2" : "col-span-1"}>
            <Image
              src={`/buzzinga-assets/images/project-detail/${image.src}`}
              alt=""
              width={image.width}
              height={image.height}
              unoptimized
              sizes={image.wide ? "(min-width: 1200px) 1200px, calc(100vw - 32px)" : "(min-width: 1200px) 592px, calc((100vw - 40px) / 2)"}
              className={`block w-full object-cover ${
                image.wide
                  ? "aspect-[1200/672] h-auto"
                  : "aspect-[168/202] h-[202px] min-[810px]:aspect-[592/669] min-[810px]:h-auto"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export function JabfabHeroSection() {
  return (
    <section className="flex w-full justify-center pb-12 pt-[120px] min-[810px]:pb-0 min-[810px]:pt-[162px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-6 min-[810px]:gap-16">
        <div className="flex w-full flex-col items-start gap-4 rounded-2xl px-4 min-[810px]:px-0">
          <p className="m-0 w-full text-center text-[18px] font-normal leading-[25.2px] text-[rgba(36,36,36,0.7)] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
            JabFab
          </p>
          <h1 className="m-0 w-full text-center text-[28px] font-semibold leading-[33.6px] tracking-normal text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
            <span className="block">Real-Time and Reflective Experience</span>
            <span className="block">Optimization Platform</span>
          </h1>
        </div>

        <div className="mx-4 flex w-[calc(100%-32px)] justify-center overflow-hidden rounded-2xl bg-[#F2F4F7] min-[810px]:mx-0 min-[810px]:w-full min-[810px]:rounded-[32px]">
          <Image
            src="/buzzinga-assets/images/project-detail/jabfab-hero.png"
            alt=""
            width={3600}
            height={2486}
            priority
            unoptimized
            className="block h-auto w-[326px] rounded-xl min-[810px]:w-[clamp(940px,70.4167vw,1014px)]"
          />
        </div>
      </div>
    </section>
  );
}

export function JabfabBriefSection() {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-0 min-[810px]:px-16 min-[810px]:pt-20">
      <div className="flex w-full max-w-[700px] flex-col items-start gap-4">
        <h3 className="m-0 w-full text-[20px] font-semibold leading-[26px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
          Brief
        </h3>

        <JabfabParagraph>
          JabFab is a Real-Time Service Optimization platform that helps service-driven
          organizations improve on-site operations through structured live feedback. The platform
          enables teams to capture, analyze, and act on feedback from customers, employees, and
          third parties while they are still present turning service delivery from reactive to
          proactive.
        </JabfabParagraph>

        <JabfabParagraph>
          Buzzinga Co. partnered with JabFab to modernize and evolve the entire platform. We took
          complete responsibility for rethinking the user experience, rebuilding core application
          flows, and upgrading their technology stack to support long-term scalability. Our role
          includes ongoing product development as we continue to design, optimize, and build new
          features for the platform.
        </JabfabParagraph>

        <div className="flex w-full flex-col items-start gap-2 pt-4 min-[810px]:flex-row min-[810px]:pb-4">
          <BriefInfoCard
            title="Services"
            items={SERVICES}
            className="w-full min-[810px]:w-[370px]"
          />

          <div className="flex w-full flex-col items-center justify-center gap-2 min-[810px]:w-[322px]">
            <BriefInfoCard title="Deliverables" items={DELIVERABLES} className="w-full" />
            <BriefInfoCard title="Domain" items={DOMAINS} className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function JabfabChallengeDivider() {
  return <JabfabDivider />;
}

export function JabfabChallengeSection() {
  return (
    <JabfabTwoColumnTextSection title="Challenge" className="pt-16">
      <JabfabParagraph>The previous version of the platform was functional but limited.</JabfabParagraph>
      <JabfabParagraph>
        It had outdated technology, fragmented user flows, and limited scalability. As new use cases
        emerged, adding features became difficult and the experience felt inconsistent across
        industries and teams.
      </JabfabParagraph>
      <JabfabBulletList items={CHALLENGE_ITEMS} />
      <JabfabParagraph>
        JabFab needed a stronger foundation. The UX had to be simplified, the tech stack needed
        modernization, and the system required flexibility to support future AI-driven features.
      </JabfabParagraph>
    </JabfabTwoColumnTextSection>
  );
}

export function JabfabDiscoverySection() {
  return (
    <JabfabTwoColumnTextSection title="Discovery" className="pt-16">
      <JabfabParagraph>
        We began by mapping out the entire operational flow, from frontline staff and service points
        to admins and decision-makers. Through workshops and interviews with JabFab&rsquo;s team, we
        identified how feedback is captured, prioritised, reviewed, and acted upon across different
        environments like hospitals, hotels, and retail spaces.
      </JabfabParagraph>
      <JabfabParagraph>
        This helped us define key user types, friction points, and improvement areas:
      </JabfabParagraph>
      <JabfabBulletList items={DISCOVERY_ITEMS} />
      <div className="flex w-full flex-col items-start gap-4 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6">
        <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
          Our insight
        </p>
        <JabfabParagraph>
          We translated these learnings into simplified user journeys, cleaner data pathways, and a
          feature roadmap designed for future scalability.
        </JabfabParagraph>
        <JabfabParagraph>
          The result was a clear blueprint of how JabFab should work, not just how it currently
          worked, and that became the foundation for the redesign and rebuild.
        </JabfabParagraph>
      </div>
    </JabfabTwoColumnTextSection>
  );
}

export function JabfabApproachSection() {
  return (
    <JabfabTwoColumnTextSection title="Approach" className="pt-16">
        <JabfabParagraph>
          We designed JabFab as a Real-Time Service Optimization (RSO) platform with an integrated
          AI foundation.
        </JabfabParagraph>
        <JabfabRichParagraph html="It combines instant frontline feedback with structured reflective analytics &mdash; two halves of one loop: action and understanding." />
        <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
          Core layers of the solution:
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          {APPROACH_LAYERS.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </JabfabTwoColumnTextSection>
  );
}

export function JabfabApproachMediaSection() {
  return (
    <ImageBoxSlider
      images={[
        "jabfab-approach-carousel-1.png",
        "jabfab-approach-carousel-2.png",
        "jabfab-approach-carousel-3.png",
      ]}
      className="pt-16"
      containerClassName="max-w-[1200px]"
    />
  );
}

export function JabfabUxArchitectureSection() {
  return (
    <JabfabTwoColumnTextSection title="UX Architecture & System Design" className="pt-16">
        <JabfabParagraph>
          We designed JabFab&rsquo;s architecture around a single idea one platform, two modes.
        </JabfabParagraph>
        <JabfabParagraph>
          In Real-Time Mode, the interface centers on service points and alerts.
        </JabfabParagraph>
        <JabfabParagraph>
          In Reflective Mode, it switches to audience-based analytics and trend summaries.
        </JabfabParagraph>
        <JabfabParagraph>
          Both draw from the same Audience Map and RTLX model, ensuring total consistency between
          moment-level actions and organizational learning.
        </JabfabParagraph>
        <JabfabParagraph>We created detailed interaction frameworks for each use case:</JabfabParagraph>
        <JabfabBulletList items={UX_ITEMS} />
        <JabfabParagraph>
          This multi-layered UX system unified operations, analytics, and AI into a single,
          intuitive experience.
        </JabfabParagraph>
      </JabfabTwoColumnTextSection>
  );
}

export function JabfabUxMediaSection() {
  return (
    <JabfabImageGrid
      images={[
        { src: "jabfab-ux-1.png", width: 1764, height: 2037 },
        { src: "jabfab-ux-2.png", width: 1764, height: 2037 },
        { src: "jabfab-ux-wide.png", width: 3603, height: 2037, wide: true },
      ]}
      className="pt-16"
    />
  );
}

export function JabfabVisualDesignSection() {
  return (
    <JabfabTwoColumnTextSection title="Visual Design & Prototype" className="pt-16">
      <JabfabParagraph>
        The visual approach focused on clarity, hierarchy, and calm confidence. We designed an
        interface that feels as intuitive for a nurse as it does for a regional operations leader.
      </JabfabParagraph>
      <JabfabParagraph>Key components included:</JabfabParagraph>
      <JabfabBulletList items={VISUAL_ITEMS} />
      <JabfabParagraph>
        A high-fidelity prototype connected to simulated data validated the usability and flow
        across different user types.
      </JabfabParagraph>
    </JabfabTwoColumnTextSection>
  );
}

export function JabfabOutcomeSection() {
  return (
    <JabfabTwoColumnTextSection title="Outcome" className="pt-16">
        <JabfabParagraph>
          The new JabFab platform is faster, clearer, and more scalable, built to grow across
          industries and support real-time decision-making. User flows are now simpler, setup
          requires fewer steps, and data is surfaced in a way that helps teams take immediate action
          on the ground.
        </JabfabParagraph>
        <JabfabParagraph>With the updated technology stack and redesigned experience, JabFab can now:</JabfabParagraph>
        <JabfabBulletList items={OUTCOME_ITEMS} />
        <JabfabParagraph>
          It went from a functional product to a platform built for long-term evolution. And we
          continue to support JabFab with ongoing design and development as they expand their reach.
        </JabfabParagraph>
      </JabfabTwoColumnTextSection>
  );
}

export function JabfabOutcomeMediaSection() {
  return (
    <JabfabImageGrid
      images={[
        { src: "jabfab-outcome-1.png", width: 1764, height: 2037 },
        { src: "jabfab-outcome-2.png", width: 1764, height: 2037 },
      ]}
      className="pt-16"
    />
  );
}
