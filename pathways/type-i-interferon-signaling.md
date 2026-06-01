---
type: pathway
aliases: [type I IFN signaling, IFN-α/β signaling, interferon alpha beta pathway, ISGF3 pathway, antiviral interferon response]
kegg: hsa04623
kegg-secondary: [hsa04622]  # R35 schema; RIG-I-like receptor signaling arm (RNA-sensor branch); primary hsa04623 covers the cytosolic DNA-sensor arm
reactome: R-HSA-909733
wikipathways: null
key-nodes: ["[[ifnar1]]", "[[ifnar2]]", "[[jak1]]", "[[tyk2]]", "[[stat1]]", "[[stat2]]", "[[irf9]]", "[[irf3]]", "[[irf7]]", "[[tbk1]]", "[[ikbke]]", "[[cgas]]", "[[sting]]"]
upstream: ["[[cgas-sting]]", "[[rig-i-mavs-pathway]]", "[[tlr3-trif-pathway]]"]
downstream: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[innate-immunity]]", "[[sasp]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[genomic-instability]]", "[[epigenetic-alterations]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["[[cgas-sting]]", "[[mitochondrial-dysfunction]]", "[[cellular-senescence]]", "cytosolic nucleic acids (viral/self-DNA/retroelement RNA)"]
causes: ["[[chronic-inflammation]]", "[[cellular-senescence]]", "[[sasp]]", "ISG induction (antiviral effectors)"]
literature-checked-through: 2026-05-13  # R35 schema; populated by seeder R25 recency pass
verified: true
verified-date: 2026-05-13
verified-by: claude
verified-scope: "Jiménez-Loygorri 2024 and Jin 2022 verified against local PDFs; Bastard 2020 (Science), Stark & Darnell 2012 (Immunity), and Kandhaya-Pillai 2022 (Aging Cell) verified against newly-downloaded PDFs; De Cecco 2019 (Nature) closed-access — claims tagged #gap/no-fulltext-access; Yang 2026 (Nature Aging) closed-access — treated as preliminary; Yu 2026 (Aging Cell) gold OA PDF verified. Canonical DB IDs (KEGG hsa04623, hsa04622; Reactome R-HSA-909733) confirmed against live endpoints."
---

# Type I Interferon Signaling pathway

The **type I interferon (IFN-I) signaling pathway** is the canonical innate immune response axis triggered by cytosolic pathogen-associated molecular patterns (PAMPs) and damage-associated molecular patterns (DAMPs). It runs in two linked phases: (1) **IFN-I production** — upstream sensors ([[cgas]], RIG-I/MDA5, TLR3/7/9) detect cytosolic nucleic acids and activate [[tbk1]]/IKKε → [[irf3]]/[[irf7]] → transcription of *IFNA* and *IFNB* genes; and (2) **IFN-I receptor signaling** — secreted IFN-α/β binds the heterodimeric receptor IFNAR1/IFNAR2 → [[jak1]]/[[tyk2]] → [[stat1]]/[[stat2]] phosphorylation → ISGF3 complex assembly with [[irf9]] → nuclear translocation → binding of interferon-stimulated response elements (ISREs) → expression of hundreds of interferon-stimulated genes (ISGs). In aging, this pathway is chronically and tonically activated by self-derived nucleic acids — leaked mitochondrial DNA, cytosolic chromatin fragments from senescent cells, and reverse-transcribed LINE-1/ERV retrotransposon cDNA — making it the molecular integrator of upstream genomic and mitochondrial damage into the systemic inflammatory phenotype of aging ([[chronic-inflammation|inflammaging]]).

> **Naming note:** This page is the canonical `[[type-i-interferon-signaling]]` wikilink target. The upstream sensing page is `[[cgas-sting]]`. The downstream transcriptional relay is covered by `[[jak-stat-pathway]]`. Individual protein pages exist for `[[cgas]]`, `[[sting]]`, `[[tbk1]]`, `[[irf3]]`; downstream nodes `[[ifnar1]]`, `[[ifnar2]]`, `[[jak1]]`, `[[tyk2]]`, `[[stat1]]`, `[[stat2]]`, `[[irf9]]`, `[[irf7]]`, `[[ikbke]]` are implicit stubs pending seeding.

---

## Two-phase architecture

### Phase 1: IFN-I production (sensor → TBK1 → IRF3/7 → IFNB/IFNA transcription)

Cytosolic dsDNA is sensed by [[cgas]], which catalyzes synthesis of 2′3′-cGAMP → activates [[sting]] → recruits [[tbk1]] and IKKε (encoded by *IKBKE*) → IRF3 phosphorylation at Ser386/Ser396 → dimerization → nuclear translocation → IFN-β transcription. Viral dsRNA and ssRNA activate RIG-I (DDX58) or MDA5 (IFIH1) → MAVS → same TBK1/IRF3 arm. [[irf7]], expressed at low basal levels but strongly induced by IFN-I signaling itself, preferentially drives *IFNA* gene transcription and amplifies the response in a feed-forward loop [^stark2012].

| Sensor | Ligand | Adaptor | Kinase | TF | Output |
|---|---|---|---|---|---|
| cGAS | cytosolic dsDNA | STING | TBK1/IKKε | IRF3, IRF7 | IFN-β, IFN-α |
| RIG-I | 5′-triphosphate ssRNA / short dsRNA | MAVS | TBK1/IKKε | IRF3, IRF7 | IFN-β, IFN-α |
| MDA5 | long dsRNA | MAVS | TBK1/IKKε | IRF3, IRF7 | IFN-β, IFN-α |
| TLR3 | dsRNA (endosomal) | TRIF | TBK1 | IRF3 | IFN-β |
| TLR7/8/9 (pDC) | ssRNA / CpG DNA | MyD88/IRAK | IKKα | IRF7 | IFN-α (bulk) |

### Phase 2: IFNAR → ISGF3 → ISG induction (receptor → JAK → STAT → ISGs)

Secreted IFN-α/β binds the heterodimeric surface receptor formed by IFNAR2 (high-affinity subunit) and IFNAR1 (signal-amplifying subunit). IFNAR2 is constitutively associated with JAK1; IFNAR1 is associated with TYK2 [^stark2012]. Ligand-induced receptor dimerization promotes:

1. JAK1 transphosphorylates TYK2; TYK2 phosphorylates IFNAR1 (Tyr466)
2. Phospho-IFNAR1 recruits STAT2; STAT2 is phosphorylated (Tyr689)
3. JAK1 phosphorylates STAT1 (Tyr701)
4. p-STAT1:p-STAT2 heterodimer releases from receptor and binds IRF9 via IRF9's IRF association domain
5. The trimeric **ISGF3** complex (STAT1:STAT2:IRF9) translocates to the nucleus
6. ISGF3 binds ISREs (5′-AGTTTCNNTTTCC-3′) in ISG promoters → transcriptional activation of hundreds of ISGs

A parallel branch: STAT1 homodimers (GAS-binding "GAF" complex) also form and drive a partially overlapping but distinct ISG subset. IFN-γ (type II IFN) signals exclusively through the GAF branch [^stark2012].

**Key ISGs in the aging context:**

| ISG | Function | Aging relevance |
|---|---|---|
| *IFIT1/2/3* | RNA-binding antiviral restriction | Elevated in aged blood transcriptome |
| *MX1/MX2* | GTPases blocking viral replication | Aging biomarker (ISG score) |
| *OAS1/2/3, RNASEL* | RNase-L dsRNA destruction | Chronic activation damages cellular RNA |
| *ISG15* | ISGylation (ubiquitin-like modifier) | Secreted; amplifies paracrine IFN signaling |
| *IFITM3* | Membrane-resident restriction factor; IFN-I-induced | Marks senescent T cell subset in aged humans (see below) |
| *TRIM5, TRIM22, APOBEC3s* | Retrotransposon restriction | Reduced in aged cells, enabling LINE-1 reactivation |
| *BST2/Tetherin* | Virion retention | Elevated on senescent cells |
| *CXCL10 (IP-10)* | Chemokine attracting T cells, NK cells | Major SASP component; elevated in aged plasma |

---

## Aging-specific dysregulation

### 1. cGAS-STING-driven constitutive IFN-I in aging

The dominant mechanism of tonic IFN-I activation in aged tissues is chronic cGAS-STING engagement by self-derived DNA. Three sources converge:

**Mitochondrial DNA leakage.** mtDNA leaks from damaged mitochondria into the cytoplasm via VDAC1/2/3 oligomerization pores or during outer-membrane permeabilization events. This mtDNA — unmethylated at CpG and therefore recognized by cGAS as foreign-like — is a major source of chronic cGAS-STING activation in aged cells. Mitophagy normally degrades damaged mitochondria before mtDNA escape. In aged tissues where mitophagy efficiency declines (via mTOR-mediated suppression of ULK1; see [[mtor]]), mtDNA accumulates in the cytoplasm and drives cGAS activation. Pharmacological rescue: in aged C57BL/6J mice (24–26 months), treatment with urolithin A (UA, 2.3 mg/kg/day i.p. for 8 weeks) — a mitophagy inducer — significantly reduced cytosolic mtDNA accumulation and suppressed cGAS-STING-IFN-I activation, with attenuated IFNα, IFNγ, and TNFα transcriptional signatures in retinal pigment epithelium and neuroretina; mitophagy increase was also documented in brain (cerebellum). Mechanistically, PINK1/Parkin-dependent mitophagy was confirmed as required in the ARPE-19 cell line model (PINK1/PARK2-siRNA knockdown abrogated UA's cytosolic DNA reduction) but the in-vivo pharmacological rescue used urolithin A directly, not genetic activation of PINK1/Parkin [^jimenezloygorri2024]. These findings are also conserved in primary human normal dermal fibroblasts (NHDFs) from elderly donors (62 years) which showed elevated cGAS/STING pathway mediators and ISG expression vs. young (28 years). **Pathway conserved in humans? yes** (mtDNA leakage and cGAS-STING are conserved; the mitophagy decline and IFN-I elevation phenotype confirmed in human aged fibroblasts).

**Cytosolic chromatin fragments (CCFs).** Senescent cells generate cytoplasmic chromatin fragments from nuclear envelope rupture, micronuclei from lagging chromosomes, and cytoplasmic protrusions of nuclear material. These CCFs activate cGAS → STING → IFN-I → paracrine spread to bystander cells [^gluck2017 — see [[cgas-sting]]]. The IFN-I component of SASP creates a feed-forward senescence-amplifying loop: bystander IFN-I drives paracrine senescence via JAK-STAT-p21 signaling.

**LINE-1 retrotransposon reactivation.** This is the most aging-specific mechanism. Heterochromatin loss in aged cells (epigenetic derepression — see [[epigenetic-alterations]]) allows LINE-1 (L1) retrotransposons to be transcribed and reverse-transcribed, generating cytosolic RNA:DNA hybrids and cDNA that activate cGAS and RIG-I/MDA5. De Cecco et al. (2019) demonstrated that L1 elements become transcriptionally derepressed in senescent cells and old mouse tissues; L1 reverse-transcriptase inhibition with NRTIs (nucleoside reverse-transcriptase inhibitors, e.g., lamivudine, stavudine) suppressed the IFN-I signature in aged cells and extended healthspan in aged mice. L1 open reading frame 1 protein (ORF1p) and reverse-transcribed cDNA were detectable in old mouse tissues [^dececco2019]. This directly connects the [[genomic-instability]] and [[epigenetic-alterations]] hallmarks to [[chronic-inflammation]] via the type I IFN pathway. #gap/needs-replication — NRTI-in-aging results have not been confirmed in large mammal models or human RCTs.

Very recent work (2026) extends this: plasma EV LINE-1 RNA levels increase markedly with age in humans (n=185 aged 20–95; ~7.6-fold elevation in >65y vs. 20–45y group; strong correlation with neurofilament light chain as a brain aging biomarker); EVs from aged donors crossed the blood-brain barrier in mouse transfer experiments and activated cGAS-STING in microglia, causing neuroinflammation and cognitive dysfunction in young recipient mice [^yu2026]. Targeting age-related LINE-1 activation in the heart (via lamivudine-equivalent NRTI) reduced cardiac fibrosis and improved cardiac function metrics in aged mice [^yang2026]. These are very recent results (2026, low citation counts) that have not been independently replicated.

### 2. SASP IFN-I component

Senescent cells constitutively produce and secrete type I interferons as part of the SASP (see [[sasp]]). IFN-β secretion from senescent cells was first characterized alongside the cytokine/chemokine SASP components. The IFN-I SASP component acts in paracrine to:
- Induce STAT1-dependent growth arrest in neighboring cells (bystander senescence)
- Upregulate *MHC-I* expression → increased NK and CD8+ T cell recognition of senescent cells (potentially promoting immune clearance, but this is impaired in aged immune systems — see [[disabled-adaptive-immunity]])
- Amplify NF-κB-dependent SASP via IFNAR → JAK1 → STAT3 cross-talk [^kandhaya2022]

IFN-γ (type II IFN) synergizes with TNF-α to hyperactivate JAK/STAT1 in endothelial cells — TNF-α/IFN-γ co-stimulation substantially amplified SASP marker expression (IL-6, IL-8, CCL2, IL-1β) and increased ACE2/DPP4 expression (SARS-CoV-2 entry receptors) vs. either cytokine alone, in human umbilical vein endothelial cells (HUVECs) driven to a senescence-like state; ruxolitinib (1 µM JAKi) reversed ACE2/DPP4 upregulation and normalized SASP marker expression [^kandhaya2022]. This provides a molecular basis for aged individuals' greater COVID-19 severity via senescent endothelial cells. #gap/needs-replication — the ACE2 upregulation link to clinical COVID-19 severity is mechanistic in a HUVEC model; causal human in-vivo evidence is not established.

### 3. IFITM3-positive senescent T cells

IFN-I signaling upregulates IFITM3 (Interferon-Induced Transmembrane Protein 3) on T cells. A subset of CD8+ T cells in aged humans exhibits a senescent phenotype (p16^INK4a^+, p21+, telomere-dysfunction foci) with high IFITM3 surface expression, interpreted as chronically IFN-I-exposed cells that have entered a dysfunctional senescent state. These IFITM3+ T cells accumulate with age and are impaired in antigen-specific responses. The causal directionality — whether chronic IFN-I drives T cell senescence, or whether senescent T cells upregulate IFITM3 — is not fully resolved. #gap/needs-replication — IFITM3 as a senescent T cell marker is described in early reports but has not been validated with large well-powered human cohorts.

> **Note:** The Jin 2022 footnote below ([^jin2022]) documents a Down syndrome / Alzheimer's disease model (DS iPSC-derived microglia in human microglial chimeric mice) where chronic IFN-I signaling caused microglial senescence — rescued by IFNAR1/2 shRNA knockdown, not by ruxolitinib. Ruxolitinib appears in this section's footnotes via Kandhaya-Pillai 2022 (HUVEC model, different context). The IFITM3 senescent T cell population in aged humans is a distinct, parallel observation not directly sourced from Jin 2022.

### 4. Anti-IFN-I autoantibodies in elderly: COVID-19 vulnerability

Bastard et al. (2020) reported that ~10% of patients with life-threatening COVID-19 pneumonia (101/987) carry pre-existing autoantibodies that neutralize IFN-α and/or IFN-ω, but not IFN-β. These autoantibodies were present in blood collected before SARS-CoV-2 exposure and were absent from all 663 asymptomatic/mild COVID-19 individuals and from only 4/1,227 (0.33%) healthy controls [^bastard2020]. Within the life-threatening COVID-19 cohort, autoantibody prevalence was higher in patients aged ≥65 years (50/385, 13.0%) than in those <65 years (51/602, 8.5%) (Table 1, OR 1.61 [1.04–2.49], p=0.024). Population-level age-stratified prevalence (~1% in those <65 years; ~4% in those aged >70 years) was reported in the companion follow-up study Bastard et al. 2021 *Science Immunology* (not cited here — see below) [^bastard2021note]. This is a distinct failure mode from the tonic IFN-I activation described above: in certain aged individuals, IFN-I production may be adequate but effector function is neutralized by autoantibody. **Pathway conserved in humans? yes** — observed in humans directly.

[^bastard2021note]: [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]] · doi:10.1126/sciimmunol.abl4340 · PMID 34413139 · Bastard P et al. · *Science Immunology* 2021 · n=34,159 uninfected general population (prevalence cohort) + ~3,595 critical COVID-19 patients · observational (multi-cohort cross-sectional) · model: humans · anti-IFN-α/ω autoantibodies (high-concentration assay: 10 ng/mL, plasma 1:10) present in 0.18% of uninfected individuals aged 18–69, 1.1% aged 70–79, and 3.4% aged >80; sensitive assay (100 pg/mL) finds ~1%, ~2.3%, and ~6.3% in the same age bands respectively; autoantibodies predated SARS-CoV-2 infection; account for ~20% of COVID-19 deaths; anti-IFN-β autoantibodies did not increase with age · study page seeded 2026-05-13 · PDF locally available:  · NOTE: the seeder brief cited DOI `abl4247` (wrong) — correct DOI is `abl4340`; corrected on 2026-05-13.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Phenotype conserved in humans? | yes (aging-associated IFN-I dysregulation documented in human transcriptomic studies) |
| Anti-IFN autoantibody aging data | yes — direct human epidemiology |

---

## Cross-talk with NF-κB and JAK-STAT

The IFN-I pathway does not operate in isolation. Key cross-talks:

- **NF-κB**: Both IRF3 and NF-κB are co-activated downstream of TBK1/IKKε. The IFN-β promoter (*IFNB1* enhancer, "enhanceosome") requires a composite IRF3 + NF-κB + AP-1 binding. In aged cells, constitutive low-level NF-κB activity (from SASP, mitochondrial stress) lowers the threshold for full IFN-I induction. See [[nf-kb]].
- **JAK-STAT (Type I IFN → STAT3)**: IFNAR signaling can activate STAT3 in addition to the canonical STAT1/STAT2/IRF9 arm. STAT3 is the primary mediator of IL-6/gp130 SASP amplification (see [[jak-stat-pathway]]). JAK1 is shared between IFNAR and IL-6 receptor complexes — JAK inhibitors targeting JAK1 suppress both arms.
- **IRF3 → p53 cross-talk**: IRF3 can directly interact with p53 to modulate apoptosis decisions in virally infected / senescent cells. When IFN-I signaling is chronic, this may contribute to apoptosis resistance in senescent cells. #gap/no-mechanism — direct molecular mechanism of IRF3-p53 interaction in senescent (vs. virally infected) cells is incompletely characterized.
- **mTORC1 translational amplification**: mTORC1 activity promotes cap-dependent translation of ISG mRNAs; in aged cells, paradoxically elevated mTORC1 activity (see [[mtor]]) may amplify ISG protein output beyond what the IFN-I transcriptional signal alone would predict. Conversely, rapamycin treatment reduces ISG expression in aged mouse tissues — a candidate mechanism for some of rapamycin's anti-inflammaging effects (#gap/needs-replication — mechanistic link is inferred, not directly demonstrated with rapamycin-IFN-I epistasis experiments).

---

## Interventions modulating type I IFN signaling in aging

### JAK1/TYK2 inhibitors (JAKinibs)

JAK inhibitors targeting JAK1 (and/or TYK2) suppress the IFNAR → JAK1/TYK2 → STAT1/STAT2 arm, blocking ISG expression without affecting IFN-I production. In aging contexts:

- **Ruxolitinib** (JAK1/JAK2 inhibitor): FDA-approved for myelofibrosis and graft-versus-host disease. Reduces circulating inflammatory markers in patients with myeloid disease. The NIA Interventions Testing Program is evaluating ruxolitinib in aged mice. Under investigation as a senomorphic agent because it suppresses both IFN-I ISG induction and the IL-6/STAT3 SASP arm via shared JAK1.
- **Baricitinib** (JAK1/JAK2 inhibitor): FDA-approved for rheumatoid arthritis and atopic dermatitis. Reduced mortality in hospitalized COVID-19 patients — consistent with blocking hyperactivated IFN-I/JAK-STAT signaling contributing to immunopathology.
- **Tofacitinib** (pan-JAK inhibitor): FDA-approved for RA, ulcerative colitis. Less selective; JAK3 inhibition adds lymphotoxicity risk.

**Aging-context druggability tier rationale:** JAK inhibitors are FDA-approved (Tier 1 criteria met by indication) but no aging-specific JAK inhibitor trial with primary lifespan/healthspan endpoints has been completed in humans. Tier 2 is applied per the aging-context convention — high-quality probes (ruxolitinib, baricitinib) exist and are mechanistically tractable for aging indications, but aging-validation is preclinical/pilot only. See [[jak-stat-pathway]] for full JAK inhibitor class discussion.

### STING antagonists

Small-molecule STING antagonists (e.g., H-151, SN-011, MSA-2) block STING activation, preventing IFN-I production from the cGAS-STING arm. H-151 reduced IFN-I and IL-6 in aged mice and ameliorated age-associated inflammation in a mouse model of SAVI (STING gain-of-function disease). Aging-specific trials are preclinical. See [[cgas-sting]] for the full STING antagonist landscape.

### STING + TLR4 dual-PAMP nanoparticle adjuvants (the inverse modality)

In cancer-vaccine contexts, the *opposite* therapeutic direction — acute amplification of IFN-I via dual-PRR agonism — is being explored. Kane et al. (2025) co-encapsulated cdGMP (STING agonist) and MPLA (TLR4 agonist) on the same ~30–60 nm lipid NP at a 2.5:1 mole ratio [^kane2025-superadjuvant]. *In vitro*, dual-agonist NPs drove >4-fold higher IFN-α/β in mouse macrophages, primary mouse splenic CD11c⁺ DCs, and primary human DCs (3 donors) vs single-agonist or empty NP controls; the synergy required IRF3, IRF5, and IRF7 (KO studies). *In vivo* IFNAR antibody blockade fully abolished tumor protection across multiple syngeneic models (B16F10 melanoma, Panc02 PDAC, 4T1 TNBC), confirming type I IFN signaling as the necessary effector axis. This is a clean preclinical mechanistic demonstration of the *acute pro-IFN-I* axis of the dual-edged IFN-I-in-aging biology this wiki tracks — useful for the same reason: STING + TLR4 dual-PRR engagement amplifies shared IRF-driven IFN-I output through coordinated activation of IRF3/IRF5/IRF7. Aged-host efficacy is the open question (paper used young immunocompetent mice). The same Atukorale group's earlier Chibaya 2024 paper combined this NP platform with **therapy-induced senescence** (trametinib MEK + palbociclib CDK4/6) in PDAC — using SASP biology to remodel immune-cold tumor microenvironments — the most direct cancer-aging-IFN-I-interface published to date [^chibaya2024-ifnpage]. See [[studies/kane-2025-super-adjuvant-nanoparticles]], [[interventions/pharmacological/nanoparticle-immunoadjuvants]] (class page), and [[cgas-sting]] § STING agonists for cancer immunotherapy.

### NRTIs as retroelement suppressors

Nucleoside reverse-transcriptase inhibitors (lamivudine, stavudine, tenofovir) suppress LINE-1 reverse transcription, reducing cytosolic LINE-1 cDNA and the associated IFN-I induction. De Cecco et al. (2019) showed that lamivudine treatment reduced the IFN-I signature in old mice and in senescent human cells [^dececco2019]. Yang et al. (2026) showed NRTIs alleviated cardiac aging phenotypes in old mice via this mechanism [^yang2026]. Human aging trials with NRTIs are not yet registered. #gap/needs-human-replication

### Anti-IFN-I biologics

Anifrolumab (anti-IFNAR1 monoclonal antibody; FDA-approved for systemic lupus erythematosus) blocks IFN-I signaling by occupying IFNAR1. Sifalimumab and rontalizumab (anti-IFN-α mAbs) reduce ISG scores in SLE patients. These are not yet evaluated in aging-context trials but represent a mechanistically coherent intervention class for aging-associated IFN-I overactivation. #gap/needs-human-replication

---

## Limitations and knowledge gaps

- **Tonic vs. acute IFN-I in aging**: The same pathway mediates beneficial antiviral responses and harmful chronic-inflammation. Blanket JAK inhibition or STING antagonism impairs acute antiviral immunity — the therapeutic window for aging-specific suppression without infection vulnerability is not established. #gap/dose-response-unclear
- **Causal vs. correlative evidence**: Most aging data linking IFN-I to inflammaging are correlative (ISG scores elevated in aged blood) or mouse genetic interventions. Prospective human causal evidence (e.g., Mendelian randomization using IFN-I pathway SNPs → aging outcomes) is sparse. #gap/needs-replication
- **IFITM3+ T cell biology**: The IFITM3-positive senescent T cell population requires larger cross-sectional and longitudinal human datasets to characterize its contribution to immunosenescence. #gap/needs-replication
- **NRTI aging trials**: Lamivudine and related drugs are safe (HIV/hepatitis treatment profile over decades), but no aging-endpoint RCT has been run. Retroelement-IFN-I axis as an aging target needs human translation. #gap/needs-human-replication
- **IFN-I tissue heterogeneity**: ISG signatures differ substantially across tissues in aging. Brain microglia, cardiac fibroblasts, and peripheral blood mononuclear cells show different IFN-I activation trajectories with age. A tissue-resolved understanding of when and where IFN-I drives vs. is driven by the aging program is missing. #gap/no-mechanism (tissue-specific regulatory logic)
- **Anti-IFN autoantibody clinical implications**: Whether screening for anti-IFN-I autoantibodies in elderly individuals should inform vaccination or antiviral prophylaxis decisions is unresolved. #gap/needs-replication

---

## Footnotes

[^stark2012]: doi:10.1016/j.immuni.2012.03.013 · Stark GR, Darnell JE Jr · *Immunity* 2012 · n=not applicable · review · model: human (canonical review); covers JAK-STAT pathway 20-year landmark review; ISGF3 mechanism confirmed: STAT1/STAT2/IRF9 trimeric complex; ISRE motif (5′-AGTTTCNNTTTCC-3′ confirmed); IFN-α/β receptor subunit assignments confirmed (JAK1 constitutively associated with IFNAR2; TYK2 with IFNAR1); STAT1 Tyr701 and STAT2 Tyr689 phosphorylation; IRF7 feed-forward amplification of IFNA genes; IFN-γ signals exclusively through STAT1 homodimer (GAF/GAS branch, not ISGF3) — all confirmed against PDF · PDF verified against primary source · cited >1,400 times · PDF locally available: 

[^dececco2019]: doi:10.1038/s41586-018-0784-9 · De Cecco M, Ito T, Petrashen AP, et al. · *Nature* 2019 · n=not stated per group; multiple cohorts (senescent human cells, aged mouse tissues) · observational + genetic-intervention · model: IMR90 human fibroblasts; C57BL/6J mice (24 months vs. 3 months) · L1 elements transcriptionally derepressed in senescent cells and old mouse tissues; L1 ORF1p detectable in old tissues; NRTIs (lamivudine, stavudine) reduced IFN-I ISG signature in old mice; NRTI treatment improved healthspan metrics · cited >1,100 times (FWCI 94.5) · #gap/no-fulltext-access — archive status: closed-access (not_oa); quantitative claims (n per group, exact fold-changes, specific healthspan endpoints) unverified against full PDF; abstract-level claims only.

[^jimenezloygorri2024]: doi:10.1038/s41467-024-45044-1 · Jiménez-Loygorri JI et al. · *Nature Communications* 2024 · n=5–9 mice per group (in-vivo, C57BL/6J mito-QC reporter); n=45–57 cells (NHDF in-vitro) · in-vivo + in-vitro · model: old (24–26 months) vs. young (6–8 months) C57BL/6J mito-QC mice; ARPE-19 cells; primary human normal dermal fibroblasts (NHDFs) from 28-year-old and 62-year-old donors · UA (urolithin A, 2.3 mg/kg/day i.p. × 8 weeks) reduced cytosolic mtDNA and suppressed cGAS-STING-IFN-I activation in aged retina (RPE + neuroretina) and brain; ISG expression reduced; improved neurological function (clasping score, NOR, ERG); PINK1/Parkin knockdown in ARPE-19 cells abrogated UA's effect on cytosolic DNA, confirming PINK1/Parkin-dependent mitophagy as the mechanism in vitro · PDF verified against primary source · cited 211 times (FWCI 101.0) · PDF locally available: 

[^bastard2020]: doi:10.1126/science.abd4585 · Bastard P et al. · *Science* 2020 · n=987 patients with life-threatening COVID-19; 663 with asymptomatic/mild COVID-19; 1,227 healthy controls · observational (case-control) · model: humans · 101/987 (10.2%) of patients with life-threatening COVID-19 pneumonia carried neutralizing IgG anti-IFN-α2 and/or anti-IFN-ω autoantibodies; present in only 4/1,227 (0.33%) healthy pre-pandemic controls (Fisher exact p<10⁻¹⁶); absent in all 663 asymptomatic/mild cases; male predominance (95/101 = 94%); age distribution within the life-threatening cohort: 51/602 (8.5%) in those <65 years vs. 50/385 (13.0%) in those ≥65 years (OR 1.61 [1.04–2.49], p=0.024) — NOTE: the fine-grained age-stratified population-level prevalence figures (~4% at age >70 in healthy uninfected individuals) are from the companion paper Bastard 2021 *Science Immunology* (doi:10.1126/sciimmunol.abl4340; PMID 34413139; see [[studies/bastard-2021-anti-ifn-autoantibody-age-prevalence]]), NOT this 2020 paper; the `abl4247` DOI cited in earlier drafts was incorrect — corrected 2026-05-13 · PDF verified against primary source · cited 2,785 times (FWCI 64.2; percentile 100) · PDF locally available: 

[^jin2022]: doi:10.1016/j.stem.2022.06.007 · Jin M et al. · *Cell Stem Cell* 2022 · n=3 control + 3 DS hiPSC lines; chimeric mice (Rag2−/−hCSF1 immunodeficient); 7,790 human microglial cells recovered for scRNA-seq · in-vivo (human microglial chimeric mouse brains) + human iPSC model · model: Down syndrome (DS) and control hiPSC-derived microglia in organoids and chimeric mice; DSAD postmortem brain tissue · hyperactivated type I IFN signaling drove DS microglial senescence and excessive synaptic pruning (both in organoids and in chimeras); senescence rescue achieved by IFNAR1/2 shRNA knockdown (not ruxolitinib — the paper does not use ruxolitinib; ruxolitinib is a separate result in Kandhaya-Pillai 2022); DSAD brain-tissue-derived pathological tau additionally induced microglial senescence with elevated ISG signatures; IFNAR1/2 knockdown also rescued tau-induced senescence · PDF verified against primary source — ruxolitinib was NOT used in this paper · cited 146 times (FWCI 21.4) · PDF locally available: 

[^kandhaya2022]: doi:10.1111/acel.13646 · Kandhaya-Pillai R et al. · *Aging Cell* 2022 · n=multiple independent experiments (2–3 independent replicates per condition) · in-vitro · model: human umbilical vein endothelial cells (HUVECs; Lonza CC-2519; senescence induced by serial passaging to passage 11–14); also preadipocytes from healthy donors · TNF-α (20 ng/ml) + IFN-γ (20 ng/ml) synergy hyperactivated JAK/STAT1; amplified SASP outputs (IL-6, IL-8, CCL2, IL-1β, NLRP3, CASP1) substantially above single-cytokine baselines; upregulated ACE2 and DPP4 (not TMPRSS2 — the paper does not mention TMPRSS2 as a finding) in senescent HUVECs; senescence-like proliferative arrest; all effects suppressible by ruxolitinib (1 µM) or remdesivir (2 µM) · PDF verified against primary source — cell model is HUVECs, not IMR90/WI-38 fibroblasts · cited 104 times (FWCI 11.8) · PDF locally available: 

[^yang2026]: doi:10.1038/s43587-025-01056-0 · Yang C et al. · *Nature Aging* 2026 · n=aged C57BL/6J mice (18–22 months) · in-vivo · model: aged mouse heart · LINE-1 activation in aged cardiac tissue; NRTI treatment (lamivudine) suppressed LINE-1-driven cGAS-STING-IFN-I activation; reduced cardiac fibrosis and improved systolic function · archive status: closed-access (not_oa); quantitative details unverified. **Very recent publication (2026); citation count not yet meaningful; treat as preliminary.**

[^yu2026]: doi:10.1111/acel.70350 · Yu S et al. · *Aging Cell* 2026 · n=185 humans (aged 20–95 years, stratified young n=58, middle-aged n=59, old n=68) for human plasma EV LINE-1 mRNA quantification; plus mouse EV transfer experiments · observational (human cohort) + in-vivo (mouse EV transfer) · model: human plasma cohort; C57BL/6J mice (EV transfer from aged to young recipients); pharmacological interventions with 3TC (LINE-1 reverse transcription inhibitor) and H151 (STING inhibitor) · plasma EV LINE-1 RNA levels markedly increased with age in humans (ORF1 mRNA: ~7.6-fold higher in >65y vs. 20–45y; p<0.001); correlated with NFL (brain aging biomarker); EVs from aged donors crossed BBB and activated cGAS-STING in microglia of young recipients; caused neuroinflammation and cognitive dysfunction; both 3TC and H151 reversed these deficits · PDF verified against primary source — the human cohort (n=185) and the 3TC/H151 pharmacological intervention data were not reflected in the original wiki footnote · gold OA PDF locally available:  · **Very recent publication (2026); citation count not yet meaningful; treat as preliminary.**

[^gluck2017]: see [[cgas-sting]] footnotes for Glück 2017 (cytoplasmic chromatin fragments driving IFN-I from senescent cells via cGAS-STING).

[^kane2025-superadjuvant]: [[studies/kane-2025-super-adjuvant-nanoparticles]] · doi:10.1016/j.xcrm.2025.102415 · PMID:41072409 · PMC:PMC12629812 · in-vitro+in-vivo · "Super-adjuvant nanoparticles for platform cancer vaccination" · Kane GI et al. · *Cell Reports Medicine* 6(10):102415 · 2025 · n=3–4 biological replicates in vitro; 5–13 mice per group in vivo; 3 human DC donors · model: RAW 264.7 + iBMDMs (Irf3/Irf5/Irf7 KO) + primary mouse splenic CD11c⁺ DCs + primary human DCs (3 donors); in vivo C57BL/6 (B16F10, Panc02) + BALB/c (4T1) · archive: downloaded (gold OA via PMC) · lipid NP co-encapsulating cdGMP (STING agonist, 45 µM) + MPLA (TLR4 agonist, 20 µM) at 2.5:1 mole ratio drove >4-fold synergistic IFN-α/β in primary DCs (IRF3/IRF5/IRF7 dependent); >3-fold lymph-node accumulation post-boost; B16F10 multivalent-peptide vaccination 100% (10/10) tumor-free at day 48; lysate vaccination 69% B16F10 / 88% Panc02 / 75% 4T1 rejection with 100% systemic rechallenge rejection across all three models; IFNAR blockade abolishes efficacy.

[^chibaya2024-ifnpage]: doi:10.1126/scitranslmed.adj9366 · in-vitro+in-vivo · "Nanoparticle delivery of innate immune agonists combined with senescence-inducing agents promotes T cell control of pancreatic cancer" · Chibaya L*, DeMarco KD*, Lusi CF, Kane GI et al.; Atukorale PU#, Ruscetti M# · *Sci Transl Med* 16(762):eadj9366 · 28 Aug 2024 · model: transplanted + autochthonous PDAC (mouse); human PDAC samples · archive: downloaded (bronze OA via HHS Public Access PMC) · STING+TLR4 dual-agonist lipid NP + trametinib MEK inhibitor + palbociclib CDK4/6 inhibitor "T/P" — senescence-induced SASP remodels immune-cold PDAC TME → NP-delivered dual-PRR agonists prime IFN-I-driven T cell response; both tumor and host STING required. **Full study page not yet seeded; claims from abstract + editor's summary — verify before relying. #gap/needs-full-extraction**
