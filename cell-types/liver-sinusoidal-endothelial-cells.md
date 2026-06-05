---
type: cell-type
aliases: [LSECs, LSEC, hepatic sinusoidal endothelial cells, HSECs, liver sinusoidal endothelium]
cell-ontology-id: CL:1000398 # "endothelial cell of hepatic sinusoid" — verified via EBI OLS4 2026-06-05; defined as "an endothelial cell that is part of the hepatic sinusoid"; synonyms: LSEC, HSEC
tissue-of-origin: ["[[liver]]"]
key-markers-mouse: [Stab2 (Stabilin-2), Lyve1, Fcgr2b (CD32b), Cd14, Mrc1 (CD206), Cd31 (Pecam1, low/absent in some zones)]
key-markers-human: [STAB2 (Stabilin-2), LYVE1, FCGR2B (CD32b), CD14, MRC1 (CD206), CD31 (PECAM-1, low/absent)]
lineage-output: []
self-renewal: limited
aging-relevant: yes
affected-hallmarks:
 - "[[chronic-inflammation]]"
 - "[[cellular-senescence]]"
 - "[[deregulated-nutrient-sensing]]"
 - "[[loss-of-proteostasis]]"
key-aging-phenotypes:
 - "[[atherosclerosis]]"
 - "[[arterial-stiffening]]"
typical-niche: "Lining the hepatic sinusoids — highly permeable blood channels between portal triad and central vein — in direct contact with blood on the luminal face; space of Dissé (perisinusoidal space) separates the LSEC from underlying hepatocytes and hepatic stellate cells; Kupffer cells reside in the sinusoidal lumen adjacent to LSEC"
niche-signaling: ["[[vegf]]", "[[nitric-oxide-signaling]]", "[[hedgehog-pathway]]"]
single-cell-aging-signature: "Dobner 2024 (Angiogenesis 27:129–145) notes age-related defenestration (fenestrae loss) in murine LSECs with a suggestion of preserved vascular density in human liver vs mouse — potential species difference requiring larger human-specific scRNA studies. Specific LSEC aging DEG signatures from single-cell studies are not yet comprehensively reported at the resolution available for other EC subtypes. #gap/needs-replication"
literature-checked-through: 2026-06-05 # R25 supersession check performed 2026-06-05; no superseding meta-analyses or large RCTs found; Kennedy 2026 (Ageing Res Rev, Le Couteur group) confirms ongoing pseudocapillarization research without contradicting existing framing
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Le Couteur 2001: abstract-only (Wiley paywall; fenestral porosity numbers corrected — seeder-fabricated '6-8%→3-4%' replaced with values from verifiable primary sources: Jamieson 2007 F344 rats 3.4%→2.4%, Hunt 2019 C57BL6 4.6%→2.4%). Le Couteur 2008: closed-access; fenestrae 50-250nm/~5% sieve-plate figures cross-checked against verified Hunt & Cogger 2019 review (Hunt Cogger 2019 full PDF previously verified in tissues/liver.md). DeLeve 2008: full text via PMC2695448; corrected eNOS specificity (paper uses pan-NOS inhibitor L-NAME, does not identify eNOS specifically). Hunt 2019: full text via PMC6383376; corrected 'blunted aged-LSEC response' framing (paper concludes responsiveness mostly maintained in old age; TRAIL/amlodipine youth-selective, bosentan/DOI old-selective). Jamieson 2007: full text via PMC1892153; confirmed F344 rats, caveolin-1 data; corrected overstated 'preserved' language to 'partially preserved'. CL:1000398 confirmed via EBI OLS4. STAB2 Q8WWQ8 confirmed via UniProt. FCGR2B P31994 confirmed via UniProt. Gap tag about FCGR2B/MRC1 unverified — resolved for FCGR2B; MRC1 not re-checked. Canonical-DB identity fields (MRC1 UniProt, mouse orthologs beyond Stab2) not independently re-verified."
---

# Liver Sinusoidal Endothelial Cells (LSECs)

