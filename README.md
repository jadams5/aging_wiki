# aging_wiki

**A knowledge base on the cellular and molecular mechanisms of human aging — built to be operated by an AI agent.**

Most wikis are written for people and occasionally read by machines. This one is the other way around: it's a structured knowledge substrate designed so an LLM agent can *live inside it* — reading broadly before answering, extending it with new findings, and verifying its own claims against primary sources. The result happens to be a pretty good wiki for humans too.

---

## The idea

Point an agent (this repo is built around [Claude Code](https://www.claude.com/product/claude-code)) at this directory and it can:

- **Answer hard mechanistic questions** by searching across many interlinked pages instead of hallucinating from training memory.
- **Extend itself** — when the wiki lacks a fact, the agent seeds the missing page from canonical databases and the primary literature, *then* answers.
- **Police its own trust** — every biological claim carries a citation to a primary source, and every page is flagged AI-extracted or human-verified until someone reads the underlying PDF and confirms the numbers.

The repo ships with its own operating manual ([`CLAUDE.md`](CLAUDE.md)) and a pair of subagents (a *seeder* that drafts new pages and a *verifier* that cross-checks them against the source PDFs). The schema *is* the product as much as the content is.

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

- **Browse it** as an [Obsidian](https://obsidian.md) vault — it's plain interlinked Markdown. Start at [`index.md`](index.md).
- **Run an agent in it** — open the repo in Claude Code; `CLAUDE.md` tells the agent how the wiki is structured and how to maintain it. Ask it mechanistic questions, or have it seed and verify new entities.
- **Apply it to a person** — the [`protocols-template/`](protocols-template/) directory is a fake-data skeleton showing how the research layer connects to personal health tracking. (Real personal data lives in a separate private repo; see that directory's README.)

---

## Honest caveats

This is **research synthesis, not medical advice.** Pages marked auto-extracted have not yet been verified against their source PDFs — treat their numbers as provisional until the banner is gone. It's a living document maintained by a human–AI collaboration, and like any such effort it will contain errors; the citation and verification discipline exists to make them findable, not to pretend they don't exist.

---

## License

Dual-licensed:

- **Wiki content** (the Markdown pages — research synthesis, prose, curation) — [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE-CC-BY-4.0.txt). Use it however you like, including commercially; just give credit.
- **Tooling** (the schema in `CLAUDE.md`, the subagent definitions, SOPs, and the `protocols-template/` scaffolding) — [MIT](LICENSE).

These licenses cover original contributions to this repository. They do **not** extend to the underlying scientific facts (not copyrightable) or to the cited primary sources, which remain the property of their respective publishers and are referenced here by DOI under fair use.

---

*Inspired by Andrej Karpathy's notion of a wiki as three layers — raw sources, the wiki, and the schema that governs it.*
