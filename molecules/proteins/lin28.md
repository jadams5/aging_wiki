---
type: protein
aliases: [LIN28A, LIN28B, LIN-28, CSDD1, ZCCHC1, lin-28 homolog A, protein lin-28]
uniprot: Q9H9Z2
ncbi-gene: 79727
hgnc: 15986
ensembl: ENSG00000131914
genage-id: null
mouse-ortholog: Lin28a
druggability-tier: 3
caused-by: ["[[insulin-igf1]]"]
causes: ["[[stem-cell-exhaustion]]", "[[deregulated-nutrient-sensing]]"]
key-domains: [cold-shock-domain, CCHC-zinc-finger-1, CCHC-zinc-finger-2]
key-ptms: []
pathways: ["[[insulin-igf1]]", "[[oct4-sox2-nanog]]"]
hallmarks: ["[[epigenetic-alterations]]", "[[stem-cell-exhaustion]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[oct4]]", "[[sox2]]", "[[nanog]]", "[[klf4]]", "[[c-myc]]"]
mr-causal-evidence: not-tested
gtex-aging-correlation: null
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Lapasset 2011 PDF verified end-to-end; Shyh-Chang 2013 PDF verified end-to-end; Zhu 2011 PDF verified end-to-end; Zhu 2010 PDF verified end-to-end; Heo 2009 PDF verified pages 1-4 (mechanism sections); Thornton 2012 PDF verified pages 1-3 (mechanism); Moss 1997 PDF verified pages 1-3 (DOI + content confirmed); Ambros 1984 DOI verified via Crossref; UniProt Q9H9Z2 (LIN28A) and Q6ZN17 (LIN28B) confirmed via REST API; NCBI Gene 79727/389421/83557 confirmed via eutils; HGNC 15986/32207 and Ensembl ENSG00000131914/ENSG00000187772 confirmed via UniProt xrefs; Yu 2007 (Science) not re-read (closed access, full text not retrieved) — Thomson cocktail claim consistent with nanog.md verified page and with Lapasset 2011 body text; Hagan 2009 (NSMB) not re-read end-to-end — TUT4 mechanistic claim cross-checked via Heo 2009 and Thornton 2012 which cover the same mechanism; maklad2023 and krsnik2022 not re-read (recency citations, qualitative claims only)"
---

# LIN28 (LIN28A / LIN28B)

LIN28 is an RNA-binding protein that functions as the master post-transcriptional repressor of the let-7 microRNA family. In development it is a heterochronic timing factor, first characterized in *Caenorhabditis elegans* and broadly conserved; in embryonic and pluripotent cells it is highly expressed and actively suppressed upon differentiation. Its two human paralogs — LIN28A and LIN28B — share the same biochemical mechanism but differ in subcellular localization and expression pattern. In aging biology, LIN28 is relevant on at least three axes: (1) it is a required component of reprogramming cocktails that overcome the senescence barrier to iPSC generation (the Lapasset 2011 OSKMNL cocktail); (2) LIN28A reactivation in adult murine tissues enhances regenerative capacity in some tissues (hair follicle, pinnal, neonatal digit) via let-7 suppression and direct enhancement of bioenergetic metabolism (both glycolysis and OxPhos), though not all adult tissues respond; and (3) the LIN28/let-7/IGF pathway is a conserved regulator of glucose metabolism and insulin sensitivity, placing LIN28 at the intersection of nutrient sensing and stem-cell aging.

---

## Identity: two paralogs

| Field | LIN28A | LIN28B |
|---|---|---|
| UniProt | Q9H9Z2 (LN28A_HUMAN) — Swiss-Prot reviewed | Q6ZN17 (LN28B_HUMAN) — Swiss-Prot reviewed |
| NCBI Gene | 79727 | 389421 |
| HGNC | HGNC:15986 (symbol LIN28A) | HGNC:32207 (symbol LIN28B) |
| Ensembl | ENSG00000131914 | ENSG00000187772 |
| Chromosomal locus | 1p36.11 | 6q16.3–q21 |
| Protein length | 209 amino acids | 250 amino acids |
| Gene aliases | CSDD1, LIN28, ZCCHC1, LIN-28 | CSDD2 |
| Mouse ortholog | Lin28a (NCBI Gene 83557; designated Tex17/Gm10299 in early records) | Lin28b |

