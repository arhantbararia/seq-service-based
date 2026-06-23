import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2", className)}>
      <span className="font-display text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
        Sequels
        <span className="text-[var(--color-accent-primary)]">.</span>
      </span>
    </Link>
  );
}
