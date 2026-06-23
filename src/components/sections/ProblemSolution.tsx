"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeUp } from "@/components/animations/FadeUp";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { LogIn, Settings, PackageCheck } from "lucide-react";

const pipelineStages = [
  {
    id: "intake",
    title: "1. Lead Intake",
    description: "The top of the funnel. Leads come from website forms, JustDial, Practo, or MagicBricks. Instead of manual data entry across spreadsheets, we automate the capture, standardization, and routing directly to your CRM.",
    icon: LogIn,
    color: "var(--color-accent-primary)"
  },
  {
    id: "operations",
    title: "2. Operations",
    description: "The heavy lifting. Generating PDFs, sending confirmation emails, and internal team assignments. We deploy n8n workflows to handle these repetitive tasks with zero-touch, eliminating human error.",
    icon: Settings,
    color: "var(--color-accent-secondary)"
  },
  {
    id: "fulfillment",
    title: "3. Fulfillment & Retention",
    description: "The end of the loop. Following up, requesting reviews, or delivering final reports. Automated engagement ensures customers return and leave positive feedback without adding to your headcount.",
    icon: PackageCheck,
    color: "var(--color-accent-success)"
  }
];

export function ProblemSolution() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the active index based on scroll progress (3 stages = 0-0.33, 0.33-0.66, 0.66-1.0)
  // For the visual line path length
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 bg-[var(--color-background-primary)] relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <FadeUp>
          <SectionHeading 
            title="The Pipeline Audit" 
            subtitle="We view every business as: Lead Intake → Operations → Fulfillment. We identify the manual friction at each stage and automate it."
            align="center"
            className="mb-16 md:mb-24"
          />
        </FadeUp>

        {/* Sticky Scroll Container */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative max-w-6xl mx-auto h-[200vh] md:h-[250vh]">
          
          {/* Left Side: Sticky Visual (Hidden on small mobile, visible on md+) */}
          <div className="hidden md:flex flex-col sticky top-[20vh] w-1/2 h-[60vh] justify-center">
            <div className="relative w-full aspect-square max-w-[400px] mx-auto bg-[var(--color-background-secondary)] rounded-3xl border border-[var(--color-border-subtle)] p-8 overflow-hidden shadow-2xl flex items-center justify-center">
              {/* Decorative background noise/glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent-primary)]/5 to-[var(--color-accent-secondary)]/5"></div>
              
              {/* SVG Flow Visualization */}
              <svg viewBox="0 0 100 300" className="w-24 h-full absolute z-10 overflow-visible">
                {/* Background Track */}
                <path 
                  d="M 50 10 L 50 290" 
                  fill="none" 
                  stroke="var(--color-border-subtle)" 
                  strokeWidth="4" 
                  strokeDasharray="4 4"
                  strokeLinecap="round"
                />
                
                {/* Animated Flow Line */}
                <motion.path 
                  d="M 50 10 L 50 290" 
                  fill="none" 
                  stroke="var(--color-accent-primary)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  style={{ pathLength }}
                  className="drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                />

                {/* Nodes */}
                <circle cx="50" cy="15" r="8" fill="var(--color-background-secondary)" stroke="var(--color-border-subtle)" strokeWidth="3" />
                <circle cx="50" cy="150" r="8" fill="var(--color-background-secondary)" stroke="var(--color-border-subtle)" strokeWidth="3" />
                <circle cx="50" cy="285" r="8" fill="var(--color-background-secondary)" stroke="var(--color-border-subtle)" strokeWidth="3" />
                
                {/* Animated Glowing Nodes */}
                <motion.circle 
                  cx="50" cy="15" r="8" fill="var(--color-accent-primary)" 
                  style={{ opacity: useTransform(smoothProgress, [0, 0.1], [0, 1]) }}
                  className="drop-shadow-[0_0_10px_rgba(99,102,241,1)]"
                />
                <motion.circle 
                  cx="50" cy="150" r="8" fill="var(--color-accent-secondary)" 
                  style={{ opacity: useTransform(smoothProgress, [0.4, 0.5], [0, 1]) }}
                  className="drop-shadow-[0_0_10px_rgba(168,85,247,1)]"
                />
                <motion.circle 
                  cx="50" cy="285" r="8" fill="var(--color-accent-success)" 
                  style={{ opacity: useTransform(smoothProgress, [0.8, 0.9], [0, 1]) }}
                  className="drop-shadow-[0_0_10px_rgba(34,197,94,1)]"
                />
              </svg>

              {/* Dynamic Overlay Text */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-[100px] text-sm font-semibold tracking-widest text-[var(--color-text-secondary)] uppercase">
                <motion.span style={{ color: useTransform(smoothProgress, [0, 0.1, 0.4], ["var(--color-text-muted)", "var(--color-accent-primary)", "var(--color-text-muted)"]) }}>Intake</motion.span>
                <motion.span style={{ color: useTransform(smoothProgress, [0.4, 0.5, 0.8], ["var(--color-text-muted)", "var(--color-accent-secondary)", "var(--color-text-muted)"]) }}>Process</motion.span>
                <motion.span style={{ color: useTransform(smoothProgress, [0.8, 0.9, 1], ["var(--color-text-muted)", "var(--color-accent-success)", "var(--color-text-muted)"]) }}>Fulfill</motion.span>
              </div>
            </div>
          </div>

          {/* Right Side: Scrollable Content blocks */}
          <div className="w-full md:w-1/2 flex flex-col pt-[10vh] pb-[20vh] relative z-10 md:pt-[20vh]">
            {pipelineStages.map((stage, index) => {
              // Create specific transforms for each card to fade in/out based on scroll
              const start = index * 0.33;
              const end = start + 0.33;
              const mid = start + 0.165;
              
              // Mobile relies on normal document flow, desktop uses scroll animations
              const desktopOpacity = useTransform(smoothProgress, 
                [start - 0.1, start + 0.1, end - 0.1, end + 0.1], 
                [0.3, 1, 1, 0.3]
              );
              const desktopScale = useTransform(smoothProgress,
                [start - 0.1, start + 0.1, end - 0.1, end + 0.1],
                [0.95, 1, 1, 0.95]
              );

              return (
                <div key={stage.id} className="min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center">
                  <motion.div 
                    style={{ 
                      opacity: desktopOpacity,
                      scale: desktopScale
                    }}
                    className="p-8 md:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-background-secondary)]/80 backdrop-blur-md shadow-xl"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border"
                      style={{ 
                        backgroundColor: `color-mix(in srgb, ${stage.color} 10%, transparent)`,
                        borderColor: `color-mix(in srgb, ${stage.color} 30%, transparent)`
                      }}
                    >
                      <stage.icon className="w-8 h-8" style={{ color: stage.color }} />
                    </div>
                    <h3 className="text-3xl font-display font-bold mb-6 text-[var(--color-text-primary)]">
                      {stage.title}
                    </h3>
                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                      {stage.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
