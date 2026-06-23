import { WebsiteEntry } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/Card";
import { RevealImage } from "@/components/animations/RevealImage";
import { Badge } from "lucide-react";

interface WebsiteShowcaseCardProps {
  website: WebsiteEntry;
}

export function WebsiteShowcaseCard({ website }: WebsiteShowcaseCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden bg-[var(--color-background-primary)] border-[var(--color-border-subtle)] group">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-border-subtle)]">
        <div className="absolute inset-0 bg-[var(--color-background-tertiary)] animate-pulse -z-10"></div>
        <RevealImage 
          src={website.imageUrl} 
          alt={website.title}
          className="w-full h-full"
          imageClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-background-secondary)]/90 backdrop-blur-sm border border-[var(--color-border-subtle)] text-[var(--color-text-primary)]">
            Tier {website.tier}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6 flex-grow flex flex-col">
        <h3 className="font-display text-xl font-semibold mb-2 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors">
          {website.title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm mb-6 flex-grow">
          {website.description}
        </p>
        
        <div className="space-y-4 pt-4 border-t border-[var(--color-border-subtle)] mt-auto">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {website.features.map(feature => (
                <span key={feature} className="px-2 py-1 bg-[var(--color-surface-glass)] border border-[var(--color-border-subtle)] rounded text-xs text-[var(--color-text-secondary)]">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] font-semibold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {website.techStack.map(tech => (
                <span key={tech} className="text-xs font-mono text-[var(--color-accent-secondary)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
