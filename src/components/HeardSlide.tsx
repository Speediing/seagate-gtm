import { AGENT_TEAMMATES } from "@/data/agent-teammates";
import type { SlideCard } from "@/data/types";

export function HeardSlide({
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
  wash?: string;
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide datadog-usecase-slide">
        <header className="datadog-slide-header">
          <p>Sample agent teammates for Seagate GTM</p>
          <h3>Six examples of work Grok Bot can own for Seagate.</h3>
          <span>
            Not the limit, any repeatable GTM workflow can become an always-on
            agent job.
          </span>
        </header>
        <div className="datadog-usecase-grid">
          {AGENT_TEAMMATES.map((item) => (
            <section key={item.title}>
              <p>{item.stage}</p>
              <h4>{item.title}</h4>
              <span>{item.body}</span>
              <strong>{item.value}</strong>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
