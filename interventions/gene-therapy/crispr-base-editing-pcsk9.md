---
type: intervention
aliases: [VERVE-101, VERVE-102, in-vivo PCSK9 base-editing, somatic-cell base editing of PCSK9]
mode: gene-therapy
mechanisms: [pcsk9-knockout, base-editing, cardiovascular-geroprotection]
targets: ["[[pcsk9]]"]
target-hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: phase-1
safety-profile: investigational
translation-gap: phase-2-needed
next-experiment: "Phase 2 in primary CV-aging prevention in elderly patients with elevated Lp(a) or high polygenic CV risk score but no manifest disease; co-primary endpoints: ApoB reduction at 12 months + composite major adverse cardiovascular event (MACE) at 3 years; WGS off-target surveillance sub-study required."
clinical-trials-active: 2
literature-checked-through: 2026-05-08
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Cohen 2006, Komor 2016, Gaudelli 2017, Chadwick 2017 claims verified against local PDFs. Musunuru 2021 (Nature) and Lee 2022 (Circulation) are closed-access (not_oa); claims verified against PubMed abstracts only — full PDF cross-check not possible for those two papers. Commentary authors (pvad095, pvad103) corrected against PubMed metadata. ClinicalTrials.gov data verified against API (NCT05398029, NCT06164730). Canonical DB identity fields not independently re-verified. R34 recency pass (2026-05-08): PubMed VERVE-101/102/PCSK9 base-editing 2024–2026 returned 92 hits scanned for primary trial data. No peer-reviewed full Phase 1 heart-1 results paper has appeared since the 2024 pass (the Hermel 2024 AHA highlights review remains the most recent context-piece; only AHA 2023 conference data exist for VERVE-101). NCT05398029 status confirmed COMPLETED, NCT06164730 confirmed RECRUITING per ClinicalTrials.gov 2026-05-08; clinical-trials-active=2 unchanged. No edits required from this pass; the heart-1 publication gap remains."
---

# In-vivo CRISPR base-editing of PCSK9 (VERVE-101 / VERVE-102)

A single-administration in-vivo somatic-cell gene-editing therapy that permanently silences the hepatic *PCSK9* gene using adenine base-editing (ABE) delivered by lipid nanoparticles (LNPs), producing durable LDL cholesterol reduction without a double-strand DNA break. VERVE-101 (SaCas9-ABE8e + PCSK9-targeting guide RNA) entered Phase 1b (heart-1) in patients with heterozygous familial hypercholesterolemia (HeFH) and established cardiovascular disease, making it the first in-vivo base-editing therapeutic in human clinical trials. VERVE-102, a second-generation product using an engineered nuclease with improved precision, is currently recruiting (heart-2, Phase 1b). **Human evidence is limited to Phase 1b dose-escalation; no Phase 2 or hard cardiovascular endpoint data exist as of 2026-05-06.**

See [[pcsk9]] for full PCSK9 protein biology. #gap/needs-stub — [[pcsk9]] does not yet have a page; seed as R24+ priority.

---

## Base editing — the molecular mechanism

Classical CRISPR-Cas9 creates a double-strand break (DSB) that is repaired by error-prone non-homologous end-joining (NHEJ), generating insertion/deletion mutations (indels). Base editors instead make a precise single-nucleotide change without a DSB:

- **Cytosine base editor (CBE):** fuses a cytidine deaminase to a catalytically impaired Cas9 (nickase); converts C•G → T•A at a target position within the protospacer [^komor2016].
- **Adenine base editor (ABE):** fuses an engineered adenosine deaminase (evolved from *E. coli* TadA) to a nickase Cas9; converts A•T → G•C [^gaudelli2017]. ABEs produce no DSB, no indels, and show lower off-target editing rates than CBEs.

VERVE-101/102 use an **ABE targeting a splice-site or stop-codon-introducing locus** in *PCSK9* to permanently disrupt protein-coding function in hepatocytes. The guide RNA directs the editor to a PCSK9 intronic splice donor or coding sequence; after a single nucleotide conversion, the transcript is non-functional.

