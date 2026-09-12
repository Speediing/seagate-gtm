import { DESCRIBED_ON, PEOPLE } from "@/data/jobs";

export function WhoSaidIt() {
  return (
    <section id="who" className="who-band">
      <div className="who-head">
        <p className="eyebrow">Who said it</p>
        <h2>September 11. Those names only.</h2>
      </div>
      <ul className="people">
        {PEOPLE.map((person) => (
          <li key={person.name} className="person">
            <b>{person.name}</b>
            <span>{person.role}</span>
          </li>
        ))}
      </ul>
      <p className="colophon" id="line">
        Described on {DESCRIBED_ON}. Not a measured result.
      </p>
    </section>
  );
}
