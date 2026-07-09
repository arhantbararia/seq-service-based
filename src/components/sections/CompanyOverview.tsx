import { FadeUp } from "@/components/animations/FadeUp";

export function CompanyOverview() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)] border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <FadeUp delay={0.4} className="h-full">
            <div className="p-10 border border-[var(--color-border-subtle)] h-full flex flex-col technical-border bg-[var(--color-background-primary)] hover:border-[var(--color-text-primary)] transition-colors">
              <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-6 uppercase">
                [ Connect ]
              </div>
              <h3 className="text-2xl font-serif text-[var(--color-text-primary)] mb-6">Company Identity</h3>
              <p className="text-[var(--color-text-secondary)] font-sans leading-relaxed mb-6 flex-grow">
                Founded on strong engineering principles, we aim to bridge the gap between heavy backend systems and user-friendly interfaces.
              </p>
              <a 
                href="https://www.linkedin.com/company/sequels-diy/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[var(--color-accent-primary)] hover:underline mt-auto font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                Follow on LinkedIn
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
