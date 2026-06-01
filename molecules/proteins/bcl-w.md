---
type: protein
aliases: [BCL-W, BCL2L2, Bcl-2-like 2, Apoptosis regulator Bcl-W, BCLW, KIAA0271]
uniprot: Q92843
ncbi-gene: 599
hgnc: 995
mouse-ortholog: Bcl2l2
ensembl: ENSG00000129473
druggability-tier: 1
caused-by: []
causes: []
key-domains: [BH4, BH1, BH2, BH3-receptor-groove, transmembrane-anchor]
key-ptms: [phosphorylation, methylation]
pathways: ["[[apoptosis-pathway]]", "[[bcl-2-family-signaling]]"]
hallmarks: ["[[cellular-senescence]]"]
sens-categories: ["[[apoptosenes]]"]
known-interactors: ["[[bax]]", "[[bak]]", "[[bim]]", "[[bad]]", "[[bid]]", "[[puma]]", "[[bmf]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Primary-source PDFs verified for Chen 2005, Yosef 2016, Zhu 2016, Zhu 2017, and Hinds 2003 (newly downloaded). Gibson 1996 and Print 1998 unverifiable (not_oa); Chang 2016 unverifiable (download failed, green OA). UniProt Q92843 identity fields not independently re-verified against live database."
---


# BCL-W (BCL2L2)

BCL-W is a pro-survival member of the [[bcl-2-family-signaling|BCL-2 protein family]] that restrains the intrinsic [[apoptosis-pathway]] by sequestering pro-apoptotic BH3-only proteins (BIM, BID, BAD, PUMA) via its hydrophobic binding groove. In aging biology, BCL-W is a critical component of the **senescent cell anti-apoptotic programme (SCAP)** in human lung fibroblasts — dual knockdown of BCL-W and BCL-xL is sufficient to trigger apoptosis in senescent IMR-90 cells, explaining why [[navitoclax]] (which inhibits BCL-2, BCL-xL, and BCL-W) is senolytic in this lineage while [[venetoclax]] (BCL-2-selective) is not [^yosef2016][^zhu2016]. BCL-W has been somewhat overlooked relative to [[bcl-2]] and [[bcl-xl]] in the senolytic literature but is now recognized as a non-redundant survival node in fibroblast-lineage senescent cells.

**Naming note:** The gene is *BCL2L2* (BCL-2-like 2, HGNC:993); the encoded protein is variously called BCL-W or Bcl-w in the literature. This page uses **BCL-W** throughout. No pathway page named `bcl-w` exists; pathway context is covered under [[apoptosis-pathway]] and [[bcl-2-family-signaling]].

---

## Identity

| Field | Value |
|---|---|
| UniProt | Q92843 (B2CL2_HUMAN) |
| NCBI Gene | 599 |
| HGNC | 993 |
| Ensembl | ENSG00000129473 |
| HGNC symbol | BCL2L2 |
| Length | 193 amino acids (human; single canonical isoform per UniProt Q92843) |
| MW | ~20.7 kDa |
| Mouse ortholog | Bcl2l2 (highly conserved; one-to-one ortholog) |
| GenAge entry | not listed (BCL2L2 not in GenAge-human as of 2026-05-04) #gap/needs-canonical-id |

---

## Domain organization

BCL-W contains the canonical four BH-domain architecture of anti-apoptotic BCL-2 family members plus a C-terminal transmembrane anchor [UniProt Q92843]:

| Domain | Residues (human) | Function |
|---|---|---|
| **BH4** | ~9–29 | N-terminal; characteristic of anti-apoptotic members; required for full anti-apoptotic activity |
| **BH3** | ~84–100 | Embedded within the folded structure; not available for trans-binding in the anti-apoptotic orientation; role in homo/heterodimerization |
| **BH1** | ~85–104 | Forms the floor of the hydrophobic binding groove; together with BH2 constitutes the BH3-peptide receptor surface |
| **BH2** | ~136–151 | Completes the hydrophobic groove; required for BAX/BAK and BH3-only protein sequestration |
| **Transmembrane anchor** | ~172–189 | Tail-anchored; targets BCL-W to the mitochondrial outer membrane (MOM); required for in vivo anti-apoptotic activity |

Note: Exact domain boundary residues above are from UniProt Q92843 annotations (accessed 2026-05-04). The Hinds 2003 NMR solution structure paper (EMBO J; DOI 10.1093/emboj/cdg144) reports that BCL-W's C-terminal residues fold back into the hydrophobic BH3-binding groove, occluding it and restricting BH3-peptide access — a form of autoinhibition not observed in the truncated Bcl-xL structures available at the time. This is distinct from the BH4-groove interaction described for some other family members; the Hinds paper specifically shows the α9 helix (C-terminal tail) lies in the groove. Binding of a BH3 peptide displaces this tail, and displacement appears linked to tight membrane association. BCL-xL shows a similar C-terminal groove-occlusion in full-length protein. The in vivo functional significance (whether this represents a gating mechanism for BH3-only protein binding) is debated. #gap/needs-replication — the BCL-W C-terminal autoinhibition model is based on NMR solution structure analysis; whether this constitutes a kinetically relevant gate in living cells is unclear. — **NOTE: The DOI 10.1093/emboj/cdg186 previously cited here maps to an unrelated Ikaros paper. Correct DOI is 10.1093/emboj/cdg144.**

---

## Discovery and mouse knockout phenotype

BCL-W was cloned in 1996 by Gibson et al. as a BCL-2 homolog with broad tissue expression [^gibson1996]. Initial characterization suggested it was broadly anti-apoptotic, consistent with other family members.

The *Bcl2l2*-null (BCL-W knockout) mouse, generated by Print et al. (1998), produced a striking and selective phenotype [^print1998]:

- **Male-sterile**: *Bcl2l2*-/- males are viable but infertile. Spermatogenic defect localizes to early-stage germ cells (spermatocytes); Sertoli cell survival also impaired. BCL-W appears to be a critical survival factor for postmitotic Sertoli cells.
- **Female-fertile**: *Bcl2l2*-/- females are fertile; no female reproductive phenotype.
- **Otherwise grossly normal**: Unlike *Bcl-2*-/- mice (which develop polycystic kidneys and lymphoid depletion) or *Bcl-x*-/- mice (embryonic lethal due to neural and erythroid apoptosis), BCL-W-null animals are healthy and reach normal lifespan.

This restricted phenotype positioned BCL-W as a specialized anti-apoptotic factor — critical in the male germline but broadly redundant elsewhere. The subsequent discovery of BCL-W's role in fibroblast SCAP (see below) substantially revised this narrow view.

| Model | Lifespan | Primary phenotype |
|---|---|---|
| *Bcl-2*-/- | Normal-ish (early death from autoimmune kidney disease/lymphopenia) | Polycystic kidneys, lymphopenia, hypopigmentation |
| *Bcl-x*-/- (heterozygous) | Normal | KO is embryonic lethal; heterozygote no overt phenotype |
| ***Bcl2l2*-/-** | **Normal** | **Male-sterile; spermatogenic defect; otherwise viable** |

#gap/needs-human-replication — Human BCL2L2 loss-of-function variants in male infertility have not been extensively characterized. The mouse KO is not directly translatable. #gap/unsourced — no large human genomic study linking BCL2L2 variants to male infertility was found during curation.

---

## BH3-only protein binding selectivity

Chen et al. (2005) systematically measured competitive binding affinities (IC50) of BH3 peptides to all five anti-apoptotic BCL-2 family members using a surface plasmon resonance (Biacore biosensor) competition assay [^chen2005]. BCL-W affinities:

| BH3-only protein | BCL-W IC50 (nM) | BCL-2 IC50 (nM) | BCL-xL IC50 (nM) | Classification |
|---|---|---|---|---|
| [[bim]] | 4.3 | 2.6 | 4.6 | Very high affinity — binds all three comparably |
| [[puma]] | 5.1 | 3.3 | 6.3 | Very high affinity |
| BMF | 9.8 | 3.0 | 9.7 | High affinity |
| [[bad]] | 30 | 16 | 5.3 | Moderate affinity for BCL-W; high for BCL-xL |
| HRK | 49 | 320 | 3.7 | Moderate for BCL-W; low for BCL-2; high for BCL-xL |
| [[bid]] (BID BH3) | 40 | 6,800 | 82 | Moderate for BCL-W; low for BCL-2 |
| **[[noxa]]** | **>100,000 (>100 μM)** | **>100,000** | **>100,000** | **Negligible — selective non-binder of BCL-2/xL/w layer** |

All IC50 values from Chen et al. 2005 Figure 3A (representative experiment; variation <2-fold across experiments per figure legend) [^chen2005].

**Key selectivity point:** BCL-W shares the broad-spectrum binding pattern of BCL-2 and BCL-xL — binding BIM, PUMA, BMF, BAD, HRK, and BID with varying affinities but **not NOXA**. NOXA selectively antagonizes MCL-1 and A1 (IC50 24 nM and 180 nM, respectively, per the same table). This defines two functionally distinct anti-apoptotic layers: BCL-2/BCL-xL/BCL-W (broad-spectrum) vs. MCL-1/A1 (NOXA-sensitive, narrow-spectrum).

**Correction note:** Earlier extractions of this table reported BAD ~5 nM, BID ~5 nM, and BMF ~5 nM for BCL-W. The Chen 2005 Figure 3A data shows BCL-W IC50s of BAD = 30 nM, BID = 40 nM, BMF = 9.8 nM. The ~5 nM values correspond to BCL-2 or BCL-xL affinities for those ligands, not BCL-W.

The same study confirmed that BCL-W and BCL-xL have broadly similar binding profiles, with BCL-W and BCL-2 being most closely related in overall pattern (Figure 3B) [^chen2005].

---

## Mechanism of apoptosis inhibition

BCL-W operates by the same two-mode mechanism as other anti-apoptotic BCL-2 family members at the mitochondrial outer membrane:

1. **Direct BAX/BAK sequestration** — BCL-W binds the activated/membrane-integrated forms of BAX and BAK, preventing their oligomerization and pore formation. BCL-W is "loosely associated" with mitochondrial membranes in healthy cells and becomes tightly membrane-bound during apoptotic stimulation (UniProt Q92843).

2. **BH3-only protein sequestration** — BCL-W binds activator BH3-only proteins (BIM, BID) before they engage BAX/BAK, and sensitizer BH3-only proteins (BAD, PUMA, BMF) before they displace activators from anti-apoptotic guards.

**BH3-mimetic mechanism:** Drugs like navitoclax present a synthetic BH3 helix to the BCL-W groove, competitively displacing sequestered BH3-only proteins → released BIM/BID activate BAX/BAK → MOMP → cytochrome c → caspase cascade → apoptosis. Venetoclax's BCL-2-selective structure does not effectively engage the BCL-W groove, explaining its inability to senolytically clear BCL-W-dependent cells.

---

## BCL-W in senescence and aging

### Senescent cell anti-apoptotic programme (SCAP) — IMR-90 fibroblasts

The most aging-relevant discovery for BCL-W came from two complementary siRNA/pharmacological studies of the SCAP in human lung fibroblasts (IMR-90):

**Yosef et al. 2016 (Nature Communications)** — multiple senescence inducers in IMR-90 [^yosef2016]:
- Used siRNA knockdown of individual BCL-2 family members to dissect which members are required for senescent IMR-90 survival. The primary siRNA knockdown experiment was performed in DIS (DNA damage-induced senescence by etoposide) cells. OIS (oncogene-induced, H-RasV12) and RS (replicative senescence) cells were also tested with ABT-737 and pharmacological inhibitors but the BCL-W + BCL-xL dual siRNA experiment specifically used DIS cells.
- **BCL-W + BCL-xL dual knockdown** caused ~53% reduction in senescent DIS IMR-90 cell viability (each alone causing only minor reductions). BCL-2 siRNA had only a minor additive effect when combined with BCL-xL — the paper notes siRNA against BCL-2 only modestly reduced its protein level despite mRNA knockdown.
- ABT-737 (which inhibits BCL-2, BCL-W, and BCL-xL) phenocopied the dual knockdown across all three senescence induction types (DIS, RS, OIS), confirming pharmacological tractability.
- **ABT-199 (venetoclax, BCL-2-selective) alone was insufficient** to senolytically clear DIS or MEF senescent cells — consistent with BCL-W + BCL-xL being the dominant survival nodes. ABT-199 did reduce OIS IMR-90 viability in a dose-dependent manner (Fig. 2b), which the authors attribute to lower BCL-2 levels in OIS cells and/or the oncogenic context increasing BCL-2 dependence.
- In vivo, ABT-737 eliminated DNA-damage-induced senescent cells from mouse lungs (irradiation model, n=5/group) and p53-induced senescent epidermal cells (K5-rtTA/tet-p14ARF transgenic skin model) in young mice (3-week-old); in vivo experiments used targeted senescence induction in young animals, not chronologically aged mice.

**Zhu et al. 2016 (Aging Cell)** — radiation-induced senescence in IMR-90 (10 Gy) [^zhu2016]:
- Used radiation (10 Gy) as the senescence inducer and a different siRNA combination protocol than Yosef 2016.
- Found that the **triple BCL-2 + BCL-xL + BCL-w combination** was required for IMR-90 senolysis. BCL-xL alone or BCL-2 + BCL-xL together were insufficient.
- This study's triple-combination finding vs Yosef 2016's dual BCL-W + BCL-xL finding reflect different induction conditions and possibly the relative contribution of BCL-2 under different senescent states. #gap/contradictory-evidence — both findings are considered real; the discrepancy in BCL-2's sufficiency contribution likely reflects inducer-specific variation in SCAP composition.

**SCAP dependency by cell type (summary):**

| Cell type | Primary SCAP node(s) | BCL-W required? | Source |
|---|---|---|---|
| IMR-90 (lung fibroblasts; DIS — etoposide; ABT-737 also active in RS and OIS) | BCL-W + BCL-xL (dual siRNA sufficient; each alone insufficient; BCL-2 minor additive) | **Yes — essential** | Yosef 2016 [^yosef2016] |
| IMR-90 (lung fibroblasts; radiation-induced, 10 Gy) | BCL-2 + BCL-xL + BCL-W (triple siRNA) | **Yes — co-required** | Zhu 2016 [^zhu2016] |
| HUVECs (endothelial) | BCL-xL dominant (BCL-xL siRNA alone senolytic) | Minor/additive | Zhu 2016 [^zhu2016] |
| Primary preadipocytes | EFNB1, EFNB3, PI3KCD, p21, PAI-2 (not BCL-2 family) | No | Zhu 2015 [^zhu2015] |

BCL-W's role in fibroblast SCAP explains a key therapeutic observation: navitoclax (BCL-2 + BCL-xL + BCL-W) is senolytic in IMR-90-type fibroblast populations, as is venetoclax (BCL-2 only) in OIS-IMR-90 but not DIS/MEF senescent cells, and A-1331852 (BCL-xL-selective) is also senolytic in IMR-90 cells per Zhu 2017 despite BCL-xL siRNA alone being insufficient per Zhu 2016 (see #gap/contradictory-evidence in pharmacology section).

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | BCL-W sequence and SCAP function confirmed in human IMR-90 cells (human primary line) |
| Phenotype conserved in humans? | partial | Demonstrated in human cell lines; primary aged human fibroblasts in vivo uncharacterized |
| Replicated in humans? | no | No human clinical trial of BCL-W-targeted senolysis; navitoclax trials ongoing for cancer not aging |

#gap/needs-human-replication — All BCL-W SCAP data is from human cell lines (in vitro); direct evidence in primary aged human tissue is lacking.

---

## Pharmacology

### Navitoclax (ABT-263) — pan-BCL-2/BCL-xL/BCL-W inhibitor

Navitoclax is the primary pharmacological tool for interrogating BCL-W's contribution to SCAP. It inhibits BCL-2, BCL-xL, and BCL-W with Ki values each ≤1 nM (per Tse et al. 2008 — see [[navitoclax]] for full binding data; Yosef 2016 does not report Ki values), making it effectively a pan-inhibitor of the BCL-2/BCL-xL/BCL-W layer.

- **Senolytic mechanism in IMR-90**: BCL-W and BCL-xL are displaced from their BH3-only cargoes → BIM/BAD freed → BAX/BAK activation → MOMP → apoptosis.
- **Dose-limiting toxicity**: BCL-xL inhibition in platelets causes thrombocytopenia (see [[bcl-xl]]). This toxicity is not BCL-W-specific — it is an on-target BCL-xL effect. BCL-W appears not to have a critical platelet-survival role analogous to BCL-xL.
- **Senolytic activity in vivo**: ABT-737 (an earlier-generation close analog of navitoclax) eliminated senescent cells from mouse lungs and skin in targeted senescence models (young mice) [^yosef2016]. Navitoclax senolytic activity in chronologically aged mice was demonstrated in Chang et al. 2016 (10.1038/nm.4010 — PDF not locally downloaded; claims not verified) [^chang2016].

See [[navitoclax]] for full compound data (implicit stub; needs seeding).

### Venetoclax (ABT-199) — BCL-2-selective; does NOT inhibit BCL-W

Venetoclax was specifically engineered to spare BCL-xL (and therefore platelets). Its binding surface does not effectively engage BCL-W's hydrophobic groove either. This selectivity explains its failure as a senolytic in fibroblast-lineage senescent cells: with BCL-W + BCL-xL intact, the SCAP remains functional despite BCL-2 inhibition [^yosef2016][^zhu2016].

See [[venetoclax]] (implicit stub; may overlap with [[bcl-2]] pharmacology section) and [[bcl-2]] for the full BCL-2-selective senolytic discussion.

### A-1331852 — BCL-xL-selective; senolytic in HUVECs and IMR-90, not preadipocytes

A-1331852 is highly BCL-xL-selective. In Zhu et al. 2017, A-1331852 was senolytic in both HUVECs and IMR-90 cells (Figs 2b–i: significant reduction in ATP, cell survival, and caspase 3/7 induction in senescent but not proliferating cells) but was NOT senolytic in primary human preadipocytes [^zhu2017]. This finding is consistent with BCL-xL being individually rate-limiting for HUVEC and IMR-90 senescent cell survival, and also consistent with the Zhu 2016 triple-knockdown finding if BCL-xL is the dominant node. The relationship between A1331852's IMR-90 activity and the Zhu 2016 finding that BCL-xL siRNA alone is insufficient for IMR-90 senolysis represents a dose/selectivity discrepancy that is not fully resolved — the pharmacological inhibitor may achieve effective enough BCL-xL occupancy to overcome the redundancy seen at siRNA-level knockdown. #gap/contradictory-evidence — A1331852 (BCL-xL-selective drug) is senolytic in IMR-90 per Zhu 2017, yet BCL-xL siRNA alone was insufficient per Zhu 2016; may reflect incomplete siRNA knockdown vs. pharmacological inhibition kinetics.

---

## BCL-W in cancer

BCL-W is elevated in some lymphomas and solid tumors, though it is less prominent in oncology literature than BCL-2 or BCL-xL. Navitoclax's clinical development in cancer inherently targets BCL-W (among other family members). No selective BCL-W inhibitor is in clinical development. BCL-W's cancer biology is not comprehensively reviewed on this wiki; this page focuses on the senolytic-relevant aging context.

---

## Pathway membership

- [[apoptosis-pathway]] — BCL-W is a core node in intrinsic apoptosis regulation; sequesters BAX/BAK and BH3-only proteins at the MOM checkpoint upstream of MOMP.
- [[bcl-2-family-signaling]] — BCL-W is a member of the BCL-2 protein family; part of the pro-survival sub-family (BCL-2, BCL-xL, BCL-W, MCL-1, A1/BCL2A1).
- [[cellular-senescence]] — BCL-W is a SCAP component in fibroblast-lineage senescent cells; its upregulation contributes to the apoptosis resistance of senescent IMR-90 cells.

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[bax]] | Direct binding (groove:BH3 of activated BAX) | BCL-W sequesters BAX, preventing oligomerization at MOM |
| [[bak]] | Direct binding | Sequesters BAK at MOM; prevents pore formation |
| [[bim]] | BH3:groove (IC50 4.3 nM) | Activator BH3-only; BCL-W sequestration prevents BIM from engaging BAX/BAK |
| [[bad]] | BH3:groove (IC50 30 nM) | Sensitizer; BAD phosphorylation by Akt dissociates from BCL-W |
| [[bid]] | BH3:groove (IC50 40 nM) | tBID (activator); sequestered by BCL-W with moderate affinity |
| [[puma]] | BH3:groove (IC50 5.1 nM) | Sensitizer/activator; high-affinity BCL-W ligand |
| [[noxa]] | Negligible (IC50 >100 μM) | Does NOT bind BCL-W — NOXA selectively targets MCL-1/A1 |
| [[bmf]] | BH3:groove (IC50 9.8 nM) | Sensitizer; sequestered by BCL-W |
| [[bcl-xl]] | Functional redundancy in SCAP | BCL-W and BCL-xL together constitute the dominant SCAP in IMR-90 fibroblasts |

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| BCL-W SCAP contribution discrepancy (dual vs triple) between Yosef 2016 and Zhu 2016 | #gap/contradictory-evidence | Yosef 2016 (DIS/etoposide): BCL-W + BCL-xL dual siRNA sufficient; Zhu 2016 (radiation/10 Gy): triple BCL-2 + BCL-xL + BCL-W required. Additional discrepancy: A1331852 (BCL-xL drug) is senolytic in IMR-90 (Zhu 2017) despite BCL-xL siRNA alone being insufficient (Zhu 2016). Inducer-dependent and siRNA-vs-drug SCAP response differences not fully explained |
| In vivo senolysis in chronologically aged mice | #gap/needs-replication | Yosef 2016 in vivo data used targeted senescence induction in young mice; Chang 2016 navitoclax-aged-mouse data not locally verified |
| BCL-W SCAP role in primary human aged fibroblasts | #gap/needs-human-replication | All data from human cell lines (IMR-90); primary aged human tissue characterization absent |
| BCL-W contribution to platelet survival | #gap/unsourced | BCL-W is reportedly dispensable for platelet survival (unlike BCL-xL); no primary source establishing this claim was located during this curation pass |
| Human BCL2L2 germline variants and male infertility | #gap/needs-replication | Mouse KO shows male-sterile phenotype; human genetic data linking BCL2L2 loss-of-function to infertility is sparse |
| GenAge entry | #gap/needs-canonical-id | BCL2L2 does not appear in GenAge-human; aging relevance derives from SCAP biology rather than direct lifespan manipulation |
| BCL-W C-terminal autoinhibition model | #gap/needs-replication | Hinds 2003 NMR solution structure (DOI 10.1093/emboj/cdg144; previously mis-cited as cdg186) describes the C-terminal α9 helix occluding the hydrophobic binding groove; BH3 peptide binding displaces the C-terminus, linked to tight membrane association; in vivo functional significance as a kinetic gate remains debated and not independently confirmed |
| Selective BCL-W inhibitor development | #gap/long-term-unknown | No selective BCL-W chemical probe or clinical compound exists; all pharmacological BCL-W data derives from pan-inhibitors (navitoclax/ABT-737) |

