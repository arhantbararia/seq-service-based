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
  { 
    name: "CATALOGUE", 
    href: "#",
    submenu: [
      { name: "WEBSITES", href: "/catalogue/websites" },
      { name: "AUTOMATIONS", href: "/catalogue/automations" },
    ]
  },
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
        <nav className="hidden md:flex items-center gap-8 relative h-full">
          {navLinks.map((link) => (
            link.submenu ? (
              <div key={link.name} className="relative group h-full flex items-center">
                <span className={cn(
                  "font-mono text-xs tracking-widest transition-colors cursor-pointer relative group-hover:text-[var(--color-text-primary)] flex items-center",
                  pathname.startsWith("/catalogue")
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)]"
                )}>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-[var(--color-text-primary)]">[</span>
                  {link.name}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-[var(--color-text-primary)]">]</span>
                </span>
                
                {/* Invisible hover bridge to keep menu open while moving mouse */}
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] flex flex-col technical-border shadow-2xl">
                    {link.submenu.map(sublink => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className={cn(
                          "font-mono text-xs tracking-widest p-4 border-b border-[var(--color-border-subtle)] last:border-b-0 hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] transition-colors text-center",
                          pathname === sublink.href ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"
                        )}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-mono text-xs tracking-widest transition-colors hover:text-[var(--color-text-primary)] relative group flex items-center h-full",
                  pathname === link.href
                    ? "text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-secondary)]"
                )}
              >
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-[var(--color-text-primary)]">[</span>
                {link.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-[var(--color-text-primary)]">]</span>
              </Link>
            )
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
        <div className="absolute top-full left-0 right-0 bg-[var(--color-background-primary)] border-b border-[var(--color-border-subtle)] p-4 flex flex-col gap-4 shadow-xl md:hidden h-screen overflow-y-auto pb-32">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              link.submenu ? (
                <div key={link.name} className="flex flex-col border-b border-[var(--color-border-subtle)] pb-2">
                  <div className="font-mono tracking-widest text-sm p-3 text-[var(--color-text-secondary)]">
                    [ {link.name} ]
                  </div>
                  <div className="flex flex-col pl-6 ml-3 mt-2 space-y-2 border-l border-[var(--color-border-subtle)]">
                    {link.submenu.map(sublink => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className={cn(
                          "font-mono tracking-widest text-xs p-2 transition-colors",
                          pathname === sublink.href
                            ? "text-[var(--color-text-primary)]"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                        )}
                      >
                        - {sublink.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
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
              )
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
