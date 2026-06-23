import { cn } from "@/lib/utils";

interface FilterPillProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function FilterPill({ active, className, children, ...props }: FilterPillProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-none text-xs font-mono uppercase tracking-widest transition-all duration-200 border",
        active 
          ? "bg-[var(--color-text-primary)] border-[var(--color-text-primary)] text-[var(--color-background-primary)]" 
          : "bg-transparent border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]",
        className
      )}
      {...props}
    >
      {active ? `[ ${children} ]` : children}
    </button>
  );
}
