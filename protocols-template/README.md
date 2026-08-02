# protocols-template — onboarding skeleton for the personal-application layer

This directory is a **public, fake-data skeleton** of the wiki's personal-application layer. The research side of this wiki (hallmarks, pathways, compounds, studies, …) is general knowledge about the biology of aging. The *protocols layer* is where one specific person applies that research to themselves: their baseline data, intervention plans, lab results, and day-to-day tracking.

Real personal data does **not** live here. It lives in a sibling `protocols/` directory that is **git-ignored from this public repo and tracked in a separate private repository** (see [`CLAUDE.md` § "Privacy posture"](../CLAUDE.md)). This `protocols-template/` exists so a reader can see how that private system is structured — and so a new person can copy it to start their own.

Every file here uses the handle **`example-person`** and invented numbers. Nothing here is anyone's real data.

---

## How to start tracking your own protocol

1. **Copy this skeleton to a private directory:**
   ```bash
   cp -r protocols-template protocols
   ```
   `protocols/` is already listed in this repo's `.gitignore`, so nothing under it will ever be committed to the public repo.

2. **Give it its own private git repository** (so your data is version-controlled locally but separate from the public wiki):
   ```bash
   cd protocols && git init && git add -A && git commit -m "Initial: my protocols (private)"
   ```
   Optionally add a *private* remote (`git remote add origin <private-repo-url>`). Never push this to the public remote.

3. **Rename `example-person` → your own handle** throughout (filenames + the `handle:`/`subject:` frontmatter). Use a short lowercase slug.

4. **Fill in your real data**, deleting the fake values. Start with `people/<handle>.md` (baseline) and one `plans/<handle>-*.md`.

5. **Choose tracking sources only when they answer a protocol question.** A wearable is optional. If you already use an Oura Ring and want an API-backed example, see [`sops/personal-tracking-oura-example.md`](../sops/personal-tracking-oura-example.md). If you use another device, retain the privacy, units, validation, and review patterns while replacing the vendor-specific plumbing.

The single working tree means your Obsidian vault sees both layers at once, so links from your private protocol pages into the public research pages keep resolving — while your data stays out of the public repo.

---

## The directory layout (mirrors the private `protocols/`)

| Path | Type | What it holds |
|---|---|---|
| `people/<handle>.md` | `type: person` | one page per individual — baseline, conditions, goals, family history |
| `plans/<handle>-<plan>.md` | `type: protocol` | one page per intervention regimen; time-bounded by `started:`/`ended:` |
| `labs/<handle>-<YYYY-MM-DD>.md` | `type: lab-panel` | one page per discrete lab draw / clinical event |
| `tracking/<handle>/*.csv` | — | high-frequency continuous streams (weight, HRV, sleep, CGM, …) |
| `tracking/<handle>/subjective-log.md` | — | narrative daily/weekly notes |
| `reviews/<YYYY-Q#>.md` | `type: assessment` | periodic review of protocols against tracking data |
| `log.md` | — | private personal-protocol log (parallel to the public `log.md`) |

**Discrete events → markdown pages. Continuous streams → CSV.** Rule of thumb: if you'd write a sentence about each data point ("post-COVID, fasting"), it's a markdown event; if you wouldn't, it's a CSV row.

### Optional device examples

The template does not assume that a person owns a wearable, continuous-glucose monitor, connected scale, or any other consumer device. The files under `tracking/` demonstrate containers, not required purchases or measurements.

- [`../sops/personal-tracking.md`](../sops/personal-tracking.md) is the canonical, vendor-neutral design guidance.
- [`../sops/personal-tracking-oura-example.md`](../sops/personal-tracking-oura-example.md) is an optional worked Oura API example with authentication, endpoint mapping, suggested schemas, validation, and an agent handoff checklist.

Vendor examples must never contain real account details, credentials, handles, paths, or measurements. Their deployed copies and generated data belong only in the private `protocols/` repository; credentials stay outside both repositories.

---

## Two disciplines that keep the boundary clean

**1. One-way links only: `protocols/ → research`, never the reverse.**
Your protocol pages *should* link into the research wiki to anchor evidence — `[[rapamycin]]`, `[[cellular-senescence]]`, `[[interventions/pharmacological/senolytics]]`. But **no research page may ever link back into `protocols/` or name a person.** That reverse direction is what would leak personal data into the public repo. The lint pass enforces this (see `CLAUDE.md` § "Lint pass extensions").

**2. Parallel logs.** Wiki-maintenance/research-ingest notes go in the public `log.md`; personal-protocol notes (lab ingests, plan changes) go in the private `protocols/log.md`. When a research page gets seeded *because* you had a personal question, the public log records the research neutrally and the private log records the personal trigger.

---

## Files in this template

- [`people/example-person.md`](people/example-person.md) — the baseline person page
- [`plans/example-person-baseline.md`](plans/example-person-baseline.md) — an example intervention plan
- [`labs/example-person-2026-01-01.md`](labs/example-person-2026-01-01.md) — an example lab panel
- [`tracking/example-person/`](tracking/example-person/) — example CSV streams + subjective log
- [`reviews/2026-Q1.md`](reviews/2026-Q1.md) — an example quarterly assessment

See [`CLAUDE.md`](../CLAUDE.md) for the authoritative frontmatter schema of each `type:`.
