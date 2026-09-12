import type { InterJob } from "@/data/types";
import { BotWindow } from "./BotWindow";

export function JobSection({ job }: { job: InterJob }) {
  return (
    <section id={job.id} className="job">
      <p className="section-number">{String(job.number).padStart(2, "0")}</p>
      <div>
        <p className="kicker">{job.who}</p>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-value">{job.dek}</p>
        <BotWindow job={job} />
        {job.caption ? <p className="job-caption">{job.caption}</p> : null}
      </div>
    </section>
  );
}
