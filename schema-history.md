# schema-history.md — CLAUDE.md schema escalation history

This file records the R-numbered schema escalations, precedent pages, and formalization dates that drove CLAUDE.md to its current form. CLAUDE.md carries the *active* rules; this file carries the *why* and the historical context — useful when a future agent is judging an edge case.

Each entry: **R# — date — precedent page(s)** then a brief description of what was added/changed/clarified.

---

## R13 — Retracted papers convention
- **Precedent:** [[pgc-1alpha]]
- Established the bold "RETRACTED" footnote prefix + replacement-paper pattern for primary sources that have been retracted. Wenz 2009 PNAS muscle-PGC-1α paper was retracted Dec 2016 (retraction DOI:10.1073/pnas.1619713114) due to figure-integrity issues; Leick 2010 became the active citation for muscle-aging-PGC-1α.

## R14 — Causal-graph fields
- Added across hallmark/pathway/protein/process/compound/intervention schema:
  - `mechanistic-tier:` (hallmark) — finer than López-Otín; reflects this wiki's intervention-evidence ranking
  - `intervention-tractability:` (hallmark) — whether a clinically usable modulator exists
  - `caused-by:` / `causes:` (hallmark, pathway, protein, process) — explicit upstream/downstream nodes in the causal graph
  - `druggability-tier:` (pathway, protein, process) — 1=clinical drug exists; 2=high-quality probe; 3=predicted druggable; 4=undruggable. From Open Targets Platform.
  - `translation-gap:` (compound, intervention) — categorical
  - `next-experiment:` (compound, intervention) — free-text one-liner

## R15 — Causal graph driver
- The R14 fields drive [[frameworks/causal-graph-data]]. Surfacing relationships in frontmatter (not only in body prose) enables Dataview queries across the causal structure.

## R20 — niche-signaling field
- Added `niche-signaling:` to type: cell-type — upstream signaling pathways from the niche regulating this cell type (e.g., [[notch-pathway]], [[wnt-beta-catenin]] for satellite cells).

## R21 — Blood-product mode + biologic compound fields
- **Precedents:** [[interventions/blood-product/plasma-exchange]], [[semaglutide]] (peptide compound, C187H291N45O59), [[interventions/gene-therapy/aav-tert]]
- Added `mode: blood-product` to type: intervention — for TPE, young-plasma transfer, NBE, transfusion-medicine aging interventions involving manipulation of blood/plasma constituents (not cells)
- Added `targets:` to type: intervention — protein/pathway-level targets (AAV-TERT → TERT/TERC); empty for complex interventions like CR/exercise
- Added `biologic:`, `who-inn:`, `molecular-formula:`, `molecular-weight-da:` to type: compound — for monoclonal antibodies, peptides, recombinant proteins where SMILES is impractical

## R22 — External-dataset fields
- Added across protein/cell-type/compound/intervention schema:
  - `gtex-aging-correlation:` (protein) — Spearman ρ + sign across GTEx tissues
  - `mr-causal-evidence:` (protein) — MR-validated as causal vs predictive
  - `clinical-trials-active:` (compound, intervention) — integer count from ClinicalTrials.gov v2 API
  - `single-cell-aging-signature:` (cell-type) — free-text summary from Tabula Muris Senis / CellxGene Census
- Established SOPs: `sops/finding-tissue-expression.md`, `sops/finding-population-evidence.md`, `sops/finding-druggability.md`, `sops/integrating-clinical-trials.md`, `sops/finding-singlecell-aging.md`

## R23d — Senolytics class-page aging-context clinical-stage
- **Precedent:** [[interventions/pharmacological/senolytics]]
- Established convention: intervention class pages use *aging-context* `clinical-stage:` (the stage appropriate to the aging indication, not max regulatory stage). Senolytics class = phase-2 even though dasatinib + quercetin individually have other FDA-approved indications.

