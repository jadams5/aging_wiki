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
verified-scope: "Hara 2006 (Atg5), Komatsu 2006 (Atg7), Guerreiro 2013 (TREM2), van Dyck 2023 (lecanemab), Sims 2023 (donanemab), Strittmatter 1993 (APOE) verified against local PDFs. Jonsson 2013 OR verified via PubMed abstract (PDF download failed). Hardy & Higgins 1992, Hardy & Selkoe 2002, Corder 1993 unverifiable — closed-access (not_oa)."
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

[^geronimo2026]: [[studies/geronimo-olvera-2026-apoe2-dna-repair-senescence]] · doi:10.1111/acel.70494 · PMID:42103698 · PMC13156074 · in-vitro (isogenic human iPSC-derived GABAergic + Ngn2 glutamatergic neurons; ε2/ε2, ε3/ε3, ε4/ε4) + in-vivo (16-mo female human-APOE targeted-replacement B6.129P2 mice, n=3–4/genotype) · model: human + mouse · Gerónimo-Olvera C et al. 2026 *Aging Cell* 25(5):e70494 — APOE2 neurons reduce DNA damage (γH2AX/comet), enhance DDR resolution (53BP1, p-ATM), preserve Lamin A/C + H3K9me3 under stress, maintain nuclear HMGB1, restrain rRNA, and resist p16/CRYAB induction; aged APOE2 mouse hippocampus recapitulates the lamin/H3K9me3/HMGB1/nucleolar signature; recombinant APOE2 (50 ng/mL twice-weekly from day 11) partially rescues APOE4 DDR phenotype in trans (pγH2AX + 53BP1 foci number AND size both reduced) · PMC HTML full text (PMC13156074) verified 2026-05-20 (CC-BY 4.0 gold OA; journal PDF not locally archived)
