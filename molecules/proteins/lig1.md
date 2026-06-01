---
type: protein
aliases: [DNLI1, DNA ligase I, LIG1]
uniprot: P18858
ncbi-gene: 3978
hgnc: 6598
ensembl: ENSG00000105486
genage-id: null
mouse-ortholog: Lig1
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
pathways: ["[[base-excision-repair]]", "[[nucleotide-excision-repair]]", "[[dna-damage-response]]"]
hallmarks: ["[[genomic-instability]]"]
known-interactors: ["[[pcna]]", "[[fen1]]", "[[polb]]", "[[xrcc1]]"]
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Pascal 2004 (local PDF) fully verified — domain boundaries, active-site residues, PIP-box residues, resolution, and mechanism all cross-checked. Pascucci 1999 (downloaded) and Levin 2000 (downloaded) fully verified — long-patch BER reconstitution and PIP-box residue claims cross-checked. Soza 2009 (downloaded PMC OA) fully verified — model cell line, LIG1 activity level, checkpoint pathway, and cell morphology findings cross-checked. UniProt P18858 verified via REST API — 919 aa, K568 active site, PTM list, and natural variants confirmed. Barnes 1992, Bentley 1996, Bentley 2002, Prigent 1994 are not_oa — claims from those sources tagged accordingly."
---

# LIG1 (DNA Ligase I)

The primary mammalian DNA ligase for proliferating cells. LIG1 executes the terminal phosphodiester-bond-forming step in three major repair and replication contexts: **Okazaki fragment ligation** during lagging-strand synthesis, **long-patch base excision repair (BER)** after PCNA/Pol δ gap-filling and FEN1 flap removal, and **nucleotide excision repair (NER)** after 24–32-nt gap synthesis. Its PCNA-dependent recruitment ties genome-maintenance fidelity directly to replication fork activity, making LIG1 function a potential rate-limiter for genome integrity in aging proliferating tissues.

## Identity

- **UniProt:** P18858 (DNLI1_HUMAN)
- **NCBI Gene:** 3978
- **HGNC symbol:** LIG1
- **Ensembl:** ENSG00000105486
- **Mouse ortholog:** Lig1 (one-to-one; highly conserved)
- **Length:** 919 amino acids (canonical isoform)
- **Subcellular location:** Nucleus (chromatin-associated at replication forks and repair sites)
- **GenAge:** Not listed #gap/needs-canonical-id — LIG1 has not been curated into the GenAge-human or GenAge-models database; aging-relevance is inferred from LIG1-null/hypomorph phenotypes and pathway membership.

## Domain architecture

LIG1 adopts a ring-like structure that completely encircles nicked DNA during catalysis [^pascal2004]:

| Segment | Residues | Function |
|---|---|---|
| N-terminal regulatory domain | 1–232 | Disordered in solution; contains PCNA-binding site (NLS, Polβ-interaction region); not included in crystal structure [^pascal2004] |
| DNA-binding domain (DBD) | 262–535 | Binds the minor groove flanking the nick on both sides; 12 α-helices in a two-fold symmetric arrangement; unique to eukaryotic ligases [^pascal2004] |
| Adenylation domain (AdD) | 536–748 | Carries active-site K568; forms the covalent ligase-AMP intermediate; contains conserved motifs I–V [^pascal2004] |
| OB-fold domain (OBD) | 749–919 | Contacts the major groove downstream of the nick; completes the protein ring around DNA; contains motif VI [^pascal2004] |

The three C-terminal domains together encircle the nicked DNA helix, with K568 forming a transient adenylyl-lysine intermediate [^pascal2004]. This "ring-clamp" mechanism is structurally analogous to other ATP-dependent DNA ligases and has been visualized at 3 Å resolution in the LIG1–AppDNA crystal structure (PDB: 1X9N) [^pascal2004]. The DBD contacts both the AdD and the OBD to complete the ring, and provides most of the DNA binding affinity [^pascal2004].