---

## Footnotes

[^gibson1996]: PMID:8761287 (no DOI; Oncogene 1996, 13(4):665–675) · Gibson L, Holmgreen SP, Huang DCS et al. · in-vitro (cloning/expression) · model: PCR-based cloning from cDNA library + transfected mammalian cells (lymphoid/myeloid) · original cloning of BCL-W as a novel BCL-2 family member; showed BCL-W promotes cell survival against cytotoxic stimuli; broad mRNA expression across murine tissues including brain, testis, heart, kidney; rare in B/T lymphoid lines · not locally downloaded (no DOI; closed-access) #gap/no-fulltext-access — **NOTE: The DOI 10.1006/cyto.1996.0066 previously cited here maps to an unrelated IL-2/macrophage paper in Cytokine and has been removed. Correct citation is PMID:8761287.**

[^print1998]: doi:10.1073/pnas.95.21.12424 · Print CG, Loveland KL, Gibson L et al. · in-vivo · model: Bcl2l2-/- mice (gene-targeted C57BL/6 background) · key finding: BCL-W-null mice are viable but male-sterile; spermatogenic defect with postmitotic Sertoli cell survival dependence; female fertility intact; no other major phenotype · not locally downloaded (status: not_oa) #gap/no-fulltext-access

[^chen2005]: [[studies/chen-2005-bh3-affinities]] · doi:10.1016/j.molcel.2004.12.030 · Chen L, Willis SN, Wei A et al. · in-vitro (surface plasmon resonance competition assay on Biacore) · model: purified recombinant BCL-2 family proteins (C-terminal truncations) + synthetic BH3 peptides · key finding (Fig 3A): BCL-W IC50s — BIM 4.3 nM, PUMA 5.1 nM, BMF 9.8 nM, BAD 30 nM, HRK 49 nM, BID 40 nM, NOXA >100,000 nM (>100 μM); defines the broad-spectrum (BCL-2/BCL-xL/BCL-W) vs narrow-spectrum (MCL-1/A1) anti-apoptotic layers; assay variation <2-fold across replicate experiments · locally downloaded (PDF confirmed) — **Correction: prior versions of this page listed BAD ~5 nM, BID ~5 nM, BMF ~5 nM for BCL-W; these are incorrect; actual values from Fig 3A are BAD 30 nM, BID 40 nM, BMF 9.8 nM**

