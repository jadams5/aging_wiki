---
type: phenotype
aliases: [AD, Alzheimer disease, late-onset Alzheimer disease, LOAD, sporadic Alzheimer disease, familial Alzheimer disease, EOAD, early-onset Alzheimer disease]
icd-10: G30
icd-11: 8A20
affected-tissues: ["[[brain]]", "[[hippocampus]]", "[[entorhinal-cortex]]", "[[cerebral-cortex]]"]
underlying-hallmarks: ["[[loss-of-proteostasis]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]", "[[cellular-senescence]]", "[[genomic-instability]]"]
typical-onset: "65+ (LOAD, ~95% of cases); 30–65 (FAD/EOAD, ~1–5% of cases)"
prevalence-65plus: "~10% at age 65; ~30–50% at age 85+ (varies by diagnostic criteria and population)"
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Hara 2006 (Atg5), Komatsu 2006 (Atg7), Guerreiro 2013 (TREM2), van Dyck 2023 (lecanemab), Sims 2023 (donanemab), Strittmatter 1993 (APOE) verified against full-text PDFs. Jonsson 2013 OR verified via PubMed abstract (full text unavailable). Hardy & Higgins 1992, Hardy & Selkoe 2002, Corder 1993 unverifiable — closed-access (not_oa). Sex-differences section verified 2026-06-03: Mosconi 2017 verified against full-text PDF; Neu 2017 ORs/CIs/P-value verified against PubMed abstract (PMID 28846757); Coughlan/Buckley 2026 and Li 2026 existence and key claims verified against PubMed abstracts (PMID 41697669; Crossref DOI 10.1002/alz.71031); Xiong 2022 verified against full-text PDF; Snyder 2016 issue corrected 10→11; Mishra 2022 framing verified via PubMed abstract (PMID 34929348). Neu 2017 and Snyder 2016 full text not available. Infectious-hypothesis + herpes-zoster-vaccination section and endogenous-lithium-depletion note added 2026-06-07 (from YouTube-lead ingest): all effect sizes (Eyting 2025 Nature RD/IV estimates; Xie 2025 Cell MCI/mortality; Taquet 2024 RMTL; Scherrer 2021 31%; Aron/Yankner 2025 lithium) cross-confirmed against PMC full-text-derived summaries and multiple independent secondary sources, but NOT yet read end-to-end against the primary PDFs — treat as abstract/full-text-summary verified, pending wiki-verifier PDF pass."
---

# Alzheimer's Disease

The most common cause of dementia and the leading neurodegenerative disease globally. A slowly progressive, ultimately fatal disorder characterized by extracellular amyloid beta (Aβ) plaques, intracellular hyperphosphorylated tau neurofibrillary tangles (NFTs), widespread synaptic loss, and neuronal death culminating in brain atrophy. It is simultaneously a disease of protein aggregation ([[loss-of-proteostasis]]), chronic neuroinflammation ([[chronic-inflammation]]), and dysregulated cellular quality control ([[disabled-macroautophagy]]), making it a high-value target for hallmark-of-aging–based intervention strategies. Approximately 55 million people are affected worldwide (2023 estimate); the number is projected to triple by 2050 as global populations age.

## Neuropathology

### Amyloid beta plaques

Amyloid precursor protein (APP) is sequentially cleaved by β-secretase (BACE1) then γ-secretase (a complex containing presenilin-1 or presenilin-2, NCSTN, APH1, and PEN2). The γ-secretase cut site determines Aβ length; cleavage at position 42 instead of 40 produces Aβ42, which is more aggregation-prone. Aβ42 monomers self-assemble through soluble oligomers → protofibrils → mature insoluble fibrils, depositing extracellularly as diffuse and neuritic plaques. Hardy and Higgins first proposed the **amyloid cascade hypothesis** in 1992: that Aβ deposition is the initiating event and all other pathologies (tau tangles, inflammation, neuronal death) are downstream consequences [^hardy1992]. Hardy and Selkoe extended this framework in a 2002 review establishing soluble Aβ oligomers — not mature plaques — as the primary toxic species [^hardy2002].

The amyloid cascade hypothesis remains the dominant framework and underlies virtually all disease-modifying clinical trials, though it is contested by alternative views emphasizing tau, neuroinflammation, or synaptic failure as primary drivers. #gap/contradictory-evidence — see [[hypotheses/amyloid-cascade-hypothesis]] (stub).

### Tau neurofibrillary tangles

Tau (MAPT gene product) is a microtubule-associated protein that normally stabilizes neuronal microtubule networks. In AD, tau is hyperphosphorylated at multiple residues by kinases including GSK3β and CDK5 → microtubule dissociation → intracellular aggregation into paired helical filaments → NFTs. Tau pathology propagates in a characteristic anatomical sequence (transentorhinal → limbic → neocortical, the Braak staging system). NFTs correlate more tightly with cognitive decline than plaque burden. Tau also acts as a substrate for [[chaperone-mediated-autophagy]]; impaired CMA is proposed to accelerate tau accumulation [^cma-tau-ref].

### Synaptic loss and neurodegeneration

Synaptic loss precedes neuronal death and correlates most strongly with clinical dementia severity. The hippocampus and entorhinal cortex are earliest and most severely affected, producing the characteristic early-stage memory impairment. Later spread to association cortices drives executive dysfunction, language decline, and ultimately motor and autonomic failure.

## Genetic risk architecture

### APOE ε4 — the dominant common-variant risk allele

APOE encodes apolipoprotein E, a lipid transport protein with three common isoforms (ε2/ε3/ε4) determined by rs429358 and rs7412 polymorphisms. The ε4 isoform impairs Aβ clearance and promotes its aggregation. Strittmatter et al. 1993 established APOE ε4's high-avidity binding to Aβ and its elevated frequency in late-onset familial AD [^strittmatter1993]. Corder et al. 1993 demonstrated a dose-response relationship: one ε4 allele confers ~3–4× risk increase; two ε4 alleles confer ~12× risk increase; the ε2 allele is protective (~0.6× risk) [^corder1993]. The ε4 allele is present in approximately 25% of the general population and in ~40–65% of late-onset AD patients. APOE ε4 does not cause AD inevitably — many ε4/ε4 homozygotes do not develop AD — but it substantially lowers age of onset.

