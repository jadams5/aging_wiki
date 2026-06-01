# log/recency.md — recency-refresh sweeps

Sub-file of [[log]] — see parent for index.

## [2026-05-08] recency | dasatinib + quercetin (R34 backfill batch 2)

Literature recency refresh on the foundational D+Q senolytic pair. Both pages were last verified 2026-05-04 against Zhu 2015 / Justice 2019 / Hickson 2019 / Li 2016 PDFs but had no `literature-checked-through:` field. Searches via PubMed eutils + ClinicalTrials.gov v2 API.

### Search hit counts
- PubMed `(dasatinib AND quercetin AND senolytic) AND (2024:2026[dp])`: **171 hits**
- PubMed `senolytic AND clinical trial[pt] AND (2024:2026[dp])`: **11 hits**
- PubMed `dasatinib quercetin (Alzheimer OR osteoporosis OR osteoarthritis OR IPF OR kidney OR frailty) 2024-2026`: **47 hits**
- Top 30 abstracts triaged for D+Q-specific human RCT or major translational signal.

### High-impact findings integrated (6 new primary citations on each page)

1. **Farr 2024 Nat Med** (PMID 38956196, doi:10.1038/s41591-024-03096-2) — Phase 2 RCT n=60 postmenopausal women bone metabolism. Primary endpoint (CTx Δ at 20 wk) **missed**, p=0.611. Exploratory tertile analysis: high T-cell-p16 subgroup showed P1NP +34%, CTx −11% at 2 wk and radius BMD +2.7% at 20 wk. NCT04313634. **First placebo-controlled D+Q RCT to publish; first signal that baseline senescent-cell burden may be a response biomarker.**
2. **Farr 2025 Aging Cell** (PMID 39823170, doi:10.1111/acel.14489) — biomarker companion characterizing T-cell p16_variant 5 vs total p16 (variant 1+5) and a plasma SASP panel as response selectors.
3. **Gonzales 2023 Nat Med** (PMID 37679434, doi:10.1038/s41591-023-02543-w) — SToMP-AD Phase 1 n=5, **CSF dasatinib detection 4/5** (CSF:plasma 0.42–0.92%), quercetin not CSF-detectable. NCT04063124.
4. **Garbarino 2025 Neurotherapeutics** (PMID 40274471, doi:10.1016/j.neurot.2025.e00591) — SToMP-AD biomarker companion (plasma fractalkine + MMP-7 ↑; PBMC IL1β/IL8/JUN/FOS ↓).
5. **Liu 2025 Nat Med** (PMID 40855191, doi:10.1038/s41591-025-03873-7) — COIS-01 Phase 2 n=51 D+Q + anti-PD-1 in HNSCC; 33.3% major pathological response (95% CI 16.6–54.7%); G3-4 AE 4.2%. NCT05724329. First large-scale independent (Sun Yat-sen, not Mayo) D+Q clinical evidence.
6. **Lombardo 2026 PNAS** (PMID 41843680, doi:10.1073/pnas.2524897123) — D+Q induces corpus callosum demyelination in young + aged mice, OPC ER-stress / UPR signature. **New preclinical safety signal** for chronic-cycle senolytic dosing.

### Other notable hits (not integrated, on watchlist)
- Bian/Hickson 2026 EBioMedicine (PMID 41564845) — D+Q in murine DKD (not human, follow-up to Hickson 2019 mechanism).
- Shee 2026 Nat Commun (PMID 42098153) — D+Q+fisetin reduces TB progression in B6.Sst1S mice.
- Multiple 2026 mouse studies (intervertebral disc degeneration, alveolar bone, MASLD fertility, hippocampal cognition) showing broad continuing preclinical signal.

### CT.gov v2 API: `clinical-trials-active`

Query `dasatinib+quercetin+senolytic` filtered to RECRUITING|ACTIVE_NOT_RECRUITING returned **6 trials**: NCT06018467 (SENOSTEO Phase 2), NCT07144293 (SPACE HIV Phase 2), NCT05653258 (snRNA-seq adipose Phase 2/3), NCT04685590 (SToMP-AD Phase 2), NCT07025226 (D+Q+fisetin+TMZ Early Phase 1), NCT04733534 (SEN-SURVIVORS Phase 2). Both pages now carry `clinical-trials-active: 6`.

### Edits

- **molecules/compounds/dasatinib.md**: frontmatter `next-experiment:` rewritten around biomarker stratification, `clinical-trials-active: 6` + `literature-checked-through: 2026-05-08` added, `verified-date: 2026-05-08`, `verified-scope:` extended. Body: new H3 sections for Farr 2024 RCT, Gonzales 2023 SToMP-AD, Liu 2025 COIS-01; new "Active trials as of 2026-05-08" table; new oligodendrocyte demyelination subsection in safety; limitations section updated; 6 new footnotes.
- **molecules/compounds/quercetin.md**: same frontmatter changes. Body: new H3 sections for Farr 2024, Gonzales 2023, Liu 2025; updated trial table; new Lombardo 2026 demyelination subsection; limitations section updated; 6 new footnotes.

### `human-evidence-level:` decision

Kept at `limited` for both. Rationale: Farr 2024 n=60 placebo-controlled RCT **missed primary endpoint**; the exploratory tertile-stratified finding does not meet the "strong" bar (which would require a confirmatory pre-registered biomarker-stratified trial). The Liu 2025 HNSCC trial is in a **different translational frame** (immunotherapy adjunct, not aging-rejuvenation), so it does not move the aging-evidence needle. Considered `limited-negative` per R24 schema since the only RCT primary endpoint was negative — declined because the exploratory subgroup signal is robust enough that "limited-negative" would mis-frame the page (limited-negative is for classes where multiple Phase 2/3 trials reported null/negative for primary endpoints; D+Q has one such trial plus several positive open-label biomarker signals).

### New study pages

None created in this batch. The 6 new citations sit in body footnotes with full bibliographic detail (PMID, DOI, n, design, dose). Promotion to `studies/` pages can be deferred to a focused study-page seeder pass (Zhu 2015 / Justice 2019 / Hickson 2019 / Farr 2024 / Gonzales 2023 / Liu 2025 / Lombardo 2026 are all currently wikilink-referenced from the compound pages but no `studies/<slug>.md` files exist for any of them).

### Propagation watch

Other pages likely affected and worth a propagation pass:
- `interventions/pharmacological/senolytics.md` — D+Q canonical exemplar; should reflect Farr 2024 primary-endpoint-missed result + Liu 2025 immunotherapy-adjunct frame
- `hallmarks/cellular-senescence.md` — same
- `phenotypes/osteoporosis.md` — Farr 2024 trial directly relevant
- `phenotypes/alzheimers-disease.md` (if it exists) — Gonzales 2023 + Garbarino 2025 directly relevant
- `molecules/compounds/fisetin.md` — Shee 2026 TB study used D+Q+fisetin cocktail
- `interventions/pharmacological/senolytics.md` — needs new "preclinical safety signal" section for Lombardo 2026 demyelination

---

## [2026-05-08] recency | rapamycin RAPA-EX-01 incorporation (R34 backfill — first batch)

First page out of the R34-surfaced 59-page `literature-checked-through` backfill bucket. User-provided primary source: Stanfield et al. 2026 RAPA-EX-01 (doi:10.1002/jcsm.70274; PMC13082878; *J Cachexia Sarcopenia Muscle*).

**New atomic page:**
- `studies/stanfield-2026-rapa-ex-01.md` — full atomic study record. `verified: true` with scope: extracted from PMC OA full text (PMC13082878) via web fetch; primary endpoint, sensitivity analyses, all secondary outcomes (incl. four epigenetic clocks: PCGrimAge / SystemsAge / OMICmAge / DunedinPACE), AE summary, and SAE pneumonia case all sourced from PMC HTML rendering. No local PDF read; supplementary materials not checked.

**Pages updated:**
- `molecules/compounds/rapamycin.md` — added RAPA-EX-01 trial section under "Human evidence" after PEARL section; expanded trial table to include both null aging-RCTs side-by-side; added "Pattern note" capturing the two-consecutive-null-RCTs finding; updated Limitations & gaps to flag the contradictory-evidence between mouse continuous-feeding lifespan and human weekly-pulse rejuvenation null results; added `literature-checked-through: 2026-05-08`; updated `verified-date`, `verified-scope`, and `next-experiment` fields.
- `hypotheses/hyperfunction-theory.md` — expanded the existing PEARL section into "PEARL 2025 + RAPA-EX-01 2026: two null human aging-RCTs" with full per-trial summaries; updated extrapolation-table "Replicated in humans?" row; added `literature-checked-through: 2026-05-08`. Pattern interpretation: neither trial falsifies hyperfunction theory in principle, but both raise the bar for the human translational claim at the n=1-biohacker dose range (5–10 mg/week intermittent).
- `interventions/pharmacological/mtor-inhibitors.md` — added "RAPA-EX-01 trial 2026" subsection under Aging evidence; added class-level pattern note; updated compound table rapamycin row; added `literature-checked-through: 2026-05-08`; updated `verified-scope`.

