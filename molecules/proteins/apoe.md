---
type: protein
aliases: [apolipoprotein E, Apo-E, APOE4, APOE3, APOE2, ApoE ε4, ApoE ε3, ApoE ε2]
uniprot: P02649
ncbi-gene: 348
hgnc: 613
ensembl: ENSG00000130203
genage-id: 138
mouse-ortholog: Apoe
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[chronic-inflammation]]", "[[altered-intercellular-communication]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: yes
caused-by: []
causes: ["[[atherosclerosis]]", "[[alzheimers-disease]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Schächter 1994, Montagne 2020, Shi 2017, Bejaoui 2025 verified against local PDFs; Farrer 1997 OR values confirmed via PubMed abstract (closed-access PDF); UniProt P02649 identity fields confirmed via REST API; Corder 1993, Mahley 1988/2000, Liu 2013, Christchurch 2019 not re-read (review/foundational — claims are standard literature; flag for PDF verification on next cycle if load-bearing claims change); lecanemab/donanemab ARIA figures not verified against current FDA package insert text — seeder approximation retained with existing caveat; Gerónimo-Olvera 2026 added 2026-05-20 — extracted + verified against PMC HTML full text (PMC13156074, CC-BY 4.0 gold OA); journal PDF not locally archived (paper post-dates a local paper archive OpenAlex snapshot); 2 corrections applied from verifier pass (rescue-experiment foci number+size completion; 50 ng/mL twice-weekly schedule added)"
literature-checked-through: 2026-05-20
---


# ApoE (APOE)

Apolipoprotein E is a secreted 299-amino-acid lipoprotein ligand that mediates the hepatic clearance of chylomicron remnants, IDL, and VLDL via LRP1 and LDLR, and serves as the dominant cholesterol-transport apolipoprotein in the central nervous system. Its three common alleles — **ε2, ε3, ε4** — differ at just two residues yet diverge dramatically in clinical consequence: ε4 is the strongest single common-variant genetic risk factor for late-onset Alzheimer's disease and moderately elevates cardiovascular risk, while ε2 is protective against AD and modestly lowers cardiovascular risk but predisposes to type III hyperlipoproteinemia in homozygotes. ApoE sits at the intersection of [[lipoprotein-metabolism]], neurodegeneration, and longevity biology, making it one of the most clinically consequential proteins in aging.

## Identity

| Field | Value |
|---|---|
| UniProt | P02649 (APOE_HUMAN) |
| HGNC | 613 |
| NCBI Gene | 348 |
| Ensembl | ENSG00000130203 |
| GenAge HAGR | 138 |
| Mouse ortholog | Apoe (one-to-one; ~70% sequence identity in coding region) |
| Chromosomal location | 19q13.32 |
| Gene cluster | APOE–APOC1–APOC4–APOC2 cluster (~50 kb region) |
| Precursor length | 317 aa (includes 18-aa signal peptide) |
| Mature protein length | 299 aa |

## Protein structure and domains

ApoE has two major structural domains connected by a flexible hinge:

- **N-terminal receptor-binding domain** (residues 1–167 mature; helices H1–H4) — contains the LDL receptor (LDLR/LRP1) binding region at mature residues 140–150 (approximately). The two polymorphic positions (mature 112 and 158) lie within this domain; their charge state directly alters receptor-binding affinity.
- **C-terminal lipid-binding domain** (residues 193–272 mature) — anchors ApoE to lipoprotein surfaces; contains amphipathic helices responsible for surface association with lipid particles.
- **Hinge region** (~residues 168–192 mature) — flexible linker; its conformation differs between lipid-bound and lipid-free forms.

**Key PTMs (UniProt):**
- O-glycosylation: Thr-26, Thr-36, Thr-212, Thr-307, Ser-308, Ser-314 (precursor numbering)
- Phosphorylation: Ser-147 (precursor)
- Glycation: Lys-93 (precursor; non-enzymatic modification)

## The three alleles: ε2, ε3, ε4

Two SNPs in exon 4 (rs429358, rs7412) generate the three alleles. The variants are specified here in **precursor numbering** (UniProt convention); mature-protein positions follow in parentheses:

| Allele | Precursor pos. 130 (= mature 112) | Precursor pos. 176 (= mature 158) | Pop. freq. (European) | LDLR/LRP1 binding |
|---|---|---|---|---|
| ε2 | Cys | Cys | ~7–8% | Markedly reduced |
| ε3 | Cys | Arg | ~77–78% | Normal (reference) |
| ε4 | Arg | Arg | ~14–15% | Mildly enhanced for VLDL/IDL |

- **rs429358** (Cys130Arg) distinguishes ε4 from ε2/ε3; this substitution eliminates a Cys–Cys intramolecular disulfide bond and introduces a positive charge in the receptor-binding helix, altering lipid-binding domain interaction and receptor preference.
- **rs7412** (Arg176Cys) distinguishes ε2 from ε3/ε4; the Cys176 substitution in ε2 disrupts the Arg158 salt bridge normally stabilizing the receptor-binding region, dramatically reducing LDLR/LRP1 binding.

**Six diploid genotypes** (approximate European frequencies):
ε2/ε2 (~1%), ε2/ε3 (~13%), ε2/ε4 (~2%), ε3/ε3 (~60%), ε3/ε4 (~23%), ε4/ε4 (~2%).

The structural perturbations from these single Cys↔Arg substitutions propagate into large differences in lipoprotein handling and amyloid clearance, as described below.

## Function: lipoprotein clearance

ApoE is produced primarily by hepatocytes, but also by astrocytes, neurons, macrophages, and peripheral tissues. Its lipoprotein-context differs by compartment:

**Plasma compartment:** ApoE decorates chylomicron remnants (dietary fat processing, gut origin), IDL, VLDL, and a subclass of HDL. After triglyceride lipolysis by lipoprotein lipase ([[lpl]]), remnant particles enriched in ApoE and ApoC-III enter hepatic clearance via **LRP1** (primary receptor on hepatocytes) and **[[ldlr]]** (secondary, capacity-limited). This "ApoE pathway" clears postprandial remnant lipoproteins — it is functionally distinct from the ApoB-100-LDLR pathway that removes LDL [^mahley1988].

Allelic effects on clearance:
- **ε3** supports efficient remnant clearance (normal receptor binding; reference).
- **ε4** has mildly enhanced affinity for VLDL/IDL surface lipids; counterintuitively, ε4 carriers do NOT clear remnants faster in vivo — likely because the stronger VLDL affinity reduces the proportion of ApoE available to facilitate LDL-sized particle clearance. Net effect: modest 5–10 mg/dL increase in LDL-C per ε4 allele, partly from enhanced LDLR downregulation [^mahley2000].
- **ε2** has markedly reduced LDLR/LRP1 binding → impaired remnant clearance → accumulation of β-VLDL (cholesterol-enriched remnants). In most ε2/ε2 individuals this is compensated by upregulation of LDLR. However, in ~1–4% of ε2/ε2 individuals (or when combined with secondary dyslipidemia), decompensated remnant accumulation manifests as **type III hyperlipoproteinemia** (see below).

**CNS compartment:** ApoE is the principal apolipoprotein in the brain; ApoB-containing lipoproteins do not cross the blood-brain barrier. Astrocytes are the dominant CNS ApoE producers; they secrete ApoE-rich HDL-like particles that deliver cholesterol to neurons via LRP1 (expressed on neuronal soma and dendrites). Neuronal cholesterol homeostasis — especially for synaptic maintenance, axon myelination, and dendritic growth — depends on this astrocyte-to-neuron ApoE shuttle. The ApoE isoform expressed determines the efficiency and structural integrity of this lipid transfer [^liu2013apoe].

## ε2 and type III hyperlipoproteinemia

**Type III hyperlipoproteinemia** (familial dysbetalipoproteinemia, ICD-10 E78.2) is a lipid disorder characterized by:
- Markedly elevated remnant lipoproteins (IDL + chylomicron remnants = "broad beta" band on electrophoresis)
- Elevated plasma cholesterol + triglycerides (both >300 mg/dL in classic presentation)
- Palmar xanthomas (xanthoma striata palmaris) — pathognomonic
- Premature coronary artery disease and peripheral vascular disease

ε2/ε2 homozygosity is present in >90% of type III cases, but the allele itself is insufficient — the estimated 1–4% penetrance of full clinical disease in ε2/ε2 individuals implies a required second metabolic hit (obesity, hypothyroidism, type 2 diabetes, diabetes, sex hormone imbalance) [^mahley2000]. Clinically, type III responds well to fibrates (reduce VLDL/remnant production) and dietary fat reduction.

In heterozygous form (ε2/ε3 or ε2/ε4), ε2 generally lowers total cholesterol and LDL-C modestly and is **mildly cardioprotective** for atherosclerotic cardiovascular disease. #gap/needs-replication — large-scale MR for ε2 heterozygotes specifically is understudied relative to ε4.

## ε4 and cardiovascular disease

The cardiovascular effects of ε4 operate via:
1. **Impaired LDLR feedback** — ApoE4 particles have subtly altered lipoprotein composition that reduces hepatic LDLR upregulation, leading to higher circulating LDL-C (~5–10 mg/dL per ε4 allele on average) [^mahley2000].
2. **Remnant accumulation** — postprandial hypertriglyceridemia and remnant-lipoprotein elevation are somewhat more pronounced in ε4 carriers after fat loading.
3. **Pro-inflammatory lipid milieu** — ε4 astrocytes and macrophages appear more susceptible to lipid-induced stress.

Net cardiovascular risk: ~30–40% relative increase in coronary artery disease events per ε4 allele over lifetime, though the effect is modest compared to the dominant AD risk effect [^mahley2000].

**Statins in ε4 carriers:** Standard cardiovascular indication; ε4 carriers may derive relatively greater absolute benefit because their baseline LDL-C elevation yields higher residual risk that statins can correct. Some observational evidence for enhanced LDL-lowering response, but this is not sufficiently powered to alter prescribing decisions. #gap/contradictory-evidence

## ε4 and Alzheimer's disease

ApoE ε4 is the strongest common-variant genetic risk factor for late-onset Alzheimer's disease [^corder1993]. The risk magnitude scales with gene dose [^farrer1997]:

| Genotype | Approximate OR (vs ε3/ε3, European Caucasian) | Approximate mean onset age shift |
|---|---|---|
| ε2/ε2 | ~0.4 (protective) | ~+5 yr (later onset) |
| ε2/ε3 | ~0.6 (mildly protective) | ~+2 yr |
| ε3/ε3 | 1.0 (reference) | Reference (~75 yr) |
| ε3/ε4 | ~3.2 | ~–5 yr earlier onset |
| ε4/ε4 | ~14.9 | ~–7–10 yr earlier onset (~67–68 yr mean) |

Odds ratios from Farrer 1997 JAMA meta-analysis (pooled case-control, n > 5,000 Caucasians) [^farrer1997]. Effect attenuates after age 75; ε4/ε4 individuals who survive to 90+ are enriched for protective genetic modifiers.

**ε2 protection:** ε2 carriers are under-represented among AD patients; ε2/ε2 homozygotes appear to have lower AD incidence but direct evidence for cognitive resilience *in the presence of* high amyloid burden is limited and understudied due to the allele's rarity. The APOE3 Christchurch case (Arboleda-Velasquez 2019, a distinct variant at Arg136Ser in an APOE3 homozygote with a PSEN1 mutation) dramatized how ApoE structural variants can confer protection against tau pathology and neurodegeneration despite extreme amyloid burden [^christchurch2019]. #gap/needs-replication — ε2/ε2 homozygous human functional studies are limited by low allele frequency (#gap/unsourced — the claim about ε2/ε2 + high amyloid + resilience lacks a primary citation; the Christchurch case is APOE3 Christchurch, not ε2/ε2).

**Mechanisms (AD, still debated):**

### 1. Amyloid-β clearance
ApoE facilitates Aβ clearance from the brain interstitium via LRP1-mediated transport across the blood-brain barrier and glial uptake. ε4 is less efficient at facilitating Aβ clearance than ε3 or ε2 [^liu2013apoe]. Additionally, ε4 may seed or accelerate Aβ fibril formation. Net effect: ε4 carriers accumulate amyloid earlier and more extensively.

### 2. CNS cholesterol and lipid transport
ε4 forms smaller, lipid-poor HDL-like particles in the CNS compared to ε3 [^liu2013apoe]. Inefficient astrocyte-to-neuron cholesterol delivery impairs synaptic membrane renewal, LTP, and axon repair. This lipid-transport defect is proposed as an upstream contributor to both tau pathology and amyloid accumulation.

### 3. Tau pathology (independent of amyloid)
Shi et al. 2017 showed in a P301S tauopathy mouse model that ApoE4 markedly exacerbates tau-mediated neurodegeneration, brain atrophy, and neuroinflammation compared to ApoE2 and ApoE3, **independently of amyloid-β pathology** [^shi2017]. This raised the possibility that ApoE's effect on AD is partially amyloid-independent — a significant revision of the ApoE-as-Aβ-clearance-factor framing.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype (tau exacerbation) conserved? | partial — mouse tauopathy; direct human tau-ApoE interaction data is limited |
| Replicated in humans? | partial — GWAS and pathological staging data support the connection; mechanism not directly demonstrated in human neurons |

### 4. Neuroinflammation
ε4 microglia adopt a more pro-inflammatory transcriptional state compared to ε3 microglia in both aging and AD contexts, though the mechanism (cell-intrinsic ε4 expression vs systemic lipid milieu) is debated. #gap/no-mechanism

### 5. Blood-brain barrier integrity
Montagne et al. 2020 (total enrolled n=435; n=245 underwent DCE-MRI for BBB analysis, comprising both cognitively normal and mildly impaired participants; CSF sPDGFRβ in n=350) showed that ε4 carriers (ε3/ε4 and ε4/ε4 pooled) exhibit hippocampal/parahippocampal gyrus BBB breakdown that predicts cognitive decline **independently of amyloid and tau** [^montagne2020]. Elevated CSF soluble platelet-derived growth factor receptor-β (sPDGFRβ), a pericyte injury marker, predicted cognitive decline in ε4 carriers after controlling for CSF Aβ and pTau status. ε4-associated BBB breakdown was present even in cognitively unimpaired carriers and more severe in those with cognitive impairment. This established BBB dysfunction as a distinct ε4-driven mechanism upstream of, or parallel to, Aβ deposition, mediated via the CypA-MMP9 pathway in brain capillary pericytes.

## Neuronal DNA repair and senescence resistance (ε2 protective mechanism)

Beyond lipid handling and amyloid clearance, **ApoE genotype shapes neuronal genome maintenance and susceptibility to cellular senescence**. Gerónimo-Olvera et al. 2026 (*Aging Cell*) generated isogenic human iPSC-derived GABAergic inhibitory neurons (ε2/ε2 vs ε4/ε4) and Ngn2-induced glutamatergic excitatory neurons (ε2/ε2, ε3/ε3, ε4/ε4), and complemented these with 16-month female human-APOE targeted-replacement (B6.129P2) mice [^geronimo2026]. This is the first **multi-system isogenic functional study of ε2/ε2 human neurons**, circumventing the long-standing methodological barrier posed by the rarity of homozygous ε2/ε2 individuals (~1% of European populations) for primary cellular studies.

### DNA damage and DDR kinetics

- **ε4 > ε3 ≥ ε2** for pγH2AX puncta, comet-assay tail moment, 53BP1 foci size, and p-ATM foci size — across basal, post-irradiation (10 Gy), and post-doxorubicin (200 nM) conditions.
- ε2 NSCs resolve γH2AX/53BP1/p-ATM foci faster than ε4 after 5 Gy IR (p<0.05; n=3) — the DDR-kinetics phenotype is established at the neural-progenitor stage, not differentiation-dependent.
- **Extracellular recombinant APOE2 (50 ng/mL, applied from day 11, twice weekly)** reduced both pγH2AX foci number and foci size, and both 53BP1 foci number and foci size in APOE4 neurons after irradiation (p<0.05–0.0001; n=3) — suggesting a non-cell-autonomous protective mechanism that could be drug-tractable via recombinant ApoE2 or peptidomimetics.
- Bulk RNA-seq (ε2 vs ε4 GABAergic): 1,403 DEGs; ε2-upregulated **DNA-repair hub genes** include *BRCA1*, *CDK1*, *PLK1*, *TOP2A*, *BLM*, *RAD9B*; GO enrichment: DNA damage response, DNA repair, genomic stability (FDR<0.05).

### Senescence-associated phenotypes — ε2 resists, ε4 acquires

| Marker | Phenotype direction | System |
|---|---|---|
| p16 (CDKN2A) | ε4 > ε2, ε3 post-IR (p<0.0001) | Glutamatergic |
| CRYAB | ε4 > ε2 basal + post-IR (p<0.05) | Glutamatergic |
| Lamin A/C | ε2 > ε3, ε4 basal; ε2 preserved post-IR while ε3/ε4 decrease | Glutamatergic + mouse hippocampus (p<0.0001 in mouse, n=3–4) |
| H3K9me3 | ε2 maintains post-IR; ε2 > ε3, ε4 in aged mouse hippocampus (p<0.001–0.0001) | Glutamatergic + mouse hippocampus |
| Nuclear HMGB1 | ε2 > ε3, ε4 in aged mouse hippocampus (p<0.05–0.0001) | Mouse — nuclear retention = anti-SASP signature |
| Nucleolar size (Nucleolin IF) | ε2 ≈ ε3 < ε4 basal + post-IR (p<0.01–0.001) | Glutamatergic + mouse |
| Repetitive rRNA (RepEnrich2) | ε4 elevated rRNA, reduced SINE/LINE/LTR (p<0.05 DESeq2) | GABAergic — links to nucleolar stress / senescence |

The phenotype cluster — **smaller nucleoli + preserved lamin A/C + retained H3K9me3 + nuclear HMGB1 + restrained rRNA transcription** — independently aligns with longevity correlates established across multiple model systems: small nucleoli predict lifespan in *C. elegans* and laminopathy lines; lamin / heterochromatin loss is a hallmark of Hutchinson-Gilford progeria; HMGB1 nuclear retention is anti-SASP; nucleolar restraint corresponds to reduced rDNA-array instability. APOE2 neurons thus co-localize multiple cell-biological longevity signatures.

### Single-cell transcriptional clusters

scRNA-seq of GABAergic neurons (7,328 cells, 7 Seurat clusters; GEO GSE143276): ε4-enriched clusters express AD-elevated markers *VCAN*, *TXNIP*, *VSNL1*; ε2-enriched clusters upregulate *VGF* (a "master regulator" of AD networks, downregulated in AD brain) and *IGSF21* (inhibitory-synapse stabilizer). Inflammatory-signaling and DNA-repair pathways together account for ~43% of cluster-defining biology.

### Mechanistic implication

Gerónimo-Olvera 2026 promotes ApoE from "lipid-transport / amyloid-clearance protein" to a **modifier of neuronal genome maintenance**. The protein either differentially scaffolds DDR machinery, differentially regulates DNA-repair gene transcription, or shifts the balance of senescence vs survival decisions downstream of DNA damage. Recombinant-protein rescue in trans suggests at least part of the effect operates via extracellular ApoE2 signaling rather than purely cell-autonomous expression. Net effect: APOE2 neurons resist acquisition of senescence-associated nuclear/nucleolar features that accumulate in APOE4 neurons under genotoxic stress, providing a mechanistic substrate for the population-genetics longevity signal.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (isogenic human iPSC + APOE-TR mouse converge) |
| Phenotype conserved in humans? | yes (in-vitro human neurons + aged mouse hippocampus) |
| Replicated in humans? | partial — single-donor isogenic panels; replication in independent labs and additional donor backgrounds is the natural next step. #gap/needs-replication |

## Aging relevance and longevity

**GenAge:** APOE is registered in GenAge human database (HAGR ID 138), supported by multiple human longevity association studies.

**Centenarian studies:** ε2 is enriched in centenarians [^schachter1994]; ε4 is depleted — one of the most consistently replicated longevity genetics findings. Schächter et al. 1994 (n = 325 APOE-typed centenarians vs. n = 161 controls) showed the APOE allele frequency shift was significant at the population level (ε2: 12.8% vs 6.8%, p<0.01; ε4: 5.2% vs 11.2%, p<0.001), implicating ε4-associated diseases (AD, CVD) as survival barriers in late life.

**Epigenetic aging clocks:** ε4 carriers show accelerated epigenetic aging by GrimAge. Bejaoui et al. 2025 (screened n>14,669 Qatar BioBank participants; 23 APOE ε2/ε2 individuals with EPIC v2 methylation arrays vs matched ε3/ε3 controls and 10 ε4-allele carriers) demonstrated that APOE*E2 (ε2/ε2) is associated with reduced GrimAge epigenetic age acceleration relative to ε4 carriers (p=0.043), linking the longevity-genetics signal to methylation-based biological aging [^bejaoui2025]. #gap/needs-replication — Qatar-specific cohort; the methylation-analyzed subgroup is small (n=88 total with arrays); causal direction not established.

**ε4 and pace of aging:** Observational and Mendelian randomization studies consistently implicate ε4 in accelerated aging trajectories across multiple biological systems (neurological, vascular, metabolic). MR for ε4 and AD/CVD is canonical [^corder1993][^farrer1997]; direct MR for broader aging pace via ε4 as instrument is less developed. `mr-causal-evidence: yes` is justified by the AD and CVD MR literature.

## Therapeutic context

**No allele-specific ApoE drug is FDA-approved.** Therapeutic strategy is currently allele-independent (treat comorbidities — CVD, AD).

**Anti-amyloid immunotherapy and ε4 ARIA risk:** Lecanemab (Leqembi) and donanemab anti-Aβ mAbs confer meaningfully higher ARIA (amyloid-related imaging abnormalities — edema and microhemorrhage) in ε4/ε4 carriers:
- Lecanemab CLARITY AD trial: ARIA-E rate ~35% in ε4/ε4 vs ~10% ε3/ε3 (approximate figures; verify against current FDA label)
- Donanemab TRAILBLAZER-ALZ 2 trial: similar ARIA-E enrichment in ε4/ε4
- FDA labels for both agents recommend genetic testing before prescribing; ε4/ε4 status prompts enhanced MRI monitoring and individualized risk-benefit discussion. The risk-benefit in ε4/ε4 carriers remains actively debated. #gap/long-term-unknown

**ε4→ε3 base editing (preclinical):** Neuronal base-editing strategies (using CRISPR adenine base editors delivered by AAV) to convert ε4→ε3 at the rs429358 locus have been demonstrated in vitro and in animal models. No human trials. Represents the most direct therapeutic approach; major barriers are in vivo CNS delivery efficiency and off-target editing risk. #gap/needs-human-replication

**Statins for ε4 cardiovascular risk:** Standard of care. The ApoE-mediated LDLR-downregulation pathway is the same target statins address; see [[ldlr]] and [[pcsk9]] for the pharmacological cascade.

## Pathway membership

- [[lipoprotein-metabolism]] — ApoE is a key node: mediates remnant clearance via LRP1/LDLR; allelic variation drives type III hyperlipoproteinemia (ε2/ε2) and LDL-C elevation (ε4)
- [[alzheimers-disease]] — ApoE ε4 is the strongest common genetic risk factor for LOAD; acts via Aβ clearance, CNS cholesterol transport, tau pathology, BBB integrity, and neuroinflammation

## Key interactors

- **[[ldlr]]** — hepatic low-density lipoprotein receptor; ε3/ε4 bind; ε2 has reduced affinity
- **LRP1** (LDL receptor-related protein 1) — primary hepatic ApoE receptor for remnant clearance; also expressed on neurons for ApoE-cholesterol uptake in CNS. *Implicit stub: [[lrp1]] does not yet exist.*
- **[[apob]]** — ApoB-100-containing LDL particles do not carry ApoE; ApoB and ApoE operate parallel clearance pathways through the same receptor (LDLR)
- **[[pcsk9]]** — degrades hepatic LDLR; interplay with ApoE pathway: PCSK9 inhibitors upregulate LDLR and benefit ε4 carriers
- **[[apoa1]]** — co-found on HDL particles; ApoA1 and ApoE cooperate on CNS HDL-like particles

## Downstream phenotypes / causes

- [[atherosclerosis]] — ε4-associated LDL-C elevation and remnant accumulation accelerate plaque formation
- [[alzheimers-disease]] — strongest common-variant risk factor (ε4); protective modifier (ε2)
- **Type III hyperlipoproteinemia** (ICD-10 E78.2) — ε2/ε2 with secondary metabolic insult → familial dysbetalipoproteinemia. *Implicit stub if no dedicated page exists.*

## Limitations and gaps

- #gap/needs-human-replication — tau-ApoE mechanistic link established in mouse tauopathy model (Shi 2017); direct demonstration in human neurons is lacking. (Gerónimo-Olvera 2026 [^geronimo2026] now provides human-iPSC mechanistic data for the DNA-damage / senescence axis but did not directly assay tau.)
- #gap/needs-replication — ε2/ε2 functional studies were severely limited by allele rarity; **Gerónimo-Olvera 2026 [^geronimo2026]** now provides the first isogenic ε2/ε2 vs ε3/ε3 vs ε4/ε4 human iPSC functional data + aged APOE-TR mouse confirmation, but single-donor isogenic-line replication across independent labs and additional donor backgrounds remains needed.
- #gap/unsourced — RESOLVED for the DNA-repair / senescence axis: Gerónimo-Olvera 2026 [^geronimo2026] is the first isogenic ε2/ε2 human-neuronal functional study. The original framing — *cognitive resilience in the presence of high amyloid burden* — still lacks a direct cohort study of ε2/ε2 individuals stratified by amyloid burden; the Gerónimo-Olvera mechanism is upstream of, not a substitute for, that imaging/CSF-cohort question.
- #gap/needs-human-replication — ε4→ε3 base editing approach is preclinical only; no human CNS gene-therapy trials for ApoE.
- #gap/long-term-unknown — ARIA risk in ε4 carriers on lecanemab/donanemab beyond 18-month trial windows is unknown; long-term safety data pending.
- #gap/no-mechanism — ε4 microglial pro-inflammatory phenotype: cell-intrinsic vs. systemic lipid-environment effect not resolved.
- #gap/contradictory-evidence — the relative contribution of Aβ-clearance vs. tau-enhancement vs. BBB-dysfunction vs. neuroinflammation to the ε4 AD risk signal is unresolved; different model systems prioritize different mechanisms.
- #gap/needs-canonical-id — LRP1 (primary remnant-clearance receptor) does not have a dedicated protein page; referenced as implicit stub above.

## Footnotes

[^mahley1988]: doi:10.1126/science.3283935 · review · Science 1988 · Mahley 1988 — foundational review of ApoE structure and function in lipoprotein metabolism; classic reference for the two-domain model and allelic receptor-binding differences
[^mahley2000]: doi:10.1146/annurev.genom.1.1.507 · review · Annual Review of Genomics and Human Genetics 2000 · Mahley & Rall — comprehensive review of ApoE biology including allele-specific effects on lipoprotein metabolism, type III HLP, and cardiovascular risk; 1,797 citations
[^corder1993]: doi:10.1126/science.8346443 · n=not stated (late-onset family pedigrees) · observational (case-control, 42 families) · model: human · Corder EH et al. 1993 Science 9,276 citations — established ε4 gene-dose effect on AD risk; risk for AD increased from 20% to 90% with ε4 copy number in familial LOAD
[^farrer1997]: doi:10.1001/jama.1997.03550160069041 · PMID:9343467 · n=5,930 AD cases + 8,607 controls (40 research teams pooled) · meta-analysis · model: human · Farrer LA et al. 1997 JAMA — ε3/ε4 OR=3.2 (95% CI 2.8–3.8); ε4/ε4 OR=14.9 (95% CI 10.8–20.6) vs ε3/ε3 in European Caucasians; effect moderated by age (diminishes after 75) and ethnicity; ε4 risk factor across all ethnic groups; closed-access — OR values confirmed via PubMed abstract
[^schachter1994]: doi:10.1038/ng0194-29 · n=325 centenarians + n=161 controls (total enrolled 338 centenarians; 325 APOE-typed) · observational · model: human · Schächter F et al. 1994 Nature Genetics — ε2 enriched (12.8% vs 6.8%, p<0.01), ε4 depleted (5.2% vs 11.2%, p<0.001) in French centenarians vs age-20–70 controls; local PDF verified
[^shi2017]: doi:10.1038/nature24016 · in-vivo (mouse, P301S tauopathy × human ApoE knock-in, C57BL/6 ~90% background; n=11–38/group depending on endpoint and age) + in-vitro (primary neurons + mixed glia co-culture) · model: mouse + in-vitro human primary tauopathy data · Shi Y et al. 2017 Nature — ApoE4 markedly exacerbates tau-mediated neurodegeneration, brain atrophy, and neuroinflammation vs ApoE2/E3; effect greatly attenuated in ApoE-KO mice; ApoE4 also associated with more severe neurodegeneration in human primary tauopathy (sporadically, ε4 allele associated with worse regional neurodegeneration independently of amyloid); local PDF verified
[^montagne2020]: doi:10.1038/s41586-020-2247-3 · n=435 enrolled; n=245 DCE-MRI (BBB); n=350 CSF sPDGFRβ · observational (CSF + DCE-MRI) · model: human · Montagne A et al. 2020 Nature — APOE4 carriers (ε3/ε4 + ε4/ε4 pooled) show hippocampal/parahippocampal BBB breakdown and elevated CSF sPDGFRβ (pericyte injury marker) predicting cognitive decline independently of amyloid and tau; CypA-MMP9 pathway implicated; local PDF verified
[^christchurch2019]: doi:10.1038/s41591-019-0611-3 · n=1 (case report) · observational · model: human · Arboleda-Velasquez JF et al. 2019 Nature Medicine 550 citations — APOE3 Christchurch homozygote with PSEN1 mutation remained cognitively intact despite extreme amyloid burden; illustrates ApoE structural variants as modifiers of AD resilience
[^liu2013apoe]: doi:10.1038/nrneurol.2012.263 · review · Nature Reviews Neurology 2013 · Liu CC et al. — comprehensive review of ApoE isoform biology in AD and CNS: Aβ clearance, cholesterol transport, synaptic function, BBB maintenance; 3,332 citations
[^bejaoui2025]: doi:10.1007/s11357-025-01548-2 · n>14,669 (Qatar BioBank / Qatar Genome Project; 23 APOE ε2/ε2 homozygotes vs 41 age/sex-matched ε3/ε3 controls + 10 APOE4 allele carriers studied for methylation) · observational (epigenetic clock, EPIC v2 arrays) · model: human · Bejaoui Y et al. 2025 GeroScience — APOE*E2 (ε2/ε2) associated with reduced GrimAge epigenetic age acceleration vs APOE4 carriers (p=0.043); PCSK9 protective variant associated with significant immune/cardiovascular methylation signatures; Qatari cohort limits generalizability; local PDF verified
[^geronimo2026]: [[studies/geronimo-olvera-2026-apoe2-dna-repair-senescence]] · doi:10.1111/acel.70494 · PMID:42103698 · PMC13156074 · in-vitro (isogenic human iPSC-derived GABAergic + Ngn2 glutamatergic neurons; ε2/ε2, ε3/ε3, ε4/ε4) + in-vivo (16-mo female human-APOE targeted-replacement B6.129P2 mice, n=3–4/genotype) · model: human + mouse · Gerónimo-Olvera C et al. 2026 *Aging Cell* 25(5):e70494 — APOE2 neurons exhibit reduced endogenous DNA damage (γH2AX, comet), faster DDR resolution (53BP1, p-ATM), preserved Lamin A/C and H3K9me3 under genotoxic stress, smaller nucleoli, nuclear HMGB1 retention, restrained rRNA transcription; ε2-DEG hubs *BRCA1/CDK1/PLK1/TOP2A/BLM/RAD9B* (DNA repair) and *VGF* (AD master regulator, ε2-upregulated); recombinant APOE2 (50 ng/mL twice-weekly from day 11) partially rescues APOE4 DDR phenotype in trans (reduces pγH2AX + 53BP1 foci number AND size); aged APOE2 mouse hippocampus recapitulates the in-vitro lamin/H3K9me3/HMGB1/nucleolar signature; PMC HTML full text (PMC13156074) verified 2026-05-20 (CC-BY 4.0 gold OA; journal PDF not locally archived — post-snapshot)
