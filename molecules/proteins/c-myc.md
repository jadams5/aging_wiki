---
type: protein
aliases: [MYC, c-Myc, Myc, MYCC, bHLHe39]
uniprot: P01106
ncbi-gene: 4609
hgnc: 7553
genage-id: 39
mouse-ortholog: Myc
ensembl: ENSG00000136997
druggability-tier: 2
caused-by: []
causes: []
key-domains: [basic-region, helix-loop-helix, leucine-zipper, transactivation-domain]
key-ptms: [Thr73-phosphorylation, Ser77-phosphorylation, Lys158-acetylation, FBXW7-ubiquitination]
pathways: ["[[myc-pathway]]", "[[cell-cycle]]", "[[ribosome-biogenesis]]", "[[apoptosis-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[genomic-instability]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[max]]", "[[miz1]]", "[[fbxw7]]", "[[p19-arf]]", "[[usp28]]"]
sens-categories: []
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Hofmann 2015, Takahashi & Yamanaka 2006, Dang 2012 (review), and Zindy 1998 verified against primary source PDFs. Dalla-Favera 1982 not verifiable (not_oa); translocation claims tagged #gap/no-fulltext-access. UniProt P01106 identity fields (454 aa, bHLH-LZ domains, PTM residues Thr-73/Ser-77) confirmed via UniProt REST API. GenAge entry ID 39 and Drosophila lifespan effects confirmed via genomics.senescence.info. sustained-proliferative-signaling hallmark page does not exist; removed from frontmatter hallmarks list and flagged as dangling link."
---

# c-MYC (MYC)

The fourth Yamanaka factor — a master transcriptional amplifier that drives cell growth, proliferation, and ribosome biogenesis. In the context of aging, c-MYC is a double-edged proto-oncogene: its activity promotes cancer risk and oncogene-induced senescence (OIS), yet its **partial reduction** in mice extends lifespan by ~15% with broad healthspan benefits. In partial reprogramming, c-MYC is the "M" of the original OSKM cocktail but is deliberately **omitted** in safer OSK-only protocols (Sinclair group and others) due to its oncogenic and teratoma-inducing potential.

---

## Identity

- **UniProt:** P01106 (MYC_HUMAN) — manually reviewed (Swiss-Prot)
- **NCBI Gene:** 4609
- **HGNC symbol:** MYC (official symbol); aliases MYCC, bHLHe39
- **Ensembl:** ENSG00000136997
- **Mouse ortholog:** Myc (one-to-one ortholog; highly conserved)
- **GenAge ID:** 39 (evidence from both human cell systems and model organisms)
- **Chromosomal location:** 8q24.21 — the locus involved in Burkitt lymphoma translocations
- **Length:** 454 amino acids; ~50.6 kDa

---

## Protein class and structure

c-MYC is a **basic helix-loop-helix leucine zipper (bHLH-LZ) transcription factor**. It is structurally and functionally incomplete as a monomer: it must heterodimerize with its obligate partner [[max]] to bind DNA at E-box sequences.

### Key structural domains

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal transactivation domain (TAD) | 1–143 | Recruits co-activators (CBP/p300, TRRAP/GCN5); contains 9aaTAD motif (~115–123) |
| MYC box I (MBI) | ~45–63 | Phosphorylation-dependent stability regulation; Thr-73 and Ser-77 sites; FBXW7 degron |
| MYC box II (MBII) | ~128–143 | Core transactivation; essential for oncogenic transformation |
| Basic region | ~370–379 | DNA recognition; contacts E-box bases; UBR5-degron overlap |
| Helix-loop-helix (HLH) | ~383–421 | Dimerization interface with MAX |
| Leucine zipper (LZ) | ~428–449 | Stabilizes MYC-MAX heterodimer |

### Dimerization partner MAX

