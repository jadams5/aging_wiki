---
type: protein
aliases: [hTR, TR, hTERC, telomerase RNA, telomerase RNA component]
uniprot: null
ncbi-gene: 7012
hgnc: 11727
ensembl: ENSG00000270141
genage-id: 7
is-noncoding-rna: true
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
sens-categories: ["[[sens-damage-categories|OncoSENS]]"]
complex-subunits: ["O14746 (TERT)", "TERC-ncRNA (no UniProt; NCBI Gene 7012)", "O60832 (DKC1)", "Q9NX24 (NHP2)", "Q9NPE3 (NOP10)", "Q9NY12 (GAR1)", "Q8WWQ0 (TCAB1)"]
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: partial
caused-by: []
causes: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Vulliamy 2001 and Armanios 2007 verified end-to-end against local PDFs. Theimer 2003, Theimer 2005, Leeper 2005, and Blasco 1997 verified against newly-downloaded PDFs (all four downloaded during this pass). Feng 1995 and Mitchell 1999 remain closed-access (not_oa). NCBI Gene 7012 and HGNC 11727 confirmed via REST API. Blasco 1997 phenotype attribution corrected — in vivo multi-tissue phenotypes (testicular atrophy, bone marrow failure, gut atrophy) originate from Lee 1998 and Rudolph 1999, not Blasco 1997 which was a cell/tumor study. Citation-correction substitutions (Theimer 2003 replacing the nonexistent 'Wong 2003'; Leeper 2005 for CR4/CR5 vs Theimer 2005 for pseudoknot) confirmed correct against PDFs."
---

