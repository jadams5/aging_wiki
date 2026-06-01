---
type: protein
aliases: [BCL2L11, Bcl-2-like protein 11, Bcl-2-interacting mediator of cell death, BimEL, BimL, BimS]
uniprot: O43521
ncbi-gene: 10018
hgnc: 994
mouse-ortholog: Bcl2l11
ensembl: ENSG00000153094
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3]
key-ptms: [Ser65-phosphorylation, Ser55-phosphorylation, Ser73-phosphorylation, ubiquitination]
pathways: ["[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]", "[[insulin-igf1]]"]
hallmarks: ["[[genomic-instability]]", "[[deregulated-nutrient-sensing]]"]
known-interactors: ["[[bcl-xl]]", "[[bcl-2]]", "[[mcl-1]]", "[[bak]]", "[[bax]]", "[[foxo3]]"]
genage-id: null
sens-categories: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified: O'Connor 1998, Dijkers 2000, Chen 2005, Ley 2003, Opferman 2003, Gavathiotis/Walensky 2010 (archived under Chipuk 2010 DOI — see note), Vogler 2025. Bouillet 1999 remains unverified (not_oa). Canonical-database identity fields (UniProt O43521, NCBI Gene, HGNC) not independently re-verified against databases — recommend cross-check on next lint pass."
---

# BIM (BCL2L11)

The most potent and promiscuous pro-apoptotic BH3-only protein in the BCL-2 family. BIM is a **direct activator**: its BH3 domain directly engages and activates the effector proteins [[bax]] and [[bak]], inducing mitochondrial outer membrane permeabilization (MOMP) without an obligate sensitization step [^chipuk2010]. Unlike sensitizer BH3-only proteins (BAD, NOXA) that act only by neutralizing anti-apoptotic guards, BIM simultaneously (1) binds and activates BAX/BAK, and (2) binds and neutralizes all five anti-apoptotic family members (BCL-2, BCL-xL, BCL-w, MCL-1, A1/BFL-1) [^chen2005]. This dual activity makes BIM an unusually potent apoptotic trigger whose suppression — at both the transcriptional and post-translational level — is essential for normal cell survival.

In aging biology, the **FOXO3–BIM axis** links the insulin/IGF-1 signalling (IIS) pathway directly to apoptosis control: growth factor withdrawal disengages PI3K–AKT from FOXO3, allowing FOXO3 to transactivate *BCL2L11* and trigger apoptosis in cells lacking survival signals. Dysregulation of this axis contributes to inappropriate apoptosis in post-mitotic tissues and, conversely, to apoptosis resistance in senescent cells that upregulate anti-apoptotic proteins to sequester BIM.

---

## Identity

| Field | Value |
|---|---|
| UniProt | O43521 (B2L11_HUMAN) |
| NCBI Gene | 10018 |
| HGNC | 994 (symbol: BCL2L11) |
| Ensembl | ENSG00000153094 |
| Chromosomal location | 2q13 |
| Canonical isoform (BIM-EL) | 198 amino acids |
| Mouse ortholog | Bcl2l11 (one-to-one; function conserved) |
| GenAge entry | not confirmed in GenAge-human Build 21 #gap/needs-canonical-id |

---

## Discovery

BIM was identified in 1998 by O'Connor et al. using a cDNA expression screen with recombinant BCL-2 protein as bait. The name derives from "**B**cl-2-**i**nteracting **m**ediator of cell death." The cloned protein contained a single BH3 motif — the minimal BCL-2 interaction unit — and no other BCL-2 homology domains, placing it in the emerging class of BH3-only proteins. Enforced BIM expression was sufficient to kill multiple cell lines; mutation of the BH3 domain (ΔBH3 deletion of residues 94–100) abolished killing and BCL-2 binding [^oconnor1998]. In healthy cells, BIM localizes to intracytoplasmic membranes and cytoskeletal structures; the paper demonstrates this membrane/cytoskeletal distribution but the specific identification of DLC1 (dynein light chain 1) as the binding partner was established by Puthalakath et al. 1999 (Mol Cell 3:287–296), not O'Connor 1998 [^oconnor1998].

