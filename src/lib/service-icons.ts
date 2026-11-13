import {
  BarChart3,
  Cloud,
  Code2,
  Lightbulb,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** One mark per solution area, shared by the homepage tiles and /services. */
export const serviceIcons: Record<string, LucideIcon> = {
  "application-development-modernization": Code2,
  "data-analytics": BarChart3,
  "devops-cloud-enablement": Cloud,
  "enterprise-architecture": Network,
  "quality-engineering-ivv": ShieldCheck,
  "emerging-technologies": Lightbulb,
};
