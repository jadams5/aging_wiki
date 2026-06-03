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

## Browse the catalog

A research wiki on the cellular and molecular mechanisms of human aging.

See [[CLAUDE]] for schema and conventions. See [[log]] for chronological history of changes. See [[gaps/planned-coverage]] for proactive coverage intent (priority ranking is driven by inbound-count discovery in [[lint-pass]] § Step 3, not a static checklist). See [[acronyms]] for the abbreviations glossary.

### Frameworks (navigational overlays)

Co-equal MOCs over the atomic-entity layer:

- [[hallmarks-of-aging]] — López-Otín et al. (12 hallmarks, 2023 update)
- [[sens-damage-categories]] — SENS Research Foundation (7 damage categories)
- [[frameworks/hallmark-causality-graph]] — opinionated wiki-internal upstream/downstream ordering of the 12 hallmarks (mechanistic, distinct from López-Otín's primary/antagonistic/integrative taxonomy)
- [[frameworks/causal-graph-data]] — companion edge-list with evidence-strength ratings + per-edge wiki-page anchors

Anatomical overlay (by body system):

- [[by-organ-system]] — index of the 11 body-system MOCs; slices the atomic layer by anatomy rather than by molecular damage type

Biological-axis overlay:

- [[sex-differences-in-aging]] — slices the atomic layer by biological sex: the female & male reproductive-endocrine axes, distinctively-sexed mechanisms (X-inactivation, mother's curse), and the sex-bias in major aging diseases

Cross-cutting intervention slicers:

- [[frameworks/interventions-by-hallmark]] — intervention evidence matrix by hallmark (Dataview-driven)
- [[frameworks/interventions-by-modality]] — slice by delivery (drug vs. cell vs. dietary vs. gene-therapy vs. blood-product)
- [[frameworks/intervention-classes]] — canonical mechanism-class taxonomy used by `mechanisms:` frontmatter
- [[frameworks/intervention-by-target-immunogenicity]] — cross-cutting filter: immunogenicity tier of target dictates viable intervention class (Side-A vs Side-B vs direct molecular)

Biomarker layer:

- [[frameworks/biological-age-measurement]] — MOC for biological-age estimators (epigenetic / proteomic / composite clocks)

Training-prescription references:

- [[frameworks/heart-rate-zones]] — aerobic intensity tier reference (Z1–Z5, Tanaka HRmax, polarized vs threshold, Norwegian 4×4)

### Browse by category

The atomic entity pages, grouped — each link opens that folder on the site:

- **[Hallmarks](https://jadams5.github.io/aging_wiki/hallmarks/)** — the 12 hallmarks of aging (plus [[hallmarks/disabled-adaptive-immunity]], a *proposed* candidate not yet formally adopted by López-Otín et al.)
- **[Pathways](https://jadams5.github.io/aging_wiki/pathways/)** — signaling pathways
- **[Proteins](https://jadams5.github.io/aging_wiki/molecules/proteins/)** — genes and gene products
- **[Compounds](https://jadams5.github.io/aging_wiki/molecules/compounds/)** — drugs, supplements, small molecules
- **[Processes](https://jadams5.github.io/aging_wiki/processes/)** — autophagy, apoptosis, senescence, …
- **[Phenotypes](https://jadams5.github.io/aging_wiki/phenotypes/)** — sarcopenia, frailty, inflammaging, …
- **[Biomarkers](https://jadams5.github.io/aging_wiki/biomarkers/)** — biological-age clocks (epigenetic / proteomic / composite)
- **[Interventions](https://jadams5.github.io/aging_wiki/interventions/)** — lifestyle, dietary, pharmacological, gene / cell / blood-product therapies
- **[Model organisms](https://jadams5.github.io/aging_wiki/model-organisms/)** — mouse, worm, fly, killifish, naked mole-rat, human, …
- **[Studies](https://jadams5.github.io/aging_wiki/studies/)** — primary sources extracted from
- **[Methods](https://jadams5.github.io/aging_wiki/methods/)** — lab / analytical techniques and their recurring caveats
- **[Hypotheses](https://jadams5.github.io/aging_wiki/hypotheses/)** — contested or open theories

### Anatomy — organ systems, tissues & cell types

Body-system overlays (`type: organ-system`) — see [[by-organ-system]] for the index and the cross-system rollup:

- [[cardiovascular-system]] · [[musculoskeletal-system]] · [[integumentary-system]] · [[nervous-system]] · [[hematopoietic-system]] · [[immune-system]] · [[endocrine-system]] · [[digestive-system]] · [[urinary-system]] · [[respiratory-system]] · [[reproductive-system]]

Atomic pages: **[organ systems](https://jadams5.github.io/aging_wiki/organ-systems/)** · **[tissues](https://jadams5.github.io/aging_wiki/tissues/)** · **[cell types](https://jadams5.github.io/aging_wiki/cell-types/)**

## Gap tracker

See [[gaps/README]] for aggregated knowledge gaps by category.

## Personal-application layer (protocols)

The research above is general knowledge; the *protocols layer* is where one person applies it to themselves (baseline, plans, labs, tracking). Real personal data lives in a **private** `protocols/` directory, git-ignored from this public repo and tracked separately. See [[protocols-template/README|protocols-template]] for a public, fake-data skeleton of that system and an onboarding guide for starting your own. The privacy architecture is documented in [[CLAUDE]] § "Privacy posture".

## SOPs

- [[retrieving-papers]] — using a local paper archive
- [[extracting-evidence]] — what to record from a primary source
- [[finding-pathway-data]] — KEGG, Reactome, WikiPathways
- [[finding-protein-data]] — UniProt, NCBI Gene, STRING, CAZy
- [[finding-compound-data]] — PubChem, DrugBank, ChEMBL
- [[finding-aging-specific]] — GenAge, AgingAtlas, Open Targets
- [[adding-a-claim]] — citation conventions
- [[lint-pass]] — periodic health check
