---
type: intervention
aliases: [tumor-targeting bacteria, bacterial immunotherapy, oncolytic bacteria, microbial cancer therapy, living therapeutics cancer, bacteria-mediated cancer therapy]
mode: pharmacological
mechanisms: [tumor-selective-colonization, pamp-mediated-immune-activation, direct-cytotoxicity]
targets: []
target-hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
target-pathways: []
human-evidence-level: limited
clinical-stage: phase-2
safety-profile: investigational
translation-gap: phase-3-rct-needed
next-experiment: "Run a Phase 1 dose-escalation trial of intravenous E. americana in solid-tumor patients with documented tumor hypoxia (FMISO-PET or HIF-1α-positive biopsy) — primary endpoints: MTD, bacterial pharmacokinetics, biodistribution; secondary: ORR + duration of response. Combination arm: low-dose anti-PD-L1 co-administration."
clinical-trials-active: 0
literature-checked-through: 2026-05-21
verified: true
verified-date: 2026-05-21
verified-by: claude
verified-scope: "Iwata 2025 anchor verified end-to-end against local PDF (pages 1-17); all cited DOIs confirmed via Crossref (title/year/journal/first-author match); Toso 2002 attenuation profile confirmed via Crossref abstract (ΔpurI/ΔmsbB); Fares 2019 DOI confirmed. Corrections: (1) VNP20009 header notation TAP-/msbB- → ΔpurI/ΔmsbB (Toso 2002 Crossref abstract); (2) family designation clarified — Yersiniaceae is the current NCBI-valid placement (Adeolu 2016 reclassification); Iwata 2025 paper itself uses legacy 'Enterobacteriaceae' — added inline disambiguation note pointing to ewingella-americana microbe page; (3) added n=5/group experimental-context qualifier to the 5/5 CR claim to disambiguate from the initial n=3/group screen. Mechanism-class claims (hypoxia tropism, EPR-like effect, CD47, PAMP/TLR/NLR, hemolysin+exotoxin) cross-checked against Iwata 2025 discussion and confirmed as accurately stated. Closed-access papers (Toso 2002, Kwon 2024, Chang 2025) not fully read — verified via Crossref metadata only. ClinicalTrials.gov re-queried: 0 recruiting trials for bacterial cancer therapy confirmed. No superseding meta-analyses or large RCTs found."
---

> Note: The naturally-occurring bacterial subclass (*E. americana*) is based on a single preclinical study (Iwata 2025); all human-trial data cited here is for engineered bacterial platforms. No naturally-occurring isolate has reached human trials. Closed-access papers (Toso 2002, Kwon 2024, Chang 2025) verified via Crossref metadata only — full-text not available locally.

# Bacterial Cancer Therapy

Administration of viable bacterial cells — engineered or naturally-occurring — that selectively colonize the tumor microenvironment and exert antitumor effects through innate immune activation and, in some strains, direct cytotoxicity. The modality is formally classified as pharmacological because most current clinical candidates are biologics (attenuated live bacteria), but it operates via a mechanism categorically distinct from small molecules, monoclonal antibodies, and conventional chemotherapy. It is also distinct from microbiome-modulation interventions ([[gut-microbiome-aging-shifts]], FMT, prebiotics) — those modulate gut commensals to influence systemic immunity; bacterial cancer therapy administers bacteria directly to the tumor compartment via IV or intratumoral injection.

Historically dismissed after William Coley's inconsistent 19th-century results, the field has been reinvigorated by (1) synthetic biology enabling safer engineered platforms (2000s–present), (2) the discovery of a resident intratumoral microbiome in multiple tumor types [^nejman2020], (3) spatial mapping of how intratumoral bacteria reshape the tumor immune microenvironment [^galeano2022], and (4) the 2025 demonstration that a naturally-occurring, genetically unmodified gut commensal from a non-mammalian host — *Ewingella americana* isolated from the Japanese tree frog *Dryophytes japonicus* — achieves 100% complete response in a syngeneic murine colon carcinoma model after a single IV dose, outperforming anti-PD-L1 and liposomal doxorubicin [^iwata2025].

## Field History

### Coley's Toxins (1890s)

