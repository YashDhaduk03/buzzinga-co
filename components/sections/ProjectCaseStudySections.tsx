import Image from "next/image";
import { ImageBoxSlider } from "@/components/ui/ImageBoxSlider";

type BriefGroup = {
  title: string;
  items: string[];
};

type CardItem = {
  title: string;
  description: string;
};

type ImageItem = {
  src: string;
  width: number;
  height: number;
  wide?: boolean;
};

type ProjectCaseStudy = {
  eyebrow: string;
  titleLines: string[];
  heroImage: ImageItem;
  heroImageClassName: string;
  heroImageBoxClassName?: string;
  brief: {
    paragraphs: string[];
    groups: BriefGroup[];
  };
  sections: {
    title: string;
    content: Array<
      | { type: "paragraph"; text: string }
      | { type: "bullets"; items: string[] }
      | { type: "cards"; items: CardItem[] }
    >;
  }[];
  media: Array<
    | { after: string; type: "wide"; image: ImageItem }
    | { after: string; type: "slider"; images: string[] }
    | { after: string; type: "grid"; images: ImageItem[] }
  >;
};

const PROJECTS: Record<"911switch" | "predictr", ProjectCaseStudy> = {
  "911switch": {
    eyebrow: "911Switch -> Emergency Response App Redesign",
    titleLines: ["Enabling clearer visibility and", "rapid emergency assistance"],
    heroImage: { src: "911switch-hero.png", width: 2598, height: 1803 },
    heroImageClassName: "h-[208px] w-auto max-w-none min-[810px]:h-auto min-[810px]:w-[clamp(574px,69.6vw,1007px)]",
    heroImageBoxClassName: "!bg-[linear-gradient(rgb(175,0,0)_0%,rgb(128,0,0)_100%)] px-12 pt-12",
    brief: {
      paragraphs: [
        "911Switch is an emergency-response product ecosystem designed to help first responders quickly identify the location of a distress call. When a user triggers an SOS through the 911Switch App, the attached exterior home lighting turns into a flashing beacon, helping responders locate the site instantly.",
        "The product suite includes the 911Switch device, Remote FOB, Hub, and mobile app. The goal was to redesign the existing mobile experience to make it more intuitive, accessible, and senior-friendly while maintaining the existing flow structure.",
      ],
      groups: [
        {
          title: "Services",
          items: [
            "UX Research",
            "UX/UI Redesign",
            "Interaction Design",
            "Visual Design",
            "Design Exploration & Prototyping",
          ],
        },
        { title: "Deliverables", items: ["911Switch Mobile App Redesign"] },
        { title: "Domain", items: ["Consumer Technology"] },
      ],
    },
    sections: [
      {
        title: "Challenge",
        content: [
          {
            type: "paragraph",
            text: "Understanding the complete 911Switch ecosystem was initially challenging. While the website offered substantial information, the mobile app lacked clarity, modern design direction, and visual hierarchy. The existing UI appeared outdated and was confusing for its primary user base -> senior citizens and individuals living alone.",
          },
          {
            type: "paragraph",
            text: "The goal was to redesign the interface without altering the user flow, ensuring accessibility, clarity, and seriousness appropriate for an emergency product.",
          },
        ],
      },
      {
        title: "Discovery",
        content: [
          {
            type: "paragraph",
            text: "Based on documentation and client input, 911Switch consists of four interconnected products:",
          },
          {
            type: "bullets",
            items: [
              "911Switch physical device",
              "911Switch Remote FOB",
              "911Switch Hub",
              "911Switch Mobile App",
            ],
          },
          { type: "paragraph", text: "How they interact:" },
          {
            type: "bullets",
            items: [
              "Remote FOB pairs with the physical switch",
              "App connects to the switch via the Hub",
              "Users can trigger SOS remotely via FOB or App",
              "Device communicates using unique device IDs",
            ],
          },
          {
            type: "cards",
            items: [
              {
                title: "Key Insights from Client Discussions",
                description:
                  "The client wanted a simple, clean, and professional interface. Existing app looked outdated and childish. User flow works well and should remain unchanged. Improved icons, accessible typography, and better use of color were top priorities.",
              },
              {
                title: "Target Users",
                description:
                  "Individuals living alone, primarily senior citizens, and users needing a no-confusion, minimal steps, high clarity interface.",
              },
            ],
          },
        ],
      },
      {
        title: "Approach",
        content: [
          {
            type: "paragraph",
            text: "The design process began by mapping the product interactions and reviewing real usage scenarios. Low-fidelity options were created to explore different visual directions for the main SOS flow. Feedback cycles with the client helped validate the final direction.",
          },
          { type: "paragraph", text: "We focused on making the experience:" },
          {
            type: "cards",
            items: [
              {
                title: "Simple",
                description: "Clear icons, readable labels, and minimal cognitive load.",
              },
              {
                title: "Consistent",
                description: "Unified visual language across screens and states.",
              },
              {
                title: "Reliable",
                description:
                  "Emergency states clearly communicated through color, animation, and layout.",
              },
            ],
          },
        ],
      },
      {
        title: "Design",
        content: [
          {
            type: "paragraph",
            text: "Our objective for the interface was straightforward, make it effortless to use in high-stress situations, even for users who may not be tech-savvy.",
          },
          {
            type: "paragraph",
            text: "We started with an audit of the existing UI and found a few immediate areas of improvement: mixed icon usage, unclear terminology, too many taps for critical actions, and a visual hierarchy that did not guide attention effectively. Instead of reinventing the platform, we focused on simplifying interaction, improving clarity, and strengthening user confidence.",
          },
          {
            type: "paragraph",
            text: "We explored multiple UI directions, including a simplified remote FOB layout and an interface with higher visual contrast and distinct system states. Each iteration focused on reducing cognitive load and increasing response speed.",
          },
          {
            type: "paragraph",
            text: "The final design is focused, human, and purposeful. It prioritizes clarity over complexity and brings confidence to a system that needs to work when every second matters.",
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "The redesigned 911Switch app improved clarity, seriousness, and usability for emergency conditions.",
          },
          {
            type: "bullets",
            items: [
              "Users now experience improved readability and guidance",
              "Visual hierarchy supports quick decision-making",
              "Professional design strengthened trust in the system",
              "The client approved the chosen direction instantly",
              "The overall experience now aligns with the life-critical nature of the product",
            ],
          },
        ],
      },
    ],
    media: [
      {
        after: "Discovery",
        type: "wide",
        image: { src: "911switch-discovery.png", width: 3711, height: 2271 },
      },
      {
        after: "Approach",
        type: "slider",
        images: ["911switch-approach-1.png", "911switch-approach-2.png", "911switch-approach-3.png"],
      },
      {
        after: "Approach",
        type: "wide",
        image: { src: "911switch-visual.png", width: 3600, height: 1929, wide: true },
      },
      {
        after: "Design",
        type: "slider",
        images: ["911switch-outcome-1.png", "911switch-outcome-2.png"],
      },
    ],
  },
  predictr: {
    eyebrow: "Predictr",
    titleLines: ["Skill-Based Stock Prediction Platform for Traders and Learners"],
    heroImage: { src: "predictr-hero.png", width: 1923, height: 1178 },
    heroImageClassName: "h-[424px] w-auto max-w-none min-[810px]:h-auto min-[810px]:w-[clamp(866px,79.17vw,1140px)]",
    brief: {
      paragraphs: [
        "Predictr is a platform where users make real-time stock predictions, build performance history, and compete on leaderboards. Buzzinga Co. designed and developed the entire mobile app from scratch. The goal was to create a clear, competitive, and trustworthy experience, especially for traders and learners entering the stock market.",
      ],
      groups: [
        {
          title: "Services",
          items: [
            "UX Research",
            "UX/UI Redesign",
            "Interaction Design",
            "Figma High-Fidelity Prototyping",
            "Design Exploration & Prototyping",
            "React Native Development",
          ],
        },
        { title: "Deliverables", items: ["Mobile App Design", "iOS / Android App Development"] },
        { title: "Domain", items: ["Fintech"] },
      ],
    },
    sections: [
      {
        title: "Challenge",
        content: [
          {
            type: "paragraph",
            text: "The product existed only on web, and users needed a more direct, on-the-go way to make predictions and track performance.",
          },
          {
            type: "paragraph",
            text: "The challenge was to build the app from the ground up, not as a smaller web version, but as a standalone product experience that feels fast, intuitive, and focused on action.",
          },
          { type: "paragraph", text: "Key requirements were clear:" },
          {
            type: "bullets",
            items: [
              "Users should make predictions in seconds",
              "Insights must be structured and easy to explore",
              "Leaderboard interactions should feel competitive, not passive",
              "A strong foundation for long-term feature growth",
            ],
          },
        ],
      },
      {
        title: "Discovery",
        content: [
          {
            type: "paragraph",
            text: "Since our team had already designed and built the Predictr web platform, we had a clear understanding of user goals, market behavior, and the overall prediction flow. This allowed us to move quickly when defining the mobile experience.",
          },
          {
            type: "paragraph",
            text: "This helped us define a simple architecture that became the foundation for the mobile app: Learn -> Predict -> Track -> Compete",
          },
          {
            type: "paragraph",
            text: "Instead of adapting the web into a smaller version, we designed a mobile-first experience that supports quick decisions, one-handed interaction, and clearer visual feedback.",
          },
        ],
      },
      {
        title: "Approach",
        content: [
          {
            type: "paragraph",
            text: "We designed Predictr, a mobile-first app that turns market learning into an engaging experience through stock predictions and accuracy tracking.",
          },
          { type: "paragraph", text: "Our solution focused on three experience pillars:" },
          {
            type: "cards",
            items: [
              {
                title: "Predictive Play",
                description:
                  "Users can predict stock movements (Up/Down and % change) in real-time transforming analysis into participation.",
              },
              {
                title: "Performance Insights",
                description:
                  "A personalized accuracy dashboard helps users measure and improve their prediction success over time.",
              },
              {
                title: "Community & Recognition",
                description:
                  "Leaderboards, monthly contests, and social features build a sense of competition, transparency, and learning together.",
              },
            ],
          },
        ],
      },
      {
        title: "Design and Development",
        content: [
          {
            type: "paragraph",
            text: "We built a modern, minimal UI emphasizing performance and credibility. The design highlights each user's accuracy with visual markers and leaderboard badges.",
          },
          { type: "paragraph", text: "Key design components:" },
          {
            type: "bullets",
            items: [
              "Clean cards for predictions showing stock name, movement, and accuracy.",
              "Highlight colors for \"Up\" and \"Down\" predictions.",
              "Dynamic leaderboards and monthly contest results.",
            ],
          },
          {
            type: "paragraph",
            text: "A clickable prototype was developed in Figma, connecting flows like creating predictions, viewing results, and claiming leaderboard positions to simulate the real in-app experience.",
          },
        ],
      },
      {
        title: "Outcome",
        content: [
          {
            type: "paragraph",
            text: "The mobile app adds real utility to the Predictr ecosystem, and is now the primary way users engage with the platform.",
          },
          { type: "paragraph", text: "It helped the product:" },
          {
            type: "bullets",
            items: [
              "Improve prediction participation",
              "Increase leaderboard engagement",
              "Enable quicker feature deployment",
              "Prepare for future AI-assisted insights",
            ],
          },
          {
            type: "paragraph",
            text: "Buzzinga Co. continues to work on feature additions and platform evolution.",
          },
        ],
      },
    ],
    media: [
      {
        after: "Approach",
        type: "slider",
        images: ["predictr-approach-1.png", "predictr-approach-2.jpg", "predictr-approach-3.png"],
      },
      {
        after: "Design and Development",
        type: "grid",
        images: [
          { src: "predictr-outcome-1.png", width: 2352, height: 2716 },
          { src: "predictr-outcome-2.png", width: 2352, height: 2716 },
        ],
      },
    ],
  },
};

