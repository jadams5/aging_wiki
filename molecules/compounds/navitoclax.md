---
type: compound
aliases: [ABT-263, ABT263, "ABT 263"]
pubchem-cid: 24978538
inchikey: JLYAXFNOILIKPP-KXQOOQHDSA-N
chembl-id: CHEMBL443684
drugbank-id: DB12340
cas-number: 923564-51-6
mechanisms: [senolytic, BH3-mimetic, BCL-2-family-inhibitor]
targets: ["[[bcl-xl]]", "[[bcl-2]]", "[[bcl-w]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[cellular-senescence]]"]
clinical-stage: phase-2
human-evidence-level: limited
half-life: "~7–10 h (rat) [Tse 2008]; ~11.3 h in male Wistar rat at 10 mg/kg IP per Falahatgaroshibi 2026; clinical PK data from CLL trials"
translation-gap: translation-blocked-safety
next-experiment: "BCL-xL-selective PROTAC clinical trial (DT2216 or PZ15227-successor) demonstrating senolysis without thrombocytopenia in aged adults; n>=50. Note: UBX1325/foselutoclax (Klier 2025 NEJM Evidence) achieves the equivalent goal via local intravitreal delivery in DME — first BCL-xL-axis senolytic Phase 2 RCT with positive efficacy trend."
clinical-trials-active: 11
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-08
verified-by: claude
verified-scope: "Tse 2008, Zhu 2016, Yosef 2016, Roberts 2012 (supplementary + abstract), Roberts 2016, He 2020 PDFs verified end-to-end. Chang 2016 (10.1038/nm.4010) permanently unverifiable — 0 OA candidate URLs, status: failed; all Chang 2016 claims remain #gap/no-fulltext-access. Roberts 2012 main article text not in local archive; key numbers cross-checked against Crossref abstract and supplementary DLT table (partial). Canonical-database identity fields (PubChem CID, InChIKey, CAS, ChEMBL, DrugBank) not independently re-verified against databases — flag for next lint pass. R34 recency refresh 2026-05-08: added Falahatgaroshibi 2026 (Pharmaceuticals — navitoclax post-stroke neuroprotection in young Wistar rats, abstract-level), Delval 2026 (Aging Cell — ABT-263 in aged-mouse influenza, abstract-level), Novais 2026 (Bone Res — navitoclax negative for SM/J mouse intervertebral disc degeneration vs D+Q positive, abstract-level). 11 active oncology trials confirmed via ClinicalTrials.gov 2026-05-08; 0 senolytic-aging trials. New-source PDFs not independently end-to-end verified."
---

<!-- verified 2026-05-04: Tse 2008, Zhu 2016, Yosef 2016, Roberts 2012, Roberts 2016, He 2020 PDFs read end-to-end. Chang 2016 (10.1038/nm.4010) permanently failed download (green-OA, 0 candidate URLs) — claims from that paper remain #gap/no-fulltext-access. -->

# Navitoclax (ABT-263)

Navitoclax is an orally bioavailable BH3-mimetic small molecule that inhibits the anti-apoptotic proteins [[bcl-xl|BCL-xL]], [[bcl-2|BCL-2]], and [[bcl-w|BCL-W]] with sub-nanomolar affinity. Originally developed by Abbott Laboratories (now AbbVie) as a cancer therapeutic, navitoclax is the first BH3-mimetic demonstrated to act as a **senolytic** — selectively killing [[cellular-senescence|senescent cells]] of specific types by disabling the survival advantage those cells gain from upregulated BCL-2 family members [^zhu2016][^yosef2016]. Its on-target toxicity (thrombocytopenia from BCL-xL inhibition in platelets) limits therapeutic dosing and has motivated the development of next-generation BCL-xL-selective degraders such as [[a1331852]] and PROTAC compounds.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 24978538 |
| ChEMBL ID | CHEMBL443684 |
| DrugBank ID | DB12340 #gap/needs-canonical-id |
| CAS | 923564-51-6 |
| InChIKey | JLYAXFNOILIKPP-KXQOOQHDSA-N |
| Molecular formula | C₄₇H₅₅ClF₃N₅O₆S₃ |
| Molecular weight | 974.6 g/mol |
| Drug class | BH3-mimetic; BCL-2 family inhibitor |
| Parent compound | ABT-737 (non-oral precursor; same targets, similar Kd values) |

