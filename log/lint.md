# log/lint.md — lint-pass entries

Sub-file of [[log]] — see parent for index.

## [2026-07-15] lint — relative wikilink portability sweep

User-prompted follow-up after a broken GitHub Pages link on [[protein-intake]] exposed a deployment-base portability problem. Swept all public Markdown for live `../`-prefixed wikilinks and converted **259 links across 35 files** to canonical basename form, preserving display aliases. The historical inline-code example in `log/2026-06-14.md` was intentionally retained because it documents an earlier correction and is not rendered as a link.

Target audit found no filename collisions. Sixty-two distinct target basenames resolve uniquely; 16 remaining unresolved basenames are pre-existing explicit/implicit stubs rather than regressions introduced by the sweep. Two stale targets were resolved to existing canonical pages: `jak-stat` → [[jak-stat-pathway]] and `by-intervention-type` → [[interventions-by-modality]]. Frontmatter validation, diff whitespace checks, and the public privacy/leak gate passed.

## [2026-06-02] lint — stale page-existence gap sweep

User-prompted: many `#gap/needs-page`/`#gap/needs-stub`/`#gap/needs-*-page`/`#gap/needs-seeding`/`#gap/missing-page` markers were placed before the referenced page was seeded and are now stale. Swept the full page-existence gap family (excluding the append-only `log/` audit trail), cross-checked every referenced wikilink target against the live file inventory, and removed/rewrote the markers whose target now exists (resolving by basename, so links already pointed to the right file regardless of folder).

**Stale gaps resolved (target now exists) — 14 files edited:**
- `biomarkers/il-6-biomarker.md` — [[molecules/proteins/il-6]] (needs-protein-page), [[molecules/compounds/tocilizumab]] (needs-compound-page)
- `studies/iwata-2025-ewingella-americana-antitumor.md` — [[microbiome/ewingella-americana]], [[interventions/pharmacological/bacterial-cancer-therapy]] (both needs-seeding)
- `molecules/compounds/setmelanotide.md` — [[interventions/pharmacological/peptide-therapeutics]] (needs-stub)
- `molecules/compounds/tazarotene.md` — [[retinoids]] (needs-page, ×2)
- `interventions/gene-therapy/crispr-base-editing-pcsk9.md` — [[pcsk9]] (needs-stub)
- `hypotheses/translation-failure-of-aging-interventions.md` — [[interventions-testing-program]] (missing-page, ×2; reworded body + dropped Limitations bullet)
- `molecules/proteins/fgf23.md` — [[bone]] + [[osteocytes]] (needs-page, ×2)
- `molecules/proteins/osteopontin.md` — [[bone]] (needs-page)
- `molecules/proteins/runx2.md` — [[matrix-gla-protein]], [[osteoporosis]], [[bone]] (needs-page)
- `cell-types/osteocytes.md` — [[osteoporosis]], [[runx2]], [[bmp-2]], [[osteopontin]], [[bone]] (needs-page)
- `phenotypes/osteoporosis.md` — [[sost]] (needs-page, ×3)
- `molecules/proteins/matrix-gla-protein.md` — [[bmp-2]] (needs-page)
- `molecules/proteins/sost.md` — [[dkk1]] (needs-page)
- `pathways/wnt-beta-catenin.md` — [[sost]], [[dkk1]] (needs-page)
- `molecules/proteins/lrp5-lrp6.md` — [[bone]], [[osteocytes]] (reworded so the gap attaches only to still-missing [[osteoblasts]])
- `tissues/bone.md` — [[osteoporosis]] (needs-page, ×3)
- `tissues/arteries.md` — [[endothelial-cells]] (needs-page, ×2)
- `cell-types/vsmc.md` — [[arteries]] (needs-page, frontmatter comment + body + See-also)
- `molecules/proteins/caspase-1.md` — [[ketogenic-diet]] (split from still-pending [[beta-hydroxybutyrate]])
- `processes/vascular-calcification.md` — [[runx2]], [[bmp-2]], [[osteopontin]], [[wnt-beta-catenin]] (was `wnt-signaling`), [[matrix-gla-protein]], [[phosphate-additive-reduction]] (needs-page, 7 markers)

**Remaining real page-existence gaps, ranked by inbound demand (distinct linking pages):**

