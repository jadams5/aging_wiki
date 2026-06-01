---
type: protein
aliases: [NANOG_HUMAN, hNanog, homeobox protein Nanog, homeobox transcription factor Nanog]
uniprot: Q9H9S0
ncbi-gene: 79923
hgnc: 20857
mouse-ortholog: Nanog
ensembl: ENSG00000111704
druggability-tier: 4
caused-by: []
causes: []
key-domains: [homeodomain, NDP-dimerization, WR-transactivation]
key-ptms: []
pathways: ["[[oct4-sox2-nanog]]", "[[pluripotency-network]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
known-interactors: ["[[oct4]]", "[[sox2]]", "[[sall4]]", "[[esrrb]]", "[[klf4]]"]
genage-id: null
mr-causal-evidence: not-tested
gtex-aging-correlation: null
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Chambers 2007 (Nature) PDF verified end-to-end; Loh 2006 (Nat Genet) PDF verified end-to-end; Chambers 2003 (Cell) PDF verified pages 1-6 (all results); Mitsui 2003 (Cell) PDF verified pages 1-6 (all results); Boyer 2005 download failed (not_oa), claim left as-is pending re-check; Yu 2007 not_oa (closed access) — claim unverified but consistent with widely-established iPSC literature; Lapasset 2011 cross-checked against verified partial-reprogramming.md (no PDF re-read per SOP); UniProt Q9H9S0 identity fields verified via REST API; NCBI Gene 79923 confirmed via eutils; HGNC:20857 confirmed via UniProt xref; Ensembl ENSG00000111704 confirmed via UniProt xref; Open Targets druggability tier 4 confirmed via Platform API (all tractability flags false); GenAge null confirmed consistent with NANOG not appearing in aging-gene databases"
---

# NANOG

NANOG is a homeodomain transcription factor and core member of the OCT4-SOX2-NANOG pluripotency triad in embryonic stem cells (ESCs) and induced pluripotent stem cells (iPSCs). Its aging relevance is primarily indirect: in somatic cells NANOG is silenced by promoter methylation, but it can be reactivated as part of multi-factor reprogramming cocktails that erase aging hallmarks in senescent and centenarian human cells in vitro. It is not a Yamanaka factor in the canonical four-factor OSKM sense — see disambiguation below.

**Disambiguation (important):** NANOG is NOT part of the original four-factor Yamanaka cocktail (OCT4, SOX2, KLF4, c-MYC = OSKM) used in the Takahashi & Yamanaka 2006 mouse iPSC study. NANOG appears in two distinct reprogramming contexts relevant to this wiki:
1. The **Thomson 5-factor cocktail** (OCT4 + SOX2 + NANOG + LIN28 + KLF4) for human iPSC reprogramming (Yu 2007, *Science*) [^yu2007].
2. The **Lapasset 2011 six-factor OSKMNL cocktail** (OCT4 + SOX2 + KLF4 + c-MYC + NANOG + LIN28), required for full iPSC reprogramming of senescent and centenarian human cells [^lapasset2011].

The Yang 2023 (*Cell*) partial reprogramming study uses **three-factor OSK only** (OCT4, SOX2, KLF4) — NANOG is explicitly not included in that protocol. See [[partial-reprogramming]] for the full comparison table.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q9H9S0 (NANOG_HUMAN) — manually curated (Swiss-Prot) |
| NCBI Gene | 79923 |
| HGNC symbol | NANOG |
| Ensembl | ENSG00000111704 |
| Mouse ortholog | Nanog (Q80Z64; one-to-one; expression pattern and function highly conserved) |
| Length | 305 amino acids (canonical isoform) |
| Molecular weight | ~34.6 kDa |
| Chromosomal location | 12p13.31 (human) |

**Naming note:** NANOG derives from the mythological Irish word "Tír na nÓg" (Land of the Young), given by Chambers et al. 2003 who identified it in a functional screen for pluripotency factors [^chambers2003].

**Disambiguation — page resolution:** No `pathways/nanog.md` exists. The relevant network-level pages are `[[oct4-sox2-nanog]]` (planned stub — the core pluripotency triad circuit) and `[[pluripotency-network]]` (planned stub — broader pluripotency signaling). This protein page is the canonical `[[nanog]]` resolution.

---

## Domain structure

NANOG has a tripartite architecture typical of homeodomain transcription factors, with large flanking disordered transactivation regions:

| Domain | Residues (approx.) | Function |
|---|---|---|
| N-terminal disordered region | 1–94 | Contains NDP (NANOG dimerization peptide); contributes to homomeric dimerization |
| Homeodomain (HD) | 95–154 | Sequence-specific DNA binding; canonical consensus 5'-TAAT[GT][GT]-3' |
| Linker / central | 155–195 | Largely unstructured; not well characterized |
| WR domain (Trp repeat) | 196–240 | Tryptophan-repeat-containing; C-terminal transactivation activity |
| C-terminal transactivation domain | 241–305 | Additional transactivation surface |

The homeodomain binds the NANOG response element (NRE) consensus 5'-TAAT[GT][GT]-3' (related to the canonical TALE-class motif 5'-TAATGG-3'). Unlike OCT4, which uses a bipartite POU-S + POU-HD domain for DNA recognition, NANOG uses a single three-helix homeodomain (helices I–III; helix III is the recognition helix that contacts the major groove).

The NDP motif in the N-terminal disordered region mediates NANOG homomeric dimerization, which enhances transcriptional activation and is thought to contribute to the cooperativity of NANOG binding at certain target loci #gap/unsourced — specific quantification of dimerization contribution is not confirmed from a primary source here.

---

## Function: pluripotency sustaining factor

### Discovery

NANOG was identified simultaneously and independently by two groups in 2003 — Chambers et al. (*Cell*, doi:10.1016/s0092-8674(03)00392-1) via functional expression cloning in embryonic stem cells [^chambers2003], and Mitsui et al. (*Cell*, doi:10.1016/s0092-8674(03)00393-3) via a bioinformatics screen for homeodomain genes expressed specifically in the epiblast [^mitsui2003]. Both groups showed that Nanog is essential for maintaining the inner cell mass (ICM) pluripotency identity: Nanog-null embryos fail to establish an epiblast and instead form only primitive endoderm.

NANOG prevents differentiation specifically toward the **primitive endoderm** fate — this is distinct from OCT4, which prevents differentiation toward trophectoderm. Together with OCT4 and SOX2, NANOG defines the three-way transcriptional axis that maintains the pluripotent state.

### The OCT4-SOX2-NANOG triad

NANOG functions as part of an autoregulatory positive-feedback circuit with OCT4 and SOX2:

- OCT4 and SOX2 co-occupy the *Nanog* promoter and activate its expression; loss of either disrupts NANOG expression.
- NANOG reciprocally sustains *Oct4* expression by co-occupying the *Oct4* promoter.
- All three factors co-bind at thousands of shared target loci in pluripotent cells [^loh2006] [^boyer2005].

The Loh 2006 genomic mapping study (*Nature Genetics*, doi:10.1038/ng1760) performed ChIP-PET (chromatin immunoprecipitation paired-end ditags) in mouse ESCs and showed that OCT4 and NANOG co-occupy a substantial fraction of their target genes: of 776 Oct4-bound genes, 345 (44.5%) were also bound by NANOG within 50 kb of the transcription unit, establishing that the two factors function as a network rather than independent regulators (Fig. 3b) [^loh2006].

Boyer et al. 2005 (*Cell*, doi:10.1016/j.cell.2005.08.020) mapped the core transcriptional regulatory circuitry in **human** ESCs and showed that OCT4, SOX2, and NANOG together occupied the promoters of active genes as well as repressed developmental regulators (via Polycomb), defining the human pluripotency transcriptional hub [^boyer2005].

### Heterogeneous expression and two-state model

Importantly, NANOG expression is **heterogeneous** within a population of self-renewing ESCs. Chambers et al. 2007 (*Nature*, doi:10.1038/nature06403) demonstrated that Nanog-null ESCs remain pluripotent and capable of self-renewal — challenging the simple model that NANOG is strictly required for all self-renewal [^chambers2007]. The key finding was that:

- **NANOG-high cells** are in a "ground" or "naïve" pluripotent state; they resist differentiation and contribute efficiently to the germline.
- **NANOG-low cells** are transiently primed toward differentiation but can re-acquire the NANOG-high state spontaneously.
- NANOG is **dispensable for somatic pluripotency** (self-renewal and multi-lineage differentiation capacity), but **required for specification of the germline** (primordial germ cells fail to form without Nanog at the genital ridge).

This fluctuation model implies that the pluripotency network has built-in bistability, with NANOG acting as a stabilizer of the ground pluripotent state rather than an obligate constituent of every self-renewing cycle. This is mechanistically important for interpreting NANOG's role in reprogramming: NANOG likely enhances reprogramming efficiency by stabilizing the fully pluripotent state once initiated, rather than driving entry into pluripotency from scratch.

---

## Role in cellular reprogramming

### Thomson 5-factor human iPSC cocktail (Yu 2007)

The Yamanaka four-factor OSKM cocktail (OCT4, SOX2, KLF4, c-MYC) was originally demonstrated in mouse. Yu et al. 2007 (*Science*, doi:10.1126/science.1151526) reported the first human iPSC lines using a **different** factor combination: OCT4, SOX2, NANOG, LIN28 (and in some experiments KLF4) delivered via lentiviral vectors into human foreskin fibroblasts [^yu2007]. This demonstrated that NANOG can substitute for KLF4 + c-MYC in human cell reprogramming contexts and opened a parallel line of reprogramming research that avoided the oncogenic c-MYC factor.

The Thomson cocktail (sometimes called OSNL or SONL — OCT4-SOX2-NANOG-LIN28) is now well established for human iPSC derivation and is routinely used because it lacks c-MYC, reducing the tumorigenicity risk associated with c-MYC re-expression. NANOG is essential in this cocktail.

### Lapasset 2011: six-factor reprogramming of senescent cells (OSKMNL)

The most directly aging-relevant application of NANOG is the Lapasset et al. 2011 (*Genes & Development*, doi:10.1101/gad.173922.111) study, which is verified and cited in [[in-vivo-partial-reprogramming-therapy]] [^lapasset2011]. Key findings:

- Standard four-factor OSKM was **insufficient** to efficiently reprogram senescent human fibroblasts (derived from a 74-year-old donor) and centenarian cells (from donors aged 92–101 years).
- A **six-factor cocktail** — OSKMNL (OCT4 + SOX2 + KLF4 + c-MYC + NANOG + LIN28) — successfully generated iPSCs from these aged donor cells.
- The resulting iPSCs were indistinguishable from human ESCs in telomere length, gene expression profile, oxidative stress markers, and mitochondrial metabolism — meaning full reprogramming **erased all measurable aging hallmarks** in the context of a pluripotent cell state.
- Importantly, when these rejuvenated iPSCs were re-differentiated, the resulting cells recovered youthful characteristics, suggesting that full reprogramming resets aging not merely at the transcriptional level but at a deeper epigenetic level.

The specific contribution of NANOG in the six-factor cocktail is not dissected in the Lapasset study: it is not established whether NANOG is individually required to reprogram senescent cells, or whether the combination of NANOG + LIN28 together provides the permissive signal that standard OSKM lacks. #gap/no-mechanism

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — OCT4-SOX2-NANOG triad is active in human ESCs and iPSCs; all three factors are conserved |
| Phenotype conserved in humans? | partial — full reprogramming erasure of aging markers shown in human cells in vitro; no in-vivo human data |
| Replicated in humans? | no — all aging-specific data is in vitro; no in-vivo human reprogramming studies exist |

#gap/needs-human-replication — The Lapasset 2011 finding that aging markers can be erased by full reprogramming has not been replicated in vivo or in human tissues. The clinical relevance of the in-vitro observation is uncertain.

---

## Aging relevance

NANOG is not expressed in normal adult somatic tissues under physiological conditions. Its promoter is stably methylated in differentiated cells. Its aging relevance is therefore exclusively through three lenses:

### 1. Reprogramming-mediated aging erasure (Lapasset 2011)

As described above, NANOG is a required component of the six-factor OSKMNL cocktail that enables full iPSC reprogramming of senescent and centenarian human cells, which erases aging hallmarks [^lapasset2011]. This places NANOG as part of the "full reprogramming" control arm in the intellectual landscape of partial reprogramming: partial reprogramming (OSK or OSKM transiently) attempts to capture the epigenetic reset component without requiring the full NANOG + LIN28 augmentation needed to overcome senescence barriers.

### 2. Barrier to reprogramming in aged cells

The failure of standard OSKM to efficiently reprogram senescent cells (Lapasset 2011), and the requirement for NANOG (+ LIN28) to overcome this barrier, implies that NANOG provides a functional signal not delivered by the canonical four factors alone. Possible mechanisms include:
- Suppression of p16/ARF and p21-driven cell cycle arrest that blocks progression through reprogramming intermediate states in senescent cells.
- Enhanced NF-κB and SASP gene repression during reprogramming (speculative) #gap/no-mechanism.
- Telomere-lengthening facilitation via LIN28 → let-7 suppression → TERT upregulation axis #gap/unsourced.

### 3. Cancer stem cell reactivation (tumor context)

NANOG is aberrantly re-expressed in multiple cancer types, most notably:
- **Glioblastoma** — NANOG-positive cells in GBM exhibit stem cell-like properties and therapy resistance.
- **Breast cancer stem cells** — NANOG expression correlates with the cancer stem cell phenotype and metastatic potential.
- **Germ cell tumors** — like OCT4, NANOG is a diagnostic marker for gonadal and extragonadal germ cell tumors (seminomas, embryonal carcinoma).

The re-expression of NANOG in somatic tumors follows the same rule as OCT4 and SOX2: demethylation of the promoter CpGs, often driven by oncogenic signaling. In the aging context, the question of whether age-associated genome-wide hypomethylation could stochastically reactivate NANOG in somatic cells and contribute to tumorigenesis is open. #gap/no-mechanism #gap/needs-replication

---

## Regulation: silencing in somatic cells and reactivation in reprogramming

### Silencing in differentiated cells

Upon differentiation of ESCs, NANOG is silenced by:
1. **CpG methylation** of the NANOG promoter — the primary stable silencing mechanism; inherited mitotically and responsible for the epigenetic barrier to re-expression in somatic cells.
2. **H3K27me3 deposition** (Polycomb-mediated) — an earlier reversible repressive mark laid down during early differentiation.
3. **Loss of OCT4-SOX2 co-activator support** — as OCT4 and SOX2 are themselves silenced upon differentiation, the autoregulatory feedforward loop that sustains NANOG expression dissolves.

### Reactivation in reprogramming

In multi-factor reprogramming, exogenous OCT4 and SOX2 transgene-derived proteins begin reconstituting the positive feedback circuit. Endogenous NANOG is one of the late markers to be activated during reprogramming progression — its promoter demethylation and transcriptional reactivation is often used as a benchmark for successful pluripotency induction (full reactivation of endogenous NANOG = iPSC state). Incomplete reactivation of endogenous NANOG indicates partially reprogrammed or "aberrant" iPSC states.

---

## Key interactors

| Interactor | Nature of interaction | Functional relevance |
|---|---|---|
| [[oct4]] | Protein-protein at composite OCT4-SOX2-NANOG elements; transcriptional co-regulation | Core pluripotency triad member; mutually sustaining |
| [[sox2]] | Indirect co-regulator via shared target occupancy | Core pluripotency triad member |
| [[klf4]] | Co-expressed in iPSC reprogramming; shares subset of genomic targets | Shared target occupancy in pluripotency network |
| [[esrrb]] | NANOG transcriptional target; sustains NANOG expression in naïve conditions | Naïve pluripotency stabilizer; part of the extended pluripotency network |
| [[sall4]] | Direct protein-protein interaction; co-occupies NANOG-bound genomic regions | Pluripotency network reinforcement; contributes to OCT4-SOX2-NANOG hub |

---

## Pathway membership

- [[oct4-sox2-nanog]] — the core pluripotency transcriptional network (planned stub — no pathway page exists yet)
- [[pluripotency-network]] — broader pluripotency signaling including Wnt, LIF/JAK-STAT, PI3K axes (planned stub)

**Note:** Like OCT4 and SOX2, NANOG has no canonical membership in the standard aging-pathway pages (mTOR, AMPK, sirtuin, etc.) under normal physiological conditions. Its aging relevance is exclusively through reprogramming contexts.

---

## Druggability

NANOG is assigned **druggability tier 4** (aging-context convention, per CLAUDE.md). Reasons:
- NANOG is a transcription factor with no enzymatic active site — it lacks a pocket amenable to conventional small-molecule binding.
- No clinical drug targets NANOG directly.
- Indirect modulation is possible — e.g., small molecules that demethylate the NANOG promoter (general DNMT inhibitors) or enhance NANOG-driven reprogramming — but none are aging-specific validated probes.
- The cancer contexts where NANOG is re-expressed do not have approved NANOG-targeting therapies.

Open Targets Platform API (ENSG00000111704) queried 2026-05-07: all tractability flags are false across small-molecule (SM), antibody (AB), PROTAC (PR), and other-clinical (OC) modalities — confirming tier 4. No approved drug, advanced clinical, Phase 1 clinical, structure-with-ligand, high-quality ligand, or high-quality pocket is listed.

---

## Limitations and gaps

#gap/needs-human-replication — All aging-relevant data (Lapasset 2011) is in-vitro full iPSC reprogramming; no in-vivo data in aged humans exists. The Lapasset finding that NANOG is required to overcome the senescent-cell barrier to reprogramming has not been independently replicated.

#gap/needs-replication — The Lapasset 2011 six-factor OSKMNL result has not been replicated by an independent group with the same level of aging-marker erasure documentation. Single-lab finding.

#gap/no-mechanism — The specific functional contribution of NANOG (vs LIN28) in enabling OSKMNL to reprogram senescent cells is not dissected. Which downstream program NANOG activates that OSKM cannot is unknown.

#gap/no-mechanism — Whether NANOG heterogeneous expression in ESCs (the NANOG-high / NANOG-low bistability; Chambers 2007) is preserved in partial reprogramming contexts — and whether it contributes to incomplete vs complete epigenetic rejuvenation — is unknown.

#gap/needs-canonical-id — GenAge-id is null; NANOG does not appear in GenAge-human or GenAge-model-organisms databases as of 2026-05-07. This is consistent with NANOG having no direct role in somatic aging biology; its aging relevance is reprogramming-tool-mediated, not a cell-autonomous aging effector.

#gap/unsourced — GTEx aging correlation not populated; NANOG is not expressed in adult somatic tissues in GTEx, so a Spearman ρ across tissues would not be meaningful. Verify on next lint pass that omission is appropriate rather than an oversight.

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[oct4]] | Core triad partner; "O" in OSK/OSKM; shares thousands of genomic targets with NANOG |
| [[sox2]] | Core triad partner; co-occupies NANOG target loci |
| [[klf4]] | Reprogramming partner in OSKM and OSK |
| [[esrrb]] | Downstream NANOG target; reinforces naïve pluripotency |
| [[sall4]] | Direct NANOG interactor and co-occupant |
| [[partial-reprogramming]] | Central process page; NANOG is NOT in OSK/OSKM but IS in Lapasset's OSKMNL cocktail |
| [[in-vivo-partial-reprogramming-therapy]] (verified) | Verified intervention page that cites Lapasset 2011 with full NANOG context |
| [[epigenetic-alterations]] | The hallmark that full reprogramming erases (Lapasset 2011); partially targeted by OSK partial reprogramming |
| [[stem-cell-exhaustion]] | The hallmark NANOG re-expression could in principle combat via reprogramming of aged stem cell pools |
| [[cellular-senescence]] | The cellular state that the Lapasset cocktail (including NANOG) overcomes to enable iPSC reprogramming |
| [[hypotheses/information-theory-of-aging]] | Theoretical framework that partial reprogramming (OSK, not NANOG-inclusive) is designed to test |
| [[c-myc]] | Included in Lapasset OSKMNL; excluded from safer OSK protocols |

