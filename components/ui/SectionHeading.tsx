import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  heading,
  subheading,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <h2 className="section-heading text-[24px] font-semibold leading-[28.8px] text-[#262D30] min-[810px]:text-[40px] min-[810px]:leading-tight xl:text-[48px]">
        {heading}
      </h2>
      {subheading && (
        <p className="heading-description max-w-2xl text-xl text-[#262D30]">{subheading}</p>
      )}
    </div>
  );
}
