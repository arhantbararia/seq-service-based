import { FadeUp } from "@/components/animations/FadeUp";

export function CompanyOverview() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)] border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <FadeUp delay={0.1} className="h-full">
            <div className="p-10 border border-[var(--color-border-subtle)] h-full flex flex-col technical-border bg-[var(--color-background-primary)] hover:border-[var(--color-text-primary)] transition-colors">
              <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-6 uppercase">
                [ Vision ]
              </div>
              <h3 className="text-2xl font-serif text-[var(--color-text-primary)] mb-6">Company Vision</h3>
              <p className="text-[var(--color-text-secondary)] font-sans leading-relaxed">
                To democratize automation for budget-conscious MSMEs by replacing bloated software with lean, zero-cost architectures. We believe in making high-end technology accessible, transparent, and trustworthy.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2} className="h-full">
            <div className="p-10 border border-[var(--color-border-subtle)] h-full flex flex-col technical-border bg-[var(--color-background-primary)] hover:border-[var(--color-text-primary)] transition-colors">
              <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-6 uppercase">
                [ Background ]
              </div>
              <h3 className="text-2xl font-serif text-[var(--color-text-primary)] mb-6">Our Background</h3>
              <p className="text-[var(--color-text-secondary)] font-sans leading-relaxed">
                Bridging the gap between heavy backend engineering and accessible front-facing solutions. We specialize in robust, scalable systems that eliminate manual errors, reduce headcount costs, and deliver verifiable ROI.
              </p>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.3} className="h-full">
            <div className="p-10 border border-[var(--color-border-subtle)] h-full flex flex-col technical-border bg-[var(--color-background-primary)] hover:border-[var(--color-text-primary)] transition-colors">
              <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-6 uppercase">
                [ Philosophy ]
              </div>
              <h3 className="text-2xl font-serif text-[var(--color-text-primary)] mb-6">Core Philosophy</h3>
              <p className="text-[var(--color-text-secondary)] font-sans leading-relaxed">
                No black-box magic. We build solutions that explicitly translate manual effort into tangible rupee savings. Every architecture decision is strictly driven by the goal of optimizing throughput and reducing operational latency.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
