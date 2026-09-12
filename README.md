# Grok Bot for Inter

Passworded Inter × SpaceXAI leave-behind for Grok Bot. Eight jobs Inter named on September 11, one bot, a live phone demo in the hero, and nothing Inter did not say.

## What it is

- Hero: "Grok Bot for Inter". A virtual iPhone (`hero-bot-demo` / `hero-phone`) cycles through the eight jobs. Chips let you pick one.
- Eight jobs, each in Grok Bot window chrome with a thread on the left and the Bot's "Computer" pane on the right. Where Inter did not give a store, a price, a figure, a task, or a name, the page says so instead of filling the gap.
- "How Grok Bot works" band, phrased from x.ai/bot. Product description, not an Inter result.
- "Who said it": João, Davidson Castro, Guilherme Ximenes, Thiago Machado.

Structure comes from the earlier customer leave-behind template (hero phone, jobs data, password gate). None of the earlier customers' branding or artwork ships here; `npm run audit:copy` checks.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `agentteam` (override with `SITE_PASSWORD`).

## Deploy

Vercel team `jasonwiker`. Set `SITE_PASSWORD=agentteam`. Preview first. The live URL `inter-grokbot.vercel.app` is an alias; point it at a deployment only when Jason says so:

```bash
vercel alias set <deployment-url> inter-grokbot.vercel.app --scope jasonwiker
```