William B. Coley, a New York surgeon, observed spontaneous tumor regressions in patients who developed erysipelas (*Streptococcus pyogenes*) post-operatively. Beginning ~1893 he developed "Coley's toxins" — heat-killed mixtures of *S. pyogenes* and *Serratia marcescens* — and reported regressions in sarcoma, carcinoma, and lymphoma in hundreds of patients. Results were inconsistent across practitioners, partly attributed to variable toxin preparation standards. The FDA effectively rejected the modality in the 1960s by classifying it as a "new drug" requiring proof-of-efficacy by randomized trial — evidence that did not exist at the time. Coley's toxins established the proof-of-concept that bacterial products could trigger tumor regression via systemic immune activation. #gap/needs-primary-citation (Coley primary case series; cite via historical review when study page exists)

### Engineered Bacteria Era (~2000–present)

The modern era uses genetically attenuated strains designed for improved safety and/or payload delivery:

- **VNP20009 (*Salmonella enterica* Typhimurium, ΔpurI/ΔmsbB):** The leading engineered strain for early human trials. VNP20009 carries chromosomal deletions in *purI* (purine biosynthesis auxotrophy) and *msbB* (truncated lipid A → reduced sepsis risk). A Phase I trial (n=25; 24 melanoma, 1 RCC) tested IV administration at escalating doses up to 3×10⁸ cfu/m². MTD was established at 3×10⁸ cfu/m²; dose-limiting toxicities included thrombocytopenia and bacteremia; tumor colonization was confirmed at autopsy in some patients but was sparse and inconsistent; no objective tumor regression was observed [^toso2002]. The Phase I confirmed safety at low doses but insufficient tumor colonization at tolerated doses — identified as the primary translation bottleneck.

- **Listeria-based platforms (ADXS-HPV / axalimogene filolisbac):** Attenuated *Listeria monocytogenes* (ΔactA/ΔinlB) engineered to express HPV E7 antigen fused with listeriolysin O (LLO) — a cytolysin that enables antigen escape from the phagosome into the cytoplasm for MHC-I cross-presentation. Phase I/II trials in HPV-associated cancers (cervical carcinoma, anal cancer, head and neck SCC) demonstrated safety; Phase II single-arm studies reported modest disease control rates. A safety signal emerged from a case report of vaccine-strain bacteremia 31 months post-immunization [^fares2019], underscoring the residual infection risk of live attenuated platforms. Clinical development continued into Phase II/III combinations with checkpoint inhibitors.

- **E. coli Nissle 1917 platforms (synthetic biology era):** *E. coli* Nissle 1917 (EcN) is a well-characterized probiotic strain with FDA live-biotherapeutic product (LBP) precedent. Multiple groups have engineered EcN to produce neoantigen peptide arrays [^redenti2024] or to release synthetic CAR-T cell antigen tags (probiotic-guided CAR-T / ProCARs) [^vincent2023], enabling tumor-specific immune targeting without genetic modification of the cancer cell itself.

- **IL-10R hysteresis engineering (2025, Cell):** A Salmonella strain engineered to exploit IL-10 receptor (IL-10R) hysteresis simultaneously evades phagocytosis (early high IL-10R → immunosuppression) and later reactivates exhausted tumor-resident CD8+ T cells (late low IL-10R → immune competence restoration), achieving tumor elimination with memory formation across multiple tumor types in preclinical models [^chang2025]. Represents the state-of-the-art in engineered bacteria design as of 2026.

### Naturally-Occurring Bacteria Era (2023–present)

Distinct from the engineered-bacteria paradigm: screening of non-mammalian vertebrate gut microbiomes for commensals with inherent tumor-colonizing and antitumor properties, without genetic modification.

- **Miyako Lab / JAIST work:** The Miyako Laboratory at Japan Advanced Institute of Science and Technology began isolating and screening bacteria from amphibian gut microbiomes as candidate antitumor agents, motivated by the observation that amphibians maintain distinct gut microbial communities under different evolutionary selection pressures than mammals.