| APOE genotype | Approximate AD risk (relative to ε3/ε3) |
|---|---|
| ε2/ε2 | ~0.4× |
| ε2/ε3 | ~0.6× |
| ε3/ε3 | 1× (reference) |
| ε3/ε4 | ~3–4× |
| ε4/ε4 | ~8–15× |

**APOE2 protective mechanism in human neurons.** Gerónimo-Olvera et al. 2026 (*Aging Cell*) generated isogenic human iPSC-derived GABAergic and Ngn2-induced glutamatergic neurons spanning all three APOE genotypes, with confirmatory aged (16 mo) human-APOE targeted-replacement mouse hippocampi [^geronimo2026]. APOE2 neurons exhibited (i) reduced endogenous DNA damage (γH2AX, alkaline comet), (ii) faster DDR resolution (53BP1, p-ATM kinetics), (iii) transcriptional enrichment of DNA-repair hub genes (*BRCA1, CDK1, PLK1, TOP2A, BLM, RAD9B*), (iv) preserved nuclear lamin A/C and H3K9me3 heterochromatin under irradiation or doxorubicin stress, (v) smaller nucleoli with restrained ribosomal-RNA transcription (vs APOE4 nucleolar hypertrophy + elevated rRNA), and (vi) reduced acquisition of senescence markers (p16, CRYAB). The aged APOE2 mouse hippocampus recapitulated the lamin A/C + H3K9me3 + nuclear HMGB1 + small-nucleolar phenotype. Recombinant APOE2 protein (50 ng/mL twice-weekly from day 11) applied in trans partially rescued the DDR phenotype of APOE4 neurons — reducing both pγH2AX and 53BP1 foci number and size — indicating a non-cell-autonomous component to ε2 protection that may be drug-tractable. This is the first multi-system isogenic functional study of ε2/ε2 human neurons — the rarity of ε2/ε2 individuals (~1% of European populations) had previously blocked primary cellular studies. The mechanism extends APOE's protective biology beyond lipid transport and amyloid clearance to **neuronal genome maintenance + senescence resistance**; tau-APOE interactions (the Shi 2017 axis) are not directly addressed.

### TREM2 R47H — highest-effect rare variant

TREM2 (triggering receptor expressed on myeloid cells 2) is a microglial surface receptor governing microglial activation, phagocytosis, and the disease-associated microglia (DAM) response. The rare missense variant R47H (rs75932628, ~0.5% frequency in Europeans) substantially elevates AD risk. Guerreiro et al. 2013 identified R47H with OR ≈ 4.5 (95% CI 1.7–11.9) in a sequencing study [^guerreiro2013]. In a concurrent NEJM paper, Jonsson et al. 2013 replicated with OR ≈ 2.92 (95% CI 2.09–4.09) in the Icelandic population [^jonsson2013]. Both Guerreiro and Jonsson TREM2 studies are already verified on [[microglia]]. TREM2 R47H impairs DAM stage 2 transition (the TREM2-dependent arm of microglial activation around plaques), resulting in reduced plaque compaction and increased neuritic dystrophy. For the DAM stage 1/2 model and TREM2 biology, see [[microglia]].

### Rare familial AD (FAD) — dominant Mendelian mutations

Approximately 1–5% of AD is caused by rare highly penetrant dominant mutations in three genes:

| Gene | Function | Effect |
|---|---|---|
| APP | Amyloid precursor protein | Missense/duplications → increased Aβ42 production or aggregation |
| PSEN1 | γ-secretase catalytic subunit | Most FAD mutations (~200 known) → increased Aβ42/Aβ40 ratio |
| PSEN2 | γ-secretase catalytic subunit | Fewer mutations; similar mechanism to PSEN1 |

FAD onset is typically 30–65 years (early-onset AD, EOAD). PSEN1 mutations produce the most severe early-onset phenotypes, sometimes before age 40. Trisomy 21 (Down syndrome) causes near-universal amyloid deposition by midlife due to the APP locus being on chromosome 21 and expressed from three copies.

### GWAS loci (late-onset AD)

Genome-wide association studies have identified ~70+ LOAD loci beyond APOE. Top signals implicate microglial immunity (TREM2, CLU, CR1, BIN1, MS4A cluster), lipid metabolism (APOE, ABCA7), and endosomal trafficking (PICALM, CD2AP, SORL1). Most individual loci confer modest OR (1.1–1.5). Together they emphasize that neuroinflammation and lipid/endosomal pathways are core disease biology, not incidental. #gap/needs-replication — individual locus effect sizes are from GWAS that were not powered for non-European populations.

## Aging hallmarks linkage

Alzheimer's disease illustrates convergent hallmark biology: multiple aging mechanisms feed into and accelerate each other.

### Loss of proteostasis

Aβ and tau aggregation are direct failures of protein quality control. The ubiquitin-proteasome system (UPS) and autophagy-lysosome pathway are the two primary routes for clearing amyloidogenic protein. Both decline with age. Tau is a substrate of [[chaperone-mediated-autophagy]]; disrupted CMA allows tau to accumulate. Age-related loss of proteasome activity (20S and 26S) reduces Aβ and tau clearance. See [[loss-of-proteostasis]].

### Disabled macroautophagy

