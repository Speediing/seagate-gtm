import type { InterJob, Person } from "./types";

/**
 * What Inter described on September 11.
 * Every job below comes from the notes of that call. Where Inter did not
 * give a store, a price, a figure, a task, or a name, the site says so instead
 * of filling the gap. Outcomes describe what Grok Bot produces, not a measured
 * Inter result.
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
    outcome:
      "One customer ask, three Inter products, one thread. The customer confirms once and never leaves the chat.",
    steps: [
      {
        label: "Reads the ask",
        detail: "Beer for next week. One request that touches three products.",
      },
      {
        label: "Walks e-commerce",
        detail: "Builds the order in the Inter store. No store or price is shown here; Inter did not give them.",
      },
      {
        label: "Brings in the check-in account",
        detail: "Sets the order to be paid from the account he named, in the same thread.",
      },
      {
        label: "Offers the insurance",
        detail: "Adds the third product he named to the same ask, not a separate flow.",
      },
      {
        label: "Hands back one summary",
        detail: "Order, payment, and insurance in one card for the customer to confirm. No confirmation is faked.",
      },
    ],
    thread: [
      { from: "you", text: "Buy some beer for next week." },
      {
        from: "bot",
        text: "On it. Walking e-commerce, the check-in account, and insurance.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Here is the whole thing in one place. Confirm and I will place it.",
        artifact: {
          title: "Order summary, ready to confirm",
          note: "Beer for next week. Store, price, and confirmation left blank. Inter did not give those.",
        },
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
    outcome:
      "Anyone at Inter asks the lake in plain language and gets a report back in the thread. No IDE, no ticket to an analyst.",
    steps: [
      {
        label: "Takes the question",
        detail: "A knowledge worker asks in the thread, in their own words.",
      },
      {
        label: "Queries the lake",
        detail: "Runs the query on its own computer, where Cursor used to be needed.",
      },
      {
        label: "Assembles the report",
        detail: "Tables and charts from the answer, checked against the question.",
      },
      {
        label: "Hands back the report",
        detail: "Delivered in the thread, ready to forward. The IDE stays closed.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "A knowledge worker",
        redacted: "A question for the lake. Inter did not name the question.",
      },
      {
        from: "bot",
        text: "Asking the lake now. I will bring the report back here.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Report is ready. Forward it as is or ask me a follow-up.",
        artifact: {
          title: "Lake report, ready to forward",
          note: "Figures blank until Inter's lake is connected. No numbers were given.",
        },
      },
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
    outcome:
      "One Vic answers every team from the same AWS numbers, and assembles the monthly CFO pack without a FinOps analyst in the loop.",
    steps: [
      {
        label: "A team asks Vic",
        detail: "Any team, in its own thread. Same Vic every time.",
      },
      {
        label: "Pulls the AWS costs",
        detail: "Reads the billing data on its own computer, tagged by team and service.",
      },
      {
        label: "Answers from one source",
        detail: "Every team gets the same numbers, so no two teams argue about the bill.",
      },
      {
        label: "Assembles the CFO pack",
        detail: "At month close, builds the report: spend by team, movement, and notes.",
      },
      {
        label: "Presents it",
        detail: "Hands the pack to the CFO and stays in the thread for questions.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "A team, not named",
        text: "Vic, what are our AWS costs this month?",
      },
      {
        from: "bot",
        text: "Pulling them now. Same numbers I give every team.",
      },
      {
        from: "you",
        sender: "Another team",
        text: "Vic, same question for us.",
      },
      { from: "bot", text: "Still the same Vic. Both answers are on the way." },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Month is closed. The CFO pack is assembled and ready to present.",
        artifact: {
          title: "Monthly CFO pack, assembled",
          note: "Spend by team, movement, notes. Inter's figures go here; none were given.",
        },
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
    outcome:
      "Day-to-day busywork comes off a small commercial team's desk and runs as a routine, so the team spends its hours selling.",
    steps: [
      {
        label: "Starts from a guided example",
        detail: "Guilherme shows Grok Bot one task once, in the tools the team already uses. He did not name the task.",
      },
      {
        label: "Saves it as a routine",
        detail: "Grok Bot learns the steps from the demonstration and keeps them.",
      },
      {
        label: "Runs it on schedule",
        detail: "Does the task each day on its own computer, without a prompt.",
      },
      {
        label: "Leaves a review list",
        detail: "The team approves in one pass. The busywork is off the desk.",
      },
    ],
    thread: [
      {
        from: "you",
        text: "Start us with a guided example. Not a blank screen.",
      },
      {
        from: "bot",
        text: "Show me the task once and I will take it from there.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Saved as a routine. Today's run is done and the review list is ready.",
        artifact: {
          title: "Daily routine, review list ready",
          note: "One task, learned from the guided example. The tasks stay unnamed; he did not name them.",
        },
      },
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
    outcome:
      "A thing to try: every SaaS renewal gets a drafted ask before it auto-renews, sent only after Inter approves. No result yet.",
    steps: [
      {
        label: "Inventories the SaaS stack",
        detail: "Contracts, seats, and renewal dates, pulled from the tools Inter already has.",
      },
      {
        label: "Flags what renews next",
        detail: "Lists the renewals coming up, next to Vic's AWS view.",
      },
      {
        label: "Drafts the renewal ask",
        detail: "One vendor email per renewal, in the HaggleBot pattern.",
      },
      {
        label: "Waits for approval",
        detail: "Nothing goes to a vendor until Guilherme approves the draft.",
      },
      {
        label: "Reports what moved",
        detail: "Only after Inter runs it. No savings figure exists today.",
      },
    ],
    thread: [
      {
        from: "you",
        text: "Try a SaaS-spend agent, HaggleBot pattern, next to Vic.",
      },
      {
        from: "bot",
        text: "Setting it up as a thing to try. I will draft, you approve.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "First renewal ask is drafted. Nothing sent until you approve.",
        artifact: {
          title: "Renewal ask, draft awaiting approval",
          note: "Vendor and terms blank. No savings figure. None was given as an Inter result.",
        },
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
    outcome:
      "Every new customer lands in the best onboarding campaign, and the A/B results keep sharpening the match. Salesforce stays the record.",
    steps: [
      {
        label: "A customer enters onboarding",
        detail: "The trigger is the customer arriving, not a prompt from the team.",
      },
      {
        label: "Reads the campaigns",
        detail: "The Salesforce campaigns and the current A/B test results.",
      },
      {
        label: "Matches and enrolls",
        detail: "Picks the best campaign for that customer and enrolls them.",
      },
      {
        label: "Logs it in Salesforce",
        detail: "Writes the match and the reason back for the growth team.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "Growth",
        text: "Match each new onboarding customer to the best campaign.",
      },
      {
        from: "bot",
        text: "Reading the Salesforce campaigns and the A/B tests now.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Campaign matched and enrolled. The record is in Salesforce.",
        artifact: {
          title: "Match log, written to Salesforce",
          note: "Customer, campaign, and test result blank. Inter did not name them.",
        },
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
    outcome:
      "Google Ads budget managed against cost of acquisition every day, with each change proposed for approval before it is applied.",
    steps: [
      {
        label: "Checks the account each morning",
        detail: "Spend and cost of acquisition by campaign, from Google Ads directly.",
      },
      {
        label: "Compares against the budget",
        detail: "The budget Inter sets. It was not given, so it stays blank here.",
      },
      {
        label: "Proposes the shifts",
        detail: "Where to move budget between campaigns, with the reason.",
      },
      {
        label: "Applies after approval",
        detail: "Growth approves in the thread, then Grok Bot makes the change and logs it.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "Growth",
        text: "Manage the Google Ads budget against cost of acquisition.",
      },
      {
        from: "bot",
        text: "Checking the account. I will propose changes before I touch anything.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Today's proposal is ready. Approve and I will apply it.",
        artifact: {
          title: "Budget shift proposal, awaiting approval",
          note: "Budget and cost of acquisition unmarked. Inter did not give a budget or a rate.",
        },
      },
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
    outcome:
      "The finance desk's Python, spreadsheets, and extracts run from a chat, without the IDE. João can ask from the MacBook and get the file back.",
    steps: [
      {
        label: "Finance asks in plain language",
        detail: "The same work they do in Cursor today, asked as a message.",
      },
      {
        label: "Runs the Python",
        detail: "On its own computer. No editor opens on anyone's screen.",
      },
      {
        label: "Updates the spreadsheet",
        detail: "Writes the results into the sheet. No cells are filled in here; none were given.",
      },
      {
        label: "Pulls the extract",
        detail: "Gets the data out in the shape finance asked for.",
      },
      {
        label: "Hands back the files",
        detail: "Sheet and extract in the thread, ready for review. Grok Bot, not Cursor.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "Finance",
        text: "Run the Python, update the spreadsheet, pull the extract. No IDE.",
      },
      {
        from: "bot",
        text: "Running it here. Nothing opens on your side.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Done. Sheet and extract are attached for review.",
        artifact: {
          title: "Spreadsheet and extract, ready for review",
          note: "No cells filled in, no figure in the extract. None were given.",
        },
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
