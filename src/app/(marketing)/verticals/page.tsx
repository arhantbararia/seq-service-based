import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { CTABanner } from "@/components/sections/CTABanner";
import { VerticalDetailCard } from "@/components/sections/VerticalDetailCard";
import { verticals } from "@/data/verticals";

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
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((vertical, i) => (
              <FadeUp key={vertical.id} delay={0.1 * i} className="h-full">
                <VerticalDetailCard vertical={vertical} />
              </FadeUp>
            ))}
          </div>
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