**Why no DSB matters clinically:** DSB-based editing can trigger p53 activation, chromosomal rearrangements, and large deletions. ABE's nick-only mechanism substantially reduces these risks — a critical safety argument for a geroprotective application in older patients who carry more pre-existing chromosomal fragility.

---

## PCSK9 biology and the loss-of-function precedent

PCSK9 (proprotein convertase subtilisin/kexin type 9) is a serine protease secreted by hepatocytes that binds the LDL receptor (LDLR) at the cell surface and directs it to lysosomal degradation, thereby reducing LDLR recycling and raising circulating LDL-C levels.

The therapeutic rationale is grounded in a landmark natural experiment: Cohen et al. 2006 identified naturally occurring *PCSK9* loss-of-function (LOF) variants (p.Y142X and p.C679X) in Black American participants of the ARIC cohort [^cohen2006]. Carriers of these variants had:

- ~28% lower LDL-C levels
- ~88% reduction in 15-year cumulative risk of coronary heart disease (CHD)
- No apparent adverse phenotype across all carriers studied

This is one of the strongest Mendelian randomization-style human genetics arguments in cardiovascular medicine: lifelong PCSK9 LOF, beginning at birth, confers exceptional protection against CHD with no detected cost. The gene-editing strategy is explicitly designed to reproduce this phenotype somatically in adulthood.

**Existing pharmacological and RNA targets:**

| Class | Example | Mechanism | Durability |
|---|---|---|---|
| PCSK9 monoclonal antibody | Alirocumab, evolocumab | Neutralizes circulating PCSK9 | ~2-week half-life; requires q2w/monthly dosing |
| PCSK9 siRNA (inclisiran) | Inclisiran | RNAi-mediated PCSK9 mRNA knockdown | Twice-yearly injection; reversible |
| PCSK9 base editing | VERVE-101/102 | Permanent gene inactivation in hepatocytes | Expected lifelong (somatic hepatocyte persistence) |

The base-editing approach offers theoretically permanent effect from a single administration — a significant practical advantage for a cumulative-exposure disease like atherosclerosis.

---

## Preclinical foundation

### Chadwick et al. 2017 — first in-vivo PCSK9 base editing (mouse)

Chadwick, Wang, and Musunuru demonstrated that CBE-mediated editing of the *Pcsk9* W159 codon in adult mice reduced PCSK9 protein by ~56% and total plasma cholesterol by ~28% after a single adenoviral vector injection, using BE3 base editor [^chadwick2017]. This established proof-of-concept but used an adenoviral delivery modality not suitable for clinical translation (large payload; immunogenicity).

### Musunuru et al. 2021 — NHP in-vivo base editing via LNP

Musunuru et al. (Verve Therapeutics / Broad Institute) delivered an ABE8e-Cas9-PCSK9 mRNA + guide RNA via LNPs to cynomolgus macaques [^musunuru2021]. Key results:

| Endpoint | Result |
|---|---|
| Hepatic *PCSK9* editing efficiency | Near-complete knockdown in liver (exact allele-editing % not reported in abstract; ~90% protein reduction) |
| Blood PCSK9 protein reduction | ~90% |
| LDL-C reduction | ~60% |
| Durability | Sustained for at least 8 months (end of observation) |
| Off-target editing (WGS) | No predicted off-target sites edited above background |
| Liver enzyme elevations (ALT/AST) | Transient mild elevation; returned to baseline |

This NHP study was the direct preclinical foundation for VERVE-101. The LNP formulation targets hepatocytes via ApoE-mediated uptake, achieving high liver selectivity with minimal editing in non-hepatic tissues [^musunuru2021]. #gap/needs-replication — single NHP study; exact allele-editing efficiency not extractable from abstract alone (full PDF not accessible); long-term durability beyond 8 months in this cohort not reported (see Lee 2022 for extended follow-up).

