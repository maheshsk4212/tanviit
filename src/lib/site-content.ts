export const siteConfig = {
  name: "Tanvi IT",
  tagline: "IT consulting, delivered since 2008.",
  description:
    "Tanvi IT is an IT services and consulting firm helping public and private sector clients modernize applications, harness data, and operate with confidence — since 2008.",
  phone: "+1 (703) 555-0190",
  email: "info@tanviit.com",
  address: "1900 Reston Metro Plaza, Reston, VA 20190",
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export interface ServiceItem {
  slug: string;
  name: string;
  summary: string;
  description: string;
  capabilities: string[];
  image: string;
  /** Short factual caption overlaid on the image — keeps the visual informative. */
  visualNote: string;
}

export const services: ServiceItem[] = [
  {
    slug: "app-dev-modernization",
    name: "App Dev & Modernization",
    summary: "Build new applications and modernize legacy systems onto resilient, cloud-ready architectures.",
    description:
      "We design, build, and modernize business-critical applications — from greenfield products to legacy re-platforming — using modern engineering practices that reduce risk and speed up delivery.",
    capabilities: [
      "Custom application design & development",
      "Legacy re-platforming and cloud migration",
      "API & microservices architecture",
      "Technical debt remediation",
    ],
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Monolith → microservices, shipped independently",
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    summary: "Turn scattered data into dashboards and reports decision-makers actually use.",
    description:
      "Our BI practice builds reporting and dashboarding solutions that give leadership a single source of truth, from data modeling through visualization.",
    capabilities: [
      "Dashboard & reporting design",
      "Data warehouse & data mart implementation",
      "KPI and metrics framework definition",
      "Self-service BI enablement",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    visualNote: "One governed source of truth",
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    summary: "Pipelines, models, and analysis that turn raw data into decisions.",
    description:
      "We help clients build the data infrastructure and analytical capability to move from raw data to trusted, actionable insight — including advanced and predictive analytics.",
    capabilities: [
      "ETL/ELT pipeline engineering",
      "Data quality & governance",
      "Predictive & advanced analytics",
      "Cloud data platform implementation",
    ],
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Sources → pipeline → warehouse → insight",
  },
  {
    slug: "devops",
    name: "DevOps",
    summary: "Automated pipelines and cloud infrastructure that ship reliably, faster.",
    description:
      "We design and operate CI/CD pipelines, infrastructure as code, and observability practices that let engineering teams ship changes safely and often.",
    capabilities: [
      "CI/CD pipeline design & automation",
      "Infrastructure as code",
      "Container orchestration (Docker/Kubernetes)",
      "Monitoring, logging & alerting",
    ],
    image:
      "https://images.unsplash.com/photo-1683322499436-f4383dd59f5a?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Commit → build → test → deploy → monitor",
  },
  {
    slug: "emerging-tech",
    name: "Emerging Tech",
    summary: "Practical AI, automation, and next-gen cloud adoption — piloted and productionized.",
    description:
      "Our Emerging Technologies group helps clients evaluate and adopt AI, intelligent automation, and next-generation cloud services, moving from proof of concept to production.",
    capabilities: [
      "AI & machine learning pilots",
      "Intelligent process automation",
      "Emerging cloud service evaluation",
      "Proof-of-concept to production delivery",
    ],
    image:
      "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Evaluate → prove → scale",
  },
  {
    slug: "enterprise-architecture",
    name: "Enterprise Architecture",
    summary: "Target-state architectures and modernization roadmaps aligned to business strategy.",
    description:
      "We help clients define current- and target-state architecture and build the modernization roadmap to get there — balancing cost, risk, and business objectives.",
    capabilities: [
      "Enterprise architecture blueprints",
      "Technology roadmap development",
      "Architecture governance & review boards",
      "Platform & vendor evaluation",
    ],
    image:
      "https://images.unsplash.com/photo-1603901622056-0a5bee231395?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Current state → target state roadmap",
  },
  {
    slug: "ivv-automation-testing",
    name: "IV&V & Automation Testing",
    summary: "Independent verification and automated test coverage that catch issues before release.",
    description:
      "Our IV&V and automation testing practice provides independent oversight and automated test frameworks that give clients confidence in every release.",
    capabilities: [
      "Independent verification & validation",
      "Test automation framework design",
      "Regression & API test coverage",
      "CI/CD-integrated quality gates",
    ],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80&auto=format&fit=crop",
    visualNote: "~60% unit · 30% integration · 10% E2E",
  },
  {
    slug: "performance-testing",
    name: "Performance Testing",
    summary: "Load and stress testing that validates scalability before your users find the limits.",
    description:
      "We plan and execute load, stress, and scalability testing for enterprise systems, identifying and resolving bottlenecks before they impact production.",
    capabilities: [
      "Load, stress & scalability testing",
      "Performance bottleneck analysis",
      "SLA & capacity planning support",
      "Database & application tuning recommendations",
    ],
    image:
      "https://images.unsplash.com/photo-1561474119-1b76f3a79816?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Find the limit before your users do",
  },
];

export interface IndustryItem {
  slug: string;
  name: string;
  summary: string;
  description: string;
  segments: string[];
  image: string;
  highlight: { label: string; title: string };
}

export const industries: IndustryItem[] = [
  {
    slug: "federal-government",
    name: "Federal Government",
    summary: "Mission-critical systems delivered to federal standards for security and compliance.",
    description:
      "We help federal agencies modernize legacy systems, strengthen security posture, and deliver citizen-facing services that meet strict compliance and accessibility standards.",
    segments: ["Defense & intelligence", "Civilian agencies", "Public health", "Grants & procurement systems"],
    image:
      "https://images.unsplash.com/photo-1557160854-e1e89fdd3286?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Modernizing mission-critical systems without disrupting operations",
    },
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    summary: "Secure, compliant modernization for banking, lending, and capital markets platforms.",
    description:
      "From core banking modernization to fraud analytics, we help financial institutions move faster while meeting the compliance bar regulators expect.",
    segments: ["Banking & payments", "Capital markets", "Lending platforms", "Wealth & asset management"],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Cutting core banking release cycles from months to weeks",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Interoperable, compliant systems that support better patient and provider outcomes.",
    description:
      "We build interoperable, compliant systems that reduce administrative burden and support better patient and provider outcomes.",
    segments: ["Payer operations", "Provider systems", "Care coordination", "Health data interoperability"],
    image:
      "https://images.unsplash.com/photo-1666886573301-b5d526cfd518?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Connecting care teams with a single source of patient data",
    },
  },
  {
    slug: "insurance",
    name: "Insurance",
    summary: "Claims, policy, and underwriting platforms modernized for speed and accuracy.",
    description:
      "We modernize claims, policy, and underwriting platforms so insurers can move faster without sacrificing accuracy or compliance.",
    segments: ["Claims processing", "Policy administration", "Underwriting automation", "Regulatory reporting"],
    image:
      "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Automating underwriting to cut policy issuance time in half",
    },
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary: "Scalable data and operations platforms for high-volume telecom environments.",
    description:
      "We help telecom providers scale data and operations platforms to keep pace with high-volume, always-on customer demand.",
    segments: ["Network operations", "Customer billing systems", "Field service management", "Data platform scaling"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Scaling billing infrastructure for millions of daily transactions",
    },
  },
  {
    slug: "retail-consumer",
    name: "Retail & Consumer",
    summary: "Customer-facing applications and analytics that keep pace with shifting demand.",
    description:
      "We build customer-facing applications and analytics platforms that help retailers keep pace with shifting demand and expectations.",
    segments: ["E-commerce platforms", "Inventory & supply chain", "Customer analytics", "Omnichannel experience"],
    image:
      "https://images.unsplash.com/photo-1782948603191-065fb15e2e8e?w=1200&q=80&auto=format&fit=crop",
    highlight: {
      label: "Why it matters",
      title: "Unifying online and in-store data into one customer view",
    },
  },
];

