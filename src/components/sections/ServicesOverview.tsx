import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { services } from "@/data/services";
import Link from "next/link";

export function ServicesOverview() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)] relative border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="flex flex-col mb-16">
            <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-4 uppercase">
              [ Capabilities ]
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)]">
              Core Architectures
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-[var(--color-border-subtle)]">
          {services.map((service, index) => (
            <FadeUp key={service.id} delay={0.1 * index} className="flex h-full border-r border-b border-[var(--color-border-subtle)] p-6 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] transition-colors duration-300 group">
              <Link href={`/services#${service.id}`} className="block h-full w-full outline-none">
                <div className="h-full flex flex-col">
                  <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] group-hover:text-[var(--color-background-secondary)] mb-4">
                    TIER {service.tier}
                  </div>
                  <h3 className="text-2xl font-serif mb-4 group-hover:text-[var(--color-background-primary)]">{service.name}</h3>
                  <div className="flex-grow flex flex-col justify-end mt-12">
                    <div className="flex items-center text-sm font-sans uppercase tracking-wider text-[var(--color-text-secondary)] group-hover:text-[var(--color-background-primary)]">
                      <span>Learn More</span>
                      <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