c-MYC is inactive without [[max]]. The MYC-MAX heterodimer binds canonical **E-box sequences** (core: 5'-CACGTG-3') and activates transcription. Importantly, MAX also dimerizes with the MAD/MNT family of repressors, which compete with MYC for E-box sites and repress MYC target genes — making the MYC:MAD/MNT ratio a key determinant of net transcriptional output in proliferating vs quiescent cells. #gap/unsourced — MYC:MAX:MAD competitive binding quantitation in aging tissues not documented; stub for [[mad-max-network]].

---

## Function

c-MYC is a **global transcriptional amplifier** — not a classical sequence-specific activator of a small gene set, but a broad enhancer of already-active genes [^dang2012]. A promoter-array study found that ~15% of human gene promoters are broadly bound by Myc; downstream of this, an estimated 15–20% of all genes are directly regulated by MYC [^dang2012]. This makes it one of the most far-reaching transcriptional regulators in the cell.

### Core functions

- **Cell growth and mass accumulation** — activates ribosomal protein genes, rDNA transcription (via RNA Pol I), and tRNA synthesis to drive biomass production
- **Cell cycle entry and progression** — activates E2F targets (CDC25A, CDK4, cyclin D2/E); represses p21/CDKN1A and p27/CDKN1B to release CDK brakes
- **Ribosome biogenesis** — among the strongest inducers of ribosomal RNA and ribosomal protein transcription; coordinates RNA Pol I, II, and III
- **Metabolic reprogramming** — promotes aerobic glycolysis (Warburg effect) and glutamine utilization; activates LDHA, PDK1, and glutaminase (GLS)
- **Stem cell maintenance** — one of the four Yamanaka factors; promotes pluripotency gene programs; required for rapid early embryonic proliferation

### Regulation of c-MYC protein stability

c-MYC has a strikingly **short protein half-life of approximately 15–20 minutes** in most cell types [^dang2012]. Two sequential phosphorylation events on the N-terminal degron govern stability:

1. **Ser-62 phosphorylation** by ERK or CDK2 initially stabilizes MYC
2. **Thr-73 phosphorylation** (or the adjacent Ser-77) by GSK3β or DYRK2 (primed by Ser-62 phosphorylation) recruits **SCF(FBXW7)**, the principal E3 ubiquitin ligase targeting MYC for proteasomal degradation

The deubiquitinases [[usp28]] (in the nucleoplasm) and USP36 (in the nucleolus) counteract FBXW7, providing spatial regulation of MYC stability. Loss-of-function mutations in *FBXW7* are among the most common in human cancers, contributing to MYC hyperactivation via protein stabilization.

---

## Role in partial reprogramming

### Original OSKM cocktail

In 2006, Takahashi and Yamanaka demonstrated that co-expression of four transcription factors — **OCT4, SOX2, KLF4, and c-MYC (OSKM)** — in mouse fibroblasts generates induced pluripotent stem cells (iPSCs) [^takahashi2006]. c-MYC's role in this cocktail is primarily to:

1. Open chromatin globally, making target loci accessible for OCT4/SOX2/KLF4
2. Activate the proliferation machinery required for the rapid cell divisions during reprogramming
3. Suppress differentiation-associated gene programs

The inclusion of c-MYC dramatically improved reprogramming efficiency. The 2006 paper noted that "use of c-Myc may not be suitable for clinical applications" and demonstrated that subcutaneous injection of iPS cells into nude mice produced teratomas containing tissues of all three germ layers — a standard pluripotency demonstration that simultaneously highlighted the tumorigenic potential of cells retaining active reprogramming transgenes [^takahashi2006]. The specific finding that chimeric mice developed tumors due to c-MYC reactivation was reported in a follow-up study (Okita et al. 2007, Nature 448:313–7) not verified here. #gap/needs-replication

### OSK protocols: deliberate omission of c-MYC

The Sinclair laboratory and other groups pursuing partial reprogramming for aging reversal use **OSK (OCT4, SOX2, KLF4) without c-MYC** [^lu2020]. The rationale:

| Factor | OSK (Sinclair/aging protocols) | OSKM (Ocampo 2016; original iPSC) |
|---|---|---|
| Reprogramming efficiency | Lower | Higher |
| Teratoma risk | Reduced | Present (if c-Myc reactivated) |
| Oncogenic risk | Lower | Higher |
| Clinical translatability | More favorable | Unfavorable |
| Epigenetic age reversal | Demonstrated (Lu 2020, Yang 2023) | Demonstrated (Ocampo 2016) |

The tradeoff is real: omitting c-MYC requires longer, more controlled TF expression to achieve comparable epigenetic remodeling, and the molecular mechanism does not depend on c-MYC's proliferative function — it depends on OCT4/SOX2/KLF4's chromatin-remodeling and TET demethylase recruitment activity. See [[processes/partial-reprogramming]] (verified) for full experimental detail.

#gap/needs-replication — Whether OSK without c-MYC achieves equivalent epigenetic rejuvenation to full OSKM in all tissue contexts has not been systematically tested across tissue types.

---

## Aging relevance

### Oncogene-induced senescence (OIS)

Paradoxically, acute oncogene activation (including MYC overexpression above a threshold) triggers a **cellular senescence program** rather than unlimited proliferation — a tumor-suppressive response called oncogene-induced senescence (OIS). The key mechanism for Myc-induced OIS involves **p19ARF** (mouse) / **p14ARF** (human):

1. Sustained MYC activation induces *Cdkn2a* locus transcription → p19ARF / p14ARF protein accumulation
2. ARF sequesters MDM2, stabilizing [[p53]]
3. p53 transcriptionally activates p21/CDKN1A → cell cycle arrest → senescence

Myc also drives apoptosis under limiting survival signals, creating a "proliferate-or-die" switch: MYC overexpression combined with serum/growth factor deprivation in primary mouse embryo fibroblasts (MEFs) triggers rapid apoptosis rather than senescence [^zindy1998]. This apoptosis response is significantly attenuated by ARF loss or p53 loss — ARF-null and p53-null MEFs show markedly reduced apoptosis compared to wild-type MEFs under the same conditions (Figure 4 and 5A, Zindy 1998). The requirement for cytochrome c release via the intrinsic mitochondrial pathway is not established by Zindy 1998 — that mechanistic link comes from other literature. #gap/unsourced — intrinsic apoptosis pathway downstream of MYC/ARF/p53 needs a separate citation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (p14ARF is the human ortholog of mouse p19ARF; same MDM2-p53 axis) |
| Phenotype conserved in humans? | yes (MYC amplification drives human cancer; ARF loss accelerates tumorigenesis) |
| Replicated in humans? | yes (epidemiology of Burkitt lymphoma and MYC amplification in human cancers) |

### Myc haploinsufficiency and longevity in mice (Hofmann 2015)

The most direct aging-relevant finding: **Myc heterozygous (Myc+/-) mice live longer** than wild-type littermates with broad improvements in healthspan [^hofmann2015]. Key findings from this study:

- Extended median lifespan: **20.9% increase in females** (Myc+/+ N=37, Myc+/- N=37; p<0.001, log-rank) and **10.7% increase in males** (Myc+/+ N=42, Myc+/- N=42; p<0.001, log-rank); **15.1% combined for both sexes** (Figure 1B). Strain: C57BL/6 (backcrossed ≥10 generations). Maximum lifespans were commensurately extended.
- Reduced age-related pathology: less cardiac fibrosis (p=0.047, Masson's trichrome, n=11–14), preserved bone density / less osteoporosis in females (p=0.021/0.045 micro-CT, n=3–7), and improved immunosenescence (CD4/CD8 ratio, naive/memory T-cell ratios maintained; p<0.05)
- Improved metabolic health: decreased serum free IGF-1 (ELISA; p=0.049 young, p=0.034 old, n=5–12); elevated AMPK phosphorylation (pAMPK/AMPK ratio, p=0.039); reduced pAKT/AKT (p=0.032/0.047) and pS6K/S6K (p=0.048/0.043) in liver and muscle
- Reduced protein translation rate: in vivo 3H-phenylalanine incorporation assay, p=0.044 (n=5, 5–7 months males)
- Transcriptomic analysis (liver, muscle, adipose; Affymetrix arrays) revealed enrichment in metabolic and immune process signatures; partial overlap with caloric restriction and metformin transcriptomes but not a simple phenocopy
- **Important caveat:** Myc+/- mice do **not** show improvements in stress management pathways (ROS, DNA damage foci, genotoxic stress markers, p21/p16 induction, cellular senescence rates) compared to Myc+/+ — a key contrast with several other longevity models. The lifespan extension is attributed primarily to reduced ribosome biogenesis/translation and improved metabolic signaling, not to stress resistance.

This mechanistically connects c-MYC to the **[[mtor]] / [[ampk]] / [[insulin-igf1]]** longevity axis: reducing MYC expression phenocopies several aspects of mTOR inhibition or dietary restriction, though the authors note TOR activity changes are likely downstream of the higher metabolic rate in Myc+/- mice, and AMPK activation is probably secondary rather than a direct MYC→AMPK effect. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes (MYC-driven translation and mTOR crosstalk conserved) |
| Phenotype conserved in humans? | unknown (no human equivalent of Myc haploinsufficiency studied prospectively) |
| Replicated in humans? | no — mouse-only; no independent replication as of 2026-05-05 |

#gap/needs-replication — Hofmann 2015 is currently the primary paper demonstrating longevity from Myc haploinsufficiency; independent mouse replication has not been reported as of 2026-05-05.

### MYC in Drosophila aging

GenAge (entry 39) records that MYC overexpression in *Drosophila* somatic cells **increases somatic mutation frequency and reduces median and maximum lifespan by up to 47%**; conversely, haploinsufficiency extends fly lifespan by approximately 14% [^genage-myc]. The fly and mouse findings converge: dosage reduction of Myc consistently extends lifespan across species. #gap/needs-human-replication

---

## Disease associations

### Burkitt lymphoma — the canonical Myc translocation

Burkitt lymphoma is defined by a chromosomal translocation placing the *MYC* gene at 8q24 under the control of immunoglobulin locus enhancers [^dalla-favera1982]:

- **t(8;14)** — *MYC* placed under control of the immunoglobulin heavy chain (IgH) enhancer (~80% of Burkitt cases)
- **t(2;8)** — *MYC* placed near Igκ light chain locus
- **t(8;22)** — *MYC* placed near Igλ light chain locus

In all cases, constitutive, high-level MYC expression in B cells drives aggressive lymphoma. This is among the most clinically and molecularly characterized examples of oncogene activation by regulatory element capture.

### MYC amplification in other cancers

MYC amplification (gene copy number gain) or protein overexpression is found in a broad range of solid tumors including breast (~20%), colorectal, non-small cell lung, and hepatocellular carcinomas. MYCN (N-Myc) amplification is a defining feature of neuroblastoma; MYCL (L-Myc) is amplified in small-cell lung cancer. The MYC family thus represents the most broadly implicated oncogene family in human cancer.

### Double-hit and triple-hit lymphoma

High-grade B-cell lymphomas with concurrent MYC and BCL2 rearrangements (double-hit) or MYC, BCL2, and BCL6 rearrangements (triple-hit) carry poor prognosis and are directly relevant to senolytic targeting: BCL2 overexpression protects MYC-driven lymphoma cells from apoptosis, a dependency that BCL2 inhibitors (venetoclax) exploit. This intersects with the [[bcl-2-family]] pathways relevant to [[cellular-senescence]] and apoptotic escape.

---

## Regulation

### Transcriptional

- *MYC* mRNA is very short-lived (~30 min); the gene is highly responsive to mitogenic signaling (growth factors, Wnt, Notch, Hedgehog)
- Regulated at multiple levels: promoter activity, RNA Pol II elongation (BRD4-dependent), mRNA stability (AUF1, HuR), and translation
- BET bromodomain inhibitors (JQ1, I-BET762) suppress *MYC* transcription by displacing BRD4 from the *MYC* super-enhancer — a therapeutic approach in MYC-driven cancers

### Post-translational (protein stability)

See "Regulation of c-MYC protein stability" above. The phospho-degron (Thr-73/Ser-77 → SCF(FBXW7)) is the primary stability control. In many cancers, *FBXW7* is mutated, FBXW7 protein is lost, or MYC degron residues are mutated — all leading to MYC stabilization.

### MAX availability

Reduction of MAX protein forces a redistribution of remaining MYC into potentially active or inactive complexes depending on context; MAX heterozygous mice show similar longevity effects to Myc heterozygous mice in at least one study #gap/unsourced.

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[processes/partial-reprogramming]] (verified) | OSKM cocktail includes c-MYC; OSK protocols omit it due to oncogenic risk; central tension documented there |
| [[hypotheses/information-theory-of-aging]] (verified) | Partial reprogramming context; c-MYC role in original OSKM vs. safer OSK approach |
| [[max]] (stub) | Obligate heterodimerization partner; MYC is inactive without MAX |
| [[fbxw7]] (stub) | Primary E3 ubiquitin ligase; loss of FBXW7 stabilizes MYC in many cancers |
| [[p19-arf]] (stub) | ARF/p14ARF mediates MYC-induced oncogene-induced senescence via MDM2-p53 |
| [[p53]] (verified) | Downstream of ARF → MDM2 relief; p53 executes senescence or apoptosis after MYC overactivation |
| [[cellular-senescence]] | MYC is a key OIS inducer; MYC dosage reduction may reduce senescent cell burden (mechanism unclear) |
| [[mtor]] (verified) | Myc+/- mice show reduced mTOR/AKT/S6K signaling; mechanistic overlap with mTOR longevity axis |
| [[ampk]] (verified) | Myc+/- mice show elevated AMPK activity; potential mechanistic link to AMPK longevity effects |
| [[insulin-igf1]] (stub) | Myc+/- mice show decreased serum IGF-1; connects MYC dosage to the IGF-1 longevity axis |
| [[oct4]] (planned stub) | Core OSK reprogramming factor co-expressed with c-MYC in OSKM |
| [[sox2]] (planned stub) | Core OSK reprogramming factor |
| [[klf4]] (planned stub) | Core OSK reprogramming factor |
| [[bcl-2-family]] (stub) | MYC-driven lymphomas frequently co-amplify BCL2; senolytic context |