function Divider() {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="h-px w-full max-w-[700px] bg-[#262D30]" />
    </section>
  );
}

function BriefInfoCard({ title, items, className = "" }: BriefGroup & { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-4 rounded-2xl bg-[#F2F4F7] p-6 ${className}`}>
      <p className="m-0 w-full text-[14px] font-semibold leading-[21px] text-[#262D30] min-[810px]:text-[18px] min-[810px]:leading-[25.2px]">
        {title}
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2">
        {items.map((item) => (
          <p key={item} className="m-0 w-full text-[16px] font-normal leading-[25.6px] text-[#262D30]">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 w-full text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
      {children}
    </p>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 flex w-full list-disc flex-col gap-0 pl-[24.5px] text-[16px] font-normal leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-8">
      {items.map((item) => (
        <li key={item} className="pl-0">
          <Paragraph>{item}</Paragraph>
        </li>
      ))}
    </ul>
  );
}

function FeatureCard({ title, description }: CardItem) {
  return (
    <div className="flex w-full flex-col items-start gap-2 rounded-2xl bg-[#F2F4F7] p-5 min-[810px]:p-6">
      <p className="m-0 w-full text-[16px] font-semibold leading-6 text-[#262D30] min-[810px]:text-[20px] min-[810px]:leading-[30px]">
        {title}
      </p>
      <Paragraph>{description}</Paragraph>
    </div>
  );
}

function TwoColumnTextSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex w-full justify-center px-4 pb-0 pt-16 min-[810px]:px-16">
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

function WideMedia({ image }: { image: ImageItem }) {
  if (image.wide) {
    return (
      <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
        <Image
          src={`/buzzinga-assets/images/project-detail/${image.src}`}
          alt=""
          width={image.width}
          height={image.height}
          unoptimized
          sizes="(min-width: 1200px) 1152px, calc(100vw - 32px)"
          className="block aspect-[144/76] w-full max-w-[1152px] rounded-3xl object-cover"
        />
      </section>
    );
  }

  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="flex w-full max-w-[1200px] justify-center overflow-hidden rounded-2xl bg-[#F2F4F7] min-[810px]:rounded-[32px]">
        <Image
          src={`/buzzinga-assets/images/project-detail/${image.src}`}
          alt=""
          width={image.width}
          height={image.height}
          unoptimized
          sizes="(min-width: 1200px) 1200px, calc(100vw - 32px)"
          className="block aspect-[12/7] h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}

function ImageGrid({ images }: { images: ImageItem[] }) {
  return (
    <section className="flex w-full justify-center px-4 pt-16 min-[810px]:px-16">
      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-2 min-[810px]:gap-4">
        {images.map((image) => (
          <Image
            key={image.src}
            src={`/buzzinga-assets/images/project-detail/${image.src}`}
            alt=""
            width={image.width}
            height={image.height}
            unoptimized
            sizes="(min-width: 1200px) 592px, calc((100vw - 40px) / 2)"
            className="block aspect-[168/202] h-[202px] w-full rounded-2xl object-cover min-[810px]:aspect-[568/601] min-[810px]:h-auto min-[810px]:rounded-3xl"
          />
        ))}
      </div>
    </section>
  );
}

function renderContent(item: ProjectCaseStudy["sections"][number]["content"][number]) {
  if (item.type === "paragraph") {
    return <Paragraph key={item.text}>{item.text}</Paragraph>;
  }
  if (item.type === "bullets") {
    return <BulletList key={item.items.join("|")} items={item.items} />;
  }
  return (
    <div key={item.items.map((card) => card.title).join("|")} className="flex w-full flex-col items-center justify-center gap-2">
      {item.items.map((card) => (
        <FeatureCard key={card.title} {...card} />
      ))}
    </div>
  );
}

export function ProjectCaseStudySections({ projectKey }: { projectKey: "911switch" | "predictr" }) {
  const project = PROJECTS[projectKey];

  return (
    <>
      <section className="flex w-full justify-center pb-12 pt-[120px] min-[810px]:pb-0 min-[810px]:pt-[162px]">
        <div className="flex w-full max-w-[1200px] flex-col items-center gap-6 min-[810px]:gap-16">
          <div className="flex w-full flex-col items-start gap-4 rounded-2xl px-4 min-[810px]:px-0">
            <p className="m-0 w-full text-center text-[18px] font-normal leading-[25.2px] text-[rgba(36,36,36,0.7)] min-[810px]:text-[24px] min-[810px]:leading-[33.6px]">
              {project.eyebrow}
            </p>
            <h1 className="m-0 w-full text-center text-[28px] font-semibold leading-[33.6px] tracking-normal text-[#262D30] min-[810px]:text-[56px] min-[810px]:leading-[61.6px]">
              {project.titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>
          <div className={`mx-4 flex w-[calc(100%-32px)] justify-center overflow-hidden rounded-2xl bg-[#F2F4F7] min-[810px]:mx-0 min-[810px]:w-full min-[810px]:rounded-[32px] ${project.heroImageBoxClassName ?? ""}`}>
            <Image
              src={`/buzzinga-assets/images/project-detail/${project.heroImage.src}`}
              alt=""
              width={project.heroImage.width}
              height={project.heroImage.height}
              priority
              unoptimized
              className={`block ${project.heroImageClassName}`}
            />
          </div>
        </div>
      </section>

      <section className="flex w-full justify-center px-4 pb-0 pt-0 min-[810px]:px-16 min-[810px]:pt-20">
        <div className="flex w-full max-w-[700px] flex-col items-start gap-4">
          <h3 className="m-0 w-full text-[20px] font-semibold leading-[26px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-[48px]">
            Brief
          </h3>
          {project.brief.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
          <div className="flex w-full flex-col items-start gap-2 pt-4 min-[810px]:flex-row min-[810px]:pb-4">
            <BriefInfoCard {...project.brief.groups[0]} className="w-full min-[810px]:w-[370px]" />
            <div className="flex w-full flex-col items-center justify-center gap-2 min-[810px]:w-[322px]">
              {project.brief.groups.slice(1).map((group) => (
                <BriefInfoCard key={group.title} {...group} className="w-full" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {project.sections.map((section) => (
        <div key={section.title}>
          <TwoColumnTextSection title={section.title}>
            {section.content.map(renderContent)}
          </TwoColumnTextSection>
          {project.media
            .filter((media) => media.after === section.title)
            .map((media) => {
              if (media.type === "wide") {
                return <WideMedia key={media.image.src} image={media.image} />;
              }
              if (media.type === "grid") {
                return <ImageGrid key={media.images.map((image) => image.src).join("|")} images={media.images} />;
              }
              return (
                <ImageBoxSlider
                  key={media.images.join("|")}
                  images={media.images}
                  className="pt-16"
                  containerClassName="max-w-[1200px]"
                />
              );
            })}
        </div>
      ))}
    </>
  );
}
