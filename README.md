# Grok Bot for Seagate sales

Passworded Seagate sales leave-behind for Grok Bot from SpaceXAI. The page uses Seagate storage stories and artwork while keeping the established hero, phone mock, three jobs, six-agent band, comparison, and six public testimonials. The lockup is Seagate × SpaceXAI.

## What it is

Three Seagate GTM jobs on one page. The stories use Aster Peak Compute, a fictional account, to cover a live Exos deck update, overnight drive-order questions, and outbound built from storage signals. Each job has an interactive Grok Bot demo and the matching Krista Letz clip. The existing comparison and public Grok Bot quote wall remain unchanged.

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Default password is `land2expand` (override with `SITE_PASSWORD`).

## Krista clips

Download into `private/media/krista-clips/` from the GitHub release (served only through the passworded `/api/media/...` route):

```bash
gh release download krista-gtm-clips-720p-2026-08-26 \
  --repo Speediing/grok-bot-quotes \
  --dir private/media/krista-clips
```

## Deploy

Preview only. Jason preview-deploys under the `jasonwiker` Vercel team, project name `seagate-gtm`. Set `SITE_PASSWORD=land2expand`. Do not run `vercel --prod`. Do not promote to a public production domain until Jason says so.