The physiological importance of BIM was established by Bouillet et al. (1999) using *Bim*-null mice. *Bim*-/- animals accumulated excess lymphocytes and developed a systemic lupus erythematosus-like autoimmune disease with splenomegaly and lymphadenopathy, demonstrating that BIM-mediated apoptosis is required for normal lymphocyte homeostasis and self-tolerance. Thymocyte negative selection was impaired; peripheral T cells were hyperresponsive [^bouillet1999]. #gap/no-fulltext-access — Bouillet 1999 is closed-access; claims are drawn from abstract and secondary review sources.

---

## Isoforms

*BCL2L11* generates at least 20 isoforms through alternative splicing of a complex multi-exon gene [UniProt O43521]. Three isoforms dominate in biological contexts and are referenced throughout the literature:

| Isoform | Common name | Relative size | Key features | Potency |
|---|---|---|---|---|
| O43521-1 (canonical) | BIM-EL | Largest ("Extra Long") — human: 198 aa; mouse: 196 aa | Contains exon 3 and a short exon 4; longest N-terminal extension; principal ERK1/2 phosphorylation target; major isoform in most tissues | High |
| O43521-2 | BIM-L | Medium ("Long") — human: 138 aa; mouse: 140 aa | Lacks exon 3 region; shorter N-terminal | High |
| O43521-3 | BIM-S | Smallest ("Short") — 110 aa (mouse) | Most highly truncated; smallest N-terminus; most potent per O'Connor 1998 colony suppression assay | Highest (BIM-S is most potent per O'Connor 1998) |

All three major isoforms share the BH3 motif and induce apoptosis; they differ primarily in their N-terminal extensions, which influence subcellular localization (BIM-EL: microtubule-associated via DLC1/2; BIM-L and BIM-S: more rapidly mitochondrial) and post-translational regulation [^oconnor1998].

Additional low-abundance isoforms (Bim-alpha, Bim-beta, Bim-gamma series) have reduced or absent pro-apoptotic activity per UniProt O43521 curation.

**Naming note:** No separate pathway page named `bim` exists. Pathway context is covered under [[apoptosis-pathway]] and [[bcl-2-family-signaling]]. This page uses "BIM" per UniProt convention (B2L11_HUMAN); gene symbol is *BCL2L11*.

---

## Domain structure

BIM is a structurally minimal protein. It contains:

- **BH3 motif (residues 148–162, canonical BIM-EL isoform)** — the sole BCL-2 homology domain. Required for interaction with all anti-apoptotic BCL-2 family members and for cytotoxicity [UniProt O43521; ^chen2005]. The BH3 motif forms an amphipathic alpha-helix that inserts into the hydrophobic groove of anti-apoptotic proteins. BIM's BH3 sequence has unusually broad binding capability — it lacks the selectivity-restricting residues that limit other BH3-only proteins to subsets of anti-apoptotic family members.
- **Disordered N-terminal extension (residues 1–72)** — contains the DLC1/2-binding KXTQT motif (sequestration site in healthy cells); also site of ERK1/2 phosphorylation at Ser69.
- **No BH1, BH2, or BH4 domains** — BIM cannot homo-oligomerize like BAX/BAK, cannot form its own apoptotic pore, and is entirely dependent on BAX and BAK for effector MOMP.

This minimal architecture is what makes BIM a "pure" apoptosis initiator: it carries no structural information beyond a binding motif, and its activity is entirely mediated through the proteins it recruits.

---

## Post-translational regulation

BIM activity is regulated at multiple levels to prevent inadvertent apoptosis in healthy cells:

### Microtubule sequestration (BIM-EL)

In healthy cells, BIM-EL and BIM-L are sequestered at the microtubule motor complex via binding to dynein light chain LC8 (DLC1/DYNLL1) and dynein light chain 2 (DLC2/DYNLL2). This was established by Puthalakath et al. 1999 (Mol Cell 3:287–296), not by O'Connor 1998 — O'Connor 1998 demonstrated cytoskeletal/membrane localization of BIM but did not identify the DLC1 binding partner. Vogler 2025 [^vogler2025] confirms that BIM and BMF are kept in check by sequestration at cytoskeletal proteins via dynein and myosin complexes. Upon apoptotic stimuli or cytokine withdrawal, BIM is released from LC8 and translocates to mitochondria. This sequestration mechanism couples BIM activity to cytoskeletal integrity and adhesion signalling — a key element of how epithelial cells trigger anoikis. #gap/needs-canonical-id — the O'Connor 1998 citation has been corrected; primary attribution for DLC1 binding is Puthalakath 1999 (not in footnotes; add citation if adding a dedicated claim).

