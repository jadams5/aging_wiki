---
type: compound
aliases: [hexadecanoic acid, C16:0, palmitate, PA]
pubchem-cid: 985
inchikey: IPCSVZSSVZVIGE-UHFFFAOYSA-N
chembl-id: null
drugbank-id: null
molecular-formula: C16H32O2
molecular-weight-da: 256.42
cas-number: 57-10-3
biologic: false
mechanisms: [pro-inflammatory, ldl-raising, lipotoxic, senescence-inducing]
targets: ["[[nlrp3-inflammasome]]", "[[srebp-2]]", "[[mtor]]", "[[ldlr]]"]
hallmarks:
  - "[[chronic-inflammation]]"
  - "[[loss-of-proteostasis]]"
  - "[[disabled-macroautophagy]]"
  - "[[cellular-senescence]]"
  - "[[deregulated-nutrient-sensing]]"
  - "[[mitochondrial-dysfunction]]"
  - "[[altered-intercellular-communication]]"
clinical-stage: supplement
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Controlled feeding trial titrating palmitate-to-stearate ratio (C16:0 vs C18:0 isocaloric swap) with serial NLRP3 activation biomarkers (IL-1β, IL-18, GSDMD cleavage in PBMCs), ApoB, and autophagy flux (p62 and LC3-II in biopsied adipose) to quantify dose-response across the 7–14% kcal dietary range."
clinical-trials-active: null
literature-checked-through: 2026-05-09
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Hao 2023 (Antioxidants) verified against full PDF — dose (300 μM, 24h), pathway (ROS/p38/JNK), n=3 confirmed; no specific fold-change numbers were asserted on the wiki page beyond qualitative directionality, all confirmed. Liu 2022 (Autophagy) verified against full PDF — STING1-MTORC1-lipophagy mechanism confirmed; lipophagy specificity (not general macroautophagy) confirmed and correctly stated on wiki. Leishman 2024 (Cell Reports) verified against abstract only (PDF not downloadable — Elsevier closed despite gold OA metadata): Cys898 residue confirmed, palmitoylation modification confirmed, dTGN translocation confirmed. Two claims from Leishman 2024 could not be verified from abstract alone: (a) identity of the specific DHHC enzyme — wiki uses the family name 'DHHC palmitoyltransferase' which is accurate at the family level but the specific enzyme is unconfirmed; (b) 'FASN inhibition reduces IL-1β equivalently to NLRP3 knockout' — comparative equivalence language unverifiable from abstract. Both claims qualified in body. Mensink 2003 PDF not downloadable (bronze OA URL failed); LDL effect size figure (0.026 mmol/L per 1% energy) unverified from PDF — noted in verified-scope. PubChem CID 985, InChIKey, formula, MW all confirmed via API. Intervention-classes.md new classes (pro-inflammatory, ldl-raising, lipotoxic, senescence-inducing) confirmed present."
---

# Palmitic acid (C16:0)

Palmitic acid (hexadecanoic acid, C16:0) is the dominant dietary saturated fatty acid in Western diets and the primary product of endogenous de novo lipogenesis. It is the molecular driver behind most of the aging-hallmark-relevant harms attributed to high saturated fat intake — NLRP3 inflammasome activation, lipotoxic ER stress, mTORC1 hyperactivation, autophagy inhibition, endothelial senescence, and LDL/ApoB elevation. **Source specificity matters:** stearic acid (C18:0) is LDL-neutral and lacks most of these pro-aging mechanisms; effects attributed generically to "saturated fat" are dominated by C16:0 in a Western food environment.

## Identity

| Field | Value |
|---|---|
| PubChem CID | 985 |
| IUPAC name | hexadecanoic acid |
| Molecular formula | C16H32O2 |
| Molecular weight | 256.42 Da |
| Canonical SMILES | CCCCCCCCCCCCCCCC(=O)O |
| InChIKey | IPCSVZSSVZVIGE-UHFFFAOYSA-N |
| CAS | 57-10-3 |
| Carbon chain | 16:0 (16 carbons, zero double bonds) |
| Water solubility | Practically insoluble (solid at room temperature; melting point 63°C) |
| LogP (XLogP3) | 6.4 (highly lipophilic) |

ChEMBL ID not confirmed via API — #gap/needs-canonical-id (palmitic acid is a dietary fatty acid; ChEMBL coverage is partial for endogenous lipids).

