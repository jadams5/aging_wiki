---
type: pathway
aliases: [NHEJ, non-homologous DNA end joining, classical NHEJ, cNHEJ]
kegg: hsa03450
reactome: R-HSA-5693571
wikipathways: null
key-nodes:
  - "[[ku70-ku80]]"
  - "[[dna-pkcs]]"
  - "[[artemis]]"
  - "[[xrcc4]]"
  - "[[lig4]]"
  - "[[xlf]]"
  - "[[paxx]]"
  - "[[pol-mu]]"
  - "[[pol-lambda]]"
upstream:
  - "[[dna-damage-response]]"
  - "[[atm]]"
downstream:
  - "[[v-d-j-recombination]]"
  - "[[cellular-senescence]]"
hallmarks: ["[[genomic-instability]]"]
sens-categories: []
druggability-tier: 2
caused-by:
  - "[[genomic-instability]]"
causes:
  - "[[genomic-instability]]"
  - "[[cellular-senescence]]"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Walker 2001 (10.1038/35088000) and Riballo 1999 (10.1016/s0960-9822(99)80311-x) verified against primary source PDFs. Mahaney 2009 (10.1042/BJ20080413) download failed (green OA, no viable PDF URL); claims attributed solely to [^mahaney2009] remain unverified — see verified-scope note in body."
---

> Partial verification note: Walker 2001 and Riballo 1999 verified against PDFs (2026-05-05). Claims attributed to Mahaney 2009 (10.1042/BJ20080413) could not be verified — download failed despite green OA status. Affected claims: DNA-PKcs autophosphorylation cluster details (ABCDE/PQR) and XRCC4–LIG4–XLF ligation complex scaffold description in Steps 2–3. #gap/no-fulltext-access for Mahaney 2009 specifically.

# Non-Homologous End Joining (NHEJ)

**Non-homologous end joining (NHEJ)** is the dominant double-strand break (DSB) repair pathway in mammalian cells. Unlike [[homologous-recombination]], which requires a sister-chromatid template and is restricted to S and G2 phases, NHEJ operates throughout the cell cycle — including in G0/G1 and in post-mitotic cells such as neurons — making it the primary means of DSB repair in most adult tissues. NHEJ directly ligates broken DNA ends with minimal resection, but this speed comes at the cost of fidelity: small insertions, deletions (indels), or base substitutions are frequently introduced at the junction. NHEJ activity declines measurably with organismal age, and persistent unrepaired DSBs in post-mitotic and senescent cells are a canonical molecular signature of the [[genomic-instability]] hallmark of aging.

## Pathway overview

### KEGG and Reactome identifiers

| Database | ID | Entry name |
|---|---|---|
| KEGG | hsa03450 | Non-homologous end-joining — *Homo sapiens* |
| Reactome | R-HSA-5693571 | Nonhomologous End-Joining (NHEJ) |

KEGG hsa03450 lists 13 human genes in the pathway (including *XRCC6*, *XRCC5*, *PRKDC*, *DCLRE1C*, *NHEJ1*, *XRCC4*, *LIG4*, *POLM*, *POLL*, *FEN1*, *DNTT*, *MRE11*, *RAD50*). Reactome R-HSA-5693571 provides reaction-level granularity for each ligation step and is the recommended reference for mechanistic detail.

## Mechanism: four sequential steps

NHEJ proceeds through four functionally distinct steps [^lieber2010][^mahaney2009]:

### Step 1 — DSB recognition: Ku70–Ku80 ring loading

The Ku heterodimer ([[ku70-ku80]]; encoded by *XRCC6* and *XRCC5*) is the first responder to a DSB. Ku forms a preformed ring-shaped structure that threads onto the broken DNA end without sequence specificity; the ring is designed with an expansive base that cradles DNA and a narrow bridge that acts as a barrier to binding unbroken (circular) DNA [^walker2001]. Inward translocation of Ku from the end is the rate-limiting step for internal binding, explaining Ku's preference for DNA termini [^walker2001]. Ku's end-occupancy shields termini from excessive nucleolytic degradation #gap/unsourced — the structural protection inference is consistent with Walker 2001 but the biochemical nuclease-protection function is demonstrated by other studies (e.g., Feldmann et al. 2000, Nucleic Acids Res 28:2585) not yet cited on this page. The Ku ring recruits [[dna-pkcs]] (encoded by *PRKDC*) to form the DNA-PK holoenzyme [^walker2001].

### Step 2 — Synapsis and end processing: DNA-PKcs autophosphorylation and Artemis recruitment

