import { TechnicalGrid } from "@/components/animations/TechnicalGrid";
import { TextReveal } from "@/components/animations/TextReveal";
import { FadeUp } from "@/components/animations/FadeUp";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroHome() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-20 overflow-hidden">
      <TechnicalGrid />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-start text-left justify-center h-full">
        {/* Technical metadata overlay */}
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-8 text-[var(--color-text-muted)] font-mono text-sm tracking-widest uppercase">
            <span className="w-12 h-[1px] bg-[var(--color-text-muted)]"></span>
            <span></span>
            <span className="w-12 h-[1px] bg-[var(--color-text-muted)]"></span>
          </div>
        </FadeUp>

        <TextReveal
          text="We Build Digital Infrastructure That Pays for  Itself"
          className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-serif tracking-tight max-w-6xl mb-12 justify-start leading-[1.05]"
        />

        <FadeUp delay={0.6}>
          <div className="flex gap-6 items-center">
            <MagneticButton>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background-primary)] text-lg px-8 py-6 rounded-none transition-colors duration-300">
                <Link href="/services">Explore Options</Link>
              </Button>
            </MagneticButton>

            <div className="hidden md:flex font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider max-w-xs leading-relaxed">
              Scroll down to know more
            </div>
          </div>
        </FadeUp>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <FadeUp delay={1.2}>
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-4">

          </div>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[var(--color-text-primary)] to-transparent opacity-30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-accent-primary)] animate-[scroll_2s_ease-in-out_infinite]"></div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
