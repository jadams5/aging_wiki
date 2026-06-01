---
type: protein
aliases: [RPA, replication protein A, RPA70, RPA1, RFA1_HUMAN, RPA heterotrimer]
uniprot: P27694
ncbi-gene: 6117
hgnc: 10289
ensembl: ENSG00000132383
genage-id: 67
complex-subunits: [P27694, P15927, P35244]
mouse-ortholog: Rpa1 (RPA70); Rpa2 (RPA32); Rpa3 (RPA14)
pathways: ["[[dna-damage-response]]", "[[homologous-recombination]]", "[[nucleotide-excision-repair]]", "[[non-homologous-end-joining]]"]
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[genomic-instability]]"]
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Bochkareva 2002 (structural/domain boundaries) and Toledo 2013 (RPA exhaustion model, cell lines) verified against local PDFs. Ashley 2014 (RPA32 phosphorylation sites) verified via PMC full text (PMC4135522). UniProt P27694/P15927/P35244, NCBI Gene 6117/6118/6119, and HGNC 10289/10290/10291 confirmed via REST API. GenAge HAGRID:67 for human RPA1 confirmed. Wold 1997 (closed-access, not_oa) and Zou & Elledge 2003 (closed-access, not_oa) not locally available — claims attributed to these sources are AI-extracted and tagged accordingly."
---

# RPA (Replication Protein A)

The master eukaryotic single-stranded DNA-binding protein — a constitutive heterotrimer that coats exposed ssDNA at replication forks, DSB repair intermediates, and NER incision gaps. RPA is the convergence point of DNA replication, homologous recombination, nucleotide excision repair, and ATR-mediated checkpoint activation. In aging biology it is relevant primarily through two routes: (1) its function in the high-fidelity [[homologous-recombination]] pathway, which declines with age, and (2) the "RPA exhaustion" model, in which age-accumulated replication stress may overwhelm the finite nuclear RPA pool, triggering genomic catastrophe.

## Subunit identity

This page covers the RPA heterotrimer as a functional unit. Per wiki heterotrimer convention (see [[ku70-ku80]]), the largest catalytic-anchor subunit's UniProt (P27694, RPA70/RPA1) is used in the top-level `uniprot:` field; all three subunit IDs are listed in `complex-subunits:`.

| Field | RPA70 (RPA1) | RPA32 (RPA2) | RPA14 (RPA3) |
|---|---|---|---|
| UniProt | P27694 | P15927 | P35244 |
| Gene symbol | RPA1 | RPA2 | RPA3 |
| NCBI Gene | 6117 | 6118 | 6119 |
| HGNC | 10289 | 10290 | 10291 |
| Aliases | REPA1, RPA70 | REPA2, RPA32, RPA34 | REPA3, RPA14 |
| Length | 616 aa | 270 aa | 121 aa |
| Mouse ortholog | Rpa1 | Rpa2 | Rpa3 |

**Naming note:** "RPA70," "RPA32," and "RPA14" refer to the apparent molecular weights of the three subunits. Gene-symbol nomenclature is RPA1/RPA2/RPA3 (human) and Rpa1/Rpa2/Rpa3 (mouse). "RPA" as a complex is the standard abbreviation [^wold1997].

## Complex architecture and OB-fold organization

RPA forms a stable, constitutive heterotrimer held together by a trimeric core domain [^bochkareva2002]. Structural organization:

- **RPA70 (RPA1)** — the central ssDNA-binding engine. Contains four OB-fold domains: DBD-F (N-terminal, protein-protein interaction; residues ~1–110), DBD-A (residues ~181–290), DBD-B (residues ~301–422), and DBD-C (residues ~436–616). DBD-A and DBD-B together form the high-affinity ssDNA-binding module; the DBD-F domain is the recruitment surface for ATR-ATRIP (via the ATRIP Q-rich α-helix interaction) and for other DDR factors. DBD-C contributes to trimerization and carries an embedded zinc-ribbon motif [^bochkareva2002].
- **RPA32 (RPA2)** — contains DBD-D (lower-affinity ssDNA contact; residues ~43–171 of RPA32) and a C-terminal protein-interaction module (residues ~200–270). The C-terminal region is a protein-recruitment surface that interacts with XPA, RAD52, and other DDR factors. The unstructured N-terminal region of RPA32 (residues ~1–40) carries multiple phosphorylation sites regulated during the DDR [^bochkareva2002].
- **RPA14 (RPA3)** — smallest subunit, contains DBD-E (part of the trimerization core). Primarily structural; DBD-E contributes minimally to ssDNA affinity but is essential for trimer stability [^bochkareva2002].

