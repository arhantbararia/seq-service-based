import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { CTABanner } from "@/components/sections/CTABanner";
import { ServiceTierCard } from "@/components/sections/ServiceTierCard";
import { services } from "@/data/services";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <FadeUp>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
              Services Built for the Way India Does Business
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-12">
              From foundational digital presence to complex automation architectures, our four-tier model is designed to eliminate manual bottlenecks without inflating operational costs.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, i) => (
              <FadeUp key={service.id} delay={0.1 * i}>
                <ServiceTierCard service={service} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-background-secondary)] border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <FadeUp>
            <SectionHeading 
              title="Included Across All Tiers" 
              subtitle="Every solution we build includes a foundational standard of quality and compliance."
              align="center"
              className="mb-16"
            />
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "DPDP Act 2023 Compliance",
              "Mobile-First Optimization",
              "Zero-Cost Hosting Setup",
              "Basic SEO Architecture",
              "Form Submission Workflows",
              "Performance Auditing"
            ].map((feature, i) => (
              <FadeUp key={i} delay={0.05 * i}>
                <div className="flex items-center p-4 rounded-xl bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)]">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent-success)]/20 flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-[var(--color-accent-success)]" />
                  </div>
                  <span className="font-medium text-[var(--color-text-primary)]">{feature}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner 
        title="Not Sure Which Tier You Need?" 
        subtitle="Let's have a conversation. We will audit your current pipeline and recommend the exact architecture that delivers ROI."
        buttonText="Get Free Pipeline Audit"
        buttonHref="/contact"
      />
    </>
  );
}