Genetic disruption of macroautophagy in mouse neurons (conditional Atg5 KO driven by nestin-Cre) produced progressive neurodegeneration with ubiquitinated inclusion bodies, demonstrating that basal autophagy is essential for neuronal proteostasis [^hara2006]. A parallel study using conditional Atg7 KO confirmed the same phenotype [^komatsu2006]. Both papers establish that impaired autophagy alone is sufficient to produce neurodegeneration. In AD brains, autophagic vacuoles accumulate in dystrophic neurites, suggesting a block in autophagic flux rather than simply reduced initiation. See [[autophagy]] and [[disabled-macroautophagy]].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes |
| Replicated in humans? | yes (autophagic vacuole accumulation in AD post-mortem) |

### Chronic neuroinflammation

Microglia are the resident brain macrophages and primary neuroinflammatory responders in AD. TREM2-mediated DAM activation around plaques initially represents a protective response — compacting plaques, phagocytosing Aβ and cellular debris — but chronic activation drives neurotoxic inflammation. Complement activation, NLRP3 inflammasome-derived IL-1β, and astrocyte reactivity compound microglial effects. Complement protein C1q is upregulated early in AD and drives synaptic pruning (a normally developmental process that becomes pathological when chronically active). For DAM biology and TREM2 function, see [[microglia]]. For the broader neuroinflammation hallmark, see [[chronic-inflammation]].

### Mitochondrial dysfunction

AD brains show impaired mitochondrial respiration, reduced complex I/IV activity, increased oxidative damage, and altered mitochondrial morphology. APOE ε4 impairs mitochondrial function independently of Aβ. Aβ oligomers themselves can disrupt mitochondrial membranes. Impaired [[mitophagy]] leads to accumulation of dysfunctional mitochondria, amplifying oxidative stress. See [[mitochondrial-dysfunction]] and [[mitophagy]].

### Cellular senescence

Senescent astrocytes and microglia accumulate in AD brains and near amyloid plaques. Their SASP contributes to neuroinflammation. Tau accumulation itself has been shown to drive neuronal senescence markers (p21 upregulation, γH2AX foci). This creates a vicious cycle: senescence → SASP → inflammation → further tau phosphorylation. **APOE genotype is now established as a modifier of neuronal senescence acquisition:** isogenic APOE4 human iPSC neurons acquire p16, CRYAB, lamin A/C loss, nucleolar enlargement, and elevated rRNA transcription after genotoxic stress, while APOE2 neurons resist this senescence acquisition — recapitulated in aged human-APOE-TR mouse hippocampus [^geronimo2026]. #gap/needs-replication — mouse/iPSC mechanistic evidence is strong; direct human brain quantification of APOE-stratified neuronal senescence in vivo is still methodologically challenging.

### Genomic instability

Somatic aneuploidy (particularly trisomy 21 mosaicism) is elevated in AD neurons. DNA double-strand breaks accumulate near Aβ plaques and may contribute to neuronal death via p53-mediated apoptosis or senescence. See [[genomic-instability]].

## Staging and clinical course

**Preclinical AD** (Aβ+ but cognitively normal): the amyloid cascade starts 10–20 years before symptom onset. Imaging and CSF biomarkers can detect this presymptomatic phase.

**Mild cognitive impairment (MCI) due to AD**: episodic memory impairment with biomarker evidence of AD pathology; converts to dementia at ~10–15%/year.

**Mild-to-moderate dementia**: progressive episodic memory loss, language difficulties, visuospatial impairment, executive dysfunction. Mean duration ~8–10 years from diagnosis.

**Severe dementia**: loss of ADL independence, swallowing difficulties, motor complications. Death typically from aspiration pneumonia or immobility complications.

**AT(N) biomarker framework** — current research definition uses three axes: A (amyloid: PET or CSF Aβ42/40 ratio), T (tau: CSF/PET tau), N (neurodegeneration: structural MRI or FDG-PET). Disease defined biologically rather than clinically.

## Pharmacological interventions

### Symptomatic treatments (disease-modifying effects not established)

| Drug | Class | Approved indication |
|---|---|---|
| Donepezil | Acetylcholinesterase inhibitor | Mild–severe AD |
| Rivastigmine | Acetylcholinesterase inhibitor | Mild–moderate AD |
| Galantamine | Acetylcholinesterase inhibitor + nAChR modulator | Mild–moderate AD |
| Memantine | NMDA receptor antagonist | Moderate–severe AD |

These agents provide modest cognitive benefit (~1–3 point ADAS-Cog improvement) without altering disease course.

### Anti-amyloid immunotherapy — disease-modifying

**Lecanemab (Leqembi):** A humanized IgG1 monoclonal antibody targeting Aβ protofibrils. The Phase III CLARITY-AD trial (n=1,795, 18 months, early AD) showed a 27% slowing of cognitive decline on the CDR-SB primary endpoint (treatment difference −0.45; 95% CI −0.67 to −0.23; p<0.001) [^vandyck2023]. FDA granted full approval in July 2023. Key safety concern: ARIA (amyloid-related imaging abnormalities) — ARIA-E in ~12.6% and ARIA-H in ~17.3% of treated patients. #gap/long-term-unknown — 18-month trial; whether slowing persists, accelerates, or fades with longer treatment is unknown.

**Donanemab (Kisunla):** A humanized IgG1 targeting N-terminally truncated pyroglutamate Aβ (pGlu-Aβ). The Phase III TRAILBLAZER-ALZ 2 trial (n=1,736, 76 weeks, early symptomatic AD) showed 35% slowing of decline on the iADRS primary endpoint in participants with low/medium tau burden (p<0.001), and 22% slowing in the combined tau population [^sims2023]. FDA approved July 2024. Notable feature: treatment is stopped once amyloid is cleared (amyloid completion), reducing cumulative exposure. ARIA rates are higher than lecanemab: ARIA-E 24.0% and ARIA-H 31.4% (vs lecanemab 12.6% / 17.3%); 3 treatment-related deaths in the donanemab group.

Both lecanemab and donanemab confirm the amyloid cascade hypothesis as therapeutically actionable, though the magnitude of benefit (~27–35% slowing vs placebo, not halting or reversing) and ARIA risk profile remain subjects of clinical debate. Effect sizes are modest in absolute terms (~0.5 point CDR-SB over 18 months). ARIA rates differ substantially between agents: lecanemab ARIA-E 12.6% / ARIA-H 17.3%; donanemab ARIA-E 24.0% / ARIA-H 31.4%.