Navitoclax is the orally bioavailable derivative of ABT-737. Both compounds share a thiophenyl sulfonamide scaffold. The key structural advance in navitoclax was modification of ABT-737's piperazine linker to improve metabolic stability and oral absorption [^tse2008]. #gap/needs-canonical-id — DrugBank ID DB12340 provided in task brief; not independently verified via DrugBank API (403 error).

## Pharmacology

### Target affinities

| Target protein | Ki / Kd | Notes |
|---|---|---|
| BCL-xL ([[bcl-xl]]) | ≤0.5 nM (FPA); 0.40 nM (TR-FRET) | Primary liability for thrombocytopenia [^tse2008] |
| BCL-2 ([[bcl-2]]) | ≤1 nM (FPA) | Oncology target [^tse2008] |
| BCL-W ([[bcl-w]]) | ≤1 nM (FPA) | [^tse2008] |
| MCL-1 ([[mcl-1]]) | 550 ± 40 nM (IC50, FPA) | Not a meaningful MCL-1 inhibitor; IC50 reported not Ki [^tse2008] |
| BCL-2A1 / A1 | 354 ± 63 nM (IC50, FPA) | Weaker than MCL-1; IC50 reported not Ki [^tse2008] |

FPA = fluorescence polarization assay; TR-FRET = time-resolved FRET. Ki values for BCL-xL, BCL-2, BCL-w; IC50 values reported for MCL-1 and A1 (per Tse 2008 Table 1 note). TR-FRET Ki for BCL-xL = 0.40 nM, confirming sub-nanomolar affinity. #gap/needs-human-replication — these are in vitro biochemical affinities; cellular potency depends on co-factors, competition with endogenous BH3 proteins, and cellular BCL-2 family expression levels.

### Pharmacokinetics

- **Oral bioavailability:** well-absorbed in rodents and humans; formulated for oral administration (ABT-737 was parenteral only) [^tse2008]
- **Half-life:** ~7–10 h in rat; clinical half-life in CLL patients reported as ~14–19 h (varies by dose) #gap/unsourced — clinical PK numbers require verification against Roberts 2012 primary data
- **Protein binding:** highly protein-bound (>99%), consistent with hydrophobic scaffold
- **Metabolism:** hepatic; cytochrome P450-mediated; active metabolites documented in preclinical species

## Mechanism of action

Navitoclax is a **BH3-mimetic**: a synthetic compound that mimics the BH3 helix of pro-apoptotic proteins such as [[bim]], [[bid]], and [[bad]] and competes for the BH3-binding groove of anti-apoptotic BCL-2 family members. The mechanism proceeds as follows:

1. **Displacement of BH3-only activators:** BCL-xL, BCL-2, and BCL-W normally sequester [[bim|BIM]] and [[bid|BID]] (direct activators). Navitoclax out-competes this sequestration, freeing BIM/BID to act on [[bak|BAK]] and [[bax|BAX]] [^tse2008].
2. **BAK/BAX activation → MOMP:** Freed BIM/BID insert into the outer mitochondrial membrane and trigger conformational changes in BAK and BAX, leading to mitochondrial outer membrane permeabilization (MOMP) [^tse2008].
3. **Cytochrome-c release → apoptosome:** MOMP releases [[cytochrome-c]], which assembles with [[apaf-1]] into the [[apoptosis-pathway|apoptosome]], activating [[caspase-9]] → [[caspase-3]] cascade → apoptosis.
4. **MCL-1 is NOT targeted:** navitoclax does not appreciably inhibit MCL-1 (Ki ~550 nM). In cell types where MCL-1 is the dominant survival factor (e.g., senescent preadipocytes — see below), navitoclax has minimal senolytic activity [^zhu2016].

The triple BCL-2 + BCL-xL + BCL-W co-inhibition is mechanistically consistent with the finding that IMR90 senescent cell survival requires all three family members: Zhu 2016 showed that single knockdown of BCL-2, BCL-xL, or BCL-W alone does not recapitulate navitoclax senolysis in IMR90 cells — only triple knockdown of BCL-2 + BCL-xL + BCL-W does [^zhu2016].

