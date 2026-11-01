/**
 * Content for the second design (/v2), taken from the client's implementation
 * guides of September 2026:
 *
 *  - Tanvi IT Home Page Website Content - Implementation Guide.docx
 *  - Tanvi IT About Page Website Content Implementation Guide.docx
 *  - Tanvi IT Capabilities Solutions Landing Page - Implementation Guide.docx
 *  - NASA SEWP VI - Website Content- Tanvi IT - Final.docx
 *  - About Us - JV - TA Federal LLC.docx
 *  - Tanvi IT Solutions Inc - SEWP VI Category C Ordering Guide.pdf
 *
 * Headline and body copy are reproduced as written. The SEWP fair-opportunity
 * clause is contract language and is kept verbatim — do not edit it.
 *
 * The headquarters is Chantilly, VA per these documents; the earlier Reston
 * address has been retired from both designs.
 */

const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?w=${width}&q=85&auto=format&fit=crop`;

export const v2Site = {
  name: "Tanvi IT Solutions",
  legalName: "Tanvi IT Solutions Inc.",
  tagline: "Technology. Talent. Trust.",
  founded: 2008,
  hq: "Chantilly, Virginia",
  phone: "+1 (703) 864-7551",
  email: "info@tanviit.com",
};

export const homeHero = {
  headline: "Mission-focused technology. Built for what's next.",
  supporting:
    "Secure, scalable IT solutions for Federal Government and commercial mission requirements.",
  statement:
    "Tanvi IT Solutions Inc. delivers secure, scalable technology and consulting solutions that help government and commercial organizations modernize mission-critical systems, transform data, strengthen technology operations, and accelerate digital outcomes.",
};

/** The four proof points under the homepage headline, in every hero option. */
export const heroFacts = [
  { value: "2008", label: "Serving clients since", count: false },
  { value: "7", label: "Certifications & appraisals", count: true },
  { value: "12", label: "Contract vehicles held", count: true },
  { value: "8(a)", label: "SBA certified", count: false },
];

/** The award each hero option leads with. */
export const heroAward = {
  label: "Newly awarded",
  name: "NASA SEWP VI — Category C",
  detail: "Contract 80TECH26D0642",
  href: "/v2/contract-vehicles/sewp-vi",
};

export const valueProposition = [
  "Tanvi IT differentiates itself through a focus on value creation, mission outcomes, and long-term client success. Rather than simply delivering to the requirements of an individual engagement, we take the time to understand our clients' broader mission, operational priorities, and strategic objectives.",
  "As a trusted technology partner, Tanvi IT works alongside government and commercial organizations to provide objective expertise, innovative solutions, and practical guidance that drive meaningful results. Our collaborative approach combines technical excellence with a clear understanding of mission and business needs—helping organizations modernize operations, improve performance, strengthen capabilities, and achieve sustainable outcomes.",
];

/** The eight homepage capability cards. */
export const capabilities = [
  {
    name: "Application Modernization",
    description:
      "Modernize legacy applications and platforms to improve performance, scalability, security, and mission agility.",
  },
  {
    name: "Data & Analytics",
    description:
      "Transform complex data into actionable insights through data integration, engineering, analytics, and intelligent reporting.",
  },
  {
    name: "Cloud & DevSecOps",
    description:
      "Accelerate secure cloud adoption and software delivery through automation, continuous integration, and modern DevSecOps practices.",
  },
  {
    name: "Cybersecurity",
    description:
      "Protect mission-critical systems, applications, and data through proactive cybersecurity, risk management, and security engineering.",
  },
  {
    name: "Enterprise Architecture",
    description:
      "Align technology, systems, and infrastructure with organizational goals through scalable architecture and modernization strategies.",
  },
  {
    name: "Software Engineering",
    description:
      "Design, develop, integrate, and maintain secure, reliable software solutions built around mission and business requirements.",
  },
  {
    name: "Quality Engineering",
    description:
      "Improve solution reliability and performance through automated testing, quality assurance, continuous validation, and engineering excellence.",
  },
  {
    name: "Emerging Technologies",
    description:
      "Harness AI, automation, and other emerging technologies to solve complex challenges, enhance capabilities, and create measurable value.",
  },
];

export const capabilitiesHero = {
  eyebrow: "Capabilities / Solutions",
  headline: "Technology solutions built around your mission",
  supporting:
    "Tanvi IT helps organizations turn complex technology challenges into practical solutions that improve how they work, perform, and serve their missions. Our capabilities span application development and modernization, business intelligence, data analytics, DevOps, emerging technologies, enterprise architecture, independent verification and validation (IV&V), automation testing, and performance engineering.",
  statement:
    "We bring together experienced technology professionals, practical engineering, and a problem-solving mindset to design, develop, modernize, integrate, test, analyze, and continuously improve technology environments. From transforming legacy applications and making data more useful to automating software delivery, strengthening architecture, validating solutions, and improving system performance, Tanvi IT works alongside its clients to deliver technology solutions that create lasting value.",
};

/** The six solution areas on the capabilities landing page. */
export const solutionAreas = [
  {
    slug: "application-development-modernization",
    image: unsplash("photo-1687603917313-ccae1a289a9d"),
    imageAlt: "Source code open on a developer's monitor",
    name: "Application Development & Modernization",
    description:
      "Develop, enhance, integrate, and modernize applications to support changing mission and business requirements.",
    services: [
      "Application Development",
      "Application Modernization",
      "Legacy Transformation",
      "Software Design & Development",
      "Application Integration",
      "Maintenance & Enhancement",
    ],
  },
  {
    slug: "data-analytics",
    image: unsplash("photo-1551288049-bebda4e38f71"),
    imageAlt: "Analytics dashboards showing charts and trend lines",
    name: "Data & Analytics",
    description:
      "Transform data into actionable information through business intelligence, analytics, data engineering, integration, and reporting.",
    services: [
      "Business Intelligence",
      "Data Analytics",
      "Data Engineering",
      "Data Integration",
      "Data Architecture",
      "Data Warehousing",
      "Reporting & Dashboards",
    ],
  },
  {
    slug: "devops-cloud-enablement",
    image: unsplash("photo-1558494949-ef010cbdcc31"),
    imageAlt: "Rows of servers in a data centre",
    name: "DevOps & Cloud Enablement",
    description:
      "Improve software delivery and technology operations through DevOps practices, automation, and cloud-oriented engineering approaches.",
    services: [
      "DevOps",
      "CI/CD",
      "Build & Release Automation",
      "Deployment Automation",
      "Infrastructure Automation",
      "Cloud Enablement",
      "Cloud Migration Support",
    ],
  },
  {
    slug: "enterprise-architecture",
    image: unsplash("photo-1522071820081-009f0129c71c"),
    imageAlt: "A team planning around a shared table",
    name: "Enterprise Architecture & Technology Strategy",
    description:
      "Connect applications, data, infrastructure, and technology strategy to create scalable and adaptable environments.",
    services: [
      "Enterprise Architecture",
      "Solution Architecture",
      "Technology Assessments",
      "Systems Integration",
      "Modernization Roadmaps",
      "Technology Planning",
    ],
  },
  {
    slug: "quality-engineering-ivv",
    image: unsplash("photo-1605379399642-870262d3d051"),
    imageAlt: "A developer's workstation with code on screen",
    name: "Quality Engineering, IV&V & Testing",
    description:
      "Improve reliability, performance, maintainability, and scalability through structured quality engineering and testing.",
    services: [
      "Independent Verification & Validation (IV&V)",
      "Test Automation",
      "Functional & Regression Testing",
      "Performance Testing",
      "Performance Engineering",
      "Test Strategy",
    ],
  },
  {
    slug: "emerging-technologies",
    image: unsplash("photo-1457364887197-9150188c107b"),
    imageAlt: "A rocket launch climbing through the sky",
    name: "Emerging Technologies & Innovation",
    description:
      "Evaluate and apply emerging technologies and innovative approaches to address evolving technology challenges and create practical value.",
    services: [
      "Emerging Technology Evaluation",
      "Research & Development",
      "Proofs of Concept",
      "Innovation & Prototyping",
      "Intelligent Automation",
      "Technology Evaluation",
    ],
  },
];

export const outcomes = [
  { name: "Modernize", description: "Transform legacy applications and technology environments." },
  {
    name: "Optimize",
    description: "Improve performance, delivery, quality, and operational efficiency.",
  },
  { name: "Inform", description: "Turn complex data into actionable insight." },
  {
    name: "Innovate",
    description:
      "Evaluate emerging technologies and translate opportunities into practical solutions.",
  },
  {
    name: "Scale",
    description: "Build technology solutions that can evolve with changing requirements.",
  },
  {
    name: "Deliver with confidence",
    description: "Apply structured engineering and quality practices throughout the lifecycle.",
  },
];

export const howWeDeliver = [
  {
    step: "Understand",
    description:
      "Start with the mission, business need, technical environment, constraints, and desired outcome.",
  },
  {
    step: "Align",
    description: "Translate requirements into a practical technology and delivery approach.",
  },
  {
    step: "Engineer",
    description:
      "Apply experienced professionals, modern engineering practices, and fit-for-purpose technology.",
  },
  {
    step: "Validate",
    description:
      "Use testing, quality practices, and continuous feedback to improve solution reliability.",
  },
  {
    step: "Evolve",
    description:
      "Support continuous improvement as requirements, priorities, and technology change.",
  },
];

export const about = {
  hero: {
    eyebrow: "About Tanvi IT",
    headline: "Technology. Talent. Trust.",
    supporting:
      "Building technology solutions that create measurable value and advance the missions of our clients.",
    statement:
      "Tanvi IT Solutions Inc. is a technology and consulting company delivering innovative, scalable, and mission-focused IT solutions to government and commercial organizations. Since 2008, we have combined experienced professionals, technology expertise, and a commitment to trusted partnerships to help clients solve complex challenges and achieve meaningful outcomes.",
  },
  overview: [
    "Tanvi IT Solutions Inc. is a technology and consulting company headquartered in Chantilly, Virginia, serving government and commercial organizations with technology solutions designed around mission and business needs.",
    "Since our founding in 2008, Tanvi IT has focused on bringing together talented professionals, technology expertise, and innovative thinking to help organizations address complex IT challenges. Our capabilities span application modernization, data and analytics, cloud and DevSecOps, cybersecurity, enterprise architecture, software engineering, quality engineering, testing, and emerging technologies.",
    "Our approach goes beyond delivering technology. We seek to understand the broader mission, operational priorities, and strategic objectives of our clients so that the solutions we deliver create lasting value.",
  ],
  pullQuote:
    "We don't just deliver technology. We help clients turn technology into measurable outcomes.",
  approachIntro:
    "At Tanvi IT, we believe technology is most valuable when it solves real problems and advances the mission. We work collaboratively with our clients to understand their challenges, identify practical opportunities, and deliver solutions that improve performance, strengthen capabilities, and support long-term objectives.",
  approach: [
    {
      name: "Talent",
      description:
        "We bring together experienced professionals with the technical expertise, problem-solving mindset, and commitment required to deliver meaningful results.",
    },
    {
      name: "Technology",
      description:
        "We apply modern technologies, engineering practices, and innovative approaches to help organizations modernize, transform, and operate more effectively.",
    },
    {
      name: "Trust",
      description:
        "We build long-term relationships through transparency, accountability, responsiveness, and a commitment to our clients' success.",
    },
  ],
  whyTanvi: [
    {
      name: "Mission-focused",
      description:
        "We align technology solutions with the mission, operational priorities, and strategic objectives of our clients.",
    },
    {
      name: "Experienced professionals",
      description:
        "Our team brings technical expertise and practical experience across a broad range of IT disciplines.",
    },
    {
      name: "Innovation & agility",
      description:
        "We embrace modern technologies and adaptable delivery approaches to address evolving technology challenges.",
    },
    {
      name: "Long-term partnership",
      description:
        "We work alongside our clients as trusted advisors, focusing on sustainable value rather than short-term solutions.",
    },
  ],
  story: [
    "Tanvi IT was founded on a simple idea: technology should make a meaningful difference.",
    "Since 2008, we have continued to evolve our capabilities, strengthen our delivery practices, and invest in talented people who share our commitment to solving complex problems.",
    "What began with a focus on IT solutions and custom application development has grown into a broader technology and consulting capability supporting application modernization, data, cloud, DevSecOps, cybersecurity, enterprise architecture, software engineering, quality engineering, and emerging technologies.",
  ],
  promise: "The right people + the right technology + the right approach = better outcomes",
  closing: {
    headline: "Ready to solve what's next?",
    body: "Whether you are modernizing a mission-critical application, transforming enterprise data, adopting cloud technologies, strengthening cybersecurity, or seeking a trusted technology partner, Tanvi IT brings the expertise and commitment to help move your mission forward.",
  },
};

export const leadershipIntro =
  "Tanvi IT is led by experienced technology and business professionals who bring decades of combined experience across technology, program delivery, business strategy, and organizational growth. Our leadership team provides the vision, expertise, and direction needed to deliver sustainable value to our clients and employees.";

export const leadership = [
  {
    name: "Nagoor Inaganti",
    role: "President",
    bio: "Nagoor Inaganti brings more than 20 years of professional experience across technology, project leadership, application development, testing, data analytics, GIS, networking, and security-related technologies. He holds a Master's degree in Computer Science and Entrepreneurship from Babson College, Massachusetts. As President of Tanvi IT Solutions, Nagoor provides strategic leadership and guides the company's growth, technology direction, and commitment to delivering high-quality outcomes for clients.",
    areas: [
      "Corporate Strategy",
      "Technology & Innovation",
      "Federal & Commercial IT",
      "Application Development",
      "Data & Analytics",
      "Program & Project Leadership",
    ],
  },
  {
    name: "Eswara Prasad Gatamaneni",
    role: "Vice President",
    bio: "Eswara Prasad Gatamaneni brings more than 25 years of IT experience spanning business strategy, technology delivery, sales, operations, and organizational growth. He holds a Bachelor's degree in Engineering from Madras University and plays a key role in shaping Tanvi IT's long-term business strategy and organizational direction. As Vice President, Prasad supports business development, delivery, operations, and the continued growth of Tanvi IT.",
    areas: [
      "Business Strategy",
      "Business Development",
      "Delivery & Operations",
      "Client Relationships",
      "Organizational Growth",
      "Technology Services",
    ],
  },
];

/**
 * Each credential carries its own icon key. The real certification marks are
 * copyrighted artwork we do not hold, so these stand in for them — but one
 * icon per credential, not the same tick seven times, because a reader should
 * be able to tell a security certificate from a socioeconomic one at a glance.
 *
 * NEEDS-CONTENT: the official ISO, CMMI, SBA and SWaM badge files, if the
 * client is licensed to display them. They would replace the icons.
 */
export const v2Certifications = [
  { name: "ISO 9001:2015", detail: "Quality Management System", group: "Quality & process", icon: "quality" },
  { name: "ISO/IEC 20000-1:2018", detail: "IT Service Management", group: "Quality & process", icon: "service" },
  {
    name: "ISO/IEC 27001:2013",
    detail: "Information Security Management",
    group: "Quality & process",
    icon: "security",
  },
  { name: "CMMI-DEV Level 3", detail: "Development Process Maturity", group: "Quality & process", icon: "development" },
  { name: "CMMI-SVC Level 3", detail: "Services Process Maturity", group: "Quality & process", icon: "services" },
  { name: "SBA 8(a)", detail: "Small Business Development Program", group: "Federal / socioeconomic", icon: "federal" },
  {
    name: "SWaM Certified",
    detail: "Small, Women-Owned & Minority-Owned Business",
    group: "Federal / socioeconomic",
    icon: "ownership",
  },
];

export const certificationsIntro =
  "Tanvi IT maintains a commitment to disciplined processes, quality delivery, information security, and continuous improvement. Our certifications, appraisals, and socioeconomic credentials demonstrate our commitment to strong organizational and delivery practices.";

export const jointVenture = {
  name: "TA Federal LLC and TA Federal 2 LLC",
  partners: "Tanvi IT Solutions Inc. + AAC Inc.",
  url: "https://www.tafederal.com",
  body: [
    "TA Federal LLC and TA Federal 2 LLC both are an SBA-approved 8(a) Mentor–Protégé Joint Venture formed by Tanvi IT Solutions Inc. and AAC Inc. The partnership brings together complementary expertise in federal IT services, application development, modernization, and enterprise technology solutions to support the evolving needs of government customers.",
    "Through this collaboration, TA Federal combines Tanvi IT's strengths in application development and modernization with AAC's extensive experience in federal IT operations, infrastructure, and technology services. Together, the companies leverage their combined capabilities, technical expertise, and federal contracting experience to deliver mission-focused solutions to government agencies.",
    "As a joint venture, TA Federal is positioned to support federal customers with technology solutions that advance operational efficiency, strengthen IT capabilities, and help agencies achieve their mission objectives.",
  ],
};

/* ------------------------------------------------------------------ SEWP VI */

export const sewpVi = {
  overview:
    'The NASA SEWP (Solutions for Enterprise-Wide Procurement), pronounced "soup", provides the latest Information Technology, Communication, and Audio-Visual (ITC/AV) solutions and services for all Federal Agencies and their approved contractors. Created in 1993, SEWP I was the first Government-Wide Acquisition Contract (GWAC) in the federal acquisition space. Originally, the contract vehicle provided only technology products for NASA and all other agencies. SEWP has continually evolved over the past 30 years, expanding its scope to meet the requests of its customers. The SEWP vehicle represents acquisition innovation within the Federal Government. The program is self-funded through usage fees (0.34%) and provides all Federal agencies with acquisition support - more than 50,000 orders a year.',
  contract: [
    { term: "Contract number", detail: "80TECH26D0642" },
    { term: "Category", detail: "Category C — ITC/AV Mission-Based Services" },
    { term: "Category type", detail: "GWAC" },
    { term: "NAICS", detail: "541511 — Custom Computer Programming Services" },
    { term: "Period of performance", detail: "Nov 2026 – Oct 2036" },
    { term: "SEWP surcharge", detail: "0.34%" },
    { term: "UEI", detail: "VJHWCMQ1AVF5" },
  ],
  managers: [
    {
      role: "SEWP Program Manager",
      name: "Eswara Prasad Gatamaneni",
      phone: "703-574-2108",
      email: "prasad@tanviit.com",
    },
    {
      role: "SEWP Deputy Program Manager",
      name: "Nagoor Inaganti",
      phone: "703-864-7551",
      email: "nagoor@tanviit.com",
    },
    {
      role: "Quotes and Sales",
      name: "Nagoor Inaganti",
      phone: "703-864-7551",
      email: "nagoor@tanviit.com",
    },
    {
      role: "Warranty / Technical / Software / Post-Delivery Support",
      name: "Nagoor Inaganti",
      phone: "703-864-7551",
      email: "nagoor@tanviit.com",
    },
  ],
  /** Contract language — reproduce exactly, never paraphrase or reformat. */
  fairOpportunity: [
    "Contractors will be provided with a fair opportunity at the individual order level as appropriate per FAR Part 16.505(b), including the SEWP RFQ tools. No documentation for the order selection is required to be submitted with the order. All such documentation is to be maintained by The Issuing Procurement Office.",
    "The Contractor shall not market, quote or otherwise offer for sale, any IT Solution not listed under this contract, until the said solutions are included in the SEWP database of record, and available to all Government end-users. If the Government issues a Request For Information (RFI) as part of market research, the Contractor may provide items not yet listed on their SEWP contract as part of a market research quote if:",
    "1. all such items are clearly marked as not yet available on their SEWP contract; and",
    "2. the contractor submits a technology refreshment request to add those products to their contract If the Government issues a Request for Quote (RFQ) or a Market Research Request (MRR), the Contractor may only respond with items available on their Contract and the price of each item shall be the no greater than the price in Attachment F SEWP database of record at the time the quote is issued. If the Contractor has insufficient items on their contract to fully respond to the Formal RFQ, the Contractor must respond with a No Bid. Unless the RFQ Specifically allows for partial quote, the Contractor must respond fully to all the requirements specified in the RFQ.",
    "When submitting a quote to a government end-user, the contractor must clearly state the length of time the quote is valid. The contractor shall honor any order submitted within the stated time period of a quote.",
    "When responding to an RFI or RFQ issued from the NASA SEWP RFQ on-line quoting system, the Contractor must respond as outlined in Attachment C: Contract Holder User Manual (CHUM).",
    "Contract Holders are prohibited from using Government information posted on the NASA SEWP Contract Holder Only Page, such as RFQs, RFIs, etc., for purposes other than proposing on SEWP requirements. This includes Contract Holders providing third parties with SEWP information and requirements for the purpose of assisting companies that are not SEWP Contract Holders, with providing unsolicited proposals to meet agency requirements already posted to the NASA SEWP RFQ on-line quoting system.",
  ],
  scope: [
    "Tanvi IT's offerings are limited to services, labor categories, CLINs, pricing, and other offerings included in its executed contract and SEWP database of record.",
    "Product-only requirements are outside Category C. Hardware/software may be included only as ancillary supplies that are integral and necessary to the services solution.",
    "Category C order thresholds: up to $2M in Year 1 and $10M in Year 2, inclusive of options; restrictions are subject to removal beginning in Year 3 in accordance with the contract and NASA SEWP guidance.",
    "Agency Administrative Handling Fee is included in the total quoted prices and may not exceed 0.34%.",
    "Current NASA timing in this guide: anticipated ordering period November 1, 2026–October 31, 2036, subject to final NASA confirmation.",
    "Installation / Transition: Installation, configuration, integration, transition, and deployment are provided only when included in the applicable order and are coordinated with the ordering agency.",
    "Section 508 requirements are addressed as applicable to the solution and order deliverables.",
  ],
  ordering: [
    {
      step: "Define the requirement",
      description:
        "Objectives, users, locations, technical areas, deliverables, security/privacy, Section 508, period of performance, contract type, and evaluation criteria.",
    },
    {
      step: "Confirm Category C scope",
      description:
        "Ensure the requirement is mission/program-level and services-based; identify and justify any ancillary hardware/software and confirm the applicable threshold.",
    },
    {
      step: "Submit through NASA SEWP",
      description:
        "Use the NASA SEWP VI Quote Request Tool when applicable; select Category C / Group C1 and provide the SOW, instructions, evaluation factors, and attachments.",
    },
    {
      step: "Contact Tanvi IT",
      description:
        "For capability or scope discussions, contact the Program Manager or Deputy Program Manager. For an active request, provide the SEWP request number, due date, agency, scope, place of performance, contract type, security requirements, and submission instructions.",
    },
    {
      step: "Evaluate and award",
      description:
        "The ordering agency evaluates responses and issues the order under FAR 16.505 and agency procedures. Tanvi IT begins performance only after NASA SEWP PMO processing, SCN assignment, and transmission of the processed order.",
    },
  ],
  sewpContacts: [
    { label: "SEWP PMO hours", detail: "Mon–Fri, 7:30 AM – 6:00 PM (ET)" },
    { label: "Customer help desk", detail: "(301) 286-1478" },
    { label: "Email", detail: "help@sewp.nasa.gov" },
    { label: "Order submission", detail: "sewporders@sewp.nasa.gov" },
    { label: "Website", detail: "www.sewp.nasa.gov" },
  ],
  orderingGuide: {
    href: "/tanvi-it-sewp-vi-ordering-guide.pdf",
    version: "Version 1.0 | July 21, 2026",
  },
};

/* ------------------------------------------------------------- News, careers */

export const featuredNews = {
  title: "Tanvi IT Solutions Awarded NASA SEWP VI Category C Contract",
  dateline: "Chantilly, VA – June 22, 2026",
  body: [
    "Tanvi IT Solutions Inc. is pleased to announce that it has been awarded a contract under NASA's Solutions for Enterprise-Wide Procurement (SEWP) VI, Category C – IT Mission-Based Services.",
    "NASA SEWP VI is a government-wide acquisition vehicle designed to provide Federal agencies with streamlined access to innovative technology solutions and mission-focused IT services. Tanvi IT's Category C award expands its ability to support Federal customers with technology expertise and services aligned with evolving mission and operational requirements.",
    "The award represents an important milestone in Tanvi IT's continued growth as a Federal IT services provider and reinforces the company's commitment to delivering secure, scalable, innovative, and outcome-driven technology solutions.",
    "Through SEWP VI Category C, Tanvi IT Solutions is positioned to support Federal customers with IT mission-based services spanning application modernization, software engineering, cloud and DevSecOps, data and analytics, cybersecurity, enterprise architecture, quality engineering, and emerging technologies, consistent with the scope of its awarded contract.",
    "Tanvi IT looks forward to building on this achievement and partnering with Federal agencies to deliver technology solutions that strengthen mission capabilities, improve operational performance, and create lasting value.",
  ],
  quote: {
    text: "We are honored to be selected as a NASA SEWP VI Category C contract holder. This award reflects our team's commitment to technical excellence, collaborative delivery, and creating measurable value for our clients. We look forward to leveraging our capabilities and expertise to support Federal agencies in advancing their missions and achieving meaningful outcomes.",
    attribution: "Nagoor Inaganti, President of Tanvi IT Solutions",
  },
};

/**
 * Employee benefits, as supplied by the client for the Careers tab.
 *
 * The wording is theirs and deliberately hedged — "eligible employees",
 * "eligible dependents", and a 401(k) described as an opportunity to
 * contribute rather than a matched plan. Benefits copy is read as a promise,
 * so do not tighten it into something more definite than the source.
 *
 * NEEDS-CONTENT: the guide's icon list also names Employee Assistance
 * Programs, but no benefit of that name is described in the body, so it is
 * not published here. Send a description and it goes in.
 */
export const employeeBenefits = {
  headline: "Supporting our people at every stage",
  intro: [
    "At Tanvi IT Solutions, we recognize that our people are central to our success. We believe that supporting our employees means providing benefits that help them take care of their health, protect their families, and plan for their financial future.",
    "Our employee benefits program includes healthcare coverage, insurance protection, and retirement savings options designed to support employees and their eligible dependents.",
  ],
  items: [
    {
      name: "Medical insurance",
      icon: "medical",
      description:
        "Access medical coverage is designed to help employees manage healthcare needs and medical expenses.",
    },
    {
      name: "Dental insurance",
      icon: "dental",
      description:
        "Dental coverage helps employees maintain their oral health and access eligible dental care services.",
    },
    {
      name: "Vision insurance",
      icon: "vision",
      description: "Vision coverage to support routine eye care and eligible vision-related services.",
    },
    {
      name: "Disability insurance",
      icon: "disability",
      description:
        "Financial protection through disability insurance benefits in the event an eligible employee is unable to work due to a qualifying disability.",
    },
    {
      name: "Life insurance",
      icon: "life",
      description:
        "Life insurance coverage that provides financial protection for employees' designated beneficiaries.",
    },
    {
      name: "401(k) retirement plan",
      icon: "retirement",
      description:
        "An opportunity for eligible employees to contribute toward long-term retirement savings and build financial security for the future.",
    },
  ],
  investing: {
    heading: "Investing in our people",
    body: "At Tanvi IT, we value the contributions our employees make and recognize the importance of supporting them beyond their day-to-day responsibilities. Our benefits offerings are part of our commitment to creating a supportive workplace where employees can focus on their professional growth and personal well-being.",
  },
  closing: {
    heading: "Interested in joining Tanvi IT?",
    body: "Explore career opportunities and learn more about becoming part of our team.",
  },
} as const;

export const careers = {
  headline: "Build your future with Tanvi IT",
  body: "Great technology starts with great people. At Tanvi IT, we empower talented professionals to solve meaningful challenges, develop their skills, and contribute to solutions that make a difference. If you're driven by innovation, collaboration, and continuous growth, we'd love to have you on our team.",
  strapline: "Explore opportunities. Grow with us. Make an impact.",
};

/** Contact routes the homepage guide asks for. */
export const contactPaths = [
  {
    name: "Government",
    description:
      "Agency requirements, contract vehicle questions, SEWP VI quotes and capability discussions.",
  },
  {
    name: "Prime contractor",
    description: "Teaming, subcontracting and joint-venture opportunities through TA Federal.",
  },
  {
    name: "Commercial",
    description: "Technology consulting, modernization and delivery for commercial organizations.",
  },
];

/**
 * Customers. The homepage guide asks to retain the approved customer content
 * from the current website and to add relevant Federal customers and projects,
 * "including MHBE" — so MHBE leads the government group.
 *
 * NEEDS-CONFIRMATION: MHBE is read here as the Maryland Health Benefit
 * Exchange. Say otherwise and the label changes.
 */
export const customerGroups = [
  {
    heading: "Government & public sector",
    customers: [{ name: "MHBE", detail: "Maryland Health Benefit Exchange" }],
  },
  {
    heading: "Commercial & systems integrators",
    customers: [
      { name: "Deloitte", detail: "Deloitte Consulting LLP" },
      { name: "SWIFT", detail: "" },
      { name: "Leidos", detail: "" },
      { name: "Booz Allen Hamilton", detail: "" },
      { name: "PwC", detail: "" },
      { name: "TENEO", detail: "" },
      { name: "SAIC", detail: "" },
      { name: "Citi", detail: "" },
      { name: "KPMG", detail: "" },
      { name: "ManTech", detail: "" },
    ],
  },
];

/** NAICS as listed on the SEWP VI Category C ordering guide. */
export const naicsCodes = [
  { code: "541511", title: "Custom Computer Programming Services" },
];

/**
 * Photographs used across the interior pages. Each was checked against the
 * section it illustrates before being assigned.
 */
export const v2Images = {
  team: {
    src: unsplash("photo-1522071820081-009f0129c71c"),
    alt: "The Tanvi IT team working together around a table",
  },
  people: {
    src: unsplash("photo-1521791136064-7986c2920216"),
    alt: "Colleagues shaking hands at the start of an engagement",
  },
  launch: {
    src: unsplash("photo-1457364887197-9150188c107b"),
    alt: "A rocket launch climbing through the sky",
  },
  capitol: {
    src: unsplash("photo-1483600516620-7254872369ae"),
    alt: "Classical columns of a federal building",
  },
  leaders: {
    src: unsplash("photo-1573496130141-209d200cebd8"),
    alt: "Two colleagues in a professional setting",
  },
  group: {
    src: unsplash("photo-1758691736975-9f7f643d178e"),
    alt: "The wider team together",
  },
  workstation: {
    src: unsplash("photo-1605379399642-870262d3d051"),
    alt: "A developer's workstation with code on screen",
  },
  security: {
    src: unsplash("photo-1558494949-ef010cbdcc31"),
    alt: "Rows of servers in a data centre",
  },
  health: {
    src: unsplash("photo-1576091160550-2173dba999ef"),
    alt: "A clinician working at a laptop beside a stethoscope",
  },
  business: {
    src: unsplash("photo-1454165804606-c3d57bc86b40"),
    alt: "Colleagues reviewing figures together at a desk",
  },
};

/**
 * Who we serve, grouped into four sectors with a tab apiece — the structure
 * the reference uses for the same page, rather than one flat grid of ten
 * equal cards where nothing leads.
 *
 * Each tab names the industries it covers by slug; the page resolves them
 * against `industries` in site-content, so the industry names and summaries
 * stay written in exactly one place and the two sites cannot drift apart.
 */
export const sectorTabs = [
  {
    key: "government",
    tab: "Government",
    eyebrow: "Federal, state & local",
    title: "Modernizing the systems citizens rely on",
    lead:
      "Agencies at every level are replacing systems older than the people who maintain them. We work inside that constraint — migrating what can move, keeping what must stay, and leaving an agency able to run the result itself.",
    image: v2Images.capitol,
    industrySlugs: ["federal-government", "state-government", "local-government"],
  },
  {
    key: "defense",
    tab: "Defense & Intelligence",
    eyebrow: "National security",
    title: "Mission-critical delivery under real constraints",
    lead:
      "Classified environments, accreditation boundaries and uptime that is measured against an operation rather than a quarter. Our defense work is built to clear review before it is built to impress.",
    image: v2Images.security,
    industrySlugs: ["defense-intelligence"],
  },
  {
    key: "health",
    tab: "Health",
    eyebrow: "Health & public benefit",
    title: "Secure, interoperable systems behind better care",
    lead:
      "Health programs live or die on whether their data moves safely between the systems that need it. We build the integrations, protections and interfaces that let a record follow a patient instead of stopping at a department line.",
    image: v2Images.health,
    industrySlugs: ["healthcare"],
  },
  {
    key: "commercial",
    tab: "Commercial",
    eyebrow: "Industry",
    title: "Delivery practices that travel beyond government",
    lead:
      "The same engineering discipline federal programs demand, applied to regulated commercial sectors where downtime, audit findings and a poor digital experience each carry a price.",
    image: v2Images.business,
    industrySlugs: [
      "banking-financial-services",
      "education",
      "energy-utilities",
      "retail-ecommerce",
      "telecommunications",
    ],
  },
];

/**
 * Contract vehicle profiles. Each carries a description of what the programme
 * is — the context a buyer needs to know whether it is the right route —
 * alongside whatever identifiers are confirmed.
 *
 * Only NASA SEWP VI has its identifiers published here, because that is the
 * one we hold documentation for (the Category C ordering guide). The rest show
 * the programme description and say plainly that details come on request,
 * rather than printing numbers nobody has verified.
 *
 * NEEDS-CONTENT: contract numbers, UEI/CAGE per vehicle, and the award dates
 * for every vehicle other than SEWP VI.
 *
 * Deliberately absent, and not to be restored from an older deck:
 *   - 8(a) STARS III. Contract 47QTCB21D0382 belongs to TA Federal LLC, not
 *     to Tanvi IT Solutions Inc. Publishing it here misattributed the award.
 *   - GSA MAS. Tanvi IT has not been awarded this vehicle.
 * Both were removed on the client's written instruction of 1 Nov 2026.
 */
export const vehicleProfiles = [
  {
    name: "NASA SEWP VI",
    kind: "Government-wide acquisition contract",
    summary:
      "A multi-award GWAC for IT, communications and audio-visual solutions and services, open to every federal agency and their approved contractors. Tanvi IT holds Category C — IT mission-based services.",
    href: "/v2/contract-vehicles/sewp-vi",
    facts: [
      { term: "Contract number", detail: "80TECH26D0642" },
      { term: "Category", detail: "Category C — ITC/AV Mission-Based Services" },
      { term: "Period of performance", detail: "Nov 2026 – Oct 2036" },
      { term: "NAICS", detail: "541511" },
      { term: "UEI", detail: "VJHWCMQ1AVF5" },
      { term: "Agency fee", detail: "0.34%" },
    ],
  },
  {
    name: "OASIS+",
    kind: "Government-wide multi-agency contract",
    position: "Tanvi IT is a contract holder.",
    summary:
      "GSA's multiple-award IDIQ for professional services, covering both non-IT and IT-enabled requirements across a wide range of service domains.",
    facts: [],
  },
  {
    name: "Alliant 2",
    kind: "Government-wide acquisition contract",
    position: "Tanvi IT is a contract holder (SB, SDVOSB, WOSB tracks).",
    summary:
      "A GWAC for integrated IT solutions, spanning systems design, software engineering, infrastructure and the services that wrap around them.",
    facts: [],
  },
  {
    name: "ITES-3S",
    kind: "U.S. Army",
    position: "Tanvi IT is a contract holder.",
    summary:
      "The Army's IT Enterprise Solutions contract for IT services supporting Army and Department of Defense programmes worldwide.",
    facts: [],
  },
  {
    name: "SeaPort NxG",
    kind: "U.S. Navy",
    position: "Tanvi IT is a contract holder.",
    summary:
      "The Navy's multiple-award contract for engineering, technical and programme management services across its systems commands.",
    facts: [],
  },
  {
    name: "FAA eFAST",
    kind: "Federal Aviation Administration",
    position: "Tanvi IT is a contract holder for IT staffing services.",
    summary:
      "The FAA's streamlined vehicle for IT staffing and professional support services across its programmes.",
    facts: [],
  },
];

/**
 * Cooperative and state-level routes. Each line describes who the programme
 * serves — the thing a state, city or school district buyer is checking —
 * rather than repeating the word "cooperative" six times.
 */
export const cooperativeVehicles = [
  {
    name: "NASPO ValuePoint",
    serves: "All 50 states",
    detail:
      "The cooperative run by state procurement officials, used by state agencies and their political subdivisions nationwide.",
  },
  {
    name: "OMNIA Partners",
    serves: "Public sector & education",
    detail:
      "A national purchasing cooperative whose agreements are competitively solicited by a lead public agency and shared across its members.",
  },
  {
    name: "Sourcewell",
    serves: "Government, education & non-profit",
    detail:
      "A government agency and national cooperative whose members award from contracts it has already competed on their behalf.",
  },
  {
    name: "NCPA",
    serves: "Public agencies & schools",
    detail:
      "The National Cooperative Purchasing Alliance, serving public agencies, school districts and higher education across the country.",
  },
  {
    name: "HGACBuy",
    serves: "Local government",
    detail:
      "The Houston-Galveston Area Council's purchasing programme, open to local governments and qualifying public agencies.",
  },
  {
    name: "State & local contracts",
    serves: "Direct award",
    detail:
      "Multiple state, county and municipal contracts held directly, for buyers who award outside a cooperative.",
  },
];

/** Why a buyer would take a cooperative route at all. */
export const cooperativeBenefits = [
  {
    title: "Already competed",
    detail: "The solicitation has been run by a lead agency, so you are not starting a new one.",
  },
  {
    title: "Faster to award",
    detail: "Members award directly from the agreement, which removes months from the timeline.",
  },
  {
    title: "Open to more buyers",
    detail: "States, counties, cities, school districts and public agencies can all use them.",
  },
];

/** The identifiers a contracting officer asks for first. */
export const buyerSnapshot = [
  { term: "UEI", detail: "VJHWCMQ1AVF5" },
  { term: "NAICS", detail: "541511 — Custom Computer Programming Services" },
  { term: "Business status", detail: "Small business · SBA 8(a) certified" },
  { term: "Appraisals", detail: "CMMI-DEV L3 · CMMI-SVC L3" },
  { term: "Certifications", detail: "ISO 9001 · ISO/IEC 20000-1 · ISO/IEC 27001" },
  { term: "Headquarters", detail: "Chantilly, Virginia" },
];

/** How a requirement reaches award, whichever vehicle it travels on. */
export const howToBuy = [
  {
    step: "Define the requirement",
    description:
      "Objectives, users, technical areas, deliverables, security and Section 508 needs, period of performance and evaluation criteria.",
  },
  {
    step: "Pick the route",
    description:
      "Choose the vehicle your agency already holds. If you are not sure which fits, we will tell you which of ours applies — and say so if none do.",
  },
  {
    step: "Talk to us early",
    description:
      "Send the request number, due date, agency, scope and submission instructions. For SEWP VI, that goes to the program manager named on the ordering page.",
  },
  {
    step: "Evaluate and award",
    description:
      "Your office evaluates responses and issues the order under FAR 16.505 and agency procedures. Work starts once the processed order is transmitted.",
  },
];

/**
 * The story as milestones. Only points the supplied documents support: the
 * founding year, what the company began doing, how the capability widened,
 * and the SEWP VI award with its announced date.
 *
 * NEEDS-CONTENT: further dated milestones — first federal award, each ISO and
 * CMMI appraisal, the TA Federal joint venture — would make this a fuller
 * timeline.
 */
export const storyMilestones = [
  {
    year: "2008",
    title: "Founded",
    detail:
      "Tanvi IT is founded on a simple idea: technology should make a meaningful difference.",
  },
  {
    year: "Early years",
    title: "IT solutions and custom applications",
    detail:
      "The work begins with IT solutions and custom application development for government and commercial clients.",
  },
  {
    year: "Since",
    title: "The capability widens",
    detail:
      "Application modernization, data, cloud and DevSecOps, cybersecurity, enterprise architecture, software and quality engineering, and emerging technologies.",
  },
  {
    year: "2026",
    title: "NASA SEWP VI Category C",
    detail:
      "Awarded contract 80TECH26D0642 for IT mission-based services, opening a route for every federal agency.",
  },
];

/** Direct contacts for the leadership team, as published in the SEWP VI guide. */
export const leadershipContacts: Record<string, { email: string; phone: string }> = {
  "Nagoor Inaganti": { email: "nagoor@tanviit.com", phone: "703-864-7551" },
  "Eswara Prasad Gatamaneni": { email: "prasad@tanviit.com", phone: "703-574-2108" },
};