Liver sinusoidal endothelial cells are among the most morphologically and functionally specialized endothelial cells in the body. They line the hepatic sinusoids — the unique blood channels running between portal triads and central veins through the liver — and display three defining features absent from all other systemic endothelia: (1) they are **fenestrated**, bearing open transcellular pores (fenestrae, 50–250 nm diameter, clustered in sieve plates occupying ~5% of cell surface area) that allow direct, size-selective exchange between sinusoidal blood and the space of Dissé; (2) they are **discontinuous**, lacking the continuous tight junctions of vascular endothelium; and (3) in youth, they are **basement-membrane-free**, resting on a loose matrix in the space of Dissé rather than a classical basal lamina [^lecouteur2008]. This unique architecture makes LSECs the most permeable vascular endothelium in the body, and positions them as the gating mechanism for macromolecular access to hepatocytes.

With aging, LSECs undergo **pseudocapillarization** — a constellation of changes that converts them from a highly permeable, scavenger-active phenotype toward a structure resembling conventional capillary endothelium. This transition has broad downstream consequences for hepatic lipid metabolism, drug clearance, and the systemic aging phenotype [^lecouteur2001].

---

## Identity and markers

LSECs express a distinctive scavenger-receptor signature that reflects their role as the body's most powerful endocytic clearance cells. Key markers:

| Marker | Gene (human/mouse) | Function |
|---|---|---|
| Stabilin-2 | STAB2 / Stab2 | Phosphatidylserine receptor; hyaluronan receptor; scavenger endocytosis of hyaluronic acid, AGEs, heparin, acetylated LDL; dominant LSEC identity marker [^stab2uniprot] |
| LYVE-1 | LYVE1 / Lyve1 | Hyaluronic acid receptor; marks LSECs and lymphatic ECs; absent from conventional vascular ECs |
| FcγRIIb (CD32b) | FCGR2B / Fcgr2b | Fc-receptor; IgG/immune-complex clearance from circulation |
| CD14 | CD14 / Cd14 | LPS co-receptor; mediates LSEC response to gut-derived endotoxin via portal circulation |
| Mannose receptor (MRC1/CD206) | MRC1 / Mrc1 | Denatured collagen clearance; macromolecule endocytosis [^malovic2007] |

**Markers absent or low in LSECs** that distinguish them from conventional vascular ECs: CD31 (PECAM-1) is low or absent in some sinusoidal zones; VE-cadherin is present but discontinuous (no tight junctions); CD34 expression is low. This contrasts with the conventional endothelial panel (CD31+, CD34+, VWF+, eNOS+) — see [[endothelial-cells]].

**Cell Ontology.** CL:1000398 ("endothelial cell of hepatic sinusoid") is a precisely defined Cell Ontology term — the most specific available for this cell type — verified via EBI OLS4 on 2026-06-05.

---

## Structural identity: fenestrae and the sieve plate

The defining structural feature of LSECs is the **fenestra** (plural: fenestrae): an open transcellular pore with a diameter of 50–250 nm in normal adult liver. Fenestrae are not randomly distributed — they cluster in groups of 10–100 or more called **sieve plates**, which collectively occupy approximately 5% of the LSEC surface area [^lecouteur2008]. Unlike diaphragmed fenestrae in glomerular endothelium, LSEC fenestrae lack a diaphragm and are truly open channels, providing unobstructed bidirectional communication between sinusoidal blood and the space of Dissé [^szafranska2021].

**Functional consequence of fenestrae:** chylomicron remnants (50–250 nm) and VLDL particles (<100 nm) that enter the sinusoid are small enough to pass through fenestrae and access the space of Dissé, where hepatic lipoprotein receptors (LDLR, LRP1) on hepatocyte microvilli can bind and internalize them. Chylomicron particles themselves (~100–1000 nm) are too large to pass, but their remnants — produced by peripheral lipolysis — are appropriately sized. The fenestral filter is thus the gating step for hepatic lipoprotein clearance, particularly postprandial chylomicron remnant uptake [^fraser2012] [^lecouteur2007nyas].

---

## Functions

### 1. Sieving and macromolecular filtration

The LSEC fenestral barrier acts as a size-selective sieve: particles below ~250 nm pass freely into the space of Dissé; larger particles (including intact chylomicrons) are retained in the sinusoidal lumen. This filtration is bidirectional — it also controls exit of hepatocyte-secreted products (VLDL, albumin, coagulation factors) into the sinusoidal circulation.

### 2. Scavenger endocytosis — the most powerful clearance cells in the body

LSECs are constitutively active scavenger cells that together with [[kupffer-cells]] form the liver's reticuloendothelial clearance axis. Their receptor repertoire enables endocytosis of a remarkable breadth of blood-borne macromolecules [^pandey2020]:

- **Hyaluronan** (the major circulating form of hyaluronic acid) — cleared via STAB2 and LYVE1; plasma hyaluronan rises sharply when LSEC function is impaired
- **Collagen degradation products** (denatured type I, IV collagen fragments) — cleared primarily via mannose receptor (MRC1) [^malovic2007]
- **Advanced glycation end-products (AGEs)** — cleared via STAB2 and other pattern-recognition receptors
- **Oxidized LDL, acetylated LDL** — cleared via STAB2 and class A scavenger receptors
- **IgG immune complexes** — cleared via FcγRIIb (CD32b)
- **Gut-derived LPS and bacteria** — LSEC CD14 expression makes LSECs the first responders to portal endotoxin

LSEC-mediated scavenger clearance is estimated to account for a substantial fraction of systemic macromolecule turnover — hyaluronan clearance is essentially entirely hepatic (LSEC-mediated), making plasma hyaluronan a clinical surrogate for LSEC function [^pandey2020]. #gap/needs-replication — quantitative fraction of total-body macromolecule clearance attributable specifically to LSECs (vs Kupffer cells vs hepatocytes) has not been rigorously partitioned in vivo.

### 3. Maintenance of hepatic stellate cell quiescence

In the uninjured liver, LSECs produce nitric oxide (NO) via nitric oxide synthase (NOS), which acts on adjacent hepatic stellate cells ([[hepatic-stellate-cells]]) to maintain their quiescent, lipid-storing phenotype and suppress their activation into fibrogenic myofibroblasts. This effect is VEGF-dependent: VEGF stimulates NOS activity in differentiated LSECs, and loss of this VEGF-responsiveness (capillarization) abolishes the suppressive effect. DeLeve 2008 demonstrated this using the pan-NOS inhibitor L-NAME, which blocked SEC suppression of HSC activation; the specific NOS isoform responsible was not identified in that study [^deleve2008]. In the broader field, eNOS (endothelial NOS) is generally considered the relevant isoform. When LSEC NOS activity is reduced — as occurs with capillarization, aging, or sinusoidal hypertension — stellate cell activation and fibrosis ensue. LSEC-derived NO is thus a key homeostatic signal preventing fibrosis independent of any inflammatory trigger.

| Dimension | Status |
|---|---|
| NO-mediated HSC quiescence conserved in humans? | partial — demonstrated in rat models; human LSEC-derived NO controlling HSC state confirmed conceptually but limited direct human data |
| Replicated? | yes — in multiple rodent models (rat, mouse) including DeLeve 2008; L-NAME inhibition confirms NO as an essential mediator |

### 4. Antigen presentation and immune modulation

LSECs express MHC class I and II and can present blood-borne antigens to T cells in a context that typically promotes tolerance rather than immunity, contributing to hepatic immune privilege. They constitutively express CXCL16, which governs NKT cell homing to the liver [^ma2018bile]. This tolerogenic function may be altered with aging as LSEC phenotype shifts.

---

## Aging changes: pseudocapillarization

The central aging change of LSECs is **pseudocapillarization** — a structural and functional transformation first characterized by the Le Couteur/Cogger group [^lecouteur2001] [^lecouteur2008].

### What pseudocapillarization is

Pseudocapillarization comprises three concurrently developing changes:

1. **Reduction in fenestrae** — both number (porosity, expressed as fraction of cell area occupied by fenestrae) and size (diameter) decrease. In aged rodent liver, fenestral porosity falls by roughly 30–50% with aging: in Fischer F344 rats (Jamieson 2007), young porosity is ~3.4% declining to ~2.4% in old animals; in C57BL/6 mice (Hunt 2019), young porosity is ~4.6% declining to ~2.4% [^jamieson2007cr] [^hunt2019manip]. Le Couteur 2001 reported comparable qualitative defenestration in F344 rats across three age groups (4–7, 12–15, 24–27 months) [^lecouteur2001].
2. **Endothelial thickening** — the LSEC cell body increases in thickness, narrowing the sinusoidal lumen.
3. **Basal lamina and collagen deposition** — a collagen-rich basement membrane accumulates in the space of Dissé (normally nearly absent in young liver), physically impeding exchange between sinusoidal blood and hepatocyte microvilli.