See [[bcl-2-family-signaling]] for the broader BCL-2 family apoptosis checkpoint model and [[apoptosis-pathway]] for the full intrinsic pathway.

## Senolytic activity

### Key verifier-confirmed cell-type specificity

> **Critical correction from bak.md verifier pass:** Zhu 2016 specifically showed that navitoclax is senolytic in HUVECs and IMR90 senescent cells but **NOT in senescent preadipocytes**. Preadipocyte senolysis is governed by a different SCAP (Senescent-Cell Anti-Apoptotic Pathway) involving ephrins, PI3Kδ, and p21/PAI-2, not BCL-2/BCL-xL/BCL-W. Do not generalize navitoclax's senolytic activity across cell types [^zhu2016].

> **Critical correction from bcl-xl.md verifier pass:** Navitoclax is NOT cited in Zhu 2015 (that paper used dasatinib + quercetin). The primary sources for navitoclax senolysis are Zhu 2016 and Yosef 2016.

| Senescent cell type | Navitoclax senolytic? | Dominant SCAP | Source |
|---|---|---|---|
| HUVECs (endothelial, IR-induced) | Yes | BCL-xL (primary) | [^zhu2016] |
| IMR90 (lung fibroblasts, IR-induced) | Yes | BCL-2 + BCL-xL + BCL-W (triple) | [^zhu2016][^yosef2016] |
| Senescent preadipocytes | No | Tyrosine kinase pathways (dasatinib-targeted; specific SCAP components from Zhu 2015, not Zhu 2016) | [^zhu2016] |
| Aged mouse HSCs (in vivo) | Yes (indirect — clears BM niche) | BCL-xL / BCL-W | [^chang2016] |
| Mouse MSC (muscle satellite cells, in vivo) | Yes (functional rejuvenation of aged muscle) | BCL-xL / BCL-W | [^chang2016] |

**Preadipocyte clarification:** Zhu 2016 demonstrated that BCL-2, BCL-xL, and BCL-w siRNA combinations are NOT senolytic in primary human preadipocytes, and navitoclax does not kill senescent preadipocytes [^zhu2016]. Zhu 2016 attributes this to senescent preadipocytes relying on "tyrosine kinase pathways targeted by dasatinib" rather than BCL-2 family members, but does not name the specific SCAP components (ephrins, PI3Kδ, p21, PAI-2 — those details are from Zhu 2015). The combination of dasatinib + quercetin (not navitoclax) was active in preadipocyte-type senescence in Zhu 2015.