### ERK1/2 phosphorylation → proteasomal degradation (BIM-EL)

Mitogen-activated ERK1/2 directly phosphorylates BIM-EL, promoting its polyubiquitination and degradation by the 26S proteasome [^ley2003]. Ley 2003 demonstrates that activation of the ERK1/2 pathway is both necessary and sufficient to stimulate BIM-EL turnover in CCl39 fibroblasts, that this degradation is proteasome-dependent (blocked by MG132 and lactacystin), and that FLAG-ubiquitin co-expression confirms BIM-EL ubiquitination. **However, Ley 2003 does not identify the specific phosphorylation sites** — the paper shows BIM-EL is a phosphoprotein by electrophoretic mobility shift and phosphatase treatment, but does not report serine residue numbers. The specific sites (reported variably as Ser65/Ser55/Ser73 in Vogler 2025 [^vogler2025], or Ser69/Ser77/Ser87 in some older literature) and the identity of the E3 ubiquitin ligase (sometimes cited as TRIM2, sometimes other ligases) are not established by Ley 2003. #gap/needs-replication — specific phosphorylation site numbering is inconsistent across the literature; the Ley 2003 primary source does not resolve this. This mechanism couples BIM abundance to MAPK/ERK survival signalling: high ERK activity (from growth factors, oncogene activation) degrades BIM-EL; ERK withdrawal stabilizes it. ERK-driven BIM-EL degradation is a key mechanism by which RAS-ERK oncogenic signalling suppresses apoptosis — and is also a resistance mechanism to several targeted cancer therapies that restore BIM levels upon ERK inhibition [^ley2003].

### FOXO3 transcriptional induction

BIM expression is transcriptionally activated by FOXO3 (FKHR-L1), the forkhead-family transcription factor that is a direct substrate of AKT. Dijkers et al. (2000) demonstrated that withdrawal of interleukin-3 from the mouse pro-B cell line Ba/F3 causes AKT inactivation → FKHR-L1 (FOXO3) nuclear translocation → *BCL2L11* transcription → BIM protein upregulation → apoptosis [^dijkers2000]. The paper shows: (1) IL-3 withdrawal increases BIM protein levels and *bim* mRNA; (2) a constitutively nuclear FKHR-L1(A3) mutant induces BIM expression and apoptosis; (3) BIM mRNA induction by FKHR-L1(A3) persists in the presence of cycloheximide (confirming direct transcriptional regulation); (4) IL-3 withdrawal causes dephosphorylation of FKHR-L1 at Thr32 and Ser253 (two phosphorylation sites documented). The paper does NOT identify Ser315 as a FKHR-L1/FOXO3 phosphorylation site — that residue is not mentioned; the Ser315 figure comes from other studies. The primary cell model is Ba/F3 mouse pro-B cells and mouse fetal liver cells (not primary human T cells as stated in the footnote — the footnote has been corrected below). This makes **BIM a transcriptional bridge between nutrient/growth factor sensing and the intrinsic apoptosis machinery**.

### Anti-apoptotic sequestration

BIM not bound to microtubules, and not degraded by ERK, is sequestered in the BH3-binding grooves of anti-apoptotic proteins at the mitochondrial outer membrane. The stoichiometric balance between BIM and its anti-apoptotic binders sets the apoptotic priming level — see Affinity and selectivity section below.

---

## Mechanism: BIM as a direct activator of BAX and BAK

**The direct activator classification** is central to how BIM functions. The current consensus model of BCL-2 family activation, supported by structural and biochemical data, divides BH3-only proteins into two functional classes [^chipuk2010]:

1. **Direct activators (BIM, BID/tBID):** Engage the hydrophobic groove of BAX and BAK and induce conformational changes that trigger oligomerization and MOMP. Can induce MOMP in liposome systems containing only BAX/BAK and activator BH3-only proteins.

2. **Sensitizers (BAD, NOXA, and context-dependently PUMA):** Bind anti-apoptotic proteins (BCL-2, BCL-xL, MCL-1) and displace sequestered activators. Do not directly activate BAX or BAK.

