import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { CTABanner } from "@/components/sections/CTABanner";

export default function About() {
  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            The Story Behind Sequels
          </h1>
          <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed">
            We exist to democratize digital infrastructure for Indian MSMEs, replacing bloated software with lean, zero-cost architecture.
          </p>
        </div>
      </section>

      <CompanyOverview />
      
      <CTABanner 
        title="Want to build something lean?" 
        subtitle="Let's have a conversation about your current bottlenecks."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
