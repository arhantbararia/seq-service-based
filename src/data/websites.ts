import { WebsiteEntry } from "@/lib/types";

export const websites: WebsiteEntry[] = [
  {
    id: "dental-clinic-tier1",
    title: "Premium Dental Clinic Platform",
    verticalId: "healthcare",
    tier: 1,
    description: "A high-conversion landing page designed for specialized clinics. Features automated appointment requests and a persuasive, referral-driven single-page architecture.",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
    features: ["Lead Capture Form", "SEO Optimization", "Mobile-First Design"],
    techStack: ["Next.js", "Tailwind CSS", "Cloudflare Pages"],
  },
  {
    id: "ca-firm-portal",
    title: "CA Firm Client Portal",
    verticalId: "professional-services",
    tier: 2,
    description: "A dynamic site for financial consultants featuring document upload portals, automated client intake, and secure data handling.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    features: ["Document Portal", "Dynamic Content", "Automated Intake"],
    techStack: ["Next.js", "Supabase", "Splitforms"],
  },
  {
    id: "realestate-catalog",
    title: "Property Listing Aggregator",
    verticalId: "real-estate",
    tier: 2,
    description: "Dynamic property catalog with advanced filtering, integrated map views, and direct broker contact routing.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    features: ["Dynamic Filtering", "CMS Integration", "Automated Routing"],
    techStack: ["Next.js", "Headless CMS", "Cloudflare Pages"],
  }
];