**Aducanumab (Aduhelm):** Earlier anti-amyloid monoclonal; received accelerated FDA approval in 2021 (controversial — based on amyloid clearance as surrogate endpoint without confirmed cognitive benefit); withdrawn from US market 2024 by Biogen following commercial failure.

### Emerging/investigational targets

| Class | Examples | Mechanism | Status |
|---|---|---|---|
| Anti-tau | Semorinemab, zagotenemab | Target extracellular/truncated tau | Phase 2/3 (mixed results) |
| BACE1 inhibitors | Verubecestat, atabecestat, lanabecestat | Reduce Aβ production | Phase 3 — all failed (cognitive worsening or futility) |
| Anti-TREM2 agonist | AL002c | Boost microglial DAM response | Phase 2 |
| NLRP3 inhibitors | Various | Reduce neuroinflammation | Preclinical |
| Senolytics | Dasatinib + quercetin | Clear senescent glia/neurons | Early clinical / preclinical #gap/needs-human-replication |
| GLP-1 receptor agonists | Semaglutide (EVOKE/EVOKE+) | Metabolic/anti-inflammatory | **Phase 3 NEGATIVE** — Cummings et al. *Lancet* 2026 (n=3,808 amyloid-confirmed early AD; oral semaglutide 14 mg × 156 wk): CDR-SB Δ −0.08 (p=0.57) EVOKE / 0.10 (p=0.46) EVOKE+; both trials discontinued. The largest aging-rejuvenation Phase 3 GLP-1 endpoint failure to date. See [[semaglutide]]. |

### Endogenous lithium depletion (emerging mechanism)

A 2025 *Nature* study reframes trace lithium as a physiological brain micronutrient whose loss may be an early AD driver. Aron, Yankner et al. found that, across a metallomic survey of human prefrontal cortex, **lithium was the only metal significantly reduced in mild cognitive impairment** (the AD prodrome), and that Aβ plaques physically sequester lithium, lowering its bioavailability as pathology advances [^aron2025lithium]. Reducing endogenous cortical lithium by ~50% in mice (via a lithium-restricted diet) increased Aβ deposition and phospho-tau accumulation, triggered pro-inflammatory microglial activation, and caused loss of synapses, axons, and myelin with accelerated cognitive decline — directly linking lithium depletion to the [[chronic-inflammation|neuroinflammation]] and proteostasis arms of AD. A **plaque-evading lithium salt (lithium orotate)**, which resists amyloid sequestration, reduced pathology and restored memory in AD-model mice at doses far below those used in bipolar disorder. This is mouse-plus-human-tissue evidence; no controlled human trial has tested low-dose lithium for AD prevention, and the popular framing of "lithium orotate supplementation" outruns the data. #gap/needs-human-replication #gap/dose-response-unclear

## Model organism context

AD modeling is especially challenging because Aβ plaque formation is not spontaneous in mice (mouse Aβ differs at three residues and does not aggregate). All mouse models require transgenic APP/PSEN1 overexpression or humanization. Key model limitations:

- Transgenic APP mice develop plaques but have limited tau pathology and do not fully recapitulate human cognitive decline or neuronal loss.
- No mouse model replicates the APOE ε4 risk effect with full fidelity.
- Absence of spontaneous tau pathology cascading from amyloid in most models.

For evidence derived from mouse AD models, the standard extrapolation caveat applies: #gap/needs-human-replication for mechanistic claims not yet validated in human post-mortem or trial data.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (APP/tau/presenilin) |
| Phenotype conserved in humans? | partial (plaques: yes; NFT cascade: partial) |
| Replicated in humans? | yes (human pathology is the gold standard) |

## Sex differences

Women constitute roughly two-thirds of AD cases worldwide [^snyder2016]. The dominant explanation has historically been longevity: women live longer on average, and more people therefore reach the high-risk ages (85+) where AD prevalence approaches 30–50%. However, the epidemiological picture is more complicated. Incidence rates per person-year — which control for age — also appear modestly elevated in women in some (though not all) population studies, and multiple lines of biological evidence point to sex-specific mechanisms that act independently of survival advantage [^snyder2016].

### APOE ε4 × sex interaction

The APOE ε4 risk effect is stronger in women in a specific age window. A meta-analysis by Neu et al. 2017 (JAMA Neurology; meta-analysis of published studies) found that women with the APOE ε3/ε4 genotype had an elevated AD odds ratio of 4.37 (95% CI 3.82–5.00) between ages 65–75, compared to 3.14 (95% CI 2.68–3.67) in men of the same genotype and age range (P = .002) [^neu2017]. Across the full age range of 55–85, overall sex-stratified ORs converge, suggesting the interaction is most pronounced during the perimenopausal and early postmenopausal decades. The mechanism is not established: candidates include estrogen-withdrawal reducing APOE-dependent Aβ clearance efficiency, sex-specific lipid metabolism differences, and immune-gene-by-hormone interactions. #gap/no-mechanism

### Menopause, estrogen decline, and the bioenergetic window hypothesis

The perimenopausal transition is proposed as a critical vulnerability window for AD. Mosconi et al. 2017 (PLoS One; observational neuroimaging in women across reproductive stages) found that perimenopausal and postmenopausal women showed reduced cerebral glucose metabolism (FDG-PET) in AD-vulnerable regions including the posterior cingulate and lateral parietal cortex, correlated with declining mitochondrial cytochrome oxidase activity, relative to premenopausal controls [^mosconi2017]. This "bioenergetic crisis" framing, developed further by Mishra & Brinton (Ageing Research Reviews 2022), holds that estrogen withdrawal drives a switch from aerobic glucose metabolism to lipid oxidation in neurons, creating conditions of brain glucose hypometabolism that overlap with early AD metabolic signatures [^mishra2022]. APOE4 status is proposed to accelerate this transition. See [[menopause]] and [[estradiol]].

