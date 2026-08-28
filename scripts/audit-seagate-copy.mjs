import { readFile } from "node:fs/promises";

const files = [
  "README.md",
  "src/app/(protected)/page.tsx",
  "src/components/ChapterPayoff.tsx",
  "src/components/HeardSlide.tsx",
  "src/components/HeroDemo.tsx",
  "src/components/SiteScreens.tsx",
  "src/data/agent-teammates.ts",
  "src/data/hero-jobs.ts",
  "src/data/jobs.ts",
  "src/data/screens.ts",
  "src/lib/account.ts",
];

const forbidden =
  /\b(?:Acme|APM|Bits AI|Cloud SIEM|CRO|Datadog|Grafana|Northwind|Prometheus|RUM|Sev-?2|Staff SRE|logs?|terrier)\b|log pile|security bar|stitch(?:ing|ed)?|purple|—/giu;

const findings = [];

for (const file of files) {
  const source = await readFile(file, "utf8");
  for (const match of source.matchAll(forbidden)) {
    const line = source.slice(0, match.index).split("\n").length;
    findings.push(`${file}:${line} ${match[0]}`);
  }
}

if (findings.length) {
  console.error(findings.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Seagate copy audit passed (${files.length} files).`);
}
