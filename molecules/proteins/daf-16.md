---
type: protein
aliases: [abnormal DAuer Formation 16, C. elegans FOXO, DAF-16/FOXO]
uniprot: O16850
ncbi-gene: 172981
hgnc: null
genage-id: null
organism: Caenorhabditis elegans
wormbase-id: WBGene00000912
ensembl: null
druggability-tier: null  # #gap/c-elegans-no-direct-ortholog-druggability — daf-16 paralogs scatter across human FOXO1/3/4/6
caused-by: []
causes: []
pathways: ["[[insulin-igf1]]", "[[ampk]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]"]
sens-categories: []
known-interactors: ["[[daf-2]]", "[[age-1]]", "[[akt-1]]", "[[akt-2]]", "[[sir-2.1]]", "[[aak-2]]", "[[hsf-1]]", "[[sgk-1]]", "[[jnk-1]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Lin 1997, Ogg 1997, Tissenbaum 2001, Murphy 2003, Apfeld 2004, and Kenyon 2010 primary-source PDFs verified against all quantitative claims and mechanism statements. Kenyon 1993 and Hsu 2003 remain closed-access (not_oa). UniProt O16850 canonical identity fields (541 aa, 8 isoforms, FHD residues 175-268, Thr273/Ser319 phosphosites) not independently re-checked against live UniProt — recommend cross-check on next lint pass."
---


# DAF-16

DAF-16 is the sole [[caenorhabditis-elegans|C. elegans]] member of the FOXO transcription factor family — the single ancestral worm gene that mammals have expanded to four paralogs ([[foxo3|FOXO1/3/4/6]]). It is the canonical longevity transcription factor of invertebrate aging biology: loss of DAF-16 activity fully suppresses the near-doubling of lifespan seen in *daf-2* (IIS receptor) loss-of-function animals [^kenyon1993], and overexpression or nuclear activation of DAF-16 is sufficient to extend lifespan in multiple contexts. The central regulatory logic — reduced insulin/IGF signaling → AKT inactivity → nuclear FOXO → longevity gene expression — is conserved from worm to mammals (see [[foxo3]]).

## Identity

- **UniProt:** O16850 (DAF16_CAEEL; Swiss-Prot reviewed)
- **NCBI Gene:** 172981
- **WormBase:** WBGene00000912
- **HGNC:** null — worm gene; no human HGNC entry
- **GenAge:** not independently listed; longevity effects captured via *daf-2* (GenAge entry) and the IIS pathway
- **Length:** 541 amino acids (canonical isoform per UniProt O16850); at least 8 isoforms produced by alternative splicing per current WormBase/UniProt annotations — the founding papers described 3 isoforms: daf-16a1, daf-16a2, and daf-16b (Ogg 1997), plus 2 alternatively spliced forms in the Lin 1997 cDNA analysis (510 aa and 508 aa); the expanded count reflects subsequent WormBase curation. Isoform-specific sequence lengths should be confirmed against current WormBase #gap/needs-canonical-id
- **Mammalian orthologs:** FOXO1, FOXO3, FOXO4, FOXO6 — DAF-16 is the single ancestral FOXO; functionally closest to [[foxo3|FOXO3]] in the context of longevity regulation [^kenyon2010]

## Domain organization

DAF-16 shares the canonical FOXO domain architecture:

| Domain | Approximate residues (canonical isoform) | Function |
|---|---|---|
| N-terminal disordered region | 1–174 | Contains AKT phosphorylation sites (see below); intrinsically disordered |
| Forkhead DNA-binding domain (FHD) | 175–268 (UniProt) | Sequence-specific binding to DAF-16 binding elements (DBEs); also binds DAE (DAF-16 associated elements) |
| Nuclear export sequence (NES) | C-terminal to FHD | 14-3-3–mediated cytoplasmic retention when AKT-phosphorylated |
| C-terminal transactivation domain | ~400–541 | Transcriptional activation; isoform variation at C-terminus affects target-gene selectivity |

### Key phosphorylation sites

AKT-1 and AKT-2 phosphorylate DAF-16 at three conserved sites analogous to the mammalian AKT sites on FOXO3 (Thr32, Ser253, Ser315):

- **Thr273** — confirmed phosphothreonine per UniProt O16850; promotes 14-3-3 binding → cytoplasmic sequestration
- **Ser319** — phosphorylated by SGK-1 (serum/glucocorticoid kinase ortholog) and CaMK2 ortholog UNC-43 per UniProt
- Additional AKT-1/AKT-2-dependent sites have been mapped biochemically; full site-by-site epistasis not yet published at atomic resolution #gap/needs-replication

JNK-1 (stress-activated kinase) phosphorylates DAF-16 to *promote* nuclear import under stress conditions — an AKT-opposing phosphorylation [^kenyon2010].

## Regulation by the IIS pathway

The [[insulin-igf1|insulin/IGF-1 signaling (IIS) pathway]] is the primary upstream regulator of DAF-16 nuclear localization:

```
DAF-2 (insulin/IGF-1 receptor) → AGE-1 (PI3K catalytic subunit)
  → PIP3 → PDK-1 → AKT-1 / AKT-2
  → phospho-DAF-16 → 14-3-3 binding → cytoplasmic retention → INACTIVE
```

Under low IIS (food scarcity, stress, genetic *daf-2* or *age-1* LoF):
```
Low PIP3 → AKT-1/AKT-2 inactive → DAF-16 unphosphorylated
  → nuclear import → target gene transactivation → longevity program
```

PPTR-1 (PP2A regulatory subunit B56) dephosphorylates AKT-1 to oppose this pathway, providing a second tier of DAF-16 activation [^kenyon2010]. #gap/needs-replication — PPTR-1 mechanism is known from a limited number of studies.

DAF-16 nuclear localization was directly visualized using GFP::DAF-16 reporter strains [^ogg1997]; dynamic translocation from cytoplasm to nucleus in response to reduced IIS is one of the clearest in-vivo demonstrations of kinase-controlled transcription factor localization in any organism. (Note: the full nuclear translocation dynamics upon *daf-2* perturbation were characterized in subsequent work — Lin et al. 2001, Nat Genet 28:139 — not by Lin 1997, which is a cloning paper.) #gap/needs-canonical-id

## Key genetic interactions

### daf-2 (IIS receptor) — founding paper

*daf-2* loss-of-function (LoF) mutants live ~twice as long as wild-type N2 worms [^kenyon1993]. This lifespan extension is **completely suppressed** by simultaneous *daf-16* LoF — demonstrating that DAF-16 is the essential effector of *daf-2* longevity [^kenyon1993]. This result, published in 1993, launched the modern era of longevity genetics.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | IIS → AKT → FOXO axis highly conserved; identical phosphorylation sites |
| Phenotype conserved in humans? | partial | FOXO3A variants associate with human longevity (see [[foxo3]]); no direct equivalent of *daf-2* LoF longevity in humans |
| Replicated in humans? | no | Cannot LoF the insulin/IGF receptor for longevity in humans; observational GWAS data only |

#gap/needs-human-replication — Causal longevity evidence is entirely invertebrate (and some mammalian model-organism); direct evidence in humans is observational only.

### sir-2.1 (sirtuin) — DAF-16-dependent longevity

Overexpression of *sir-2.1* (the C. elegans ortholog of mammalian SIRT1) extends lifespan in a **DAF-16-dependent** manner: *sir-2.1* overexpression no longer extends lifespan when *daf-16* is knocked down [^tissenbaum2001]. This established DAF-16 as a critical downstream effector of sirtuin-mediated longevity in worms — though later work in flies and mammals complicated the conserved-sirtuin-longevity narrative (see [[sirt1]]).

### aak-2 (AMPK) — parallel pathway, not upstream

*aak-2* (AAK-2; C. elegans AMPK α-subunit) LoF shortens lifespan ~12%; *daf-16* LoF shortens lifespan; *aak-2;daf-16* double mutants are ~15% shorter-lived than either single mutant [^apfeld2004]. This **additive shortening** in the double mutant demonstrates that AAK-2 and DAF-16 act in **parallel**, not a linear AAK-2 → DAF-16 hierarchy [^apfeld2004]. The [[ampk|AMPK]] pathway therefore extends lifespan via a DAF-16-independent route in worms — a key constraint when extrapolating mammalian AMPK-longevity mechanisms.

### hsf-1 (heat-shock factor) — partial cooperation

HSF-1 (heat-shock factor 1) and DAF-16 cooperate to promote longevity downstream of *daf-2* LoF [^hsu2003]. Simultaneous knockdown of both *hsf-1* and *daf-16* further shortens *daf-2* lifespan beyond either alone, suggesting partially independent transcriptional programs converge on the longevity phenotype [^hsu2003]. #gap/no-fulltext-access — Hsu 2003 (Science) is closed-access; claims cannot be independently verified from local PDF.

## Downstream transcriptional program

A microarray study by Murphy et al. 2003 identified DAF-16 target genes systematically [^murphy2003]. The DAF-16 regulon includes:

- **Stress-resistance genes:** *sod-3* (MnSOD ortholog), *hsp-12.6* (small heat-shock protein), *mtl-1* (metallothionein)
- **Antimicrobial genes:** *lys-7* and multiple lysozyme-family members — DAF-16 links longevity to innate immunity
- **Metabolic genes:** lipid-binding proteins, fatty acid metabolic enzymes
- **Negative regulators:** *daf-16* also activates inhibitors of its own pathway (feedback), including *pptr-1* (PP2A regulatory subunit)

The DAF-16 regulon is divided into genes that require nuclear DAF-16 for *activation* (Class I — repressed by IIS) and genes that require nuclear DAF-16 for *repression* (Class II — activated by IIS) [^murphy2003]. Both classes contribute to longevity; the Class II set includes several pro-aging genes.

## Aging context and model-organism translation

DAF-16 is the entry point for understanding transcriptional control of aging. It demonstrates that:

1. **A single transcription factor can substantially reprogram lifespan** — DAF-16 nuclear activity increases maximum lifespan nearly twofold in *daf-2* LoF animals.
2. **The IIS-FOXO axis is ancient and conserved** — the same logic (reduced insulin signaling → nuclear FOXO → longevity) operates in flies (*dFOXO*), mice (Igf1r+/- → FOXO activation; see [[igf1r]]), and potentially humans (FOXO3A GWAS — see [[foxo3]]).
3. **Longevity is transcriptionally programmed, not just passively accumulated damage** — DAF-16 target genes actively defend against stress and infection, reframing aging as a regulated process [^kenyon2010].

The major limitation is quantitative: *daf-2* LoF in a poikilothermic invertebrate with a 3-week lifespan does not translate directly to magnitude of effect in mammals. Mammalian IIS pathway reduction in mice yields modest lifespan extensions ranging from ~15% to 40% across different perturbations (see [[igf1r]]), not twofold [^kenyon2010]. #gap/needs-replication — the specific Igf1r+/- female mouse extension figure (~26% in Holzenberger 2003) is not stated explicitly in Kenyon 2010; the review gives a range across multiple mouse models.

## Nomenclature note

The gene name *daf-16* derives from "abnormal DAuer Formation" — DAF-16 was originally identified as a regulator of dauer larva entry (the *C. elegans* hibernation-like state induced by starvation/crowding). The connection between dauer regulation and longevity reflects the conserved logic: IIS low → daf-16 nuclear → dauer/longevity programs. Downstream dauer and longevity targets partially overlap but are not identical. See [[caenorhabditis-elegans]] for dauer biology context.

## Gaps and limitations

- #gap/needs-human-replication — All causal longevity data from *C. elegans* (and partially from mice/flies); no human LoF equivalent.
- #gap/needs-canonical-id — Isoform-specific sequence lengths and phosphosite assignments vary by isoform; canonical isoform boundaries should be confirmed against WormBase.
- #gap/no-fulltext-access — Kenyon 1993 (`10.1038/366461a0`) and Hsu 2003 (`10.1126/science.1083701`) are closed-access; quantitative claims from those papers cannot be verified against local PDFs.
- #gap/needs-replication — Exact phosphosite mapping for all 8 isoforms; PPTR-1 dephosphorylation mechanism; relative contributions of DAF-16 isoforms to different phenotypic outputs.
- #gap/no-mechanism — How nuclear DAF-16 distinguishes Class I from Class II target genes at the chromatin level (co-factor specificity not fully characterized).

## Pathway membership

- [[insulin-igf1]] — primary regulatory context; DAF-16 is the key transcriptional output
- [[ampk]] — parallel longevity pathway (aak-2 acts in parallel, not upstream)
- [[deregulated-nutrient-sensing]] — hallmark overlap: DAF-16 is the effector linking reduced nutrient sensing to longevity

## Related pages

- [[foxo3]] — primary mammalian ortholog; human aging-associated GWAS hits
- [[daf-2]] — upstream insulin/IGF receptor; *daf-2* LoF is the founding longevity mutation
- [[age-1]] — PI3K ortholog; AGE-1 is the catalytic PI3K downstream of DAF-2
- [[sir-2.1]] — sirtuin whose longevity effect requires DAF-16
- [[aak-2]] — AMPK ortholog; parallel longevity effector
- [[caenorhabditis-elegans]] — model organism context; IIS pathway in worm aging
- [[insulin-igf1]] — the pathway DAF-16 gates
- [[ampk]] — the parallel pathway
- [[akt]] — AKT1/2 human ortholog; phosphorylates FOXO family members in mammals

## Footnotes

[^kenyon1993]: doi:10.1038/366461a0 · Kenyon C, Chang J, Gensch E, Rudner A, Tabtiang R · in-vivo (C. elegans) · *daf-2(e1370)* LoF ~2× lifespan; completely suppressed by *daf-16* LoF · model: C. elegans N2 and mutant strains · not_oa #gap/no-fulltext-access

[^lin1997]: doi:10.1126/science.278.5341.1319 · Lin K, Dorman JB, Rodan A, Kenyon C · in-vivo (C. elegans) · *daf-16* cloning by Tc1 transposon tagging; identified as HNF-3/forkhead family member encoding 510 aa (canonical form) or 508 aa (alternatively spliced short form); *daf-16* LoF suppresses *daf-2* longevity; forkhead domain most similar to human FKHR (67%) and AFX (64%) · model: C. elegans · local PDF available · NOTE: this paper does NOT describe GFP::DAF-16 nuclear translocation — that work is from Lin et al. 2001 (Nat Genet 28:139)

[^ogg1997]: doi:10.1038/40194 · Ogg S, Paradis S, Gottlieb S, Patterson GI, Lee L, Tissenbaum HA, Ruvkun G · in-vivo (C. elegans) · parallel cloning of *daf-16* as forkhead TF; identified three alternatively spliced isoforms (daf-16a1, daf-16a2, daf-16b) with distinct forkhead DNA-binding domains; epistasis with *daf-2* and *age-1*; daf-16a::GFP expressed broadly in ectoderm, muscle, intestine, neurons (not pharynx); DAF-16a 65% identical to FKHR and 62% to AFX in forkhead domain · model: C. elegans · local PDF available

[^tissenbaum2001]: doi:10.1038/35065638 · Tissenbaum HA, Guarente L · in-vivo (C. elegans) · *sir-2.1* OE extends lifespan in DAF-16-dependent manner; *daf-16* RNAi abolishes *sir-2.1* longevity · n per strain = 80–451 (per-strain values in paper) · model: C. elegans · local PDF available

[^murphy2003]: doi:10.1038/nature01789 · Murphy CT, McCarroll SA, Bargmann CI, Fraser A, Kamath RS, Ahringer J, Li H, Kenyon C · in-vivo / microarray (C. elegans) · systematic identification of DAF-16 target genes; Class I (activated) and Class II (repressed) regulon; *sod-3*, *mtl-1*, *hsp-12.6*, *lys-7* as representative Class I targets · model: C. elegans · local PDF available

[^hsu2003]: doi:10.1126/science.1083701 · Hsu AL, Murphy CT, Kenyon C · in-vivo (C. elegans) · HSF-1 and DAF-16 cooperate downstream of *daf-2*; partial independence of HSF-1 and DAF-16 longevity programs · model: C. elegans · not_oa #gap/no-fulltext-access

[^apfeld2004]: doi:10.1101/gad.1255404 · Apfeld J, O'Connor G, McDonagh T, DiStefano PS, Curtis R · in-vivo (C. elegans) · *aak-2* LoF shortens lifespan ~12%; *aak-2;daf-16* double mutant ~15% shorter than either single → parallel relationship; *aak-2* OE extends lifespan ~13% · model: C. elegans · local PDF available

[^kenyon2010]: doi:10.1038/nature08980 · Kenyon CJ · review (Nature) · comprehensive review of IIS-FOXO axis across species; DAF-16 target genes; mammalian extrapolation; magnitude attenuation · local PDF available