[^yosef2016]: [[studies/yosef-2016-bcl-w-bcl-xl-senolytic]] · doi:10.1038/ncomms11190 · Yosef R, Pilpel N, Tokarsky-Amiel R et al. · in-vitro + in-vivo · model: IMR-90 human lung fibroblasts (DIS/etoposide, RS/replicative, and OIS/H-RasV12 senescence); MEFs; mouse lung irradiation (n=5/group; 8 Gy, young male mice) + K5-rtTA/tet-p14ARF transgenic epidermal model (young mice) · key finding: BCL-W + BCL-xL dual siRNA knockdown caused ~53% reduction in DIS IMR-90 cell viability (each alone insufficient); BCL-2 only minor additive role; ABT-199 (venetoclax, BCL-2-selective) insufficient in DIS/MEF senescent cells; ABT-737 eliminates senescent cells in vivo in young-mouse irradiation and p14ARF transgenic skin models · locally downloaded (PDF confirmed)

[^zhu2016]: [[studies/zhu-2016-navitoclax-senolytic]] · doi:10.1111/acel.12445 · Zhu Y, Doornebal EJ, Pirtskhalava T et al. · in-vitro · model: IMR-90 human lung fibroblasts (10 Gy radiation-induced senescence), HUVECs (10 Gy), primary human preadipocytes (10 Gy); n=5 replicates/group (HUVEC, IMR-90); n=4 subjects (preadipocytes) · key finding (Fig 4A–B): triple BCL-2 + BCL-xL + BCL-w siRNA required for IMR-90 senolysis; BCL-xL siRNA alone (or + BCL-2) senolytic in HUVECs but insufficient for IMR-90; BCL-w co-knockdown required for IMR-90 senolysis; navitoclax (N) senolytic in HUVECs and IMR-90 but not preadipocytes; BCL-2 + BCL-xL + BCL-1 (MCL-1) triple (targets of TW-37) was not senolytic; preadipocytes require a non-BCL-2-family SCAP · locally downloaded (PDF confirmed)

