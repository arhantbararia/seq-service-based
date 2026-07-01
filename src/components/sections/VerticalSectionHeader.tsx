import { GraduationCap, Building2, Stethoscope, Car, Briefcase, Factory, ShoppingBag } from "lucide-react";

export const getVerticalIcon = (iconName: string, className: string = "w-8 h-8 text-[var(--color-text-primary)]") => {
  switch (iconName) {
    case "GraduationCap": return <GraduationCap className={className} />;
    case "Building2": return <Building2 className={className} />;
    case "Stethoscope": return <Stethoscope className={className} />;
    case "Car": return <Car className={className} />;
    case "Briefcase": return <Briefcase className={className} />;
    case "Factory": return <Factory className={className} />;
    case "ShoppingBag": return <ShoppingBag className={className} />;
    default: return <Building2 className={className} />;
  }
};

interface VerticalSectionHeaderProps {
  name: string;
  icp: string;
  icon: string;
}

export function VerticalSectionHeader({ name, icp, icon }: VerticalSectionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-16 h-16 rounded-2xl bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
        {getVerticalIcon(icon)}
      </div>
      <div>
        <h2 className="text-3xl font-display font-bold text-[var(--color-accent-primary)]">
          {name}
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mt-1">
          {icp}
        </p>
      </div>
    </div>
  );
}
