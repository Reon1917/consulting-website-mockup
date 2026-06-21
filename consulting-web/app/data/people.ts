export type PersonGroup = "C-Suite" | "Senior Partners" | "Partners";

export type Person = {
  slug: string;
  name: string;
  role: string;
  group: PersonGroup;
  image: string;
  tags: string[];
  bio: string;
  summary?: string;
  expertise?: string[];
  history?: string[];
  education?: string[];
  advisoryWork?: string[];
};

export const people: Person[] = [
  {
    slug: "adrian-veyra",
    name: "Adrian Veyra",
    role: "Founder & Chief Executive Officer",
    group: "C-Suite",
    image: "/people/adrian-veyra.png",
    tags: ["Corporate Risk", "Liability Strategy", "Board Advisory"],
    bio: "Adrian advises executive teams on corporate exposure, liability reduction, governance documentation, and enterprise-level risk strategy.",
  },
  {
    slug: "marisa-kittiphan",
    name: "Marisa Kittiphan",
    role: "Chief Risk Officer",
    group: "C-Suite",
    image: "/people/marisa-kittiphan.png",
    tags: ["Risk Frameworks", "Governance", "Operational Controls"],
    bio: "Marisa leads the firm's risk review methodology and develops liability reduction frameworks for large corporate clients.",
  },
  {
    slug: "daniel-armitage",
    name: "Daniel Armitage",
    role: "Chief Insurance Strategist",
    group: "C-Suite",
    image: "/people/daniel-armitage.png",
    tags: ["Insurance Programs", "Claims Analysis", "Coverage Review"],
    bio: "Daniel specializes in insurance structure, claims scenario testing, broker coordination, and policy gap analysis.",
  },
  {
    slug: "narin-chotiprasert",
    name: "Narin Chotiprasert",
    role: "Chief Operating Officer",
    group: "C-Suite",
    image: "/people/narin-chotiprasert.png",
    tags: ["Client Delivery", "Advisory Operations", "Regional Coordination"],
    bio: "Narin oversees engagement delivery, internal operations, and cross-functional advisory execution for Aegis clients.",
  },
  {
    slug: "evelyn-hart",
    name: "Evelyn Hart",
    role: "Senior Partner, Corporate Liability Advisory",
    group: "Senior Partners",
    image: "/people/evelyn-hart.png",
    tags: ["Legal Exposure", "Contract Risk", "Liability Mapping"],
    bio: "Evelyn works with corporations to identify legal exposure hidden in contracts, internal processes, vendor obligations, and operational decisions.",
  },
  {
    slug: "somchai-rattanakul",
    name: "Somchai Rattanakul",
    role: "Senior Partner, Insurance and Claims Strategy",
    group: "Senior Partners",
    image: "/people/somchai-rattanakul.png",
    tags: ["Claims Prevention", "Insurance Review", "Risk Transfer"],
    bio: "Somchai advises companies on insurance alignment, claims prevention, policy review, and risk transfer mechanisms.",
  },
  {
    slug: "priya-menon",
    name: "Priya Menon",
    role: "Senior Partner, Governance and Board Risk",
    group: "Senior Partners",
    image: "/people/priya-menon.png",
    tags: ["Board Reporting", "Governance", "Executive Risk"],
    bio: "Priya helps leadership teams build board-level risk reporting systems and defensible governance documentation.",
  },
  {
    slug: "claire-donovan",
    name: "Claire Donovan",
    role: "Partner, Contract and Vendor Risk",
    group: "Partners",
    image: "/people/claire-donovan.png",
    tags: ["Vendor Risk", "Contracts", "Indemnity Review"],
    bio: "Claire advises clients on vendor liability, service agreement risk, indemnity clauses, and supplier exposure.",
    summary:
      "Claire Donovan advises corporations on contract-based liability, vendor exposure, indemnity structures, and supplier risk controls. Her work focuses on helping companies understand where obligations, exclusions, and third-party dependencies can create financial or legal exposure.",
    expertise: [
      "Vendor liability review",
      "Contractual risk mapping",
      "Indemnity clause review",
      "Service-level agreement analysis",
      "Supplier onboarding risk controls",
      "Insurance requirements in commercial contracts",
    ],
    history: [
      "Claire began her career in commercial contract review, working with multinational companies on procurement agreements, outsourcing contracts, and supplier risk frameworks.",
      "Before joining Aegis Risk Group, Claire led contract risk review projects for companies in logistics, hospitality, manufacturing, and professional services.",
    ],
    education: [
      "Master of Laws in Commercial and Corporate Law, King's College London",
      "Bachelor of Laws, University of Bristol",
      "Certificate in Enterprise Risk Management, Institute of Risk Management",
    ],
    advisoryWork: [
      "Reviewed vendor liability structures for a regional logistics company",
      "Designed supplier risk onboarding checklist for a hospitality group",
      "Supported insurance requirement review for outsourced service contracts",
      "Built contract risk heatmaps for a manufacturing client",
    ],
  },
  {
    slug: "thana-wiriyakul",
    name: "Thana Wiriyakul",
    role: "Partner, Operational Risk Advisory",
    group: "Partners",
    image: "/people/thana-wiriyakul.png",
    tags: ["Process Risk", "Controls", "Incident Prevention"],
    bio: "Thana supports companies in reducing liability through better operational controls, internal procedures, and incident response systems.",
    summary:
      "Thana Wiriyakul helps corporations reduce liability by improving operational controls, internal procedures, incident prevention systems, and documentation standards. His approach focuses on practical risk reduction that can be implemented inside real business operations.",
    expertise: [
      "Operational risk review",
      "Internal control design",
      "Incident response workflow",
      "Process liability reduction",
      "Employee procedure review",
      "Claims prevention through operations",
    ],
    history: [
      "Thana started his career in operational audit and process improvement for large Thai corporations before moving into enterprise risk advisory.",
      "At Aegis Risk Group, Thana works closely with management teams to translate risk reports into usable operating procedures.",
    ],
    education: [
      "Master of Business Administration, Chulalongkorn Business School",
      "Bachelor of Engineering in Industrial Engineering, Kasetsart University",
      "Professional Certificate in Operational Risk Management, Global Association of Risk Professionals",
    ],
    advisoryWork: [
      "Developed incident escalation workflow for a manufacturing client",
      "Reviewed operational control gaps for a retail group",
      "Created documentation standards for internal dispute prevention",
      "Assisted a logistics firm with process-based claims prevention",
    ],
  },
  {
    slug: "marcus-leung",
    name: "Marcus Leung",
    role: "Partner, Regional Risk Strategy",
    group: "Partners",
    image: "/people/marcus-leung.png",
    tags: ["Southeast Asia", "Expansion Risk", "Cross-Border Insurance"],
    bio: "Marcus advises regional businesses on market-specific liability, insurance expectations, and cross-border operational exposure.",
    summary:
      "Marcus Leung advises companies operating across Southeast Asia on regional liability exposure, market-entry risk, insurance structure, and cross-border operational complexity.",
    expertise: [
      "Regional risk strategy",
      "Southeast Asia market exposure",
      "Cross-border liability review",
      "Insurance considerations for expansion",
      "Regional vendor risk",
      "Corporate structure risk briefing",
    ],
    history: [
      "Marcus has worked in regional corporate advisory roles across Singapore, Hong Kong, Thailand, and Vietnam.",
      "Before joining Aegis Risk Group, Marcus advised multinational firms on operational and insurance considerations during Southeast Asian expansion.",
    ],
    education: [
      "Master of International Business, National University of Singapore",
      "Bachelor of Economics, University of Hong Kong",
      "Certificate in Cross-Border Risk and Compliance, Singapore Management University Executive Education",
    ],
    advisoryWork: [
      "Advised a regional services company on Thailand market-entry risk",
      "Reviewed cross-border vendor exposure for an expansion project",
      "Supported insurance structure planning for a Southeast Asian operating model",
      "Prepared executive risk briefings for regional headquarters",
    ],
  },
  {
    slug: "anika-rao",
    name: "Anika Rao",
    role: "Partner, Claims Prevention and Documentation",
    group: "Partners",
    image: "/people/anika-rao.png",
    tags: ["Claims History", "Documentation", "Dispute Prevention"],
    bio: "Anika helps clients reduce future disputes and claims through stronger documentation, incident records, and escalation workflows.",
    summary:
      "Anika Rao specializes in reducing future disputes, insurance claims, and liability escalation through stronger documentation, claims history review, internal reporting systems, and incident record design.",
    expertise: [
      "Claims prevention",
      "Documentation systems",
      "Incident record design",
      "Dispute prevention",
      "Claims history analysis",
      "Escalation workflow review",
    ],
    history: [
      "Anika began her career in claims analysis, reviewing how insurance claims developed from operational incidents, documentation gaps, and delayed escalation.",
      "At Aegis Risk Group, Anika works with clients to design documentation systems that are practical, consistent, and defensible.",
    ],
    education: [
      "Master of Science in Risk Management and Insurance, University of Manchester",
      "Bachelor of Commerce, University of Delhi",
      "Certificate in Claims Management, Chartered Insurance Institute",
    ],
    advisoryWork: [
      "Analyzed recurring claim patterns for a retail group",
      "Designed incident documentation templates for a service company",
      "Built claims prevention workflow for a hospitality client",
      "Supported dispute documentation review for a regional operator",
    ],
  },
];

export const partners = people.filter((person) => person.group === "Partners");

export function findPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}