**Canonical page:** This page uses LIN28A as primary (UniProt Q9H9Z2; most commonly referenced in reprogramming and regeneration literature). LIN28B-specific biology is noted in the body where the paralogs diverge. Both paralogs are listed in `aliases:` so `[[lin28]]` links resolve for either symbol.

**Disambiguation:** No `pathways/lin28.md` exists; pathway-level coverage is under `[[oct4-sox2-nanog]]` (planned stub) and `[[insulin-igf1]]`. This protein page is the canonical `[[lin28]]`, `[[lin28a]]`, and `[[lin28b]]` resolution.

---

## Domain structure

Both LIN28A and LIN28B contain the same two-module RNA-binding architecture [^moss1997]:

- **Cold-shock domain (CSD):** An ~70-residue beta-barrel fold, originally identified in bacterial cold-shock proteins but used here for sequence-specific RNA recognition. In LIN28, the CSD contacts the GGAG tetra-nucleotide motif in the terminal loop of pre-let-7 substrates.
- **Two CCHC-type zinc fingers (ZF1, ZF2, Cys–Cys–His–Cys coordination):** Bind single-stranded RNA. Zinc fingers contact the conserved 3'-GGAG motif of pre-let-7 and are required for recruiting TUT4/TUT7 to the complex.

Together the CSD and CCHC zinc fingers constitute a bipartite RNA-binding unit. The CSD contacts the apical loop of pre-let-7; the zinc fingers stabilize the interaction at the 3' side [^heo2009]. This bipartite engagement is sufficient for LIN28 to block Dicer-mediated processing and to present the pre-let-7 3' end to TUT4/TUT7 for oligouridylation.

**Paralog difference in localization:** LIN28A is predominantly cytoplasmic (P bodies); LIN28B is predominantly nucleolar. This difference means LIN28A acts mainly post-transcriptionally on pre-let-7 exported to the cytoplasm, whereas LIN28B can additionally suppress primary let-7 transcripts in the nucleus — an earlier step in the biogenesis pathway. #gap/needs-replication for the full functional consequences of this distinction in human contexts.

---

## Developmental function: heterochronic timing gene

LIN28 was first identified in *C. elegans* as a heterochronic gene — mutations cause developmental events to execute at incorrect larval stages [^ambros1984]. In Moss et al. 1997, lin-28 was shown to encode a cytoplasmic cold-shock-domain protein regulated by the lin-4 small RNA; it controls the transition from L2-to-L3 larval fate [^moss1997].

In mammals, LIN28 expression is high in embryonic and fetal tissues and declines sharply with differentiation and postnatal development. Key tissues where LIN28 is expressed in early development include:
- Embryonic stem cells and iPSCs
- Primordial germ cells
- Fetal liver, fetal brain, placenta
- Undifferentiated spermatogonia (LIN28A) and elongating spermatids / Leydig cells (LIN28B) [^krsnik2022]

In adult somatic tissue, both paralogs are silenced under physiological conditions. Re-expression in adult tissues is strongly associated with either active regenerative programs or malignant transformation.

---

## Mechanism: the LIN28/let-7 bistable switch

### Post-transcriptional repression of let-7 biogenesis

LIN28 acts as a master suppressor of the entire let-7 microRNA family. The mechanistic cascade is [^heo2009][^hagan2009][^thornton2012]:

1. **LIN28 binds pre-let-7** in the cytoplasm via its CSD and CCHC zinc fingers, recognizing the GGAG motif in the terminal loop.
2. **LIN28 recruits TUT4 (ZCCHC11) and/or TUT7 (ZCCHC6)** — non-canonical poly(A) polymerases that add an oligouridine tail to the 3' end of pre-let-7.
3. **Oligouridylated pre-let-7 is refractory to Dicer processing** and is directed to degradation.
4. **Result:** the mature let-7 family is not produced, allowing LIN28 target mRNAs (including *HMGA2*, *IGF2BP1/2/3*, *IMP1/2/3*, and members of the insulin-PI3K-mTOR signaling cascade) to be translated.

### Bistable switch architecture

The LIN28/let-7 axis forms a double-negative feedback loop:
- LIN28 represses let-7 biogenesis
- let-7 targets the *LIN28* mRNA for translational repression

