---
type: pathway
aliases: [apoptosis, programmed cell death, PCD, caspase-dependent apoptosis]
kegg: hsa04210
reactome: R-HSA-109581
wikipathways: WP254
key-nodes:
  - "[[caspase-3]]"
  - "[[caspase-8]]"
  - "[[caspase-9]]"
  - "[[bcl-2]]"
  - "[[bcl-xl]]"
  - "[[bax]]"
  - "[[bak]]"
  - "[[bid]]"
  - "[[puma]]"
  - "[[noxa]]"
  - "[[apaf-1]]"
  - "[[cytochrome-c]]"
  - "[[fas]]"
  - "[[fasl]]"
upstream:
  - "[[p53-pathway]]"
  - "[[dna-damage-response]]"
  - "[[nf-kb]]"
  - "[[pi3k-akt-pathway]]"
downstream:
  - "[[cellular-senescence]]"
  - "[[inflammation]]"
hallmarks:
  - "[[genomic-instability]]"
  - "[[cellular-senescence]]"
  - "[[stem-cell-exhaustion]]"
sens-categories: ["[[apoptosenes]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Tyner 2002 (PDF), Zhu 2015 (PDF), Zhu 2016 (PDF), Danial & Korsmeyer 2004 (PDF) verified against primary sources. Lossi 2022 (doi:10.1042/BCJ20210854) is closed-access (not_oa) — claims attributed to it (Type I/II cell classification, executioner caspase substrate list) are well-supported by Danial 2004 and are standard textbook apoptosis biochemistry; those specific Lossi 2022 footnotes remain unverified against the PDF. KEGG/Reactome/WikiPathways IDs not independently re-confirmed against databases."
---

# Apoptosis pathway (caspase-dependent)

Apoptosis is a genetically encoded, caspase-dependent form of programmed cell death that eliminates damaged, stressed, or superfluous cells in a non-inflammatory manner. Two major activation routes converge on the **execution caspases** (caspase-3 and -7): the **intrinsic (mitochondrial) pathway**, governed by the Bcl-2 family and mitochondrial outer membrane permeabilization (MOMP), and the **extrinsic (death-receptor) pathway**, initiated by ligand-bound cell-surface death receptors. The two pathways interconnect via caspase-8-mediated BID cleavage, creating a mitochondrial amplification loop [^danial2004]. In aging, apoptosis is pathologically dysregulated in two opposing directions: **excess apoptosis** depletes somatic stem cells (a p53-driven mechanism implicated in accelerated aging phenotypes [^tyner2002]), while **apoptosis resistance** in senescent cells enables their accumulation — the mechanistic basis for senolytic therapy [^zhu2015_achilles].

---

## Two activation routes

### Intrinsic (mitochondrial) pathway

The intrinsic pathway responds to **intracellular stress signals**: double-strand DNA breaks, oncogene activation, cytokine deprivation, oxidative damage, ER stress, and replication stress. Signal integration occurs at the **Bcl-2 family network** on the mitochondrial outer membrane (OMM).

**Sequence of events:**

1. Stress signals stabilize or activate **BH3-only sensors** (BIM, PUMA, NOXA, BAD, BID, BIK, HRK), which neutralize anti-apoptotic Bcl-2 proteins and/or directly activate BAX/BAK.
2. Anti-apoptotic proteins (BCL-2, BCL-xL, MCL-1, BCL-W, A1) normally sequester BAX, BAK, and BH3-only activators. When overwhelmed, they release **BAX** and **BAK**.
3. Freed BAX translocates from cytosol to OMM; BAK (constitutively OMM-resident) undergoes conformational change. Both oligomerize, forming lipid-lined protein pores.
4. **MOMP** — cytochrome c, SMAC/DIABLO, and Omi/HtrA2 release from the intermembrane space into the cytoplasm.
5. Cytoplasmic cytochrome c recruits **Apaf-1** (apoptotic protease-activating factor 1), which oligomerizes into the ~1 MDa **apoptosome** heptamer.
6. The apoptosome recruits and activates **caspase-9** (initiator caspase).
7. Active caspase-9 cleaves and activates **caspase-3 and caspase-7** (executioner caspases).
8. Executioner caspases cleave hundreds of substrates (PARP, laminins, cytoskeletal proteins, DNase inhibitor ICAD → CAD activation → oligonucleosomal DNA laddering) → cell death [^lossi2022].

SMAC/DIABLO and Omi/HtrA2 released alongside cytochrome c neutralize **IAPs** (inhibitors of apoptosis proteins, including XIAP), removing an additional brake on executioner caspase activity.

### Extrinsic (death receptor) pathway

The extrinsic pathway is activated by extracellular **death ligands** binding cognate receptors on the plasma membrane. Three major receptor-ligand pairs are established in mammals:

| Ligand | Receptor(s) | DISC components |
|---|---|---|
| FAS-L (CD95L) | FAS (CD95 / TNFRSF6) | FADD + caspase-8 (+ c-FLIP) |
| TNF-α | TNFR1 (TNFRSF1A) | TRADD → FADD + caspase-8 |
| TRAIL | DR4 (TNFRSF10A), DR5 (TNFRSF10B) | FADD + caspase-8 (+ c-FLIP) |

**Sequence of events:**

1. Ligand binding induces receptor trimerization.
2. The cytoplasmic death domains (DD) recruit adaptor protein **FADD** (for FAS/DR4/DR5) or TRADD then FADD (for TNFR1).
3. FADD recruits procaspase-8 (and -10) and the anti-apoptotic decoy c-FLIP into the **DISC** (death-inducing signaling complex).
4. Proximity-driven autoproteolytic processing activates **caspase-8** within the DISC.
5. Active caspase-8 directly cleaves executioner caspases-3/-7 — sufficient in "Type I" cells (e.g., thymocytes, mature lymphocytes).
6. In **Type II** cells (e.g., hepatocytes, pancreatic beta cells), direct caspase-8→caspase-3 activation is insufficient due to high XIAP expression. Caspase-8 instead cleaves **BID** → **tBID**, which translocates to the OMM and triggers MOMP → mitochondrial amplification → sufficient executioner caspase activation [^lossi2022].

**Type I vs Type II classification** is operationally defined by whether a BCL-2/BCL-xL transgene rescues cells from death-receptor-mediated apoptosis (rescues Type II, not Type I); the molecular correlate is mitochondrial XIAP levels.

---

## Bcl-2 family: the central regulatory node

The Bcl-2 family (~20 members in mammals) is unified by possession of 1–4 **Bcl-2 Homology (BH) domains**. All members regulate MOMP. Three functional subfamilies:

| Subfamily | Members | BH domains | Function |
|---|---|---|---|
| Anti-apoptotic | BCL-2, BCL-xL, MCL-1, BCL-W, A1 (BFL-1) | BH1–BH4 | Inhibit BAX/BAK oligomerization; sequester BH3-only activators |
| Pro-apoptotic effectors | BAX, BAK, BOK | BH1–BH3 | Oligomerize in OMM → MOMP |
| BH3-only sensors | BIM, BID, PUMA, NOXA, BAD, BIK, HRK, BMF | BH3 only | Neutralize anti-apoptotic proteins; some (BIM, BID) directly activate BAX/BAK |

Two models describe how BH3-only proteins activate BAX/BAK:

- **Indirect model:** BH3-only proteins bind and occupy the hydrophobic groove of BCL-2/BCL-xL, releasing basally suppressed BAX/BAK.
- **Direct activation model:** "Activator" BH3-only proteins (BIM, tBID, possibly PUMA) directly bind and conformationally activate BAX/BAK; "sensitizer" BH3-only proteins (BAD, NOXA) compete for anti-apoptotic protein binding only.

The net balance of anti-apoptotic vs pro-apoptotic Bcl-2 family members — set by transcription ([[p53]] drives PUMA and NOXA), post-translational modification (phosphorylation by AKT, JNK, ERK), and protein turnover — determines the apoptotic threshold [^danial2004].

---

## p53 as a transcriptional driver of the intrinsic pathway

[[p53]] is the principal transcriptional activator of the intrinsic apoptotic program in response to genotoxic stress:

- **PUMA** (p53 upregulated modulator of apoptosis / BBC3): a BH3-only protein transcriptionally induced by p53; potent activator of apoptosis; neutralizes all five anti-apoptotic Bcl-2 proteins.
- **NOXA** (PMAIP1): also a p53 target; selectively binds MCL-1 and A1; works synergistically with BAD (which neutralizes BCL-2 and BCL-xL but not MCL-1) to maximize apoptotic commitment.

In parallel, p53 can trigger **transcription-independent apoptosis** by directly binding and permeabilizing BCL-xL/BCL-2 at the OMM, releasing cytochrome c without nuclear signaling — a rapid-response mechanism relevant in acute genotoxic stress. See [[p53]] and [[p53-pathway]] for details.

**Aging relevance — augmented p53 activity:** In a landmark mouse study, a serendipitously-derived deletion allele (the "m allele") that produces a ~24K C-terminal p53 fragment and augments wild-type p53 activity was shown to cause accelerated aging phenotypes — including osteoporosis, organ atrophy, reduced stress tolerance, and 23% shorter median lifespan (96 vs 118 weeks; P<0.0001) [^tyner2002]. A second independent transgenic line (pL53, Ala135Val temperature-sensitive mutant, ~20 copies) recapitulated similar but milder phenotypes. This demonstrates that **chronic over-activation of p53-driven apoptotic/senescence signaling is associated with tissue deterioration phenotypes that phenocopy normal aging**; the authors hypothesize the mechanism involves accelerated somatic stem-cell exhaustion, but stem-cell depletion was not directly demonstrated. The m-allele augmented-p53 activity requires endogenous wild-type p53 (the tumor-suppressive effect disappears in p53-/m mice). Note: the "p44/Δ40p53" designation refers to a distinct short isoform studied by Maier et al. 2004 (different molecular intervention, same conceptual result); the Tyner 2002 m-allele encodes a chimeric C-terminal fragment, not the N-terminally-truncated p44 isoform.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Excess-apoptosis aging phenotype conserved? | partial (mouse data; human aging shows some stem-cell depletion but PUMA/NOXA contribution not established as primary driver) |
| Replicated in humans? | no (Tyner 2002 is mouse-only) #gap/needs-human-replication |

---

## Aging relevance: apoptosis resistance in senescent cells (SCAPs)

A central paradox in aging biology: while acute apoptosis protects against cancer and clears damaged cells, **senescent cells resist apoptosis** and accumulate with age, driving the [[cellular-senescence|senescence]]-associated secretory phenotype (SASP) and tissue dysfunction.

Senescent cells upregulate a network of **Senescent-Cell Anti-Apoptotic Pathways (SCAPs)** [^zhu2015_achilles]:

- **BCL-2 family upregulation** — cell-type specific: BCL-xL and BCL-2 significantly upregulated in senescent HUVECs; BCL-2 and BCL-w significantly upregulated in senescent IMR90 cells; no significant BCL-2 family upregulation detected in senescent preadipocytes. Pattern varies by cell type and cannot be generalized as pan-upregulation of all three members.
- **Ephrin survival signaling (EFNB1, EFNB3)** — among the most potent senolytic siRNA targets in preadipocytes; dependence receptors promote apoptosis unless ligand-bound, so senescent cells may upregulate ligand availability.
- **PI3K delta (PI3KCD)** — catalytic subunit δ specifically implicated; siRNA knockdown selectively kills senescent preadipocytes.
- **p21 (CDKN1A)** — senolytic siRNA target in preadipocytes; anti-apoptotic role beyond canonical cell-cycle arrest.
- **Plasminogen-activated inhibitor-2 (PAI-2 / SERPINB2)** — senolytic siRNA target; anti-apoptotic serpin.
- **PAI-1 (SERPINE1)** — also senolytic in preadipocytes; serine protease inhibitor with anti-apoptotic function.

The siRNA screen and transcriptome analysis (primary cell type: human preadipocytes, with validation in HUVECs) identified these SCAPs via STRING network analysis of 39 anti-apoptotic candidates. BCL-xL was identified as a key survival factor in HUVECs specifically, but is not the dominant factor in all senescent cell types — preadipocytes are instead more dependent on ephrin/PI3K/serpin pathways. This finding motivated the hypothesis that targeting anti-apoptotic networks — including BCL-2 family inhibitors — could selectively clear senescent cells [^zhu2015_achilles].

**Navitoclax (ABT-263)** is a BH3 mimetic that inhibits BCL-2, BCL-xL, and BCL-W. Zhu 2016 demonstrated that navitoclax is selectively senolytic in HUVECs and IMR90 cells (but not in human primary preadipocytes), acting via caspase-3/7 apoptosis confirmed by TUNEL assay [^zhu2016_navitoclax]. Selectivity correlated with BCL-2 family protein signatures: cell types with elevated BCL-xl and BCL-2 (HUVECs, IMR90) were sensitive; preadipocytes (which lack this signature) were not. The navitoclax dose used in cell culture was 0.001–1 µM (HUVECs) and 0.4–10 µM (IMR90). The paper also showed navitoclax is senolytic in Ercc1-deficient murine MEFs (progeroid model). #gap/needs-human-replication — all in vitro and progeroid mouse model data only. Note: claims about navitoclax reducing senescent cells in lung/liver/bone marrow of naturally aged mice at 50 mg/kg/day × 7 days derive from later work (e.g., Chang et al. 2016, Nature Medicine), not Zhu 2016. #gap/needs-replication

**Limitation:** navitoclax's on-target BCL-xL inhibition in platelets causes dose-limiting **thrombocytopenia** in humans (platelets depend on BCL-xL for survival). This has driven development of platelet-sparing BCL-xL inhibitors and PROTAC-based degraders as next-generation senolytics. See [[fisetin]] and the [[senolytics]] intervention page for broader context.

| Dimension | Status |
|---|---|
| SCAP upregulation in human senescent cells? | yes (demonstrated in human primary preadipocytes and HUVECs; cell-type specific pattern) |
| Senolytic clearance in humans? | in-progress (clinical trials ongoing) |
| Navitoclax senolysis in naturally aged mice? | not established in Zhu 2016 (in vitro + progeroid MEFs only); later work (Chang et al. 2016) tested aged mice #gap/needs-replication |

---

## Cross-talk with other pathways

| Pathway | Interaction |
|---|---|
| [[p53-pathway]] | p53 transcriptionally induces PUMA and NOXA (intrinsic); stabilized by ATM/ATR-mediated phosphorylation following DNA damage |
| [[dna-damage-response]] | ATM → CHK2 → p53 → PUMA/NOXA; also ATM → direct MOMP induction via BID phosphorylation |
| [[nf-kb]] | NF-κB upregulates BCL-2, BCL-xL, c-FLIP (anti-apoptotic); also induces TRAIL and FAS-L (pro-apoptotic) — context-dependent |
| [[pi3k-akt-pathway]] | AKT phosphorylates BAD (Ser136) → sequesters BAD by 14-3-3; phosphorylates MDM2 → promotes p53 degradation → anti-apoptotic |
| [[mtor]] | mTORC1 promotes survival via S6K1-mediated BAD phosphorylation and 4E-BP1-mediated cap-dependent translation of anti-apoptotic BCL-2 family members |
| [[autophagy]] | Competing fates: [[beclin-1]] is sequestered by BCL-2/BCL-xL; MOMP can trigger autophagic clearance of damaged mitochondria ([[mitophagy]]); excess autophagy can activate caspase-independent death |
| [[cellular-senescence]] | SCAPs suppress apoptosis in senescent cells; SASP components (TNF-α, TRAIL) can paradoxically trigger extrinsic apoptosis in neighboring cells |

---

## Pharmacological targeting

| Agent | Class | Target | Clinical context |
|---|---|---|---|
| Navitoclax (ABT-263) | BH3 mimetic | BCL-2, BCL-xL, BCL-W | Cancer (CLL); senolytic candidate — thrombocytopenia dose-limits |
| Venetoclax (ABT-199) | BH3 mimetic | BCL-2 (selective) | FDA-approved (CLL, AML); senolytic activity in BCL-2-dependent senescent cells |
| S63845 | BH3 mimetic | MCL-1 (selective) | Preclinical (hematologic malignancies) |
| TRAIL / recombinant DR agonists | Death-receptor pathway | DR4/DR5 | Cancer trials — some tumor-selectivity; failed in solid tumors as monotherapy |
| Dasatinib | Tyrosine kinase inhibitor | Multiple (incl. Src, PI3K-related survival signaling) | FDA-approved (CML); senolytic when combined with quercetin; mechanism partially via SCAPs |

**Dasatinib + quercetin (D+Q)** is the most-studied clinical senolytic combination — the Zhu 2015 transcriptome analysis identified it as a functional validation of the SCAP hypothesis before navitoclax was tested. D+Q targets different SCAPs (Src-family kinases, PI3K, serpines) vs navitoclax (BCL-2 family). See [[fisetin]] for the third major senolytic candidate.

---

## Limitations and gaps

- **Tissue context:** the apoptotic threshold varies enormously by cell type, differentiation state, and microenvironment. Claims about "apoptosis" without cell-type specification are underspecified.
- **Type I vs Type II distinction:** the classification is experimentally useful but the molecular determinant (relative XIAP expression) is not universal; some cells show intermediate behavior. #gap/needs-replication
- **Non-canonical caspase roles:** caspases-3, -6, -7, -8, and -9 have non-apoptotic functions (cell-fate specification, axon pruning, inflammatory signaling). The assumption that caspase activity = apoptosis is increasingly challenged.
- **Human aging data:** most aging-relevant apoptosis findings are from mouse models. Whether p53-driven apoptotic stem-cell depletion contributes materially to human tissue aging (as opposed to senescence accumulation) is not established. #gap/needs-human-replication
- **Navitoclax senolytic dose/schedule in humans:** optimal dosing to achieve senolytic effect without dose-limiting thrombocytopenia is not established. #gap/dose-response-unclear
- **SCAP heterogeneity:** SCAPs vary substantially across senescent cell types and inducers. A universal senolytic remains elusive. #gap/needs-replication
- **WikiPathways ID:** WP254 listed above is the canonical human apoptosis entry but was not independently confirmed via API query; verify on next lint pass. #gap/needs-canonical-id

---

## Footnotes

[^danial2004]: doi:10.1016/s0092-8674(04)00046-7 · review · n=N/A · model: review of mammalian biochemistry · Danial & Korsmeyer, Cell 2004; defines intrinsic/extrinsic pathway architecture and Bcl-2 family network (anti-apoptotic: BCL-2, BCL-XL, MCL-1, BCL-W, A1; pro-apoptotic effectors: BAX, BAK; BH3-only sensors); apoptosome heptamer structure; Type I/II cell classification via BID-MOMP axis; archive status: downloaded (bronze OA)

[^tyner2002]: doi:10.1038/415045a · in-vivo · n=35 (p53+/m) + 56 (p53+/+) headline cohort; total ~480 across all genotype groups · model: Mus musculus (C57BL/6×129/Sv background; m-allele = C-terminal p53 fragment augmenting WT p53 activity; also pL53 transgenic line n=66 as internal replication) · Tyner et al., Nature 2002; shows augmented p53 activity → accelerated aging phenotypes (23% median lifespan reduction, P<0.0001; osteoporosis, organ atrophy, reduced stress tolerance); stem-cell depletion is hypothesized mechanism, not directly demonstrated; archive status: locally downloaded (PDF available)

[^zhu2015_achilles]: doi:10.1111/acel.12344 · in-vitro + in-vivo · n=N=8 replicates for preadipocyte RNA (N=5 for HUVECs); D+Q in vivo: single dose D 5 mg/kg + Q 50 mg/kg oral gavage in old mice (>24 months) · model: human senescent preadipocytes (primary) and HUVECs; Mus musculus aged (>24 months) and Ercc1-/- progeroid · Zhu et al., Aging Cell 2015; transcriptome-derived SCAP identification (siRNA screen of 39 candidates in preadipocytes; validated in HUVECs); first senolytic validation (dasatinib + quercetin); BCL-xL key in HUVECs but SCAPs are cell-type specific (preadipocytes rely more on ephrin/PI3K/serpin network); archive status: downloaded (gold OA)

[^zhu2016_navitoclax]: doi:10.1111/acel.12445 · in-vitro + progeroid mouse model · n=4 replicates/group (cell assays); Ercc1-/- MEFs for in-vivo senolysis · model: human senescent HUVECs, IMR90 cells, primary preadipocytes; Mus musculus Ercc1-deficient progeroid MEFs · Zhu et al., Aging Cell 2016; navitoclax (ABT-263) senolytic in HUVECs and IMR90 but NOT human primary preadipocytes; selectivity correlates with BCL-2 family protein signature; confirmed by caspase-3/7 assay and TUNEL; archive status: downloaded (gold OA)

[^lossi2022]: doi:10.1042/BCJ20210854 · review · n=N/A · model: review of mammalian biology · Lossi, Biochemical Journal 2022; 273 citations; comprehensive conceptual review of intrinsic vs extrinsic apoptosis; archive status: not_oa (closed access) #gap/no-fulltext-access
