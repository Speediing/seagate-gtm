/**
 * The counts João already publishes. Public 2Q26 figures from the results
 * deck (Aug 2026) and the earnings call (6 Aug 2026). Not a Grok Bot result.
 */
export type ScoreItem = { label: string; value: string; note: string };

export const SCOREBOARD: ScoreItem[] = [
  {
    label: "Rule of 50",
    value: "48",
    note: "Net revenue growth 31.7% YoY plus ROE 16.3%. Tolerance zone toward about 50 by 2029.",
  },
  {
    label: "Efficiency ratio",
    value: "42.1%",
    note: "A new low. North star 30%. Expenses +19% against net revenue +32%.",
  },
  {
    label: "Active clients",
    value: "26.4 million",
    note: "Of 45.3 million total. About 22 million average daily logins.",
  },
  {
    label: "Net ARPAC, monthly",
    value: "R$35.5",
    note: "Cost to serve R$13.2. Margin per active client R$22.2.",
  },
  {
    label: "Compass",
    value: "60M / 30% / 30%",
    note: "60 million clients, 30% efficiency, 30% ROE. The old end-2027 date is no longer the input.",
  },
];

export const SCOREBOARD_SOURCE =
  "Public 2Q26 figures: results deck, Aug 2026; earnings call, 6 Aug 2026. Not a Grok Bot result.";
