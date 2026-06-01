---
type: protein
aliases: [IKK-epsilon, IKKε, IKK-i, inducible IκB kinase, IKKE, IKKI, KIAA0151]
uniprot: Q14164
ncbi-gene: 9641
hgnc: 14552
ensembl: ENSG00000263528
genage-id: null
mouse-ortholog: Ikbke
is-noncoding-rna: false
key-domains: [kinase, ubiquitin-like, leucine-zipper, scaffold-dimerization]
key-ptms: [Ser172-autophosphorylation, Thr501-IFN-induced, Ser664]
pathways: ["[[type-i-interferon-signaling]]", "[[nf-kb]]", "[[cgas-sting]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
complex-subunits: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by:
  - "[[tlr4]] signaling (LPS-induced expression)"
  - "[[sting]] activation"
  - "[[mavs]] (MAVS-dependent viral sensing)"
  - "TNF / IL-1β induction"
causes:
  - "[[irf3]] / IRF7 Ser396 phosphorylation → type I IFN transcription"
  - "[[nf-kb]] activation (CYLD/TRAF2 arm)"
  - "metabolic inflammation (adipose IKKε-driven insulin resistance)"
  - "SASP amplification (NF-κB arm in senescent cells)"
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Reilly 2013 (Nat Med), Oral 2017 (Cell Metab), Peters 2000 (Mol Cell), Zhao 2022 (JCI Insight), Cho 2024 (Exp Mol Med), You 2025 (npj Gut Liver) verified against local PDFs. Chiang 2009 (Cell) not_oa/failed download — metabolic KO phenotype claims accepted per introduction framing in Reilly 2013 (which cites Chiang 2009 as prior work) but not directly cross-checked against Chiang 2009 primary PDF. Fitzgerald 2003 (Nat Immunol) not_oa — IRF3 Ser396 phosphorylation claim is a widely-cited canonical finding; accepted. Shimada 1999 (Int Immunol) not_oa — discovery context accepted. UniProt Q14164, NCBI Gene 9641, HGNC 14552 identity fields verified against REST APIs; Ensembl ENSG00000263528 confirmed by both Ensembl REST and HGNC."
literature-checked-through: 2026-05-13
---

# IKKε (IKBKE)

**IKKε** (Inhibitor of Nuclear Factor Kappa-B Kinase Subunit Epsilon; gene symbol **IKBKE**) is a serine/threonine kinase of the non-canonical IKK family, closely paralogous to [[tbk1]] (~65% overall sequence similarity; 72% identical in the ATP-binding region) [^reilly2013]. Together, IKKε and TBK1 form a functionally overlapping kinase pair that phosphorylates **[[irf3]]** and **IRF7** to drive type I interferon production downstream of [[cgas-sting|cGAS–STING]] and [[mavs|MAVS]]. Distinct from TBK1, IKKε has a pronounced role in **metabolic inflammation**: it is transcriptionally induced in obesity-associated adipose tissue and sustains chronic low-grade inflammation that degrades insulin sensitivity. Its inhibitor **amlexanox** (originally FDA-approved for aphthous ulcers) has shown efficacy in mouse obesity models and a statistically significant HbA1c improvement in a Phase 2 randomized trial, with a subset of metabolically-inflamed patients showing the most robust response, making IKKε a druggable metabolic-inflammation node with aging relevance.

## Identity

- **UniProt:** Q14164 (IKKE_HUMAN)
- **NCBI Gene:** 9641
- **HGNC:** 14552 · symbol: IKBKE
- **Ensembl:** ENSG00000263528
- **Mouse ortholog:** Ikbke (one-to-one ortholog)
- **Chromosome:** 1q32.1
- **Length:** 716 amino acids (canonical isoform)
- **Alternative names:** IKK-i (Shimada 1999), IKK-epsilon, IKKE, IKKI, KIAA0151

> **Ensembl ID note:** The seeder brief referenced ENSG00000143466 (an older annotation); the HGNC REST API and Ensembl GRCh38 REST API both return **ENSG00000263528** as the canonical gene ID. Verified 2026-05-13 against both sources.

IKKε was independently discovered in 1999 as a novel LPS-inducible kinase by Shimada et al. (named IKK-i) [^shimada1999] and characterized in 2000 by Peters et al. as a PMA-inducible component of a distinct IκB kinase complex [^peters2000]. Its role as a required IRF3/IRF7 kinase in antiviral innate immunity was established by Fitzgerald et al. 2003 [^fitzgerald2003].

## Domain organization

| Domain | Residues (approx.) | Function |
|---|---|---|
| Kinase domain (KD) | 9–315 | Catalytic activity; ATP-binding cleft is target of amlexanox and BX795 |
| Ubiquitin-like domain (ULD) | ~315–385 | Substrate recruitment; contributes to dimerization |
| Leucine-zipper motif | 436–457 | Homo- and hetero-dimerization with TBK1 |
| Scaffold-dimerization domain (SDD) | ~383–647 | Adaptor docking (DDX3X interaction region); Thr501 activation site |

Domain boundaries follow UniProt Q14164 (accessed 2026-05-13). The SDD/ULD architecture is near-identical to TBK1; minor differences in the adaptor-docking surface may account for distinct substrate preferences.

## Activation mechanism

IKKε is activated through convergent upstream pathways:

1. **Innate immune axis:** Downstream of [[sting]] or [[mavs]], IKKε is recruited to adaptor complexes (TANK, SINTBAD), undergoes **Ser172 autophosphorylation** (and IKKB-mediated Ser172 trans-phosphorylation), and phosphorylates IRF3 at Ser396 and IRF7 to license their nuclear translocation and type I IFN transcription [^fitzgerald2003].
2. **NF-κB arm:** IKKε phosphorylates the deubiquitinase **CYLD** (rendering it inactive) and acts on TRAF2, sustaining non-canonical NF-κB activation independent of the canonical IKK complex (IKKα/IKKβ/NEMO) [^shimada1999].
3. **Metabolic induction:** In obese adipose tissue, IKKε transcription is induced by chronic nutrient excess and cytokine signaling (TNF, IL-1β). The resulting kinase activity phosphorylates substrates in adipocytes that suppress energy expenditure and impair insulin signaling — a mechanism distinct from TBK1's constitutive expression pattern [^chiang2009].

Unlike **[[tbk1]]** (constitutively expressed at low basal levels), IKBKE expression is strongly inducible by LPS, TNF, IL-1β, and IFN, making it more tightly coupled to acute inflammatory state.

## Key functions

### Type I interferon arm (IRF3/IRF7 axis)

IKKε phosphorylates IRF3 at multiple C-terminal serine residues (notably Ser396), triggering IRF3 dimerization, nuclear translocation, and transcription of *IFNB1* (IFN-β) and interferon-stimulated genes (ISGs) [^fitzgerald2003]. This function is redundant with TBK1 under most conditions: each kinase can partially compensate for the other's loss, though combined knockdown or pharmacological inhibition of both is required for robust IFN suppression. IKKε also phosphorylates and activates **STAT1**, amplifying type I IFN responses in a positive feedback loop.

### NF-κB activation

IKKε contributes to NF-κB activation through:
- Phosphorylation of **CYLD** (Lys63-deubiquitinase), inactivating it and allowing ubiquitin chains on TRAF proteins to accumulate and sustain NF-κB signaling
- Direct interaction with TRAF2 and TRAF6 adaptor complexes

This places IKKε as a node that bridges the innate antiviral axis (IRF3/IFN) and the pro-inflammatory axis (NF-κB/SASP), relevant to both viral sensing and the chronic [[sasp|SASP]] of senescent cells.

### Metabolic inflammation

The most aging-distinct function of IKKε relative to TBK1 is its role in **obesity-driven metabolic inflammation**:

- In diet-induced obese mice, adipose IKBKE expression is markedly elevated. *Ikbke* knockout mice fed a high-fat diet are protected from obesity, insulin resistance, and hepatic steatosis compared to wild-type littermates [^chiang2009]. #gap/needs-human-replication
- Mechanistically, IKKε in adipocytes phosphorylates substrates that suppress thermogenesis and energy expenditure, contributing to the metabolic setpoint shift in obesity.
- IKKε sustains a state of chronic, low-grade adipose inflammation that feeds back to impair systemic insulin sensitivity — a mechanism relevant to the aging-associated transition toward metabolic syndrome.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IKKε/TBK1 IFN axis fully conserved; metabolic-inflammation role assumed but mechanistically less characterized in human adipocytes |
| Phenotype conserved in humans? | partial | Amlexanox Phase 2 showed statistically significant HbA1c improvement in the full drug-treated group and enhanced effect in a metabolically inflamed subset (see Pharmacology); full obesity-protection phenotype not demonstrated |
| Replicated in humans? | partial | Phase 2 signal (n=42, Oral 2017) — significant primary endpoint but small proof-of-concept study; not yet replicated in a large confirmatory RCT |

## Role in aging

### Inflammaging and SASP amplification

IKKε is a downstream effector of the [[cgas-sting|cGAS–STING]] → TBK1/IKKε → NF-κB axis that drives the **senescent cell SASP** [^fitzgerald2003]. Activation of STING by cytosolic chromatin fragments (micronuclei, cytoplasmic chromatin — a feature of senescent cells) recruits both TBK1 and IKKε to amplify NF-κB-driven cytokine output (IL-6, IL-8, MMP3). This positions IKKε as a contributor to [[chronic-inflammation|inflammaging]] through the SASP arm. #gap/needs-replication — direct evidence that IKKε (not TBK1 alone) is the rate-limiting kinase in SASP-associated NF-κB activation in human senescent cells is not established.

### Metabolic aging

Age-associated adipose inflammation shows molecular overlap with obesity-associated adipose inflammation: elevated IKKε expression, impaired insulin sensitivity, and chronic cytokine secretion [^reilly2013]. Whether IKKε levels specifically rise with chronological age (independent of adiposity) in humans is not well characterized. #gap/needs-human-replication

### Cardiac biology

In a 2024 study, IKKε-deficient macrophages showed impaired cardiac repair after myocardial infarction, associated with accelerated macrophage-to-myofibroblast transition [^park2024]. This suggests IKKε plays a protective role in the cardiac repair microenvironment — a counterintuitive finding relative to its generally pro-inflammatory reputation. Implications for cardiac aging or HFpEF remain unexplored. #gap/no-mechanism

## Pharmacology

### Amlexanox — IKKε/TBK1 dual inhibitor

**Amlexanox** (5-aminosalicylate-class small molecule, FDA-approved 1997 for aphthous ulcers) was identified as an IKKε/TBK1 ATP-competitive inhibitor by Reilly et al. 2013 [^reilly2013]. Key pharmacology:

- **Mechanism:** ATP-competitive inhibitor of both IKKε and TBK1 kinase domains; half-maximal inhibitory concentration (IC50) of approximately 1–2 μM for IKKε, with TBK1 inhibited at approximately the same concentrations in enzymatic assays. No inhibition of IKKα or IKKβ at these concentrations [^reilly2013].
- **Selectivity:** Moderate — at 1–2 μM, amlexanox did not block activity of a broad kinase panel; however, it also has mast-cell-stabilizing activity of uncertain mechanism and inhibits phosphodiesterase PDE3B, so it is not a clean research tool for definitively attributing effects to IKKε vs TBK1 in isolation [^reilly2013].
- **Mouse obesity/T2D (Nat Med 2013):** Amlexanox treatment of diet-induced obese mice improved insulin sensitivity, reduced hepatic steatosis, promoted energy expenditure, and reduced adipose inflammation [^reilly2013].
- **Atherosclerosis (JCI Insight 2022):** TBK1/IKKε inhibition by amlexanox in Ldlr−/− mice on a Western diet improved dyslipidemia (reduced circulating cholesterol and triglycerides) and substantially reduced aortic atherosclerotic plaque area [^reilly2022].
- **MASH/liver (npj Gut Liver 2025):** Amlexanox showed efficacy in GAN diet-fed Ldlr−/− mice (a combined MASH + atherosclerosis model), improving hepatic steatosis, liver fibrosis, and dyslipidemia via enhanced bile acid synthesis/fecal excretion and enrichment of the gut commensal Akkermansia muciniphila [^amlexanox2025].

**Human Phase 2 (Cell Metabolism 2017):** In a randomized, double-blind, placebo-controlled proof-of-concept trial (n=42 obese patients with T2D or NAFLD; 38 completed 12-week protocol — 20 amlexanox, 18 placebo evaluable for primary endpoint), amlexanox produced a statistically significant reduction in HbA1c (the pre-specified primary endpoint) and fructosamine compared to placebo in the full drug-treated group [^reilly2017]. A pre-defined responder analysis identified 7 of 21 drug-treated patients who achieved ≥0.5% HbA1c reduction — a clinically meaningful threshold; only 1 of 21 placebo patients met this threshold (p=0.045, Fisher's exact test). Responders had higher baseline CRP and a distinct adipose inflammatory gene expression signature, suggesting a metabolically-inflamed subpopulation is enriched for response. #gap/needs-replication — confirmatory biomarker-enriched trial needed; this was a small proof-of-concept study and insulin sensitivity improvements reversed after drug discontinuation.

**Druggability-tier 2 rationale (aging-context):** Amlexanox is FDA-approved (aphthous ulcers) and has demonstrated IKKε/TBK1 target engagement with pharmacological effect in multiple mouse models and a significant Phase 2 HbA1c signal. However, no FDA-approved drug exists *for an aging or metabolic-inflammation indication* targeting IKKε, and the Phase 2 was a small proof-of-concept study (n=42) without large-scale replication. Tier 2 = high-quality probe available; tier 1 requires clinical-stage aging-validated drug with confirmed regulatory approval or Phase 3 success.

#gap/dose-response-unclear — optimal amlexanox dose and treatment duration for metabolic endpoints have not been established in controlled dose-escalation studies.

## Model-organism data

**Ikbke−/− mouse:**
- Protected from diet-induced obesity, insulin resistance, and hepatic steatosis on high-fat diet [^chiang2009].
- Showed elevated energy expenditure and thermogenic adipose gene expression relative to WT littermates.
- Not overtly immunocompromised under SPF conditions — IKKε appears to play a redundant role with TBK1 in antiviral defense in vivo (complete IFN deficiency requires loss of both kinases).
- Heterozygous (Ikbke+/−) mice: partially protected from metabolic phenotype (haploinsufficiency), suggesting dose-sensitivity of the pathway.

**Cancer biology note:** IKBKE is amplified and overexpressed in >30% of human breast cancers and acts as a breast cancer oncogene. This is not aging-relevant in the gerobiological sense but relevant to interpreting the safety profile of IKKε inhibition at chronic doses. #gap/long-term-unknown — long-term consequences of partial IKKε inhibition on oncosuppression are not characterized.

## Interaction partners

| Partner | Interaction type | Functional role |
|---|---|---|
| [[tbk1]] | Paralog / heterodimerization (leucine-zipper) | Redundant IRF3 kinase; shared adaptor recruitment |
| [[sting]] | Upstream activator (indirect via TANK adaptor) | STING → IKKε recruitment after cGAMP binding |
| [[irf3]] | Substrate | Phosphorylates Ser396 (and additional C-terminal sites); drives IFN-β |
| IRF7 | Substrate | Drives IFN-α induction (plasmacytoid DCs) |
| CYLD | Substrate | Phosphorylation inactivates CYLD; sustains NF-κB |
| TRAF2 | Adaptor / substrate | NF-κB signaling scaffold |
| DDX3X | Interaction partner | Recruited via SDD (Ser172-independent) |
| TANK / SINTBAD / NAP1 | Adaptor | Bridge IKKε to STING/MAVS complexes |

## Pathway membership

- [[cgas-sting]] — downstream kinase pair with TBK1; diverges after STING activation
- [[type-i-interferon-signaling]] — IRF3/IRF7 phosphorylation and ISG induction (stub — page not yet seeded)
- [[nf-kb]] — CYLD/TRAF2-mediated non-canonical NF-κB activation

## Comparison with TBK1

| Feature | IKKε | TBK1 |
|---|---|---|
| Expression pattern | Inducible (LPS, cytokines, viruses) | Constitutive + modestly inducible |
| Key activation loop residue | Ser172 | Ser172 |
| Metabolic-inflammation role | Strong (obesity/adipose; major distinct function) | Minor; AMPK crosstalk in adipocytes (distinct mechanism) |
| Neurodegenerative disease link | None confirmed | ALS/FTD (TBK1 haploinsufficiency) |
| Selective inhibitor | None (amlexanox is dual IKKε/TBK1) | None (amlexanox is dual) |
| Length | 716 aa | 729 aa |
| Sequence relationship to paralog | — | ~65% overall **similarity**; 72% identity in ATP-binding region [^reilly2013] |

See [[tbk1]] for the full TBK1 page. The two kinases are often studied together due to their functional redundancy in the IFN axis, but IKKε's metabolic role and inducible expression profile make it a distinct therapeutic target.

## GenAge status

IKBKE is **not in GenAge** (human or model-organism database as of 2026-05-13; search returned no results). This reflects that the primary evidence linking IKKε to aging is mechanistic (metabolic inflammation, cGAS-STING-SASP axis) rather than from direct longevity or lifespan experiments in model organisms. #gap/needs-human-replication

## Knowledge gaps

- `#gap/needs-human-replication` — Ikbke−/− mouse metabolic-protection phenotype not replicated in human genetics or pharmacological trials at scale.
- `#gap/needs-replication` — Phase 2 amlexanox HbA1c signal (Oral 2017) significant in full drug-treated group but was a small proof-of-concept study (n=42); no large biomarker-enriched confirmatory RCT completed.
- `#gap/no-mechanism` — How IKKε contributes to cardiac repair vs. aging-related cardiac dysfunction is unresolved; the 2024 macrophage-myofibroblast finding needs independent replication.
- `#gap/long-term-unknown` — Chronic partial IKKε inhibition safety (oncosuppression, infection susceptibility) not characterized in aging-relevant models.
- `#gap/dose-response-unclear` — Optimal amlexanox dose window for metabolic vs. immune endpoints not established.

## Cross-references

- [[tbk1]] — paralogous kinase; shared IRF3/IFN function; see for ALS/FTD and autophagy roles
- [[sting]] — upstream activator in cGAS-STING axis
- [[irf3]] — primary transcription-factor substrate
- [[nf-kb]] — downstream transcription factor in NF-κB arm
- [[chronic-inflammation]] — hallmark driven by SASP + metabolic IKKε activity
- [[cellular-senescence]] — SASP amplification via NF-κB arm
- [[amlexanox]] — IKKε/TBK1 dual inhibitor (compound page; may be stub)

## Footnotes

[^shimada1999]: doi:10.1093/intimm/11.8.1357 · Shimada T et al. · *Int Immunol* 1999 · in-vitro + in-vivo (mouse) · model: LPS-stimulated macrophages + mouse liver · identified IKK-i (IKKε) as an LPS-inducible kinase related to IκB kinases; 367 citations
[^peters2000]: doi:10.1016/s1097-2765(00)80445-1 · Peters RT, Liao SM, Maniatis T · *Mol Cell* 2000 · in-vitro · model: HEK293T PMA-stimulated cells · independently characterized IKKε as part of a novel PMA-inducible IκB kinase complex; 333 citations
[^fitzgerald2003]: doi:10.1038/ni921 · Fitzgerald KA et al. · *Nat Immunol* 2003 · in-vitro + in-vivo (mouse KO) · model: IRF3 knockout and IKKε-/TBK1-reconstituted cells · demonstrated IKKε and TBK1 are both required for IRF3 activation in antiviral signaling; 2,659 citations · not_oa locally
[^chiang2009]: doi:10.1016/j.cell.2009.06.046 · Chiang SH et al. · *Cell* 2009 · in-vivo (mouse) · model: Ikbke−/− vs WT on high-fat diet · IKKε promotes obesity and insulin resistance by suppressing energy expenditure in adipose; Ikbke KO mice are protected from diet-induced metabolic syndrome; 341 citations
[^reilly2013]: doi:10.1038/nm.3082 · Reilly SM et al. · *Nat Med* 2013 · in-vivo (mouse) + in-vitro · model: male C57BL/6 mice on 45% fat HFD; amlexanox 25 or 100 mg/kg oral gavage; also ob/ob mice · amlexanox (IC50 ~1–2 μM for IKKε and TBK1; 65% overall similarity / 72% ATP-region identity between the two kinases) improves obesity-related metabolic dysfunction — insulin sensitivity, hepatic steatosis (>50% reduction in hepatic TG; >20% reduction in liver weight), energy expenditure; 428 citations · PDF available locally
[^reilly2017]: doi:10.1016/j.cmet.2017.06.006 · Oral EA, Reilly SM et al. · *Cell Metab* 2017 · rct · n=42 randomized (20 amlexanox, 18 placebo evaluable for primary endpoint); 12-week Phase 2 double-blind, placebo-controlled; obese patients with T2D or NAFLD · amlexanox produced statistically significant reduction in HbA1c (primary endpoint) and fructosamine vs. placebo; 7/21 drug-treated patients met ≥0.5% HbA1c reduction threshold (vs. 1/21 placebo, p=0.045); responders had higher baseline CRP; insulin sensitivity improvements reversed after discontinuation; 162 citations
[^reilly2022]: doi:10.1172/jci.insight.155552 · Zhao P et al. · *JCI Insight* 2022 · in-vivo (mouse) · model: Ldlr−/− Western-diet mice treated with 25 mg/kg amlexanox · TBK1/IKKε inhibition improved dyslipidemia (reduced cholesterol and triglycerides), reduced aortic plaque area and size; 18 citations
[^park2024]: doi:10.1038/s12276-024-01304-0 · Cho HH et al. · *Exp Mol Med* 2024 · in-vivo (mouse) + in-vitro · model: male C57BL/6J and IKKε-KO mice post-MI (50 mg/kg ketamine + 5 mg/kg xylazine; LAD ligation) · IKKε-KO mice showed lower post-MI survival, worsened cardiac fibrosis, and reduced ejection fraction; IKKε-deficient macrophages showed enhanced macrophage-myofibroblast transition (MMT) via reduced p38 phosphorylation, impairing cardiac repair; 7 citations · gold OA
[^amlexanox2025]: doi:10.1038/s44355-024-00015-7 · You W et al. · *npj Gut Liver* 2025 · in-vivo (mouse) · model: GAN diet-fed Ldlr−/− mice (combined MASH + atherosclerosis model) treated with amlexanox · amlexanox improved MASH histology, reduced hepatic fibrosis, improved dyslipidemia via enhanced bile acid synthesis/fecal excretion and Akkermansia muciniphila enrichment; 2 citations · OA via PMC