[[dna-pkcs]] (a ~470 kDa serine/threonine kinase of the PIKK family) bridges the two broken ends to form a synaptic complex, bringing them into proximity. DNA-PKcs undergoes extensive *trans*-autophosphorylation (at the ABCDE and PQR clusters), which opens the DNA termini to processing enzymes [^mahaney2009]. [[Artemis]] (*DCLRE1C*) is a structure-specific endonuclease that is activated by direct interaction with DNA-PKcs; Artemis trims 5' overhangs and hairpin intermediates (critical for V(D)J recombination) and is the primary nuclease for generating ligatable ends from complex DSBs [^lieber2010]. Polymerases [[pol-mu]] (*POLM*) and [[pol-lambda]] (*POLL*) fill short single-stranded gaps when ends are not directly compatible; terminal deoxynucleotidyl transferase (TdT, *DNTT*) contributes non-templated nucleotide additions in lymphocytes (contributing to junctional diversity in V(D)J recombination) [^pannunzio2018].

### Step 3 — Ligation: XRCC4–LIG4–XLF complex

The ligation step is executed by a trimeric scaffold: [[xrcc4]] (*XRCC4*) and [[xlf]] (NHEJ1; also called Cernunnos) each form homodimers that assemble into long filaments flanking the DNA ends; [[lig4]] (*LIG4*) is the catalytic ligase, tethered to XRCC4 via its tandem BRCT domains [^mahaney2009][^pannunzio2018]. LIG4 possesses a unique insert1 motif that remodels the paired-end complex and enables ligation of incompatible or partially processed termini [^pannunzio2018]. **PAXX** (*C9orf142*), a structural paralog of XRCC4/XLF, is a more recently identified accessory factor that stabilizes Ku at DNA ends and promotes ligation under challenging end configurations #gap/needs-replication.

### Step 4 — Error profile

NHEJ frequently introduces small indels at junctions because end processing by Artemis and gap-filling polymerases may add or remove nucleotides before ligation. In contrast to homologous recombination (which restores the original sequence using a template), NHEJ is intrinsically mutagenic — an acceptable trade-off in long-lived post-mitotic cells where rapid repair outweighs the risk of somatic mutation [^lieber2010].

## Cell-cycle independence

A critical distinction from [[homologous-recombination]]:

| Feature | NHEJ | Homologous Recombination (HR) |
|---|---|---|
| Template required | No (direct ligation) | Yes (sister chromatid) |
| Cell-cycle phases | G0, G1, S, G2, M | S/G2 only |
| Post-mitotic cells | Yes (dominant pathway) | No |
| Fidelity | Error-prone (indels common) | High-fidelity |
| Key initiator | Ku70–Ku80 | MRN complex + CtIP resection |

NHEJ predominates in G1 due to the lack of a sister-chromatid template; it is the *only* DSB repair option in terminally differentiated post-mitotic cells (e.g., neurons, cardiomyocytes) [^lieber2010].

## Aging relevance

### Age-related decline in NHEJ activity

NHEJ capacity declines measurably with age across multiple mammalian systems. In rat neurons, NHEJ end-joining activity is "considerably lower in adult brain, and neurons from old brain failed to support significant end joining" compared with neonatal neurons — a decline blocked by the DNA-PKcs inhibitor wortmannin, implicating loss of DNA-PK kinase activity as a mechanistic driver [^sharma2007]. This is consistent with the broader observation that DSB repair efficiency in non-dividing tissues decreases with age, accumulating unrepaired breaks.

### Persistent DSB foci in senescent and aging cells

Sedelnikova et al. (2004) demonstrated that both replicatively senescent human fibroblasts and aged mouse tissues (liver, spleen) accumulate DSB lesions that co-localize with γ-H2AX foci — a marker of unresolved DSBs — and that these foci persist indefinitely rather than resolving after DNA damage clearance [^sedelnikova2004]. This persistence is consistent with a model in which NHEJ (and HR) becomes progressively insufficient to clear the full burden of spontaneous DSBs generated by reactive oxygen species, replication stress, and transcription-associated breaks over organismal lifetime.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | Yes — NHEJ is universally conserved across eukaryotes |
| Age-related decline conserved in humans? | Partial — neuron data from rat; persistent DDR foci in human senescent cells confirmed |
| Direct human aging trial data? | No — no human interventional data on NHEJ restoration #gap/needs-human-replication |

### Connection to the DDR and senescence

NHEJ failure at unresolvable breaks activates the [[dna-damage-response]] (DDR) checkpoint, including [[atm]]-mediated phosphorylation of H2AX and activation of [[p53]]. Persistent DDR signaling drives the senescence-associated secretory phenotype (SASP) — even in cells with non-lethal, irreparable DSBs that have halted NHEJ. The coupling of NHEJ failure → persistent γ-H2AX → [[p53]]-mediated senescence is a central mechanistic thread linking DNA repair with [[cellular-senescence]] and the [[genomic-instability]] hallmark [^sedelnikova2004].

