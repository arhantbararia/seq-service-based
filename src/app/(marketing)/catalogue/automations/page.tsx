"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { FilterPill } from "@/components/ui/FilterPill";
import { CTABanner } from "@/components/sections/CTABanner";
import { AutomationCard } from "@/components/sections/AutomationCard";
import { automations } from "@/data/automations";
import { verticals } from "@/data/verticals";

export default function AutomationsCatalogue() {
  const [activeVertical, setActiveVertical] = useState<string>("all");

  const filteredAutomations = activeVertical === "all" 
    ? automations 
    : automations.filter(a => a.verticalId === activeVertical || a.verticalId === "cross-vertical");

  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Automate the Bottleneck
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              Explore our library of pre-built n8n workflows designed to eliminate manual data entry, aggregator fees, and lost hours. Expand any card to see the underlying architecture.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-background-primary)] min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              <FilterPill 
                active={activeVertical === "all"} 
                onClick={() => setActiveVertical("all")}
              >
                All Workflows
              </FilterPill>
              {verticals.map(vertical => (
                <FilterPill 
                  key={vertical.id} 
                  active={activeVertical === vertical.id}
                  onClick={() => setActiveVertical(vertical.id)}
                >
                  {vertical.name}
                </FilterPill>
              ))}
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredAutomations.map((automation, i) => (
              <FadeUp key={automation.id} delay={0.1 * i} className="h-full">
                <AutomationCard automation={automation} />
              </FadeUp>
            ))}
            
            {filteredAutomations.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-[var(--color-text-secondary)] text-lg">No predefined workflows for this industry yet. We can build a custom one for you.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Ready to reclaim those hours?" 
        subtitle="Let's build a visual prototype of your specific bottleneck within 48 hours. No commitments."
        buttonText="Request a Prototype"
        buttonHref="/contact"
      />
    </>
  );
}
