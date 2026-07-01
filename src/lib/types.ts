export type TierLevel = 1 | 2 | 3 | 4;

export interface Service {
  id: string;
  name: string;
  tier: TierLevel;
  scope: string;
  stack: string;
  features: string[];
  idealFor: string;
  icon: string;
}

export interface Segment {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Vertical {
  id: string;
  name: string;
  icon: string;
  painPoints: string[];
  solution: string;
  pitchPath: string;
  icp: string;
  keywords: string[];
  recommendedTiers: TierLevel[];
  segments?: Segment[];
}

export interface WebsiteEntry {
  id: string;
  title: string;
  verticalId: string;
  segmentId?: string;
  tier: TierLevel;
  description: string;
  imageUrl: string;
  url?: string;
  features: string[];
  techStack: string[];
}

export interface AutomationEntry {
  id: string;
  name: string;
  description: string;
  verticalId: string | "cross-vertical";
  segmentId?: string;
  tier?: number;
  complexity: "Simple" | "Medium" | "Complex";
  timeSavedHours: number;
  workflowJsonPath: string;
  nodeSummary: {
    total: number;
    triggers: string[];
    actions: string[];
  };
}