### Role in V(D)J recombination and immunosenescence

NHEJ is the obligate repair pathway for [[v-d-j-recombination]] — programmed DSBs introduced by RAG1/RAG2 in lymphocyte precursors are resolved exclusively by NHEJ. Deficiency in any NHEJ component ablates adaptive immunity (see Disease section). Age-related reductions in NHEJ efficiency in hematopoietic stem cells may contribute to reduced B and T cell production and impaired immune repertoire diversity in aged organisms, a component of [[immunosenescence]] #gap/unsourced — specific mechanistic evidence linking NHEJ decline to V(D)J fidelity in aged HSCs requires primary citation.

## Disease connections

Germline loss-of-function mutations in NHEJ components cause a spectrum of immunodeficiency and radiosensitivity syndromes:

| Gene | Syndrome | Key features |
|---|---|---|
| *LIG4* | LIG4 syndrome (OMIM #606593) | Spectrum from hypomorphic (radiosensitivity + leukemia predisposition, without overt immunodeficiency — the original 180BR patient) to severe (microcephaly, growth retardation, pancytopenia, SCID — characterized in later cohorts). The 180BR patient (Riballo 1999) had **no overt immunodeficiency** and near-normal V(D)J recombination; residual LIG4 activity (hypomorphic R278H allele) was sufficient for lymphocyte development [^riballo1999]. Full syndrome features (microcephaly, pancytopenia) are from subsequent case series #gap/unsourced — add O'Driscoll 2001 (Nat Genet) citation for the broader syndrome. |
| *DCLRE1C* (Artemis) | Artemis-SCID | T−B−NK+ SCID; radiation-sensitive; failure of V(D)J recombination hairpin opening |
| *PRKDC* (DNA-PKcs) | DNA-PKcs SCID | T−B−NK+ SCID (analogous to the *scid* mouse mutation); rare in humans |
| *NHEJ1* (XLF/Cernunnos) | XLF deficiency | Microcephaly, growth retardation, immunodeficiency; lymphoma susceptibility |
| *XRCC4* | XRCC4 syndrome | Microcephaly, primary immunodeficiency, lymphoma risk; phenotypically overlaps LIG4 syndrome |

The Ku70–Ku80 heterodimer is structurally essential but germline null mutations are embryonic lethal in mice; heterozygous *Ku80*+/− mice show accelerated aging phenotypes including osteopenia and liver pathology, suggesting that NHEJ gene dosage modulates aging biology in mammals #gap/needs-replication.

## Pharmacological context

No NHEJ-specific geroprotective intervention is in clinical development. DNA-PKcs is an active oncology drug target (kinase inhibitors M3814/peposertinib, AZD7648, CC-115 in phase 1–2 trials for cancer), but these inhibit NHEJ rather than restore it — inappropriate as aging interventions. Strategies to enhance NHEJ capacity in aged cells remain a conceptual research direction rather than a validated target [^lieber2010].

#gap/dose-response-unclear — No dose-response data for any NHEJ-modulating agent in an aging context.
#gap/long-term-unknown — Whether partial restoration of NHEJ activity in aged mice extends lifespan or healthspan has not been tested.

## Cross-references

- [[dna-damage-response]] — upstream DDR pathway that recruits NHEJ machinery
- [[atm]] — activates at DSBs; cross-talks with DNA-PKcs; MRN complex upstream of both
- [[homologous-recombination]] — R19 batch sister pathway; competes with NHEJ in S/G2
- [[ku70-ku80]] — R19 batch; Ku heterodimer protein page
- [[dna-pkcs]] — R19 batch; catalytic kinase of the DNA-PK holoenzyme
- [[genomic-instability]] — hallmark page; NHEJ failure is a central contributor
- [[cellular-senescence]] — downstream consequence of persistent NHEJ failure
- [[p53]] — activated by persistent DSBs when NHEJ resolution fails
- [[v-d-j-recombination]] — implicit stub; NHEJ is the obligate DSB repair pathway for lymphocyte receptor diversification

## Limitations and gaps

- `#gap/needs-human-replication` — Direct evidence for NHEJ activity decline in human aging (rather than rodent models or in-vitro senescent cells) is limited; Sedelnikova 2004 provides the strongest human-cell link but is in fibroblast culture.
- `#gap/no-mechanism` — The molecular basis of NHEJ decline with age (reduced Ku expression? post-translational regulation? chromatin compaction at break sites?) is incompletely understood.
- `#gap/needs-replication` — PAXX's specific contribution to mammalian NHEJ fidelity in vivo is not yet well-characterized and functional redundancy with XLF is disputed.
- `#gap/unsourced` — The claim that age-related NHEJ decline in HSCs impairs V(D)J recombination efficiency requires a dedicated primary citation.
- `#gap/long-term-unknown` — Whether pharmacological restoration of NHEJ extends mammalian lifespan or healthspan has never been tested.
- `#gap/unsourced` — The disease table entry for full LIG4 syndrome features (microcephaly, growth retardation, pancytopenia) is not sourced to Riballo 1999 (which describes a hypomorphic patient without these features). The full syndrome was characterized by O'Driscoll et al. 2001 (Nat Genet 26:397–400) — add this citation.
- `#gap/no-fulltext-access` — Mahaney 2009 (10.1042/BJ20080413) download failed despite green OA status; claims in Steps 2–3 (DNA-PKcs autophosphorylation clusters, XRCC4–LIG4–XLF scaffold) attributed to this review are unverified. Retry download or verify via an alternative route.
- The Ju 2006/2007 NHEJ-aging citation suggested in the seeding request (`10.1101/sqb.2007.71.001`) does not resolve in the archive; the Cold Spring Harbor Symposia DOI format is suspect. The aging/NHEJ claim in this page is instead supported by Sedelnikova 2004 (γ-H2AX persistence) and Sharma 2007 (neuronal NHEJ decline). The Ju reference should be independently verified by the wiki-verifier before use.

## Footnotes

[^lieber2010]: doi:10.1146/annurev.biochem.052308.093131 · Lieber MR · *Annual Review of Biochemistry* 2010 · review · 2400+ citations · model: human/biochemical · authoritative mechanistic review of all NHEJ steps; local PDF: not downloaded (not_oa)

[^mahaney2009]: doi:10.1042/BJ20080413 · Mahaney BL, Meek K, Lees-Miller SP · *Biochemical Journal* 2009 · review · 690 citations · model: human/biochemical · covers DSB recognition through ligation with structural detail; download status: failed (green OA but no viable PDF URL found by the downloader) #gap/no-fulltext-access — claims in Steps 2–3 attributed to this source have not been verified against the PDF

[^walker2001]: doi:10.1038/35088000 · Walker JR, Corpina RA, Goldberg J · *Nature* 2001 · in-vitro (X-ray crystallography) · 1165 citations · model: human Ku70/Ku80 heterodimer (full-length Ku70 + truncated Ku80 lacking C-terminal 19K DNA-PKcs recruitment domain) · 2.5 Å resolution (DNA-bound), 2.7 Å (apo) · confirms: preformed ring encircling DNA; cradles ~two turns of DNA (70 Å binding groove); encircles only central 3–4 bp; no base contacts; Ku70 proximal to free DNA end; inward translocation is rate-limiting for internal DNA binding · local PDF: 

[^pannunzio2018]: doi:10.1074/jbc.TM117.000374 · Pannunzio NR, Watanabe G, Lieber MR · *Journal of Biological Chemistry* 2018 · review · 478 citations · model: human/biochemical · covers XLF·XRCC4·LIG4 complex and LIG4 insert1 mechanism; download status: pending

[^riballo1999]: doi:10.1016/s0960-9822(99)80311-x · Riballo E, Critchlow SE, Teo S-H et al. · *Current Biology* 1999 · case report + in-vitro · n=1 patient (180BR cell line, acute lymphoblastic leukemia patient, age 14 at diagnosis) · model: human LIG4 hypomorph (R278H mutation, homozygous or hemizygous) · first identification of a LIG4 defect in a human; patient had pronounced radiosensitivity but **no overt immunodeficiency** and near-normal V(D)J recombination; residual LIG4 adenylation activity detected at high ATP concentrations · PDF: locally available

[^sedelnikova2004]: doi:10.1038/ncb1095 · Sedelnikova OA et al. · *Nature Cell Biology* 2004 · in-vitro + in-vivo · n not reported · model: human fibroblasts (replicative senescence) + aged mice (liver, spleen) · demonstrates persistent γ-H2AX foci correlating with unrepairable DSBs in senescent human cells and aged mouse tissues; local PDF: not downloaded (not_oa)

[^sharma2007]: doi:10.1016/j.brainresbull.2007.02.001 · Sharma S · *Brain Research Bulletin* 2007 · in-vitro (primary cell culture) · model: rat neurons (postnatal, adult, old) · NHEJ activity progressively declines from postnatal to old brain; wortmannin-sensitive (DNA-PKcs-dependent); local PDF: not downloaded (not_oa)
