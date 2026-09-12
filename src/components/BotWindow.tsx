import type { FactCard, InterJob, ThreadMessage } from "@/data/types";
import { BotMark, JobIcon } from "./Icons";

function Message({
  message,
  who,
  bot,
}: {
  message: ThreadMessage;
  who: string;
  bot: string;
}) {
  if (message.from === "system") {
    return <p className="bot-system">{message.text}</p>;
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
            {job.cards.map((card, index) => (
              <Card key={index} card={card} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