## R24 — limited-negative + class-page conventions + iPSC empty fields + cell-type verified
- **Precedents:** [[interventions/pharmacological/sirtuin-activators]] (limited-negative), [[interventions/stem-cell-therapy/hsct]] (indication-split safety), iPSCs (ex-vivo cell-type), [[cell-types/hematopoietic-stem-cells]] (HSC prototype)
- **`limited-negative` enum:** Added to `human-evidence-level:` — for classes where multiple Phase 2/3 trials reported null/negative on primary endpoints (STACs / sirtuin-activators class)
- **Pipe-delimited free-text `safety-profile:`:** When indication-split — e.g., `well-established (hematologic disease) | investigational (aging-rejuvenation)` for HSCT
- **Class-page aging-context clinical-stage** (generalizing R23d senolytics): [[mtor-inhibitors]] = phase-2 (Mannick immune-aging trials), not fda-approved (rapamycin transplant indication)
- **iPSC empty fields:** `tissue-of-origin: []` acceptable (reprogrammed from variable somatic sources, not natively resident); `key-aging-phenotypes: []` acceptable when cell type lacks canonical native aging-disease relationship. Document empty-field rationale in body.
- **type:cell-type verified discipline:** Formalized — cell-type pages are atomic content originating quantitative claims (markers, niche, aging changes) and carry the four-field verified block. HSC was the prototype.

## R24e — Antagonistic pleiotropy Mode B
- **Precedent:** [[hypotheses/antagonistic-pleiotropy]]
- Introduced two-mode treatment for type: hypothesis pages:
  - **Mode A — evidence-aggregating** — for hypotheses with specific testable predictions (free-radical, hyperfunction, information theory, negligible-senescence)
  - **Mode B — conceptual-frame** — for hypotheses that organize aging biology without sharp predictions (disposable-soma, antagonistic pleiotropy)
- `key-evidence-for:` and `key-evidence-against:` REQUIRED for Mode A; OPTIONAL for Mode B (lint should suppress missing-field warnings for Mode B pages — `[]` with body-level consistency-with-evidence discussion is acceptable)

## R25 — literature-checked-through field
- Added `literature-checked-through:` to type: compound, intervention, biomarker, hypothesis
- Populated by wiki-seeder on initial draft and wiki-verifier on each pass; date-filtered PubMed + Europe PMC search (last 5-7 yr)
- Lint pass cadences: compound/intervention >12mo, biomarker >18mo, hypothesis >24mo

## R26 — Multiple schema clarifications
- **type:pathway verified discipline:** Formalized — pathway pages originate quantitative claims (key-node activities, EC50s, KO phenotypes) and carry verification like type:protein/process. **Precedents:** [[pathways/mtor]], [[pathways/heat-shock-response]]
- **Pathway aging-context druggability-tier:** Use aging-context tier (clinical drug exists *for an aging indication that engages this pathway*), not max-druggability of any node. Examples: [[mtor]] = tier 1 (rapamycin); [[heat-shock-response]] = tier 2 (HSP90 inhibitors are oncology-only).
- **`not-applicable-somatic` enum:** Added to `mr-causal-evidence:` for proteins whose aging relevance is mediated by somatic mutation (CHIP drivers: DNMT3A, ASXL1, TET2, JAK2 V617F, SF3B1). Germline MR instruments don't capture aging-relevant variation. Cite Genovese 2014 / Jaiswal 2014.
- **`partial` vs `not-tested` threshold:** `partial` = GWAS hits exist for the gene but no MR study has been published (instrument available, study pending); `not-tested` = no instruments described OR MR attempted-but-underpowered.
- **Mode A/B `key-evidence-*` field requirements:** REQUIRED for Mode A; OPTIONAL for Mode B (formalizes R24e treatment in schema).
- **FAPs cell-ontology-id null pattern:** **Precedent:** [[cell-types/fibro-adipogenic-progenitors]]. When no CL term resolves at appropriate granularity (FAPs: CL:0002320 "connective tissue cell" is too broad), set `cell-ontology-id: null` and tag `#gap/needs-canonical-id` with a one-line rationale. Don't force-fit an over-broad term. Lint should aggregate `#gap/needs-canonical-id` into a standing watchlist for periodic CL update sweeps.