The trimerization core (DBD-C from RPA70, DBD-D from RPA32, and the entire RPA14 subunit) assembles via three C-terminal α-helices arranged in parallel, forming a three-helix hydrophobic bundle. This trimerization interface does not participate in the initial 8–10 nt ssDNA-binding mode but contributes to the higher-order 30 nt mode [^bochkareva2002].

**ssDNA binding:** RPA binds ssDNA in a multistep, cooperative pathway. Initial binding of ~8–10 nt is mediated by DBD-A and DBD-B. A conformational change then engages DBD-C and DBD-D, extending the footprint to ~30 nt. Binding is directional (5'→3' polarity relative to RPA orientation). The 30 nt mode requires all four DBDs (DBD-A, -B, -C, -D) contacting 23–30 nt cooperatively [^bochkareva2002].

| Dimension | Status |
|---|---|
| OB-fold architecture conserved in humans? | yes — structure solved from human protein [^bochkareva2002] |
| Domain function conserved in model organisms? | yes — RPA70/32/14 are essential and highly conserved across eukaryotes |

## Functions

### DNA replication

At the replication fork, RPA is loaded onto ssDNA exposed by the MCM2-7 helicase. Key roles [^wold1997]:

- Protects ssDNA from nuclease degradation and prevents secondary-structure formation that would stall the replisome.
- Recruits **Pol α-primase** via direct protein-protein interaction with RPA70 DBD-F domain, positioning the primase for RNA primer synthesis.
- Recruits **RFC** and assists with **PCNA** loading for processive DNA synthesis by Pol δ/ε.
- Required for the 5'→3' directionality of lagging-strand synthesis: RPA binds the lagging-strand template and is displaced by the advancing Okazaki fragment synthesis machinery.

### ATR-mediated DNA damage checkpoint activation

RPA-coated ssDNA (RPA·ssDNA) is the primary signal that activates ATR kinase at stalled replication forks and resected DSBs. The mechanism, defined by Zou & Elledge 2003, is [^zou2003]:

1. ssDNA is generated — either by fork uncoupling (helicase continues while polymerase stalls) or by nucleolytic resection at DSBs.
2. RPA coats the ssDNA, creating the RPA·ssDNA platform.
3. **ATRIP** (ATR-interacting protein) recognizes RPA·ssDNA directly — the ATRIP N-terminal Q-rich domain makes direct contact with the RPA70 DBD-F domain.
4. ATRIP carries ATR to the RPA·ssDNA platform, localizing ATR kinase to the lesion site.
5. ATR is then activated by Topoisomerase II Binding Protein 1 (TOPBP1) and ETAA1 to phosphorylate CHK1 and hundreds of downstream substrates, triggering checkpoint signaling.

This RPA-dependent ATR activation mechanism is conserved from yeast to humans [^zou2003]. #gap/needs-replication — the specific ATRIP-RPA70 contact surface defined in Zou & Elledge 2003 was based on biochemical co-immunoprecipitation; structural resolution of the interface at atomic level was a subsequent contribution (not covered here).

### Homologous recombination (HR)

After DSB resection by MRN + CtIP + EXO1/BLM generates long ssDNA overhangs, RPA coats these tracts to:

- Protect ssDNA from degradation.
- Prevent premature or illegitimate strand invasion.
- Provide the substrate for **BRCA2**-mediated **RAD51** loading: BRCA2 displaces RPA from the ssDNA and loads RAD51 monomers in an ATP-dependent reaction, forming the RAD51 nucleoprotein filament that executes strand invasion [^wold1997].
- Stimulate strand-exchange activity of RAD51 at physiological concentrations.

RPA's displacement by RAD51 is a regulated step — mediator proteins (BRCA2, PALB2, RAD52) orchestrate the transition and prevent premature RAD51 loading before sufficient resection has occurred.

### Nucleotide excision repair (NER)

In NER, after the XPC-RAD23B damage-recognition complex and TFIIH open a ~25–30 nt bubble around the lesion, XPF-ERCC1 and XPG make dual incisions flanking the damage. This leaves a ~25–30 nt ssDNA gap, which RPA immediately coats. RPA then [^wold1997]:

- Coordinates recruitment of **XPA** (via the RPA32 WH domain) and positions TFIIH for efficient unwinding.
- Recruits **RFC, PCNA**, and **Pol δ/ε** for gap-filling synthesis.
- Is essential for preventing re-incision of the repair patch before ligation.

RPA's interaction partner [[ercc1|ERCC1]] is relevant to the [[nucleotide-excision-repair]] page and to aging-context NER decline.

