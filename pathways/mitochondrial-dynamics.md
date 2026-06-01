---
type: pathway
aliases: [mitochondrial fission and fusion, mito-dynamics, mitochondrial morphology dynamics, fission-fusion cycle]
kegg: null
reactome: R-HSA-351948
wikipathways: null
key-nodes: ["[[drp1]]", "[[mitofusins]]", "[[opa1]]", "[[mff]]", "[[fis1]]", "[[mid49]]", "[[mid51]]", "[[oma1]]", "[[yme1l]]"]
upstream: ["[[ampk]]", "[[pink1-parkin-pathway]]", "[[pi3k-akt-pathway]]"]
downstream: ["[[mitophagy]]", "[[mitochondrial-biogenesis]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Synthesis pathway page — Frank 2001 and Karbowski 2002 verified against primary PDFs (downloaded 2026-05-05). Twig 2008, Bordt 2017, and Frezza 2006 already verified on atomic pages (drp1.md R12, opa1.md R10d). Otera 2010 and Friedman 2011 remain not_oa closed-access; claims from those sources carry #gap/no-fulltext-access on drp1.md. Implicit stubs (mff, fis1, mid49, mid51, oma1, yme1l) confirmed slug-consistent with drp1.md/opa1.md. Canonical-database identity fields (Reactome R-HSA-351948) not independently re-verified against Reactome UI — confirmed contextually appropriate by seeder."
---

# Mitochondrial dynamics

> **Frontmatter note — canonical DB IDs:** No single KEGG or Reactome pathway corresponds to "mitochondrial dynamics" as a whole. KEGG `hsa04714` is the circadian rhythm pathway (wrong, as indicated in the task brief). Reactome R-HSA-351948 is the closest curated entry ("Mitochondrial recruitment of Drp1") but is scoped to the apoptotic DRP1-fission sub-pathway under Programmed Cell Death. General fission/fusion machinery is distributed across Reactome parent pathways R-HSA-1852241 (Organelle biogenesis and maintenance) and R-HSA-5357801 (Programmed Cell Death). Both `kegg` and `wikipathways` are left null pending identification of more precise entries. #gap/needs-canonical-id

The mitochondrial dynamics pathway governs the continuous cycle of **fission** (membrane scission, driven by [[drp1]]) and **fusion** (membrane merger, driven by [[mitofusins]] at the outer mitochondrial membrane and [[opa1]] at the inner membrane) that determines whether the mitochondrial network is elongated and interconnected or fragmented and punctate. This cycle is not decorative: it is the **central quality-control logic** of the mitochondrial compartment, enabling isolation of damaged organelles for [[mitophagy]], content mixing between healthy organelles, and adaptive morphological responses to energy state. In aging, the balance systematically shifts toward fragmentation — driven by declining fusion GTPase levels (OPA1, MFN2) and persistent fission activation — with direct consequences for bioenergetics, mitophagy fidelity, and apoptotic threshold.

## Machinery overview

### Fission machinery

Fission is executed by [[drp1]] (DNM1L), a cytosolic dynamin-family GTPase. DRP1 is recruited to constriction sites on the outer mitochondrial membrane (OMM) by four integral membrane receptors:

| Receptor | Gene | Mammalian role |
|---|---|---|
| **MFF** | [[mff]] | Primary recruiter in mammalian cells; required for DRP1-dependent fission in HeLa/HCT116 [^otera2010] |
| **MID49** | [[mid49]] (MIEF2) | Bifunctional: recruits DRP1 but can tether without promoting fission |
| **MID51** | [[mid51]] (MIEF1) | Related to MID49; recruits and inhibits DRP1; nucleotide-sensitive |
| **FIS1** | [[fis1]] | Required in yeast; mammalian contribution disputed — MFF knockdown alone fully suppresses fission even with FIS1 intact [^otera2010] #gap/contradictory-evidence |

Before DRP1 assembles, the ER marks fission sites: ER tubules physically wrap future constriction points on the OMM, pre-narrowing the membrane before DRP1 ring assembly [^friedman2011]. DRP1 then oligomerizes into rings or spirals at these pre-narrowed sites and uses GTP hydrolysis to mechanically constrict and sever the membrane.

**Key regulatory PTMs on DRP1** (canonical sites fully detailed on [[drp1]]):

- Ser637 phosphorylation by **PKA** inhibits GTP hydrolysis and fission; dephosphorylation by calcineurin activates fission.
- Ser616 phosphorylation by **CDK1 / ERK1/2 / PINK1** promotes OMM translocation and fission.
- Cys644 **S-nitrosylation** (SNO-DRP1) increases GTPase activity and drives pathological fragmentation in neurodegeneration.

### Fusion machinery

Fusion requires two sequential GTPase reactions acting on the two membrane bilayers:

**Step 1 — Outer-membrane fusion ([[mitofusins]]):**
MFN1 and MFN2 are dynamin-family GTPases anchored in the OMM by a hairpin topology. HR2 coiled-coils on opposing OMMs form antiparallel trans-dimers that tether the two mitochondria; GTP hydrolysis drives the conformational change that approximates and fuses the two OMMs. MFN1 has higher GTPase activity; heterotypic MFN1-MFN2 trans-dimers form in vivo and are sufficient for fusion, providing partial redundancy between paralogs.

MFN2 also performs a fusion-independent function: it physically tethers the ER to the OMM at ER-mitochondria contact sites (MAMs), enabling efficient Ca²⁺ transfer and lipid exchange. This ER-tethering role is MFN1-independent — a strict MFN2 specialisation.

**Step 2 — Inner-membrane fusion ([[opa1]]):**
OPA1 is a dynamin-family GTPase anchored in the IMM. It exists in long (L-OPA1, IMM-anchored) and short (S-OPA1, IMS-soluble) forms generated by constitutive cleavage by **[[yme1l]]** (S1 site) or stress-induced cleavage by **[[oma1]]** (S2 site). Both L-OPA1 and S-OPA1 must coexist for efficient IMM fusion. GTP hydrolysis drives membrane curvature and IMM merger, completing the content-mixing step (dilution of damaged mtDNA, redistribution of metabolites across the network).

OPA1 oligomers at cristae junctions perform a second, fusion-independent function: they seal the narrow cristae apertures that sequester approximately 80–85% of the total cytochrome c pool inside cristae. Cristae-junction sealing by OPA1 is a direct anti-apoptotic buffer — see Apoptosis crosstalk below.

## The fission–fusion cycle

At steady state, fission and fusion rates are approximately matched, maintaining stable average network morphology. Rapid shifts in either rate change network morphology:

- **Fusion-dominant (high MFN + high OPA1 + low DRP1):** elongated, tubular, interconnected network. Conditions: starvation (AMPK suppresses MFF-DRP1 recruitment; see [[ampk]]), high ΔΨm, healthy energised state. Content mixing is maximal; individual mitochondria cannot be isolated for mitophagy.

- **Fission-dominant (high DRP1 activity + low MFN/OPA1):** fragmented, punctate network. Conditions: apoptotic signalling, ΔΨm collapse, nitrosative stress, aging. Individual organelles can be isolated for quality control or apoptotic execution; respiratory chain supercomplex stability is reduced.

**AMPK-mediated network elongation during starvation:** Under nutrient stress, AMPK phosphorylates MFF at multiple sites, reducing MFF-mediated DRP1 recruitment and causing the mitochondrial network to elongate. The elongated network sustains ATP production and is protected from mitophagy during the acute starvation period. This AMPK-fission axis is the mechanistic link between metabolic sensing and mitochondrial morphology.  #gap/needs-replication — the specific AMPK→MFF phosphorylation sites and their quantitative effect on DRP1 recruitment in vivo are not yet fully characterised in primary literature.

## The Twig 2008 fission-then-mitophagy model

The most mechanistically important function of fission is quality control via mitochondria segregation. Twig et al. 2008 established the key circuit in pancreatic beta cells [^twig2008]:

1. A mitochondrion in the network undergoes **asymmetric fission**, generating two daughter mitochondria of unequal membrane potential (ΔΨm).
2. The high-ΔΨm daughter is functional and promptly re-fuses with the network (fusion is ΔΨm-dependent: L-OPA1 is stable on energised IMMs, enabling re-fusion).
3. The low-ΔΨm daughter cannot re-fuse (ΔΨm collapse triggers OMA1 activation → L-OPA1 → S-OPA1 conversion → IMM fusion arrest; MFN stability on the OMM is also compromised by PINK1 accumulation). This daughter is isolated.
4. PINK1 stabilises on the OMM of the isolated, depolarised mitochondrion; PINK1 activates [[parkin]] → Parkin ubiquitinates MFN1/MFN2 for proteasomal degradation (via p97/VCP) → OMM fusion is additionally arrested.
5. The isolated, fusion-incompetent mitochondrion is engulfed by an autophagosome via ubiquitin-binding cargo receptors and delivered to the lysosome: **[[mitophagy]]**.

This circuit means that **DRP1-mediated fission is the upstream prerequisite for mitophagy**. Loss or pharmacological inhibition of DRP1 therefore impairs not only network fission but mitochondrial quality control. In aged tissues where mitophagic flux is declining, reduced DRP1 activity may paradoxically suppress fragmentation while simultaneously blocking the segregation step needed to clear damaged organelles. This context-dependence is a central unresolved tension in the aging-dynamics field. #gap/contradictory-evidence

See [[pink1-parkin-pathway]] for the full PINK1/Parkin recruitment and ubiquitination circuit. See [[mitophagy]] for autophagosome recruitment and lysosomal degradation.

## Apoptosis crosstalk

DRP1-mediated fission and OPA1-mediated cristae remodeling are both early events in mitochondrial apoptosis, acting in sequence [^frank2001][^frezza2006][^karbowski2002]:

**Stage 1 — DRP1-dependent fission accompanies MOMP initiation:**
Apoptotic stimuli drive DRP1 translocation to the OMM and mitochondrial fragmentation. Frank et al. 2001 showed that expression of dominant-negative DRP1-K38A — which blocks GTP hydrolysis and freezes the fission cycle — significantly **delays mitochondrial cytochrome c release and apoptotic cell death** following apoptotic stimuli: in COS-7 cells, 77% of Drp1_wt-transfected cells were TUNEL-positive at 10 h vs only 19% of Drp1_K38A cells; anti-Drp1 microinjection in HeLa cells reduced apoptosis from 86% to 17% of cells at 20 h [^frank2001]. This establishes that DRP1 is a pro-apoptotic effector, not merely a bystander. Karbowski et al. 2002 demonstrated that BAX translocates to, and co-localises with, **both DRP1 and MFN2** at fission sites on the OMM during apoptosis — 92% ± 10.5% of Mfn2 clusters (n=847) co-localized with BAX clusters in apoptotic Cos-7 cells — suggesting that the fission machinery and MOMP machinery are spatially coupled, and that MFN2 redistribution to fission sites is an early apoptotic event [^karbowski2002].

**Stage 2 — OPA1 disassembly opens cristae junctions:**
Before or coinciding with BAX/BAK-mediated MOMP, tBID (caspase-8-cleaved BID) triggers disassembly of OPA1 oligomers at cristae junctions. This widens the narrow cristae apertures, mobilising the ~80–85% of cytochrome c stored in the cristae lumen. Frezza et al. 2006 established that this OPA1-cristae junction role is independent of OPA1's IMM fusion function (demonstrated in fusion-incompetent Mfn1-null MEFs) [^frezza2006].

**Stage 3 — MOMP + cytochrome c surge → apoptosis:**
Once MOMP occurs via BAX/BAK pores, both the ~15–20% of cytochrome c already in the IMS and the newly mobilised cristae-stored pool flood the cytoplasm → [[cytochrome-c]] binds APAF-1 → apoptosome assembly → caspase-9/3 cascade → committed apoptosis.

**OMA1 as an additional node:** Stress-induced OMA1 activation (ΔΨm collapse) converts L-OPA1 to S-OPA1, producing cristae remodeling even before full MOMP; this can operate as an amplification loop.

The coupling between fission (DRP1), cristae remodeling (OPA1 disassembly), and MOMP (BAX/BAK) makes the fission-fusion machinery a regulator of the **apoptotic threshold** — a property directly relevant to cancer (evasion of apoptosis via DRP1 inhibition or OPA1 overexpression) and aging (shifts in apoptotic threshold in post-mitotic tissues).

| Dimension | Status |
|---|---|
| Fission/apoptosis crosstalk conserved in humans? | yes — DRP1 and OPA1 are human genes; mechanism characterised in human cell lines |
| Phenotype conserved in humans? | yes — human disease genetics (EMPF1/ADOA) confirm functional conservation |
| Replicated in humans? | partial — genetic evidence strong; in-vivo aging-context data limited |

## Aging biology

### Network fragmentation with age

The balance between fission and fusion shifts toward fragmentation in multiple post-mitotic tissues during normal aging, consistent with the [[mitochondrial-dysfunction]] hallmark. This observation is documented in skeletal muscle, hepatocytes, cardiomyocytes, and neurons in rodent and human studies. Mechanistic contributors include:

- **OPA1 protein decline:** OPA1 mRNA and protein levels fall in aged skeletal muscle and cardiac muscle (detailed on [[opa1]]). Whether this is a primary age-driven transcriptional event or secondary to energetic stress-induced OMA1 activation is unresolved. #gap/no-mechanism
- **MFN2 downregulation:** MFN2 expression is reduced in aged skeletal muscle and in skeletal muscle of T2D patients (detailed on [[mitofusins]]). Reduced MFN2 impairs both OMM fusion and ER-mitochondria Ca²⁺ transfer.
- **Persistent DRP1 activity:** Hyperphosphorylation at Ser616 (via aberrant CDK5/ERK1/2 in aged neurons) and S-nitrosylation at Cys644 under chronic nitrosative stress maintain DRP1 in an active, OMM-recruited state (detailed on [[drp1]]).

The net effect: fusion capacity falls; fission activity rises or is unchanged — producing the fragmented network morphology that correlates with bioenergetic decline, supercomplex destabilisation, and impaired mitophagy quality control.

### OPA1 decline and cristae morphology

OPA1 oligomer loss in aged tissues disinhibits cristae junction widening and destabilises respiratory chain supercomplexes (Complex I-III₂-IV "respirasomes"). Dysmorphic cristae impair OXPHOS efficiency and increase electron leak (ROS), driving a feedforward loop. OPA1 overexpression in cardiac failure models has been reported to partially restore cristae morphology and contractile reserve, though the degree of benefit attributable specifically to fusion vs cristae-junction vs cytochrome c gating effects is not cleanly dissected. See [[opa1]] for primary evidence and quantitative detail.

### Impaired mitophagy due to fusion-dominant shifts

In some aged tissue contexts (particularly post-mitotic neurons), the network may actually become more fusion-dominant, attributable to DRP1 downregulation or reduced activity. While this protects from fragmentation-driven energetic crisis, it simultaneously impairs the fission-before-mitophagy segregation step (Twig 2008 model above), allowing damaged mitochondria to persist in the network and dilute their dysfunction via content mixing rather than being eliminated. This dual edge — fission required for both quality control and apoptotic execution — is a key unresolved design tension in aging biology. #gap/contradictory-evidence

## Disease associations

| Disease | Affected node | Mechanism | Evidence page |
|---|---|---|---|
| **Charcot-Marie-Tooth 2A (CMT2A)** | [[mitofusins]] (MFN2 LoF) | Dominant missense in GTPase/HR2; fusion defect → axonal mitochondrial transport failure | [[mitofusins]] |
| **Autosomal dominant optic atrophy (ADOA)** | [[opa1]] (haploinsufficiency) | OPA1 LoF → RGC-specific threshold effect; optic nerve degeneration | [[opa1]] |
| **EMPF1 (encephalopathy due to defective fission 1)** | [[drp1]] (DNM1L de novo dominant) | Dominant-negative stalk mutations impair oligomerisation; lethal neonatal combined mito+peroxisomal fission defect | [[drp1]] |
| **Alzheimer's disease** | [[drp1]] hyperactivation | SNO-DRP1 (Cys644) via Aβ1-42/NO; pSer616 via CDK5; excessive fragmentation → synaptic energy failure | [[drp1]] |
| **Parkinson's disease** | [[drp1]], [[mitofusins]], [[pink1-parkin-pathway]] | PINK1-driven Ser616 phosphorylation links fission to mitophagy; MFN degradation required for PINK1/Parkin pathway | [[drp1]], [[mitofusins]] |

## Therapeutic angles

### Mdivi-1 — the specificity problem

Mdivi-1 was the first small molecule proposed to inhibit DRP1 GTPase and has been used in hundreds of published studies as a fission inhibitor. **Critical caveat:** Bordt et al. 2017 showed that Mdivi-1's Ki against assembled human DRP1 is >1.2 mM — no meaningful GTPase inhibition occurs at the 25–100 µM concentrations routinely used experimentally [^bordt2017]. At these doses Mdivi-1 is a reversible **Complex I inhibitor**, and its observed "anti-fission" phenotypes may reflect altered redox state rather than specific DRP1 blockade (confirmed in Drp1-KO MEFs where Complex I inhibition persists). This casts doubt on the specificity of conclusions from Mdivi-1 studies lacking DRP1 genetic controls.

No clean, cell-permeable DRP1-specific GTPase inhibitor with validated on-target evidence exists as of early 2026. #gap/dose-response-unclear

### MFN agonists (preclinical)

Peptidomimetic MFN2 agonists (Franco et al. 2016, *Nat Chem Biol*) selectively activate MFN2 GTPase in fragmented neurons, restore axonal mitochondrial transport, and rescue CMT2A-like phenotypes in mice — providing proof-of-concept for pharmacological fusion activation. Pharmacokinetic profile of the peptide is not suitable for systemic use; small-molecule equivalents are under development. Details on [[mitofusins]]. #gap/long-term-unknown

### OPA1 stabilization / OMA1 inhibition (preclinical)

Preclinical compounds inhibiting OMA1 prevent stress-induced L-OPA1 → S-OPA1 conversion and partially protect cardiac mitochondrial morphology in ischaemia/reperfusion models. The elamipretide peptide (SS-31; targets cardiolipin on IMM) indirectly stabilises cristae morphology and is in clinical trials for heart failure and Barth syndrome — though its mechanism is not cleanly OPA1-dependent. Details on [[opa1]]. #gap/long-term-unknown

## Limitations and gaps

| Gap | Tag | Notes |
|---|---|---|
| No single KEGG/Reactome pathway ID | `#gap/needs-canonical-id` | Fission/fusion machinery is distributed across multiple curated sub-pathways; R-HSA-351948 covers only apoptotic DRP1 recruitment; KEGG has no dedicated mitochondrial dynamics map |
| Network fragmentation → aging causality | `#gap/needs-human-replication` | Fragmented morphology in aged human tissues is established correlatively; causal contribution to functional decline not cleanly demonstrated in humans |
| AMPK→MFF phosphorylation sites | `#gap/needs-replication` | Starvation-induced MFF phosphorylation by AMPK as primary fission-suppression mechanism needs independent multi-study confirmation |
| DRP1 activity in aged human tissue | `#gap/needs-human-replication` | DRP1 phospho-ratio (pSer616/pSer637) shift with age primarily from rodent studies; human postmortem data is sparse |
| Mdivi-1 literature | `#gap/contradictory-evidence` | Most published Mdivi-1 studies predate Bordt 2017 Complex I finding; phenotypic attributions to DRP1 inhibition are uncertain without genetic controls |
| Fission-protective vs fission-pathological duality | `#gap/contradictory-evidence` | DRP1 hyperactivation is pathological in neurodegeneration; DRP1 hypoactivation impairs mitophagy in aging — optimal fission level is tissue- and context-dependent |
| OPA1 decline — cause vs consequence | `#gap/no-mechanism` | Whether age-associated OPA1 reduction is transcriptionally driven or secondary to OMA1 activation by energetic stress is not resolved |
| Long-term therapeutic outcomes | `#gap/long-term-unknown` | Fusion-restoration strategies (MFN agonists, OPA1 stabilization) have been tested only in acute or short-term disease models, not in chronic aging or longevity studies |

## Cross-references

- [[drp1]] — fission GTPase; primary source for PTM table, EMPF1 disease genetics, Mdivi-1 caveat, and Alzheimer/PD/HD hyperactivation evidence (verified R12)
- [[mitofusins]] — MFN1/MFN2 OMM fusion GTPases; source for CMT2A, ER-tethering, Parkin-substrate role, and MFN agonist data (drafted R10c, primary PDFs verified)
- [[opa1]] — IMM fusion GTPase and cristae-junction controller; source for ADOA, OMA1/YME1L balance, and Frezza 2006 cristae-sealing data (verified-partial R10d)
- [[mff]] — primary mammalian DRP1 OMM receptor; AMPK Ser155/Ser172 phospho-substrate per Toyama 2016 (verified R25)
- [[fis1]] — OMM receptor; accessory role in mammals (vs primary in yeast); P110 inhibitor of FIS1-DRP1 (drafted R25)
- [[mid49]] — MIEF2; MFF-independent DRP1 recruiter (drafted R25)
- [[mid51]] — MIEF1; ADP-binding allosteric DRP1 receptor (drafted R25)
- [[oma1]] — stress-activated IMM zinc metalloprotease; cleaves L-OPA1 at S2 → S-OPA1 (drafted R25)
- [[yme1l]] — i-AAA constitutive IMM protease; cleaves OPA1 at S1; OMA1/YME1L1 balance gates fusion (drafted R25)
- [[mitophagy]] — fission is the upstream prerequisite; DRP1 isolation step gates PINK1/Parkin mitophagy (verified-partial)
- [[pink1-parkin-pathway]] — PINK1 stabilisation on depolarised OMM is the signal that enforces isolation post-fission; Parkin degrades MFN1/MFN2 to arrest re-fusion (verified-partial)
- [[cytochrome-c]] — OPA1 cristae-junction sealing gates cytochrome c release; tBID-triggered OPA1 disassembly drives the apoptotic cytochrome c surge (verified-partial)
- [[apoptosis-pathway]] — DRP1 fission accompanies MOMP; OPA1 disassembly is required for full cytochrome c release
- [[mitochondrial-biogenesis]] — fission/fusion/biogenesis are co-regulated; fission-dominant networks rely on biogenesis to maintain total mitochondrial mass (drafted)
- [[mitochondrial-dysfunction]] — the aging hallmark that encompasses the net consequences of fission/fusion imbalance (verified)
- [[ampk]] — energy-sensing kinase that suppresses MFF-mediated DRP1 recruitment during starvation, driving network elongation (verified)

## Footnotes

[^twig2008]: doi:10.1038/sj.emboj.7601963 · [[studies/twig-2008-fission-fusion-mitophagy]] · in-vitro (live imaging + mtPA-GFP, INS1 rat beta cells and primary mouse beta cells) · model: pancreatic beta cells · Crossref-confirmed; local PDF available · **verified on [[drp1]] 2026-05-05** — core asymmetric-fission + ΔΨm-dependent re-fusion + mitophagy-isolation model confirmed from PDF

[^otera2010]: doi:10.1083/jcb.201007152 · [[studies/otera-2010-mff-drp1-recruitment]] · in-vitro (siRNA knockdown + live imaging, HeLa/HCT116) · model: human cell lines · Crossref-confirmed; closed-access (not_oa) · #gap/no-fulltext-access — claims regarding MFF as primary recruiter and FIS1 mammalian dispensability unverified against full text; consistent with [[drp1]] page annotation

[^friedman2011]: doi:10.1126/science.1207385 · [[studies/friedman-2011-er-mitochondria-fission]] · in-vitro (live imaging + correlative EM, COS-7) · model: mammalian cells · Crossref-confirmed; closed-access (not_oa) · #gap/no-fulltext-access — ER pre-constriction claim unverified against full text; consistent with [[drp1]] page annotation

[^frank2001]: doi:10.1016/s1534-5807(01)00055-7 · [[studies/frank-2001-drp1-apoptosis]] · in-vitro (dominant-negative K38A expression, COS-7, HeLa, SW480, Jurkat cells; anti-Drp1 microinjection in HeLa) · model: mammalian cell lines · Crossref-confirmed (title: "The Role of Dynamin-Related Protein 1, a Mediator of Mitochondrial Fission, in Apoptosis"); 1,716 citations · **verified against PDF 2026-05-05**: DRP1-K38A reduces TUNEL-positive COS-7 cells from 77% (Drp1_wt) to 19% (K38A) at 10h STS; anti-Drp1 microinjection reduces HeLa apoptosis from 86% to 17% at 20h; cytochrome c release is retained in K38A cells (Fig 6C/D)

[^karbowski2002]: doi:10.1083/jcb.200209124 · [[studies/karbowski-2002-bax-drp1-apoptosis]] · in-vitro (live imaging + immunofluorescence, Cos-7 and HeLa; endogenous protein co-IF confirmed in primary human myocytes and fibroblasts) · model: mammalian cell lines + primary human cells · Crossref-confirmed (title: "Spatial and temporal association of Bax with mitochondrial fission sites, Drp1, and Mfn2 during apoptosis"); 838 citations; bronze OA · **verified against PDF 2026-05-05**: BAX co-localizes with DRP1 at fission sites during apoptosis (confirmed); MFN2 also co-localizes with BAX foci — 92% ± 10.5% of Mfn2-YFP clusters (n=847) co-localized with CFP-Bax clusters; 68% ± 10% of Bax clusters (n=1,238) co-localized with Mfn2 clusters; Drp1K38A accumulates Bax-associated fission intermediates without preventing Bax translocation · **DOI note: the DOI 10.1083/jcb.200204140 in the seeder brief was incorrect (maps to an actin-turnover paper); corrected to 10.1083/jcb.200209124 via Crossref**

[^frezza2006]: doi:10.1016/j.cell.2006.06.025 · [[studies/frezza-2006-opa1-cristae-cytochrome-c]] · in-vitro (purified mitochondria + MEF cell lines, including Mfn1-null) · model: mouse MEFs · local PDF available · **verified on [[opa1]] and [[cytochrome-c]] 2026-05-04** — OPA1 cristae-junction sealing and tBID-triggered cytochrome c mobilisation (~80–85% cristae-stored) confirmed from PDF

[^bordt2017]: doi:10.1016/j.devcel.2017.02.020 · [[studies/bordt-2017-mdivi1-complex-i]] · in-vitro (biochemical + primary neurons + Drp1 KO MEFs) · model: rat cortical neurons + mammalian cell lines · **verified on [[drp1]] 2026-05-05** — Ki >1.2 mM for human DRP1 GTPase; Complex I inhibition at 25–100 µM confirmed DRP1-independent in KO MEFs