Together, these changes convert the highly permeable, discontinuous sinusoidal endothelium into a structure resembling conventional capillary endothelium (hence "pseudo-capillarization") [^lecouteur2008].

| Dimension | Status |
|---|---|
| Pseudocapillarization documented in non-human primates? | yes — baboon liver shows increased sinusoidal endothelium thickness and reduced fenestral porosity with age [^cogger2003baboon] |
| Phenotype conserved in humans? | partial — morphological pseudocapillarization documented in aged human liver tissue; quantitative fenestrae data from large matched-age human cohorts are limited; scRNA data suggests possible species differences in some aspects (vascular density preservation in human vs mouse) |
| Intervention to reverse? | yes (preclinical) — pharmacological agents targeting NO and actin pathways increased fenestrations in aged mouse LSECs [^hunt2019manip]; caloric restriction prevents pseudocapillarization in aged rats [^jamieson2007cr] |

### Molecular mechanisms of pseudocapillarization

The molecular trigger for pseudocapillarization is not fully characterized. Proposed mechanisms include [^lecouteur2008] [^wan2022faseb]:

- **Reduced NOS activity / NO production** — NO regulates fenestral formation via actin cytoskeleton reorganization; NOS-inhibition (L-NAME) abolishes LSEC suppression of HSC activation [^deleve2008]; aging-associated NOS decline reduces fenestral maintenance; NOS-pathway modulators (sildenafil, NMN) increase fenestrations in both young and old LSECs [^hunt2019manip]. The relevant isoform is generally presumed to be eNOS in the field, though DeLeve 2008 did not specify the isoform
- **Increased oxidative stress** — ROS-mediated damage to LSEC membranes and actin-regulatory proteins
- **Caveolin-1 changes** — caveolin-1 expression modulates fenestral sieve-plate organization; in old F344 rats only 33% of livers show intense perisinusoidal caveolin-1 staining vs 80% in young; caloric restriction partially preserved this (50%) [^jamieson2007cr]
- **Age-related cytoskeletal stiffening** — reduced actin dynamics impair the cytoskeletal contractility that dynamically regulates fenestral opening

#gap/no-mechanism — the primary initiating molecular event that triggers pseudocapillarization in vivo is not defined; whether it is LSEC-intrinsic (replicative/stress senescence) or driven by the aging systemic environment (altered shear stress, circulating factors, gut microbiome-derived signals) is unknown.

---

## Systemic consequences of pseudocapillarization

### Impaired postprandial lipoprotein clearance and dyslipidemia

Reduced fenestrae mean that chylomicron remnants (~50–250 nm) cannot efficiently access the space of Dissé. Since hepatic chylomicron remnant clearance depends on remnant particles reaching hepatocyte-surface LDLR and LRP1, pseudocapillarization creates a physical bottleneck for postprandial lipid clearance [^fraser2012] [^lecouteur2007nyas]. Consequences:

- Prolonged postprandial lipemia — chylomicron remnants remain in circulation longer
- Elevated postprandial triglycerides and remnant-particle apoB — a cardiovascular risk factor in older adults
- Impaired hepatic LDL clearance (LDLR access impeded)

This mechanism provides a liver-centric, non-hepatocyte explanation for age-associated postprandial dyslipidemia and may contribute to the elevated [[atherosclerosis]] risk in older adults independently of hepatocyte-intrinsic cholesterol metabolism changes (SREBP-2 hyperactivation; see [[liver]]).

| Dimension | Status |
|---|---|
| Postprandial lipemia increase with age conserved in humans? | yes — age-related postprandial hypertriglyceridemia is well-documented in humans |
| LSEC defenestration causally responsible in humans? | partial — mechanistic evidence is from rodent and primate models; direct human LSEC fenestrae measurement linked to postprandial lipemia is not available from large studies |

### Altered drug pharmacokinetics

High-extraction-ratio drugs (those with hepatic extraction >0.7, e.g., verapamil, propranolol, morphine, most lipophilic statins) undergo extensive first-pass metabolism by hepatocyte CYP450 enzymes — but to reach the CYP enzymes, the drug must first traverse the sinusoidal endothelium and access the space of Dissé. Pseudocapillarization creates a barrier to drug access, potentially reducing first-pass extraction of some drugs in older adults [^lecouteur2007nyas]. The net effect on drug exposure (area under the curve) is complex: reduced extraction increases bioavailability for drugs with high first-pass effect, but reduced hepatic uptake can also blunt active clearance. This mechanism supplements the well-documented age-related declines in liver mass and hepatic blood flow as contributors to altered drug PK in aging [^trenaman2021].

