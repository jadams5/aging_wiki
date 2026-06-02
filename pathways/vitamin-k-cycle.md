---
type: pathway
aliases: [vitamin K redox cycle, VKORC1 cycle, vitamin K epoxide cycle, vitamin K gamma-carboxylation cycle]
kegg: null
kegg-secondary: hsa00130
reactome: R-HSA-6806664
wikipathways: null
key-nodes: ["[[ggcx]]", "[[vkorc1]]", "[[ubiad1]]", "[[nqo1]]"]
upstream: ["[[vitamin-k]]"]
downstream: ["[[matrix-gla-protein]]", "[[vascular-calcification]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
druggability-tier: 3
caused-by: ["[[vitamin-k]]"]
causes: ["[[matrix-gla-protein]]", "[[vascular-calcification]]"]
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Nakagawa 2010 (Nature, doi:10.1038/nature09464) verified against local PDF: UBIAD1 identification, GGPP donor, warfarin-insensitivity, and ER localisation all confirmed. Tissue-expression claim corrected — 'brain, testis, and arterial wall' was wrong; corrected to 'brain, testis, and pancreas' for high MK-4 activity, with note that mRNA is highest in heart but MK-4 concentration there is paradoxically low per Supplementary Fig. 6. Reactome R-HSA-6806664 ('Metabolism of vitamin K', pathway) confirmed via live ContentService API. Reactome reaction R-HSA-6806674 (UBIAD1 prenylates menadione → MK4) confirmed. KEGG hsa00130 defensive characterisation (terpenoid-quinone, not dedicated VK cycle) upheld. Stafford 2005, Tie 2016, Chatrou 2012, Danziger 2008, Shearer 2014 — all closed-access; #gap/no-fulltext-access retained on relevant claims. Supersession check: no post-2022 RCT or meta-analysis specifically on vitamin K cycle enzymology or cycle-flux modulation found; VKORC1 and vitamin-k pages carry the pharmacology supersession candidates. Sibling pages [[ggcx]] (verified 2026-06-02), [[vkorc1]] (verified 2026-06-02), [[vitamin-k]] (verified 2026-06-02), [[matrix-gla-protein]] (verified 2026-05-23) — all consistent with cycle-page claims; no cross-page contradictions identified."
---

# Vitamin K Cycle

The **vitamin K cycle** is the enzymatic redox loop that recycles vitamin K between its oxidised and reduced forms, allowing a single vitamin K molecule to serve as cofactor for many successive rounds of **gamma-carboxylation** catalysed by [[ggcx]] (gamma-glutamyl carboxylase). Without cycle flux, dietary vitamin K would be consumed in one pass and gamma-carboxylation would halt. The cycle makes continuous [[matrix-gla-protein]] carboxylation possible in the arterial wall — and it is the target of warfarin, the most-prescribed anticoagulant globally, whose inhibition has a clinically-documented iatrogenic vascular calcification consequence particularly relevant to aging.

> **Naming note:** This page is the canonical `[[vitamin-k-cycle]]` wikilink target. The individual proteins are at `molecules/proteins/ggcx.md` and `molecules/proteins/vkorc1.md`. The broader vitamin K compound family (K1/K2/MK-7 pharmacology, human RCT evidence) lives at `molecules/compounds/vitamin-k.md`. The downstream biological process (mechanisms and clinical evidence for vascular calcification) lives at `processes/vascular-calcification.md`. This page owns the **cycle biochemistry** — the enzymatic steps, redox chemistry, substrate entry for each K form, and the warfarin-NQO1 pharmacological circuit.

## The core cycle: four biochemical steps

```
                   ┌──────────────────────────────────┐
                   │         VITAMIN K CYCLE           │
                   │                                   │
Dietary vitamin K ─→ [quinone form K]                  │
                          │                            │
                    NQO1 (+ VKORC1)                    │
                    warfarin-insensitive ↓              │
                         [KH2]  ←─── VKORC1 ─── [KO]  │
                    vitamin K      warfarin-    vitamin K│
                    hydroquinone   sensitive    2,3-epoxide│
                          │                     ↑       │
                          └─────── GGCX ────────┘       │
                           carboxylates Glu→Gla on VKDPs│
                           (MGP, osteocalcin, Gas6, ...)│
                   └──────────────────────────────────┘
```

In mechanistic terms, the cycle has four steps [^stafford2005] [^tie2016review]:

1. **Carboxylation step (GGCX):** Vitamin K hydroquinone (KH₂, the fully reduced form) is oxidised to vitamin K 2,3-epoxide (KO) by [[ggcx]] during γ-carboxylation of specific glutamate residues on vitamin K-dependent proteins (VKDPs). One KH₂ molecule is consumed per Glu→Gla conversion. The GGCX reaction is: `L-Glu-[protein] + KH₂ + CO₂ → Gla-[protein] + KO + H₂O`.

2. **Epoxide reduction — first VKORC1 step:** Vitamin K 2,3-epoxide (KO) is reduced to vitamin K quinone (K) by [[vkorc1]] (VKOR). This is a 2-electron reduction; the flavoprotein carries reducing equivalents via an active-site CXXC dithiol motif. This step is the **warfarin-sensitive** point — coumarin anticoagulants bind VKORC1 and competitively inhibit KO reduction, depleting the K and KH₂ pools [^stafford2005].

3. **Quinone reduction — second VKORC1 step / NQO1 route:** Vitamin K quinone (K) is reduced to KH₂. Under physiological conditions, VKORC1 catalyses this step as well. At high dietary vitamin K concentrations, a **warfarin-insensitive route** using NAD(P)H:quinone oxidoreductase 1 ([[nqo1]], also known as DT-diaphorase) can reduce K → KH₂, partially bypassing the warfarin block [^stafford2005] [^chatrou2012]. This is the biochemical basis of **vitamin K rescue of warfarin** — pharmacological doses of vitamin K (particularly K1) can partially restore VKDP carboxylation in warfarin-anticoagulated patients by overwhelming the inhibited VKORC1 step and feeding KH₂ through the NQO1 shunt.

4. **VKDP substrate carboxylation:** Carboxylated Gla residues gain calcium-chelating capacity, activating the biological function of the VKDP. Without this activation, the protein is the "uncarboxylated" form (e.g., ucMGP, ucOC) — typically biologically inert for calcium-dependent functions. The cycle then restarts from step 1.

## Dietary vitamin K forms and how they enter the cycle

All three dietary vitamin K forms carry the same **naphthoquinone redox-active ring** — the moiety oxidised and reduced during the cycle. The **side chain** determines tissue distribution and pharmacokinetics; it does not alter the fundamental cycle chemistry [^shearer2014]. The per-form pharmacology is documented on [[vitamin-k]]; this section covers only cycle entry.

### K1 (phylloquinone) — plant-derived, liver-preferential

K1 enters the cycle as a quinone directly. Absorbed from food via chylomicron-mediated uptake; rapidly taken up by the liver (plasma half-life ~1 hour). K1 supports hepatic GGCX activity (coagulation factors II, VII, IX, X, Protein C, S) efficiently. The rapid hepatic clearance limits peripheral tissue (vascular wall, bone) distribution — extrahepatic GGCX substrates, including [[matrix-gla-protein]], receive less K1 support than K2 forms at equivalent dietary doses [^schurgers2007].

### K2 (menaquinones, MK-4 through MK-13) — extrahepatic preference

K2 forms are distinguished by the length of their polyisoprene side chain (MK-n = n isoprene units):

- **MK-7** (7 isoprene units) — the long-chain form with the largest aging-relevant evidence base. Plasma half-life ~3 days; distributes to peripheral tissues including vascular smooth muscle cells (VSMCs), adipose, and bone. Dietary source: bacterial fermentation (natto, cheese). At the GGCX active site, MK-7 and K1 are biochemically equivalent; the difference is pharmacokinetic, not catalytic [^shearer2014].
- **MK-4** (4 isoprene units) — the short-chain form present in animal tissues; also produced **endogenously** from K1 and menadione via the tissue-specific prenyltransferase **UBIAD1** (see below). Plasma half-life ~1–2 hours; important in brain and testis where UBIAD1 expression is high.
- **Longer menaquinones (MK-8, MK-9, MK-10–13)** — produced by gut bacteria (e.g., Bacteroides fragilis MK-10/11; Bacteroides thetaiotaomicron MK-11/12). Absorbed in the ileum/colon; contribute to the circulating menaquinone pool at low but potentially relevant levels.

### K3 (menadione) — synthetic provitamin

Menadione is a synthetic naphthoquinone precursor lacking a side chain. It is not a vitamin K in the cofactor sense — it cannot directly enter the GGCX carboxylation step. Instead, menadione is converted to MK-4 by **UBIAD1** (see below) and then enters the cycle as MK-4. Menadione is not used therapeutically in humans at doses relevant to vitamin K nutrition due to toxicity concerns.

## UBIAD1 — the endogenous MK-4 synthesis route

[[ubiad1]] (UbiA prenyltransferase domain-containing protein 1, also written TERE1) is a prenyltransferase that catalyses side-chain addition to the menadione ring, converting K1 and menadione to MK-4 in a **warfarin-insensitive** reaction independent of the VKORC1 cycle [^nakagawa2010]. The reaction requires geranylgeranyl pyrophosphate (GGPP) as the isoprene donor:

```
Menadione (or K1 after side-chain cleavage) + GGPP → MK-4 (via UBIAD1)
```

Key properties of this route:

- Expressed ubiquitously; brain, testis, and pancreas show the highest endogenous MK-4 concentrations consistent with UBIAD1 activity; *Ubiad1* mRNA was highest in the heart, though MK-4 concentrations in heart were paradoxically low — suggesting post-transcriptional regulation or high local GGCX consumption [^nakagawa2010]
- This conversion accounts for the MK-4 found in brain and gonad tissues even when dietary MK-4 intake is negligible
- UBIAD1 deficiency in mice impairs endogenous MK-4 biosynthesis, causing reduced bone mineral density and impaired chondrogenesis [^hirashima2024], consistent with tissue-specific MK-4 dependence for GGCX activity in bone
- The conversion is not limited by VKORC1 activity — it provides a warfarin-insensitive supply of an intracellular K form that can then enter the NQO1 → KH₂ reduction route

UBIAD1 is Reactome reaction R-HSA-6806674 in the vitamin K metabolism pathway (confirmed via live Reactome ContentService API 2026-06-02).

## Warfarin: a cycle blocker with an iatrogenic calcification consequence

Warfarin (and acenocoumarol, phenprocoumon) competitively inhibits [[vkorc1]], blocking KO → K (and K → KH₂) and depleting the KH₂ pool across all tissues [^stafford2005]. The anticoagulant effect targets hepatic VKDPs (factors II, VII, IX, X). The extrahepatic consequence — insufficient KH₂ for GGCX-catalysed MGP carboxylation in VSMCs — is clinically relevant and is the **iatrogenic vascular calcification paradox**:

> Warfarin prevents thromboembolism by depleting KH₂ globally, but simultaneously prevents MGP activation in the arterial wall, accelerating medial vascular calcification in precisely the population (older adults with atrial fibrillation) at highest calcification risk.

Clinical observational data confirm warfarin users have elevated circulating dp-ucMGP (uncarboxylated MGP biomarker), elevated coronary artery calcification scores, and higher aortic valve calcification rates compared to matched non-users — mechanistically consistent with the VKORC1-block → ucMGP → calcification chain [^chatrou2012] [^siltari2018] [^danziger2008].

The **NQO1 bypass** at high vitamin K doses provides the rationale for using vitamin K co-supplementation in warfarin users where clinically appropriate — high-dose K1 can partially restore VKDP carboxylation through the NQO1 shunt. However, pharmacological co-supplementation in therapeutic anticoagulation is not standard practice; titration is complex.

**Direct oral anticoagulants (DOACs)** — apixaban, rivaroxaban, edoxaban, dabigatran — do not inhibit VKORC1 and do not affect cycle flux. This is likely advantageous for vascular calcification risk in the aging/AF population, though prospective RCT data comparing calcification outcomes (DOAC vs warfarin) remain limited [^siltari2018].

## Aging relevance

### Why the vitamin K cycle is an aging-relevant pathway

The vitamin K cycle does not directly regulate longevity pathways (it is not in GenAge; GGCX and VKORC1 are not classical aging genes). Its aging relevance is **mechanistic and clinical** via a chain of consequences:

1. Cycle flux → cMGP in VSMCs
2. cMGP → prevents vascular hydroxyapatite nucleation and sequesters BMP-2
3. BMP-2 sequestration → prevents VSMC osteogenic transdifferentiation
4. Preserved VSMC phenotype → prevents medial arterial calcification
5. Patent arterial compliance → preserved pulse pressure transmission and baroreceptor function
6. Baroreceptor function → preserved vascular-wall-to-systemic-circulation signalling

This chain links cycle flux to the [[altered-intercellular-communication]] hallmark through the vascular calcification → arterial stiffening → degraded systemic vascular signalling axis. This is the same hallmark assignment used on [[vitamin-k]], [[ggcx]], [[vkorc1]], and [[matrix-gla-protein]] pages.

### Age-related declines in cycle efficacy

Multiple age-associated factors reduce effective cycle flux without altered VKORC1 genetics:

- **Dietary K2 insufficiency** — Western diets are K2-poor (limited natto/fermented-food consumption); K2 insufficiency increases in older adults as food variety decreases [^shearer2014]
- **Warfarin co-medication** — prevalence of warfarin use rises steeply with age (AF affects ~9% of adults >65), directly blocking VKORC1 at the most critical point in the cycle
- **CKD-associated GGCX carbamylation** — in uremic patients, elevated cyanate carbamylates GGCX arginine/lysine residues, impairing carboxylase activity independently of KH₂ availability (see [[ggcx]] for detail) [^kaesler2025]
- **Fat malabsorption syndromes** — reduce chylomicron-mediated K absorption; more prevalent in older adults with bile acid dysregulation or prior GI surgery

### VKDP substrates relevant to aging

| VKDP | Tissue | Gla-dependent function | Aging significance |
|---|---|---|---|
| **MGP** ([[matrix-gla-protein]]) | Vascular smooth muscle cells, cartilage | Inhibits hydroxyapatite nucleation; sequesters BMP-2 | **Central** — ucMGP = biomarker of extrahepatic cycle insufficiency; unactivated MGP → vascular calcification |
| Osteocalcin (BGLAP) | Osteoblasts | Bone mineralisation; disputed endocrine functions | Moderate — uncarboxylated ucOC is a biomarker of bone vitamin K status; RCT evidence for bone benefit from K supplementation inconsistent |
| Gas6 (Growth Arrest-Specific 6) | Ubiquitous | TAM receptor ligand (Tyro3/Axl/MerTK); efferocytosis, inflammation resolution | Indirect — Gas6/Axl system regulates macrophage efferocytosis of apoptotic cells; undercarboxylation impairs efferocytosis |
| Coagulation factors II, VII, IX, X | Liver | Phospholipid-dependent coagulation cascade | Well-established hepatic axis; not primary aging mechanism |

For MGP's detailed mechanism and clinical calcification evidence, see [[matrix-gla-protein]].

## Pharmacology

The cycle can be modulated at three points:

| Intervention | Target point | Direction | Aging-context note |
|---|---|---|---|
| Warfarin / coumarins | VKORC1 (KO → K step) | Inhibitory — blocks cycle | Clinically widespread; accelerates vascular calcification (harmful for aging axis) |
| MK-7/K2 supplementation | Substrate supply (dietary → KH₂ pool) | Agonistic — increases cycle flux | Surrogate-endpoint benefit (dp-ucMGP ↓); hard-endpoint RCT data lacking; see [[vitamin-k]] |
| High-dose K1 (pharmacological) | NQO1 bypass route | Partial rescue of warfarin block | Used clinically to reverse warfarin over-anticoagulation; not an aging intervention per se |
| DOACs (VKOR-sparing anticoagulants) | Off-cycle (FXa/thrombin-direct) | Does not affect cycle | Preferred over warfarin for aging-calcification axis; prospective RCT data pending |

**Druggability tier: 3.** Under the aging-context convention, `druggability-tier: 3` reflects that while warfarin is an FDA-approved clinical drug targeting VKORC1 (a key cycle node), its effect on the aging-relevant direction is **harmful** — it inhibits cycle flux, reducing MGP carboxylation and accelerating vascular calcification. An aging-beneficial drug (a VKORC1 activator or VKOR-pathway enhancer for vascular calcification prevention) does not exist and is not in clinical development. The biology is well-understood (tier 3 = predicted druggable; pharmacological probe exists as inhibitor; mechanistic understanding sufficient to target cycle), but the beneficial intervention is currently limited to upstream substrate supplementation (vitamin K2/MK-7), which is a dietary supplement, not a cycle-node drug. A true aging-benefit tier would require a drug that restores or enhances cycle flux specifically in extrahepatic tissues.

## Cross-references

- [[vitamin-k]] — forms and pharmacokinetics; K1/K2/MK-7 distinction; human RCT evidence; warfarin paradox overview
- [[ggcx]] — carboxylase enzyme; the carboxylation step; VKCFD1 genetics; GGCX carbamylation in CKD
- [[vkorc1]] — epoxide reductase enzyme; the warfarin-sensitive reduction step; pharmacogenomics; VKCFD2
- [[matrix-gla-protein]] — primary extrahepatic VKDP substrate; anti-calcification mechanism; dp-ucMGP biomarker
- [[vascular-calcification]] — downstream process (`processes/vascular-calcification.md`); phenotypic consequence of cycle insufficiency
- [[ubiad1]] — MK-4 prenyltransferase; endogenous extrahepatic MK-4 biosynthesis; warfarin-insensitive side route
- [[nqo1]] — quinone reductase; warfarin-insensitive K → KH₂ reduction; basis for vitamin K rescue of warfarin
- [[altered-intercellular-communication]] — the primary hallmark linkage via MGP carboxylation → vascular calcification suppression → arterial compliance
- [[bmp-2]] — BMP-2 sequestration by cMGP; released by ucMGP → VSMC osteogenic transdifferentiation
- [[arterial-stiffening]] — downstream phenotype of vascular calcification

## Limitations and knowledge gaps

- #gap/needs-human-replication — No RCT has specifically tested whether restoring cycle flux (via MK-7 supplementation or DOAC substitution for warfarin) improves hard cardiovascular outcomes (MI, CV death, stroke) through the MGP/vascular calcification axis.
- #gap/no-mechanism — Whether VKORC1 or GGCX expression or activity changes intrinsically with aging (independent of dietary K insufficiency or warfarin exposure) is unknown. Age-related intrinsic cycle decline would compound dietary insufficiency but has no direct primary-source evidence.
- #gap/contradictory-evidence — The NQO1 bypass route is well-characterised biochemically but its quantitative importance for extrahepatic VKDP carboxylation at physiological (vs pharmacological) vitamin K doses is not established in humans. The relative contribution of the VKORC1 vs NQO1 routes under normal dietary conditions is unclear.
- #gap/needs-canonical-id — WikiPathways ID for vitamin K cycle not confirmed via live API; null in frontmatter. A WikiPathways entry may exist but was not verified during this seeding pass.
- `kegg: null` — No dedicated KEGG pathway map exists exclusively for the vitamin K cycle. KEGG hsa00130 (ubiquinone/terpenoid-quinone biosynthesis) contains VKORC1, GGCX, and NQO1 but within a broader terpenoid-quinone context; listed as `kegg-secondary:` only.

## Footnotes

[^stafford2005]: doi:10.1111/j.1538-7836.2005.01419.x · PMID:16102054 · Stafford DW · *J Thromb Haemost* 2005;3(8):1873–1878 · review · canonical description of the vitamin K cycle — KH₂ oxidation by GGCX to KO, VKORC1 recycling (two reduction steps: KO→K and K→KH₂), NQO1 bypass at high vitamin K, warfarin inhibition mechanism; foundational reference for cycle stoichiometry; 328+ citations · #gap/no-fulltext-access (not in local archive)

[^tie2016review]: doi:10.1111/jth.13217 · PMID:26663892 · Tie JK, Stafford DW · *J Thromb Haemost* 2016;14(2):236–247 · review · structural and functional insights into GGCX and VKORC1 within the vitamin K cycle; covers enzyme mechanism, substrate recognition, warfarin inhibition, and cell-based assay methods; 90+ citations at Crossref · #gap/no-fulltext-access (not in local archive)

[^schurgers2007]: doi:10.1182/blood-2006-04-018697 · Schurgers LJ et al. · *Blood* 2007;109(8):3279–3283 · rct (crossover) · n=32 · K1 vs MK-7 at equivalent molar doses; MK-7 significantly more effective at reducing dp-ucMGP, reflecting superior extrahepatic cycle support due to longer half-life · model: homo-sapiens · #gap/no-fulltext-access (not in local archive; abstract and metadata verified via PubMed/Crossref)

[^shearer2014]: doi:10.1194/jlr.R045559 · PMID:24489112 · Shearer MJ, Newman P · *J Lipid Res* 2014;55(2):345–362 · review · comprehensive coverage of vitamin K metabolism and cell biology including MK-4 biosynthesis via UBIAD1, vitamin K cycling mechanisms, and tissue distribution of K forms; identified UBIAD1 as the MK-4 biosynthetic enzyme in human tissues; >200 citations · #gap/no-fulltext-access (not in local archive)

[^nakagawa2010]: doi:10.1038/nature09464 · PMID:20953171 · Nakagawa K et al. · *Nature* 2010;468(7320):117–121 · experimental · UBIAD1 identified as the human MK-4 biosynthetic enzyme; converts K1, MK-4-d12, and menadione (K3) to MK-4 using GGPP as isoprene donor (both side-chain cleavage and prenylation activities); ubiquitous tissue expression — Ubiad1 mRNA highest in heart (but MK-4 concentrations in heart paradoxically low); highest MK-4 biosynthetic activity in brain, testis, and pancreas; ER-localised (UBIAD1–GFP co-localises with ER-tracker, not Golgi marker); warfarin-insensitive conversion confirmed in UBIAD1-expressing Sf9 cells and MG-63 cells; model: MG-63 human osteoblast-like cells + UBIAD1 baculovirus Sf9 cells + 5-week-old C57BL/6 mice (5/group) · archive: local PDF available

[^hirashima2024]: doi:10.1016/j.bbrc.2024.149635 · PMID:38335702 · Hirashima S et al. · *Biochem Biophys Res Commun* 2024;702:149635 · experimental (mouse UBIAD1 deficiency model) · UBIAD1 deficiency reduces bone mineral density and suppresses chondrocyte differentiation; confirms tissue-specific UBIAD1-MK-4 requirement for GGCX activity in skeletal tissues · model: mus-musculus · #gap/no-fulltext-access (not in local archive)

[^chatrou2012]: doi:10.1016/j.blre.2012.03.002 · PMID:22520397 · Chatrou ML et al. · *Blood Rev* 2012;26(4):155–166 · review · vitamin K antagonists block extrahepatic VKDP carboxylation (MGP, Gas6) producing vascular calcification as a cost of anticoagulation; evidence from animal models and clinical observational studies; >130 citations · #gap/no-fulltext-access (not in local archive)

[^siltari2018]: doi:10.1111/bcpt.12834 · PMID:28639365 · Siltari A, Vapaatalo H · *Basic Clin Pharmacol Toxicol* 2018;122(1):19–24 · review · evidence connecting long-term warfarin therapy to vascular calcification risk via VKORC1 inhibition; gamma-carboxylation of MGP and other VKDPs; DOACs as warfarin-sparing alternatives; 60+ citations · #gap/no-fulltext-access (not in local archive)

[^danziger2008]: doi:10.2215/CJN.00770208 · PMID:18495950 · Danziger J · *Clin J Am Soc Nephrol* 2008;3(5):1504–1510 · review · warfarin-induced VKORC1 inhibition suppresses MGP and Gas6 carboxylation in extrahepatic tissues; animal studies demonstrating warfarin-induced arterial calcification; clinical implications for CKD; >245 citations · #gap/no-fulltext-access (not in local archive)

[^kaesler2025]: doi:10.1111/apha.70040 · Kaesler N et al. · *Acta Physiol (Oxf)* 2025;241:e70040 · experimental (CKD rodent models + human carotid plaques) · carbamylation of GGCX arginine/lysine residues impairs carboxylase activity in uremic conditions; K2 supplementation partially restores activity · model: CKD rodents + human tissue · #gap/no-fulltext-access (not in local archive; also cited and status noted on [[ggcx]] page)
