import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-[var(--color-background-secondary)] border-t border-[var(--color-border-subtle)] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <Logo />
            <p className="text-[var(--color-text-secondary)] text-sm max-w-xs leading-relaxed">
              Democratizing digital infrastructure for everyday people and businesses. We build solutions that eliminate errors and reduce headcount costs.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Services</Link></li>
              <li><Link href="/catalogue/websites" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Website Portfolio</Link></li>
              <li><Link href="/catalogue/automations" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Automation Catalogue</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-4">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/verticals#real-estate" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Real Estate & Architecture</Link></li>
              <li><Link href="/verticals#professional-services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Professional Services</Link></li>
              <li><Link href="/verticals#healthcare" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">Healthcare & Diagnostics</Link></li>
              <li><Link href="/verticals" className="text-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)] text-sm transition-colors">View All Industries →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-text-primary)] mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-[var(--color-text-secondary)] text-sm">
                India
              </li>
              <li>
                <a href="mailto:services@sequels.diy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
                  services@sequels.diy
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/sequels-diy/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] text-sm transition-colors inline-flex items-center gap-1.5"
                  aria-label="Sequels LinkedIn Page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  LinkedIn
                </a>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-[var(--color-accent-primary)] hover:underline text-sm font-medium">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border-subtle)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--color-text-muted)] text-sm">
            © {new Date().getFullYear()} Sequels. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] text-sm transition-colors">
              Privacy Policy (DPDP Compliant)
            </Link>
            <span className="text-[var(--color-text-muted)] text-sm">|</span>
            <span className="text-[var(--color-text-muted)] text-sm">Made with <span className="text-red-500">♥</span> in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