---

## Limitations and gaps

#gap/needs-human-replication — The Myc+/- longevity finding (Hofmann 2015) is mouse-only; no prospective human equivalent exists; haploinsufficiency of MYC in humans is not a documented heritable condition with longevity data.

#gap/needs-replication — Hofmann 2015 is a single study; independent replication of the lifespan extension (20.9% females, 10.7% males, 15.1% combined) in Myc+/- C57BL/6 mice has not been reported as of 2026-05-05.

#gap/needs-human-replication — Drosophila Myc haploinsufficiency lifespan extension (GenAge entry 39) is from a different phylum; mechanistic conservation with mammalian aging is plausible but not directly tested.

#gap/dose-response-unclear — The dose-response between c-MYC expression level and the oncogenic vs. longevity-promoting outcome is poorly characterized in normal somatic tissues. Partial reduction (haploinsufficiency) extends lifespan; excessive reduction would impair tissue maintenance. The optimal MYC dosage for longevity vs. cancer prevention is not established.

#gap/no-mechanism — The mechanism by which reduced MYC expression extends lifespan in mice is not fully resolved. The Hofmann 2015 paper links it to reduced protein translation and mTOR/IGF-1 axis downregulation, but causal assignments within the mechanistic chain remain incomplete.

#gap/unsourced — Whether the oncogene-induced senescence mechanism downstream of MYC amplification quantitatively contributes to the SASP burden and inflammaging in normally aged (non-cancerous) tissues has not been directly measured; this remains a plausible but undemonstrated connection.