### RPA32 phosphorylation: a DDR readout

The N-terminal serine/threonine cluster of RPA32 (Ser-4, Ser-8, Ser-12, Thr-21, Ser-23, Ser-29, Ser-33) is phosphorylated during the DNA damage response [^ashley2014]:

- **Basal (unperturbed S-phase):** Ser-23 and Ser-29 are phosphorylated by CDK cyclically during the cell cycle as part of normal S-phase progression [^ashley2014].
- **DNA damage/replication stress:** Ser-33 is phosphorylated by ATR; Ser-4, Ser-8, Ser-12, and Thr-21 are phosphorylated by one or more PIKKs (ATM, ATR, and/or DNA-PKcs) depending on the replication stress agent. DNA-PKcs specifically phosphorylates Ser-4/Ser-8 [^ashley2014]. The "hyperphosphorylated" RPA32 (pRPA32) isoform recognized by the S4/S8 antibody is the canonical marker of severe replication stress or DSB signaling [^ashley2014].
- **Functional consequence:** DNA-PKcs phosphorylation of RPA32 Ser4/Ser8 regulates replication fork restart, new origin firing, homologous recombination, mitotic catastrophe, and cell survival in response to replication stress [^ashley2014].

Hyperphosphorylated RPA32 (pS4/S8) is routinely used as a replication-stress biomarker in aged-cell studies. #gap/needs-replication — the functional significance of RPA32 hyperphosphorylation in the context of primary aging (rather than exogenously induced DNA damage) is not yet established from primary source data catalogued here.

## Role in aging

### Genomic instability via HR decline

HR is the high-fidelity DSB repair pathway preferentially used in S/G2 phase when a sister chromatid template is available. Multiple lines of evidence indicate HR efficiency declines with age in mammalian cells, while error-prone NHEJ pathways gain relative prominence [^wold1997]. Since RPA is an obligate component of the RAD51-filament-formation step in HR, any age-associated decline in RPA function or concentration could shift the DSB-repair balance toward mutagenic outcomes — contributing to the [[genomic-instability]] hallmark. The mechanistic link is biologically plausible but not directly demonstrated for RPA in aging contexts. #gap/no-mechanism

### Interaction with progeroid-syndrome proteins

RPA directly interacts with **WRN** (Werner syndrome helicase) and **BLM** (Bloom syndrome helicase), both of which are associated with progeroid syndromes and accelerated aging [^wold1997]:

- WRN interacts with RPA70 (DBD-F) and RPA32 (WH domain); this interaction stimulates WRN helicase and exonuclease activities at stalled replication forks.
- BLM similarly cooperates with RPA during replication-fork restart and long-range resection at DSBs.
- Mutations in WRN or BLM that abrogate RPA interaction impair fork stabilization and increase replication-stress signaling.

These interactions place RPA at the hub of a progeroid-syndrome protein network involved in fork protection and replication stress tolerance.

| Dimension | Status |
|---|---|
| Pathway (RPA-WRN interaction) conserved in humans? | yes — human proteins [^wold1997] |
| Phenotype (WRN loss → progeroid aging) conserved across organisms? | partial — WRN is human-disease-defining; mouse Wrn knockouts do not fully recapitulate Werner syndrome |
| RPA expression/function decline with age replicated in humans? | not-tested — no systematic human tissue aging dataset confirmed here |

### The RPA exhaustion model

Toledo et al. 2013 showed that ATR suppresses replication catastrophe by preventing global depletion of the nuclear RPA pool [^toledo2013]:

- When replication stress (primarily via hydroxyurea (HU)-induced dNTP depletion and fork stalling) is combined with ATR inhibition, dormant origins fire massively, generating far more ssDNA than the nuclear RPA pool can coat. The generality of this finding was confirmed with multiple independent replication stressors (aphidicolin, gemcitabine, cytarabine, UV light) combined with ATR or CHK1 inhibition [^toledo2013].
- "RPA exhaustion" — depletion of free RPA below the threshold needed to protect all stalled-fork ssDNA — leads to ssDNA exposure, irreversible fork collapse, and catastrophic genomic fragmentation termed "replication catastrophe" (RC). RPA exhaustion was identified as the common denominator of RC regardless of the source of replication stress [^toledo2013].
- ATR normally limits new-origin firing during stress (via CHK1-mediated CDK suppression), thereby preserving the RPA pool for forks already stalled. When ATR signaling fails, dormant origins fire unscheduled, progressively depleting nuclear RPA [^toledo2013].
- Experiments were conducted primarily in human U-2-OS osteosarcoma cells, validated in DLD1-ATR-WT, DLD1-ATR-Seckel colorectal cancer cells, and BJ primary human fibroblasts [^toledo2013].
- **Aging-context extrapolation:** In aged cells, elevated basal replication stress (from oncogene activation, reactive oxygen species, telomere shortening, and epigenetic dysregulation) may chronically consume the RPA pool. If the pool is persistently reduced below the safety margin, otherwise sub-threshold insults could cross the threshold for replication catastrophe. This is a mechanistically plausible but not yet experimentally confirmed aging hypothesis. #gap/needs-human-replication #gap/no-mechanism

