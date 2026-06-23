import { FadeUp } from "@/components/animations/FadeUp";

const steps = [
  {
    number: "01",
    title: `"As-Is" Cost Calculation`,
    description: "Quantify manual work into tangible figures. Identify friction points.",
  },
  {
    number: "02",
    title: "Visual Prototype",
    description: "Build lightweight demos of bottlenecks. Verify functionality live.",
  },
  {
    number: "03",
    title: "Architecture Selection",
    description: "Determine infrastructure based on load. Deploy scalable systems.",
  },
  {
    number: "04",
    title: "ROI-Driven Delivery",
    description: "Implement zero-cost scaling solutions. Eliminate manual dependencies.",
  },
];

export function ApproachSteps() {
  return (
    <section className="py-24 bg-[var(--color-background-primary)] border-t border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeUp>
          <div className="flex flex-col mb-16">
            <div className="font-mono text-xs tracking-widest text-[var(--color-text-muted)] mb-4 uppercase">
              [ Process ]
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-text-primary)]">
              Operational Protocols
            </h2>
          </div>
        </FadeUp>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-[var(--color-border-subtle)]"></div>

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <FadeUp key={index} delay={index * 0.15} className="relative z-10">
                <div className="flex flex-col items-start text-left">
                  <div className="bg-[var(--color-background-primary)] px-2 -ml-2 mb-6">
                    <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">Phase {step.number}</span>
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-[var(--color-text-primary)]">{step.title}</h3>
                  <p className="text-[var(--color-text-secondary)] text-sm font-sans leading-relaxed">{step.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
