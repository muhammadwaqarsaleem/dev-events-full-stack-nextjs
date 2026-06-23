# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router project. The following changes were made:

- **`instrumentation-client.ts`** — Created for client-side PostHog initialization using the Next.js 15.3+ instrumentation API. Enables autocapture, session replay, and error tracking via `capture_exceptions: true`.
- **`next.config.ts`** — Added reverse proxy rewrites so PostHog ingestion and static asset requests route through `/ingest/*`, avoiding ad blocker interference.
- **`.env.local`** — Added `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`components/ExploreBtn.tsx`** — Added `explore_button_clicked` event capture when the user clicks the Explore Events button.
- **`components/EventCard.tsx`** — Converted to a client component and added `event_card_clicked` event capture with properties for event title, slug, location, and date.

| Event name | Description | File |
|---|---|---|
| `explore_button_clicked` | User clicks the "Explore Events" button on the home page to scroll to the events list. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to navigate to the event detail page. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) dashboard](https://us.posthog.com/project/482470/dashboard/1749190)
- [Explore button clicks over time](https://us.posthog.com/project/482470/insights/JL1Tgy61)
- [Event card clicks over time](https://us.posthog.com/project/482470/insights/6lfAVNFO)
- [Most clicked events (breakdown by event title)](https://us.posthog.com/project/482470/insights/ZipF4yUG)
- [Total engagement (unique users)](https://us.posthog.com/project/482470/insights/BORnAHE8)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