**PIP-box:** Residues 2–9 of the N-terminal domain recruit LIG1 to PCNA via a conserved 8-amino-acid PIP-box motif. The adjacent phenylalanines at positions 8 and 9 are the critical PCNA-contact residues; substituting both with alanines abolishes PCNA binding without affecting catalytic activity or Polβ binding [^levin2000]. Pascal 2004 identifies the PIP-box as spanning residues 2–9 in Figure 1b [^pascal2004].

**Key PTMs (UniProt P18858, verified via REST API 2026-05-07):** Phosphorylation at Ser47, Ser49, Ser51, Ser66, Ser76, Ser141, Thr195, Ser199, Ser201, Thr207, Ser229, Ser230, Thr233, Thr798, Ser801, Ser819, Ser911, Ser913; acetylation at Lys226. Cell-cycle-dependent phosphorylation at Ser51, Ser66, Ser76, and Ser91 (the latter reported by Ferrari 2003 but not in the current canonical UniProt record) is proposed to regulate LIG1 association with replication factories — hyperphosphorylation in M phase when replication complexes are inactive [^soza2009]. Functional significance of most individual PTM sites is not fully characterized. #gap/no-mechanism — mechanism by which M-phase hyperphosphorylation modulates replication-factor interactions not directly demonstrated.

## Mechanism of action

ATP-dependent nick ligation proceeds in three chemical steps:

1. **Adenylation of ligase:** The active-site Lys568 attacks ATP; AMP is transferred to form a covalent ligase-AMP intermediate with release of PPi.
2. **Adenylation of nick:** The AMP moiety is transferred to the 5'-phosphate of the nick, forming a 5'-adenylated intermediate (App-DNA).
3. **Phosphodiester bond formation:** The 3'-OH attacks the adenylated phosphate; AMP is released and the phosphodiester bond is sealed.

Each step requires Mg²+. The reaction is thermodynamically irreversible under physiological conditions.

## Biological roles

### DNA replication — Okazaki fragment ligation

On the lagging strand, RNA primers are removed by RNase H1/FEN1 and the resulting gaps are filled by Pol δ. LIG1 seals the final nick between adjacent Okazaki fragments in a PCNA-dependent manner [^levin2000]. This is quantitatively the dominant ligation event in proliferating cells — each cell division requires ~50 million Okazaki fragment ligation events in human cells. #gap/unsourced — the 50 million figure is derived from genome size and average Okazaki fragment length (~200 nt in humans); primary citation not confirmed.

When LIG1 is absent, unligated nicks persist between Okazaki fragments, leading to replication fork collapse, double-strand break (DSB) formation, and chromosomal instability [^bentley2002].

### Long-patch base excision repair

In long-patch BER (displacement synthesis of 2–10 nt), PCNA recruits Pol δ/ε for gap-filling; FEN1 removes the displaced flap; LIG1 seals the resulting nick. Pascucci 1999 showed that repair patches extend to a maximum of 10 nt 3' to the lesion, with approximately 70% of synthesis confined to 2–4-nt patches — LIG1 acts as a "patch size mediator" that limits processive Pol δ/ε synthesis [^pascucci1999]. LIG1 is the terminal ligase for long-patch BER, distinguished from short-patch BER where the [[lig3]]–[[xrcc1]] complex seals single-nucleotide gaps [^pascucci1999]. All six components (AP endonuclease, RFC, PCNA, Pol δ or ε, FEN1, and LIG1) are required for complete reconstitution of long-patch BER in vitro [^pascucci1999].

LIG1's PCNA interaction is required for efficient long-patch BER in proliferating cells: 46BR.1G1 cells (with ~3–5% of normal LIG1 activity) are defective in long-patch but not short-patch BER, and this defect is corrected by adding wild-type but not PIP-box-mutant LIG1 protein [^levin2000].

### Nucleotide excision repair

After excision of 24–32 nt bulky adducts and gap-filling by Pol δ/ε (in proliferating cells) or Pol κ (in non-dividing cells), LIG1 seals the resulting nick. This step is shared with [[nucleotide-excision-repair]] (global-genome NER and transcription-coupled NER sub-pathways).

## The mammalian DNA ligase trio

LIG1 is one of three mammalian ATP-dependent DNA ligases:

| Ligase | Primary roles | Partners | Compartment |
|---|---|---|---|
| **LIG1** | Replication (Okazaki), long-patch BER, NER | PCNA, FEN1, Pol δ | Nuclear |
| [[lig3]] | Short-patch BER, NHEJ backup, meiotic recombination | XRCC1 (nuclear), XRCC1 (mt) | Nuclear + mitochondrial |
| LIG4 | NHEJ (canonical DSB repair) | XRCC4, XLF/NHEJ1 | Nuclear |

LIG1 and LIG3 share overlapping functions in nuclear BER, but LIG1 is specifically required for replication-associated ligation events where PCNA loading occurs. LIG4 is non-redundant for canonical NHEJ.

## Role in aging and genomic instability

### Mouse genetic models

**LIG1 null (Lig1−/−):** Complete knockout is lethal perinatally due to failure of fetal liver erythropoiesis; mice die with severe anemia shortly after birth [^bentley1996]. Conditional or cell-type-specific deletion is required to study adult phenotypes. Note: the brief characterization of "embryonic lethality" in some secondary sources is imprecise — Bentley 1996 showed that lethality is haematopoietic rather than universally developmental; LIG1-null MEFs can be derived and propagated, though they display replication defects [^bentley2002].

**LIG1 null cells (MEFs):** LIG1-null mouse embryonic fibroblasts show normal short-patch BER activity but markedly altered DNA replication kinetics and reduced genome stability — elevated sister-chromatid exchange, micronuclei, and replication fork stalling [^bentley2002]. This demonstrates that the primary genomic-instability phenotype of LIG1 loss is replication-associated rather than repair-associated.

**Replication-associated DNA damage (hypomorphic LIG1 contexts):** Partial LIG1 deficiency in 46BR.1G1 cells (retaining 3–5% of normal LIG1 activity from the patient-derived cell line) leads to accumulation of both single-stranded and double-stranded DNA breaks, γH2AX foci forming in S phase, activation of the ATM/Chk2 (but not ATR/Chk1) checkpoint, and cell morphology changes — all without blocking cell cycle progression [^soza2009]. The DNA damage arises "behind" the replication fork from delayed Okazaki fragment maturation, not "at" the fork [^soza2009]. This partial-deficiency phenotype is most relevant to aging biology — complete loss is lethal; partial loss may model the declining efficiency seen with age.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | LIG1 is evolutionarily conserved from yeast (CDC9) through mammals; ATP-dependent ligase mechanism identical |
| Phenotype conserved in humans? | yes | Human hereditary LIG1 deficiency (immunodeficiency + hypersensitivity to DNA-damaging agents) mirrors cellular hypersensitivity in mouse models |
| Replicated in humans? | partial | Hereditary deficiency cases described [^barnes1992]; natural aging decline in LIG1 activity not directly replicated with prospective human data #gap/needs-human-replication |

### Human hereditary LIG1 deficiency

Only two cases of hereditary LIG1 deficiency have been documented in the literature [^barnes1992][^prigent1994]. The index case (patient 46BR) carried biallelic hypomorphic LIG1 mutations (reduced but not abolished activity) and presented with:

- Recurrent infections and immunodeficiency (lymphopenia, hypogammaglobulinemia) — now formally termed **Immunodeficiency 96 (IMD96)** by OMIM
- Delayed growth and development
- Extreme cellular hypersensitivity to alkylating agents and UV irradiation

The 46BR patient cells have been used extensively as a cell-biological model for partial LIG1 deficiency. The immunodeficiency phenotype reflects the high replicative demand of lymphocyte proliferation during antigen responses — tissues with high proliferative turnover are most acutely sensitive to LIG1 insufficiency.

Known disease-causing variants in LIG1 include E566K (Glu566Lys) and R771W (Arg771Trp) (UniProt P18858). E566K abolishes adenine binding to the AdD active site, explaining the near-complete loss of enzymatic activity; R771W (in OBD loop L12) is defective in DNA substrate interaction [^pascal2004]. UniProt confirms both as IMD96-associated with severely reduced DNA ligase activity [^pascal2004]. Both reduce catalytic activity without abolishing it entirely. #gap/needs-replication — only 2 cases reported; phenotypic spectrum may be broader.