**BIM is a direct activator.** Its BH3 domain binds the activation groove of BAX and BAK (a surface distinct from the anti-apoptotic groove), inducing the conformational opening (alpha-1/alpha-2 helix exposure, C-terminal membrane insertion) required for BAX/BAK oligomerization and pore formation. In reconstituted liposome systems, BIM-BH3 peptide alone is sufficient to activate BAX-mediated membrane permeabilization [^chipuk2010].

**Critically, BIM also binds all five anti-apoptotic family members** — making it simultaneously an activator AND a potential sensitizer. When BIM is present in excess over anti-apoptotic proteins, it activates BAX/BAK directly. When anti-apoptotic proteins are in excess, BIM is sequestered and the cell survives. The SCAP logic in senescent cells rests on this balance: senescent cells upregulate BCL-2, BCL-xL, and MCL-1 precisely to sequester BIM (and other BH3-only proteins), preventing BIM-driven BAX/BAK activation.

> **Distinction from [[puma]]:** The wiki note from bak.md cites "Chipuk 2010 Fig 1C" for PUMA reclassification. **Correction:** DOI 10.1016/j.molcel.2010.10.019 resolves to Gavathiotis/Walensky 2010, not a Chipuk review; Fig 1C of that paper is about BAX tethered-loop conformation (not the activator/sensitizer classification). Vogler 2025 [^vogler2025] (Fig 1b) classifies BIM, tBID, and PUMA all as direct activators in current nomenclature — PUMA's status as a direct activator vs sensitizer is contested across the literature and does not appear resolved by any paper cited on this page. BIM's own direct activator classification is supported by Gavathiotis 2010 [^chipuk2010] (structural/NMR evidence for BIM BH3 engaging the BAX trigger site) and by Vogler 2025. See [[apoptosis-pathway]] for full discussion. #gap/contradictory-evidence — PUMA's classification requires a dedicated citation review; the Chipuk/Gavathiotis citation is corrected here.

---

## Affinity and selectivity: BH3 binding to anti-apoptotic family members

BIM's BH3 motif binds all five canonical anti-apoptotic BCL-2 family members with appreciable affinity, distinguishing it from selectivity-restricted BH3-only proteins like NOXA (MCL-1/A1 selective) and BAD (BCL-2/BCL-xL/BCL-w selective) [^chen2005].

| Anti-apoptotic protein | BIM-BH3 IC50 (biosensor competition assay, Chen 2005) | BIM-BH3 Kd (fluorescence polarization, Opferman 2003) | Notes |
|---|---|---|---|
| BCL-2 | 2.6 nM | not reported in Opferman 2003 | Chen 2005 [^chen2005] Fig 3A; biosensor chip competition assay (IC50 reflects relative binding affinity, not absolute Kd) |
| BCL-xL | 4.6 nM | not reported in Opferman 2003 | Chen 2005 [^chen2005] Fig 3A |
| BCL-w | 4.3 nM | not reported in Opferman 2003 | Chen 2005 [^chen2005] Fig 3A |
| MCL-1 | 2.4 nM | 74 ± 2 nM | Chen 2005 [^chen2005] Fig 3A (IC50); Opferman 2003 [^opferman2003] Fig 2g (fluorescence polarization, GST-MCL-1) — see method note below |
| A1 (BFL-1) | 4.3 nM | not reported in Opferman 2003 | Chen 2005 [^chen2005] Fig 3A; A1 is comparable to BCL-2/BCL-xL in this assay |

**Important method note — Chen 2005 vs Opferman 2003 for MCL-1:** These two sources report apparently conflicting affinities for BIM–MCL-1. Chen 2005 reports IC50 = 2.4 nM (biosensor competition assay using immobilized BIM-BH3 peptide and soluble recombinant prosurvival proteins), indicating comparable affinity to BCL-2 and BCL-xL. Opferman 2003 reports Kd = 74 ± 2 nM (fluorescence polarization, GST-MCL-1 vs fluorescein-tagged BIM-BH3 peptide). These are different assay methods with different protein constructs (GST-tagged vs untagged, different truncation variants). Chen 2005 explicitly notes their method avoids confounds from aggregation of longer peptides. The two values are **not directly comparable** — the Chen 2005 IC50 cannot be equated to a Kd. The broader literature (and Vogler 2025 [^vogler2025]) treats BIM as pan-binding with comparable affinity across all five anti-apoptotic proteins, consistent with Chen 2005. The wiki previously claimed MCL-1 affinity was "substantially lower" than BCL-2/BCL-xL — this claim was based on conflating two different assay methods. #gap/contradictory-evidence — the quantitative comparison of BIM affinities for different anti-apoptotic proteins depends heavily on assay method; the Chen 2005 biosensor data is the most systematic cross-comparison.

