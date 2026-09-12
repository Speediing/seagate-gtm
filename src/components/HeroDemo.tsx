"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_JOBS } from "@/data/hero-jobs";
import { BackIcon, DesktopIcon, JobIcon, MicIcon, PlusIcon } from "./Icons";

/** Matches the 7s loop of the phone animations in globals.css. */
const CYCLE_MS = 7000;
/** After a manual pick, the phone stays put before it starts cycling again. */
const RESUME_MS = 21000;

export function HeroDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);
  const job = HERO_JOBS[active];

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % HERO_JOBS.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  function pick(index: number) {
    setActive(index);
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), RESUME_MS);
  }

  return (
    <>
      <div className="hero-copy">
        <p className="eyebrow">Inter × SpaceXAI · September 11</p>
        <h1>Grok Bot for Inter</h1>
        <p className="hero-line">Eight jobs they named. One bot.</p>
        <p className="hero-intro">
          What Inter described on September 11. João is the CEO. He did not
          speak. The work below is what Davidson Castro, Guilherme Ximenes,
          Thiago Machado, and the growth and finance sides asked to see.
        </p>
        <div className="hero-phone-jobs" aria-label="Choose one of the eight jobs">
          {HERO_JOBS.map((item, index) => (
            <button
              key={item.id}
              className={index === active ? "is-active" : undefined}
              type="button"
              aria-pressed={index === active}
              onClick={() => pick(index)}
            >
              {index === active ? (
                <span aria-hidden>
                  <JobIcon kind={item.icon} />
                </span>
              ) : null}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      <aside className="hero-bot-demo" aria-label="Grok Bot phone demo, cycling through the eight Inter jobs">
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden />
          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden>
              <BackIcon />
            </span>
            <span className="hero-phone-agent" aria-hidden>
              <JobIcon kind={job.icon} />
            </span>
            <p>
              <strong>{job.bot}</strong>
              <small>
                <span aria-hidden /> Working on its own computer
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden>
              <DesktopIcon />
            </span>
          </header>
          <div className="hero-phone-thread" key={job.id}>
            <article className="hero-phone-work">
              <p className="hero-phone-work-label">
                <span aria-hidden />
                Job {String(active + 1).padStart(2, "0")} of 08
              </p>
              <p className="hero-phone-work-meta">
                <span>Named by</span>
                {job.who}
              </p>
              <p className="hero-phone-work-meta">
                <span>Named</span>
                {job.named}
              </p>
              <p className="hero-phone-work-copy">{job.work}</p>
              <strong>{job.result}</strong>
            </article>
            <p className="hero-phone-message is-user">{job.user}</p>
            <p className="hero-phone-message is-bot">{job.reply}</p>
          </div>
          <footer className="hero-phone-composer">
            <span aria-hidden>
              <PlusIcon />
            </span>
            <p>Message {job.bot}</p>
            <span aria-hidden>
              <MicIcon />
            </span>
          </footer>
        </div>
        <p className="hero-phone-caption">
          Illustrative. The phone cycles through the eight jobs Inter named.
          Nothing on it is a measured Inter result.
        </p>
      </aside>
    </>
  );
}
