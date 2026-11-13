/**
 * Content for the original design.
 *
 * The wording is the client's September 2026 implementation guides, as
 * corrected in their review of 13 Nov 2026 — the same text the second design
 * (/v2) carries. Wherever the two designs say the same thing, this file reads
 * it from `v2-content` rather than repeating it, so a correction lands on both
 * sites at once. What stays here is what belongs to this design alone: its
 * navigation, its photographs and the shapes its components expect.
 */

import {
  about,
  capabilitiesHero,
  employeeBenefits,
  gsaMas,
  homeHero,
  howWeDeliver,
  sewpVi,
  solutionAreas,
  v2Certifications,
  v2Site,
} from "./v2-content";

/** Free-to-use Unsplash photo (Unsplash License), served from its CDN. */
const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?w=${width}&q=80&auto=format&fit=crop`;

/** Canonical origin, used by metadata, robots.txt and the sitemap. */
export const siteUrl = "https://tanviit.netlify.app";

export const siteConfig = {
  name: "Tanvi IT Solutions",
  legalName: "Tanvi IT Solutions Inc.",
  tagline: v2Site.tagline,
  description: homeHero.statement,
  phone: "+1 (703) 864-7551",
  email: "info@tanviit.com",
  // Headquarters per the September 2026 content guides, which supersede the
  // earlier Reston address. NEEDS-CONTENT: street address for Chantilly.
  address: "Chantilly, Virginia",
};

export interface NavFeature {
  title: string;
  /** One short supporting line — the equivalent of a date on an event card. */
  meta: string;
  href: string;
  image: string;
  cta: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Optional mega-menu children shown on hover/focus for this item. */
  menu?: { label: string; href: string; description: string }[];
  /** Right-hand column of the mega menu. Real destinations only. */
  featured?: { heading: string; items: NavFeature[] };
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Capabilities",
    href: "/services",
    menu: [
      {
        label: "Application Development & Modernization",
        href: "/services#application-development-modernization",
        description: "Develop, enhance, integrate and modernize applications.",
      },
      {
        label: "Data & Analytics",
        href: "/services#data-analytics",
        description: "Turn data into actionable information.",
      },
      {
        label: "DevOps & Cloud Enablement",
        href: "/services#devops-cloud-enablement",
        description: "Better software delivery through DevOps and automation.",
      },
      {
        label: "Enterprise Architecture & Technology Strategy",
        href: "/services#enterprise-architecture",
        description: "Scalable, adaptable technology environments.",
      },
      {
        label: "Quality Engineering, IV&V & Testing",
        href: "/services#quality-engineering-ivv",
        description: "Structured quality engineering and testing.",
      },
      {
        label: "Emerging Technologies & Innovation",
        href: "/services#emerging-technologies",
        description: "New technology applied for practical value.",
      },
    ],
    featured: {
      heading: "Engage with confidence",
      items: [
        {
          title: "NASA SEWP VI — Category C",
          meta: "Contract 80TECH26D0642",
          href: "/sewp-vi",
          image: "/hero-government-hires.png",
          cta: "View contract",
        },
        {
          title: "Technology expertise",
          meta: "Software, cloud, data, enterprise platforms & cybersecurity",
          href: "/services#technology",
          image: "/hero-enterprise.png",
          cta: "See the stack",
        },
        {
          title: "How we deliver",
          meta: "Five steps, every engagement",
          href: "/services#process",
          image: "/hero-talent.png",
          cta: "See the process",
        },
      ],
    },
  },
  {
    label: "Industries",
    href: "/industries",
    menu: [
      {
        label: "Federal Government",
        href: "/industries#federal-government",
        description: "Modernize systems and mission-critical programs.",
      },
      {
        label: "State & Local",
        href: "/industries#state-government",
        description: "Citizen services and digital government.",
      },
      {
        label: "Healthcare",
        href: "/industries#healthcare",
        description: "Secure, compliant health IT solutions.",
      },
      {
        label: "Financial Services",
        href: "/industries#banking-financial-services",
        description: "Resilient, regulated financial systems.",
      },
      {
        label: "All industries",
        href: "/industries",
        description: "See every sector we serve.",
      },
    ],
    // Sectors not already in the list on the left, so the two columns don't
    // repeat each other. Photos match the verified tiles on /industries.
    featured: {
      heading: "Also serving",
      items: [
        {
          title: "Defense & Intelligence",
          meta: "Mission-critical systems for national security",
          href: "/industries#defense-intelligence",
          image:
            "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&q=80&auto=format&fit=crop",
          cta: "Explore",
        },
        {
          title: "Energy & Utilities",
          meta: "Reliable operations through modern IT",
          href: "/industries#energy-utilities",
          image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80&auto=format&fit=crop",
          cta: "Explore",
        },
        {
          title: "Education",
          meta: "Technology for learning, research & administration",
          href: "/industries#education",
          image:
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80&auto=format&fit=crop",
          cta: "Explore",
        },
      ],
    },
  },
  { label: "SEWP VI", href: "/sewp-vi" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

export const certifications = v2Certifications.map(({ name, detail }) => ({ name, detail }));

/**
 * Tanvi IT holds exactly two contract vehicles: NASA SEWP VI and GSA MAS.
 * That is the client's written correction of 13 Nov 2026.
 *
 * Not to be restored from an older deck: Alliant 2, FAA eFAST, SeaPort NxG,
 * ITES-3S, OASIS+, the cooperative routes (HGACBuy, NASPO ValuePoint, OMNIA
 * Partners, NCPA, Sourcewell) and 8(a) STARS III, whose contract
 * 47QTCB21D0382 belongs to TA Federal LLC rather than Tanvi IT Solutions Inc.
 */
export const contractVehicles = [
  {
    name: "NASA SEWP VI",
    detail: "Category C — Contract 80TECH26D0642",
    href: "/sewp-vi",
    image: unsplash("photo-1457364887197-9150188c107b", 1200),
  },
  {
    name: gsaMas.shortName,
    detail: "Multiple Award Schedule — Contract 47QTCA27D0018",
    href: "/about#contract-vehicles",
    image: unsplash("photo-1711895834959-ce9ae8c700dc", 1200),
  },
];

/*
 * Every figure below is one a reader can verify from the contracts, the
 * appraisal certificates or the company record. Unconfirmed capability
 * claims do not belong on a federal contractor's site.
 */
export const stats = [
  { value: "2008", label: "Serving clients since" },
  { value: "7", label: "Certifications & appraisals" },
  { value: "2", label: "Contract vehicles held" },
  { value: "8(a)", label: "SBA certified" },
];

export const trustBar = [
  { value: "SEWP VI", label: "NASA Category C contract holder" },
  { value: "GSA MAS", label: "Multiple Award Schedule contract holder" },
  { value: "CMMI L3", label: "Appraised for development & services" },
  { value: "ISO 27001", label: "Information security management" },
];

export const achievements = [
  {
    value: "Since 2008",
    label: "Delivering technology and consulting solutions to government and commercial organizations",
  },
  { value: "2", label: "Contract vehicles: NASA SEWP VI Category C and GSA MAS" },
  { value: "7", label: "Certifications, appraisals and socioeconomic credentials maintained" },
  { value: "541511", label: "NAICS on NASA SEWP VI — 541519 on GSA MAS" },
];

/*
 * Proven-results cards (context tag + big metric + one-line outcome).
 * NEEDS-CONTENT: replace these with specific, named-program outcomes cleared
 * for public use — those carry far more weight than aggregates.
 */
export const provenResults = [
  {
    context: "Federal & defense",
    metric: "SEWP VI",
    label: "Category C contract 80TECH26D0642 — IT mission-based services, open to every federal agency.",
    cta: "See the contract",
    href: "/sewp-vi",
  },
  {
    context: "Mission programs",
    metric: "CMMI L3",
    label: "Appraised at Level 3 for both development and services — the delivery discipline behind every program.",
    cta: "Explore our capabilities",
    href: "/services",
  },
  {
    context: "Security & quality",
    metric: "ISO 27001",
    label: "Certified information security management, alongside ISO 9001 quality and ISO 20000-1 service management.",
    cta: "About Tanvi IT",
    href: "/about",
  },
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export interface ServiceItem {
  slug: string;
  name: string;
  summary: string;
  capabilities: string[];
  image: string;
  visualNote: string;
}

/* This design's own photographs, one per solution area, in page order. */
const serviceImages = [
  "photo-1517048676732-d65bc937f952",
  "photo-1521791136064-7986c2920216",
  "photo-1573496130141-209d200cebd8",
  "photo-1758691736975-9f7f643d178e",
  "photo-1605379399642-870262d3d051",
  "photo-1687603917313-ccae1a289a9d",
];

/** The six solution areas from the capabilities guide. */
export const services: ServiceItem[] = solutionAreas.map((area, i) => ({
  slug: area.slug,
  name: area.name,
  summary: area.description,
  capabilities: area.services,
  image: `https://images.unsplash.com/${serviceImages[i]}?w=1800&q=85&auto=format&fit=crop`,
  visualNote: `${area.services.length} services in this area`,
}));

