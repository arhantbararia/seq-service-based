import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Portfolio — High-Performance Sites for Indian Businesses",
  description: "Browse our portfolio of high-converting websites built for Indian businesses. Fast, compliant, and designed to eliminate aggregator dependency.",
  alternates: {
    canonical: "/catalogue/websites",
  },
};

export default function WebsitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