This mutual inhibition creates a bistable switch with two stable states: a **pluripotent/fetal/stem-cell state** (LIN28 high, let-7 low) and a **differentiated/somatic state** (LIN28 low/absent, let-7 high). The transition between states is digital rather than graded, making LIN28 a binary switch for the fetal-to-adult developmental transition [^farzaneh2017]. #gap/unsourced for quantitative bistability modeling; the bistable-switch framing is well-established in the literature but the parameters of the switch in human cells are not confirmed from a primary source on this page.

### let-7 target landscape

When LIN28 suppresses let-7, the consequent de-repressed mRNAs include:
- **HMGA2** — high-mobility group chromatin protein; fetal growth; oncogenic when re-expressed in adult tissue
- **IGF2BP1/2/3** (IMP1/2/3) — RNA-binding proteins that stabilize oncofetal transcripts; targets of let-7
- **IGF1R, INSR, IRS2** — insulin-PI3K pathway components; let-7 suppresses insulin sensitivity when LIN28 is absent [^zhu2011]
- **c-MYC** — partial regulation via let-7 family members

---

## Role in reprogramming

### Thomson 5-factor iPSC cocktail (human)

Yu et al. 2007 (*Science*) demonstrated that OCT4 + SOX2 + NANOG + LIN28 (± KLF4) delivered by lentiviral vectors to human somatic cells generates iPSCs — the first human iPSC paper alongside Takahashi & Yamanaka 2007 [^yu2007]. This cocktail is important because it lacks c-MYC, reducing the oncogenic risk inherent to the original OSKM protocol. LIN28 is proposed to substitute for c-MYC, in part by suppressing let-7 targets that restrict proliferation and self-renewal; the exact mechanism of LIN28's contribution to human cell reprogramming efficiency is not fully characterized. #gap/no-mechanism

### Lapasset 2011: overcoming the senescence barrier (OSKMNL)

Standard four-factor OSKM (OCT4 + SOX2 + KLF4 + c-MYC) does not efficiently reprogram senescent cells. Lapasset et al. 2011 (*Genes & Development*) showed that a six-factor cocktail — **OSKMNL** (OCT4 + SOX2 + KLF4 + c-MYC + NANOG + LIN28) — successfully generated iPSCs from replicatively senescent human fibroblasts (74-year-old donor, senescent after 51 population doublings) and centenarian cells (92–, 94–, 96–, and 101-year-old donors) with reprogramming efficiency ~0.06% [^lapasset2011]. The OSNL combination (OCT4 + SOX2 + NANOG + LIN28, i.e., without KLF4 and c-MYC — the Thomson cocktail) was also tested on senescent cells and **failed** to produce iPSC colonies after 40 d; standard OSKM was also insufficient [^lapasset2011]. The full six-factor combination is specifically required. The resulting iPSCs:
- Expressed endogenous pluripotency genes (OCT4, SOX2, NANOG, REX1)
- Reset telomere length to levels comparable with hESCs
- Restored youthful mitochondrial function and global gene expression profiles
- Retained full directed-differentiation capacity into all three germ layers

The specific contribution of LIN28 versus NANOG in enabling OSKMNL to overcome the senescence barrier is not dissected in Lapasset 2011 — it is not established whether LIN28 alone, NANOG alone, or both together are individually required. This is an unresolved question. #gap/no-mechanism

### Partial reprogramming context

Standard partial reprogramming protocols (OSK or cyclic OSKM) do NOT include LIN28. LIN28 is a full-reprogramming factor relevant to overcoming the senescence barrier in aged cells, not a standard component of partial epigenetic reset strategies. See [[partial-reprogramming]] for the comparative evidence.

---

## Aging relevance

### LIN28A reactivation and tissue regeneration

Shyh-Chang et al. 2013 (*Cell*) — the central study of LIN28 in adult tissue repair — used doxycycline-inducible Lin28a transgenic mice to show that restoring Lin28a expression in adult tissues dramatically enhances regenerative capacity [^shyhchang2013]:

- **Hair follicle regeneration:** Adult Lin28a-expressing mice exhibited significantly faster hair regrowth after shaving compared to controls; the effect operates by promoting anagen in hair follicles during telogen.
- **Neonatal digit/cartilage/bone repair:** Lin28a-expressing **neonatal** mice showed significantly enhanced regrowth of amputated digit tips (soft tissue and bone). Adult digit repair (5-week-old hindlimb) showed **no significant enhancement** (Figure S2, referenced in text: "some adult tissues such as adult digits and the adult heart do not show improved tissue repair") — the digit-repair benefit is age-dependent and context-dependent.
- **Pinnal (ear) tissue repair:** Transgenic mice showed faster closure of 2 mm ear-punch wounds, with increased connective tissue and Ki67 staining; local dox-inducible LIN28B induction in the ear was insufficient to promote pinnal repair (suggesting a Lin28a-specific mechanism).
- **Mechanism:** Lin28a's pro-regenerative effect required both glycolysis and oxidative phosphorylation (OxPhos); inhibiting OxPhos with **antimycin-A** (complex III inhibitor) abolished the regenerative enhancement in vivo (Figure 7B). Glycolysis inhibition with 3BP or 2DG similarly abolished the effect. The mechanism has two components: (1) let-7 suppression, which is **necessary but insufficient** to phenocopy Lin28a overexpression; (2) **direct Lin28a binding to metabolic enzyme mRNAs** (Pfkp, Pdha1, Idh3b, Sdha, Ndufb3, Ndufb8), let-7-independent, which enhances both glycolysis and OxPhos flux. The authors conclude that Lin28a reprograms cellular bioenergetics toward an embryonic metabolic state to promote repair.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — LIN28A/B expression, let-7 suppression, and bioenergetic reprogramming are all present in human cells |
| Regenerative phenotype conserved in humans? | unknown — no equivalent human tissue-regeneration experiment exists |
| Replicated in humans? | no — all regeneration evidence is murine [^shyhchang2013] |

#gap/needs-human-replication — neonatal digit-regrowth, hair follicle, and pinnal tissue repair experiments are mouse-only; adult digit repair was NOT significantly enhanced even in the mouse model.

### LIN28/let-7 axis in glucose metabolism and insulin sensitivity

Zhu et al. 2011 (*Cell*) demonstrated that Lin28a/LIN28B overexpression in transgenic mice promotes insulin-sensitized glucose metabolism resistant to high-fat-diet-induced diabetes [^zhu2011]. The mechanism: let-7 suppresses IGF1R, INSR, and IRS2 — core components of the insulin-PI3K-mTOR signaling axis. When LIN28 is present and let-7 is low, these mRNAs are translated at higher levels, increasing insulin sensitivity. Conversely, loss of Lin28a impairs glucose homeostasis. This places LIN28/let-7 as a regulator of [[deregulated-nutrient-sensing]], with let-7 acting as an endogenous suppressor of insulin-pathway responsiveness.

Human relevance: let-7 target genes are enriched for SNPs associated with type 2 diabetes and fasting glucose control in GWAS [^zhu2011]. #gap/needs-replication — the human genetic evidence is indirect (SNP enrichment, not LIN28 loss-of-function association).

| Dimension | Status |
|---|---|
| Insulin-pathway regulation by let-7 conserved in humans? | yes — let-7 targets IGF1R/INSR in human cells |
| Metabolic phenotype conserved in humans? | partial — GWAS enrichment supports let-7 target relevance; LIN28 direct evidence absent |
| Replicated in humans? | no — no human LIN28 gain/loss-of-function metabolic studies |

### Developmental timing, puberty, and longevity associations

Zhu et al. 2010 (*Nature Genetics*) showed that Lin28a transgenic mice have increased body size and delayed puberty onset, phenocopying human genetic associations of *LIN28B* locus variants with age at menarche, height, and puberty timing identified in GWAS [^zhu2010]. This connects the LIN28/let-7 axis to the developmental timing programs that influence both reproductive span and, potentially, healthy longevity — though the causal path from LIN28/let-7 to aging endpoints in humans is not established. #gap/needs-human-replication

### Decline in adult tissue and stem-cell exhaustion

In adult somatic tissue, LIN28 expression is essentially absent. The developmental silencing of LIN28 (and corresponding rise in let-7) contributes to the functional limitation of adult stem-cell populations:
- Let-7 suppresses *HMGA2* and *IGF2BP* oncofetal programs in adult stem cells, reducing their proliferative and regenerative potential
- This represents one molecular mechanism underlying [[stem-cell-exhaustion]]: the switch from fetal to adult state is associated with the LIN28-off / let-7-high epigenetic state that is less regeneratively permissive

