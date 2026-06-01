---
type: protein
aliases: [CASP8, FLICE, MCH5, CAP4, FADD-homologous ICE/CED-3-like protease, Mort-1-associated ced-3 homolog]
uniprot: Q14790
ncbi-gene: 841
hgnc: 1509
mouse-ortholog: Casp8
ensembl: ENSG00000064012
druggability-tier: 1
caused-by: []
causes: []
key-domains: [DED-1, DED-2, p18-catalytic, p10-catalytic]
key-ptms: [Tyr380-phosphorylation, Ser387-phosphorylation]
pathways: ["[[apoptosis-pathway]]", "[[dna-damage-response]]"]
hallmarks: ["[[chronic-inflammation]]", "[[cellular-senescence]]"]
sens-categories: []
known-interactors: ["[[fadd]]", "[[bid]]", "[[ripk1]]", "[[ripk3]]", "[[cflar]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "All six primary-source PDFs verified against local archive copies (Muzio 1996, Boldin 1996, Scaffidi 1998, Varfolomeev 1998, Oberst 2011, Kaiser 2011). UniProt Q14790 identity fields (accession, NCBI Gene, HGNC, Ensembl) and canonical active-site residue numbering (His317, Cys360) taken from Boldin 1996 sequence alignment and UniProt annotation — not independently re-queried against current UniProt record. PTM claims (Tyr380, Ser387) remain unverified against original primary literature; tagged #gap/needs-replication."
---

# Caspase-8 (CASP8)

The apex initiator caspase of the **extrinsic apoptosis pathway** — activated at the death-inducing signaling complex (DISC) downstream of FasL, TNF-α, and TRAIL death receptors. Caspase-8 bridges extracellular death signals to the intracellular demolition machinery: it directly activates the executioner [[caspase-3]] (type I cells) or cleaves [[bid]] → tBID to engage the mitochondrial amplification loop (type II cells). Beyond apoptosis, caspase-8 has a critical non-apoptotic function: suppression of RIPK3-dependent **necroptosis**, making it a binary switch between two fundamentally different modes of cell death.

## Identity

- **UniProt:** Q14790 (CASP8_HUMAN)
- **NCBI Gene:** 841
- **HGNC symbol:** CASP8
- **Ensembl:** ENSG00000064012
- **Mouse ortholog:** Casp8 (one-to-one; function highly conserved; Casp8-/- embryonic-lethal in mouse)
- **Length:** 479 amino acids (canonical isoform 1; see Isoforms below)
- **Molecular weight:** ~55 kDa (procaspase-8 zymogen); processed to p18 + p10 active subunits upon activation
- **EC number:** 3.4.22.61

## Discovery

Caspase-8 was discovered simultaneously in 1996 by two groups using complementary approaches. Muzio et al. used mass spectrometry on FADD co-immunoprecipitates and identified **FLICE** (FADD-like ICE), a novel ICE/CED-3-family protease that binds the FADD death effector domain and, upon overexpression, induces apoptosis blocked by the broad caspase inhibitor CrmA [^muzio1996]. In a parallel paper, Boldin et al. characterized **MACH** (Mort-1-associated ced-3 homologue / CASP8) as the most upstream enzymatic component of the Fas/APO-1- and p55-TNFR-induced death signaling cascade, acting downstream of the FADD/MORT-1 adapter [^boldin1996]. Both papers identified the same protein (subsequently named caspase-8 by the unified caspase nomenclature committee), establishing it as the physical link between death receptor ligation and the caspase cascade.

## Domain architecture and structure

Procaspase-8 has a characteristic **DED-DED-p18-p10** modular architecture:

| Domain | Residues (approx.) | Function |
|---|---|---|
| Death effector domain 1 (DED-1) | 2–80 | FADD-DED interaction at DISC; tandem DED interaction surface |
| Death effector domain 2 (DED-2) | 100–177 | Procaspase-8 self-oligomerization during DISC assembly |
| Linker / prodomain | 178–216 | Autocleavage site Asp216/217 (interdomain linker removal) |
| p18 catalytic subunit | 217–374 | Large catalytic subunit; contains active-site His317 and Cys360 |
| p18–p10 interdomain | 375–384 | Autocleavage site Asp374/375; releases p10 from p18 |
| p10 catalytic subunit | 385–479 | Small catalytic subunit; required for substrate-binding pocket assembly |

**Active site:** The catalytic dyad is **His317 + Cys360** (thiol protease mechanism). Cys360 is the nucleophilic thiol that attacks the substrate peptide bond; His317 acts as the general base. This catalytic dyad is conserved across all caspase family members.

**Substrate specificity:** Caspase-8 requires Asp at the P1 position and preferentially cleaves the consensus sequence **(Leu/Asp/Val)-Glu-Thr-Asp↓(Gly/Ser/Ala)** — the LETD↓X or IETD↓X motif — distinct from the executioner caspase-3/7 preference (DEVD↓X) and caspase-9 preference (LEHD↓X). This specificity underlies caspase-8's selective substrate repertoire (BID at LETD59, RIPK1, CYLD) versus executioner substrates (PARP, etc.).

## Isoforms

Multiple isoforms arise from alternative splicing of the CASP8 pre-mRNA. The canonical isoform 1 (alpha, 479 aa) is the full-length catalytically active procaspase. Shorter isoforms (variously called isoforms β through η, and an extended 8L isoform with an ER-targeting sequence) lack the complete catalytic domain and may function as dominant-negative inhibitors of caspase-8 activation. UniProt Q14790 annotates at least nine isoforms. The catalytically active forms include isoforms with the complete DED-DED-p18-p10 architecture; truncated isoforms have been proposed to modulate DISC signaling by competing for FADD binding without generating active protease. #gap/unsourced — the dominant-negative function of truncated isoforms is described in review literature; primary functional characterization of individual isoforms in native cells needs citation.

## DISC assembly and autoproteolytic activation

The activation mechanism of caspase-8 is the **proximity-induced dimerization model** (also called the induced-proximity or activation-by-dimerization model):

1. Death ligand (FasL / CD95L, TNF-α, TRAIL) binds cognate death receptor (Fas/CD95, TNFR1, DR4/DR5)
2. Receptor cytoplasmic death domains trimerize and recruit the adapter **FADD** via homotypic death-domain (DD) interactions
3. FADD's own N-terminal DED then recruits procaspase-8 (and procaspase-10 in humans) via DED-DED interactions
4. Multiple procaspase-8 molecules co-localize at the DISC, enabling **homodimerization** via the DED-2/p18 interface
5. Dimerization alone partially activates the caspase-8 zymogen; autocleavage at **Asp216/217** then releases the prodomain, and cleavage at **Asp374/375** separates p18 from p10
6. The fully processed **p18/p10 heterotetramer** (two p18 + two p10) is released as the active initiator caspase

The two cleavage events are not strictly sequential — dimerization-induced partial activity initiates interdomain cleavage, and the resulting structural rearrangements stabilize the active conformation. This means that even uncleaved but dimerized procaspase-8 has some enzymatic activity, which is important for the necroptosis-suppression function described below.

**FLIP (cFLIP / CFLAR):** The catalytically inactive caspase-8 homologue [[cflar]] (cFLIP) competes for DISC incorporation. FLIP-long (FLIP-L) can heterodimerize with procaspase-8 at the DISC and, paradoxically, generates a CASP8-FLIP heterodimer with limited but sufficient catalytic activity to cleave RIPK1 and CYLD (blocking necroptosis) but insufficient to process BID and activate apoptosis. Thus cFLIP concentration is a threshold switch determining whether DISC activation leads to apoptosis (low FLIP: CASP8 homodimer), necroptosis suppression only (intermediate FLIP: CASP8-FLIP heterodimer), or neither (high FLIP: inhibition of both).

## Type I vs. type II cell death: the DISC strength model

Scaffidi et al. 1998 defined the distinction between **type I** and **type II** cells using CD95 (Fas) as the model death receptor [^scaffidi1998]:

- **Type I cells** (e.g., thymocytes, lymphocytes): DISC forms efficiently; large amounts of active caspase-8 are generated; this is sufficient to directly cleave and activate effector caspase-3/7, bypassing mitochondria. Type I death proceeds even when the mitochondrial pathway is blocked (e.g., by BCL-xL overexpression).
- **Type II cells** (e.g., hepatocytes, pancreatic beta-cells): DISC forms inefficiently; only small amounts of active caspase-8 are generated at the DISC; this is insufficient to directly activate executioner caspases. Instead, caspase-8 cleaves [[bid]] at Asp59 → tBID → mitochondrial outer membrane permeabilization (MOMP) via [[bak]]/[[bax]] → cytochrome c → apoptosome → caspase-9 → caspase-3/7. In type II cells, BCL-xL overexpression blocks death.

The molecular basis of type I versus type II is not the cell type per se but the **amplitude of DISC-derived caspase-8 signal** relative to the threshold for direct effector caspase activation — influenced by death receptor density, FADD abundance, and FLIP levels. The classification is not binary in all contexts. #gap/unsourced — the Scaffidi 1998 paper defines the Type I/II model; the molecular determinants of DISC efficiency in different tissues require additional primary citations.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | CASP8 characterized directly in human cells; Scaffidi 1998 used human SKW6.4 (B-cell; type I) and H9 (T-cell; type I) vs. CEM (T-cell; type II) and Jurkat (T-cell; type II) |
| Phenotype conserved in humans? | partial | Type II hepatocyte death conserved; KO embryonic-lethality data is murine; no human CASP8-null exists |
| Replicated in humans? | in-progress | Loss-of-function CASP8 mutations found in human cancers; pharmacological caspase-8 modulation limited to investigational agents |

## BID cleavage: bridging extrinsic and intrinsic pathways

One of caspase-8's most quantitatively important substrates is **BID** (BH3-interacting domain death agonist). Caspase-8 cleaves full-length BID at Asp59 (human) generating the truncated form **tBID**, which translocates to the mitochondrial outer membrane and directly activates [[bak]] and [[bax]] to trigger MOMP — the point of no return in intrinsic apoptosis [^li1998, ^luo1998 — cited in [[bid]] discovery section; see [[bid]] page for primary citations].

This BID-cleavage step is the **obligate amplification relay in type II cells**: Bid-/- mice are resistant to Fas-induced hepatocellular apoptosis (Yin 1999) precisely because hepatocytes are type II cells where caspase-8 DISC output is too low for direct effector caspase activation and must be amplified via the mitochondrial pathway.

## Non-apoptotic function: suppression of necroptosis

Caspase-8's most aging-relevant non-apoptotic function is the **suppression of RIPK3-dependent necroptosis** (programmed necrotic death). This function was genetically defined by a pair of 2011 Nature papers:

**Oberst et al. 2011** demonstrated that the caspase-8 / cFLIP-L heterodimer has catalytic activity sufficient to cleave RIPK1 and the deubiquitinase CYLD — substrates that would otherwise assemble the **necrosome** (RIPK1-RIPK3 amyloid complex → MLKL phosphorylation → plasma membrane rupture) [^oberst2011]. Enzymatic activity in the CASP8-FLIP heterodimer was required; a CASP8 C360A catalytically-inactive mutant (caspase-8^CA) failed to suppress necroptosis.

**Kaiser et al. 2011** provided the definitive genetic proof: **Casp8-/- mice die between embryonic days E10.5 and E11.5 from massive necroptosis**, and this lethality is completely rescued by simultaneous deletion of Ripk3 [^kaiser2011]. Casp8-/- Ripk3-/- double-knockout mice are viable, fertile, and develop normally — demonstrating that caspase-8's essential developmental role is suppression of RIPK3-dependent necrosis, not the promotion of apoptosis. The same principle applies postnatally: intestinal epithelial-specific Casp8 deletion leads to Ripk3-dependent inflammatory bowel disease phenotypes.

**Mechanism:** During receptor-interacting protein kinase (RIPK) signaling (e.g., TNF stimulation in the absence of cIAPs), RIPK1 and RIPK3 associate. Caspase-8 (as the CASP8-FLIP heterodimer or CASP8 homodimer) cleaves RIPK1 at Asp324 (human) and processes CYLD, disassembling the pro-necrotic complex. When caspase-8 is absent (or inhibited), the RIPK1-RIPK3 complex phosphorylates and activates MLKL, which oligomerizes and permeabilizes the plasma membrane — lytic, immunogenic cell death.

**Aging context of CASP8-RIPK3 balance:** Necroptosis is a highly pro-inflammatory death mode that releases DAMPs (damage-associated molecular patterns), IL-1α, IL-33, and HMGB1. Age-related decline in caspase-8 activity (or shift toward necroptotic signaling in chronically inflamed tissues) could contribute to NLRP3 inflammasome activation and [[chronic-inflammation|inflammaging]]. #gap/needs-human-replication #gap/no-mechanism

## Genetic evidence: Casp8-/- knockout

Varfolomeev et al. 1998 generated the first Casp8-/- mouse [^varfolomeev1998]:

- **Casp8-/- embryos die ~E11.5** with cardiovascular and hematopoietic developmental defects; impaired heart muscle development and congested accumulation of erythrocytes were noted; no gross morphological abnormalities were evident at E10.5
- **Abrogated death receptor signaling** — Casp8-/- embryonic fibroblasts were completely resistant to killing by anti-Fas/Apo1, human TNF, and agonistic DR3 antibody (CD120a-DR3 chimera)
- Death receptor-independent apoptosis (UV irradiation, etoposide, ceramide, staurosporine, serum starvation, VSV) was intact in Casp8-/- fibroblasts

The lethality mechanism was not fully understood at the time. The 2011 Kaiser/Oberst work retrospectively explained it as **uncontrolled RIPK3-dependent necroptosis** — the embryonic lethality reflects the necroptosis-suppression role, not a requirement for caspase-8 in developmental apoptosis. The caveat to Varfolomeev 1998's lethality characterization is that it preceded the conceptual framework of necroptosis.

## Post-translational modifications

- **Tyr380 phosphorylation** (by SRC kinase): Suppresses caspase-8 apoptotic activity; enhances cell migration via lamellipodia localization. Proposed as a mechanism by which oncogenic SRC signaling confers apoptosis resistance. #gap/needs-replication
- **Ser387 phosphorylation** (by CDK1): Inhibits DISC-mediated activation; links cell-cycle status to caspase-8 activity; cells in mitosis show reduced caspase-8 activation. #gap/needs-replication
- Both modifications are annotated in UniProt Q14790; primary sources for each should be confirmed against the original literature before quantitative claims.

## Inflammatory non-canonical roles

Caspase-8 participates in **NLRP3 inflammasome-independent IL-1β processing** under some conditions — functioning as a pro-inflammatory caspase rather than purely a pro-apoptotic or anti-necroptotic one. When RIPK3 is active but necroptosis is incomplete, caspase-8 can process pro-IL-1β to its mature form, contributing to inflammation without frank cell death. This places caspase-8 at the intersection of the PANoptosis concept (simultaneous apoptosis, necroptosis, and pyroptosis signaling). #gap/unsourced — NLRP3-independent caspase-8-driven IL-1β processing is referenced from review literature; primary cell-type-specific studies needed.

## Aging relevance

### TCR-induced apoptosis and immune aging

Aging is associated with altered T-cell death dynamics: aged T cells show resistance to activation-induced cell death (AICD) — the Fas/FasL-mediated apoptosis that normally eliminates over-activated lymphocytes after an immune response. This resistance contributes to [[immunosenescence|immunosenescence]] by allowing accumulation of dysfunctional, exhausted T cells and by impairing contraction of inflammatory responses. Caspase-8 activity at the T-cell DISC is a rate-limiting step in AICD, and its reduced efficiency in aged lymphocytes is documented in functional assays, though the molecular mechanism (reduced DISC formation efficiency, increased FLIP levels, altered Fas receptor expression) is incompletely mapped. #gap/needs-human-replication #gap/no-mechanism

### Caspase-8 in senescent cells

Senescent cells upregulate anti-apoptotic BCL-2 family proteins (BCL-xL, BCL-2, MCL-1) as part of their survival machinery — the "apoptosis resistance" phenotype that senolytics exploit. The extrinsic apoptosis pathway via caspase-8 is relatively preserved in senescent cells compared to baseline, but downstream MOMP is blocked by elevated anti-apoptotic proteins sequestering tBID. This means caspase-8 is activated at the DISC but fails to propagate the death signal in type II senescent cells (a common cell type in mesenchymal and epithelial senescence). Senolytic strategies using death receptor ligands (e.g., recombinant TRAIL derivatives targeting senescent cells expressing DR4/DR5) work through caspase-8 activation. #gap/needs-human-replication

### SASP-driven death signals and caspase-8

The [[sasp|SASP]] of senescent cells includes TNF-α, FasL, and TRAIL — all of which can activate caspase-8 in neighboring cells via paracrine signaling. Caspase-8-mediated killing of adjacent non-senescent cells by SASP death ligands is a proposed mechanism for the bystander tissue damage of senescent-cell accumulation. Whether this operates via apoptosis (type II cells require BID/MOMP amplification) or necroptosis (if caspase-8 is subthreshold) depends on the cellular context. #gap/no-mechanism

### GenAge status

CASP8 is not listed in the GenAge human database (Build 21, ~307 genes). The aging relevance of caspase-8 is mechanistic — through the extrinsic apoptosis pathway, necroptosis suppression, and immune-aging phenotypes — rather than from direct lifespan modification evidence in model organisms.

## Pathway membership

- [[apoptosis-pathway]] — extrinsic initiator caspase; DISC → caspase-8 → caspase-3 (type I) or BID → tBID → MOMP → caspase-9 → caspase-3 (type II)
- [[dna-damage-response]] — caspase-8 is not a direct DDR effector but is activated when genotoxic stress triggers death-receptor upregulation (p53 transcriptional induction of DR5/KILLER/TRAIL-R2)

## Key interactors

- **[[fadd]]** — primary adapter; FADD DED recruits procaspase-8 to DISC via DED-DED interaction; essential for all DISC-dependent caspase-8 activation
- **[[cflar]]** (cFLIP) — catalytically inactive paralog; CASP8-FLIP-L heterodimer suppresses necroptosis without inducing apoptosis; high FLIP levels inhibit apoptosis; see DISC assembly section
- **[[bid]]** — primary substrate in type II apoptosis; caspase-8 cleaves BID at Asp59 → tBID → mitochondrial amplification; see [[bid]] for mechanism
- **[[ripk1]]** — substrate in necroptosis suppression; caspase-8 cleavage at Asp324 disrupts RIPK1-RIPK3 necrosome assembly
- **[[ripk3]]** — necroptosis executor; RIPK3 kinase activity drives MLKL-mediated necrosis; suppressed by active caspase-8; RIPK3 deletion rescues Casp8-/- lethality
- **[[caspase-3]]** — downstream executioner; direct substrate of active caspase-8 in type I cells; activated via apoptosome in type II cells
- **[[caspase-9]]** — downstream initiator of the intrinsic pathway; activated at the apoptosome after MOMP; works in series with caspase-8 in type II cells
- **[[p53]]** — transcriptionally induces DR5/KILLER (TRAIL-R2), increasing death receptor surface expression → enhanced DISC formation → more caspase-8 activation; indirect regulation

## Limitations and gaps

- `#gap/needs-human-replication` — Casp8-/- KO phenotype (embryonic lethality, necroptosis dysregulation) is entirely murine. No human equivalent; natural CASP8 loss-of-function in humans is associated with autoimmune lymphoproliferative syndrome type IIB, but this is a partial LOF context. Aging-specific caspase-8 activity data in aged human tissues is sparse.
- `#gap/no-mechanism` — The molecular basis for reduced AICD / impaired caspase-8 DISC signaling in aged T cells is not resolved. Multiple candidates exist (altered Fas expression, elevated FLIP, reduced FADD, lipid raft disruption) but a definitive primary mechanism is lacking.
- `#gap/unsourced` — Dominant-negative function of short caspase-8 isoforms (beta series) in native physiological contexts lacks citations here; isoform-specific functional studies should be added.
- `#gap/unsourced` — The non-canonical caspase-8-driven IL-1β processing and PANoptosis role is cited from reviews; primary biochemical and cell-type-specific studies should be linked when the inflammasome pathway page is seeded.
- `#gap/needs-replication` — PTM claims (Tyr380-SRC, Ser387-CDK1) are from UniProt annotations; original primary characterization papers not yet identified for these pages. Quantitative effect-size data (fold-change in DISC activation, apoptotic sensitivity) for each PTM is not reported here.
- CASP8 is **not in GenAge human database** (Build 21). No direct lifespan-modification evidence in any model organism.

## Footnotes

[^muzio1996]: doi:10.1016/s0092-8674(00)81266-0 · Muzio M, Chinnaiyan AM, Kischkel FC, O'Rourke K, Shevchenko A, Ni J, Scaffidi C, Bretz JD, Zhang M, Gentz R, Mann M, Krammer PH, Peter ME, Dixit VM · 1996 · Cell 85(6):817–827 · in-vitro · n=not reported · model: FADD co-IP + overexpression in 293 cells; first identification of FLICE/CASP8 as FADD-binding ICE/CED-3-family protease; ~3,500 citations; **locally available in archive** (10.1016/s0092-8674(00)81266-0)

[^boldin1996]: doi:10.1016/s0092-8674(00)81265-9 · Boldin MP, Goncharov TM, Goltsev YV, Wallach D · 1996 · Cell 85(6):803–815 · in-vitro · n=not reported · model: MORT1/FADD yeast two-hybrid + in vitro cleavage assays; identified MACH as the most upstream enzymatic component of Fas/TNFR death signaling; ~3,200 citations; **locally available in archive** (10.1016/s0092-8674(00)81265-9)

[^scaffidi1998]: doi:10.1093/emboj/17.6.1675 · Scaffidi C, Fulda S, Srinivasan A, Friesen C, Li F, Tomaselli KJ, Kroemer G, Peter ME, Krammer PH · 1998 · EMBO J 17(6):1675–1687 · in-vitro · n=not reported · model: human type I cells (SKW6.4 B-lymphoblastoid, H9 T-lymphoma) and type II cells (CEM T-lymphoma, Jurkat T-lymphoma); defined the type I/II signaling distinction via DISC caspase-8 and caspase-3 cleavage kinetics + BCL-2/BCL-xL rescue assay; ~2,800 citations; **locally available in archive** (10.1093/emboj/17.6.1675)

[^varfolomeev1998]: doi:10.1016/s1074-7613(00)80609-3 · Varfolomeev EE, Schuchmann M, Luria V, Chiannilkulchai N, Beckmann JS, Mett IL, Rebrikov D, Brodianski VM, Kemper OC, Kollet O, Lapidot T, Avraham H, Wallach D · 1998 · Immunity 9(2):267–276 · in-vivo · n=not reported · model: Casp8-/- mice (C57BL/6 × 129 background); first Casp8 KO; embryonic-lethal ~E11.5 with impaired heart muscle development + congested erythrocyte accumulation; fibroblasts resistant to anti-Fas, TNF, DR3 but sensitive to UV/staurosporine/etoposide/serum starvation; ~1,900 citations; **locally available in archive** (10.1016/s1074-7613(00)80609-3)

[^oberst2011]: doi:10.1038/nature09852 · Oberst A, Dillon CP, Weinlich R, McCormick LL, Fitzgerald P, Pop C, Hakem R, Salvesen GS, Green DR · 2011 · Nature 471:363–367 · in-vitro + in-vivo · n=not reported · model: Casp8^CA (C360A catalytically-inactive) knock-in MEFs + caspase-8/FLIP heterodimer forced-dimerization biochemistry; demonstrated catalytic activity of CASP8-FLIP_L heterodimer is required to suppress RIPK3-mediated necrosis without inducing apoptosis; ~1,400 citations; **locally available in archive** (10.1038/nature09852)

[^kaiser2011]: doi:10.1038/nature09857 · Kaiser WJ, Upton JW, Long AB, Livingston-Rosanoff D, Daley-Bauer LP, Hakem R, Caspary T, Mocarski ES · 2011 · Nature 471:368–372 · in-vivo · n=not reported · model: Casp8-/- Rip3-/- double-KO mice generated by intercross; demonstrated that RIP3 (RIPK3) mediates embryonic lethality of Casp8-/- mice (E10.5–E11.5); double-KO mice viable, fertile, develop normally but accumulate abnormal T cells with age; ~1,400 citations; **locally available in archive** (10.1038/nature09857)