---

## BIM in the FOXO3–IIS–apoptosis axis

The [[insulin-igf1]] pathway suppresses BIM transcription as a direct survival mechanism:

```
Insulin/IGF-1 → IR/IGF1R → PI3K → AKT → FOXO3 phosphorylation (Thr32/Ser253 per Dijkers 2000; additional sites e.g. Ser315 from other studies)
     → FOXO3 cytoplasmic retention → BCL2L11 promoter silenced → BIM suppressed → cell survives

Growth factor withdrawal / PI3K inhibition → AKT inactive → FOXO3 dephosphorylated
     → FOXO3 nuclear → BCL2L11 transcription → BIM upregulated → apoptosis
```

This axis is particularly relevant in:

- **Hematopoietic homeostasis:** Lymphocytes depend on cytokine survival signals to suppress FOXO3-driven BIM transcription; cytokine withdrawal triggers BIM-mediated apoptosis for lymphocyte contraction after immune responses [^dijkers2000] [^bouillet1999].
- **Neuronal survival:** Neurotrophin withdrawal activates FOXO3 → BIM induction → apoptosis; BIM is a key mediator of developmental neuronal death and may contribute to neurodegeneration under conditions of reduced trophic support #gap/needs-human-replication.
- **Aging and IIS attenuation:** As the IIS pathway attenuates with age in some tissues, reduced AKT activity may allow partial FOXO3 nuclear entry and low-level BIM upregulation. However, the net apoptotic outcome depends on concurrent upregulation of anti-apoptotic SCAP proteins in senescent cells — the competition between BIM induction and SCAP upregulation determines cell fate. #gap/unsourced — direct quantification of BIM protein levels in primary aged (non-senescent vs senescent) human tissue is lacking.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | FOXO3–BIM axis conserved; Dijkers 2000 primary model is mouse Ba/F3 cells (not human cell lines as originally stated); conservation in human cells is established by subsequent studies but not by Dijkers 2000 itself [^dijkers2000] |
| Phenotype conserved in humans? | partial | Lymphocyte homeostasis defect in Bim-null mice (autoimmunity) not directly paralleled in human BCL2L11 loss-of-function variants; human data limited |
| Replicated in humans? | no | Most mechanistic data is from cell lines and mouse models; direct human aging evidence is absent #gap/needs-human-replication |

---

## BIM in senescence and SCAP context

Senescent cells upregulate multiple anti-apoptotic proteins — the SCAP (Senescent Cell Anti-Apoptotic Pathway). The SCAP interpretation from [[bcl-xl]], [[bcl-2]], and [[mcl-1]] pages is that these proteins accumulate to sequester BIM (and other BH3-only activators), preventing spontaneous BIM-driven BAX/BAK activation. BH3-mimetic senolytics (navitoclax, A1331852, S63845) work by releasing BIM from its anti-apoptotic captors:

- **Navitoclax** displaces BIM from BCL-2, BCL-xL, and BCL-w → freed BIM activates BAX/BAK → MOMP
- **Venetoclax** displaces BIM specifically from BCL-2 → only effective where BCL-2 is the primary BIM sequestrator
- **S63845** displaces BIM (and BAK) from MCL-1 → effective where MCL-1 is the primary sequestrator

The potency of BIM as the released activator is what drives the senolytic effect downstream of BH3-mimetic displacement. In cell-free systems, released BIM-BH3 peptide is sufficient to trigger BAX-mediated liposome permeabilization [^chipuk2010]. BIM is therefore a **convergence point** for multiple senolytic mechanisms — the common downstream effector for most BH3-mimetic strategies.