## R27 — HSP90 + Waziry-2023 + study identifier escalations
- **HSP90 aging-context druggability-tier:** **Precedent:** [[molecules/proteins/hsp90]] = tier 2 (geldanamycin/tanespimycin advanced-clinical in oncology only, no FDA-approved HSP90 inhibitor and no aging-validated probe). Extends R26 pathway aging-context convention to type:protein.
- **type:study `pmid:` + `pmc:` fields:** **Precedent:** [[studies/waziry-2023-tame-trial]]. Added optional pmid + pmc fields. PMC particularly important — when local PDF is unavailable but paper is OA via PubMed Central, PMC full text is the canonical verification fallback. PMID useful for efetch-based author-list confirmation (Crossref author lists sometimes incomplete; PubMed efetch more reliable for recent papers).
- **UPR inbound count lesson:** ROADMAP `[ ]` counts decay; inbound-count discovery is the canonical seeding-priority source. UPR was listed as 5 in ROADMAP but actual inbound count was 23. Use lint-pass § Step 3 inbound-count discovery for "top seeding targets" queries, not grep ROADMAP `[ ]`.

## R28 — Multiple schema escalations
- **brainstorming/ directory:** Added as repository for conversation-derived working drafts; exempt from citation discipline; banner-flagged as non-wiki-quality; promote threads to atomic pages via standard seeder/verifier workflow.
- **`introduced: proposed` enum:** **Precedent:** [[hallmarks/disabled-adaptive-immunity]]. Added `proposed` to type:hallmark `introduced:` enum — covers candidate hallmarks repeatedly proposed in literature but not yet in López-Otín's official 12. Body must clearly state formal-adoption status in opening paragraph.
- **type:hallmark `literature-checked-through:`:** Optional field; populate when hallmark page is intervention-landscape-heavy (e.g., disabled-adaptive-immunity covers active biotech intervention pipeline that turns over fast). Lint flags >24mo.
- **type:model-organism `literature-checked-through:`:** Optional; populate when species is subject of active mechanistic-research literature. **Precedents:** [[model-organisms/loxodonta-africana]] (TP53-retrogene work — Sulak/Abegglen vs Nunney/Vollrath discordance), [[model-organisms/balaena-mysticetus]] (DNA-repair biology — Firsanov 2025 superseding earlier framing). Lint flags >24mo.
- **Seeder-brief DOI memory unreliable lesson:** Don't assert specific DOIs/years/journals for older primary sources in seeder briefs from training memory; pull from PubMed/Crossref first or delegate. (Lesson: 5 wrong DOIs across 4 pages, 3 on TAK1 alone.)

## R33 — Process literature-checked-through + dietary subdirectory
- **type:process `literature-checked-through:`:** **Precedent:** [[processes/gut-microbiome-aging-shifts]] (2026-05-07). Optional; populate for processes covering fast-moving evidence streams (descriptive-process pages aggregating cohort-level findings); leave null for slow-turnover canonical-mechanism (autophagy, apoptosis). Lint flags >18mo.
- **interventions/dietary/ subdirectory:** Added 2026-05-07. Gut-microbiome-modulation cluster justified its own subdirectory; previously dietary-mode interventions were collapsed into lifestyle/. Examples: prebiotics, postbiotics, fmt.
- **ROADMAP filename false positives lesson:** Check canonical filename + aliases before dispatching ROADMAP items; pathway pages especially prone to filename-mismatch. (R33: scfa/tgf/wnt all false positives.)

