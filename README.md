# aging_wiki

**A knowledge base on the cellular and molecular mechanisms of human aging — built to be operated by an AI agent.**

Most wikis are written for people and occasionally read by machines. This one is the other way around: it's a structured knowledge substrate designed so an LLM agent can *live inside it* — reading broadly before answering, extending it with new findings, and verifying its own claims against primary sources. The result happens to be a pretty good wiki for humans too.

---

## A few good entry points

New here and just want to read? These links open the **live wiki site** (with backlinks, graph view, and search) at [jadams5.github.io/aging_wiki](https://jadams5.github.io/aging_wiki/) — the [master catalog](https://jadams5.github.io/aging_wiki/) lists everything. (Prefer raw Markdown? Browse the [`index.md`](index.md) catalog here in the repo.)

**The two maps** — the same biology, sliced two ways:
- [Hallmarks of Aging](https://jadams5.github.io/aging_wiki/frameworks/hallmarks-of-aging) — the academic standard, organized by molecular damage type
- [SENS damage categories](https://jadams5.github.io/aging_wiki/frameworks/sens-damage-categories) — de Grey's intervention-oriented framing

**Core mechanisms:**
- [Cellular senescence](https://jadams5.github.io/aging_wiki/hallmarks/cellular-senescence) — "zombie" cells that accumulate with age and drive inflammation
- [Autophagy](https://jadams5.github.io/aging_wiki/processes/autophagy) — the cell's recycling system, and why it falters
- [mTOR](https://jadams5.github.io/aging_wiki/pathways/mtor) & [insulin/IGF-1](https://jadams5.github.io/aging_wiki/pathways/insulin-igf1) — the nutrient-sensing pathways at the center of aging

**Interventions:**
- [Caloric restriction](https://jadams5.github.io/aging_wiki/interventions/lifestyle/caloric-restriction) — the most replicated lifespan intervention in biology
- [Senolytics](https://jadams5.github.io/aging_wiki/interventions/pharmacological/senolytics) — drugs that clear senescent cells (dasatinib + quercetin, fisetin)
- [Rapamycin](https://jadams5.github.io/aging_wiki/molecules/compounds/rapamycin) & [metformin](https://jadams5.github.io/aging_wiki/molecules/compounds/metformin) — the two most-studied geroprotective drugs

**Measuring & comparing aging:**
- [Horvath clock](https://jadams5.github.io/aging_wiki/biomarkers/horvath-clock-2013) — the original DNA-methylation "epigenetic clock"
- [Naked mole-rat](https://jadams5.github.io/aging_wiki/model-organisms/heterocephalus-glaber) — a rodent that barely ages; what it teaches us
- [Information theory of aging](https://jadams5.github.io/aging_wiki/hypotheses/information-theory-of-aging) — a leading theory of *why* we age

---

## The idea

Point an agent (this repo is built around [Claude Code](https://www.claude.com/product/claude-code)) at this directory and it can:

- **Answer hard mechanistic questions** by searching across many interlinked pages instead of hallucinating from training memory.
- **Extend itself** — when the wiki lacks a fact, the agent seeds the missing page from canonical databases and the primary literature, *then* answers.
- **Police its own trust** — every biological claim carries a citation to a primary source, and every page is flagged AI-extracted or human-verified until someone reads the underlying PDF and confirms the numbers.
- **Build you a personal healthspan plan** — walk you through importing your own medical data (labs, family history, medications, wearables) into a *private* repo, then turn the research it sits on into an evidence-backed, continuously-tracked plan for your healthspan and lifespan — with every recommendation linked to the primary literature behind it.

The repo ships with its own operating manual ([`CLAUDE.md`](CLAUDE.md)) and a pair of subagents (a *seeder* that drafts new pages and a *verifier* that cross-checks them against the source PDFs). The schema *is* the product as much as the content is.

---

## From the literature to your own plan

The research side of this wiki is general — the biology of aging, the same for everyone. The point of all that structure is to make it *applicable* to one specific person: you.

Point the agent at this repo and ask it to onboard you, and it will:

1. **Help you import your medical history into a private repo** — labs, family history, current conditions, medications and supplements, and continuous streams from wearables (weight, HRV, sleep, glucose). Discrete events become structured pages; high-frequency data becomes CSV. Your data lives in a separate, git-ignored private repository — it **never** touches the public wiki.
2. **Anchor it to the research** — your baseline links into the mechanistic pages (`[[cellular-senescence]]`, `[[rapamycin]]`, `[[insulin-igf1]]`…), so every personal observation is one hop from the biology that explains it.
3. **Draft an evidence-graded plan** — intervention regimens tiered by evidence strength (lifestyle foundations with strong human RCTs → pharmacological with early-human data → mechanistic-only supplements), each arm citing the literature behind it, each with explicit monitoring metrics and stop criteria.
4. **Track it qualitatively over time** — the plan specifies *what to measure and how often*; periodic reviews read your tracking data back against the plan and adjust. Not a one-shot recommendation — a living protocol.

The [`protocols-template/`](protocols-template/) directory is a fake-data skeleton of exactly this layer — copy it, point the agent at it, and start. The privacy boundary is enforced structurally: links run one way (`protocols/ → research`, never the reverse), and a lint gate blocks any personal data from leaking into the public repo.

> This is **research synthesis, not medical advice** — the plan is a structured, citable starting point for you and a clinician, not a prescription. See the disclaimer below.

---

## What's inside

Densely cross-linked **atomic pages** — one per protein, pathway, compound, process, hallmark, phenotype, biomarker, study, hypothesis, and model organism — over a foundation of design rules that make the knowledge machine-usable:

- **One fact, one home.** Truth lives on the most specific page; everything else links to it.
- **Two lenses on the same atoms.** The [Hallmarks of Aging](https://doi.org/10.1016/j.cell.2022.11.001) and the SENS damage categories are navigational overlays, not duplicated content.
- **Citations carry their own quality signal.** A footnote tells you the sample size, study design, and model organism, so you can weigh a claim without chasing the link.
- **The wiki tracks what it doesn't know.** Open questions are tagged as explicit knowledge gaps and aggregated, so "we don't know yet" is first-class data.
- **Everything is keyed to canonical identifiers** (DOI, UniProt, PubChem, KEGG, …) so both humans and machines can resolve any entity.

---

## Using it

- **Browse it** as an [Obsidian](https://obsidian.md) vault — it's plain interlinked Markdown. Start at [`index.md`](index.md). The repo ships no Obsidian config; for the live queries (knowledge-gap tracker, framework MOCs, lab-panel time-series) to render, install the [Dataview](https://github.com/blacksmithgu/obsidian-dataview) community plugin.
- **Run an agent in it** — open the repo in Claude Code; `CLAUDE.md` tells the agent how the wiki is structured and how to maintain it. Ask it mechanistic questions, or have it seed and verify new entities.
- **Apply it to yourself** — copy [`protocols-template/`](protocols-template/) to a private `protocols/` repo and have the agent onboard your data and build your plan (see [From the literature to your own plan](#from-the-literature-to-your-own-plan) above). Real personal data lives in a separate private repo; the template's README walks through setup.

---

## Disclaimer

This is **research synthesis, not medical advice.** Pages marked auto-extracted have not yet been verified against their source PDFs — treat their numbers as provisional until the banner is gone. It's a living document maintained by a human–AI collaboration, and like any such effort it will contain errors; the citation and verification discipline exists to make them findable, not to pretend they don't exist.

**The wiki is incomplete and a work in progress.** Coverage is uneven and actively being built out: large areas of aging biology are thinly covered, seeded but not yet verified, or absent entirely. The absence of a page or a claim is **not** evidence of absence — it usually just means no one has gotten to it yet. Expect gaps, stubs, and pages still awaiting verification, and weight anything you find accordingly.

---

## Contributing

Contributions are welcome — whether you're fixing a number, seeding a missing entity, or verifying an auto-extracted page against its source PDF. The schema *is* the product, so the bar is consistency with it.

**Read [`CLAUDE.md`](CLAUDE.md) first.** It is the authoritative schema and operating manual — page types, frontmatter conventions, citation rules, and the standard operating procedures in [`sops/`](sops/). When it's silent on something, open an issue or ask rather than inventing a convention.

**The workflow is agent-driven.** New pages are drafted by a *seeder* subagent from canonical databases and the primary literature, then cross-checked by a *verifier* subagent against the source PDFs. You can run these yourself in Claude Code, or write pages by hand — either way the same rules apply.

Whatever you add, hold to these invariants:

- **One fact, one home.** Truth lives on the most specific atomic page; everything else links to it. Don't duplicate claims across pages — move the fact and link.
- **Every biological claim cites a primary source** via a footnote that carries its own quality signal (sample size, study design, model organism). Cite by **DOI**; never store journal PDFs in the repo.
- **Flag trust honestly.** New AI-drafted pages ship `verified: false` with the auto-extraction banner. Only flip to `verified: true` after reading the underlying source(s) end-to-end and confirming every quantitative claim. **Verify before you trust** — the seeding step has a real error rate, which is exactly why the verification step exists.
- **Key everything to canonical identifiers** (DOI, UniProt, PubChem, KEGG, HGNC, …) so humans and machines can resolve any entity.
- **Tag what you don't know.** Open questions and missing data are first-class — mark them with the `#gap/*` tags rather than papering over them.
- **Respect the privacy boundary.** Personal/applied-health data lives only in the private `protocols/` tree (git-ignored, never public). Links run one way — `protocols/ → research`, never the reverse. Run the leak-gate before every commit; it must return nothing.

Before opening a PR, run the [lint pass](sops/lint-pass.md) (orphan pages, broken wikilinks, missing frontmatter, stale claims, privacy invariant) and log substantive changes in [`log.md`](log.md).

---

## License

Dual-licensed:

- **Wiki content** (the Markdown pages — research synthesis, prose, curation) — [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CC-BY-4.0.txt). Use it however you like, including commercially; just give credit.
- **Tooling** (the schema in `CLAUDE.md`, the subagent definitions, SOPs, and the `protocols-template/` scaffolding) — [MIT](LICENSE).

These licenses cover original contributions to this repository. They do **not** extend to the underlying scientific facts or to the cited primary sources, which remain the property of their respective publishers and are referenced here by DOI under fair use.

---

*Inspired by Andrej Karpathy's notion of a wiki as three layers — raw sources, the wiki, and the schema that governs it.*
