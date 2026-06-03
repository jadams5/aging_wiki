---
type: sop
aliases: [personal tracking, what to track, tracking structure, monitoring design, applied-health tracking]
---

# SOP: designing personal health tracking

This SOP is the **device-agnostic guidance** for *what* applied-health data to track and *how* to structure it — for an individual whose health is being managed alongside this wiki. It is the reusable counterpart to the personal-application content described in [[../CLAUDE]] § *Protocols directory (personal application content)*.

**When to use it:**

- When asked a "personal" / applied-health question (a tracking plan, a monitoring schedule, "what should I measure", "how do I log this") and **no per-individual protocol directory exists yet** — this SOP is the starting scaffold so you don't have to invent conventions.
- When standing up a new individual's tracking from scratch — apply these patterns first, *then* let the device-specific sync plumbing follow.
- When reviewing or refactoring an existing tracking setup — these are the principles to refactor *toward*.

**What this SOP is NOT:** it is not device- or vendor-specific. The structures below assume nothing about which wearable, lab vendor, or continuous-glucose monitor is used — those are pluggable `Source` values, never load-bearing. Hardware-specific sync mechanics belong in a per-individual operations manual inside that individual's private tracking area, not here.

> **Privacy note.** This is a public SOP. It must stay generic: no individual's name, no per-person values, no links into any private personal-data tree. The personal-application content it describes lives in a **private** area (git-ignored from the public repo) — see [[../CLAUDE]] § *Privacy posture*. When you instantiate these patterns for a real person, the resulting pages and CSVs go in that private area, never in the public wiki.

---

## Principle 1 — Route by *kind of data*, not by topic (the discrete-vs-continuous rule)

The single load-bearing decision. For every incoming data point, ask: **would I write a sentence of context about it?**