| Dimension | Status |
|---|---|
| RPA exhaustion model demonstrated? | yes — in U-2-OS, DLD1, and BJ primary fibroblasts (Toledo 2013) [^toledo2013] |
| Demonstrated in primary human aged cells? | no — #gap/needs-human-replication |
| Replicated in vivo? | no — model-cell data only |

### GenAge status

RPA1 is listed in GenAge (entry ID 67) as a gene selected on the basis of its interactions with aging-relevant genes (including WRN). GenAge notes "no direct evidence that RPA1 is linked to human ageing" — the entry reflects network-based inference rather than a direct aging phenotype from RPA1 manipulation. #gap/needs-human-replication

## Pharmacology and druggability

Druggability tier 3 (research probes exist; no approved drug; no aging-validated compound):

- **HAMNO** — a small molecule identified as an RPA70-ATRIP interaction inhibitor; disrupts the protein-protein interaction surface on RPA70 DBD-F that recruits ATRIP. Oncology context; induces replication stress sensitivity. Not aging-validated.
- **TDRL-505** — an RPA inhibitor targeting the RPA70 OB-fold DNA-binding surface. Suppresses RAD51 filament formation (via RPA displacement inhibition) and sensitizes cancer cells to hydroxyurea. Research probe only; no clinical development.
- **PROTACs targeting RPA** — described in oncology-context preprints but not clinically advanced.
- **Aging-context note:** RPA inhibition is not a viable aging intervention — reducing RPA function would exacerbate the genomic instability it is proposed to protect against. Therapeutic interest, if any, would be in maintaining or restoring RPA function in aged tissues, not inhibiting it. No such compounds are in development. #gap/no-mechanism

## Key interactions

- **ATR-ATRIP** — ATRIP recognizes RPA70 DBD-F domain; the primary event in ATR checkpoint activation [^zou2003]
- **BRCA2** — mediates RPA displacement from resected ssDNA and RAD51 loading; essential for HR
- **RAD51** — loaded onto RPA-coated ssDNA by BRCA2; executes strand invasion
- **WRN / BLM** — direct physical interaction; RPA stimulates WRN helicase at stalled forks [^wold1997]
- **XPA** — binds RPA32 WH domain in NER to confirm damage identity and position dual incision
- **[[ercc1|ERCC1]]-XPF** — makes the 5' incision in NER on the RPA-coated ssDNA bubble
- **[[atm|ATM]]** — one of multiple PIKKs (ATM, ATR, DNA-PKcs) that phosphorylate RPA32 Ser-12 and Thr-21 during DSB and replication-stress signaling; the specific PIKK responsible depends on the stress agent [^ashley2014]
- **[[pcna|PCNA]]** — loaded by RFC onto RPA-coated gaps for repair/replication synthesis
- **RFC** — clamp-loader; cooperates with RPA at replication and repair gaps

## Pathway membership

- [[dna-damage-response]] — ATR activation via RPA·ssDNA platform; RPA32 hyperphosphorylation as DDR readout
- [[homologous-recombination]] — ssDNA coating at resected DSBs; substrate for BRCA2-RAD51 loading
- [[nucleotide-excision-repair]] — ssDNA gap coating after dual incision; coordinates gap-filling
- [[non-homologous-end-joining]] — RPA is not a core NHEJ component, but limits resection competing with Ku70/Ku80

## Limitations and gaps