> Verified 2026-05-07 by claude against primary source PDFs. Vulliamy 2001 (10.1038/35096585), Armanios 2007 (10.1056/NEJMoa066157), Theimer 2003 (10.1073/pnas.242720799), Theimer 2005 (10.1016/j.molcel.2005.01.017), Leeper 2005 (10.1261/rna.7222505), and Blasco 1997 (10.1016/s0092-8674(01)80006-4) verified against local PDFs. Feng 1995 and Mitchell 1999 remain closed-access (#gap/no-fulltext-access). NCBI Gene 7012 and HGNC 11727 confirmed via REST API. See verified-scope in frontmatter for corrections summary.

# TERC (telomerase RNA component)

The obligate RNA template subunit of the [[tert|telomerase]] holoenzyme. TERC is a 451-nucleotide H/ACA-class scaRNA that provides the 3′-AAUCCC-5′ template for TTAGGG repeat synthesis by [[tert|TERT]]. It is not a translated protein — `type: protein` with `is-noncoding-rna: true` is the wiki convention per CLAUDE.md. No UniProt accession exists; canonical identity is NCBI Gene 7012 / HGNC 11727. TERC haploinsufficiency causes autosomal dominant dyskeratosis congenita and related telomere-biology disorders. The *Terc*-knockout mouse is the foundational mammalian model for telomere-attrition-driven aging.

---

## Identity

- **UniProt:** null — noncoding RNA; no Swiss-Prot/TrEMBL entry #gap/no-uniprot-noncoding-rna
- **NCBI Gene:** 7012 (TERC, *Homo sapiens*; chromosomal location 3q26.2)
- **HGNC:** 11727 (symbol: TERC)
- **Ensembl:** ENSG00000270141
- **RefSeq (mature RNA):** NR_001566.3 — the stable non-protein-coding accession for the 451-nt processed transcript
- **GenAge human:** entry 7 (confirmed from prior verified version; see `verified-scope` above)
- **Mature transcript length:** 451 nt (human); mouse ortholog *Terc* is ~397 nt
- **RNA class:** H/ACA small Cajal body RNA (scaRNA); uniquely bifunctional — acts both as enzyme cofactor template and as a conventional H/ACA guide scaffold for dyskerin recruitment
- **Mouse ortholog:** *Terc* (Mus musculus); conserved functional domains (template, H/ACA box, CAB box); overall sequence identity ~65–70% in conserved regions

**Naming note:** TERC (HGNC symbol) = hTR = hTERC in the biochemistry literature. The [[tert]] page lists this entity in its `complex-subunits:` field as "TERC-ncRNA (no UniProt; NCBI Gene 7012)." This page is the canonical atomic home for TERC-specific biology.

---

## Molecular architecture and functional domains

TERC folds into four major domains [^feng1995]:

| Domain | Nucleotides (approx.) | Function |
|---|---|---|
| Template / pseudoknot core | ~1–210 | Contains the 11-nt template (positions 46–56; **3′-AAUCCCAAUC-5′**); flanked by a pseudoknot with a conserved triple-helix essential for catalytic activity [^theimer2005] |
| CR4/CR5 (conserved region 4/5) | ~240–330 | Independently folding stem-loop-stem; binds the TERT C-terminal extension (CTE) domain; required for holoenzyme assembly and activity [^leeper2005] |
| H/ACA box | ~380–430 | H box (ANANNA) + ACA box; recruits [[dkc1\|dyskerin]] (DKC1) H/ACA RNP; required for 3′ processing and steady-state TERC stability; mutations abolish TERC accumulation [^mitchell1999] |
| CAB box (CR7) | ~440–451 | Cajal body localization signal; binds TCAB1 (WRAP53); required for Cajal body trafficking before telomere targeting in S phase |

**Pseudoknot tertiary structure.** Theimer et al. 2005 (Mol Cell) solved the solution structure of the human TERC pseudoknot and showed it adopts a triple-helix fold with conserved cross-strand A-minor interactions that are essential for telomerase activity. Dyskeratosis congenita-linked point mutations in the P-loop and J2a/2b junctions disrupt this tertiary fold while leaving secondary structure intact, reducing telomerase activity without abolishing TERC expression [^theimer2005]. The CR4/CR5 domain binds TERT-CTE independently of the pseudoknot [^leeper2005].

---

## Function: templated telomere synthesis

TERC serves two non-redundant roles:

1. **Catalytic template.** The 11-nt template region (positions 46–56) is iteratively copied by the TERT reverse transcriptase domain to add TTAGGG hexanucleotide repeats onto the chromosome 3′ G-overhang. After each extension cycle, TERC repositions (translocation) relative to the DNA primer to allow repeat addition processivity.

2. **Holoenzyme scaffold.** The H/ACA box recruits dyskerin and the NHP2/NOP10/GAR1 H/ACA RNP, stabilizing TERC against degradation. Without this scaffold TERC is rapidly degraded. The CR4/CR5 domain docks onto TERT-CTE to position the template. The CAB box directs the assembled RNP to Cajal bodies via TCAB1 [^mitchell1999].

Because TERC is expressed broadly in most tissues (unlike [[tert|TERT]], which is epigenetically silenced in somatic cells), TERC haploinsufficiency — not TERT dosage — is frequently the rate-limiting factor for telomerase activity in cells that do retain partial TERT expression (e.g., stem-cell compartments, activated lymphocytes). This is why heterozygous TERC mutations cause dominant disease [^vulliamy2001].

Full holoenzyme composition (all subunits shared with [[tert]] page):

| Subunit | Gene | Role |
|---|---|---|
| TERT | *TERT* | Catalytic reverse transcriptase |
| TERC | *TERC* (this page) | RNA template + holoenzyme scaffold |
| Dyskerin | *DKC1* | H/ACA RNP core; TERC stability |
| NHP2 | *NHP2* | H/ACA RNP structural subunit |
| NOP10 | *NOP10* | H/ACA RNP structural subunit |
| GAR1 | *GAR1* | H/ACA RNP; joins post-assembly |
| TCAB1 | *WRAP53* | Cajal body trafficking |

---

## Aging biology

### Foundational cloning

Feng et al. (1995) cloned and sequenced the human TERC gene, showed that the ~451-nt RNA carries a template complementary to the TTAGGG repeat, and demonstrated RNase sensitivity of reconstituted telomerase activity — establishing that human telomerase is an RNP with an RNA-encoded template [^feng1995]. This paper provided the molecular substrate for all subsequent genetic and biochemical dissection of the telomere-attrition axis.

### TERC −/− mouse: the generational telomere-attrition model

Blasco et al. (1997) generated the first *Terc*-knockout mouse. First-generation (G1) *Terc* −/− animals were fertile and largely normal — because inbred mouse telomeres start at ~40–60 kb (vs ~10 kb in humans), many divisions are required before reaching critically short lengths. Blasco 1997 demonstrated [^blasco1997]:

- Telomere shortening at **4.8 ± 2.4 kb per mTR−/− generation** (quantified by quantitative FISH)
- From G4 onward: chromosomes lacking detectable TTAGGG signal (5.3% of all ends in G6), aneuploidy (56% of G6 metaphases), and end-to-end fusions including Robertsonian fusions
- G1–G6 mTR−/− mice remained viable, and telomerase-null cells could still be transformed and form tumors in nude mice
- The paper was primarily a cell and tumor biology study using MEFs; it did not characterize in vivo multi-tissue organ phenotypes

**Note:** The in vivo multi-tissue aging phenotypes (testicular atrophy, germ-cell apoptosis, bone marrow failure, intestinal crypt atrophy) were characterized in subsequent papers — Lee et al. 1998 (*Nature* 392:569; essential role in highly proliferative organs) and Rudolph et al. 1999 (*Cell* 96:701; longevity, stress response, cancer). These are sometimes attributed to Blasco 1997 in secondary literature but that paper did not report them.

This is the **canonical mammalian model for telomere-driven aging**. The multi-generation design is essential — single-generation *Terc* −/− knockouts do not model human telomere biology because murine telomeres are far longer at baseline.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TERC/TERT/shelterin axis conserved; template mechanism identical in function |
| Phenotype conserved in humans? | yes — DKC, aplastic anemia, IPF in humans recapitulate late-generation *Terc* −/− tissue failure |
| Replicated in humans? | yes (Mendelian genetics; TERC mutations causal in multiple TBD families) |

#gap/needs-replication — The full multi-generational phenotype series (G1→G6) has not been replicated outside the original Blasco/Greider groups in an ITP-style multi-site format.

---

## Disease associations — TERC haploinsufficiency

Heterozygous loss-of-function TERC mutations cause the **telomere biology disorder (TBD)** spectrum. One functional allele is insufficient to maintain telomere length across tissue generations — demonstrating TERC dosage-limitation in vivo.

### Dyskeratosis congenita (autosomal dominant)

Vulliamy et al. (2001) identified TERC mutations in three autosomal dominant DKC families, demonstrating haploinsufficiency as the mechanism [^vulliamy2001]:

- Three distinct mutations: 821-bp deletion removing 3′-terminal 74 bases (including H/ACA and CR7 domains); C408G point mutation; GC→AG double substitution at nt 107–108
- All mutations are heterozygous — a single mutant allele is sufficient to cause disease
- Genetic anticipation: telomere length progressively shorter in successive generations; age of onset decreases and severity increases with each generation, mirroring the late-generation *Terc* −/− mouse
- Classic triad: nail dystrophy, oral leukoplakia, skin reticulation; severe complications: aplastic anemia, myelodysplastic syndrome, pulmonary fibrosis

### Familial idiopathic pulmonary fibrosis (IPF)

Armanios et al. (2007) identified *TERT* (5/73 probands) and *TERC* (1/73 probands) heterozygous mutations in familial IPF — establishing telomere-maintenance failure as a cause of this aging-associated fibrotic disease [^armanios2007]. The proposed mechanism (per paper's discussion): short telomeres → DNA damage response → loss of alveolar epithelial progenitor cells → remodeling response appearing clinically as usual interstitial pneumonia. The paper explicitly frames this as a cell-loss (not primarily senescence/inflammation) mechanism, distinguishing it from autoimmune fibrosis. Mutation carriers had telomeres below the 10th percentile of age-matched controls (P=0.018 by Wilcoxon signed-rank test; n=8 carriers vs 7 non-carriers, P=0.006). #gap/needs-replication — the ~8% mutation frequency requires replication in larger registries.

### X-linked DKC — convergence via DKC1

Mitchell et al. (1999) showed that DKC1 (dyskerin) is an integral telomerase RNP component and that X-linked DKC patient cells have reduced TERC levels and telomerase activity [^mitchell1999] — demonstrating that both autosomal dominant (TERC mutations) and X-linked (DKC1 mutations via TERC destabilization) DKC converge on the same telomere-maintenance mechanism.

### TERC structural mutations — structural mechanism in DC

Theimer et al. (2003) showed that the DC-linked GC→AG double substitution in stem 2 / j2b3 loop of the TERC pseudoknot shifts the pseudoknot–hairpin conformational equilibrium: the wild-type pseudoknot is ~95% folded, but the DC mutant pseudoknot is only ~50% folded (hairpin and pseudoknot approximately equal), primarily due to destabilization of stem 2. The CR7 C408G mutation separately destabilizes the CR7 hairpin. This established a structural (conformational) equilibrium mechanism for pseudoknot-region DC mutations — distinct from simple TERC level reduction and distinct from Theimer 2005's triple-helix finding [^theimer2003].

---

## Pharmacology and druggability

`druggability-tier: 1` — An FDA-approved drug (imetelstat; GRN163L) directly and molecularly targets TERC. **Aging-context note:** the approved indication is myelodysplastic syndromes (MDS; approved 2024), not aging per se. The drug mechanism is direct base-pairing with the TERC template sequence (positions 46–56), competitively blocking TERT reverse transcription. This is closer to drugging TERC directly than any existing small molecule is to most "tier 1" protein targets. The prior version of this page used tier 4 (reasoning that ncRNAs are not "small-molecule druggable"); that reasoning is superseded by imetelstat's approval and mechanism. See [[tert]] for full imetelstat context.

For **aging-direction** (telomerase activation) approaches:
- No TERC-specific activator is in clinical trials
- Small molecules claimed to increase TERC stability or expression exist in early preclinical work but are not validated
- [[tert|AAV-TERT gene therapy]] (Bernardes 2012) activates the TERT catalytic subunit but requires endogenous TERC co-expression; not TERC-directed
- TA-65 (cycloastragenol) — claimed TERT transcriptional upregulator; TERC-independent #gap/needs-replication

#gap/long-term-unknown — cancer risk implications of telomerase activation in aging tissues remain unresolved for any therapeutic modality.

---

## Population evidence and MR

`mr-causal-evidence: partial` — GWAS signals for telomere length (quantitative trait) map to the TERC locus (3q26.2), providing genetic instruments for Mendelian randomization of telomere length on aging-related disease outcomes. However, TERC-specific MR (as opposed to generic telomere-length MR using multi-locus instruments) has not been published. The GWAS instruments at TERC capture TERC expression-dosage effects on telomere length; whether the causal effect is TERC-specific or generic telomere-length is unresolved. #gap/needs-replication

---

## Limitations and gaps

- **GTEx aging correlation not populated.** TERC is an ncRNA with a quantifiable transcript; GTEx v2 does include ncRNA expression data and age-correlated analysis is possible in principle. Not run for this draft. Populate `gtex-aging-correlation:` per `sops/finding-tissue-expression.md`. #gap/unsourced

- **TERC expression regulation.** Why TERC is ubiquitously expressed while TERT is epigenetically silenced in somatic cells is not mechanistically explained here. Whether TERC levels change with age in specific tissues (independent of TERT) is not well characterized. #gap/no-mechanism

- **Stub pages needed.** [[dkc1]], [[telomerase-pathway]], [[dyskeratosis-congenita]], [[tcab1]] are referenced here but not yet seeded as atomic entity pages; [[tert]] and [[shelterin]] are already seeded.

- **Theimer 2005 paper topic note.** The seeder brief cited "Theimer 2005 Mol Cell (CR4/CR5 structure)" — corrected by the seeder and confirmed by the verifier against the PDF: the actual Theimer 2005 Mol Cell paper (doi:10.1016/j.molcel.2005.01.017) describes the **pseudoknot** tertiary structure (triple helix at the helical junction), not CR4/CR5. The CR4/CR5 structural paper is Leeper & Varani 2005 (*RNA* 11:394–403; doi:10.1261/rna.7222505), which covers the J6 internal loop of the CR4-CR5 activation domain. Both papers are cited here by their correct topic. Confirmed against PDFs during 2026-05-07 verification pass.

- **RNAcentral accession.** An `rnacentral:` field is not in the CLAUDE.md schema; if added in future, the appropriate accession for human TERC is URS000075C808 (requires independent verification; prior attempt returned unexpected length — see prior verified page note). Use NR_001566.3 (RefSeq) as the stable identifier in the interim.

---

## Cross-references

- [[tert]] (verified 2026-05-05) — catalytic partner; full holoenzyme table and aging-intervention landscape there
- [[telomere-attrition]] — parent hallmark; TERC-knockout phenotype and disease genetics are primary evidence
- [[cellular-senescence]] — downstream consequence of TERC loss via uncapped telomeres → DDR → p53/p21 axis
- [[telomerase-pathway]] (implicit stub) — pathway-level context for telomere synthesis cycle
- [[dkc1]] (implicit stub) — dyskerin; H/ACA RNP stabilizer of TERC; DKC1 mutations → X-linked DKC via TERC depletion
- [[shelterin]] (verified; present) — recruits telomerase to telomere via TPP1-TERT-CTE interface
- [[dyskeratosis-congenita]] (implicit stub) — TERC haploinsufficiency disease
- [[dna-damage-response]] — activated by uncapped telomeres in *Terc* −/− mice
- [[p53-pathway]] — downstream of DDR; mediates senescence/apoptosis in telomere-dysfunctional cells
- [[genomic-instability]] — end-to-end chromosome fusions from dysfunctional telomeres

---

## Footnotes

[^feng1995]: doi:10.1126/science.7544491 · Feng J, Funk WD, Wang SS, Weinrich SL, Avilion AA, Chiu CP, Adams RR, Chang E, Allsopp RC, Yu J et al. · *Science* 1995 · 269(5228):1236–1241 · in-vitro (biochemical purification + reconstitution) · model: human telomerase-active cell extracts; rabbit reticulocyte lysate reconstitution · identified and cloned the 451-nt RNA template component of human telomerase; demonstrated RNase sensitivity; established TERC as H/ACA-class RNA · citation count ~2245 (OpenAlex) · archive: closed-access; no local PDF #gap/no-fulltext-access

[^blasco1997]: doi:10.1016/s0092-8674(01)80006-4 · Blasco MA, Lee HW, Hande MP, Samper E, Lansdorp PM, DePinho RA, Greider CW · *Cell* 1997 · 91(1):25–34 · in-vitro + in-vivo (MEF cultures, nude mouse tumor assays) · model: *Terc* −/− Mus musculus (WW6 ES cells backcrossed to C57BL/6J; mixed 129 × C57BL/6 background); G1–G6 intercrossed generations · telomere shortening at 4.8 ± 2.4 kb per generation (quantitative FISH); G4+ metaphases show aneuploidy, end-to-end fusions, chromosomes lacking detectable TTAGGG; G1–G6 mice viable and fertile; telomerase-null cells can be immortalized and form tumors in nude mice; foundational *Terc* −/− model paper — **note**: this paper did not characterize in vivo multi-tissue phenotypes (testicular atrophy, marrow failure, gut atrophy); those are from Lee 1998 (*Nature* 392:569) and Rudolph 1999 (*Cell* 96:701) · citation count ~2101 (OpenAlex) · archive: local PDF available

[^mitchell1999]: doi:10.1038/990141 · Mitchell JR, Wood E, Collins K · *Nature* 1999 · 402(6761):551–555 · in-vitro + human genetics · model: X-linked DKC patient cell lines; in-vitro reconstitution of telomerase RNP · demonstrated DKC1/dyskerin is integral to the telomerase RNP; DKC1-mutant cells have reduced TERC steady-state levels and telomerase activity; established H/ACA RNP stabilization as required for TERC function · citation count ~1142 (OpenAlex) · archive: closed-access; no local PDF #gap/no-fulltext-access

[^vulliamy2001]: doi:10.1038/35096585 · Vulliamy T, Marrone A, Goldman F, Dearlove A, Bessler M, Mason PJ, Dokal I · *Nature* 2001 · 413(6854):432–435 · observational (human genetics; pedigree) · model: three AD-DKC families; heterozygous TERC mutations (821-bp deletion, C408G, GC→AG at nt 107–108) · first demonstration that TERC mutations cause human disease; haploinsufficiency mechanism; genetic anticipation; telomere lengths significantly shorter in affected members (P<0.001) · archive: local PDF available at 

[^armanios2007]: doi:10.1056/NEJMoa066157 · Armanios MY, Chen JJ-L, Cogan JD et al. · *N Engl J Med* 2007 · 356:1317–1326 · observational (human genetics; familial IPF cohort) · model: 73 probands from Vanderbilt Familial Pulmonary Fibrosis Registry; 5 TERT + 1 TERC heterozygous mutations · telomere-maintenance gene mutations in ~8% of familial IPF; establishes telomere-attrition as driver of pulmonary fibrosis; TERC/TERT carrier telomeres below 10th percentile of age-matched controls (P=0.018) · archive: local PDF available at 

[^theimer2005]: doi:10.1016/j.molcel.2005.01.017 · Theimer CA, Blois CA, Feigon J · *Molecular Cell* 2005 · 17(5):671–682 · in-vitro (NMR structural biology) · model: human TERC pseudoknot (47-nt ΔU177 construct, nt 93–121 + 170–184; not CR4/CR5 — see Limitations section on page) · solved solution structure of the hTR pseudoknot; revealed a conserved triple-helix network surrounding the helical junction (involving both loops and both stems) as essential for telomerase activity; thermodynamic stability strongly correlates with telomerase activity but dimerization potential does not; DC-linked mutations and variants that disrupt the triple-helix contacts reduce activity · citation count ~330 (OpenAlex) · archive: local PDF available

[^theimer2003]: doi:10.1073/pnas.242720799 · Theimer CA, Finger LD, Trantirek L, Feigon J · *PNAS* 2003 · 100(2):449–454 · in-vitro (NMR thermodynamics) · model: human TERC pseudoknot and CR7 domain fragments with DC-linked mutations (GC→AG double substitution in stem 2 / j2b3-loop region; C408G in CR7) · showed that the DC pseudoknot mutation shifts the pseudoknot–hairpin conformational equilibrium toward the hairpin (~50% hairpin in mutant vs ~5% in wild-type); CR7 DC mutation destabilizes the CR7 hairpin and alters upper-stem base pairing; proposes that this conformational equilibrium shift (not simply TERC level reduction) is the structural mechanism for pseudoknot-region DC mutations — paper characterizes structure/thermodynamics, references prior functional studies (Autexier 1996; Tesmer 1999) for the activity-reduction data · archive: local PDF available

[^leeper2005]: doi:10.1261/rna.7222505 · Leeper TC, Varani G · *RNA* 2005 · 11(4):394–403 · in-vitro (NMR structural biology) · model: human TERC CR4-CR5 activation domain fragment (J6 internal loop region, 32 nt; residues ~257–299 of hTR) · solved NMR structure of the J6 asymmetric internal loop within CR4-CR5; the J6 loop introduces a structural twist that may position the entire CR4-CR5 domain into the TERT catalytic site; deletion of J6 abolishes telomerase activity and TERT binding; structure rationalizes how a small internal loop controls the entire activation domain's function · archive: local PDF available