- **Yes** ("post-illness, fasted, after a poor night") → it is a **discrete event**. One markdown page per event, with the value plus its context. Lab draws, DEXA/body-composition scans, imaging, doctor visits, EKGs.
- **No** (you'd only ever chart it) → it is a **continuous stream**. One **CSV row** per reading. Resting heart rate, heart-rate variability, sleep score, daily fasted weight, blood pressure, continuous glucose, step count.

Why it matters both ways: a markdown page per heart-rate-variability reading is absurd overhead; a CSV row per annual lipid panel throws away the context that makes the number interpretable. Match the container to the data's information density.

## Principle 2 — The monitoring table: Metric · Cadence · Source · Target · File

Every metric a protocol tracks gets a row with five columns:

| Metric | Cadence | Source | Target | File |
|---|---|---|---|---|
| *what* | *how often* | *device / lab / manual — pluggable* | *the value or trend that defines success* | *where the data lands* |

The **Target** column is what makes the table actionable rather than a data inventory — "establish a 30-day baseline then track the upward trend", "175–180 lb by month 6", "< 1.0 mg/L". A metric with no target is a metric you can't act on; either give it one or move it to "informational only". The **Source** column is deliberately generic — swapping wearables or lab vendors changes only this column.

## Principle 3 — Consistent, units-bearing keys for any queryable series

For discrete lab/event data whose values you intend to chart over time, use **snake-case-with-units keys that stay identical across every draw**: `apoB-mg-dl`, `hba1c-pct`, `hsCRP-mg-L`, `vit-d-25oh-ng-ml`. Store the values in a structured map (frontmatter on each lab-event page) so a query can stitch draws into a time series.

The failure mode this prevents: renaming a key between draws (`apoB` → `apob-mgdl`) **silently breaks the series** — the query simply stops seeing the earlier points and nobody notices until a trend looks impossibly short. Pick the key once, write it down, never rename it. The same discipline applies to CSV column headers across appends.

## Principle 4 — Continuous streams are an *index*, not the analysis — correlate them into a narrative

A daily-summary CSV (mean / peak / variability / time-in-range) tells you a day was notable; it does **not** tell you *why*. The information value is unlocked only when an excursion is explained by what the person ate, did, and how they slept.

The reusable workflow after every import of a continuous stream:

1. **Flag notable rows** against explicit thresholds (a peak above a physiologically meaningful cutoff; a new personal extreme; a variability flag; a genuine out-of-band reading that isn't a sensor-warmup artifact; or any day already flagged in the narrative log for illness / poor sleep / a deliberate experiment).
2. **For each flagged row, pull the other streams** — diet, exercise/activity, subjective + sleep — and write the correlation **into that day's existing narrative-log entry** (don't create a parallel record).
3. **Never fabricate the cause.** If a flagged day has no logged context yet, ask the person what happened that day before writing the analysis. A plausible-sounding "the spike must have been the pasta" with no actual meal record is exactly the kind of unsourced inference this wiki forbids.
4. **Surface multi-day patterns** (recurring triggers, baseline drift, whether an intervention is moving the curve in the expected direction) into the periodic review rather than the per-day log.

This generalizes to any continuous stream — glucose, heart-rate variability, blood pressure, weight: the summary is the index that tells you *which* day to go read about.

## Principle 5 — Track *deltas*, not stable baselines (intermittent block-mode for finite sensors)

A continuous sensor (continuous glucose monitor, etc.) is highest-information when it **brackets a planned change** — pre/post an intervention start, a body-composition shift, a dietary experiment — not when it re-confirms a baseline you already know is stable. Once a stream has converged (day N+1 looks like day N), the marginal information per additional day collapses.

So for any sensor that is a finite or consumable resource, prefer **intermittent block-mode**: wear a baseline block, then **pause and redeploy the next block timed to a change-detection moment**, not to elapsed calendar time. Rank candidate deployment windows by *decision-value-per-block* — the window that brackets an already-scheduled lab event or a planned intervention start wins over "just keep wearing it". This both conserves the resource and sidesteps adhesive/skin fatigue and observer-effect drift.

(For non-consumable always-on streams — a wearable you own — continuous wear is free, so this principle reduces to "the analysis still happens at change-detection moments, even though the data collection is continuous.")

## Principle 6 — Lab cadence ladder

A tiered schedule keeps the routine-monitoring load proportional to how fast each marker moves and how much it costs. A generic starting ladder (tune per individual risk profile):

| Cadence | Typical contents |
|---|---|
| **Quarterly** | Core panel tracking an active intervention's primary endpoint (e.g., lipids + a key causal marker + metabolic panel + blood count) |
| **Semi-annual** | Slower-moving markers (glycation index, an inflammation marker, a key vitamin level) |
| **Annual** | Full baseline-battery repeat + body-composition scan + a fitness measure + any disease-surveillance adds the person's history warrants |
| **Every 3–5 years** | Slow structural/imaging measures (e.g., coronary-artery scoring) |

The cadence is **risk-stratified, not fixed**: a newly discovered surveillance lesion promotes its marker to a tighter, "load-bearing" cadence; a once-in-a-lifetime negative test drops off the list. Document *why* each marker sits at its cadence so a future review can re-stratify.

## Principle 7 — Stop criteria and dated milestone targets

Two pieces that close the loop on any tracking plan:

- **Stop criteria** — explicit, pre-committed halt conditions tied to monitored values ("marker X above N× upper limit → pause the agents that risk it"; "new symptom Y → consult before continuing"). Deciding the halt rule *before* the value arrives prevents rationalizing through a red flag.
- **Dated milestone targets** — a table of `domain · baseline value (dated) · time-bound target`. The explicit, dated baseline is what lets a later review actually judge movement instead of arguing about where things started.

## Principle 8 — Periodic review ties it together

On a fixed cadence (quarterly is a reasonable default), write a review that pulls the streams and labs against the plan:

- Lab trends vs. baseline
- Continuous-stream trends (the multi-day patterns from Principle 4)
- Subjective changes (energy, mood, sleep quality, exercise tolerance)
- Adherence to each active intervention
- Decisions made this period, with rationale

The review is the canonical home for cross-stream synthesis; the per-day logs stay atomic, the review aggregates.

---

## How this maps to the protocol page types

When a private per-individual area *does* exist, these principles land in the page types defined in [[../CLAUDE]]:

- Principles 1–3 → routing data between discrete event pages (`type: lab-panel`), the slowly-changing identity page (`type: person`), and continuous-stream CSVs.
- Principles 2, 6, 7 → the `type: protocol` page's `monitoring-required:`, `review-cadence:`, and `stop-criteria:` frontmatter, plus its body monitoring table.
- Principles 4, 8 → the per-day narrative logs and the `type: assessment` periodic review.

Until that area exists, this SOP *is* the guidance — apply the principles directly and propose the structure to the user before creating any personal-data files.

## Related

- [[../CLAUDE]] § *Protocols directory (personal application content)* — full page-type schemas and privacy posture
- [[lint-pass]] — the public-repo privacy invariant that keeps personal data out of the research wiki