| Rank | Missing page | Inbound | Type / home | Notes |
|---|---|---|---|---|
| 1 | `osteoblasts` | 9 | cell-type | Highest-demand missing node; master bone-formation cell referenced from runx2/sost/dkk1/lrp5-lrp6/osteocytes/osteoporosis/bone. Seed first. |
| 2 | `osteoclasts` | 4 | cell-type | RANKL/OPG resorption arm; pairs with osteoblasts. |
| 2 | `hyperphosphatemia` | 4 | phenotype/node | Central driver node in vascular-calcification causal graph. |
| 4 | `vitamin-k` | 4 | compound | Substrate for MGP carboxylation; ties to MK-7 supplementation hypothesis. |
| 5 | `splicing-dysregulation` / `alternative-splicing` | 3 | process | Canonical home for age-related spliceosome biology contextualizing SF3B1 (3 markers on sf3b1.md). Pick one canonical slug. |
| 6 | `bmsc` (marrow stromal) | 2 | cell-type | Osteoblast/adipocyte precursor; lineage-drift in bone aging. Partial overlap with existing [[mesenchymal-stem-cells]] — decide split vs alias. |
| 6 | `ctnnb1` (β-catenin) | 2 | protein | Downstream Wnt effector; demanded by wnt-beta-catenin + lrp5-lrp6. |
| 6 | `cardiovascular-system` | 2 | framework MOC | Organ-system overlay; arteries/heart/myocardium currently un-MOC'd. |
| 6 | `beta-hydroxybutyrate` | 2 | compound | NLRP3-suppressing ketone body; ketogenic-diet sibling. |
| 6 | `aim2` | 2 | protein | DNA-sensing inflammasome platform. |
| 11 | `macrophages` | 2 | cell-type | Surprisingly low inbound — likely under-linked rather than truly low-priority; worth seeding given centrality to inflammaging. |
| 12 | `romosozumab` | 1 | compound | FDA-approved anti-sclerostin mAb; osteoporosis cluster. |
| 12 | `nlrc4` | 1 | protein | Alternative inflammasome platform. |
| 12 | `ggcx`, `vkor` | 1 ea | protein | Vitamin-K cycle enzymes; MGP carboxylation pathway. |
| 12 | `nitric-oxide` | 1 | process | eNOS→NO signaling; endothelial aging. |
| 12 | `adventitial-fibroblasts`, `aortic-aneurysm` | 1 ea | cell-type / phenotype | Arteries-page cross-reference completion. |
| 18 | `tocotrienols` | 0 | compound | No inbound demand yet; lowest priority (scope-note placeholder on alpha-tocopherol only). |

**Class-seeding gaps (not single-page; in `frameworks/interventions-by-hallmark.md`)** — left in place, genuinely unseeded: partial-reprogrammer, HDAC-inhibitor, SIRT6-activator, chaperone-enhancer compound pages; TA-65 compound page; AAV-TERT intervention page. Plus a tagging review (spermidine/rapamycin → loss-of-proteostasis cross-link).

`log/` audit-trail files were intentionally not edited (historical record).

## [2026-05-07] lint

Structural + coverage lint pass run from a cold start; the focus was hallmark-causality coverage and mechanistic depth per hallmark.

**Orphans (27 total, triaged):**
- 6 framework MOCs never wikilinked from anywhere: `frameworks/hallmark-causality-graph.md`, `frameworks/interventions-by-hallmark.md`, `frameworks/intervention-classes.md`, `frameworks/interventions-by-modality.md`, `frameworks/causal-graph-data.md`, `frameworks/biological-age-measurement.md`. All exist (R14–R16 vintage) and are referenced via path-strings in narrative text but never via `[[wikilink]]`. **Fix: add to `index.md` § "Frameworks (navigational overlays)" — currently shows only `[[hallmarks-of-aging]]` and `[[sens-damage-categories]]`.**
- 2 biomarker pages orphaned (`biomarkers/telomere-length-leukocyte.md`, `biomarkers/frailty-index.md`) — should be linked from `frameworks/biological-age-measurement.md` (which is itself orphaned) and from the telomere-attrition / phenotypes/frailty pages.
- 7 study pages orphaned (`lopez-otin-2013`, `lopez-otin-2023`, `soengas-2001`, `yousefzadeh-2018`, `tyner-2002`, `waziry-2023`, `li-2023`) — script alias-blindness is partly responsible (these are actually wikilinked as `[[studies/...]]` from atomic pages but the basename-only orphan check misses the path-prefixed form). Confirm pattern, then update the lint script to grep both bare-name and path-form patterns.
- 2 atomic-page orphans needing real cross-reference work: `molecules/proteins/lamp2.md` (only mentioned via the `lamp-2a` alias from `tau.md`; main protein page never directly wikilinked), `molecules/compounds/empagliflozin.md` (clinical-stage:fda-approved, hallmarks:[deregulated-nutrient-sensing, chronic-inflammation, mitochondrial-dysfunction], but no inbound link from those hallmark pages or from the GLP-1/SGLT2 intervention class page).
- 1 hypothesis orphan (`hypotheses/negligible-senescence.md`) — should be linked from `hallmarks/cellular-senescence.md` and from any model-organism page covering naked mole rat / hydra.
- 1 pathway orphan (`pathways/mismatch-repair.md`) — should be linked from `hallmarks/genomic-instability.md` and from the DNA-damage-response pathway page.
- 1 system orphan (.claude/agents) — expected; ignore.

