"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "SERVICES", href: "/services" },
  { name: "VERTICALS", href: "/verticals" },
  { name: "WEBSITES", href: "/catalogue/websites" },
  { name: "AUTOMATIONS", href: "/catalogue/automations" },
  { name: "ABOUT", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[var(--color-background-primary)] border-b border-[var(--color-border-subtle)] py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-mono text-xs tracking-widest transition-colors hover:text-[var(--color-text-primary)] relative group",
                pathname === link.href
                  ? "text-[var(--color-text-primary)]"
                  : "text-[var(--color-text-secondary)]"
              )}
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-[var(--color-text-primary)]">[</span>
              {link.name}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-[var(--color-text-primary)]">]</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/contact">[ GET_STARTED ]</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[var(--color-text-primary)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-background-primary)] border-b border-[var(--color-border-subtle)] p-4 flex flex-col gap-4 shadow-xl md:hidden h-screen">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-mono tracking-widest text-sm p-3 border-b border-[var(--color-border-subtle)] transition-colors",
                  pathname === link.href
                    ? "bg-[var(--color-text-primary)] text-[var(--color-background-primary)]"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                )}
              >
                [ {link.name} ]
              </Link>
            ))}
            <Button asChild variant="outline" className="w-full mt-4">
              <Link href="/contact">[ GET_STARTED ]</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