---

## Footnotes

[^chambers2003]: doi:10.1016/s0092-8674(03)00392-1 · Chambers I, Colby D, Robertson M, Nichols J, Lee S, Tweedie S, Smith A · *Cell* 2003 · in-vitro (functional expression cloning) + in-vivo (Nanog-null mouse embryos) · NANOG identified via functional screen; Nanog-null embryos fail to form epiblast (ICM converts to primitive endoderm); foundational discovery paper · 3,231 citations; citation_percentile=100; archive status: pending download

[^mitsui2003]: doi:10.1016/s0092-8674(03)00393-3 · Mitsui K, Tokuzawa Y, Itoh H, Segawa K, Murakami M, Takahashi K, Maruyama M, Maeda M, Yamanaka S · *Cell* 2003 · in-vitro + in-vivo (Nanog-null mouse embryos) · NANOG identified independently by bioinformatics screen; Nanog required for maintenance of pluripotency in mouse epiblast and ES cells · 3,180 citations; citation_percentile=100; archive status: pending download

[^loh2006]: doi:10.1038/ng1760 · Loh YH, Wu Q, Chew JL, Vega VB, Zhang W, Chen X, Bourque G et al. · *Nature Genetics* 2006 · in-vitro (ChIP-PET: chromatin immunoprecipitation paired-end ditags) · model: mouse ESCs · OCT4 and NANOG binding-site mapping; 1,083 high-confidence Oct4 binding sites and 3,006 Nanog binding sites identified; at gene level (within 50 kb of transcription unit): 345 of 776 Oct4-bound genes (44.5%) also bound by Nanog (Fig. 3b); dual role: activate pluripotency genes, repress developmental regulators · 2,434 citations; citation_percentile=100; local PDF available (10.1038_ng1760.pdf)