### LIG1 activity and aging

LIG1 protein levels and catalytic activity have been reported to decline modestly in some tissues with age, though the literature is limited and tissue-specific. #gap/unsourced — this claim is inferred from indirect evidence; Soza 2009 characterizes a patient-derived cell line with constitutional LIG1 deficiency and does not demonstrate age-related LIG1 decline. Systematic age-stratified measurements of LIG1 activity in human tissues are lacking. #gap/needs-human-replication The mechanistic consequence of even modest LIG1 decline in aging proliferating tissues would be:

1. Accumulation of unligated nicks between Okazaki fragments → DSB formation at replication forks
2. Reduced long-patch BER completion → persistence of oxidized/alkylated base lesion-derived BER intermediates
3. Increased mutation burden from error-prone tolerance pathways processing unligated nicks

These consequences converge on [[genomic-instability]] — the foundational hallmark linking LIG1 insufficiency to aging biology.

## Pathway membership

- [[base-excision-repair]] — long-patch sub-pathway; terminal ligation after PCNA/Pol δ gap-filling and FEN1 flap removal
- [[nucleotide-excision-repair]] — terminal ligation after 24–32 nt gap-filling
- [[dna-damage-response]] — downstream effector; responds to replication fork stalling and nick accumulation
- [[homologous-recombination]] — secondary role in recombination-associated repair #gap/unsourced — LIG1 has been implicated in HR resolution in some contexts; primary source not confirmed here

## Key interactors

- [[pcna]] — primary recruitment scaffold; PIP-box (residues ~3–9) interaction required for replication-coupled ligation [^levin2000]
- [[fen1]] — functional partner in Okazaki fragment maturation; FEN1 removes RNA flap, LIG1 seals the resulting nick
- [[polb]] — partner in long-patch BER gap-filling preceding LIG1 ligation (though Pol δ is the main gap-fill polymerase in proliferating cells)
- [[xrcc1]] — indirect; XRCC1–LIG3 complex competes with LIG1 in nuclear short-patch BER; functional redundancy at nicks

## Druggability (aging context)

**Open Targets druggability tier: 4** (undruggable / no aging-context clinical drug). No LIG1-specific small-molecule inhibitor has entered clinical development. Pan-ligase inhibitors (e.g., adenosine analogs that compete with ATP) are used as biochemical probes in oncology research contexts but lack selectivity and therapeutic application in aging. There is no validated pharmacological strategy for enhancing LIG1 activity in aging tissue.

The absence of a druggable tool does not preclude therapeutic interest — gene therapy restoring LIG1 in hypomorphic or age-declined contexts is conceivable but not yet in development. Tier 4 assignment is based on the absence of known clinical-stage LIG1-specific drugs and the fundamental enzyme biology of the protein. #gap/needs-canonical-id — Open Targets tractability data for ENSG00000105486 was not retrieved via API during seeding or verification; recommend API confirmation on next lint pass.

## Limitations and gaps

- `#gap/needs-human-replication` — Direct evidence for age-related decline in LIG1 activity in human tissues is anecdotal; no large cross-sectional or longitudinal study confirmed. The age-related decline claim is currently unsourced.
- `#gap/needs-replication` — Hereditary LIG1 deficiency phenotype characterized from only 2 cases (Barnes 1992, Prigent 1994); broader phenotypic spectrum unknown.
- `#gap/needs-human-replication` — The ATM/Chk2-without-ATR/Chk1 checkpoint profile observed in Soza 2009 (46BR.1G1 patient cells) needs replication in independently generated LIG1 hypomorphic models relevant to aging gradients of LIG1 activity.
- `#gap/no-mechanism` — The molecular mechanism linking modest LIG1 decline (vs. complete loss) to aging tissue phenotypes is not directly demonstrated. Soza 2009 uses cells with ~3–5% LIG1 activity; the threshold for aging-relevant phenotypes at more modest reductions is unknown.
- `#gap/unsourced` — LIG1's specific contribution to replication-associated mutagenesis in aging human somatic cells (vs. other DNA-damage responses) is inferred from patient-cell and mouse models; direct human aging data absent.
- `#gap/needs-canonical-id` — GenAge entry absent; Open Targets druggability tier not API-confirmed; GTEx aging correlation not populated.

