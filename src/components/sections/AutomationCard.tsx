"use client";

import { useState } from "react";
import { AutomationEntry } from "@/lib/types";
import { Card, CardTitle } from "@/components/ui/Card";
import { WorkflowViewer } from "@/components/sections/WorkflowViewer";
import { Button } from "@/components/ui/Button";
import { Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AutomationCardProps {
  automation: AutomationEntry;
  isCrossIndustry?: boolean;
  hideSegmentTag?: boolean;
}

import { verticals } from "@/data/verticals";

export function AutomationCard({ automation, isCrossIndustry = false, hideSegmentTag = false }: AutomationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  let segmentName = "";
  if (!isCrossIndustry && !hideSegmentTag && automation.segmentId) {
    for (const v of verticals) {
      const segment = v.segments?.find(s => s.id === automation.segmentId);
      if (segment) {
        segmentName = segment.name;
        break;
      }
    }
  }

  return (
    <Card className="flex flex-col overflow-hidden bg-[var(--color-background-primary)] border-[var(--color-border-subtle)]">
      <div className="flex flex-col md:flex-row p-6 gap-6 items-start md:items-center">
        <div className="flex-1 w-full">
          <div className="flex justify-between items-start mb-2 min-h-[28px]">
            <div>
              {segmentName && !isCrossIndustry && !hideSegmentTag ? (
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent-secondary)]/10 text-[var(--color-accent-secondary)] border border-[var(--color-accent-secondary)]/20 uppercase tracking-wider">
                  {segmentName}
                </span>
              ) : null}
            </div>
            {automation.tier ? (
              <div className="flex items-center text-xs font-semibold text-[var(--color-accent-primary)] bg-[var(--color-accent-primary)]/10 px-3 py-1 rounded-full border border-[var(--color-accent-primary)]/20 uppercase tracking-wider">
                Tier - {automation.tier}
              </div>
            ) : null}
          </div>
          <CardTitle className="text-xl mb-2 mt-2">{automation.name}</CardTitle>
          <p className="text-[var(--color-text-secondary)] text-sm">{automation.description}</p>
        </div>
        
        <div className="w-full md:w-auto md:min-w-[280px]">
          <Button 
            variant="outline" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between"
          >
            {isExpanded ? "Hide Workflow Architecture" : "View Workflow Architecture"}
            <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
              <ChevronDown className="w-4 h-4 ml-2" />
            </motion.div>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-[var(--color-border-subtle)]"
          >
            <div className="p-6 bg-[var(--color-background-secondary)]">
              <h4 className="text-sm font-semibold mb-4 text-[var(--color-text-primary)]">Live Architecture Preview</h4>
              <WorkflowViewer jsonUrl={automation.workflowJsonPath} />
              
              <div className="mt-6 flex justify-between items-center">
                <div className="text-sm text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text-primary)]">{automation.nodeSummary.total} Nodes:</span>{" "}
                  {automation.nodeSummary.triggers.join(", ")} → {automation.nodeSummary.actions.join(", ")}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
