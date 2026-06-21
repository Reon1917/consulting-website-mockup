import { Footer, Header } from "../components/SiteChrome";
import { ProfileCard } from "../components/ProfileCard";
import { people, type PersonGroup } from "../data/people";

const groups: PersonGroup[] = ["C-Suite", "Senior Partners", "Partners"];

export default function PeoplePage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero compact-page-hero">
          <span>Our People</span>
          <h1>Advisors with experience across insurance, liability, governance, claims prevention, and regional risk strategy.</h1>
        </section>
        {groups.map((group) => (
          <section className="section light-section team-section" key={group}>
            <div className="section-heading">
              <span>{group}</span>
              <h2>{group === "Partners" ? "Partner advisory teams" : group}</h2>
            </div>
            <div className="profile-grid">
              {people
                .filter((person) => person.group === group)
                .map((person) => (
                  <ProfileCard key={person.slug} person={person} />
                ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