/** The opening of the capabilities page. */
export const servicesIntro = capabilitiesHero;

/* ------------------------------------------------------------------ */
/* Technology expertise                                                */
/* ------------------------------------------------------------------ */

export const techExpertise = [
  {
    area: "Software Development",
    headline: "Build and modernize the applications you run on",
    description:
      "Full-stack engineering across .NET, Java, Python and modern JavaScript frameworks — from new builds to legacy modernization.",
    stack: [".NET", "Java", "Python", "JavaScript", "React", "Angular", "Node.js", "PHP"],
    image: unsplash("photo-1687603917313-ccae1a289a9d"),
    imageAlt: "Source code on a monitor",
  },
  {
    area: "Cloud & DevOps",
    headline: "Move faster in the cloud",
    description:
      "Cloud migration, infrastructure-as-code and DevOps pipelines on AWS, Azure and GCP.",
    stack: ["AWS", "Azure", "GCP", "DevOps", "Docker", "Kubernetes", "Terraform"],
    image: unsplash("photo-1558494949-ef010cbdcc31"),
    imageAlt: "Network cables patched into a data-center switch",
  },
  {
    area: "Data & Analytics",
    headline: "Turn data into decisions",
    description:
      "Data engineering, BI and AI/ML that give leaders a trusted, timely view of the mission.",
    stack: ["Data Engineering", "BI", "AI/ML", "Big Data", "Power BI", "Tableau"],
    image: unsplash("photo-1551288049-bebda4e38f71"),
    imageAlt: "Performance analytics dashboards on a laptop",
  },
  {
    area: "Enterprise Solutions",
    headline: "Platforms that run the enterprise",
    description:
      "Salesforce, SAP, Oracle, ServiceNow and Microsoft 365 — configured, integrated and supported.",
    stack: ["Salesforce", "SAP", "Oracle", "ServiceNow", "SharePoint", "Microsoft 365"],
    image: unsplash("photo-1522071820081-009f0129c71c"),
    imageAlt: "A team working together on laptops",
  },
  {
    area: "Cybersecurity",
    headline: "Secure by design, compliant by default",
    description:
      "Network security, IAM, risk & compliance and security operations that keep systems protected and audit-ready.",
    stack: ["Network Security", "IAM", "Risk & Compliance", "Cloud Security", "SOC"],
    image: unsplash("photo-1633265486064-086b219458ec"),
    imageAlt: "A gold padlock resting on a keyboard",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export interface IndustryItem {
  slug: string;
  name: string;
  summary: string;
}

export const industries: IndustryItem[] = [
  {
    slug: "federal-government",
    name: "Federal Government",
    summary:
      "Helping federal agencies modernize systems, improve citizen services, and achieve mission outcomes.",
  },
  {
    slug: "state-government",
    name: "State Government",
    summary: "Supporting state agencies with secure, scalable, and cost-effective IT solutions.",
  },
  {
    slug: "local-government",
    name: "Local Government",
    summary: "Enabling local entities to streamline operations and enhance community engagement.",
  },
  {
    slug: "defense-intelligence",
    name: "Defense & Intelligence",
    summary:
      "Providing mission-critical IT solutions that strengthen national security and operational readiness.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Delivering secure, interoperable solutions that improve patient care and operational efficiency.",
  },
  {
    slug: "banking-financial-services",
    name: "Banking & Financial Services",
    summary:
      "Building secure and agile solutions that drive innovation and ensure regulatory compliance.",
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "Empowering institutions with technology that enhances learning, research, and administration.",
  },
  {
    slug: "energy-utilities",
    name: "Energy & Utilities",
    summary: "Optimizing operations and ensuring reliability through innovative IT solutions.",
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    summary:
      "Enabling seamless digital experiences and data-driven growth across retail platforms.",
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    summary:
      "Delivering robust, scalable solutions that power connectivity and customer experiences.",
  },
];

/* ------------------------------------------------------------------ */
/* Process, differentiators, clients                                   */
/* ------------------------------------------------------------------ */

/** How we deliver — five steps, every engagement. */
export const processSteps = howWeDeliver.map((item) => ({
  title: item.step,
  description: item.description,
}));

/** Why Tanvi IT — what clients rely on us for. */
export const whyUs = about.whyTanvi.map((item) => ({
  title: item.name,
  description: item.description,
}));

/** Client names as supplied in the design deck. */
export const clients = [
  "Deloitte",
  "SWIFT",
  "Leidos",
  "Booz Allen Hamilton",
  "PwC",
  "TENEO",
  "SAIC",
  "Citi",
  "KPMG",
  "ManTech",
];

export const testimonials = [
  {
    quote:
      "Tanvi IT Solutions Inc. consistently delivers high-quality talent and innovative solutions that help us drive client success. Their professionalism and commitment to excellence are unmatched.",
    author: "Engagement Partner",
    company: "Deloitte Consulting LLP",
    initials: "EP",
    image: unsplash("photo-1758518731706-be5d5230e5a5", 1200),
  },
  {
    quote:
      "Tanvi IT Solutions Inc. has been a trusted technology partner, providing skilled resources and exceptional support for our critical initiatives with agility and precision.",
    author: "Vice President — Technology",
    company: "SWIFT",
    initials: "VP",
    image: unsplash("photo-1572021335469-31706a17aaef", 1200),
  },
  {
    quote:
      "We value Tanvi IT Solutions Inc. for their responsive service, technical expertise, and ability to deliver complex solutions on time and within budget.",
    author: "Program Manager",
    company: "Leidos",
    initials: "PM",
    image: unsplash("photo-1573497701240-345a300b8d36", 1200),
  },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

/** Employee benefits, in the client's own wording — see `employeeBenefits`. */
export const benefits: BenefitItem[] = employeeBenefits.items.map((item) => ({
  title: item.name,
  description: item.description,
  icon: item.icon,
}));

/* ------------------------------------------------------------------ */
/* NASA SEWP VI — contract facts (from the SEWP VI content document)    */
/* ------------------------------------------------------------------ */

export const sewp = {
  contractNumber: "80TECH26D0642",
  category: "Category C — ITC/AV Mission-Based Services",
  contractType: "GWAC",
  pop: "Nov 2026 – Oct 2036",
  surcharge: "0.34%",
  uei: "VJHWCMQ1AVF5",
  naics: "541511 — Custom Computer Programming Services",
  contractHolderUrl:
    "https://www.sewp.nasa.gov/sewp6public/contractholders#/detail/01",
  overview:
    'The NASA SEWP (Solutions for Enterprise-Wide Procurement), pronounced "soup", provides the latest Information Technology, Communication, and Audio-Visual (ITC/AV) solutions and services for all Federal Agencies and their approved contractors. Created in 1993, SEWP I was the first Government-Wide Acquisition Contract (GWAC) in the federal acquisition space. Originally, the contract vehicle provided only technology products for NASA and all other agencies. SEWP has continually evolved over the past 30 years, expanding its scope to meet the requests of its customers. The SEWP vehicle represents acquisition innovation within the Federal Government. The program is self-funded through usage fees (0.34%) and provides all Federal agencies with acquisition support — more than 50,000 orders a year.',
  /* Program manager and deputy, as published in the SEWP VI ordering guide. */
  contacts: sewpVi.managers.slice(0, 2),
  fairOpportunity: {
    heading: "A.1.13 Fair Opportunity and Requests for Quotes",
    intro: [
      "Contractors will be provided with a fair opportunity at the individual order level as appropriate per FAR Part 16.505(b), including the SEWP RFQ tools. No documentation for the order selection is required to be submitted with the order. All such documentation is to be maintained by The Issuing Procurement Office.",
      "The Contractor shall not market, quote or otherwise offer for sale, any IT Solution not listed under this contract, until the said solutions are included in the SEWP database of record, and available to all Government end-users. If the Government issues a Request For Information (RFI) as part of market research, the Contractor may provide items not yet listed on their SEWP contract as part of a market research quote if:",
    ],
    conditions: [
      "all such items are clearly marked as not yet available on their SEWP contract; and",
      "the contractor submits a technology refreshment request to add those products to their contract.",
    ],
    trailing: [
      "If the Government issues a Request for Quote (RFQ) or a Market Research Request (MRR), the Contractor may only respond with items available on their Contract and the price of each item shall be no greater than the price in Attachment F SEWP database of record at the time the quote is issued. If the Contractor has insufficient items on their contract to fully respond to the Formal RFQ, the Contractor must respond with a No Bid. Unless the RFQ specifically allows for partial quote, the Contractor must respond fully to all the requirements specified in the RFQ.",
      "When submitting a quote to a government end-user, the contractor must clearly state the length of time the quote is valid. The contractor shall honor any order submitted within the stated time period of a quote.",
      "When responding to an RFI or RFQ issued from the NASA SEWP RFQ on-line quoting system, the Contractor must respond as outlined in Attachment C: Contract Holder User Manual (CHUM).",
      "Contract Holders are prohibited from using Government information posted on the NASA SEWP Contract Holder Only Page, such as RFQs, RFIs, etc., for purposes other than proposing on SEWP requirements. This includes Contract Holders providing third parties with SEWP information and requirements for the purpose of assisting companies that are not SEWP Contract Holders, with providing unsolicited proposals to meet agency requirements already posted to the NASA SEWP RFQ on-line quoting system.",
    ],
  },
  sewpContact: {
    pmoHours: "Mon–Fri, 7:30 AM – 6:00 PM (ET)",
    helpDesk: "(301) 286-1478",
    email: "help@sewp.nasa.gov",
    website: "https://www.sewp.nasa.gov",
    orders: "sewporders@sewp.nasa.gov",
  },
  links: [
    { label: "Tanvi IT Solutions Inc. homepage", href: "/" },
    { label: "NASA SEWP official homepage", href: "https://www.sewp.nasa.gov" },
    {
      label: "NASA SEWP tools and quote request tool",
      href: "https://www.sewp.nasa.gov/quote_request.shtml",
    },
    {
      label: "NASA SEWP fair opportunity information",
      href: "https://www.sewp.nasa.gov/fair_opportunity.shtml",
    },
    {
      label: "U.S. Access Board revised Section 508 standards",
      href: "https://www.access-board.gov/ict/",
    },
  ],
};
