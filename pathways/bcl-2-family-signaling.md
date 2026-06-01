---
type: pathway
aliases: [bcl2-family-pathway, "bcl-2 family pathway", intrinsic apoptosis decision network, BH3 rheostat, BCL-2 family signaling, BCL-2/BCL-xL/MCL-1 network]
kegg: hsa04210
reactome: R-HSA-109606
reactome-subpathway: R-HSA-111453
wikipathways: null
key-nodes: ["[[bak]]", "[[bax]]", "[[bcl-xl]]", "[[bcl-2]]", "[[mcl-1]]", "[[bim]]", "[[bid]]", "[[bad]]", "[[noxa]]", "[[puma]]"]
upstream: ["[[p53-pathway]]", "[[pi3k-akt-pathway]]", "[[dna-damage-response]]", "[[insulin-igf1]]", "[[er-stress]]", "[[hypoxia-signaling]]"]
downstream: ["[[apoptosis-pathway]]", "[[apaf-1]]", "[[cytochrome-c]]", "[[caspase-9]]", "[[apoptosis]]"]
hallmarks: ["[[cellular-senescence]]", "[[mitochondrial-dysfunction]]", "[[genomic-instability]]"]
sens-categories: ["[[apoptosenes]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Chipuk 2010 (10.1016/j.molcel.2010.01.025) PDF verified end-to-end: three-tier architecture, PUMA sensitizer classification (Fig 1B), direct-activator/sensitizer framework, BAX/BAK BH4-motif nuance, selectivity-matrix qualitative profiles. Oltersdorf 2005 (10.1038/nature03579) PDF verified: ABT-737 affinity profile (BCL-xL Ki ~1 nM, MCL-1/A1 Ki >1 µM), mechanism confirmed as displacement (sensitizer-like), not direct activation; in-vivo doses and model confirmed. Roberts 2016 (10.1056/nejmoa1513257) PDF verified: n=116, 79% ORR, 20% CR, published January 2016. KEGG hsa04210 and Reactome R-HSA-109606 / R-HSA-111453 confirmed via public APIs. Czabotar 2014 (10.1038/nrm3722), Letai 2008 (10.1038/nrc2297), Souers 2013 (10.1038/nm.3048) — permanently not_oa; no local PDF; claims citing these sources remain unverified against full text — tagged. Singh 2019 (10.1038/s41580-018-0089-8) and Chang 2016 (10.1038/nm.4010) — green OA but permanent download failure (0 candidate URLs); tagged #gap/no-fulltext-access. BH3-binding selectivity matrix affinities remain qualitative and #gap/unsourced (Czabotar 2014 / Chen 2005 / Opferman 2003 not accessible). SCAP table claims inherited from bcl-xl.md and bcl-2.md verified pages (Zhu 2015 / Zhu 2016 primary PDFs — BUG-2 archive mismatch documented on those pages). WikiPathways ID not confirmed — tagged #gap/needs-canonical-id."
---

<!-- verified 2026-05-04: Chipuk 2010 PDF read end-to-end (3-tier architecture, PUMA sensitizer/derepressor via Fig 1B, BAX BH4-motif nuance, selectivity-profile qualitative matrix). Oltersdorf 2005 PDF verified (ABT-737 affinities, displacement mechanism, in-vivo model). Roberts 2016 PDF verified (n=116, 79% ORR, 20% CR, Jan 2016 NEJM). KEGG + Reactome IDs confirmed via API. Czabotar 2014, Letai 2008, Souers 2013 permanently not_oa. Singh 2019, Chang 2016 permanent OA-download failure. Corrections applied: (1) effector BH4 motif nuance added; (2) PUMA note Fig reference corrected from 1C to 1B; (3) roberts2015 citation key renamed roberts2016 throughout; (4) Chang 2016 / Singh 2019 footnotes flagged #gap/no-fulltext-access. -->

# BCL-2 family signaling

The **BCL-2 family signaling network** is the central decision module of the intrinsic apoptosis pathway. It functions as a molecular rheostat at the mitochondrial outer membrane (MOM): the balance between pro-survival and pro-apoptotic family members determines whether **mitochondrial outer membrane permeabilization (MOMP)** occurs. MOMP is effectively a point of no return — once executed, it releases cytochrome c, SMAC/DIABLO, and other apoptogenic factors into the cytoplasm, irreversibly activating the [[caspase-9]] → [[caspase-3]]/[[caspase-7]] execution cascade [^chipuk2010reunion]. In aging, this network is dysregulated in senescent cells, which upregulate pro-survival BCL-2 family members as a component of their **Senescent Cell Anti-apoptotic Pathways (SCAP)** — making them resistant to apoptosis and targetable by BH3-mimetic senolytics [^czabotar2014].

> **Naming note:** This page is canonical for `[[bcl-2-family-signaling]]`. The alias `[[bcl2-family-pathway]]` resolves here. The broader [[apoptosis-pathway]] page covers the extrinsic (death-receptor) pathway, executioner caspases, and the full apoptosis sequence; this page is the decision module that precedes and governs MOMP.

## Three-tier protein architecture

The BCL-2 family is organized into three functional tiers defined by their BH domain composition and functional role [^chipuk2010reunion][^czabotar2014]:

| Tier | BH domains | Members | Function |
|---|---|---|---|
| **Pro-survival multidomain** | BH1+BH2+BH3+BH4 | [[bcl-2]], [[bcl-xl]], BCL-w, [[mcl-1]], A1/BFL-1 | Sequester pro-apoptotic members; prevent MOMP; create hydrophobic BH3-binding groove |
| **Pro-apoptotic effectors** | BH1+BH2+BH3 (originally described as lacking BH4; structure-based alignment revealed a conserved BH4 motif per Chipuk 2010) | [[bak]], [[bax]], BOK | Execute MOMP; oligomerize to form lipidic pores; required for cytochrome c release |
| **BH3-only sensors** | BH3 only | BIM, tBID, PUMA, NOXA, BAD, BMF, HRK, BIK | Upstream stress sensors; activate effectors or neutralize pro-survival members |

All BCL-2 family proteins share the amphipathic BH3 helix as a minimal functional unit. Pro-survival members bind BH3 peptides via a hydrophobic groove formed by BH1+BH2+BH3+BH4; disruption of this interaction by BH3-only proteins or BH3-mimetic drugs is the key regulatory event [^chipuk2010reunion].

### BH3-only proteins: direct activators vs sensitizers

BH3-only proteins fall into two functional sub-classes based on their mechanism of action [^chipuk2010reunion]:

| Sub-class | Members | Primary target | Mechanism |
|---|---|---|---|
| **Direct activators** | [[bim]], tBID ([[bid]] cleavage product) | BAK/BAX directly | Bind and conformationally activate BAK/BAX to initiate oligomerization |
| **Sensitizers / derepressors** | [[bad]], [[noxa]], PUMA, BMF, HRK, BIK | Pro-survival members | Displace direct activators from pro-survival sequesters → free activators trigger effectors |

**PUMA classification note:** PUMA was originally proposed as a direct activator. Chipuk 2010 explicitly classifies PUMA as a sensitizer/derepressor in Fig. 1B (classification diagram), where it appears under "Sensitizers/de-repressors BH3-only proteins: BAD, BIK, BMF, HRK, Noxa and PUMA." Fig. 1C separately shows PUMA's anti-apoptotic binding profile (all five pro-survival members), which is the same pan-binding profile as BIM — but binding breadth is not sufficient for direct-activator classification under the Chipuk 2010 framework. The key criterion is whether the BH3-only protein can directly engage and activate BAX/BAK; the Chipuk 2010 review and cited Chipuk et al. 2005 (Science 309) found this effect "may not be direct." This classification is not universally accepted and is flagged as a **tension point** between puma.md (which retains "direct activator + universal neutralization" framing) and this page (Chipuk 2010 sensitizer/derepressor classification). #gap/contradictory-evidence

**BAD selectivity:** [[bad]] is a sensitizer that binds BCL-2, BCL-xL, and BCL-w only — it does NOT neutralize [[mcl-1]] or A1. Phosphorylation by AKT (Ser136), RSK (Ser112), or PKA (Ser136/Ser112) sequesters BAD in the cytoplasm via 14-3-3 binding, connecting the [[pi3k-akt-pathway|PI3K–AKT survival axis]] directly to the apoptotic rheostat.

**NOXA selectivity:** [[noxa]] is the mirror image — it binds MCL-1 and A1 only (NOT BCL-2/BCL-xL/BCL-w). In combination with BAD or other BCL-2/xL-targeting BH3-onlys, NOXA covers the full anti-apoptotic spectrum after [[p53-pathway|p53 activation]].

## Two models for BAK/BAX activation (historical debate → unified view)

Two competing mechanistic models have shaped understanding of this network [^chipuk2010reunion][^czabotar2014]:

**Direct-activator model** (Letai / Korsmeyer labs): Direct activators (BIM, tBID) bind BAK/BAX and allosterically trigger their activation. Pro-survival BCL-2 family members function primarily by sequestering these direct activators — not by sequestering BAK/BAX themselves. Prediction: BIM/tBID are rate-limiting; cells with low BIM are resistant even if pro-survival members are inhibited.

**Displacement / derepressor model** (Willis / Adams lab, 2007): Pro-survival members sequester BAK/BAX in inactive conformations. BH3-only proteins act by displacing BAK/BAX from these complexes. Direct activation of effectors is not required. Prediction: selectivity of BH3-only proteins for pro-survival members predicts apoptotic sensitivity.

**Current unified consensus [^chipuk2010reunion][^czabotar2014]:** Both modes operate in cells. The relative contribution is cell-context-dependent and varies by:
- Which pro-survival members dominate (BCL-2/BCL-xL vs MCL-1-driven cells)
- Whether BAK (constitutively mitochondrial, partially pre-inhibited) or BAX (cytoplasmic, requires full activation) is the primary effector
- Availability of free BIM/tBID vs sequestered pools

In practice, **BH3 profiling** (exposure of permeabilized cells to BH3 peptides to measure MOMP threshold) operationalizes both models by measuring net apoptotic sensitivity without requiring mechanistic separation [^letai2008].

## BH3-binding selectivity matrix

Pro-survival members differ in which BH3-only proteins they can sequester. This selectivity is the molecular basis for synergistic BH3-mimetic combinations [^czabotar2014][^chipuk2010reunion]:

| BH3-only protein | BCL-2 | BCL-xL | BCL-w | MCL-1 | A1/BFL-1 |
|---|---|---|---|---|---|
| [[bim]] | +++ | +++ | ++ | ++ | + |
| tBID ([[bid]]) | ++ | +++ | ++ | +++ | ++ |
| [[bad]] | +++ | +++ | ++ | — | — |
| [[noxa]] | — | — | — | +++ | + |
| PUMA | +++ | +++ | ++ | ++ | + |
| BMF | ++ | ++ | ++ | + | + |
| HRK | — | +++ | — | — | — |
| BIK | — | +++ | + | — | — |

Key consequence: **BAD + NOXA together** cover all five pro-survival members; **navitoclax** (BCL-2/xL/w) + **S63845** (MCL-1) together approximate pharmacological pan-BCL-2 inhibition. Note: affinity values underlying this table require primary-source verification — the bak.md verifier corrected BIM-MCL-1 affinity from ~1 nM to ~74 nM (Opferman 2003); other values in this table are #gap/unsourced until verified. #gap/needs-replication

## MOMP commitment: BAK/BAX oligomerization and pore formation

When BH3-only protein signals overcome pro-survival sequestration, **BAK** and/or **BAX** undergo a conformational change: their BH3 helix becomes exposed, they homo-oligomerize (or hetero-oligomerize BAK-BAX), and insert into the MOM to form supramolecular pores [^czabotar2014].

Key mechanistic points:
- **BAK** is constitutively anchored at the MOM via its C-terminal transmembrane domain; it is held in check by sequestration to MCL-1 and VDAC2. BIM or tBID can directly activate BAK.
- **BAX** is predominantly cytoplasmic in healthy cells; it is recruited to the MOM and inserted upon activation by direct activators (BIM, tBID) or sustained BH3-mediated displacement.
- **BOK** (a third effector) can trigger MOMP independently of BAK/BAX in some contexts and is regulated at the level of protein stability (ER-associated degradation), but its contribution to physiological cell death and to aging contexts is not well characterized. #gap/no-mechanism
- The oligomeric pore has been proposed to involve **cardiolipin** (mitochondrial-specific phospholipid) as a scaffold for BAX insertion and pore expansion; this model (Kuwana lab) remains mechanistically contested for endogenous (non-lipid-supplemented) conditions. #gap/contradictory-evidence
- **MOMP releases:** cytochrome c (→ [[apaf-1]] → apoptosome), SMAC/DIABLO (→ XIAP inhibition → caspase activation), AIF, EndoG, Omi/HtrA2.
- **OPA1** cristae remodeling gates cytochrome c accessibility before MOMP fully opens cristae junctions; this provides a partial amplification loop (Frezza 2006, cited on [[cytochrome-c]] page).

## BH3-binding selectivity governs "primed-for-death" state

**BH3 priming** describes the fraction of a cell's pro-survival BCL-2 family members occupied by pro-apoptotic BH3 proteins at steady state [^letai2008]. Highly primed cells (pre-occupied pro-survival members) require only a small additional BH3 stress signal to cross the MOMP threshold. BH3 profiling measures this empirically.

Aging-relevant consequence: senescent cells accumulate high BIM levels (via FOXO3 and other transcriptional programs) while also upregulating BCL-2/BCL-xL/MCL-1. The net priming state varies by cell type and determines which BH3-mimetic selectively kills each senescent population (SCAP specificity, see below).

## SCAP: cell-type-specific anti-apoptotic pathways in senescent cells

A distinguishing feature of senescent cells is their upregulation of specific pro-survival BCL-2 family members — their **SCAP** — which can be exploited therapeutically (senolysis). Critically, SCAP composition is **cell-type-specific**, not a universal "BCL-2 dominance" [^bcl2corrected][^bclxlcorrected]:

| Cell type (senescent) | SCAP composition | Effective senolytic approach |
|---|---|---|
| **HUVECs** (endothelial) | BCL-xL dominant; EFNB1 + PI3KCD secondary | A-1331852 (BCL-xL selective) or navitoclax; fisetin (Zhu 2017) |
| **IMR90** (lung fibroblasts) | **Triple: BCL-2 + BCL-xL + BCL-w** (all three required; single-member knockdown insufficient) | Navitoclax (all three), or simultaneous ABT-199 + A-1331852 + BCL-w inhibitor |
| **Preadipocytes** | Ephrins / PI3Kδ / p21 / PAI-2 — **NOT BCL-2 family** | Dasatinib (ephrin signaling), not BH3-mimetics |
| **Cardiomyocytes** | BCL-xL elevated; non-canonical SASP (TGF-β2/GDF15/EDN3); not full senolytic dependence | Partial BCL-xL contribution — Anderson 2019 |
| **Aged HSCs** | BCL-2 / BCL-xL (navitoclax-sensitive per Chang 2016) | ABT-263 (navitoclax) [^chang2016] |

**Critical SCAP caveats:**
- The IMR90 triple-SCAP result (BCL-2 + BCL-xL + BCL-w all required) derives from Zhu 2016 Fig 4A-B and was confirmed on the bcl-2.md verification pass; the original [[bcl-xl]] page had this wrong (single BCL-xL dominance).
- The preadipocyte "not BCL-2 family" result is from Zhu 2015 Fig 1E/G and was corrected on the bcl-xl.md verification pass.
- These distinctions have direct translational consequences: navitoclax cannot selectively kill preadipocyte-lineage senescent cells in adipose tissue.

## Therapeutic targeting: BH3-mimetics

BH3-mimetics are small molecules that bind the BH3-binding groove of pro-survival BCL-2 family members, mimicking BH3-helix displacement [^oltersdorf2005][^souers2013][^czabotar2014]:

| Drug | Target | Ki / IC50 | Clinical status | Key aging-relevant finding |
|---|---|---|---|---|
| **Venetoclax** (ABT-199) | BCL-2 selective | BCL-2 Ki ~0.01 nM; BCL-xL Ki ~48 nM; MCL-1 Ki >444 nM | FDA-approved (CLL, AML) [^roberts2016] | Selective; avoids platelet toxicity from BCL-xL inhibition; insufficient for IMR90 SCAP alone |
| **Navitoclax** (ABT-263) | BCL-2 + BCL-xL + BCL-w | BCL-2 Ki <1 nM; BCL-xL Ki <1 nM; MCL-1 Ki ~550 nM | Phase 1/2 (oncology); senolytic trials active | Dose-limiting thrombocytopenia (BCL-xL in platelets); senolytic in HUVECs + IMR90 + aged HSCs [^chang2016] |
| **A-1331852** | BCL-xL selective | BCL-xL Ki 0.01 nM; BCL-2 Ki 11 nM | Preclinical | HUVEC + IMR90 senolytic; DT2216 PROTAC derivative avoids platelet toxicity |
| **ABT-737** | BCL-2 + BCL-xL + BCL-w | Similar to navitoclax | Preclinical (parent of navitoclax) | First-generation pan-BCL-2/xL/w inhibitor; proof-of-concept tool [^oltersdorf2005] |
| **S63845** | MCL-1 selective | MCL-1 Ki ~0.19 nM | Phase 1 oncology | Active where MCL-1 is the dominant SCAP; important resistance mechanism for navitoclax/venetoclax |
| **DT2216** (BCL-xL PROTAC) | BCL-xL (degrader) | Platelet-sparing via E3 ligase selectivity | Preclinical | Addresses navitoclax platelet toxicity; senolytic potential in BCL-xL-dependent cells |

**MCL-1 as resistance determinant:** MCL-1 is not inhibited by navitoclax (Ki ~550 nM) and is not inhibited by venetoclax. Acquired upregulation of MCL-1 is a primary mechanism of navitoclax/venetoclax resistance. MCL-1's extremely short half-life (~20–30 min; **exact value unsourced per mcl-1.md verifier — #gap/unsourced**) makes it dependent on ongoing translation; translation inhibitors (cycloheximide, homoharringtonine) can transiently suppress it but are too toxic for chronic use.

## Upstream stress integration

The BCL-2 family signaling network integrates multiple upstream stress signals:

| Upstream signal | BH3-only induced | Pro-survival response | Net bias |
|---|---|---|---|
| DNA damage / p53 activation | PUMA (p53 transcriptional target), NOXA (p53 target) | BCL-2/BCL-xL/MCL-1 upregulation possible | Context-dependent; acute damage → apoptosis; chronic → senescence |
| Growth factor withdrawal | BIM (FOXO3-driven; FOXO3 dephosphorylated when PI3K-AKT reduced), BMF | BCL-2/MCL-1 reduced | Pro-apoptotic shift; FOXO3-BIM axis links [[insulin-igf1]] withdrawal to apoptosis [^czabotar2014] |
| ER stress | BIM, PUMA, BIK (via CHOP/ATF4) | MCL-1 can be elevated acutely | Usually pro-apoptotic if sustained |
| Cytokine / survival signaling (AKT) | BAD phosphorylated and inactivated (Ser136) | BCL-2/MCL-1 transcriptionally upregulated via NF-κB | Pro-survival; [[pi3k-akt-pathway]] connects growth factor signaling |
| Hypoxia | BIM, BNIP3, NIX | MCL-1 may be upregulated | Mixed; BNIP3/NIX also drive mitophagy |

## Aging context

### Dysregulation in senescent cells

Senescent cells persistently upregulate BCL-2 family pro-survival members as part of their SCAP (see table above). This apoptosis resistance:
1. Enables accumulation of senescent cells with age despite elevated pro-apoptotic BH3-only expression.
2. Drives the SASP (the senescent secretory program mediated in part via NF-κB, which is itself partly sustained by survival signaling through BCL-2 family members).
3. Is cell-type-specific — the specific member(s) upregulated vary by cell type, explaining differential senolytic sensitivity.

Navitoclax cleared senescent hematopoietic stem cells in aged mice and rejuvenated aged HSC populations (reduced myeloid bias, improved engraftment) [^chang2016]. This is the best in-vivo evidence to date that BCL-2 family-mediated apoptosis resistance in senescent cells is reversible and functionally consequential in aging. #gap/needs-human-replication

### Apoptosis-senescence balance

See [[apoptosis]] (process page) for the dual paradox: both excessive apoptosis (stem cell depletion, tissue atrophy) and insufficient apoptosis (senescent cell accumulation) contribute to aging. The BCL-2 family signaling network is the molecular fulcrum. Appropriate cell-context calibration of this network is likely important for both cancer resistance (sufficient apoptosis for DNA-damaged cells) and tissue maintenance (sufficient survival for functional stem cells).

### Connection to [[mitochondrial-dysfunction]]

MOMP is by definition a mitochondrial event: permeabilization of the MOM releases IMS proteins including cytochrome c, disrupting ETC function and generating ROS. In aging, chronically-stressed mitochondria may be "primed" for MOMP (partially occupied pro-survival members), while at the same time, [[mitophagy]] impairment allows dysfunctional mitochondria to persist and amplify ROS signals. BCL-2/BCL-xL themselves also have non-apoptotic roles in regulating ER-mitochondria calcium transfer and mitochondrial fission/fusion dynamics. #gap/no-mechanism

## Limitations and knowledge gaps

- `#gap/contradictory-evidence` — PUMA classification as direct-activator vs sensitizer: tension between puma.md (direct activator) and bak.md + Chipuk 2010 (sensitizer/derepressor). Needs resolution in a dedicated verification pass.
- `#gap/unsourced` — BH3-binding selectivity matrix affinities (table above): values require primary source verification (Opferman 2003, Czabotar 2014, Chen 2005 FP assay literature). The BIM-MCL-1 value specifically was corrected from ~1 nM to ~74 nM by the mcl-1 verifier.
- `#gap/unsourced` — MCL-1 half-life (~20–30 min) remains unsourced per mcl-1.md verifier; flagged from Vogler 2025.
- `#gap/needs-canonical-id` — WikiPathways ID not confirmed; WP254 (Apoptosis), WP710, and WP4839 were candidates per seeder brief but could not be verified via WikiPathways API. Assign after manual check.
- `#gap/needs-human-replication` — Chang 2016 navitoclax HSC rejuvenation is in aged mice only; no equivalent human-aging trial data exists.
- `#gap/no-fulltext-access` — Chang 2016 (10.1038/nm.4010): green OA but permanent download failure (0 candidate URLs on 2026-05-04); quantitative HSC-rejuvenation outcomes cannot be verified. Singh 2019 (10.1038/s41580-018-0089-8): same failure mode.
- `#gap/no-mechanism` — BOK's contribution to physiological apoptosis and to aging contexts not well-characterized.
- `#gap/long-term-unknown` — Chronic BH3-mimetic dosing for senolysis in humans: long-term effects on tissue homeostasis (stem cells, immune cells, platelets) not established in aging contexts.
- `#gap/no-fulltext-access` — Czabotar 2014 (10.1038/nrm3722), Letai 2008 (10.1038/nrc2297), Souers 2013 (10.1038/nm.3048): permanently not_oa; selectivity-matrix quantitative affinities, BH3-profiling method details, and venetoclax in-vitro dose-response claims cannot be verified against full text.
- Zhu 2015 / Zhu 2016 DOIs exhibit BUG-2 archive mismatch pattern (wrong papers returned by DOI lookup); SCAP claims on this page are inherited from bcl-xl.md, bcl-2.md, and apoptosis-pathway.md verified pages rather than independently verified from primary PDFs.

## Footnotes

[^chipuk2010reunion]: doi:10.1016/j.molcel.2010.01.025 · Chipuk JE, Moldoveanu T, Llambi F, Parsons MJ, Green DR. "The BCL-2 Family Reunion" · Mol Cell 2010;37(3):299-310 · review · model: in-vitro mechanistic + structural · **locally available PDF — verified** · 1,398 citations · canonical framing reference; confirms three-tier architecture; PUMA classified as sensitizer/derepressor (Fig 1B); BAX/BAK structural BH4 motif noted (p. 299); direct-activator vs sensitizer/derepressor framework; unified consensus that both modes operate in cells

[^czabotar2014]: doi:10.1038/nrm3722 · Czabotar PE et al. "Control of apoptosis by the BCL-2 protein family: implications for physiology and therapy" · Nat Rev Mol Cell Biol 2014 (published Dec 2013) · review · model: human and biochemical · **not_oa; no local PDF** · 3,113 citations · comprehensive structural and mechanistic review; source for BH3-binding selectivity + therapeutic targeting overview

[^singh2019]: doi:10.1038/s41580-018-0089-8 · Singh R & Green DR "Regulation of apoptosis in health and disease: the balancing act of BCL-2 family proteins" · Nat Rev Mol Cell Biol 2019 · review · model: human cell-line + in-vivo mammalian · **green OA (PMC7325303); permanent download failure (0 candidate URLs — cannot verify against full PDF)** · #gap/no-fulltext-access · 1,965 citations

[^letai2008]: doi:10.1038/nrc2297 · Letai AG "Diagnosing and exploiting cancer's addiction to blocks in apoptosis" · Nat Rev Cancer 2008 · review · model: cell lines + patient samples · **not_oa; no local PDF** · 570 citations · BH3 profiling concept; primed-for-death framework

[^oltersdorf2005]: doi:10.1038/nature03579 · Oltersdorf T et al. "An inhibitor of Bcl-2 family proteins induces regression of solid tumours" · Nature 2005 · in-vitro + in-vivo (mouse xenograft) · **locally available PDF — verified** · 3,356 citations · ABT-737 proof-of-concept; BCL-xL Ki ~1 nM (competitive FP), BCL-2 IC50 ~103 nM (10% serum), MCL-1 Ki >1 µM, A1 Ki >1 µM; mechanism is sensitizer/displacement (does not directly activate BAX/BAK); in-vivo at 25–100 mg/kg/day i.p. (n=9-10 mice/group); complete regression in 77% of H1963 SCLC tumours at 100 mg/kg/day; first selective BCL-2/xL/w inhibitor; ABT-263 (navitoclax) is the oral-bioavailable successor

[^souers2013]: doi:10.1038/nm.3048 · Souers AJ et al. "ABT-199, a potent and selective BCL-2 inhibitor, achieves antitumor activity while sparing platelets" · Nat Med 2013 · in-vitro + in-vivo (mouse xenograft) · **not_oa; no local PDF** · 2,918 citations · venetoclax (ABT-199) primary paper; BCL-2 selectivity over BCL-xL; platelet-sparing mechanism

[^roberts2016]: doi:10.1056/nejmoa1513257 · Roberts AW et al. "Targeting BCL2 with Venetoclax in Relapsed Chronic Lymphocytic Leukemia" · N Engl J Med 2016;374:311-22 (published January 28, 2016) · phase 1 dose-escalation + expansion · n=116 (56 dose-escalation + 60 expansion) · human (relapsed/refractory CLL or SLL) · **locally available PDF — verified** · 79% overall response rate (95% CI 71–86); 20% complete response rate (95% CI 13–28); 15-month PFS estimate 66% (dose-escalation cohort); 2-year OS 84%; dose-limiting TLS managed with ramp-up protocol; enrollment not restricted to 17p-del · AbbVie/Genentech funded

[^chang2016]: doi:10.1038/nm.4010 · Chang J et al. "Clearance of senescent cells by ABT263 rejuvenates aged hematopoietic stem cells in mice" · Nat Med 2016 · in-vivo (mouse) · **green OA; permanent download failure (0 candidate URLs — cannot verify against full PDF)** · #gap/no-fulltext-access · navitoclax cleared BCL-2/BCL-xL-dependent senescent HSCs; restored HSC regenerative capacity in aged mice; model: aged C57BL/6 mice — quantitative outcomes (% clearance, HSC engraftment, myeloid bias correction) unverified

[^bcl2corrected]: Zhu 2016 Fig 4A-B verified on bcl-2.md verification pass 2026-05-04: IMR90 senolysis requires triple BCL-2 + BCL-xL + BCL-w knockdown; single-member knockdown insufficient. DOI exhibits BUG-2 archive mismatch — primary Zhu 2016 doi sourced from bcl-2.md verified claims.

[^bclxlcorrected]: Zhu 2015 Fig 1D/E/G verified on bcl-xl.md verification pass 2026-05-04: preadipocyte SCAP is ephrins/PI3Kδ/p21/PAI-2 (not BCL-2 family); BCL-xL dominates in HUVECs. DOI exhibits BUG-2 archive mismatch — sourced from bcl-xl.md verified claims.
