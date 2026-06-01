---
type: protein
aliases: [RALDH2, retinaldehyde dehydrogenase 2, retinal dehydrogenase 2]
uniprot: O94788
ncbi-gene: 8854
hgnc: 15472
ensembl: ENSG00000128918
mouse-ortholog: Aldh1a2
pathways: []
hallmarks: ["[[epigenetic-alterations]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Canonical DB fields verified against UniProt O94788 (all match). Takano 2020 (aging/RALDH2 Tregs) and Shepherd 2018 (ALDH1A2 OA) verified against local PDFs — corrections applied (strain BALB/c not C57BL/6; n corrected; Shepherd n=247 patients confirmed). Kelly 2016 verified against local PDF (claims confirmed). Wu 2008 PDF unresolvable from local archive (conference news downloaded instead of paper) — Crossref confirms title and journal; RALDH2 testis localization claim tagged #gap/no-fulltext-access pending re-check. Niederreither 2001/2002/2003 and Duester 2008/2009 not_oa — unverifiable from local archive; tagged accordingly. Matrongolo 2023, Woloszynowska 2020, Zhu 2023 not_oa — unverifiable."
literature-checked-through: 2026-05-19
---

# ALDH1A2 (RALDH2)

The principal embryonic source of all-trans retinoic acid (atRA) during mouse and human development. ALDH1A2 / RALDH2 oxidizes retinaldehyde (vitamin A aldehyde) to atRA in an NAD-dependent reaction — the second and rate-limiting step of the retinoid signaling axis. Its embryonic indispensability is demonstrated by the fact that homozygous loss causes lethality at ~E9.5 in mice, phenocopying retinoic acid deficiency and fully rescuable by maternal atRA supplementation. In adult tissues, expression is restricted but functionally critical: meningeal fibroblasts, mesenteric lymph node dendritic cells, the testis, and cartilage all depend on ALDH1A2 for local RA production.

## Identity

- **UniProt:** O94788 (AL1A2_HUMAN; Swiss-Prot manually curated)
- **NCBI Gene:** 8854
- **HGNC symbol:** ALDH1A2
- **Ensembl:** ENSG00000128918
- **Mouse ortholog:** Aldh1a2 (one-to-one ortholog; functionally conserved)
- **Length:** 518 amino acids; cytoplasmic homotetramer
- **Family:** Aldehyde dehydrogenase superfamily; ALDH1A subfamily (ALDH1A1/A2/A3 paralogues)

## Enzyme mechanism

ALDH1A2 catalyzes the NAD⁺-dependent irreversible oxidation:

```
all-trans-retinal + NAD⁺ → all-trans-retinoic acid (atRA) + NADH + H⁺
```

The catalytic mechanism uses Cys320 as a nucleophile and Glu286 as the proton acceptor (UniProt O94788, active-site annotation). The enzyme also acts on 9-cis-retinal and 13,14-dihydroretinal with lower efficiency. As the enzymatic step from retinaldehyde to atRA is essentially irreversible, ALDH1A2 activity is a key determinant of local atRA concentration; catabolism is handled downstream by CYP26 family enzymes [^duester2008].

## Paralogue comparison

| Paralogue | Primary expression (adult) | Key aging / disease context |
|---|---|---|
| ALDH1A1 | Liver, HSCs, dopaminergic neurons | Hepatic RA synthesis; stem-cell quiescence |
| **ALDH1A2** | Meninges, mesenteric DCs, testis, cartilage | Embryonic morphogenesis (dominant); adult immune tolerance |
| ALDH1A3 | Nasal epithelium, olfactory mucosa | Olfactory RA; metabolic disease (adipose) |

The three paralogues occupy complementary, largely non-overlapping niches in adult tissue. Compensation across paralogues is limited in vivo, as demonstrated by the non-viability of Aldh1a2−/− embryos despite normal Aldh1a1 and Aldh1a3 expression [^niederreither2001].

## Embryonic expression and knockout phenotype

ALDH1A2 is the dominant RALDH during gastrulation and organogenesis. In mouse embryos, Raldh2 mRNA is first detectable in the lateral plate mesoderm at E7.5, expanding to somites, heart, forebrain–hindbrain boundary, and limb buds through E10.5 [^niederreither2001].

**Aldh1a2−/− (Raldh2 null) phenotype:**

- **Embryonic lethality at E9.5** — heart fails to undergo normal looping; severe posterior truncation [^niederreither2001]
- Cardiac defects include ventricular hypoplasia and failure of outflow tract septation [^niederreither2003]
- Posterior pharyngeal arch derivatives are absent (affecting aortic arches, thymus, parathyroid glands); vagal neural crest fails to populate the gut, producing Hirschsprung's disease-like aganglionosis [^niederreither2003]
- Spina bifida and posterior vertebral/hindgut defects when Cyp26a1 mutation is combined with Aldh1a2 haploinsufficiency, confirming the RA-dose sensitivity of axial patterning [^niederreither2002]

**Maternal RA rescue:** Systemic administration of atRA to pregnant Raldh2−/− dams (E7.5–E8.5) rescues the earliest cardiac and axial defects, allowing embryos to survive past E9.5. Full rescue is incomplete — rescued embryos subsequently die from outflow tract septation failure, because the RA requirement extends beyond the rescue window [^niederreither2001] [^niederreither2003]. This genetic rescue experiment is the definitive evidence that ALDH1A2-dependent RA synthesis is the causal factor, not off-target enzyme activity.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | partial — loss-of-function variants in humans cause congenital diaphragmatic hernia with cardiovascular defects (DIH4; AR), consistent with RA deficiency |
| Replicated in humans? | partial — human DIH4 phenotype mirrors subset of mouse Raldh2−/− defects; full lethal phenotype not testable |

## Adult tissue expression and function

ALDH1A2 expression is substantially downregulated after organogenesis in most tissues; residual adult expression is concentrated in:

**Meninges.** Arachnoid fibroblasts are a major source of paracrine atRA for the underlying cortex. Raldh2 is expressed in meningeal mesenchyme, and loss of meningeal RA (via loss of the transcription factor Twist1, which drives Raldh2 expression) is sufficient to induce cortical gyrification in otherwise lissencephalic mice — demonstrating that balanced meningeal RA signaling actively maintains cortical architecture [^matrongolo2023]. Perivascular stromal cells (Col1a1⁺) upregulate Raldh1 and Raldh2 following brain injury and may contribute to neuroprotective RA signaling during repair [^kelly2016].

**Mesenteric lymph node dendritic cells.** Intestinal and mesenteric DCs use ALDH1A2-derived atRA to imprint gut-homing receptors (α4β7 integrin, CCR9) on T cells and to promote Foxp3⁺ regulatory T-cell (Treg) differentiation. This is a critical step in mucosal immune tolerance [^takano2020].

**Testis.** RALDH2 is expressed in round spermatids in the adult testis [^wu2008], where atRA is required for spermatogonial differentiation and meiotic entry. #gap/no-fulltext-access (Wu 2008 PDF unresolvable from local archive; Crossref confirms title "Expression of the retinoic acid-metabolizing enzymes RALDH2 and CYP26b1 during mouse postnatal testis development" — round spermatid localization claim not independently PDF-verified).

**Cartilage.** ALDH1A2 is expressed in articular chondrocytes; its product atRA exerts anti-inflammatory and chondroprotective effects. The *ALDH1A2* locus (primary GWAS signal: rs3204689) was identified by GWAS as associating with hand osteoarthritis risk. Functional follow-up (Shepherd 2018) identified rs12915901 as the key intronic functional SNP responsible for allelic expression imbalance (AEI) at this locus; the risk A allele reduces ALDH1A2 expression in cartilage by ~28%, bone by ~15%, and fat pad by ~14%. ALDH1A2 mRNA is 0.3-fold lower overall in OA vs non-OA hip cartilage (p<0.01, RNA-seq; n=10 OA vs 6 NOF controls) [^shepherd2018] [^zhu2023].

## Aging relevance

Direct evidence that ALDH1A2 protein levels or activity decline with chronological aging in humans is sparse (#gap/needs-aging-expression-data). However, several converging lines implicate the retinoid axis — and ALDH1A2 specifically — in aging-associated biology:

**Mesenteric DC RALDH2 declines with age.** A mouse study documented that RALDH2 mRNA is significantly decreased in mesenteric lymph node DCs from aged (18–27-month) vs young (8–12-week) BALB/c mice [^takano2020]. CpG hypermethylation at the Aldh1a2 promoter was elevated in aged DCs (approximately 10% of 57 CpG motifs methylated in aged vs near-zero in young), directly linking epigenetic silencing to reduced RA production. The downstream consequence was a reduced capacity to generate Foxp3⁺ Tregs — a mechanism potentially contributing to age-related mucosal immune dysregulation and altered gut tolerance.

**Vitamin A axis decline with aging.** The broader retinoid axis declines with age via multiple routes (reduced dietary intake, impaired intestinal absorption, reduced hepatic storage), and low circulating retinol/atRA levels have been associated with cognitive decline and neurodegeneration [^woloszynowska2020]. ALDH1A2 expression in the meninges and hippocampus-adjacent stroma means local RA production in the brain may be particularly sensitive to any upstream retinoid insufficiency.

**Epigenetic silencing (Falckenhayn 2024 context).** The *ALDH1A2* locus is a target of age-associated DNA methylation changes in some tissue datasets (per the brief; specific CpG sites not independently verified here). #gap/needs-epigenetic-aging-citation — a specific CpG array or EWAS citation for ALDH1A2 promoter hypermethylation in aging human tissue should be confirmed before this claim is relied upon. The Takano 2020 mouse DC data (CpG methylation → RALDH2 silencing) is the strongest directly verified evidence.

**Osteoarthritis as aging-context phenotype.** OA is strongly age-correlated, and the finding that hypomorphic ALDH1A2 variants and reduced cartilage RALDH2 promote OA [^shepherd2018] implicates ALDH1A2 in the retinoid-deficiency → mechanoflammation → cartilage degradation axis that may intensify with age.

## Pharmacology and druggability

- **Druggability tier 3** — ALDH1A2 is predicted druggable (conserved NAD⁺-binding pocket amenable to small-molecule inhibition), but no clinical-stage drug exists that targets ALDH1A2 for an aging or regenerative indication. #gap/no-opentargets-entry — Open Targets API returned 400 errors during this seeding session; tier assignment is based on structural druggability inference.
- **ALDH inhibitors** (disulfiram, Aldi-1, WIN 18,446) have been used experimentally as research tools; WIN 18,446 (pan-RALDH inhibitor) is used to study spermatogonial differentiation in rodents. None is aging-indication-relevant.
- **Upstream supplementation** with vitamin A / retinol or direct atRA (tretinoin) can pharmacologically bypass ALDH1A2. This is the basis of maternal rescue in Raldh2−/− mice and is clinically used in dermatology and differentiation therapy (APL). Whether dietary vitamin A repletion in aged individuals restores meningeal or mucosal RALDH2-pathway signaling is untested. #gap/needs-human-replication

## Key interactors and pathway context

- [[retinoid-signaling]] — ALDH1A2 occupies the second enzymatic step (retinal → atRA) in the canonical pathway; no dedicated retinoid-signaling pathway page yet exists in this wiki
- **Upstream substrates:** retinaldehyde (from BCMO1/BCO1-mediated β-carotene cleavage or dietary retinyl ester hydrolysis)
- **Downstream:** atRA activates RAR/RXR nuclear receptor heterodimers → retinoic acid response elements (RAREs) → transcriptional programs governing cell differentiation, immunity, and neuronal plasticity
- **Competing catabolism:** CYP26A1/B1/C1 hydroxylate atRA → 4-hydroxy-atRA → 4-oxo-atRA for excretion; CYP26A1 and ALDH1A2 activity form a push-pull circuit controlling atRA concentration in target tissues

No dedicated pathway page for retinoid signaling currently exists in this wiki. [[insulin-igf1]] and [[mtor]] pathways intersect indirectly with retinoid signaling via shared transcriptional co-regulators (PGC-1α, FOXO1), but no direct mechanistic wikilink is established here.

## Limitations and gaps

- #gap/needs-aging-expression-data — No systematic characterization of ALDH1A2 protein or mRNA levels across human aging tissues (e.g., GTEx age-stratified, Tabula Sapiens). `gtex-aging-correlation:` left null.
- #gap/needs-epigenetic-aging-citation — The Falckenhayn 2024 epigenetic context cited in the seeding brief was not independently verified; a specific EWAS citation is needed before making a quantitative claim.
- #gap/needs-mouse-aging-expression — Takano 2020 is the only direct murine aging data for ALDH1A2; restricted to mesenteric DCs. Expression in aged brain, meninges, and cartilage is unmeasured.
- #gap/needs-human-replication — All knockout and RA-rescue data are from mouse models. Human DIH4 disease partially validates ALDH1A2's morphogenetic function, but no aging-context human intervention data exist.
- #gap/dose-response-unclear — Optimal atRA supplementation dose to rescue aged RALDH2-low tissues (if such a strategy is feasible) is entirely unknown.
- `druggability-tier: 3` assigned by structural inference; Open Targets API queries failed during seeding. Recommend re-checking on next lint pass.

## Footnotes

[^niederreither2001]: doi:10.1242/dev.128.7.1019 · Niederreither K et al. · *Development* 2001 · n=N/A · in-vivo (Raldh2−/− mouse) · Raldh2−/− embryos die at E9.5 with cardiac looping defects; maternal atRA administration rescues early lethality. ⚠️ not_oa — unverifiable from local archive. #gap/no-fulltext-access

[^niederreither2002]: doi:10.1038/ng876 · Niederreither K et al. · *Nat Genet* 2002 · n=N/A · in-vivo (Cyp26a1−/−; Aldh1a2 haploinsufficiency double mutant) · Aldh1a2 haploinsufficiency rescues spina bifida and posterior defects in Cyp26a1−/− mice by normalizing RA dose. ⚠️ not_oa (download failed) — unverifiable from local archive. #gap/no-fulltext-access

[^niederreither2003]: doi:10.1242/dev.00463 · Niederreither K et al. · *Development* 2003 · n=N/A · in-vivo (Raldh2−/− + maternal RA rescue) · Raldh2−/− posterior pharyngeal arch, enteric ganglia, and outflow tract septation defects; RA rescue extends survival but outflow tract failure remains. ⚠️ not_oa — unverifiable from local archive. #gap/no-fulltext-access

[^duester2008]: doi:10.1016/j.cbi.2008.09.004 · Duester G · *Chem Biol Interact* 2009 (online 2008) · review · Raldh1/2/3 comparative expression and catalytic mechanisms during development and adult tissue. ⚠️ not_oa (download failed) — unverifiable from local archive. #gap/no-fulltext-access

[^takano2020]: doi:10.3389/fimmu.2020.01555 · Takano T et al. · *Front Immunol* 2020 · n=3–6/group (mice; varies by experiment) · observational (aged vs young) · model: **BALB/c** aged (18–27 mo) vs young (8–12 wk) · RALDH2 mRNA significantly decreased in aged mesenteric LN DCs (Fig 2A; Student's t-test, p<0.05; n=5 independent experiments); ~10% of 57 RALDH2 promoter CpG motifs methylated in aged DCs vs near-zero in young (bisulfite sequencing; p<0.01); reduced antigen-specific Treg induction in aged mice. PDF verified 2026-05-19.

[^matrongolo2023]: doi:10.1242/dev.201381 · Matrongolo MJ et al. · *Development* 2023 · n=N/A · in-vivo (Twist1 cKO mouse) · meningeal Raldh2 loss drives cortical gyrification; demonstrates ongoing adult-relevant meningeal RA synthesis. ⚠️ not_oa (download failed — HTTP 403) — unverifiable from local archive. #gap/no-fulltext-access

[^kelly2016]: doi:10.1186/s12868-016-0284-5 · Kelly KK et al. · *BMC Neurosci* 2016 · n≥3 animals per timepoint · in-vivo (MCAO stroke model; C57Bl/6J mice) · Col1a1⁺ perivascular stromal cells (PSCs) express Raldh1 and Raldh2 in uninjured adult brain; Raldh1+/Raldh2+ PSC numbers increase substantially in lesion core 7 days post-MCAO; RA levels significantly elevated in ischemic hemisphere; RA signaling detectable in adjacent astrocytes (GFAP+) and neurons (NeuN+) in peri-infarct region. PDF verified 2026-05-19.

[^shepherd2018]: doi:10.1002/art.40545 · Shepherd C et al. · *Arthritis Rheumatol* 2018 · vol.70 no.10 pp.1577–1587 · GWAS functional follow-up · n=247 patients (knee/hip/hand OA); RNA-seq on 10 OA vs 6 NOF controls; 3 OA patients for chondrocyte siRNA · rs12915901 identified as intronic functional candidate SNP recapitulating AEI at ALDH1A2 locus (primary GWAS signal is rs3204689); ALDH1A2 expression 0.3-fold lower in OA vs non-OA hip cartilage (p<0.01); siRNA knockdown (89% mRNA, 22% protein) reduced SOX9, RARB, ACAN, ADAMTS5, VEGFA expression. PDF verified 2026-05-19.

[^wu2008]: doi:10.1111/j.1745-7262.2008.00408.x · Wu JW et al. · *Asian J Androl* 2008 · n=N/A · in-vivo (mouse testis) · RALDH2 localized to round spermatids in adult testis. ⚠️ PDF unresolvable from local archive (conference proceedings downloaded instead of article); Crossref confirms title: "Expression of the retinoic acid-metabolizing enzymes RALDH2 and CYP26b1 during mouse postnatal testis development"; round spermatid claim not independently PDF-verified. #gap/no-fulltext-access

[^woloszynowska2020]: doi:10.1146/annurev-nutr-122319-034227 · Wołoszynowska-Fraser MU et al. · *Annu Rev Nutr* 2020 · review · RA signaling decline associated with cognitive aging and Alzheimer's disease; vitamin A supplementation improves memory in VAD rodents and aged animals. ⚠️ not_oa — unverifiable from local archive. #gap/no-fulltext-access

[^zhu2023]: doi:10.1089/dna.2023.0197 · Zhu L et al. · *DNA Cell Biol* 2023 · review/GWAS synthesis · ALDH1A2 hypomorphic variants → reduced atRA → mechanoflammation in OA; atRA metabolism blocking agents proposed as OA therapeutics. ⚠️ not_oa — unverifiable from local archive. #gap/no-fulltext-access
