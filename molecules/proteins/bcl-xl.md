---
type: protein
aliases: [BCL2L1, Bcl-2-like protein 1, Apoptosis regulator Bcl-X, Bcl-xL, BCLX, BCL2L]
uniprot: Q07817
ncbi-gene: 598
hgnc: 992
mouse-ortholog: Bcl2l1
ensembl: ENSG00000171552
druggability-tier: 1
caused-by: []
causes: []
key-domains: [BH1, BH2, BH3, BH4, transmembrane-anchor]
key-ptms: [Ser49-phosphorylation, Ser62-phosphorylation, Asp61-caspase-cleavage, ubiquitination]
pathways: ["[[apoptosis-pathway]]", "[[cellular-senescence]]", "[[bcl2-family-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[chronic-inflammation]]"]
known-interactors: ["[[bax]]", "[[bak]]", "[[bim]]", "[[puma]]", "[[bad]]", "[[bid]]", "[[beclin-1]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Zhu 2015 and Zhu 2017 claims verified against local PDFs; Yosef 2016 verified against local PDF; UniProt Q07817 domain/PTM positions verified via REST API; Boise 1993 (failed download, bronze OA), Wilson 2010 (pending), and Souers 2013 (not_oa) not verified against full text — claims from those sources remain unverified and are tagged accordingly"
---


# BCL-xL (BCL2L1)

The dominant anti-apoptotic effector in the BCL-2 family for endothelial and vascular senescent cell populations — and the primary reason those cells resist death. BCL-xL sequesters pro-apoptotic proteins BAX and BAK on the mitochondrial outer membrane, blocking the intrinsic apoptosis cascade. In aging biology, upregulation of BCL-xL (and related family members) in senescent cells constitutes a **senescent cell anti-apoptotic programme (SCAP)**, the molecular basis for senescent-cell apoptosis resistance. BCL-xL is the direct target of the BH3-mimetic senolytics [[navitoclax]] (ABT-263) and [[a1331852]], but on-target BCL-xL inhibition in platelets causes thrombocytopenia — the dose-limiting toxicity restricting clinical use.

**Naming note:** The gene is *BCL2L1* (BCL-2-like 1); it encodes two splice isoforms via alternative 5' splice-site usage. The **long isoform, BCL-xL**, is anti-apoptotic and the subject of this page. The **short isoform, BCL-xS**, is pro-apoptotic and expressed in high-turnover tissues; it is not the senolytic-relevant target. This page covers BCL-xL exclusively. No pathway page named `bcl2l1` exists; pathway context is covered under [[apoptosis-pathway]] and [[bcl2-family-pathway]].

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q07817 (BCL2L_HUMAN) |
| NCBI Gene | 598 |
| HGNC | 992 |
| Ensembl | ENSG00000171552 |
| Chromosomal location | 20q11.21 |
| Length | 233 amino acids (BCL-xL isoform) |
| MW | ~26 kDa |
| Mouse ortholog | Bcl2l1 (one-to-one; highly conserved) |
| GenAge entry | not listed (BCL2L1 not in GenAge-human as of 2026-05-04) #gap/needs-canonical-id |

---

## Isoform structure

The *BCL2L1* gene produces two major isoforms through alternative splicing of exon 2 [^boise1993]:

| Isoform | Length | Function | Expression pattern |
|---|---|---|---|
| **BCL-xL** (long) | 233 aa | Anti-apoptotic; sequesters BAX/BAK | Brain, quiescent/long-lived cells, senescent cells |
| **BCL-xS** (short) | 188 aa (alternative exon 2 splicing removes BH1/BH2-containing region, residues 126–188 of BCL-xL replaced; UniProt Q07817) | Pro-apoptotic; antagonizes BCL-2/BCL-xL | Developing lymphocytes, high-turnover tissues |

BCL-xS was the first indication that the *BCL2L1* locus is a bipolar regulator — not a uniformly pro-survival locus [^boise1993]. This page concerns only BCL-xL.

---

## Functional domains

- **BH4 domain (residues 4–24, UniProt Q07817)** — present in anti-apoptotic family members; interacts with BAX, may assist in membrane integration and BCL-xL stability.
- **BH3 domain (residues 86–100, UniProt Q07817)** — embedded within the folded structure of BCL-xL; not available for intermolecular BH3:groove binding in the anti-apoptotic orientation. Functions in homo- and heterodimerization.
- **BH1 domain (residues 129–148, UniProt Q07817)** — forms part of the hydrophobic groove that binds BH3 peptides from pro-apoptotic partners.
- **BH2 domain (residues 180–195, UniProt Q07817)** — completes the binding groove; required for BAX/BAK and BH3-only protein sequestration.
- **Transmembrane (TM) anchor (residues 210–226, UniProt Q07817)** — targets BCL-xL to the mitochondrial outer membrane (MOM), endoplasmic reticulum, and nuclear envelope. The TM anchor is required for in vivo anti-apoptotic activity.

The composite BH1+BH2+BH3 groove is the primary drug-binding surface for BH3-mimetic compounds (navitoclax, A1331852). Selectivity between BCL-2 family members derives from the precise shape and electrostatic character of this groove.

---

## Key post-translational modifications

| PTM | Site | Enzyme | Functional consequence |
|---|---|---|---|
| Phosphorylation | Ser49 | PLK3 | Centrosome localization; may link BCL-xL to mitotic regulation |
| Phosphorylation | Ser62 | CDK1 | Cell-cycle-regulated; promotes mitotic apoptosis block |
| Caspase cleavage | Asp61 | Caspase-1 and caspase-3 (UniProt Q07817) | Generates a pro-apoptotic fragment; positive feedback during apoptotic execution |
| Ubiquitination | Multiple Lys | RNF183 (ER stress) | Proteasomal degradation during ER stress |

The Asp61 caspase cleavage is notable: during apoptotic execution, caspases cleave BCL-xL to generate a C-terminal fragment that acquires pro-apoptotic activity, creating a feedforward amplification loop [UniProt Q07817, accessed 2026-05-04].

---

## Mechanism of apoptosis inhibition

BCL-xL operates at the mitochondrial outer membrane to prevent **mitochondrial outer membrane permeabilization (MOMP)** — the point of no return in intrinsic apoptosis [^boise1993].

Two distinct sequestration modes:

1. **BAX/BAK sequestration** — BCL-xL directly binds the activated forms of BAX and BAK, preventing their oligomerization and pore formation in the MOM. In the absence of an apoptotic signal, BCL-xL maintains a retrotranslocation cycle that keeps BAX in the cytoplasm by extracting it from membranes.

2. **BH3-only protein sequestration** — BCL-xL binds the BH3 domains of sensor proteins (BIM, BID, PUMA, NOXA, BAD) through its hydrophobic groove. This sequesters activator BH3-only proteins (BIM, BID) before they can directly activate BAX/BAK, and sequesters sensitizer BH3-only proteins (BAD, NOXA) before they can displace activators from anti-apoptotic proteins.

**BH3-mimetic mechanism of action:**
BH3-mimetic drugs (navitoclax, A1331852) present a synthetic BH3 helix to the BCL-xL groove, competitively displacing sequestered BH3-only proteins. Released activator BH3-only proteins (particularly BIM) then activate BAX/BAK → BAX/BAK oligomerization → MOMP → cytochrome c release → apoptosome → caspase cascade → apoptosis.

The selectivity of individual BH3-mimetics for BCL-xL vs BCL-2 vs MCL-1 is determined by the complementarity of the drug's binding surface with the respective groove. Navitoclax binds BCL-xL, BCL-2, and BCL-w with high affinity; A1331852 is more BCL-xL-selective.

---

## BCL-xL in senescence and aging

### Senescent cell anti-apoptotic programme (SCAP)

Senescent cells upregulate a network of pro-survival genes to resist apoptosis — the SCAP — which is the molecular basis of senescent cell persistence [^zhu2015]. Without SCAP upregulation, damaged cells would be eliminated by apoptosis before entering a stable senescent state.

BCL-xL is the **dominant SCAP node in human umbilical vein endothelial cells (HUVECs)** and is prominent in vascular/endothelial senescent populations. Zhu et al. (2015) identified BCL-xL as one of five key survival nodes whose siRNA knockdown selectively killed senescent (but not proliferating or quiescent) HUVECs; BCL-xL silencing alone was sufficient to induce apoptosis in senescent HUVECs [^zhu2015].

**Cell-type specificity matters.** BCL-xL dominance is not universal:

| Cell type | Primary SCAP node | Source |
|---|---|---|
| HUVECs (endothelial) | BCL-xL | Zhu 2015 [^zhu2015] |
| IMR90 (lung fibroblasts) | BCL-W and BCL-XL (dual; each alone insufficient, combined knockdown synergistic) | Yosef 2016 [^yosef2016] |
| Preadipocytes | EFNB1, EFNB3, PI3KCD, p21, PAI-2 (BCL-xL siRNA not senolytic in preadipocytes) | Zhu 2015 [^zhu2015] |

This cell-type heterogeneity explains why no single BCL-2-family inhibitor acts as a universal senolytic. See [[interventions/pharmacological/senolytics]] for cell-type-stratified SCAP dependency tables.

### Independent confirmation (Yosef 2016)

Yosef et al. independently demonstrated that dual inhibition of BCL-W and BCL-XL is required for selective apoptosis in senescent cells. Using IMR-90 human fibroblasts (primary cell line; three senescence induction methods: DNA damage, replicative exhaustion, oncogene-induced) and ABT-737 (a small-molecule inhibitor of BCL-2, BCL-W, and BCL-XL), they showed that BCL-W and BCL-XL are the dominant survival nodes — individual knockdown of either caused only minor viability reductions, but combined knockdown caused a 53% reduction in cell viability, comparable to ABT-737 treatment [^yosef2016]. In vivo, ABT-737 efficiently eliminated DNA-damage-induced senescent cells from mouse lungs (irradiation model) and p53-induced senescent epidermal cells (p14ARF transgenic skin model) — these were targeted senescence induction models in young mice, not chronologically aged mice. BCL-2 played only a minor role; BCL-XL single knockdown alone produced a modest (16%) reduction. #gap/needs-replication — independent verification of the specific cell-type SCAP table in primary human tissue (as opposed to established cell lines or disease models) is lacking.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BCL-xL sequence and function are highly conserved; the BH3-mimetic drug interactions are based on human crystal structures |
| Phenotype conserved in humans? | partial | SCAP upregulation in senescent cells is confirmed in human cell lines; direct evidence in primary aged human endothelium is more limited |
| Replicated in humans? | in-progress | Navitoclax trials ongoing in cancer; senolytic indication in aging remains preclinical/early-phase |

---

## BCL-xL in platelet survival (thrombocytopenia mechanism)

BCL-xL has a distinct essential function in mature platelets: it is required for platelet survival. Platelets are anucleate and cannot resynthesise BCL-xL once it is degraded; BCL-xL continuously opposes constitutive BIM-driven apoptosis to set platelet lifespan [^wilson2010][^souers2013].

When navitoclax inhibits BCL-xL in platelets, BIM-driven apoptosis proceeds unchecked → rapid platelet turnover that outpaces megakaryocyte production → **dose-dependent thrombocytopenia**. Wilson et al. (2010) established this as the primary dose-limiting toxicity in the first navitoclax phase 1 trial, with grade 3–4 thrombocytopenia in 29/94 (31%) of patients [^wilson2010]. #gap/no-fulltext-access — these statistics (n=94, 29 patients with grade 3–4) are sourced from [^wilson2010] but that paper has not been verified against the full text (PDF pending).

This on-target, on-mechanism toxicity is not a side-effect that can be engineered away by chemistry — it reflects the fundamental biology of BCL-xL in platelet survival. The development of BCL-2-selective inhibitors (venetoclax / ABT-199) circumvented this by sparing BCL-xL while targeting BCL-2 [^souers2013].

**Implications for senolytic development:**
- Navitoclax as a senolytic requires thrombocytopenia management (dose limitation, intermittent dosing)
- A1331852 is highly BCL-xL-selective and thus retains the thrombocytopenia liability
- Tissue-targeted delivery or prodrug strategies to restrict BCL-xL inhibition to non-platelet compartments are an active area #gap/long-term-unknown

---

## Pharmacology: senolytics targeting BCL-xL

### Navitoclax (ABT-263)

A second-generation orally bioavailable BH3-mimetic targeting BCL-xL, BCL-2, and BCL-w. Navitoclax (ABT-263) was not tested as a senolytic drug in Zhu 2015 — that study tested dasatinib and quercetin. Zhu 2015 identified BCL-xL as a SCAP node via siRNA knockdown; Zhu 2017 confirmed navitoclax (N) senolytic activity in HUVECs as part of its broader context, and Yosef 2016 used the related compound ABT-737 [^yosef2016][^zhu2017]. Clinical oncology trials (phase 1/2) have established dosing, PK, and safety; dose-escalation above ~325 mg/day is thrombocytopenia-limited [^wilson2010]. #gap/no-fulltext-access — Wilson 2010 thrombocytopenia statistics (grade 3–4 rate, n) not verified against full text (PDF pending download).

See [[navitoclax]] for full compound data (implicit stub; needs seeding).

### A1331852

A highly selective BCL-xL inhibitor with greater selectivity for BCL-xL vs BCL-2 than navitoclax. Zhu et al. (2017) tested A1331852 and its structural analog A1155463 as senolytics alongside fisetin; A1331852 showed potent senolytic activity in senescent HUVECs AND IMR90 cells (human lung fibroblasts), but was not senolytic in primary human preadipocytes [^zhu2017]. This cell-type specificity is consistent with BCL-xL being a dominant SCAP node in endothelial and fibroblast lineages but not in preadipocytes. Because of its BCL-xL selectivity, A1331852 retains the platelet toxicity concern.

See [[a1331852]] for full compound data (implicit stub; needs seeding).

### UBX1325 / foselutoclax (Unity Biotechnology)

A small-molecule BCL-xL inhibitor formulated for **intravitreal delivery** to circumvent the systemic-thrombocytopenia constraint that limits navitoclax aging deployment. The Klier 2025 *NEJM Evidence* BEHOLD Phase 2 RCT (n=65) of intravitreal UBX1325 in diabetic macular edema reported **+5.6 ETDRS letters vs sham** at the primary timepoint — the **first positive primary-endpoint clinical Phase 2 for the BCL-xL-axis senolytic class in humans**. The local-delivery + senescent-cell-targeted-clearance approach is a meaningful pipeline milestone, even though DME is a non-aging-rejuvenation indication. See [[interventions/pharmacological/senolytics]] for class-level pipeline updates.

### Venetoclax (ABT-199) — not a BCL-xL senolytic

Venetoclax is BCL-2-selective and was designed to spare BCL-xL (and therefore platelets) [^souers2013]. It is not an effective BCL-xL senolytic and is not expected to clear BCL-xL-dependent senescent cells in endothelial populations. It may clear BCL-2-dependent senescent cells (e.g., IMR90 fibroblast lineage). #gap/needs-replication — systematic comparison of venetoclax senolytic activity across cell types is limited.

**Aging-context tier-1 rationale.** Navitoclax (ABT-263) is clinical-stage (Phase 1/2 oncology) and venetoclax (ABT-199, the related BCL-2-selective congener) is FDA-approved for CLL/AML/SLL — neither is approved for an aging-rejuvenation indication. The aging-context tier-1 designation reflects BCL-xL's role as the dominant SCAP node in endothelial/fibroblast senescent populations and the established senolytic activity of navitoclax + A1331852 in preclinical aging models. Strict Open Targets `Approved Drug = true` for an aging indication does not apply.

---

## Pathway membership

- [[apoptosis-pathway]] — BCL-xL is a core regulator of intrinsic apoptosis; acts at the BAX/BAK checkpoint upstream of MOMP
- [[cellular-senescence]] — BCL-xL is a SCAP component; upregulated in senescent cells to confer apoptosis resistance
- [[bcl2-family-pathway]] — BCL-xL is a member of the BCL-2 protein family; interacts with pro-apoptotic family members BAX, BAK, BIM, PUMA, BID, BAD, NOXA (implicit stub)

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[bax]] | Direct binding (groove:BH3) | BCL-xL sequesters inactive BAX; prevents BAX oligomerization at MOM |
| [[bak]] | Direct binding (groove:BH3) | BCL-xL sequesters activated BAK at MOM; prevents pore formation |
| [[bim]] | BH3:groove (high affinity) | Activator BH3-only; BCL-xL sequestation prevents BIM-driven BAX/BAK activation |
| [[puma]] | BH3:groove | Sensitizer/activator; released by BH3-mimetics |
| [[bad]] | BH3:groove (phosphorylation-regulated) | Sensitizer; BAD phosphorylation by Akt releases it from BCL-xL |
| [[bid]] | BH3:groove | tBID (truncated by caspase-8) is an activator BH3-only; sequestered by BCL-xL |
| [[beclin-1]] | BH3:groove (autophagy) | BCL-xL sequesters BECLIN-1, suppressing autophagy; this interaction is disrupted by BH3-mimetics |

