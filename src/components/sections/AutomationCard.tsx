"use client";

import { useState } from "react";
import { AutomationEntry } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { WorkflowViewer } from "@/components/sections/WorkflowViewer";
import { Button } from "@/components/ui/Button";
import { Clock, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AutomationCardProps {
  automation: AutomationEntry;
}

export function AutomationCard({ automation }: AutomationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="h-full flex flex-col overflow-hidden bg-[var(--color-background-primary)] border-[var(--color-border-subtle)]">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-accent-secondary)]/10 text-[var(--color-accent-secondary)] border border-[var(--color-accent-secondary)]/20 uppercase tracking-wider">
            {automation.complexity} Logic
          </span>
          <div className="flex items-center text-sm font-medium text-[var(--color-accent-success)]">
            <Clock className="w-4 h-4 mr-1" />
            {automation.timeSavedHours}h / month saved
          </div>
        </div>
        <CardTitle className="text-xl mb-2 mt-2">{automation.name}</CardTitle>
        <p className="text-[var(--color-text-secondary)] text-sm">{automation.description}</p>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-grow flex flex-col justify-end">
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
      </CardContent>

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
