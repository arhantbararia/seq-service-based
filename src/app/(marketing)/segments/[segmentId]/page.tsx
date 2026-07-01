import { notFound } from "next/navigation";
import { verticals } from "@/data/verticals";
import { automations } from "@/data/automations";
import { websites } from "@/data/websites";
import { AutomationCard } from "@/components/sections/AutomationCard";
import { WebsiteShowcaseCard } from "@/components/sections/WebsiteShowcaseCard";
import { FadeUp } from "@/components/animations/FadeUp";
import { CTABanner } from "@/components/sections/CTABanner";
import { Lightbulb, AlertCircle, Target, Layers } from "lucide-react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SegmentPageProps {
  params: {
    segmentId: string;
  };
}

export default async function SegmentPage({ params }: SegmentPageProps) {
  const resolvedParams = await params;
  const { segmentId } = resolvedParams;

  let currentVertical = null;
  let currentSegment = null;

  for (const vertical of verticals) {
    const seg = vertical.segments?.find(s => s.id === segmentId);
    if (seg) {
      currentSegment = seg;
      currentVertical = vertical;
      break;
    }
  }

  if (!currentSegment || !currentVertical) {
    notFound();
  }

  let segmentAutomations = automations.filter(a => a.segmentId === segmentId);
  let fallbackAutomations = false;
  if (segmentAutomations.length === 0) {
    segmentAutomations = automations.filter(a => a.verticalId === currentVertical.id).slice(0, 3);
    fallbackAutomations = true;
  }

  let segmentWebsites = websites.filter(w => w.segmentId === segmentId);
  let fallbackWebsites = false;
  if (segmentWebsites.length === 0) {
    segmentWebsites = websites.filter(w => w.verticalId === currentVertical.id).slice(0, 1);
    fallbackWebsites = true;
  }

  return (
    <>
      <section className="pt-24 pb-12 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Link href="/verticals" className="inline-flex items-center text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)] mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to All Verticals
          </Link>
          
          <FadeUp>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] text-xs font-semibold text-[var(--color-text-secondary)] mb-6 uppercase tracking-wider">
              {currentVertical.name}
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
              {currentSegment.name}
            </h1>
            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
              {currentSegment.description}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-background-secondary)] border-y border-[var(--color-border-subtle)]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <FadeUp delay={0.1}>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-red-400">
                <AlertCircle className="w-5 h-5 mr-2" /> Common Bottlenecks
              </h3>
              <ul className="space-y-3">
                {currentVertical.painPoints.slice(0, 3).map((point, i) => (
                  <li key={i} className="text-[var(--color-text-secondary)] flex items-start">
                    <span className="mr-2 text-red-400/50">•</span> {point}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.2}>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-[var(--color-accent-success)]">
                <Lightbulb className="w-5 h-5 mr-2" /> The Solution
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {currentVertical.solution}
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <h3 className="flex items-center text-lg font-semibold mb-4 text-[var(--color-accent-primary)]">
                <Target className="w-5 h-5 mr-2" /> Approach
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed italic">
                "{currentVertical.pitchPath}"
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-background-primary)]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Recommended Digital Assets
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                High-performance platforms designed to capture leads, process data, and establish premium authority.
              </p>
              {fallbackWebsites && (
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-lg text-sm font-medium">
                  Showing an example asset from {currentVertical.name}. Your exact requirement will be custom built.
                </div>
              )}
            </FadeUp>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segmentWebsites.map((website, i) => (
              <FadeUp key={website.id} delay={0.1 * i}>
                <WebsiteShowcaseCard website={website} />
              </FadeUp>
            ))}
          </div>

          {segmentWebsites.length === 0 && !fallbackWebsites && (
            <div className="text-center text-[var(--color-text-secondary)] py-12 border border-dashed border-[var(--color-border-subtle)] rounded-2xl">
              We build custom tier-based digital assets tailored exactly to this segment.
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[var(--color-background-secondary)]">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <FadeUp>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] text-[var(--color-text-primary)] mb-6">
                <Layers className="w-4 h-4 mr-2 text-[var(--color-accent-primary)]" />
                <span className="text-sm font-medium uppercase tracking-wider">Workflow Library</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Plug-and-Play Automations
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)]">
                Eliminate manual bottlenecks with these pre-built, segment-specific n8n workflows.
              </p>
              {fallbackAutomations && (
                <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-500/10 text-yellow-600 rounded-lg text-sm font-medium">
                  Showing related workflows from {currentVertical.name}. Custom workflows available upon request.
                </div>
              )}
            </FadeUp>
          </div>

          <div className="flex flex-col gap-6">
            {segmentAutomations.map((auto, i) => (
              <FadeUp key={auto.id} delay={0.1 * i}>
                <AutomationCard automation={auto} hideSegmentTag={true} />
              </FadeUp>
            ))}
          </div>

          {segmentAutomations.length === 0 && !fallbackAutomations && (
            <div className="text-center text-[var(--color-text-secondary)] py-12 border border-dashed border-[var(--color-border-subtle)] rounded-2xl">
              Custom automations can be developed for your specific operational needs.
            </div>
          )}
        </div>
      </section>

      <CTABanner 
        title="Ready to automate your operations?" 
        subtitle="Let's build a customized ecosystem that scales your business without scaling your headcount."
        buttonText="Book a Discovery Call"
        buttonHref="/contact"
      />
    </>
  );
}
