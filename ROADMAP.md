---
type: roadmap
---

# Wiki coverage roadmap

Forward-looking planning aid. **The wiki entity pages themselves are the source-of-truth for what's been seeded/verified** (frontmatter `verified` field, `#stub` tag); `log.md` (thin index) + `log/` sub-files hold the chronological narrative for completed rounds. This file holds *intent only* — current queue, deferred propagation work, next-lint-pass items, and forward-looking schema notes.

For dynamic auto-counts of what currently exists, see [[index]] (Dataview queries). For verification state across all pages, see [[gaps/README]]. For round-by-round historical narrative, see the thin `log.md` index + per-round files at `log/R<N>.md`.

## Status legend

- `[ ]` — planned but not yet seeded
- `[x]` — exists in the wiki (only used for items still in the unseeded-queue tracking — completed entries are removed and the wiki itself is canonical)

## Coverage summary

| Entity type | Seeded | Verified |
|---|---|---|
| Hallmarks (López-Otín) | 12 | 12 |
| Pathways | 17 | 15 |
| Proteins | ~140 | ~112 |
| Compounds | 16 | 15 |
| Processes | 16 | 15 |
| Phenotypes | 14 | 14 |
| Cell types | 16 | 12 |
| Microbiome | 1 | 1 |
| Frameworks | 4 | 4 |
| Interventions | 26 | 6 (rest drafted) |
| Tissues / organ-systems | 5 | 4 |
| Model organisms | 8 | 8 |
| Studies extracted | 10 | 9 |
| Hypotheses | 7 | 5 |
| Biomarkers | ~5 | partial |

(Last refreshed: 2026-05-07 after R32. Total wiki pages: ~341.)

**Seeding-priority source-of-truth:** for "what should I seed next?" queries, **always run the inbound-count discovery script in `sops/lint-pass.md` § Step 3** — it crawls the actual wiki state and ranks non-existent `[[wikilinks]]` by inbound count. The manually-curated `[ ]` queue below is useful as a secondary signal but undercounts top targets because manual inbound counts decay between rounds as the wiki grows (R27 worked example: ROADMAP listed `unfolded-protein-response (5)` but the live count was **23** — 5x stale from R10 when the wiki had ~159 pages vs current ~296).

---

## Currently unseeded — manual queue

Numbers in parentheses are inbound counts at the time the item was added; **rerun lint-pass before relying on them**.

- [ ] [[telomere]] — telomere DNA structure / T-loop biology / measurement methods (distinct from telomerase machinery); R29 carryover
- [ ] [[tcab1]] / [[wrap53]] — Cajal-body targeting subunit of telomerase; R29 carryover
- [ ] [[topoisomerase]] (1) — fisetin off-target
---

## Forward-planned rounds R32–R34 (drafted 2026-05-07; R29 + R30 + R31 closed same day)

Three rounds drafted from the 2026-05-07 lint + hallmark mechanistic-depth audit. R30 + R31 each turned out smaller than originally scoped: most "missing" mitochondrial pages were alias false-positives, and most epigenetic atoms (sirtuins, TETs, dnmt3a, oct4/sox2/klf4/c-myc, partial-reprogramming process + intervention) were already verified. Real R30 = 5 pages, real R31a = 5 pages (4 heavyweight studies + HDAC class). R31b items remain queued for future rounds (see "Remaining R31 gaps" below).

### R31b — CLOSED 2026-05-07

R31b completed in two sub-batches (10 pages total):
- **R31b-α**: dna-methylation + dna-demethylation processes; dnmt1 + nanog proteins; schooling-2025 study page
- **R31b-β**: histone-modification + histone-acetylation processes; sirt2 + sirt7 proteins; hdac-inhibitors class page

Remaining queued items deferred to future rounds (low priority; no current inbound-count pressure):
- TDG protein page (DNA demethylation BER step; required for OSK rejuvenation per Lu 2020)
- SIRT4 + SIRT5 — mitochondrial metabolic sirtuins; complete SIRT1-7 family
- HDAC family member individual pages (HDAC1, HDAC3, HDAC6) — class page suffices unless member-specific aging literature accumulates

(R31 + R32 original plans removed — both rounds CLOSED 2026-05-07; see "CLOSED" sections above for completion summaries.)

### R33 — CLOSED 2026-05-07

R33 (dysbiosis + altered-intercellular-communication coverage) seeded + verified 11 new pages in two parallel batches, plus two propagation passes:

- **Batch 1 (mechanism)**: `processes/gut-barrier.md`, `pathways/lps-tlr4-nfkb.md`, `pathways/fgf-signaling.md`, `microbiome/gut-microbiome-aging-shifts.md`, `microbiome/bifidobacterium.md`, `microbiome/lactobacillus.md`, `microbiome/firmicutes-bacteroidetes-ratio.md`
- **Batch 2 (intervention)**: `interventions/dietary/fmt.md`, `interventions/dietary/prebiotics.md`, `interventions/dietary/postbiotics.md`, `molecules/compounds/akkermansia-supplementation.md`

False-positive R33 plan items (already existed under canonical filenames; no work needed):
- `pathways/scfa-signaling.md` already existed (was seeded prior round)
- `pathways/tgf-beta-pathway.md` resolves to existing `pathways/tgf-beta.md`
- `pathways/wnt-pathway.md` resolves to existing `pathways/wnt-beta-catenin.md`

