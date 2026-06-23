"use client";

import { useState } from "react";
import { Service } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ChevronDown, CheckCircle2, LayoutTemplate, Layers, Workflow, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceTierCardProps {
  service: Service;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "LayoutTemplate": return <LayoutTemplate className="w-8 h-8 text-[var(--color-accent-primary)]" />;
    case "Layers": return <Layers className="w-8 h-8 text-[var(--color-accent-primary)]" />;
    case "Workflow": return <Workflow className="w-8 h-8 text-[var(--color-accent-primary)]" />;
    case "Server": return <Server className="w-8 h-8 text-[var(--color-accent-primary)]" />;
    default: return <Layers className="w-8 h-8 text-[var(--color-accent-primary)]" />;
  }
};

export function ServiceTierCard({ service }: ServiceTierCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="flex flex-col h-full bg-[var(--color-background-primary)]" id={service.id}>
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex justify-between items-start mb-4">
          <div className="w-14 h-14 rounded-xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center border border-[var(--color-accent-primary)]/20">
            {getIcon(service.icon)}
          </div>
          <div className="px-3 py-1 rounded-full border border-[var(--color-border-subtle)] bg-[var(--color-surface-glass)] text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider">
            Tier {service.tier}
          </div>
        </div>
        <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
        <p className="text-[var(--color-text-secondary)]">{service.scope}</p>
        
        <div className="mt-4 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[var(--color-accent-primary)] font-medium">
          <span>{isExpanded ? "Hide Details" : "View Details"}</span>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </CardHeader>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <CardContent className="pt-0 pb-6 border-t border-[var(--color-border-subtle)] mt-2">
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
                  <div className="inline-block px-3 py-1 rounded bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] text-sm font-mono text-[var(--color-accent-secondary)]">
                    {service.stack}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-3 text-sm uppercase tracking-wider">Features Included</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-[var(--color-text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent-primary)] mr-2 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-[var(--color-text-primary)] mb-2 text-sm uppercase tracking-wider">Ideal For</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] bg-[var(--color-surface-glass)] p-3 rounded-lg border border-[var(--color-border-subtle)]">
                    {service.idealFor}
                  </p>
                </div>
              </div>
            </CardContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