## R34 — Mouse-ortholog field formalization (2026-05-13)
- **Precedents:** ~164 pages already used the field (Akt1, Sirt1, Tbk1, etc.)
- Format conventions:
  1. **Default — single symbol:** mouse gene symbol in MGI sentence-case — `Akt1`, `Sirt1`, `Cdkn1a`
  2. **Multi-subunit complexes:** semicolon-delimited with parenthetical human-equivalent annotation — `Rpa1 (RPA70); Rpa2 (RPA32); Rpa3 (RPA14)` or `Mfn2 (MFN2); Mfn1 (MFN1)`
  3. **Paralogs (mouse-duplicated where human has one, or vice versa):** slash-delimited — `Pot1a / Pot1b` (mouse has two POT1 paralogs), `Smad2 / Smad3`, `Ins1 / Ins2`
  4. **Inline annotation when useful:** parenthetical alias — `Hcar2 (also known as Puma-g)`, `Has2 (UniProt P70312; ENSMUSG00000056752)`
- Supports lint-pass cross-checks between human (UniProt P04637 = TP53) and mouse (MGI Trp53) when reconciling cross-species claims. Absence does not invalidate a page; flag `#gap/needs-mouse-ortholog` when cross-species extrapolation discussion exists without an ortholog listed.

## R35 — Pathway kegg-secondary + literature-checked-through
- **Precedent:** [[pathways/type-i-interferon-signaling]] (2026-05-13)
- **`kegg-secondary:`:** For pathways spanning multiple KEGG entries (common for broad signaling axes). Type I IFN signaling spans both hsa04623 cytosolic-DNA-sensing (production phase) AND hsa04622 RIG-I-like (RNA-sensor arm). Primary `kegg:` is the *best single* canonical match; secondaries supplementary. Lint pass should NOT treat secondary KEGG IDs as conflicting when the same ID appears as primary on a different pathway page (per the cgas-sting / type-i-IFN shared-ID case).
- **type:pathway `literature-checked-through:`:** Optional; 18mo cadence. Populate for pages with active intervention landscapes (type-i-interferon-signaling: JAK inhibitors + NRTIs + STING antagonists; mtor: rapalogs; jak-stat-pathway: ruxolitinib/baricitinib/tofacitinib). Mirrors R28 hallmark + R33 process patterns.

## R36 — Protein literature-checked-through
- **Precedents:** [[sting]], [[ikkε]], [[jak1]], [[tyk2]], [[stat1]], [[mavs]], [[ifnar2]] — 7+ pages already populated this field in practice before formalization (2026-05-13)
- Optional; 18mo cadence. Populate for proteins targeted by active clinical-drug-development pipelines (kinases with FDA-approved inhibitors — JAK1/TYK2/IKKε/TBK1; senolytic targets — BCL-xL) or with fast-moving aging-specific research literature (STAT1 SASP-master-regulator papers; MAVS mt-dsRNA aging). Null acceptable for slow-turnover canonical-biology protein pages.

## R38 — type:tissue formalization (2026-05-19)
- **Precedents:** [[tissues/skeletal-muscle]] (~6 months de facto use), then [[tissues/skin]], [[tissues/dermis]], [[tissues/epidermis]] (R38 seeders flagged the documentation gap during the R38–R44 skin-aging coverage campaign)
- Tissue pages are atomic content (originate quantitative claims about anatomy + cell composition + aging changes) and carry verification discipline like type:protein/compound/study. NOT navigational MOCs — those are type:framework.
- Existing tissue pages as of R38 close (8): bone-marrow, brain, heart, myocardium, skeletal-muscle, skin, dermis, epidermis. Future per ROADMAP: hair-follicle, sebaceous-gland, subcutaneous-fat.

## R39 — Study publication-type
- **Precedent:** [[studies/purohit-2016]] (Letter publication type with condensed methods + limited n reporting + no structured abstract)
- Optional field on type:study. Values: `research-article | letter | brief-communication | review | meta-analysis | case-report | editorial | preprint`. Material to evidence-weight interpretation: Letters have condensed methods + limited n reporting; meta-analyses + systematic reviews are higher-weight synthesis. Default `research-article` when unmarked.

## R40 — Study volume/issue/pages
- `volume:`, `issue:`, `pages:` were in use de facto across many study pages before formalization; recorded as optional but recommended frontmatter.

