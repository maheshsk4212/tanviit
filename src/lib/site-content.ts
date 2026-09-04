/**
 * Site content, sourced from:
 *  - Tanvi_IT_Solutions_Website_Design_Presentation.pptx (design + copy spec)
 *  - "NASA SEWP VI - Website Content - Tanvi IT.docx" (contract facts)
 *
 * Anything marked NEEDS-CONFIRMATION is a placeholder, or has conflicting
 * values between source slides — see the note on each.
 */

export const siteConfig = {
  name: "Tanvi IT Solutions",
  legalName: "Tanvi IT Solutions Inc.",
  tagline: "The Right Partner. The Right Talent. The Right Results.",
  description:
    "Tanvi IT Solutions Inc. connects U.S. organizations with skilled IT professionals and delivers end-to-end technology solutions for federal, state, local and commercial clients.",
  // NEEDS-CONFIRMATION: the design deck shows a 555- placeholder number and an
  // Austin, TX address; the SEWP document uses tanviit.com and 703 numbers.
  phone: "+1 (703) 864-7551",
  email: "info@tanviit.com",
  address: "1900 Reston Metro Plaza, Reston, VA 20190",
};

export interface NavItem {
  label: string;
  href: string;
  /** Optional mega-menu children shown on hover/focus for this item. */
  menu?: { label: string; href: string; description: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    menu: [
      {
        label: "Contract Staffing",
        href: "/services#contract-staffing",
        description: "Pre-vetted IT talent, fast — short and long-term.",
      },
      {
        label: "Direct Hire",
        href: "/services#direct-hire",
        description: "Permanent hires who strengthen your core team.",
      },
      {
        label: "Contract-to-Hire",
        href: "/services#contract-to-hire",
        description: "Try talent on contract, convert when it fits.",
      },
      {
        label: "RPO Solutions",
        href: "/services#rpo-solutions",
        description: "Recruitment process outsourcing at scale.",
      },
      {
        label: "IT Consulting",
        href: "/services#it-consulting",
        description: "Advisory and delivery across the tech lifecycle.",
      },
    ],
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
  },
  { label: "SEWP VI", href: "/sewp-vi" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Credentials                                                         */
/* ------------------------------------------------------------------ */

export const certifications = [
  { name: "ISO 9001:2015", detail: "Quality Management" },
  { name: "ISO/IEC 20000-1:2018", detail: "IT Service Management" },
  { name: "ISO/IEC 27001:2013", detail: "Information Security Management" },
  { name: "CMMI-DEV L3", detail: "Development Excellence" },
  { name: "CMMI-SVC L3", detail: "Service Excellence" },
  { name: "8(a)", detail: "SBA Certified" },
];

/**
 * NEEDS-CONFIRMATION: the deck lists different vehicle sets on different
 * slides. This is the union — please confirm which are current and active.
 */
export const contractVehicles = [
  { name: "NASA SEWP VI", detail: "Category C — Contract 80TECH26D0642", href: "/sewp-vi" },
  { name: "GSA MAS", detail: "Multiple Award Schedule — Professional Services" },
  { name: "8(a) STARS III", detail: "GWAC Contract Holder" },
  { name: "Alliant 2", detail: "SB, SDVOSB, WOSB" },
  { name: "FAA eFAST", detail: "IT Staffing Services" },
  { name: "SeaPort NxG", detail: "Professional Services" },
  { name: "ITES-3S", detail: "U.S. Army" },
  { name: "OASIS+", detail: "Governmentwide multi-agency" },
  { name: "HGACBuy", detail: "Houston-Galveston Area Council" },
  { name: "NASPO ValuePoint", detail: "State & local cooperative" },
  { name: "OMNIA Partners", detail: "Public sector cooperative" },
  { name: "NCPA", detail: "National Cooperative Purchasing Alliance" },
  { name: "Sourcewell", detail: "Cooperative purchasing" },
  { name: "State & Local", detail: "Multiple state, county & municipal contracts" },
];

/**
 * NEEDS-CONFIRMATION: the deck cites conflicting figures across slides
 * (10+ vs 15+ years, 95% vs 98% retention, 200+ vs 500+ clients,
 * 100+ vs 250+ contracts). These use the more conservative value.
 */
export const stats = [
  { value: "15+", label: "Years of excellence" },
  { value: "10,000+", label: "IT professionals" },
  { value: "200+", label: "Clients served" },
  { value: "95%", label: "Client retention" },
];

export const trustBar = [
  { value: "10,000+", label: "IT professionals on our network" },
  { value: "500+", label: "Satisfied clients" },
  { value: "48–72 hrs", label: "Average time to fill" },
  { value: "Nationwide", label: "U.S. coverage, all time zones" },
];

export const achievements = [
  {
    value: "100+",
    label: "Projects delivered for federal, state & local agencies and Fortune 500 companies",
  },
  { value: "250+", label: "Contracts delivered on time, within scope and budget" },
  { value: "1M+", label: "Hours delivered powering mission-critical programs" },
  { value: "20+", label: "Government & enterprise clients" },
];

/*
 * Proven-results cards (context tag + big metric + one-line outcome).
 * NEEDS-CONFIRMATION: replace these aggregate figures with specific,
 * named-program outcomes cleared for public use for maximum credibility.
 */
export const provenResults = [
  {
    context: "Federal & defense",
    metric: "250+",
    label: "Contracts delivered on time, on budget, and within scope for federal, state and local agencies.",
    cta: "See contract vehicles",
    href: "/sewp-vi",
  },
  {
    context: "Mission programs",
    metric: "1M+",
    label: "Engineering and delivery hours powering mission-critical government and enterprise systems.",
    cta: "Explore our services",
    href: "/services",
  },
  {
    context: "Client trust",
    metric: "95%",
    label: "Client retention across multi-year partnerships — proof that our teams deliver, and stay.",
    cta: "Why choose Tanvi IT",
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
  description: string;
  capabilities: string[];
  image: string;
  visualNote: string;
}

export const services: ServiceItem[] = [
  {
    slug: "contract-staffing",
    name: "Contract Staffing",
    summary: "Access top IT talent with speed and precision for short and long-term needs.",
    description:
      "Scale your team quickly with skilled IT professionals on a contract basis. We source, screen and deploy pre-vetted talent so you can meet delivery commitments without carrying permanent headcount.",
    capabilities: [
      "Rapid sourcing from a 10,000+ professional network",
      "Pre-screened and verified candidates",
      "Short and long-term contract engagements",
      "Cleared talent for federal programs",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80&auto=format&fit=crop",
    visualNote: "48–72 hour average time to fill",
  },
  {
    slug: "direct-hire",
    name: "Direct Hire",
    summary: "Find the right full-time talent to strengthen your core team.",
    description:
      "We run a rigorous search and screening process to place permanent hires who fit your technical requirements, your mission and your culture — and who stay.",
    capabilities: [
      "Targeted executive and technical search",
      "Rigorous skills and culture screening",
      "Market and compensation benchmarking",
      "Onboarding and placement support",
    ],
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Screened for skills, experience and long-term fit",
  },
  {
    slug: "contract-to-hire",
    name: "Contract-to-Hire",
    summary: "Evaluate talent on the job before making a long-term commitment.",
    description:
      "Bring on professionals as contractors first, then convert top performers to permanent staff — reducing hiring risk while keeping delivery moving.",
    capabilities: [
      "Trial-to-permanent conversion pathway",
      "Reduced hiring risk and cost per hire",
      "Performance-based conversion decisions",
      "Seamless transition to full-time employment",
    ],
    image:
      "https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Evaluate first, commit second",
  },
  {
    slug: "rpo-solutions",
    name: "RPO Solutions",
    summary: "Streamline your recruitment with dedicated, end-to-end solutions.",
    description:
      "We take on all or part of your recruiting function — sourcing, screening, coordination and reporting — with an outcome-focused model that scales with hiring demand.",
    capabilities: [
      "End-to-end recruitment process outsourcing",
      "Dedicated sourcing and delivery pods",
      "Employer branding and candidate experience",
      "Hiring analytics and SLA reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=1200&q=80&auto=format&fit=crop",
    visualNote: "End-to-end recruitment, outcome-focused",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting",
    summary:
      "Technology expertise to solve complex challenges and drive digital transformation.",
    description:
      "Beyond talent, our consultants deliver strategic technology advisory and hands-on solutions across software, cloud, data, enterprise platforms and cybersecurity.",
    capabilities: [
      "Application development & modernization",
      "Cloud migration and DevOps enablement",
      "Data engineering, BI and AI/ML",
      "Cybersecurity, IAM and compliance",
    ],
    image:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1200&q=80&auto=format&fit=crop",
    visualNote: "Strategy through delivery, in one team",
  },
];

/* ------------------------------------------------------------------ */
/* Technology expertise                                                */
/* ------------------------------------------------------------------ */

export const techExpertise = [
  {
    area: "Software Development",
    stack: [".NET", "Java", "Python", "JavaScript", "React", "Angular", "Node.js", "PHP"],
  },
  {
    area: "Cloud & DevOps",
    stack: ["AWS", "Azure", "GCP", "DevOps", "Docker", "Kubernetes", "Terraform"],
  },
  {
    area: "Data & Analytics",
    stack: ["Data Engineering", "BI", "AI/ML", "Big Data", "Power BI", "Tableau"],
  },
  {
    area: "Enterprise Solutions",
    stack: ["Salesforce", "SAP", "Oracle", "ServiceNow", "SharePoint", "Microsoft 365"],
  },
  {
    area: "Cybersecurity",
    stack: ["Network Security", "IAM", "Risk & Compliance", "Cloud Security", "SOC"],
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

export const processSteps = [
  {
    title: "Understand Your Needs",
    description: "We listen, analyze, and align with your mission, goals and requirements.",
  },
  {
    title: "Define the Strategy",
    description: "We craft a focused plan that aligns with your objectives and drives value.",
  },
  {
    title: "Source & Screen Top Talent",
    description: "We identify and vet the best talent for your unique needs.",
  },
  {
    title: "Evaluate & Validate",
    description: "We ensure the right skills, experience and fit for long-term success.",
  },
  {
    title: "Deliver & Onboard",
    description: "We enable a smooth transition and quick time-to-value.",
  },
  {
    title: "Manage & Support",
    description: "We provide ongoing support and proactive performance monitoring.",
  },
  {
    title: "Measure & Optimize",
    description: "We track results, gather insights and constantly improve.",
  },
];

export const whyUs = [
  {
    title: "Mission-Focused Partnership",
    description:
      "We align with your mission and goals to deliver solutions that create real impact.",
  },
  {
    title: "Proven Expertise",
    description:
      "Years of experience delivering IT and professional solutions across government and commercial sectors.",
  },
  {
    title: "Top 1% Talent Network",
    description:
      "Access to highly skilled, vetted professionals ready to drive your projects forward.",
  },
  {
    title: "Quality You Can Trust",
    description:
      "Rigorous screening, industry standards, and a commitment to excellence in everything we do.",
  },
  {
    title: "Agile & Scalable Solutions",
    description: "Flexible engagement models that scale with your needs and adapt to change.",
  },
  {
    title: "Results That Matter",
    description: "We focus on measurable outcomes, efficiency, and long-term value.",
  },
];

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
  },
  {
    quote:
      "Tanvi IT Solutions Inc. has been a trusted technology partner, providing skilled resources and exceptional support for our critical initiatives with agility and precision.",
    author: "Vice President — Technology",
    company: "SWIFT",
    initials: "VP",
  },
  {
    quote:
      "We value Tanvi IT Solutions Inc. for their responsive service, technical expertise, and ability to deliver complex solutions on time and within budget.",
    author: "Program Manager",
    company: "Leidos",
    initials: "PM",
  },
];

/* ------------------------------------------------------------------ */
/* Audience split                                                      */
/* ------------------------------------------------------------------ */

export const audiences = [
  {
    eyebrow: "For employers",
    title: "Build high-performing technology teams",
    description:
      "Access pre-vetted IT professionals who integrate seamlessly and deliver measurable impact.",
    points: [
      "Pre-screened & verified professionals",
      "Flexible engagement models",
      "Domain expertise across sectors",
      "Scalable teams",
    ],
    cta: { label: "Talk to our team", href: "/contact" },
  },
  {
    eyebrow: "For talent",
    title: "Opportunities that move your career forward",
    description:
      "Explore projects with leading U.S. companies and federal programs.",
    points: [
      "Top U.S. clients",
      "Competitive pay",
      "Growth opportunities",
      "Long-term assignments",
    ],
    cta: { label: "Explore opportunities", href: "/careers" },
  },
];

/* ------------------------------------------------------------------ */
/* Careers                                                             */
/* ------------------------------------------------------------------ */

export interface BenefitItem {
  title: string;
  description: string;
}

/** NEEDS-CONFIRMATION: not yet verified with Tanvi IT HR. */
export const benefits: BenefitItem[] = [
  {
    title: "Competitive pay",
    description:
      "Market-benchmarked compensation on every assignment, reviewed as your engagement grows.",
  },
  {
    title: "Top U.S. clients",
    description:
      "Work with federal agencies and Fortune 500 organizations on programs that matter.",
  },
  {
    title: "Health, dental & vision",
    description: "Comprehensive medical coverage options for you and your dependents.",
  },
  {
    title: "401(k) with company match",
    description: "Plan for the long term with an employer-matched retirement contribution.",
  },
  {
    title: "Growth opportunities",
    description:
      "Certification support and a clear path from assignment to long-term career progression.",
  },
  {
    title: "Long-term assignments",
    description: "Extended and contract-to-hire engagements, not just short-term placements.",
  },
];

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
  contractHolderUrl:
    "https://www.sewp.nasa.gov/sewp6public/contractholders#/detail/01",
  overview:
    'The NASA SEWP (Solutions for Enterprise-Wide Procurement), pronounced "soup", provides the latest Information Technology, Communication, and Audio-Visual (ITC/AV) solutions and services for all Federal Agencies and their approved contractors. Created in 1993, SEWP I was the first Government-Wide Acquisition Contract (GWAC) in the federal acquisition space. Originally, the contract vehicle provided only technology products for NASA and all other agencies. SEWP has continually evolved over the past 30 years, expanding its scope to meet the requests of its customers. The SEWP vehicle represents acquisition innovation within the Federal Government. The program is self-funded through usage fees (0.34%) and provides all Federal agencies with acquisition support — more than 50,000 orders a year.',
  contacts: [
    {
      role: "SEWP Program Manager",
      name: "Nagoor Inaganti",
      phone: "703-864-7551",
      email: "nagoor@tanviit.com",
    },
    {
      role: "SEWP Deputy Program Manager",
      name: "Eswara Prasad Gatamaneni",
      phone: "703-918-6312",
      email: "prasad@tanviit.com",
    },
  ],
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