**Causal-graph integrity:**
- All 12 hallmarks have populated `causes:` and `caused-by:` frontmatter except `deregulated-nutrient-sensing.caused-by:` which is intentionally empty (per hyperfunction theory framing).
- One bug: `hallmarks/telomere-attrition.md` `causes:` lists `[[telomere-attrition]]` itself (self-loop). Fix on next propagation pass.
- Two cross-edges asymmetric: `chronic-inflammation` lists `stem-cell-exhaustion` as both upstream and downstream, and `stem-cell-exhaustion` does the same back. The mutual-causation framing is biologically defensible (inflammation drives stem-cell exhaustion which drives more inflammation) but the causal-graph framework page should explicitly mark these as feedback loops rather than node-edge violations.

**Per-hallmark mechanistic depth (proteins + pathways + processes referencing the hallmark):**

| Hallmark | Proteins | Pathways | Processes | Compounds/Interventions | Tractability | Status |
|---|---|---|---|---|---|---|
| cellular-senescence | 52 | 17 | 8 | 18 | high | well-covered |
| deregulated-nutrient-sensing | 50 | 6 | 2 | 21 | high | well-covered |
| disabled-macroautophagy | 43 | 4 | 6 | 11 | high | well-covered |
| chronic-inflammation | 41 | 11 | 5 | 31 | high | well-covered |
| loss-of-proteostasis | 33 | 3 | 6 | 16 | moderate | well-covered |
| mitochondrial-dysfunction | 28 | 9 | 7 | 22 | moderate | well-covered |
| genomic-instability | 23 | 13 | 2 | 7 | low | mech-deep, intervention-thin |
| stem-cell-exhaustion | 21 | 10 | 2 | 20 | low | mech-thin, intervention-deep |
| epigenetic-alterations | 12 | 2 | 1 | 7 | moderate | severely under-covered |
| altered-intercellular-communication | 5 | 5 | 1 | 15 | moderate | mech-thin |
| dysbiosis | 4 | 1 | 0 | 4 | moderate | severely under-covered |
| telomere-attrition | 4 | 0 | 0 | 2 | low | severely under-covered |

**Top implicit-stub mechanism clusters (inbound counts via Step-3 discovery, cluster-grouped):**

- **Mitochondrial dynamics**: `mfn1` (17), `mfn2` (17), `mitochondrial-dynamics-pathway` (9), `miro2` (6) — explicitly listed as planned in `mitochondrial-dysfunction` `verified-scope` line.
- **Telomere biology**: `telomerase-pathway` (14), `telomerase` (1), `replicative-senescence` (1), `mtdna` (7), `dkc1` (7).
- **DNA repair detail**: `pcna` (13), `xrcc1` (10), `mutyh` (8), `ape1` (8), `lig1` (6), `polb` (5), `rpa` (6), `xpf` (5).
- **Inflammasome/oxidative**: `nlrp3` (12; protein, distinct from existing `nlrp3-inflammasome` pathway page), `oxidative-stress` (8), `reactive-oxygen-species` (5), `sting` (6), `irf3` (7).
- **CMA/proteostasis detail**: `lamp-2a` (11), `chop` (9), `gadd34` (8), `hri` (5), `wipi2` (5).
- **Epigenetic detail**: `hdac` (10), `dna-demethylation` (6), `mitf` (7).
- **Stem-cell signaling**: `tgf-beta-pathway` (8), `wnt-pathway` (5), `nanog` (9), `gsk3b` (9), `smad4` (9), `fgf-signaling` (7), `melanocyte-stem-cells` (5).
- **Dysbiosis**: `gut-barrier` (10), `gut-microbiome` (9).
- **Heavyweight orphan studies**: `studies/lu-2020-osk-vision-restoration` (10), `studies/yang-2023-epigenetic-information-loss` (9), `studies/ocampo-2016-partial-reprogramming` (7), `studies/horvath-2013-epigenetic-clock` (7), `studies/guerreiro-2013-trem2-ad` (5).

