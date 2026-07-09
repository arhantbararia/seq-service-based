import { HeroHome } from "@/components/sections/HeroHome";
import { StorytellingScroll } from "@/components/sections/StorytellingScroll";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { VerticalsShowcase } from "@/components/sections/VerticalsShowcase";
import { SequelsDIYSpotlight } from "@/components/sections/SequelsDIYSpotlight";
import { MetricsImpact } from "@/components/sections/MetricsImpact";
import { CTABanner } from "@/components/sections/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sequels — Digital Infrastructure That Pays for Itself | Web Automation for Indian MSMEs",
  description: "We build digital infrastructure for small and medium businesses in India. High-performance, zero-cost architecture websites and workflow automations.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <StorytellingScroll />
      <ServicesOverview />
      <ApproachSteps />
      <VerticalsShowcase />
      <SequelsDIYSpotlight />
      <MetricsImpact />
      <CTABanner 
        title="Ready to Automate the Bottleneck?" 
        subtitle="Let's calculate the real cost of your manual operations. We provide a risk-free ROI calculation and a visual prototype within 48 hours."
        buttonText="Start Your Audit"
        buttonHref="/contact"
      />
      <div className="text-center py-4 text-xs text-[var(--color-text-muted)] bg-[var(--color-background-primary)]">
        Last updated: July 2026
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Sequels",
            "url": "https://services.sequels.diy"
          })
        }}
      />
    </>
  );
}
