---
type: index
title: aging_wiki
---

> [!warning] Research synthesis, not medical advice — and a work in progress
> This is a living, AI-maintained knowledge base, not clinical guidance. Coverage is uneven: many areas are thin, seeded-but-unverified, or absent entirely — the absence of a page or a claim is **not** evidence of absence, usually just that no one has gotten to it yet. Pages flagged *auto-extracted* have not been checked against their source PDFs; treat their numbers as provisional. Nothing here substitutes for a clinician.

A knowledge base on the **cellular and molecular mechanisms of human aging** — a densely cross-linked set of *atomic pages* (one per protein, pathway, compound, process, hallmark, phenotype, biomarker, study, hypothesis, and model organism) built to be operated by an AI agent, and browsable by humans. Every biological claim cites a primary source whose footnote carries its own quality signal (sample size, study design, model organism), and every page is flagged AI-extracted or human-verified so you know how far to trust it.

**Source, schema & contributing:** the full project — including the operating manual and the seeder/verifier agents — lives on [GitHub](https://github.com/jadams5/aging_wiki).

## Start here

New here and just want to read? A few good places to begin:

**The two maps** — the same biology, sliced two ways:
- [[hallmarks-of-aging]] — the academic standard, organized by molecular damage type
- [[sens-damage-categories]] — SENS's intervention-oriented framing

**Core mechanisms:**
- [[cellular-senescence]] — "zombie" cells that accumulate with age and drive inflammation
- [[autophagy]] — the cell's recycling system, and why it falters
- [[mtor|mTOR]] & [[insulin-igf1|insulin/IGF-1]] — the nutrient-sensing pathways at the center of aging

**Interventions:**
- [[caloric-restriction|caloric restriction]] — the most replicated lifespan intervention in biology
- [[senolytics]] — drugs that clear senescent cells (dasatinib + quercetin, fisetin)
- [[rapamycin]] & [[metformin]] — the two most-studied geroprotective drugs

**Measuring & comparing aging:**
- [[horvath-clock-2013|Horvath clock]] — the original DNA-methylation "epigenetic clock"
- [[heterocephalus-glaber|naked mole-rat]] — a rodent that barely ages; what it teaches us
- [[information-theory-of-aging|information theory of aging]] — a leading theory of *why* we age

Or use search, follow the graph, or browse the full catalog below. For how the wiki is built and how to run an agent in it, see the [project README](https://github.com/jadams5/aging_wiki#readme).

---

## Browse by entity

Truth lives on **atomic pages** — one per entity. Each link opens that folder:

**Molecules & pathways**
- **[Proteins](https://jadams5.github.io/aging_wiki/molecules/proteins/)** — genes and gene products
- **[Compounds](https://jadams5.github.io/aging_wiki/molecules/compounds/)** — *single* chemical entities: drugs, small molecules, single-molecule supplements (creatine, CoQ10); each holds its own mechanism + efficacy
- **[Metabolites](https://jadams5.github.io/aging_wiki/molecules/metabolites/)** — endogenous small-molecule intermediates
- **[Pathways](https://jadams5.github.io/aging_wiki/pathways/)** — signaling pathways

**Cells, tissues & systems**
- **[Processes](https://jadams5.github.io/aging_wiki/processes/)** — autophagy, apoptosis, senescence, …
- **[Cell types](https://jadams5.github.io/aging_wiki/cell-types/)** — stem, immune, and post-mitotic cell populations
- **[Tissues](https://jadams5.github.io/aging_wiki/tissues/)** — organs and tissues
- **[Organ systems](https://jadams5.github.io/aging_wiki/organ-systems/)** — the 11 body-system overlays
- **[Microbes](https://jadams5.github.io/aging_wiki/microbiome/)** — gut / skin taxa behind the dysbiosis hallmark

**Phenotypes, measures & theories**
- **[Hallmarks](https://jadams5.github.io/aging_wiki/hallmarks/)** — the 12 hallmarks of aging (plus the *proposed* [[hallmarks/disabled-adaptive-immunity]] candidate)
- **[Phenotypes](https://jadams5.github.io/aging_wiki/phenotypes/)** — sarcopenia, frailty, inflammaging, …
- **[Biomarkers](https://jadams5.github.io/aging_wiki/biomarkers/)** — biological-age clocks (epigenetic / proteomic / composite)
- **[Hypotheses](https://jadams5.github.io/aging_wiki/hypotheses/)** — contested or open theories of *why* we age

**Interventions & evidence**
- **[Interventions](https://jadams5.github.io/aging_wiki/interventions/)** — modalities and multi-compound classes: lifestyle, dietary, pharmacological classes (e.g. senolytics), gene / cell / blood-product therapies; combination & regimen products (e.g. multivitamins) live here
- **[Model organisms](https://jadams5.github.io/aging_wiki/model-organisms/)** — mouse, worm, fly, killifish, naked mole-rat, human, …
- **[Studies](https://jadams5.github.io/aging_wiki/studies/)** — primary sources extracted from
- **[Methods](https://jadams5.github.io/aging_wiki/methods/)** — lab / analytical techniques and their recurring caveats

## Maps & frameworks

Navigational overlays that re-slice the atomic layer — they link to entity pages, never duplicate them. Full set in the **[frameworks folder](https://jadams5.github.io/aging_wiki/frameworks/)**; the essential ones:

**The two damage maps** (co-equal)
- [[hallmarks-of-aging]] — López-Otín et al. (12 hallmarks, 2023 update)
- [[sens-damage-categories]] — SENS Research Foundation (7 damage categories)

**Causal ordering**
- [[frameworks/hallmark-causality-graph]] — wiki-internal upstream→downstream ordering of the hallmarks
- [[frameworks/causal-graph-data]] — companion edge-list with evidence grades + per-edge page anchors

**Slice the atomic layer by…**
- [[by-organ-system]] — anatomy (the 11 body systems)
- [[sex-differences-in-aging]] — biological sex (reproductive-endocrine axes, sexed mechanisms, disease sex-bias)
- [[frameworks/biological-age-measurement]] — biomarkers / aging clocks

**Intervention overlays**
- [[frameworks/interventions-by-hallmark]] — evidence matrix by hallmark
- [[frameworks/interventions-by-modality]] — by delivery (drug / cell / dietary / gene / blood-product)
- [[frameworks/intervention-classes]] — mechanism-class taxonomy
- [[frameworks/intervention-by-target-immunogenicity]] — immunogenicity-tier filter

## Project & maintenance

- **Knowledge gaps** — [[gaps/README]] aggregates open questions by category; [[gaps/planned-coverage]] holds proactive coverage intent.
- **Personal-application layer** — apply the research to one person (baseline, plans, labs, tracking). Real data lives in a **private**, git-ignored `protocols/` repo; [[protocols-template/README|protocols-template]] is a fake-data skeleton + onboarding guide. Privacy model in [[CLAUDE]] § "Privacy posture".
- **Schema & operations** — [[CLAUDE]] (schema + operating manual) · [[lint-pass]] (periodic health check) · [[acronyms]] (glossary) · [[log]] (change history).
- **SOP playbooks** (data-source how-tos) — full set in **[sops/](https://jadams5.github.io/aging_wiki/sops/)**; e.g. [[retrieving-papers]], [[extracting-evidence]], [[finding-pathway-data]], [[finding-protein-data]], [[finding-compound-data]], [[finding-aging-specific]], [[adding-a-claim]].
