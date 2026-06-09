# CLAUDE.md — aging_wiki schema and operating manual

This is a personal research wiki on the cellular and molecular mechanisms of human aging, maintained collaboratively by Claude and the user. Other AI agents should also read this file before editing.

This file is the **schema**: it tells you how the wiki is structured, what conventions to follow, and how to maintain it. When in doubt, follow this file. When this file is silent, ask the user before inventing a convention.

> **Schema history** — R-numbered escalations, precedent pages, and formalization dates are documented in [`schema-history.md`](schema-history.md). CLAUDE.md carries the active rules only; reach for schema-history when judging an edge case where the original rationale matters.

---

## Goals

The wiki must support these query patterns:

- "What cellular pathways intersect with [protein/compound]?"
- "What are the hypothesized effects of [compound] at [dose]? Include affected pathways and gross physiological effects."
- "What gaps in our functional knowledge of [process] remain?"
- "Does this [model organism] result extrapolate to humans?"
- "What interventions target [hallmark]?"
- "Show me all evidence for [claim], graded by quality."

If a structural decision makes any of these queries harder, push back on it.

IMPORTANT: When a user asks a question related to the mechanisms of human aging Claude should prioritize searching the information in this wiki over using its trained knowledge. If the information cannot be found, the data should be added to the wiki using the seeder/validator/propagate processes/sub-agents first, then the original question answered. This wiki is fairly deep, search a broad selection of pages to get a full picture before answering inquiries. Prioritize academic and medical rigor over quick answers.

---

## Architecture (per Karpathy's wiki gist)

Three layers:

1. **Raw sources** — primary papers are referenced by DOI; full-text PDFs are resolved through a private local tooling layer (see "Resolving papers" below and `CLAUDE.local.md`), never committed to this repo. The `sources/` folder holds media that has no DOI (extracted figures, lecture videos, supplementary data, screenshots) — **do not store journal PDFs here; cite by DOI.**
2. **The wiki** — atomic markdown entity pages + framework MOCs, all interlinked.
3. **The schema** — this file (`CLAUDE.md`) plus the `sops/` folder.

---

## Atomic-entity model

Truth lives on **atomic entity pages** (one page per protein, compound, pathway, process, hallmark, phenotype, study, hypothesis, model organism, etc.). A fact has exactly one canonical home — the most specific page where it applies.

**Framework pages** (Hallmarks of Aging, SENS, organ-system MOCs, etc.) are **navigational overlays** — they list and link to atomic pages but do *not* duplicate claims. If you find yourself writing the same fact in two places, move it to the more specific page and link from the other.

---

## Dual organizing frames

Both adopted as co-equal MOCs:

- **[[hallmarks-of-aging]]** — López-Otín et al. 2013, expanded to 12 in 2023. Academic standard, organized by molecular damage type.
- **[[sens-damage-categories]]** — de Grey / SENS Research Foundation, 7 damage categories, intervention-oriented.

The two frames slice the space differently. The atomic entity layer is the single source of truth; both MOCs link to the same atomic pages.

Additional overlays may be added as needed (`frameworks/by-organ-system.md`, `frameworks/by-intervention-type.md`, `frameworks/by-life-stage.md`).

---

## Directory map

```
aging_wiki/
├── CLAUDE.md                      # this file (active schema)
├── schema-history.md              # R-numbered escalations + precedents (CLAUDE.md change history)
├── index.md                       # master catalog
├── log.md                         # chronological ingest/lint log
│
├── frameworks/                    # MOCs (navigational overlays)
├── hallmarks/                     # one page per Hallmark of Aging
├── pathways/                      # signaling pathways
├── molecules/
│   ├── proteins/                  # gene/protein pages
│   ├── compounds/                 # small molecules, drugs, supplements
│   └── metabolites/
├── processes/                     # autophagy, apoptosis, senescence, ...
├── cell-types/                    # HSCs, satellite cells, microglia, ...
├── tissues/  &  organ-systems/
├── phenotypes/                    # sarcopenia, frailty, inflammaging, ...
├── interventions/                 # pharmacological / lifestyle / dietary / gene-therapy / stem-cell / blood-product / procedural
├── model-organisms/               # mouse, worm, fly, killifish, naked mole rat, human
├── studies/                       # one page per primary source extracted from
├── methods/                       # one page per laboratory or analytical technique whose limitations recur across studies; atomic content, distinct from sops/ (workflow guidance) and protocols/experiments/ (user protocols)
├── hypotheses/                    # contested or open theories
├── gaps/                          # aggregated knowledge-gap tracker
├── sources/                       # raw media with no DOI (figures, videos, supplementary data)
├── protocols/                     # personal application content (people, plans, labs, tracking, reviews, experiments) — PRIVATE nested repo
│   └── experiments/               # wet-lab / clinical experiments authored by the user; status-tracked working drafts (private; moved here R51)
├── brainstorming/                 # conversation-derived working drafts; exempt from citation discipline; banner-flagged as non-wiki-quality; promote threads to atomic pages via standard seeder/verifier workflow
└── sops/                          # standard operating procedures
```

---

## Page types and frontmatter

Every page begins with YAML frontmatter. The `type` field is mandatory.

### Shared conventions

**Aging-context druggability convention.** On `type: pathway`, `type: protein`, and `type: process` pages, `druggability-tier:` (1=clinical drug exists, 2=high-quality probe, 3=predicted druggable, 4=undruggable; from Open Targets Platform) reflects whether a clinical drug exists *for an aging indication that engages this entity* — NOT maximum-druggability across all indications. Examples:

- `[[mtor]]` = tier 1 (rapamycin is aging-tractable)
- `[[heat-shock-response]]` = tier 2 (HSP90 inhibitors are oncology-only, not aging-validated)
- `[[bcl-xl]]` = tier 1 (navitoclax + ABT-263 are senolytic-tractable)
- `[[hsp90]]` = tier 2 (geldanamycin/tanespimycin are advanced-clinical in oncology only, no aging-validated probe)

