import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/ui/Button";

export function SequelsDIYSpotlight() {
  return (
    <section className="py-24 bg-[var(--color-background-secondary)] relative overflow-hidden border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeUp>
              <div className="relative border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] p-8 technical-border">
                <div className="font-mono text-xs text-[var(--color-text-secondary)] mb-6">
                  {`Core Capabilities`}
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-2">
                    <span className="text-[var(--color-text-primary)]">Native Integrations</span>
                    <span className="text-[var(--color-text-muted)]">Active</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--color-border-subtle)] pb-2">
                    <span className="text-[var(--color-text-primary)]">Data Ownership</span>
                    <span className="text-[var(--color-text-muted)]">Secure</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-[var(--color-text-primary)]">Uptime Monitoring</span>
                    <span className="text-[var(--color-text-muted)]">99.99%</span>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="order-1 lg:order-2">
            <FadeUp>
              <div className="flex flex-col mb-8">
                <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-4 uppercase">
                  [ Automation Engine ]
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)] mb-6">
                  Powered by sequels.diy
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg font-sans">
                  The proprietary engine that processes recurring logic, integrating deeply with localized APIs.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <Button asChild variant="outline" className="rounded-none border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] transition-colors">
                <a href="#" target="_blank" rel="noopener noreferrer" className="font-mono text-sm uppercase tracking-wider">
                  [ Explore Platform ]
                </a>
              </Button>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
