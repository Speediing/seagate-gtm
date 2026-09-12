import { SCOREBOARD, SCOREBOARD_SOURCE } from "@/data/scoreboard";

export function CeoStrip() {
  return (
    <aside className="ceo-strip" aria-label="The counts Inter already publishes">
      <div className="ceo-strip-head">
        <p className="eyebrow">The counts he already publishes</p>
        <p>
          These eight jobs are how Grok Bot moves the counts Inter already
          publishes. Public 2Q26 figures, not a Grok Bot result.
        </p>
      </div>
      <dl className="ceo-strip-grid">
        {SCOREBOARD.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>
              <b>{item.value}</b>
              <span>{item.note}</span>
            </dd>
          </div>
        ))}
      </dl>
      <p className="ceo-strip-source">{SCOREBOARD_SOURCE}</p>
    </aside>
  );
}