## R41 — Compound chembl-id-active-metabolite
- **Precedent:** [[molecules/compounds/tazarotene]]
- For prodrugs where the active metabolite has a distinct ChEMBL ID. Tazarotene parent ester (CHEMBL1657) → tazarotenic acid active form (CHEMBL1201375). Common pattern in retinoid esters, ester-NSAIDs, statin lactones, peptidomimetic prodrugs. Body must explain the activation cascade + which form binds the target.
- **Canonical-DB memory unreliable lesson:** Don't assert ChEMBL/CAS/UniProt accessions from training memory in seeder briefs; they frequently resolve to *unrelated* compounds/proteins. Examples: bakuchiol ChEMBL → buparlisib; tazarotene ChEMBL → 5,6-dihydroxy-8-aminoquinoline; retinaldehyde ChEMBL → probenecid.

## R42 — Compound pubchem-cid-alt + administration-route
- **Precedents:** [[molecules/compounds/alpha-tocopherol]], [[molecules/compounds/lactic-acid]] (pubchem-cid-alt); [[molecules/compounds/niacinamide]] (administration-route)
- **`pubchem-cid-alt:`:** Optional supplementary CID for stereoisomers / alternative forms with distinct PubChem entries. α-tocopherol natural RRR (14985) + synthetic all-rac (2116); lactic-acid DL (612) + L-form (107689). Body must document which form the page primarily covers + the clinical/pharmacological distinction.
- **`administration-route:`:** Optional; `topical | oral | injectable | inhaled | intravenous | multi-route`. Critical when route changes mechanism qualitatively — niacinamide **topical** (barrier repair, PAR-2 melanin transfer inhibition, anti-inflammatory) ≠ niacinamide **oral** (NAD+ precursor, sirtuin substrate). When mechanisms are conserved across routes, use `multi-route` or leave null.

## R43 — Biomarker model-architecture + multi-model n-cpgs + MR not-applicable
- **Precedents:** [[biomarkers/tapelift-clock-2026]] (multi-model n-cpgs string format: elastic-net 157 + PC 5,021), [[biomarkers/bormann-epidermis-clock-2016]] (SVM architecture, no compact CpG list — uses full 450k probe space), [[biomarkers/skin-autofluorescence-age-reader]] + [[biomarkers/age-reader]] (MR not-applicable)
- **`n-cpgs-or-features:` string format:** For multi-model biomarker pages, accept string-encoded multi-value (e.g., "elastic-net 157 / PC 5021") rather than forcing a single integer. Lint accepts both.
- **`model-architecture:` field:** Optional; `elastic-net | lasso | ridge | svm | pc-clock (Higgins-Chen 2022) | random-forest | composite-other`. When `svm` + `n-cpgs-or-features: null`, the null is structurally accurate (SVM clocks use full probe space with no compact feature list); lint should NOT flag.
- **`mendelian-randomization: not-applicable` enum:** For structural/device biomarkers that aren't germline-instrumentable. Distinct from `not-tested` (no MR done yet but theoretically possible) and `not-applicable-somatic` (R26 enum, somatic-mutation-only proteins).

## R44 — Microbe schema escalations + mode:procedural
- **Precedents:** [[microbiome/malassezia]] (kingdom: fungi, gram-stain: not-applicable-eukaryote, genome-size-mb genus-range), [[microbiome/cutibacterium-acnes]] (oxygen-tolerance: aerotolerant-anaerobic, literature-checked-through), [[microbiome/staphylococcus-epidermidis]] (literature-checked-through), [[interventions/procedural/dermatologic-resurfacing]] (mode:procedural)
- **type:microbe `kingdom:`:** Optional; `bacteria | archaea | fungi | protist`. Critical for Dataview filtering of bacterial vs fungal pages when microbiome cluster grows. Malassezia (Basidiomycota) demonstrated the need vs bacterial precedents (Akkermansia, Cutibacterium, Staphylococcus).
- **`gram-stain: not-applicable-eukaryote`:** Added enum value — fungi lack peptidoglycan, gram-stain is undefined.
- **`oxygen-tolerance: aerotolerant-anaerobic`:** Added enum value — anaerobic-but-tolerates-O2 is a standard microbiology class distinct from facultative. Cutibacterium acnes precedent.
- **`genome-size-mb` string-range:** For genus-level pages where a single number doesn't fit (Malassezia ~7-9 Mb).
- **type:microbe `literature-checked-through:`:** Optional; 18mo cadence. Populate for microbes with active aging-specific literature (skin microbiome cluster, gut microbiome cluster).
- **type:intervention `mode: procedural`:** Device-mediated (lasers: CO2/Er:YAG/1550nm/1927nm; IPL; microneedling; RF; HIFU) or surgery-based interventions whose mechanism is controlled wounding / energy delivery rather than active pharmacological ingredients. Chemical peels can be classified either as `pharmacological` (active acid is the bioactive compound) or `procedural` (controlled wounding is the mechanism) — default to `pharmacological` per `chemical-peels.md` precedent.

