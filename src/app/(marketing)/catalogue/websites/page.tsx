"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { VerticalSectionHeader } from "@/components/sections/VerticalSectionHeader";
import { CTABanner } from "@/components/sections/CTABanner";
import { WebsiteShowcaseCard } from "@/components/sections/WebsiteShowcaseCard";
import { websites } from "@/data/websites";
import { verticals } from "@/data/verticals";

export default function WebsitesCatalogue() {

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

      <section className="py-12 pb-24 bg-[var(--color-background-primary)] min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {verticals.map((vertical, index) => {
            const verticalWebsites = websites.filter(w => w.verticalId === vertical.id);
            
            return (
              <div key={vertical.id} className="mb-24 last:mb-0">
                <FadeUp delay={0.1}>
                  <VerticalSectionHeader 
                    name={vertical.name} 
                    icp={vertical.icp} 
                    icon={vertical.icon} 
                  />
                </FadeUp>

                {verticalWebsites.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {verticalWebsites.map((website, i) => (
                      <FadeUp key={website.id} delay={0.1 * i} className="h-full">
                        <WebsiteShowcaseCard website={website} />
                      </FadeUp>
                    ))}
                  </div>
                ) : (
                  <div className="text-[var(--color-text-secondary)] text-center py-12 border border-dashed border-[var(--color-border-subtle)] rounded-xl">
                    <p className="text-lg">Examples coming soon.</p>
                    <p className="text-sm mt-2 opacity-80">We are currently building the first zero-cost architecture for this industry.</p>
                  </div>
                )}
              </div>
            );
          })}
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
