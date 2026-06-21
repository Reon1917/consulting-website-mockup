import Image from "next/image";
import Link from "next/link";
import { Footer, Header } from "./components/SiteChrome";
import { ProfileCard } from "./components/ProfileCard";
import { people } from "./data/people";

const pillars = [
  [
    "Risk Visibility",
    "We help companies understand where liability is building inside contracts, operations, employee processes, vendor relationships, and insurance gaps.",
  ],
  [
    "Liability Reduction",
    "We design practical controls, documentation systems, and response procedures that reduce the chance of disputes, claims, and legal exposure.",
  ],
  [
    "Insurance Alignment",
    "We review whether the company's insurance coverage reflects its true operating risk, growth stage, and contractual obligations.",
  ],
  [
    "Executive Protection",
    "We support leadership teams with clearer risk reporting, board-ready documentation, and defensible decision-making structures.",
  ],
];

const partners = [
  "CP Group",
  "SCG",
  "PTT Group",
  "Central Group",
  "Bangkok Bank",
  "AIA Thailand",
  "Grab",
  "Lazada",
  "Sea Group",
  "Shopee",
  "DBS",
  "UOB",
];

const services = [
  {
    title: "Corporate Liability Review",
    text: "A full review of the company's current liability exposure across operations, contracts, insurance, vendors, internal procedures, and governance documents.",
    items: ["Liability exposure mapping", "Risk register development", "Contractual risk review", "Claims history review"],
  },
  {
    title: "Insurance Program Advisory",
    text: "A strategic review of corporate insurance coverage to ensure policies match the company's actual business risks.",
    items: ["Policy structure review", "Coverage gap analysis", "Broker coordination support", "Claims scenario testing"],
  },
  {
    title: "Claims Prevention Strategy",
    text: "Preventive advisory focused on reducing the likelihood of future insurance claims, disputes, and operational incidents.",
    items: ["Claims root-cause analysis", "Incident documentation templates", "Escalation workflow design", "Monitoring framework"],
  },
  {
    title: "Contract and Vendor Risk Advisory",
    text: "A review of vendor agreements, service contracts, supplier obligations, indemnity clauses, and liability transfer mechanisms.",
    items: ["Vendor risk classification", "Contractual liability review", "Insurance requirement review", "Vendor onboarding checklist"],
  },
  {
    title: "Board and Executive Risk Reporting",
    text: "Support for leadership teams that need clear, structured, and defensible risk reporting.",
    items: ["Board risk briefing documents", "Executive liability dashboard", "Risk heatmap", "Governance documentation support"],
  },
  {
    title: "Regional Risk Advisory",
    text: "Advisory for companies operating in Thailand and Southeast Asia, with attention to regional legal, insurance, vendor, and operational realities.",
    items: ["Thailand market risk review", "Regional vendor exposure review", "Cross-border insurance consideration", "Expansion risk briefing"],
  },
];

function serviceDetail(items: string[]) {
  return `Typical engagement work includes ${items.join(", ")}.`;
}

export default function Home() {
  const executives = people.filter((person) => person.group === "C-Suite");

  return (
    <>
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <h1>Corporate risk does not disappear. It is designed against.</h1>
            <p>
              Aegis Risk Group is a Bangkok-based advisory firm helping
              corporations reduce liability exposure, strengthen insurance
              strategy, and build systems that prevent claims before they happen.
            </p>
            <div className="action-row">
              <Link className="button button-primary" href="/contact">
                Speak With Our Advisors
              </Link>
              <Link className="button button-secondary" href="#services">
                Explore Our Services
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-label="Bangkok corporate skyline">
            <Image
              src="/brand/hero.png"
              alt="Bangkok skyline and corporate office geometry"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              priority
            />
            <div
              className="hero-risk-piece"
              aria-hidden="true"
              style={{ height: "min(64%, 560px)", top: "18%", width: "min(58%, 560px)" }}
            >
              <Image
                className="hero-risk-piece-image"
                src="/brand/hero-risk-piece.png"
                alt=""
                width={760}
                height={1120}
                priority
                style={{ height: "100%", transform: "scaleX(1.24) scaleY(0.88)", width: "100%" }}
              />
            </div>
          </div>
          <div className="partner-strip" aria-label="Regional partner companies">
          <div className="partner-strip-copy">
            <span>Regional Partner Network</span>
          </div>
          <div className="partner-marquee" aria-hidden="true">
            <div className="partner-track">
              {[...partners, ...partners].map((partner, index) => (
                <span className="partner-chip" key={`${partner}-${index}`}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
          </div>
        </section>

        <section className="section light-section" id="about">
          <div className="section-heading">
            <span>About Aegis Risk Group</span>
            <h2>Risk defense built before exposure becomes damage.</h2>
          </div>
          <div className="about-grid">
            <div className="copy-block">
              <p>
                Aegis Risk Group is a Bangkok-based corporate risk and
                insurance advisory firm focused on helping organizations protect
                themselves from preventable financial, operational, legal, and
                reputational exposure.
              </p>
              <p>
                We work with companies operating in environments where one
                unresolved risk can become a major claim, regulatory issue,
                contract dispute, or board-level crisis.
              </p>
              <p>
                Aegis combines insurance knowledge, corporate governance
                thinking, operational risk review, and liability defense strategy
                into one advisory model.
              </p>
            </div>
            <div className="signal-panel">
              <strong>Bangkok-based expertise</strong>
              <span>Regional corporate risk knowledge</span>
              <span>Insurance intelligence</span>
              <span>Claims prevention</span>
            </div>
          </div>
          <div className="pillar-grid">
            {pillars.map(([title, text], index) => (
              <article className="pillar-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section dark-section" id="services">
          <div className="section-heading inverse">
            <span>What We Do</span>
            <h2>We advise companies before risk becomes a claim.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-index">
                  {String(services.indexOf(service) + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p className="service-summary">{service.text}</p>
                <p className="service-detail">
                  {serviceDetail(service.items)}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section light-section">
          <div className="section-heading">
            <span>Leadership</span>
            <h2>Experienced advisors for complex corporate risk decisions.</h2>
          </div>
          <div className="profile-grid">
            {executives.map((person) => (
              <ProfileCard person={person} compact key={person.slug} />
            ))}
          </div>
          <Link className="button button-dark" href="/people">
            View Our People
          </Link>
        </section>

        <section className="office-section">
          <div>
            <span>Based in Bangkok. Advising across the region.</span>
            <h2>Aegis Risk Group operates from Bangkok, Thailand.</h2>
            <p>
              We support corporations, insurers, regional headquarters, and
              executive teams across Southeast Asia.
            </p>
          </div>
          <address>
            <strong>Aegis Risk Group</strong>
            Empire Tower, 195 South Sathorn Road
            <br />
            Yan Nawa, Sathon
            <br />
            Bangkok 10120, Thailand
            <br />
            contact@aegisriskgroup.com
            <br />
            +66 2 000 0000
          </address>
          <Link className="button button-primary" href="/contact">
            Contact Our Bangkok Office
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
