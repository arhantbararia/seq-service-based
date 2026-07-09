import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://services.sequels.diy"),
  title: {
    template: "%s | Sequels",
    default: "Sequels — Web Automation & Technical Consulting for Indian MSMEs",
  },
  description: "Web automation and technical consulting for Indian MSMEs — websites, dashboards, and workflow automation across real estate, professional services, and healthcare.",
  openGraph: {
    title: "Sequels — Web Automation & Technical Consulting for Indian MSMEs",
    description: "Web automation and technical consulting for Indian MSMEs — websites, dashboards, and workflow automation across real estate, professional services, and healthcare.",
    url: "https://services.sequels.diy",
    siteName: "Sequels",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sequels — Web Automation & Technical Consulting for Indian MSMEs",
    description: "Web automation and technical consulting for Indian MSMEs — websites, dashboards, and workflow automation across real estate, professional services, and healthcare.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[var(--color-background-primary)] text-[var(--color-text-primary)] antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sequels",
              "url": "https://services.sequels.diy",
              "description": "Web automation and technical consulting for Indian MSMEs — websites, dashboards, and workflow automation across real estate, professional services, and healthcare.",
              "areaServed": "IN",
              "priceRange": "₹5,000 - ₹15,00,000",
              "sameAs": ["https://www.linkedin.com/company/sequels-diy/"],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "services@sequels.diy",
                "contactType": "sales"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
