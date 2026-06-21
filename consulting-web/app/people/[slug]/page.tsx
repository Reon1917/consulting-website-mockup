import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components/SiteChrome";
import { findPerson, partners } from "../../data/people";

export function generateStaticParams() {
  return partners.map((person) => ({ slug: person.slug }));
}

export default async function PartnerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = findPerson(slug);

  if (!person || person.group !== "Partners") {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <section className="profile-hero">
          <div className="portrait portrait-large" aria-hidden="true">
            <Image src={person.image} alt="" fill sizes="(max-width: 1100px) 100vw, 520px" />
          </div>
          <div>
            <Link className="text-link" href="/people">
              Back to Our People
            </Link>
            <h1>{person.name}</h1>
            <p className="profile-role">{person.role}</p>
            <p>{person.summary}</p>
            <Link className="button button-primary" href="/contact">
              Contact {person.name.split(" ")[0]}&apos;s Advisory Team
            </Link>
          </div>
        </section>

        <section className="section light-section detail-grid">
          <DetailBlock title="Areas of Expertise" items={person.expertise ?? []} />
          <DetailBlock title="Education History" items={person.education ?? []} />
          <article className="detail-panel wide">
            <h2>Professional History</h2>
            {person.history?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
          <DetailBlock
            title="Representative Advisory Work"
            items={person.advisoryWork ?? []}
            wide
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

function DetailBlock({
  title,
  items,
  wide = false,
}: {
  title: string;
  items: string[];
  wide?: boolean;
}) {
  return (
    <article className={`detail-panel${wide ? " wide" : ""}`}>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
