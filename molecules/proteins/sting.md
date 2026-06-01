---
type: protein
aliases: [TMEM173, MITA, ERIS, STING1, stimulator of interferon genes]
uniprot: Q86WV6
ncbi-gene: 340061
hgnc: 27962
ensembl: ENSG00000184584
genage-id: null
pathways: ["[[cgas-sting]]", "[[nf-kb]]", "[[jak-stat-pathway]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: "#gap/not-queried — GTEx v2 STING1 age-correlation not pulled; query per sops/finding-tissue-expression.md on next lint pass"
mr-causal-evidence: not-tested
caused-by: ["[[cgas]]", "bacterial cyclic dinucleotides (c-di-GMP, c-di-AMP)", "[[mitochondrial-dysfunction]] (mtDNA leak)", "[[cellular-senescence]] (cytosolic chromatin fragments)"]
causes: ["type-I IFN response (IRF3 arm)", "[[nf-kb]] activation", "SASP component induction", "lysosomal cell death (high-dose agonism)"]
verified: false
verified-date: null
verified-by: null
verified-scope: null
literature-checked-through: 2026-05-12
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 — synthesized from canonical UniProt/NCBI metadata and widely-cited primary literature summaries; specific quantitative claims (cGAMP binding affinity, IFN-induction kinetics, in-vivo lifespan effects of Sting−/−) not directly verified against primary PDFs. Verify before relying on quantitative claims.

# STING (STING1 / TMEM173)

**STING** (Stimulator of Interferon Genes; gene symbol **STING1**, formerly *TMEM173*) is an endoplasmic reticulum (ER)-resident transmembrane adaptor protein that functions as the central hub of the cytosolic DNA-sensing innate immune pathway. It receives the second-messenger **2'3'-cGAMP** produced by [[cgas]] in response to cytoplasmic double-stranded DNA, then relocalizes through the ERGIC and Golgi to activate **[[tbk1]]**, driving **IRF3-dependent type I interferon** production and **[[nf-kb]]-dependent pro-inflammatory cytokines**. In aging biology, STING is the effector arm through which DNA damage, mitochondrial stress, and senescent-cell chromatin fragments drive [[chronic-inflammation|inflammaging]] and amplify the senescent cell [[sasp|SASP]].

## Identity

- **UniProt:** Q86WV6 (STING_HUMAN) — Swiss-Prot manually curated entry
- **NCBI Gene:** 340061 (confirmed; STING1 official symbol)
- **HGNC:** 27962 — #gap/needs-canonical-id (provided in seeder brief; not independently re-verified against HGNC at time of seeding)
- **Ensembl:** ENSG00000184584 — #gap/needs-canonical-id (not independently re-verified)
- **Gene locus:** 5q31.2
- **Protein length:** 379 amino acids
- **Mouse ortholog:** Sting1 (Tmem173); high functional conservation; Sting−/− mouse viable and the primary preclinical tool for the cGAS-STING-aging axis

**Naming history.** Published under at least four early names: TMEM173 (transmembrane protein 173), MITA (mediator of IRF3 activation), ERIS (endoplasmic reticulum IFN stimulator), and MPYS (initially used by a separate group). HGNC standardized on STING1 as the official symbol.

## Protein structure

STING is a **four-pass transmembrane protein** anchored in the ER membrane with a cytosolic C-terminal effector domain. Key structural regions:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Transmembrane helices (TM1–4) | ~1–150 | ER membrane anchoring; dimerization interface |
| Cyclic-dinucleotide-binding domain (CBD) | ~153–340 | cGAMP / bacterial CDN binding; V-shaped homodimer |
| C-terminal tail (CTT) | ~340–379 | Contains the **pLxIS motif** — TBK1 phosphorylation site and IRF3 docking platform |

Key PTMs (from UniProt Q86WV6):
- **Ubiquitination:** K150 (K63- and K48-linked chains; regulates activity and degradation)
- **Palmitoylation:** C88, C91 (required for Golgi tethering and TBK1 signalosome assembly — see Activation cycle below)
- **Phosphorylation:** S366 (human; S365 in mouse) by TBK1 — creates the IRF3 docking site in the pLxIS motif
- **SUMOylation:** K338 (regulatory; magnitude of effect unclear) #gap/needs-replication

STING forms a **constitutive homodimer** at the ER. cGAMP binding causes further conformational change that promotes higher-order oligomerization and enables downstream signaling.

## Activation cycle: cGAMP binding → ER-Golgi trafficking → TBK1 → IRF3/NF-κB

STING activation follows a defined intracellular itinerary:

**Step 1 — cGAMP binding.** Cytosolic 2'3'-cGAMP (synthesized by [[cgas]] upon dsDNA sensing) diffuses to the ER membrane and binds the STING CBD. Bacterial cyclic dinucleotides (c-di-GMP, c-di-AMP) bind the same site but with lower affinity than the mammalian 2'3'-linked cGAMP. CDN binding stabilizes the STING dimer and closes the CBD "lid" conformation.

**Step 2 — ER export and ERGIC translocation.** Activated STING dissociates from ER-retention factors and traffics into the **ER-Golgi intermediate compartment (ERGIC)**. This step requires STING palmitoylation at C88/C91 — palmitoyl transferase ZDHHC3 and related enzymes attach palmitate, which promotes membrane curvature change and ERGIC tethering. #gap/unsourced — the precise palmitoyl transferase(s) responsible in human cells and the structural basis of this step are established in post-2018 structural/cell biology work not yet fully cited on this page; see parallel gap note on [[cgas-sting]] pathway page.

**Step 3 — TBK1 recruitment and phosphorylation.** At the ERGIC, **[[tbk1]]** is recruited to the STING signaling complex. TBK1 phosphorylates STING at **S366 (human; S365 in mouse)** within the pLxIS motif of the CTT. Phospho-S366 creates a docking site for **[[irf3]]**, which is then itself phosphorylated by TBK1 at S396 (human). Phospho-IRF3 dimerizes and translocates to the nucleus to transcribe *IFNB1* and interferon-stimulated genes. Simultaneously, TBK1 promotes **[[nf-kb]]** activation (via IκB kinase complex cross-activation), driving a second transcriptional wave of pro-inflammatory cytokines (IL-6, TNF-α, IL-1β, CXCL10).

**Step 4 — Lysosomal degradation and signaling termination.** After passing through the Golgi, STING is trafficked to lysosomes for degradation — the principal mechanism of signal termination. Lysosomal targeting requires de-palmitoylation cycling; pharmacological blockade of lysosomal degradation prolongs STING signaling. At very high agonist concentrations, STING-mediated lysosomal membrane permeabilization can trigger **lysosomal cell death** (distinct from apoptosis) via cathepsin release — a mechanism relevant to how strong STING agonism kills cells. #gap/needs-replication — the lysosomal-cell-death arm of STING is less well characterized than the IFN/NF-κB arms; most aging-context data pertain to the IFN/SASP outputs.

**Two signaling outputs:**

| Arm | TF | Key cytokines | Aging relevance |
|---|---|---|---|
| IRF3 | IRF3 → IFN-β, ISGs | IFN-β, IFN-α, CXCL10 | Chronically elevated IFN-I with age; interferon signature in aged blood |
| NF-κB | NF-κB p65/p50 | IL-6, TNF-α, IL-1β | Core SASP factors; overlaps with NLRP3 arm |

## In aging

### STING as inflammaging driver

Chronic, low-level STING activation is now recognized as a mechanistic pillar of **[[chronic-inflammation|inflammaging]]** — the sterile, low-grade systemic inflammation that accumulates with age. Three principal sources of STING-activating ligand accumulate with aging:

1. **mtDNA leak** — Damaged mitochondria, especially those undergoing stress-induced outer membrane permeabilization without full apoptotic commitment, release mitochondrial DNA (circular dsDNA with bacterial-type CpG features) into the cytoplasm. cGAS detects this mtDNA and synthesizes cGAMP, activating STING. Mechanistic link between [[mitochondrial-dysfunction]] hallmark and innate immune activation.

2. **Cytosolic chromatin fragments (CCFs)** — Senescent cells accumulate cytoplasmic chromatin fragments arising from micronuclei rupture and nuclear envelope breakdown (driven by lamin B1 loss). Glück et al. 2017 showed that CCFs in senescent cells activate cGAS-STING → SASP cytokines (IL-6, TNF-α, CXCL10) and type I IFNs in a cGAS/STING-dependent manner across multiple senescence triggers (irradiation, oxidative stress, HRasV12, CDK4 inhibition) [^gluck2017]. Dou et al. 2017 demonstrated the same in a complementary set of human senescent cells (IMR90) and showed that STING-dependent cytoplasmic chromatin drives the inflammatory branch of senescence [^dou2017].

3. **LINE-1 / retrotransposon cDNA** — Retrotransposons reactivated by age-related epigenetic derepression ([[epigenetic-alterations]] hallmark) reverse-transcribe their RNA into cytosolic cDNA, which activates cGAS-STING. #gap/needs-replication — human aging data on LINE-1-driven STING activation are preliminary.

### STING drives a SASP subset

STING does not drive the entire SASP — senescence-associated secretory phenotype has multiple parallel input arms (p38-MAPK, NF-κB activated by genomic damage, NLRP3 inflammasome). The cGAS-STING arm specifically drives the **interferon-stimulated gene (ISG) component** of SASP and amplifies NF-κB-dependent cytokines. This creates a feed-forward loop: DNA damage → senescence → CCF leakage → cGAS-STING → SASP → paracrine senescence in neighboring cells.

A 2024 study implicated **TXNRD1** (thioredoxin reductase 1) as an upstream driver of innate immune signaling in senescent cells with implications for age-associated inflammation, acting in concert with the cGAS-STING axis [^hao2024].

### Sting−/− reduces age-related inflammation and neurodegeneration in mice

The most direct aging evidence comes from Gulen et al. 2023 (*Nature*; 751 citations as of 2026): genetically aged mice (naturally aged and ERCC1-deficient progeroid model) showed that **cGAS-STING drives age-related inflammation and neurodegeneration**, and that Sting−/− or STING inhibitor treatment (H-151) reduced microglial activation, neuroinflammation markers, and cognitive decline phenotypes in the ERCC1 model [^gulen2023]. This is the strongest in vivo evidence that STING is causally upstream of aged-brain inflammaging, not merely a bystander marker. #gap/needs-human-replication — this data is from mouse models; human genetic evidence for STING in neurodegeneration / inflammaging is not yet established via Mendelian randomization.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | STING1 is functional in human cells; high structural conservation with mouse STING |
| Aging activation in humans? | partial | Elevated IFN-I signatures in aged blood (IFN-I inflammaging); STING protein activation in aged human tissue not yet directly demonstrated |
| Causal in human inflammaging? | not-tested | Gulen 2023 is mouse-only; no human MR or interventional data |

### The Chen 2025 NMR cGAS context: STING-independence of the HR-repair arm

An important conceptual clarification for this page. Chen et al. 2025 (*Science*, doi:10.1126/science.adp5056) demonstrated that **naked mole rat (NMR) cGAS** has evolved 4 amino acid substitutions that redirect cGAS from the cytosolic-immune arm to a nuclear **homologous recombination (HR) DNA repair** function [^chen2025]. Specifically, these changes affect chromatin retention and HR activity, NOT cGAMP synthesis.

**The NMR-cGAS HR-repair arm does NOT involve STING.** The 4-AA changes in NMR cGAS specifically affect DNA-repair scaffolding in the nucleus; STING remains restricted to the cytosolic-immune arm (cGAMP → STING at the ER → TBK1 → IRF3/NF-κB). This means:
- STING biology (this page) is fully relevant to human cGAS-STING-inflammaging
- The NMR HR-repair arm is a derived, STING-independent function that explains part of NMR's exceptional longevity
- Human cGAS does not appear to have this nuclear-HR function; the evolutionary divergence is NMR-specific
- See [[cgas]] (planned page) and [[model-organisms/heterocephalus-glaber]] for the full NMR-cGAS context

## As a drug target

STING is under active pharmacological development in **two opposing directions**:

### STING agonists (cancer immunotherapy; oncology-context tier 1)

Activating STING in the tumor microenvironment (TME) boosts innate immune killing of tumor cells. Agonists in clinical development include:

| Compound | Mechanism | Status |
|---|---|---|
| ADU-S100 (MIW815) | Cyclic dinucleotide CDN-based agonist | Phase 1/2 (intratumoral) |
| diABZI compound 3 | Non-nucleotide, systemic STING agonist | Preclinical → Phase 1 |
| MSA-2 | Non-nucleotide agonist | Preclinical |

These compounds activate STING in tumor-infiltrating immune cells to drive anti-tumor type I IFN. They are **not aging-context interventions** per se, but they have generated important mechanistic data on STING biology in vivo. Systemic STING activation also has risks: overactivation can drive a cytokine storm and paradoxically promote tumor progression in some contexts.

### STING antagonists / inhibitors (autoimmune, neurodegeneration, aging-context)

Blocking chronic STING activation is the aging-relevant therapeutic direction. Key tool compounds:

| Compound | Mechanism | Status |
|---|---|---|
| **H-151** | Covalent palmitoylation blocker; prevents STING-Golgi tethering | Preclinical tool compound; used in Gulen 2023 aged-mouse experiments [^gulen2023] |
| **C-178** | Covalent nitrofuran-based STING inhibitor | Preclinical |
| **SN-011** | Non-covalent STING antagonist | Preclinical |

H-151 and related covalent inhibitors exploit the palmitoylation requirement for STING trafficking — by blocking C88/C91 palmitoylation, they trap STING at the ER and prevent TBK1 recruitment. Neither H-151 nor any STING antagonist has entered clinical trials for an aging or inflammaging indication as of 2026. There is a class-page candidate: `[[interventions/pharmacological/sting-inhibitors]]` (not yet seeded).

For SAVI (STING-associated vasculopathy with onset in infancy) — a Mendelian disease caused by gain-of-function STING mutations — clinical trials of JAK inhibitors (baricitinib, ruxolitinib) downstream of STING are active. These do not target STING directly but suppress its output and provide proof-of-concept that downstream IFN signaling is tractable in humans.

**Druggability-tier reasoning.** STING is tier 1 in the oncology context (multiple clinical-stage agonists). In the **aging context**, STING rates **tier 2**: no FDA-approved drug and no Phase 3 compound targets STING for an aging-related indication; H-151 is a preclinical tool compound only. The tier-2 rating reflects that STING antagonism has demonstrated in vivo efficacy in a mouse aging model (Gulen 2023), making it a strong validated target, but no aging-indication clinical probe has yet advanced.

## Relationship to SAVI (gain-of-function disease)

Gain-of-function STING mutations (V147L, N154S, V155M, G166E) cause **SAVI** — a severe pediatric autoinflammatory disease with interstitial lung disease, vasculitis, and a prominent type I IFN signature. SAVI mutations mimic constitutive STING activation, phenocopying what chronic low-level STING activation does in aging — but at far higher intensity and early onset. SAVI is thus a useful monogenic model for STING-driven pathology, even though aging-associated STING activation is quantitatively much lower.

## Key interactors (non-exhaustive)

- **[[cgas]]** — upstream synthesizer of 2'3'-cGAMP; the immediate STING activator in the DNA-sensing cascade
- **[[tbk1]]** — recruited to the STING-ERGIC signalosome; the primary kinase that phosphorylates STING S366 and IRF3 S396
- **[[irf3]]** — IRF3 arm: docks to phospho-STING, is phosphorylated, dimerizes, drives IFN-β/ISG transcription
- **[[nf-kb]]** — NF-κB arm: TBK1 → IKKε → IκB degradation → p65/p50 nuclear translocation
- **[[jak-stat-pathway]]** — secondary: secreted IFN-β signals back via IFNAR → JAK1/TYK2 → STAT1/STAT2 → ISG amplification loop

## Knowledge gaps and limitations

- **STING Golgi-trafficking mechanism (palmitoylation / ERGIC details):** The precise palmitoyl transferase responsible for C88/C91 modification, the structural basis of ERGIC tethering, and TBK1 recruitment geometry are established in post-2018 structural papers (several 2019 Cell/Nature reports) but not yet fully cited on this page with verified DOIs. The pathway page [[cgas-sting]] carries the same gap flag. #gap/unsourced
- **GTEx aging correlation not queried:** `gtex-aging-correlation:` field is unpopulated. STING1 tissue-age expression profile (Spearman ρ across GTEx tissues with age) not yet pulled. #gap/not-queried
- **MR evidence absent:** No Mendelian randomization study has used STING1 germline variants as instruments to test causality for inflammaging, Alzheimer's, or related outcomes. GWAS hits for STING1 in inflammatory phenotypes exist (SAVI variants), but these are rare disease-causing mutations, not common-variant instruments. `mr-causal-evidence: not-tested`. #gap/not-queried
- **HGNC / Ensembl IDs not independently verified:** 27962 and ENSG00000184584 provided in seeder brief; recommend cross-check on next lint pass. #gap/needs-canonical-id
- **Lysosomal cell death arm:** The STING → lysosomal membrane permeabilization → cell death arm is less well characterized than the IFN/NF-κB arms. Whether this contributes to age-related cell death in vivo is not established. #gap/needs-replication
- **Human in vivo aging data:** Nearly all STING-aging evidence is from cell lines or mouse models. Direct STING protein activation in human aged tissues at the protein level remains to be demonstrated. #gap/needs-human-replication
- **No aging-indication clinical probe:** No STING agonist or antagonist has been tested in a human aging trial as of 2026. H-151 is preclinical only. #gap/long-term-unknown
- **cGAS vs STING contribution split in SASP:** cGAS-null and STING-null cells have different SASP profiles (STING-null may retain some cGAS-independent SASP); the fractional contribution of the cGAS → STING arm vs parallel NF-κB arms to total SASP has not been precisely quantified in human senescent cells. #gap/needs-replication

## Footnotes

[^ishikawa2008]: doi:10.1038/nature07317 · in-vitro + in-vivo · STING identified as ER adaptor required for IFN-I response to cytosolic DNA; Sting−/− mice susceptible to VSV-GFP/HSV-1; ER-membrane topology defined · model: Sting−/− C57BL/6 MEFs + macrophages · archive: downloaded · Ishikawa H, Barber GN · Nature 2008

[^gluck2017]: doi:10.1038/ncb3586 · in-vitro + in-vivo · CCFs from lamin B1 loss in senescent cells activate cGAS → STING → SASP (IL-6, TNF-α, CXCL10) and type I IFNs; cGAS/STING KO blunts SASP; triggers: 40% O₂, 12 Gy irradiation, HRasV12, palbociclib; in vivo mouse irradiation + NrasG12V liver model · n=biological replicates (n reported per figure; no single n for the paper) · model: cGAS KO MEFs (C57BL/6) + WI-38 human lung fibroblasts · archive: downloaded (OA green;  (local PDF)) · Glück S et al. · Nat Cell Biol 2017

[^dou2017]: doi:10.1038/nature24050 · in-vitro + in-vivo · cytoplasmic chromatin in senescent cells activates cGAS-STING → inflammatory cytokines; STING-dependent inflammatory senescence phenotype in human IMR90 fibroblasts and mouse liver; companion paper to Glück 2017 · model: IMR90 human fibroblasts + mouse hepatocytes · archive: pending (green OA; 1204 citations) · Dou Z, Berger SL et al. · Nature 2017

[^yang2017]: doi:10.1073/pnas.1705499114 · in-vitro · cGAS required for senescence-associated gene expression (IL6, IL8, IL1β, MMP12) and SA-β-Gal; senescence by etoposide, irradiation (3 Gy), spontaneous immortalization; no aged-tissue experiments; low cGAS correlates with poor lung adenocarcinoma survival (log-rank p=5e-05, HR=1.82) · model: cGas−/− MEFs (C57BL/6) + cGas−/− BJ human fibroblasts (TALEN) · archive: downloaded · Yang H et al. · PNAS 2017

[^gulen2023]: doi:10.1038/s41586-023-06373-1 · in-vivo + ex-vivo · cGAS-STING drives age-related inflammation and neurodegeneration in naturally aged mice and ERCC1-deficient progeroid mice; STING inhibitor H-151 reduced microglial activation, neuroinflammation, and cognitive decline phenotypes; causal role of STING in aged-brain inflammatory milieu established · model: naturally aged mice (C57BL/6) + ERCC1Δ/− progeroid mice · archive: pending (hybrid OA; 751 citations; #gap/no-fulltext-access) · Gulen MF, Ablasser A et al. · Nature 2023 · **Not yet verified against primary PDF**

[^hao2024]: doi:10.1038/s43587-023-00564-1 · in-vitro + in-vivo · TXNRD1 (thioredoxin reductase 1) drives the innate immune response in senescent cells; TXNRD1 acts upstream of cGAS-STING-dependent IFN production; implications for age-associated inflammation in senescent cells · model: multiple human cell lines + mouse models · archive: pending (green OA; 25 citations) · Hao X, Towers M et al. · Nature Aging 2024 · **Not yet verified against primary PDF**

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · Science 2025 · doi:10.1126/science.adp5056 · NMR cGAS has 4-AA changes redirecting it to nuclear HR repair (not cGAMP synthesis); this arm is STING-independent; the 4-AA changes affect chromatin retention and HR, not cGAMP production · **#gap/no-fulltext-access**

[^schmitz2023]: doi:10.3389/fimmu.2023.1132653 · review · cGAS-STING pathway as potential trigger of immunosenescence and inflammaging; comprehensive mechanistic review of STING in aging immune function · archive: pending (gold OA; 60 citations) · Schmitz CRR, Bauer ME, Barbé-Tuana FM et al. · Front Immunol 2023
