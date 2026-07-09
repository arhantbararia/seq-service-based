import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation Catalogue — Pre-Built n8n Workflows for Every Vertical",
  description: "Explore our library of pre-built n8n workflows designed to eliminate manual data entry, aggregator fees, and lost hours.",
  alternates: {
    canonical: "/catalogue/automations",
  },
};

export default function AutomationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
