# aging_wiki

**A knowledge base on the cellular and molecular mechanisms of human aging — built to be operated by an AI agent.**

Most wikis are written for people and occasionally read by machines. This one is the other way around: it's a structured knowledge substrate designed so an LLM agent can *live inside it* — reading broadly before answering, extending it with new findings, and verifying its own claims against primary sources. The result happens to be a pretty good wiki for humans too.

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

> This is **research synthesis, not medical advice** — the plan is a structured, citable starting point for you and a clinician, not a prescription. See the caveats below.

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

---

## License

Dual-licensed:

- **Wiki content** (the Markdown pages — research synthesis, prose, curation) — [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CC-BY-4.0.txt). Use it however you like, including commercially; just give credit.
- **Tooling** (the schema in `CLAUDE.md`, the subagent definitions, SOPs, and the `protocols-template/` scaffolding) — [MIT](LICENSE).

These licenses cover original contributions to this repository. They do **not** extend to the underlying scientific facts or to the cited primary sources, which remain the property of their respective publishers and are referenced here by DOI under fair use.

---

*Inspired by Andrej Karpathy's notion of a wiki as three layers — raw sources, the wiki, and the schema that governs it.*