### Lee et al. 2022 — VERVE-101 IND-enabling NHP and mouse studies

Lee RG et al. (Verve) reported formal IND-enabling data for VERVE-101 in both NHPs and a murine germline study [^lee2022]. Results were dose-dependent: at 1.5 mg/kg (the clinical dose), hepatic editing efficiency was ~70%, PCSK9 protein fell ~83%, and LDL-C fell ~69% (time-weighted average over days 28–476 after dosing); at 0.75 mg/kg, editing was ~46%, PCSK9 fell ~67%, and LDL-C fell ~49%. Effects were durable up to 476 days (~16 months) post-single-dose. No germline editing was detected in sperm samples from treated male NHPs, and PCSK9 editing was absent in 0/436 offspring of treated female mice. These data supported IND submission and trial initiation [^lee2022].

---

## Clinical development

### VERVE-101 — heart-1 (Phase 1b)

**NCT05398029** — open-label Phase 1b dose-escalation in patients with HeFH (heterozygous familial hypercholesterolemia) and established atherosclerotic cardiovascular disease (ASCVD) on maximally tolerated lipid-lowering therapy.

- **Status:** Completed (as of ClinicalTrials.gov data, 2026-05-06)
- **n:** 13 participants (dose-escalation cohorts)
- **Delivery:** single IV administration of LNP-formulated ABE mRNA + guide RNA
- **Primary outcomes:** safety, tolerability, PCSK9 plasma levels, LDL-C at 180 days

**Reported outcomes (AHA 2023 conference presentation; not yet published as full peer-reviewed paper as of 2026-05-06):**
Results were reported at AHA Scientific Sessions 2023. Preliminary data indicated LDL-C reductions in dose-dependent fashion in the higher-dose cohorts, consistent with NHP findings. One participant experienced a myocardial infarction (MI) — attributed to underlying ASCVD progression rather than the therapy after adjudication; the event triggered a temporary partial clinical hold by the FDA in late 2023, which was subsequently lifted to allow the trial to resume. Transient hepatic enzyme elevations (ALT/AST) were observed, consistent with LNP-mediated hepatic inflammation seen in other nucleic acid delivery programs.

**Note:** Full peer-reviewed Phase 1 results paper is not yet confirmed as published in the archive as of 2026-05-06. Commentaries in *European Heart Journal - Cardiovascular Pharmacotherapy* (Horie and Ono [^horie2023]; Lewis [^nakaya2023]; both published Feb 2024) contextualize early results from the AHA 2023 presentation. Verifiers should check for a primary results paper (expected NEJM, NEJM Evidence, or Nature Medicine) #gap/needs-replication.

### VERVE-102 — heart-2 (Phase 1b, ongoing)

**NCT06164730** — open-label Phase 1b dose-escalation in HeFH or premature coronary artery disease patients.

- **Status:** Recruiting (as of 2026-05-06)
- **n (target):** ~85
- **Key differences from VERVE-101:** switched from SaCas9 to an engineered compact nuclease (reported as Cas12-family; reduces immunogenicity and improves packaging efficiency); GalNAc-conjugated LNP for enhanced hepatocyte targeting; improved guide RNA design based on VERVE-101 learnings [^heart2abstract2024]

The switch from SaCas9 to the engineered nuclease addresses two concerns: (1) SaCas9 is immunogenic due to prior *S. aureus* exposure in human populations, and (2) the compact nuclease allows smaller LNP payload with higher molar efficiency.

---

## CV-aging rationale — cumulative LDL/ApoB exposure

Atherosclerosis is a cumulative-exposure disease: the cardiovascular damage from elevated LDL-C integrates over decades. Mendelian randomization studies consistently demonstrate that **lowering LDL-C earlier and more permanently** provides disproportionate protection — a 1 mmol/L lifetime LDL reduction from a genetic variant yields ~3× greater CHD risk reduction than the same 1 mmol/L reduction achieved by a drug initiated at age 50 [^cohen2006]. #gap/needs-replication — this specific quantitative claim is from Ference et al. MR analysis; add that citation in a follow-up lint pass.

