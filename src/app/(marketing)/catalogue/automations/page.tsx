"use client";

import { useState } from "react";
import { FadeUp } from "@/components/animations/FadeUp";
import { VerticalSectionHeader } from "@/components/sections/VerticalSectionHeader";
import { AutomationCard } from "@/components/sections/AutomationCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { automations } from "@/data/automations";
import { verticals } from "@/data/verticals";

export default function AutomationsCatalogue() {
  const crossVerticalAutomations = automations.filter(a => a.verticalId === "cross-vertical");

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

      <section className="py-12 pb-24 bg-[var(--color-background-primary)] min-h-[50vh]">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          {verticals.map((vertical, index) => {
             const verticalAutomations = automations.filter(a => a.verticalId === vertical.id);
             
             // Condense the list by name
             const uniqueVerticalAutomations = [];
             const seenNames = new Set();
             for (const auto of verticalAutomations) {
               if (!seenNames.has(auto.name)) {
                 seenNames.add(auto.name);
                 uniqueVerticalAutomations.push(auto);
               }
             }

             // Find cross-industry automations
             const crossIndustryEssentials = uniqueVerticalAutomations.filter(auto => {
               return automations.some(a => a.name === auto.name && a.verticalId !== vertical.id && a.verticalId !== "cross-vertical");
             });

             const specificAutomations = uniqueVerticalAutomations.filter(auto => {
                return !crossIndustryEssentials.some(c => c.name === auto.name);
             });

             const combinedCrossIndustry = [...crossVerticalAutomations, ...crossIndustryEssentials];

             return (
               <div key={vertical.id} className="mb-24 last:mb-0">
                 <FadeUp delay={0.1}>
                   <VerticalSectionHeader 
                     name={vertical.name} 
                     icp={vertical.icp} 
                     icon={vertical.icon} 
                   />
                 </FadeUp>

                 {uniqueVerticalAutomations.length === 0 ? (
                   <div className="text-[var(--color-text-secondary)] text-center py-12 border border-dashed border-[var(--color-border-subtle)] rounded-xl">
                     <p className="text-lg">Workflows coming soon.</p>
                     <p className="text-sm mt-2 opacity-80">We are currently building automated solutions for this industry.</p>
                   </div>
                 ) : (
                   <div className="space-y-16">
                     {specificAutomations.length > 0 && (
                       <div>
                         <h3 className="text-xl font-display font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-2">
                           Industry Specific Workflows
                         </h3>
                         <div className="flex flex-col gap-6">
                           {specificAutomations.map((automation, i) => (
                             <FadeUp key={automation.id} delay={0.1 * i} className="h-full">
                               <AutomationCard automation={automation} />
                             </FadeUp>
                           ))}
                         </div>
                       </div>
                     )}

                     {combinedCrossIndustry.length > 0 && (
                       <div>
                         <h3 className="text-xl font-display font-semibold text-[var(--color-text-primary)] mb-6 flex items-center gap-2 pt-8 border-t border-[var(--color-border-subtle)]">
                           Cross-Industry Essentials
                         </h3>
                         <div className="flex flex-col gap-6">
                           {combinedCrossIndustry.map((automation, i) => (
                             <FadeUp key={automation.id} delay={0.1 * i} className="h-full">
                               <AutomationCard automation={automation} isCrossIndustry={true} />
                             </FadeUp>
                           ))}
                         </div>
                       </div>
                     )}
                   </div>
                 )}
               </div>
             );
          })}
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
