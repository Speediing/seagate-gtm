import Image from "next/image";
import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        <Image
          className="hero-watercolor-image"
          src="/brand/watercolor-pad.webp"
          alt=""
          width={1280}
          height={720}
          sizes="100vw"
          priority
          unoptimized
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <section className="hero">
            <HeroDemo />
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              Grok Bot gives every seller their own fleet of always-available
              agent teammates. Anything your sellers do today can be done
              through Grok Bot.
            </h2>
            <p>These are three examples from millions, not the boundary.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a key={job.id} className="metric-card" href={`#${job.id}`}>
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">
                  Starts when {job.trigger.toLowerCase()}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.webp" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Cursor for Seagate</p>
          <p>Grok Bot for Seagate sales</p>
        </div>
        <address className="footer-contact">
          <p>Seagate&apos;s existing Cursor contact</p>
          <strong>Madeline Ingleby</strong>
          <a href="mailto:madeline.ingleby@cursor.com">
            madeline.ingleby@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
