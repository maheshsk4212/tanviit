import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  Gauge,
  Layers,
  Sparkles,
  TestTube2,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "app-dev-modernization": Code2,
  "business-intelligence": BarChart3,
  "data-analytics": Layers,
  devops: Boxes,
  "emerging-tech": Sparkles,
  "enterprise-architecture": Cloud,
  "ivv-automation-testing": TestTube2,
  "performance-testing": Gauge,
};
