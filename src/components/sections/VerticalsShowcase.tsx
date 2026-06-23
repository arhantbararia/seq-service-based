import { FadeUp } from "@/components/animations/FadeUp";
import { verticals } from "@/data/verticals";
import Link from "next/link";

export function VerticalsShowcase() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)] border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeUp className="max-w-2xl">
            <div className="flex flex-col">
              <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-4 uppercase">
                [ Industries ]
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)]">
                Industry Implementations
              </h2>
            </div>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/verticals" className="inline-flex items-center text-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] hover:bg-[var(--color-text-primary)] px-4 py-2 border border-[var(--color-text-primary)] font-mono text-sm transition-colors uppercase tracking-wider">
              [ View All Industries ]
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-t border-l border-[var(--color-border-subtle)]">
          {verticals.map((vertical, index) => (
            <FadeUp 
              key={vertical.id} 
              delay={index * 0.05} 
              className={index === 0 ? "md:col-span-2 lg:col-span-2 xl:col-span-2 flex h-full border-r border-b border-[var(--color-border-subtle)]" : "flex h-full border-r border-b border-[var(--color-border-subtle)]"}
            >
              <Link href={`/verticals#${vertical.id}`} className="block h-full w-full group hover:bg-[var(--color-surface-glass)] transition-colors p-8">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] text-[var(--color-text-muted)] mb-2 tracking-widest uppercase">{vertical.id}</div>
                    <h3 className="text-2xl font-serif mb-4 text-[var(--color-text-primary)]">
                      {vertical.name}
                    </h3>
                  </div>
                  <p className="text-[var(--color-text-secondary)] font-sans text-sm mt-8 leading-relaxed">
                    {vertical.solution}
                  </p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
