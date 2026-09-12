import type { InterJob, Person } from "./types";

/**
 * What Inter described on September 11, framed with Inter's public 2Q26
 * figures. Every number on this page is either a public Inter figure with its
 * period and source, or a blank count Inter can run. Nothing is a Grok Bot
 * result, and no blank is filled with our number.
 */

const DECK = "2Q26 results deck, Aug 2026";
const CALL = "2Q26 earnings call, 6 Aug 2026";
const Q1 = "1Q26 results, last clean print";
const Q4 = "4Q25 results";
/* Short forms for the count rows, where space is tight. */
const DECK_S = "2Q26 deck, Aug 2026";
const CALL_S = "2Q26 call, 6 Aug 2026";
const Q1_S = "1Q26 results";
const RUN = "Count to run";
const BLANK = "Blank today";

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
      "Attach and take rate, not a beer order. One ask crosses Shopping, the check-in account, and insurance, and the buyer is flagged as a primary client. Shopping is a profit problem, and primary clients still hold less than 5% of their credit at Inter.",
    facts: [
      {
        text: "Shopping GMV R$1,215 million and 3.6 million shoppers",
        source: Q1,
      },
      {
        text: "Net take rate 7.9%, up from 7.3% a year earlier, after cutting cashback",
        source: Q4,
      },
      {
        text: "Primary clients hold less than 5% of their system credit at Inter",
        source: `João, ${CALL}`,
      },
      { text: "Insurance 9.0 million active contracts", source: Q1 },
    ],
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
    measures: [
      { label: "Checkout conversion inside the thread", frame: RUN },
      { label: "Insurance attach on Shopping orders", frame: RUN },
      { label: "BNPL share of orders", frame: RUN },
      { label: "Buyers flagged as primary clients", frame: RUN },
      { label: "Shopping GMV, 1Q26", value: "R$1,215 million", source: Q1_S },
      { label: "Net take rate, 4Q25", value: "7.9%", source: Q4 },
      { label: "Shopping GMV, 2Q26", frame: `${BLANK}, not published` },
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
      "A number back in the thread without opening an IDE, for the people who are not engineers. The client-facing AI is built. The gap is the analyst who answers internal questions, and Inter posted that role in 2026.",
    facts: [
      { text: "Data Vault grew 43 PB from 2019 to 2025", source: DECK },
      {
        text: "Seven, the client AI, 6 million active users",
        source: DECK,
      },
    ],
    hiring: {
      roles: "Analytics Partner",
      where: "Belo Horizonte or São Paulo",
      note: "SQL and Tableau partner, AI in the analytical flow. Data-lake questions without an engineer. Posted in 2026.",
    },
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
    measures: [
      { label: "Questions asked per week", frame: RUN },
      { label: "Answered without an IDE", frame: RUN },
      { label: "Median time to an answer", frame: RUN },
      { label: "Share that still becomes an engineer ticket", frame: RUN },
      { label: "Data Vault growth, 2019 to 2025", value: "+43 PB", source: DECK_S },
      { label: "Seven active users, 2Q26", value: "6 million", source: DECK_S },
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
      "One monthly cloud, SaaS, and GenAI pack, from the same Vic for every team, on the way from a 42.1% efficiency ratio toward the 30% north star. Inter posted two FinOps roles in Belo Horizonte in 2026 to build this pack by hand.",
    facts: [
      {
        text: "Efficiency ratio 42.1%, a new low. North star 30%",
        source: DECK,
      },
      { text: "Expenses +19% YoY against net revenue +32%", source: DECK },
      { text: "Headcount about 4,000 and stable", source: CALL },
    ],
    hiring: {
      roles: "FinOps Analyst III and FinOps Specialist I",
      where: "Belo Horizonte",
      note: "AWS, GCP, Azure, executive cost packs, SaaS and GenAI chargeback. This is Vic's job description. Posted in 2026.",
    },
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
    measures: [
      {
        label: "Monthly cloud, SaaS, and GenAI spend",
        frame: `${BLANK}, not published`,
      },
      { label: "Variance against budget", frame: RUN },
      { label: "Reais from rightsizing", frame: RUN },
      { label: "Anomalies caught before invoice close", frame: RUN },
      { label: "Hours from close to a board page", frame: RUN },
      { label: "Efficiency ratio, 2Q26", value: "42.1%", source: DECK_S },
      { label: "Efficiency north star", value: "30%", source: `Compass, ${DECK_S}` },
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
      "Selling time back on a base that already pays 2.8x average ARPAC, 2.9 million business clients, while headcount stays near 4,000. Inter posted Shopping commercial analysts in 2026 to babysit offer calendars and GMV sheets. Guided example only.",
    facts: [
      {
        text: "Business clients 2.9 million, +24% YoY, 2.8x average gross ARPAC",
        source: DECK,
      },
      {
        text: "11.7% of Brazilian companies. SME book +15% in the quarter",
        source: DECK,
      },
      { text: "Headcount about 4,000 and stable", source: CALL },
    ],
    hiring: {
      roles: "Commercial Analyst III, Shopping",
      where: "Belo Horizonte",
      note: "Store portfolio, GMV, average ticket, offer calendar. Posted in 2026.",
    },
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
    measures: [
      { label: "Hours per week on calendars and GMV sheets", frame: RUN },
      { label: "Hours per week selling", frame: RUN },
      { label: "GMV or fee revenue per selling hour", frame: RUN },
      { label: "Routines running without a prompt", frame: RUN },
      { label: "Business clients, 2Q26", value: "2.9 million", source: DECK_S },
      { label: "Business client ARPAC multiple", value: "2.8x", source: DECK_S },
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
      "Still a thing to try, not an Inter result. The only public support is a FinOps Specialist posting that asks for SaaS and GenAI visibility and chargeback. If Inter runs it, the savings slot fills with Inter's number, not ours.",
    facts: [],
    hiring: {
      roles: "FinOps Specialist I",
      where: "Belo Horizonte",
      note: "SaaS and GenAI visibility, chargeback. Posted in 2026.",
    },
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
    measures: [
      { label: "Contracts under management", frame: RUN },
      { label: "Renewals in the next 90 days", frame: RUN },
      { label: "Last price against invoice", frame: RUN },
      { label: "Proposed versus accepted", frame: RUN },
      { label: "Hours of negotiation", frame: RUN },
      { label: "Savings", frame: `${BLANK}, no Inter result` },
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
      "Incremental ARPAC or GMV on a holdout, not emails sent. One extra real of monthly ARPAC across 26.4 million active clients is about R$317 million a year before the cost of earning it. A count, not a forecast.",
    facts: [
      {
        text: "26.4 million active clients of 45.3 million total. About 22 million average daily logins",
        source: `${DECK}; ${CALL}`,
      },
      {
        text: "New cohorts start about R$10 higher in initial gross ARPAC",
        source: DECK,
      },
      {
        text: "Private payroll clients 3.7x average gross ARPAC. Business clients 2.8x",
        source: DECK,
      },
    ],
    hiring: {
      roles: "Growth Analyst I, Marketplace and Mortgage",
      where: "Belo Horizonte, posted 27 Aug 2026",
      note: "Salesforce-class CRM, A/B tests, uplift, journeys. Hand-matching journeys today.",
    },
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
    measures: [
      { label: "Eligible customers", frame: RUN },
      { label: "Matched and enrolled", frame: RUN },
      { label: "Sent versus held out", frame: RUN },
      { label: "Incremental conversion", frame: RUN },
      { label: "Incremental monthly ARPAC", frame: RUN },
      { label: "Days from idea to live test", frame: RUN },
      { label: "A/B result", frame: `${BLANK}, from Inter's own test` },
      { label: "Active clients, 2Q26", value: "26.4 million", source: DECK_S },
      { label: "New-cohort ARPAC gap", value: "about R$10", source: DECK_S },
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
      "Faster CAC payback, not more raw accounts. That is what Inter told investors the paid spend is for. The quality proof is the R$10 cohort gap and 58.3% activation. CAC in reais and the budget were not published.",
    facts: [
      {
        text: "Activation 58.3%: 26.4 million active of 45.3 million total clients",
        source: DECK,
      },
      {
        text: "New cohorts start about R$10 higher in initial gross ARPAC",
        source: DECK,
      },
    ],
    hiring: {
      roles: "Growth Manager, US Growth",
      where: "São Paulo or Belo Horizonte",
      note: "Google Ads, Facebook Ads, AppsFlyer, CAC logic for Brazil, Argentina, and the US. Not a Miami seat. Posted in 2026.",
    },
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
    measures: [
      { label: "Spend by market", frame: `${BLANK}, budget not published` },
      { label: "Qualified accounts", frame: RUN },
      { label: "CAC in reais", frame: `${BLANK}, not published` },
      { label: "Payback months", frame: RUN },
      { label: "90-day ARPAC, paid versus organic", frame: RUN },
      { label: "Split Brazil, Argentina, US", frame: RUN },
      { label: "Activation, 2Q26", value: "58.3%", source: DECK_S },
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
      "The 2Q26 pack João already says out loud, built from the lake, sourced on every line, without the IDE. Inter posted FP&A analysts in São Paulo in 2026 who already want AI in the close.",
    facts: [
      {
        text: "Rule of 50 score 48: net revenue growth 31.7% YoY plus ROE 16.3%",
        source: `${DECK}; ${CALL}`,
      },
      {
        text: "Efficiency ratio 42.1%. NIM 10.12%. NPL over 90 days 5.0%",
        source: DECK,
      },
      {
        text: "Net income R$421 million, also stated as US$81 million",
        source: DECK,
      },
      {
        text: "Net ARPAC R$35.5 a month, cost to serve R$13.2, margin per active client R$22.2",
        source: DECK,
      },
    ],
    hiring: {
      roles: "Financial Planning Analyst",
      where: "São Paulo",
      note: "Excel, SQL, Python, AI in the close, executive packs. This is the finance desk without the IDE. Posted in 2026.",
    },
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
    measures: [
      { label: "Hours to build the pack", frame: RUN },
      { label: "Extracts that still need an IDE", frame: RUN },
      { label: "Time from close to a page", frame: RUN },
      { label: "Rule of 50 score, 2Q26", value: "48", source: `${DECK_S}; ${CALL_S}` },
      { label: "Efficiency ratio, 2Q26", value: "42.1%", source: DECK_S },
      { label: "Net ARPAC, monthly, 2Q26", value: "R$35.5", source: DECK_S },
      { label: "Cost to serve, 2Q26", value: "R$13.2", source: DECK_S },
      { label: "ROE, 2Q26", value: "16.3%", source: DECK_S },
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
          title: "2Q26 pack, sourced on every line",
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
