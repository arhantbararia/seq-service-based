import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Cpu, Search, FastForward, ScanEye } from "lucide-react";

const philosophies = [
  {
    title: "Zero-Cost Architecture",
    description: "We utilize edge computing, serverless databases, and free-tier scaling to ensure your operational costs remain flat while your business grows.",
    icon: Cpu,
  },
  {
    title: "Pipeline Audit",
    description: "We visualize every business as Lead Intake → Operations → Fulfillment to pinpoint exact areas of manual friction and wasted hours.",
    icon: Search,
  },
  {
    title: "Automate the Bottleneck",
    description: "High frequency + low complexity tasks are automated first to deliver the highest immediate ROI for your team.",
    icon: FastForward,
  },
  {
    title: "Glass-Box Execution",
    description: "No black-box magic. Our automation logic is transparent, documented, and built with visual tools so you understand exactly how your business runs.",
    icon: ScanEye,
  },
];

export function PhilosophyCards() {
  return (
    <section className="py-24 bg-[var(--color-background-secondary)]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeUp>
          <SectionHeading 
            title="Our Core Philosophies" 
            subtitle="The principles that guide every architecture decision and client engagement."
            align="center"
            className="mb-16"
          />
        </FadeUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophies.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <Card className="h-full bg-[var(--color-background-primary)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-primary)]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[var(--color-accent-primary)]" />
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-[var(--color-text-secondary)]">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
