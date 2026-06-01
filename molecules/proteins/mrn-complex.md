---
type: protein
aliases: [MRN complex, MRE11-RAD50-NBS1, MRE11/RAD50/NBS1, M/R/N complex, MRN heterotrimer]
uniprot: P49959
ncbi-gene: 4361
hgnc: 7230
ensembl: ENSG00000020922
complex-subunits: [P49959, Q92878, O60934]
genage-id: null
pathways: ["[[dna-damage-response]]", "[[homologous-recombination]]", "[[non-homologous-end-joining]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[genomic-instability]]", "[[cellular-senescence]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Carney 1998 (Cell), Hopfner 2002 (Nature), Stewart 1999 (Cell), Paull & Gellert 1998 (Mol Cell), Paull & Gellert 1999 (Genes Dev), and Lavin 2015 (Biomolecules) all verified against local PDFs. Lee & Paull 2005 (Science) is closed-access (not_oa, no PMC deposit); ATM-activation mechanism claims attributed to this source cross-checked against the verified [[atm]] page (Bakkenist 2003) and Lavin 2015 review — consistent but not independently confirmed against the Lee & Paull 2005 full text. Petrini 1995 (Genomics) is closed-access (not_oa); cloning-level claims untestable from full text. UniProt accessions P49959, Q92878, O60934 confirmed via REST API. NCBI Gene IDs 4361 (MRE11), 10111 (RAD50), 4683 (NBN) confirmed via NCBI efetch. GenAge null confirmed — no human GenAge entries for MRE11, RAD50, or NBN. gap/needs-canonical-id tags for NCBI Gene IDs removed (now verified). Hopfner 2002 PDF path corrected in footnote. [2026-05-12] RAD50 HGNC corrected 9817→9816 (confirmed via UniProt Q92878 REST + HGNC REST API). Chen 2025 (Science, doi:10.1126/science.adp5056) supplement added: FANCI–RAD50 interaction section; cited from abstract only (#gap/no-fulltext-access); mechanism ambiguity flagged (#gap/needs-mechanism-clarity); human conservation flagged (#gap/needs-human-replication)."
---

# MRN complex (MRE11–RAD50–NBS1)

The MRN complex is the primary sensor of DNA double-strand breaks (DSBs) in eukaryotic cells. It is a heterotrimer of three constitutively associated proteins — **MRE11**, **RAD50**, and **NBS1** (also called Nibrin or NBN) — that together bind free DNA ends, hold the broken ends in proximity, and recruit and activate the master DDR kinase [[atm]]. In irradiated human fibroblasts, hMRE11 (and by extension the full complex) becomes associated with DSBs within 30 min of break formation [^carney1998]. MRN is also the initiating nuclease for DSB end resection, generating the 3' single-stranded DNA (ssDNA) overhangs that commit a break to [[homologous-recombination]] repair. Loss-of-function mutations in any subunit cause severe human syndromes combining immunodeficiency, cancer predisposition, and neurological deterioration — phenotypic mirrors of accelerated-aging DDR failure.

## Subunit identity

| Field | MRE11 | RAD50 | NBS1 (Nibrin) |
|---|---|---|---|
| Gene symbol | MRE11 | RAD50 | NBN |
| UniProt | P49959 | Q92878 | O60934 |
| NCBI Gene | 4361 | 10111 | 4683 |
| HGNC | 7230 | 9816 | 7652 |
| Length | 708 aa | 1,312 aa | 754 aa |
| Mouse ortholog | Mre11 | Rad50 | Nbn |
| Function class | Nuclease + end-tethering | ABC ATPase + structural scaffold | Scaffolding + ATM recruitment |

**Naming note:** Per CLAUDE.md complex-page convention, the primary catalytic subunit UniProt (P49959, MRE11) anchors the `uniprot:` field; all three subunit accessions are listed in `complex-subunits:`. The human gene was isolated in 1995 as the homologue of yeast MRE11 (meiotic recombination 11) [^petrini1995]. NBS1 protein (also called p95) was identified by co-purification with MRE11/RAD50 and found to be the product of the NBS gene [^carney1998].

## Complex architecture

The functional core is an (MRE11)₂–(RAD50)₂–(NBS1)₂ complex (approximate 2:2:2 stoichiometry), organized as follows:

- **MRE11 dimer core:** Two MRE11 subunits form a constitutive dimer via a C-terminal dimerization domain. The N-terminal phosphodiesterase-like fold harbors the nuclease active site (Mn²⁺-dependent); the DNA-binding "cap" domain and DNA-binding domain (DBD) contribute to DNA end recognition.
- **RAD50 coiled-coil arms:** Each RAD50 subunit is a rod-shaped molecule with an N-terminal Walker A and C-terminal Walker B motif that fold in *trans* to form an ABC-type ATPase head, flanked by extended antiparallel coiled-coil domains (150–600 Å per arm depending on species and structural method) that protrude away from the core [^hopfner2002]. At the apex of each coiled-coil pair is a conserved Cys-X-X-Cys **zinc-hook** motif [^hopfner2002].
- **Zinc-hook bridging:** Pairs of CxxC motifs from opposing RAD50 coiled-coil tips coordinate a single Zn²⁺ ion, forming an interlocking hook that can bridge two separate MRN molecules across a DSB — creating a flexible bridge up to ~1,200 Å in length as measured by electron microscopy of human Mre11 complexes [^hopfner2002]. Individual cysteine mutations in the yeast scRad50 CXXC motif confer radiation sensitivity: the C1G hook mutant (which retains Mre11 binding) showed a 5-fold increase in radiation sensitivity at 300 Gy, while the C2G mutant (which disrupts Mre11 binding entirely) showed a 95-fold increase at 300 Gy relative to wild-type [^hopfner2002].
- **NBS1 C-terminal interaction:** NBS1 contacts MRE11 through a C-terminal MRE11-binding domain and interacts with ATM through a distinct C-terminal FXF/Y motif, physically tethering ATM to the break-bound complex [^leepaull2005].
- **NBS1 N-terminal domains:** An FHA domain and two tandem BRCT domains mediate NBS1's recognition of phosphorylated signaling proteins (e.g., MDC1-pSer, which docks at the BRCT repeats to facilitate foci spreading) and contribute to DSB focus formation.

## DSB sensing and ATM activation mechanism

MRN-mediated ATM activation is the foundational event of the mammalian DDR. The mechanism involves direct physical recruitment and allosteric stimulation [^leepaull2005]:

**Step 1 — DSB detection:** MRN binds free DNA ends rapidly after DSB formation (hMRE11 associates with DSBs within 30 min of break formation in irradiated human fibroblasts [^carney1998]). MRE11's DNA-binding domains and RAD50's ATPase-associated DNA-binding activity cooperate to tether to broken ends; the complex can load onto blunt ends, 5' or 3' overhangs, and hairpin structures [^paullgellert1998].

**Step 2 — ATM recruitment:** NBS1's C-terminal FXF/Y motif directly contacts the ATM C-terminus (FATC domain region). MRN thereby tethers inactive ATM dimers to the DSB site [^leepaull2005].

**Step 3 — ATM dimer dissociation and activation:** In solution, ATM exists as an inactive homodimer. At the DSB, NBS1-tethered ATM undergoes monomer dissociation coincident with autophosphorylation at **Ser1981** — the canonical activation marker. MRN-stimulated DNA unwinding activity is required for full ATM stimulation in vitro; purified MRN complex activates ATM in the presence of dsDNA but not ssDNA [^leepaull2005].

**Step 4 — ATM substrate phosphorylation:** Active ATM monomers phosphorylate >700 substrates, including **H2AX** (at Ser139 → γH2AX), **CHK2**, **p53**, **BRCA1**, **NBS1 itself** (Ser343), **MRE11** (multiple sites), and **RAD50** [^lavin2015]. These phosphorylation events amplify the DSB signal, halt cell-cycle progression, and initiate repair-pathway choice.

The ATM-activation mechanism is documented in greater detail on the [[atm]] page, which is verified.

| Dimension | Status |
|---|---|
| MRN-ATM activation pathway conserved in humans? | yes — confirmed biochemically with human proteins [^leepaull2005] |
| Pathway conserved in mouse? | yes — one-to-one orthologs; NBS mice phenocopy NBS patients |
| Replicated in humans? | yes — Lee & Paull 2005 used recombinant human proteins [^leepaull2005] |

## End resection and HR initiation

When DSBs occur in S/G2 phase with a homologous template available, MRN initiates the end-resection program that licenses [[homologous-recombination]] [^paullgellert1998]:

**MRE11 nuclease activities:** MRE11 harbors both a 3'→5' exonuclease and an endonuclease activity, both Mn²⁺-dependent [^paullgellert1998]. The exonuclease degrades from free 3' ends in the 3'→5' direction; when Mre11 is in complex with Rad50 this exonuclease activity is increased 3- to 4-fold [^paullgellert1998]. The endonuclease cleaves DNA hairpin loops and mismatched structures near DNA ends, creating an entry point for bidirectional resection. The ~20 nt internal incision model for protein-adduct bypass comes from later structural work; Paull & Gellert 1998 established endonuclease activity on hairpin structures and 3' overhangs [^paullgellert1998].

**NBS1 stimulation of MRE11/RAD50:** NBS1 potentiates the ATP-driven DNA unwinding activity and dramatically increases the efficiency of fully-paired hairpin cleavage (at least 60-fold more active than Mre11 alone and at least 25-fold more active than Mre11/Rad50) [^paull1999genes]. NBS1 also induces a switch in endonuclease specificity on non-hairpin DNA ends — the M/R/N triple complex cleaves a 3'-protruding strand at a double-strand/single-strand transition in an ATP-dependent manner that M/R alone cannot perform [^paull1999genes]. Rad50 is responsible for ATP binding in the complex; these ATP-dependent activities are expressed only with Nbs1 present [^paull1999genes].

**Bidirectional resection from the incision point:**
- **3'→5' (toward break):** MRE11 exonuclease resects from the internal incision toward the DNA end, removing any protein adducts (e.g., topoisomerase cleavage complexes, DSB-end blocking lesions).
- **5'→3' (away from break):** The long-range resection nucleases **EXO1** and **DNA2** (in complex with BLM/WRN helicase) extend resection in the 5'→3' direction, generating extended 3' ssDNA tails of hundreds to thousands of nucleotides.

**Downstream processing:** The 3' ssDNA tails are rapidly coated by [[rpa]], which prevents secondary structure and signals ATR/ATRIP kinase. RPA is subsequently displaced by RAD51 (loaded by [[brca2]]) to form the HR presynaptic filament for template search.

## Human disease phenotypes

### Nijmegen breakage syndrome (NBS) — NBS1 hypomorphism

Mutations in NBS1 (chromosome 8q21.3) cause **Nijmegen breakage syndrome**, an autosomal recessive disorder characterized by [^carney1998]:

- Microcephaly
- Immunodeficiency
- Increased incidence of hematopoietic malignancy (lymphoid malignancies predominate)
- Radiation hypersensitivity (cell cycle checkpoint defects; NBS cells fail to suppress DNA synthesis in response to ionizing radiation)
- Chromosome instability (spontaneous chromosomal rearrangements)

Carney et al. identified p95 (NBS1) as a component of the hMRE11/hRAD50 complex and showed it is **absent** in all five NBS patient cell lines tested by Western blot, while hMRE11 and hRAD50 levels remained normal, establishing NBS as a direct consequence of MRN disruption specifically through p95 deficiency [^carney1998]. The syndrome is **not embryonic lethal**, consistent with NBS1 mutations being hypomorphic (partial-loss-of-function) rather than null — p95-deficient cells retain sufficient hMRE11/hRAD50 to support cell viability [^carney1998].

| Dimension | Status |
|---|---|
| NBS phenotype models human MRN dysfunction? | yes — established in patient cells and NBS mouse models |
| ATM-pathway overlap? | yes — A-T and NBS share immunodeficiency and radiosensitivity, reflecting convergent ATM activation failure |

### Ataxia-Telangiectasia-Like Disorder (ATLD) — MRE11 hypomorphism

Hypomorphic mutations in MRE11 (chromosome 11q21) cause **ATLD**, a syndrome resembling ataxia-telangiectasia (A-T) with progressive cerebellar degeneration but distinct in lacking ocular telangiectasia, immunodeficiency, and (in the patients reported) cancer [^stewart1999]. Four patients from two unrelated families were identified: ATLD1/2 (cousins, family 1, Pakistan; homozygous C→T transition at nt1897 creating a premature stop codon truncating MRE11 at residue 633) and ATLD3/4 (brothers, family 2; heterozygous A→G missense mutation at nt350, N117S). Patient cells demonstrate:

- Radioresistant DNA synthesis (failure to suppress DNA synthesis after irradiation — identical to A-T and NBS)
- Defective ATM-dependent stress-activated signaling (JNK pathway impaired; p53 response relatively preserved compared to A-T)
- Near-complete abrogation of ionizing radiation-induced hMRE11/Nbs1 nuclear foci
- Chromosome instability

Both hMRE11 alleles are hypomorphic in all ATLD patients; mutant MRE11 proteins retain partial ability to associate with Rad50 and Nbs1 [^stewart1999]. Null MRE11 and null mRAD50 are both embryonic lethal in mice; only hypomorphic alleles survive to produce ATLD [^stewart1999].

### Complete MRN subunit loss

Homozygous null mutations in MRE11, RAD50, or NBS1 are all embryonic lethal in mice, demonstrating the complex is essential for mammalian development and cannot be compensated by other repair pathways. #gap/needs-human-replication — no human null individuals for any MRN subunit are known.

## Aging relevance

### MRN as the sensor upstream of all DSB-driven aging

Because MRN is the first responder to every DSB, its activity sits directly upstream of:
- **ATM activation** → [[p53-pathway]] → apoptosis or senescence induction
- **HR pathway initiation** → faithful repair in S/G2 (protecting replicating cells)
- **γH2AX foci** → the measurable biomarker of DSB load used to track aging-related genomic damage accumulation

The age-dependent accumulation of unrepaired DSBs (documented across tissues in aged rodents and humans) implies that MRN sensing and/or downstream repair becomes rate-limiting with age — though whether the MRN complex itself declines in activity with age in primary human cells has not been directly measured. #gap/needs-replication

### ATM-PARP1-mitochondrial axis

ATM activation by MRN-sensed DSBs feeds into the NAD⁺-PARP1 axis documented on the [[base-excision-repair]] page. In aged cells, escalating DSB load drives persistent ATM activation, which may contribute to mitochondrial dysfunction and NAD⁺ depletion. This links MRN function indirectly to [[mitochondrial-dysfunction]]. #gap/no-mechanism — the specific contribution of DSB-triggered vs. BER-triggered PARP1 activity to the aging NAD⁺ deficit is unresolved.

### NBS1-GWAS signal for longevity traits

#gap/needs-replication — No strong Mendelian randomization or GWAS signal for MRN subunits in human longevity is established in the current literature to the seeder's knowledge. The MR field has focused on ATM and BRCA1/2 for cancer-aging interactions but not on MRN subunits per se. This field is `not-tested` in `mr-causal-evidence`.

## Key interactions

- **[[atm]]:** Primary effector; NBS1 C-terminus directly contacts ATM C-terminus (FATC domain region); MRN is required for ATM activation at DSBs [^leepaull2005].
- **MDC1:** Binds NBS1 BRCT repeats after ATM phosphorylates H2AX; mediates foci spreading and ATM retention at breaks.
- **[[rpa]]:** Coats the 3' ssDNA tails generated by MRN-initiated resection; signals ATR/ATRIP.
- **[[brca2]]:** Loads RAD51 onto RPA-coated ssDNA downstream of MRN-initiated resection.
- **[[p53]]:** ATM phosphorylates p53 at Ser15 in response to MRN-activated ATM, linking DSB sensing to p53-dependent senescence and apoptosis.
- **[[ku70-ku80]]:** Ku heterodimer competes with MRN at DSB ends; Ku-bound ends are shielded from resection and committed to NHEJ. The MRN vs. Ku competition partly determines HR vs. NHEJ pathway choice, regulated by cell-cycle phase and end structure.
- **[[cgas-sting]]:** Unrepaired DSB fragments — which accumulate when MRN-initiated repair fails — are a source of cytoplasmic DNA that activates cGAS-STING-driven [[sasp]] in senescent cells.
- **[[fanci]]:** A 2025 study in naked mole rats (NMRs) identified FANCI as a novel proximal regulator of RAD50 recruitment to DSB sites — see "FANCI–RAD50 interaction" below [^chen2025].

## FANCI–RAD50 interaction and upstream MRN recruitment regulation

Chen et al. 2025 (*Science*, doi:10.1126/science.adp5056) #gap/no-fulltext-access identified a novel regulatory axis upstream of MRN in naked mole rats: prolonged chromatin binding of [[cgas]] enhanced the interaction between repair factors [[fanci]] and RAD50, facilitating RAD50 recruitment to DSB sites and thereby potentiating [[homologous-recombination]] repair [^chen2025]. This finding adds a regulatory layer to MRN function not previously documented in this wiki.

**Context:** Canonically, MRN is treated as an autonomous DSB sensor with RAD50-mediated end-tethering as an intrinsic property. Chen 2025 implies that, at least in NMRs, RAD50's *loading* onto chromatin is subject to upstream regulation via a cGAS–FANCI axis. Whether [[fanci]] binds RAD50 directly, indirectly via the ID2 complex (FANCI–FANCD2), or through a scaffold mediated by chromatin-bound cGAS itself is not resolved from the abstract. #gap/needs-mechanism-clarity

**Caveats:** (1) The finding derives from a single non-human species (NMR, *Heterocephalus glaber*) under a specific NMR-cGAS overactivation context; extrapolation to canonical human DSB repair is uncertain. (2) FANCI is classically assigned to the Fanconi anemia pathway ([[trim41]], [[vcp]], and other FANCI regulators operate in that context); its interaction with RAD50 represents a potential cross-talk between FA and DDR pathways not previously documented here. (3) This study is cited from abstract only — full-text verification is blocked. See [[studies/chen-2025-nmr-cgas-hr-repair]] for the associated study page when available.

**Relevance to aging:** If the cGAS–FANCI–RAD50 axis is conserved in human cells, it would represent a novel point of age-related failure: the chronic cGAS activation documented in senescent and aged cells (via cytoplasmic chromatin fragments) could dysregulate RAD50 recruitment kinetics and alter MRN-mediated DSB sensing. #gap/needs-human-replication

## Pharmacology and druggability

**Druggability tier: 3** (predicted druggable; research-stage inhibitors exist, no clinical drug for any indication).

- **Mirin:** A small-molecule inhibitor of MRE11 3'→5' exonuclease activity (IC₅₀ ~10 µM in biochemical assays), widely used as a research tool to separate HR initiation from NHEJ. Not advanced to clinical development. #gap/unsourced — mirin's mechanism and IC₅₀ require primary pharmacology citation.
- **PFM01 / PFM03:** Developed as more selective MRE11 endonuclease vs. exonuclease inhibitors; research stage only.
- **Aging-context rationale:** Inhibiting MRN is not a viable aging intervention — the complex is a tumor suppressor and essential repair enzyme whose deficiency accelerates genomic instability. Therapeutic interest is the inverse: maintaining MRN function in aged tissues. Allosteric MRN activators or NBS1 stabilizers have not entered clinical development. #gap/no-mechanism

No approved drug targets MRN directly.

## Limitations and gaps

- `#gap/needs-replication` — Whether MRN complex activity or protein levels decline in aged primary human cells has not been directly measured. The functional decline of the DDR with age is established at the γH2AX accumulation level; MRN-specific contributions remain inferred.
- `#gap/needs-human-replication` — Complete MRN subunit knockout phenotypes are known only from mouse embryonic lethality; no human null individuals are known.
- `#gap/no-mechanism` — The precise structural mechanism by which MRN-tethered ATM undergoes monomer dissociation and Ser1981 autophosphorylation is not fully resolved (in contrast to the genetic and biochemical evidence for NBS1 requirement, which is established [^leepaull2005]).
- `#gap/no-mechanism` — Relative contribution of DSB-triggered vs. BER-triggered PARP1 activation to aging NAD⁺ depletion is unresolved.
- `#gap/unsourced` — Mirin IC₅₀ and pharmacological selectivity profile require primary citations.
- `#gap/no-fulltext-access` — Lee & Paull 2005 (doi:10.1126/science.1108297, PMID: 15790808) is closed-access with no PMC deposit; claims about NBS1's FXF/Y ATM-interaction motif and the reconstituted ATM activation assay details could not be verified against full text. Cross-checked via Lavin 2015 review and the verified [[atm]] page; consistent.
- `#gap/needs-canonical-id` — GenAge ID for MRE11, RAD50, and NBS1 human entries: confirmed null via HAGR GenAge database cross-check during verification pass (2026-05-07). Human MRE11, RAD50, and NBN have no GenAge entries; the yeast MRE11 (GenAge ID 855264) is not relevant to this human-focused page.
- `#gap/needs-mechanism-clarity` — Whether FANCI binds RAD50 directly, indirectly via the ID2 complex (FANCI–FANCD2), or via a scaffold mediated by chromatin-bound [[cgas]] is unresolved from Chen 2025 (abstract only; #gap/no-fulltext-access).
- `#gap/needs-human-replication` — The cGAS–FANCI–RAD50 axis documented by Chen 2025 was characterized in naked mole rats; conservation in human cells is untested.
- NCBI Gene IDs confirmed during verification: MRE11 = 4361 (confirmed Homo sapiens), RAD50 = 10111 (confirmed Homo sapiens), NBN = 4683 (confirmed Homo sapiens, gene description: "nibrin"). Gap tags removed.

## See also

- [[atm]] — verified; master DDR kinase directly activated by MRN; the MRN-ATM activation mechanism is described in further detail there
- [[dna-damage-response]] — pathway page encompassing the full DDR signaling network
- [[homologous-recombination]] — pathway initiated by MRN-mediated end resection
- [[non-homologous-end-joining]] — competing DSB repair pathway; inhibited by MRN resection activity
- [[ku70-ku80]] — verified; NHEJ sensor competing with MRN at DSB ends
- [[genomic-instability]] — hallmark; MRN is the primary sensor upstream of DSB-driven genomic instability accumulation
- [[cellular-senescence]] — downstream outcome when MRN-initiated repair fails or is overwhelmed
- [[p53-pathway]] — downstream of ATM activation; links DSB sensing to cell-fate decisions
- [[cgas-sting]] — innate-immune sensor of cytoplasmic DNA; activated by unrepaired DSB fragments downstream of MRN failure
- [[brca2]] — downstream of MRN resection; loads RAD51 onto ssDNA for HR template search
- [[rpa]] — coats ssDNA tails generated by MRN-initiated resection

## Footnotes

[^petrini1995]: doi:10.1006/geno.1995.1217 · Petrini JH, Walsh ME, DiMare C, Chen XN, Korenberg JR, Weaver DT · *Genomics* 1995 · in-vitro (cloning + characterization) · model: human MRE11 gene · not locally downloaded (not_oa)

[^carney1998]: doi:10.1016/s0092-8674(00)81175-7 · Carney JP, Maser RS, Olivares H, Davis EM, Le Beau M, Yates JR, Hays L, Morgan WF, Petrini JH · *Cell* 1998 · in-vitro + patient cells · model: NBS patient cell lines + purified complex · locally available: 

[^stewart1999]: doi:10.1016/s0092-8674(00)81547-0 · Stewart GS, Maser RS, Stankovic T, Bressan DA, Kaplan MI, Jaspers NG, Raams A, Byrd PJ, Petrini JH, Taylor AM · *Cell* 1999 · patient cells + in-vitro · model: ATLD patient cell lines (4 patients, 2 families) · locally available: 

[^leepaull2005]: doi:10.1126/science.1108297 · Lee JH, Paull TT · *Science* 2005 · in-vitro (reconstituted human proteins) · model: recombinant human MRN + ATM · PMID: 15790808 · **not locally verifiable — closed-access (not_oa), no PMC deposit** · ATM-activation mechanism claims cross-checked against [[atm]] (verified, Bakkenist 2003) and Lavin 2015 review; consistent but full-text not read #gap/no-fulltext-access

[^hopfner2002]: doi:10.1038/nature00922 · Hopfner KP, Craig L, Moncalian G, Zinkel RA, Usui T, Owen BAL, Karcher A, Henderson B, Bodmer JL, McMurray CT, Carney JP, Petrini JH, Tainer JA · *Nature* 2002 · in-vitro (crystal structure + yeast genetics) · model: Pyrococcus RAD50 zinc hook (2.2 Å crystal structure) + human/Pyrococcus EM + yeast C1G/C2G mutants · locally available: 

[^paullgellert1998]: doi:10.1016/s1097-2765(00)80097-0 · Paull TT, Gellert M · *Molecular Cell* 1998 · in-vitro (biochemical reconstitution) · model: purified human MRE11 + RAD50 (baculovirus-expressed; 1:1 molar ratio complex) · locally available: 

[^paull1999genes]: doi:10.1101/gad.13.10.1276 · Paull TT, Gellert M · *Genes & Development* 1999 · in-vitro (biochemical reconstitution) · model: purified human MRE11/RAD50/NBS1 triple complex (Sf9-expressed; gel-filtration purified to ~95% homogeneity) · locally available: 

[^lavin2015]: doi:10.3390/biom5042877 · Lavin MF, Kozlov S, Gatei M, Kijas AW · *Biomolecules* 2015 · review · model: human DDR (ATM-dependent phosphorylation of all three MRN members) · locally available: 

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · *Science* 2025 · doi:10.1126/science.adp5056 · PMID: 41066557 · in-vivo + molecular (naked mole rat) · model: NMR cGAS chromatin-binding and FANCI–RAD50 interaction at DSB sites · **#gap/no-fulltext-access** — cited from abstract only; full-text verification blocked