**Intervention coverage gaps surfaced:**
- `genomic-instability` (only 7 inbound interventions despite 23 proteins, 13 pathways) — DNA-repair-augmenting therapeutics largely missing (PARP inhibitors as senolytics, NAD/PARP-axis interventions, DNA-PKcs modulators).
- `telomere-attrition` (only 2 inbound interventions) — TA-65, telomerase mRNA (Andrews/Idoyaga), GRN163L/imetelstat, AAV-TERT (exists) absent.
- `epigenetic-alterations` (only 7 inbound interventions) — HDAC-inhibitor class page absent; partial-reprogramming + Yamanaka-factor interventions partly covered (aav-osk exists) but the broader class is thin.
- `dysbiosis` (only 4 inbound interventions) — FMT, Akkermansia supplementation, prebiotic class, postbiotics absent.

**Schema-clarification carry-forwards** (none new this pass; all R26+ items already in CLAUDE.md).

**Notable surprises:**
- The wiki's mechanistic depth is sharply bimodal: the top 6 hallmarks have 28–52 linked proteins each; the bottom 4 have ≤12 each. The bottom 4 (`epigenetic-alterations`, `altered-intercellular-communication`, `dysbiosis`, `telomere-attrition`) are also the hallmarks where mechanistic causes are most actively contested in the field — coverage thinness reflects field-uncertainty as much as wiki-incompleteness.
- The `stem-cell-exhaustion` paradox: 20 inbound interventions despite tractability:low. Most of those interventions target downstream readouts (sarcopenia, immunosenescence) rather than upstream cause. The hallmark page should disambiguate "intervention prevents/reverses upstream cause" from "intervention compensates for downstream consequence."

## [2026-05-04] lint — implicit-stub queue refresh

Ran [[lint-pass]] § Step 3 (implicit-stub discovery script) post-Round-4 to re-rank Round 5+ priorities.

**Top of queue (≥5 inbound refs after collapsing path duplicates):**
- 13 foxo3 (PI3K/IIS) — appears as both `foxo3` and `molecules/proteins/foxo3` (~7+7-1)
- 10 bim, 10 bad, 7 bid (apoptosis BH3-only)
- 9 beclin-1 (autophagy core)
- 9 spermidine (NAD/autophagy compound)
- 8 akt (PI3K/IIS)
- 7 alzheimers-disease (disease entity)
- 6 each: ubiquitin-proteasome-system, neurodegeneration, navitoclax, mitochondrial-biogenesis, inflammaging, a1331852
- 5 each: pink1-parkin-pathway, pi3k, nampt, deptor, cgas-sting, bone-marrow

**Total tier-A entries (≥5 refs): 20 stubs**
**Total tier-B entries (4 refs): 16 stubs**
**Total tier-C entries (3 refs): 22 stubs**
**Total tier-D entries (2 refs): ~50 stubs**
**Total tier-E entries (1 ref): ~200+ stubs (mostly study pages)**

**Re-prioritization:** Original Round 4 plan (phenotypes/disease) was deferred (became actual Round 8) because Round 4 became "model organisms + cell types." Original Round 5 (hypotheses) deferred to new Round 9. New Round 5 = apoptosis machinery completion (BH3-only family + executioners + senolytic compounds; ~45+ collective refs — single highest-density unblock per page). See ROADMAP.md § "Suggested seeding order."

**Housekeeping issues surfaced (NOT addressed in this lint pass):**
- Duplicate study slugs: ~9 instances of the same paper linked under 2-3 different filenames (e.g., `willcox-2008-foxo3` vs `-foxo3a` vs `-foxo3a-longevity`; `holzenberger-2002-` vs `-2003-`; `zhu-2015-senolytic-drugs` vs `-achilles-heel-senescent-cells`). Will require a find-and-replace housekeeping pass to normalize.
- Capitalization bugs: `Rapamycin`, `Disabled-macroautophagy`
- Trailing-character bugs: `senolytics.md` (`.md` suffix in link), `stem-cell-therapy/` (trailing slash), bare `interventions/`