---

## Aging interventions that modulate BCL-xL

- [[navitoclax]] — direct BCL-xL BH3-mimetic; senolytic in HUVECs and other BCL-xL-dependent cell types; thrombocytopenia-limited
- [[a1331852]] — selective BCL-xL BH3-mimetic; preclinical senolytic activity confirmed [^zhu2017]; no clinical data in aging
- [[quercetin]] + [[dasatinib]] — the D+Q combination works via different nodes in the SCAP network (PI3K-δ, ephrins, p21); does not directly inhibit BCL-xL, but the combined SCAP disruption may indirectly reduce BCL-xL's buffering capacity in some contexts #gap/no-mechanism
- [[fisetin]] — senolytic in HUVECs only (not in IMR90 or primary human preadipocytes per Zhu 2017 [^zhu2017]); mechanism does not directly inhibit BCL-xL; fisetin's senolytic mechanism remains incompletely characterised #gap/no-mechanism

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| Cell-type SCAP dependency in primary human aged tissue | #gap/needs-replication | SCAP characterization done in cell lines (HUVECs, IMR90); primary aged human endothelium uncharacterized |
| BCL-xL-targeted senolytic in human clinical trial | #gap/needs-human-replication | All senolytic BCL-xL data is preclinical; navitoclax aging trials have not formally tested senolytic endpoints |
| Tissue-selective BCL-xL inhibition strategy | #gap/long-term-unknown | Platelet toxicity concern; prodrug or ADC approaches are hypothetical |
| BCL-xS function in aging | #gap/unsourced | BCL-xS is pro-apoptotic and expressed in high-turnover tissues; no primary source characterizing BCL-xS role in aged tissues found during this curation pass |
| BCL-xL interaction with BECLIN-1 in senescent cells | #gap/needs-replication | BCL-xL:BECLIN-1 interaction suppresses autophagy in general; specific role of this interaction in senescent-cell autophagy flux is not well-characterized |
| GenAge entry | #gap/needs-canonical-id | BCL2L1 does not appear to have a GenAge-human entry; the aging relevance is inferred from SCAP biology rather than direct lifespan manipulation in models |