## Footnotes

[^pascal2004]: doi:10.1038/nature03082 · Pascal JM, O'Brien PJ, Tomkinson AE, Ellenberger T · *Nature* 2004 · 307 citations · in-vitro (structural) · Crystal structure of human LIG1 (residues 233–919) in complex with 5'-adenylated nicked DNA (AppDNA) at 3 Å resolution (Rcryst 23.6%, Rfree 26.8%; PDB: 1X9N); established complete ring-encirclement of DNA by DBD+AdD+OBD, identified K568 active site and E566 ATP-specificity residue, and revealed A-to-B-form helical transition across the nick · local PDF available
[^barnes1992]: doi:10.1016/0092-8674(92)90450-q · Barnes DE et al. · *Cell* 1992 · 288 citations · case-report · model: human (patient 46BR) · Index case of hereditary LIG1 deficiency; biallelic hypomorphic mutations causing immunodeficiency and extreme DNA-damage hypersensitivity; now Immunodeficiency 96 (IMD96) · not_oa
[^bentley1996]: doi:10.1038/ng0896-489 · Bentley DJ et al. · *Nature Genetics* 1996 · 121 citations · in-vivo · model: Lig1−/− mouse · LIG1 null is required for fetal liver erythropoiesis; mice die perinatally from anemia; not universally embryonic lethal — null MEFs are viable but show replication defects · not_oa
[^bentley2002]: doi:10.1242/jcs.115.7.1551 · Bentley DJ et al. · *Journal of Cell Science* 2002 · 91 citations · in-vitro + in-vivo · model: Lig1−/− MEFs · LIG1-null mouse cells show normal DNA repair but altered DNA replication and reduced genome stability (SCEs, micronuclei, fork stalling) · not_oa
[^pascucci1999]: doi:10.1074/jbc.274.47.33696 · Pascucci B, Stucki M, Jónsson ZO, Dogliotti E, Hübscher U · *Journal of Biological Chemistry* 1999 · 200 citations · in-vitro · model: purified human proteins (recombinant from E. coli + native from HeLa) reconstituted system; AP-site circular plasmid substrate · Reconstitution of long-patch BER with 6 purified components (HAP1, RFC, PCNA, Pol δ or ε, FEN1, LIG1); repair patches extend maximum 10 nt; ~70% of synthesis confined to 2–4-nt patches; LIG1 acts as "patch size mediator" limiting Pol δ/ε processivity · PDF available (OA)
[^levin2000]: doi:10.1016/s0960-9822(00)00619-9 · Levin DS, McKenna AE, Motycka TA, Matsumoto Y, Tomkinson AE · *Current Biology* 2000 · 213 citations · cell-based + biochemical · model: 46BR.1G1 LIG1-deficient human cells stably transfected with WT or PIP-box-mutant (F8A/F9A) LIG1; SV40 in vitro replication assay · PIP-box (residues 2–9; F8 and F9 critical) is required for Okazaki fragment joining and long-patch BER but not short-patch BER or catalytic activity; first direct evidence for biological significance of long-patch BER in vivo · PDF available (OA)
[^soza2009]: doi:10.1128/mcb.01730-08 · Soza S, Leva V, Vago R et al. · *Molecular and Cellular Biology* 2009 · 44 citations · cell-based · model: 46BR.1G1 patient-derived human fibroblasts (3–5% of normal LIG1 activity); MRC-5V1 control fibroblasts · Partial LIG1 deficiency leads to replication-dependent SSBs + DSBs, γH2AX foci in S phase, ATM/Chk2 activation (not ATR/Chk1), altered cell morphology, and cytoskeletal reorganization without blocking cell cycle progression · PMC2663296 (OA)
[^prigent1994]: doi:10.1128/mcb.14.1.310-317.1994 · Prigent C et al. · *Molecular and Cellular Biology* 1994 · 45 citations · case-report + cell-based · model: human 46BR patient cells · Aberrant DNA repair and replication in patient-derived cells with inherited LIG1 enzymatic defect; second documented case complementing Barnes 1992 · not_oa
