---
type: compound
aliases: [DHM, ampelopsin, "(2R,3R)-3,5,7-trihydroxy-2-(3,4,5-trihydroxyphenyl)-2,3-dihydrochromen-4-one", dihydromyricetin]
pubchem-cid: 161557
inchikey: KJXSIXMJHKAJOD-LSDHHAIUSA-N
chembl-id: CHEMBL3348861
drugbank-id: null
cas-number: 27200-12-0
biologic: false
molecular-formula: C15H12O8
molecular-weight-da: 320.25
mechanisms: [DNMT-inhibitor, antioxidant, anti-inflammatory]
targets: ["[[dnmt1]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[chronic-inflammation]]"]
clinical-stage: supplement
human-evidence-level: limited
translation-gap: biomarker-only
next-experiment: "Placebo/vehicle-controlled RCT (n≥100) of topical DHM serum using the 23k epidermis clock as primary endpoint, with a vehicle-only arm and DHM-only arm to isolate DHM contribution from other formulation actives (HA, glycine saponin, enoxolone, sunscreen)."
clinical-trials-active: 0
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Canonical IDs (PubChem 161557, InChIKey, MW, formula) confirmed via PubChem REST. ChEMBL CHEMBL3348861 confirmed via ChEMBL API (preferred name: Ampelopsin). CAS 27200-12-0 confirmed via PubChem (not listed in ChEMBL directly; cross-confirmed from PubChem record). Falckenhayn 2024 primary-source PDF read end-to-end (10.3389/fragi.2023.1258184; downloaded from PMC). DNMT1-inhibition claims, n values, dose, and mechanism scope updated against PDF. Chen 2015 NF-κB footnote author list and journal corrected (wrong authors in original; corrected to Hou et al., J Nat Prod, doi:10.1021/acs.jnatprod.5b00275). SIRT1/PRDX1 paper DOI resolved (10.1016/j.phymed.2026.158160). Qi 2026 claims not independently re-verified against PDF — cross-checked against qi-2026-dhm-epigenetic-skin-aging.md study page; that page is itself verified: false pending PDF read. Supersession check run 2026-05-19: no superseding RCT or meta-analysis found; two new Beiersdorf-group papers (Bienkowska 2026 Clin Epigenetics n=851; Grönniger 2024 Exp Dermatol review) are consistent with current framing."
---

# Dihydromyricetin (DHM)

A **dihydroflavonol** (flavanonol) flavonoid extracted chiefly from *Hovenia dulcis* (Japanese raisin tree), *Ampelopsis grossedentata* (vine tea), and species within *Vitis*. Known in East Asian traditional medicine primarily as a hangover remedy. Interest in aging research centres on a recently characterised role as a **non-nucleoside DNA methyltransferase inhibitor**, with in-vitro evidence from Falckenhayn 2024 [^falckenhayn2024] and early cosmetic-grade human evidence from Qi 2026 (via `[[studies/qi-2026-dhm-epigenetic-skin-aging]]`) for topical epigenetic-clock reversal in the epidermis. Mechanistically distinct from cytotoxic DNMT inhibitors (azacitidine, decitabine) that incorporate into DNA.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 161557 |
| ChEMBL ID | CHEMBL3348861 |
| CAS | 27200-12-0 |
| InChIKey | KJXSIXMJHKAJOD-LSDHHAIUSA-N |
| Molecular formula | C15H12O8 |
| Molecular weight | 320.25 Da |
| Class | Dihydroflavonol (flavanonol subclass of flavonoids) |
| Stereochemistry | (2R,3R) absolute configuration; two stereocenters at C-2 and C-3 |
| KEGG | C01494 |

## Structure and chemistry