This "cumulative-exposure advantage" is the core geroprotective argument for base-editing PCSK9: a single administration in middle age or earlier could replicate the lifetime-LOF phenotype observed in Cohen cohort carriers, compounding protection over 30–40 years.

**Cardiovascular aging hallmark connections:**
- [[chronic-inflammation]] — atherosclerotic plaques are inflammatory lesions; foam-cell accumulation, macrophage activation, and cytokine release from atheromas drive systemic inflammatory burden with age.
- [[altered-intercellular-communication]] — PCSK9 also has direct signaling functions in vascular endothelium and inflammatory cells (e.g., modulating Toll-like receptor expression); reducing PCSK9 may have pleiotropic anti-inflammatory effects beyond LDL lowering. #gap/no-mechanism — pleiotropic PCSK9 effects in aging context are not yet characterized.

### Extrapolation table

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | PCSK9-LDLR axis is well-conserved; NHP results directly inform human predictions |
| Phenotype conserved in humans? | yes | Natural human LOF variants (Cohen 2006) directly demonstrate the LDL-lowering phenotype |
| Replicated in humans? | in-progress | Phase 1b heart-1 complete; heart-2 recruiting; Phase 2 not yet initiated |

---

## Modality precedent

VERVE-101/102 represents the **first in-vivo somatic base-editing therapy in human trials** — establishing a regulatory and clinical precedent for a class of interventions that could include:

| Target | Company/Program | Indication |
|---|---|---|
| *PCSK9* | Verve Therapeutics (VERVE-101/102) | HeFH → broad CV prevention |
| *ANGPTL3* | Verve (VERVE-201) | Hypertriglyceridemia |
| *LPA* | Multiple programs | Elevated Lp(a) |
| *APOB* | In-development | FH variants with dominant-negative APOB |
| *CETP* | Hypothesis-level | HDL augmentation |

For aging-specific geroprotection, the significance is the demonstration that:

1. LNP-delivered base-editor mRNA achieves durable (months+) somatic editing in human hepatocytes from a single IV dose.
2. Somatic editing safety (off-target, hepatotoxicity) is a tractable clinical problem — not a fundamental barrier.
3. Regulatory agencies (FDA, MHRA) can evaluate and authorize IND for in-vivo base editing in outpatient clinical settings.

This precedent is directly relevant to other aging gene-therapy programs — see [[aav-tert]], [[aav-klotho]], [[aav-follistatin]], [[aav-osk]] — by showing that in-vivo somatic editing of a single gene in a post-mitotic-rich tissue (liver) is feasible and regulatorily navigable.

---

## Translation barriers

1. **Off-target editing.** ABEs can make unintended A→I edits in non-target genomic sites, or cause RNA off-target effects (A-to-I RNA editing). Whole-genome sequencing (WGS) surveillance was negative in NHP studies [^musunuru2021], but human WGS surveillance in clinical trials requires larger n and longer follow-up. #gap/long-term-unknown

2. **LNP immunogenicity and re-dosing.** LNPs activate innate immune sensors (TLR4, STING) in the liver, causing transient transaminase elevations. More importantly, LNP-induced anti-PEG antibodies may limit re-dosability if a second administration were ever needed. Single-administration durability is therefore critical — demonstrated up to ~16 months in NHPs [^lee2022] but not yet beyond that, and not yet in humans. #gap/long-term-unknown

3. **Editing durability in cycling hepatocytes.** Hepatocytes in adult liver turn over slowly (~1 year half-life), not negligibly. Over decades, hepatocyte regeneration from unedited progenitor cells could partially restore PCSK9 expression, gradually eroding the LDL benefit. This has not been characterized beyond ~16 months in NHP models [^lee2022]. #gap/long-term-unknown

