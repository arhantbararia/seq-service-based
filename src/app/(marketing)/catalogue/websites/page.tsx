"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { FilterPill } from "@/components/ui/FilterPill";
import { CTABanner } from "@/components/sections/CTABanner";
import { WebsiteShowcaseCard } from "@/components/sections/WebsiteShowcaseCard";
import { websites } from "@/data/websites";
import { verticals } from "@/data/verticals";

export default function WebsitesCatalogue() {
  const [activeVertical, setActiveVertical] = useState<string>("all");

  const filteredWebsites = activeVertical === "all" 
    ? websites 
    : websites.filter(w => w.verticalId === activeVertical);

  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Websites That Work Harder
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              Browse our portfolio of high-converting websites built for Indian businesses. Fast, compliant, and designed to eliminate aggregator dependency.
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
                All Industries
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((website, i) => (
              <FadeUp key={website.id} delay={0.1 * i} className="h-full">
                <WebsiteShowcaseCard website={website} />
              </FadeUp>
            ))}
            
            {filteredWebsites.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-[var(--color-text-secondary)] text-lg">No examples found for this industry yet. We can build the first one.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Want Something Like This?" 
        subtitle="Let's build a zero-cost architecture website that converts your specific traffic into verified leads."
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
