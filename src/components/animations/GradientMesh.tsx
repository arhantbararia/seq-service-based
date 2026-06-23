"use client";

import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[var(--color-background-primary)]">
      {/* 
        Optimization: Replaced expensive CSS blur() and mix-blend-modes with performant radial-gradients 
        and hardware acceleration (will-change). Increased opacity from 0.2 to 0.5 for better visibility.
      */}
      <div 
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] animate-pulse-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
          animationDuration: '8s',
          willChange: 'opacity, transform'
        }} 
      />
      <div 
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] animate-pulse-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, transparent 70%)',
          animationDuration: '12s', 
          animationDelay: '2s',
          willChange: 'opacity, transform'
        }} 
      />
      <div 
        className="absolute top-[30%] left-[50%] w-[50%] h-[50%] animate-pulse-glow" 
        style={{ 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.25) 0%, transparent 70%)',
          animationDuration: '10s', 
          animationDelay: '5s',
          willChange: 'opacity, transform'
        }} 
      />
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05]" style={{ mixBlendMode: 'overlay' }} />
    </div>
  );
}
