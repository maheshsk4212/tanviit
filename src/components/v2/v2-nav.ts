import { solutionAreas } from "@/lib/v2-content";

export interface V2NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

/**
 * The navigation the client's homepage guide asks for: About, Capabilities,
 * Contract Vehicles, Customers, Careers, Contact — each a page of its own
 * rather than an anchor into one long scroll.
 */
export const v2Nav: V2NavItem[] = [
  {
    label: "About",
    href: "/v2/about",
    children: [
      { label: "Company overview", href: "/v2/about" },
      { label: "Leadership", href: "/v2/about#leadership" },
      { label: "Certifications & credentials", href: "/v2/about#certifications" },
      { label: "Joint ventures", href: "/v2/about#joint-ventures" },
    ],
  },
  {
    label: "Capabilities",
    href: "/v2/capabilities",
    children: solutionAreas.map((area) => ({
      label: area.name,
      href: `/v2/capabilities#${area.slug}`,
    })),
  },
  {
    label: "Contract vehicles",
    href: "/v2/contract-vehicles",
    children: [
      { label: "NASA SEWP VI — Category C", href: "/v2/contract-vehicles/sewp-vi" },
      { label: "How to buy", href: "/v2/contract-vehicles#how-to-buy" },
      { label: "Cooperative routes", href: "/v2/contract-vehicles#cooperative" },
      { label: "All vehicles & NAICS", href: "/v2/contract-vehicles" },
    ],
  },
  { label: "Customers", href: "/v2/customers" },
  { label: "News", href: "/v2/news" },
  { label: "Careers", href: "/v2/careers" },
];