---

## Footnotes

[^boise1993]: doi:10.1016/0092-8674(93)90508-n · in-vitro + in-vivo · n=N/A · model: WEHI-231 lymphoma cells, T cell hybridomas, primary thymocytes · original discovery of BCL-xL and BCL-xS isoforms; established anti-apoptotic function of BCL-xL and pro-apoptotic function of BCL-xS · not locally downloaded (status: failed — bronze OA; download failed) #gap/no-fulltext-access — isoform/mechanistic claims from this source are unverified against the full text

[^zhu2015]: doi:10.1111/acel.12344 · in-vitro + in-vivo · n=N/A for in-vitro; multiple mouse cohorts for in-vivo (N=6–14 per group per experiment) · model: primary human preadipocytes (main siRNA screen), HUVECs (siRNA screen), IMR90 fibroblasts (drug screen); progeroid Ercc1−/Δ mice and chronologically aged C57BL/6 male mice · key finding: BCL-xL is a dominant SCAP node in senescent HUVECs; BCL-xL siRNA selectively kills senescent HUVECs but is NOT senolytic in preadipocytes; dasatinib + quercetin (NOT navitoclax) clears senescent cells in vivo and improves cardiac function and exercise capacity in aged mice · locally downloaded (PDF confirmed)

[^yosef2016]: doi:10.1038/ncomms11190 · in-vitro + in-vivo · model: IMR-90 human fibroblasts (primary in-vitro model; 3 senescence induction methods); mouse lung irradiation model; p14ARF transgenic skin senescence model (young mice) · key finding: BCL-W and BCL-XL are the dominant SCAP nodes in senescent IMR-90 cells; combined BCL-W + BCL-XL knockdown causes 53% viability reduction (synergistic); ABT-737 eliminates DNA-damage-induced senescent cells from mouse lung and p53-induced senescent epidermal cells in vivo; no healthspan measurements in chronologically aged mice · locally downloaded (PDF confirmed)