### Reduced macromolecule scavenging

With pseudocapillarization, LSEC scavenger receptor expression declines (particularly STAB2, LYVE1, MRC1) and endocytic capacity falls [^grosse2020] [^pandey2020]. This impairs:

- Clearance of circulating hyaluronan (clinical correlate: elevated serum hyaluronan in liver disease and aging)
- Clearance of collagen degradation fragments and AGEs
- First-line defense against portal endotoxin (reduced CD14-mediated LPS capture)

---

## Interaction with hepatic stellate cells and fibrosis risk

The tripartite relationship between LSECs, [[hepatic-stellate-cells]], and [[kupffer-cells]] is central to the aged liver's susceptibility to fibrosis. In youth:
- LSEC-derived NO suppresses HSC activation
- Kupffer cell inflammatory output is moderated
- The space of Dissé is nearly collagen-free

With aging pseudocapillarization:
- LSEC NOS activity declines → reduced NO → HSCs prone to activation
- Basal-lamina deposition in the space of Dissé creates a scaffold for stellate cell activation
- Kupffer cells adopt a mild pro-inflammatory state, elevating the inflammatory background

This pre-existing architectural shift means that the aged liver is more susceptible to fibrosis progression following any additional insult (alcohol, viral hepatitis, lipotoxicity) — a lower injury threshold produces greater fibrotic response [^deleve2008].

---

## Reversibility and intervention potential

Two intervention contexts have demonstrated reversal or prevention of pseudocapillarization in rodent models:

1. **Caloric restriction** — reduces age-related endothelial thickening and partially preserves fenestrae and caveolin-1 expression. In F344 rats, CR from 6 to 24 months kept fenestral porosity at ~3.9% (vs ~2.4% in age-matched ad-libitum-fed controls and ~3.4% in young ad-libitum) and reduced endothelial thickness (190 nm CR vs 211 nm AL, comparable to 180 nm young). Caveolin-1 intense staining was partially preserved (50% of old-CR livers vs 33% of old-AL, compared to 80% in young) [^jamieson2007cr]. #gap/needs-human-replication — caloric restriction LSEC effect has not been tested prospectively in humans.

2. **Pharmacological fenestrae manipulation** — Hunt et al. (2019) demonstrated that multiple drug classes increase fenestrations in isolated LSECs from aged C57BL/6 mice (18–24 months vs young 3–4 months). The paper's central conclusion is that "responsiveness is mostly maintained into older age" — several agents (7-ketocholesterol, NMN, sildenafil, cytochalasin D) increased fenestrations in both young and old LSECs, and old LSECs showed comparable or greater fold-changes for some agents. Responses were agent-specific and age-dependent in direction: TRAIL and amlodipine were effective only in young LSECs, while bosentan and DOI were effective only in old LSECs. This reflects differential pathway activity with age rather than uniform blunting. Actin cytoskeleton modification was observed with all agents that increased fenestrations [^hunt2019manip]. #gap/needs-human-replication — all pharmacological fenestrae manipulation data are rodent in vitro or ex vivo.

**VEGF** increases fenestrae acutely in young LSECs in vitro but VEGFR2 expression increases with age [^cheluvappa2007vegf] with unclear net in vivo effect.

#gap/no-mechanism — a clinically tractable intervention that reliably increases LSEC fenestrae in aged human liver in vivo does not currently exist.

---

## Senescence in LSECs

LSEC senescence has been documented with aging. Grosse and Bulavin (2020) reported that senescent LSECs initially upregulate their scavenger capacity (a compensatory response to declining cell number) but this compensatory increase reverses in late aging, resulting in net impairment of macromolecular clearance [^grosse2020]. Senescent LSECs can also contribute SASP factors (IL-6, IL-8) to the sinusoidal milieu, amplifying hepatic inflammaging and potentially contributing to stellate cell activation via TGF-β paracrine signaling — consistent with the broad SASP biology documented in [[cellular-senescence]].

#gap/needs-replication — the Grosse 2020 result is a single-lab study; whether the biphasic scavenger upregulation/decline pattern is conserved in human LSECs is not established.