When the aging-context choice differs sharply from max-druggability, document the rationale in the body. The same aging-context convention applies to `clinical-stage:` on intervention class pages — `[[mtor-inhibitors]]` uses `phase-2` (Mannick immune-aging trials), not `fda-approved` (rapamycin's transplant/cancer indication).

**Ex-US regulatory-approval convention (R52).** `clinical-stage: approved-ex-us` denotes a compound/agent **approved for the relevant aging/aesthetic indication by a stringent non-US regulator** — EMA/EU (incl. CE marking), UK MHRA, Japan PMDA, South Korea MFDS, etc. — but **not FDA-approved**. Use it in place of a `phase-N` surrogate whenever real-world ex-US approval exists (e.g. `[[pdrn]]` polynucleotide injectables; EU-approved next-generation sunscreen UV filters such as bemotrizinol/bisoctrizole). Name the specific jurisdiction(s) in the body. **Ex-US approval is not a weaker signal than FDA approval — and is sometimes stronger or earlier**: the US OTC-monograph backlog (decades-stalled sunscreen filters) and FDA's drug-vs-cosmetic classification mean "not FDA-approved" frequently reflects US regulatory *lag*, not weak evidence. When an agent is approved in BOTH the US and elsewhere, use `fda-approved` (note the other jurisdictions in the body); `approved-ex-us` is specifically the *US-gap* case. Applies to `type: compound` and to `clinical-stage:` on `type: intervention` class pages.

**Literature-recency convention.** Atomic-content page types carry a `literature-checked-through:` field tracking the last seeder/verifier date-filtered PubMed + Europe PMC search. Required vs optional + cadence per type are tabulated in § Lint pass.

**Verification discipline.** Atomic-content pages carry a four-field verified block (`verified`, `verified-date`, `verified-by`, optional `verified-scope`). Framework pages and experiment/protocol/assessment pages do not. See § AI-extracted vs human-verified content.

### type: hallmark

```yaml
---
type: hallmark
aliases: []
category: primary | antagonistic | integrative   # López-Otín 2013 schema
introduced: 2013 | 2023 | proposed               # original 9 vs expanded 12 vs proposed-but-not-formally-adopted candidate. Body must state formal-adoption status in opening paragraph
sens-correspondence: ["[[apoptosenes]]"]         # which SENS category overlaps
key-pathways: ["[[mtor]]", "[[p53-pathway]]"]
key-phenotypes: ["[[sarcopenia]]"]
mechanistic-tier: proximal | intermediate | integrative   # finer than López-Otín; reflects this wiki's intervention-evidence ranking
intervention-tractability: high | moderate | low | none   # whether a clinically usable modulator exists
caused-by: []                       # upstream hallmark/process nodes in the causal graph
causes: []                          # downstream hallmark/process nodes
literature-checked-through:         # optional; 24mo cadence. Populate for intervention-landscape-heavy hallmarks (e.g., disabled-adaptive-immunity)
---
```

### type: pathway

```yaml
---
type: pathway
aliases: [mTORC1, mTORC2]
kegg: hsa04150
kegg-secondary: []            # optional; for pathways spanning multiple KEGG entries (e.g., type I IFN spans hsa04623 + hsa04622). Primary kegg: is the best single canonical match; secondaries supplementary
reactome: R-HSA-165159
wikipathways: WP3318          # optional
key-nodes: ["[[mtor]]", "[[raptor]]", "[[s6k1]]"]
upstream: ["[[insulin-igf1]]"]
downstream: ["[[autophagy]]", "[[protein-synthesis]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []           # optional
druggability-tier:            # 1-4; null if no Open Targets entry. Aging-context tier — see shared conventions
caused-by: []                 # upstream nodes in causal graph
causes: []                    # downstream nodes
literature-checked-through:   # optional; 18mo cadence. Populate for pages with active intervention landscapes (type-I-IFN, JAK-STAT, mTOR)
verified: false               # required; pathway pages originate quantitative claims (key-node activities, EC50s, KO phenotypes)
verified-date: null
verified-by: null
verified-scope: null          # optional
---
```

**Pathway / protein naming convention:** when a pathway is named after a key protein (e.g., mTOR, p53, AMPK), the pathway page takes the bare name (`pathways/mtor.md` → canonical `[[mtor]]` resolution). The protein page uses a disambiguating suffix when seeded later: `molecules/proteins/mtor-kinase.md`. `molecules/proteins/p53.md` is fine because no `pathways/p53.md` exists (the pathway is `p53-pathway`). Decide per-entity; document the resolution choice on both pages' aliases.

### type: protein

```yaml
---
type: protein
aliases: [TP53, tumor protein 53]
uniprot: P04637
ncbi-gene: 7157
hgnc: 11998
ensembl: ENSG00000141510   # optional; needed for Open Targets API druggability lookups
genage-id: 31              # optional; HAGR/GenAge entry ID for aging-relevant genes
pathways: ["[[p53-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]", "[[cellular-senescence]]"]
sens-categories: []        # optional (e.g., BCL-xL → ApoptoSENS)
complex-subunits: []       # optional; for protein-complex pages, list per-subunit UniProt IDs
is-noncoding-rna: false    # optional; default false; true for ncRNA gene-products (TERC etc.)
mouse-ortholog: Trp53      # optional but strongly recommended — see Mouse-ortholog format below
druggability-tier:         # 1-4; null + #gap/no-opentargets-entry if no entry. Aging-context tier — see shared conventions
gtex-aging-correlation:    # Spearman ρ + sign across GTEx tissues; free-text summary; populated per `sops/finding-tissue-expression.md`
mr-causal-evidence: yes | no | partial | not-tested | not-applicable-somatic   # MR-validated as causal vs predictive — see MR enum notes below
caused-by: []              # upstream entities (proteins, pathways, hallmarks) in causal graph
causes: []                 # downstream entities
literature-checked-through: # optional; 18mo cadence. Populate for proteins with active drug-dev pipelines (JAK1/TYK2/IKKε/TBK1, BCL-xL) or fast-moving aging-specific literature (STAT1, MAVS)
---
```

**Mouse-ortholog format.** Default is MGI sentence-case single symbol (`Akt1`, `Sirt1`). Multi-subunit complexes use semicolon-delimited with human-equiv annotation (`Rpa1 (RPA70); Rpa2 (RPA32); Rpa3 (RPA14)`). Paralogs use slash-delimited (`Pot1a / Pot1b`). Flag `#gap/needs-mouse-ortholog` when cross-species extrapolation appears without an ortholog. Full conventions in schema-history.md § R34.

**`mr-causal-evidence:` enum.** `not-applicable-somatic` for CHIP-driver proteins (DNMT3A, ASXL1, TET2, JAK2 V617F, SF3B1) — germline MR doesn't capture somatic aging variation; cite Genovese 2014 / Jaiswal 2014 in body. `partial` = GWAS hits exist but no MR study published (instrument available, study pending); `not-tested` = no instruments described or MR attempted-but-underpowered.

**Protein-complex pages** (e.g., `tsc1-tsc2.md`): use the primary catalytic subunit's UniProt ID in `uniprot:`, list other subunits in a body table at the top of the page. Optional `complex-subunits:` frontmatter field lists additional UniProt IDs for Dataview-queryability.

### type: compound

```yaml
---
type: compound
aliases: [3,7,3',4'-tetrahydroxyflavone]
pubchem-cid: 5281614              # primary canonical CID; for stereoisomer-distinct compounds use the racemic / most-clinically-relevant form
pubchem-cid-alt:                  # optional; supplementary CID for stereoisomers / alternative forms with distinct PubChem entries (α-tocopherol natural RRR 14985 + all-rac 2116; lactic-acid DL 612 + L-form 107689). Body must document which form the page primarily covers
chembl-id: CHEMBL31096
chembl-id-active-metabolite:      # optional; ChEMBL ID for the active metabolite of a prodrug (tazarotene parent CHEMBL1657 → tazarotenic acid CHEMBL1201375). Common in retinoid esters, ester-NSAIDs, statin lactones. Body must explain the activation cascade
drugbank-id:
administration-route:             # optional; `topical` | `oral` | `injectable` | `inhaled` | `intravenous` | `multi-route`. Critical when route changes mechanism qualitatively (niacinamide topical = barrier repair / PAR-2 inhibition ≠ oral = NAD+ precursor)
biologic: false                   # optional; default false; true for monoclonal antibodies, recombinant proteins, peptide therapeutics
who-inn:                          # optional; WHO International Non-proprietary Name (used for biologics)
molecular-formula:                # optional; useful for biologics where SMILES is impractical
molecular-weight-da:              # optional; daltons; useful for biologics + peptides
mechanisms: [senolytic, antioxidant]
targets: ["[[bcl-xl]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[cellular-senescence]]"]
clinical-stage: preclinical | phase-1 | phase-2 | phase-3 | approved-ex-us | fda-approved | supplement
human-evidence-level: none | preclinical-only | limited | limited-negative | strong   # `limited-negative` for classes where multiple Phase 2/3 trials reported null/negative on primary endpoints (e.g., STACs / sirtuin-activators)
translation-gap:                  # categorical: phase-3-rct-needed | biomarker-only | preclinical-only | human-evidence-strong | translation-blocked-safety | translation-blocked-cost
next-experiment:                  # free-text one-liner: what single experiment would resolve the human-evidence gap?
clinical-trials-active:           # integer count of active (RECRUITING + ACTIVE_NOT_RECRUITING) trials from ClinicalTrials.gov v2 API; per `sops/integrating-clinical-trials.md`
literature-checked-through:       # required; 12mo cadence. Populated by wiki-seeder on initial draft and wiki-verifier on each pass
---
```

**Biologic compounds (mAbs, peptides, recombinant proteins):** set `biologic: true`. PubChem CID is typically not assigned for proteins/biologics — leave null and explain in body. Use `who-inn:` for the WHO INN. ChEMBL still tracks biologics; cite the ChEMBL ID for the active form.

### type: process

```yaml
---
type: process
aliases: [self-eating]
key-proteins: ["[[atg7]]", "[[lc3]]", "[[beclin-1]]"]
pathways: ["[[mtor]]", "[[ampk]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[loss-of-proteostasis]]"]
selective-variants: ["[[mitophagy]]", "[[lipophagy]]"]   # optional; for processes with sub-variants
druggability-tier:                                        # 1-4 if process is modulable by a clinical drug or probe; null otherwise. Aging-context tier — see shared conventions
caused-by: []                                             # upstream entities
causes: []                                                # downstream entities
literature-checked-through:                               # optional; 18mo cadence. Populate for fast-moving descriptive-process pages (e.g., gut-microbiome-aging-shifts); leave null for slow-turnover canonical-mechanism (autophagy, apoptosis)
---
```

### type: phenotype

```yaml
---
type: phenotype
aliases: []
icd-10: M62.84
icd-11: FB32.Y                # optional
affected-tissues: ["[[skeletal-muscle]]"]
underlying-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
typical-onset: "60+ (clinically); biological onset earlier"
prevalence-65plus: "~10–16% (varies by definition)"   # optional; community-dwelling 65+ if applicable
verified: false              # required; phenotype pages originate quantitative claims (prevalence, ICD codes, effect sizes, mortality associations)
verified-date: null
verified-by: null
verified-scope: null         # optional
---
```

### type: intervention

```yaml
---
type: intervention
aliases: [CR, dietary restriction]
mode: lifestyle              # see Mode value reference below
mechanisms: [autophagy-induction, mtor-inhibition, ampk-activation]
targets: []                  # optional; protein/pathway-level targets (e.g., AAV-TERT → TERT/TERC). For complex interventions like CR/exercise, keep empty and document in body
target-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]"]
target-pathways: ["[[mtor]]", "[[ampk]]", "[[sirtuin]]", "[[insulin-igf1]]"]
human-evidence-level: limited       # mirrors compound: none | preclinical-only | limited | limited-negative | strong
clinical-stage: implemented         # preclinical | trial-in-progress | implemented | abandoned. For class pages, use aging-context stage — see shared conventions
safety-profile: well-established    # well-established | investigational | unsafe-long-term | unknown. For indication-split profiles, pipe-delimited free-text: `well-established (hematologic disease) | investigational (aging-rejuvenation)` for HSCT. Default single-value when one profile dominates
translation-gap:                    # categorical (see compound block)
next-experiment:                    # free-text
clinical-trials-active:             # integer count from ClinicalTrials.gov v2 API
literature-checked-through:         # required; 12mo cadence
---
```

**Mode value reference + subdirectory map** (one combined table — `mode:` value = `interventions/<subdir>/`):

| Mode | Subdir | Examples |
|---|---|---|
| `lifestyle` | `lifestyle/` | exercise, sleep, social; foundational interventions including `caloric-restriction.md` |
| `dietary` | `dietary/` | prebiotics, postbiotics, FMT; intermittent fasting, methionine restriction, ketogenic |
| `pharmacological` | `pharmacological/` | drug-class **category** pages (e.g., `senolytics.md`); specific drugs live as compounds in `molecules/compounds/` |
| `gene-therapy` | `gene-therapy/` | viral-vector (AAV/lentiviral) DNA interventions |
| `stem-cell-therapy` | `stem-cell-therapy/` | HSCT, MSC infusions, iPSC derivatives |
| `blood-product` | `blood-product/` | TPE, young-plasma, NBE — manipulation of blood/plasma constituents (not cells) |
| `procedural` | `procedural/` | device-mediated (lasers: CO2/Er:YAG/1550nm/1927nm; IPL; microneedling; RF; HIFU) or surgery-based; mechanism is controlled wounding / energy delivery |

Chemical peels can be `pharmacological` (active acid is the bioactive) or `procedural` (controlled wounding is the mechanism) — default `pharmacological` per `chemical-peels.md` precedent.

A pharmacological category page lists and contextualizes the drugs in that class; drug-specific data (mechanism, PK, dose-response) lives on the compound page.

### type: cell-type

```yaml
---
type: cell-type
aliases: [HSCs, hematopoietic stem cells]
cell-ontology-id: CL:0000037                     # optional; null + #gap/needs-canonical-id if no precise CL term exists (e.g., FAPs: CL:0002320 "connective tissue cell" is too broad)
tissue-of-origin: ["[[bone-marrow]]"]
key-markers-mouse: [Lin-, Sca-1+, c-Kit+]
key-markers-human: [CD34+, CD38-, CD90+, CD45RA-]
lineage-output: [myeloid, lymphoid]              # what cells this differentiates into; skip for non-stem cell types
self-renewal: yes                                # yes | no | limited (transit-amplifying)
aging-relevant: yes                              # yes | no | contested
affected-hallmarks: ["[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
key-aging-phenotypes: ["[[immunosenescence]]", "[[anemia-of-aging]]"]
typical-niche: "endosteal + perivascular bone marrow niches"
niche-signaling: []                              # optional; upstream signaling pathways from the niche regulating this cell type
single-cell-aging-signature:                     # optional; free-text summary of per-cell-type aging signature (Tabula Muris Senis / CellxGene Census / Aging Atlas); see `sops/finding-singlecell-aging.md`
verified: false                                  # required; cell-type pages originate quantitative claims (markers, niche, aging changes)
verified-date: null
verified-by: null
verified-scope: null                             # optional
---
```

**Non-stem cells** (post-mitotic neurons, cardiomyocytes): `self-renewal: no`, skip `lineage-output:`. **Transit-amplifying** (intestinal crypt): `self-renewal: limited`. **Ex-vivo-derived (iPSCs, in-vitro-only):** `tissue-of-origin: []` and `key-aging-phenotypes: []` acceptable; document rationale in body, lint shouldn't flag.

### type: tissue

```yaml
---
type: tissue
aliases: [striated muscle, voluntary muscle, skeletal musculature]
parent-system: musculoskeletal-system   # short slug (musculoskeletal-system, integumentary-system, cardiovascular-system, central-nervous-system, etc.)
key-cell-types: ["[[satellite-cells]]", "[[myofibers]]"]
key-aging-phenotypes: ["[[sarcopenia]]", "[[frailty]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[mitochondrial-dysfunction]]"]
verified: false
verified-date: null
verified-by: null
verified-scope: null    # optional; free-text scope description for partial verification
---
```

Tissue pages are atomic content (they originate quantitative claims about anatomy + cell composition + aging changes) and carry verification discipline like `type: protein`/`compound`/`study`. They are NOT navigational MOCs — those are `type: framework`.

**Glands and organs** (thyroid, parathyroid, kidney, liver, lung, pancreas, etc.) live in `tissues/` as `type: tissue` — there is no separate `type: organ`. Set their `parent-system:` to the owning body system.

### type: organ-system

```yaml
---
type: organ-system
aliases: [cardiovascular system, circulatory system]
key-organs: ["[[heart]]"]                     # wikilinks to organ/tissue pages in this system
key-tissues: ["[[arteries]]", "[[veins]]", "[[myocardium]]"]
key-cell-types: ["[[cardiomyocytes]]", "[[endothelial-cells]]", "[[vsmc]]"]
key-aging-phenotypes: ["[[atherosclerosis]]", "[[arterial-stiffening]]"]
related-hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
parent-system: null                           # null for top-level systems; set for sub-systems (e.g., central-nervous-system → nervous-system)
---
```

Organ-system pages live in `organ-systems/` and are **navigational overlays** (the anatomical counterpart to `type: framework`): they aggregate and link the tissue/organ/cell-type/phenotype atomic pages of one body system. Like frameworks, they do NOT originate primary claims and therefore do **NOT** carry the `verified` block — verifying one reduces to confirming cross-link integrity. The filename is the `parent-system:` slug used on member tissue pages (e.g., `organ-systems/cardiovascular-system.md` ← `parent-system: cardiovascular-system`), so those `[[cardiovascular-system]]` links resolve. A top-level index lives at `frameworks/by-organ-system.md`.

### type: model-organism

```yaml
---
type: model-organism
species-name: Mus musculus
common-name: house mouse
ncbi-taxonomy: 10090                            # optional
typical-lifespan: 2-3 years
lifespan-ratio-to-human: ~30x shorter           # optional; useful for extrapolation time-scaling
genome-similarity-to-human: 85%
genome-size-mb: 2730                            # optional
adult-cell-count: ~10^11                        # optional; useful for invertebrates with eutely (C. elegans 959 somatic cells)
itp-validated: yes                              # optional; whether NIA Interventions Testing Program operates in this organism
key-strengths: [transgenics, lifespan-tractability, mammalian-physiology]
key-divergences: [telomere-biology, immune-system, microbiome]
literature-checked-through:                     # optional; 24mo cadence. Populate for species with active mechanistic research (e.g., Loxodonta africana TP53-retrogene work; Balaena mysticetus DNA-repair biology)
verified: false                                 # also applicable to multi-source pages
---
```

### type: study

```yaml
---
type: study
doi: 10.1016/j.ebiom.2018.09.015
pmid:                              # optional; NCBI PubMed ID — useful for efetch lookups when DOI metadata is incomplete
pmc:                               # optional; PubMed Central ID (e.g., PMC10148951) — populate when paper is OA via PMC and local PDF is unavailable (PMC is the canonical verification fallback)
title: "Fisetin is a senotherapeutic that extends health and lifespan"
authors: [Yousefzadeh MJ, Zhu Y, McGowan SJ, ...]
year: 2018
journal: EBioMedicine
study-design: in-vivo | in-vitro | observational | rct | meta-analysis | review
publication-type:                  # optional; research-article | letter | brief-communication | review | meta-analysis | case-report | editorial | preprint. Material to evidence-weight: Letters have condensed methods + limited n reporting; meta-analyses + systematic reviews are higher-weight synthesis. Default `research-article` when unmarked
volume:                            # optional but recommended
issue:                             # optional
pages:                             # optional; "X-Y" range or article ID
organism: mus-musculus
n-subjects: 80
intervention: ["[[fisetin]]"]
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [senescent-cell-clearance, lifespan-extension]
local-pdf: null                    # public repo stores no local paths; full text resolved by DOI (see "Resolving papers")
---
```

### type: experiment

```yaml
---
type: experiment
status: proposed             # proposed | accepted | in-progress | paused | complete | published | abandoned
status-changed: 2026-05-20   # ISO date of last status change
proposed-date: 2026-05-20    # ISO date the proposal was drafted
question: "One-sentence research question this experiment addresses."
hypothesis: "One-sentence falsifiable hypothesis being tested."
resolves-edges: []           # causal-graph edges this experiment would tighten or refute; format: "[[upstream]] → [[downstream]]"
resolves-nodes: []           # hallmark / process nodes whose tractability this experiment advances
adds-nodes: []               # optional; missing-node entries in causal-graph-data this experiment helps formalize (e.g., "[[processes/glucosepane]] as ECM-crosslinks node")
scale: small-lab             # small-lab | small-clinic | large-clinic | multi-site | multi-decade
duration-estimate: "6 months"
cost-estimate: "$15-30k consumables (rough order of magnitude)"
resources-required: [primary-cell-culture, flow-cytometry, qPCR]
preregistered: false         # mirrors type:study; flip when OSF / ClinicalTrials.gov registration is filed
preregistration-doi: null
published-as: null           # wikilink to the study page that holds results when status → `published` (e.g., "[[studies/midas-cell-type-2027]]")
related-experiments: []      # wikilinks to other experiment pages (predecessor / parallel / follow-on)
related-pages: []            # wikilinks to relevant hallmark / process / framework pages
last-updated: 2026-05-20
---
```

`type: experiment` pages live in `protocols/experiments/` (the **private** nested repo — relocated from the public top-level `experiments/` in R51; they are user-authored working drafts, treated like `protocols/brainstorming/` rather than public research) and capture wet-lab or clinical experiments authored by the user (distinct from `studies/`, which holds primary sources extracted FROM). Lifecycle: `proposed` (draft) → `accepted` (committed) → `in-progress` (data collection) → `complete` (data analyzed but not published) → `published` (results written up as a `type: study` page in the public `studies/`, linked via `published-as:`) → `abandoned` (with reason in body).

**Discipline:** no `verified:` (proposals/protocols are not facts; verification kicks in on the downstream studies/ page). Citation discipline DOES apply to biological claims in body. Because these pages are now private, the one-way link rule applies: experiment pages may link OUT to public research pages (incl. `[[frameworks/causal-graph-data]]` for `resolves-edges:`/`resolves-nodes:`), but **public research pages must NOT link back into the private experiments tree** (no wikilink with an `experiments/`-prefixed or `protocols/experiments/`-prefixed target) — reference the experimental gap in prose instead. Populate `adds-nodes:` when proposing damage classes outside López-Otín (e.g., ECM crosslinks → GlycoSENS). Pre-registration (OSF or ClinicalTrials.gov) encouraged, required as status approaches `in-progress`.

### type: hypothesis

```yaml
---
type: hypothesis
aliases: [free radical theory, oxidative stress theory]
proposed-by: [Denham Harman]
proposed-year: 1956
status: contested | superseded | active | confirmed | falsified | active-frame | superseded-frame
treatment-mode: evidence-aggregating | conceptual-frame   # see Mode A/B below + sops/writing-hypothesis-pages.md
key-evidence-for: ["[[studies/...]]"]                     # REQUIRED for Mode A; OPTIONAL for Mode B (Mode B pages may use [] with body-level consistency-with-evidence discussion)
key-evidence-against: ["[[studies/...]]"]                 # same Mode-A REQUIRED / Mode-B OPTIONAL rule
related-hallmarks: ["[[mitochondrial-dysfunction]]"]
literature-checked-through:                               # required; 24mo cadence
---
```

**Hypothesis pages are synthesis MOCs** — they aggregate evidence from verified study/protein/intervention pages via wikilinks; they do NOT restate primary findings. See `sops/writing-hypothesis-pages.md`. Two modes: **Mode A — evidence-aggregating** (specific testable predictions: free-radical, hyperfunction, information theory, negligible-senescence) vs **Mode B — conceptual-frame** (organizes biology without sharp predictions: disposable-soma, antagonistic pleiotropy). Status is a judgment call documented in body; differentiate "falsified" (predictions failed in well-powered trials) from "untested in humans" from "underspecified" (no derivable predictions).

### type: framework

```yaml
---
type: framework
aliases: []
sources: ["[[studies/...]]"]
covers: [hallmarks, processes]
---
```

**Framework pages are navigational MOCs — do NOT carry `verified` / `verified-date` / `verified-by` fields.** Verification discipline applies to atomic pages that originate quantitative claims. Frameworks aggregate via wikilinks and never originate primary claims; verifying a framework reduces to confirming cross-link integrity + that quantitative claims are sourced from already-verified atomic pages. Examples: [[hallmarks-of-aging]], [[sens-damage-categories]], [[apoptosenes]].

### type: microbe

```yaml
---
type: microbe
aliases: []
kingdom:                                    # optional; `bacteria` | `archaea` | `fungi` | `protist`. Critical for Dataview filtering of bacterial vs fungal pages
ncbi-taxonomy: 239935                       # required
phylum: Verrucomicrobia
family: Akkermansiaceae
gram-stain: negative                        # `positive` | `negative` | `variable` | `not-applicable-eukaryote` (fungi lack peptidoglycan)
oxygen-tolerance: anaerobic                 # anaerobic | aerobic | facultative | aerotolerant-anaerobic (anaerobic-but-tolerates-O2; distinct from facultative)
host: "Homo sapiens (gut commensal)"
discovered: 2004                            # year + first author in body
genome-size-mb: 2.66                        # numeric for single-species; string-range for genus-level (e.g., "~7-9" for Malassezia)
key-strains: [MucT (ATCC BAA-835)]          # optional
hallmarks: ["[[dysbiosis]]"]
literature-checked-through:                 # optional; 18mo cadence. Populate for microbes with active aging-specific literature (skin/gut microbiome clusters)
verified: false                             # required
verified-date: null
verified-by: null
---
```

Used for individual microbial taxa (species or genus) referenced from the [[dysbiosis]] hallmark and microbiome research.

### type: biomarker

```yaml
---
type: biomarker
aliases: []
modality: dna-methylation | transcriptomic | proteomic | metabolomic | composite-clinical | imaging | telomere-length | physical-performance
unit: years | percentile | rate | composite-score
training-cohort: "Horvath 2013: 8000 samples / 51 tissues"
n-cpgs-or-features: 353                      # integer for single-model clocks; string-encoded multi-value for multi-model pages (e.g., "elastic-net 157 / PC 5021"). Lint accepts both
model-architecture:                           # optional; elastic-net | lasso | ridge | svm | pc-clock | random-forest | composite-other. When `svm` + `n-cpgs-or-features: null`, the null is structurally accurate (SVM clocks use full probe space); lint should NOT flag
training-target: chronological-age | mortality | morbidity | pace
calibration-tissues: ["[[blood]]", "[[saliva]]", "[[brain]]"]
test-retest-icc:                              # optional; intra-class correlation
human-evidence-level: strong                  # mirrors compound: none | preclinical-only | limited | strong
mendelian-randomization: yes | no | partial | not-tested | not-applicable   # `not-applicable` for structural/device biomarkers that aren't germline-instrumentable (e.g., AGE-Reader skin autofluorescence). Distinct from `not-tested` and `not-applicable-somatic` (R26 enum for CHIP)
intervention-responsive: yes | no | partial   # do verified interventions move this biomarker?
literature-checked-through:                   # required; 18mo cadence
verified: false
verified-date: null
verified-by: null
---
```

For biological-age estimators and aging biomarkers (Horvath/Hannum/PhenoAge/GrimAge/DunedinPACE etc.). Atomic content with primary-source citations — DO carry `verified` discipline, unlike framework pages.

### type: method

Lives in `methods/`. One page per laboratory or analytical technique whose methodological details and limitations recur across multiple study or atomic pages. Methods pages are reference content for *how studies we cite produce their data* — distinct from `sops/` (workflow guidance for wiki maintenance) and `protocols/experiments/` (specific user-authored experimental protocols, private). Atomic content (originates technical claims); carries verification discipline.

```yaml
---
type: method
aliases: []
abbreviation:                       # optional; short acronym (SAF, SELEX, MR, scRNA-seq, IHC, LC-MS/MS, etc.)
category:                           # required; mass-spec | proteomics | genomics | imaging | causal-inference | scrna | flow-cytometry | clinical-instrument | chemical-biology | in-vivo-method | in-silico-method | clinical-trial-design
year-introduced:                    # optional
canonical-reference:                # optional; primary methods paper as wikilink to [[studies/...]] if available; raw DOI string acceptable if no study page exists yet
current-protocols-citation:         # optional; "Current Protocols in <Volume>, Vol X, Chapter Y (year)" — preferred canonical reference for established techniques
related-methods: []                 # wikilinks to similar / complementary / alternative methods
typical-use-cases: []               # what citing study/biomarker/compound pages typically use this method for
key-limitations: []                 # methodological limitations bearing on evidence-weight; the recurring caveats this page exists to deduplicate
evidence-weight-implication:        # free-text one-liner; how a reader of a citing study page should weight evidence produced by this method
literature-checked-through:         # optional; 24mo cadence. Populate for methods with evolving best-practice literature (scRNA-seq workflows, MR sensitivity analyses, LC-MS/MS PTM quantification)
verified: false                     # required
verified-date: null
verified-by: null
verified-scope: null                # optional
---
```

**Body structure:** Principle → Workflow (reference Current Protocols if available) → Output format → Key parameters → Validation & QC → Limitations and failure modes → Evidence-weight implications for this wiki → Related methods → Pages citing this method.

**Seeding discipline:** triage to techniques whose limitations recur across ≥3 study/atomic pages (pre-emptive textbook seeding allowed but secondary to evidence-driven coverage). Anchor against Current Protocols chapters when they exist; the wiki page summarizes for aging-context rather than reproducing protocol step-by-step. Verification cross-checks claims against canonical methods papers + 1–2 representative aging-context applications.

### type: person

Lives in `protocols/people/`. One page per individual whose health is tracked in this wiki.

```yaml
---
type: person
handle: example-person             # short identifier; matches filename
sex: male | female | other
dob: null                          # ISO YYYY-MM-DD; null = chronological age tracked in body
height-cm:
weight-kg-baseline:                # initial weight; ongoing tracked in tracking/{handle}/weight.csv
ethnicity:
family-history: []                 # list of {condition, relation, age-at-onset} maps; or free-text in body
goals: []                          # free-text aging/health goals
current-conditions: []             # active diagnoses
current-medications: []            # prescription drugs in current use
current-supplements: []            # supplements in current use
allergies: []
verified: false                    # true once baseline data confirmed against source documents
verified-date: null
last-updated:                      # ISO date; required
---
```

`verified: true` for `type: person` means the baseline frontmatter values were confirmed against source documents (medical records, prior labs). It is not a research-verification claim.

### type: protocol

Lives in `protocols/plans/`. One page per intervention regimen. A person may have multiple active or historical protocols; pages are time-bounded by `started:` and `ended:`.

```yaml
---
type: protocol
subject: "[[people/example-person]]"          # required; the person this protocol is for
status: proposed | active | paused | discontinued
started:                           # ISO date; null until status: active
ended: null                        # ISO date when discontinued
target-hallmarks: []               # wikilinks to hallmark pages this protocol targets
intervention-arms: []              # wikilinks to interventions/ or molecules/compounds/ pages
evidence-grade: tier-1             # tier-1 = lifestyle foundations / strong human RCT
                                   # tier-2 = pharmacological with mouse + early-human data
                                   # tier-3 = supplement-tier or mechanistic-only
monitoring-required: []            # biomarkers to track for validation; should match labs/ analyte names
stop-criteria: []                  # explicit halt conditions (free-text list)
review-cadence: quarterly | semi-annual | annual
last-updated:                      # ISO date; required
---
```

Protocols do not carry `verified:` — they are decisions, not facts. Citation discipline still applies to evidence claims within the body.

The frontmatter here (`monitoring-required:`, `review-cadence:`, `stop-criteria:`) is the *scaffold* — for the device-agnostic guidance on **what to track and how** (the discrete-vs-continuous routing rule, the Metric·Cadence·Source·Target·File monitoring table, consistent units-bearing analyte keys, the correlate-streams-into-narrative discipline, intermittent block-mode sensing, the lab cadence ladder, dated milestone targets), see [[sops/personal-tracking]]. That SOP is also the starting point for any applied-health / "personal" question when **no per-individual protocol area exists yet**.

### type: assessment

Lives in `protocols/reviews/`. One page per periodic review of a person's protocols against their tracking data.

```yaml
---
type: assessment
subject: "[[people/example-person]]"
date:                              # ISO date of the review
period-covered:                    # free-text date range, e.g., "2026-05-06 to 2026-08-06"
protocols-reviewed: []             # wikilinks to protocols/plans/ pages
labs-referenced: []                # wikilinks to protocols/labs/ pages
decisions: []                      # list of free-text decisions made this review
last-updated:                      # ISO date; required
---
```

### type: lab-panel

Lives in `protocols/labs/`. One page per discrete lab draw or clinical-event measurement. Filename: `{handle}-{YYYY-MM-DD}.md`.

```yaml
---
type: lab-panel
subject: "[[people/example-person]]"
draw-date:                         # ISO date
ordering-context: baseline | followup | symptom-driven | annual-physical
provider:                          # free-text: lab name, ordering physician, or self-pay context
fasting: yes | no | unknown
analytes: {}                       # map of analyte-name to value; use snake-case-with-units keys
                                   # e.g., apoB-mg-dl: 87, hba1c-pct: 5.3, hsCRP-mg-L: 0.8
verified: false                    # true once values confirmed against source PDF/EHR
verified-date: null
last-updated:                      # ISO date; required
---
```

Lab-panel pages are the canonical record of a single lab draw. Time-series queries across multiple draws are built via Dataview from the `analytes:` frontmatter — this is why analyte keys must be consistent across pages (snake-case-with-units convention).

For high-frequency continuous data (HRV, sleep, daily weight, CGM), do NOT create per-event lab-panel pages — use CSV files in `protocols/tracking/{handle}/` instead.

---

## Naming conventions

- File names: lowercase, hyphenated, no spaces. `cellular-senescence.md`, `mtor.md`.
- `aliases:` in frontmatter for synonyms (Obsidian uses these for ambiguous-link resolution).
- Greek letters spelled out in filenames: `nf-kb` (with `NF-κB` in aliases).
- Organism filenames: scientific name hyphenated (`mus-musculus.md`).
- Use canonical identifiers in frontmatter (HGNC for human genes, UniProt for proteins, PubChem CID for compounds, DOI for papers).

---

## Citation discipline

**Every biological claim must cite a primary source via footnote.** The footnote text carries the *quality signal* so a reader can judge the claim without chasing the link.

```markdown
Fisetin reduced p16+ senescent cells by ~50% in aged C57BL/6 mice at 100 mg/kg
oral [^yousefzadeh2018]. **Not yet replicated in humans** #gap/needs-human-replication.

[^yousefzadeh2018]: [[studies/yousefzadeh-2018-fisetin-senolytic]] · n=20/group · randomized · p<0.01 · model: aged C57BL/6 mice
```

Footnote fields (in order):

- Wikilink to the study page
- `n=N`: total subjects
- design: `randomized | observational | meta-analysis | in-vitro | in-silico | review`
- `p<X` or `ns` (omit if not applicable)
- `model:` short organism/system descriptor

For widely-accepted background ("DNA is a double helix"), no citation needed. When in doubt, cite. Never write a claim sourced from "an internet comment" or unattributed reasoning — flag it `#unsourced` and surface in the next lint pass.

**Retracted papers.** When a primary source has been retracted, do NOT cite it for any claim — find a replacement paper if available. If the retraction is itself relevant context (e.g., the retraction is widely-cited and the wiki must explain why a previously-published claim is no longer supported), document it via a dedicated retraction footnote with the bold "RETRACTED" prefix:

```markdown
[^wenz2009]: **RETRACTED** — doi:10.1073/pnas.0911570106 · Wenz T et al. · *PNAS* 2009 · originally claimed muscle-Pgc-1α overexpression extends lifespan in aged mice; **retracted December 2016** (retraction DOI:10.1073/pnas.1619713114) due to figure-integrity issues. Replaced by [^leick2010] for the muscle-aging-PGC-1α claim. Do NOT cite for new claims.
```

The replacement paper carries the active citation; the retracted paper is preserved only to document the historical record. Precedent: [[pgc-1alpha]].

---

## Evidence quality grading

For any claim derived from non-human studies, include this small extrapolation table near the claim:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes / partial / no / unknown |
| Phenotype conserved in humans? | yes / partial / no / unknown |
| Replicated in humans? | yes / no / in-progress / contradicted |

See `model-organisms/_extrapolation-guide.md` for what counts as "partial" vs "yes," and which model organisms diverge most from humans for which systems.

---

## AI-extracted vs human-verified content

When Claude (or any agent) writes a page from training knowledge or summarized search results without reading the underlying primary source(s), the page is **AI-extracted** and must be flagged as such until verified.

**Frontmatter:**
```yaml
verified: false             # required on atomic-content types (study, protein, compound, pathway, process, biomarker, cell-type, tissue, model-organism, hypothesis, method, microbe, phenotype)
verified-date: null         # ISO date when flipped to true
verified-by: null           # "claude" | "user" | "claude+user"
verified-scope: null        # optional: free-text scope description if verification was partial
                            # e.g., "primary-source PDF verified; canonical-DB identity fields not re-checked"
```

**Full-page vs partial verification:** For multi-source pages (e.g., a protein page citing UniProt, NCBI Gene, *and* multiple primary studies), full verification means cross-checking every source-derived claim against its source. If only some sources were verified (e.g., the aging-relevant primary studies but not the canonical-database identity fields), set `verified: true` with a `verified-scope:` description that says exactly what was and wasn't checked. The next lint pass should pick up the unchecked scope.

**Page banner** (immediately after frontmatter, before the H1):
```markdown
> ⚠️ Auto-extracted by Claude on YYYY-MM-DD — not yet verified against the full PDF (DOI <DOI>). Numerics may be approximate; verify before relying on quantitative claims.
```

**When to flip `verified: true`:**

A verification pass means: the verifier has read the underlying primary source(s) end-to-end and confirmed every quantitative claim (n's, p-values, doses, effect sizes, mechanism statements) against the source. After verification:
1. Update each numeric claim to match the source.
2. Set `verified: true`, `verified-date: <today>`, `verified-by: claude` or `user` or `claude+user`.
3. Remove the ⚠️ banner.
4. Note in `log.md` what (if anything) had to be corrected.

**For pages that cannot be verified** (e.g., closed-access papers without local PDF): keep `verified: false` indefinitely and tag `#gap/no-fulltext-access`. The banner stays, modified to note the verification blocker.

The `verified` flag is enforced by the lint pass — see `sops/verifying-extraction.md` and `sops/lint-pass.md`. A project-level **`wiki-verifier`** subagent (defined at `.claude/agents/wiki-verifier.md`) handles the actual PDF reading + cross-checking with context isolation; the main agent invokes it via the Agent tool and handles downstream propagation.

---

## Knowledge gap markers

Tag-based, aggregated via Dataview into `gaps/README.md`.

| Tag | Meaning |
|---|---|
| `#gap/needs-human-replication` | Only model-organism evidence so far |
| `#gap/needs-replication` | Single-study claim |
| `#gap/contradictory-evidence` | Multiple sources disagree |
| `#gap/no-mechanism` | Effect observed; mechanism unknown |
| `#gap/dose-response-unclear` | Efficacy known, optimal dose not |
| `#gap/long-term-unknown` | Short-term data only |
| `#gap/unsourced` | Claim added without citation; needs source |
| `#stub` | Page exists with frontmatter but no real content yet |

For BIG open questions (multi-study controversies, foundational unknowns), also create a dedicated page in `hypotheses/` or `gaps/`.

---

## Resolving papers (full text)

Every paper is referenced by **DOI** (and PMID/PMC where available) — that is the portable, canonical reference and is the only thing needed to locate a paper.

**Finding papers on a topic — use the web.** For term-based citation discovery, use the public APIs:
- PubMed eutils (`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi`)
- Semantic Scholar (`https://api.semanticscholar.org/graph/v1/paper/search`)
- Crossref (`https://api.crossref.org/works?query=`)
- Europe PMC (`https://www.ebi.ac.uk/europepmc/webservices/rest/search`)

**Author/abstract metadata:** Crossref (`curl -s https://api.crossref.org/works/{DOI} | jq '.message.author'`) and the publisher landing page; for open-access full text, PubMed Central via the `pmc:` field.

**Resolving a DOI to a local full-text PDF** (for verification passes) is handled by a **private local tooling layer** that is intentionally not part of this public repo — it is documented in `CLAUDE.local.md` (git-ignored). Public study/entity pages therefore record only the DOI/PMID, never a local path. When `CLAUDE.local.md` is absent (e.g. a fresh public clone), substitute your own DOI→PDF resolution; nothing in the wiki content depends on a specific tool.

---

## Working with external datasets

Several aging-relevant external datasets are queried by the wiki for population-evidence, tissue-expression, druggability, clinical-trial, and single-cell-aging signals. Authoritative SOPs in `sops/`:

| Dataset | Endpoint | Wiki use | SOP |
|---|---|---|---|
| GTEx | gtexportal.org/api/v2 | tissue-by-age expression | `sops/finding-tissue-expression.md` |
| Open Targets Platform | api.platform.opentargets.org | druggability + target-disease association | `sops/finding-druggability.md` |
| Open Targets Genetics | api.genetics.opentargets.org | GWAS-to-target | `sops/finding-druggability.md` |
| MR-Base / IEU OpenGWAS | api.opengwas.io | causal-inference summary stats | `sops/finding-population-evidence.md` |
| GWAS Catalog | www.ebi.ac.uk/gwas/rest | discovery hits | `sops/finding-population-evidence.md` |
| ClinicalTrials.gov v2 | clinicaltrials.gov/api/v2 | trial status | `sops/integrating-clinical-trials.md` |
| Tabula Muris Senis | figshare DOIs | single-cell aging atlas | `sops/finding-singlecell-aging.md` |
| CellxGene Census | api.cellxgene.cziscience.com | multi-study scRNA | `sops/finding-singlecell-aging.md` |
| CAZy | cazy.org | carbohydrate-active enzyme families + modules | `sops/finding-protein-data.md` |
| MSigDB Hallmark | gsea-msigdb.org | pathway gene-sets cross-check | (no dedicated SOP yet) |
| TRRUST / TFLink | grnpedia.org/trrust / tflink.net | TF→target | (no dedicated SOP yet) |
| AgingAtlas | ngdc.cncb.ac.cn/aging | aging-specific multi-omic | `sops/finding-tissue-expression.md` |
| GenAge HAGR | genomics.senescence.info/genes | curated aging genes (already partially used) | (no SOP — direct lookup) |

---

## Lint pass — periodic health check

Run `sops/lint-pass.md` periodically (and when the user asks). Flag:

- **Orphan pages**: zero inbound links — candidates for retirement or linking
- **Stale claims**: newer source supersedes older claim — update or annotate
- **Contradictions**: claims on different pages disagree — surface, resolve, or tag
- **Missing pages**: a `[[wikilink]]` points to no file — create stub or remove link
- **Frontmatter validation**: pages missing required fields per their type
- **Unsourced claims**: paragraphs without footnotes — chase down sources or tag
- **Decayed external URLs**: external links that no longer resolve
- **Stale literature recency**: per the cadence table below.

### Literature-recency cadence

| Type | Cadence | Required? | When to populate (if optional) |
|---|---|---|---|
| compound | 12 mo | required | — |
| intervention | 12 mo | required | — |
| biomarker | 18 mo | required | — |
| hypothesis | 24 mo | required | — |
| protein | 18 mo | optional | active drug-dev pipelines (JAK1/TYK2/IKKε/TBK1/BCL-xL) or fast-moving aging-specific lit (STAT1/MAVS) |
| pathway | 18 mo | optional | active intervention landscapes (type-I-IFN, JAK-STAT, mTOR) |
| process | 18 mo | optional | fast-moving descriptive-process pages (gut-microbiome-aging-shifts); skip canonical-mechanism (autophagy/apoptosis) |
| microbe | 18 mo | optional | active aging-specific literature (skin/gut microbiome clusters) |
| hallmark | 24 mo | optional | intervention-landscape-heavy hallmarks (disabled-adaptive-immunity) |
| model-organism | 24 mo | optional | species with active mechanistic research (Loxodonta africana, Balaena mysticetus) |
| method | 24 mo | optional | methods with evolving best-practice literature (scRNA-seq workflows, MR sensitivity analyses, LC-MS/MS PTM quantification) |

For required types, pages with the field null are surfaced as a separate bucket, prioritized by inbound-link count. For optional types, null is acceptable; lint only flags when the field is *populated* and exceeds the cadence.

Append findings to `log.md` under a `## [YYYY-MM-DD] lint` heading.

---

## When to create a new page vs extend an existing one

- **New page** if: the entity has its own identity (a specific protein, compound, pathway, process), AND it has at least one citable claim.
- **Extend** if: the topic is a sub-aspect of an existing entity. ("p53's role in apoptosis" goes in `proteins/p53.md` under an `## In apoptosis` heading; doesn't need its own page.)
- **Stub OK** if: the entity is referenced by multiple pages but has no facts yet. Create with frontmatter + one-line description + `#stub` tag.

---

## Protocols directory (personal application content)

The `protocols/` directory holds personal intervention protocols, baseline data, lab records, and tracking — distinct from the research-synthesis content in the rest of the wiki. Protocols are *application of* the research, not research itself.

> **Answering "personal" / applied-health questions** (tracking plans, monitoring schedules, "what should I measure / how do I log this") — even when no per-individual `protocols/` area exists in the current clone — start from [[sops/personal-tracking]]. It carries the device- and vendor-agnostic tracking conventions distilled from real use, so you don't have to invent them.

### Privacy posture

**The wiki is split into two git repositories sharing one working tree (set up 2026-06-01):**

- **Outer repo** (`aging_wiki/.git`) — the **public** research wiki. `protocols/` is listed in `.gitignore`, so it can never be staged here. This is the repo pushed to the public GitHub remote.
- **Nested repo** (`protocols/.git`) — the **private** personal-application repo (people, plans, labs, tracking, personal brainstorming, personal log). Local-only or pushed to a *private* remote. Never goes public.

Git does not recurse into a nested repository, and the `.gitignore` entry makes the exclusion explicit — `git add -A` in the outer repo physically cannot stage `protocols/`. The single working tree means Obsidian sees one vault and `protocols/ → research` wikilinks still resolve.

**Before any commit/push, the public-repo invariant is:** no file outside `protocols/` may contain a person handle (the filename slug of any `protocols/people/` page) or a wikilink whose target lies under the private `protocols/` tree (including `log/protocols`, `protocols/experiments`, and the bare `experiments/`-prefixed wikilink alias that still resolves into it) or the `brainstorming/` tree. The lint pass enforces this; see "Lint pass extensions" below.

**Adding a new person** (handle other than an existing one): the same invariant applies — research pages must never name them. Personal data for the new handle lives only under `protocols/`.

### Directory structure

```
protocols/
├── README.md                       # privacy note + index of people, plans, recent labs
├── people/{handle}.md              # type: person — one per individual
├── plans/{handle}-{plan-name}.md   # type: protocol — one per intervention regimen
├── labs/{handle}-{YYYY-MM-DD}.md   # type: lab-panel — one per discrete draw
├── tracking/{handle}/              # high-frequency continuous streams (CSV)
│   ├── hrv.csv
│   ├── rhr.csv
│   ├── sleep.csv
│   ├── weight.csv
│   ├── cgm.csv
│   └── subjective-log.md           # narrative; daily/weekly notes
├── brainstorming/                  # personal/strategy working drafts (not research-grade)
├── experiments/{slug}.md           # type: experiment — user-authored wet-lab/clinical experiment drafts (private since R51)
├── log.md                          # PRIVATE personal-protocol log (see Parallel logs below)
└── reviews/{YYYY-Q#}.md            # type: assessment — periodic protocol review
```

### Parallel logs (one-way discipline at the log layer)

Logging is split the same way the repos are:

- **Public** `log.md` + `log/*.md` (outer repo) — research-ingest and wiki-maintenance entries **only**. Never names a person, never links into `protocols/` or `brainstorming/`.
- **Private** `protocols/log.md` (nested repo) — all personal-protocol entries: lab ingests, plan changes, tracking updates, personal decisions.

When a research-ingest is *prompted by* a personal question, the public log records the research neutrally ("seeded X — ad-hoc") and the private log records the personal trigger and any personal results. A single log event may therefore produce one entry in each log. The same person-handle / `protocols/` / `brainstorming/` invariant that governs research pages governs the public log files.

### Discrete events vs. continuous streams

- **Markdown pages** for discrete events with rich per-event context: lab draws, DEXA scans, doctor visits, MRI/imaging.
- **CSV files** for continuous streams from devices or self-tracking: HRV, RHR, sleep score, daily weight, daily BP, CGM, step count, Apple Health exports. A markdown page per data point is absurd at these frequencies.

Rule of thumb: if you'd write a sentence about each data point ("post-COVID, fasting"), it's a markdown event. If you wouldn't, it's a CSV row.

### Content discipline

- **Wikilinks INTO research pages are encouraged.** A protocol page should reference `[[rapamycin]]`, `[[cellular-senescence]]`, `[[interventions/pharmacological/senolytics]]` etc. to anchor evidence.
- **Wikilinks FROM research pages back into `protocols/` are NOT used.** Research pages must remain personal-content-free. The link discipline is one-way: `protocols/` → research, never the reverse. Lint pass should flag any reverse direction.
- **Citation discipline does not apply to personal data.** "My fasting glucose was 92" does not need a footnote.
- **Citation discipline DOES apply to evidence claims within protocols.** Any biological claim ("rapamycin reduces SASP at the translational level") should cite a wiki page or external source.
- **`verified:` discipline is repurposed.** For `type: person` and `type: lab-panel`, `verified: true` means values were transcribed from a source document (medical record, lab PDF) and confirmed. For `type: protocol` and `type: assessment`, the `verified:` field is not used — protocols are decisions and reviews are judgments, not facts.

### Page types

See "Page types and frontmatter" above for the full schema of `type: person`, `type: protocol`, `type: assessment`, and `type: lab-panel`.

### Lint pass extensions for protocols/

The lint pass should additionally:
- **Enforce the public-repo invariant** (HIGH priority): no tracked file may contain any of the following — all are privacy/infrastructure-leak blockers:
  1. a person handle (the filename slug of any `protocols/people/` page), or a wikilink whose target lies under the private `protocols/` tree (including `log/protocols`, `protocols/experiments`, and the bare `experiments/`-prefixed wikilink alias) or the `brainstorming/` tree;
  2. the OS username, or any absolute home or external-mount filesystem path;
  3. references to the private paper-archive project — its name, or its CLI subcommands — anywhere. Papers are cited by DOI only; local full-text resolution lives in the git-ignored `CLAUDE.local.md`.
  The exact forbidden token list and the runnable one-line leak-gate are kept in `CLAUDE.local.md` (so this public file never contains the very strings it forbids). Run that gate before every commit; it must return nothing. (Structural directory names like `protocols/` and `brainstorming/` are *described* in this schema doc and in `.gitignore` — that is intentional documentation, not a leak.)
- Flag any wikilink from a research page pointing into `protocols/` (one-way discipline violation) — subsumed by the invariant above
- For `type: lab-panel` pages, validate that analyte-key naming is consistent across panels for the same subject (so Dataview time-series queries work)
- Skip the standard "every claim must cite a primary source" check for personal-data claims, but apply it to evidence claims within protocol pages
- Validate `last-updated:` is present on every protocols page

---

## SOPs

Standard operating procedures live in `sops/`. Index:

- `sops/retrieving-papers.md` — DOI-based paper resolution (local full-text tooling is private; see `CLAUDE.local.md`)
- `sops/scraping-youtube-references.md` — pulling a science-video transcript + reference list as discovery leads (video is never citable; resolve to primaries)
- `sops/extracting-evidence.md` — what to record from a primary source
- `sops/finding-pathway-data.md` — KEGG, Reactome, WikiPathways
- `sops/finding-protein-data.md` — UniProt, NCBI Gene, STRING, BioGRID, CAZy
- `sops/finding-compound-data.md` — PubChem, DrugBank, ChEMBL, HMDB
- `sops/finding-aging-specific.md` — GenAge, AgingAtlas, Open Targets, ClinicalTrials.gov
- `sops/finding-population-evidence.md` — IEU OpenGWAS, GWAS Catalog, Mendelian randomization footnote format
- `sops/finding-tissue-expression.md` — GTEx v2 API, Human Protein Atlas, Aging Atlas; `gtex-aging-correlation:` field
- `sops/finding-druggability.md` — Open Targets Platform/Genetics, DGIdb v5 GraphQL, PROTACDB; `druggability-tier:` decision tree
- `sops/integrating-clinical-trials.md` — ClinicalTrials.gov v2 API; `clinical-trials-active:` field; 6-month refresh cadence
- `sops/finding-singlecell-aging.md` — Tabula Muris Senis, CellxGene Census, `single-cell-aging-signature:` field
- `sops/adding-a-claim.md` — citation conventions, gap markers
- `sops/writing-hypothesis-pages.md` — synthesis-MOC discipline for `type: hypothesis` pages (Mode A evidence-aggregating vs Mode B conceptual-frame; never duplicate atomic-page truth)
- `sops/personal-tracking.md` — device-agnostic guidance on *what* applied-health data to track and *how* to structure it; the starting scaffold for "personal" questions when no per-individual `protocols/` area exists
- `sops/lint-pass.md` — periodic health check protocol

---

## Logging

Append to `log.md` for major events:

```
## [YYYY-MM-DD] ingest | <topic>
- added: page/path
- updated: page/path
- gaps surfaced: ...

## [YYYY-MM-DD] lint
- orphans: N
- contradictions: M
- stale claims: ...
```

This gives the user (and future-you) a chronological audit trail.
