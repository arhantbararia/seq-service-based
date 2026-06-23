"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NARRATIVE_STEPS = [
  {
    id: "01",
    title: "Identify Bottlenecks",
    content: "Legacy systems introduce latency. We isolate friction points within your operational framework with surgical precision.",
    bgColor: "#050505",
  },
  {
    id: "02",
    title: "Architect Solutions",
    content: "Deploying modular, scalable architectures. We replace monolithic dependencies with high-performance micro-services.",
    bgColor: "#0a0a0a",
  },
  {
    id: "03",
    title: "Execute Automation",
    content: "Seamless integration of automated workflows. Reducing manual overhead and optimizing throughput across the pipeline.",
    bgColor: "#111111",
  },
];

export function StorytellingScroll() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const shapeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      NARRATIVE_STEPS.forEach((step, index) => {
        const textRef = textRefs.current[index];
        const shapeRef = shapeRefs.current[index];
        if (!textRef || !shapeRef) return;
        
        // Change background color
        tl.to(containerRef.current, {
          backgroundColor: step.bgColor,
          duration: 1,
          ease: "none"
        }, index === 0 ? 0 : "-=0.5");

        // Fade in Text
        tl.fromTo(textRef, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          index === 0 ? 0 : "<"
        );

        // Fade in Shape
        tl.fromTo(shapeRef, 
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          "<"
        );

        // Fade out if it's not the last item
        if (index < NARRATIVE_STEPS.length - 1) {
          tl.to(textRef, {
            opacity: 0,
            y: -50,
            duration: 1,
            ease: "power2.in"
          }, "+=1");

          tl.to(shapeRef, {
            opacity: 0,
            scale: 1.1,
            duration: 1,
            ease: "power2.in"
          }, "<");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden technical-border border-t-0" style={{ backgroundColor: NARRATIVE_STEPS[0].bgColor }}>
        
        {/* Background visual elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          {/* Shape 1: Concentric Circles (Identify) */}
          <div ref={el => { shapeRefs.current[0] = el; }} className="absolute flex items-center justify-center w-full h-full opacity-0">
            <div className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full border border-[var(--color-text-primary)] animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full border border-[var(--color-text-primary)] border-dashed animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Shape 2: Grid/Squares (Architect) */}
          <div ref={el => { shapeRefs.current[1] = el; }} className="absolute flex items-center justify-center w-full h-full opacity-0">
            <div className="w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] border border-[var(--color-text-primary)] rotate-45 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] border border-[var(--color-text-primary)] animate-[spin_40s_linear_infinite_reverse]" />
          </div>

          {/* Shape 3: Precision Lines (Execute) */}
          <div ref={el => { shapeRefs.current[2] = el; }} className="absolute flex items-center justify-center w-full h-full opacity-0">
            <div className="w-full h-[1px] bg-[var(--color-text-primary)] absolute top-1/3 opacity-50" />
            <div className="w-full h-[1px] bg-[var(--color-text-primary)] absolute bottom-1/3 opacity-50" />
            <div className="h-full w-[1px] bg-[var(--color-text-primary)] absolute left-1/3 opacity-50" />
            <div className="h-full w-[1px] bg-[var(--color-text-primary)] absolute right-1/3 opacity-50" />
            <div className="w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full border-[2px] border-[var(--color-text-primary)]" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto relative h-[40vh]">
            {NARRATIVE_STEPS.map((step, index) => (
              <div 
                key={step.id} 
                ref={el => { textRefs.current[index] = el; }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex flex-col gap-4 opacity-0"
              >
                <div className="font-mono text-sm tracking-widest text-[var(--color-text-muted)] uppercase">
                  Step {step.id}
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-[var(--color-text-primary)] leading-tight">
                  {step.title}
                </h2>
                <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-sans max-w-2xl mt-4 leading-relaxed">
                  {step.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