- **Iwata et al. 2025 (*Gut Microbes*):** *Ewingella americana*, a Gram-negative facultative anaerobe (Yersiniaceae; Iwata 2025 uses legacy "Enterobacteriaceae" — see [[microbiome/ewingella-americana]] for reclassification note) isolated from the intestinal tract of the Japanese tree frog *Dryophytes japonicus*, achieved **100% complete response (5/5) in BALB/c mice bearing subcutaneous Colon-26 carcinoma** after a single IV dose of 1×10⁹ CFU (head-to-head comparison, n=5/group, Figure 3). In the same experiment: anti-PD-L1 (1/5 CR), liposomal doxorubicin (0/5 CR). Immunological memory was confirmed by tumor rechallenge >60 days post-treatment [^iwata2025]. The paper explicitly proposes the naturally-occurring (non-GMO) strategy as an alternative regulatory and safety pathway. See [[studies/iwata-2025-ewingella-americana-antitumor]] and [[microbiome/ewingella-americana]].

## Mechanism of Action

### Tumor-Selective Colonization

The enabling feature of bacterial cancer therapy is preferential bacterial accumulation within the tumor microenvironment:

1. **Hypoxia tropism:** Facultative anaerobes (including *Salmonella*, *E. americana*) proliferate in the low-O₂ (~0.5–2% pO₂) tumor core, which is incompatible with normal aerobic host tissue. This oxygen-gradient-driven tropism does not require molecular targeting [^staedtke2024].

2. **Aberrant vasculature (EPR-like effect):** Tumor vessels have high permeability and impaired lymphatic drainage; bacteria can extravasate through gaps in the leaky endothelium analogously to the enhanced permeability and retention (EPR) effect exploited by nanoparticles.

3. **Local immunosuppression:** Tumors actively suppress innate immunity via CD47 "don't eat me" signalling on tumor cells, MDSC recruitment, and Treg accumulation. This blunted local immune clearance allows bacterial persistence at the tumor site while blood clearance is rapid (~24 hours for *E. americana* in the Iwata model).

4. **Necrotic region metabolite gradients:** Necrotic cores of tumors are rich in nutrients (amino acids, purines) released from dying cells, providing a growth advantage for auxotrophic bacteria engineered to depend on these nutrients.

In healthy tissues, intact vasculature + competent myeloid immune surveillance → rapid bacterial clearance → no colonization. This differential is the pharmacokinetic basis of the therapeutic window.

### Antitumor Execution

Once bacteria colonize the tumor, antitumor activity proceeds via two axes:

**Innate immune activation (primary):** Bacterial PAMPs engage toll-like receptors (TLR4 for LPS, TLR5 for flagellin, TLR9 for unmethylated CpG DNA) and NOD-like receptors (NLR) on tumor-resident and recruited immune cells:
- Neutrophils: recruited rapidly, form NETs, perform phagocytosis; may mediate initial tumor cell lysis
- NK cells: activated by IFN-γ and IL-12 from macrophages
- Dendritic cells: process tumor antigen + PAMP co-stimulation → cross-prime CD8+ T cells
- Macrophages: M1-polarized by IFN-γ + TNF-α; shift from pro-tumor M2 to anti-tumor M1 phenotype
- CD8+ T cells: primed against tumor-specific antigens by DC cross-presentation; expand and infiltrate
- B cells: generate antibody responses against tumor-exposed antigens

The net effect is conversion of a "cold" (immune-excluded or immune-desert) tumor to a "hot" (T cell-inflamed) tumor microenvironment — the same goal as checkpoint inhibitor therapy, but achieved by innate immune activation rather than disinhibition of existing T cells.

**Direct cytolysis (secondary, strain-dependent):** Some bacterial strains (including *E. americana*) produce cytolytic proteins (hemolysins, leukotoxins) that directly lyse tumor cells. Caspase-3-mediated apoptosis of tumor cells has been observed in the Iwata 2025 model. The relative contribution of direct cytolysis vs. immune-mediated killing is not yet delineated for *E. americana*.

### Mechanism Summary Table

