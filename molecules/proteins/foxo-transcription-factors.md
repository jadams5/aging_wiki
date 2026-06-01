---
type: protein
aliases: [FOXO family, forkhead box O, FoxO proteins, FKHR/FKHRL1/AFX, FOXO1/3/4/6]
uniprot: null
ncbi-gene: null
hgnc: null
complex-subunits: [Q12778, O43524, P98177, A8MYZ6]
ensembl: ENSG00000118689  # primary paralog FOXO3 (longevity GWAS); family-level druggability is composite — see paralog pages
druggability-tier: 3  # composite — paralogs span tier 3 (FOXO1/3) to tier 4 (FOXO4); using FOXO3 (longevity-relevant primary)
caused-by: []
causes: []
pathways: ["[[insulin-igf1]]", "[[pi3k-akt-pathway]]", "[[autophagy]]", "[[ampk]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[disabled-macroautophagy]]", "[[cellular-senescence]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Paik 2007, Tothova 2007, Baar 2017 verified against primary source PDFs (downloaded and read in full). Brunet 1999 (14-3-3 phosphosite logic), Hosaka 2004 (single KO phenotypes), Willcox 2008 (GWAS OR), Dijkers 2000 (BIM), Kops 2002 (MnSOD) re-confirmed against previously-verified local PDFs. Calnan 2008 (review, closed-access) not verified — #gap/no-fulltext-access noted in footnote. Canonical-database identity fields (PubChem, UniProt for individual paralogs) not re-checked here — on individual paralog pages."
---

# FOXO Transcription Factors (Family Overview)

The FOXO proteins (Forkhead Box class O) are a subfamily of winged-helix transcription factors that serve as the primary nuclear effectors of [[insulin-igf1|insulin/IGF-1 signaling]] in metazoans. A single ancestral FOXO gene in invertebrates ([[daf-16]] in *C. elegans*, *dFOXO* in *Drosophila*) expanded by gene duplication into four mammalian paralogs: **FOXO1**, **FOXO3**, **FOXO4**, and **FOXO6**. All share a conserved forkhead DNA-binding domain and AKT-dependent nuclear-cytoplasmic shuttling. Together they couple the nutritional and growth-factor environment to transcriptional programs governing stress resistance, cell-cycle arrest, apoptosis, autophagy, and longevity. FOXO3 carries the strongest replicated human longevity GWAS signal of any gene; FOXO4 is a therapeutic target of the senolytic peptide FOXO4-DRI.

## Member table

| Paralog | Old name(s) | UniProt | NCBI Gene | Length (aa) | Primary expression | KO phenotype | Aging relevance |
|---|---|---|---|---|---|---|---|
| **[[foxo1\|FOXO1]]** | FKHR, FOXO1A | Q12778 | 2308 | 655 | Ubiquitous; high in liver, adipose, β-cells | Embryonic lethal E10.5 (angiogenesis defect) [^hosaka2004] | Metabolic regulator; hepatic gluconeogenesis; no longevity GWAS signal |
| **[[foxo3\|FOXO3]]** | FKHRL1, FOXO3A, AF6q21 | O43524 | 2309 | 673 | Ubiquitous; high in brain, heart, HSCs | Foxo3-/- females: premature ovarian failure [^hosaka2004] | Strongest human longevity GWAS (rs2802292); antioxidant, autophagy |
| **[[foxo4\|FOXO4]]** | AFX, AFX1, MLF2 | P98177 | 4303 | 505 | Ubiquitous | Grossly normal [^hosaka2004] | FOXO4-p53 axis in senescent cells; FOXO4-DRI senolytic peptide [^baar2017] |
| **[[foxo6\|FOXO6]]** | — | A8MYZ6 | 139628 | 655 | Brain-restricted (striatum, hippocampus) | #gap/unsourced — KO phenotype not well characterized | Memory consolidation; minimal aging literature #gap/needs-replication |

**Note on UniProt IDs:** These are reviewed Swiss-Prot entries. FOXO6 A8MYZ6 has been flagged as potentially less well-curated than the other three; verify on next lint pass. #gap/needs-canonical-id

## Evolutionary origin

Metazoans have a single ancestral FOXO gene. [[daf-16]] in *C. elegans* (UniProt O16850; 541 aa) and *dFOXO* in *Drosophila melanogaster* are direct orthologs [^kenyon2010]. Vertebrate genome duplication gave rise to four mammalian paralogs. *C. elegans* daf-16 is most functionally similar to FOXO3 in the context of longevity regulation, though it encodes functions shared across the entire mammalian subfamily.

Yeast have no FOXO ortholog. The winged-helix/forkhead fold is ancient, but the FOXO-specific regulation by AKT phosphorylation and 14-3-3 cytoplasmic sequestration is a metazoan innovation coinciding with the evolution of the insulin/IGF signaling axis. #gap/unsourced (the specific phylogenetic branching point for FOXO's AKT-regulatory logic has not been cited here; Calnan & Brunet 2008 review covers this)

| Dimension | Status |
|---|---|
| Pathway (IIS-AKT-FOXO) conserved in humans? | yes |
| Invertebrate→mammalian phenotype magnitude conserved? | partial — *daf-2* LoF doubles *C. elegans* lifespan; mammalian equivalents yield 15–40% extension at most |
| Human longevity genetics? | yes — FOXO3 rs2802292 G allele replicated in 5+ cohorts [^willcox2008] |

## Shared domain architecture

All four mammalian FOXOs share the same fundamental domain layout [^brunet1999][^calnan2008]:

```
N-term ←——————————————————————————→ C-term
  [AKT site 1]  [Forkhead DBD]  [NLS] [NES] [TAD]  [AKT site 3]
        ↑               ↑                               ↑
   14-3-3 dock    FHRE binding                   Nuclear export
   (+ site 2      (TTGTTTAC)                     (NOT 14-3-3)
    in DBD)
```

### Forkhead DNA-binding domain

The defining feature of all FOXOs: a winged-helix ("forkhead") structure that recognizes the **Forkhead Response Element (FHRE)** consensus **5'-TTGTTTAC-3'** (also written [AG]TAAA[TC]A on the antisense strand). The domain spans approximately residues 157–251 in FOXO3 and 159–235 in FOXO1; exact boundaries differ by paralog. #gap/unsourced — precise FHRE consensus definition should be cross-checked against ChIP-seq studies rather than relying on early biochemical data alone.

### AKT phosphorylation sites — conserved across all four paralogs

Three serine/threonine AKT phosphorylation sites are conserved across FOXO1/3/4 (FOXO6 lacks a canonical nuclear export sequence but retains some sites):

| Site function | FOXO1 | FOXO3 | FOXO4 | Consequence |
|---|---|---|---|---|
| 14-3-3 docking site 1 | Thr24 | Thr32 | Thr28 | Cytoplasmic retention |
| 14-3-3 docking site 2 (in/near DBD) | Ser256 | Ser253 | Ser193 | Cytoplasmic retention; disrupts NLS |
| Nuclear export site | Ser319 | Ser315 | Ser258 | CRM1-dependent nuclear export; **NOT a 14-3-3 docking site** |

**Critical mechanistic detail (Brunet 1999):** For FOXO3 (characterized as FKHRL1 in the original paper), 14-3-3 binding requires **both** Thr32 AND Ser253 to be phosphorylated — the T32A+S253A double mutant abolishes 14-3-3 binding entirely, while the S315A single mutant has no effect on 14-3-3 binding [^brunet1999]. Ser315 drives a distinct CRM1-dependent nuclear export mechanism independent of 14-3-3. This same logic applies to FOXO1 (Thr24+Ser256 = 14-3-3 docks; Ser319 = CRM1 export) [^brunet1999][^nakae1999]. The Ser315/Ser319 sites drive nuclear export but do NOT contribute to cytoplasmic anchoring via 14-3-3.

## Shared regulation

### AKT — the canonical inhibitory arm

Under growth-factor/insulin stimulation, [[pi3k-akt-pathway|PI3K→AKT]] phosphorylates all three conserved sites on FOXOs. The outcome: 14-3-3 proteins dock on phospho-Thr/Ser and sequester the FOXO in the cytoplasm; additionally CRM1-mediated nuclear export is enhanced. Net result: FOXO transcriptionally silent. Reversal (dephosphorylation by [[pp2a]], PTEN re-expression, or PI3K inhibition) allows nuclear re-import [^brunet1999]. This regulation was first demonstrated for FOXO3 (FKHRL1) in Brunet et al. 1999 [^brunet1999] and for FOXO1 (FKHR) in Nakae et al. 1999 [^nakae1999].

### SIRT1 deacetylation — activating under fasting/CR

[[sirt1|SIRT1]] deacetylates FOXO1 (Lys245/Lys248) and FOXO3 (multiple lysines) under caloric restriction and nutrient stress, potentiating transcriptional activity. This provides a second, AKT-independent activation axis linking [[caloric-restriction]] to FOXO-mediated stress resistance. #gap/needs-replication — precise lysine inventory and functional output hierarchy not fully resolved in primary literature for all four paralogs.

### JNK and MST1 — stress-activated bypasses to AKT

Under oxidative stress, JNK-1 (in *C. elegans*) and STK4/MST1 (in mammals) phosphorylate FOXO proteins at distinct sites (e.g., FOXO3 Ser207 by MST1), promoting nuclear translocation independent of AKT dephosphorylation. #gap/unsourced — the mammalian MST1-FOXO axis citation (likely Lehtinen et al. 2006, Nature) is not confirmed in the archive; the foxo3 page flags this gap.

### CDK1/2 — inhibitory during cell cycle

CDKs phosphorylate FOXO1 and FOXO3 inhibitorily during S and G2/M phases, suppressing FOXO activity when cells are actively cycling. This restricts FOXO pro-apoptotic output to non-cycling cells. #gap/unsourced — needs primary source citation.

## Shared transcriptional targets

When nuclear, all FOXO paralogs drive overlapping pro-longevity gene sets:

| Target gene | Product | Function |
|---|---|---|
| *CDKN1B* (p27/Kip1) | CDK inhibitor | G1 cell-cycle arrest |
| *CDKN1A* (p21) | CDK inhibitor | G1/S arrest (cooperative with p53) |
| *BCL2L11* ([[bim\|BIM]]) | Pro-apoptotic BH3-only | Apoptosis induction [^dijkers2000] |
| *SOD2* (MnSOD) | Mitochondrial superoxide dismutase | ROS detoxification [^kops2002] |
| *CAT* (catalase) | H2O2 detoxification | ROS detoxification |
| *GADD45A/B* | DNA damage-response | NER co-factor; G2/M checkpoint |

## Paralog-specific biology

### FOXO1 — metabolic regulator

Full page: [[foxo1]].

FOXO1 is the dominant hepatic gluconeogenic FOXO. Its primary aging-relevant transcriptional targets are *G6PC* (glucose-6-phosphatase) and *PCK1* (PEPCK-C), whose combined activity drives hepatic glucose output. Liver-specific Foxo1 deletion reduces fasting blood glucose ~30% and blunts gluconeogenesis >50% in mice [^matsumoto2007]. In pancreatic β-cells, FOXO1 is metabolically beneficial (sustains compensatory β-cell mass expansion); in liver it is detrimental in aging/insulin-resistant contexts (drives fasting hyperglycemia). No well-replicated human longevity GWAS signal. KO: embryonic lethal E10.5 (vascular angiogenesis defect) [^hosaka2004].

### FOXO3 — canonical longevity FOXO

Full page: [[foxo3]].

FOXO3 is the most deeply characterized mammalian FOXO in aging biology. It is the **only gene with replicated longevity association in 5+ independent human cohorts** (rs2802292 G allele; OR ~2.75 for exceptional longevity in the Japanese-American Honolulu Heart Program cohort [^willcox2008]). Nuclear FOXO3 drives antioxidant (MnSOD, catalase), autophagy (BECN1, BNIP3, ATG12, LC3B), cell-cycle arrest (p27, p21), and DNA repair (GADD45A/B) programs. In skeletal muscle at sustained high-activation levels, FOXO3 also drives atrogene expression (Atrogin-1/MAFbx, MuRF1) linking it to [[sarcopenia]]. KO: females develop premature ovarian failure (constitutive primordial follicle activation) [^hosaka2004].

### FOXO4 — senolytic target

Full page: [[foxo4]] (stub — see below).

FOXO4 is the least-characterized somatic FOXO, but gained therapeutic importance with the discovery by Baar et al. 2017 [^baar2017] that senescent cells preferentially upregulate a FOXO4-p53 interaction that promotes their survival. A stapled interfering peptide (FOXO4-DRI) disrupts this interaction, selectively triggering apoptosis in p21-high senescent cells while sparing normal cycling and post-mitotic cells [^baar2017]. In mice, FOXO4-DRI restored physical fitness, renal function, and fur density in naturally aged and chemotherapy-treated mice. **This is a mechanistic role distinct from the IIS-suppression axis: FOXO4 in senescent cells is not primarily acting as a transcription factor downstream of AKT, but rather as a pro-survival protein via FOXO4-p53 complex formation.** #gap/needs-replication — FOXO4-DRI human translation not yet in completed Phase 2 trials as of 2026; mechanism needs independent replication. KO: grossly normal [^hosaka2004].

### FOXO6 — brain-restricted

FOXO6 is primarily expressed in striatum and hippocampus. It retains a forkhead DBD and AKT phosphorylation sites but **lacks a canonical nuclear export sequence**, making it constitutively nuclear — the standard AKT-induced cytoplasmic sequestration mechanism is attenuated or absent. Proposed to regulate memory consolidation. No strong longevity genetic association. Literature is sparse; the aging field has not characterized FOXO6 extensively. #gap/needs-replication #gap/unsourced — all FOXO6 claims here require primary citation; cited as gap.

## Triple knockout — Paik 2007 and Tothova 2007

Single knockouts of Foxo1/3/4 are individually described in Hosaka et al. 2004 [^hosaka2004] (see member table above). The three single KOs have distinct, largely non-redundant phenotypes, demonstrating functional diversification. **No triple KO is present in Hosaka 2004.**

The triple conditional Foxo1/3/4 KO phenotype derives from two back-to-back Cell 2007 papers:

**Paik et al. 2007 [^paik2007]** — Conditional deletion of Foxo1, Foxo3, and Foxo4 in somatic tissues (MxCre-based triple KO, n=22 triple KO mice) caused **hemangiomas** (vascular tumors — systemic, affecting uterus, skeletal muscle, liver, abdominal wall) and **thymic CD4+CD8+ lymphoblastic lymphomas** with high penetrance (100% by ~50 weeks, p<0.0001), establishing the three FOXOs as lineage-restricted redundant tumor suppressors. Approximately 9% of Mx-Cre+ mice progressed to lethal malignant angiosarcomas. FoxO1 is identified as the most potent regulator of adult vascular homeostasis; the vascular phenotype phenocopies Foxo1-/- angiogenesis defect, with FoxO3 and FoxO4 contributing incrementally. The lymphoma phenotype reflects combined loss of FOXO function in thymocytes (increased proliferation, resistance to apoptotic stimuli).

**Tothova et al. 2007 [^tothova2007]** — Concurrent Mx1Cre-based conditional triple KO of Foxo1/3/4 in the hematopoietic compartment demonstrated that FOXOs are **critical for hematopoietic stem cell (HSC) resistance to oxidative stress**. Triple KO HSCs showed elevated ROS (~2.5-fold, p<0.0001, restricted to the HSC compartment — myeloid progenitors showed no significant ROS difference), increased apoptosis (~4-fold in HSCs, p=0.01), and progressive HSC depletion (LSK compartment reduced 4.6-fold, p<0.0001). All three FoxO alleles were required: single and double KOs showed no HSC phenotype; only the triple KO fully manifested cell cycle and apoptosis abnormalities. Treatment with the antioxidant N-acetyl-L-cysteine (NAC) reversed the FoxO-deficient HSC phenotype in vivo, confirming the causal role of ROS. This paper established FOXO-mediated antioxidant programs (MnSOD, catalase) as essential for HSC self-renewal and demonstrated that [[stem-cell-exhaustion]] can arise from loss of a transcriptional ROS defense mechanism.

> **Attribution note — Hosaka vs Paik vs Tothova:** A frequent misattribution in review articles assigns the triple-KO hemangioma/lymphoma phenotype to "Hosaka et al. 2004." This is incorrect. Hosaka 2004 performed three **single** germline KOs (Foxo1-/-, Foxo3a-/-, Foxo4-/- individually) and reported their distinct individual phenotypes. The triple conditional KO with hemangiomas + lymphomas is from **Paik et al. 2007 (Cell 128:309–323, DOI: 10.1016/j.cell.2006.12.029)**. The parallel triple KO with HSC depletion via ROS is from **Tothova et al. 2007 (Cell 128:325–339, DOI: 10.1016/j.cell.2007.01.003)**. Both use Cre-lox conditional strategies distinct from the germline KOs in Hosaka 2004.

| Dimension | Status |
|---|---|
| Tumor suppressor redundancy conserved in humans? | partial — FOXO loss-of-function mutations occur in human cancers but no syndromic multi-FOXO KO human equivalent |
| HSC ROS-defense role conserved in humans? | yes — human HSC aging involves elevated ROS and decreased FOXO activity |
| Replicated in humans? | no direct equivalent; consistent with observational data |

## C. elegans connection

[[daf-16]] is the single ancestral worm FOXO. Its nuclear activation (via [[daf-2]]/[[age-1]] LoF reducing AKT-1/AKT-2 activity) is necessary and sufficient for the near-doubling of *C. elegans* lifespan in canonical *daf-2* LoF mutants [^kenyon2010]. The IIS-FOXO-longevity axis was established in worms and then shown to be conserved structurally in flies and mammals. The **magnitude** of lifespan extension collapses across the phylogeny: ~100% in *daf-2* worms → ~50% in fly insulin-receptor mutants → 15–40% range in various mammalian IIS-reduction models → GWAS association (directional, not LoF equivalent) in humans. DAF-16 is most closely related to FOXO3 in longevity-regulation functions but encodes roles distributed across the four mammalian paralogs.

## Aging context — why the family matters

1. **Master integrators of nutrient sensing → longevity:** Active (nuclear) FOXOs simultaneously suppress [[deregulated-nutrient-sensing]] (cell-cycle arrest, metabolic reprogram), activate [[disabled-macroautophagy|autophagy]] (FOXO3 target genes), and drive antioxidant defense — addressing multiple hallmarks of aging through a single transcriptional hub.

2. **Human genetic evidence:** FOXO3 is the most-replicated human longevity gene with multi-ethnic GWAS confirmation. No other longevity candidate gene approaches the breadth of replication. #gap/no-mechanism — the exact molecular effect of the rs2802292 G allele on FOXO3 expression/activity in human tissues is unresolved.

3. **Paralog specialization limits global targeting:** Each FOXO has preferred tissue expression and context-specific targets. Global FOXO activation (e.g., via PI3K inhibition) carries metabolic liabilities (hepatic FOXO1 → hyperglycemia; FOXO3 in muscle → atrogenes → sarcopenia). Paralog-selective activation or tissue-specific delivery would be required for therapeutic use.

4. **Senescent cell survival — FOXO4 senolytic angle:** FOXO4-p53 axis in senescent cells provides a paralog-specific therapeutic entry point. FOXO4-DRI is under active investigation as a senolytic approach distinct from flavonoid-based strategies (see [[fisetin]], [[navitoclax]]).

## Pathway membership

- [[insulin-igf1]] — all FOXOs are primary transcriptional outputs; nuclear activity is licensed by IIS suppression
- [[pi3k-akt-pathway]] — [[akt|AKT]] is the proximal kinase for all three conserved AKT sites on each paralog
- [[autophagy]] — FOXO3 directly transactivates autophagy gene set; shared mechanism across paralogs to a lesser degree
- [[ampk]] — AMPK phosphorylates and activates FOXO3 (Ser30) and FOXO1 under energy stress
- [[cellular-senescence]] — FOXO4-p53 axis in senescent cell survival; FOXOs drive p21 expression (cell-cycle arrest → senescence entry)
- [[dna-damage-response]] — all FOXOs transactivate GADD45A/B

## Key interactors (shared)

- [[akt]] — primary inhibitory kinase (all three AKT sites on all paralogs)
- [[14-3-3]] — cytoplasmic anchor after Thr/Ser dual phosphorylation (requires both sites 1 and 2)
- [[sirt1]] — deacetylates FOXO1 and FOXO3; activating under nutrient stress
- [[pp2a]] — dephosphorylates AKT sites on FOXOs; enables nuclear re-import
- [[p53]] — interacts with FOXO4 in senescent cells (FOXO4-DRI senolytic target) [^baar2017]
- [[bim]] — shared direct transcriptional target; connects FOXOs to intrinsic apoptosis [^dijkers2000]

## Related pages (individual paralogs and orthologs)

- [[foxo3]] — verified-partial — canonical longevity FOXO; 673 aa; human GWAS (rs2802292)
- [[foxo1]] — verified-partial — gluconeogenic regulator; 655 aa; hepatic metabolic axis
- [[foxo4]] — stub (not yet seeded — deferred in Round 7 per ROADMAP)
- [[foxo6]] — stub (not yet seeded)
- [[daf-16]] — verified-partial — single ancestral *C. elegans* FOXO; founding longevity TF
- [[insulin-igf1]] — the pathway FOXOs gate
- [[pi3k-akt-pathway]] — AKT is the proximal FOXO-kinase
- [[akt]] — AKT1/2/3; Thr308/Ser473 dual phosphorylation regulates FOXO activity
- [[14-3-3]] — cytoplasmic anchor proteins; effectors of AKT-FOXO regulation
- [[caloric-restriction]] — upstream intervention that activates SIRT1 → FOXO deacetylation
- [[cellular-senescence]] — FOXO4-DRI senolytic targets FOXO4-p53 in senescent cells
- [[sarcopenia]] — FOXO3 atrogene axis in sustained high-FOXO contexts
- [[stem-cell-exhaustion]] — triple KO FOXOs show HSC depletion from ROS (Tothova 2007)

## Limitations and gaps

- #gap/needs-canonical-id — `uniprot: null`, `ncbi-gene: null`, `hgnc: null` in frontmatter are intentional for this family overview page; canonical IDs are on individual paralog pages. FOXO6 A8MYZ6 should be re-verified against current UniProt.
- #gap/needs-replication — FOXO6 biology in aging is almost entirely uncharacterized; all FOXO6 claims in this page are flagged unsourced.
- #gap/no-mechanism — rs2802292 G allele functional effect on FOXO3 activity/expression at molecular level unresolved (same gap as [[foxo3]] page).
- #gap/needs-human-replication — the FOXO4-DRI senolytic peptide approach (Baar 2017) has not yet reported Phase 2 efficacy data in humans as of 2026.
- #gap/dose-response-unclear — the threshold of FOXO3 activation that shifts from beneficial (autophagy, ROS defense) to harmful (atrogene → muscle wasting) is not quantified.
- #gap/unsourced — FOXO6 constitutive nuclear localization (lacks NES) and its AKT phosphosite inventory need primary citation.
- #gap/unsourced — MST1-FOXO3 Ser207 phosphorylation needs citation (Lehtinen et al. 2006 Nature is likely but not verified here).
- #gap/unsourced — CDK1/2 inhibitory phosphorylation of FOXOs during cell cycle needs primary citation.
- The distinction between FOXO1 vs FOXO3 vs FOXO4 target-gene specificity in overlapping tissues (especially skeletal muscle) is incompletely resolved in the primary literature — see [[foxo1]] and [[foxo3]] Limitations sections for detail.

## Footnotes

[^brunet1999]: doi:10.1016/s0092-8674(00)80595-4 · [[studies/brunet-1999-akt-foxo3-14-3-3]] · n=N/A (biochemical/cell study) · in-vitro · model: CCL39 fibroblasts, 293T cells, cerebellar granule neurons, Jurkat T cells · Cell 1999; 6,504 citations; local PDF available · First demonstration that AKT directly phosphorylates FKHRL1/FOXO3 at Thr32/Ser253/Ser315; Thr32+Ser253 required for 14-3-3 docking (T32A+S253A double mutant abolishes it; S315A alone does not affect 14-3-3 binding); Ser315 drives distinct CRM1-dependent nuclear export; primary death target identified as FasL

[^nakae1999]: doi:10.1074/jbc.274.23.15982 · n=N/A (SV40-transformed mouse hepatocytes) · in-vitro · JBC 274:15982–15985, 1999; local PDF available · Insulin phosphorylates FKHR/FOXO1 (rat Ser253 = human Ser256) via PI3K-sensitive pathway; S253A abolishes insulin-induced phosphorylation; establishes FOXO1 as direct AKT substrate

[^hosaka2004]: doi:10.1073/pnas.0400093101 · [[studies/hosaka-2004-foxo-single-kos]] · n=N/A (germline single-KO mouse colonies) · in-vivo · model: Foxo1-/-, Foxo3a-/-, Foxo4-/- individual germline KO mice (C57BL/6 and 129/Sv) · PNAS 2004; 674 citations; local PDF available · Foxo1-/- embryonic lethal E10.5 (vascular angiogenesis defect); Foxo3a-/- females premature ovarian failure; Foxo4-/- grossly normal; **paper contains three single KOs only — no triple KO described**

[^paik2007]: doi:10.1016/j.cell.2006.12.029 · [[studies/paik-2007-foxo-triple-ko-tumor-suppressor]] · in-vivo (conditional triple Foxo1/3/4 KO via MxCre) · n=22 triple KO, n=72 all other genotypes (controls) · model: mouse · Cell 128:309–323, 2007; 1,023 citations; local PDF available · Triple KO causes systemic hemangiomas + thymic CD4+CD8+ lymphoblastic lymphomas (100% penetrance, p<0.0001); ~9% progress to lethal angiosarcomas; FOXOs are redundant lineage-restricted tumor suppressors; **NOT from Hosaka 2004**

[^tothova2007]: doi:10.1016/j.cell.2007.01.003 · [[studies/tothova-2007-foxo-hsc-ros]] · in-vivo (conditional triple Foxo1/3/4 KO in hematopoietic compartment, Mx1Cre) · model: mouse HSCs · Cell 128:325–339, 2007; 1,533 citations; local PDF available · Triple KO HSCs: ROS ~2.5-fold elevated (p<0.0001, HSC-restricted; myeloid progenitors unaffected); apoptosis ~4-fold increased (p=0.01); LSK compartment 4.6-fold reduced (p<0.0001); all three FoxO alleles required (single/double KOs phenotypically normal); NAC rescue confirms ROS causality; FOXOs required for HSC resistance to physiological oxidative stress; FOXO-driven antioxidant programs essential for HSC self-renewal

[^baar2017]: doi:10.1016/j.cell.2017.02.031 · [[studies/baar-2017-foxo4-dri-senolytic]] · n=N/A (cell lines + mouse cohorts, n=7–8/treatment group in key in-vivo experiments) · in-vivo + in-vitro · model: XpdTTD/TTD fast-aging mice; naturally aged p16::3MR mice; doxorubicin-treated mice; human IMR-90 and WI-38 fibroblasts · Cell 169:132–147, 2017; 1,365 citations; local PDF available · FOXO4-DRI (D-retro-inverso stapled peptide) selectively induces apoptosis in senescent cells (SI50 = 11.73-fold vs control IMR90; p21-dependent; caspase-3/7-mediated); FOXO4 progressively upregulated after senescence-inducing IR in human fibroblasts; forms pro-survival complex with p53 at PML/DNA-SCARS; FOXO4-DRI disrupts FOXO4-p53 interaction → nuclear exclusion of active pSer15-p53 → cytosolic/mitochondrial p53 → apoptosis in senescent but not normal cells; XpdTTD/TTD mice: improved fur density, increased activity, reduced plasma urea (renal function); naturally aged mice: same benefits confirmed; doxorubicin model: liver AST normalized after FOXO4-DRI treatment

[^willcox2008]: doi:10.1073/pnas.0801030105 · [[studies/willcox-2008-foxo3a-longevity]] · n=615 (213 cases ≥95y, 402 controls died <81y) · nested case-control · p=0.0007 (GG vs TT at rs2802292; OR=2.75, 95% CI 1.51–5.02) · model: Japanese-American men (Honolulu Heart Program / HAAS cohort) · PNAS 2008; 965 citations; local PDF available · First major GWAS confirmation of FOXO3/FOXO3A as a longevity gene in humans

[^dijkers2000]: doi:10.1016/s0960-9822(00)00728-4 · n=N/A (IL-3-dependent Ba/F3 hematopoietic cells) · in-vitro · Current Biology 2000; 965 citations; local PDF available · FKHRL1/FOXO3 transactivates BIM (BCL2L11) promoter; BIM required for FOXO3-driven apoptosis

[^kops2002]: doi:10.1038/nature01036 · n=N/A (DL23 human colon carcinoma + MEFs) · in-vitro · Nature 2002; local PDF available · FOXO3-deficient cells accumulate elevated ROS; FOXO3 directly activates MnSOD/SOD2 via inverse FOXO-binding element; confirmed by ChIP

[^matsumoto2007]: doi:10.1016/j.cmet.2007.08.006 · n=6–13/group · in-vivo (liver-specific Foxo1 KO) · model: α1-antitrypsin-Cre × Foxo1^flox/flox mice · Cell Metabolism 2007; local PDF available · Liver FOXO1 deletion reduces fasting blood glucose ~30% and hepatic glucose production >50%; G6pc and Pck1 blunted 2-4× under fasting

[^kenyon2010]: doi:10.1038/nature08980 · review (Nature) · comprehensive review of IIS-FOXO axis across species; DAF-16 target genes; mammalian extrapolation; magnitude attenuation across phyla · local PDF available

[^calnan2008]: doi:10.1038/onc.2008.21 · Calnan DR, Brunet A · review (Oncogene) · comprehensive FOXO regulatory code: PTMs, co-factors, target gene logic · 1,141 citations; closed-access, no local PDF · #gap/no-fulltext-access