[^zhu2015]: [[studies/zhu-2015-scap-senolytics]] · doi:10.1111/acel.12344 · Zhu Y, Tchkonia T, Pirtskhalava T et al. · in-vitro + in-vivo · model: primary human preadipocytes + HUVECs (siRNA screen); progeroid Ercc1−/Δ and chronologically aged C57BL/6 mice · key finding: BCL-xL dominant SCAP node in HUVECs; preadipocyte SCAP is EFNB1/EFNB3/PI3KCD/p21/PAI-2 (not BCL-2 family); dasatinib + quercetin senolytic in vivo · locally downloaded (PDF confirmed)

[^zhu2017]: doi:10.18632/aging.101202 · Zhu Y, Doornebal EJ, Pirtskhalava T et al. · in-vitro · n=5 replicates per concentration (HUVEC/IMR90); 4 subjects (preadipocytes) · model: 10 Gy radiation-induced senescent HUVECs, IMR90, primary preadipocytes; also fisetin tested · key finding: A1331852 and A1155463 (BCL-xL-selective) are senolytic in both HUVECs and IMR-90 cells (significantly reduced senescent cell ATP, crystal violet survival, and induced caspase 3/7) but NOT in primary preadipocytes; fisetin senolytic in HUVECs but not IMR-90 or preadipocytes · locally downloaded (PDF confirmed)

[^chang2016]: doi:10.1038/nm.4010 · Chang J, Wang Y, Shao L et al. · in-vivo · model: 24-month-old C57BL/6 mice; oral navitoclax · key finding: navitoclax depletes senescent cells from bone marrow and muscle, rejuvenating HSCs and muscle stem cells; first in-vivo navitoclax senolytic study in aged mice · not locally downloaded (DOI lookup failed; green OA, no PMC entry) #gap/no-fulltext-access