---

## Limitations and gaps

- `#gap/needs-human-replication` — most quantitative pseudocapillarization data (fenestral porosity, diameter, endothelial thickness) are from rat and mouse models; large matched-age human LSEC fenestrae datasets are lacking
- `#gap/needs-human-replication` — caloric restriction prevention of pseudocapillarization is preclinical (rodent only); pharmacological fenestrae manipulation (Hunt 2019) is ex vivo rodent
- `#gap/needs-replication` — LSEC senescence biphasic scavenger-activity pattern (Grosse 2020) is single-lab; independent replication pending
- `#gap/no-mechanism` — initiating molecular trigger for pseudocapillarization in aging is not defined; unclear whether LSEC-intrinsic or environment-driven
- `#gap/no-mechanism` — mechanism by which LSEC-derived NO regulates fenestral architecture at the molecular (cytoskeletal) level in vivo remains incompletely characterized
- FCGR2B (CD32b) human UniProt confirmed as P31994 (canonical isoform) via UniProt lookup 2026-06-05. MRC1 (CD206) UniProt accession not independently re-verified — cross-check via UniProt before citing in downstream pages `#gap/needs-canonical-id`

---

## See also

- [[liver]] — parent tissue page; pseudocapillarization section + context for all hepatic aging changes
- [[hepatic-stellate-cells]] — LSEC-derived NO suppresses HSC activation; pseudocapillarization reduces this suppression
- [[kupffer-cells]] — sinusoidal macrophages adjacent to LSECs; together with LSECs form the reticuloendothelial axis
- [[hepatocytes]] — downstream of LSEC sieving; receive chylomicron remnants and macromolecules via space of Dissé
- [[endothelial-cells]] — parent cell-type context for general EC biology; LSEC is highly divergent from conventional ECs
- [[atherosclerosis]] — postprandial dyslipidemia from LSEC defenestration is a mechanistic contribution in aging
- [[cellular-senescence]] — LSEC senescence with SASP; Grosse 2020 biphasic model
- [[chronic-inflammation]] — LSEC contribution to hepatic inflammaging via SASP and impaired endotoxin clearance
- [[deregulated-nutrient-sensing]] — mTOR/AMPK pathway changes in LSECs; VEGF signaling
- [[loss-of-proteostasis]] — impaired macromolecule clearance (hyaluronan, collagen fragments, AGEs)
- [[caloric-restriction]] — intervention that prevents LSEC pseudocapillarization in rodent models
- [[masld]] — hepatic phenotype downstream of LSEC-impaired lipoprotein clearance
- [[liver-fibrosis]] — fibrotic risk potentiated by LSEC eNOS decline → HSC activation

---

## Footnotes

[^lecouteur2001]: doi:10.1053/jhep.2001.22754 · Le Couteur DG et al. · "Pseudocapillarization and associated energy limitation in the aged rat liver" · Hepatology 33(3):537-543 · 2001 · in-vivo · model: Fischer F344 rats aged 4–7, 12–15, and 24–27 months · key finding: age-related pseudocapillarization in rat liver — defenestration with reduced porosity, endothelial thickening, infrequent basal lamina development, minor collagen deposits in space of Disse; associated with changes in high-energy phosphate metabolites consistent with hepatocyte hypoxia; first systematic description of pseudocapillarization as an aging hallmark. Note: specific porosity percentages are in the full-text body (paper is Wiley paywalled); abstract confirms qualitative defenestration

[^lecouteur2008]: doi:10.1002/ar.20661 · Le Couteur DG, Warren A, Cogger VC, Smedsrød B, Sørensen KK, De Cabo R, Fraser R, McCuskey RS · "Old Age and the Hepatic Sinusoid" · Anat Rec 291(6):672-683 · 2008 · review · key finding: comprehensive characterization of pseudocapillarization (fenestrae 50–250 nm diameter; sieve plates ~5% surface area; defenestration, endothelial thickening, basal-lamina deposition with aging); impaired chylomicron remnant clearance and drug PK as consequences

[^lecouteur2007nyas]: doi:10.1196/annals.1396.003 · Le Couteur DG, Cogger VC, McCuskey RS, De Cabo R, Smedsrød B, Sorensen KK, Warren A, Fraser R · "Age-Related Changes in the Liver Sinusoidal Endothelium: A Mechanism for Dyslipidemia" · Ann N Y Acad Sci 1114(1):79-87 · 2007 · review · key finding: LSEC defenestration is a mechanism for age-related dyslipidemia via impaired chylomicron remnant clearance; reviews drug-PK implications

