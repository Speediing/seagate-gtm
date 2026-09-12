import type { FactCard, InterJob, Step, ThreadMessage } from "@/data/types";
import { BotMark, JobIcon } from "./Icons";

function StepsCard({ steps, bot }: { steps: Step[]; bot: string }) {
  return (
    <div className="bot-row is-bot is-work">
      <span className="bot-meta">{bot} · working</span>
      <ol className="bot-steps" aria-label={`What ${bot} does, end to end`}>
        {steps.map((step, index) => (
          <li key={step.label}>
            <span aria-hidden>{index + 1}</span>
            <div>
              <b>{step.label}</b>
              <small>{step.detail}</small>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function ArtifactIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3.5h7l4 4v13H7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function Message({
  message,
  who,
  bot,
  steps,
}: {
  message: ThreadMessage;
  who: string;
  bot: string;
  steps: Step[];
}) {
  if (message.from === "system") {
    return <p className="bot-system">{message.text}</p>;
  }
  if (message.steps) {
    return <StepsCard steps={steps} bot={bot} />;
  }
  const isYou = message.from === "you";
  return (
    <div className={`bot-row ${isYou ? "is-you" : "is-bot"}`}>
      <span className="bot-meta">{isYou ? message.sender || who : bot}</span>
      {message.redacted ? (
        <div
          className="bot-bubble is-redacted"
          role="img"
          aria-label={message.redacted}
        >
          <i aria-hidden />
          <i aria-hidden />
          <small>{message.redacted}</small>
        </div>
      ) : (
        <p className="bot-bubble">{message.text}</p>
      )}
      {message.artifact ? (
        <div className="bot-artifact">
          <span>
            <ArtifactIcon />
          </span>
          <div>
            <b>{message.artifact.title}</b>
            <small>{message.artifact.note}</small>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Card({ card }: { card: FactCard }) {
  return (
    <section className="fact-card">
      {card.label || card.tag ? (
        <p className="fact-meta">
          <span>{card.label}</span>
          <span>{card.tag}</span>
        </p>
      ) : null}
      {card.title ? <h3>{card.title}</h3> : null}
      {card.lines ? (
        <ul className="fact-lines">
          {card.lines.map((line) => (
            <li key={line.b}>
              <div>
                <b>{line.b}</b>
                <span>{line.s}</span>
              </div>
              {line.mark ? <em>{line.mark}</em> : null}
            </li>
          ))}
        </ul>
      ) : null}
      {card.chips ? (
        <p className="fact-chips">
          {card.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </p>
      ) : null}
      {card.bars ? (
        <div className="fact-bars" aria-hidden>
          {Array.from({ length: card.bars }, (_, i) => (
            <i key={i} />
          ))}
        </div>
      ) : null}
      {card.note ? <p className="fact-note">{card.note}</p> : null}
    </section>
  );
}

export function BotWindow({ job }: { job: InterJob }) {
  return (
    <div className="bot-window" aria-label={`Illustrative ${job.bot} thread`}>
      <header className="bot-titlebar">
        <span className="traffic" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="bot-title">
          <span className="bot-avatar" aria-hidden>
            <JobIcon kind={job.icon} />
          </span>
          <strong>{job.bot}</strong>
          <small>{job.status}</small>
        </span>
        <span className="bot-control">
          <span className="bot-live" aria-hidden />
          Computer · You are in control
        </span>
      </header>
      <div className="bot-body">
        <div className="bot-thread">
          {job.thread.map((message, index) => (
            <Message
              key={index}
              message={message}
              who={job.who}
              bot={job.bot}
              steps={job.steps}
            />
          ))}
          <div className="bot-composer" aria-hidden>
            <span>
              <BotMark />
            </span>
            <p>Message {job.bot}</p>
          </div>
        </div>
        <aside className="bot-computer">
          <p className="bot-computer-bar">
            <span className="bot-live" aria-hidden />
            <strong>Computer</strong>
            <span>Working</span>
          </p>
          <div className="fact-stack">
            <section className="fact-card is-outcome">
              <p className="fact-meta">
                <span>Outcome</span>
                <span>For João</span>
              </p>
              <p className="fact-outcome">{job.outcome}</p>
              {job.facts.length ? (
                <ul className="fact-public">
                  {job.facts.map((fact) => (
                    <li key={fact.text}>
                      <span>{fact.text}</span>
                      <small>Public Inter figure · {fact.source}</small>
                    </li>
                  ))}
                </ul>
              ) : null}
              {job.hiring ? (
                <p className="fact-hiring">
                  <b>Hiring that maps</b>
                  <span>
                    Inter posted {job.hiring.roles}, {job.hiring.where}, in
                    2026. {job.hiring.note}
                  </span>
                </p>
              ) : null}
            </section>
            {job.cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
            <section className="fact-card is-measure">
              <p className="fact-meta">
                <span>What to count</span>
                <span>Sourced or frame</span>
              </p>
              <ul className="fact-measures">
                {job.measures.map((measure) => (
                  <li key={measure.label}>
                    <span>{measure.label}</span>
                    {measure.value ? (
                      <b className="measure-public">
                        {measure.value}
                        <small>Public · {measure.source}</small>
                      </b>
                    ) : (
                      <i className="measure-frame">{measure.frame}</i>
                    )}
                  </li>
                ))}
              </ul>
              <p className="fact-legend">
                <b>Public</b> is a published Inter figure, with its period and
                source. <b>Count to run</b> is a frame Inter can measure.{" "}
                <b>Blank today</b> means Inter has not published it. No blank is
                filled with our number.
              </p>
            </section>
          </div>
        </aside>
      </div>
    </div>
  );
}
