import type { Artifact, CroJob, SlideCard } from "./types";

export const ASTER_PEAK_TAIL_SLIDES: SlideCard[] = [
  {
    n: 4,
    kicker: "They said · 4 min ago",
    voice: "them",
    title: "The rebuild window",
    body: "A failed drive leaves us exposed for more than a day while the array rebuilds.",
  },
  {
    n: 5,
    kicker: "Mapped live",
    voice: "us",
    title: "Qualify Exos first",
    body: "Run one drive qualification against their current chassis and rebuild target.",
  },
  {
    n: 6,
    kicker: "They said · 4 min ago",
    voice: "them",
    title: "The density target",
    body: "We need more usable petabytes per rack before the next hall fills.",
  },
  {
    n: 7,
    kicker: "Mapped live",
    voice: "us",
    title: "Plan the HAMR path",
    body: "Confirm today's Exos fit, then map higher-capacity HAMR options to the next refresh.",
  },
];

export const ASTER_PEAK_PROCUREMENT: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: "Aster Peak procurement · overnight order",
  paperTitle: "Their questions",
  from: "Jordan Hale, Aster Peak procurement · 5:27am your time",
  marks: [
    {
      text: "Why does INV-2281 show 1,440 drives when the PO is for 1,920?",
      note: "The invoice covers the first shipped lot. The remaining 480 drives stay on the open PO and bill after shipment.",
      take: true,
    },
    {
      text: "Do production drives match the model and firmware we qualified?",
      note: "The order configuration matches the approved model family and firmware branch. The serial-level list will attach before acceptance.",
      take: true,
    },
    {
      text: "Can the archive lot arrive before the compute-hall lot?",
      note: "Supply planning has the archive lot first. The delivery table below separates both dates and quantities.",
      take: true,
    },
    {
      text: "Can we split the PO between purchased HDD capacity and Lyve Cloud?",
      note: "Hold this one. Finance and procurement need to price the split before the rep puts it in writing.",
      take: false,
    },
  ],
  reply: {
    to: "Jordan Hale, Aster Peak procurement",
    subject: "Aster Peak PO-1847 and INV-2281. Answers for today",
    body: "Hi Jordan,\n\nINV-2281 covers the 1,440 Exos drives in the first shipped lot. The remaining 480 stay on PO-1847 and will bill after shipment.\n\nThe order configuration matches the model family and firmware branch your team qualified. We will attach the serial-level list before acceptance.\n\nSupply planning has the archive lot arriving before the compute-hall lot. I added both dates and quantities to the delivery table.\n\nI am holding the HDD and Lyve Cloud PO split until our finance and procurement teams confirm the structure. I will send that as a separate answer.\n\nBest,",
  },
};

export const ASTER_PEAK_OUTBOUND: Extract<
  Artifact,
  { kind: "outbound" }
> = {
  kind: "outbound",
  title: "Aster Peak outbound",
  account: "Aster Peak Compute",
  hypothesis: [
    {
      k: "Why us",
      body: "Exos fits the data-center HDD qualification they are planning. Lyve Cloud gives the archive team another option to compare with its next tape cycle.",
    },
    {
      k: "Why now",
      body: "Their public capacity plan says archive data is growing 30% this year. A new procurement notice says drive qualification starts this quarter.",
    },
    {
      k: "Why them",
      body: "The VP of Infrastructure owns capacity and archive cost. The storage engineering director owns drive qualifications and rebuild windows.",
    },
  ],
  evidence: [
    {
      source: "Capacity plan · 12 days ago",
      finding:
        "Aster Peak expects 30% archive growth and sets a hyperscaler-density target for the next data hall.",
    },
    {
      source: "Procurement notice · this month",
      finding:
        "The company plans to qualify a new data-center HDD before its fourth-quarter capacity purchase.",
    },
    {
      source: "Careers · storage architect",
      finding:
        "The open role covers tape economics, object storage, drive qualification, and rebuild testing.",
    },
  ],
  targets: [
    {
      name: "Maya Chen",
      role: "VP Infrastructure",
      why: "Owns the capacity plan, rack-density target, and archive budget.",
    },
    {
      name: "Luis Romero",
      role: "Director, Storage Engineering",
      why: "Owns the drive qualification and the rebuild-window test.",
    },
  ],
  page: {
    headline: "Aster Peak is planning more capacity per rack",
    body: "Start with an Exos qualification against the current chassis and rebuild target. Compare Lyve Cloud with the next tape cycle for archive data. Map the HAMR path to the next refresh after the first qualification is clear.",
  },
};