4. **HeFH-to-general-population translation.** Heart-1 enrolled HeFH patients on maximal lipid-lowering therapy — patients with extreme baseline LDL and high ASCVD burden. Efficacy and safety in polygenic-risk patients without extreme LDL (the broader CV-aging population) is untested. #gap/needs-human-replication

5. **Cost and manufacturing scalability.** LNP-mRNA base-editor manufacture is complex; current cost structure is expected to far exceed existing PCSK9 inhibitor costs (~$450/yr for inclisiran). Geroprotective use at population scale requires manufacturing cost reduction or reimbursement frameworks that do not yet exist.

6. **Regulatory novelty for geroprotection indication.** FDA and EMA have no precedent for approving a preventive somatic gene edit in healthy or sub-clinical-risk individuals for aging-related indication. Current trials are in disease populations (HeFH, established ASCVD). Expanding the indication to primary CV-aging prevention will require new regulatory frameworks.

---

## Limitations and gaps

- **No published peer-reviewed full Phase 1 results paper as of 2026-05-06.** Conference presentation data (AHA 2023) is not peer-reviewed primary evidence. #gap/needs-replication
- **Sample sizes are very small.** n=13 in heart-1 provides no statistical power for safety conclusions. Rare adverse events cannot be excluded. #gap/long-term-unknown
- **Long-term durability unproven in humans.** NHP data extend to 8 months; hepatocyte turnover over years/decades could reduce editing efficiency. #gap/long-term-unknown
- **Cancer surveillance absent.** Unlike AAV-TERT, ABE/PCSK9 does not raise direct oncogenic concerns (PCSK9 is not a cancer driver), but long-term WGS surveillance for off-target editing consequences has not been published. #gap/long-term-unknown
- **[[pcsk9]] protein page is a stub.** All PCSK9 protein-level detail (structure, LDLR-binding mechanism, cleavage, tissue expression, other LOF variants) should live there, not on this page.

---

## Cross-references

- [[pcsk9]] (no page — wikilink-stub; seed R24+)
- [[chronic-inflammation]] — cardiovascular aging hallmark; atherosclerosis as inflammation driver
- [[altered-intercellular-communication]] — PCSK9 pleiotropic vascular signaling
- [[aav-tert]] (verified R18) — sibling gene-therapy modality; telomere-attrition target
- [[aav-klotho]] (seeded R23b) — sibling; systemic geroprotection via liver-secreted factor
- [[aav-follistatin]] (seeded R23b) — sibling; muscle wasting target
- [[aav-osk]] (seeded R23b) — sibling; epigenetic reprogramming approach
- [[hallmarks-of-aging]] — dual hallmark: chronic-inflammation + altered-intercellular-communication
- [[sens-damage-categories]] — maps to cancer-SENS obliquely (gene editing; off-target mutation burden)

---

## Footnotes

[^komor2016]: doi:10.1038/nature17946 · Komor AC, Kim YB, Packer MS, Zuris JA, Liu DR · Nature 2016 · 533(7603):420-424 · cytosine base editor (BE3); programmable C→T conversion without DSB in mammalian cells; efficiency ~15–75% of total cellular DNA with ≤1% indel formation; founding CBE paper; 5169 citations · archive: verified PDF (green OA / PMC)

[^gaudelli2017]: doi:10.1038/nature24644 · Gaudelli NM, Komor AC, Rees HA, Packer MS, Badran AH, Bryson DI, Liu DR · Nature 2017 · 551(7681):464-471 · adenine base editor (ABE); evolved E. coli TadA adenosine deaminase fused to Cas9-nickase; programmable A•T → G•C editing without DSB; ~50% editing efficiency in human cells with ≥99.9% product purity and ≤0.1% indels (7th-generation ABE); founding ABE paper; 3984 citations · archive: verified PDF (green OA / PMC)

