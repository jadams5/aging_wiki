---
type: intervention
aliases: [allele-selective ASO, SNV-selective siRNA, allele-specific oligonucleotide therapy, mutant-allele-selective RNA therapy, oligonucleotide therapeutics]
mode: pharmacological
mechanisms: [allele-selective-degradation, rnase-h-recruitment, rna-interference, splice-modulation]
targets: []
target-hallmarks: ["[[genomic-instability]]"]
target-pathways: []
human-evidence-level: strong
clinical-stage: fda-approved
safety-profile: "well-established (monogenic disease indications) | investigational (aging-rejuvenation indications)"
translation-gap: phase-3-rct-needed
next-experiment: "First-in-human allele-selective ASO/siRNA trial for a somatic-mosaic-driven aging phenotype — e.g., intralesional allele-selective siRNA targeting GNAQ Q209L mRNA in cherry angioma, or an allele-selective ASO program targeting a CHIP driver mutation (DNMT3A R882, JAK2 V617F) in HSCs."
clinical-trials-active: null
literature-checked-through: 2026-05-07
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Pivotal trial endpoints verified via PubMed efetch abstracts (PDFs not_oa/pending); tofersen VALOR P=0.97 primary-endpoint-not-met framing confirmed; n-numbers corrected for inotersen (172 treated, 173 randomized), nusinersen (122 enrolled/110 final analysis, not 121), inclisiran (482, not 490); 2026 PMID-only citations resolved to confirmed DOIs (Bragg 2026: 10.1126/scitranslmed.adv0702; Maeda 2026: 10.1016/j.omtn.2025.102802); mechanism and allele-selectivity classification not independently reviewed against full-text — abstract-only validation"
---


# Allele-selective oligonucleotides

A clinically mature pharmacological class targeting RNA sequences via Watson-Crick base pairing. Multiple FDA-approved drugs demonstrate that RNA-targeting oligonucleotides can achieve durable knockdown of specific transcripts with acceptable safety profiles. The class's **aging-biology relevance** is prospective: the same sequence-selectivity logic that enables disease-gene targeting could in principle be applied to **clonally expanded somatic mutations** — CHIP driver mutations (DNMT3A, TET2, JAK2), the GNAQ Q209L mosaic SNV driving cherry angiomas, and other age-associated mutant alleles — where selective degradation of the mutant transcript could clear or suppress clonally expanded cells while sparing wild-type counterparts.

This page covers the pharmacological class as a whole. Specific drugs would live as compound pages in `molecules/compounds/` if seeded. See [[frameworks/intervention-by-target-immunogenicity]] for the framework distinguishing direct molecular approaches (Tier 2) from immune-surveillance approaches (Tier 1) for somatic mosaic targets.

---

## 1. What this class is

Oligonucleotide therapeutics are synthetic polymers of 15–30 nucleotides, chemically modified to resist nuclease degradation. Two principal effector mechanisms determine RNA fate:

### Antisense oligonucleotides (ASOs)
Single-stranded DNA/RNA hybrids, typically 18–25 nt, with phosphorothioate (PS) backbone and 2'-O-methoxyethyl (2'-MOE), locked nucleic acid (LNA), or phosphorodiamidate morpholino (PMO) sugar modifications. Two ASO mechanisms:

- **RNase H recruitment (gapmer ASOs):** The central DNA "gap" of a gapmer (typically 8–12 nt flanked by 2'-modified RNA "wings") hybridises to a complementary mRNA, recruiting RNase H1 to cleave the RNA strand of the resulting RNA:DNA heteroduplex. The ASO is recycled and can catalytically degrade multiple transcripts. This is the mechanism of most FDA-approved ASOs (inotersen, tofersen, mipomersen).

- **Steric splice modulation (PMO/LNA ASOs):** Fully modified single-stranded ASOs that sterically block splice enhancer or silencer sequences without recruiting RNase H, redirecting spliceosomal exon inclusion/skipping. Mechanism of nusinersen (SMN2 exon 7 inclusion) and the DMD exon-skipping drugs.

### Small interfering RNA (siRNA)
Double-stranded 19–21 nt RNA duplexes with 2-nt 3' overhangs. The guide (antisense) strand is loaded into the RISC/AGO2 complex, which then performs endonucleolytic cleavage of complementary mRNAs. siRNA drugs require delivery vehicles (lipid nanoparticles, LNP; or GalNAc conjugates for hepatic targeting). FDA-approved siRNA drugs: patisiran, vutrisiran, givosiran, lumasiran, inclisiran.

### Allele-selectivity — the key mechanistic differentiator

Most approved oligonucleotide drugs target the wild-type RNA of a disease-causing gene (e.g., patisiran silences mutant *TTR* gene transcripts, which are uniformly expressed in all hepatocytes). **Allele-selective** programs, by contrast, exploit the thermodynamic difference in hybridisation energy when an oligonucleotide overlaps a SNV position:

- A perfect match contributes approximately +1.5–2 kcal/mol stability vs. a single central-position mismatch.
- This differential is sufficient for RNase H or RISC to discriminate mutant from wild-type RNA — but the window is narrow and position-dependent: a mismatch at position 10 (opposite the AGO2 cleavage site for siRNA, or the RNase H cleavage window for ASOs) produces the most discrimination; terminal-position mismatches are poorly discriminating.
- Chemical modifications (LNA insertions, boranophosphate) can widen the discrimination window at the mismatch position.

**Why this matters for aging:** Age-related clonal expansion is driven by somatic SNVs, not by uniform gene overexpression. Targeting the wild-type transcript would harm all cells. Allele-selective oligonucleotides would selectively reduce or silence only the mutant-allele-bearing clones — conceptually equivalent to a gene therapy without permanent genome modification.

---

## 2. Clinical landscape — FDA-approved drugs

**Important framing:** The drugs below are approved for inherited monogenic diseases. They demonstrate the class's clinical maturity (safety, delivery, regulatory pathway) but are NOT allele-selective in the strict sense. They establish proof-of-concept that oligonucleotides can be systemically delivered and achieve durable, well-tolerated target knockdown in humans.

### RNAi (siRNA) drugs

| Drug | Target | Indication | FDA approval | Pivotal trial | Route | Allele-selective? |
|---|---|---|---|---|---|---|
| **Patisiran (Onpattro)** | *TTR* mRNA (hepatic) | hATTR amyloidosis with polyneuropathy | 2018 (first siRNA drug) | APOLLO [^adams2018] | IV infusion (LNP) | No — silences all TTR |
| **Vutrisiran (Amvuttra)** | *TTR* mRNA (hepatic) | hATTR amyloidosis with polyneuropathy | 2022 | HELIOS-A [^adams2022] | SC injection (GalNAc) | No |
| **Givosiran (Givlaari)** | *ALAS1* mRNA | Acute hepatic porphyria (AHP) | 2019 | ENVISION [^balwani2020] | SC injection (GalNAc) | No |
| **Lumasiran (Oxlumo)** | *HAO1* mRNA | Primary hyperoxaluria type 1 (PH1) | 2020 | ILLUMINATE-A [^garrelfs2021] | SC injection (GalNAc) | No |
| **Inclisiran (Leqvio)** | *PCSK9* mRNA | Heterozygous FH / high CV risk | 2021 | ORION-9 [^raal2020] | SC injection (GalNAc) | No (though it silences PCSK9, which has LOF variants used in GWAS — not SNV-targeted per se) |

**Patisiran (APOLLO trial)** [^adams2018]: First FDA-approved siRNA drug. APOLLO (n=148 patisiran, n=77 placebo) demonstrated a least-squares mean change in mNIS+7 of −6.0 ± 1.7 in the patisiran group versus +28.0 ± 2.6 in the placebo group at 18 months (difference −34.0 points; P<0.001). Primary endpoint met. LNP formulation required pre-medication (dexamethasone + antihistamines) to prevent infusion reactions.

**Vutrisiran (HELIOS-A trial)** [^adams2022]: GalNAc-conjugated siRNA, quarterly SC injection. Primary endpoint — change from baseline in mNIS+7 at 9 months — met (P=3.54×10⁻¹²). No pre-medication required. Longer dosing interval (once quarterly) vs. patisiran (once every 3 weeks IV) represents a substantial convenience improvement.

**Givosiran (ENVISION trial)** [^balwani2020]: Monthly SC GalNAc-siRNA targeting ALAS1 (rate-limiting enzyme in heme synthesis). Primary endpoint: annualized attack rate of acute porphyria attacks — 3.2 in givosiran vs. 12.5 in placebo, a 74% reduction (P<0.001).

**Lumasiran (ILLUMINATE-A trial)** [^garrelfs2021]: Quarterly or monthly SC GalNAc-siRNA targeting glycolate oxidase (HAO1), reducing hepatic oxalate synthesis. Primary endpoint: least-squares mean difference in change in 24-hour urinary oxalate excretion −53.5 percentage points vs placebo (P<0.001).

**Inclisiran (ORION-9 trial — heterozygous FH)** [^raal2020]: Twice-yearly SC GalNAc-siRNA targeting PCSK9 mRNA (n=482 randomized 1:1). Primary endpoint at day 510: LDL-C reduction of 39.7% vs increase of 8.2% in placebo (between-group difference −47.9 percentage points; P<0.001). Inclisiran is notable as an aging-adjacent compound: PCSK9 is cardiovascular risk-relevant, and extremely durable PCSK9 suppression with two injections per year is a plausible cardiovascular aging intervention. It is NOT allele-selective.

### Antisense oligonucleotide (ASO) drugs

| Drug | Target | Indication | FDA approval | Pivotal trial | Mechanism | Route | Allele-selective? |
|---|---|---|---|---|---|---|---|
| **Inotersen (Tegsedi)** | *TTR* mRNA | hATTR amyloidosis with polyneuropathy | 2018 | NEURO-TTR [^benson2018] | SC weekly (gapmer) | RNase H | No |
| **Nusinersen (Spinraza)** | *SMN2* pre-mRNA (splice-modulation) | Spinal muscular atrophy (SMA) | 2016 | ENDEAR [^finkel2017] | Intrathecal | Splice-modulation (steric) | No — exon 7 inclusion shift works on all SMN2 |
| **Tofersen (Qalsody)** | *SOD1* mRNA | SOD1-ALS | 2023 (accelerated) | VALOR [^miller2022] | Intrathecal | RNase H | No — silences all SOD1 |
| **Eteplirsen (Exondys 51)** | *DMD* pre-mRNA exon 51 | Duchenne muscular dystrophy (exon 51-amenable) | 2016 | (accelerated approval) | Exon-skipping (PMO) | IV weekly | No |
| **Casimersen (Amondys 45)** | *DMD* exon 45 | Duchenne MD (exon 45-amenable) | 2021 | — | Exon-skipping (PMO) | IV weekly | No |
| **Viltolarsen (Viltepso)** | *DMD* exon 53 | Duchenne MD (exon 53-amenable) | 2020 | — | Exon-skipping (PMO) | IV weekly | No |
| **Golodirsen (Vyondys 53)** | *DMD* exon 53 | Duchenne MD (exon 53-amenable) | 2019 | — | Exon-skipping (PMO) | IV weekly | No |
| **Mipomersen (Kynamro)** | *ApoB* mRNA | Familial hypercholesterolemia | 2013; withdrawn 2018 | — | SC weekly | RNase H | No |

**Inotersen (NEURO-TTR trial)** [^benson2018]: SC weekly gapmer ASO. Primary endpoints (modified NIS+7 and Norfolk QOL-DN) both met. mNIS+7 difference −19.7 points (95% CI −26.4 to −13.0; P<0.001). Dose-limiting toxicities: thrombocytopenia (3 fatal cases during trial) and glomerulonephritis — led to REMS requirement. Thrombocytopenia is the key class-level safety signal for gapmer ASOs.

**Nusinersen (ENDEAR trial)** [^finkel2017]: Intrathecal steric-blocking ASO redirecting SMN2 splicing to include exon 7. A landmark drug — first neurological oligonucleotide approved. 122 infants enrolled; final analysis n=110 (73 nusinersen, 37 sham). Primary motor-milestone response 51% (37/73) in nusinersen vs. 0% (0/37) in sham control; event-free survival HR=0.53 (P=0.005). Illustrates the potency of splice-modulation for diseases driven by aberrant splicing.

**Tofersen (VALOR trial) — critical nuance** [^miller2022]: FDA-approved 2023 via accelerated approval despite the pivotal VALOR trial NOT meeting its primary clinical endpoint. ALSFRS-R change at week 28 was −6.98 (tofersen) vs −8.14 (placebo) in the faster-progression subgroup (difference +1.2 points; P=0.97). **Tofersen reduced SOD1 protein in CSF and neurofilament light chain (NfL) in plasma** — biomarker evidence of target engagement and neuroprotection — but this did not translate to clinical function improvement over 28 weeks. The FDA accepted biomarker evidence as a basis for accelerated approval. The drug demonstrates that CSF-delivered intrathecal ASOs can successfully silence target mRNA in the CNS, which is mechanistically relevant for future CNS-targeted allele-selective programs. However, the endpoint discordance is a cautionary note.

**Mipomersen (Kynamro) — withdrawn:** First ASO for hypercholesterolemia; withdrawn from the US market in 2018 due to hepatotoxicity (hepatic fat accumulation) and injection-site reactions outweighing the clinical benefit in an era with better alternatives (PCSK9 inhibitors, inclisiran). Class-precedent value as the first cardiovascular ASO; its withdrawal illustrates the hepatotoxicity risk of PS-backbone ASOs at high doses.

---

## 3. Allele-selectivity — research-stage landscape

As of 2026-05-07, no FDA-approved oligonucleotide drug is allele-selective in the strict sense (SNV-discriminating). The research landscape for allele-selective programs includes:

**Huntington's disease (CAG-SNP haplotyping approach):** Wave Life Sciences and others have developed siRNA/ASO programs that target HD alleles via linked heterozygous SNPs in cis with the CAG expansion, achieving allele-selective silencing without directly targeting the CAG repeat (which is challenging due to repeat-associated secondary structure). The most recent research (Bragg 2026, Sci Transl Med [^bragg2026]) demonstrates allele-selective ASO targeting of mutant huntingtin intron 1 sequences, improving rescue vs. non-selective approaches in mouse models. Phase 1/2 human trials of allele-selective HD ASOs/siRNAs are ongoing (Wave Life Sciences WVE-003 program).

**Polyglutamine diseases:** Maeda and colleagues (2026, Mol Ther Nucleic Acids [^maeda2026]) demonstrated an acyclic serinol nucleic acid (SNA)-modified siRNA that selectively silences expanded CAG alleles in polyglutamine disease models (SBMA, SCA3 mouse models), reducing intranuclear aggregation and improving lifespan and motor function while sparing wild-type counterparts. Active research area, no FDA-approved drug.

**ALS (SOD1):** Tofersen is not allele-selective (it silences all SOD1). A divalent siRNA targeting SOD1 (Weiss 2024, bioRxiv) extended survival in SOD1-G93A mice beyond reported ASO results, with improved CNS penetration — suggesting that next-generation siRNA delivery may surpass current ASO performance for CNS targets. #gap/needs-replication (preprint, not peer-reviewed).

---

## 4. Aging-relevance — prospective applications

None of the following have clinical programs as of 2026-05-07. These are applications where the class's mechanism is directly applicable to aging-specific biology.

### GNAQ Q209L — cherry angioma

Cherry angiomas are the most common vascular benign skin lesion in aging humans, accumulating from ~40 years of age with near-universal prevalence by 80+. The cause is a somatic gain-of-function SNV: **GNAQ Q209L** (and less commonly GNAQ R183Q or GNA11 Q209L) in dermal endothelial cells [see [[phenotypes/cherry-angioma]]]. The mutant GNAQ protein constitutively activates Gq signalling → PLC-β → PKC → ERK proliferation, driving clonal endothelial expansion.

This is structurally an ideal allele-selective oligonucleotide target:

- A defined SNV (Q209L: c.626A>T) provides a hybridisation anchor for allele-selective design.
- The lesion is a localised, accessible tissue (skin) — **topical or intralesional delivery** bypasses the systemic biodistribution problem that complicates most oligonucleotide programs.
- The wild-type GNAQ allele should not be silenced (it performs essential signalling functions in endothelial cells).
- An allele-selective siRNA targeting Q209L mRNA would selectively suppress constitutive Gq signalling in the mutant clone without affecting surrounding wild-type endothelial cells.

No clinical or preclinical published program has been identified targeting GNAQ Q209L with allele-selective siRNA or ASO. #gap/needs-replication — a proof-of-concept topical siRNA experiment in a cherry angioma model (or ex vivo human skin) would be the field-opening experiment.

From the perspective of [[frameworks/intervention-by-target-immunogenicity]]: GNAQ Q209L is a Tier 2 target (weakly immunogenic somatic driver, not a neoantigenic frameshift) — allele-selective oligonucleotide is the natural Tier 2 intervention class.

### CHIP driver mutations (DNMT3A, TET2, JAK2 V617F)

Clonal hematopoiesis of indeterminate potential (CHIP) involves the age-associated clonal expansion of hematopoietic stem cells carrying somatic driver mutations — most commonly DNMT3A R882H, TET2 loss-of-function, and JAK2 V617F [see [[phenotypes/clonal-hematopoiesis]]]. CHIP increases cardiovascular and mortality risk independently of haematologic malignancy.

Allele-selective ASOs targeting mutant DNMT3A R882H or JAK2 V617F transcripts in HSCs would represent a fundamentally different approach to CHIP than current strategies (watchful waiting; cytoreductive therapy for frank MPN). The conceptual challenge: **HSC delivery.** Current GalNAc-conjugated siRNA platforms achieve excellent hepatic uptake but poor HSC penetration; LNP formulations have some bone marrow distribution but with substantial off-target effects. No clinically validated oligonucleotide delivery strategy for HSCs exists as of 2026. #gap/needs-human-replication

PubMed search 2021-2026 for "DNMT3A allele-specific oligonucleotide clonal hematopoiesis" returned zero results; no published programs identified.

### Splice-modulating ASOs for aging-related splicing dysregulation

Age-associated changes in splicing — altered SR protein levels, reduced SRSF1, changes in U1 snRNP stoichiometry — affect hundreds of transcripts in aged tissues (see [[processes/splicing-dysregulation]] if seeded). Splice-correcting ASOs in principle could restore youthful splicing patterns at specific loci. This is distinct from allele-selectivity but uses the same therapeutic class. Speculative; no clinical programs directed at aging splicing.

---

## 5. Delivery — the practical bottleneck

Delivery determines biodistribution and fundamentally constrains which aging applications are feasible:

| Delivery platform | Current reach | Aging application feasibility |
|---|---|---|
| **GalNAc conjugate** (SC injection) | Hepatocytes (ASGPR-mediated uptake) | Liver-resident aging targets (e.g., PCSK9, TTR, ALAS1 analogs); CHIP liver burden (limited HSC access) |
| **LNP IV infusion** | Liver predominantly; spleen (ApoE-mediated); lung (ionizable LNP variants) | Hepatic targets; some myeloid cell access; IV burden limits chronic dosing |
| **Intrathecal (IT) injection** | Spinal cord, brainstem, cortex (ASOs only — CSF distribution) | CNS aging targets (TDP-43, α-synuclein, huntingtin); requires lumbar puncture; feasible for serious disease |
| **Topical / intralesional** | Skin epidermis and dermis (unmodified siRNA limited; formulation-dependent) | **Cherry angioma (intralesional) — most accessible aging target in this class** |
| **Inhaled** | Bronchial epithelium (local), alveolar cells (LNP inhaled) | Pulmonary aging targets; not yet clinically developed for ASOs/siRNA |
| **Systemically to HSCs** | Not yet validated for any oligonucleotide platform | **CHIP — major delivery gap** |

Half-life of approved drugs varies by chemistry: GalNAc-siRNA drugs achieve multi-month liver residency (vutrisiran: effective duration ~3 months per dose); gapmer ASOs in CSF have tissue half-lives of weeks (tofersen: 4-week dosing interval after loading). Chronic aging indications would require durable formulations — the GalNAc-siRNA platform's quarterly dosing is the closest existing template.

---

## 6. Safety profile and class limitations

The oligonucleotide class has established safety for monogenic-disease populations. The key class-level signals are:

**Phosphorothioate backbone effects:** PS backbone substitution (replacing one non-bridging oxygen with sulfur) confers nuclease resistance but also produces non-specific protein binding, contributing to injection-site inflammation, flu-like reactions, and at higher doses, complement activation. Well-managed with current dosing schedules; not a serious safety concern at approved doses.

**Thrombocytopenia:** Gapmer ASO-specific, particularly for inotersen (NEURO-TTR trial: 3 fatal cases, leading to mandatory platelet monitoring REMS). Mechanism: PS backbone-induced platelet depletion via complement-mediated clearance. Less common with 2'-MOE gapmers at lower doses; not observed with siRNA drugs. Risk management: platelet monitoring; dose adjustments.

**Hepatotoxicity:** Historical concern with high-dose PS backbone ASOs. Mipomersen withdrawal was partly driven by hepatic steatosis and LFT elevations. Lower-dose GalNAc-targeted siRNA drugs appear hepatically well-tolerated. Tofersen (intrathecal) has no hepatic exposure.

**Immunostimulation:** Unmethylated CpG motifs in ASO sequences can activate TLR9. Managed by sequence design (CpG-depleted sequences) and chemistry (2'-modifications suppress TLR activation). Not a major clinical problem with current approved drugs.

**Kidney:** Some ASO platforms show tubular accumulation and proximal tubule vacuolation at high doses. Inotersen had glomerulonephritis signals requiring REMS monitoring.

**For aging indications specifically:** All approved drugs have been used in seriously ill patient populations with known-high risk tolerance. Aging indications would impose a much lower adverse-event tolerance threshold — particularly for a condition like cherry angioma (cosmetic-adjacent) or CHIP (elevated-but-not-acute risk). This benefit-risk recalibration is the dominant safety consideration for aging translation.

---

## 7. Evidence quality summary

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — RNA silencing machinery is human; all approved drugs are human-validated |
| Phenotype conserved in humans? | Yes (for approved indications); prospective aging applications have no human evidence |
| Replicated in humans? | Yes (class — multiple Phase 3 trials); No (aging-specific applications — no trials) |

---

## 8. Limitations and knowledge gaps

- **No allele-selective oligonucleotide program for any aging-specific somatic mutation exists in clinical development** — the class's aging relevance is entirely prospective. #gap/needs-human-replication
- **HSC delivery is unsolved.** No oligonucleotide delivery platform achieves adequate HSC uptake for CHIP applications in vivo. This is the dominant translational bottleneck for the most impactful aging target (clonal hematopoiesis). #gap/no-mechanism
- **Allele-selectivity in vivo is not yet demonstrated for aging SNVs.** SNV-selective discrimination has been shown in HD model systems (CAG-expanded allele vs. normal; or SNP-haplotype-linked programs). Direct translation to small somatic mosaicism SNVs (minor allele fractions often <10%) in aging tissues is unproven. #gap/needs-replication
- **Topical/intralesional siRNA formulation maturity for skin delivery is limited.** Published data on intradermal delivery of siRNA to dermal endothelium are sparse, though the route is conceptually tractable with lipid-based carriers. No GMP formulation suitable for intralesional cherry angioma use has been described. #gap/dose-response-unclear
- **Long-term safety of chronic aging-indication dosing** is unknown. Approved drugs are used at defined treatment durations in disease-defined populations. A geroprotective dosing regimen (potentially decades of exposure in otherwise healthy individuals) has no precedent in the class. #gap/long-term-unknown
- **Off-target hybridisation:** Partial-complementarity matches to non-target transcripts can produce unintended knockdown, particularly for sequences targeting common motifs. Computationally predicted off-target burden grows with genomic sequence complexity. Allele-selective designs must balance SNV discrimination with off-target avoidance.
- **Tofersen's primary endpoint failure** serves as a reminder that CSF biomarker readouts (SOD1 protein, NfL) may not translate to clinical function improvement within trial timeframes — relevant to any CNS aging application where biomarker-to-function translation is uncertain.

---

## 9. Cross-references

- [[phenotypes/cherry-angioma]] — primary aging target; GNAQ Q209L allele-selective siRNA is the candidate intervention
- [[phenotypes/clonal-hematopoiesis]] — CHIP driver mutations (DNMT3A, TET2, JAK2) as candidate allele-selective targets
- [[hallmarks/genomic-instability]] — the hallmark this class targets via somatic-mutation-selective degradation
- [[frameworks/intervention-by-target-immunogenicity]] — where this class fits (Tier 2 direct molecular intervention for weakly immunogenic somatic SNV targets)
- [[hallmarks/disabled-adaptive-immunity]] — complementary immune-surveillance approaches (Tier 1 vs. Tier 2 comparison)

---

## Footnotes

[^adams2018]: doi:10.1056/NEJMoa1716153 · Adams D et al. · rct · n=225 (148 patisiran, 77 placebo) · primary endpoint mNIS+7 change: −6.0 ± 1.7 (patisiran) vs +28.0 ± 2.6 (placebo), difference −34.0 points; P<0.001 · model: humans with hATTR amyloidosis with polyneuropathy · *NEJM* 2018 · archive: pending download (bronze OA)

[^adams2022]: doi:10.1080/13506129.2022.2091985 · Adams D et al. · rct · n=164 (122 vutrisiran, 42 placebo) · primary endpoint mNIS+7 change at 9 months; P=3.54×10⁻¹² · model: humans with hATTR amyloidosis with polyneuropathy · *Amyloid* 2022 · HELIOS-A trial · archive: pending download (hybrid OA)

[^benson2018]: doi:10.1056/NEJMoa1716793 · Benson MD et al. · rct · n=173 randomized (CT.gov NCT01737398); 172 received at least one dose (112 inotersen, 60 placebo) · primary endpoint mNIS+7 difference −19.7 points (95% CI −26.4 to −13.0); P<0.001; Norfolk QOL-DN difference −11.7 (P<0.001) · model: humans with hATTR amyloidosis with polyneuropathy · *NEJM* 2018 · NEURO-TTR trial; thrombocytopenia REMS required · archive: pending download (bronze OA)

[^finkel2017]: doi:10.1056/NEJMoa1702752 · Finkel RS et al. · rct · n=122 enrolled (CT.gov NCT02193074); final analysis n=110 (73 nusinersen, 37 sham) · primary endpoint motor-milestone response: 51% (37/73) nusinersen vs 0% (0/37) sham; event-free survival HR=0.53 (P=0.005) · model: human infants with SMA type 1 · *NEJM* 2017 · ENDEAR trial · archive: pending download (bronze OA)

[^miller2022]: doi:10.1056/NEJMoa2204705 · Miller TM et al. · rct · n=108 (72 tofersen, 36 placebo) · primary endpoint ALSFRS-R change at 28 weeks: −6.98 (tofersen) vs −8.14 (placebo), difference +1.2 points (P=0.97) — primary endpoint NOT met; CSF SOD1 protein and plasma NfL significantly reduced (biomarker endpoints met); FDA accelerated approval 2023 on biomarker basis · model: humans with SOD1-ALS · *NEJM* 2022 · VALOR trial · archive: pending download (bronze OA)

[^balwani2020]: doi:10.1056/NEJMoa1913147 · Balwani M et al. · rct · n=94 (48 givosiran, 46 placebo) · primary endpoint annualized attack rate: 3.2 (givosiran) vs 12.5 (placebo); 74% reduction (P<0.001) · model: humans with acute intermittent porphyria · *NEJM* 2020 · ENVISION trial · archive: pending download (bronze OA)

[^garrelfs2021]: doi:10.1056/NEJMoa2021712 · Garrelfs SF et al. · rct · n=39 (26 lumasiran, 13 placebo) · primary endpoint 24-h urinary oxalate change: −53.5 percentage points difference vs placebo (P<0.001); lumasiran group: 65.4% reduction from baseline · model: humans with primary hyperoxaluria type 1 · *NEJM* 2021 · ILLUMINATE-A trial · archive: download failed (status in archive: failed)

[^raal2020]: doi:10.1056/NEJMoa1913805 · Raal FJ et al. · rct · n=482 randomized 1:1 (inclisiran vs placebo) · primary endpoint LDL-C change at day 510: −39.7% (inclisiran) vs +8.2% (placebo); between-group difference −47.9 percentage points (P<0.001) · model: humans with heterozygous familial hypercholesterolemia · *NEJM* 2020 · ORION-9 trial · archive: pending download (bronze OA)

[^bragg2026]: doi:10.1126/scitranslmed.adv0702 · Bragg RM, Landles C, Smith EJ, Osborne GF, Mathews EW, Cantle JP, Bates GP, Carroll JB · in-vivo (mouse; HttQ111 heterozygous knockin) · PMID 41849580 · allele-selective ASO targeting mutant huntingtin intron 1 reduces mutant full-length HTT and HTT1a; eliminates aggregate formation and provides marked transcriptional protection vs. non-selective pan-allele ASO · *Sci Transl Med* 2026 Mar 18;18(841):eadv0702

[^maeda2026]: doi:10.1016/j.omtn.2025.102802 · Maeda K, Hirunagi T, Sahashi K, Kamiya Y et al. (Katsuno M senior) · in-vivo (mouse SBMA and SCA3 models) + in-vitro · PMID 41552385 · acyclic serinol nucleic acid (SNA)-modified siRNA targeting CAG repeats selectively silences expanded polyQ alleles without affecting wild-type; reduces intranuclear aggregation in SBMA/SCA3 mice; improves lifespan and motor function in SBMA mice · *Mol Ther Nucleic Acids* 2026 Mar 12;37(1):102802 · PMCID: PMC12804371
