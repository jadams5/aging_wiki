---
type: protein
aliases: [vkor, VKOR, vitamin K epoxide reductase, VKORC1, MSTP134, MSTP576]
uniprot: Q9BQB6
ncbi-gene: 79001
hgnc: 23663
ensembl: ENSG00000167397
genage-id: null
pathways: ["[[vitamin-k-cycle]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
mouse-ortholog: Vkorc1
druggability-tier: 3
gtex-aging-correlation: "#gap/needs-gtex-aging-correlation — not retrieved from GTEx v2 API; highest tissue expression reported in liver, heart, kidney, and lung (UniProt). Arterial aging-specific expression trajectory not quantified."
mr-causal-evidence: partial
caused-by: []
causes: ["[[vascular-calcification]]"]
literature-checked-through: 2026-06-02
verified: true
verified-date: 2026-06-02
verified-by: claude
verified-scope: "Rost 2004 (local PDF), Nuotio 2021 (downloaded OA PDF), Holden 2014 (downloaded bronze OA PDF), and D'Andrea 2005 (downloaded bronze OA PDF) verified against full text. Di Lullo 2019 and Wang 2006 are closed-access (not_oa); tagged #gap/no-fulltext-access. Wu 2018, Bevans 2013, Danziger 2008, Wei 2020 not re-read (mechanistic/review; quantitative claims limited; tagged where relevant). Canonical IDs (UniProt Q9BQB6, NCBI Gene 79001, HGNC 23663, Ensembl ENSG00000167397) confirmed by seeder via live REST APIs and accepted here. Corrections applied: (1) transmembrane topology corrected 4→3 helices per Rost 2004; (2) Nuotio 2021 ORs and CIs added in full; (3) Holden 2014 SNP corrected rs2884737→rs8050894; Holden n clarified 167 total/86 CAC-subset; (4) D'Andrea 2005 n corrected 297→147; SNP clarified as 1173C>T not rs9923231 directly."
---


# VKORC1 — Vitamin K Epoxide Reductase Complex Subunit 1

VKORC1 is the enzyme that regenerates reduced vitamin K hydroquinone (KH₂) from vitamin K 2,3-epoxide, completing the **vitamin K cycle** that enables continuous gamma-carboxylation of vitamin K-dependent proteins (VKDPs). It is the molecular target of warfarin and related coumarin anticoagulants. In the aging context, VKORC1 is relevant primarily through two mechanisms: (1) as the enzymatic gatekeeper controlling reduced vitamin K availability for extrahepatic VKDP carboxylation — most critically, [[matrix-gla-protein]] (MGP) in the arterial wall — and (2) as the target whose pharmacological inhibition by warfarin in older adults creates an **iatrogenic vascular calcification paradox**, where anticoagulation accelerates the very vascular disease it is meant to protect against. VKORC1 is not a classic longevity gene; it does not appear in the GenAge database. Its aging relevance is mechanistic and clinical rather than intrinsic.

**VKORC1 / VKORC1L1 paralog note.** The human genome encodes a second VKOR-family protein, VKORC1L1 (vitamin K epoxide reductase complex subunit 1-like 1; UniProt Q8N0U8). VKORC1L1 is a warfarin-insensitive VKOR paralog primarily expressed in the Golgi apparatus; it supports carboxylation of some VKDPs but cannot compensate for VKORC1 inhibition in the endoplasmic reticulum context where clotting factors and MGP are primarily carboxylated. This wiki page covers VKORC1 only; VKORC1L1 is a distinct gene with a different pharmacology. The alias `VKORC1L1` in this page's frontmatter is included only to ensure wikilink disambiguation — do not conflate the two proteins.

## Identity

| Field | Value |
|---|---|
| UniProt | Q9BQB6 (VKOR1_HUMAN) |
| NCBI Gene | 79001 |
| HGNC | 23663 |
| Ensembl | ENSG00000167397 |
| Chromosomal location | 16p11.2 |
| Gene symbol | VKORC1 (synonyms: VKOR, MSTP134, MSTP576) |
| Mouse ortholog | Vkorc1 |
| Protein length | 163 aa |
| Subcellular location | Endoplasmic reticulum membrane (multi-pass; 3 predicted transmembrane helices per PSORT II topology analysis) |

*IDs confirmed 2026-06-02 via UniProt REST (`rest.uniprot.org/uniprotkb/Q9BQB6.json`), Ensembl REST (`rest.ensembl.org/lookup/symbol/homo_sapiens/VKORC1`), and HGNC cross-reference in UniProt record.*

## Gene identification history

VKORC1 was identified as the gene encoding the warfarin-sensitive vitamin K epoxide reductase in two simultaneous 2004 publications in the same issue of *Nature*: Rost et al. (doi:10.1038/nature02214) by positional cloning in VKCFD2 and warfarin-resistance pedigrees, and Li et al. (doi:10.1038/nature02205) by siRNA screening of transmembrane genes on chromosome 16p12–q21 [^rost2004]. Rost et al. demonstrated that loss-of-function mutations caused combined VKDP carboxylation failure (VKCFD2) and that the same gene harbours warfarin-resistance mutations. Li et al. confirmed the gene encodes a 163 amino acid protein with predicted transmembrane structure; topology prediction programs (PSORT II) anticipated three transmembrane domains, and ER localisation was confirmed by co-localisation with the ER marker calnexin. The gene had long been elusive because the enzymatic activity was sensitive to detergent solubilisation, making classical protein purification approaches unreliable.

## Enzymatic mechanism

VKORC1 catalyses the two-electron reduction of vitamin K 2,3-epoxide (KO) to vitamin K quinone (K), and the quinone form can be further reduced to the active hydroquinone (KH₂) — the latter step also performed by VKORC1 under physiological conditions (in the absence of warfarin) as well as by vitamin K quinone reductase (NQO1/DT-diaphorase). The active form KH₂ is the obligatory cofactor for gamma-glutamyl carboxylase ([[ggcx]]).

The catalytic cycle:

1. **GGCX carboxylation step** — [[ggcx]] oxidises KH₂ to KO while carboxylating Glu residues on VKDPs to gamma-carboxyglutamate (Gla). One molecule of KH₂ is consumed per carboxylation event.
2. **VKORC1 recycling step** — VKORC1 reduces KO back to K (then K to KH₂), regenerating the active cofactor. This allows a single vitamin K molecule to participate in many carboxylation cycles.
3. **Warfarin block** — coumarin anticoagulants (warfarin, acenocoumarol, phenprocoumon) bind VKORC1 in the ER membrane and competitively inhibit KO reduction [^wu2018]. The inhibition constant Ki for warfarin against VKORC1 has been measured in vitro [^bevans2013]. The result is depletion of KH₂ in all tissues, impairing carboxylation of all VKDPs — both hepatic clotting factors (desired therapeutic effect) and extrahepatic substrates including MGP (unintended effect).

## Warfarin pharmacology and the vascular calcification paradox

Warfarin and related coumarins exert their anticoagulant effect entirely through VKORC1 inhibition in the liver, reducing carboxylation of prothrombin and factors VII, IX, and X. This is their intended mechanism. However, VKORC1 is expressed in all tissues, and the hepatic coagulation effect is inseparable from extrahepatic consequences.

**The paradox:** Warfarin is among the most prescribed medications globally for atrial fibrillation (AF), venous thromboembolism (VTE), and mechanical heart valves — indications that are highly prevalent in older adults (AF affects ~9% of adults over 65). Yet warfarin's VKORC1 inhibition in the vascular wall depletes reduced vitamin K available to GGCX, leaving MGP uncarboxylated (ucMGP). ucMGP cannot bind calcium-phosphate crystals or sequester BMP-2 in the arterial wall, so VSMC osteogenic transdifferentiation and mineral deposition proceed [^danziger2008].

Clinical evidence for warfarin-associated calcification:

- In 500 consecutive carotid endarterectomy patients (82 warfarin users, 418 non-users), warfarin users had significantly higher vascular calcification: OR 18.27 (95% CI 2.53–2323, P<0.001) for internal carotid artery (ICA) calcification near the bifurcation, and OR 2.64 (95% CI 1.51–4.63, P=0.001) for common carotid artery (CCA) calcification. Histological analysis showed the intramural calcified area in warfarin-user plaques was 8.5% larger (effect size 8.46, 95% CI 3.36–13.56, P=0.0018) [^nuotio2021]. The extremely wide CI for the ICA OR reflects complete separation in the data (all warfarin users showed ICA calcification), necessitating Firth's bias-reduced logistic regression. #gap/needs-replication — single-centre observational.
- In a preliminary observational cohort of CKD stage 3b–4 patients anticoagulated for AF, warfarin users showed higher cardiac valve calcification scores vs rivaroxaban users over 16 months, with the DOAC group showing a reduction in both aortic and mitral valve calcification scores [^dilullo2019]. The study is small and preliminary; it does not constitute RCT-level evidence but provides clinical directional support for the VKORC1 mechanism. #gap/needs-replication
- In a mixed patient cohort, Wei et al. (2020) found warfarin exposure correlated with aortic calcification score (AC score) and elevated plasma IL-6 in younger patients (<65), and in vitro data showed warfarin accelerated calcification in young vascular smooth muscle cells (VSMCs) and upregulated SASP markers — providing a mechanistic link between VKORC1 inhibition, senescence-associated secretory phenotype, and calcification [^wei2020]. #gap/needs-replication — in vitro and observational; not a calcification endpoint RCT.
- Danziger (2008) provides a systematic review of the evidence linking VKORC1-dependent VKDP inhibition to vascular calcification, noting both MGP and Gas6 are suppressed by warfarin [^danziger2008].

**DOAC comparison:** Direct oral anticoagulants (DOACs — apixaban, rivaroxaban, edoxaban, dabigatran) do not inhibit VKORC1 and do not affect the vitamin K cycle. The Di Lullo 2019 preliminary study suggests DOACs may be associated with less valve calcification than warfarin in CKD patients, consistent with a VKORC1-sparing mechanism. This comparison is biologically plausible and clinically important for the aging/AF population but has not been formally tested in a prospective RCT with calcification as a primary endpoint. #gap/needs-human-replication

## Pharmacogenomics — warfarin dose determination

VKORC1 polymorphisms are the dominant pharmacogenomic determinant of warfarin dose requirement, explaining approximately 25–30% of inter-individual variability in stable warfarin dose (CYP2C9 variants explain another ~10–15%).

**Key variant:** The intronic 1173C>T polymorphism (an SNP in intron 1; in strong linkage disequilibrium with the -1639G>A promoter SNP rs9923231) is the variant characterised in D'Andrea et al. (2005) [^dandrea2005]. Carriers of the 1173TT genotype require significantly lower stable warfarin doses (mean 3.5 mg) than 1173CT carriers (4.8 mg) or 1173CC carriers (6.2 mg) (P<0.001 for CC vs TT). The broader haplotype including the -1639G>A / rs9923231 promoter variant is the most widely cited pharmacogenomic marker: the A allele at -1639 reduces VKORC1 transcription, leading to lower enzyme expression and higher warfarin sensitivity.

| Genotype (rs9923231 / -1639G>A) | VKORC1 expression | Warfarin sensitivity | Typical dose implication |
|---|---|---|---|
| GG (wild-type) | Normal | Low | Higher dose required |
| GA (heterozygous) | Reduced | Intermediate | Intermediate dose |
| AA (variant homozygous) | Lowest | High | Low dose required |

The variant frequency differs substantially by ancestry: AA genotype is most common in East Asian populations (~80–90%) and least common in African-ancestry populations (~10%), explaining the well-documented population differences in warfarin sensitivity. These pharmacogenomic differences have also been studied in the context of vascular disease risk — the VKORC1 haplotype associated with lower enzyme activity (A allele) has been linked in one Circulation study to altered undercarboxylated osteocalcin levels and possibly modified arterial vascular disease risk [^wang2006], though causality from genetic association alone is uncertain. #gap/no-fulltext-access (Wang 2006 closed-access)

**VKORC1 sequence variation and coronary calcification:** In 167 CKD stage 3–5 patients followed for up to 4 years, Holden et al. (2014) studied the VKORC1 SNP rs8050894. The CG/GG genotypes were associated with: (1) higher baseline coronary artery calcification (median CAC score 299 vs 112 in CC genotype, P=0.036); (2) a 4-fold higher risk of progressive CAC (OR 4.0, 95% CI 1.0–15.5, P=0.04) in the 86-patient CAC-progression subset; and (3) a 4-fold higher 4-year all-cause mortality risk (HR 4.1, 95% CI 1.24–13.58, P=0.02) [^holden2014]. This suggests that endogenous VKORC1 functional variation may modulate calcification risk independently of warfarin therapy. CKD-specific context; causality and generalizability to non-CKD populations require confirmation.

## Druggability — tier rationale

**Assigned tier: 3 (predicted druggable; no aging-beneficial clinical drug)**

Warfarin and coumarin anticoagulants are FDA-approved clinical drugs that engage VKORC1 with high potency and selectivity. By the literal criterion of "a clinical drug exists that engages this entity," VKORC1 qualifies as tier 1 (clinical drug exists). However, the **aging-context convention** specifies the tier reflects whether a clinical drug exists *for an aging indication that beneficially engages the entity*. Warfarin engages VKORC1 as an **inhibitor** and its effect on the aging-relevant axis (vitamin K cycle → MGP carboxylation → vascular calcification prevention) is **harmful** — it accelerates the pathway VKORC1 should protect. No clinical drug has been developed to restore or enhance VKORC1 activity for an aging or vascular calcification indication. Therefore:

- Tier 1 by pharmacological criterion (inhibitor drug exists) — **rejected** by aging-context convention.
- Tier 3 assigned: the biology is well-understood, the protein structure is solved, a drug exists as a probe, and activating or VKOR-sparing strategies are pharmacologically conceivable (e.g., substrate analogues, VKORC1L1-based approaches, vitamin K super-supplementation as an upstream surrogate). None are in clinical development for vascular calcification.

The upstream therapeutic strategy — vitamin K supplementation (especially MK-7) to ensure adequate substrate supply to VKORC1 — is not a direct VKORC1 drug but an indirect bypass of VKORC1 limitation. See [[vitamin-k]] for the MK-7 evidence base.

## Aging hallmark assignment

**Primary: [[altered-intercellular-communication]]**

The mechanistic chain is: VKORC1 activity → reduced vitamin K availability → GGCX carboxylation of MGP → arterial wall calcification suppression → arterial compliance maintenance → preserved systemic vascular signalling (baroreceptor function, pulse pressure transmission, end-organ perfusion). Disruption of this chain (by warfarin or age-related vitamin K insufficiency increasing the functional demand on VKORC1) links to the altered-intercellular-communication hallmark via degraded vascular wall-to-systemic circulation signalling. This is the same hallmark assignment used on the [[matrix-gla-protein]] and [[vitamin-k]] pages. Direct VKORC1-to-hallmark evidence is limited to the mechanistic chain; no primary study directly assesses VKORC1 expression or activity against López-Otín hallmark criteria.

No assignment to [[cellular-senescence]] is made despite the Wei 2020 SASP mechanistic data — that paper is in vitro + small observational, and the SASP link is downstream of warfarin-induced calcification rather than a primary VKORC1 aging mechanism. #gap/needs-replication before a senescence hallmark assignment would be warranted.

## Loss-of-function phenotypes

**Human (VKCFD2 — combined vitamin K-dependent clotting factor deficiency type 2; OMIM 607473):** Biallelic VKORC1 loss-of-function mutations cause a bleeding disorder affecting all vitamin K-dependent clotting factors (II, VII, IX, X, Protein C, Protein S) and responsive to vitamin K supplementation. Mutations at residues critical for warfarin binding also confer warfarin resistance. The VKCFD2 phenotype confirms VKORC1 is non-redundant for hepatic VKDP carboxylation; whether extrahepatic calcification consequences manifest in VKCFD2 patients (who are K-vitamin supplemented) has not been well characterised [^rost2004].

**Coumarin resistance (CMRES; OMIM 122700):** Gain-of-function variants at the warfarin-binding interface confer pharmacological resistance to warfarin — higher doses are required to achieve therapeutic anticoagulation. These variants are clinically important but do not directly model aging biology.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Vitamin K cycle structure (VKORC1 + GGCX) is fully conserved in vertebrates |
| Phenotype conserved in humans? | yes | VKCFD2 in humans mirrors complete enzyme loss; warfarin-induced calcification is human clinical reality |
| Replicated in humans? | yes (clinical) | Warfarin-associated vascular calcification is well-documented observationally; direct VKORC1-calcification causal chain is mechanistically established |

## Relationship to GGCX and the vitamin K cycle

VKORC1 and [[ggcx]] are the two obligatory enzymatic components of the vitamin K cycle. GGCX is the carboxylase that modifies VKDPs; VKORC1 is the reductase that regenerates the cofactor. Neither enzyme is functional without the other in a sustained carboxylation context. The aging-relevant output of the cycle is carboxylated [[matrix-gla-protein]] in the arterial wall — see that page for the downstream biology.

For the full vitamin K cycle mechanism and substrate/cofactor chemistry, see [[vitamin-k]].

## Key interactors and downstream targets

- [[ggcx]] — direct functional partner; GGCX consumes KH₂ that VKORC1 regenerates; both are ER membrane proteins
- [[matrix-gla-protein]] — primary extrahepatic VKDP dependent on VKORC1 activity via GGCX for anti-calcification function
- Warfarin / coumarin anticoagulants — competitive inhibitors binding the ER-luminal face of VKORC1
- VKORC1L1 — warfarin-insensitive paralog; distinct subcellular localisation (Golgi); separate page if warranted

## Mendelian randomization evidence assessment

**`mr-causal-evidence: partial`**

The rs9923231 (-1639G>A) VKORC1 promoter variant is a strong genetic instrument for VKORC1 expression level and warfarin dose requirement — it is one of the most validated pharmacogenomic variants in coagulation. However, formal Mendelian randomization studies using VKORC1 variants as instruments for **aging-relevant phenotypes** (vascular calcification, arterial stiffness, cardiovascular mortality, all-cause mortality) have not been published to this wiki's knowledge. The genetic association data from Wang 2006 (Circulation, haplotypes and arterial disease) [^wang2006] and Holden 2014 (ATVB, VKORC1 genotype and coronary calcification in CKD) [^holden2014] represent genetic association studies, not MR designs with causal-inference framing. Instruments exist; formal MR studies pending. #gap/needs-replication

## Related pages

- [[vitamin-k]] — substrate page; vitamin K cycle mechanism, MK-7 evidence, warfarin paradox overview
- [[matrix-gla-protein]] — primary extrahepatic VKDP; MGP carboxylation is the aging-relevant output of VKORC1 activity
- [[ggcx]] — partner carboxylase enzyme; consumes the reduced vitamin K that VKORC1 regenerates
- [[vascular-calcification]] — the process downstream of VKORC1 inhibition
- [[altered-intercellular-communication]] — the hallmark linked via the vascular calcification axis
- [[arterial-stiffening]] — downstream phenotype of vascular calcification
- [[atherosclerosis]] — partially overlapping phenotype; intimal vs medial calcification distinction

## Limitations and gaps

- #gap/needs-gtex-aging-correlation — GTEx v2 API age-stratified expression for VKORC1 not retrieved; expression highest in liver, heart, kidney, lung per UniProt; arterial aging trajectory unknown.
- #gap/needs-human-replication — No prospective RCT has tested a VKORC1-sparing anticoagulation strategy (DOAC vs warfarin) with vascular calcification as a primary endpoint in non-CKD populations.
- #gap/needs-replication — The Wang 2006 (Circulation) haplotype-disease association and Holden 2014 CKD genotype-calcification findings have not been independently validated in large non-CKD cohorts.
- #gap/needs-replication — Wei 2020 warfarin-SASP mechanistic data are in vitro + small observational; causal link between VKORC1 inhibition, cellular senescence, and calcification requires prospective mechanistic study.
- #gap/no-mechanism — Whether VKORC1 expression or activity itself changes with aging (independent of dietary vitamin K intake or warfarin exposure) is not established. Age-related declines in VKORC1 function would compound dietary K insufficiency; no primary evidence found.
- `genage-id: null` — VKORC1 is not in the GenAge human aging gene database, consistent with its role as an indirect aging-relevant enzyme rather than a primary longevity regulator.
- **Druggability tension documented:** Tier 3 is assigned under the aging-context convention. Warfarin provides pharmacological tractability as a probe but is antagonistic to the aging-beneficial VKORC1 function. Any aging-positive VKORC1 modulator would need to be a substrate analogue, VKOR activator, or indirect bypass strategy — none currently in development.
- **Supersession candidate (R25):** A 2025 meta-analysis of 3 RCTs (n=272; PMID 41401404, doi:10.1097/FJC.0000000000001787, *J Cardiovasc Pharmacol*) found DOACs significantly reduce calcified plaque progression vs warfarin (MD -7.07 mm³ calcified plaque, 95% CI -12.99 to -1.14, P=0.02) in AF patients. This is directionally consistent with the VKORC1 mechanism stated on this page but is the first RCT-level meta-analysis specifically on plaque composition; the main agent or user should consider whether the Di Lullo 2019 section should cite or reference this newer synthesis. Not integrated silently — flagged for editorial review per R25.
- **Also 2025:** A cross-sectional study in 302 CKD patients (PMID 41465069, *Genes (Basel)*) found VKORC1 polymorphisms independently associated with arterial stiffness and serum MGP levels, further supporting the Holden 2014 CKD-specific VKORC1-calcification axis. Consistent with existing framing; no supersession.

## Footnotes

[^rost2004]: doi:10.1038/nature02214 · Rost S et al. · *Nature* 2004;427:537–541 · n=multiple pedigrees (VKCFD2 families + warfarin-resistant patients) · positional-cloning · identified VKORC1 as the gene encoding warfarin-sensitive vitamin K epoxide reductase; loss-of-function mutations cause VKCFD2; warfarin-resistance mutations map to the same gene; published simultaneously with Li et al. (doi:10.1038/nature02205, *Nature* 2004;427:541–545) who confirmed the gene via siRNA and established the protein as 163 aa with 3 predicted transmembrane helices (PSORT II) in the ER membrane · model: human pedigrees + in-vitro · archive: local PDF available (1,125 citations; citation percentile 100th)

[^dandrea2005]: doi:10.1182/blood-2004-06-2111 · D'Andrea G et al. · *Blood* 2005;105(2):645–649 · n=147 anticoagulated Italian patients (of 203 attending, 147 analyzed after exclusions/missing data) · observational (pharmacogenomics) · VKORC1 1173C>T (intron 1 SNP; in LD with -1639G>A / rs9923231 promoter variant) is a major determinant of inter-individual warfarin dose variability; 1173TT genotype requires lower stable warfarin dose (mean 3.5 mg) vs CC (6.2 mg), P<0.001; VKORC1 + CYP2C9 together explain ~35% of dose variability (r²=0.353) · model: homo-sapiens · archive: downloaded OA (695 citations; citation percentile 100th)

[^wu2018]: doi:10.1182/blood-2018-01-830901 · Wu S et al. · *Blood* 2018;132(6):647–657 · in-vitro mechanistic · warfarin inhibits VKORC1 by forming a covalent-like complex with the active site cysteines; molecular accounting for the inhibition stoichiometry and warfarin resistance mutations · model: in-vitro reconstituted VKORC1 · archive: pending (59 citations)

[^bevans2013]: doi:10.1016/j.bbagen.2013.04.018 · Bevans CG et al. · *Biochim Biophys Acta* 2013;1830(10):4603–4612 · in-vitro · determination of Ki for warfarin inhibition of VKORC1 using DTT-driven cell-free assay; quantitative inhibition kinetics characterised · model: in-vitro VKORC1 · archive: pending (44 citations)

[^danziger2008]: doi:10.2215/CJN.00770208 · Danziger J · *Clin J Am Soc Nephrol* 2008;3(5):1504–1510 · review · warfarin inhibition of VKORC1 suppresses MGP and Gas6 carboxylation in extrahepatic tissues; animal studies demonstrate warfarin-induced vascular calcification; review of clinical implications for CKD and broader populations · not OA locally (245 citations)

[^wang2006]: doi:10.1161/CIRCULATIONAHA.105.580167 · Wang Y et al. · *Circulation* 2006;113(12):1615–1621 · n=~1,600 (case-control, three vascular disease cohorts) · observational (genetic association) · VKORC1 C allele at +2255 locus associated with ~2× higher risk of stroke, coronary heart disease, and aortic dissection; CC/CT subjects had lower undercarboxylated osteocalcin levels vs TT · #gap/no-fulltext-access (closed-access; not in archive) — specific ORs and CI values from abstract/metadata only; full methods/results unverified · #gap/needs-replication — genetic association; formal MR not performed (145 citations)

[^holden2014]: doi:10.1161/ATVBAHA.114.303211 · Holden RM et al. · *Arterioscler Thromb Vasc Biol* 2014;34(7):1591–1596 · n=167 CKD stage 3–5 (66 CC, 101 CG/GG; 86-patient subset for CAC progression) · observational (prospective genetic association) · VKORC1 rs8050894 CG/GG genotype: baseline CAC median 299 vs 112 (CC), P=0.036; 4-yr CAC progression OR 4.0 (95% CI 1.0–15.5, P=0.04); 4-yr mortality HR 4.1 (95% CI 1.24–13.58, P=0.02) · CKD-specific context · archive: downloaded bronze OA (14 citations) · #gap/needs-replication in non-CKD populations

[^nuotio2021]: doi:10.3389/fneur.2021.696244 · Nuotio K et al. · *Front Neurol* 2021;12:696244 · n=500 total (82 warfarin users, 418 non-users) · observational (cross-sectional, CTA + histology) · ICA calcification: OR 18.27 (95% CI 2.53–2323, P<0.001; wide CI due to complete separation — Firth's method used); CCA calcification: OR 2.64 (95% CI 1.51–4.63, P=0.001); histological intramural calcified area 8.5% larger in warfarin users (effect 8.46, 95% CI 3.36–13.56, P=0.0018) · gold OA · archive: downloaded (8 citations) · #gap/needs-replication — single-centre observational

[^dilullo2019]: doi:10.1016/j.ijcard.2018.11.119 · Di Lullo L et al. · *Int J Cardiol* 2019;278:243–249 · n=small preliminary cohort · observational (CKD stage 3b–4, AF, warfarin vs rivaroxaban) · rivaroxaban associated with reduced mitral and aortic valve calcification vs warfarin over 16 months; CRP also lower in rivaroxaban group · #gap/no-fulltext-access (closed-access; not in archive) · **preliminary** — small n, preliminary observation, not a calcification-endpoint RCT · (49 citations) · #gap/needs-replication

[^wei2020]: doi:10.1155/2020/2043762 · Wei N et al. · *Oxid Med Cell Longev* 2020:2043762 · mixed in-vitro + observational (n unclear from abstract) · warfarin exposure correlated with AC score and plasma IL-6 in patients <65 years; warfarin accelerated calcification in young VSMCs in vitro and upregulated SASP markers; older patients showed smaller warfarin effect on AC score · hybrid OA · archive: pending (11 citations) · #gap/needs-replication — in vitro findings; observational correlation not a causal study