The specific contribution of LIN28 silencing to aging-associated decline in tissue regeneration — versus other mechanisms of stem-cell exhaustion — is not established. #gap/no-mechanism

---

## Oncogenic risk of LIN28 reactivation

LIN28 is re-expressed in many aggressive human cancers: Wilms tumor, hepatocellular carcinoma, germ cell tumors, medulloblastoma (LIN28B), and various other solid tumors [^maklad2023]. The mechanism mirrors the regeneration biology: LIN28 suppresses let-7-mediated tumor suppression, de-repressing oncofetal programs (HMGA2, Myc pathway, IGF pathway). LIN28B expression decreases with age in developing human cerebellum and is re-expressed in aggressive medulloblastoma subtypes [^maklad2023].

This oncogenic risk is the central translational tension for any therapeutic LIN28 reactivation strategy — directly analogous to the c-MYC risk in OSKM reprogramming. Any regenerative medicine application of LIN28 must contend with its pro-tumorigenic potential.

**No approved human therapy uses LIN28 as a direct therapeutic target.** All evidence for regenerative benefit is preclinical (mouse). #gap/long-term-unknown

---

## Key interactors

| Interactor | Nature of interaction | Functional relevance |
|---|---|---|
| TUT4 (ZCCHC11) | Directly recruited by LIN28 CCHC zinc fingers | Adds oligouridine tail to pre-let-7; required for LIN28-mediated let-7 suppression [^heo2009] |
| TUT7 (ZCCHC6) | Alternative TUTase recruited by LIN28 | Partially redundant with TUT4; also oligouridylates pre-let-7 [^thornton2012] |
| [[oct4]] | Co-expressed in iPSC reprogramming cocktails | LIN28 is the "L" in the Thomson SONL / Thomson-Lapasset OSKMNL cocktails |
| [[sox2]] | Co-expressed in iPSC cocktails | Core pluripotency network partner |
| [[nanog]] | Co-expressed in OSKMNL cocktail | Co-required to overcome senescence barrier in aged cells |
| [[klf4]] | Co-expressed in OSKMNL cocktail | Part of the six-factor reprogramming combination |
| [[c-myc]] | Co-expressed in OSKMNL cocktail; let-7 partially regulates c-Myc | LIN28 and c-Myc are co-present in full reprogramming but diverge in therapeutic strategy |
| HMGA2 | let-7 target; de-repressed when LIN28 is high | Oncofetal chromatin regulator; fetal stem-cell proliferation; tumor marker |
| IGF1R / INSR | let-7 targets; de-repressed when LIN28 is high | Insulin-IGF receptor signaling; metabolic regulation [^zhu2011] |

---

## Pathway membership

- [[insulin-igf1]] — LIN28/let-7 modulates IGF1R and INSR expression; metabolic arm
- [[oct4-sox2-nanog]] — LIN28 is a co-factor in human iPSC cocktails; not a core pluripotency TF but functionally embedded in this network (planned stub)

**Note:** LIN28 does not have a canonical role in standard aging-pathway signaling (mTOR, AMPK, sirtuin) under physiological conditions in adult somatic tissue. Its aging relevance operates entirely through developmental de-silencing or therapeutic reactivation.

---

## Limitations and gaps

#gap/needs-human-replication — All direct experimental evidence for LIN28's pro-regenerative effects (digit repair, wound healing, hair regrowth) is from transgenic mouse models; no equivalent human gain-of-function tissue-repair data exist.

#gap/no-mechanism — The specific functional contribution of LIN28 versus NANOG in allowing OSKMNL to reprogram senescent cells is not dissected (Lapasset 2011 added both factors together; individual necessity untested).

#gap/no-mechanism — The specificity determinants that allow LIN28A reactivation to enhance tissue repair without triggering tumorigenesis in adult mice are not characterized; the threshold between regenerative and oncogenic LIN28 expression levels is unknown.

#gap/long-term-unknown — Long-term safety of LIN28 reactivation in adult somatic tissues (tumor risk, effects on immune surveillance, germline implications) is not established in any human model.