export const JOBS: CroJob[] = [
  {
    id: "standardize-room",
    number: 1,
    title: "Update decks in real time",
    trigger: "A customer call starts",
    backgroundAction: "Listening to discovery + updating the open deck",
    problem:
      "A generic storage deck misses the details that matter. The useful version reflects the customer's rebuild window, capacity target, and qualification plan while the call is still live.",
    botJob:
      "Granola listens while the rep is on the call. Grok Bot turns the customer's words into new slides and maps those needs to Exos and the HAMR roadmap.",
    storyboard: [
      {
        when: "Minute 8",
        label: "The call starts. Grok is already listening. No prompt needed.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Aster Peak discovery",
          people: [
            { initials: "AE", name: "You" },
            { initials: "MC", name: "Maya" },
            { initials: "LR", name: "Luis" },
          ],
        },
      },
      {
        when: "Minute 22",
        label: "Their exact capacity problem lands in the transcript.",
        scene: "demo",
        visual: {
          kind: "live-transcript",
          timestamp: "14:31",
          speaker: "Maya",
          quote:
            "Our rebuild window is over 24 hours, and the next hall needs more usable petabytes per rack.",
          signals: ["24-hour rebuild", "Capacity per rack"],
        },
      },
      {
        when: "Minute 31",
        label: "Grok maps the need to Seagate products and rewrites the deck.",
        scene: "notes",
        visual: {
          kind: "deck-update",
          eyebrow: "Their words",
          headline: "More capacity, less rebuild exposure",
          product: "Qualify Exos now. Map HAMR next.",
          status: "3 slides updated",
        },
      },
      {
        when: "Minute 35",
        label: "Present the new slides before the call ends.",
        scene: "deck",
        slides: ASTER_PEAK_TAIL_SLIDES,
      },
    ],
    unlock:
      "Discovery appears on the slide with a practical product next step while the customer is still on the call.",
    outcome:
      "One live storage call becomes a customer-specific deck before the call ends.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Room Ops",
      subtitle: "Live storage discovery · slides in their words",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "room",
          name: "Room Ops",
          role: "bot",
          persona: "Turns live storage discovery into slides for this account",
          color: "#6EBE49",
        },
        {
          id: "slides",
          name: "Slides",
          role: "bot",
          persona: "Maps capacity and qualification needs to Seagate products",
          color: "#168C80",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "room",
          kind: "routine",
          body: "Aster Peak's call started. I am following Granola for capacity, rebuild, archive, and drive-qualification signals. I will only change the deck when the customer says something useful.",
        },
        {
          id: "m2",
          from: "room",
          kind: "text",
          body: "Maya named a rebuild window over 24 hours and a need for more usable petabytes per rack. I am mapping both points to the last slides now.",
        },
        {
          id: "m3",
          from: "room",
          kind: "text",
          body: "Still on the call. Their discovery is now the slide. The next step is an Exos qualification against their current chassis, with the HAMR path tied to the next refresh.",
        },
        {
          id: "m4",
          from: "slides",
          kind: "draft",
          draftLabel: "Last slides of the open deck · still on",
          artifact: {
            kind: "slides",
            title: "What we heard",
            cards: ASTER_PEAK_TAIL_SLIDES,
          },
        },
        {
          id: "m5",
          from: "room",
          kind: "draft",
          draftLabel: "One-pager they can forward",
          artifact: {
            kind: "one-pager",
            title: "Aster Peak one-pager",
            eyebrow: "One-pager",
            sections: [
              {
                heading: "What we heard",
                body: "Rebuilds run longer than 24 hours. The next hall needs more usable petabytes per rack. Archive cost is under review.",
              },
              {
                heading: "Qualification",
                body: "Test Exos in the current chassis against rebuild time, error handling, and usable-capacity targets.",
              },
              {
                heading: "Capacity path",
                body: "Confirm today's Exos fit, then map HAMR options to the next refresh. Keep the first test narrow.",
              },
              {
                heading: "Next meeting",
                body: "Bring storage engineering and procurement. Agree on the test chassis, drive count, success criteria, and timing.",
              },
            ],
          },
        },
        {
          id: "m6",
          from: "room",
          kind: "draft",
          draftLabel: "Note they can send inside",
          artifact: {
            kind: "packet",
            title: "Forward this inside Aster Peak",
            fields: [
              {
                label: "Problem in their words",
                value:
                  "Our rebuild window is over 24 hours, and the next hall needs more usable petabytes per rack.",
              },
              {
                label: "Why now",
                value:
                  "The next capacity buy starts this quarter. The team needs a qualified drive before procurement locks the fourth-quarter order.",
              },
              {
                label: "What to test",
                value:
                  "Exos in the current chassis. Measure rebuild time, usable capacity, and the operational steps needed for qualification.",
              },
              {
                label: "Exact ask for Tuesday",
                value:
                  "Thirty minutes with storage engineering and procurement. Confirm chassis, drive count, test owner, and acceptance criteria.",
              },
            ],
          },
        },
        {
          id: "m7",
          from: "room",
          kind: "draft",
          draftLabel: "Gmail to your contact",
          artifact: {
            kind: "gmail",
            title: "Forward to your contact",
            to: "Aster Peak contact",
            subject: "Aster Peak / Seagate. Exos qualification plan",
            body: "I captured the rebuild and rack-density points from today's call. The next step is a focused Exos qualification in your current chassis. For Tuesday, can we bring storage engineering and procurement to confirm drive count, test owner, and acceptance criteria?",
          },
        },
        {
          id: "m8",
          from: "room",
          kind: "system",
          body: "Nothing sent. The deck, one-pager, internal note, and Gmail stay as drafts until you tap Send.",
        },
      ],
    },
  },
  {
    id: "legal-redlines",
    number: 2,
    title: "Answer procurement questions overnight",
    trigger: "A procurement email lands overnight",
    backgroundAction: "Checking order + product + supply context",
    problem:
      "A drive order can raise questions about invoice quantities, qualified firmware, delivery lots, and cloud options. The rep should not spend a day chasing each answer.",
    botJob:
      "Grok Bot checks the order desk, product matrix, supply plan, and approved commercial guidance. It drafts the answers it can support and holds anything that needs a human decision.",
    storyboard: [
      {
        when: "5:27am your time",
        label: "Four order questions land. Grok starts while you are asleep.",
        scene: "notes",
        visual: {
          kind: "procurement-email",
          sender: "Jordan · Aster Peak procurement",
          subject: "Questions on PO-1847 + INV-2281",
          questions: 4,
        },
      },
      {
        when: "7:42am",
        label: "Grok has checked the internal source for each answer.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Order desk", answer: "Invoice quantity checked" },
            { name: "Product matrix", answer: "Qualification match checked" },
            { name: "Supply planning", answer: "Delivery lots checked" },
          ],
          status: "3 answered · 1 held",
        },
      },
      {
        when: "7:44am",
        label: "A sourced reply is waiting for approval.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Jordan Hale",
          subject: "PO-1847 + INV-2281 · answers",
          status: "Ready to approve",
        },
      },
    ],
    unlock:
      "Order questions arrive overnight. A checked draft is ready before the rep opens Gmail.",
    outcome:
      "Grok checks product and order context overnight, then drafts the reply and flags the one open decision.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Paper",
      subtitle: "Procurement questions · draft waiting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "paper",
          name: "Paper",
          role: "bot",
          persona: "Checks overnight order questions and drafts the reply",
          color: "#6EBE49",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "paper",
          kind: "routine",
          body: "Aster Peak procurement emailed at 5:27am with four questions about PO-1847 and INV-2281. I am checking the order desk, product matrix, and supply plan while you are offline.",
        },
        {
          id: "m2",
          from: "paper",
          kind: "text",
          body: "Three answers are supported and ready. I held the HDD and Lyve Cloud PO split because finance and procurement need to confirm the structure. Nothing has been sent.",
        },
        {
          id: "m3",
          from: "paper",
          kind: "draft",
          draftLabel: "Questions + reply",
          artifact: ASTER_PEAK_PROCUREMENT,
        },
        {
          id: "m4",
          from: "paper",
          kind: "draft",
          draftLabel: "Gmail reply · not sent",
          artifact: {
            kind: "gmail",
            title: "Reply to Aster Peak procurement",
            to: ASTER_PEAK_PROCUREMENT.reply.to,
            subject: ASTER_PEAK_PROCUREMENT.reply.subject,
            body: ASTER_PEAK_PROCUREMENT.reply.body,
          },
        },
        {
          id: "m5",
          from: "paper",
          kind: "system",
          body: "Nothing sent. The reply stays a draft until you tap Send.",
        },
      ],
    },
  },
  {
    id: "attach-engine",
    number: 3,
    title: "Generate pipeline from storage signals",
    trigger: "A target account enters your list",
    backgroundAction: "Researching storage signals + drafting outreach",
    problem:
      "Generic outbound does not earn a storage buyer's time. A useful message starts with a real capacity, cost, density, or qualification signal.",
    botJob:
      "When an account enters the list, Grok Bot finds public storage signals, writes the 3-why, identifies the likely buyers, and drafts LinkedIn, email, and an account page. The rep decides what sends.",
    storyboard: [
      {
        when: "No meeting yet",
        label:
          "Aster Peak enters the target list. Grok starts without a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Aster Peak Compute",
          sources: ["Capacity plan", "Procurement", "Careers"],
          signal: "Drive qualification this quarter",
        },
      },
      {
        when: "90 seconds later",
        label: "It turns public storage evidence into a clear 3-why.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why us", answer: "Exos + Lyve Cloud fit check" },
            { label: "Why now", answer: "30% archive growth" },
            { label: "Why them", answer: "Own capacity + qualification" },
          ],
        },
      },
      {
        when: "Campaign ready",
        label: "The right storage buyer gets three personal drafts.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Maya Chen · VP Infrastructure",
          channels: ["LinkedIn", "Email", "Aster Peak page"],
          status: "3 drafts · 0 sent",
        },
      },
      {
        when: "Ready for your click",
        label:
          "Research, message, and account page are built from their storage plan.",
        scene: "send",
        artifact: ASTER_PEAK_OUTBOUND,
      },
    ],
    unlock:
      "The rep gets a storage-specific 3-why, evidence, named buyers, and personal drafts. Nothing sends without approval.",
    outcome:
      "One target account becomes a researched storage point of view and a set of ready-to-review drafts.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Outbound",
      subtitle: "Storage research to a first meeting",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "attach",
          name: "Outbound",
          role: "bot",
          persona: "Finds storage signals, writes the 3-why, and drafts outreach",
          color: "#168C80",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "attach",
          kind: "routine",
          body: "Aster Peak Compute entered your target-account list. I am checking capacity, archive, rack-density, and drive-qualification signals. Drafts only.",
        },
        {
          id: "m2",
          from: "attach",
          kind: "text",
          body: "Their capacity plan says archive data is growing 30% this year and sets a hyperscaler-density target for the next hall. A new data-center HDD qualification starts this quarter. The storage architect role covers tape economics and rebuild testing.",
        },
        {
          id: "m3",
          from: "attach",
          kind: "draft",
          draftLabel: "3-why hypothesis",
          artifact: {
            kind: "packet",
            title: "Aster Peak 3-why",
            fields: ASTER_PEAK_OUTBOUND.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "attach",
          kind: "draft",
          draftLabel: "Evidence + who cares",
          artifact: {
            kind: "packet",
            title: "Proof, then the people",
            fields: [
              ...ASTER_PEAK_OUTBOUND.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...ASTER_PEAK_OUTBOUND.targets.map((person) => ({
                label: `${person.name} · ${person.role}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "attach",
          kind: "draft",
          draftLabel: "LinkedIn · not sent",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn to Maya Chen",
            to: "Maya Chen",
            role: "VP Infrastructure, Aster Peak Compute",
            body: "Maya, I saw Aster Peak's 30% archive-growth plan and the data-center HDD qualification notice. I put together a short Exos qualification outline, plus a Lyve Cloud versus tape cost check for the archive team. Worth fifteen minutes next week?",
          },
        },
        {
          id: "m6",
          from: "attach",
          kind: "draft",
          draftLabel: "Gmail · not sent",
          artifact: {
            kind: "gmail",
            title: "Email to Maya Chen",
            to: "Maya Chen, VP Infrastructure",
            subject: "Aster Peak's next drive qualification",
            body: "Maya,\n\nYour public capacity plan says archive data is growing 30% this year, and the procurement notice puts a new data-center HDD qualification in this quarter. I drafted a one-page test outline for Exos in the current chassis. I also included a simple Lyve Cloud versus tape cost check for the archive team.\n\nWould a fifteen-minute review with Luis be useful?\n\nBest,",
          },
        },
        {
          id: "m7",
          from: "attach",
          kind: "draft",
          draftLabel: "Page for this account · not live",
          artifact: {
            kind: "one-pager",
            title: ASTER_PEAK_OUTBOUND.page.headline,
            eyebrow: "Page for Aster Peak",
            sections: [
              {
                heading: "What we saw",
                body:
                  ASTER_PEAK_OUTBOUND.evidence[0]?.finding ??
                  "Archive growth and rack density are driving the next capacity plan.",
              },
              {
                heading: "Why this team",
                body:
                  ASTER_PEAK_OUTBOUND.hypothesis.find(
                    (item) => item.k === "Why them",
                  )?.body ??
                  "Infrastructure owns capacity and storage engineering owns qualification.",
              },
              {
                heading: "How Seagate maps",
                body: ASTER_PEAK_OUTBOUND.page.body,
              },
            ],
          },
        },
        {
          id: "m8",
          from: "attach",
          kind: "system",
          body: "Nothing sent. LinkedIn, Gmail, and the account page stay as drafts until you tap Send.",
        },
      ],
    },
  },
];

export function getJob(id: string): CroJob | undefined {
  return JOBS.find((job) => job.id === id);
}
