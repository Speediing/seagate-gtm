import type { InterJob, Person } from "./types";

/**
 * What Inter described on September 11.
 * Every line below comes from the notes of that call. Where Inter did not
 * give a store, a price, a figure, a task, or a name, the site says so instead
 * of filling the gap.
 */
export const JOBS: InterJob[] = [
  {
    id: "beer",
    number: 1,
    who: "Davidson Castro",
    title: "Buy some beer for next week",
    dek: "One ask, across the three products he named. E-commerce, a check-in account, and insurance.",
    bot: "InterBot",
    icon: "cart",
    status: "Illustrative thread",
    thread: [
      { from: "you", text: "Buy some beer for next week." },
      {
        from: "bot",
        text: "Walking e-commerce, the check-in account, and insurance.",
      },
      {
        from: "system",
        text: "No store, price, or confirmation is shown. Inter did not give those.",
      },
    ],
    cards: [
      {
        label: "The three products",
        tag: "Named, not priced",
        lines: [
          { b: "E-commerce", s: "One of the three he named." },
          { b: "Check-in account", s: "Same ask, second product." },
          { b: "Insurance", s: "Same ask, third product." },
        ],
      },
    ],
    caption:
      "The bot does not invent a store, a price, or a confirmation. Inter did not give those.",
  },
  {
    id: "data-lake",
    number: 2,
    who: "Davidson Castro",
    title: "Questions for the data lake",
    dek: "Knowledge workers use Cursor on the lake to ask questions and get reports. He said that is a Grok Bot job, not an IDE job.",
    bot: "Grok Bot",
    icon: "lake",
    status: "No IDE",
    thread: [
      {
        from: "you",
        sender: "A knowledge worker",
        redacted: "A question for the lake. Inter did not name the question.",
      },
      {
        from: "bot",
        text: "Asking the lake. The report comes back here. The IDE stays closed.",
      },
      { from: "system", text: "No numbers were given." },
    ],
    cards: [
      {
        label: "Ask",
        tag: "No IDE",
        title: "A question for the lake",
        bars: 2,
        note: "Inter did not name the question.",
      },
      {
        label: "Report",
        tag: "No figures",
        title: "The report comes back",
        bars: 4,
        note: "The IDE stays closed. No numbers were given.",
      },
    ],
  },
  {
    id: "vic",
    number: 3,
    who: "Thiago Machado",
    title: "Vic, the shared FinOps bot",
    dek: "Everyone who wants AWS costs talks to the same Vic. Vic presents the monthly CFO report.",
    bot: "Vic",
    icon: "finops",
    status: "One bot, shared",
    thread: [
      {
        from: "you",
        sender: "A team, not named",
        text: "Vic, what are our AWS costs?",
      },
      { from: "bot", text: "Same Vic. Pulling AWS costs for your team." },
      {
        from: "you",
        sender: "Another team",
        text: "Vic, same question for us.",
      },
      { from: "bot", text: "Still the same Vic. On it." },
      {
        from: "system",
        text: "The monthly close. Vic presents the CFO report. Inter did not give the numbers in it.",
      },
    ],
    cards: [
      {
        label: "One bot",
        tag: "Shared",
        title: "Vic",
        lines: [
          { b: "A team asks for AWS costs", s: "Same Vic. Team not named." },
          { b: "Another team asks", s: "Still the same Vic." },
          { b: "The monthly close", s: "Vic presents the CFO report." },
        ],
      },
      {
        label: "Monthly CFO report",
        tag: "No figures",
        title: "Presented by Vic",
        bars: 3,
        note: "Inter did not give the numbers in the report.",
      },
    ],
  },
  {
    id: "commercial-busywork",
    number: 4,
    who: "Guilherme Ximenes",
    title: "Busywork off the commercial team",
    dek: "A small commercial team should get day-to-day busywork off their plate so they can sell. He wants guided examples, not a blank rollout.",
    bot: "Grok Bot",
    icon: "busywork",
    status: "Guided, not blank",
    thread: [
      {
        from: "you",
        text: "Start us with a guided example. Not a blank screen.",
      },
      {
        from: "bot",
        text: "Starting from a guided example. The day-to-day busywork comes off the team.",
      },
      {
        from: "bot",
        text: "Then the team can sell. That is the point you named.",
      },
      { from: "system", text: "The tasks stay unnamed. He did not name them." },
    ],
    cards: [
      {
        label: "How it starts",
        tag: "Not blank",
        lines: [
          {
            b: "A guided example",
            s: "What he asked for, instead of an empty start.",
            mark: "First",
          },
          {
            b: "The busywork comes off",
            s: "He did not name the tasks.",
            mark: "Then",
          },
          { b: "They can sell", s: "That is the point he named.", mark: "So" },
        ],
      },
      {
        title: "A small commercial team",
        note: "Not a blank rollout. The example is guided. The tasks stay unnamed, because he did not name them.",
      },
    ],
  },
  {
    id: "saas-spend",
    number: 5,
    who: "Guilherme Ximenes",
    title: "A SaaS-spend agent to try",
    dek: "He asked to try a SaaS-spend agent in the HaggleBot pattern, next to the FinOps bot Thiago described. A thing to try. Not a result Inter already has.",
    bot: "Grok Bot",
    icon: "haggle",
    status: "A thing to try",
    thread: [
      {
        from: "you",
        text: "Try a SaaS-spend agent, HaggleBot pattern, next to Vic.",
      },
      {
        from: "bot",
        text: "Set up as a thing to try, next to Vic. No savings figure. None was given as an Inter result.",
      },
      {
        from: "system",
        text: "A Zoom discount shown in a Cursor demo is not an Inter result.",
      },
    ],
    cards: [
      {
        label: "Pattern",
        tag: "HaggleBot",
        title: "SaaS spend",
        chips: ["Asked to try", "Next to Vic"],
        note: "No savings figure. None was given as an Inter result.",
      },
      {
        title: "Not this",
        note: "A Zoom discount shown in a Cursor demo is not an Inter result.",
      },
    ],
  },
  {
    id: "campaign-match",
    number: 6,
    who: "Inter growth side",
    title: "Match the customer to the campaign",
    dek: "They named Salesforce campaigns and A/B tests. A bot specialized on onboarding that matches the customer to the best campaign.",
    bot: "Grok Bot",
    icon: "campaign",
    status: "Onboarding",
    thread: [
      {
        from: "you",
        sender: "Growth",
        text: "Match this customer to the best onboarding campaign.",
      },
      {
        from: "bot",
        text: "Reading the Salesforce campaigns and the A/B tests for onboarding.",
      },
      {
        from: "system",
        text: "The customer is not named. The best campaign is not named. No test result was given.",
      },
    ],
    cards: [
      {
        label: "Onboarding",
        tag: "Unnamed",
        lines: [
          { b: "A customer", s: "Not named." },
          { b: "The best campaign", s: "Not named. No test result." },
        ],
      },
      {
        title: "What they named",
        chips: ["Salesforce campaigns", "A/B tests"],
      },
    ],
  },
  {
    id: "google-ads",
    number: 7,
    who: "Inter growth side",
    title: "Google Ads budget and acquisition cost",
    dek: "A bot that manages Google Ads budget and cost of acquisition. Inter did not give a budget or a rate.",
    bot: "Grok Bot",
    icon: "ads",
    status: "Budget not given",
    thread: [
      {
        from: "you",
        sender: "Growth",
        text: "Manage the Google Ads budget and the cost of acquisition.",
      },
      {
        from: "bot",
        text: "Watching Google Ads budget and cost of acquisition. Both stay unmarked here.",
      },
      { from: "system", text: "Inter did not give a budget or a rate." },
    ],
    cards: [
      { label: "Budget", tag: "Not given", title: "Unmarked", bars: 1 },
      {
        label: "Cost of acquisition",
        tag: "Not given",
        title: "Unmarked",
        bars: 1,
      },
    ],
  },
  {
    id: "finance-desk",
    number: 8,
    who: "Finance, and João",
    title: "The finance desk, without the IDE",
    dek: "Finance already uses Cursor for Python, spreadsheets, and extracting data. They want to see that work in Grok Bot, without the IDE. A MacBook is being prepared for João.",
    bot: "Grok Bot",
    icon: "finance",
    status: "No IDE",
    thread: [
      {
        from: "you",
        sender: "Finance",
        text: "Run the Python, update the spreadsheet, pull the extract. No IDE.",
      },
      {
        from: "bot",
        text: "Running it here in Grok Bot. The IDE stays closed.",
      },
      {
        from: "system",
        text: "No cells filled in, no figure in the extract. None were given.",
      },
    ],
    cards: [
      {
        label: "Finance",
        tag: "No IDE",
        lines: [
          { b: "Python", s: "Already how they use Cursor." },
          { b: "Spreadsheets", s: "No cells filled in. None were given." },
          { b: "Extracting data", s: "The extract, without a figure." },
        ],
      },
      {
        label: "João",
        tag: "CEO",
        title: "Grok Bot, not Cursor",
        note: "They said Grok Bot would be easier than Cursor. He is expected on-site next week. He did not speak.",
      },
    ],
  },
];

export const PEOPLE: Person[] = [
  { name: "João", role: "CEO. Did not speak. Expected on-site next week." },
  {
    name: "Davidson Castro",
    role: "Named the beer ask, and the data-lake questions.",
  },
  {
    name: "Guilherme Ximenes",
    role: "Named the commercial busywork, and the SaaS-spend agent to try.",
  },
  { name: "Thiago Machado", role: "Named Vic, the shared FinOps bot." },
];

export const DESCRIBED_ON = "September 11, 2026";