| Mechanism step | Mediator | Evidence tier |
|---|---|---|
| Tumor colonization | Hypoxia gradient + EPR vasculature + CD47 immune suppression | Multiple bacterial platforms, including *E. americana* Iwata 2025 |
| Rapid blood clearance | Intact myeloid clearance in normal tissue | Iwata 2025 (24-hr blood clearance) |
| PAMP-mediated innate activation | LPS/flagellin/CpG → TLR → IL-12, TNF-α, IFN-γ | Multiple platforms; *E. coli* Nissle EcN + VNP20009 preclinical |
| Adaptive immune recruitment | DC cross-priming → CD8+ T cell expansion | Vincent 2023 (ProCARs); Redenti 2024 (EcN neoantigen) |
| Direct cytolysis | Cytolysin / hemolysin secretion | *E. americana* Iwata 2025 (caspase-3 activation documented) |
| Immunological memory | Memory T cell formation → rechallenge protection | Iwata 2025 (>60 day rechallenge protection confirmed) |

## Naturally-Occurring vs. Engineered Sub-Modalities

| Dimension | Engineered (e.g., VNP20009, ADXS-HPV, EcN-neoantigen) | Naturally-occurring (e.g., *E. americana*) |
|---|---|---|
| Pathogenicity baseline | Pathogen (attenuated) | Commensal/opportunistic; baseline low-pathogenicity |
| Reversion risk | Yes (spontaneous mutation can restore virulence) | Minimal (no introduced virulence genes to revert) |
| Regulatory pathway | Recombinant-DNA review (FDA 21 CFR Part 312) | Streamlined (FDA LBP framework precedent for unmodified organisms) |
| Antibiotic susceptibility | Often retained (rescue mechanism) | Retained |
| Tunability | High (synthetic biology payloads) | Limited (whole organism; phenotype is fixed) |
| Efficacy ceiling | Engineerable in principle | Strain-discovery-limited |
| Clinical stage | Phase 1/2 (several platforms) | Preclinical only (as of 2026-05-21) |
| Human evidence | Limited (safety established; efficacy marginal to date) | None |

The Iwata 2025 discussion paragraphs explicitly argue that naturally-occurring bacteria avoid the regulatory complexity, reversion risk, and public concern around GMOs that have constrained the engineered-bacteria field's clinical progress [^iwata2025].

## Recent Literature — High-Impact Papers (2023–2025)

The recency search (PubMed, 2022–2026) identified no randomized clinical trials or meta-analyses for bacterial cancer therapy specifically, consistent with the field's preclinical-to-early-clinical stage. High-impact primary-research and review papers integrated here:

- **Kwon et al. 2024 (*Nature Reviews Clinical Oncology*)** — comprehensive review of bacteria as cancer immunotherapy agents; states "remarkable progress has been made preclinically in engineering bacteria as agents for cancer immunotherapy; some of these bacterial products have successfully reached the clinical stages" [^kwon2024]. Identified as the field's current primary review for clinical framing.

- **Redenti et al. 2024 (*Nature*)** — *E. coli* Nissle 1917 engineered to deliver neoepitope peptide arrays to tumor sites, activating both CD4+ and CD8+ tumor-specific T cells; solid tumor control/elimination demonstrated in preclinical models [^redenti2024].

- **Bender et al. 2023 (*Cell*)** — *Lactobacillus reuteri* colonizes melanomas and produces indole-3-aldehyde (a tryptophan metabolite) that activates aryl hydrocarbon receptor signaling in CD8+ T cells, synergizing with checkpoint immunotherapy in preclinical models [^bender2023]. Demonstrates that non-engineered commensals can enhance antitumor immunity through metabolic mechanisms beyond direct PAMP signaling.

- **Vincent et al. 2023 (*Science*)** — probiotic-guided CAR-T cells (ProCARs): tumor-colonizing bacteria release synthetic antigens that label cancer tissue for CAR-mediated destruction; antigen-independent tumor lysis with co-released chemokine enhancement [^vincent2023]. Represents the intersection of bacterial cancer therapy with cellular immunotherapy.

- **Chang et al. 2025 (*Cell*)** — engineered *Salmonella* exploiting IL-10R hysteresis for dual phagocytosis-evasion and exhausted-CD8+ T-cell reactivation; tumor elimination + recurrence prevention across multiple tumor types [^chang2025].

- **Galeano-Niño et al. 2022 (*Nature*)** — spatial mapping of the intratumoral microbiota reveals that bacteria occupy specific tumor compartments (intracellular, co-localizing with immune cells) and shape spatial immune heterogeneity [^galeano2022]. Provides the mechanistic rationale for why intratumoral bacteria are not passive bystanders.

