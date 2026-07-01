import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { CTABanner } from "@/components/sections/CTABanner";
import { SegmentCard } from "@/components/sections/SegmentCard";
import { verticals } from "@/data/verticals";
import Link from "next/link";
import { VerticalSectionHeader } from "@/components/sections/VerticalSectionHeader";

export default function Verticals() {
  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Solutions Designed for Your Industry
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              We specialize in 3 core verticals, understanding the unique aggregators, compliance needs, and manual bottlenecks specific to each segment.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 pb-24 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {verticals.map((vertical, i) => (
            <div key={vertical.id} className="mb-20 last:mb-0">
              <FadeUp delay={0.1}>
                <VerticalSectionHeader 
                  name={vertical.name} 
                  icp={vertical.icp} 
                  icon={vertical.icon} 
                />
              </FadeUp>
              
              {vertical.segments && vertical.segments.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vertical.segments.map((segment, j) => (
                    <FadeUp key={segment.id} delay={0.1 + (j * 0.05)} className="h-full">
                      <Link href={`/segments/${segment.id}`} className="block h-full transition-transform hover:-translate-y-1">
                        <SegmentCard segment={segment} />
                      </Link>
                    </FadeUp>
                  ))}
                </div>
              ) : (
                <div className="text-[var(--color-text-secondary)] text-center py-8 border border-dashed border-[var(--color-border-subtle)] rounded-xl">
                  Segments coming soon.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CTABanner 
        title="Don't see your specific segment?" 
        subtitle="The fundamentals of automation apply everywhere. Tell us about your manual bottlenecks, and we'll show you how to eliminate them."
        buttonText="Tell Us Your Bottleneck"
        buttonHref="/contact"
      />
    </>
  );
}