**BIM expression in senescent cells:** Senescent cells do not necessarily have elevated BIM at the protein level; the SCAP model proposes that anti-apoptotic upregulation *matches* existing BIM (keeping the cell on the apoptotic threshold). Functional BH3 profiling (mitochondrial priming assays using BIM-BH3 peptide) is used to measure total sequestration capacity — the degree to which mitochondria are "primed" to respond to BIM-BH3 peptide provides a functional readout of SCAP state. #gap/unsourced — direct quantification of BIM protein in senescent vs proliferating cells in primary human tissue is lacking; most BH3-profiling data is from cancer cell lines.

---

## Pathway membership

- [[apoptosis-pathway]] — BIM is the central direct activator BH3-only protein; initiates MOMP by activating BAX and BAK; simultaneously neutralizes all anti-apoptotic guards
- [[bcl-2-family-signaling]] — BIM is a core node in the BCL-2 family interaction network; its abundance and sequestration state determines the apoptotic priming level
- [[insulin-igf1]] — FOXO3, a direct AKT substrate, is the primary transcriptional activator of *BCL2L11*; IIS signalling directly suppresses BIM

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[bcl-xl]] | BH3:groove (IC50 4.6 nM per Chen 2005) | BCL-xL sequesters BIM; BIM displacement by navitoclax / A1331852 releases it to activate BAX/BAK |
| [[bcl-2]] | BH3:groove (IC50 2.6 nM per Chen 2005) | BCL-2 sequesters BIM; displacement by venetoclax / navitoclax releases it |
| [[mcl-1]] | BH3:groove (IC50 2.4 nM per Chen 2005 competition assay; Kd 74 ± 2 nM per Opferman 2003 FP assay — method-dependent, see affinity table note) | MCL-1 sequesters BIM; displacement by S63845 releases BIM to activate BAK |
| [[bax]] | Direct activation (BH3 → activation groove) | BIM directly contacts BAX alpha-1/alpha-2 region; triggers BAX oligomerization and MOMP |
| [[bak]] | Direct activation | BIM directly activates BAK at the MOM; primary BAK activator alongside tBID |
| [[foxo3]] | Transcriptional activator of BCL2L11 | FOXO3 binds *BCL2L11* promoter forkhead response element; IIS suppresses this via AKT-mediated FOXO3 phosphorylation |

---

## Aging interventions that modulate BIM

- [[interventions/pharmacological/senolytics]] — BH3 mimetics (navitoclax, A1331852, S63845, venetoclax) release BIM from anti-apoptotic sequestration → BIM-driven BAX/BAK activation → senolysis
- [[caloric-restriction]] — may modestly reduce IIS, partially disinhibiting FOXO3 → increased BIM transcription potential; net effect on BIM protein level in aged tissues is uncharacterized #gap/no-mechanism
- [[interventions/pharmacological/senomorphics]] — senomorphics reduce SASP without clearing senescent cells; no direct BIM modulation
- [[rapamycin]] — mTOR inhibition affects autophagy and translational capacity; indirect effect on BIM levels through S6K1/4EBP1-dependent protein synthesis not directly demonstrated #gap/unsourced

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| BIM protein levels in primary aged human tissue | #gap/unsourced | Direct measurement of BIM abundance in senescent vs non-senescent aged human cells from tissue biopsies is lacking; most evidence from cancer cell lines or mouse models |
| FOXO3–BIM axis in human aging | #gap/needs-human-replication | The FOXO3 transcriptional induction of *BCL2L11* is well-characterized in cell lines; whether partial FOXO3 disinhibition with age contributes meaningfully to BIM-driven apoptosis in human aged tissue is not established |
| BIM-EL Ser69 phosphorylation quantification in aged tissues | #gap/needs-human-replication | ERK-driven BIM-EL degradation is well-characterized in vitro; aged tissue ERK activity levels and their effect on BIM-EL stability are not quantified in primary human samples |
| Bim-null mouse aging phenotype | #gap/unsourced | Whether Bim-/- mice live longer or shorter than WT controls (i.e., whether BIM-mediated apoptosis is net beneficial or detrimental for lifespan) has not been formally reported in aging studies; only immune and developmental phenotypes are characterized |
| BH3-profiling in primary aged human tissue | #gap/needs-replication | BH3 profiling assays (measuring mitochondrial priming by BIM-BH3 peptide) are used extensively in cancer; systematic application to aged primary human tissue from non-cancer donors is limited |
| BIM-S vs BIM-EL contribution in different cell types | #gap/unsourced | Most mechanistic data concerns BIM-EL as the dominant regulated isoform; BIM-S lacks the DLC1-binding motif and is more constitutively active — its specific role in aged tissues is not characterized |
| GenAge entry for BCL2L11 | #gap/needs-canonical-id | BCL2L11 does not appear in GenAge-human as of 2026-05-04 based on search; aging relevance is inferred from FOXO3–IIS biology and SCAP function, not from direct lifespan-modification experiments |

