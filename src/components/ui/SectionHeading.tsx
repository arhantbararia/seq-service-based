import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-3", align === "center" && "items-center text-center", className)}>
      {badge && (
        <span className="inline-block rounded-full bg-[var(--color-accent-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent-primary)] ring-1 ring-inset ring-[var(--color-accent-primary)]/20">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
