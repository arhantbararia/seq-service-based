import { Segment } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { User, Users, Building, Briefcase, PenTool, Calculator, Scale, FileSignature, Globe, TrendingUp, Shield, TestTube, Smile, Activity, Leaf, Stethoscope, Eye, Monitor, Baby, Hospital, Heart, Brain } from "lucide-react";

interface SegmentCardProps {
  segment: Segment;
}

const getSegmentIcon = (iconName: string) => {
  switch (iconName) {
    case "User": return <User className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Users": return <Users className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Building": return <Building className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Briefcase": return <Briefcase className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "PenTool": return <PenTool className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Calculator": return <Calculator className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Scale": return <Scale className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "FileSignature": return <FileSignature className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Globe": return <Globe className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "TrendingUp": return <TrendingUp className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Shield": return <Shield className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "TestTube": return <TestTube className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Smile": return <Smile className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Activity": return <Activity className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Leaf": return <Leaf className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Stethoscope": return <Stethoscope className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Eye": return <Eye className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Monitor": return <Monitor className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Baby": return <Baby className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Hospital": return <Hospital className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Heart": return <Heart className="w-5 h-5 text-[var(--color-text-primary)]" />;
    case "Brain": return <Brain className="w-5 h-5 text-[var(--color-text-primary)]" />;
    default: return <Building className="w-5 h-5 text-[var(--color-text-primary)]" />;
  }
};

export function SegmentCard({ segment }: SegmentCardProps) {
  return (
    <Card className="h-full bg-[var(--color-surface-glass)] border-[var(--color-border-subtle)] hover:border-[var(--color-text-primary)] transition-colors duration-300">
      <CardHeader className="pb-3 flex flex-row items-center gap-3 space-y-0">
        <div className="w-10 h-10 rounded-xl bg-[var(--color-background-primary)] border border-[var(--color-border-subtle)] flex items-center justify-center shrink-0">
          {getSegmentIcon(segment.icon)}
        </div>
        <CardTitle className="text-[1.1rem] font-serif text-[var(--color-text-primary)] leading-tight">
          {segment.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {segment.description}
        </p>
      </CardContent>
    </Card>
  );
}