#gap/needs-replication — The bioenergetic-reprogramming mechanism proposed by Shyh-Chang 2013 (Lin28a → let-7 suppression + direct metabolic enzyme mRNA binding → enhanced glycolysis and OxPhos → tissue repair) is from a single-lab mouse study; independent mechanistic replication in a separate laboratory is needed.

#gap/needs-human-replication — The glucose-metabolism/insulin-sensitization phenotype (Zhu 2011) is mouse-derived; human LIN28B GWAS SNP enrichment in type-2-diabetes loci is indirect support but not causal.

#gap/needs-canonical-id — GenAge entry for LIN28A/B not confirmed via REST API (database query returned null; may not have a curated entry; verify directly at genomics.senescence.info/genes).

---

## Cross-references

| Entity | Relationship |
|---|---|
| [[partial-reprogramming]] | LIN28 is a required component of the OSKMNL senescent-cell reprogramming cocktail (Lapasset 2011); not used in standard OSK partial reprogramming |
| [[oct4]] | Co-reprogramming factor; see Thomson 5-factor and Lapasset 6-factor cocktails |
| [[sox2]] | Core pluripotency partner |
| [[nanog]] | Co-required with LIN28 in OSKMNL; see [[nanog]] for the detailed OSKMNL mechanism |
| [[klf4]] | Co-expressed in OSKMNL cocktail |
| [[c-myc]] | Both LIN28 and c-MYC are omitted from safer OSK protocols; c-MYC is the canonical oncogenic risk; LIN28 is the let-7-suppressing risk |
| [[induced-pluripotent-stem-cells]] | LIN28 is part of the Thomson and Lapasset reprogramming cocktails for human iPSC derivation |
| [[epigenetic-alterations]] | LIN28/OSKMNL resets the epigenetic aging program in senescent cells in vitro |
| [[stem-cell-exhaustion]] | LIN28 silencing contributes to adult stem cell's reduced regenerative state |
| [[deregulated-nutrient-sensing]] | LIN28/let-7 regulates IGF1R, INSR expression; insulin sensitivity link |
| [[insulin-igf1]] | LIN28 modulates the strength of insulin-IGF signaling via let-7 repression |
| [[mus-musculus]] | All in vivo regeneration and metabolism experiments were conducted in mouse |
| [[caenorhabditis-elegans]] | Founding organism for heterochronic lin-28 characterization (Ambros, Moss, Ruvkun lineage) |

---

## Footnotes

[^moss1997]: doi:10.1016/s0092-8674(00)81906-6 · Moss EG, Lee RC, Ambros V · *Cell* 1997 · in-vivo (C. elegans genetics) · Original characterization of lin-28 as a cold-shock-domain protein that controls developmental timing and is regulated by lin-4 RNA; first description of CSD + CCHC zinc finger architecture · model: C. elegans

[^ambros1984]: doi:10.1126/science.6494891 · Ambros V, Horvitz HR · *Science* 1984 · in-vivo (C. elegans) · Founding characterization of heterochronic mutants including lin-28; establishes the heterochronic gene class · model: C. elegans

[^heo2009]: doi:10.1016/j.cell.2009.08.002 · Heo I, Joo C, Kim YK, Ha M, Yoon MJ, Cho J, Yeom KH, Han J, Kim VN · *Cell* 2009 · in-vitro (biochemical + cell-line) · TUT4 adds oligouridine tails to pre-let-7 upon LIN28 recruitment; LIN28 GGAG-loop recognition required; oligouridylated pre-let-7 is Dicer-refractory · model: human HEK293 + murine embryonic cells

[^hagan2009]: doi:10.1038/nsmb.1676 · Hagan JP, Piskounova E, Gregory RI · *Nature Structural & Molecular Biology* 2009 · in-vitro + cell-line · Lin28 directly recruits TUTase Zcchc11 (TUT4) to inhibit let-7 maturation; first demonstration of the LIN28-TUTase complex in mouse ESCs · model: mouse ESCs

[^thornton2012]: doi:10.1261/rna.034538.112 · Thornton JE, Chang HM, Piskounova E, Gregory RI · *RNA* 2012 · in-vitro + cell-line · LIN28-mediated let-7 suppression is carried out by alternative TUTases TUT4 and TUT7 (Zcchc11 and Zcchc6); both are recruited; partially redundant · model: human and mouse cell lines

