import type { InterJob, Person } from "./types";

/**
 * What Inter described on September 11. The only numbers on this page are
 * Inter's public 2Q26 figures, used where they are the point of the sentence.
 * Nothing here is a Grok Bot result. Where Inter did not give a store, a
 * price, a figure, a task, or a name, the page says so instead of filling it.
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
      "Shopping is a profit problem, not a traffic problem. In the first quarter of 2026, 3.6 million people bought R$1,215 million of goods there. The number that matters is how many of those orders leave with an Inter account and Inter insurance attached. One ask, three products, one confirmation.",
    missing:
      "Primary clients still hold less than 5% of their credit at Inter. Every attached product moves that.",
    steps: [
      {
        label: "Reads the ask",
        detail: "Beer for next week. One request that touches three products.",
      },
      {
        label: "Walks Shopping",
        detail: "Builds the order in the Inter store. No store or price is shown here; Inter did not give them.",
      },
      {
        label: "Brings in the check-in account",
        detail: "Pays from the account he named and flags the buyer as a primary client, in the same thread.",
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
        text: "On it. Walking Shopping, the check-in account, and insurance.",
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
          { b: "Check-in account", s: "Same ask, second product. Primary client." },
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
      "Inter has the data. The people who need an answer still wait on an engineer. Grok Bot gives them the number back in the chat, no IDE. The count that matters is how many questions never become a ticket.",
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
      "Efficiency is 42.1%. The goal is 30%. Cloud, SaaS, and AI spend is one of the lines that has to move. Vic gives every team the same answer on cost and hands the CFO one pack a month. The number that matters is spend against budget, on one page, before the invoice closes.",
    steps: [
      {
        label: "A team asks Vic",
        detail: "Any team, in its own thread. Same Vic every time.",
      },
      {
        label: "Pulls the cloud costs",
        detail: "Reads AWS billing on its own computer, tagged by team and service, with SaaS and GenAI spend beside it.",
      },
      {
        label: "Answers from one source",
        detail: "Every team gets the same numbers, so no two teams argue about the bill.",
      },
      {
        label: "Assembles the CFO pack",
        detail: "At month close: spend by team, variance against budget, anomalies, rightsizing.",
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
          title: "Monthly cloud, SaaS, and GenAI pack, assembled",
          note: "Spend by team, variance, anomalies, rightsizing. Inter's figures go here; the cloud spend is not published.",
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
      "Business clients pay 2.8 times the average client, and headcount is about 4,000. The commercial team should be selling to them, not filling calendars and GMV sheets. Grok Bot takes the busywork after one guided example. The number that matters is hours spent selling.",
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
      "A thing to try, not a result. Every SaaS renewal gets a drafted ask before it auto-renews, and nothing goes to a vendor until Guilherme approves. There is no savings figure, because Inter has not run it.",
    steps: [
      {
        label: "Inventories the SaaS stack",
        detail: "Contracts, seats, and renewal dates, pulled from the tools Inter already has.",
      },
      {
        label: "Flags what renews in 90 days",
        detail: "Lists the renewals coming up, next to Vic's cloud view.",
      },
      {
        label: "Drafts the renewal ask",
        detail: "One vendor email per renewal, last price against invoice.",
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
      "26.4 million active clients. Net ARPAC is R$35.5 a month. One more real a month across that base is about R$317 million a year. Grok Bot matches each new customer to the right onboarding campaign, keeps a holdout, and logs it in Salesforce.",
    missing:
      "The lift is the number, and it is Inter's to measure. Nothing here guesses it.",
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
        label: "Matches, enrolls, holds out",
        detail: "Picks the best campaign for that customer, enrolls them, and keeps a holdout so the lift is real.",
      },
      {
        label: "Logs it in Salesforce",
        detail: "Writes the match, the reason, and the holdout flag back for the growth team.",
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
        text: "Campaign matched, enrolled, holdout kept. The record is in Salesforce.",
        artifact: {
          title: "Match log, written to Salesforce",
          note: "Customer, campaign, and lift blank. Inter did not name them; the A/B result is Inter's to run.",
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
      "The payoff Inter already named is a cheaper, richer account, not more raw sign-ups. Grok Bot checks Google Ads every morning, proposes each budget shift with payback as the reason, and waits for approval.",
    missing:
      "The missing number is what a new account costs. Inter has not published it, so it is not on this page.",
    steps: [
      {
        label: "Checks the account each morning",
        detail: "Spend, qualified accounts, and cost of acquisition by campaign and market, from Google Ads directly.",
      },
      {
        label: "Compares against the budget",
        detail: "The budget Inter sets. It was not published, so it stays blank here.",
      },
      {
        label: "Proposes the shifts",
        detail: "Where to move budget between campaigns, with payback as the reason.",
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
      "The pack João already says out loud: Rule of 50 at 48, efficiency 42.1%, 26.4 million active clients, R$35.5 net ARPAC against R$13.2 to serve. Finance builds it today in Cursor. Grok Bot builds it from a chat, every line traced to the lake, no IDE.",
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
        label: "Pulls the extract from the lake",
        detail: "Every line of the pack traced to its source table.",
      },
      {
        label: "Fills the pack",
        detail: "Only public 2Q26 lines are filled here. No cell João did not give.",
      },
      {
        label: "Hands back the files",
        detail: "Pack and extract in the thread, ready for review. Grok Bot, not Cursor.",
      },
    ],
    thread: [
      {
        from: "you",
        sender: "Finance",
        text: "Build the 2Q26 pack from the lake. Source every line. No IDE.",
      },
      {
        from: "bot",
        text: "Running it here. Nothing opens on your side.",
      },
      { from: "bot", steps: true },
      {
        from: "bot",
        text: "Done. The pack and the extract are attached for review.",
        artifact: {
          title: "2Q26 pack, every line traced to the lake",
          note: "Rule of 50 = 48, efficiency 42.1%, active 26.4 million, net ARPAC R$35.5, cost to serve R$13.2, ROE 16.3%, NIM 10.12%, NPL over 90 days 5.0%. Public 2Q26 figures. No other cell filled in.",
        },
      },
    ],
    cards: [
      {
        label: "Finance",
        tag: "No IDE",
        lines: [
          { b: "Python", s: "Already how they use Cursor." },
          { b: "Spreadsheets", s: "Only public 2Q26 lines filled in. No cell he did not give." },
          { b: "Extracting data", s: "The extract, traced to the lake." },
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
