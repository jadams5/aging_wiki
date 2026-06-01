---
type: protein
aliases: [BCL2L8, BAD, "BCL-2-associated agonist of cell death", "BCL-2 antagonist of cell death"]
uniprot: Q92934
ncbi-gene: 572
hgnc: 936
mouse-ortholog: Bad
ensembl: ENSG00000002330
druggability-tier: 2
caused-by: []
causes: []
key-domains: [BH3, disordered-N-terminus, disordered-loop]
key-ptms: [Ser99-phosphorylation, Ser75-phosphorylation, Ser118-phosphorylation, Arg94-methylation, Arg96-methylation]
pathways: ["[[pi3k-akt-pathway]]", "[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[deregulated-nutrient-sensing]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[bcl-xl]]", "[[bcl-2]]", "[[bcl-w]]", "[[14-3-3]]", "[[akt]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Datta 1997 and Zha 1996 verified against full PDFs; Harada 1999 verified against full PDF (downloaded 2026-05-04); Yang 1995 unverifiable — download failed (bronze OA, no PMC copy); Yang 1995 DOI 10.1016/0092-8674(95)90411-5 confirmed correct via DOI lookup title match; UniProt-derived identity fields (Q92934, NCBI Gene 572, HGNC 936, Ensembl) not independently re-verified against databases"
---

# BAD (BCL2L8)

BAD (BCL-2-associated agonist of cell death; gene *BAD*, also listed as *BCL2L8*) is a BH3-only member of the BCL-2 family that acts as a **sensitizer/derepressor** rather than a direct activator of apoptosis. It binds and neutralizes the anti-apoptotic proteins [[bcl-xl]], [[bcl-2]], and BCL-w, but — critically — **cannot bind MCL-1 or A1**. This binding selectivity means BAD does not directly trigger apoptosis by engaging BAX or BAK; instead, it liberates BH3-only activators (BIM, BID, PUMA) that were being held in check by BCL-xL/BCL-2/BCL-w, lowering the apoptotic threshold. BAD is the canonical molecular transducer of [[pi3k-akt-pathway|PI3K/AKT]] survival signaling into the BCL-2 family: when cells receive growth-factor signals, AKT phosphorylates BAD, sequestering it in the cytoplasm and relieving its sensitizer activity.

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q92934 (BAD_HUMAN) |
| NCBI Gene | 572 |
| HGNC | 936 |
| Ensembl | ENSG00000002330 |
| Gene symbol | *BAD* (also listed as *BCL2L8*) |
| Protein length | 168 amino acids (canonical isoform) |
| MW | ~18.4 kDa |
| Mouse ortholog | Bad (one-to-one; function conserved; **note:** mouse residue numbering is used in many primary studies and differs from human numbering — see phosphorylation section) |
| GenAge entry | not confirmed — check HAGR Build 21 #gap/needs-canonical-id |

**Naming caution:** The original name "BCL-2 antagonist of cell death" could be read as "antagonizes cell death," but the protein's function is the opposite — it antagonizes BCL-2's *anti-apoptotic* activity, thereby *promoting* apoptosis. UniProt Q92934 notes this potential confusion.

---

## Structure and domain organisation

BAD is a small, largely **intrinsically disordered protein**. The canonical human isoform is 168 amino acids; residues 1–105 and 125–145 are predicted to be disordered (UniProt Q92934). The protein contains:

- **BH3 motif (residues 110–124 in human, UniProt numbering):** The sole structured interaction domain. The BH3 helix inserts into the hydrophobic groove of anti-apoptotic BCL-2 family members. An intact BH3 motif is required for both pro-apoptotic activity and anti-apoptotic protein binding [^yang1995]. Phosphorylation of Ser118 (within the BH3 motif; human numbering; Ser155 in mouse) has been proposed to directly disrupt this interaction and promote release from BCL-xL — but the primary source for this claim could not be verified in the PDFs available (Harada 1999 does not address Ser155; Yang 1995 PDF unavailable). #gap/needs-primary-source
- **No BH1, BH2, BH4, or transmembrane anchor domains.** BAD therefore cannot form homodimers or insert into membranes autonomously — its subcellular localisation is entirely regulated by phosphorylation state and 14-3-3 sequestration.

**Mouse vs human residue numbering:** Most seminal BAD studies (Yang 1995, Datta 1997, Zha 1996, Harada 1999) used mouse Bad. The commonly-cited phospho-sites Ser112, Ser136, and Ser155 (mouse) correspond approximately to Ser75, Ser99, and Ser118 in the human protein (UniProt Q92934). This page uses human UniProt numbering in the identity section and notes mouse equivalents where relevant.

---

## Mechanism of action: sensitizer, not direct activator

The BCL-2 family operates via a competitive binding network at the mitochondrial outer membrane. BAD is a **sensitizer** in the Bhatt/Letai classification:

- **Direct activators** (BIM, BID, tBID, PUMA in some models) bind BAX/BAK directly and trigger their conformational change and oligomerisation → outer membrane permeabilisation.
- **Sensitizers/derepressors** (BAD, NOXA) bind anti-apoptotic family members and prevent them from neutralising the direct activators, raising the effective apoptotic signal.

BAD cannot directly activate BAX or BAK. Its pro-apoptotic function requires that direct activators (especially [[bim]]) be present but held sequestered by BCL-xL/BCL-2/BCL-w. By competing for the hydrophobic groove of BCL-xL/BCL-2/BCL-w, BAD releases BIM and other activators to engage BAX/BAK [^yang1995].

### BCL-2 family binding selectivity

BAD BH3 binds BCL-xL, BCL-2, and BCL-w with high affinity, but **does not bind MCL-1 or A1**. This selectivity is critical: cells that survive primarily by MCL-1 are insensitive to BAD. Representative affinities (approximate; values vary across assay systems):

| Anti-apoptotic protein | BAD BH3 binding | Notes |
|---|---|---|
| [[bcl-xl]] | High affinity (~10–100 nM Kd) | First confirmed interaction [^yang1995]; 51+ experimental confirmations in UniProt Q92934 |
| [[bcl-2]] | High affinity (~10–100 nM Kd) | Co-purification demonstrated [^yang1995] |
| BCL-w | High affinity (similar range) | Inferred from functional studies #gap/needs-replication |
| [[mcl-1]] | **No significant binding** | Structurally excluded; explains MCL-1-driven apoptosis resistance #gap/needs-canonical-id |
| A1 / BFL-1 | **No significant binding** | Same structural basis as MCL-1 exclusion #gap/needs-canonical-id |

Precise Ki values from fluorescence polarization assays remain to be added — see #gap/needs-canonical-id for a primary-source affinity table.

---

## Regulation by phosphorylation

BAD is regulated almost entirely through phosphorylation. Unphosphorylated BAD localises to the mitochondrial outer membrane and engages BCL-xL/BCL-2/BCL-w. Multiple kinases phosphorylate distinct serine residues in response to survival signals, each inactivating BAD through 14-3-3 sequestration or direct groove disruption.

### Major phosphorylation sites

| Human site (UniProt Q92934) | Mouse equivalent | Kinase(s) | Effect |
|---|---|---|---|
| Ser99 | Ser136 | AKT/PKB (primary in vivo per Datta 1997); other kinases (PKA, RSK, CaMKII) can phosphorylate this site in vitro but are not established as primary in-vivo kinases [^datta1997] | 14-3-3 binding; cytoplasmic sequestration; primary AKT-linked survival signal |
| Ser75 | Ser112 | Mitochondria-anchored PKA type II holoenzyme (via AKAP D-AKAP1/S-AKAP84) — primary in-vivo kinase per Harada 1999 [^harada1999]; MEK pathway also contributes (~25%) | 14-3-3 binding; additional cytoplasmic sequestration; localised at mitochondria |
| Ser118 | Ser155 | Not established by the primary sources covered here #gap/needs-primary-source — attributed to PKA in some reviews but Harada 1999 (which focused on Ser112) does not demonstrate this; Yang 1995 PDF unavailable | Within BH3 motif; reported to directly disrupt BCL-xL binding |

**AKT phosphorylation of Ser136 (Ser99 human) — the canonical survival signal.** Datta et al. 1997 showed that growth-factor activation of PI3K/AKT (via IGF-1 and PDGF in cell lines; NGF in primary neurons) results in direct AKT-mediated phosphorylation of BAD at Ser136 (mouse), coupling the survival-signalling pathway to the apoptotic machinery [^datta1997]. This phosphorylation creates a binding site for 14-3-3 proteins, which sequester phospho-BAD in the cytoplasm and prevent it from accessing BCL-xL at the mitochondria. Importantly, Datta 1997 demonstrated that constitutively active AKT phosphorylates BAD at only one site in vivo (Ser-136 alone), and showed that AKT failed to significantly phosphorylate Ser-112 in vivo; rapamycin (p70S6K inhibitor) did not block BAD Ser-136 phosphorylation, ruling out p70S6K as the primary Ser-136 kinase. A "second PDGF-inducible kinase" distinct from AKT handles the other BAD phosphorylation site (Ser-112) in these cells. The primary neuron model was rat cerebellar granule neurons (DIV 4-5); cell lines included Balb/c 3T3, HEK293, and COS-7.

**PKA at Ser112 (Ser75 human) — mitochondria-anchored kinase.** Harada et al. 1999 (Mol Cell) identified a type II PKA holoenzyme tethered to the mitochondrial outer membrane via the AKAP D-AKAP1/S-AKAP84 that phosphorylates BAD specifically at Ser112 (mouse) [^harada1999]. Key evidence: (1) AKT immunodepletion did not substantially reduce IL-3-induced BAD kinase activity in FL5.12 cells; (2) PKA-specific inhibitors H-89 and Rp-cAMP blocked IL-3-induced Ser-112 phosphorylation ~50% but did not affect Ser-136 phosphorylation; (3) an AKAP-disrupting peptide (Ht31) reduced IL-3-induced BAD phosphorylation ~50% and eliminated mitochondrial S112 kinase activity; (4) the purified Ser-112-specific kinase was identified as PKAc by mass spectrometry and Western blot. Note: MEK pathway inhibitor PD98059 partially reduced (~25%) total BAD phosphorylation, and PI3K inhibitors (LY294002, wortmannin) also contributed, demonstrating that multiple pathways converge on BAD phosphorylation in vivo — see #gap/contradictory-evidence.

**Ser155 within the BH3 motif (Ser118 human).** A residue directly within the BH3 helix (Ser155 in mouse numbering) has been proposed as a PKA-phosphorylated site that physically blocks the BH3-groove interaction with BCL-xL, providing a groove-direct mechanism of inactivation in addition to 14-3-3 sequestration. **However, this claim is not demonstrated in Harada 1999** — that paper focused exclusively on Ser-112 and does not address Ser-155. The original Yang 1995 PDF is not locally available for verification. Attribution and primary source for the Ser-155/Ser118 claim require a dedicated verification pass. #gap/needs-primary-source

### 14-3-3 sequestration

Upon phosphorylation of Ser75 and/or Ser99 (human numbering; Ser112 and/or Ser136 in mouse), 14-3-3 proteins (multiple isoforms: YWHAB, YWHAE, YWHAG, YWHAH, YWHAQ, YWHAZ per UniProt Q92934) bind phospho-BAD and retain it in the cytoplasm. This was directly demonstrated by Zha et al. 1996 (Cell): either Ser-112 or Ser-136 alone is sufficient to mediate 14-3-3 binding; the double S112A/S136A mutant does not bind 14-3-3 and constitutively induces death [^zha1996]. The nonphosphorylated form of BAD is the species that heterodimerizes with BCL-xL at membrane sites; phosphorylated BAD resides in the cytosol bound to 14-3-3 and cannot access membrane BCL-xL. FL5.12 pro-B cells (IL-3-dependent murine hematopoietic line) were used as the primary model in Zha 1996.

### PP2A dephosphorylation — stress-activated reactivation

Under stress conditions (growth-factor withdrawal, DNA damage, metabolic stress), the serine/threonine phosphatase **PP2A** dephosphorylates BAD, releasing it from 14-3-3 proteins and allowing relocalisation to the mitochondrial membrane [^gap-pp2a]. #gap/unsourced — the PP2A-BAD link is well-established in the literature (multiple references) but no primary source has been confirmed against an archived PDF for this wiki.

### PRMT1 methylation — blocks AKT phosphorylation

Asymmetric dimethylation at Arg94 and Arg96 (human numbering) by PRMT1 has been reported to inhibit AKT-mediated phosphorylation of Ser99, providing an alternative mechanism to modulate the BAD inactivation switch (UniProt Q92934). #gap/needs-replication — this modification has not been confirmed with the same depth of study as the serine phosphorylation cascade.

---

## BAD in the PI3K/AKT/IIS axis

BAD is the most direct molecular bridge between [[pi3k-akt-pathway|PI3K/AKT]] signalling and the apoptotic machinery. The canonical circuit:

```
Growth factor (IGF-1, insulin, NGF, PDGF)
  → RTK activation
  → PI3K → PIP3
  → PDK1 → AKT/PKB
  → AKT phosphorylates BAD Ser136 (mouse) / Ser99 (human)
  → Phospho-BAD–14-3-3 complex (cytoplasm)
  → BCL-xL/BCL-2/BCL-w freed at mitochondria
  → Apoptotic threshold raised
  → Cell survival
```

Growth-factor withdrawal reverses this: AKT activity drops, PP2A dephosphorylates BAD, and BAD re-engages mitochondrial BCL-xL/BCL-2/BCL-w to lower the apoptotic threshold.

This circuit makes BAD a **direct sensor of insulin/IGF-1 signalling strength** at the mitochondria. In aging biology, where insulin/IGF-1 signalling (IIS) is progressively deregulated ([[deregulated-nutrient-sensing]]), BAD phosphorylation state may shift, contributing to altered apoptotic sensitivity in aged tissues. The mechanistic link between IIS decline and BAD dephosphorylation in human aging is inferred but not directly demonstrated in aged human tissue [^datta1997]. #gap/needs-human-replication

---

## Aging context

### BAD as a readout of IIS-linked apoptotic priming

The [[insulin-igf1]] pathway and its downstream [[pi3k-akt-pathway]] axis are among the best-validated longevity pathways across model organisms (from *C. elegans* daf-2/daf-16 through IGF-1R heterozygous mice). AKT-mediated BAD phosphorylation provides a molecular mechanism by which attenuated IIS signalling could lower the apoptotic threshold in aged cells — a potential contribution to the increased baseline apoptosis and accelerated senescent-cell accumulation seen in aged tissues.

However, this aging connection is largely **mechanistic inference**: while the BAD-AKT circuit is well characterised in growth-factor-dependent cell lines and neurons, direct evidence that BAD dephosphorylation drives tissue aging phenotypes is sparse. #gap/needs-human-replication

### Apoptosis resistance in senescent cells

Senescent cells paradoxically upregulate anti-apoptotic proteins ([[bcl-xl]], [[bcl-2]], BCL-w) to resist elimination — a phenomenon that the senolytic field exploits via navitoclax, [[a1331852]], and the [[dasatinib]]+[[quercetin]] combination [^bcl-xl-sasp-ref]. BAD itself is not an established target in this context; rather, the pattern of BCL-xL/BCL-2/BCL-w upregulation that BAD targets is mechanistically convergent with the senescent-cell "anti-apoptotic shield." Whether BAD expression or phosphorylation state is altered in senescent cells has not been systematically characterised. #gap/unsourced

### Extrapolation from model organisms

| Dimension | Status | Notes |
|---|---|---|
| BAD-AKT phosphorylation conserved in humans? | yes | Human BAD Q92934 Ser99 is the AKT site; function biochemically validated in human cell lines [^datta1997] |
| IIS-BAD axis in aging conserved? | partial | Circuit conserved; whether quantitative change in BAD phosphorylation drives aging outcomes in humans not directly shown |
| Replicated in humans (aging)? | no | No human aging dataset directly measuring BAD phosphorylation state with age #gap/needs-human-replication |

---

## Pathway membership and key interactors

- **[[apoptosis-pathway]]** — core sensitizer in the BCL-2 family network
- **[[pi3k-akt-pathway]]** — substrate of AKT; direct transducer of survival signalling to apoptotic machinery
- **[[bcl-2-family-signaling]]** — subfamily: BH3-only sensitizers
- **[[insulin-igf1]]** — upstream context; IIS activates AKT which phosphorylates BAD

Key interactors (experimentally confirmed):
- [[bcl-xl]] — primary binding partner (51+ experimental confirmations; UniProt Q92934)
- [[bcl-2]] — secondary binding partner; same BH3-groove mechanism
- **BCL-w** — binding confirmed functionally; contributes to sensitizer selectivity
- **14-3-3 proteins** — cytoplasmic sequestration of phospho-BAD; multiple isoforms
- [[akt]] — direct kinase (phospho-Ser99); AKT1 confirmed by UniProt Q92934
- **PKA / AKAP complexes** — Ser75 (Ser112 mouse) kinase at mitochondria; primary in-vivo Ser112 kinase per Harada 1999 [^harada1999]; Ser118 (Ser155 mouse) attribution to PKA not verified against primary source #gap/needs-primary-source
- **PP2A** — dephosphorylation under stress; reactivates BAD #gap/unsourced
- **PRMT1** — Arg94/Arg96 methylation; inhibits AKT phosphorylation (UniProt Q92934)

---

## Pharmacology

No approved drugs target BAD directly. BAD is relevant to the pharmacology of BCL-2 family inhibitors:

- **Navitoclax** and **[[a1331852]]** target BCL-xL and (for navitoclax) BCL-2 — overlapping with BAD's binding selectivity. These drugs mimic the sensitizer action of BAD BH3 in cells where BCL-xL/BCL-2/BCL-w are the dominant anti-apoptotic shield (SCAP), though with higher affinity and without the counter-regulatory phosphorylation.
- **Venetoclax** (BCL-2 selective) similarly occupies BAD's BCL-2 target — BCL-2-dependent haematologic malignancies represent contexts where BAD's sensitizer function is therapeutically mimicked.
- BAD's inability to bind MCL-1 is a direct analogy to the known MCL-1-driven resistance mechanism for all BH3-mimetics that target BCL-xL/BCL-2 exclusively.

---

## Limitations and knowledge gaps

- #gap/needs-human-replication — The BAD-AKT circuit is well characterised in cell lines and mouse models; its quantitative contribution to tissue aging in humans is not directly demonstrated.
- #gap/unsourced — PP2A dephosphorylation of BAD: well-cited in review literature but no primary-source PDF confirmed in this wiki.
- #gap/unsourced — BAD phosphorylation state in senescent vs non-senescent cells: not systematically characterised in published aging datasets.
- #gap/needs-canonical-id — Precise Ki/Kd values for BAD BH3 binding to BCL-xL, BCL-2, BCL-w from a single fluorescence-polarization affinity panel (analogous to the BIM/PUMA affinities available for MCL-1 from Vogler 2025 / other structural studies).
- #gap/contradictory-evidence — Ser112 (mouse) / Ser75 (human) kinase assignment: Harada 1999 establishes mitochondria-anchored PKA as primary in-vivo kinase; Datta 1997 Discussion notes preliminary evidence for RSK and CaMKII in vitro; MEK pathway also contributes ~25% in vivo (Harada 1999 Fig 5A). The PKA/AKAP mechanism is the best-documented, but other kinases contribute.
- #gap/needs-primary-source — Ser155 (mouse) / Ser118 (human) PKA phosphorylation within BH3 motif: attributed to PKA in reviews but not demonstrated in the three PDFs verified here (Harada 1999 focused on Ser112; Yang 1995 unavailable). A primary source for this specific claim requires verification.
- #gap/no-fulltext-access — Yang 1995 (Cell 80:285–291; DOI 10.1016/0092-8674(95)90411-5): bronze OA but download failed; no PMC copy. Claims attributed solely to Yang 1995 (BH3 mutagenesis details, exact BAD–BCL-xL displacement mechanism) cannot be verified from PDF.
- #gap/long-term-unknown — Whether BAD loss-of-function or gain-of-function alters longevity in mammals (no published lifespan studies in Bad-/- mice focused on aging).

---

## Cross-references

- [[apoptosis-pathway]] — mechanistic context for BCL-2 family interactions
- [[bcl-xl]] — primary binding partner; dominant SCAP in HUVECs
- [[bcl-2]] — binding partner; dominant SCAP in B cells and some hematologic malignancies
- [[mcl-1]] — NOT a BAD target; key to understanding apoptosis-resistance patterning
- [[bim]] — direct activator BH3-only protein whose sequestration by BCL-xL BAD relieves
- [[puma]] — sensitizer/activator (classification contested); released by BAD from BCL-xL/BCL-2
- [[bak]] — executioner whose sequestration by MCL-1 is NOT released by BAD
- [[bax]] — executioner; indirect activation via BIM release
- [[pi3k-akt-pathway]] — upstream survival signalling pathway
- [[insulin-igf1]] — growth-factor context for AKT-BAD axis
- [[deregulated-nutrient-sensing]] — hallmark; IIS deregulation with aging as upstream context
- [[cellular-senescence]] — context: anti-apoptotic shield in senescent cells overlaps BAD targets
- [[navitoclax]] — BH3-mimetic; pharmacological analog of BAD's sensitizer function
- [[a1331852]] — BCL-xL selective inhibitor; mimics BAD's BCL-xL neutralization

---

## Footnotes

[^yang1995]: doi:10.1016/0092-8674(95)90411-5 · Yang E et al. 1995 (Cell 80:285–291) · in-vitro (yeast 2-hybrid + co-immunoprecipitation; 293T/COS7 transfection) · model: human and mouse BAD constructs · archive status: **download failed** — bronze OA but no PMC copy; paper cannot be locally verified #gap/no-fulltext-access · DOI confirmed correct via DOI lookup (title: "Bad, a heterodimeric partner for Bcl-xL and Bcl-2, displaces bax and promotes cell death") · Claims attributed to Yang 1995 (BCL-xL/BCL-2 heterodimeric partner; BH3 mutagenesis; BAX displacement) are well-established in the field and corroborated by Zha 1996 and Harada 1999 citations of this work, but body-text claims from Yang 1995 are not directly verified from PDF

[^datta1997]: doi:10.1016/s0092-8674(00)80405-5 · Datta SR et al. 1997 (Cell 91:231–241) · in-vitro + in-vivo (primary cerebellar granule neurons; Balb/c 3T3; HEK293; COS-7; PC12) · model: rat primary cerebellar granule neurons (DIV 4-5) + mouse/human cell lines · archive status: **downloaded** (local PDF available) · AKT directly phosphorylates BAD at Ser136 (mouse) in vitro and in vivo; constitutively active AKT (8.3% ± 1.2% apoptosis) suppresses BAD-mediated neuronal death (97.7% ± 1.3% without survival factors); this survival effect requires only intact Ser-136 (not Ser-112); PI3K inhibitors (wortmannin 20 nM, LY294002 10 µM) block BAD phosphorylation; rapamycin (p70S6K inhibitor) does not block Ser-136 phosphorylation; AKT does not significantly phosphorylate Ser-112 in vivo

[^zha1996]: doi:10.1016/s0092-8674(00)81382-3 · Zha J, Harada H, Yang E et al. 1996 (Cell 87:619–628) · in-vitro + IL-3-dependent cell survival model (FL5.12 pro-B cells) · model: mouse Bad; FL5.12 BCL-xL/Bad cells · archive status: **downloaded** (local PDF available) · IL-3 withdrawal → BAD dephosphorylation → BCL-xL membrane binding → apoptosis; IL-3 addition → Ser136+Ser112 phosphorylation → 14-3-3 cytoplasmic sequestration; phosphorylation at either Ser-112 OR Ser-136 alone is sufficient for 14-3-3 binding; double mutant S112A/S136A (BAD112A136A) fails to bind 14-3-3 and constitutively induces death; only nonphosphorylated BAD heterodimerizes with BCL-xL at membranes; Ser-136 tryptic peptide identified as SAPPNLWAAQR; Ser-112 peptide identified as HSSYPAGTEEDEGMEEELSPFR

[^harada1999]: doi:10.1016/s1097-2765(00)80469-4 · Harada H et al. 1999 (Mol Cell 3:413–422) · in-vitro + in-vivo (column-purification kinase assays; immunodepletion; phosphorylation labeling) · model: mouse Bad; FL5.12 BCL-xL/BAD cells (IL-3-dependent murine pro-B hematopoietic line) · archive status: **downloaded 2026-05-04** · Identifies mitochondria-anchored type II PKA holoenzyme (AKAP D-AKAP1/S-AKAP84) as the primary in-vivo kinase for BAD Ser112 (mouse); AKT immunodepletion did NOT reduce IL-3-induced Ser112 kinase activity; PKA inhibitors H-89 and Rp-cAMP block Ser112 but not Ser136 phosphorylation; AKAP-disrupting peptide Ht31 eliminates mitochondrial Ser112 kinase activity (~50% reduction of total BAD phosphorylation in vivo)

[^bcl-xl-sasp-ref]: Cross-reference to [[bcl-xl]] § Senescence biology — Zhu 2015 establishes BCL-xL as dominant SCAP in HUVECs and demonstrates navitoclax/A1331852 senolytic activity; see also [[apoptosis-pathway]] § Senescent-cell apoptosis resistance
