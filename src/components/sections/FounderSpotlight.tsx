import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { RevealImage } from "@/components/animations/RevealImage";

export function FounderSpotlight() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          <div className="md:col-span-5 relative">
            <FadeUp>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background-primary)] to-transparent opacity-60 z-10"></div>
                <RevealImage 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                  alt="Arhant Bararia" 
                  className="w-full h-full"
                  imageClassName="grayscale opacity-80"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-text-primary)]">Arhant Bararia</h3>
                  <p className="text-[var(--color-accent-primary)] font-medium">Founder, Sequels & sequels.diy</p>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="md:col-span-7">
            <FadeUp delay={0.2}>
              <SectionHeading 
                title="Bridging Heavy Engineering and Accessible Tech" 
                badge="The Founder"
                className="mb-8"
              />
              <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
                <p>
                  "Democratizing automation for everyday people and businesses requires making it highly accessible, transparent, and trustworthy."
                </p>
                <p>
                  "I build solutions that eliminate errors and reduce headcount costs, explicitly translating manual effort into tangible rupee savings and verifiable time saved. To drive this forward, I am launching an IT solutions and automation consultancy tailored for budget-conscious MSMEs in India, alongside building Sequels.diy, a web automation platform that streamlines recurring tasks."
                </p>
                <p>
                  "I am Arhant Bararia, a backend engineer specializing in Go and Python, bridging the gap between heavy backend engineering and accessible technologies."
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
