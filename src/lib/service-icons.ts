import {
  Briefcase,
  Lightbulb,
  Repeat,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "contract-staffing": Users,
  "direct-hire": UserCheck,
  "contract-to-hire": Repeat,
  "rpo-solutions": Briefcase,
  "it-consulting": Lightbulb,
};