[^hunt2019manip]: doi:10.1152/ajpgi.00179.2018 · Hunt NJ, Lockwood GP, Warren A, Mao H, McCourt PAG, Le Couteur DG, Cogger VC · "Manipulating fenestrations in young and old liver sinusoidal endothelial cells" · Am J Physiol Gastrointest Liver Physiol 316:G144-G154 · 2019 · in-vitro/ex-vivo · model: isolated C57BL/6 mouse LSECs, young 3–4 months vs old 18–24 months · key finding: responsiveness to pharmacological fenestration mostly maintained in old age; 7-ketocholesterol, NMN, sildenafil, cytochalasin D effective in both age groups; TRAIL and amlodipine effective only in young; bosentan and DOI effective only in old; baseline porosity young 4.6% vs old 2.4%; all fenestration-increasing agents acted via actin cytoskeleton modification

[^cogger2003baboon]: doi:10.1016/j.exger.2003.07.002 · Cogger VC, Warren A, Fraser R, Ngu M, McLean AJ, Le Couteur DG · "Hepatic sinusoidal pseudocapillarization with aging in the non-human primate" · Exp Gerontol 38(10):1101-1107 · 2003 · in-vivo · model: baboon liver (multiple age groups) · key finding: pseudocapillarization occurs in non-human primate liver — increased sinusoidal endothelium thickness, reduced fenestral porosity, extracellular matrix changes — confirming conservation across primate species

[^jamieson2007cr]: doi:10.1016/j.exger.2006.11.004 · Jamieson HA, Hilmer SN, Cogger VC, Warren A, Cheluvappa R, Abernethy DR, Everitt AV, Fraser R, de Cabo R, Le Couteur DG · "Caloric restriction reduces age-related pseudocapillarization of the hepatic sinusoid" · Exp Gerontol 42(4):374-378 · 2007 · in-vivo · model: Fischer F344 rats, 6 months (young) vs 24 months (old), ad-libitum vs caloric restriction · key finding: fenestral porosity young-AL 3.4%, old-AL 2.4%, old-CR 3.9% (old-AL < young-AL and old-CR, p<0.001); endothelial thickness young-AL 180 nm, old-AL 211 nm, old-CR 190 nm (old-CR ≈ young-AL); caveolin-1 intense staining young-AL 80%, old-AL 33%, old-CR 50% (partial preservation by CR)

[^fraser2012]: doi:10.1097/PAT.0b013e328351bcc8 · Fraser R · "The liver sieve and atherosclerosis" · Pathology 44(2):181-186 · 2012 · review · key finding: LSEC fenestrae function as permselective sieve for chylomicron remnant hepatic uptake; defenestration in aging/disease impairs lipoprotein clearance; pharmacological manipulation of fenestrae discussed as therapeutic target

[^deleve2008]: doi:10.1002/hep.22351 · DeLeve LD, Wang X, Guo Y · "Sinusoidal endothelial cells prevent rat stellate cell activation and promote reversion to quiescence" · Hepatology 48(3):920-930 · 2008 · in-vivo · model: rat (co-culture and in-vivo) · n: HSC activation ~70% alone vs ~30% with differentiated SECs (day 3, p<0.01); capillarized SECs had no protective effect (~80% activation) · key finding: VEGF-stimulated NOS activity in differentiated LSECs (NO 40.1 ± 0.3 nmol/million cells) prevents HSC activation; L-NAME (pan-NOS inhibitor) blocks this effect; capillarized LSECs show ~30% reduced NO production and lose HSC-quiescence maintenance; NOS isoform not specified in paper (eNOS presumed in field); differentiated LSECs also reverted activated HSCs to quiescence via VEGF-stimulated NO

[^pandey2020]: doi:10.3389/fphys.2020.00873 · Pandey E, Nour AS, Harris EN · "Prominent Receptors of Liver Sinusoidal Endothelial Cells in Liver Homeostasis and Disease" · Front Physiol 11:873 · 2020 · review · key finding: comprehensive overview of LSEC scavenger receptors (STAB2, LYVE1, CD32b/FCGR2B, MRC1, STABILIN-1); receptor dysregulation correlates with pseudocapillarization; aging reduces receptor expression contributing to impaired macromolecular clearance

