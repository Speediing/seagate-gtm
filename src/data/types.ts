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