---

## Footnotes

[^oconnor1998]: doi:10.1093/emboj/17.2.384 · O'Connor L, Strasser A, O'Reilly LA, Hausmann G, Adams JM, Cory S, Huang DCS · 1998 · EMBO Journal 17(2):384–395 · in-vitro · n=multiple cell lines and transfection experiments · model: T-lymphoma KO52DA20, WEHI lines, L929 fibroblasts, FDC-P1, 293T cells; mouse and human BIM cDNAs · 1,147 citations; local PDF downloaded · original BIM identification by BCL-2 expression screen; three isoforms BIM-EL (196 aa mouse / 198 aa human), BIM-L (140 aa mouse / 138 aa human), BIM-S (110 aa mouse); BH3 motif is sole BCL-2 homology domain; BH3 deletion (ΔBH3, residues 94–100) abolishes BCL-2 binding and most cytotoxicity; BIM-S is most potent killer and colony suppressor; BIM-EL is least potent; BIM localizes to cytoskeletal/membrane fractions; **DLC1 is NOT named in this paper — microtubule sequestration via DLC1 was established by Puthalakath et al. 1999 Mol Cell 3:287–296**; BIM binds BCL-2, BCL-xL, BCL-w but NOT viral BCL-2 homologues E1B19K or EBV BHRF-1; BIM does not interact with BAX, BAD, BIK, or BID

[^bouillet1999]: doi:10.1126/science.286.5445.1735 · Bouillet P, Metcalf D, Huang DCS et al. · 1999 · Science 286(5445):1735–1738 · in-vivo · model: Bim-/- mice (C57BL/6) · 1,493 citations; archive: not_oa (closed access) · Bim KO mice accumulate excess lymphocytes; develop autoimmune disease; impaired thymocyte negative selection; established BIM as essential for lymphocyte homeostasis and apoptotic deletion of self-reactive cells #gap/no-fulltext-access — closed-access; claims from abstract and secondary sources only

[^dijkers2000]: doi:10.1016/s0960-9822(00)00728-4 · Dijkers PF, Medema RH, Lammers JWJ, Koenderman L, Coffer PJ · 2000 · Current Biology 10(19):1201–1204 · in-vitro · model: Ba/F3 mouse pro-B cell line + mouse fetal liver cells (primary model); not primary human T cells as previously stated · 965 citations; local PDF downloaded · demonstrated FKHR-L1 (FOXO3) transcriptionally activates BCL2L11 in response to IL-3 withdrawal; FKHR-L1 phosphorylation sites documented at Thr32 and Ser253 (Ser315 not mentioned in this paper); BIM mRNA induction by nuclear FKHR-L1(A3) persists in cycloheximide, confirming direct transcriptional regulation; established that PI3K–AKT survival signalling suppresses BIM by restricting FOXO3 to cytoplasm; paper does not identify the specific forkhead response element nucleotide positions in BCL2L11 promoter

[^chen2005]: doi:10.1016/j.molcel.2004.12.030 · Chen L, Willis SN, Wei A, Smith BJ, Fletcher JI, Hinds MG, Colman PM, Day CL, Adams JM, Huang DCS · 2005 · Molecular Cell 17(3):393–403 · in-vitro · n=biochemical (biosensor competition assay + coimmunoprecipitation in mammalian cells) · model: recombinant prosurvival BCL-2 family proteins (immobilized BIM-BH3); Walter and Eliza Hall Institute · 1,787 citations; local PDF downloaded · definitive BH3 selectivity panel (Fig 3A IC50 values, nM): BIM-BCL-2 2.6, BIM-BCL-xL 4.6, BIM-BCL-w 4.3, BIM-MCL-1 2.4, BIM-A1 4.3 — BIM-BH3 binds all five comparably (pan-binding); in contrast BAD IC50 for MCL-1 >100,000 nM (no binding) and NOXA IC50 for BCL-2/BCL-xL/BCL-w >100,000 nM; distinguished BIM/PUMA (pan-binders) from selective sensitizers; BIM and PUMA bind all five anti-apoptotic proteins with low nM IC50; BAD selective for BCL-2/BCL-xL/BCL-w; NOXA selective for MCL-1/A1; coimmunoprecipitation in 293T cells confirms BIM binds BCL-2, BCL-xL, and MCL-1 in cells; **assay is biosensor competition (IC50), not fluorescence polarization Kd** — values are not directly comparable to Opferman 2003 FP Kd values

