import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start Your Free ROI Audit",
  description: "Tell us about your manual bottlenecks. We'll provide a free ROI calculation and build a visual prototype within 48 hours.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
