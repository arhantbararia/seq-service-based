import { HeroHome } from "@/components/sections/HeroHome";
import { StorytellingScroll } from "@/components/sections/StorytellingScroll";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ApproachSteps } from "@/components/sections/ApproachSteps";
import { VerticalsShowcase } from "@/components/sections/VerticalsShowcase";
import { SequelsDIYSpotlight } from "@/components/sections/SequelsDIYSpotlight";
import { MetricsImpact } from "@/components/sections/MetricsImpact";
import { CTABanner } from "@/components/sections/CTABanner";

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
    </>
  );
}
