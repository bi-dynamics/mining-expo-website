# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Public website for the Mining Expo & Conference (Chamber of Mines of Namibia), built with Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui (Radix). Deployed on Netlify (`netlify.toml`).

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build (also the type-check; there is no separate typecheck script)
- `npm run lint` — ESLint (eslint-config-next)
- There is no test suite.

## Data sources (two of them — this is the main thing to understand)

**1. Event REST API** (`https://event.wemotive.in/api/v1/public/events/slug/mining-expo-2026-mpb3pqiq`, base URL overridable with the `EVENT_API_BASE_URL` env var) — fetched server-side via the shared helper in [src/lib/eventApi.ts](src/lib/eventApi.ts) (5-min ISR revalidate, returns `null` on failure so fetchers fall back to `[]` and pages render empty states). Backs:

- **Schedules** ([src/lib/getSessions.ts](src/lib/getSessions.ts), `/sessions`): split rule — sessions in track **"2026 Expo Programme"** → `/main-event-programme`; sessions in **any other track** → `/conference-programme`; sessions with **no track are deliberately excluded** (leftover demo data). Use `getExpoSessions()` / `getConferenceSessions()`. `startTime`/`endTime`/`date` arrive as **epoch-milliseconds strings** (e.g. `"1785816000000"`), normalized to `Date`.
- **Exhibitors** ([src/lib/getEventExhibitors.ts](src/lib/getEventExhibitors.ts), `/exhibitors`): powers `/main-event-programme/exhibitors`. Exhibitors without a logo render an initials tile (`ExhibitorLogo.tsx`) instead of being hidden.
- Asset URLs (speaker photos, exhibitor logos) are **pre-signed S3 URLs that expire after 1 hour** — the revalidate window (300s) must stay well under 3600s or images break.

**2. Firestore** (`src/lib/firebaseConfig.ts`, project `mining-expo-bc804`) — still backs the **past-presentations page** (`getExhibitorsByYear` in `getExhibitors.tsx`, collections `exhibitors` / `exhibitors_2024`), floor plans, and the speaker directory (`getFloorPlans*.tsx`, `getSpeakers.tsx`). Firestore `Timestamp`s are read as `.seconds * 1000`. The Firebase web API key comes from `API_KEY` in `.env.local`. Do not migrate the past-year pages to the API — historical data only exists in Firestore.

## Architecture patterns

- **Data-fetching pattern**: server `page.tsx` → `<Suspense fallback={<XSkeleton />}>` → async server component `*WithSuspense.tsx` (awaits the lib fetcher) → `"use client"` renderer receiving data as props. Follow this when adding remote data; there is no SWR/React Query.
- **Shared schedule UI**: both schedule routes render [src/components/EventSchedule.tsx](src/components/EventSchedule.tsx) (day-grouped accordion). Don't fork per-page schedule components again — the old duplicated `MainEventSchedule`/`ProgrammeSchedule` pair was intentionally collapsed into this.
- **Times are always event-local**: format session times with the helpers in [src/lib/eventTime.ts](src/lib/eventTime.ts) (fixed `Africa/Windhoek` via `Intl`), never with visitor-local `date-fns format()`. This is both a product decision and what keeps SSR/client hydration deterministic.
- **Avatars**: [src/components/SpeakerAvatar.tsx](src/components/SpeakerAvatar.tsx) shows the photo, falling back to initials on a brand colour from [src/lib/avatar.ts](src/lib/avatar.ts). The colour pick is a **deterministic hash of the name** — keep it deterministic (no randomness) or SSR hydration mismatches appear.
- **Images**: `next.config.js` sets `images.unoptimized: true` and whitelists remote hosts (`firebasestorage.googleapis.com`, `bpi-events-uploads.s3.af-south-1.amazonaws.com`). New remote image hosts must be added to `remotePatterns`.

## Conventions

- Brand colours are Tailwind tokens `expoOrange` (#F4A637) and `expoBlue` (#041A51) in `tailwind.config.ts`; fonts are `font-poppins` (headings) and `font-rubik` (body), wired in `src/app/layout.tsx`.
- shadcn/ui primitives live in `src/components/ui/`; combine classes with `cn()` from `src/lib/utils.ts`.
- Speaker `title` strings from Firestore sometimes encode "profession - company" and are split on `-` in the speaker detail page (`conference-programme/speakers-list/[speakerId]`).
