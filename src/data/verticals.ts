import { Vertical } from "@/lib/types";

export const verticals: Vertical[] = [
  {
    id: "real-estate",
    name: "Real Estate & Architecture",
    icon: "Building2",
    painPoints: [
      "Leads dropping off due to slow response times",
      "Messy CRM pipelines across multiple aggregator portals",
      "Inconsistent property or project portfolio updates",
      "Manual client intake for complex projects"
    ],
    solution: "Instant lead capture automations, dynamic property catalog sites, and stunning portfolio showcases.",
    pitchPath: "Automate portal lead ingestion and build an owned digital asset that eliminates aggregator dependency.",
    icp: "Real estate brokers, consultancies, builders, commercial agencies, and interior/architectural firms.",
    keywords: ["real estate CRM", "property listing website", "broker automation", "architect portfolio"],
    recommendedTiers: [2, 3],
    segments: [
      {
        id: "indie-broker",
        name: "Independent Broker",
        description: "Solo brokers needing lead capture & CRM focus.",
        icon: "User"
      },
      {
        id: "re-consultancy",
        name: "Real Estate Consultancy",
        description: "Small teams (1-10 agents) requiring pipeline management.",
        icon: "Users"
      },
      {
        id: "builder-developer",
        name: "Builder or Developer",
        description: "Residential projects and plotted developments needing project showcase sites.",
        icon: "Building"
      },
      {
        id: "commercial-agency",
        name: "Commercial Agency",
        description: "Handling different listing types and tenant management workflows.",
        icon: "Briefcase"
      },
      {
        id: "interior-architect",
        name: "Interior Design & Architecture",
        description: "Portfolio sites, project galleries, and seamless client intake.",
        icon: "PenTool"
      }
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: "Briefcase",
    painPoints: [
      "Generic, unconvincing digital presence that fails to establish authority",
      "Slow, manual client onboarding and consultation booking",
      "Endless document collection via messy WhatsApp threads",
      "Manual compliance and deadline tracking"
    ],
    solution: "High-end Tier 1 websites with automated client intake pipelines and compliance reminder systems.",
    pitchPath: "Position as a premium authority while automating the initial consultation booking and document chase.",
    icp: "CA firms, law firms, company secretaries, immigration consultants, and financial advisors.",
    keywords: ["premium consultancy website", "client onboarding automation", "CA automation", "law firm CRM"],
    recommendedTiers: [1, 3],
    segments: [
      {
        id: "ca-tax",
        name: "CA & Tax Consultant",
        description: "Compliance calendars, automated document collection, and filing workflows.",
        icon: "Calculator"
      },
      {
        id: "law-firm",
        name: "Advocate / Law Firm",
        description: "Court date tracking, case management, and retainer workflows.",
        icon: "Scale"
      },
      {
        id: "company-secretary",
        name: "Company Secretary",
        description: "Statutory compliance and board meeting automation.",
        icon: "FileSignature"
      },
      {
        id: "immigration-visa",
        name: "Immigration Consultant",
        description: "Application tracking and document checklist automation.",
        icon: "Globe"
      },
      {
        id: "financial-advisor",
        name: "Financial Advisor",
        description: "Portfolio dashboards and AUM-based client segmentation.",
        icon: "TrendingUp"
      },
      {
        id: "insurance-broker",
        name: "Insurance Broker",
        description: "Policy renewal automation and claims tracking systems.",
        icon: "Shield"
      }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare & Diagnostics",
    icon: "Stethoscope",
    painPoints: [
      "Manual appointment scheduling and rescheduling",
      "Slow PDF report generation and delivery via manual WhatsApp/Email",
      "High reliance on third-party aggregators taking hefty cuts",
      "Complex paper-based consent forms"
    ],
    solution: "Independent patient portals with automated PDF generation, appointment handling, and digital consent.",
    pitchPath: "Reduce aggregator fees by building an owned, automated digital presence that patients trust.",
    icp: "Pathology labs, dental clinics, specialty clinics, and polyclinics.",
    keywords: ["clinic website", "patient portal", "lab report automation", "clinic CRM"],
    recommendedTiers: [1, 2, 3],
    segments: [
      {
        id: "pathology-lab",
        name: "Pathology & Diagnostic Lab",
        description: "Sample collection workflows, report generation, and automated delivery.",
        icon: "TestTube"
      },
      {
        id: "dental-clinic",
        name: "Dental Clinic",
        description: "Appointment-heavy workflows with automated recall reminders.",
        icon: "Smile"
      },
      {
        id: "physiotherapy",
        name: "Physiotherapy Clinic",
        description: "Session-based billing and automated patient progress tracking.",
        icon: "Activity"
      },
      {
        id: "ayurvedic-clinic",
        name: "Ayurvedic / Homeopathic",
        description: "Consultation-heavy workflows with tailored marketing automation.",
        icon: "Leaf"
      },
      {
        id: "general-physician",
        name: "General Physician Polyclinic",
        description: "High-volume walk-in management and digital OPD systems.",
        icon: "Stethoscope"
      },
      {
        id: "specialist-clinic",
        name: "Specialist Clinic",
        description: "Dermatology/Ophthalmology: procedure catalogs and before/after galleries.",
        icon: "Eye"
      },
      {
        id: "imaging-center",
        name: "Diagnostic Imaging Center",
        description: "Heavy equipment scheduling and radiology report workflows.",
        icon: "Monitor"
      },
      {
        id: "ivf-clinic",
        name: "IVF & Fertility Clinic",
        description: "Long patient journeys, cycle tracking, and consent-heavy processes.",
        icon: "Baby"
      },
      {
        id: "multi-specialty",
        name: "Multi-Specialty Polyclinic",
        description: "Multi-doctor scheduling and department-level digital dashboards.",
        icon: "Hospital"
      },
      {
        id: "maternity-clinic",
        name: "Maternity & Gynecology",
        description: "Trimester tracking and prenatal appointment sequences.",
        icon: "Heart"
      },
      {
        id: "mental-wellness",
        name: "Mental Wellness Clinic",
        description: "Consent form automation, session notes, and recurring appointments.",
        icon: "Brain"
      }
    ]
  }
];
