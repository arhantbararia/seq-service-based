import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { CTABanner } from "@/components/sections/CTABanner";
import { VerticalDetailCard } from "@/components/sections/VerticalDetailCard";
import { verticals } from "@/data/verticals";
import { MapPin } from "lucide-react";

export default function Verticals() {
  const edTechVertical = verticals.find(v => v.id === "education");
  const otherVerticals = verticals.filter(v => v.id !== "education");

  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Solutions Designed for Your Industry
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              We specialize in 7 core verticals, understanding the unique aggregators, compliance needs, and manual bottlenecks specific to each.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Spotlight: Education & EdTech */}
      {edTechVertical && (
        <section className="py-24 bg-[var(--color-background-secondary)] border-y border-[var(--color-border-subtle)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent-primary)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10 rounded-full border border-[var(--color-accent-primary)]/20">
                  Highest Priority Spotlight
                </span>
              </div>
            </FadeUp>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Education & EdTech</h2>
                  <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                    The coaching industry relies heavily on paper forms, manual lead tracking, and disconnected testing platforms. We build unified ecosystems that handle student intake, testing, and CRM automatically.
                  </p>
                  
                  <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] rounded-xl p-6 mb-8">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-[var(--color-text-primary)] mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[var(--color-accent-primary)]" /> Primary Coverage Belt
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {["Alwar", "Kota", "Sikar", "Jaipur"].map(city => (
                        <span key={city} className="px-4 py-2 bg-[var(--color-surface-glass)] border border-[var(--color-border-subtle)] rounded-lg text-sm font-medium">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeUp>
              </div>
              
              <div className="h-full">
                <FadeUp delay={0.2} className="h-full">
                  <VerticalDetailCard vertical={edTechVertical} />
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Verticals Grid */}
      <section className="py-24 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeUp>
            <SectionHeading 
              title="All Core Verticals" 
              subtitle="Deep expertise across 6 other key Indian MSME sectors."
              className="mb-16"
            />
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherVerticals.map((vertical, i) => (
              <FadeUp key={vertical.id} delay={0.1 * i} className="h-full">
                <VerticalDetailCard vertical={vertical} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Don't see your industry?" 
        subtitle="The fundamentals of automation apply everywhere. Tell us about your manual bottlenecks, and we'll show you how to eliminate them."
        buttonText="Tell Us Your Bottleneck"
        buttonHref="/contact"
      />
    </>
  );
}