Verifier yield was the highest of recent rounds — every batch-1 verifier and every batch-2 verifier caught at least one fabricated outcome (sex-collapsed Zhang 2012 lifespan figures, fabricated Wenz 2009-style Mariat 2009 cohort with centenarians it doesn't have, Falony 2006 cross-feeding partners replaced with three fabricated species, fabricated 2-5x LPS fold-change attributed to a mouse paper, wrong Bui 2019 DOI resolving to a mycotoxin paper, wrong NU-AGE n (>1,200 → 226 Dutch-only), Chen 2020 plural "centenarian donors" when there was only one, Smith 2017 "germ-free" when fish were antibiotic-pretreated). Both propagation passes were unusually light because verifiers had Read+Edit access and applied corrections in-place during their own passes; downstream propagation was limited to fgf21/klotho/akkermansia-muciniphila + ISAPP-postbiotic-discipline rewrites on dysbiosis hallmark and lps-tlr4-nfkb pages.

### R34 — CLOSED 2026-05-08 (housekeeping + all surfaced backlogs cleared)

R34 housekeeping round closed in-session; same-day all three surfaced backlogs were also cleared via four parallel agent batches (rapamycin user-driven sub-batch + 5+5+5+2 = 17 agents over the day). Round summary in `log/R34.md`.

**R34-surfaced backlogs — STATUS:**
- **`literature-checked-through` backfill bucket** — **CLEARED** ✅ All 59 pre-R25 pages stamped (compounds, interventions, biomarkers, hypotheses). 72 total pages of these types now carry the field. See `log/R34.md` for the full per-page tally + major findings landed.
- **Tier-1 protein aging-context rationale (16 pages)** — **CLEARED** ✅ 15 pages edited with explicit IRAK4-style rationale prose; 1 no-op (parp1 already had it). **6 pages re-rated to tier-2** on user decision 2026-05-08 (alpha-synuclein, caspase-1, hsc70, nampt, pdk1, s6k1) — see `log/R34.md` for details. Tier-1 protein pages now: 38 (was 44).
- **Full UniProt drift sweep (177 proteins)** — **CLEARED** ✅ 13 drifts caught and fixed (mostly HGNC numeric drift + null-fills + 2 family-page subunit-mismatch cases on `ku70-ku80` and `mitofusins`). Zero accession-level drifts. Re-running the script returns 0 drifts.

---

## R36 — CLOSED 2026-05-09 (peptide-therapeutics cluster)

13 atomic content pages seeded + verified in single-day round (12 compounds + CAMP parent protein); 1 class MOC at `interventions/pharmacological/peptide-therapeutics.md`. 26 agent invocations. **All atomic pages flipped to `verified: true`** with partial-scope notes for closed-access primaries.

Cluster: BPC-157, TB-500, GHK-Cu, Epitalon, MOTS-c, DSIP, Dihexa, MK-677, Semax, Melanotan II, KPV, LL-37 + CAMP (parent protein for LL-37) + peptide-therapeutics class MOC.

10 new mechanism classes registered in `frameworks/intervention-classes.md`.

Round summary in `log/R36.md`. See log entry for full corrections list — round was unusually high-yield for fabricated-claim catches (Dihexa BDNF/donepezil claims absent from any surviving primary; MK-677 Adunsky 2011 CHF early-termination missing from seeder; Zempo 2021 conclusion reversed; multiple fabricated author lists; multiple wrong DOIs).

**R36-surfaced forward queue — STATUS (after R35-Stage2 + R36-followup close 2026-05-09):**
- ✅ [[tmsb4x]] — DONE (verified)
- ✅ [[mots-c-peptide]] — DONE (verified)
- ✅ [[bdnf]] — DONE (verified)
- ✅ [[fpr2]] — DONE (verified)
- ✅ [[ghsr]] — DONE (verified)
- ✅ [[mc1r]] — DONE (verified)
- ✅ [[mc4r]] — DONE (verified)
- ✅ [[alpha-msh]] — DONE (verified)
- ✅ [[mc3r]], [[mc5r]] — DONE 2026-05-09 (R37; both verified)
- ✅ [[hgf]], [[c-met]] — DONE 2026-05-09 (R37; both verified). Dihexa retraction notice intact on both pages.
- ✅ [[vegfr2]], [[enos]], [[growth-hormone-receptor]] — DONE 2026-05-09 (R37; all verified)
- [ ] Schema clarification: `clinical-stage` vocabulary needs `abandoned-phase-1` value (Melanotan II precedent). Consider for next CLAUDE.md cleanup pass.
- [ ] PCAC FDA primary-source confirmation — all 503A bulks-list-related claims tagged `#gap/unsourced`; FDA meeting transcripts not independently confirmed.

---

## R35 (Stage 1 + Stage 2) — CLOSED 2026-05-09

**Stage 1**: a 12-hallmark biomarker tracking matrix (prioritization, vendor landscape, recommended cadence) mapping each hallmark to clinically-tractable biomarkers, ranked HIGH/MEDIUM/LOW by signal/cost/actionability.

**Stage 2**: 10 biomarker pages + 6 parent protein/receptor pages + 3 wave-3 pages (MC1R, MC4R, MOTS-c-peptide) seeded + verified in single-day round. Run mirrored R36 cadence (parallel waves of 8 + 8 + 3, with matched verifier waves). 29 agent invocations total.

Round summary in `log/R35.md` (the R35-Stage2 + R36-followup close entry). Round was very high-yield for fabricated cohort numbers (3× n fabrications in NLR; Disanto 2017 cohort numbers wrong; Mattsson 2019 cohort wrong); direction-inverted claims (Roberts 2020 LBP-CVD; Mattsson 2019 NfL trajectory in CU; Picca 2022 ghrelin trajectory; Wang 2014 SPM expression in AD; Sayed 2021 IL-6 in iAge); and material non-significance hidden (Erickson 2011 BDNF + memory between-group claims; Sosne 2015a Phase 2 RCT failed both co-primaries; Adunsky 2011 CHF early termination; Fujita 2023 CIs cross 1.0).

Schema gaps surfaced for next CLAUDE.md cleanup:
- `type: biomarker` `modality:` enum needs `somatic-genetic` (CHIP precedent)
- `type: biomarker` `mendelian-randomization:` enum needs receptor-axis vs direct-protein-pQTL distinction (IL-6/IL-6R precedent)
- `type: biomarker` `training-cohort:` field convention for single-analyte biomarkers (no ML training)

**R35-Stage2-surfaced forward queue — STATUS (after R37 close 2026-05-09):**
- ✅ [[il-6]] protein page — DONE (R37 wave 1; verified)
- ✅ [[tocilizumab]] compound page — DONE (R37 wave 1; verified)
- ✅ [[colchicine]] compound page — DONE (R37 wave 2; verified)
- ✅ [[setmelanotide]] compound page — DONE (R37 wave 1; verified)
- ✅ [[pomc]] parent protein page — DONE (R37 wave 1; verified)
- ✅ [[melanocortin-system]] pathway/MOC page — DONE (R37 wave 1; verified)
- ✅ [[neurotrophin-signaling]], [[trkb-pathway]] pathway pages — DONE (R37 wave 1; verified)
- ✅ [[spm-pathway]] — DONE (R37 wave 1; verified)
- ✅ [[glycanage-2017]] — DONE (R37 wave 2; verified)
- ✅ [[melanogenesis]], [[camp-signaling]], [[pomc-processing]] pathway pages — DONE (R37 wave 2; all verified)

---

## R37 — CLOSED 2026-05-09 (R35-Stage2 + R36 forward-queue continuation)

20 atomic content + MOC pages seeded + verified in single-day round; 40 agent invocations across 3 waves of 8 + 8 + 4 (matched verifier waves). All atomic pages flipped to `verified: true` with partial-scope notes.

Cluster: IL-6 protein, POMC, melanocortin-system MOC, tocilizumab, setmelanotide, neurotrophin-signaling, TrkB pathway, SPM pathway, MC3R, MC5R, colchicine, melanogenesis, cAMP-signaling, POMC-processing, GlycanAge biomarker, HGF, c-MET, VEGFR2, eNOS, GHR.

2 new mechanism classes registered in `frameworks/intervention-classes.md`: `IL-6R antagonist`, `microtubule-polymerization-inhibitor`.

Round summary in `log/R37.md`. Continued the high-yield-correction pattern: direction-inverted claims (Lian 2020 miR-25-3p; Dehghan 2019 hydralazine-PKA; Kelly 2018 prefrontal cAMP); fabricated cohort numbers (IL-6 "30% CHD" vs actual 5%; multiple colchicine safety figures; GHR cancer "5-fold"); attribution errors (Nillni 2016 CRH-not-POMC; Yan 2007-not-Enns 2010 for AC5-KO; Latina 2017 in-vitro-not-MCI/AD); receptor-ligand mis-assignments (GPR32 binds RvD1/3/5 not RvD2; MC5R ACTH=β-MSH not >); fabricated phosphosites (c-MET Ser985; VEGFR2 Tyr1054; eNOS Tyr657); critical Ensembl ID error (MC5R wrong gene entirely → glutamate receptor).

**R37-surfaced forward queue (lower-priority follow-on items):**
- [ ] Protein/receptor: NGF, NTRK1/2/3, NGFR (neurotrophin-signaling completion); IL-6R; PCSK1, PCSK2, CPE, PAM (POMC processing); AGRP, ASIP, MC2R (melanocortin completion); ADCY family, PRKACA, RAPGEF3, GNAS, CREB1, CRTC1, PDE4 (cAMP signaling); GPR32, ChemR23, LGR6, ALOX15, ALOX5, ALOX12, PTGS2 (SPM); VEGFA; MITF, TYR, TYRP1, DCT (melanogenesis enzymes)
- [ ] Pathway: HGF-MET-signaling, HPA-axis, NO-cGMP-PKG, GH-JAK-STAT, arachidonic-acid-pathway, omega-3-metabolism, phospholipase-A2
- [ ] Phenotype/process: Laron syndrome (referenced from GHR); neurodegeneration (referenced from NEFL + neurotrophins)

## R38–R44 (planned 2026-05-19) — skin-aging coverage cluster

Origin: 2026-05-19 phenotype-substrate audit (transcript: "skin-aging coverage" thread). `phenotypes/skin-aging.md` is verified (2026-05-05) + mechanistically deep, but the atomic substrate beneath it is conspicuously thin — `[[skin]]`, `[[dermis]]`, `[[epidermis]]`, `[[melanocytes]]`, `[[dermal-fibroblasts]]` all dangle from the hub; 9 of 10 footnoted primary sources lack dedicated study pages; no MMP/collagen/elastin protein pages; no retinoid compound pages despite tretinoin being the best-evidenced topical anti-aging Rx; no skin epigenetic-clock biomarker pages (Bormann/Qi-23k/TapeLift are all referenced but unwritten). Pattern matches the existing "deep phenotype, shallow substrate" anti-pattern.

**Total scope:** ~60 atomic pages across 7 rounds. ~150 agent invocations estimated. Distributable across multiple working days; the R36/R37 cadence (single-day rounds of 13–20 pages) is achievable per-round but the campaign as a whole likely spans 2–3 weeks of intermittent work to preserve verifier yield.

### Schema decisions (resolved 2026-05-19)

- **NO `organ-systems/integumentary.md`** — organ-systems/ folder is empty wiki-wide; don't start a precedent for skin alone.
- **Split `tissues/skin.md` + `tissues/dermis.md` + `tissues/epidermis.md`** — three pages, parallel to existing `heart.md` + `myocardium.md` precedent. Different cell biology + aging mechanisms.
- **NO `processes/photoaging.md`** — would duplicate skin-aging.md's intrinsic-vs-photoaging section. Atomic-entity discipline forbids.
- **YES `processes/wound-healing.md`** — tissue-agnostic but skin-dominant; anchors Demaria 2014, BPC-157, TB-500, GHK-Cu, and retinoid healing claims.
- **3 retinoid compound pages in primary sweep** (tretinoin, retinol, retinoids-class MOC) + 3 secondary (retinaldehyde, adapalene, bakuchiol, tazarotene) in follow-on.
- **Sunscreen schema = `interventions/lifestyle/uv-protection.md`** — daily applied behaviour; individual UV-filter compounds (zinc oxide, avobenzone) deferred unless aging-specific mechanism literature surfaces.
- **Topical compounds use single canonical page name** (e.g., `niacinamide.md`, not `niacinamide-topical.md`); page covers both topical + systemic use with section discipline.

### R38 — CLOSED 2026-05-19 (tissue + cell-type substrate; 8 pages)

8 pages seeded + verified single-day. Extremely high verifier yield — ~45 corrections including 1 critical biology inversion (Inomata 2009 ATM direction), 1 wholesale primary-source misattribution (Ganceviciene 2012 on tissues/skin.md), 2 paper-conflations (Park 2023 KIF5B fabrication; Yu 2025/Park 2023 melanosome cross-attribution), and multiple n-value + construct-name corrections.

**Pages seeded:** `tissues/skin.md`, `tissues/dermis.md`, `tissues/epidermis.md`, `cell-types/dermal-fibroblasts.md`, `cell-types/keratinocytes.md`, `cell-types/melanocytes.md`, `cell-types/langerhans-cells.md`, `cell-types/melanocyte-stem-cells.md`.

**Propagation:** `phenotypes/skin-aging.md` updated for Fisher 2009 ~1%/year + YAP/TAZ attribution issues (caught downstream from R38 verifications); AGEs + glucosepane pages updated with `[[dermis]]` wikilinks; hallmark MOC cross-link backfill deferred to R39+ when substrate thickens.

**Schema escalation surfaced:** `type: tissue` should be formally documented in CLAUDE.md (currently only de facto via skeletal-muscle.md precedent). Three separate seeders flagged this.

**McSC CL term:** `cell-ontology-id: null` + `#gap/needs-canonical-id` per FAP precedent (no McSC CL term exists in OLS4 as of 2026-05-19).

**Inter-verifier contradiction (deferred to R39):** Fisher 1996 "~70% / 50-80%" tretinoin reduction figures — keratinocytes verifier reports not in paper text; dermis verifier reports confirmed from Figs 4a-4c visual data. Will resolve at R39 study-page verifier pass.

Round summary in `log/R38.md`.

### R39 — CLOSED 2026-05-19 (foundational primary-source studies; 12 pages)

12 study pages seeded + verified single-day. Exceptionally high verifier yield (~60 substantive corrections across the batch — ~5 per page average), continued the seeder-fabricates-outcomes pattern.

**Pages seeded** (all `verified: true`; 3 with partial scope for closed-access primaries): `studies/{fisher-1996-photoaging-ap1-mmp, fisher-2009-collagen-fragmentation-mmp, velarde-2012-mitochondria-skin-senescence, demaria-2014-senescent-cells-wound-healing, hattori-2004-scf-solar-lentigo, krutmann-2017-skin-aging-exposome, sumita-2018-tretinoin-photoaging (closed), kovacs-2010-fibroblast-solar-lentigo (closed), purohit-2016-smad3-fibroblasts (closed), bormann-2016-epidermis-clock, rodriguez-paredes-2026-tapelift-clock, inomata-2009-melanocyte-stem-cell-atm}.md`.

**R38 inter-verifier contradiction definitively resolved:** Fisher 1996 "~70% AP-1 / 50-80% MMP" reduction figures by tretinoin **are text-stated on pp.338-339** of the original Nature paper (verbatim quote captured on the study page). The R38 keratinocytes verifier was wrong to demote these to `#gap/unsourced`; restored on the keratinocytes page during R39 propagation.

**Major catches (highlights):**
- Inomata 2009 primary model: my brief said K14-SCF (sourced from training memory); paper actually uses **Dct-lacZ transgenic mice**. K14-SCF is Nishimura 2005, not Inomata.
- Krutmann 2017 Liebmann red-light biology inverted (red+IRA have NO impact; only blue light reduces proliferation).
- Fisher 2009 MMP-3/9 elevation claim was fabricated — paper has NO quantitative MMP-3/9 main results.
- 6 author/year/DOI memory-errors in Krutmann 2017 footnote chain (Rowe/Guyuron, Richardson, Doshi, Tamai, Lohan, Thiele all needed fixes).
- 3 metadata corrections inline-applied to verified `phenotypes/skin-aging.md` (Sumita n+pages; Kovacs growth factors; Purohit volume+pages).

**Propagation completed:** Fisher 1996 percentages restored on keratinocytes.md; tissues/dermis.md MMP-3/9 attribution fixed; biological-age-measurement.md TapeLift framing corrected (cross-ethnic claim correctly attributed to Qi 2026 not Rodríguez-Paredes); 3 skin-aging.md metadata errors inline-fixed by verifiers; Inomata wikilink fixed on melanocyte-stem-cells.md.

**Schema escalations surfaced** (added to next CLAUDE.md cleanup):
- `publication-type:` field on `type: study` (Letter precedent from Purohit 2016).
- `volume:` + `issue:` + `pages:` formalization (in use de facto; Horvath 2013 precedent).

**Forward queue items surfaced (consider for R45 or later):**
- **Mohri 2025** *Nat Cell Biol* "Antagonistic stem cell fates under stress govern decisions between hair greying and melanoma" (PMID 41053225; doi:10.1038/s41556-025-01769-9) — seno-differentiation concept; partial update to Inomata 2009's "differentiation not senescence" framing. (Earlier R39 surfaced this as "Dong 2025" — that was a phantom reference; R40 KIT verifier resolved it to Mohri 2025 via PubMed search.)
- `molecules/proteins/sod2.md` — implicit stub from Velarde 2012.
- `studies/nishimura-2005-hair-graying-incomplete-msc.md` — canonical McSC ectopic-differentiation paper (closed-access).
- `studies/liebmann-2010-skin-wavelength-effects.md` — primary for the Krutmann-misattributed red-light claim.

Round summary in `log/R39.md`.

### R40 — CLOSED 2026-05-19 (effector proteins + dermal-matrix + wound-healing; 12 pages)

12 pages seeded + verified single-day. Highest verifier yield of the campaign so far (~70 substantive corrections across 12 pages including multiple direction inversions, DOI fabrications, and biology errors). All 12 flipped to `verified: true` (5 with partial scope for closed-access primaries).

**Pages seeded:** `molecules/proteins/{mmp-1, mmp-3, mmp-9, timp-1, col1a1, col3a1, eln, fbn1, lox, kitlg, kit}.md` + `processes/wound-healing.md`.

**Major catches:** MMP-9 Tarantini 2021 direction inverted (paradoxical worsening, not null); COL3A1 null mouse phenotype WRONG (neonatally lethal not embryonic; Liu 1997 PNAS); 7 separate DOI fabrications (MMP-9 Liu/Hu, MMP-3 Sumsuzzman, TIMP-1 Nagase, LOX Herchenhan/Liu, COL3A1 Kong, COL1A1 Shuster) all corrected; **Dong 2025 phantom reference** resolved to **Mohri 2025** (PMID 41053225); 7 main-agent canonical-DB memory fabrications (MMP-1 mouse ortholog accessions resolved to wrong proteins entirely; KIT Hirota 1998 94% misattribution; domain boundaries off by 20-23 residues across 3 proteins).

**Propagation completed:** FBN1 Chen 2005 UV → infrared correction; replicative-senescence.md Coppé 2008 MMP supplemental-vs-main-text qualification; ROADMAP R45 Dong 2025 → Mohri 2025.

**Schema escalations** (next CLAUDE.md cleanup): `type: process` druggability-tier aging-context convention (R26/R27 extension); `publication-type:` for `type: study` (deferred from R39).

**Forward queue surfaced**: dedicated study-page seeds for Coppé 2008, Varani 2006, Liu 1997, Shapiro 1991, Young 2024, Zeigler 2021, Hirota 1998 (each anchors multiple wiki claims and resolves to local PDFs after R40); Imokawa 2019 vs Hattori 2004 c-KIT review-vs-primary discrepancy wiki-wide check.

Round summary in `log/R40.md`.

---

### R40 — Original planned content (closed; archived for reference)

- `molecules/proteins/mmp-1.md` — collagenase-1; UniProt P03956; central photoaging effector per Fisher 1996
- `molecules/proteins/mmp-3.md` — stromelysin-1; UniProt P08254
- `molecules/proteins/mmp-9.md` — gelatinase-B; UniProt P14780
- `molecules/proteins/timp-1.md` — tissue inhibitor of metalloproteinases-1; UniProt P01033 (counter-regulator)
- `molecules/proteins/col1a1.md` — type I collagen α1; UniProt P02452
- `molecules/proteins/col3a1.md` — type III collagen α1; UniProt P02461 (ratio with COL1A1 shifts in aging)
- `molecules/proteins/eln.md` — elastin; UniProt P15502
- `molecules/proteins/fbn1.md` — fibrillin-1; UniProt P35555 (elastic fibre assembly; solar elastosis)
- `molecules/proteins/lox.md` — lysyl oxidase; UniProt P28300 (cross-linking enzyme; activity declines)
- `molecules/proteins/kitlg.md` — KIT ligand / stem cell factor (SCF); UniProt P21583 (Hattori 2004 solar-lentigo paradigm)
- `molecules/proteins/kit.md` — KIT receptor; UniProt P10721 (melanocyte SCF receptor)
- `processes/wound-healing.md` — hemostasis → inflammation → proliferation → remodeling; Demaria 2014 transient-senescence-is-beneficial story

### R41 — CLOSED 2026-05-19 (retinoid cluster + class MOC; 7 pages)

7 pages seeded + verified single-day. Unprecedented yield for canonical-database errors specifically — **6 separate canonical-DB-memory hallucinations** caught (adapalene CAS; bakuchiol ChEMBL → buparlisib; tazarotene ChEMBL parent → 5,6-dihydroxy-8-aminoquinoline; tazarotene metabolite ChEMBL → unrelated compound; tazarotenic acid MW; retinaldehyde ChEMBL → probenecid). Pattern documented in new memory `feedback_canonical_db_memory_unreliable`. Plus Fisher 1996 `nm1196-694` DOI hallucination (Nature Medicine prefix → actual Nature), Draelos 2023 DOI resolving to unrelated 2022 JEADV paper, multiple n-value + author-list fabrications, and **Lin 2025 coarse-wrinkle ranking inversion** (tazarotene #3 not #1).

**Pages seeded** (all `verified: true`; 5 partial scope for closed-access): `molecules/compounds/{tretinoin, retinol, retinaldehyde, adapalene, bakuchiol, tazarotene}.md` + `interventions/pharmacological/retinoids.md` (class MOC).

**Major recency-search yields (R25):** Lin 2025 NMA (PMID 40707570; n=3,905; tretinoin gold-standard); Siddiqui 2024 systematic review (PMID 39348007; 13/25 comparators *equivalent* to tretinoin); Fanning 2024 bakuchiol SR (PMID 38564402; 12/15 trials lacked controls — reframes bakuchiol evidence base); Bagatin 2018 (adapalene non-inferior to tretinoin n=128 ITT); Dhaliwal 2019 (bakuchiol non-inferior to retinol n=44); Kumari 2025 hyperpigmentation NMA (potential contradiction to Lin 2025 — flagged).

**Propagation completed:** Duplicate class registration in intervention-classes.md reconciled (deleted line-1334 `### rar-agonist` lowercase entry; standardized all 7 R41 pages to line-408 title-case `### topical retinoid / RAR agonist` class with `RAR-agonist`/`AP-1-transrepression`/`MMP-1-suppression`/`collagen-synthesis-stimulation` values). Retinol Fisher 1996 footnote: "forearm" → "buttock skin (sun-protected)". Mechanism field casing standardized across all R41 pages.

**Schema escalation queued:** `chembl-id-active-metabolite:` field on `type: compound` (tazarotene precedent; pattern recurs for prodrugs — statins, NSAIDs, ester retinoids).

**Forward queue:** Kumari 2025 vs Lin 2025 hyperpigmentation discordance; `rara`/`rarb`/`rarg` protein pages; `aldh1a1`/`aldh1a2`/`aldh1a3` RALDH family enzymes; class-MOC propagation already complete in intervention-classes.md.

Round summary in `log/R41.md`.

---

### R41 — Original planned content (closed; archived for reference)

- `molecules/compounds/tretinoin.md` — all-trans retinoic acid; PubChem 444795; FDA Rx (Retin-A 1971)
- `molecules/compounds/retinol.md` — vitamin A; PubChem 445354; OTC
- `molecules/compounds/retinaldehyde.md` — retinal; PubChem 638015; intermediate
- `molecules/compounds/adapalene.md` — synthetic third-gen retinoid; PubChem 60164
- `molecules/compounds/bakuchiol.md` — plant retinoid functional analog; PubChem 5468522
- `molecules/compounds/tazarotene.md` — synthetic acetylenic retinoid; PubChem 5381
- `interventions/pharmacological/retinoids.md` — class MOC; AP-1 transrepression + RAR-β-driven collagen synthesis

### R42 — CLOSED 2026-05-19 (topical antioxidants + UV protection; 6 pages)

6 pages seeded + verified single-day. Highest full-PDF cross-check yield of the campaign — multiple seeders pulled PDFs directly during verification (Falckenhayn 2024, Lin 2005, ATBC 1994, Krutmann 2021, Alvares 2022, Luze 2020, Shariff 2022, Ghasemiyeh 2025, all 4 resveratrol mechanism papers). Many quantitative + design + author-list corrections caught, plus 2 separate fabricated DOI/PMID errors and multiple study-design-detail fabrications.

**Pages seeded** (all `verified: true`): `molecules/compounds/{niacinamide, ascorbic-acid, alpha-tocopherol, dihydromyricetin, resveratrol}.md` + `interventions/lifestyle/uv-protection.md`.

**Headline catches:**
- Hughes 2013 design INCOMPLETE: 2×2 factorial (with β-carotene/placebo cross-arm omitted); outcome measure wrong ("Skin Surface Aging Scale" → microtopography of dermal elastosis dorsal hands); relative odds 0.76 (95% CI 0.59-0.98).
- Ferulic acid metal-chelation mechanism FABRICATED: Lin 2005 explicitly says mechanism is unknown.
- Hubbard 2013 substrate FABRICATED: "1-Aminoanthracene specific peptide" → PGC-1α Lys778 / FOXO3a Lys290 sequences.
- Shariff 2022 (not 2021); n=44/50 (not 42); 3% niacinamide (not 5%); 0.4% hexylresorcinol (not 2%).
- Padayatty 2004 n=17 (not 7); ~60-fold IV/oral plasma difference (not 25-fold).
- Murad 1981 PMID 6268471 → 6265920 (LH-receptor paper → PNAS collagen paper).
- Falckenhayn 2024 vehicle-controlled in-vivo topical-DHM arm (n=30) entirely missing from seeder; resolves the previous `#gap/no-mechanism` for "does topical DHM reach basal keratinocytes."

**Major supersession candidates surfaced (R25):**
- **Allen 2023 NEJM** + **Tosti 2023** meta-analysis — ONTRAC niacinamide cancer-prevention benefit does NOT extend to organ-transplant recipients (immunosuppressed); nuanced framing on niacinamide page.
- **Mansouri 2025 JAND** SR+GRADE meta-analysis (11 RCTs) — "resveratrol supplementation does not significantly influence human SIRT1" — RCT-level evidence reinforcing the `limited-negative` STAC framing.
- **Bienkowska 2026** (Clin Epigenetics; n=851) — DHM associated with decelerated epigenetic skin aging in population cohort.

**Propagation completed:**
- `frameworks/interventions-by-hallmark.md` line 273: genomic-instability hallmark **0 → 1** intervention (UV-protection is first; resolves long-standing zero-coverage gap).
- `frameworks/intervention-classes.md` line 899: niacinamide REMOVED from tyrosinase-inhibition list (actual mechanism is PAR-2 melanin-transfer inhibition).
- `frameworks/intervention-classes.md` pre-existing duplicate `extracellular-matrix-remodeling` entries (lines 583 + 942) MERGED; copper-chaperone sub-mechanism preserved in canonical line-583 entry.
- `interventions/pharmacological/nad-precursors.md`: reciprocal disambiguation note added pointing to topical `[[niacinamide]]` (topical vs systemic distinction + Allen 2023 nuance).
- Round-number error inline-fixed (R43 → R42 labels on 3 mechanism classes).
- Resveratrol mechanism field standardized: `sirtuin-activator-disputed` → canonical `sirtuin-activator`.

**6 new mechanism classes registered**: DNMT-inhibitor, lipid-peroxidation-inhibitor, epidermal-barrier-repair, melanin-transfer-inhibition, UV-filter / photoprotection, prolyl-hydroxylase-cofactor + melanin-inhibition + tet-enzyme-cofactor.

**Schema escalations queued:** `pubchem-cid-synthetic:` field on `type: compound` (alpha-tocopherol natural-vs-synthetic stereoisomers; parallel to R41 `chembl-id-active-metabolite:`); `mechanisms:` field route-of-administration ambiguity (niacinamide topical vs systemic NAD+).

**Forward queue:** `studies/qi-2026-dhm-epigenetic-skin-aging.md` PRIORITY VERIFICATION (still `verified: false`; campaign initiator); `studies/falckenhayn-2024-dhm-dnmt-inhibitor.md` natural seed (PDF now local); `studies/hughes-2013-sunscreen-photoaging.md`; `studies/lin-2005-ce-ferulic-photoprotection.md` (PDF now local); `molecules/compounds/ferulic-acid.md` (referenced across R42); `molecules/proteins/par-2` (niacinamide canonical receptor); Allen 2023 + Mansouri 2025 + Bienkowska 2026 propagation to sirtuin-activators class + sirt1 protein pages.

Round summary in `log/R42.md`.

---

### R42 — Original planned content (closed; archived for reference)

- `molecules/compounds/niacinamide.md` — vitamin B3 amide; PubChem 936 (distinct from systemic NAD precursors)
- `molecules/compounds/ascorbic-acid.md` — vitamin C; PubChem 54670067 (L-isomer); covers both topical + systemic
- `molecules/compounds/alpha-tocopherol.md` — vitamin E; PubChem 14985 (covers both topical + systemic)
- `molecules/compounds/dihydromyricetin.md` — DHM/ampelopsin; PubChem 161557 (Qi 2026 epigenetic-skin-clock compound)
- `molecules/compounds/resveratrol.md` — PubChem 445154 (covers both topical + systemic if not already seeded)
- `interventions/lifestyle/uv-protection.md` — daily SPF + behavioural UV avoidance; best-evidenced anti-photoaging intervention per Krutmann
- `molecules/compounds/dhm-topical-formulation.md` — OPTIONAL: only if Qi 2026 follow-on warrants product-formulation page (currently covered as inline on study page)

### R43 — CLOSED 2026-05-19 (skin epigenetic biomarkers + clinical-AGE imaging; 4 pages)

4 biomarker pages seeded + verified single-day. Cleanest round of the campaign (TapeLift verifier needed **zero** corrections — first such pass). Three R43-surfaced findings worth flagging:

**Pages seeded** (all `verified: true`; 1 partial scope for Qi 2026 still pending PDF): `biomarkers/{bormann-epidermis-clock-2016, qi-23k-epidermis-clock-2026, tapelift-clock-2026, skin-autofluorescence-age-reader}.md`.

**Qi 2026 study-page metadata corrections caught via PubMed efetch** (the campaign initiator):
- Full title was INCOMPLETE on study + biomarker pages — subtitle missing. Corrected to "Epigenetic Skin Aging and Its Reversal to Improve Skin Longevity across Ethnicities and Phototypes Using a Dihydromyricetin-Containing Serum: Results from a Prospective, Single-Cohort Study."
- **3 author name errors** in inherited study page metadata: `Wegner J → Wegner K`; `Frey S → Frey C`; `Feng L → Feng Y`. Author order also corrected.
- PMID 42034839 added (was missing).
- **COI framing corrected**: I asserted "all five lead/corresponding authors are Beiersdorf" in brief; actual disclosure (15 authors): **8 Beiersdorf employees**; 3 consultation/speaker fees; 3 declared no conflict.
- **Springer OA blocks WebFetch even for CC BY-NC 4.0 Qi 2026 paper** — archive ingest queued for R44/R45.

**Meerwaldt 2004 vs 2005 r-value misattribution (AGE Reader)**: I asserted r=0.75 pentosidine + r=0.71 CLF attributed to Meerwaldt 2004; actually those are from **Meerwaldt 2005** (hemodialysis subset n=29). Meerwaldt 2004 reports r=0.47-0.62 across all markers combined. Corrected in body + footnote.

**Falckenhayn 2024 in-vitro model mis-identified (Bormann clock)**: I asserted clock-age reduction was in 3D skin models; actual paper shows reduction was in **cultured primary keratinocytes (n=13 donor lines)** — 3D model used only for epidermal-thinning endpoint, not clock readout. Corrected.

**Other verifier corrections:**
- AGE Reader `mendelian-randomization: not-applicable` → `not-tested` (enum compliance; schema escalation queued)
- AGE Reader Koetsier 2010 pigmentation threshold: not "Fitzpatrick V/VI explicit" — paper uses UV-reflectance below 12% threshold
- Bormann comparison table conflated TapeLift + MitraSolo/MitraCluster into single row — separated
- Bienkowska 2026 skin-clock attribution: I said "Bormann-derived"; abstract actually says "published skin-specific epigenetic clock" without naming. The stronger attribution was unsourced.

**Recency surfaced (R25):**
- **Menendez Vazquez 2025** *npj Aging* (PMID 41387742): MitraSolo/MitraCluster — independent non-invasive skin clocks; n=462, ~4 yr MAE, intra-individual variation <2 yr, Yamanaka factor rejuvenation signal. Independent of TapeLift/Qi/Bormann lineage.
- **Bienkowska 2026** *Clin Epigenetics* (PMID 41957838, n=851): same Beiersdorf-DKFZ group as Qi 2026; observational support but NOT independent replication.
- **Boersma 2024** *Sci Rep* (n=77,143, 115-month follow-up): LifeLines cohort SAF CVD mortality — **full-adjustment attenuation** finding (HR 1.4 with CI crossing 1.0) — meaningful discordance vs earlier T2DM-specific signal.
- **Boersma 2025** *BMC Cancer* (PMID 40859200, n=77,961): SAF predicts cancer incidence — worth seeding as companion finding.
- **Chen 2022 NMCD meta-analysis** (n=79,389; MACE HR 1.54): established the AGE Reader's cardiovascular-prediction evidence base.

**Propagation completed**: `frameworks/biological-age-measurement.md` skin-clock table — 3 R43 biomarker pages now linked (replaces "not yet on this wiki" footnote framing); AGE Reader added as 4th row (structural biomarker vs methylation clocks). Schema escalations: `model-architecture:` field for SVM vs elastic-net vs PC clocks; `n-cpgs-or-features:` accommodation for multi-model biomarker pages; `mendelian-randomization:` enum extension for structural/device biomarkers (add `not-applicable`).

**Forward queue:**
- **Qi 2026 study page PRIORITY VERIFICATION** (still `verified: false` — Springer OA WebFetch blocked; needs alternative archive ingest method per R44/R45)
- **Menendez Vazquez 2025 MitraSolo/MitraCluster** — natural next-generation skin clock biomarker page candidate
- **Boersma 2025 BMC Cancer** — SAF-cancer-incidence companion study seed candidate
- **`molecules/proteins/aldh1a1/2/3`** RALDH family (queued from R41/R42)

Round summary in `log/R43.md`.

---

### R43 — Original planned content (closed; archived for reference)

- `biomarkers/bormann-epidermis-clock-2016.md` — first epidermis-specific methylation clock
- `biomarkers/qi-23k-epidermis-clock-2026.md` — 173-CpG cross-Fitzpatrick clock; CV MAE 5.66 yr
- `biomarkers/tapelift-clock-2026.md` — Rodríguez-Paredes 2026; tape-strip-trained
- `biomarkers/skin-autofluorescence-age-reader.md` — non-invasive in-vivo AGE accumulation; clinically deployed (AGE Reader); already used in diabetes/CVD risk stratification

### R44 — CLOSED 2026-05-19 (chemical peels + hormonal + AGE-breakers + resurfacing + skin microbiome; 11 pages) + **R38–R44 CAMPAIGN COMPLETE**

11 pages seeded + verified single-day. Exceptionally high verifier yield (~85 corrections across the batch). Final round of the 7-round R38–R44 skin-aging coverage campaign.

**Pages seeded** (all `verified: true`; partial scope for closed-access primaries): `molecules/compounds/{glycolic-acid, lactic-acid, salicylic-acid}.md` + `interventions/pharmacological/{chemical-peels, topical-estrogens, age-crosslink-breakers, dermatologic-resurfacing}.md` + `microbiome/{cutibacterium-acnes, staphylococcus-epidermidis, malassezia, skin-microbiome-aging-shifts}.md`.

**Headline corrections (continuing canonical-DB-memory + study-design fabrication patterns):**
- **Alagebrium PubChem CID FABRICATED**: `9904184` (sodium tungstate!) → `216305`
- **Vasan 2000 PNAS** model + author wrong: "aged rhesus monkeys" + "Vasan S first author" → **aged mongrel dogs** + **Asif M first author** (Sara Vasan is 3rd author); propagated correction to AGEs.md + glucosepane.md
- **Streeter 2020** species wrong: "human retinal tissue" → **aging mouse retinae** (#gap/needs-human-replication); propagated to glucosepane.md
- **Haykal 2025 HIFU SR** n + study count wholesale fabricated: "n=1,087 across 26 studies" → 45 trials/cohorts + completely different findings
- **Robati 2020 DOI WRONG**: `jocd.12908` resolves to unrelated lactobionic-acid paper → `jocd.13440`
- **Manstein 2004**: no animals (two human cohorts n=15 + 30); prototype at 1.5 µm (not CO2/Er:YAG)
- **Shibagaki 2017 n**: 74 → 37 subjects (74 was sample count); Staphylococcus DIRECTION INVERTED (significantly DECREASED in older forearm, not increased)
- **Kim 2022 n**: 118 → 61 subjects (29+32); error propagated to BOTH malassezia.md + skin-microbiome-aging-shifts.md
- **Trompezinski 2016 bakuchiol**: clinical data from BGM complex (bakuchiol + Ginkgo biloba + mannitol), not isolated bakuchiol
- **Sumita 2018 DOI** on chemical-peels page: `jdv.15114` → `jdv.15020` (correct per R39-verified study page)
- **9 new mechanism classes** registered in intervention-classes.md

**8 schema escalations queued for next CLAUDE.md cleanup** (full list in `log/R44.md`):
1. `type: tissue` formal frontmatter block (R38)
2. Stereoisomer/prodrug PubChem/ChEMBL/CAS fields (R41/R42/R44)
3. `publication-type:` for `type: study` (R39)
4. `mechanisms:` route-of-administration ambiguity (R42)
5. `model-architecture:` for `type: biomarker` (R43)
6. `mendelian-randomization: not-applicable` enum (R43)
7. `mode: procedural` for `type: intervention` (R44)
8. `type: microbe` extensions (`kingdom:` field; `gram-stain: not-applicable-eukaryote`; `oxygen-tolerance: aerotolerant-anaerobic`; `literature-checked-through:`) (R44)

---

## R38–R44 CAMPAIGN COMPLETE (closed 2026-05-19)

**62 new atomic pages across 7 rounds; ~210 agent invocations; ~365 substantive verifier corrections.**

The skin-aging coverage cluster is now structurally complete: the verified `phenotypes/skin-aging.md` hub (2026-05-05) is backed by atomic pages spanning every layer:
- **Tissue**: skin, dermis, epidermis (R38)
- **Cell-type**: dermal-fibroblasts, keratinocytes, melanocytes, Langerhans cells, McSCs (R38)
- **Studies**: 12 foundational primaries (R39) + R43 biomarker-anchor studies
- **Effectors**: MMP-1/3/9, TIMP-1, COL1A1/3A1, ELN, FBN1, LOX, KITLG, KIT (R40)
- **Process**: wound-healing (R40)
- **Topical retinoids**: tretinoin, retinol, retinaldehyde, adapalene, bakuchiol, tazarotene + class MOC (R41)
- **Topical antioxidants + UV protection**: niacinamide, ascorbic acid, alpha-tocopherol, DHM, resveratrol, UV protection (R42)
- **Biomarkers**: Bormann 2016 clock, Qi 23k clock, TapeLift clock, AGE Reader (R43)
- **Wounding + hormonal + AGE-breakers**: chemical peels class + 3 acids, topical estrogens, age-crosslink-breakers, dermatologic resurfacing (R44)
- **Microbiome**: Cutibacterium acnes, S. epidermidis, Malassezia + aging-shifts process (R44)

**Per-round summaries in `log/R38.md` through `log/R44.md`.**

**Persistent forward queue items** (not blocking; for next campaign or ad-hoc seeding):

**Cleared 2026-05-19 (post-R44 forward-queue batch — entries in log/R44.md):**
- ✅ Qi 2026 study page verified (PDF read end-to-end; 6 corrections)
- ✅ Falckenhayn 2024, Hughes 2013, Lin 2005 anchor study pages seeded + verified
- ✅ ALDH1A1, ALDH1A2, ALDH1A3 RALDH family protein pages seeded (verified: false; awaiting verifier pass)
- ✅ SOD2 protein page seeded (verified: false; literature-checked-through 2026-05-19; Van Remmen 2003 null-result preserved as `#gap/contradictory-evidence`)
- ✅ phenotypes/arterial-stiffening.md seeded (verified: false; flagged loss-of-elasticity hallmark candidate)
- ✅ biomarkers/menendez-vazquez-2025-mitrasolo-mitracluster.md seeded (verified: false; abstract-only)
- ✅ studies/boersma-2025-saf-cancer-incidence.md seeded (verified: false; gold OA DOI lookup queued)
- ✅ Allen 2023 + Mansouri 2025 + Bienkowska 2026 propagated to sirtuin-activators / sirt1 / resveratrol / nad-precursors / niacinamide / dihydromyricetin (PubMed-confirmed citations)

**Cleared 2026-05-19 (batch B — 2 verifiers + 2 seeders):**
- ✅ `molecules/proteins/sod2.md` verified (verified: true partial-scope; 4 corrections including ROMAN Phase 3 primary-endpoint correction)
- ✅ `phenotypes/arterial-stiffening.md` verified (verified: true partial-scope; 8 corrections including Mitchell 2010 HR 48% per SD; Jennings 2019 AIx@75 not cfPWV; Clayton 2023 ~20% effect)
- ✅ `molecules/compounds/ferulic-acid.md` seeded (verified: false; ChEMBL ID corrected via InChIKey lookup — canonical-DB-memory pattern continues)
- ✅ `biomarkers/skin-methylation-clocks.md` class MOC seeded (type: framework; consolidates 4 atomic skin-clock pages; placement follows R35 precedent)

**Remaining:**
- 5 newly-seeded pages still need verifier passes: ALDH1A1, ALDH1A2, ALDH1A3, Menendez Vazquez 2025 (most primary PDFs not locally available; abstract-only verification likely), Boersma 2025 (gold OA DOI lookup queued)
- R45 follow-on items: `cell-types/cutaneous-immunosenescence-cells.md`, `pathways/il-34-csf1r.md`, `tissues/hair-follicle.md`, `cell-types/sebocytes.md`
- Schema escalation candidate: dedicated `loss-of-elasticity` or `extracellular-matrix-crosslinking` hallmark page (arterial-stiffening surfaced gap)
- `molecules/proteins/par-2.md` (niacinamide canonical receptor)
- Schema clarification candidate: where should narrow-scope `type: framework` MOCs live? `frameworks/` (type-consistency) vs proximity-discoverable directory (`biomarkers/skin-methylation-clocks.md` precedent)

---

### R44 — Original planned content (closed; archived for reference)

Final catchall round; lower-priority but completes coverage:

**Chemical peels:**
- `molecules/compounds/glycolic-acid.md` — AHA; PubChem 757
- `molecules/compounds/lactic-acid.md` — AHA; PubChem 612
- `molecules/compounds/salicylic-acid.md` — BHA; PubChem 338
- `interventions/pharmacological/chemical-peels.md` — class MOC (GA + LA + SA + TCA + Jessner)

**Hormonal + AGE biology:**
- `interventions/pharmacological/topical-estrogens.md` — postmenopausal skin aging
- `interventions/pharmacological/age-crosslink-breakers.md` — Spiegel-Lab glucosepane breakers + alagebrium history (already touches skin via dermal collagen)

**Wounding-response resurfacing (single class page; granular sub-modality pages deferred):**
- `interventions/pharmacological/dermatologic-resurfacing.md` — ablative laser + non-ablative laser + IPL + microneedling + radiofrequency; collagen-stimulation mechanism (wounding response); deliberately excludes botulinum toxin + dermal fillers (purely cosmetic, no aging-mechanism story)

**Skin microbiome (3–4 pages; mirrors R33 gut-microbiome cluster but smaller):**
- `microbiome/cutibacterium-acnes.md` (formerly Propionibacterium)
- `microbiome/staphylococcus-epidermidis.md`
- `microbiome/malassezia.md`
- `microbiome/skin-microbiome-aging-shifts.md` — descriptive-process page; cohort-level shifts with age

### Cross-round propagation work

Each round closes with a propagation pass touching neighbouring already-existing pages:

- **R38 propagation:** skin-aging.md dangling-link resolution; cellular-senescence/stem-cell-exhaustion/chronic-inflammation/loss-of-proteostasis hallmark MOCs; melanogenesis/hair-greying/androgenetic-alopecia phenotypes; AGEs + glucosepane.
- **R39 propagation:** footnote → study-page wikilinks across all pages citing these 11 primaries.
- **R40 propagation:** add MMP-1 inbound from SASP + cardiac-fibrosis + osteoarthritis pages; COL1A1 inbound from tissues/skeletal-muscle + tissues/myocardium + AGE/glucosepane pages; KITLG/KIT inbound from melanogenesis + melanocyte-stem-cells; wound-healing inbound from BPC-157/TB-500/GHK-Cu/fisetin/senolytics.
- **R41 propagation:** retinoid class MOC registered in `frameworks/intervention-classes.md`; tretinoin inbound from skin-aging.md (currently footnote-only).
- **R42 propagation:** niacinamide disambiguation note on nad-precursors.md (topical niacinamide ≠ systemic NAD+ source); UV-protection inbound from skin-aging.md.
- **R43 propagation:** all 3 skin clocks linked into `frameworks/biological-age-measurement.md`.
- **R44 propagation:** skin microbiome ↔ dysbiosis hallmark MOC (currently gut-only).

### Out of scope for this campaign

Deferred deliberately; queue for separate future rounds if interest develops:

- **Skin appendages — tissue layer:** `tissues/hair-follicle.md`, `tissues/sebaceous-gland.md`, `tissues/sweat-gland.md`, `tissues/subcutaneous-fat.md`. Hair follicle is the highest-value; defer until hair-greying biology requires it.
- **Hair-follicle cell types:** `cell-types/hair-follicle-bulge-stem-cells.md`, `cell-types/sebocytes.md`, `cell-types/merkel-cells.md`.
- **Individual UV-filter compounds:** zinc oxide, avobenzone, titanium dioxide, octinoxate, tinosorb-S — class page suffices for now.
- **Botulinum toxin, dermal fillers** — purely cosmetic; no aging-mechanism story.
- **Additional MMP family members:** MMP-2, MMP-7, MMP-13 (only MMP-1/3/9 + TIMP-1 in primary sweep).

### R45 — R38-surfaced follow-ons (~6 pages; added 2026-05-19)

Items surfaced by R38 verification + seeder summaries that don't fit cleanly into R39–R44. Mostly Langerhans-cell-biology and hair-follicle-anatomy follow-ons that R38's parallel batch necessarily forward-referenced.

- `phenotypes/cutaneous-immunosenescence.md` — currently `[[cutaneous-immunosenescence]]` is a `key-aging-phenotypes` frontmatter wikilink on `cell-types/langerhans-cells.md` but resolves to nothing. Distinct from systemic `[[immunosenescence]]` (exists); covers skin-compartment-specific decline (LC density loss, dermal DC dysfunction, T-cell exhaustion in skin, contact-hypersensitivity decline, skin-cancer-immune-surveillance loss).
- `pathways/il-34-csf1r-axis.md` — LC niche signaling; IL-34 is the keratinocyte-derived CSF1R ligand that maintains LCs in situ (distinct from systemic CSF-1 / M-CSF). Anchors LC self-renewal biology surfaced on `langerhans-cells.md` `niche-signaling:` field.
- `tissues/hair-follicle.md` — dangling `[[hair-follicle]]` forward-references from `cell-types/melanocytes.md` + `cell-types/melanocyte-stem-cells.md`; deferred in original plan but R38 batch made it more pressing. Complex anatomy (IFE + bulge + dermal papilla + sebaceous-gland integration + multiple stem-cell populations).
- `cell-types/hair-follicle-bulge-stem-cells.md` — epidermal stem cells of the bulge (CK15+, slow-cycling), distinct from co-resident McSCs. Referenced from McSC + keratinocyte pages.
- `cell-types/sebocytes.md` — sebaceous gland cell type; referenced from `tissues/skin.md` as appendage cell type. Aging biology: holocrine secretion + lipid composition shifts with age.
- OPTIONAL `tissues/sebaceous-gland.md` — paired tissue page for sebocytes (R20+ tissue/cell-type pairing convention).
- **Added 2026-05-19 from R39 close:** `molecules/proteins/sod2.md` (implicit stub from Velarde 2012); `studies/nishimura-2005-hair-graying-incomplete-msc.md` (canonical McSC paper, closed-access expected); `studies/liebmann-2010-skin-wavelength-effects.md` (primary for the Krutmann-misattributed red-light claim); `studies/mohri-2025-msc-seno-differentiation.md` (Nat Cell Biol; PMID 41053225; partial supersession of Inomata 2009's "differentiation not senescence" framing — Dong 2025 was a phantom reference resolved by R40 KIT verifier).

**R45 propagation:** sebocyte ↔ sebaceous-gland mutual link; hair-follicle-bulge ↔ hair-follicle tissue + McSCs cell-type cross-links; cutaneous-immunosenescence ↔ disabled-adaptive-immunity hallmark MOC; IL-34/CSF1R ↔ langerhans-cells niche field.

### Round-1 dispatch readiness check (R38)

- All 8 R38 page titles confirmed as not-yet-existing (`find` check passed 2026-05-19). **R38 CLOSED 2026-05-19.**

---

## Forward queue — surfaced by recent rounds

Items surfaced as implicit stubs or follow-on candidates in recent batches; **not authoritative** — refresh via lint-pass for current ranking.

**From R28 close (IL-1/TLR adaptor cluster):**
- TAB1, TAB2, TAB3 — TAK1 binding-protein cluster (implicit stubs from new tak1.md)
- TBK1 cross-link expansion — page exists at `molecules/proteins/tbk1.md` (R10b drafted) but may not yet describe the MyD88-independent TLR3/TRIF arm
- IRAK1, IRAK2 — Myddosome members (lower priority since IRAK4 is master kinase)
- Study pages: Orjalo 2009 PNAS (autocrine SASP loop, 10.1073/pnas.0905299106), Li 2014 Circulation (cardiac TAK1 cKO, 10.1161/CIRCULATIONAHA.114.011195), Acosta 2013 NCB (paracrine senescence via inflammasome, 10.1038/ncb2784) — heavily-cited primary sources surfaced during R28 verification

**From R27 close (IL-1 + proteostasis):**
- HSP90 paralogs: HSP90AB1 (constitutive cytosolic), GRP94/HSP90B1 (ER), TRAP1 (mitochondrial)
- UPR effectors: IRE1α/ERN1, XBP1, GRP78/HSPA5 (HSP70 family — distinct from existing HSPA1 page), CHOP/DDIT3
- IRE1α cell-nonautonomous longevity hypothesis-page candidate (Taylor/Dillin 2013 mechanism may warrant `treatment-mode: conceptual-frame` hypothesis page)

**Long-tail backlog:**
- IL-37 — anti-inflammatory IL-1 family member (2-3 inbound; lower priority)
- mTOR/PI3K-AKT downstream effectors — audit what's still implicit
- Stem-cell-niche signaling completion (R20 partial close) — re-rank after lint sweep
- TET2 re-verification against R24b family-context updates

**From Tyshkovskiy 2026 ingest (2026-05-29; *Nature* universal transcriptomic clocks):**

Batch 1 seeded + VERIFIED 2026-05-29 (wiki-seeder → wiki-verifier; all now `verified: true`, partial scope where sources closed-access):
- [x] `model-organisms/macaca-fascicularis.md` — verified (NCBI tax 9541, AnAge max 39yr; T2T genome 3,060 Mb). #gap/needs-canonical-id on genome-wide human-ortholog %. Verifier fixed hESC-vs-iPSC + 2 footnote DOIs.
- [x] `interventions/blood-product/heterochronic-parabiosis.md` — verified (Conboy 2005/Villeda 2011/Loffredo 2013/Egerman 2015 PDF-checked; Villeda 2014/Rebo 2016 #gap/no-fulltext). Added `systemic-milieu-restoration` class to [[frameworks/intervention-classes]] + propagated to plasma-exchange. Verifier corrected GDF11 direction (Egerman = trends UP, not "no decline") + multiple n-values.
- [x] `molecules/proteins/cst7.md` — verified (cystatin F, O76096, tier 4). Verifier corrected MW (~28→~15.5 kDa), cathepsin target set (removed cathepsin C as direct target), and a Syage-2024 sign error.
- [x] `molecules/proteins/eda2r.md` — verified (Q9HAV5; Barbera **2025** Nat Commun + Arif 2025 GeroScience PDF-checked). gtex-aging-correlation populated (Spearman ρ≈0.372, rank 1 pan-tissue).
- Confirmed no live error on canonical [[gdf11]] page (already correctly framed + verified); cst7 cathepsin-C fix needed no propagation ([[disabled-adaptive-immunity]] has no cst7 content).

Batch 2 — GPNMB/LGALS3 finish + high-value propagation (2026-05-29, seed→verify):
- [x] `molecules/proteins/gpnmb.md` — fleshed out (ADAM10 shedding, LAM/DAM biology, glembatumumab-vedotin/METRIC tier-2) → **verified: true** (partial; Suda 2021 seno-antigen + several 2025-26 papers closed-access/pending). `mr-causal-evidence: not-tested → partial` (PD MR studies Li 2025 null / Guo 2026 positive). genage-id null (absent from GenAge).
- [x] `molecules/proteins/lgals3.md` — fleshed out (chimera-type domains, fibrosis, FDA-cleared HF biomarker, neuroinflammation, inhibitor pipeline) → **verified: true** (partial; Shen 2024/Xiao 2020/de Boer 2011 closed-access). `mr-causal-evidence: partial` (Henry 2022 *Circulation* causal-HF, PDF-verified; contradicted by null PAD/NAFLD MR). Verifier fixed 9 items incl. Wu 2022 renal-not-cardiac, de Boer 2010 = review.
- [x] Propagation: [[processes/partial-reprogramming]] new §"Transcriptomic-clock readout (Tyshkovskiy 2026)" (EMT/MET module, CR+embryo overlap); [[frameworks/hallmarks-of-aging]] new §"Quantifying the hallmarks: transcriptomic module clocks" (navigational).

Batch 3 seeded + VERIFIED 2026-05-29 (seed→verify; all `verified: true`, partial scope where sources closed-access):
- [x] `methods/mendelian-randomization.md` — verified (146 protein pages cite `mr-causal-evidence:`; clears R46 threshold). Verifier fixed STROBE-MR item count + citation, Henry 2022 coloc misattribution. Propagated: pointer added in `sops/finding-population-evidence.md`.
- [x] `methods/wgcna.md` — verified. Verifier fixed dynamicTreeCut + Zsummary citation-attribution (added [^langfelder2008dtc] + [^langfelder2011]). `current-protocols-citation: null` (no CP chapter — reasonable).
- [x] `methods/single-cell-rna-seq.md` — verified (scRNA + snRNA). Verifier fixed 10x/Drop-seq throughput conflation + Smart-seq2 96-well.
- [x] `molecules/proteins/sparc.md` — verified (P09486; mouse ortholog resolved to Sparc/MGI:98373; tier 3). Recency added Ham 2023 + Toba 2024 (cardiac context-dependence #gap/contradictory-evidence).
- [x] `molecules/proteins/nrep.md` — verified (Q16612, confirmed genuine NREP not P311 collision; tier 4). Verifier **softened a brief-induced over-claim** (Nrep as CR/embryo top contributor — only DOWN-set + parabiosis-top-driver are study-page-supported; rest #gap/needs-extended-data-verification). Did NOT leak to other pages.
- [x] Propagation: clock page now links [[methods/wgcna]] + [[methods/single-cell-rna-seq]] (metacells) + [[sparc]]/[[nrep]] in driver list; study page methods + down-gene links added.

Batch 4 seeded + VERIFIED 2026-05-29 (final paper-driven seeding batch; both `verified: true`, partial scope):
- [x] `molecules/proteins/s100a8-s100a9.md` — calprotectin complex page (P05109/P06702; tsc1-tsc2 precedent). NB: caught + fixed a verifier-introduced gene-set conflation (shared CR/parabiosis set = Cdkn1a/Ccl5/S100a9/Lgals3; embryonic set = Cdkn1a/S100a8/S100a9/Lgals3 — confirmed by main-agent PDF re-read of Fig 6g; all 6 other pages referencing these sets confirmed correct).
- [x] `molecules/proteins/vsig4.md` — CRIg complement receptor (Q9Y279; conserved-UP; immunosuppressive-yet-rises-with-age kept as #gap/no-mechanism).
- [x] Propagation: clock driver-line + study related-genes link both; also fixed 4 pre-existing broken `[[nf-kb-pathway]]`→`[[nf-kb]]` links (wound-healing, il-1a, mavs, fmt) surfaced during this batch.

Remaining (long-tail — DEFER to inbound-count-driven seeding per lint-pass § Step 3; single-mention genes below the standalone-value bar from this paper alone):
- [ ] Long-tail universal genes: `Ddost`, `Gpx1`, `Nmrk1`, `Fmo3`, `Vcam1` (each one-sentence in the paper; seed only if inbound count rises).
- [ ] [[tissues/blood]] — dangling link from `transcriptomic-clock-tage.md` calibration-tissues; candidate stub.
- [ ] [[pathways/lysosomal-degradation]] — stub surfaced by `cst7.md` pathways field; create or re-point to an existing process page.
- [ ] [[studies/conboy-2005-parabiosis-satellite-cells]] — study stub surfaced by `heterochronic-parabiosis.md` footnote (local PDF in archive — good verify candidate).
- [ ] New stubs surfaced by Batch 3: [[methods/spatial-transcriptomics]], [[pathways/ecm-remodeling]], [[pathways/vegf-signaling]], [[studies/davey-smith-2003-mendelian-randomization]].
- [ ] Predecessor transcriptomic clocks as biomarker pages if needed: Peters 2015 blood clock, RNAAgeCalc, Buckley 2023 brain clock (noted as #gap on [[biomarkers/transcriptomic-clock-tage]]).

---

## Cross-page propagation backlog

Deferred from prior verifier sweeps; not blocking new seeding. Each is a targeted edit on an existing page; can be done as a single propagation pass when the related cluster gets touched again.

- [[metformin]] — Martin-Montalvo χ² values; Cabreiro 2013 dose-specific numbers and live-bacteria requirement (R26c)
- [[rapamycin]] — Mannick 2018/2021 trial-identity disambiguation (R26c)
- ~~[[nmn]] / [[nr]] — Mills 2016 delivery (drinking water, not SC); Martens 2018 ~60% over placebo (NOT 2.7-fold); Yoshino 2021 muscle null result (R26c)~~ **CLEARED 2026-05-08 (R34)** — verified all three corrections were already in place; recency refresh additionally integrated 2024-2026 RCT/meta-analysis wave (Heggelund Nat Aging COPD, McDermott Nat Commun PAD, Takeda Aging Cell Werner, Brody MCI, Igarashi NMN, Schloesser Nat Metab three-precursor, Tang/Caldo-Silva/Song meta-analyses)
- [[stem-cell-exhaustion]] hallmark MOC — Sim 2002 demyelination model fix; MSC therapy CRATUS quantitatives (R26b/c)
- [[chronic-inflammation]] hallmark MOC — Carroll 2015 directionality; BHB-NLRP3 K⁺-efflux mechanism (R26b/c)
- [[notch-pathway]] — verify Kalamakis 2019 attribution if cited (R26c)

---

## Next-lint-pass items

- **UniProt REST canonical-DB drift sweep** — full 177-protein sweep ran 2026-05-08, caught 13 drifts (mostly HGNC numeric drift); script in `sops/lint-pass.md` § "UniProt canonical-DB drift sweep". **Cadence: quarterly re-run.** Two family-page subunit-mismatch cases (`ku70-ku80`, `mitofusins`) surfaced a follow-up sub-check candidate: family-page subunit-consistency.
- **Tier-1 protein re-rating done 2026-05-08** — alpha-synuclein, caspase-1, hsc70, nampt, pdk1, s6k1 flipped `druggability-tier: 1 → 2` per user decision; tags removed. Tier-1 protein pages now: 38.
- **Recency check** (R25 schema) — quarterly re-run for `type: compound` / `type: intervention` >12mo, biomarker >18mo, process >18mo, hypothesis/hallmark >24mo. As of 2026-05-08 backfill all 72 type-appropriate pages have populated fields; next staleness check will be ~2026-11 for compound/intervention.
- **Under-populated frontmatter audit** — `cell-ontology-id` and `mr-causal-evidence` are commonly null across protein pages.
- **Imploded-stub queue refresh** — re-run inbound-count discovery to repopulate the unseeded-queue and forward-queue sections above.
- **R34-batch verifier follow-up** — many of the ~45 footnotes added during R34 backfill are abstract-level only (PubMed efetch / Europe PMC / Crossref); high-priority candidates for full-PDF verifier passes when local PDFs are downloaded: Klier 2025 NEJM Evidence (BEHOLD/UBX1325), Cummings 2026 Lancet (EVOKE/EVOKE+), Tabar 2025 Nature (bemdaneprocel), Sanchez 2026 Nature (cardiac AP), Berdugo-Vega 2026 Neuron (non-Sinclair OSK), Argentieri 2024 Nat Med (ProtAge), Ivimey-Cook 2025 Aging Cell (vertebrate meta-analysis), Schloesser 2026 Nat Metab (gut-microbial NA conversion).

---

## Schema notes (forward-looking)

Carried forward from R26+ verifier sweeps; these are observations the next CLAUDE.md cleanup pass should consider.

- **Per-claim source-tier annotation** — when two source-chains give different values for the same quantitative (R26 GSDMD pore stoichiometry: Galluzzi 2018 review value vs Hu/Liu/Pan 2016-2020 primary structural value), both should be preserved with explicit pointer to the more recent / structurally direct measurement. R26 used a prose convention; consider promoting to a typed annotation if the pattern recurs.
- **Body Results § over abstract numbers** — HSC abstract-vs-body Jaiswal 2014 CI discrepancies reinforced that body Results § is canonical when abstract and body disagree. Implicit in `sops/extracting-evidence.md`; consider making explicit.

---

## How to update this file

- **Don't add round-by-round narrative here.** Round summaries belong in `log/R<N>.md` (linked from the thin `log.md` index). This file is intent-only.
- When you complete a `[ ]` item, **delete the entry** rather than flipping it to `[x]` — the wiki itself is canonical.
- When you find an implicit stub not yet on the unseeded queue, add it under "Currently unseeded" with `[ ]` and a reference count.
- Refresh the implicit-stub queue periodically by running the discovery script in `sops/lint-pass.md` § Step 3.
- The roadmap is **descriptive, not gating** — pages can be created without being on the roadmap; this is a planning aid, not a permission system.
