---
type: protein
aliases: [MIEF1, SMCR7L, mitochondrial dynamics protein 51, MIDA, MiD51]
uniprot: Q9NQG6
ncbi-gene: 54471
hgnc: 25979
ensembl: ENSG00000100335
genage-id: null
pathways: ["[[mitochondrial-dynamics-pathway]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Primary-source PDFs verified for Palmer 2011, Zhao 2011, Loson 2013, Loson 2014 (Structure), Richter 2014 (JCB), Liu 2015, Charif 2021, Wong 2022, Yang 2023. König 2021 (Nat Cell Biol) is closed-access (not_oa) — MDV biogenesis claim unverified against full text; tagged #gap/no-fulltext-access. Kalia 2018 (Nature) downloaded but not read in this pass — cryo-EM DRP1-receptor claim unverified against full text. Canonical-DB identity fields (UniProt Q9NQG6, NCBI Gene 54471, HGNC 25979, Ensembl ENSG00000100335) confirmed via UniProt REST. Druggability tier 3 confirmed via Open Targets Platform (ENSG00000100335; Structure with Ligand = True; no High-Quality Ligand or Pocket)."
---

# MID51 / MIEF1

MID51 (Mitochondrial Dynamics Protein of 51 kDa), encoded by the gene *MIEF1* (also known as *SMCR7L*), is an N-terminally anchored outer mitochondrial membrane (OMM) protein that functions as a receptor and scaffold for [[drp1]] recruitment during mitochondrial fission. Discovered in 2011 as part of a pair with its close paralog [[mid49]] (MIEF2), MID51 is notable for containing a nucleotide-binding domain that binds ADP — providing a direct biochemical link between mitochondrial metabolic state and fission activity. It is the closest vertebrate-specific addition to the DRP1 receptor repertoire, operating cooperatively with [[mff]] and [[fis1]].

## Identity

- **UniProt:** Q9NQG6 (MIEF1_HUMAN) — Swiss-Prot reviewed entry
- **NCBI Gene:** 54471
- **HGNC symbol:** MIEF1; HGNC:25979
- **Ensembl:** ENSG00000100335
- **Gene aliases:** SMCR7L (Smith-Magenis Chromosome Region gene 7-Like), MID51, MIDA
- **Protein length:** 463 amino acids; ~51.3 kDa
- **GenAge:** Not catalogued — no direct longevity evidence in standard model organisms
- **Mouse ortholog:** Mief1 (one-to-one ortholog)

## Structural features and domains

MID51 is a type II single-pass transmembrane protein with its N-terminal ~50 residues embedded in and facing the mitochondrial intermembrane space, and a large C-terminal cytoplasmic domain (~410 residues) that constitutes the functional scaffold [^palmer2011].

Key structural elements:

- **Transmembrane anchor (N-terminal)** — N-terminal anchor (residues 1–23 face the IMS; TM helix spans residues 24–46); required for mitochondrial targeting; cytoplasmic domain is C-terminal [^palmer2011]
- **Dimerization domain (~residues 49–195)** — mediates MID51 self-association on the OMM surface [^richter2014]
- **NTase-like nucleotide-binding fold** — the defining structural feature of MID51; binds ADP as a cofactor (one nucleotide-binding pocket per monomer; Kd ≈ 0.5 μM by MANT-ADP fluorescence anisotropy [^loson2014structure], or 2.9 ± 0.8 μM by ITC [^richter2014]); fold is homologous to cyclic GMP-AMP synthase (cGAS) and NF45 family
- **DRP1-interaction regions** — two regions required for DRP1 binding: residues 160–169 (deletion abolishes DRP1 co-IP [^zhao2011]) and the β4–α4 loop at residues 234–242 (PEYFP motif; deletion blocks DRP1 recruitment to mitochondria [^richter2014]); R235 forms a salt bridge stabilising the loop topology [^richter2014]

The nucleotide-binding fold does not exhibit enzymatic activity — it is a structural/regulatory domain repurposed for cofactor binding, analogous to a metabolite-sensing module rather than a catalytic center [^loson2014structure].

## Function: DRP1 recruitment and fission regulation

MID51 was simultaneously identified in 2011 by two independent groups as a novel component of the mitochondrial fission machinery [^palmer2011][^zhao2011].

**DRP1 recruitment.** MID51 recruits cytosolic [[drp1]] to the OMM by direct physical interaction. Overexpression of MID51 in cells causes mitochondrial fragmentation consistent with excess fission-site assembly; however, paradoxically, Zhao et al. reported that MIEF1 overexpression elongates mitochondria, suggesting that excessive DRP1 sequestration at the OMM can prevent productive fission cycles [^zhao2011]. This result established that DRP1 recruitment and DRP1 activation are separable steps.

**Cooperativity with MFF and FIS1.** MID51, [[mid49]], [[mff]], and [[fis1]] all function in the same pathway, but are not fully redundant. Loson et al. 2013 showed — using Fis1-null, Mff-null, and Fis1/Mff-double-null MEFs — that MFF is the dominant DRP1 receptor for steady-state fission, with Fis1 playing a lesser but real role [^loson2013]. Notably, simultaneous siRNA knockdown of MiD49 AND MiD51 does not cause a more severe elongation phenotype than knockdown of either gene alone, indicating the two MiD proteins are not simply additive with each other [^loson2013]. However, either MiD49 or MiD51 can partially restore fission in Fis1/Mff-null cells when treated with CCCP, demonstrating that the MiDs constitute a distinct, partially compensatory receptor pool [^loson2013]. MFF preferentially recruits already-oligomerized DRP1, while MiD49/MiD51 can engage a broader DRP1 assembly state [^liu2015].

**Structural basis of DRP1 binding.** Cryo-EM analysis of the DRP1 GED domain in complex with receptor-derived peptides (Kalia et al. 2018) showed that both MID49 and MID51 interact with the GED/stalk region of DRP1 at a conserved surface distinct from the MFF interaction site, consistent with cooperative rather than mutually exclusive receptor function [^kalia2018]. #gap/needs-replication — Kalia 2018 PDF was downloaded but not read in this verification pass; this claim has not been confirmed against the full text.

**MID51–FIS1 oligomerization complex.** Wong et al. 2022 identified a coupled MID51–FIS1 oligomerization complex on the OMM that drives inter-lysosomal untethering events via Rab7 GTP hydrolysis — a quality-control event reorganising lysosomal networks. A Parkinson's disease-candidate MID51 oligomerization mutant (R169W) significantly disrupts MID51 oligomerization and impairs MID51/FIS1-coupled oligomerization, preferentially prolonging mitochondria-lysosome and inter-lysosomal tether duration; in contrast, the dominant optic atrophy-linked Drp1-binding mutant (Y240N) does not disrupt MID51/FIS1 oligomerization and does not impair lysosomal untethering, indicating the two disease mutations operate via mechanistically distinct pathways [^wong2022].

## The ADP/GDP nucleotide-binding mechanism

The most biochemically distinctive feature of MID51 is its ADP-binding domain. Crystal structures resolved by both Loson et al. and Richter et al. in 2014 show that:

- MID51's cytosolic domain adopts a nucleotidyl transferase (NTase) fold closest to cyclic GMP-AMP synthase (cGAS; RMSD 2.4 Å over 300 Cα atoms) — an ancient nucleotide-binding architecture [^loson2014structure][^richter2014]
- One ADP-binding pocket per monomer; Kd ≈ 0.5 μM (MANT-ADP fluorescence anisotropy, Loson 2014) or 2.9 ± 0.8 μM (ITC, Richter 2014); the two values reflect different methods and protein constructs
- GDP binds the same pocket with similar affinity (Kd ≈ 8.0 μM by MANT-GDP, Loson 2014; 3.8 ± 0.9 μM by ITC, Richter 2014); no binding detected for ATP, GTP, CTP, UTP, AMP, GMP, CDP, UDP, cAMP, or cGMP (Richter 2014)
- Removal of ADP (apo-MID51) strongly inhibits DRP1 assembly into spirals and suppresses DRP1 GTPase activity ~20-fold; ADP addition relieves this inhibition [^loson2014structure]
- **Implication for bioenergetic sensing:** In energy-depleted cells (elevated ADP:GDP ratio), MID51-mediated fission activity may be promoted; GDP may compete with ADP to reduce DRP1 activation [^loson2014structure]

This represents a potential mechanism by which MID51 could sense mitochondrial energetic status directly — translating the local ADP:GDP ratio into altered fission-site assembly kinetics, independent of upstream AMPK/mTOR signaling.

#gap/no-mechanism — Whether the ADP-binding affinity of MID51 is actually rate-limiting for fission in physiological energetic ranges (vs a permissive structural requirement) remains unresolved. The cellular ADP concentration changes required to meaningfully alter MID51 occupancy in intact cells have not been reported.

## Role in aging biology

MID51 is not a canonical "aging gene" — no direct GenAge entry, no longevity GWAS signal, no lifespan-extension or reduction reported from MIEF1 manipulation in model organisms. Its relevance to aging is **contextual**: as a regulator of fission–fusion balance, it sits within a process that is demonstrably perturbed with age in multiple tissues.

**Fission–fusion balance and aging.** Aged mitochondria accumulate in a fragmented or elongated state depending on tissue and stress context. In muscle, excess fission (DRP1-driven) is associated with sarcopenic atrophy; in neurons and cardiomyocytes, fission–fusion imbalance accompanies age-related dysfunction. Because MID51 is one of the proximal DRP1 recruiters, expression or activity changes in MID51 may contribute to these patterns. #gap/needs-human-replication — direct evidence that MID51 protein levels or activity change with age in human tissues is lacking as of 2026.

**Metabolic state coupling via ADP binding.** Aging is associated with altered mitochondrial membrane potential, reduced NAD+/NADH ratios, and elevated ADP/ATP ratios in some tissues. If MID51 activity is genuinely ADP-sensitive under physiological conditions, aged bioenergetic states could shift fission balance via MID51 allosteric regulation — an untested but mechanistically plausible hypothesis [^loson2014structure]. #gap/no-mechanism

**Mitochondria-derived vesicle (MDV) quality control.** König et al. 2021 showed that MID49/MID51/MFF-dependent DRP1 recruitment also drives MDV biogenesis — a pathway for selective export of oxidized or damaged mitochondrial proteins to lysosomes without full organelle fission [^konig2021]. #gap/no-fulltext-access — König 2021 (Nat Cell Biol) is closed-access; claim not verified against full PDF. MDV flux is a key component of mitochondrial quality control, and age-related declines in MDV pathway activity have been proposed (though poorly quantified in humans). MID51's role in MDV biogenesis makes it a plausible, if indirect, contributor to the age-related accumulation of mitochondrial damage.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | DRP1 receptor function conserved; MID51 is a vertebrate invention but human-relevant |
| Phenotype conserved in humans? | partial | Fission–fusion imbalance in aging shown in mouse and human cell lines; MID51-specific contribution not established |
| Replicated in humans? | no | No human genetic / aging-cohort data for MID51 specifically |

## Disease associations

**Dominant inherited optic neuropathy.** Heterozygous dominant *MIEF1* missense mutations cause a rare late-onset progressive optic neuropathy. Charif et al. 2021 identified the first such disease-causing *MIEF1* variants in two women (ages 55 and 47) from a French cohort of 200 individuals with undiagnosed inherited optic neuropathy: p.Y240N (in the DRP1-binding loop, residues 238–242) and p.R146W (in a region conserved in MID49, without previously characterized function) [^charif2021]. Both mutations do not abolish MID51 mitochondrial targeting or oligomerization, but significantly disrupt mitochondrial fission/fusion dynamics compared to wild-type MID51. The disease is characterised by initial peripheral visual field loss progressing to central visual loss, with bilateral optic disk pallor and severe RNFL loss. Charif et al. did not use the "OPA14" designation — this nomenclature may appear in subsequent OMIM curation but is not from the primary source. #gap/needs-replication — only two patients described.

**Parkinson's disease context.** Wong et al. 2022 identified the Parkinson's disease candidate variant Mid51(R169W), located in MID51's oligomerization domain, as impairing MID51–FIS1 oligomerization and preferentially disrupting mitochondria-lysosome and inter-lysosomal tethering dynamics, implicating disrupted MID51 scaffolding in dopaminergic neuron vulnerability [^wong2022].

## Interactors and pathway context

- **[[drp1]]** — primary recruited effector; direct physical interaction via DRP1 GED domain
- **[[mid49]]** (MIEF2) — closest paralog; heterodimerizes with MID51 on the OMM; partially redundant in DRP1 recruitment
- **[[mff]]** — major parallel DRP1 receptor; cooperates additively with MiD49/MiD51
- **[[fis1]]** — forms a distinct complex with MID51 that drives lysosomal untethering [^wong2022]; minor direct DRP1 recruitment role in mammals
- **[[opa1]]** — indirectly antagonized (OPA1 promotes inner membrane fusion; DRP1/MID51-driven fission opposes this)
- **[[mfn1]]** / **[[mfn2]]** — fusion machinery; net balance with MID51-recruited fission determines network morphology
- **[[mitophagy]]** — downstream quality control process that depends on appropriate fission to isolate damaged mitochondria for autophagic clearance

## Pharmacology and druggability

**Druggability tier: 3** — MID51 has no approved drugs or high-quality probes. Its nucleotide-binding domain is a potential small-molecule target site but has not been exploited clinically. The domain accepts ADP; competitive or allosteric inhibitors at that site have been proposed but not advanced.

**MIDI compound.** Yang et al. 2023 developed a covalent mitochondrial division inhibitor (MIDI) that targets **DRP1-C367** — blocking DRP1 interaction with its OMM receptors MFF and MiD49/MiD51. MIDI does not inhibit DRP1 tetramerization or GTPase activity directly; its mechanism is to disrupt DRP1 recruitment to the mitochondrial surface. MIDI potently blocks CCCP-induced mitochondrial fragmentation and restores morphology in cells carrying pathogenic mitofusin and OPA1 mutations [^yang2023]. This is a research tool compound; no clinical applications reported.

No ClinicalTrials.gov entries found for MIEF1/MID51-targeted interventions as of 2026-05-06.

## Gaps and open questions

- #gap/needs-human-replication — MID51 protein abundance and activity changes across human tissue aging not quantified
- #gap/no-mechanism — Whether ADP-binding titration at MID51 is rate-limiting for fission activity under physiological metabolic ranges
- #gap/needs-replication — MID51–FIS1 complex role in lysosomal untethering (Wong 2022 single study; significant mechanistic implication)
- #gap/dose-response-unclear — Stoichiometric relationship between MID51 OMM density and DRP1 recruitment rate not resolved in intact cells
- No mouse lifespan studies with MIEF1 gain- or loss-of-function; long-term phenotype in aged animals unknown

## Footnotes

[^palmer2011]: doi:10.1038/embor.2011.54 · Palmer CS et al. · EMBO Rep 2011 · n=N/A · in-vitro (HeLa + COS-7) · discovery of MiD49 and MiD51 as novel OMM fission components; loss of MiD49/MiD51 causes mitochondrial elongation
[^zhao2011]: doi:10.1038/emboj.2011.198 · Zhao J et al. · EMBO J 2011 · n=N/A · in-vitro (293T + HeLa) · MIEF1 is N-terminally anchored OMM protein (TM domain residues 24–46); MIEF1 overexpression promotes mitochondrial elongation/fusion by sequestering DRP1 in inactive state; knockdown causes fragmentation; residues 160–169 essential for DRP1 co-IP; residues 49–195 required for dimerization
[^loson2013]: doi:10.1091/mbc.E12-10-0721 · Loson OC et al. · Mol Biol Cell 2013 · n=N/A · in-vitro (MEF null lines: Fis1-null, Mff-null, Fis1/Mff-double-null) · Fis1, Mff, MiD49, MiD51 all mediate DRP1 recruitment; MFF is the dominant contributor; simultaneous MiD49+MiD51 double knockdown is NOT more severe than single knockdown; MiDs can restore fission in Fis1/Mff-null cells under CCCP treatment
[^loson2014structure]: doi:10.1016/j.str.2014.01.001 · Loson OC et al. · Structure 2014 · n=N/A · in-vitro + X-ray crystallography (2.0 Å ADP-bound; 2.2 Å apo) · MID51 requires ADP as an essential cofactor for DRP1 activation; one nucleotide-binding pocket per monomer (Kd ≈ 0.5 μM for MANT-ADP; 8.0 μM for MANT-GDP); NTase fold homologous to cGAS; apo-MID51 inhibits DRP1 GTP hydrolysis ~20-fold; ADP relieves inhibition and promotes DRP1 spiral assembly
[^richter2014]: doi:10.1083/jcb.201311014 · Richter V et al. · J Cell Biol 2014 · n=N/A · in-vitro + X-ray crystallography (human MID51ΔN118; 2.0 Å native; ADP- and GDP-bound structures) · independent structural analysis; identifies Drp1 Recruitment Region (DRR) as the β4–α4 loop residues 238–242 (PEYFP) and stabilising salt bridge R235–D249; ADP Kd = 2.9 ± 0.8 μM and GDP Kd = 3.8 ± 0.9 μM by ITC; nucleotide binding is not required for DRP1 recruitment but is required for DRP1 activation
[^liu2015]: doi:10.1091/mbc.E15-08-0591 · Liu R & Chan DC · Mol Biol Cell 2015 · n=N/A · in-vitro (MEF) · Mff preferentially recruits oligomerized DRP1; context for differential receptor selectivity
[^kalia2018]: doi:10.1038/s41586-018-0211-2 · Kalia R et al. · Nature 2018 · n=N/A · cryo-EM · structural basis of DRP1–receptor interaction; MID49/MID51 bind DRP1 GED at site distinct from MFF contact
[^charif2021]: doi:10.1186/s13024-021-00431-w · Charif M et al. · Mol Neurodegener 2021 · n=2 patients (200 screened) · human genetics + in-vitro (HeLa) · first dominant MIEF1 missense mutations linked to disease: p.Y240N (DRP1-binding loop) and p.R146W; both cause late-onset optic neuropathy with peripheral-to-central visual field loss; mutations do not disrupt MID51 localization or oligomerization but impair mitochondrial fission/fusion dynamics
[^konig2021]: doi:10.1038/s41556-021-00798-4 · König T et al. · Nat Cell Biol 2021 · n=N/A · in-vitro + in-vivo (mouse) · MID49/MID51/MFF-dependent DRP1 recruitment drives MDV biogenesis for mitochondrial quality control
[^wong2022]: doi:10.1083/jcb.202206140 · Wong YC et al. · J Cell Biol 2022 · n=N/A · in-vitro (HeLa, live super-resolution SIM) · coupled MID51/FIS1 oligomeric complex on OMM drives inter-lysosomal untethering via TBC1D15 (Rab7-GAP) recruitment; PD-candidate mutant Mid51(R169W) significantly reduces MID51 oligomerization and disrupts MID51/FIS1 complex, prolonging mitochondria-lysosome and inter-lysosomal tethering; optic atrophy mutant Mid51(Y240N) does not disrupt MID51/FIS1 oligomerization and does not impair lysosomal untethering
[^yang2023]: doi:10.1016/j.chembiol.2023.02.002 · Yang J et al. · Cell Chem Biol 2023 · n=N/A · in-vitro (U2OS, HeLa) · MIDI is a covalent compound that targets DRP1-C367, blocking DRP1 interaction with OMM receptors MFF and MiD49/MiD51; does not inhibit DRP1 GTPase activity; blocks CCCP-induced fragmentation; research tool compound, not clinical-stage