- **Staedtke et al. 2024 (*Seminars in Cancer Biology*)** — comprehensive review of hypoxia-targeting bacteria in cancer therapy; covers tumor-colonization mechanisms, clinical translation challenges, and combination strategies [^staedtke2024].

## Aging-Context Relevance

Bacterial cancer therapy intersects with aging biology across several frames:

**1. Cancer as the primary age-related phenotype.** Cancer incidence rises exponentially with age; ~60% of cancer diagnoses in high-income countries occur in adults ≥65. Any cancer therapy modality is, de facto, a major aging-medicine intervention by disease burden. See [[phenotypes/cancer]].

**2. Checkpoint-refractory cold tumors in older patients.** Immune senescence and inflammaging in older adults create a distinct tumor microenvironment — reduced naive T cell output (thymic involution), exhausted effector T cell pools, reduced NK cell cytotoxicity, MDSC accumulation. Cold tumors that fail checkpoint inhibitor therapy (anti-PD-1/PD-L1/CTLA-4) may be amenable to PAMP-driven innate immune reactivation by bacterial therapy — which recruits the *innate* arm (neutrophils, NK, macrophages) that is less affected by adaptive immune senescence. This hypothesis has not been tested in aged cohorts or immunosenescent preclinical models. #gap/aging-context-untested

**3. Innate immunity and aging.** The PAMP-activation mechanism operates primarily through innate immune sensing (TLR/NLR). Innate immunity does not decline uniformly with age — inflammaging represents a hyperactivated, dysregulated baseline innate immune state. Bacterial therapy introduces a *focused* pathogen signal (within the tumor) rather than systemic inflammatory stimulation; whether the inflammaging context enhances or impairs this response is unknown. Interplay with [[chronic-inflammation]] hallmark dynamics is plausible but uncharacterized.

**4. Microbial-biodiversity-as-pharmacopoeia (comparative biology hypothesis).** The *Ewingella americana* discovery derives from the amphibian gut microbiome — a lineage that has evolved under profoundly different selective pressures than mammalian gut bacteria (different host body temperature, different immune architecture, different diet). This is a proof-of-concept for the hypothesis that non-mammalian vertebrate microbiomes harbor bacteria with anti-cancer properties selected by different evolutionary optima. This aligns with the comparative cancer-resistance biology covered in the naked mole rat and bowhead whale literature (see [[model-organisms/heterocephalus-glaber]]). The field of "evolutionary pharmacopoeia mining" from animal microbiomes is nascent. #gap/no-mechanism (why does the amphibian gut specifically select for this phenotype?)

**5. Tumor microbiome / dysbiosis hallmark.** The intratumoral microbiome — now established across seven cancer types [^nejman2020] — intersects with the [[dysbiosis]] hallmark. Age-related changes in gut microbiome composition (reduced diversity, Firmicutes/Bacteroidetes ratio shifts) may influence which bacteria colonize tumors and with what immunological consequence. See [[gut-microbiome-aging-shifts]].

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | Partial — tumor colonization + PAMP-immune activation is mechanistically plausible; not demonstrated for *E. americana* in human tumor models |
| Phenotype (antitumor effect) conserved in humans? | Unknown for naturally-occurring class; limited evidence for engineered platforms (safety established, efficacy marginal) |
| Replicated in humans? | No (for *E. americana*); limited-efficacy Phase 1/2 data for engineered platforms |

## Safety and Translation Considerations

**Bacterial viability risks:** Live bacteria inherently risk bacteremia, septic shock, and cytokine release syndrome if tumor colonization is imperfect. VNP20009 Phase I demonstrated dose-limiting bacteremia at higher doses [^toso2002]. *E. americana* showed rapid blood clearance in the murine model, but tolerability in immunocompromised cancer patients (the likely target population) has not been tested.

**Antibiotic susceptibility as rescue:** All clinical bacterial platforms retain antibiotic susceptibility — this is the critical safety feature. Standard-of-care antibiotics (fluoroquinolones, third-generation cephalosporins) can terminate bacterial therapy if adverse events occur. *E. americana* retains susceptibility to multiple antibiotic classes [^iwata2025].