**IMR90 dual-SCAP (Yosef 2016):** Yosef 2016 showed, in IMR90 senescent cells (DIS model), that **BCL-W + BCL-xL dual knockdown** was required for senolysis — BCL-xL siRNA alone reduced viability only minimally, and the combined BCL-W + BCL-xL knockdown produced a synergistic ~53% reduction in cell viability [^yosef2016]. Importantly, Yosef 2016 used **ABT-737** (the non-oral precursor) pharmacologically, not navitoclax (ABT-263); A1331852 is not tested or mentioned in Yosef 2016. Zhu 2016 extended this by showing that triple BCL-2 + BCL-xL + BCL-W knockdown is required to recapitulate navitoclax phenotype in IMR90 (consistent with navitoclax's broad triple-inhibition profile) [^zhu2016].

### Chang 2016 — in vivo aged mouse senolysis

Chang et al. 2016 (Nat Med) administered navitoclax (ABT-263) to aged irradiated mice and aged unirradiated mice in an intermittent dosing protocol [^chang2016]:

- **Radiation model:** irradiated mice treated with ABT-263 showed clearance of p16Ink4a-high senescent cells in bone marrow and peripheral blood; aged HSC function was restored (competitive repopulation assays)
- **Aged unirradiated model:** ABT-263 in naturally aged mice improved grip strength, treadmill endurance, and hair regrowth; reduced senescent-cell burden (p16/p21 IHC) in fat, muscle, and bone
- **Dosing schedule:** intermittent (several days/month) rather than continuous; consistent with a "hit-and-run" mechanism targeting cells sensitized by upregulated BCL-2 family members

#gap/needs-human-replication — all Chang 2016 data is in aged C57BL/6 mice. No human senolytic trial data for navitoclax exists as of 2026.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BCL-2 family apoptosis pathway is conserved |
| Phenotype conserved in humans? | partial — senescent cell accumulation conserved; BCL-2 family SCAP profile in human senescent cells not fully mapped |
| Replicated in humans? | no — mouse data only for senolysis context |

**Note on archive status:** Chang 2016 (`10.1038/nm.4010`) is permanently unverifiable via local archive — re-download attempted 2026-05-04, archive reports 0 candidate OA URLs (green-OA URL resolves to publisher page with no direct PDF). All claims from this paper are cited from abstract and secondary sources only; marked #gap/no-fulltext-access. If a PMC author manuscript becomes available, re-verify group sizes, dosing schedules, and functional endpoint p-values.

## Cancer clinical context

### BCL-2 family inhibition in hematologic malignancies

Navitoclax was developed primarily as an oncology agent, targeting BCL-2-dependent survival of malignant lymphocytes. Key clinical data:

**Phase I CLL — Roberts 2012:**
At doses ≥110 mg/day in relapsed/refractory CLL patients, 35% (9/26 evaluable) achieved partial response; 7 maintained stable disease >6 months [^roberts2012]. Dose-limiting toxicity: **thrombocytopenia from BCL-xL inhibition in platelets** — platelet count drops occurred within hours of first dose due to induction of apoptosis in platelets (which depend on BCL-xL for survival). This was on-target and dose-related [^roberts2012].

**BCL-xL on-target platelet toxicity:**
Platelets are non-nucleated anucleate cells that cannot upregulate anti-apoptotic proteins in response to stress; they depend constitutively on BCL-xL for survival. Navitoclax-mediated BCL-xL inhibition rapidly induces platelet apoptosis, causing platelet count decreases of 50–90% at therapeutic doses. This mechanism-based toxicity is the primary reason navitoclax did not advance to CLL/NHL registration despite clinical activity [^roberts2012].

**Venetoclax — the BCL-2-selective successor:**
This limitation directly motivated the development of venetoclax (ABT-199), a BCL-2-selective inhibitor that spares BCL-xL and therefore does not cause significant thrombocytopenia. Venetoclax's clinical development was advanced by Roberts et al. 2016 (NEJM), a Phase I dose-escalation study in relapsed/refractory CLL/SLL (n=116) showing 79% overall response rate and a manageable safety profile [^roberts2016]. Note: FDA approval was subsequently based on additional trials; Roberts 2016 is the Phase I study establishing clinical proof-of-concept. The venetoclax development path illustrates the target-selectivity challenge when BCL-xL inhibition is both therapeutically desired (senolysis) and dose-limiting (platelet toxicity).

## Next-generation BCL-xL inhibitors for senolysis

The on-target thrombocytopenia of navitoclax has spurred development of BCL-xL-selective compounds and PROTAC degraders that reduce platelet toxicity while retaining senolytic activity:

- **[[a1331852]]** — selective BCL-xL inhibitor (Ki <0.01 nM); A1331852 is NOT tested in Yosef 2016 (that paper uses ABT-737). A1331852's senolytic activity in HUVECs and IMR90 cells is from separate work (He 2020 and related studies reference A-1331852 as a known BCL-xL-selective tool compound). #gap/needs-citation — the specific primary source for A1331852 senolysis needs to be identified and cited. Still inhibits BCL-xL in platelets; thrombocytopenia risk not eliminated.
- **PROTAC BCL-xL degraders (e.g., He 2020 Nat Commun):** PROTAC compounds recruit E3 ubiquitin ligases (e.g., VHL or CRBN) to BCL-xL for proteasomal degradation. Because CRBN expression is low in platelets, CRBN-recruiting PROTACs degrade BCL-xL selectively in nucleated senescent cells while sparing platelets. He et al. 2020 demonstrated >37-fold improvement in platelet toxicity index (EC50-PLTs/EC50-IR-SCs: PZ = 3.0/0.29 µM = 10.3; ABT-263 = 0.15/0.54 µM = 0.28; ratio >37×) in senescent WI38 cell/platelet assays in vitro [^he2020]. PZ also cleared SCs in naturally aged mice without severe thrombocytopenia at 41 µmol/kg IP q3d (n=8–10/group) [^he2020]. #gap/needs-replication — single study; IP-only route; oral bioavailability of PZ is limited

## Aging relevance

Navitoclax is one of the foundational tools that established **senolysis as a therapeutic strategy for age-related tissue dysfunction** [^chang2016]:

1. Chang 2016 was the first study to demonstrate that intermittent senolytic dosing in aged mice (not just young irradiated mice) could improve functional metrics of aging (muscle, fat, bone, hair)
2. Zhu 2016 established the mechanistic basis — senescent cells upregulate BCL-2 family members as part of their SCAP, and navitoclax targets these directly — linking senolytic mechanism to the [[apoptosis-pathway|intrinsic apoptosis pathway]]
3. The cell-type specificity of navitoclax senolysis (HUVECs and IMR90 yes; preadipocytes no) established that **senolysis is not a pan-cellular phenomenon** and that different senescent cell types rely on distinct SCAPs — a critical framing for the entire senolytics field

Navitoclax and its derivatives are classified under [[sens-damage-categories|ApoptoSENS]] (SENS strategy: elimination of cells that should die but don't — i.e., senescent cells with dysregulated apoptosis resistance).

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[cellular-senescence]] | Selectively kills senescent HUVECs, IMR90, aged HSCs, MSCs; reduces p16/p21 burden in mouse fat, muscle, bone | [^zhu2016][^yosef2016][^chang2016] |
| [[stem-cell-exhaustion]] | Restores aged HSC competitive repopulation capacity after clearance of senescent BM niche cells | [^chang2016] |
| [[chronic-inflammation]] | Indirect — reduces SASP (senescent cells cleared); not directly anti-inflammatory | [^chang2016] |

## Clinical trials

**Oncology (historical context for thrombocytopenia characterization):**

| Trial | Phase | Setting | Primary finding |
|---|---|---|---|
| Roberts 2012 JCO | Phase I | Relapsed/refractory CLL | 35% PR at ≥110 mg/day; dose-limiting thrombocytopenia from BCL-xL [^roberts2012] |

**Senolysis (preclinical only as of 2026):**

No registered human senolytic trial for navitoclax has been identified as of 2026-05-08. The thrombocytopenia liability makes systemic navitoclax unlikely to advance as a stand-alone senolytic in healthy aged individuals; ongoing effort focuses on next-generation BCL-xL-selective PROTACs (e.g., He 2020) and **local delivery approaches** — the most clinically advanced of which is UBX1325/foselutoclax (intravitreal BCL-xL-selective small molecule), which cleared a positive Phase 2 RCT trend in diabetic macular edema (Klier 2025 *NEJM Evid* [^klier2025]; +5.6 ETDRS letters at 48 wk vs sham, 95% CI −1.5 to 12.7, n=65). #gap/needs-human-replication for **systemic** navitoclax senolytic indication remains the operative gap.

**Active navitoclax trials (ClinicalTrials.gov, 2026-05-08): 11 total — all oncology indications** (CLL/SLL, MCL, MF, MDS/AML, ALL, HGSC/TNBC, melanoma, MPN, solid tumors). **Zero** senolytic-aging or non-oncology aging-relevant trials. The senolytic clinical pipeline for navitoclax has effectively been replaced by next-generation BCL-xL inhibitors (PROTACs, local-delivery agents like UBX1325).

## Recent preclinical findings (2024–2026)

**Falahatgaroshibi 2026 — navitoclax post-ischemic-stroke neuroprotection** [^falahatgaroshibi2026]: *Pharmaceuticals* 2026; young male Wistar rats, transient MCAO (60 min) followed by navitoclax 10 mg/kg IP every other day d3–13. Reported maximum plasma concentration 0.702 mg/L, half-life 11.33 h, brain parenchyma 0.04 ± 0.02 µg/g. **Functional outcomes:** tape-removal time reduced 66%; infarct area reduced 52%; SA-βgal -80%, lipofuscin -91%, Chk2 -69% in ischemic hemisphere. **Moderate thrombocytopenia at 10 mg/kg, severe at 30 mg/kg** — confirms on-target platelet liability persists at neuroprotection-effective doses. Proof-of-concept that targeting post-stroke senescent brain cells with a BH3-mimetic improves recovery; first ischemic-stroke senolytic context for navitoclax in archive. #gap/needs-human-replication — young (not aged) rat model; thrombocytopenia at therapeutic dose limits direct human translation as currently formulated.

**Delval 2026 — ABT-263 in aged-mouse influenza** [^delval2026]: *Aging Cell* 2026; ABT-263 dosing pre- and post-influenza A infection in aged mice. Did NOT prevent acute body-weight loss or reduce pulmonary viral load. **Did** significantly reduce lung inflammation, intestinal inflammation, virus-induced gut dysbiosis, and long-term pulmonary sequelae (edema, type II hyperplasia, emphysema, epithelial damage). Treatment lowered antigen-specific CD8+ T-cell responses but did not impair antibody production or reinfection defense. Most effects were age-dependent — implicating pre-existing senescent cells. Frames navitoclax as a senolytic-adjuvant in aged-host respiratory infection rather than an antiviral.

**Novais 2026 — navitoclax negative for IVD degeneration in SM/J mice** [^novais2026]: *Bone Res* 2026; SM/J mouse early-onset disc-degeneration model treated with **navitoclax** vs **dasatinib + quercetin (D+Q)**. **Navitoclax did NOT improve degeneration grade or reduce senescence markers.** D+Q reduced p19ARF/p21/SASP markers, improved disc cell viability and phenotype retention, retarded NP fibrosis. JUN-pathway inhibition in human degenerated NP cells phenocopied D+Q benefits. **Cell-type-mismatch interpretation:** disc senescent cells appear to require D+Q-class SCAP targeting (ephrin/PI3Kδ axis) rather than BCL-xL-axis, consistent with the established preadipocyte non-senolysis pattern (Zhu 2016). Reinforces the indication-cell-type-matching framework articulated on [[interventions/pharmacological/senolytics]].

**Cohl 2026 — ABT-263 + CXCR2 in HNSCC radioresistance** [^kohl2026]: *Radiat Oncol* 2026; ABT-263 sensitizes radioresistant HPV-negative HNSCC cells via NF-κB/CXCR2 SASP-arm engagement. Cancer-context senolytic, not aging-context — included for completeness; does not change navitoclax aging claims.

## Limitations and gaps

- **On-target thrombocytopenia** is the defining clinical liability: BCL-xL inhibition in anucleate platelets causes rapid, dose-related platelet count reduction. This is mechanism-based and not addressable by formulation or schedule changes for a BCL-xL inhibitor. #gap/long-term-unknown — chronic intermittent dosing effects on platelet recovery not fully characterized in aged humans.
- **Cell-type specificity:** navitoclax does NOT kill senescent preadipocytes; BCL-2 family knockdown is not senolytic in this cell type (Zhu 2016 attributes survival to tyrosine kinase pathways targeted by dasatinib, not BCL-2/xL/w) [^zhu2016]. Full senescent-cell burden clearance requires complementary agents (e.g., dasatinib or quercetin for preadipocyte-type senescence).
- **MCL-1 gap:** cells where MCL-1 dominates survival (e.g., some epithelial senescent populations) will be navitoclax-resistant. Combination with MCL-1 inhibitors (S63845, AMG-176) is being explored in oncology but not yet characterized in a senolysis context. #gap/no-mechanism for MCL-1-dominant senescent cells.
- **Chang 2016 human translation:** aging functional improvements (muscle, hair, fat) are in C57BL/6 mice only. No human senolytic data exists for navitoclax. #gap/needs-human-replication
- **PK data in aged individuals:** the clinical PK for navitoclax in CLL patients may not reflect PK in aged non-cancer humans (altered protein binding, hepatic metabolism, volume of distribution with age). #gap/dose-response-unclear
- **Chang 2016 fulltext unverifiable:** `10.1038/nm.4010` is green-OA but download failed in archive. Specific in vivo navitoclax dosing schedule, group sizes, and functional endpoint p-values from Chang 2016 are cited from the abstract only and should be verified against the primary PDF. #gap/no-fulltext-access

## Related entities

- [[apoptosis-pathway]] — intrinsic apoptosis pathway navitoclax engages
- [[bcl-xl]] — highest-affinity navitoclax target; thrombocytopenia mechanism
- [[bcl-2]] — co-target; BCL-2-selective successor venetoclax avoids platelet toxicity
- [[bcl-w]] — co-target required for IMR90 senolysis (with BCL-2 and BCL-xL)
- [[mcl-1]] — NOT inhibited by navitoclax (Ki ~550 nM); preadipocyte SCAP escape
- [[bim]] — BH3-only activator displaced from BCL-2/xL by navitoclax → BAK/BAX activation
- [[bak]] — effector activated downstream of BIM displacement; required for navitoclax senolysis
- [[bax]] — effector activated downstream; redundant with BAK in most senescent cell types
- [[a1331852]] — next-gen BCL-xL-selective inhibitor for senolysis; reduced thrombocytopenia liability vs navitoclax
- [[interventions/pharmacological/senolytics]] — senolytic drug class page
- [[dasatinib]] — complementary senolytic for preadipocyte-type senescence (different SCAP)
- [[quercetin]] — co-administered in D+Q combination (not navitoclax combination)
- [[cellular-senescence]] — target hallmark

## Footnotes

[^tse2008]: [[studies/tse-2008-abt263-bcl2-inhibitor]] · doi:10.1158/0008-5472.CAN-07-5836 · in-vitro biochemical + cancer cell lines + xenograft mouse (CB-17 SCID; 8–10 mice/group) · FPA Ki: BCL-xL ≤0.5 nM, BCL-2 ≤1 nM, BCL-w ≤1 nM; IC50: MCL-1 550 nM, A1 354 nM · oral bioavailability 20–50% (species/formulation dependent) · archive: local PDF (`10.1158_0008-5472.can-07-5836.pdf`)

[^zhu2016]: [[studies/zhu-2016-navitoclax-senolytic]] · doi:10.1111/acel.12445 · n=not specified (cell-line assays, multiple passages) · in-vitro · model: HUVECs, IMR90, preadipocytes (human) · archive: local PDF at `10.1111_acel.12445.pdf` — verifiable

[^yosef2016]: [[studies/yosef-2016-bcl-w-bcl-xl-senescence]] · doi:10.1038/ncomms11190 · n=not specified (cell-line + mouse) · in-vitro + in-vivo · model: IMR90 human lung fibroblasts; young C57BL/6 targeted-senescence mouse model · archive: local PDF at `10.1038_ncomms11190.pdf` — verifiable

[^chang2016]: [[studies/chang-2016-abt263-aged-hscs]] · doi:10.1038/nm.4010 · n=not specified (aged C57BL/6 + irradiated mice; multiple cohorts) · in-vivo · model: aged C57BL/6 mice + radiation-induced senescence model · archive: download failed — #gap/no-fulltext-access; claims cited from abstract/secondary

[^roberts2012]: [[studies/roberts-2012-navitoclax-cll-phase1]] · doi:10.1200/JCO.2011.34.7898 · n=29 enrolled; n=26 evaluable at ≥110 mg/day · phase I dose-escalation · model: relapsed/refractory CLL patients · 9/26 (35%) PR; 7 stable disease >6 mo; DLT = Grade 4 thrombocytopenia (mechanism: peripheral platelet destruction, normal megakaryocyte density on BM biopsy) · archive: local PDF is supplementary appendix only; main article text not in local archive — key numbers cross-checked against Crossref abstract and supplementary DLT table

[^roberts2016]: [[studies/roberts-2016-venetoclax-cll]] · doi:10.1056/NEJMoa1513257 · n=116 total (56 dose-escalation + 60 expansion cohort; relapsed/refractory CLL or SLL) · phase I dose-escalation + expansion · model: heavily pretreated human CLL/SLL patients · ORR 79% (92/116); CR 20%; 17p-deletion subgroup ORR 71% · archive: local PDF confirmed (`10.1056_nejmoa1513257.pdf`)

[^he2020]: [[studies/he-2020-protac-bcl-xl-senolytic]] · doi:10.1038/s41467-020-15838-0 · in-vitro + in-vivo · model: senescent WI38 and IR-induced senescent cells; naturally aged C57BL/6 mice (IP dosing, 41 µmol/kg q3d, n=8–10/group) · PROTAC PZ15227 targets BCL-xL to CRBN E3 ligase; >37-fold improved platelet toxicity index vs navitoclax · archive: local PDF (`10.1038_s41467-020-15838-0.pdf`) · #gap/needs-replication — single study, IP-only route

[^klier2025]: doi:10.1056/EVIDoa2400009 · Klier S et al. (UNITY Biotechnology) · *NEJM Evidence* 2025 May;4(5):EVIDoa2400009 · Phase 2 randomized sham-controlled · n=65 (UBX1325 32, sham 33) DME patients with prior suboptimal anti-VEGF response · single 10 µg intravitreal injection vs sham; 48-week follow-up · BCVA Δ at week 48: UBX1325 − sham +5.6 ETDRS letters (95% CI −1.5 to +12.7) · NCT04857996 · UBX1325/foselutoclax is a BCL-xL-selective small-molecule senolytic; local intravitreal delivery sidesteps systemic platelet toxicity. Verifier note: abstract-level extraction.

[^falahatgaroshibi2026]: doi:10.3390/ph19030431 · Falahatgaroshibi D, Baixauli-Martín J, Burguete MC, López-Morales MA, Aliena-Valero A, Peris JE, Salom JB · *Pharmaceuticals (Basel)* 2026 Mar 6;19(3):431 · in-vivo · model: young male Wistar rat (10 mg/kg + 30 mg/kg dose-finding; 6 × 10 mg/kg IP every-other-day d3–13 post 60-min tMCAO; n not stated in abstract) · Cmax 0.702 mg/L, t½ 11.33 h, brain parenchyma 0.04 ± 0.02 µg/g · tape-removal time -66%, infarct area -52%, SA-βgal -80%, lipofuscin -91%, Chk2 -69%; thrombocytopenia moderate at 10 mg/kg, greater at 30 mg/kg · **abstract-only verification** — full PDF not end-to-end verified.

[^delval2026]: doi:10.1111/acel.70480 · Delval L, Creskey M, Valentin C, Bordas C, Raviola S, Lipskaia L, Heumel S, Deruyter L, Sencio V, Wolowczuk I, Bernard D, Adnot S, Gosset P, Zhang X, Trottein F · *Aging Cell* 2026 Apr;25(4):e70480 · in-vivo · model: aged C57BL/6 mouse + influenza A infection · ABT-263 dosing (schedule and dose not stated in abstract) · no effect on viral load or weight loss; significantly reduced lung + intestinal inflammation; mitigated long-term pulmonary sequelae (edema, type II hyperplasia, emphysema, epithelial damage); reduced antigen-specific CD8+ responses without impairing antibody production/reinfection defense · **abstract-only verification** — full PDF not end-to-end verified.

[^novais2026]: doi:10.1038/s41413-026-00526-4 · Novais EJ, Ottone OK, Jagannath S, Akande EJ, Barve RA, Risbud MV · *Bone Res* 2026 Apr 14;14(1):42 · in-vivo · model: SM/J mouse intervertebral disc early-onset degeneration model · navitoclax vs D+Q systemic dosing (schedule not stated in abstract) · **navitoclax: no improvement in degeneration grade or senescence-marker reduction**; D+Q: reduced p19ARF/p21/SASP markers, improved disc cell viability + phenotype retention, retarded NP fibrosis; JUN-pathway inhibition in human NP cells phenocopied D+Q benefits · **abstract-only verification** — full PDF not end-to-end verified. Provides cell-type-specificity evidence: disc senescent cells require D+Q-class (ephrin/PI3Kδ-axis) SCAP, not BCL-xL-axis.

[^kohl2026]: doi:10.1186/s13014-026-02798-w · Kohl S, Schaper M, Lajarín JA, Subtil FSB, Engenhart-Cabillic R, Dikomey E, Adeberg S, Theiß U · *Radiat Oncol* 2026 Feb 12;21(1):33 · in-vitro · model: HPV-negative HNSCC cell lines (Cal33+) · ABT-263 sensitizes radioresistant HPV-negative HNSCC via NF-κB-dependent SASP; CXCR2 mechanistic linkage · cancer-context senolytic; not aging-context · **abstract-only verification**.
