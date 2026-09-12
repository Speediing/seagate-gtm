import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

// Nothing from the Datadog or Seagate builds may survive in the Inter ship,
// and customer-facing copy uses plain English with no em dashes.
const forbidden =
  /\b(?:Datadog|Seagate|Exos|IronWolf|HAMR|Lyve|Aster Peak|Krista|watercolor-(?:pad|orbit|room|deal|attach|ramp|sko)|dd_[a-z_]+|RosterChart|land2expand)\b|—/giu;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else if (/\.(?:tsx?|mjs|css|md|json|svg)$/.test(entry.name) && entry.name !== "package-lock.json") out.push(path);
  }
  return out;
}

const files = [...(await walk("src")), ...(await walk("public")), "README.md", "package.json"];
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
  console.log(`Inter copy audit passed (${files.length} files).`);
}
