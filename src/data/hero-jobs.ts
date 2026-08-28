export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "deal-desk"
  | "pipeline"
  | "renewal"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS: HeroJob[] = [
  {
    name: "Sales Outbound",
    icon: "outbound",
    account: "Northwind",
    signal: "Three new infrastructure roles",
    work: "Their migration is likely moving. I researched the team and drafted outreach around the same work you cut in half for similar companies.",
    result: "10 personalized emails ready",
    user: "send the top 10, they look good",
    bot: "sending now. the rest stay queued.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Acme Corp",
    signal: "Cloud migration project detected",
    work: "I mapped the buying committee, summarized recent initiatives, and found three credible reasons to start a conversation.",
    result: "Account brief and outreach angles ready",
    user: "brief me before the call",
    bot: "sent. i'll keep the brief current.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Globex discovery",
    signal: "Customer call ended",
    work: "I captured the priorities, updated the deck with their language, and drafted the recap with owners and next steps.",
    result: "Deck and follow-up email ready",
    user: "send the recap and share the deck",
    bot: "sent. next steps are on both calendars.",
  },
  {
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Northstar Bank",
    signal: "Security questionnaire received",
    work: "I found approved answers across product, legal, and security, then drafted a complete response with the right citations.",
    result: "Questionnaire response ready",
    user: "route the two exceptions to legal",
    bot: "routed. the other answers are ready to send.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Enterprise pipeline",
    signal: "Four deals lost momentum",
    work: "I reviewed activity, stage history, and buyer engagement, then identified the missing next step for each opportunity.",
    result: "Four recovery plans ready",
    user: "brief the account owners",
    bot: "briefs sent. i'll watch for movement.",
  },
  {
    name: "Renewal Risk",
    icon: "renewal",
    account: "Initech",
    signal: "Usage and champion activity declined",
    work: "I connected the adoption drop to two inactive teams and prepared a recovery plan using the outcomes they committed to.",
    result: "Renewal recovery plan ready",
    user: "share this with the account team",
    bot: "shared. i'll track usage and flag changes.",
  },
  {
    name: "Competitive Intel",
    icon: "competitive",
    account: "Wayne Enterprises",
    signal: "Competitor mentioned on the call",
    work: "I found the exact concern, matched it to recent win evidence, and drafted a talk track grounded in this buyer's priorities.",
    result: "Competitive response ready",
    user: "add it to tomorrow's call brief",
    bot: "added. the rep has the proof points.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Three decisions still open",
    work: "I gathered pipeline changes, forecast risk, and team commitments across your tools, then prepared the decisions that need attention.",
    result: "CRO operating brief ready",
    user: "send it to the leadership team",
    bot: "sent. next week's tracker is already live.",
  },
];
