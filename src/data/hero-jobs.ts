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
    account: "Aster Peak Compute",
    signal: "Data-center HDD qualification opened",
    work: "I found the capacity plan, the qualification window, and the storage leaders. I drafted outreach around an Exos test in their current chassis.",
    result: "10 storage-specific emails ready",
    user: "send the top 10, they look good",
    bot: "sending now. the rest stay queued.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Cedar Forge Media",
    signal: "NAS fleet crossed 80% capacity",
    work: "I mapped the storage team, current NAS footprint, rebuild concern, and the likely IronWolf qualification path.",
    result: "Storage brief and buyer map ready",
    user: "brief me before the call",
    bot: "sent. i'll keep the brief current.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Morrow Lake discovery",
    signal: "Customer call ended",
    work: "I captured the rack-density target and tape-versus-HDD question, updated the deck, and drafted the recap with test owners.",
    result: "Deck and follow-up email ready",
    user: "send the recap and share the deck",
    bot: "sent. next steps are on both calendars.",
  },
  {
    name: "Deal Desk",
    icon: "deal-desk",
    account: "Silver Basin Research",
    signal: "Drive qualification matrix received",
    work: "I checked the requested model, firmware branch, warranty guidance, and supply notes, then drafted the supported answers.",
    result: "Qualification response ready",
    user: "route the open supply question",
    bot: "routed. the supported answers are ready.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Enterprise storage pipeline",
    signal: "Four capacity deals lost momentum",
    work: "I reviewed activity, qualification steps, and procurement dates, then found the missing chassis test or buyer action in each deal.",
    result: "Four deal recovery plans ready",
    user: "brief the account owners",
    bot: "briefs sent. i'll watch for movement.",
  },
  {
    name: "Renewal Risk",
    icon: "renewal",
    account: "Harborline Studios",
    signal: "Archive forecast changed",
    work: "I compared the new retention plan with the current Lyve Cloud estimate and prepared the questions the account team needs answered.",
    result: "Archive plan review ready",
    user: "share this with the account team",
    bot: "shared. i'll track the capacity forecast.",
  },
  {
    name: "Competitive Intel",
    icon: "competitive",
    account: "Pine Arc Cloud",
    signal: "Tape refresh mentioned on the call",
    work: "I pulled the buyer's archive-cost concern and drafted a clean comparison of another tape cycle, HDD capacity, and Lyve Cloud.",
    result: "Archive options talk track ready",
    user: "add it to tomorrow's call brief",
    bot: "added. the rep has the proof points.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly operating review",
    signal: "Three storage decisions still open",
    work: "I gathered pipeline changes, drive qualifications, supply questions, and team commitments, then prepared the decisions that need attention.",
    result: "Sales leadership brief ready",
    user: "send it to the leadership team",
    bot: "sent. next week's tracker is already live.",
  },
];