---

## Footnotes

[^takahashi2006]: doi:10.1016/j.cell.2006.07.024 · in-vitro · model: Mus musculus embryonic fibroblasts (MEFs) and adult tail-tip fibroblasts (TTFs); Fbx15βgeo/βgeo reporter strain on C57BL/6-129 hybrid background · discovery of iPSC induction by OCT3/4+SOX2+KLF4+c-MYC (OSKM); teratomas (all 3 germ layers) from subcutaneous injection into nude mice; clinical inapplicability of c-Myc noted by authors · Cell 126:663–676, Aug 2006 · Takahashi K, Yamanaka S

[^lu2020]: doi:10.1038/s41586-020-2975-4 · in-vivo · model: Mus musculus (optic nerve crush injury model; retinal ganglion cells) · OSK (without c-MYC) AAV delivery restores youthful epigenetic patterns and reverses vision loss · Lu Y, Brommer B, Tian X, et al. · Nature 588:124–129, 2020 · also cited in [[processes/partial-reprogramming]] (verified) — footnote defined locally here to avoid cross-page resolution failure

[^hofmann2015]: doi:10.1016/j.cell.2014.12.016 · in-vivo (Myc+/- haploinsufficient mice) · model: C57BL/6 Mus musculus (backcrossed ≥10 generations) · n=37/37 females; 42/42 males · median lifespan increase 20.9% females, 10.7% males, 15.1% combined (log-rank p<0.001 both sexes) · reduced serum IGF-1, elevated AMPK activity, reduced pAKT and pS6K signaling, reduced translation rate · no improvement in stress-management or senescence pathways · Cell 160:477–488, Jan 2015 · Hofmann JW, Zhao X, De Cecco M, et al.

[^dang2012]: doi:10.1016/j.cell.2012.03.003 · review · model: human and mouse · "MYC on the Path to Cancer" — comprehensive review of MYC as transcriptional amplifier, role in metabolism, and oncogenesis · protein t½ ~15–20 min (citing Gregory and Hann 2000); ~15% of promoters broadly bound by Myc (promoter-array); 15–20% of all genes directly regulated · 3,284 citations; FWCI=73.6 · Cell 149:22–35, Mar 2012 · Dang CV

[^zindy1998]: doi:10.1101/gad.12.15.2424 · in-vitro (primary MEFs: wild-type, ARF-/-, p53-/-, p21-null, Rb-null) · model: Mus musculus embryo fibroblasts · retroviral myc overexpression ± serum deprivation · "Myc signaling via the ARF tumor suppressor regulates p53-dependent apoptosis and immortalization" · ARF/p53-dependent apoptosis in serum-deprived MEFs confirmed; cytochrome c / mitochondrial pathway not examined in this paper · Genes Dev 12:2424–2433, 1998 · Zindy F, Eischen CM, Randle DH, et al.

[^dalla-favera1982]: doi:10.1073/pnas.79.24.7824 · observational (cytogenetics) · model: human Burkitt lymphoma cell lines · "Human c-myc onc gene is located on the region of chromosome 8 that is translocated in Burkitt lymphoma cells" · 1,760 citations · #gap/no-fulltext-access — not open-access; no local PDF in a local paper archive (status: not_oa). Translocation claims (t(8;14)/t(2;8)/t(8;22)) are consistent with all secondary literature but cannot be verified against primary source text.

[^genage-myc]: GenAge entry 39 (MYC) — https://genomics.senescence.info/genes/entry.php?hgnc=MYC — model: Drosophila melanogaster (Myc overexpression increases somatic mutation frequency, reduces median/max lifespan by up to 47%; haploinsufficiency extends lifespan by ~14%); also notes WRN and TERT protein interactions. Accessed 2026-05-05.