[^yu2007]: doi:10.1126/science.1151526 · Yu J, Vodyanik MA, Smuga-Otto K, Antosiewicz-Bourget J, Frane JL, Tian S, Nie J, Jonsdottir GA, Ruotti V, Stewart R, Slukvin II, Thomson JA · *Science* 2007 · in-vitro (lentiviral transduction) · model: human foreskin fibroblasts · OCT4 + SOX2 + NANOG + LIN28 (±KLF4) generates human iPSCs; c-MYC-free; LIN28 is the "L" in the Thomson cocktail

[^lapasset2011]: doi:10.1101/gad.173922.111 · Lapasset L, Milhavet O, Prieur A, Besnard E, Babled A, Aït-Hamou N, Leschik J, Pellestor F, Ramirez JM, De Vos J, Lehmann S, Lemaitre JM · *Genes & Development* 2011 · in-vitro · model: human fibroblasts (74-year-old senescent donor; 92–, 94–, 96–, and 101-year-old centenarian donors) · 6-factor OSKMNL required to reprogram senescent/centenarian cells; OSNL (without KLF4 and c-MYC) and standard OSKM both insufficient; efficiency ~0.06%; iPSCs reset telomere length, gene expression, mitochondrial function; aging markers erased

[^shyhchang2013]: doi:10.1016/j.cell.2013.09.059 · Shyh-Chang N, Zhu H, de Soysa TY, Shinoda G, Seligson MT, Tsanov KM, Nguyen L, Asara JM, Cantley LC, Daley GQ · *Cell* 2013 · in-vivo (dox-inducible Lin28a transgenic) · model: Mus musculus · Lin28a reactivation enhances hair follicle regrowth (adult), neonatal digit-tip repair, and pinnal tissue repair; adult digit repair was not significantly enhanced; requires both glycolysis and OxPhos (abolished by antimycin-A or 3BP/2DG in vivo); mechanism is partly let-7-independent (direct binding of metabolic enzyme mRNAs: Pfkp, Pdha1, Idh3b, Sdha, Ndufb3, Ndufb8); pharmacological glycolysis inhibition in WT ears enhanced pinnal repair, suggesting bioenergetic state is rate-limiting · single-lab; #gap/needs-replication

[^zhu2011]: doi:10.1016/j.cell.2011.08.033 · Zhu H, Shyh-Chang N, Segrè AV et al. (Daley GQ lab) · *Cell* 2011 · in-vivo (transgenic) + GWAS enrichment analysis · model: Mus musculus + human GWAS data · Lin28a/LIN28B overexpression promotes insulin sensitivity and resists HFD-induced diabetes; let-7 suppresses IGF1R, INSR, IRS2; let-7 targets enriched for T2D + fasting-glucose GWAS SNPs

[^zhu2010]: doi:10.1038/ng.593 · Zhu H, Shah S, Shyh-Chang N et al. (Daley GQ lab) · *Nature Genetics* 2010 · in-vivo (transgenic) · model: Mus musculus + human GWAS · Lin28a transgenic mice show increased body size + delayed puberty; LIN28B locus variants associate with height and age-at-menarche in humans

[^maklad2023]: doi:10.1002/jcp.30946 · Maklad A, Sedeeq M, Wilson R, Heath JA, Gueven N, Azimi I · *Journal of Cellular Physiology* 2023 · in-vitro + observational (tumor tissue) · LIN28B elevated in aggressive medulloblastoma; LIN28B expression decreases with age in normal cerebellum; pharmacological LIN28 inhibition reduces tumor cell growth and stemness (CD133 suppression) · recency-search result (2023)

[^krsnik2022]: doi:10.3390/ijms23137245 · Krsnik D, Marić T, Bulić-Jakuš F, Sinčić N, Bojanac AK · *International Journal of Molecular Sciences* 2022 · review · LIN28A/B expression in testicular cell types across lifespan; LIN28A in undifferentiated spermatogonia; LIN28B in elongating spermatids and Leydig cells; aging-related expression changes; association with testicular cancer · recency-search result (2022)

[^farzaneh2017]: doi:10.1089/cell.2017.0015 · Farzaneh M, Attari F, Khoshnam SE · *Cellular Reprogramming* 2017 · review · LIN28/let-7 double-negative feedback loop as bistable switch during pluripotency, reprogramming, and tumorigenicity; #gap/unsourced for quantitative switch parameters in human cells