export const stats = [
  { value: "2008", label: "Founded" },
  { value: "150+", label: "Consultants" },
  { value: "80+", label: "Clients served" },
  { value: "99%", label: "Client retention" },
];

export const processSteps = [
  {
    title: "Discover",
    description: "We start by understanding your business goals, constraints, and current-state systems.",
  },
  {
    title: "Design",
    description: "Our architects and consultants design a solution and roadmap tailored to your environment.",
  },
  {
    title: "Deliver",
    description: "Cross-functional teams build, test, and deploy — with regular checkpoints and transparency.",
  },
  {
    title: "Support",
    description: "We stay engaged post-launch with support, optimization, and knowledge transfer.",
  },
];

export const testimonials = [
  {
    quote:
      "Tanvi IT modernized a system we'd been afraid to touch for a decade. Their team understood both the legacy constraints and where we needed to go.",
    author: "VP of Engineering, Financial Services Client",
    initials: "VE",
  },
  {
    quote:
      "The BI dashboards Tanvi built gave our leadership visibility we simply didn't have before. It changed how we make decisions.",
    author: "Director of Operations, Healthcare Client",
    initials: "DO",
  },
  {
    quote:
      "Responsive, senior, and genuinely invested in our outcomes — not just staffing bodies on a project.",
    author: "CTO, Federal Agency Partner",
    initials: "CT",
  },
];

export const milestones = [
  {
    year: "2008",
    title: "Tanvi IT founded",
    description: "Started with a focus on senior-led application development consulting.",
  },
  {
    year: "2013",
    title: "Federal practice launched",
    description: "Expanded into federal government engagements with a dedicated compliance practice.",
  },
  {
    year: "2017",
    title: "Data & BI practice added",
    description: "Built out business intelligence and data analytics capabilities in-house.",
  },
  {
    year: "2021",
    title: "DevOps & cloud expansion",
    description: "Grew our cloud, DevOps, and automation testing practices to cover the full lifecycle.",
  },
  {
    year: "Today",
    title: "150+ consultants strong",
    description: "Delivering across eight practices for clients in government, finance, and healthcare.",
  },
];

export const differentiators = [
  {
    label: "Delivery model",
    tanvi: "Accountable, senior-led delivery teams",
    others: "Individual resumes placed on your req",
  },
  {
    label: "Lifecycle coverage",
    tanvi: "Architecture through QA, in-house",
    others: "Single-skill staff augmentation",
  },
  {
    label: "Engagement focus",
    tanvi: "Measured by outcomes delivered",
    others: "Measured by hours billed",
  },
  {
    label: "Track record",
    tanvi: "Consulting firm, delivering since 2008",
    others: "Variable — often newly formed",
  },
  {
    label: "Access to leadership",
    tanvi: "Direct line to senior architects",
    others: "Filtered through account managers",
  },
];

export const whyUs = [
  {
    title: "Senior-led delivery",
    description: "Every engagement is led by senior consultants, not just staffed with junior bodies.",
  },
  {
    title: "Since 2008",
    description: "Nearly two decades of consulting experience across public and private sector clients.",
  },
  {
    title: "Full lifecycle capability",
    description: "From architecture through DevOps to QA, we cover the full delivery lifecycle in-house.",
  },
  {
    title: "Outcome-focused",
    description: "We measure success by your outcomes, not hours billed.",
  },
];