[^ley2003]: doi:10.1074/jbc.m301010200 · Ley R, Balmanno K, Hadfield K, Weston C, Cook SJ · 2003 · Journal of Biological Chemistry 278(21):18811–18816 · in-vitro · model: CCl39 Chinese hamster ovary fibroblasts, CR1-11 and CM3 conditional kinase cells, ts20 CHO (temperature-sensitive ubiquitin mutant), HEK293 for transfection · 603 citations; local PDF downloaded · ERK1/2 pathway activation is both necessary and sufficient to promote BIM-EL phosphorylation (shown by electrophoretic mobility shift and phosphatase treatment) and proteasomal degradation (blocked by MG132 and lactacystin); FLAG-ubiquitin co-expression confirms polyubiquitination; **paper does NOT identify specific phosphorylation sites (no Ser residue numbers reported)** and does **NOT identify TRIM2** or any specific E3 ligase — those attributions in older wiki text were incorrect; paper identifies ERK1/2 (not ERK5, PI3K, or other MAPKs) as the key kinase via selective pharmacological and genetic tools; key mechanism linking RAS–ERK pro-survival signalling to BIM suppression; explains ERK-inhibitor-mediated BIM restoration

[^chipuk2010]: doi:10.1016/j.molcel.2010.10.019 · Gavathiotis E, Reyna DE, Davis ML, Bird GH, Walensky LD · 2010 · Molecular Cell 40(3):481–492 · **NOTE: This DOI resolves to Gavathiotis/Walensky 2010, not a Chipuk review** — the page was originally cited as "Chipuk 2010" but the archived paper under this DOI is a structural/biochemical study of BIM BH3-triggered BAX activation (NMR + biochemical, Dana-Farber/Children's Hospital Boston). This paper confirms BIM BH3 as a direct BAX activator via the α1/α6 trigger site (distinct from the anti-apoptotic hydrophobic groove). The direct activator vs sensitizer conceptual framework per se is from Letai et al. 2002 (Cancer Cell) and Kuwana et al. 2005 (Mol Cell), both cited within this paper. The Gavathiotis 2010 paper provides structural mechanistic evidence for the direct activation model. See also Vogler 2025 [^vogler2025] which confirms the direct activator classification of BIM, tBID, and PUMA in current nomenclature. #gap/needs-canonical-id — the Chipuk citation label on this page is a misnomer; correct attribution for the direct activator/sensitizer framework should cite Letai 2002 or Kuwana 2005.

[^opferman2003]: doi:10.1038/nature02067 · Opferman JT, Letai A, Beard C, Sorcinelli MD, Ong CC, Korsmeyer SJ · 2003 · Nature 426(6967):671–676 · in-vivo + in-vitro · model: conditional Mcl1 knockout mice (lymphocyte lineage) + fluorescence polarization biochemistry · 777 citations; local PDF downloaded · established MCL-1 as continuously required anti-apoptotic factor; BIM-BH3 peptide vs GST-MCL-1 fluorescence polarization yielded Kd ~74 nM (74 ± 2 nM) — the authoritative value for this interaction (corrects the common "~1 nM" figure in older literature)

[^vogler2025]: doi:10.1038/s41392-025-02176-0 · Vogler M et al. · 2025 · Signal Transduction and Targeted Therapy · review · 139 citations; local PDF downloaded · comprehensive current review of BCL-2 family mechanisms, BH3-only protein selectivity, MCL-1 turnover, and clinical development of BH3 mimetics; current reference for BIM selectivity panel and affinity hierarchy