[^wilson2010]: doi:10.1016/s1470-2045(10)70261-8 · phase 1 clinical trial · n=94 patients (lymphoid malignancies) · model: human · key finding: navitoclax exhibits dose-limiting thrombocytopenia attributable to BCL-XL inhibition in platelets; grade 3–4 thrombocytopenia in 29 patients; recommended phase 2 dose 325 mg/day (150 mg lead-in) · not locally downloaded (status: pending — green OA) #gap/no-fulltext-access — thrombocytopenia statistics (29/94, grade definitions, dose) are unverified against full text

[^souers2013]: doi:10.1038/nm.3048 · in-vitro + phase 1 clinical · n=N/A (preclinical) + 3 patients (clinical vignette) · model: human cancer cell lines; CLL patients · key finding: ABT-199 (venetoclax) achieves BCL-2 selectivity by re-engineering the binding surface to avoid BCL-xL engagement; spares human platelets; confirms that BCL-xL inhibition (not BCL-2) drives navitoclax thrombocytopenia · status: not_oa; not locally downloaded #gap/no-fulltext-access — venetoclax selectivity and thrombocytopenia mechanism claims are unverified against full text (paper is closed-access)

[^zhu2017]: doi:10.18632/aging.101202 · in-vitro · n=5 replicates per concentration per subject; 4 subjects for HUVEC/IMR90, 5 subjects for preadipocytes · model: senescent HUVECs, IMR90 human lung fibroblasts, primary human preadipocytes · key finding: A1331852 and A1155463 (selective BCL-XL inhibitors) are senolytic in HUVECs AND IMR90 cells but NOT in preadipocytes; fisetin is senolytic in HUVECs only, NOT in IMR90 or preadipocytes · locally downloaded (PDF confirmed)