**Key trial findings incorporated:**
- Primary endpoint (30-s chair-stand, ITT): Δ −2.13 reps (95% CI −4.61 to 0.34, p=0.089) — favors placebo, ns at 0.05
- Per-protocol sensitivity (n=15/16): Δ −3.44 reps (p=0.007, Cohen's d −0.90) — significant, favors placebo
- All secondary functional outcomes directionally favored placebo, none significant (grip, 6MWD, SF-36)
- CRP +4.26 mg/L (p=0.152) driven by 2 outliers (17 + 50 mg/L); excluding outliers reduces between-arm difference to <1 mg/L
- 4 epigenetic clocks (PCGrimAge / SystemsAge / OMICmAge / DunedinPACE): mixed non-significant trends; PCGrimAge alone showed directional favorable trend (−2.28 yr, p=0.098) but contradicted by other clocks and functional outcomes
- AE burden 99 vs 63 events (1.57x); 35% drug-related vs 15%; one SAE = community-acquired pneumonia after a single 6 mg dose, drug-relatedness cannot be excluded
- Authors' interpretation: rapamycin's 62-h half-life means 6 mg/week does not produce the on-off mTORC1 pulse the cycling hypothesis requires — drug persists across the training stimulus, blunting adaptation. Result rules out 6 mg/week for combined rapamycin-exercise interventions, doesn't falsify the cycling hypothesis in principle.

**Backfill bucket progress:** 1/59 pages cleared (rapamycin). Bucket remaining: 58.

**Notable:** the verification was via PMC OA HTML extraction (web fetch on `pmc.ncbi.nlm.nih.gov/articles/PMC13082878/`) rather than a local PDF read. The archive system does not yet index this DOI (paper was published 2026-04 and the OpenAlex ingest hasn't picked it up). The `local-pdf:` field is annotated to that effect; future verifier passes may want to re-confirm against the PDF when available.

---

## [2026-05-08] recency+propagation | metformin (R34 backfill + R26c clearance)

**Scope:** Combined R26c propagation backlog (Martin-Montalvo χ², Cabreiro 2013 dose-specific + live-bacteria numerics) and R25 recency refresh (PubMed + Europe PMC + ClinicalTrials.gov v2 API, 2024–2026 window).

**Task A — propagation backlog (R26c) cleared:**

- **Martin-Montalvo 2013** (10.1038/ncomms3192) verified end-to-end against local PDF: added missing **χ²=51.70 for 1% toxic-dose -14.4% mean lifespan, p<0.001** (previously page only carried the χ²=5.46 / 5.83% extension figure for the 0.1% C57BL/6 arm). Added serum metformin concentration (0.45 ± 0.09 mM at 0.1% dose) for in-vivo vs in-vitro dose-extrapolation context.
- **Cabreiro 2013** (10.1016/j.cell.2013.02.035) verified against local PDF: added the **dose-response (25/50/100 mM → +18/+36/+3% mean lifespan; non-monotonic, peak at 50 mM)**, the **live-bacteria-requirement** (axenic culture, UV-killed *E. coli*, and metformin-resistant OP50-MR each abolish or reverse the life-extending effect; -16% on UV-killed, -37% on OP50-MR), and the **folate-disruption mechanism** (5-methyl-THF +116%, p=2.5×10⁻⁶ in *E. coli*) with full citation footnote. Cabreiro 2013 was previously not cited on the metformin page despite being foundational for the gut-microbiome subsection.

**Task B — recency refresh (R25, 2024–2026 window):**

- ~40 abstracts scanned across 5 PubMed esearch queries (general aging/longevity, all-cause mortality + meta-analysis, Mendelian randomization, microbiome, TAME-trial searches).
- **High-impact integrations (3):**
  - **Ivimey-Cook 2025** (Aging Cell, 10.1111/acel.70131): vertebrate meta-analysis of 911 effect sizes / 167 papers / 8 species — rapamycin replicates DR-magnitude lifespan extension in vertebrates, **metformin does not**. Adds significant counter-weight to the rodent-lifespan framing; integrated as new paragraph in "Rodent lifespan evidence" subsection with full footnote.
  - **Chen 2025** (Diabetol Metab Syndr, 10.1186/s13098-025-01825-2): two-sample MR — first MR-causal evidence linking metformin-target action to a human aging phenotype (frailty index β=-0.41, p=0.017); MCI sub-target carries effect; HbA1c only mediates 5.5%. Resolves an existing #gap/needs-replication on the page.
  - **Morin 2024** (Aging Cell, 10.1111/acel.14334): UK Biobank prescription-records analysis; metformin among drugs most strongly associated with reduced all-cause mortality (observational only, doesn't resolve Bannister 2014's confounding issues but extends to UK Biobank cohort).

**TAME trial status (critical correction):**
- ClinicalTrials.gov v2 API direct query of NCT02432287 returned: **trial title = "Metformin in Longevity Study (MILES)", n=16, Phase 4, COMPLETED 2017, last update 2021-05-19**.
- Prior wiki text conflated NCT02432287 with TAME (~3,000 participants, recruiting). This was incorrect. Page corrected: NCT02432287 = MILES pilot, separate from TAME; the TAME 3,000-person trial **does not currently have a ClinicalTrials.gov registration** as of 2026-05-08 — it remains in funding/design phase. Multiple targeted searches (Phase-3 metformin aging composite endpoint; "Targeting Aging with Metformin"; AFAR/Barzilai sponsor) returned no matching active TAME registration. Frontmatter `next-experiment:` field updated to flag the unfunded/unregistered status.

**No new study pages created** (lazy seeding — all integrations cite primary papers via inline footnote with full bibliographic detail; study-page seeding deferred to next inbound-link sweep).

**Frontmatter updates:**
- `literature-checked-through: 2026-05-08` (newly added field)
- `verified-date: 2026-05-04 → 2026-05-08`
- `verified-scope:` extended to enumerate the new verifications (Martin-Montalvo full-PDF reverify, Cabreiro full-PDF verify, three R25 recency papers, ClinicalTrials.gov direct API query for TAME/MILES disambiguation).

**Gaps surfaced:**
- TAME 3,000-person trial registration absent (elevate `#gap/needs-human-replication` tag visibility — without TAME registration, the canonical Phase-4 human-aging-endpoint trial for metformin remains unscheduled).
- The Ivimey-Cook 2025 vertebrate-MA conclusion meaningfully recalibrates the metformin lifespan-evidence base; downstream propagation candidates: [[ampk-activators]] class page, [[caloric-restriction]] (CR-mimetic framing), [[interventions/pharmacological/geroprotectors]] (if/when seeded).
- Cabreiro 2013 should eventually get a dedicated study-page seed; it is foundational for the metformin–microbiome axis and an obvious inbound-link sink for [[dysbiosis]] and any future *C. elegans* aging-mechanism page.

## [2026-05-08] recency | caloric-restriction (R34 backfill batch 1)

**Page:** `interventions/lifestyle/caloric-restriction.md` (highest-leverage page in literature-checked-through backfill bucket; 352 inbound links — most-linked single page in the wiki)

**Search scan:** ~30 CALERIE-specific PubMed hits 2024–2026; ~50 broader CR/aging hits (Europe PMC sort_cited; 2975 total in raw bucket); ~10 rhesus-CR hits; ~25 methionine-restriction hits; 4 CR meta-analyses 2024–2026.

**High-impact findings considered (DOIs):**
- Aversa 2024 *Aging Cell* — doi:10.1111/acel.14038 — CR reduces senescence biomarkers in CALERIE-2 plasma + adipose
- Hastings 2024 *Aging Cell* — doi:10.1111/acel.14149 — telomere-length attrition: ITT NULL, ETT shows transient phase-dependent effects
- Mishra 2026 *Nat Aging* — doi:10.1038/s43587-026-01107-0 — CR lowers C3a/C3 ratio; complement deactivation as immunometabolic checkpoint reducing inflammaging (Dixit lab)
- Li 2026 *Clin Nutr* — doi:10.1016/j.clnu.2026.106625 — organ-specific BioAge (n=185): metabolic −0.63 yr, CV −1.00 yr, whole-body −1.27 yr, immune −0.62 yr at 24 mo; liver modest; kidney NS
- Warmbrunn 2026 *Diabetes Care* — doi:10.2337/dc25-1911 — weight regain (>5% in n=20/190) reverses insulin/IGF-1/BioAge benefits
- Pribic 2025 *NPJ Aging* — doi:10.1038/s41514-025-00254-9 — glycomic age (GlycAge) declines 12–24 mo (n=26 pilot, no concurrent control)
- Orenduff 2026 *iScience* — doi:10.1016/j.isci.2025.114514 — small-RNA mediators of CR; 17 miRNAs altered in both humans + rhesus
- Ivimey-Cook 2025 *Aging Cell* — doi:10.1111/acel.70131 — meta-analysis of 911 effect sizes / 167 papers / 8 vertebrate species; rapamycin matches DR; metformin does NOT
- Considered but not integrated (rhesus mechanistic, redundant with existing Mattison framing): Abou Elhassan 2026 *Mol Syst Biol* (lipidomics); Vitantonio 2026 *Aging Cell* (brain transcriptomics); Clark 2025 *Aging Cell* (adipose reprogramming)
- Considered but lower priority / out of scope: Ryan 2025 *Nat Aging* (CALERIE genomic data resource — pure data-release paper); Fong 2024 *Nat Aging* (PCAge clinical clock — biomarker page material, not CR-specific)

**Edits applied:**
1. Frontmatter: `literature-checked-through: 2026-05-08` added; `verified-date: 2026-05-08`; `verified-scope:` updated to enumerate R34 additions and note abstract-level verification for new footnotes; **`human-evidence-level:` upgraded `limited` → `strong`** (multi-readout BioAge convergence + senescence-biomarker effect + complement-mechanism in same trial).
2. Cross-organism evidence table: added Ivimey-Cook 2025 vertebrate meta-analysis row (DR robust; rapamycin matches; metformin null).
3. New subsection "**CALERIE-2 follow-up analyses (2024–2026)**" added between Spadaro 2022 and Okinawan/observational sections — covers 7 ancillary readouts in bullet form with footnotes.
4. Biomarker effects section: added "Update (2024–2026)" paragraph noting Li 2026 organ-BioAge and Pribic 2025 GlycAge as within-trial corroboration of DunedinPACE direction (#gap/needs-replication clarified to "in a separate CR cohort").
5. CR mimetics section: rapamycin and metformin entries updated with Ivimey-Cook 2025 meta-analysis context.
6. Side effects section: added "Weight regain reverses benefits" bullet citing Warmbrunn 2026.
7. Open question #1 (magnitude transfer): refined with Li 2026 + Pribic 2025 BioAge magnitude bracket (~0.5–1.3 yr over 2 yr at ~12% CR).
8. Eight new footnotes added (`^aversa2024`, `^hastings2024`, `^mishra2026`, `^li2026`, `^warmbrunn2026`, `^pribic2025`, `^orenduff2026`, `^ivimeycook2025`); all carry `verified-scope: PubMed efetch abstract only` notation.

**Before / after numerics for updated claims:**
- Cross-organism magnitude framing: previously "rodents 10–30% mice / 20–50% rats" with `#gap/unsourced` only. After: same row retained, plus dedicated Ivimey-Cook 2025 meta-analysis row covering vertebrates broadly with proper citation.
- DunedinPACE replication status: previously "DunedinPACE CR response has not yet been independently replicated" (no qualifier). After: clarified to "not yet been independently replicated **in a separate CR cohort**", with explicit note that within-CALERIE-2 organ-BioAge and GlycAge converge in the same direction (corroborative, not independent).
- Human evidence level: `limited` → `strong`. Justification: multiple independent ancillary CALERIE-2 analyses 2023–2026 show consistent direction of effect across senescence biomarkers (Aversa 2024), epigenetic clocks (Waziry 2023, Hastings 2024 partial), organ-specific BioAge (Li 2026), glycomic age (Pribic 2025), thymopoiesis (Spadaro 2022), and complement/inflammaging (Mishra 2026). Caveat preserved in body: no mortality endpoint and BioAge units are not lifespan units.

**No new study pages created.** All new citations are footnote-only (`verified-scope: PubMed efetch abstract only`); promotion to standalone study pages deferred to future runs.

**Forward-queue surfacing from R34 batch 1:**
- Aversa 2024, Mishra 2026, Li 2026, Warmbrunn 2026 are anchor-quality candidates for promotion to `studies/` pages on next ingest pass; each is methodologically distinct and likely to be cited from multiple wiki pages (cellular-senescence, complement-pathway, biomarkers/, immunosenescence, weight-regain → adherence pages).
- C3a / C3AR1 / FGF21 / PLA2G7 cross-mechanism: Mishra 2026 ties FGF21-overexpression and Pla2g7-KO to lower C3a; candidate seed for a "complement-aging" mechanism page or for expanding [[chronic-inflammation]] with the C3a checkpoint mechanism.
- Ivimey-Cook 2025 vertebrate meta-analysis is high-yield citation material for [[rapamycin]], [[metformin]], and [[mtor]] pages; consider propagating during a future batch.

## [2026-05-08] recency+propagation | NAD-precursor cluster (R34 backfill + R26c clearance)

Combined recency refresh + R26c propagation-backlog clearance on the NAD-precursor cluster: `molecules/compounds/nmn.md` (60 inbound), `molecules/compounds/nr.md` (59 inbound), `interventions/pharmacological/nad-precursors.md` (34 inbound).

**Task A — R26c propagation backlog: ALREADY CLEAR.** All three target corrections were verified in-place from prior sweeps:
- [[nmn]] Mills 2016 delivery: drinking water (correct, line 103).
- [[nr]] Martens 2018 effect: ~60% over placebo (median NR 12.2 vs placebo 7.7 pmol/mg, p=0.048 one-sided), with explicit note on the class page that the 2.7-fold figure originates from Trammell 2016 n=1 pilot (correctly attributed).
- [[nmn]] / [[nad-precursors]] Yoshino 2021 muscle: page correctly states muscle steady-state NAD+ unchanged + mitochondrial respiratory capacity unchanged + physical function unchanged. Insulin-sensitivity result (25±7%, p<0.01) is the only positive primary-endpoint signal.

ROADMAP entry struck out and annotated; cleared 2026-05-08 (R34).

**Task B — Recency refresh.** PubMed search returned 339 hits (NMN/NR aging 2024–2026); 20 RCTs/meta-analyses; 13 priority abstracts fetched and parsed. Local PDFs verified for Heggelund 2024 (Nat Aging COPD) + McDermott 2024 (Nat Commun NICE PAD); other 7 papers integrated from PubMed abstracts + Crossref metadata pending future verifier pass.

Integrated:
- Heggelund 2024 (Nat Aging COPD; doi:10.1038/s43587-024-00758-1) — sputum IL-8 −52.6% (p=0.030), NAD+ 2-fold rise; first NR primary-endpoint inflammatory hit.
- McDermott 2024 NICE (Nat Commun PAD; doi:10.1038/s41467-024-49092-5) — 6MWD +17.6 m vs placebo (90% CI +1.8, +∞); first positive functional-outcome RCT for NR.
- Takeda 2025 (Aging Cell Werner; doi:10.1111/acel.70093) — first positive RCT in a progeroid disease.
- Brody 2024 (GeroScience MCI; doi:10.1007/s11357-023-00999-9) — null on cognition; NAD+ 2.6× rise.
- Igarashi 2024 (GeroScience NMN; doi:10.1007/s11357-024-01204-1) — primary endpoint null but 4-m walking time + sleep quality improved.
- Schloesser 2026 (Nat Metab three-precursor; doi:10.1038/s42255-025-01421-8) — NR + NMN comparably raise circulatory NAD+; gut-microbiota convert both to nicotinic acid (NA), proposing gut-dependent mechanism. Reframes mechanism debate.
- Tang 2026 (Nutrients BP MA; doi:10.3390/nu18060890) — NMN reduced DBP −2.15 mmHg; SBP −3.94 mmHg in 60+ subgroup.
- Caldo-Silva 2025 (J Cachexia muscle MA; doi:10.1002/jcsm.13799) — class-level null on muscle-functional endpoints.
- Song 2025 (Crit Rev Food Sci glucose/lipid MA; doi:10.1080/10408398.2024.2387324) — strong null on metabolic biomarkers; high RoB in 5/12 studies.

**Task C — Cross-link integrity:** verified clean. nad-precursors.md → [[nmn]] + [[nr]] bidirectional; nmn ↔ nr cross-references intact; no fixes needed.

**Frontmatter:** `literature-checked-through: 2026-05-08` added to all three pages; `verified-date: 2026-05-08` updated; `verified-scope:` extended to document R34 abstract-level integration with PDF-verification deferred for non-locally-archived papers.

**Class-level interpretation as of 2026-05:** disease-specific NR RCTs (COPD inflammation, PAD walking, Werner arterial stiffness) yield positive primary-endpoint signals; meta-analyses across healthy/aging populations show null-to-modest effects on metabolic biomarkers and muscle function. Pattern consistent with "NAD+ precursors help when there's a baseline NAD+ deficit driven by inflammation or pathology, less benefit in metabolically healthy adults." Mechanism may be more gut-microbiota-dependent than initially supposed (Schloesser 2026 reframes Slc12a8/CD73 debate).

**`human-evidence-level:` decision:** stays `limited` for all three pages. NR has expanded disease-specific evidence (3 positive primary-endpoint disease-context RCTs) but trials remain small (n=40–90) and meta-analyses on broader populations remain null. Promotion to `strong` not warranted.

**No new study pages created** (matches existing footnote-stub-only pattern in the cluster — actual studies/ pages are sparse and seeder/verifier batches will create them later).

**Forward-queue surfacing:**
- 9 high-priority NAD-precursor study pages stubbed in footnotes (heggelund-2024, mcdermott-2024, brody-2024, takeda-2025, igarashi-2024, schloesser-2026, tang-2026, caldosilva-2025, song-2025) — candidate batch for next seeder/verifier pass; Heggelund and McDermott PDFs are locally available and high-impact.
- Schloesser 2026 (Nat Metab) is the highest-priority single paper to verify next — it materially reframes the NR-vs-NMN-vs-NAM mechanism question and the Slc12a8 transporter debate (Grozio 2019). Recommend dedicated verifier pass with PDF download + propagation back to [[nmn]], [[nr]], [[nad-precursors]], [[slc12a8]] (stub).
- Tang 2026 BP meta-analysis findings warrant cross-propagation to [[hypertension]] and any cardiovascular MOC.
- Caldo-Silva 2025 muscle null deserves propagation to [[sarcopenia]] and [[stem-cell-exhaustion]].

## [2026-05-08] recency | canakinumab (R34 backfill batch 2)

R34 literature-recency refresh pass on `molecules/compounds/canakinumab.md` (50 inbound). Searched PubMed/Europe PMC/ClinicalTrials.gov v2 for canakinumab + IL-1β-axis aging literature 2024–2026.

**Search hits:** PubMed canakinumab+aging/CV/cancer/inflammaging 2024–2026 = 85 results; CANTOS 2024–2026 = 564 results (broad term match); IL-1β + senolytic/inflammaging/CHIP 2024–2026 = 325 results; ClinicalTrials.gov active canakinumab trials = 14.

**High-impact findings integrated (DOIs):**
- 10.1200/JCO.23.00910 — CANOPY-A primary results (Garon 2024 *J Clin Oncol*, n=1,382; DFS HR 0.94, p=0.258, **negative**)
- 10.1200/JCO.23.00980 — CANOPY-1 primary results (Tan 2024 *J Clin Oncol*; OS endpoint not met, **negative**)
- 10.1016/j.lungcan.2023.107451 — CANOPY-2 primary results (Paz-Ares 2024 *Lung Cancer*, n=237; OS endpoint not met, **negative**)
- 10.1016/j.jtocrr.2025.100859 — CANOPY-N (Lee 2025 *JTO Clin Res Rep*, n=88; MPR rates 2.9% / 17.1% / 16.7% — canakinumab ± pembro **did not improve** vs pembro alone)
- 10.1158/2767-9764.CRC-24-0490 — CANOPY-1+CANOPY-N TME biomarker analysis (Solomon 2025 *Cancer Res Commun*; hypothesis-generating low-T-cell-infiltration subgroup signal)
- 10.1186/s12872-025-05250-1 — He 2025 25-RCT meta-analysis (*BMC Cardiovasc Disord*; IL-pathway-inhibitor subgroup MACE RR 0.86, p=0.02 — class-level confirmation of CANTOS)
- 10.1002/prp2.70251 — Wang 2026 FAERS pharmacovigilance (*Pharmacol Res Perspect*; n=9,262 AE reports; ROR 2.54 for infections; age ≥65 yr → pneumonia/sepsis/cellulitis/neoplasms)
- 10.3389/fcvm.2026.1796328 — Wu 2026 CHIP–CVD review (*Front Cardiovasc Med*; "cardio-hematology" precision-medicine framing)
- NCT06691217 — prospective Phase 2 TET2-CHIP IL-1β inhibition trial (recruiting since April 2026, n=120; MGH-led; primary endpoint perivascular fat attenuation index)
- NCT04789681 (Can-Prevent-Lung), NCT06038526 (CANIFS), NCT05641831 (CCUS-prevention) — three active prevention-setting cancer trials documented

**Edits made:**
1. Frontmatter: `literature-checked-through: 2026-05-08`, `clinical-trials-active: 14`, `verified-date: 2026-05-08`, extended `verified-scope:` documenting R34 abstract-level integration (PDFs not locally archived for any of the 8 newly-cited papers; primary-source PDF verification deferred).
2. New "Status of cancer-signal replication as of 2026-05" subsection within the CANTOS-lung-cancer block — documents the four-trial CANOPY replication failure in therapeutic NSCLC settings + lists the three active prevention-setting trials (Can-Prevent-Lung, CANIFS, CCUS-prevention).
3. New "Real-world post-marketing confirmation (2026)" paragraph in the infection-signal section — Wang 2026 FAERS findings.
4. New "Class-level meta-analytic confirmation (2025)" paragraph after CANTOS primary results — He 2025 meta-analysis.
5. New paragraph in CANTOS-CHIP section — NCT06691217 prospective replication trial + Wu 2026 cardio-hematology framing.
6. Limitations section: reframed "CHIP subgroup finding" gap to note prospective trial now active; added new bullet "CANTOS lung cancer signal failed to replicate in NSCLC therapeutic settings" with `#gap/contradictory-evidence` tag.
7. Added 8 new footnotes (`garon2024canopy-a`, `tan2024canopy-1`, `pazares2024canopy-2`, `lee2025canopy-n`, `solomon2025canopy-tme`, `wang2026faers`, `he2025metaanalysis`, `wu2026chip-review`).

**CANTOS cancer-signal replication status update — KEY CLAIM CHANGE:** The wiki previously said "no lung-cancer-specific replication trial has yet been completed. #gap/needs-replication." This is now materially out of date. **Four prospective NSCLC trials in the Novartis CANOPY program have completed and ALL reported negative primary endpoints**: CANOPY-A (adjuvant, n=1,382), CANOPY-1 (first-line metastatic), CANOPY-2 (advanced post-platinum, n=237), CANOPY-N (neoadjuvant, n=88). The CANTOS lung-cancer signal **does not replicate** in therapeutic-setting NSCLC. Whether the signal reflects a prevention-specific effect remains the open question for ongoing Phase 2 prevention trials (Can-Prevent-Lung, CANIFS, CCUS-prevention). The page's Limitations section now carries `#gap/contradictory-evidence` for this claim.

**`clinical-trials-active:` count update:** added field with value 14 (RECRUITING + ACTIVE_NOT_RECRUITING per ClinicalTrials.gov v2 API; previously not populated).

**`human-evidence-level:` decision:** stays `strong`. CANTOS remains the wiki's single strongest piece of CV-prevention RCT evidence, He 2025 meta-analysis confirms the class-level MACE signal, and Wang 2026 FAERS confirms the safety signal. The cancer-signal replication failure narrows the page's scope of "strong evidence" to cardiovascular endpoints only — not cancer prevention — but `strong` remains appropriate for the IL-1β/CV-inflammation translation. No frontmatter change.

**No new study pages created** — followed the cluster's footnote-stub-only pattern; eight new footnotes are forward-queue stubs for future seeder/verifier passes. Highest-priority single paper to verify on next pass: Garon 2024 CANOPY-A (J Clin Oncol; primary Phase 3 negative result, central to the "cancer signal failed to replicate" claim).

**Forward-queue surfacing:**
- Eight new footnote-stub citations added — candidate batch for next dedicated seeder/verifier pass on canakinumab oncology trials. CANOPY-A (Garon 2024) is the highest-priority single paper to verify; its negative result is now load-bearing on the wiki's cancer-prevention narrative.
- The CANOPY trial cluster (CANOPY-A/1/2/N) suggests a dedicated MOC subsection or hypothesis page on "IL-1β neutralization in oncology — therapeutic-setting failure" may be warranted; no page created in this pass to avoid scope creep.
- NCT06691217 should be re-checked on next 6-month clinical-trials refresh — primary endpoint readout estimated 2028+ but interim signals on perivascular-fat-index could inform the wiki's CHIP page and the [[clonal-hematopoiesis]] entry.

## [2026-05-08] recency | urolithin-A + spermidine (R34 backfill batch 2)

Literature-recency refresh on two CR-mimetic-class autophagy/mitophagy-inducer compounds at top of recency backlog.

**Search hit counts (PubMed, 2024–2026 date filter):**
- Urolithin A: 172 hits (relevance-sorted; 14 RCT-filtered)
- Spermidine: 1,615 hits (8 RCT-filtered for cognitive/cardio/aging)

**Active-trial counts (ClinicalTrials.gov v2 API; RECRUITING + ACTIVE_NOT_RECRUITING):**
- Urolithin A: 17 (was unpopulated)
- Spermidine: 11 (was unpopulated)

**Urolithin A — high-impact findings integrated:**

1. **Denk 2025 Nature Aging** (doi:10.1038/s43587-025-00996-x; PMID 41174221; PMC12618261) — first RCT testing UA against immune aging. n=50 healthy middle-aged, 1000 mg/day × 4 weeks (NCT05735886). Primary endpoint MET: UA expanded peripheral naive-like, less terminally exhausted CD8+ T cells (treatment difference 0.50 percentage points, p=0.0437) and increased CD8+ FAO capacity (p=0.0061). Secondary: increased mitochondrial biogenesis in CD8+, modulated NK and monocyte subsets. **Major addition** — first non-skeletal-muscle UA proof-of-concept; supports immunosenescence mechanism. Industry-sponsored (Amazentis co-authors). Note Author Correction doi:10.1038/s43587-025-01060-4.
2. **Whitfield 2025 Sports Medicine** (doi:10.1007/s40279-025-02292-5; PMID 40839339) — n=42 competitive male distance runners. Primary 3000m TT NULL; lower RPE (p=0.02); lower CK-AUC (p<0.0001). Confirms UA does not enhance performance in already-trained young athletes; supports recovery/anti-inflammatory benefit.
3. **Jamialahmadi 2024 Rev Recent Clin Trials** (doi:10.2174/0115748871279354240209101604; PMID 38415449) — first HFrEF crossover RCT, n=10, 500 mg BID × 4 weeks. NULL for echo measures (LVEF, LVEDD, etc.) and pro-BNP/CRP/glucose. Modest HDL-C improvement only. Underpowered but contradicts mouse cardioprotection at this dose/duration in established disease.

Urolithin A page edits: extended `verified-scope:` to document R34 integration; new section "Human clinical evidence — additional RCTs (2024–2025)" with three subsections; expanded Effects-on-aging-hallmarks table with [[immunosenescence]] row; expanded Active-trials table from 5 to 14 rows; added [[immunosenescence]] to frontmatter `hallmarks:` list; added `clinical-trials-active: 17` and `literature-checked-through: 2026-05-08`. Three new footnotes (`denk2025`, `whitfield2025`, `jamialahmadi2024`) — no study pages created (footnote-stubs forward-queued for next seeder pass). `human-evidence-level:` stays `limited` (Denk + ATLAS positive secondary endpoints; Whitfield + Jamialahmadi null primaries; net no upgrade).

**Spermidine — high-impact findings integrated:**

1. **Schwarz 2022 SmartAge JAMA Network Open** (doi:10.1001/jamanetworkopen.2022.13875; PMID 35616942) — **best-powered human cognition RCT and PRIMARY ENDPOINT NULL.** n=100, 12 months, 0.9 mg/day wheat-germ extract vs placebo, older adults with SCD. Mnemonic discrimination between-group difference −0.03 (95% CI −0.11 to 0.05; p=0.47). Pre-existing wiki text said "trials are ongoing" without naming this completed null-result trial — **this was a significant gap in the human-evidence summary**. Retrospectively published 2022 but missed in initial seeding pass.
2. **Keohane 2024 Nutrition Research** (doi:10.1016/j.nutres.2024.09.012; PMID 39405978) — first PK/safety study of high-purity spermidine trihydrochloride at 40 mg/day × 4 weeks in n=37 men 50–70 yr: minimal effect on circulating polyamines. Raises bioavailability concern.
3. **Thorup 2025 POLYCAD protocol** (doi:10.1186/s13063-025-09176-z; PMID 41168834; NCT06186102) — first powered cardiovascular hard-endpoint RCT (n=187, 24 mg/day × 48 weeks in elderly CAD patients; completion August 2026).
4. **He 2025 CATIS J Am Heart Assoc** (doi:10.1161/JAHA.124.037465; PMID 39817544) — n=619 prospective ancillary cohort; **higher** plasma polyamines associated with **worse** post-stroke cognitive impairment (aOR 1.81 for spermidine quartile 4 vs 1). **Signal is opposite to Bruneck/Kiechl 2018** — `#gap/contradictory-evidence`.
5. **Félix 2024 Antioxidants** (doi:10.3390/antiox13111391; PMID 39594533) — combination supplement (AM3 + spermidine + hesperidin); attribution problem; listed for completeness.

Spermidine page edits: extended `verified-scope:` to document R34 integration; rewrote opening paragraph to surface SmartAge null + bioavailability concern + CATIS contradiction; replaced sparse "Clinical trials" subsection with structured "Clinical trials — completed" / "Clinical trials — ongoing" / "Contradictory observational signal" sections (~150 lines added); rewrote Limitations and gaps (new top three bullets reflect best-powered RCT null + bioavailability + contradictory-signal); added `clinical-trials-active: 11` and `literature-checked-through: 2026-05-08`. Five new footnotes (`schwarz2022`, `keohane2024`, `thorup2025`, `he2025`, `felix2024`) — no study pages created. **`translation-gap:` changed `biomarker-only` → `phase-3-rct-needed`** (POLYCAD is the relevant trial). **`human-evidence-level:` upgraded from `limited` → `limited-negative`** — best-powered cognition RCT was null; signal is now genuinely mixed across endpoints.

**No new study pages created** in this pass — footnote-stubs forward-queued. Highest-priority single paper to verify next pass: **Schwarz 2022 SmartAge** (most load-bearing single new claim — promotes spermidine human-evidence-level downgrade).

**Forward-queue surfacing:**
- Eight new footnote-stub citations across both pages — candidate batch for next dedicated seeder/verifier pass.
- POLYCAD (NCT06186102) re-check at completion (August 2026) will be the most consequential spermidine update since SmartAge.
- Denk 2025 Nature Aging UA-immune-aging trial supports a stub for [[immunosenescence]] hallmark page (currently linked but unpopulated re: UA mechanism).


## [2026-05-08] recency | BCL-xL senolytics + class page (R34 backfill batch 2)

Recency literature refresh on the BCL-xL/BH3-mimetic senolytic axis: `[[fisetin]]`, `[[navitoclax]]`, `[[a1331852]]`, `[[interventions/pharmacological/senolytics]]`. PubMed + Europe PMC + Crossref + ClinicalTrials.gov v2 queries 2024–2026.

**Search hit counts (PubMed 2024–2026):**
- Fisetin senolytic/aging: 107
- Navitoclax/ABT-263 senolytic/aging: 138
- A-1331852: 28
- Senolytic clinical/Phase-2/3/RCT: 669

**High-impact findings integrated:**
- **Klier 2025 NEJM Evidence (10.1056/EVIDoa2400009)** — BEHOLD Phase 2 RCT of UBX1325/foselutoclax (BCL-xL-selective intravitreal senolytic) in DME (n=65). +5.6 ETDRS letters at week 48 vs sham (95% CI -1.5 to 12.7); clean safety (no systemic exposure → no thrombocytopenia liability). **First positive BCL-xL-axis senolytic Phase 2 RCT in humans.** Major class-level update for `senolytics.md` + cross-referenced from navitoclax + a-1331852 as the local-delivery solution to the systemic platelet liability.
- **Mahoney 2026 Aging Cell (10.1111/acel.70500)** — fisetin reverses age-related endothelial dysfunction in aged C57BL/6 mice via reduced CXCL12 SASP factor. First specific SASP factor mechanistically linked to fisetin's vascular phenotype; candidate biomarker for senolytic vascular-endpoint trials.
- **Ji 2026 TROFFi (10.1177/17588359261424668)** — Phase 2 RCT design publication for fisetin in postmenopausal BCa survivors with 6MWD <400 m (NCT05595499; n=88; placebo-controlled; double-blind). First placebo-controlled fisetin senolytic RCT with hard physical-function primary endpoint.
- **Falahatgaroshibi 2026 Pharmaceuticals (10.3390/ph19030431)** — navitoclax post-stroke neuroprotection in young Wistar rats; functional + senescence-marker improvements + on-target thrombocytopenia at therapeutic dose. New senolytic indication context.
- **Delval 2026 Aging Cell (10.1111/acel.70480)** — ABT-263 in aged-mouse influenza; reduces lung/intestinal inflammation + long-term pulmonary sequelae but not viral load. Frames navitoclax as senolytic-adjuvant in aged-host respiratory infection.
- **Novais 2026 Bone Res (10.1038/s41413-026-00526-4)** — **Negative**: navitoclax did NOT improve SM/J mouse intervertebral disc degeneration; D+Q did. Reinforces cell-type-matching framework: disc senescent cells require D+Q-class SCAP, not BCL-xL-axis. Important counter-evidence for the navitoclax-as-pan-senolytic narrative.
- **López 2025 Cell Death Discov (10.1038/s41420-025-02379-y)** — first archive-confirmed direct A-1331852 senolytic study; BH3 profiling shows BCL-xL is conserved dependency across replicative/mitotic/oxidative/genotoxic TIS phenotypes. Partially closes the prior #gap/needs-replication on A-1331852-specific senolytic data.
- **Zhang 2026 NPJ Aging (10.1038/s41514-026-00355-z)** — class-level review of next-generation senotherapy (immune-based, tissue-PROTACs, microbiome). Synthesized into senolytics class page "Recent class-level developments" section.

**Edits made per page:**
- `interventions/pharmacological/senolytics.md` — Added BEHOLD/UBX1325 row to clinical-evidence table; added UBX1325/foselutoclax row to BH3-mimetic family table; added TROFFi row; added "Recent class-level developments (2024–2026)" section covering local-delivery BCL-xL, PROTACs, immune senolysis, microbiome, indication-cell-type matching; updated active-trials count (14); added 3 new footnotes (klier2025, zhang2026, ji2026).
- `molecules/compounds/fisetin.md` — Replaced 2-row trial table with 17-trial active roster + 3 completed; added "Recent mechanistic findings (2024–2026)" section (Mahoney/CXCL12, Numani/topical-diabetic-wounds, class context); added 3 new footnotes (mahoney2026, numani2026, ji2026).
- `molecules/compounds/navitoclax.md` — Updated "Senolysis preclinical only" paragraph to cross-reference Klier 2025 / UBX1325 as the local-delivery solution; added "Recent preclinical findings (2024–2026)" section (Falahatgaroshibi/stroke, Delval/influenza, Novais/IVD-negative, Kohl/HNSCC); added 5 new footnotes (klier2025, falahatgaroshibi2026, delval2026, novais2026, kohl2026); active-trials count = 11 (all oncology).
- `molecules/compounds/a1331852.md` — Added "López 2025" subsection under Senolytic activity documenting first directly-tested A-1331852 senolytic data; updated Limitations section to partially close the prior #gap/needs-replication; added 1 new footnote (lopez2025); cross-referenced UBX1325 as local-delivery BCL-xL-axis precedent.

**Updated `clinical-trials-active:` counts (ClinicalTrials.gov v2 API, 2026-05-08, RECRUITING+ACTIVE_NOT_RECRUITING+ENROLLING_BY_INVITATION):**
- fisetin: **17** (added; previously not populated)
- navitoclax: **11** (added; all oncology indications; zero senolytic-aging trials)
- a-1331852: **0** (added; preclinical tool compound, no clinical translation)
- senolytics class page: **14** (added)

**`human-evidence-level:` rating changes:**
- fisetin — stays `limited`. Trial pipeline expanded substantially but no completed placebo-controlled hard-endpoint RCT yet.
- navitoclax — stays `limited`. New preclinical evidence (stroke, influenza) does not change human-evidence rating; new IVD-negative data (Novais 2026) is a counter-signal but oncology-only as currently used in humans.
- a-1331852 — stays `preclinical-only`. López 2025 strengthens preclinical evidence but no clinical translation.
- senolytics class — stays `limited`. UBX1325/BEHOLD is the strongest single positive Phase 2 signal in the class to date but n=65, single trial, single indication, single drug; not yet "strong" by class.

**`literature-checked-through: 2026-05-08`** stamped on all four pages. `verified-date: 2026-05-08` updated; `verified-scope:` extended on all four pages noting R34 abstract-only integration of new sources (PDFs not end-to-end verified for newly-cited papers).

**No new study pages created** — eight new footnote citations added to the four pages in stub form for future verifier passes. Highest-priority single paper for end-to-end verification on next pass: **Klier 2025 NEJM Evidence (UBX1325 BEHOLD)** — load-bearing on the senolytics class-page narrative as the first positive BCL-xL-axis senolytic Phase 2 RCT, plus carries direct implications for navitoclax/a-1331852 platelet-liability framing.

**Forward-queue surfacing:**
- UBX1325 / foselutoclax warrants its own compound page on next seeder pass (`molecules/compounds/ubx1325.md` or `foselutoclax.md`) — currently only referenced via wikilink to the senolytics class page; carries the field's first positive Phase 2 RCT signal.
- TROFFi (NCT05595499) outcome readout will be load-bearing on fisetin's `human-evidence-level:` rating; revisit when results post.
- Three completed fisetin Phase 2 trials (NCT05416515 carpal tunnel, NCT04313634 skeletal health, NCT04771611 COVFIS-HOME) have unintegrated primary results — flag for next fisetin-specific verifier pass.
- Lint pass should now flag `senolytics.md`, `fisetin.md`, `navitoclax.md`, `a1331852.md` as `literature-checked-through: 2026-05-08` (fresh; ~12 mo refresh window).


## [2026-05-08] recency | reprogramming + AAV gene therapy (R34 backfill batch 2)

**Scope:** literature-recency refresh on the reprogramming + gene-therapy cluster. Three pages refreshed; `literature-checked-through: 2026-05-08` stamped on all.

**Search hit counts (PubMed 2024–2026):**
- partial reprogramming / OSKM + aging/rejuvenation: 86 hits → ~30 abstracts scanned → 8 high-impact 2025–2026 papers integrated
- AAV-TERT / telomerase gene therapy: 9 hits → 4 high-impact 2026 papers integrated (Chang/Juvensis modTERT cluster)
- ClinicalTrials.gov: NCT07290244 (Life Bio ER-100, RECRUITING) + NCT05837143 (MERCURY-DCM Juvensis JV001, ACTIVE_NOT_RECRUITING) confirmed

**High-impact findings considered (DOIs):**
- 10.1016/j.cell.2025.07.031 — Lu/Altos 2025, mesenchymal-drift framework (integrated)
- 10.1038/s44321-025-00265-9 — Schoenfeldt/Ocampo/EPITERNA 2025, chemical reprogramming + C. elegans lifespan (integrated)
- 10.1111/acel.70390 — Mitchell/Gladyshev 2026, chemical-reprogramming in-vivo mouse toxicity (integrated as #gap/contradictory-evidence)
- 10.1016/j.neuron.2025.11.028 — Berdugo-Vega/Gräff 2026, engram-cell OSK cognitive rejuvenation (integrated)
- 10.1038/s12276-026-01662-x — Liu/Wang 2026, intra-articular AAV-OSK osteoarthritis (integrated)
- 10.1161/CIRCRESAHA.124.324909 — Pernomian/Wenceslau/Sinclair 2025, EC-specific lentiviral OSK + hypertension (integrated; lentiviral, noted)
- 10.1016/j.celrep.2025.115879 — Picó/Ocampo 2025, comparative reprogrammable mouse strains (integrated)
- 10.1016/j.stem.2025.12.011 — Haoui/Belmonte/Altos 2026, ex-vivo organ rejuvenation perspective (integrated)
- 10.1111/acel.70268 — Jo/Cha 2025, organ-specific dedifferentiation review (integrated)
- 10.1016/j.ebiom.2026.106203 — Zhao/Chang 2026, AAV9-modhTERT in HF mouse (major; integrated)
- 10.1093/cvr/cvag077 — Zhao/Chang 2026, telomere-recapping mechanism in HF (integrated)
- 10.1016/j.kint.2026.01.022 — Xie/Chang 2026, telomere recapping in CRS4 cardio-renal (integrated)
- 10.18632/aging.206304 — Kato/Conboy 2025, OT+A5i sex-specific lifespan in old frail mice (noted, not partial-reprogramming, not integrated to these pages)

**Edits per page:**

`interventions/gene-therapy/aav-tert.md`:
- `human-evidence-level: none` → `limited` (MERCURY-DCM Phase 1 active)
- `clinical-stage: preclinical` → `phase-1`
- `translation-gap: preclinical-only` → `phase-1-rct-needed`
- `clinical-trials-active:` field added (1)
- New aliases: AAV9-modhTERT, JV001, JV101
- New `mechanisms` entry: `telomere-recapping`
- Lede rewritten to describe MERCURY-DCM (NCT05837143) and the catalytic-dead modTERT^Y707F,D868A^ paradigm
- New § "Catalytically-inactive modTERT — the telomere recapping strategy" added (Zhao 2026 EBioMedicine + Cardiovasc Res; Xie 2026 Kidney Int)
- Regulatory landscape § rewritten: corrected the obsolete "no regulated AAV-TERT trial exists" claim
- `next-experiment` updated to Phase 2 of JV001 in DCM
- 4 new footnotes: zhao2026ebiomedicine, zhao2026cvr, xie2026, mercury-dcm-nct

`interventions/gene-therapy/aav-osk.md`:
- `clinical-trials-active: 1` retained; `literature-checked-through: 2026-05-08` added
- New § "2025–2026 expansion — tissue-specific AAV-OSK applications (R34 recency batch)" added with osteoarthritis (Liu 2026), engram-cell cognitive rejuvenation (Berdugo-Vega 2026), endothelial OSK + hypertension (Pernomian 2025), mesenchymal drift (Lu/Altos 2025), comparative strains (Picó 2025), organ-specific review (Jo 2025)
- 6 new footnotes added (liu2026osk, berdugovega2026, pernomian2025, lu2025md, pico2025, jo2025)

`interventions/stem-cell-therapy/in-vivo-partial-reprogramming-therapy.md`:
- `human-evidence-level: none` → retained (ER-100 trial is safety-only, no human efficacy)
- `clinical-stage: preclinical` → `phase-1` (ER-100 Phase 1 RECRUITING)
- `clinical-trials-active: 0` → `1` (NCT07290244)
- `translation-gap: preclinical-only` → `phase-1-rct-needed`
- `next-experiment` updated to Phase 2 readout from ER-100
- New § "2025–2026 field expansion (R34 recency batch)" added
- Industrial-pipeline table updated: Life Bio status flipped to "Phase 1 RECRUITING NCT07290244"; EPITERNA SA added as 5th company
- 8 new footnotes (lu2025md, schoenfeldt2025, mitchell2026chem, berdugovega2026, pico2025, haoui2026, liu2026osk, er100-nct)

**Updated `clinical-trials-active:` counts:**
- aav-osk.md: 1 (unchanged — NCT07290244)
- aav-tert.md: NEW field set to 1 (NCT05837143 MERCURY-DCM)
- in-vivo-partial-reprogramming-therapy.md: 0 → 1 (NCT07290244 — corrected previous lag)

**`human-evidence-level:` rating changes:**
- aav-tert: `none` → `limited` (Phase 1 MERCURY-DCM ACTIVE_NOT_RECRUITING with primary completion 2025-07-30; safety/dose-finding only, but constitutes the first regulated human exposure)
- aav-osk: `none` (unchanged — ER-100 Phase 1 just opened, no human efficacy yet)
- in-vivo-partial-reprogramming-therapy: `none` (unchanged — same rationale)

**Verification status:**
- All three pages flipped to `verified-date: 2026-05-08`, `verified-by: claude`, with explicit `verified-scope:` documenting which 2025–2026 abstracts were cross-checked via PubMed efetch and which trials confirmed via ClinicalTrials.gov v2 API. Original 2023-era PDF-based primary verification preserved in scope notes.

**No new study pages created.** All new findings cited via inline footnote with full bibliographic detail (DOI, PMID, PMC where OA, model, n, design, key finding, disclosure). Future seeder pass should consider standalone study pages for: Lu/Altos 2025 *Cell* (mesenchymal drift framework), Mitchell/Gladyshev 2026 *Aging Cell* (negative chemical-reprogramming in-vivo), Zhao/Chang 2026 *EBioMedicine* (modTERT proof-of-concept).

**Forward-queue surfacing:**
- The Chang group's catalytic-dead modTERT design merits expansion onto [[tert]] § Therapeutic landscape, and onto [[shelterin]] (TPP1 TEL-patch recruitment is the recapping mechanism). #stub [[shelterin]] still unseeded; high priority.
- Mendelian-randomization or human-genetics evidence on TERT promoter activity in heart failure is not yet integrated into the wiki — relevant to the modTERT translation case.
- The Mitchell 2026 chemical-reprogramming negative result triggers a reconsideration of EPITERNA's translational claims; flag for the chemical-reprogramming entry in [[partial-reprogramming]] when next refreshed.
- Lint pass should verify cross-link integrity for new wikilink target [[shelterin]] (currently stub) and consider whether to seed.

## [2026-05-08] recency | pharmacological class pages (R34 backfill batch 3)

Date-filtered PubMed searches (2024–2026) on three pharmacological-class pages with NULL `literature-checked-through:` fields. All three stamped 2026-05-08; verified-date refreshed; verified-scope amended.

**Search hit counts:**
- AMPK activators query: 75 hits; ~30 abstracts scanned
- Sirtuin activators query: 1,522 hits (broad); narrowed to 74 with SRT2104/STAC/sirtuin-activator filter; ~25 abstracts scanned
- Senomorphics query: 1,444 hits (broad); narrowed to 11 with JAK-inhibitor + SASP/senescent filter; ~15 abstracts scanned + 12-result ruxolitinib-aging filter
- ClinicalTrials.gov v2 spot-checks: ruxolitinib aging/senescence active trials, resveratrol aging/frailty active trials — no senomorphic-or-aging-primary-endpoint registrations identified at the class level

**High-impact findings considered:**
1. Altintas/MacArthur 2026 (doi:10.64898/2026.04.21.719899; PMID 42079053; bioRxiv) — MK-8722 extends *C. elegans* lifespan AMPK-dependently and improves aged-mouse healthspan. Class-level recalibration of the "direct AMPK activators clinically dead" framing.
2. Karim 2025 (doi:10.1080/09637486.2025.2563670; PMID 40990472; *Int J Food Sci Nutr*) — first STAC RCT to show frailty + plasma SIRT1 improvement (n=123, 16 wk, knee OA, 500 mg/d resveratrol). Secondary endpoint, single population — does not overturn limited-negative class rating.
3. Yang 2024 (doi:10.7150/ijbs.96489; PMID 39247818; *Int J Biol Sci*) — ruxolitinib senomorphic in septic cardiomyopathy mouse models; **low-dose Rux comparable to ABT263 senolytic**.
4. Zhao 2025 (doi:10.1002/advs.202410795; PMID 39853717; *Adv Sci*) — IL-6R/JAK2 inhibition targets p21+ senescent chondrocytes in OA.
5. Hao 2025 (doi:10.1002/jsp2.70044; PMID 40046265; *JOR Spine*) — ruxolitinib delays NPC senescence in rat IVD; siRNA-JAK2 phenocopies.
6. Ivimey-Cook 2025 (doi:10.1111/acel.70131) — already integrated on metformin page; cited from ampk-activators.md via §Vertebrate meta-analysis section linking to canonical metformin source per cluster-context guidance.

**Edits per page (one-line each):**
- `ampk-activators.md` — added §Vertebrate meta-analysis (Ivimey-Cook 2025) with metformin-page link; relitigated "direct activators clinically stalled" framing in §Direct vs indirect + §Limitations citing Altintas 2026; added [^altintas2026] footnote; stamped 2026-05-08.
- `sirtuin-activators.md` — added Karim 2025 RCT row to §Human clinical evidence table with explicit "first STAC RCT showing aging-relevant secondary endpoint" framing; retained limited-negative class rating; added [^karim2025] footnote; stamped 2026-05-08.
- `senomorphics.md` — added §Recent preclinical extensions (2024–2025) under §JAK/STAT inhibitors covering Yang 2024 / Zhao 2025 / Hao 2025; flagged Yang's low-dose-Rux ≈ ABT263 senolytic comparison as a senomorphic-vs-senolytic head-to-head data point; added three footnotes; stamped 2026-05-08.

**`human-evidence-level:` rating changes:** none. AMPK activators stays `limited`, sirtuin activators stays `limited-negative`, senomorphics stays `limited`. The Karim 2025 STAC RCT is single-population secondary-endpoint, insufficient to flip the class. The senomorphic 2024–2025 literature is preclinical-only.

**`clinical-trials-active:` updates:** ampk-activators retained at 1 (TAME); sirtuin-activators retained null (no aging-primary-endpoint trial registered); senomorphics field not previously populated — left unset.

**Forward-queue surfacing:**
- Altintas/MacArthur 2026 is a preprint; flag for verification refresh once peer-reviewed publication appears.
- Karim 2025 single-trial frailty signal merits replication watch — if independent OA-cohort or non-OA-elderly RCT confirms within 12–18 months, sirtuin-activator class rating should be re-examined.
- Yang 2024's low-dose-Rux ≈ ABT263 head-to-head finding should propagate to [[interventions/pharmacological/senolytics]] § comparative efficacy when next refreshed.

## [2026-05-08] recency | stem-cell + gene-therapy + plasma-exchange (R34 backfill batch 3)

R34 literature-recency backfill of seven cell-based and gene-based intervention pages with NULL `literature-checked-through:` fields. Date-filtered (2024–2026) PubMed/Europe PMC/Crossref/ClinicalTrials.gov searches; ~150–200 abstracts scanned across all queries; abstract-only verification (no full-PDF retrieval) for new sources.

**Search hit counts (PubMed 2024–2026, primary queries):**
- HSCT-aging: 3553 broad → 0 HSCT/epigenetic-age + 1 stem-cell-transplant/biological-age (PMID 41595261, scope mismatch)
- iPSC-derived (PD/AMD/cardiac): 2187 broad → 14 narrow Phase + 1 bemdaneprocel/PD (PMID 40240592)
- MSC-aging/frailty: 684 broad → 3 allo-hMSC/AD/Phase II + Schiess MSC PD trial (PMID 40891094)
- AAV-follistatin: 18 follistatin/gene-therapy + 38 follistatin/sarcopenia → no new clinical
- AAV-klotho: 14 klotho/gene-therapy + 20 soluble-klotho/cognition → biomarker reviews only
- VERVE-101/102/PCSK9: 92 hits → no full Phase 1 results paper
- Plasma exchange aging: 34 broad → 4 high-relevance hits

**High-impact findings considered (DOIs):**
- 10.1038/s41586-025-08845-y (Tabar 2025 Nature; bemdaneprocel Phase 1 published; n=12; NCT04802733)
- 10.1002/mds.70028 (Schiess 2025 Mov Disord; allo-hMSC PD Phase 2 RCT; n=45; three-infusion arm PP=93.7%)
- 10.1007/s13770-025-00782-1 (Kim 2026 review; 17 MSC-AD trials)
- 10.1177/13872877251375430 (Taragano 2025 J Alzheimers Dis; real-world TPE Argentina; n=32; MMSE 45% slower decline)
- 10.1002/acn3.52235 (Gonzalo 2024 ACN; AMBAR inflammatory-mediator substudy; n=142; FDR-significant CCL11/MIP-1α/IFN-γ reduction)
- 10.2174/0115672050316936240905064215 (Ayasse 2024; AMBAR latent-class post-hoc; p=0.007 in stable subgroup)
- 10.1007/s11357-026-02136-8 (Gulej 2026 GeroScience; plasma-rejuvenation critical review)
- 10.1093/gerona/glag007 (Düvenci Birben 2026; rat heterochronic plasma → lung antioxidant — preclinical only, not integrated; modality differs from TPE)
- 10.1016/j.ekir.2025.07.032 (Nakashima 2025; sKlotho HR 1.74 mortality in n=1241 hemodialysis — biomarker only, not gene-therapy)

**Edits made per page:**
- `hematopoietic-stem-cell-transplantation.md` — stamped `literature-checked-through: 2026-05-08`; verified-scope appended R34 note (no new primary trials change body claims).
- `ipsc-derived-cell-therapy.md` — stamped 2026-05-08; updated bemdaneprocel paragraph to reflect Tabar 2025 Nature publication (replacing "results not published" wording); added `[^tabar2025]` footnote with Phase 1 outcomes; verified-date bumped to 2026-05-08; clarified bemdaneprocel is hES-derived (not iPSC) and that it serves as direct comparator to Doi 2025 Kyoto iPSC trial.
- `mesenchymal-stem-cell-therapy.md` — stamped 2026-05-08; added new §Parkinson's disease — Schiess 2025 Phase 2 RCT subsection (allo-hMSC; PP=93.7% three-infusion arm; two-infusion < placebo dose anomaly); added §MSC therapy in Alzheimer's disease — review summary (Kim 2026); added two footnotes; verified-date 2026-05-08.
- `aav-follistatin.md` — stamped 2026-05-08; verified-scope appended R34 note (no new primary clinical data; FORTITUDE-class trials referenced in seeder brief returned no follistatin-relevant hits — likely a different program). NCT07443826 RECRUITING confirmed.
- `aav-klotho.md` — stamped 2026-05-08; verified-scope appended R34 note (biomarker / observational evidence accumulated; no gene therapy clinical advance; biology unchanged).
- `crispr-base-editing-pcsk9.md` — stamped 2026-05-08; verified-scope appended R34 note (heart-1 full peer-reviewed Phase 1 paper still not published; conference data only). NCT05398029 COMPLETED, NCT06164730 RECRUITING confirmed.
- `plasma-exchange.md` — stamped 2026-05-08; added §Post-AMBAR follow-ups (2024–2025) covering Gonzalo 2024 + Ayasse 2024 + Taragano 2025 + Gulej 2026; added four footnotes; verified-date 2026-05-08.

**`human-evidence-level:` rating changes:** none. HSCT stays `strong` (hematologic frame). iPSC stays `limited` despite Tabar 2025 — Phase 1 only, n=12, no Phase 3. MSC stays `limited` — Schiess 2025 is Phase 2 in PD (not aging frailty). Plasma exchange stays `limited` — Taragano 2025 is non-randomized real-world; AMBAR primary endpoint still missed.

**`clinical-stage:` rating changes:** none. iPSC stays `phase-1` (Tabar 2025 is Phase 1 publication, not advancement). MSC stays `phase-2`. Plasma exchange stays `phase-2`.

**`clinical-trials-active:` updates:** AAV-follistatin retained at 1 (NCT07443826 RECRUITING); CRISPR-PCSK9 retained at 2 (NCT05398029 COMPLETED + NCT06164730 RECRUITING); MSC retained at 2; iPSC retained at 4; AAV-Klotho retained at 0; HSCT retained at null; plasma-exchange field not populated.

**Forward-queue surfacing:**
- VERVE-101 heart-1 full peer-reviewed Phase 1 paper continues to be missing as of 2026-05-08; flag for next R-pass refresh.
- Tabar 2025 NCT04802733 bemdaneprocel paper not in a local paper archive — schedule full-PDF download to permit verification beyond abstract.
- Schiess 2025 NCT04421456 PD MSC trial — flag for a local paper DOI lookup for verification of dose anomaly (two-infusion arm worse than placebo).
- Sumitomo Pharma's CT1-DAP001 (NCT06482268) — Phase 1/2 RECRUITING; readouts expected 2026–2027 will warrant a future iPSC page refresh.
- AMBAR Phase 3 confirmatory trial in mild AD: not yet registered in ClinicalTrials.gov as of 2026-05-08; track for activation.

## [2026-05-08] recency | lifestyle cluster (R34 backfill batch 3)

Date-filtered PubMed searches (2024–2026) across six lifestyle/dietary intervention pages with NULL `literature-checked-through:` fields. All six stamped 2026-05-08; `verified-date` refreshed to 2026-05-08; `verified-scope` amended to note R34 recency-refresh additions.

**Search hit counts (PubMed):**
- ketogenic-diet: 185 hits; ~25 abstracts scanned
- methionine-restriction: 26 hits; all 26 scanned (smallest cluster)
- time-restricted-eating / IF: 235 hits; ~15 abstracts scanned
- heat-exposure (sauna OR heat therapy): 308 hits primary + 22 in narrower sauna RCT search; ~20 abstracts scanned
- exercise + epigenetic age (DunedinPACE/GrimAge/epigenetic-age): 72 hits; ~10 abstracts scanned (narrowed from 8,600 unfiltered)
- sleep + DunedinPACE/epigenetic-age/glymphatic: 22 hits in tight filter; ~10 abstracts scanned

**High-impact findings considered (DOIs):**
1. Bonnechère 2026 (doi:10.3389/fnut.2026.1802531; PMID 42063954) — exogenous-ketone meta-analysis (n=1,602; SMD 0.29 cognition vs placebo, p<0.001).
2. Zhang 2026 (doi:10.1002/alz.71287; PMID 41830497) — late-life MR + brain FGFR1-AMPKα-NF-κB axis required for AD neuroprotection in APP/PS1 mice; FGFR1-knockdown abolishes central effect but spares peripheral metabolism.
3. Parkhitko 2025 (doi:10.1016/j.tem.2025.09.006; PMID 41053925) — Trends Endocrinol Metab review of MR human-translation barriers + emerging MetR-mimetic clinical pipeline.
4. Plummer 2025 (doi:10.1186/s12950-025-00451-z; PMID 40461845) — Orentreich Foundation IMR + selenium reduces inflammation/dermatitis in mice.
5. Ommi 2026 (doi:10.18632/aging.206358; PMID 41790529) — BSO recapitulates SAAR anti-obesity without SAAR bone defects; cysteine restriction (not methionine) drives anti-obesity component.
6. Sheng 2026 (doi:10.1038/s41538-026-00862-z; PMID 42091606) — NHANES TRE × organ-specific biological-age cross-sectional (n=4,890); excessive long/short fasting worsens liver/CV indices, moderate fasting → lower biological-age indices.
7. Natarajan 2026 (doi:10.1093/gerona/glag085; PMID 41888918) — TRF in 18-mo aged mice rescues adipose function (beiging + reduced fibro-inflammation).
8. Geda 2026 TREAD (doi:10.1177/13872877261438520; PMID 41940859) — TRE-in-MCI/AD trial protocol/rationale paper.
9. Bekfani 2026 SAUNA-HFpEF (doi:10.1093/ejhf/xuag082; PMID 41831305) — first prospective sauna trial in HFpEF, n=18 pilot, peak VO2 +2.4 mL/min/kg, multicentre RCT planned.
10. Hamaya 2025 (doi:10.1016/j.ajpc.2025.101082; PMID 41049507) — RCT meta-analysis (20 RCTs passive heating); mostly null effects, SBP −4.11 mmHg in systemic-heating subgroup; dampens RCT-level "human-evidence-strong" framing for sauna mechanistic effects.
11. Stanfield 2026 RAPA-EX-01 (doi:10.1002/jcsm.70274; PMID 41985884) — first sirolimus + exercise RCT in older adults (n=40); rapamycin did not enhance and modestly attenuated functional gains.
12. Li 2026 (doi:10.1097/MD.0000000000048055; PMID 41931321) — MR analysis: walking PA → telomere length β=+0.118 (p=0.01); strenuous exercise → GrimAge β=−1.432 (p=0.036).
13. Shan 2026 (doi:10.1016/j.tjpad.2026.100522; PMID 41763011) — Singapore DaHA cohort: PA → slower GrimAge (β=−0.22, p=0.02); smoking strongest accelerator.
14. Diao 2025 (doi:10.1186/s13148-025-01898-w; PMID 40442824) — Dongfeng-Tongji n=3,566; DunedinPACE mediates 6.2% of sleep-mortality association; first formal mediation quantification.
15. Wu 2025 (doi:10.18632/aging.206306; PMID 40856643) — UK Biobank n=442,664 + MR; MR confirms causal short-sleep effect but not long-sleep effect.
16. Zhang 2026 (doi:10.1186/s13148-026-02068-2; PMID 41821113) — sleep-trait MVMR; daytime napping → +1.08 GrimAge (p=0.046) independent of duration; chronotype (morningness) protects facial aging + cognition.
17. O'Toole 2025 MULTI Sleep Chart (doi:10.1101/2025.08.08.25333313; PMID 40832429) — preprint; cross-omics, cross-organ U-shape with optimum 6.4–7.8 h.

**Edits per page (one-line each):**
- `ketogenic-diet.md` — added §4e exogenous-ketone meta-analysis (Bonnechère 2026); footnote [^bonnechere2026]; literature-checked-through stamped.
- `methionine-restriction.md` — added "2025–2026 mechanism updates" subsection covering Zhang 2026 brain-FGFR1 axis, Parkhitko 2025 review, Plummer 2025 IMR-selenium, Thyne 2025 sex/tissue, Ommi 2026 BSO/cysteine; 5 new footnotes; stamped.
- `time-restricted-eating.md` — added Sheng 2026 (NHANES organ-aging), Natarajan 2026 (aged-mouse adipose TRF), Geda 2026 TREAD; 3 new footnotes; stamped.
- `heat-exposure.md` — added SAUNA-HFpEF pilot (Bekfani 2026) and Hamaya 2025 RCT meta-analysis with explicit caveat that mechanistic RCT base is thinner than KIHD observational signal; 2 new footnotes; stamped.
- `exercise.md` — added Li 2026 MR + Shan 2026 cohort to §Biological age clocks; added new §Exercise + senolytic / mTOR-modulator combinations covering RAPA-EX-01 (Stanfield 2026); 3 new footnotes; stamped.
- `sleep.md` — added §2025–2026 sleep × biological-age-clock cohort and MR evidence covering Diao 2025, Wu 2025, Zhang 2026 MVMR, O'Toole 2025; 4 new footnotes; stamped.

**`human-evidence-level:` rating changes:** none.
- ketogenic-diet stays `limited` (exogenous-ketone meta is cognition-only, not aging-biomarker-validated).
- methionine-restriction stays `limited` (Zhang 2026 is mouse; Parkhitko 2025 explicitly highlights human-translation barriers).
- time-restricted-eating stays `limited` (Sheng 2026 cross-sectional only; Natarajan 2026 mouse).
- heat-exposure stays `strong` — KIHD observational signal unchanged; Hamaya 2025 RCT meta dampens RCT-mechanistic confidence but does not invalidate KIHD; SAUNA-HFpEF strengthens clinical-population intervention base.
- exercise stays `strong` — Stanfield 2026 RAPA-EX-01 negative is for the *combination* with rapamycin, not for exercise itself; MR + cohort findings reinforce existing rating.
- sleep stays `strong` for associative biology — MR data refine causal interpretation (short-sleep causal, long-sleep mostly reverse-causation).

**`clinical-trials-active:` updates:** time-restricted-eating retained at 6; others left unchanged (kept null where previously null).

**Forward-queue surfacing:**
- Multicentre SAUNA-HFpEF RCT being planned per Bekfani 2026 — flag for refresh once registered/published.
- O'Toole 2025 MULTI Sleep Chart is medRxiv preprint — re-verify when peer-reviewed.
- TREAD trial protocol (Geda 2026) — flag for refresh when primary-results paper publishes.
- Ommi 2026 BSO/cysteine-vs-methionine separation has implications for future MR translation studies and warrants propagation to compound page when seeded.
- Stanfield 2026 RAPA-EX-01 should propagate to [[rapamycin]] page on next refresh — first head-to-head test of "cycling hypothesis" with negative-to-mildly-detrimental result at 6 mg/week × 13 wk in older adults.

## [2026-05-08] recency | biomarker cluster (R34 backfill batch 3)

R25/R34 literature-checked-through backfill across all 8 R25-pre-existing biomarker pages. Field is slower-turnover than compounds/interventions, but several material updates landed.

**Search hit counts (PubMed 2024–2026 date-filtered):**
- GrimAge: 394 hits — scanned ~25
- DunedinPACE: 273 hits — scanned ~20
- PhenoAge: 569 hits — scanned ~25 (high overlap w/ GrimAge/DunedinPACE)
- Horvath clock (named): 24 hits
- Hannum clock (named): 153 hits — most overlap multiclock pieces
- Proteomic clock: 737 hits + targeted ProtAge/Argentieri/Goeminne searches
- Leukocyte telomere length (MR/cohort): 160 + 217 hits across two queries
- Frailty Index (Rockwood/Mitnitski): 92 hits

**High-impact findings integrated (DOIs):**

1. **Marcelo-Calvo 2026 METFORAGING** (doi:10.1016/j.eclinm.2026.103874; PMID 42023167) — first metformin × epigenetic-clocks RCT; primary endpoint PhenoAge EAA at 96 wk = −1.02 yr (95% CI −5.30, 3.26; P=0.627); all 11 clocks NS; underpowered (n=40/60). Integrated into PhenoAge (primary endpoint), Horvath, Hannum, GrimAge, DunedinPACE.

2. **Corley 2026 SLIM LIVER** (doi:10.1038/s41514-026-00383-9; PMID 42014432) — 24-wk semaglutide post-hoc in 41 PLWH/MASLD; population DunedinPACE/PCGrimAge ~null on average, but 41% DunedinPACE responders had greater liver-fat reduction (P=0.024). Integrated into DunedinPACE, GrimAge.

3. **Stanfield 2026 RAPA-EX-01** (doi:10.1002/jcsm.70274) — rapamycin + exercise vs exercise; PCGrimAge + DunedinPACE both NS as secondary outcomes. Cross-link confirmed on GrimAge + DunedinPACE pages per task brief.

4. **Rösler 2026 DO-HEALTH cancer** (doi:10.1038/s41514-026-00360-2; PMID 41872206) — 3-yr follow-up; baseline Horvath/Hannum/PhenoAge EAA 3.52–6.77 mo accelerated in incident-cancer participants. Integrated into Horvath, Hannum, PhenoAge.

5. **Tan 2026 TCGA-BRCA** (doi:10.1186/s13148-026-02102-3; PMID 42010703) — first-gen Horvath/Hannum did not separate breast-cancer survival; PhenoAge + GrimAge2 stratified outcomes; only GrimAge1 retained independent prognostic value. Integrated into Horvath, Hannum, PhenoAge.

6. **Argentieri 2024 ProtAge** (doi:10.1038/s41591-024-03164-7; PMID 39117878) — Nat Med UK Biobank 204-protein Olink predictor (n=45,441) + Chinese/Finnish validation (n=3,977 / n=1,990). Has effectively supplanted Lehallier 2019 SomaScan clock as canonical proteomic aging predictor. Integrated into Lehallier page as field-successor section.

7. **Sayed 2025 MyoGlu exercise reversal** (doi:10.1038/s41514-025-00318-w; PMID 41449222) — 12-wk supervised exercise, n=26 men, ProtAgeGap reduced ~10-mo equivalent; CLEC14A & PI3K-Akt/MAPK pathways implicated. First demonstration that proteomic aging clocks are exercise-responsive. Integrated into Lehallier page.

8. **Garst 2026 ProtFI** (doi:10.1016/j.crmeth.2026.101405; PMID 41966686) — Cell Rep Methods; UKB Olink + ¹H-NMR n=40,696; Elastic-Net frailty-trained clock outperforming established aging biomarkers for CVD/grip/self-rated-health; companion ProtMort. Integrated into Frailty Index + Lehallier pages.

9. **Goeminne 2025 organ-specific proteomic age** (doi:10.1016/j.cmet.2024.10.005) — Cell Metab; UKB Olink-derived organ-specific aging; diseases as accelerated aging of specific organismal systems. Integrated into Lehallier page.

10. **Nakao 2026 LTL All of Us + UKB** (doi:10.1038/s41588-026-02567-1; PMID 41896353) — Nat Genet; All of Us n=242,494 multi-ancestry + UKB n=679,972 meta; 234 loci (37 novel vs Codd 2021); 6 novel non-European-specific; 1 novel female-specific; 9 novel rare-variant genes; US geographic clustering (West Coast/Midwest = longer; Southeast = shorter). Roughly doubles known LTL genome-wide architecture. Integrated into LTL page.

11. **Lyu 2026 SPRINT/ACCORD pooled** (doi:10.1161/HYPERTENSIONAHA.125.26397; PMID 41789453) — n=19,230; FI > age for SBP-target discrimination; clinical-utility translation update. Integrated into Frailty Index page.

12. **Beydoun 2026 frailty-mortality mediation** (doi:10.1186/s12916-026-04866-0; PMID 41987221) — NHANES + HRS + HANDLS; GrimAge mediates 33%/16% of frailty-mortality; DunedinPoAm 17%/9%; first/Hannum/PhenoAge limited mediation. Integrated into Frailty Index, GrimAge, DunedinPACE.

**Edits per page:**
- `horvath-clock-2013.md` — METFORAGING null; DO-HEALTH cancer association; TCGA-BRCA non-prognostic; 3 new footnotes; stamped 2026-05-08
- `hannum-clock-2013.md` — METFORAGING null; DO-HEALTH cancer; TCGA-BRCA non-prognostic; 3 new footnotes; stamped
- `phenoage-2018.md` — METFORAGING (primary endpoint); DO-HEALTH cancer; TCGA-BRCA prognostic; 3 new footnotes; stamped
- `grimage-2019.md` — RAPA-EX-01, METFORAGING, SLIM LIVER subsections; 4 new footnotes; stamped
- `dunedinpace-2022.md` — RAPA-EX-01, METFORAGING, SLIM LIVER subgroup-positive, Beydoun mediation; 4 new footnotes; stamped
- `lehallier-proteomic-clock-2019.md` — Argentieri ProtAge field-successor section, Sayed exercise reversal, Garst ProtFI, Goeminne organ-specific; 4 new footnotes; stamped
- `telomere-length-leukocyte.md` — Nakao 2026 multi-ancestry LTL GWAS; 1 new footnote; stamped
- `frailty-index.md` — Lyu 2026 BP target discrimination, Beydoun mediation, Garst ProtFI; 3 new footnotes; stamped

**`intervention-responsive:` field updates:** none. DunedinPACE remains `yes` (CALERIE-2 anchor); SLIM LIVER subgroup signal does not yet warrant rating change. PhenoAge stays `partial` (DO-HEALTH omega-3 + METFORAGING null balance). Others unchanged.

**`human-evidence-level:` rating changes:** none. All 8 pages stay at their previously assessed level.

**RAPA-EX-01 cross-link confirmation:** documented on GrimAge (PCGrimAge null secondary outcome) and DunedinPACE (DunedinPACE null secondary outcome) pages with study wikilink.

**Forward-queue:**
- METFORAGING is underpowered; flag for refresh when adequately powered metformin × epigenetic-clock RCT publishes
- Argentieri ProtAge merits a dedicated biomarker page given it has supplanted Lehallier 2019 as canonical proteomic clock; suggest adding to ROADMAP
- ProtFI is generationally distinct from ProtAge; flag for separate biomarker page if it accumulates more cross-validation
- Goeminne 2025 organ-specific proteomic aging — emerging framework; monitor for canonical paper

## [2026-05-08] recency | hypothesis cluster (R34 backfill batch 3)

**Goal:** literature-recency refresh for all 7 hypothesis pages with NULL `literature-checked-through:` field. 24-month cadence; date-filtered PubMed searches over 2024-2026.

**Search hit counts (PubMed esearch):**
- hyperfunction theory: 4 (low — but all 4 directly relevant: Salnikov 2026, Golubev 2025 Dilman, Aronoff & Trumble 2025, Barzilai 2025 memorial review)
- information theory of aging: 95 (high — partial-reprogramming literature is very active)
- mitohormesis: 21
- free-radical theory: 21
- antagonistic pleiotropy: 35
- disposable soma: 16
- negligible senescence (NMR/bowhead/hydra): 58

**High-impact findings integrated:**
- Hyperfunction (light update; was just-touched 2026-05-08): Aronoff & Trumble 2025 (10.1093/emph/eoaf010) — "Goldilocks zone" + "species constraint" caveats; Salnikov 2026 (10.3389/fragi.2026.1735269) — hyperfunction-as-downstream-of-epigenetic-ontogenesis (cross-link to information-theory).
- Disposable soma: Hukkanen 2026 *Nat Commun* (10.1038/s41467-025-67798-y) — Finnish Twin Cohort n=14,836 women + n=1,054 PCGrimAge biological-age subset, explicit support for disposable-soma in modern humans (inverted-U: high-parity AND nulliparous accelerated); Tschirren 2026 *Proc Biol Sci* (10.1098/rspb.2025.2908) — experimental quail selection; Romero-Haro 2025 companion telomere mosaic.
- Antagonistic pleiotropy: **Sanchez 2026 *Nature*** (10.1038/s41586-025-09923-x) — Foxo1/Trim63 single-gene AP demonstration (cleanest molecular AP since Tyner 2002 p53); Kobayashi 2026 *Reproduction* — mTORC1 endometrial AP; **Bega & Hadany 2026 *Ecol Evol*** (theoretical Hamilton extension); **Ringel 2025 *Biol Rev*** (optimization-theory taxonomy — flagged as candidate framework reorganization); Gems 2025 *Aging* (multifactorial two-stage).
- Information theory: **Berdugo-Vega 2026 *Neuron*** (10.1016/j.neuron.2025.11.028) — Gräff lab EPFL non-Sinclair systemic OSK cognitive rejuvenation in aged + AD-model mice (substantially mitigates single-lab-dominance concern); Yan 2026 *J Mol Cell Cardiol* — cardiac OSK regeneration; Núñez-Quintela 2026 + Adams 2025 reviews; cross-link from hyperfunction-theory § Salnikov 2026.
- Mitohormesis: Bresilla 2025 *Aging Cell* (Madreiter-Sokolowski + Ristow labs — mcu-1 *C. elegans* + human-fibroblast extension); Chivite 2026 *Cell Metabolism* (endothelial Mfn2 mammalian healthspan); Kim 2025 USC GeroScience (UPRmt-not-sufficient deconvolution); Yan 2026 *Aging Cell* (ALA-PDT skin photoaging); Machado 2025 *Ageing Res Rev* (SESN2 review); Sterling 2026 *Genome Biol Evol* (cross-vertebrate mtDNA — also free-radical counter-evidence).
- Free-radical theory: Geng 2025 *Redox Biol* (Sirt2/Sod1 DKO progeroid synergy refining single-KO null); Sterling 2026 (mtDNA spectrum counter); Liu 2026 + Ferdowsi 2026 reviews.
- Negligible senescence: 9 new footnotes — Regnault 2026 (NMR hemostatic age-stability), Tanes 2026 *Cell Reports* (NMR microbiome age-stability), Du 2026 *Sci Bull* (NMR cGAS HR repair), Gutierrez-Vargas 2026 *NAR* (NMR ribosome cryo-EM), Adachi 2026 (NMR skin ECM), Pearson 2026 *J Pathol* (NMR gut barrier), Paniagua 2026 *Mol Oncol* (bowhead whale commentary), **Chiavacci 2026 *Aging Cell*** (Greenland shark cardiac fibrosis/lipofuscin/3-NT — important "resilience-not-absence" reframing), Baker 2026 (lake sturgeon longevity revision).

**Edits per page:**
- `hypotheses/hyperfunction-theory.md` — 2 new footnotes; new "2025 evolutionary-medicine integration" + "Salnikov 2026" subsections; stamped.
- `hypotheses/disposable-soma-theory.md` — 3 new footnotes; new bullet under "What it explains well"; stamped.
- `hypotheses/antagonistic-pleiotropy.md` — 5 new footnotes; new Sanchez 2026 + Kobayashi 2026 bullets in "What it explains well"; new "2026 theoretical refinements and tensions" section; stamped.
- `hypotheses/information-theory-of-aging.md` — 5 new footnotes; new Berdugo-Vega + Yan + Núñez-Quintela + Adams subsections under Evidence supporting; "Single-lab dominance" updated to note partial mitigation; cross-link to hyperfunction-theory Salnikov; stamped.
- `hypotheses/mitohormesis.md` — 6 new footnotes; new "2025–2026 evidence updates" subsection under Evidence supporting; stamped.
- `hypotheses/free-radical-theory-of-aging.md` — 4 new footnotes; new "2025–2026 evidence updates" section before "What would update this hypothesis"; stamped.
- `hypotheses/negligible-senescence.md` — 9 new footnotes; new "2025–2026 evidence updates: NMR mechanism extensions and comparative-biology candidates" section; stamped.

**Candidate `status:` changes flagged for user decision:**
1. **Information theory of aging** — currently `active`. The Berdugo-Vega 2026 *Neuron* + Yan 2026 cardiac independent-lab demonstrations meaningfully mitigate the single-lab-dominance concern that was the principal qualifier in the previous status reasoning. Candidate reclassification: keep `active` but consider strengthening status reasoning. **Not auto-changed.** No human safety-trial data has emerged; the strong causal version of the hypothesis remains preclinical.
2. **Negligible senescence** — currently `contested`. Chiavacci 2026 Greenland shark data (canonical aging hallmarks PRESENT despite extreme longevity) reinforces the "resilience-not-absence" reframing — supports keeping `contested` and possibly clarifying status reasoning to highlight that "negligible senescence" as a *strong* claim (no aging hallmarks at all) is increasingly hard to defend, while a *weak* claim (resilience to molecular hallmarks despite their accumulation) is well-supported. **Not auto-changed.**
3. **Antagonistic pleiotropy** — currently `active-frame`. Sanchez 2026 *Nature* provides the cleanest single-gene AP demonstration since Tyner 2002 p53 — supports keeping `active-frame` (no taxonomic change). However, Ringel 2025 *Biol Rev* proposes that AP/MA/disposable-soma are subsumed under broader "optimization theories"; if user finds Ringel's taxonomy compelling, this could prompt a meta-level reorganization across multiple hypothesis pages. **Not auto-changed.**

**Cross-links added:**
- hyperfunction-theory ↔ information-theory-of-aging via Salnikov 2026 (hyperfunction-as-downstream-of-epigenetic-ontogenesis).
- mitohormesis → free-radical-theory via Sterling 2026 (cross-vertebrate mtDNA mutation pattern).
- antagonistic-pleiotropy ↔ disposable-soma → negligible-senescence via Bega & Hadany 2026 theoretical extension (model accommodates negligible senescence within the AP/MA framework).

**Verification status (R34 batch):** all new additions are abstract-level verification only (PubMed efetch); local PDFs not yet downloaded for any of the 25+ new citations. Verifier pass to follow if/when full-text downloads are scheduled.

**Forward-queue surfacing:**
- SESN2 atomic page would benefit the mitohormesis page (gap tagged in body).
- Berdugo-Vega 2026 *Neuron* is high-impact — candidate for dedicated study page (would strengthen information-theory-of-aging key-evidence-for array).
- Sanchez 2026 *Nature* is similarly high-impact — candidate for dedicated study page (single-gene AP demonstration).
- Ringel 2025 *Biol Rev* "optimization theories" framing should be revisited if user wants to evaluate framework-level reorganization.

## [2026-05-08] recency | GLP-1 + niche compounds (R34 backfill batch 4)

R34 backfill batch 4: literature-recency refresh on 5 R25-pre-existing pages with NULL `literature-checked-through`. Date-filtered PubMed searches (2024–2026); abstract-level verification via PubMed efetch.

**Search hit counts (date-filtered):**
- semaglutide × aging/AD/CV/mortality: 1,116 (top 30 scanned + targeted EVOKE/SOUL queries)
- GLP-1 class × aging/sarcopenia/CV: 778 (top 30 scanned)
- empagliflozin × aging/cognitive/mortality/frailty: 542 (top 30 + meta-analysis follow-ups)
- lonafarnib/HGPS/progeria: 475 (top 30 scanned + combination/ASO queries)
- paroxetine/FIASMA × aging/senescence: 20 (full set scanned)

**EVOKE / EVOKE+ Phase 3 status:** YES — REPORTED, NEGATIVE. Cummings et al. *Lancet* 2026 (doi:10.1016/S0140-6736(26)00459-9, PMID 41865758). n=3,808; CDR-SB at week 104: difference −0.08 (p=0.57) evoke; 0.10 (p=0.46) evoke+. Both trials discontinued. Largest aging-rejuvenation-relevant Phase 3 GLP-1 endpoint failure to date.

**High-impact findings integrated per page:**

- **`molecules/compounds/semaglutide.md`** — Added EVOKE/EVOKE+ negative AD result as new geroprotective-angle subsection; new footnote `[^cummings2026]`. Stamped 2026-05-08.

- **`interventions/pharmacological/glp1-agonists.md`** — Added 4 new trial subsections: SOUL (McGuire 2025 *NEJM* doi:10.1056/NEJMoa2501006, PMID 40162642; n=9,650 oral semaglutide T2D + ASCVD/CKD; MACE HR 0.86, p=0.006); SUMMIT-tirzepatide-HFpEF stratification (Packer 2025 *JACC* doi:10.1016/j.jacc.2025.06.058; n=731 HFpEF + obesity; CV-death-or-HF-event HR 0.62; effect consistent with vs without diabetes despite differential weight loss); STEP-HFpEF age-spectrum (Pandey 2025 *EJHF* doi:10.1002/ejhf.70049, PMID 41290376; pooled n=1,145; 25.5% ≥75 yr; efficacy + safety preserved across age strata); EVOKE/EVOKE+ negative AD. Four new footnotes. Stamped 2026-05-08.

- **`molecules/compounds/empagliflozin.md`** — Added Khalid 2026 SGLT2i-in-elderly-HF meta-analysis (doi:10.1016/j.archger.2026.106138, PMID 41544527; n=20,844 ≥65 yr; all-cause mortality HR 0.81; HF hospitalization HR 0.73). Brief mention of Yang 2026 age-prescribing-disparity context. New footnote `[^khalid2026]`. Stamped 2026-05-08.

- **`molecules/compounds/lonafarnib.md`** — Added "Emerging therapeutic landscape" subsection citing Pruthvi Raj 2026 *Curr Gene Ther* review (doi:10.2174/0115665232415170251130041834, PMID 42099136). Confirms lonafarnib remains only FDA-approved DMT; details emerging strategies (gene editing, ASOs, ICMT inhibitors, angiopoietin-2). New footnote `[^pruthviraj2026]`. Stamped 2026-05-08.

- **`molecules/compounds/paroxetine.md`** — Added "Direct lifespan data — C. elegans" section citing Almotayri 2026 *Exp Gerontol* (doi:10.1016/j.exger.2025.113022, PMID 41500410). Hormetic dose-response; lifespan extension at low dose, abolished by high-glucose diet, independent of 5-HT/DA/insulin signaling — argues for non-canonical mechanism (FIASMA candidate). New footnote `[^almotayri2026]`. Stamped 2026-05-08.

**`human-evidence-level:` rating changes:**
- semaglutide: unchanged (`strong`) — EVOKE/EVOKE+ negative AD result is a *failure-of-translation-to-AD-endpoint* but does not reduce evidence for the established cardiometabolic indications. Adding `limited-negative` would over-claim.
- glp1-agonists: unchanged (`strong`) — same reasoning as above.
- empagliflozin: unchanged (`strong`) — Khalid 2026 reinforces `strong` with age-stratified meta-analytic confirmation.
- lonafarnib: unchanged (`strong` for HGPS).
- paroxetine: unchanged (`limited`) — C. elegans signal does not warrant re-grading; mammalian data still required.

**`clinical-trials-active:` updates:** Field absent on all 5 pages in current schema state; not retroactively populated this batch.

**Cross-cluster note:** EVOKE/EVOKE+ negative result is the most consequential finding in this batch. Forward-queue: candidate for dedicated `studies/cummings-2026-evoke-evoke-plus-semaglutide-ad.md` study page given its likely impact on the GLP-1-as-AD-therapy literature and on the [[neurodegeneration]] / [[alzheimers-disease]] entity pages (if/when seeded).

**Verification status (R34 batch 4):** all new additions are abstract-level verification only (PubMed efetch); local PDFs not yet downloaded. Verifier pass to follow when full-text retrieval is scheduled. Cluster also surfaces a cluster-wide forward-queue item: re-checking SUMMIT, FLOW, SOUL primary publications for full-PDF cross-verification.

## [2026-05-08] recency | mitochondrial + CR-mimetic compounds (R34 backfill batch 4)

R34 backfill batch 4 (continuation): literature-recency refresh on 4 R25-pre-existing compound pages (mitochondrial-function + CR-mimetic cluster) with NULL `literature-checked-through`. Date-filtered PubMed searches (2024–2026); abstract-level verification via PubMed efetch.

**Search hit counts (date-filtered, PubMed):**
- creatine × aging/sarcopenia/cognitive × RCT/meta-analysis: 110 (top 30 scanned + 12 sarcopenia-meta-analysis subset)
- taurine × aging/longevity/Singh/Yamazaki/lifespan: 139 (top 30 scanned); taurine × replicat/Fernandez/de Cabo: 53; taurine × meta-analysis: 45 (top 15 of subset scanned); Yadav-author × taurine × aging 2024–2026: **0 hits — no Singh-2023 lifespan replication published**
- EGCG × aging/longevity/clinical/trial: 763 (top 30 scanned + 18 cardio/cognition/mortality meta-analysis subset); EGCG × progeria 2024–2026: **0 hits**
- elamipretide × 2024-2026 (any): 172 (top 30 scanned + 64 aging/HF/Barth/myopathy/AMD subset)

**High-impact findings integrated per page:**

- **`molecules/compounds/creatine.md`** — Added 2024-2026 update row to dose-response table covering 4 new meta-analyses: Davies 2024 *JPEN* (33 RCTs, n=1,076, sit-to-stand SMD=0.51, p=0.04); Sharifian 2025 *Eur Rev Aging Phys Act* (20 RCTs, n=1,093, 1RM +2.12 kg, p=0.001; total-body BMD ns); Liu 2025 *Eur Rev Aging Phys Act* (8 RCTs, n=482, lean mass SMD=0.27 p=0.03; duration-stratified ≤32-wk subgroup SMD=0.45–0.57); Marshall 2026 *Nutr Rev* (6 studies, n=1,542 cognition-without-RT systematic review, 5/6 positive but contested by published letters of concern). Four new footnotes. `human-evidence-level:` unchanged (`limited`). Stamped 2026-05-08.

- **`molecules/compounds/taurine.md`** — Critical Singh-2023 status confirmed: NO Yadav-lab or independent lifespan replication in 2024–2026 PubMed-indexed literature; Fernandez 2025 biomarker-premise challenge stands. Added: Nie 2025 *Nutr Rev* (34 RCTs cardiometabolic meta-analysis — independent corroboration of Tzang 2024 with extended liver-enzyme + inflammation outcomes); Wang/Oudit 2026 *BMC Infect Dis* (27 RCTs n=1,030 long COVID PASC + parallel pooled plasma-deficit signal SMD −0.35 in 6 studies n=308 — first meta-analytic intra-population deficit signal, critically *disease-driven not aging-driven*); Moore 2026 *Foods* (8 RCTs n=244 acute-cognition systematic review — mostly null with COI disclosure on Viridian Nutrition). Four new footnotes. `human-evidence-level:` unchanged (`limited`). Stamped 2026-05-08.

- **`molecules/compounds/egcg.md`** — Added 2024-2026 meta-analysis updates: Zhou 2026 *Neuroepidemiology* (18 observational studies, n=58,929; cognitive impairment OR=0.63; effect Asian-population-specific); Rezaei 2025 *Blood Pressure* (36 RCTs; SBP −1.08 mmHg / DBP −1.09 mmHg; <500 mg/day dose subgroup strongest — convergent with EFSA <800 mg/day safety threshold). Two new footnotes. `human-evidence-level:` unchanged (`limited`). No 2024–2026 progeria-EGCG trial published; PENSA primary results still not in PubMed. Stamped 2026-05-08.

- **`molecules/compounds/elamipretide.md`** — **MAJOR REGULATORY UPDATE:** Sep 19, 2025 FDA accelerated approval for Barth syndrome (≥30 kg adult+pediatric, muscle strength endpoint); trade name **Forzinity™** (Stealth BioTherapeutics); first disease-specific BTHS therapy + first cardiolipin-directed mitochondrial therapeutic. Approval based on TAZPOWER OLE 168-week sustained benefit despite *failed* double-blind primary; confirmatory trial required. `clinical-stage:` upgraded `phase-3 → fda-approved`. `human-evidence-level:` upgraded `limited-negative → limited` (the negative-evidence still applies to non-Barth indications and is now captured in the body + `translation-blocked-efficacy` translation-gap field). Also added: Schauer 2026 *IJMS* (rat HFpEF — bioenergetics improved without functional benefit, consistent with PROGRESS-HF null pattern); Xiong 2026 *J Ovarian Res* (mouse aged-oocyte model — novel reproductive-aging indication, preclinical only). Four new footnotes (shirley2026, zhao2026, schauer2026, xiong2026). `clinical-trials-active:` 2 (NCT07275424 RECRUITING + NCT06373731 ACTIVE_NOT_RECRUITING) — re-confirmed via ClinicalTrials.gov v2 API. Stamped 2026-05-08.

**`human-evidence-level:` rating changes:**
- creatine: unchanged (`limited`) — 2024-2026 meta-analyses extend the existing lean-mass + strength evidence base ~3.5× (n increased from ~720 to ~2,650) but do not add hard-functional-endpoint data. Cognition signal contested.
- taurine: unchanged (`limited`) — Nie 2025 reinforces Tzang 2024 cardiometabolic surrogate-marker evidence; cognition signal mostly null; longevity claim still not human-tested.
- egcg: unchanged (`limited`) — Zhou + Rezaei meta-analyses are observational + small-effect-size respectively; do not move the bar to `strong`.
- elamipretide: upgraded `limited-negative → limited` (FDA accelerated approval = regulator-recognized human evidence for Barth-syndrome indication; aging indication still recruiting).

**Singh-2023 taurine replication status (critical for the `taurine.md` page):** **NOT REPLICATED.** PubMed search of `taurine AND (Yadav[Author] OR Singh-P[Author]) AND aging 2024–2026` returned 0 hits. The mouse lifespan extension and biomarker-decline claims remain single-laboratory findings; Fernandez 2025's longitudinal challenge to the biomarker-decline premise has not been countered by a Yadav-lab or independent lifespan-replication publication. Wang/Oudit 2026's PASC-plasma-deficit finding is a meaningful new data point but is *disease-driven* (post-acute viral inflammation) not *aging-driven* — does not rescue the Singh 2023 framing. Status remains "contested, unresolved."

**Verification status (R34 batch 4 mitochondrial+CR-mimetic continuation):** all new additions are abstract-level verification only (PubMed efetch); local PDFs not yet downloaded for any of the 14 new citations. Verifier pass to follow when full-text retrieval is scheduled.