[^cohen2006]: doi:10.1056/NEJMoa054013 · Cohen JC, Boerwinkle E, Mosley TH, Hobbs HH · N Engl J Med 2006 · 354(12):1264-1272 · observational (Mendelian randomization-equivalent); ARIC cohort; 3363 Black participants, 9524 White participants; Black: Y142X MAF=0.8%, C679X MAF=1.8%, combined carrier=2.6%; ~28% lower LDL-C in carriers; HR 0.11 (95% CI 0.02–0.81, P=0.03) for CHD = 88% lower 15-year CHD risk; White: R46L MAF=3.2%, ~15% lower LDL-C, HR 0.50 (95% CI 0.32–0.79, P=0.003) = 47% lower CHD risk; 3123 citations · archive: verified PDF (local copy)

[^chadwick2017]: doi:10.1161/ATVBAHA.117.309881 · Chadwick AC, Wang X, Musunuru K · Arterioscler Thromb Vasc Biol 2017 · in-vivo (mouse, C57BL/6J, 5-week-old male, n=5/group); single IV adenoviral vector delivery of BE3-Pcsk9; ~56% PCSK9 protein reduction; ~28% plasma cholesterol reduction; proof-of-concept for somatic PCSK9 base editing in adult liver; no detected off-target edits or indels above control by deep sequencing; 214 citations · archive: verified PDF (bronze OA)

[^musunuru2021]: doi:10.1038/s41586-021-03534-y · Musunuru K, Chadwick AC, Mizoguchi T, et al. · Nature 2021 · 593(7859):429-434 · in-vivo (cynomolgus macaque NHP); single IV LNP-delivered ABE8e + guide RNA; near-complete knockdown of PCSK9 in liver; ~90% PCSK9 reduction in blood; ~60% LDL-C reduction; effects stable for at least 8 months post-single-dose; no predicted off-target sites edited by WGS; 702 citations · archive: not_oa — abstract-verified only via PubMed (PMID 34012082); full PDF not accessible #gap/no-fulltext-access

[^lee2022]: doi:10.1161/CIRCULATIONAHA.122.062132 · Lee RG, Mazzola AM, Braun MC, et al. · Circulation 2023 · 147(3):242-253 · in-vivo (cynomolgus NHP + murine germline study); IND-enabling VERVE-101 studies; at 1.5 mg/kg: ~70% hepatic editing, ~83% PCSK9 protein reduction, ~69% LDL-C reduction (time-weighted avg, day 28–476); at 0.75 mg/kg: ~46% editing, ~67% PCSK9, ~49% LDL; effects durable up to 476 days post-single-dose; no germline editing detected in sperm or offspring; transient ALT/AST elevation resolved by day 14; 182 citations · archive: not_oa — abstract-verified only via PubMed (PMID 36314243); full PDF not accessible #gap/no-fulltext-access

[^horie2023]: doi:10.1093/ehjcvp/pvad103 · Horie T, Ono K · Eur Heart J Cardiovasc Pharmacother 2024 (published Feb 23, 2024; 10(2):89-90) · commentary/editorial; contextualizes heart-1 AHA 2023 presentation data; not primary trial results · archive: download failed (bronze OA — PDF access issue)

[^nakaya2023]: doi:10.1093/ehjcvp/pvad095 · Lewis BS · Eur Heart J Cardiovasc Pharmacother 2024 (published Feb 23, 2024; 10(2):87-88) · news from AHA; summarizes first-in-human VERVE-101 heart-1 findings reported at AHA Scientific Sessions 2023; not peer-reviewed primary results paper · archive: download failed (bronze OA — PDF access issue)

[^heart2abstract2024]: doi:10.1161/circ.150.suppl_1.4139206 · Verve Therapeutics · Circulation 2024 (AHA abstract) · design of heart-2 trial (VERVE-102, GalNAc-LNP, engineered nuclease); Phase 1b; ~85 patients HeFH or premature CAD; conference abstract only; 11 citations · archive: not confirmed via metadata
