import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-4 min-[810px]:px-8 xl:px-0", className)}>
      {children}
    </div>
  );
}
