import { AutomationEntry } from "@/lib/types";

export const automations: AutomationEntry[] = [
  {
    "id": "automated-compliance-deadline-reminders-ca-tax",
    "name": "Automated Compliance Deadline Reminders",
    "description": "Automated workflow for Automated Compliance Deadline Reminders",
    "verticalId": "professional-services",
    "segmentId": "ca-tax",
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/CA-firms/Automated Compliance Deadline Reminders.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "If",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "automated-fee-payment-reminders-ca-tax",
    "name": "Automated Fee Payment Reminders",
    "description": "Automated workflow for Automated Fee Payment Reminders",
    "verticalId": "professional-services",
    "segmentId": "ca-tax",
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/CA-firms/Automated Fee Payment Reminders.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Split In Batches",
        "Switch"
      ]
    }
  },
  {
    "id": "conditional-routing-handling-the-reply-ca-tax",
    "name": "Conditional Routing (Handling the Reply)",
    "description": "Automated workflow for Conditional Routing (Handling the Reply)",
    "verticalId": "professional-services",
    "segmentId": "ca-tax",
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/CA-firms/Conditional Routing (Handling the Reply).json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Whats App Trigger"
      ],
      "actions": [
        "Switch",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "one-click-document-collection-ca-tax",
    "name": "One-Click Document Collection",
    "description": "Automated workflow for One-Click Document Collection",
    "verticalId": "professional-services",
    "segmentId": "ca-tax",
    "complexity": "Medium",
    "timeSavedHours": 45,
    "workflowJsonPath": "/workflows/CA-firms/One-Click Document Collection.json",
    "nodeSummary": {
      "total": 9,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "If",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "the-satisfaction-outreach-ca-tax",
    "name": "The Satisfaction Outreach",
    "description": "Automated workflow for The Satisfaction Outreach",
    "verticalId": "professional-services",
    "segmentId": "ca-tax",
    "complexity": "Simple",
    "timeSavedHours": 15,
    "workflowJsonPath": "/workflows/CA-firms/The Satisfaction Outreach.json",
    "nodeSummary": {
      "total": 3,
      "triggers": [
        "Google Sheets Trigger"
      ],
      "actions": [
        "If",
        "Whats App"
      ]
    }
  },
  {
    "id": "aggregator-lead-synchronization-interior-architect",
    "name": "Aggregator Lead Synchronization",
    "description": "Automated workflow for Aggregator Lead Synchronization",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/interior-designer/Aggregator Lead Synchronization.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Email Read Imap",
        "Code",
        "Google Sheets"
      ]
    }
  },
  {
    "id": "milestone-triggered-invoice-generation-interior-architect",
    "name": "Milestone-Triggered Invoice Generation",
    "description": "Automated workflow for Milestone-Triggered Invoice Generation",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 2,
    "complexity": "Medium",
    "timeSavedHours": 45,
    "workflowJsonPath": "/workflows/interior-designer/Milestone-Triggered Invoice Generation.json",
    "nodeSummary": {
      "total": 9,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Http Request",
        "Google Sheets",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "project-status-broadcasts-owner-digests-interior-architect",
    "name": "Project Status Broadcasts & Owner Digests",
    "description": "Automated workflow for Project Status Broadcasts & Owner Digests",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 2,
    "complexity": "Medium",
    "timeSavedHours": 40,
    "workflowJsonPath": "/workflows/interior-designer/Project Status Broadcasts & Owner Digests.json",
    "nodeSummary": {
      "total": 8,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Whats App",
        "Google Sheets",
        "Aggregate"
      ]
    }
  },
  {
    "id": "site-visit-scheduling-reminder-sequence-interior-architect",
    "name": "Site Visit Scheduling & Reminder Sequence",
    "description": "Automated workflow for Site Visit Scheduling & Reminder Sequence",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 2,
    "complexity": "Complex",
    "timeSavedHours": 55,
    "workflowJsonPath": "/workflows/interior-designer/Site Visit Scheduling & Reminder Sequence.json",
    "nodeSummary": {
      "total": 11,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "the-whatsapp-instant-brochure-dispatch-interior-architect",
    "name": "The WhatsApp Instant Brochure Dispatch",
    "description": "Automated workflow for The WhatsApp Instant Brochure Dispatch",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/interior-designer/The WhatsApp Instant Brochure Dispatch.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "If",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "the-zero-drop-lead-intake-system-interior-architect",
    "name": "The \"Zero-Drop\" Lead Intake System",
    "description": "Automated workflow for The \"Zero-Drop\" Lead Intake System",
    "verticalId": "real-estate",
    "segmentId": "interior-architect",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/interior-designer/The _Zero-Drop_ Lead Intake System.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "aggregator-lead-synchronization-ivf-clinic",
    "name": "Aggregator Lead Synchronization",
    "description": "Automated workflow for Aggregator Lead Synchronization",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/ivf-clinics/Aggregator Lead Synchronization.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Email Read Imap",
        "Code",
        "Google Sheets"
      ]
    }
  },
  {
    "id": "consultation-scheduling-reminder-sequence-ivf-clinic",
    "name": "Consultation Scheduling & Reminder Sequence",
    "description": "Automated workflow for Consultation Scheduling & Reminder Sequence",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 2,
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/ivf-clinics/Consultation Scheduling & Reminder Sequence.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Whats App",
        "Google Sheets",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "milestone-triggered-invoice-generation-ivf-clinic",
    "name": "Milestone-Triggered Invoice Generation",
    "description": "Automated workflow for Milestone-Triggered Invoice Generation",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 2,
    "complexity": "Medium",
    "timeSavedHours": 45,
    "workflowJsonPath": "/workflows/ivf-clinics/Milestone-Triggered Invoice Generation.json",
    "nodeSummary": {
      "total": 9,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Http Request",
        "Google Sheets",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "the-missing-document-lab-report-chaser-ivf-clinic",
    "name": "The Missing Document & Lab Report Chaser",
    "description": "Automated workflow for The Missing Document & Lab Report Chaser",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 2,
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/ivf-clinics/The Missing Document & Lab Report Chaser.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Split In Batches",
        "Whats App"
      ]
    }
  },
  {
    "id": "the-whatsapp-instant-brochure-dispatch-ivf-clinic",
    "name": "The WhatsApp Instant Brochure Dispatch",
    "description": "Automated workflow for The WhatsApp Instant Brochure Dispatch",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/ivf-clinics/The WhatsApp Instant Brochure Dispatch.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "If",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "the-zero-drop-patient-intake-system-ivf-clinic",
    "name": "The \"Zero-Drop\" Patient Intake System",
    "description": "Automated workflow for The \"Zero-Drop\" Patient Intake System",
    "verticalId": "healthcare",
    "segmentId": "ivf-clinic",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/ivf-clinics/The _Zero-Drop_ Patient Intake System.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "court-hearing-reminder-law-firm",
    "name": "Court Hearing Reminder",
    "description": "Automated workflow for Court Hearing Reminder",
    "verticalId": "professional-services",
    "segmentId": "law-firm",
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/law-firms/Court Hearing Reminder.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "If",
        "Split In Batches"
      ]
    }
  },
  {
    "id": "instant-capture-alerts-law-firm",
    "name": "Instant Capture & Alerts",
    "description": "Automated workflow for Instant Capture & Alerts",
    "verticalId": "professional-services",
    "segmentId": "law-firm",
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/law-firms/Instant Capture & Alerts.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Set",
        "Google Sheets",
        "Whats App"
      ]
    }
  },
  {
    "id": "the-24-hour-follow-up-reminder-law-firm",
    "name": "The 24-Hour Follow-Up Reminder",
    "description": "Automated workflow for The 24-Hour Follow-Up Reminder",
    "verticalId": "professional-services",
    "segmentId": "law-firm",
    "complexity": "Simple",
    "timeSavedHours": 15,
    "workflowJsonPath": "/workflows/law-firms/The 24-Hour Follow-Up Reminder.json",
    "nodeSummary": {
      "total": 3,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Whats App"
      ]
    }
  },
  {
    "id": "weekly-lead-summary-law-firm",
    "name": "Weekly Lead Summary",
    "description": "Automated workflow for Weekly Lead Summary",
    "verticalId": "professional-services",
    "segmentId": "law-firm",
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/law-firms/Weekly Lead Summary.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Code",
        "Whats App"
      ]
    }
  },
  {
    "id": "lead-capture",
    "name": "Lead Capture & CRM Routing",
    "description": "Automated workflow for Lead Capture & CRM Routing",
    "verticalId": "cross-vertical",
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/lead-capture.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Email Send",
        "If"
      ]
    }
  },
  {
    "id": "after-hours-missed-call-crisis-routing-mental-wellness",
    "name": "After-Hours Missed Call & Crisis Routing",
    "description": "Automated workflow for After-Hours Missed Call & Crisis Routing",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 1,
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/mental-health-clinics/After-Hours Missed Call & Crisis Routing.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "aggregator-lead-synchronization-mental-wellness",
    "name": "Aggregator Lead Synchronization",
    "description": "Automated workflow for Aggregator Lead Synchronization",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/mental-health-clinics/Aggregator Lead Synchronization.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Email Read Imap",
        "Code",
        "Google Sheets"
      ]
    }
  },
  {
    "id": "automated-post-session-feedback-review-generation-mental-wellness",
    "name": "Automated Post-Session Feedback & Review Generation",
    "description": "Automated workflow for Automated Post-Session Feedback & Review Generation",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 2,
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/mental-health-clinics/Automated Post-Session Feedback & Review Generation.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Wait",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "consultation-scheduling-reminder-sequence-mental-wellness",
    "name": "Consultation Scheduling & Reminder Sequence",
    "description": "Automated workflow for Consultation Scheduling & Reminder Sequence",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 2,
    "complexity": "Medium",
    "timeSavedHours": 50,
    "workflowJsonPath": "/workflows/mental-health-clinics/Consultation Scheduling & Reminder Sequence.json",
    "nodeSummary": {
      "total": 10,
      "triggers": [
        "Webhook",
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Supabase"
      ]
    }
  },
  {
    "id": "the-whatsapp-instant-brochure-form-dispatch-mental-wellness",
    "name": "The WhatsApp Instant Brochure/ Form Dispatch",
    "description": "Automated workflow for The WhatsApp Instant Brochure/ Form Dispatch",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/mental-health-clinics/The WhatsApp Instant Brochure_ Form Dispatch.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "If",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "the-zero-drop-patient-intake-system-mental-wellness",
    "name": "The \"Zero-Drop\" Patient Intake System",
    "description": "Automated workflow for The \"Zero-Drop\" Patient Intake System",
    "verticalId": "healthcare",
    "segmentId": "mental-wellness",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/mental-health-clinics/The _Zero-Drop_ Patient Intake System.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "appointment-reminder-prep-instructions-pathology-lab",
    "name": "Appointment Reminder + Prep Instructions",
    "description": "Automated workflow for Appointment Reminder + Prep Instructions",
    "verticalId": "healthcare",
    "segmentId": "pathology-lab",
    "complexity": "Medium",
    "timeSavedHours": 30,
    "workflowJsonPath": "/workflows/path-labs/Appointment Reminder + Prep Instructions.json",
    "nodeSummary": {
      "total": 6,
      "triggers": [
        "Schedule Trigger"
      ],
      "actions": [
        "Google Sheets",
        "Switch",
        "Whats App"
      ]
    }
  },
  {
    "id": "lead-gen-and-wa-reachout-pathology-lab",
    "name": "Lead Gen and WA reachout",
    "description": "Automated workflow for Lead Gen and WA reachout",
    "verticalId": "healthcare",
    "segmentId": "pathology-lab",
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/path-labs/Lead Gen and WA reachout.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Set",
        "Google Sheets",
        "Whats App"
      ]
    }
  },
  {
    "id": "report-sending-automation-pathology-lab",
    "name": "report sending automation",
    "description": "Automated workflow for report sending automation",
    "verticalId": "healthcare",
    "segmentId": "pathology-lab",
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/path-labs/report sending automation.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Google Sheets Trigger"
      ],
      "actions": [
        "If",
        "Set",
        "Whats App"
      ]
    }
  },
  {
    "id": "aggregator-lead-synchronization-immigration-visa",
    "name": "Aggregator Lead Synchronization",
    "description": "Automated workflow for Aggregator Lead Synchronization",
    "verticalId": "professional-services",
    "segmentId": "immigration-visa",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 25,
    "workflowJsonPath": "/workflows/visa-consultant/Aggregator Lead Synchronization.json",
    "nodeSummary": {
      "total": 5,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Email Read Imap",
        "Code",
        "Google Sheets"
      ]
    }
  },
  {
    "id": "automated-thank-you-next-steps-immigration-visa",
    "name": "Automated Thank-You & Next Steps",
    "description": "Automated workflow for Automated Thank-You & Next Steps",
    "verticalId": "professional-services",
    "segmentId": "immigration-visa",
    "tier": 1,
    "complexity": "Simple",
    "timeSavedHours": 20,
    "workflowJsonPath": "/workflows/visa-consultant/Automated Thank-You & Next Steps.json",
    "nodeSummary": {
      "total": 4,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Set",
        "Whats App",
        "Email Send"
      ]
    }
  },
  {
    "id": "the-zero-drop-lead-intake-system-immigration-visa",
    "name": "The \"Zero-Drop\" Lead Intake System",
    "description": "Automated workflow for The \"Zero-Drop\" Lead Intake System",
    "verticalId": "professional-services",
    "segmentId": "immigration-visa",
    "tier": 1,
    "complexity": "Medium",
    "timeSavedHours": 35,
    "workflowJsonPath": "/workflows/visa-consultant/The _Zero-Drop_ Lead Intake System.json",
    "nodeSummary": {
      "total": 7,
      "triggers": [
        "Webhook"
      ],
      "actions": [
        "Google Sheets",
        "Whats App",
        "Email Send"
      ]
    }
  }
];
