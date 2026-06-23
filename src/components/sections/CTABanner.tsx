import { FadeUp } from "@/components/animations/FadeUp";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export function CTABanner({ title, subtitle, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="py-24 relative bg-[var(--color-background-primary)] border-y border-[var(--color-border-subtle)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center border border-[var(--color-border-subtle)] bg-[var(--color-background-primary)] p-10 md:p-16 relative technical-border">
          <div className="absolute top-0 left-0 p-4 font-mono text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase">
            [ Ready to start ]
          </div>
          
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-[var(--color-text-primary)]">
              {title}
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl font-sans text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <MagneticButton>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto rounded-none border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] transition-colors">
                <Link href={buttonHref} className="font-mono text-sm uppercase tracking-wider">
                  [ {buttonText} ]
                </Link>
              </Button>
            </MagneticButton>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