**MHT for AD prevention is not established.** Despite the mechanistic plausibility of the estrogen-decline hypothesis, evidence that menopausal hormone therapy (MHT) prevents AD in clinical trials is not supportive overall. The [[estradiol]] page documents the Melville 2025 (and broader MHT literature) negative findings on AD incidence endpoints — the timing hypothesis (early vs late MHT initiation) remains under investigation but lacks a definitive positive RCT.

### Tau pathology sex differences

Women may carry a disproportionate tau burden for a given amyloid level. Two 2026 papers provide current evidence. Coughlan, Buckley et al. (JAMA Neurology 2026) found that women had significantly higher baseline p-tau217 levels at higher aggregated amyloid-beta levels and showed greater tau deposition at elevated phospho-tau thresholds [^coughlan2026]. A concurrent meta-analysis by Li, Coughlan et al. (Alzheimer's & Dementia 2026) found that elevated temporal tau PET signal predicted faster cognitive decline in women than men [^li2026]. These observations suggest that when amyloid triggers tau spread, the propagation may be more efficient or the downstream cognitive impact more severe in female biology — though the mechanisms (hormonal, X-linked immune, microglial sex-dimorphism) are not resolved. #gap/no-mechanism

### FSH-direct-action hypothesis

A candidate mechanistic link between menopause and AD biology is the rise in follicle-stimulating hormone (FSH) that accompanies ovarian senescence. Xiong, Ye et al. (Nature 2022) showed that blocking FSH with an antibody in female mice with AD-relevant pathology reduced cognitive decline and lowered amyloid-beta and tau burden, proposing a "causal role for rising serum FSH levels in exaggerated Alzheimer's disease pathophysiology during menopause" [^xiong2022]. See [[fsh]] for the mechanistic detail and contested status of this hypothesis (mouse data only; the FSH receptor's expression and function in human neurons remain debated). #gap/needs-human-replication

### X-chromosome and immune contributions

Female immune biology is a less-characterized contributor to sex-biased AD risk. Women mount stronger innate and adaptive immune responses, which may modulate microglial reactivity and SASP amplitude over time. X-linked escape from inactivation in immune-relevant genes (TLR7, TLR8, and others expressed from both X chromosomes in some female cells) is proposed to elevate baseline inflammatory tone. See [[x-chromosome-inactivation]] for the aging-relevant biology of XCI skewing and X-linked gene dosage in aged tissue. Whether these mechanisms meaningfully alter AD trajectory in humans is not established. #gap/needs-human-replication

## Infectious hypothesis and herpes-zoster vaccination

A long-marginal idea — that latent neurotropic viruses contribute to sporadic AD — has been substantially strengthened since 2024 by quasi-experimental vaccine data. It rests on two linked propositions.

### Amyloid-β as an antimicrobial peptide

The **antimicrobial-protection hypothesis** holds that Aβ is not merely metabolic waste but an effector of innate brain immunity: an antimicrobial peptide that oligomerizes around and entraps pathogens. Under this view, chronic or recurrent CNS infection — rather than Aβ itself — is the proximal driver of sporadic AD, with amyloid deposition the maladaptive output of a senescent immune system mounting repeated antimicrobial responses [^vojtechova2022]. This reframes the [[#Amyloid beta plaques|amyloid cascade]] as an immune backfire rather than a primary proteinopathy, and predicts that reducing the infectious/inflammatory trigger should reduce downstream amyloid pathology.

### Varicella-zoster virus as a chief suspect

Varicella-zoster virus (VZV) — the cause of childhood chickenpox — establishes lifelong latency in sensory ganglia and reactivates in later life as shingles (herpes zoster), or in subclinical "silent" reawakenings. Two mechanistic routes connect it to dementia:

- **Direct amyloidogenesis.** VZV infection of primary human spinal astrocytes produced intracellular amylin and Aβ and generated an amyloidogenic extracellular environment that seeded peptide aggregation into amyloid fibrils [^bubak2020]. VZV may thus raise local amyloid burden directly, consistent with the antimicrobial-protection model.
- **Vascular injury.** VZV is an established cause of cerebral vasculopathy (stroke, giant-cell and small-vessel arteritis), implicating it in **vascular dementia** as well as AD — i.e. it plausibly drives both major dementia subtypes. VZV reactivation may also act as a chronic immune stressor that potentiates HSV-1 and amplifies neuroinflammation.

This mechanism is suggestive, not settled: VZV is one of several candidate pathogens (HSV-1, [[porphyromonas-gingivalis|*P. gingivalis*]], *C. pneumoniae*), and Hill's criteria for causation are only partly met. #gap/no-mechanism The *P. gingivalis* / gingipain route in particular is now tempered by the **negative GAIN trial** of the gingipain inhibitor atuzaginstat (COR388) — see [[porphyromonas-gingivalis]] and [[periodontitis]].

### Herpes-zoster vaccination lowers dementia incidence — quasi-experimental evidence

The strongest support comes not from the mechanism but from the **vaccine natural experiment**, which sidesteps the central limitation of earlier work.

**Observational baseline.** Retrospective cohort studies linked zoster vaccination to lower incident dementia — e.g. ~31% reduced risk over 7–9 years across two large US cohorts [^scherrer2021]. Such designs are confounded by the **healthy-vaccinee effect** (people who get vaccinated differ systematically in health behaviour), so they cannot establish causation. A randomized trial is ethically impossible, because zoster vaccination is already standard recommended care for older adults [^lal2015].

**The Welsh natural experiment.** Wales rolled out the live-attenuated zoster vaccine (Zostavax) on 1 September 2013 with a sharp eligibility rule: people born **on or after 2 September 1933** were eligible; those born even one week earlier were never eligible. Because birth date a week either side of the cutoff is effectively random, this created a regression-discontinuity design closely approximating an RCT. Eyting, Geldsetzer et al. (*Nature* 2025) found vaccine uptake jumped from 0.01% to 47.2% across the threshold, and that eligibility reduced new dementia diagnoses over 7 years by an absolute 1.3 percentage points (relative 8.5%); correcting for the ~50% who actually took up the vaccine, receipt reduced dementia by an absolute 3.5 pp / relative 20.0% [^eyting2025]. The two birth-cohorts did not differ in other health conditions, uptake of other preventive care, or other interventions tied to the date — addressing the confounders that plague the observational studies. The protective effect was concentrated in **women**.

**Across the disease course.** A follow-up using the same population (Xie, Geldsetzer et al., *Cell* 2025) extended the finding in both directions: zoster vaccination also reduced new **mild cognitive impairment** diagnoses (receipt −3.1 pp; women −5.1 pp), and among people who *already had dementia* before rollout, it reduced dementia-specific mortality (receipt −29.5 pp, 95% CI 0.6–62.9) over 9 years — suggesting the vaccine may both prevent and slow dementia [^xie2025]. Confidence intervals on the progression effects are wide, and the cohort is narrow in age (≈79–80 at baseline), so magnitudes and generalization to younger people are uncertain.

**Recombinant vaccine.** The live Zostavax used in Wales has been replaced by the recombinant subunit vaccine (Shingrix). A propensity-matched US analysis found the recombinant vaccine associated with *greater* dementia-free time than the live vaccine (restricted-mean-time-lost ratio 0.83; +164 diagnosis-free days over 6 years), again with a larger effect in women, and both zoster vaccines outperformed influenza and Tdap vaccines [^taquet2024]. This argues the benefit is not contingent on live-virus replication.

**Interpretation and open questions.** The convergent quasi-experimental signal — natural experiment, disease-course follow-up, and recombinant-vaccine cohort, all sex-skewed toward women — is unusually strong for a repurposing finding. But the **mechanism remains unresolved**: the benefit could be VZV-specific (preventing reactivation that drives amyloidogenesis and vasculopathy, supporting the antimicrobial-protection hypothesis), or a non-specific consequence of trained/heterologous immunity (a general property of vaccination, consistent with the influenza/Tdap comparison still showing *some* benefit). The female-predominant effect is itself unexplained (candidate: stronger female antibody responses). No interventional confirmation in younger cohorts yet exists. #gap/no-mechanism #gap/long-term-unknown

## Limitations and gaps

- **Amyloid controversy:** Failures of BACE1 inhibitors (which reduced Aβ more effectively than anti-amyloid antibodies) and the initially conflicting aducanumab trials raised doubts about amyloid causality. The lecanemab/donanemab successes partially rehabilitate the hypothesis but absolute effects are modest. Whether amyloid is cause, cofactor, or consequence remains debated. #gap/contradictory-evidence
- **Tau therapeutics:** Anti-tau trials (semorinemab, zagotenemab) have not demonstrated cognitive benefit to date despite tau's strong pathological correlation with symptoms. #gap/needs-replication
- **ARIA risk:** ARIA-E/H events with anti-amyloid antibodies, including rare severe/fatal cases, are not yet well-characterized in heterogeneous real-world populations (most trials excluded APOE ε4/ε4 or anticoagulant users). #gap/long-term-unknown
- **Non-European populations:** GWAS and most AD trials have been predominantly European-ancestry. APOE ε4 risk is substantially lower in West African populations (likely due to background genetic modifiers). Biomarker cutoffs and effect sizes may not generalize. #gap/needs-replication
- **Mechanistic integration:** How amyloid, tau, neuroinflammation, and cellular senescence causally interact in human disease — and in what sequence — is not settled. Whether any single initiating event exists is contested. #gap/no-mechanism for integrated causal model.
- **Prevention:** No pharmacological intervention has demonstrated prevention of AD in cognitively normal Aβ+ individuals. The A4, AHEAD 3-45, and DIAN-TU trials are ongoing. #gap/long-term-unknown

## Footnotes

[^hardy1992]: [[studies/hardy-1992-amyloid-cascade-hypothesis]] · doi:10.1126/science.1566067 · Hardy J & Higgins GA · Science 1992;256(5054):184-185 · review/hypothesis · model: human pathology + Down syndrome genetics + FAD mutations · proposed Aβ deposition as initiating event in AD pathogenesis · archive: not_oa (closed)

[^hardy2002]: [[studies/hardy-2002-amyloid-hypothesis-review]] · doi:10.1126/science.1072994 · Hardy J & Selkoe DJ · Science 2002;297(5580):353-356 · review · proposed soluble Aβ oligomers (not mature plaques) as primary toxic species; updated amyloid cascade model · archive: not_oa (closed)

[^strittmatter1993]: [[studies/strittmatter-1993-apoe-amyloid]] · doi:10.1073/pnas.90.5.1977 · Strittmatter WJ et al. · PNAS 1993;90(5):1977-1981 · observational, human genetics · demonstrated APOE ε4 high-avidity binding to Aβ (amino acids 12–28) in CSF, and elevated ε4 allele frequency in late-onset familial AD (0.50±0.06 in 30 FAD families vs 0.16±0.03 in 91 controls; Z=2.44; P=0.014) · n=30 FAD families (83 patients, 166 chromosomes); 91 unrelated controls · archive: local PDF at 

[^corder1993]: [[studies/corder-1993-apoe-dose-response]] · doi:10.1126/science.8346443 · Corder EH et al. · Science 1993;261(5123):921-923 · observational, human genetics · demonstrated dose-response: 1 ε4 copy ~3–4× risk; 2 copies ~12× risk; ε2 protective ~0.6×; n=42 AD families · archive: not_oa (closed)

[^guerreiro2013]: [[studies/guerreiro-2013-trem2-ad]] · doi:10.1056/NEJMoa1211851 · Guerreiro R et al. · NEJM 2013;368(2):117-127 · observational, sequencing study · TREM2 R47H OR=4.5 (95% CI 1.7–11.9) in discovery set (Table 2); full combined series (n=1,994 cases + 4,062 controls) OR=5.05 (95% CI 2.77–9.16; p=9.0×10⁻⁹) · discovery n=1,092 cases + 1,107 controls (European/North American) · archive: local PDF available at  · also verified on [[microglia]]

[^jonsson2013]: [[studies/jonsson-2013-trem2-ad]] · doi:10.1056/NEJMoa1211103 · Jonsson T et al. · NEJM 2013;368(2):107-116 · observational, Icelandic population genetics · TREM2 R47H OR=2.92 (95% CI 2.09–4.09; p=3.42×10⁻¹⁰) in Iceland discovery; combined OR=2.90 (95% CI 2.16–3.91; p=2.1×10⁻¹²) · concurrent with Guerreiro 2013 (same NEJM issue, Vol 368 No 2) · archive: green OA listed but PDF unavailable from accessible mirrors (download failed); OR verified via PubMed abstract #gap/no-fulltext-access

[^hara2006]: [[studies/hara-2006-atg5-neural-autophagy]] · doi:10.1038/nature04724 · Hara T et al. · Nature 2006;441(7095):885-889 · in-vivo · conditional Atg5 KO (nestin-Cre) in mouse → progressive neurodegeneration with ubiquitinated inclusions; demonstrates basal autophagy is required for neuronal proteostasis · model: mus-musculus · archive: local PDF available

[^komatsu2006]: [[studies/komatsu-2006-atg7-neural-autophagy]] · doi:10.1038/nature04723 · Komatsu M et al. · Nature 2006;441(7095):880-884 · in-vivo · conditional Atg7 KO (nestin-Cre) → parallel neurodegeneration phenotype to Hara 2006; validates necessity of macroautophagy for neuronal health independently · model: mus-musculus · archive: local PDF available

[^vandyck2023]: [[studies/vandyck-2023-lecanemab-clarity-ad]] · doi:10.1056/NEJMoa2212948 · van Dyck CH et al. · NEJM 2023;388(1):9-21 · rct · n=1,795 randomized (898 lecanemab, 897 placebo; mITT 859/875) · 18 months · lecanemab 10 mg/kg IV biweekly · CDR-SB: lecanemab 1.21 vs placebo 1.66 (difference −0.45; 95% CI −0.67 to −0.23; p<0.001; 27% slowing) · ARIA-E 12.6% (113/898) / ARIA-H 17.3% (155/898) (Table 3) · archive: local PDF at 

[^sims2023]: [[studies/sims-2023-donanemab-trailblazer-alz2]] · doi:10.1001/jama.2023.13239 · Sims JR et al. · JAMA 2023;330(6):512-527 · rct · n=1,736 randomized (860 donanemab, 876 placebo) · 76 weeks · donanemab 700 mg then 1400 mg IV q4w · iADRS slowing 35.1% (95% CI 19.90–50.23%; p<0.001) in low/medium tau subgroup (n=1,182); 22.3% (95% CI 11.38–33.15%; p<0.001) in combined population · CDR-SB slowing 36.0% (low/medium tau) / 28.9% (combined) · ARIA-E 24.0% (205/860) / ARIA-H 31.4% (268/860) (Table 3); 3 treatment-related deaths · archive: local PDF at 

[^cma-tau-ref]: Tau as CMA substrate discussed on [[chaperone-mediated-autophagy]] (verified-partial). Impaired LAMP-2A in aging reduces CMA capacity, implicating CMA dysfunction in tau accumulation. #gap/needs-replication — direct causal evidence in human AD limited.

[^snyder2016]: doi:10.1016/j.jalz.2016.08.004 · Snyder HM et al. · Alzheimer's & Dementia 2016;12(11):1186-1196 · review · Women's Alzheimer's Research Initiative think tank; documents ~two-thirds female proportion among US AD cases and frames the longevity vs sex-specific biology debate · n=N/A (review)

[^neu2017]: doi:10.1001/jamaneurol.2017.2188 · Neu SC et al. · JAMA Neurology 2017;74(10):1178-1189 · meta-analysis · APOE ε3/ε4: women OR=4.37 (95% CI 3.82–5.00) vs men OR=3.14 (95% CI 2.68–3.67) ages 65–75 (P=.002); risks converge across full age range 55–85 · model: human (meta-analysis of published studies)

[^mosconi2017]: doi:10.1371/journal.pone.0185926 · Mosconi L et al. · PLoS One 2017;12(10):e0185926 · observational neuroimaging · perimenopausal and postmenopausal women showed reduced cerebral glucose metabolism in AD-vulnerable regions (FDG-PET) correlated with mitochondrial cytochrome oxidase activity decline vs premenopausal controls · model: human women across reproductive stages

[^mishra2022]: doi:10.1016/j.arr.2021.101542 · Mishra A & Brinton RD · Ageing Research Reviews 2022;74:101542 · review · menopausal transition triggers metabolic and immune system shifts increasing AD vulnerability; APOE4 accelerates the "bioenergetic crisis" framing of estrogen-withdrawal

[^coughlan2026]: doi:10.1001/jamaneurol.2025.5670 · Coughlan GT & Buckley RF et al. · JAMA Neurology 2026;83(4):369-381 · observational · women had significantly higher baseline p-tau217 at higher amyloid-beta burden and greater tau deposition at elevated phospho-tau thresholds than men · model: human

[^li2026]: doi:10.1002/alz.71031 · Li A & Coughlan GT et al. · Alzheimer's & Dementia 2026;22(2):e71031 · meta-analysis · elevated temporal tau PET predicts faster cognitive decline in women than men · model: human (meta-analysis)

[^xiong2022]: doi:10.1038/s41586-022-04463-0 · Xiong J & Ye K et al. · Nature 2022;603(7901):470-476 · in-vivo · FSH blockade (antibody) reduced cognitive decline and amyloid-beta/tau burden in female AD-model mice; proposed causal role for rising FSH in menopause-associated AD exacerbation · model: mus-musculus female #gap/needs-human-replication

[^geronimo2026]: [[studies/geronimo-olvera-2026-apoe2-dna-repair-senescence]] · doi:10.1111/acel.70494 · PMID:42103698 · PMC13156074 · in-vitro (isogenic human iPSC-derived GABAergic + Ngn2 glutamatergic neurons; ε2/ε2, ε3/ε3, ε4/ε4) + in-vivo (16-mo female human-APOE targeted-replacement B6.129P2 mice, n=3–4/genotype) · model: human + mouse · Gerónimo-Olvera C et al. 2026 *Aging Cell* 25(5):e70494 — APOE2 neurons reduce DNA damage (γH2AX/comet), enhance DDR resolution (53BP1, p-ATM), preserve Lamin A/C + H3K9me3 under stress, maintain nuclear HMGB1, restrain rRNA, and resist p16/CRYAB induction; aged APOE2 mouse hippocampus recapitulates the lamin/H3K9me3/HMGB1/nucleolar signature; recombinant APOE2 (50 ng/mL twice-weekly from day 11) partially rescues APOE4 DDR phenotype in trans (pγH2AX + 53BP1 foci number AND size both reduced) · PMC HTML full text (PMC13156074) verified 2026-05-20 (CC-BY 4.0 gold OA; journal PDF not locally archived)

[^aron2025lithium]: doi:10.1038/s41586-025-09335-x · Aron L, Ngian ZK, Qiu C, … Yankner BA · *Nature* 2025;645 · in-vivo (mouse, dietary Li restriction) + human post-mortem metallomics · lithium was the only metal significantly reduced in MCI prefrontal cortex; Aβ sequesters Li; ~50% cortical Li depletion in mice ↑Aβ + p-tau, activated microglia, lost synapses/axons/myelin, accelerated cognitive decline; plaque-evading lithium orotate reduced pathology and restored memory at sub-bipolar doses · model: mouse + human tissue · #gap/needs-human-replication

[^vojtechova2022]: doi:10.1371/journal.ppat.1010929 · Vojtechova I, Machacek T, Kristofikova Z, Stuchlik A, Petrasek T · *PLoS Pathogens* 2022;18(11):e1010929 · review / hypothesis · proposes Aβ as an antimicrobial peptide and chronic CNS infection (not Aβ per se) as the primary driver of sporadic AD · model: human/synthesis · open access

[^bubak2020]: doi:10.1093/infdis/jiz560 · Bubak AN et al. (Nagel MA lab) · *J Infect Dis* 2020;221(7):1088-1097 · in-vitro · VZV infection of primary human spinal astrocytes produced intracellular amylin + Aβ and an amyloidogenic extracellular environment that seeded amyloid fibrils · model: primary human astrocytes · PMID 31665341

[^scherrer2021]: doi:10.1371/journal.pone.0257405 · Scherrer JF, Salas J, Wiemken TL, Hoft DF, Jacobs C, Morley JE · *PLoS One* 2021;16(11):e0257405 · observational (retrospective, two US patient cohorts) · herpes-zoster (live) vaccination associated with ~31% lower incident dementia over 7–9 yr · model: human · PMID 34788293 · open access · #gap/contradictory-evidence (healthy-vaccinee confounding inherent to design)

[^lal2015]: doi:10.1056/NEJMoa1501184 · Lal H et al. (ZOE-50 study group) · *NEJM* 2015;372(22):2087-2096 · rct · adjuvanted recombinant zoster subunit vaccine (Shingrix) ~97% efficacy vs herpes zoster in adults ≥50 · cited here only to establish that zoster vaccination is standard recommended care, making a placebo-controlled dementia RCT unethical · model: human

[^eyting2025]: doi:10.1038/s41586-025-08800-x · Eyting M, Xie M, Michalik F, Heß S, Chung S, Geldsetzer P · *Nature* 2025;641:438-446 · quasi-experimental (regression-discontinuity natural experiment; Wales date-of-birth cutoff 2 Sep 1933) · vaccine uptake 0.01%→47.2% across threshold; intention-to-treat (eligibility) dementia ↓ absolute 1.3 pp (95% CI 0.2–2.7; P=0.022) / relative 8.5%; instrumental-variable (actual receipt) ↓ absolute 3.5 pp (95% CI 0.6–7.1; P=0.019) / relative 20.0% (95% CI 6.5–33.4) over 7 yr; effect concentrated in women; no between-cohort difference in other conditions or preventive-care uptake · n=282,541 · model: human · PMC12058522

[^xie2025]: doi:10.1016/j.cell.2025.11.007 · Xie M, Eyting M, Bommer C, Ahmed H, Geldsetzer P · *Cell* 2025;188(25):7049-7064 · quasi-experimental (same Welsh natural experiment) · zoster receipt ↓ new MCI by 3.1 pp (95% CI 1.0–6.2; women 5.1 pp) among initially unimpaired; among those already diagnosed with dementia, receipt ↓ dementia-specific mortality by 29.5 pp (95% CI 0.6–62.9; P=0.046) over 9 yr; wide CIs; baseline age ≈79–80 · model: human · PMID 41338191

[^taquet2024]: doi:10.1038/s41591-024-03201-5 · Taquet M, Dercon Q, Todd JA, Harrison PJ · *Nature Medicine* 2024 · observational (propensity-matched US cohorts) · recombinant (Shingrix) vs live (Zostavax): restricted-mean-time-lost ratio 0.83 (95% CI 0.80–0.87), +164 dementia-free days (95% CI 124–205) over 6 yr; larger effect in women (+222 d) than men (+122 d); both zoster vaccines < influenza/Tdap on dementia risk · n=103,837/cohort · model: human · PMID 39053634