**Engineered-bacteria reversion:** Genetically modified bacteria can revert to virulence through spontaneous mutation. Multiple attenuations (VNP20009: ΔpurI/ΔmsbB) reduce this risk but do not eliminate it.

**Regulatory frameworks:** The FDA's live biotherapeutic product (LBP) framework provides a precedent pathway for naturally-occurring organisms. Engineered bacteria require Recombinant DNA Advisory Committee review. The Iwata 2025 paper specifically highlights the regulatory advantage of naturally-occurring (non-GMO) bacteria [^iwata2025].

**Tumor-type specificity:** Iwata 2025 uses the Colon-26 subcutaneous model — a syngeneic colon carcinoma. Efficacy across other cancer types (lung, breast, pancreatic, glioblastoma, melanoma), metastatic disease, and orthotopic implantation sites is unknown. #gap/needs-replication

**Combination therapy interactions:** Checkpoint inhibitors + bacterial therapy may be synergistic (bacterial PAMP activation hot-tumors up, checkpoint block preserves T-cell activity). Low-dose chemotherapy may reduce immunosuppressive regulatory T cells without ablating the bacterial-activated immune response. Neither combination has been tested clinically for this class.

## Open Questions and Gaps

- **Human dosing and pharmacokinetics** for naturally-occurring bacteria: colonization efficiency, bacterial clearance kinetics in humans, and biodistribution are entirely unknown for *E. americana* #gap/needs-human-replication
- **Orthotopic and metastatic tumor models:** subcutaneous Colon-26 is not representative of GI tumor architecture, peritoneal metastases, or liver metastases — the most clinically relevant sites for colorectal cancer #gap/needs-replication
- **Mechanism of cytolysin production:** *E. americana*'s cytolytic proteins are not characterized at the molecular level; genome sequence annotation and toxin identification are pending #gap/no-mechanism
- **Aging-cohort efficacy:** no preclinical study has tested bacterial cancer therapy in aged (18–24 month) vs. young mice, controlling for immune-senescence context #gap/aging-context-untested
- **Oral delivery feasibility:** IV is the established route; oral administration of tumor-targeting bacteria that survive gastric transit and reach tumor sites is unexplored for this class #gap/no-mechanism
- **Biomarkers for patient selection:** which patients have tumors permissive to bacterial colonization? FMISO-PET for hypoxia imaging is the most plausible patient-stratification tool; tumor-specific immune exclusion phenotypes may also predict response
- **Checkpoint inhibitor combination dose-optimization:** low-dose vs. standard-dose anti-PD-L1 combined with bacterial therapy has not been titrated in any model system #gap/dose-response-unclear
- **Whether checkpoint-inhibitors page should exist:** [[interventions/pharmacological/checkpoint-inhibitors]] is not yet seeded in this wiki. #stub-needed

## Cross-References

- [[studies/iwata-2025-ewingella-americana-antitumor]] — primary source for *E. americana* 100% CR data; Colon-26 model; anti-PD-L1 head-to-head
- [[microbiome/ewingella-americana]] — atomic microbe page for *Ewingella americana*
- [[phenotypes/cancer]] — primary phenotype page; cancer as age-related disease burden
- [[hallmarks/dysbiosis]] — hallmark page; gut/tumor microbiome interplay
- [[gut-microbiome-aging-shifts]] — process page; age-related microbiome changes
- [[hallmarks/chronic-inflammation]] — hallmark page; PAMP-driven immune activation and inflammaging interface
- [[hallmarks/disabled-adaptive-immunity]] — hallmark page; immunosenescence context for checkpoint-refractory tumors in older patients
- [[model-organisms/heterocephalus-glaber]] — cancer resistance comparative biology; parallel to amphibian-microbiome pharmacopoeia hypothesis
- [[interventions/pharmacological/checkpoint-inhibitors]] — #stub-needed; synergistic combination partner
- [[frameworks/intervention-classes]] — mechanism class entries: `tumor-selective-colonization`, `pamp-mediated-immune-activation`, `direct-cytotoxicity` (added 2026-05-21)

## Footnotes