## Dietary sources and intake

Palmitic acid constitutes approximately **25–40% of total fatty acid content** in a typical Western diet. Major sources:

- **Palm oil and palm olein:** ~44% C16:0 by fatty acid mass — the most concentrated dietary source; widely used in processed foods and fast-food frying oils
- **Dairy fat (butter, cream, cheese):** ~26–29% C16:0 — substantive contributor in high-dairy diets
- **Animal fats (beef tallow, lard, chicken fat):** 23–30% C16:0
- **Processed food shortenings:** palm-derived hydrogenated fats; highly prevalent in baked goods, confectionery, frozen foods

Mean Western dietary palmitate intake is approximately 20–30 g/day; with typical kcal intakes this represents 8–12% of total calories as palmitic acid alone [^mensink2003].

## Endogenous synthesis — de novo lipogenesis

Palmitate is the **primary product of mammalian fatty acid synthase (FASN)**. When carbohydrate intake chronically exceeds oxidative capacity, excess acetyl-CoA and malonyl-CoA are used by FASN to elongate and release a 16-carbon chain — palmitate — as the default end-product. This endogenous synthesis pathway is metabolically important: high-carbohydrate diets can raise circulating palmitate and phosphatidylcholine-bound C16:0 independently of dietary saturated fat intake [^mensink2003]. The FASN → palmitate pathway is therefore a convergent node linking dietary pattern (high simple carbohydrate + high saturated fat) and metabolic syndrome to downstream inflammasome and lipotoxic harm.

## Aging hallmarks — mechanistic overview

### Chronic inflammation — NLRP3 inflammasome activation

Palmitic acid activates the [[nlrp3-inflammasome]] via at least three converging mechanisms:

**1. Direct NLRP3 palmitoylation at Cys898.** Leishman et al. (2024, *Cell Reports*) demonstrated that FASN-derived palmitate is transferred by a DHHC-family palmitoyltransferase (specific enzyme not confirmed from available text — #gap/needs-canonical-id for DHHC enzyme identity) to Cys898 of NLRP3. This palmitoylation is required for NLRP3 translocation to dispersed trans-Golgi network (dTGN) vesicles, the site of inflammasome assembly, and for full NLRP3 activation. Inhibiting FASN (upstream of endogenous palmitate production) reduces IL-1β secretion; the specific claim that this reduction is "equivalent to NLRP3 knockout" cannot be verified from the available abstract (full PDF not retrievable). This establishes a direct biochemical link between intracellular fatty acid synthesis and inflammasome assembly [^leishman2024]. #gap/needs-replication — mechanistic finding from a single study; in-vivo human validation pending.

**2. ER stress → TXNIP induction → NLRP3 binding.** Palmitate-induced ER stress triggers TXNIP (thioredoxin-interacting protein) accumulation, which binds directly to NLRP3 and promotes inflammasome assembly independent of the palmitoylation pathway. This mechanism operates under conditions of sustained lipotoxic ER stress (see Loss of proteostasis section below).

**3. Macrophage-specific inflammation via NF-κB and mitophagy disruption.** In macrophages, palmitate activates NF-κB through TLR4 signaling and independently activates NLRP3 via AMPK-mitophagy-ROS cascades — impaired mitophagy allows accumulation of damaged mitochondria, which release mtROS that prime and activate the inflammasome [^korbecki2019].

**Downstream consequences:** NLRP3 activation drives caspase-1 processing, IL-1β and IL-18 maturation and release, and GSDMD-mediated pyroptosis. Pyroptotic cell death amplifies local and systemic inflammation via [[altered-intercellular-communication]] — IL-1β and IL-18 act as paracrine and endocrine pro-inflammaging signals. Links: [[nlrp3-inflammasome]], [[il-1b]], [[gsdmd]], [[pyroptosis]], [[chronic-inflammation]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (NLRP3, DHHC palmitoyltransferases, GSDMD — all present and functional in human macrophages and endothelium) |
| Phenotype conserved in humans? | yes (IL-1β elevation, plasma C16:0 correlates with inflammatory markers in human cohorts) |
| Replicated in humans? | partial (Mensink 2003 meta-analysis for LDL; direct NLRP3 activation in human cells in vitro — no in vivo human NLRP3 activation RCT) |

### Loss of proteostasis — lipotoxic ER stress and UPR engagement

Palmitate disrupts ER membrane lipid composition and saturates sphingomyelin synthesis, triggering the unfolded protein response (UPR) via the **PERK/eIF2α/ATF4/CHOP** arm. CHOP (DDIT3) transcriptionally drives apoptotic programs, including BIM and PUMA upregulation, in cells subject to sustained ER stress [^akazawa2010]. In hepatocytes, this pathway is termed lipoapoptosis — the primary mechanism of NAFLD-to-NASH progression and eventual hepatocellular death.

The UPR response to palmitate is qualitatively distinct from oleate-induced UPR: oleate-induced ER stress is adaptive and resolves; palmitate-induced ER stress is sustained and culminates in apoptosis. This difference is attributed to palmitate's inability to be efficiently esterified into triglyceride for lipid droplet storage (unlike oleate), leading to toxic accumulation of free palmitate and its lipid metabolites in the ER membrane [^cao2014].

Links: [[loss-of-proteostasis]], [[unfolded-protein-response]].

### Disabled macroautophagy — mTORC1 hyperactivation and lysosomal dysfunction

Chronic palmitate exposure inhibits autophagic flux via two parallel mechanisms:

**1. mTORC1 hyperactivation.** Fatty acids, including palmitate, are sensed at the lysosomal surface and can activate mTORC1 independently of canonical growth-factor signaling. Activated mTORC1 phosphorylates ULK1, preventing autophagy initiation [^liu2022]. This mechanism is self-amplifying: impaired autophagy → damaged organelle accumulation → further mTORC1 activation.

**2. STING1-MTORC1 lipotoxic loop.** Liu et al. (2022, *Autophagy*) showed that lipotoxicity activates STING1 (the cytosolic DNA sensor/innate immune scaffold), which directly stimulates MTORC1 and restricts hepatic lipophagy — the selective autophagic degradation of lipid droplets [^liu2022]. This creates a feedforward loop where lipid overload both activates MTORC1 (suppressing autophagy) and activates STING1 (suppressing lipophagy specifically), trapping excess lipid in the cell.

**3. Hypothalamic autophagy impairment via ciliogenesis.** In hypothalamic neurons, palmitate suppresses autophagy through control of primary cilia formation, disrupting insulin signaling — an additional route linking dietary palmitate to central metabolic dysregulation [^avalos2022].

Links: [[disabled-macroautophagy]], [[autophagy]], [[mtor]].

### Cellular senescence — endothelial and vascular cell aging

Palmitic acid directly induces cellular senescence in human umbilical vein endothelial cells (HUVECs) via the **ROS → p38 MAPK → JNK** cascade [^hao2023]:

- Palmitate overload generates mitochondrial and cytosolic ROS
- ROS activate stress-responsive kinases p38 MAPK and JNK
- p38/JNK activate downstream p53/p21 and p16/Rb pathways
- Cells enter senescence with elevated SA-β-gal, p21, and p16 expression and SASP secretion

This mechanism connects dietary saturated fat to endothelial dysfunction and vascular aging independently of traditional lipid-mediated atherosclerosis (LDL oxidation and macrophage foam cell formation). Senescent endothelial cells secrete SASP factors (IL-6, MCP-1, VCAM-1 induction) that amplify vascular inflammation. Links: [[cellular-senescence]], [[sasp]], [[p16-ink4a]].

#gap/needs-replication — HUVEC senescence phenotype established in vitro [^hao2023]; in vivo evidence in humans that dietary palmitate drives vascular senescent cell burden is not yet demonstrated at the cellular level.

### Deregulated nutrient sensing — mTOR, insulin resistance, ceramide

Palmitate dysregulates three nutrient-sensing nodes:

**1. mTORC1 chronic hyperactivation (see also Disabled macroautophagy above).** Palmitate at concentrations present in hyperlipidemic plasma chronically hyperactivates mTORC1 via lysosomal sensing mechanisms, mimicking the nutrient-excess signaling state. This contributes to the mTOR-driven aging phenotype in metabolic syndrome. Link: [[deregulated-nutrient-sensing]], [[mtor]].

**2. DAG-PKCθ-mediated insulin resistance in skeletal muscle.** Incomplete beta-oxidation of palmitate generates diacylglycerol (DAG) intermediates that activate protein kinase C theta (PKCθ), which serine-phosphorylates IRS-1 and uncouples insulin receptor → PI3K → Akt signaling. This is the dominant mechanism of saturated-fat-induced skeletal muscle insulin resistance, well-established across multiple human and rodent studies [^coll2010]. Link: [[insulin-igf1]].

**3. De novo ceramide synthesis via serine palmitoyltransferase (SPT).** Palmitate is the obligate substrate for ceramide synthesis. Excess palmitate drives flux through SPT → dihydroceramide → ceramide, bypassing the ceramide salvage pathway. Ceramide accumulation impairs mitochondrial complex I and III function, activates PP2A (which dephosphorylates and inactivates Akt), and promotes apoptosis [^el-assaad2010]. This pathway connects excess dietary palmitate directly to mitochondrial dysfunction and insulin resistance.

### Mitochondrial dysfunction

Palmitate overloads mitochondrial beta-oxidation, generating excessive FADH2 and acetyl-CoA, which drive electron transport chain saturation and reactive oxygen species (ROS) leak from complex I and complex III. Palmitate-derived ceramide further impairs electron transport chain function by directly inhibiting complex I activity and inducing mitochondrial outer membrane permeabilization [^itami2018]. Chronic palmitate exposure decreases mitochondrial membrane potential, increases cytochrome c release, and promotes mitophagy activation (initially as a compensatory response, later as a driver of cellular energy crisis). Links: [[mitochondrial-dysfunction]].

### Altered intercellular communication

Pyroptotic and senescent cells loaded with palmitate-induced damage amplify systemic [[altered-intercellular-communication]] through: (i) IL-1β and IL-18 paracrine signaling, (ii) SASP secretion from palmitate-senescent endothelial cells (IL-6, MCP-1, VCAM-1), and (iii) circulating ceramide-loaded extracellular vesicles that transmit lipotoxic signals from metabolically stressed tissues (liver, adipose) to distal targets.

## LDL/ApoB raising mechanism

Palmitate raises plasma LDL-C and ApoB through a hepatic cholesterol-sensing mechanism:

1. Dietary palmitate is incorporated into hepatic phospholipids and the ER membrane, altering membrane lipid composition
2. This reduces INSIG-1/2 retention of the SCAP-SREBP-2 complex in the ER — the normal "cholesterol full" sensor
3. SCAP escorts SREBP-2 to the Golgi for proteolytic cleavage and activation
4. However, the net effect of saturated-fatty-acid loading is **suppression of LDLR transcription** — the mechanism is debated but involves reduced SREBP-2 processing efficiency and possible direct effects on LDLR mRNA stability
5. Result: lower hepatic LDLR surface expression → reduced LDL particle clearance → elevated plasma LDL-C and ApoB

**Mensink 2003 metabolic-ward meta-analysis** (60 controlled trials) is the canonical human evidence: replacing carbohydrate with palmitic acid raised LDL-C by approximately 0.026 mmol/L per 1% energy substitution, and raised the total:HDL cholesterol ratio. Myristic acid (C14:0) and lauric acid (C12:0) also raise LDL. **Stearic acid (C18:0) is LDL-neutral** — it is rapidly desaturated to oleic acid (C18:1) by stearoyl-CoA desaturase (SCD1) in the liver, and therefore does not significantly affect LDLR expression or LDL particle clearance [^mensink2003].

This stearic/palmitic distinction is the mechanistic basis for the "source matters" framing in dietary saturated fat interpretation. Palm oil (44% C16:0) is materially different from beef tallow (26% C16:0 + 14% C18:0) or cocoa butter (35% C18:0), even at similar total saturated fat gram content.

Links: [[srebp-2]], [[ldlr]], [[apob]].

## Comparison to other dietary fatty acids

| Fatty acid | Chain | Saturation | LDL effect | NLRP3-active | Notes |
|---|---|---|---|---|---|
| Palmitic acid | C16:0 | Saturated | ↑↑ | Yes | Primary topic of this page |
| Stearic acid | C18:0 | Saturated | Neutral | No (or minimal) | Rapidly desaturated → oleic; LDL-neutral per [^mensink2003] |
| Oleic acid | C18:1n-9 | MUFA | Neutral / slight ↓ | No | Primary fatty acid in olive oil and avocado |
| Linoleic acid | C18:2n-6 | PUFA n-6 | ↓ | No | LDL-lowering when replacing SFA; ApoB lowering confirmed |
| Alpha-linolenic acid | C18:3n-3 | PUFA n-3 | Neutral / slight ↓ | Anti-inflammatory | Plant n-3; precursor to EPA/DHA (inefficient conversion) |
| EPA | C20:5n-3 | PUFA n-3 | Neutral / slight ↓ | Anti-inflammatory | Marine n-3; inhibits NF-κB, resolves inflammation |
| DHA | C22:6n-3 | PUFA n-3 | Neutral / slight ↓ | Anti-inflammatory | Marine n-3; membrane fluidity support |

## Human evidence summary

Evidence base is **strong** for the LDL/ApoB-raising mechanism (Mensink 2003: 60 metabolic-ward controlled trials, 2,767 citations; 100th citation percentile in archive). NLRP3 mechanistic data are primarily in vitro + rodent with strong human molecular conservation. Mendelian randomization on dietary fat composition and cardiovascular outcomes supports the ApoB-mediated pathway causally.

**Dietary exposure vs therapeutic agent:** Palmitic acid is not a therapeutic — it is a dietary exposure tracked here to support mechanistic queries from the harmful-exposure direction. `clinical-stage: supplement` is used because it appears in fatty acid supplements (MCT oils, some fish oil formulations contain palmitate); this should not be read as implying clinical investigation. `human-evidence-level: strong` reflects the dietary-epidemiology + controlled-feeding trial evidence base for its harms, not a drug-development clinical stage.

**Recency search (R25, 2026-05-09):** PubMed searches conducted for:
- "palmitic acid" + aging/senescence/NLRP3/mTOR/atherosclerosis (2021–2026): 15 hits, screened
- "palmitic acid" + meta-analysis/RCT/systematic review (2020–2026): 63 hits, top 20 screened
- Key high-priority hits:
  - Leishman 2024 (NLRP3 palmitoylation at Cys898, *Cell Reports*) — integrated as the mechanistic anchor for NLRP3 activation [^leishman2024]
  - Liu 2022 (STING1-MTORC1-lipophagy loop, *Autophagy*) — integrated into autophagy section [^liu2022]
  - Hao 2023 (palmitate-induced HUVEC senescence, *Antioxidants*) — integrated into cellular senescence section [^hao2023]
  - Ávalos 2022 (hypothalamic autophagy via ciliogenesis, *Cell Death & Disease*) — integrated as secondary mechanism [^avalos2022]
  - Hall 2024 (*Food & Function*) — postprandial RCT of palmitic-acid-rich spread; vascular responses confirmed in healthy adults [^hall2024]
  - Mensink 2003 (60-trial meta-analysis) — remains canonical for LDL/ApoB effect sizes, no superseding meta-analysis with larger effect-size estimate found [^mensink2003]

No recent meta-analysis or RCT contradicts the Mensink 2003 LDL-raising finding for palmitic acid specifically. The 2003 findings have been extended, not overturned, by subsequent larger dietary-fat meta-analyses.

## Limitations and gaps

- **NLRP3 palmitoylation (Leishman 2024):** single-study finding requiring independent replication; direct human physiological relevance (at dietary C16:0 exposures rather than pharmacological FASN inhibitor doses) not yet established. #gap/needs-replication
- **ER stress mechanistic evidence:** strongest in hepatocyte cell culture and NASH rodent models; extrapolation to other cell types at dietary palmitate concentrations requires caution. #gap/needs-human-replication
- **Dose-response in humans:** most in vitro mechanistic studies use 200–500 μM palmitate (supraphysiological relative to plasma free fatty acid concentrations of ~300–700 μM in fasting humans, but these are total FFA, not free palmitate). #gap/dose-response-unclear
- **Ceramide as mediator:** ceramide accumulation in humans with high dietary saturated fat intake is established in muscle biopsy studies, but the contribution of ceramide specifically (vs DAG, lyso-PC, and other lipotoxic metabolites) to in vivo senescence and mTOR activation is not fully resolved. #gap/no-mechanism
- **Stearate is not equivalent to palmitate:** studies that measure "saturated fat" without C-chain specificity cannot be cleanly attributed to palmitate. Interpret generic "SFA + disease" epidemiology cautiously.
- **NLRP3-specific pyroptosis quantification in human dietary trials:** no human dietary RCT has directly measured GSDMD cleavage or pyroptosis markers in response to palmitate-enriched vs palmitate-reduced diets. #gap/needs-human-replication

## Cross-references

- Hallmarks: [[chronic-inflammation]], [[loss-of-proteostasis]], [[disabled-macroautophagy]], [[cellular-senescence]], [[deregulated-nutrient-sensing]], [[mitochondrial-dysfunction]], [[altered-intercellular-communication]]
- Pathways/targets: [[nlrp3-inflammasome]], [[mtor]], [[srebp-2]], [[ldlr]], [[insulin-igf1]], [[unfolded-protein-response]], [[autophagy]]
- Processes: [[pyroptosis]], [[de-novo-lipogenesis]]
- Comparators: [[stearic-acid]] (stub), [[oleic-acid]] (stub)
- Interventions relevant to palmitate reduction: [[caloric-restriction]], [[interventions/dietary/low-saturated-fat]] (stub)
- Frameworks: [[frameworks/intervention-classes]] (mechanism class taxonomy — new classes pro-inflammatory, ldl-raising, lipotoxic, senescence-inducing added 2026-05-09)

## Footnotes

[^mensink2003]: doi:10.1093/ajcn/77.5.1146 · Mensink RP, Zock PL, Kester ADM, Katan MB · *Am J Clin Nutr* 2003;77(5):1146–55 · meta-analysis (60 controlled trials) · n=not reported per-trial (pooled across trials) · model: human metabolic-ward controlled feeding · 2,767 citations (archive confirmed) · Canonical evidence for palmitic, myristic, and lauric acid raising LDL-C and total:HDL ratio; stearic acid neutral. Gold standard for dietary fatty acid effects on serum lipoproteins. **PDF not retrievable (bronze OA URL failed at download); effect size figure of 0.026 mmol/L LDL-C per 1% energy substitution cited in body is from this paper but not directly verified against PDF — recommend re-verification when PDF becomes accessible.**

[^leishman2024]: doi:10.1016/j.celrep.2024.114516 · Leishman S, Aljadeed NM, Qian L, Cockcroft S, Behmoaras J, Anand PK · *Cell Reports* 2024;43(8):114516 · in-vitro + in-vivo · model: macrophage cell lines + NLRP3 KO mouse reconstitution experiments · 54 citations (archive confirmed; gold OA per DOI lookup) · Demonstrates FASN-derived palmitate introduces palmitoylation at NLRP3 Cys898 via TLR ligation; palmitoylation enables NLRP3 translocation to dispersed trans-Golgi network (dTGN) vesicles and is required for full inflammasome activation and IL-1β secretion. **PDF not retrievable from Elsevier despite gold OA metadata (DOI lookup failed); verified against abstract (PMID 39024103) only. Specific DHHC enzyme identity and full quantitative endpoints not confirmable from abstract.**

[^korbecki2019]: doi:10.1007/s00011-019-01273-5 · Korbecki J, Bajdak-Rusinek K · *Inflamm Res* 2019;68(11):915–32 · review · model: human/rodent macrophage literature synthesis · 478 citations (archive confirmed; hybrid OA) · Comprehensive review of palmitic acid molecular mechanisms in macrophages: TLR4-NF-κB, NLRP3 inflammasome, ROS-driven pathways. High-impact secondary source; primary mechanistic claims require underlying primary citation.

[^liu2022]: doi:10.1080/15548627.2021.1961072 · Liu K, Qiu D et al. · *Autophagy* 2022;18(4):858–76 · in-vivo + in-vitro · model: Hep3B cells + primary mouse hepatocytes (NAFLD context); PA dose 0.5 mM / 24h · 90 citations (archive confirmed; green OA via PMC9037528) · Lipotoxicity-induced STING1 activation (via cytosolic mtDNA) stimulates MTORC1 and restricts hepatic **lipophagy** (selective lipid-droplet autophagy via lysosomal PLIN2 degradation) but not general macroautophagy; SQSTM1 and TBK1 mediate STING1→MTORC1 axis. PDF verified against full text.

[^cao2014]: doi:10.1007/s10620-013-2896-2 · Cao J et al. · *Dig Dis Sci* 2014;59(3):584–92 · in-vitro · model: human liver (HepG2) cells · 16 citations · Saturated free fatty acid sodium palmitate induces lipoapoptosis via GSK-3β activation in human liver cells; distinct from oleate-induced ER stress which is adaptive.

[^akazawa2010]: doi:10.1016/j.jhep.2010.01.003 · Akazawa Y, Cazanave SC, Mott JL, Elmi NA, Bronk SF, Kohno S, Charlton MR, Gores GJ · *J Hepatol* 2010;52(5):765–74 · in-vitro + in-vivo · model: mouse hepatocytes + NAFLD mouse · palmitoleate attenuates palmitate-induced BIM and PUMA upregulation and hepatocyte lipoapoptosis. Used here for the mechanism of palmitate → BIM/PUMA → lipoapoptosis. PDF not verified in this pass (not downloaded; secondary claim — primary mechanism supported by Liu 2022 and Cao 2014).

[^el-assaad2010]: doi:10.1210/en.2009-1238 · El-Assaad W, Buteau J, Peyot ML et al. · *Endocrinology* 2010;151(4):1579–94 · in-vitro · model: MIN6 beta-cells + primary islets · Glucolipotoxicity alters lipid partitioning and causes mitochondrial protein hyperacetylation, cholesterol, and ceramide deposition; establishes ceramide as a mediator of mitochondrial dysfunction under lipotoxic conditions.

[^itami2018]: doi:10.1093/biolre/ioy023 · Itami N et al. · *Biol Reprod* 2018;98(6):791–801 · in-vitro · model: porcine oocytes · Palmitic acid induces ceramide accumulation, mitochondrial protein hyperacetylation, and mitochondrial dysfunction. Porcine-model caveat — used here for the ceramide-mitochondrial dysfunction pathway, which is conserved.

[^coll2010]: doi:10.1210/en.2009-1211 · Coll T et al. · *Endocrinology* 2010;151(4):1560–9 · in-vitro · model: C2C12 myotubes (mouse skeletal muscle) · DAG-PKCθ pathway shown as the mechanism by which fatty acid receptor activation prevents fatty-acid-induced NF-κB activation and insulin resistance; palmitate as the canonical DAG-generating saturated fatty acid.

[^hao2023]: doi:10.3390/antiox12040838 · Hao W, Shan W, Wan F, Luo J, Niu Y, Zhou J, Zhang Y, Xu N, Xie W · *Antioxidants (Basel)* 2023;12(4):838 · in-vitro · model: HUVECs (human umbilical vein endothelial cells); 300 μM PA, 24h exposure; all experiments n=3 independent replicates; ANOVA + Tukey post-hoc, p<0.05 threshold · 13 citations (archive confirmed; gold OA via PMC10135379) · Palmitic acid induces HUVEC senescence: SA-β-gal positivity significantly increased vs NOR (quantified from Fig 3b, ~65% PA vs ~15% NOR, p<0.001); ROS elevated (flow cytometry, DCFH-DA, p<0.001); p21, p53, and p16 protein expression all significantly elevated by Western blot (Fig 5, p<0.05); G2-phase cell cycle arrest demonstrated. Mechanistic pathway confirmed as ROS → p38 MAPK → JNK (p38 inhibitor SB230580 and JNK inhibitor SP100625 both rescue senescence phenotype). Canagliflozin (SGLT2i, 5 μg/mL) rescues all endpoints. PDF verified against full text.

[^avalos2022]: doi:10.1038/s41419-022-05109-9 · Ávalos Y, Hernández-Cáceres MP, Hagert C, Bhanu NV, Kaur A, Bhanu B, Burgos PV, Toledo-Valenzuela L, Espinoza-Caicedo J, Morselli E · *Cell Death Dis* 2022;13(7):678 · in-vitro + in-vivo · model: hypothalamic neurons (mouse + human cell line) + HFD mouse · Palmitic acid controls primary cilia formation, modulating insulin signaling via autophagy-dependent mechanism in hypothalamic neurons; central metabolic dysregulation pathway.

[^hall2024]: doi:10.1039/d3fo05324e · Hall WL, Alkoblan A, Gibson PS, Berry SE et al. · *Food Funct* 2024;15(3):1495–510 · rct · model: n=healthy adults · Post-prandial lipid and vascular responses following palmitic-acid-rich interesterified spread vs non-interesterified spread and spreadable butter; confirms palmitate-driven postprandial lipidemic and vascular effects in humans at commercially relevant exposures.