## R45 — type:experiment (2026-05-20)
- Pages live in `experiments/` and capture wet-lab or clinical experiments authored by the user (distinct from `studies/`, which holds primary sources extracted FROM).
- Lifecycle: `proposed` (draft) → `accepted` (committed) → `in-progress` (data collection) → `complete` (data analyzed but not published) → `published` (results written up as a type:study page in `studies/`, linked via `published-as:`) → `abandoned` (with reason in body).
- Experiment pages do NOT carry `verified:` — they are proposals/protocols, not facts about the world. Verification discipline kicks in on the downstream `studies/` page when results are published.
- `resolves-edges:` and `resolves-nodes:` are the load-bearing fields connecting an experiment to the causal-graph blocker tracker (see [[frameworks/causal-graph-data]]).
- Pre-registration encouraged but not required for `proposed`; increasingly important as status moves toward `in-progress`. When filed (OSF / ClinicalTrials.gov), set `preregistered: true` + populate `preregistration-doi:`.

## R48 — Biomarker modality: transcriptomic (2026-05-29)
- **Precedent:** [[biomarkers/transcriptomic-clock-tage]] (seeded 2026-05-29 from [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]], *Nature* 2026 — first transcriptomic clock page in the wiki).
- `modality:` enum on `type: biomarker` gains the value **`transcriptomic`** (gene-expression / RNA-based aging clocks). Prior enum covered dna-methylation, proteomic, metabolomic, composite-clinical, imaging, telomere-length, physical-performance — but no RNA modality, despite transcriptomic clocks (Peters 2015, RNAAgeCalc, Tyshkovskiy 2026 tAge) being an established and now mortality-validated clock family.
- A single biomarker page covers the tAge *family* (chronological / normalized-age / expected-mortality / maximum-lifespan / module-specific clocks) rather than one page per sub-clock, because they share training data, software (TACO / `tAge` R package) and a single canonical reference. `n-cpgs-or-features:` accepts the string-encoded multi-value form already permitted under R43.
- **CLAUDE.md status:** `type: biomarker` schema block `modality:` line should add `transcriptomic` on next schema-revision pass. Lint should accept `modality: transcriptomic`.

## R47 — type:tissue literature-checked-through (2026-05-23)
- **Precedent:** [[tissues/bone]] (seeded 2026-05-23; active intervention landscape including senolytics, bisphosphonates, denosumab, romosozumab, teriparatide — all with rapidly evolving clinical evidence)
- `literature-checked-through:` is formally extended as **optional** to `type: tissue` pages, following the same pattern established for `type: process` (R33), `type: pathway` (R35), `type: protein` (R36), `type: hallmark` (R28), and `type: model-organism` (R28).
- Cadence: **18 months** (matching protein/pathway/process; bone clinical landscape turns over at a comparable rate to active-drug-pipeline proteins).
- **When to populate:** tissue pages with active pharmacological intervention landscapes (e.g., bone — senolytics RCTs, anti-resorptives, anabolics; skin — retinoids, procedural interventions). Leave null for canonical-structure tissue pages with slow-turnover evidence (e.g., a new adipose tissue page summarizing basic anatomy).
- Lint should NOT flag null `literature-checked-through:` on `type: tissue` pages — the field is optional. Lint SHOULD flag the field when it is populated and exceeds the 18-month cadence.
- **CLAUDE.md status:** field is already documented in the shared-conventions section for compound/intervention/biomarker/hypothesis; the addition here is precedent for applying the same field to tissue pages. CLAUDE.md `type: tissue` schema block should be updated to note this optional field on next schema-revision pass.

