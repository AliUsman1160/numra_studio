import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Tag = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", light ? "text-gold" : "text-gold-dark")}>{eyebrow}</p>
      )}
      <Tag
        className={cn(
          "font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-[3.4rem]",
          light ? "text-ivory" : "text-plum",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-ivory/80" : "text-taupe-dark")}>
          {description}
        </p>
      )}
    </div>
  );
}
