import Image from "next/image";
import Link from "next/link";
import type { Person } from "../data/people";

export function ProfileCard({
  person,
  compact = false,
}: {
  person: Person;
  compact?: boolean;
}) {
  return (
    <article className="profile-card">
      <div className="portrait" aria-hidden="true">
        <Image src={person.image} alt="" fill sizes="(max-width: 720px) 100vw, 220px" />
      </div>
      <div className="profile-content">
        <p className="profile-role">{person.role}</p>
        <h3>{person.name}</h3>
        <div className="tag-row">
          {person.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p>{person.bio}</p>
        {!compact && (
          <Link className="text-link" href={`/people/${person.slug}`}>
            View Profile
          </Link>
        )}
      </div>
    </article>
  );
}
