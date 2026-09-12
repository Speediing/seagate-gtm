import Image from "next/image";
import { BotPrinciples } from "@/components/BotPrinciples";
import { HeroDemo } from "@/components/HeroDemo";
import { JobIcon } from "@/components/Icons";
import { JobSection } from "@/components/JobSection";
import { SiteNav } from "@/components/SiteNav";
import { WhoSaidIt } from "@/components/WhoSaidIt";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        <Image
          className="hero-watercolor-image"
          src="/brand/inter-falcon.webp"
          alt="Watercolor of a Falcon rocket on the pad beside a city skyline at sunrise"
          width={1600}
          height={900}
          sizes="100vw"
          priority
          unoptimized
        />
        <SiteNav />
      </div>

      <div className="report">
        <section className="hero">
          <HeroDemo />
        </section>

        <p className="score-line">
          Rule of 50 is 48. Efficiency is 42.1% against a 30% goal. These
          eight jobs are how the work moves those numbers.
        </p>

        <section className="usecase-framing" id="jobs">
          <p className="eyebrow">Eight jobs</p>
          <h2>Each one is a Bot with a job. Named on the call, not invented here.</h2>
          <p>
            Where Inter did not give a store, a price, a figure, a task, or a
            name, the page says so instead of filling the gap.
          </p>
        </section>

        <div className="metric-grid">
          {JOBS.map((job) => (
            <a key={job.id} className="metric-card" href={`#${job.id}`}>
              <div className="metric-card-top">
                <p>{String(job.number).padStart(2, "0")}</p>
                <span className="metric-icon" aria-hidden>
                  <JobIcon kind={job.icon} />
                </span>
              </div>
              <h2>{job.title}</h2>
              <p className="metric-trigger">{job.who}</p>
            </a>
          ))}
        </div>

        <div className="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="report">
        <BotPrinciples />
        <WhoSaidIt />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Grok Bot for Inter</p>
          <p>Inter × SpaceXAI. Password protected leave-behind.</p>
          <p>Public 2Q26 figures. Not a Grok Bot result.</p>
        </div>
        <address className="footer-contact">
          <p>Your Cursor contact</p>
          <strong>Jason Wiker</strong>
          <a href="mailto:jason.wiker@cursor.com">jason.wiker@cursor.com</a>
        </address>
      </footer>
    </main>
  );
}