- `#gap/needs-human-replication` — RPA exhaustion model is established in human cancer cell lines and primary fibroblasts (Toledo 2013) [^toledo2013] but has not been tested in primary human aged cells or in vivo aging contexts.
- `#gap/needs-human-replication` — HR decline with age is established in functional assays, but the specific contribution of RPA expression, modification, or pool depletion to this decline is not directly demonstrated.
- `#gap/no-mechanism` — How RPA expression or pool size changes with chronological or replicative aging in primary human tissues is not established from primary sources catalogued here.
- `#gap/no-mechanism` — The mechanism by which RPA32 hyperphosphorylation in aged cells (if confirmed) affects HR vs. NHEJ pathway choice in a primary aging context is unresolved.
- `#gap/needs-replication` — The ATRIP-RPA70 contact-surface model (Zou & Elledge 2003) is from biochemical coIP; atomic-resolution structural confirmation of the interface was a later development not yet linked here. Zou & Elledge 2003 is closed-access (not_oa); claims from this source are AI-extracted and not independently confirmed from the primary PDF. #gap/no-fulltext-access
- `#gap/needs-canonical-id` — GenAge model-organism IDs for mouse Rpa1/Rpa2/Rpa3 not confirmed; the human GenAge entry (HAGRID:67) is confirmed against genenames.org (2026-05-07).
- `mr-causal-evidence: not-tested` — No Mendelian randomization study has used RPA1/RPA2/RPA3 instruments to test causal aging relevance; GWAS hits for longevity at these loci are not described in the literature as of 2026-05-07.
- **Wold 1997 (closed-access, not_oa):** Claims attributed to this review (replication, NER, HR, Pol α-primase interaction, RFC/PCNA recruitment, WRN/BLM interactions) are AI-extracted summaries from training knowledge. The review is widely cited and these mechanisms are well-established, but the specific textual claims have not been confirmed against the primary PDF. #gap/no-fulltext-access

## See also

- [[dna-damage-response]] — the upstream/downstream signaling network in which RPA·ssDNA is a primary input
- [[homologous-recombination]] — pathway page; RPA is the obligate ssDNA-coating step before RAD51 loading
- [[nucleotide-excision-repair]] — pathway page; RPA bridges damage recognition and gap-filling
- [[non-homologous-end-joining]] — the competing DSB repair pathway; Ku70/Ku80 competes with RPA for DNA ends in G1
- [[ku70-ku80]] — the heterodimer that initiates NHEJ; functionally opposed to RPA in the HR/NHEJ balance
- [[atm]] — one of multiple PIKKs (with ATR and DNA-PKcs) that phosphorylate RPA32 Ser-12 and Thr-21 during DSB signaling [^ashley2014]
- [[ercc1]] — XPF-ERCC1 makes the 5' incision in NER; RPA coats the resulting gap
- [[pcna]] — processivity clamp; loaded after RPA coats repair/replication gaps
- [[genomic-instability]] — hallmark; RPA dysfunction contributes via HR decline and replication catastrophe risk
- [[brca1]] — HR pathway; upstream of BRCA2-RPA displacement step

## Footnotes

[^wold1997]: doi:10.1146/annurev.biochem.66.1.61 · Wold MS · *Annu Rev Biochem* 1997;66:61–92 · review · 1,437 citations · model: comprehensive eukaryotic RPA structure-function review · not locally downloaded (closed access)

[^bochkareva2002]: doi:10.1093/emboj/21.7.1855 · Bochkareva E, Korolev S, Lees-Miller SP, Bochkarev A · *EMBO J* 2002;21(7):1855–1863 · in-vitro (crystal structure, 2.8 Å MAD) · model: human RPA trimerization core (DBD-C/DBD-D/RPA14) · PDB: 1L1O · local PDF via a local paper archive

[^zou2003]: doi:10.1126/science.1083430 · Zou L, Elledge SJ · *Science* 2003;300(5625):1542–1548 · in-vitro + in-vivo · 2,628 citations · model: human cells / biochemical reconstitution · not locally downloaded (closed access)

[^toledo2013]: doi:10.1016/j.cell.2013.10.043 · Toledo LI, Altmeyer M, Rask MB, Lukas C, Larsen DH, Povlsen LK, Bekker-Jensen S, Mailand N, Bartek J, Lukas J · *Cell* 2013;155(5):1088–1103 · in-vitro (human cancer cell lines + primary fibroblasts) · model: U-2-OS osteosarcoma (primary), DLD1-ATR-WT, DLD1-ATR-Seckel colorectal cancer cells, BJ primary fibroblasts · local PDF via a local paper archive

[^ashley2014]: doi:10.1016/j.dnarep.2014.04.008 · Ashley AK, Shrivastav M, Nie J, Amerin C, Troksa K, Glanzer JG, Liu S, Opiyo SO, Dimitrova DD, Le P, Sishc B, Bailey SM, Oakley GG, Nickoloff JA · *DNA Repair* 2014;21:131–139 · PMID:24819595 · PMC:PMC4135522 · in-vitro (human cells) · model: RPA32 Ser4/Ser8 phosphorylation mutants in human cells · full text verified via PMC (PDF download failed; text confirmed via NCBI efetch)
