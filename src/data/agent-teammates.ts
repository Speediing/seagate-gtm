export type AgentTeammate = {
  stage: string;
  title: string;
  body: string;
  value: string;
};

export const AGENT_TEAMMATES: AgentTeammate[] = [
  {
    stage: "Advance deals",
    title: "Deal Desk Coordinator",
    body: "Builds contextual deal notes from email, Salesforce, and calls, then submits after approval.",
    value: "Less admin between meetings.",
  },
  {
    stage: "Run pipeline",
    title: "Pipeline Analyst",
    body: "Scrubs Salesforce and sheets, flags stalls and commit risk, and prepares the Monday scoreboard.",
    value: "A cleaner forecast every week.",
  },
  {
    stage: "Prioritize accounts",
    title: "Account Research Specialist",
    body: "Combines Salesforce with live signals to score fit and warmth and build a shareable research pack.",
    value: "Reps start with the right context.",
  },
  {
    stage: "Protect revenue",
    title: "Renewal Desk Operator",
    body: "Builds a 90-day brief from usage, tickets, Gong, and CRM, then keeps legal and next steps moving.",
    value: "Renewal risk surfaces earlier.",
  },
  {
    stage: "Create pipeline",
    title: "Prospecting Plan Builder",
    body: "Finds and enriches contacts, then creates a ready-to-work tracker for the week's outbound.",
    value: "More selling from a better list.",
  },
  {
    stage: "Tailor the story",
    title: "Deck Updater",
    body: "Turns discovery notes into customer-specific slides during or immediately after the call.",
    value: "The next deck is already moving.",
  },
];