## R46 — type:method (2026-05-20)
- **Precedent:** [[methods/mass-spec-age-hydrolysates]] (R46 pilot)
- Lives in `methods/`. One page per laboratory or analytical technique whose methodological details and limitations recur across multiple study or atomic pages.
- Explicitly distinct from `sops/` (workflow guidance for wiki maintainers) and `experiments/` (specific user-authored experimental protocols).
- Atomic content (originates technical claims about a technique's principle, validation, limitations, and evidence-weight implications); carries verification discipline.
- **Pilot-grade triage:** only seed a methods page when its limitations recur across ≥3 study or atomic pages. Pre-emptive seeding of textbook techniques acceptable (per user direction R46) but should not crowd out evidence-driven coverage.
- **Current Protocols anchoring:** when a Current Protocols chapter exists, cite it in `current-protocols-citation:` and reference it in the Workflow section. The wiki's methods page summarizes for aging-context interpretation rather than reproducing protocol step-by-step.
- **Verification:** cross-check claims against the cited Current Protocols chapter (if any) + canonical methods papers + 1–2 representative aging-context applications.

## R49 — type:organ-system + phenotype verified-discipline fix (2026-06-02)
- **type:organ-system (new page type).** Body-system navigational overlays live in `organ-systems/` (a directory the original directory map reserved but never populated). They are the anatomical counterpart to `type: framework`: they aggregate and link the tissue/organ, cell-type, phenotype, and pathway atomic pages of one body system, and they do **NOT** carry the `verified` block (like frameworks, they originate no primary claims; verification = cross-link integrity).
  - **Rationale:** the `parent-system:` field on `type: tissue` pages (in use since the earliest tissue pages: cardiovascular-system, musculoskeletal-system, integumentary-system, nervous-system, hematopoietic-system) referenced system pages that did not exist, so `[[cardiovascular-system]]`-style links were all broken. The filename of an organ-system page IS the `parent-system:` slug, so those links now resolve.
  - **Frontmatter:** `key-organs`, `key-tissues`, `key-cell-types`, `key-aging-phenotypes`, `related-hallmarks`, `parent-system` (null for top-level; set for sub-systems like central-nervous-system → nervous-system). No verified block.
  - **Index:** [[by-organ-system]] (`type: framework`, in `frameworks/`) is the single top-level index + cross-system Dataview rollup (honors the single-Dataview-framework-page convention rather than per-folder _overview files).
  - **Initial set (11):** cardiovascular, musculoskeletal, integumentary, nervous, hematopoietic, immune (subsumes lymphatic via alias), endocrine, digestive, urinary, respiratory, reproductive. Sparse systems link existing pages + marked `#stub` planned pages; high-value organ anchors (kidney, liver, lung, pancreas, thymus, spleen) seeded as `#stub` `type: tissue` pages.
  - **Glands/organs** (thyroid, parathyroid, kidney, liver, lung, pancreas) live in `tissues/` as `type: tissue` — there is no separate `type: organ`. CLAUDE.md `type: tissue` block updated to note this.
- **phenotype verified-discipline (correcting an earlier omission).** `type: phenotype` was missing from CLAUDE.md's "AI-extracted vs human-verified" required-types list and from the `type: phenotype` frontmatter block, even though 27/28 phenotype pages already carried a `verified` block. Both were corrected (added to the list + the block) during the 2026-06-02 hyperphosphatemia seed. Phenotype pages originate quantitative claims (prevalence, ICD codes, effect sizes, mortality associations) and carry full verification discipline.

## R50 — ROADMAP.md retired (2026-06-02)
- **`ROADMAP.md` deleted; residual forward-intent folded into [[gaps/planned-coverage]].** The file had decayed: ~80% was closed-campaign archive (R31b–R45) duplicating `log/`, and its forward sections hadn't been substantively updated since ~2026-05-20 despite heavy seeding since (bone cluster, organ-systems, etc.). It also disclaimed its own authority throughout and carried stale `[ ]` entries (e.g. `neurodegeneration`, already a page).
- **Why it was superseded** (this generalizes the R27 lesson): seeding is now driven by (1) **inbound-count discovery** — [[lint-pass]] § Step 3, the canonical priority source; (2) **ad-hoc** seeding on new studies/user questions; and (3) **distributed `#stub` markers** at point-of-use (e.g. organ-system MOCs list their own planned pages), aggregated by the missing-page lint. Together these form a *distributed* roadmap that made the central static checklist redundant and decay-prone.
- **What survived into `gaps/planned-coverage.md`:** only proactive intent that the reactive mechanisms miss — topics with zero inbound links (telomere DNA-structure page, melanocortin/neurotrophin/cAMP/SPM/melanogenesis protein clusters, several pathways, the HSP90/UPR/TAK1 proteostasis cluster, Tyshkovskiy long-tail) — plus the still-open cross-page propagation backlog.
- **References repointed:** `.claude/agents/wiki-seeder.md` description (now names inbound-count + ad-hoc + planned-coverage), `sops/lint-pass.md` (§ Step 3 stub-queue destination + `EXCLUDE_FILES`), `index.md` header. Historical `ROADMAP` mentions in `log/` and the R27/R33 lessons above are left as audit record. The earlier R27/R33 "use inbound-count, ROADMAP decays / filename-false-positives" lessons are the precedent this formalizes.

## R51 — experiments/ relocated to private protocols/experiments/ (2026-06-02)
- **`experiments/` (6 `type: experiment` pages + README) moved from the public top-level into the PRIVATE nested repo at `protocols/experiments/`.** Rationale (user, 2026-06-02): the experiment pages had become user-authored working drafts more akin to `protocols/brainstorming/` than to public research — speculative proposals, not extracted facts — so they belong in the private application tree, not the public wiki.
- **`type: experiment` itself is unchanged** (schema, lifecycle, `resolves-edges:`/`resolves-nodes:`/`adds-nodes:` fields all retained); only the home directory + privacy status changed. The page type is still documented in CLAUDE.md § "Page types" alongside the other private-tree types (person/protocol/assessment/lab-panel). When an experiment reaches `published`, its results still graduate to a public `type: study` page via `published-as:`.
- **Link-discipline consequence (the load-bearing part):** the experiment↔causal-graph integration is now **one-way**. Experiment pages may link OUT to public research (incl. `[[frameworks/causal-graph-data]]`), but public pages must NOT link back. The four public inbound references were de-linked, keeping the prose: `frameworks/causal-graph-data.md` (worked-example column, scale table, edge matrix, "Resolving experiments" bullets — experiments now named in plain text as proposed/not-yet-run), `index.md` (the "## Experiments" Dataview section removed entirely), and `phenotypes/chronic-venous-disease.md` (two refs reworded to plain literature-gap statements, no dangling "proposed" antecedent). Per user follow-up, public pages must NOT reference a "private experiments tracker" or an unanchored "proposed" experiment — just state the experimental gap.
- **Leak-gate extended:** the bare `experiments/`-prefixed wikilink alias still resolves into the private tree (Obsidian suffix match), so `experiments` was added to the forbidden-link alternation in `CLAUDE.local.md` and to the public-repo invariant text in CLAUDE.md (both `protocols/experiments` and the bare `experiments/`-prefixed form). Documentation describes these forbidden links in prose with bare backticked paths, never the literal bracket form, to avoid self-matching the gate. `.gitignore` already excludes all of `protocols/`, so the move needed no `.gitignore` change.
