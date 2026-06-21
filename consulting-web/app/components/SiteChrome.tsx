import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "What We Do", href: "/#services" },
  { label: "Our People", href: "/people" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/" aria-label="Aegis Risk Group home">
        <Image
          src="/brand/aegis-logo.png"
          alt="Aegis Risk Group logo"
          width={54}
          height={54}
          priority
        />
        <span>Aegis Risk Group</span>
      </Link>
      <nav className="main-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/contact">
        Contact Us
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Image
            src="/brand/aegis-logo.png"
            alt="Aegis Risk Group logo"
            width={72}
            height={72}
          />
          <h2>Aegis Risk Group</h2>
          <p>Corporate risk, insurance strategy, and liability reduction advisory.</p>
        </div>
        <FooterColumn
          title="Company"
          links={[
            ["Overview", "/"],
            ["About", "/#about"],
            ["What We Do", "/#services"],
            ["Our People", "/people"],
            ["Contact", "/contact"],
          ]}
        />
        <FooterColumn
          title="Services"
          links={[
            ["Corporate Liability Review", "/#services"],
            ["Insurance Program Advisory", "/#services"],
            ["Claims Prevention Strategy", "/#services"],
            ["Contract and Vendor Risk Advisory", "/#services"],
            ["Board Risk Reporting", "/#services"],
          ]}
        />
        <div>
          <h3>Office</h3>
          <p>
            Aegis Risk Group
            <br />
            Bangkok, Thailand
            <br />
            contact@aegisriskgroup.com
            <br />
            +66 2 000 0000
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aegis Risk Group. All rights reserved.</span>
        <div>
          <Link href="/contact">Privacy Policy</Link>
          <Link href="/contact">Terms of Use</Link>
          <Link href="/contact">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