[^iwata2025]: [[studies/iwata-2025-ewingella-americana-antitumor]] · doi:10.1080/19490976.2025.2599562 · in-vivo · n=5/group (treatment groups) · BALB/c mice; Colon-26 subcutaneous syngeneic colorectal carcinoma model · single IV dose 1×10⁹ CFU *E. americana* → 100% CR (5/5); anti-PD-L1 1/5 CR; liposomal doxorubicin 0/5 CR; immunological memory confirmed by rechallenge >60 days · *Gut Microbes* 2025 · Iwata T et al. (Miyako laboratory, JAIST) · archive: gold OA PMC12710904

[^toso2002]: doi:10.1200/JCO.2002.20.1.142 · phase-1 · n=25 (24 melanoma, 1 RCC) · IV attenuated *Salmonella typhimurium* VNP20009 (ΔpurI/ΔmsbB) · MTD 3×10⁸ cfu/m²; dose-limiting thrombocytopenia + bacteremia; tumor colonization confirmed at autopsy but sparse; no objective tumor regression · *Journal of Clinical Oncology* 2002 · Toso JF et al. (Rosenberg SA senior author, NCI) · archive: not_oa

[^nejman2020]: doi:10.1126/science.aay9189 · observational · n=1,526 tumors across 7 cancer types · intracellular bacteria identified in cancer + immune cells across tumor types; each tumor type has distinct bacterial composition; breast cancer richest; bacterial presence correlates with tumor subtypes + immunotherapy response · *Science* 2020 · Nejman D et al. (Straussman R corresponding) · archive: OA (hdl.handle.net/11585/780581); download pending

[^galeano2022]: doi:10.1038/s41586-022-05435-0 · observational · spatial single-cell multi-omic · intratumoral bacteria occupy specific spatial compartments co-localizing with immune cells; bacteria shape tumor spatial immune heterogeneity · *Nature* 2022 · Galeano Niño JL et al. (Bullman S senior author, Fred Hutch) · archive: downloaded (local PDF available)

[^staedtke2024]: doi:10.1016/j.semcancer.2024.03.003 · review · hypoxia-targeting bacterial colonization mechanisms + clinical-translation challenges for cancer therapy · *Seminars in Cancer Biology* 2024 · Staedtke V et al. · archive: downloaded (local PDF available)

[^kwon2024]: doi:10.1038/s41571-024-00908-9 · review · comprehensive overview of engineered bacteria for cancer immunotherapy; covers preclinical + clinical progress across Salmonella, Listeria, E. coli Nissle platforms · *Nature Reviews Clinical Oncology* 2024 · Kwon SY et al. · archive: not_oa

[^redenti2024]: doi:10.1038/s41586-024-08033-4 · in-vivo · *E. coli* Nissle 1917 engineered as tumor-targeting neoepitope delivery vector; CD4+ + CD8+ T cell activation; solid tumor control/elimination in preclinical models · *Nature* 2024 · Redenti A et al. · archive: downloaded (local PDF available)

[^vincent2023]: doi:10.1126/science.add7034 · in-vivo · probiotic-guided CAR-T cells (ProCARs); tumor-colonizing bacteria release synthetic antigens → CAR-mediated tumor destruction; antigen-independent; chemokine co-release enhancement · *Science* 2023 · Vincent RL et al. · archive: download pending

[^bender2023]: doi:10.1016/j.cell.2023.03.011 · in-vivo · *Lactobacillus reuteri* colonizes melanomas → indole-3-aldehyde (tryptophan metabolite) → AhR signaling in CD8+ T cells → IFN-γ upregulation → synergy with checkpoint immunotherapy · *Cell* 2023 · Bender MJ et al. · archive: downloaded (local PDF available)

[^chang2025]: doi:10.1016/j.cell.2025.02.002 · in-vivo · engineered *Salmonella* with IL-10R hysteresis mechanism; dual phagocytosis evasion + tumor-resident exhausted CD8+ T cell reactivation; tumor elimination + recurrence prevention across multiple tumor types · *Cell* 2025 · Chang Z et al. · archive: not_oa

[^fares2019]: doi:10.1007/s15010-018-1249-7 · case-report · single patient; vaccine-strain *L. monocytogenes* bacteremia 31 months post-immunization with axalimogene filolisbac (ADXS-HPV) for cervical cancer · *Infection* 2019 · Fares E et al. · archive: not in archive — case report, skip for primary efficacy claims
