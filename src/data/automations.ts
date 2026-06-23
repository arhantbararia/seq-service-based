import { AutomationEntry } from "@/lib/types";

export const automations: AutomationEntry[] = [
  {
    id: "auto-lead-capture",
    name: "Unified Lead Intake Routing",
    description: "Automatically captures leads from web forms, Practo, JustDial, and MagicBricks, standardizes the data, and routes it directly to your CRM or email.",
    verticalId: "cross-vertical",
    complexity: "Medium",
    timeSavedHours: 45,
    workflowJsonPath: "/workflows/lead-capture.json",
    nodeSummary: {
      total: 8,
      triggers: ["Webhook", "Email", "API"],
      actions: ["Google Sheets", "Email Notification", "Data Transformation"],
    },
  },
  {
    id: "auto-review-gen",
    name: "Post-Service Review Generation",
    description: "Triggers an automated review request via email 24 hours after a service is marked complete in your system, filtering out negative feedback to an internal dashboard.",
    verticalId: "lifestyle-retail",
    complexity: "Simple",
    timeSavedHours: 20,
    workflowJsonPath: "/workflows/lead-capture.json", // reusing placeholder for now
    nodeSummary: {
      total: 5,
      triggers: ["Webhook"],
      actions: ["Email Send", "Filter", "Airtable"],
    },
  },
  {
    id: "auto-lab-report",
    name: "Automated Lab Report Delivery",
    description: "Watches for new PDF reports in a secure folder, matches them to patient records, and automatically emails the secure link to the patient.",
    verticalId: "healthcare",
    complexity: "Complex",
    timeSavedHours: 120,
    workflowJsonPath: "/workflows/lead-capture.json",
    nodeSummary: {
      total: 12,
      triggers: ["FTP Watch", "Folder Trigger"],
      actions: ["Postgres Update", "Email Send", "PDF Parser"],
    },
  }
];
