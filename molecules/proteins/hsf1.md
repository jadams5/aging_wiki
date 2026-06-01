---
type: protein
aliases: [heat-shock factor 1, HSTF1, HSF-1]
uniprot: Q00613
ncbi-gene: 3297
hgnc: 5224
ensembl: ENSG00000185122
mouse-ortholog: Hsf1
genage-id: null
key-domains: [DNA-binding, leucine-zipper-oligomerization, regulatory, transactivation]
key-ptms: [Ser303-phosphorylation, Ser307-phosphorylation, Ser121-phosphorylation, Lys80-acetylation, Ser326-phosphorylation]
pathways: ["[[heat-shock-response]]"]
hallmarks: ["[[loss-of-proteostasis]]"]
known-interactors: ["[[hsp70]]", "[[hsp90]]", "[[hsp40]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[loss-of-proteostasis]]"]
causes: ["[[hsp70]]", "[[heat-shock-response]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Anckar & Sistonen 2011 (Annu Rev Biochem) PDF verified end-to-end for domain architecture, PTMs, activation cycle, aging-decline section, and IIS-longevity section. Morley & Morimoto 2004 (Mol Biol Cell) PDF verified end-to-end for lifespan quantitatives. Mendillo et al. 2012 (Cell) PDF verified for cancer-HSF1 program claims. Hsu et al. 2003 (Science) is not_oa — verified against abstract only; key claim cross-checked via Anckar 2011 characterization and Morley 2004 data. Canonical-database identity fields (UniProt Q00613, NCBI Gene 3297, HGNC 5224, Ensembl ENSG00000185122) not independently re-verified against databases."
---

# HSF1 (Heat-Shock Factor 1)

The master transcriptional activator of the cellular heat-shock response — a trimeric transcription factor that senses proteotoxic stress, translocates to the nucleus, and drives coordinated induction of the [[hsp70]], [[hsp90]], and [[hsp40]] chaperone families. Centrally relevant to aging via its role in [[loss-of-proteostasis]]: HSF1 activity declines with organismal age, compromising the cell's ability to clear misfolded proteins, and HSF1 is required for lifespan extension by reduced insulin/IGF-1 signaling in *C. elegans*.

## Identity

- **UniProt:** Q00613 (HSF1_HUMAN) — Swiss-Prot (manually curated) entry
- **NCBI Gene:** 3297
- **HGNC symbol:** HSF1
- **Ensembl:** ENSG00000185122
- **Mouse ortholog:** Hsf1 (one-to-one; highly conserved)
- **Mass / length:** ~57 kDa; 529 amino acids (canonical human isoform 1) [^anckar2011]

## Domain architecture

HSF1 is organized into four functionally distinct regions [^anckar2011]:

| Domain | Residues (approx.) | Function |
|---|---|---|
| DNA-binding domain (DBD) | 15–110 | Sequence-specific binding to heat-shock elements (HSEs) |
| Leucine-zipper oligomerization (HR-A/B) | 130–221 | Coiled-coil; mediates trimerization upon stress activation |
| Regulatory domain | 203–383 | Intrinsically disordered; major site of PTMs; integrates stress signals |
| Transactivation domain (TAD) | 410–529 | Contacts Mediator/TBP; drives pol II recruitment |

A second coiled-coil region (HR-C) near the C-terminus maintains the monomer in an inactive conformation by intramolecular interaction with HR-A/B; stress-induced unfolding of HR-C releases the oligomerization interface [^anckar2011].

## Function — activation cycle

Under basal (non-stress) conditions, HSF1 is held as a latent monomer primarily in the nucleus — it carries a potent bipartite nuclear localization signal and the majority of HSF1 is nuclear before and after heat stress — through association with the [[hsp70]] / [[hsp90]] chaperone complex [^anckar2011]. This constitutes a **negative feedback loop**: chaperones that HSF1 itself induces compete for binding and suppress HSF1 activity when proteostatic load is low.

Upon proteotoxic stress (heat, oxidative damage, proteasome inhibition, misfolded-protein accumulation), titration of [[hsp70]] and [[hsp90]] onto denatured client proteins releases HSF1. The freed HSF1 then:

1. Trimerizes via HR-A/B coiled-coil contacts.
2. Undergoes activating PTMs — most notably Ser326 phosphorylation (activating) and suppressive Ser303/Ser307 phosphorylation (fine-tuned by ERK1/2, GSK-3β per Anckar 2011 Table 1).
3. Accumulates in the nucleus (HSF1 is already predominantly nuclear at basal conditions; heat shock inhibits its cytoplasmic export, increasing nuclear concentration further) [^anckar2011].
4. Binds **heat-shock elements (HSEs)** — inverted repeats of the sequence nGAAn arranged in at least three adjacent units — in the promoters of chaperone genes [^anckar2011].
5. Drives transcription of [[hsp70]] (HSPA1A/HSPA1B), HSPA6, HSPC (Hsp90), DNAJB1 (Hsp40), HSPB1 (Hsp27), and several hundred additional stress-responsive targets.

Chaperone re-accumulation then re-engages HSF1 and terminates the response.

## Aging relevance

### HSF1 activity declines with age

HSF1 DNA-binding activity, trimer formation, and transcriptional induction of heat-shock genes all decline measurably in aged tissues compared with young counterparts, both in rodents and in human cell models [^anckar2011]. The mechanistic basis is not fully resolved but likely involves age-associated increases in constitutive HSF1 phosphorylation (Ser303/Ser307) that bias toward the suppressed state, as well as general transcriptional attenuation. #gap/no-mechanism

### HSF1 is required for IIS-pathway lifespan extension in *C. elegans*

In the canonical model for HSF1's role in longevity: DAF-16 (the FOXO transcription factor activated by reduced insulin/IGF-1 signaling) drives lifespan extension only when HSF1 is present. RNAi knockdown of *hsf-1* fully suppresses the long-lived phenotype of *daf-2* mutants (reduced IIS), placing HSF1 genetically downstream of or parallel to DAF-16 in the lifespan-extension pathway [^hsu2003].

Specifically, Hsu et al. 2003 showed that *hsf-1(RNAi)* reduced mean lifespan by ~30–40% in WT worms and completely abolished the lifespan extension of *daf-2(e1370)* mutants [^hsu2003]. (Morley & Morimoto 2004, using adult-stage RNAi initiation, found a smaller ~23% reduction in wild-type mean lifespan — N2;vector 23.2 d vs N2;*hsf-1(RNAi)* 17.9 d at 20°C — consistent with the difference reflecting developmental vs adult RNAi timing [^morley2004].) Morley & Morimoto 2004 further demonstrated that HSF1 overexpression (ubiquitous, *let-858* promoter) extends worm lifespan by 22% (16.8 ± 0.5 d vs 13.8 ± 0.5 d control at 25°C, p<0.001) and that HSF1 + DAF-16 act together to maintain protein-folding quality with age [^morley2004].

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | HSF1 trimerization and HSE-binding mechanism identical; human cells reconstitute worm HSF1 function |
| Phenotype conserved in humans? | partial | HSF1 activity correlates with proteostasis capacity in human aging; no direct lifespan data |
| Replicated in humans? | no | Worm IIS-HSF1 lifespan extension not directly tested in humans #gap/needs-human-replication |

### HSF1 haploinsufficiency in mice

*Hsf1*+/- mice display accelerated age-related decline in specific tissues including lens and nervous system, and reduced thermotolerance, consistent with a dosage-sensitive role in maintaining proteostasis under stress. Full *Hsf1*-/- mice are viable but infertile and highly sensitized to proteotoxic challenge. #gap/needs-replication — mouse haploinsufficiency data comes from limited studies; aging phenotype characterization is incomplete.

## Activation stimuli

- **Heat** — classical inducer; threshold ~42°C in human cells (HSF1 trimerization occurs within minutes)
- **Proteotoxic chemicals** — proteasome inhibitors (MG-132, bortezomib), heavy metals, arsenite
- **Oxidative stress** — glutathione depletion, H2O2 (partially; synergizes with heat)
- **[[heat-exposure]]** — sauna (80–100°C air, ~38–40°C core) transiently activates HSF1 in peripheral blood mononuclear cells; magnitude of induction modest versus in-vitro heat shock #gap/dose-response-unclear
- **[[exercise]]** — strenuous exercise modestly activates HSF1 in skeletal muscle; effect smaller than thermal stress and context-dependent #gap/needs-replication

## Therapeutic angles

### Direct HSF1 activators
- **HSF1A** — small molecule identified in a yeast screen; binds TRiC/CCT chaperonin, indirectly releasing HSF1 from suppression. Active in cell-culture and invertebrate models; no human data. #gap/needs-human-replication #gap/unsourced — attribution to Anckar 2011 removed; Anckar 2011 does not describe HSF1A. Original source is Neef et al. 2010 (*ACS Chem. Biol.*); wiki footnote needs replacement citation.
- **NXP800** — HSP90 inhibitor / HSF1 modulator; entered Phase 1 in ovarian cancer (as HSF1 pathway suppressor in cancer context — note the paradox below). #gap/needs-canonical-id for NXP800 clinical trial NCT identifier.

### Indirect activation
- **Heat exposure / whole-body hyperthermia** — the most validated route to HSF1 activation in humans; see [[heat-exposure]]. Physiological heat stress (sauna) is well-tolerated and activates the heat-shock response broadly.
- **Natural products with HSF1-activating activity** — celastrol (from *Tripterygium wilfordii*) and withaferin-A (from ashwagandha) activate HSF1 in cell models at low micromolar concentrations, likely via induction of proteotoxic stress rather than direct HSF1 binding. Human bioavailability and safety at effective doses unclear. #gap/dose-response-unclear

## Cancer connection — therapeutic paradox

HSF1 is substantially overexpressed and constitutively active in many human cancer types, where it drives a transcriptional program that supports cancer-cell proteostasis, proliferation, and survival in the tumor microenvironment — the concept of "non-oncogene addiction" [^mendillo2012]. Importantly, this cancer-associated HSF1 program is **distinct from the classical heat-shock response**: it involves a different set of target genes and operates independently of acute proteotoxic stress [^mendillo2012].

This creates a therapeutic paradox for aging: pharmacological activation of HSF1 to support proteostasis in aging tissues could, in principle, accelerate or support oncogenic contexts. Conversely, several cancer programs target HSF1 for inhibition. Any HSF1-activating anti-aging intervention must be evaluated for cancer risk, particularly in older individuals with accumulating somatic mutations. #gap/contradictory-evidence

## Cross-references

- [[heat-shock-response]] — the pathway HSF1 orchestrates (R25+ implicit stub)
- [[hsp70]] — primary transcriptional target and negative regulator of HSF1
- [[loss-of-proteostasis]] — the hallmark of aging most directly connected to HSF1 decline
- [[heat-exposure]] — lifestyle intervention that activates HSF1 (R23c page)
- [[exercise]] — secondary activator of HSF1 in muscle

## Limitations and gaps

- **HSF1 activity decline with age — mechanism unclear.** The age-associated shift in HSF1 PTM landscape has been documented but the upstream drivers (kinase/phosphatase changes, redox shifts) are not well resolved. #gap/no-mechanism
- **Human lifespan data absent.** All lifespan-extension data is from *C. elegans* (and partly yeast/fly). Mouse data covers tissue-level proteostasis decline but no lifespan extension by HSF1 overexpression in mice has been robustly established. #gap/needs-human-replication
- **Druggability tier not assessed.** Open Targets Platform entry not checked for HSF1 druggability score. #gap/needs-canonical-id
- **GTEx aging correlation not populated.** Age-stratified expression data from GTEx not yet pulled for this page. See `sops/finding-tissue-expression.md`.
- **Cancer-aging tradeoff unquantified.** The magnitude of cancer risk increase from HSF1 activation at aging-relevant doses is unknown. #gap/no-mechanism

## Footnotes

[^anckar2011]: doi:10.1146/annurev-biochem-060809-095203 · Anckar J & Sistonen L · *Annu Rev Biochem* 2011;80:1089–1115 · review · model: mechanistic review of HSF1 regulation; locally available PDF

[^hsu2003]: doi:10.1126/science.1083701 · Hsu AL, Murphy CT, Kenyon C · *Science* 2003;300:1142–1145 · in-vivo · model: *C. elegans daf-2(e1370)* + *hsf-1(RNAi)*; n not specified per group; HSF-1 required for DAF-16-mediated lifespan extension; lifespan reduction by hsf-1 RNAi characterized as 30–40% per Anckar 2011 review summary · **PDF not available (not_oa); verified via abstract + Anckar 2011 characterization only** #gap/no-fulltext-access

[^morley2004]: doi:10.1091/mbc.e03-07-0532 · Morley JF, Morimoto RI · *Mol Biol Cell* 2004;15:657–664 · in-vivo · model: *C. elegans*; HSF1 overexpression extends lifespan; HSF1 + DAF-16 maintain proteostasis with age

[^mendillo2012]: doi:10.1016/j.cell.2012.06.031 · Mendillo ML et al. · *Cell* 2012;150:549–562 · in-vitro / clinical genomics · model: human cancer cell lines + primary tumor expression data; HSF1 drives cancer-specific transcriptional program distinct from classical heat shock