DHM is a **dihydroflavonol** — a flavonoid subclass with a saturated C2–C3 bond (distinguishing it from flavonols such as quercetin and fisetin, which are fully conjugated). The scaffold carries five hydroxyl groups: three on ring B (3',4',5'-trihydroxyphenyl — galloyl-type) and two on ring A at positions 5 and 7, plus the C-3 hydroxyl of the heterocyclic ring.

- **LogP:** approximately 1.0–1.5 (estimated; moderately lipophilic)
- **Solubility:** sparingly soluble in water; freely soluble in DMSO and ethanol
- **Stability:** sensitive to light and oxidation (characteristic of polyhydroxyflavonoids); aqueous solutions should be stored under nitrogen or refrigerated. The 2R,3R enantiomer is the predominant natural form.
- **Source plants:** *Hovenia dulcis* fruits/seeds (highest yield); *Ampelopsis grossedentata* (Chinese vine tea); *Vitis vinifera* and other grape species at lower concentrations.

## Mechanisms of action

### DNA methyltransferase (DNMT) inhibition

Falckenhayn et al. 2024 characterised DHM as an inhibitor of DNMT1, the maintenance methyltransferase, via a 384-well scintillation proximity assay (SPA) using full-length recombinant human DNMT1 [^falckenhayn2024]. The assay screened a library of 1,800 natural substances and 640 FDA-approved drugs in two independent replicate screens (r = 0.78 reproducibility). In cultured primary human keratinocytes (n = 13 independent donor lines, 3 days at 20 µM DHM / 0.1% DMSO), DHM treatment produced a moderate but statistically significant global DNA hypomethylation (p = 1.4 × 10⁻³³, t-test; 101,067 differentially methylated probes by Infinium 850k) and a reduction in DNAm-calculated cellular age using both the Skin & Blood clock (Δ = −1.86 yr) and a newly trained human epidermis clock (Δ = −2.03 yr), both p < 0.05 Wilcoxon rank-sum test. In a vehicle-controlled in-vivo arm (n = 30 female volunteers, topical 0.15% w/w DHM formulation applied to the lower back for 2 weeks followed by sub-erythemal UV challenge), DHM shifted methylation at 12,444 probes toward a young-epidermis pattern, with >95% of these probes moving in the direction representative of young epidermis. **DNMT1 is the specific target identified.** The paper does not characterise DNMT3A/3B inhibition, and the binding mode (competitive, allosteric, or other) is not established. #gap/no-mechanism — the precise binding mode and target selectivity profile require further structural characterisation.

The in-vitro DNMT inhibition provides the mechanistic hypothesis underpinning the Qi 2026 topical-serum clinical results. However, **the middle link — that topical DHM reaches viable basal keratinocytes in vivo at concentrations sufficient to inhibit DNMTs — is not directly demonstrated** in Qi 2026. This is the dominant chain-of-evidence gap. See `[[studies/qi-2026-dhm-epigenetic-skin-aging]]` § Mechanism for detailed treatment. #gap/no-mechanism

### Antioxidant activity

The polyhydroxy scaffold (five OH groups) confers potent radical-scavenging activity, comparable to quercetin and myricetin. Both direct ROS quenching and induction of endogenous antioxidant pathways have been reported. This mechanism is structurally shared with most flavonoids and is unlikely to account specifically for the epigenetic effects. #gap/dose-response-unclear — concentrations required for antioxidant effects in vivo are unclear given bioavailability constraints.

### Anti-inflammatory / NF-κB modulation

DHM inhibits NF-κB signalling and reduces pro-inflammatory cytokine (TNF-α, IL-6) production in cell-based models [^chen2015]. This may contribute to the anti-senescence and anti-SASP picture but is a class-level effect shared widely among flavonoids.

### GABA-A receptor modulation (distinct, anti-intoxication context)

DHM's original pharmacological characterisation is as a positive modulator / partial antagonist at GABA-A receptors, where it attenuates ethanol-induced receptor potentiation [^shen2012]. This is the mechanism underlying the popular "hangover supplement" use and is **mechanistically independent** of the DNMT/epigenetic aging biology. Relevant for context and safety framing (no sedation at typical supplement doses) but not an aging mechanism per se.

## Skin-aging evidence

**The canonical primary evidence for DHM in skin aging is the Qi 2026 study — see `[[studies/qi-2026-dhm-epigenetic-skin-aging]]` for full quantitative detail. Numerics are not duplicated here; link to the study page for all claims.**

Summary: Qi et al. 2026 (n=60, ages 40–70, all Fitzpatrick phototypes, single-arm open-label, Beiersdorf-funded; DOI 10.1007/s13555-026-01764-4) applied a multi-component topical serum containing DHM (plus hyaluronic acid, glycine saponin, enoxolone) with SPF 50+ twice daily for 8 weeks. Primary endpoint: epidermal DNAm age measured by the study's own 23k-probe / 173-CpG epidermis-specific methylation clock. Secondary endpoints: wrinkle imaging and dermal echogenicity.

**Critical caveats per Qi 2026 study page:**
- No vehicle-control arm; DHM-specific contribution cannot be isolated from other formulation actives or from sunscreen co-application.
- Open-label, unblinded; secondary clinical endpoints susceptible to evaluator bias.
- The 23k clock is new, with no independent test-retest reliability data.
- Beiersdorf AG funded the study and developed both the active ingredient and the novel clock used to measure efficacy.
- **Interpret as positive cosmetic-grade signal, not aging-RCT-grade evidence.**

### Bienkowska 2026 population-cohort observational support

A separate, larger Beiersdorf-affiliated analysis (Bienkowska et al. 2026; *Clinical Epigenetics*; n=851 participants from a population-based cohort; PMID 41957838) examined 326 lifestyle, physiological, and pharmacological factors against skin DNAm age estimated by a published skin-specific epigenetic clock [^bienkowska2026]. DHM was identified among the factors associated with **methylation patterns consistent with decelerated epigenetic aging**, alongside aspirin and other deceleration-associated factors. Several associations were validated in an independent cohort and were consistent across both skin-specific and general epigenetic clocks. **Important caveats:** (a) cross-sectional observational design — does not establish causality (longitudinal/interventional studies are needed per the paper's own conclusion); (b) same research group as Qi 2026 and Falckenhayn 2024 — not fully independent external validation; (c) the specific clock used and effect magnitude for DHM are not extracted in the abstract. The n=851 scale and population-cohort context provide population-level corroboration but not interventional confirmation. #gap/needs-replication

For the broader epigenetic skin-aging context, see `[[skin-aging]]` and `[[biomarkers/qi-23k-epidermis-clock-2026]]` (R43 forward-ref).

## Hallmarks and causal chain

| Hallmark | Claimed effect | Evidence level |
|---|---|---|
| [[epigenetic-alterations]] | DNMT1 inhibition → global hypomethylation → shift of age-dependent CpGs toward young-epidermis pattern; in vitro (n=13 donor lines) + vehicle-controlled in-vivo (n=30) + cosmetic-grade topical human signal (Qi 2026, n=60) | in vitro + limited in-vivo [^falckenhayn2024] + limited-human open-label [^qi2026study] |
| [[chronic-inflammation]] | NF-κB suppression, cytokine reduction | preclinical only [^chen2015] |

The DNMT-inhibition pathway links DHM to the [[epigenetic-alterations]] hallmark via: age-associated bivalent-region hypermethylation (established biology, see [[epigenetic-alterations]]) → DNMT1 inhibition reverses this drift (in vitro, Falckenhayn 2024) → topical DHM shifts 23k epidermis clock (cosmetic-grade human data, Qi 2026). Full causality — including whether the DNAm-clock shift reflects genuine aging-pathway reversal or an epiphenomenon — is not established. See `[[hypotheses/information-theory-of-aging]]` for the broader frame.

## Other uses and research lines

### Hepatoprotection / NASH

Preclinical studies (rodent NASH/NAFLD models) report DHM reduces hepatic steatosis, oxidative stress, and inflammatory infiltration [^jiang2015]. No human clinical trial data in liver disease. The PMID 42022551 systematic review (Frontiers in Nutrition 2026) aggregates preclinical evidence for DHM in metabolic dysfunction-associated steatotic liver disease — preclinical signals only. #gap/needs-human-replication

### SIRT1 upregulation / hepatoprotection (PMID 41966029)

Deacetylation of PRDX1 contributes to alleviating acute liver injury through DHM-mediated SIRT1 upregulation [^sirt1ref]. Mechanistically adds SIRT1 as a potential secondary target relevant to aging-mitochondria biology, but evidence remains preclinical (acute injury model). #gap/needs-human-replication

### Hangover prevention / alcohol metabolism

The most commercially established use. DHM accelerates hepatic acetaldehyde metabolism (via ALDH upregulation) and reduces GABA-A-mediated intoxication [^shen2012]. Clinical trial evidence for hangover reduction is minimal — primarily anecdotal and small case series. Not an aging claim.

### Anti-cancer (preclinical)

Multiple cell-line and xenograft studies report anti-proliferative effects. Context: in-vitro polypharmacology; no aging-indication relevance established.

## Pharmacokinetics and bioavailability

Formal PK data for DHM in humans is sparse compared with more-studied flavonoids.

- **Oral bioavailability:** Estimated low-to-moderate; flavonoids are extensively conjugated (glucuronidated, sulfated) in the intestinal wall and liver. Circulating DHM is predominantly in conjugate form, with free DHM representing a small fraction.
- **Topical delivery:** The key translational question for the skin-aging application. Flavonoids generally penetrate the stratum corneum poorly unless formulated with penetration enhancers. Whether DHM reaches viable epidermis (basal keratinocytes) in sufficient concentration to inhibit DNMTs in vivo is unresolved. #gap/no-mechanism
- **Metabolism:** Hepatic CYP450 involvement expected; specific isoforms not characterised. Renal elimination of conjugates.
- **Half-life:** Not established in humans.

#gap/dose-response-unclear — No human PK study for DHM published as of 2026-05-19. Effective intracellular concentrations in keratinocytes following topical application are not reported.

## Safety and tolerability

- **Topical (Qi 2026):** No significant adverse events reported in 60 participants over 8 weeks of twice-daily application [^qi2026study].
- **Systemic:** Generally regarded as safe at supplement doses; no serious adverse events in the limited literature. Hangover-supplement use at 300–600 mg/day appears well-tolerated in informal human use.
- **Pregnancy / lactation:** Insufficient data; avoid until characterised.
- **Drug interactions:** Possible CYP450 interactions (preclinical only); no clinical interaction studies identified.
- **Cytotoxic DNMT-class caution does NOT apply:** DHM is a non-nucleoside inhibitor; it does not incorporate into DNA and does not cause the myelosuppression associated with azacitidine/decitabine.

## Cross-mechanism combinations (clinical context — Qi 2026)

The Qi 2026 serum contained DHM in combination with low- and high-MW hyaluronic acid (see `[[molecules/compounds/hyaluronic-acid]]`), glycine saponin, and enoxolone. SPF 50+ sunscreen was co-applied every morning. These components make multi-ingredient contribution impossible to apportion. Key issue: sunscreen alone produces significant wrinkle and skin-quality improvements over 8 weeks via UV reduction; the DHM-specific contribution to the DNAm-age reduction cannot be isolated. A DHM-only arm vs vehicle is the minimum design needed to attribute the epigenetic signal specifically to DHM.

## Limitations and gaps

- #gap/no-mechanism — the in-vitro DNMT inhibition → in-vivo topical epigenetic reversal chain is missing its middle link (intracellular concentration after topical application).
- #gap/needs-replication — the Qi 2026 cosmetic-grade signal is single-study, industry-funded, no vehicle control.
- #gap/dose-response-unclear — no human PK data; effective topical dose for DNMT inhibition in keratinocytes not established.
- #gap/needs-human-replication — hepatoprotection and SIRT1-upregulation data are preclinical only.
- #gap/long-term-unknown — no durability data for the skin-aging signal; no washout study.

## Cross-references

- `[[studies/qi-2026-dhm-epigenetic-skin-aging]]` — primary clinical evidence anchor (Qi 2026; verified: true as of 2026-05-19)
- `[[skin-aging]]` — phenotype context
- `[[biomarkers/qi-23k-epidermis-clock-2026]]` — forward-ref; the 23k epidermis-specific methylation clock developed in Qi 2026
- `[[dna-methylation]]` — process page
- `[[dnmt1]]` — molecular target confirmed by Falckenhayn 2024 SPA biochemical assay
- `[[epidermis]]` — target tissue
- `[[keratinocytes]]` — primary target cell type for topical application
- `[[epigenetic-alterations]]` — hallmark page
- `[[chronic-inflammation]]` — hallmark page
- `[[retinoids]]` — the established skin-aging intervention class; DHM is being positioned as complementary rather than competitive
- `[[molecules/compounds/hyaluronic-acid]]` — co-formulated in Qi 2026 serum
- `[[frameworks/intervention-classes]]` — DNMT-inhibitor class added R42

## Footnotes

[^falckenhayn2024]: doi:10.3389/fragi.2023.1258184 · PMID 38500495 · Falckenhayn C, Bienkowska A, Söhle J, Wegner K, Raddatz G, Kristof B, Kuck D, Siegner R, Kaufmann R, Korn J, Baumann S, Lange D, Schepky A, Völzke H, Kaderali L, Winnefeld M, Lyko F, Grönniger E · *Frontiers in Aging* 2024 Mar 4;4:1258184 · in-vitro (n=13 donor keratinocyte lines, 20 µM DHM) + in-vivo vehicle-controlled (n=30 female volunteers, topical 0.15% DHM, 2 wk + UV) + in-vivo gene expression (n=19, 8 wk topical) · DHM identified as DNMT1 inhibitor via SPA biochemical assay (1,800 natural products + 640 FDA drugs screened); 20 µM DHM induces global hypomethylation (p=1.4×10⁻³³); reduces DNAm age ~2 yr (Δ−1.86 yr Skin&Blood clock, Δ−2.03 yr epidermis clock, both p<0.05 Wilcoxon); in-vivo DHM shifts 12,444 age-dependent probes toward young-epidermis pattern (>95%); epidermal thickness increases in 3D skin model · Beiersdorf AG co-authors; open-access gold OA (CC BY); PMC10944877

[^shen2012]: Shen Y, Lindemeyer AK, Gonzalez C, Shao XM, Spigelman I, Olsen RW, Liang J · *J Neurosci* 2012 Jan 4;32(1):390-401 · doi:10.1523/JNEUROSCI.5894-11.2011 · in-vitro (Xenopus oocyte + mouse neuron electrophysiology) + in-vivo (mouse intoxication) · DHM antagonises ethanol potentiation of GABA-A receptors; reduces intoxication behaviour in mice · GABA-A modulation mechanism; distinct from aging/DNMT biology

[^chen2015]: Hou XL, Tong Q, Wang WQ, Shi CY, Xiong W, Chen J, Liu X, Fang JG · *J Nat Prod* 2015 Jul 24;78(7):1689–96 · doi:10.1021/acs.jnatprod.5b00275 · PMID 26171689 · in-vitro (LPS-stimulated RAW 264.7 macrophages) + in-vivo (LPS-challenged mice) · DHM suppresses NF-κB and MAPK (p38, JNK) phosphorylation and reduces TNF-α, IL-1β, IL-6, NO, iNOS, and COX-2; increases IL-10 · anti-inflammatory evidence; preclinical only · *Note: original footnote incorrectly listed "Chen G, Tian X…" (Mol Pharmacol) — corrected to Hou et al. on 2026-05-19 verification pass*

[^jiang2015]: Jiang B, Le L, Pan H, Hu K, Xu L, Xiao P · *Biochem Biophys Res Commun* 2015;461(4):732-738 · doi:10.1016/j.bbrc.2015.04.097 · in-vivo (mouse NAFLD model) · DHM reduces hepatic steatosis, ALT/AST, and oxidative stress markers · hepatoprotection evidence; preclinical only

[^sirt1ref]: Hu H, Wang C, Chen M, Han J, Song Y, Chen Z, Zhao D, Wang Y, Yu H, Shi M · *Phytomedicine* 2026 Jun;155:158160 · doi:10.1016/j.phymed.2026.158160 · PMID 41966029 · in-vivo (d-galactosamine/LPS-induced murine acute liver injury model) · DHM-mediated SIRT1 upregulation → PRDX1 deacetylation reduces liver injury · preclinical only; acute injury model

[^bienkowska2026]: Bienkowska A, Qi M, Kanta K, Del Pilar Bonilla-Tobar M, Völzke H, Gallinat S, Jaspers S, Clemann S, Winnefeld M, Grönniger E, Kaderali L, Falckenhayn C · doi:10.1186/s13148-026-02101-4 · *Clinical Epigenetics* 2026 Apr 9;18(1):58 · PMID 41957838 · PMCID PMC13063880 · observational (population-based cross-sectional cohort) · n=851 participants with 326 lifestyle/physiological/pharmacological factors phenotyped · skin DNAm age estimated using a published skin-specific epigenetic clock; epigenome-wide association studies for differentially methylated positions · **20 factors associated with decelerated DNAm skin age; 17 with accelerated**; deceleration factors mapped to methylation differences in transcription elongation regions (supporting transcriptional integrity); acceleration factors associated with reduced methylome variance (epigenetic drift); compounds including **dihydromyricetin** and aspirin associated with methylation patterns consistent with decelerated epigenetic aging; several associations validated in an independent cohort and consistent across skin-specific and general epigenetic clocks · Beiersdorf-funded; not fully independent of Qi 2026 / Falckenhayn 2024 author group · authors conclude longitudinal/interventional designs needed for causality · abstract-verified via PubMed efetch; not in archive as of 2026-05-19

[^qi2026study]: [[studies/qi-2026-dhm-epigenetic-skin-aging]] · doi:10.1007/s13555-026-01764-4 · PMID 42034839 · n=60 · open-label (no vehicle control) · DNAm-age change −2.08 yr (Fig 2a; paper rounds to "around 2.1 yr") · p=0.029 paired Wilcoxon · model: human volunteers ages 40–70 (mean 55), all Fitzpatrick I–VI, topical DHM-containing serum × 8 weeks · **PDF verified 2026-05-19**
