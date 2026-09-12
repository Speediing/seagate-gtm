export type JobId =
  | "beer"
  | "data-lake"
  | "vic"
  | "commercial-busywork"
  | "saas-spend"
  | "campaign-match"
  | "google-ads"
  | "finance-desk";

export type HeroJobIcon =
  | "cart"
  | "lake"
  | "finops"
  | "busywork"
  | "haggle"
  | "campaign"
  | "ads"
  | "finance";

export type ThreadFrom = "you" | "bot" | "system";

export type Step = { label: string; detail: string };

export type PublicFact = { text: string; source: string };

export type Hiring = { roles: string; where: string; note: string };

export type Measure = {
  label: string;
  /** Present only for a public Inter figure. Never an invented number. */
  value?: string;
  /** Period and source for the value. */
  source?: string;
  /** For frames: "Count to run", or "Blank today" when Inter has not published it. */
  frame?: string;
};

export type ThreadMessage = {
  from: ThreadFrom;
  /** Who is typing, when it is not the person named on the job. */
  sender?: string;
  text?: string;
  /** Inter did not give the words. Show a redacted bubble instead of inventing them. */
  redacted?: string;
  /** Render the job's end-to-end steps as a work card in the thread. */
  steps?: boolean;
  /** The work product handed back. Drafts stay drafts where Inter gave no numbers. */
  artifact?: { title: string; note: string };
};

export type FactLine = { b: string; s: string; mark?: string };

export type FactCard = {
  label?: string;
  tag?: string;
  title?: string;
  lines?: FactLine[];
  chips?: string[];
  /** Unmarked placeholder rows, in place of figures Inter did not give. */
  bars?: number;
  note?: string;
};

export type InterJob = {
  id: JobId;
  number: number;
  /** Who named the job on September 11. */
  who: string;
  title: string;
  dek: string;
  /** Bot shown in the window chrome. Only Vic and InterBot were named. */
  bot: string;
  icon: HeroJobIcon;
  status: string;
  /** What Inter gets when this job works. Business language, no invented figures. */
  outcome: string;
  /** The job end to end, from the ask to the handoff. */
  steps: Step[];
  /** Public Inter figures that frame the job. Each carries its period and source. */
  facts: PublicFact[];
  /** Inter hiring that maps to the job. Posted in 2026; not claimed open today. */
  hiring?: Hiring;
  /** What to count. A sourced value is a public Inter figure; no value means a count Inter can run. */
  measures: Measure[];
  thread: ThreadMessage[];
  cards: FactCard[];
  caption?: string;
};

export type HeroJob = {
  id: JobId;
  name: string;
  bot: string;
  icon: HeroJobIcon;
  who: string;
  named: string;
  steps: string[];
  outcome: string;
  user: string;
  reply: string;
};

export type Person = {
  name: string;
  role: string;
};