**Skipped lint steps in this pass:**
- Step 1 (orphan pages, broken links beyond implicit stubs, missing frontmatter) — not run
- Step 2 (unsourced claims sweep, contradictions sweep, stale claims, decayed URLs) — not run; Round 4 verifiers already surfaced and addressed many of these inline
- Step 4 (verify AI-extracted pages) — Round 4 was effectively this for the 12 new pages; remaining `verified: false` candidates are mostly closed-access study pages awaiting OA access
- Step 5 (gaps tracker) — not refreshed

Recommend a fuller multi-step lint pass after Round 7 closes (when the apoptosis + autophagy + IIS clusters are complete and the link graph stabilizes).

## [2026-05-04] lint — full pass post-Round-9

Per `sops/lint-pass.md`, ran structural + content + coverage + verification lint after Rounds 5-9 closure.

### Coverage summary

- **Total wiki.md files: 159** (excluding.obsidian,.claude, README)
- **`verified: true`: 129** — 81% of all pages are PDF-verified
- **`verified: false`: 1** — only `studies/li-2023-dual-mtor-nad-gerotherapy.md` remains
- **No verified field** (hallmark stubs, MOC pages, frontmatter-only pages): 19

### Structural lint

- **Orphans (true): 1** — `interventions/pharmacological/senomorphics.md` is genuinely orphaned (not linked from any parent MOC). Recommend: link from [[interventions]] or [[chronic-inflammation]] hallmark page when expanded.
- False-positive orphans (regex didn't match path-form references): `.claude/agents/*` (agent definitions, not wiki content); `studies/*` (referenced via `[[studies/name]]` paths); `hypotheses/negligible-senescence.md` (referenced via `[[hypotheses/negligible-senescence]]`); `sops/writing-hypothesis-pages.md` (referenced from CLAUDE.md).
- **Pages missing `type:` frontmatter: 2** — `CLAUDE.md` (intentional; not a wiki entity) and `log.md` (intentional; chronological audit trail). Both correct.

### Content lint — gap-tag census

| Gap tag | Count |
|---|---|
| `#gap/no-fulltext-access` | 669 |
| `#gap/needs-replication` | 515 |
| `#gap/unsourced` | 471 |
| `#gap/needs-human-replication` | 406 |
| `#gap/no-mechanism` | 298 |
| `#gap/contradictory-evidence` | 165 |
| `#gap/needs-canonical-id` | 137 |
| `#gap/long-term-unknown` | 128 |
| `#gap/dose-response-unclear` | 93 |

The `no-fulltext-access` count reflects that ~25% of cited primary sources are paywalled/closed-access. The `unsourced` and `needs-replication` counts will decrease as study pages get filled in (currently only 6 study pages exist for ~50+ referenced studies).

### Coverage lint — refreshed implicit-stub queue

647 total broken wikilinks (entities referenced but no page exists). Top-priority gaps after filtering studies/aliases:

**Tier A (10+ inbound, high-leverage gaps):**
- `[[ubiquitin-proteasome-system]]` (17) — major hallmark-process; foundational
- `[[tbk1]]` (15) — TBK1 kinase; phosphorylates OPTN-Ser177 + NDP52 for mitophagy/xenophagy; ALS gene
- `[[14-3-3]]` (14) — universal phospho-binding scaffold; sequesters BAD, FOXOs, TFEB
- `[[xiap]]` (12) — IAP-family caspase inhibitor; modulates apoptosis decision
- `[[bcl-w]]` (12) — BCL-2 family member; IMR90 SCAP component (Yosef 2016 verified)
- `[[atg10]]` (12) — autophagy E2 for ATG12-ATG5 conjugation
- `[[grb2]]` (10) — RTK adapter; RAS-MAPK pathway from INSR/IGF1R
- `[[brain]]` (10) — anatomical reference; tissue stub for cross-linking
- `[[bone-marrow]]` (10) — anatomical/HSC niche

**Tier B (5-9 inbound):**
- `[[smac-diablo]]` (9), `[[fip200]]` (9), `[[atg16l1]]` (9)
- `[[vdac1]]` (8), `[[mfn1]]` (8), `[[mfn2]]` (8), `[[miro1]]` (8) — mitochondrial dynamics; PINK1/Parkin substrates
- `[[atg3]]` (8) — autophagy E2 for LC3 lipidation
- `[[skeletal-muscle]]` (8) — tissue
- `[[caspase-7]]` (7) — executioner caspase paralog of caspase-3
- `[[nlrp3-inflammasome]]` (7) — major hallmark pathway; CANTOS biology
- `[[myocardium]]` (7), `[[glut4]]` (7), `[[age-1]]` (7)
- `[[oxphos]]` (6), `[[mitochondrial-biogenesis]]` (6), `[[cardiac-fibroblasts]]` (6), `[[alpha-synuclein]]` (6)
- `[[nampt]]` (5), `[[jak-stat-pathway]]` (5), `[[deptor]]` (5), `[[cgas-sting]]` (5)

**Aliases that look broken but resolve correctly:**
- `[[inflammaging]]` (17) → aliased on `[[chronic-inflammation]]` hallmark page
- `[[irs1]]` (10) → aliased on `[[irs-1]]`
- `[[bnip3l]]` (4) → aliased on `[[nix]]`

### Verification lint

Only 1 page remains `verified: false`: `studies/li-2023-dual-mtor-nad-gerotherapy.md`. All other drafted pages have been verified.

### Stub pages still active

22 pages tagged `#stub`. The most consequential are the **12 hallmark MOC pages**, which still carry only one-line descriptions despite being heavily cross-linked. Filling these out is a major Round 10 priority — they're foundational synthesis pages over 100+ verified atomic entities.


## [2026-05-08] lint | UniProt drift sweep (R34 backfill)

Ran the full UniProt canonical-DB drift sweep scaffolded in R34 (`sops/lint-pass.md` § "UniProt canonical-DB drift sweep"). Script saved to `/tmp/uniprot-drift.py`; ~3 min walltime against ~177 protein pages.

**Pages checked:** 179 `.md` files in `molecules/proteins/`. Script-skipped pages with `uniprot: null` (foxo-transcription-factors.md = family page, terc.md = ncRNA) — flagged as fetch errors but not actual drift cases (the script tried to GET `/uniprotkb/null` and the API correctly returned 400). Effective coverage: 177 pages with a populated `uniprot:` accession.

**Drifts found:** 13 pages with frontmatter drift, all in HGNC/NCBI-Gene/Ensembl fields. Zero accession-level drift on `uniprot:` itself.

Breakdown by field:
- **hgnc**: 11 drifts — 8 numeric-vs-numeric drift (atg10 21073→20315; atg101 25758→25679; bcl-w 993→995; bcl2l13 15769→17164; deptor 24784→22953; fip200 15276→15574; foxo4 7138→7139; ku70-ku80 12830→4055; myostatin 7546→4223), 3 null-fill cases (14-3-3 null→12855; eif2alpha null→3265; gcn2 null→19687)
- **ncbi-gene**: 1 drift (14-3-3 null→7534, null-fill)
- **ensembl**: 1 drift (mitofusins ENSG00000171109→ENSG00000116688 — wiki had MFN1's ENSG but top-level `uniprot:` is O95140=MFN2; updated to MFN2 ENSG and corrected the misleading inline comment)
- **uniprot accession**: 0 drifts (consistent with R34 sample finding; UniProt accessions are extremely stable)

**All 13 drift cases fixed in-line.** No human-judgment cases — all were mechanical ID corrections (HGNC numeric drifts, null-fills from API, ENSG-paralog mismatch on a family page where the top-level uniprot field was unambiguous). Re-run of the script after fixes returned 0 drifts.

**Notable patterns:**
- HGNC numeric-vs-numeric drift was the single most common type (8/13). Confirms R34 sample lesson: HGNC IDs are the most drift-prone canonical-DB field.
- Two ku70-ku80 / 14-3-3 cases were "subunit-mismatch" drifts on multi-protein family pages — the top-level `uniprot:` accession identifies a primary subunit but the HGNC/ENSG fields had been populated from a different subunit. Recommend updating the SOP to flag family-page subunit-consistency as a derived check.
- The mitofusins ensembl drift exposed a contradiction between `uniprot: O95140` (MFN2) and the inline comment claiming "MFN1 (primary subunit per R14 family-page convention)" — the comment was wrong and the page's top-level accessions are all MFN2-keyed. Comment corrected during the fix.

**No re-verification needed** — no `uniprot:` accession-level drift was found, so no aging-relevant claims tied to a now-deprecated accession need re-checking.

**Pages with verified-scope notes mentioning unchecked canonical-DB fields:** atg101, bcl-w, bcl2l13, deptor, fip200, foxo4, ku70-ku80, mitofusins, myostatin all carried `verified-scope:` text saying "canonical-DB identity fields not independently re-checked" — this drift sweep IS that re-check. Verified-scope strings remain accurate after fixes (the unchecked-at-the-time scope is now checked-at-this-date). No edits to verified-scope descriptions needed; the next routine verifier pass can update those strings if desired.
