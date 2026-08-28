export type AgentTeammate = {
  stage: string;
  title: string;
  body: string;
  value: string;
};

export const AGENT_TEAMMATES: AgentTeammate[] = [
  {
    stage: "Advance deals",
    title: "Drive Qualification Coordinator",
    body: "Turns discovery notes into a test plan, tracks the chassis and drive list, and keeps open product questions moving.",
    value: "The next lab step stays clear.",
  },
  {
    stage: "Run pipeline",
    title: "Capacity Pipeline Analyst",
    body: "Checks Salesforce for capacity dates, stalled qualifications, missing buyers, and purchase timing.",
    value: "Storage deals have a real next step.",
  },
  {
    stage: "Prioritize accounts",
    title: "Storage Signal Researcher",
    body: "Finds data-center builds, NAS growth, archive plans, and drive-qualification signals, then builds the account brief.",
    value: "Reps start with a storage reason.",
  },
  {
    stage: "Protect revenue",
    title: "Archive Cost Analyst",
    body: "Uses approved inputs to compare another tape cycle, on-prem HDD capacity, and Lyve Cloud for the account team.",
    value: "The archive tradeoff is easier to explain.",
  },
  {
    stage: "Create pipeline",
    title: "Storage Outbound Builder",
    body: "Writes the 3-why from capacity, density, rebuild, and qualification signals, then drafts personal outreach.",
    value: "Outbound starts with a real storage need.",
  },
  {
    stage: "Tailor the story",
    title: "Live Deck Updater",
    body: "Turns discovery into customer-specific Exos, IronWolf, HAMR, or Lyve Cloud slides while the call is live.",
    value: "The customer sees its own plan.",
  },
];
