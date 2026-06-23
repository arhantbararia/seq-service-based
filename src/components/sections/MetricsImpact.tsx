"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const easePercentage = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      setCount(Math.floor(end * easePercentage));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);

  return { count, ref };
}

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, label, prefix = "", suffix = "", delay = 0 }: StatItemProps) {
  const { count, ref } = useCountUp(value, 2500);

  return (
    <FadeUp delay={delay} className="flex flex-col items-center text-center p-8 border-r border-b border-[var(--color-border-subtle)] h-full justify-center">
      <div ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text-primary)] mb-4">
        {prefix}{count}{suffix}
      </div>
      <div className="text-[var(--color-text-secondary)] font-mono text-xs uppercase tracking-widest">{label}</div>
    </FadeUp>
  );
}

export function MetricsImpact() {
  return (
    <section className="bg-[var(--color-background-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-[var(--color-border-subtle)]">
          <StatItem value={50} label="Projects Delivered" suffix="+" delay={0} />
          <StatItem value={12000} label="Hours Saved" suffix="+" delay={0.1} />
          <StatItem value={7} label="Verticals Served" delay={0.2} />
          <StatItem value={98} label="Client Retention" suffix="%" delay={0.3} />
        </div>
      </div>
    </section>
  );
}