[^szafranska2021]: doi:10.3389/fphys.2021.735573 · Szafranska K, Zapotoczny B et al. · "The wHole Story About Fenestrations in LSEC" · Front Physiol 12:735573 · 2021 · review · key finding: fenestrations are open transcellular pores 50–300 nm diameter; reviews pharmacological agents affecting fenestral porosity; discusses LSEC cytoskeletal regulation of fenestral dynamics and aging-related defenestration mechanisms

[^malovic2007]: doi:10.1002/hep.21639 · Malovic I, Sørensen KK, Elvevold KH, Nedredal GI, Paulsen S, Erofeev AV, Smedsrød BH, McCourt PAG · "The mannose receptor on murine liver sinusoidal endothelial cells is the main denatured collagen clearance receptor" · Hepatology 45(6):1454-1461 · 2007 · in-vivo · model: mouse (MRC1-KO vs WT) · key finding: mannose receptor (MRC1/CD206) on LSECs is the primary clearance receptor for denatured collagen; MRC1-KO mice showed markedly reduced hepatic collagen uptake

[^stab2uniprot]: UniProt Q8WWQ8 (human STAB2) · gene: STAB2; protein: stabilin-2 · multiple scavenger ligands including hyaluronic acid, AGEs, heparin, acetylated LDL; phosphatidylserine receptor; dominant LSEC-specific scavenger receptor; mouse ortholog Q8R4U0 (Stab2)

[^grosse2020]: doi:10.18632/aging.103492 · Grosse L, Bulavin DV · "LSEC model of aging" · Aging (Albany NY) 12(13) · 2020 · in-vivo · model: aged mouse liver · key finding: senescent LSECs initially upregulate scavenger function (compensatory) but this declines in late aging resulting in net impairment of macromolecular clearance; may contribute to aging-related mortality; #gap/needs-replication — single-lab finding

[^wan2022faseb]: doi:10.1096/fj.202101426R · Wan Y, Li X, Slevin E et al. · "Endothelial dysfunction in pathological processes of chronic liver disease during aging" · FASEB J 36(2):e22183 · 2022 · review · key finding: pseudocapillarization mechanisms include reduced NO, increased oxidative stress, decreased endocytic capacity, elevated inflammatory cytokines in aged LSECs; reviews aging-specific LSEC changes across multiple liver disease contexts

[^cheluvappa2007vegf]: doi:10.1016/j.exger.2007.06.001 · Cheluvappa R, Hilmer SN, Kwun SY et al. · "The effect of old age on liver oxygenation and the hepatic expression of VEGF and VEGFR2" · Exp Gerontol 42(10):1012-1019 · 2007 · in-vivo · model: aged rat · key finding: no intracellular hypoxia in aged liver despite pseudocapillarization; VEGFR2 expression increased perisinusoidally with age; VEGF levels unchanged; structural sinusoidal changes do not constitute functional O2 diffusion barriers

[^ma2018bile]: doi:10.1126/science.aan5931 · Ma C et al. · "Gut microbiome-mediated bile acid metabolism regulates liver cancer via NKT cells" · Science 360:eaan5931 · 2018 · in-vivo · model: mouse · key finding: gut bacteria regulate bile acid conversion controlling CXCL16 expression on LSECs; altered bile acid profile governs NKT cell accumulation and hepatic antitumor surveillance; illustrates LSEC immune-modulation function

[^trenaman2021]: doi:10.1002/prp2.775 · Trenaman SC, Bowles SK, Andrew MK, Goralski K · "The role of sex, age and genetic polymorphisms of CYP enzymes on the pharmacokinetics of anticholinergic drugs" · Pharmacol Res Perspect 9(3):e00775 · 2021 · review · key finding: pseudocapillarization alongside CYP enzyme decline with age increases drug exposure especially for high-extraction-ratio drugs; age, sex, and CYP polymorphism interactions amplify PK variability in older adults

[^huntcogger2019]: doi:10.1016/j.csbj.2019.07.021 · Hunt NJ, Kang SWS, Lockwood GP, Le Couteur DG, Cogger VC · "Hallmarks of Aging in the Liver" · Comput Struct Biotechnol J 17:1151-1161 · 2019 · review