[^boyer2005]: doi:10.1016/j.cell.2005.08.020 · Boyer LA, Lee TI, Cole MF, Johnstone SE, Levine SS, Zucker JP et al. (Young RA group) · *Cell* 2005 · in-vitro (ChIP-chip) · model: human ESCs · OCT4, SOX2, NANOG co-occupy a core set of promoters in human ESCs; activate pluripotency genes + recruit Polycomb to repress lineage-specific developmental genes · 4,427 citations; citation_percentile=100; archive status: pending download

[^chambers2007]: doi:10.1038/nature06403 · Chambers I, Silva J, Colby D, Nichols J, Nijmeijer B, Robertson M, Vrana J, Jones K, Grotewold L, Smith A · *Nature* 2007 · in-vitro + in-vivo (Nanog-null mouse) · NANOG-low cells in ESC populations remain pluripotent; NANOG fluctuates stochastically; Nanog dispensable for somatic pluripotency but required for germ cell development at the genital ridge · 1,507 citations; citation_percentile=100; local PDF available (10.1038_nature06403.pdf)

[^yu2007]: doi:10.1126/science.1151526 · Yu J, Vodyanik MA, Smuga-Otto K, Antosiewicz-Bourget J, Frane JL, Tian S, Nie J, Jonsdottir GA, Ruotti V, Stewart R, Slukvin II, Thomson JA · *Science* 2007 · in-vitro (lentiviral transduction) · model: human foreskin fibroblasts + other somatic cell types · five-factor (OCT4-SOX2-NANOG-LIN28 ± KLF4) human iPSC derivation; first human iPSC paper alongside Takahashi & Yamanaka 2007; demonstrates NANOG replaces c-MYC in human reprogramming context · 10,177 citations; citation_percentile=100; archive status: not_oa (closed access)

[^lapasset2011]: doi:10.1101/gad.173922.111 · Lapasset L, Milhavet O, Prieur A, Besnard E, Babled A, Aït-Hamou N, Leschik J, Pellestor F, Ramirez JM, De Vos J, Lehmann S, Lemaitre JM · *Genes & Development* 2011 · in-vitro · model: senescent human fibroblasts (74-year-old donor) and centenarian cells (92–101-year-old donors) · six-factor OSKMNL (OCT4+SOX2+KLF4+c-MYC+NANOG+LIN28) required to overcome senescence barrier; standard OSKM insufficient; iPSCs from aged/centenarian cells indistinguishable from ESCs in telomere length, gene expression, mitochondrial function; aging markers erased · 546 citations; local PDF available at DOI lookup 10.1101_gad.173922.111.pdf #gap/needs-replication
