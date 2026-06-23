"use client";

import { Vertical } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { GraduationCap, Building2, Stethoscope, Car, Briefcase, Factory, ShoppingBag, AlertCircle, Lightbulb, Target } from "lucide-react";

interface VerticalDetailCardProps {
  vertical: Vertical;
}

const getVerticalIcon = (iconName: string) => {
  switch (iconName) {
    case "GraduationCap": return <GraduationCap className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "Building2": return <Building2 className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "Stethoscope": return <Stethoscope className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "Car": return <Car className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "Briefcase": return <Briefcase className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "Factory": return <Factory className="w-8 h-8 text-[var(--color-text-primary)]" />;
    case "ShoppingBag": return <ShoppingBag className="w-8 h-8 text-[var(--color-text-primary)]" />;
    default: return <Building2 className="w-8 h-8 text-[var(--color-text-primary)]" />;
  }
};

export function VerticalDetailCard({ vertical }: VerticalDetailCardProps) {
  return (
    <Card className="h-full bg-[var(--color-background-primary)] border-[var(--color-border-subtle)]" id={vertical.id}>
      <CardHeader className="pb-4">
        <div className="w-16 h-16 rounded-2xl bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center mb-6">
          {getVerticalIcon(vertical.icon)}
        </div>
        <CardTitle className="text-2xl mb-2 text-[var(--color-accent-primary)]">{vertical.name}</CardTitle>
        <p className="text-[var(--color-text-secondary)] text-sm">{vertical.icp}</p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="flex items-center font-semibold text-sm uppercase tracking-wider text-red-400 mb-3">
            <AlertCircle className="w-4 h-4 mr-2" /> The Bottleneck
          </h4>
          <ul className="space-y-2">
            {vertical.painPoints.map((point, i) => (
              <li key={i} className="text-sm text-[var(--color-text-secondary)] list-disc ml-4">{point}</li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[var(--color-border-subtle)]">
          <h4 className="flex items-center font-semibold text-sm uppercase tracking-wider text-[var(--color-accent-success)] mb-3">
            <Lightbulb className="w-4 h-4 mr-2" /> The Solution
          </h4>
          <p className="text-sm text-[var(--color-text-primary)] font-medium leading-relaxed bg-[var(--color-surface-glass)] p-3 rounded-lg">
            {vertical.solution}
          </p>
        </div>

        <div className="pt-4 border-t border-[var(--color-border-subtle)]">
          <h4 className="flex items-center font-semibold text-sm uppercase tracking-wider text-[var(--color-accent-primary)] mb-3">
            <Target className="w-4 h-4 mr-2" /> Actionable Approach
          </h4>
          <p className="text-sm text-[var(--color-text-secondary)] italic">
            "{vertical.pitchPath}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
