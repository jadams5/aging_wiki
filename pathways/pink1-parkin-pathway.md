---
type: pathway
aliases: [PINK1/Parkin pathway, PINK1-PRKN pathway, mitochondrial damage-induced ubiquitin-driven mitophagy, ubiquitin-dependent mitophagy]
kegg: hsa04137
reactome: R-HSA-5205685
wikipathways: null
key-nodes: ["[[pink1]]", "[[parkin]]", "[[ubiquitin]]", "[[p62]]", "[[ndp52]]", "[[optn]]", "[[tbk1]]", "[[lc3]]", "[[mfn1]]", "[[mfn2]]", "[[miro1]]", "[[vdac1]]"]
upstream: ["[[mitochondrial-dysfunction]]", "[[oxidative-stress]]"]
downstream: ["[[mitophagy]]", "[[autophagy]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[disabled-macroautophagy]]"]
sens-categories: ["[[mitosens]]"]
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Narendra 2008 (local PDF), Onishi 2021 (local PDF), Wauer/Sauvé 2015 (local PDF), Yang 2006 (local PDF) verified end-to-end against primary sources. Lazarou 2015 and Koyano 2014 not verified (not_oa); claims from those papers flagged #gap/no-fulltext-access in footnotes. Singh 2022 urolithin-A claims already verified on urolithin-a.md and mitophagy.md. KEGG hsa04137 and Reactome R-HSA-5205685 pathway IDs confirmed via APIs."
---


# PINK1–Parkin pathway

The PINK1–Parkin pathway is the canonical molecular mechanism by which mammalian cells detect damaged mitochondria and target them for autophagic destruction. It functions as a two-kinase, one-E3-ligase amplification cascade: mitochondrial membrane-potential (ΔΨm) collapse stabilizes the kinase [[pink1]] on the outer mitochondrial membrane (OMM), which phosphorylates ubiquitin at Ser65; phospho-ubiquitin recruits and activates the E3 ligase [[parkin]], which builds a broad poly-ubiquitin coat on the damaged organelle; cargo receptors [[ndp52]] and [[optn]] then dock on the ubiquitin coat and directly recruit the autophagosome machinery via LC3-binding LIR motifs.

This page is the **pathway-level overlay** for the PINK1/Parkin signaling mechanism. For the cellular process of selective mitochondrial autophagy as a whole (including receptor-mediated arms BNIP3/NIX/FUNDC1 and its role in aging tissues), see [[mitophagy]]. For protein-level detail, see [[pink1]] and [[parkin]] (both R6b parallel seeds).

> **SENS note:** Mapped to `[[mitosens]]` (SENS mitochondrial damage category). The SENS framing treats dysfunctional mitochondria as accumulated intracellular damage; the PINK1–Parkin pathway is the primary cellular defence. This mapping is flagged for review — SENS Mitochondrial Damage focuses on mtDNA deletion accumulation, not organelle turnover per se; the relationship is indirect.

---

## Overview — signal logic

The pathway encodes a coherent damage-detection logic:

- **Healthy mitochondria**: PINK1 is continuously imported across the OMM and inner mitochondrial membrane (IMM), where it is cleaved by a rhomboid protease (canonically attributed to PARL, though this is disputed — see Step 2 below) and rapidly degraded. OMM-resident PINK1 is therefore constitutively near-zero in healthy cells.
- **Damaged mitochondria** (ΔΨm collapse, severe ROS, misfolded IMM proteins): the electrochemical gradient that drives PINK1 import fails. Full-length PINK1 accumulates on the OMM, anchored at the TOM complex.
- **Amplification**: OMM-stabilized PINK1 initiates a feed-forward ubiquitin-phosphorylation loop that recruits Parkin from the cytosol and exponentially amplifies the ubiquitin signal on the damaged organelle.
- **Clearance**: the ubiquitin coat recruits cargo receptors → autophagosome → lysosomal degradation.

The net effect is highly selective: only organelles with collapsed ΔΨm are coated; healthy mitochondria in the same cell are spared.

---

## Six-step mechanism

### Step 1 — Damage signal: ΔΨm collapse

Loss of mitochondrial membrane potential is the triggering event. Common physiological and pathological triggers include:

- Electron-transport-chain (ETC) complex dysfunction → proton gradient failure
- Mitochondrial ROS accumulation → oxidative damage to IMM proteins
- Misfolded proteins in the IMM/matrix that exceed the unfolded-protein-response (UPR^mt^) capacity
- mtDNA mutations impair ETC complex assembly

Pharmacological models use CCCP (carbonyl cyanide m-chlorophenyl hydrazone) or oligomycin+antimycin A (OA) to depolarize mitochondria experimentally. These are validated PINK1/Parkin pathway inducers used across the primary literature.

### Step 2 — PINK1 stabilization on the OMM

In healthy mitochondria, PINK1 is imported via the TOM/TIM23 translocase complexes and cleaved by a rhomboid-family protease within the IMM. The resulting ~52 kDa N-terminal fragment is retrotranslocated to the cytosol and degraded by the proteasome via the N-end rule pathway. This keeps steady-state PINK1 very low on healthy OMM.

**PARL as the cleaving protease — disputed in mammalian cells.** PARL (presenilin-associated rhomboid-like protein) is the widely cited IMM protease responsible for PINK1 cleavage. However, Narendra et al. 2010 (10.1371/journal.pbio.1000298) found that PARL shRNA knockdown and PARL-knockout MEFs do not reduce PINK1 cleavage in mammalian cells, indicating PARL is dispensable. The identity of the actual mammalian IMM rhomboid responsible for PINK1 cleavage remains unresolved. #gap/contradictory-evidence

Upon ΔΨm collapse, the TIM23 import machinery stalls. Full-length PINK1 (~63 kDa) accumulates on the OMM, remaining anchored at the TOM complex in a topology that exposes its kinase domain to the cytosol [^narendra2008]. This topology is essential for PINK1 to phosphorylate cytosol-accessible substrates (ubiquitin and Parkin's Ubl domain).

### Step 3 — PINK1 autophosphorylation and ubiquitin Ser65 phosphorylation

OMM-stabilized PINK1 undergoes trans-autophosphorylation at Ser228 (and Ser402 in some studies) to reach full kinase activity [^onishi2021]. Active PINK1 then phosphorylates ubiquitin molecules at Ser65 — a post-translational modification not found on ubiquitin under basal conditions [^koyano2014]. Phospho-ubiquitin (pUb) accumulates on the OMM surface as a "mark" that specifically labels the damaged organelle.

Critically, pUb serves two functions: it is an allosteric activator of Parkin (by releasing Parkin's auto-inhibited conformation), and it is a high-affinity binding ligand for OPTN and NDP52 cargo receptors. This dual role makes the pUb signal both the recruitment signal for Parkin and the direct autophagy-receptor docking site.

### Step 4 — Parkin recruitment and activation

Parkin is an E3 ubiquitin ligase (RBR family: RING1–IBR–RING2 domain architecture) that is normally auto-inhibited in the cytosol. Its N-terminal ubiquitin-like (Ubl) domain folds back to occlude the active RING2 cysteine (Cys431 in human Parkin), keeping basal E3 ligase activity near zero [^wauer2015].

Activation requires two parallel inputs:

1. **PINK1 phosphorylates Parkin's Ubl domain at Ser65** — releasing the Ubl from its inhibitory docking site on RING1 (and not from RING2 directly as earlier models suggested).
2. **Parkin's RING1 domain binds pUb at the site formed by His302 and Arg305** — this pUb binding site on RING1 is spatially distinct from the Ubl-binding surface, explaining how pUb can displace the Ubl by allostery [^wauer2015].

Together, these inputs cooperate to fully open Parkin's active site in a conformational switch [^wauer2015]. Crucially, pUb and phospho-Ubl compete for RING1: pUb displaces Ubl from RING1, and Ubl phosphorylation reciprocally weakens Ubl–RING1 interaction, making it more available for pUb. The two phosphorylation events are therefore synergistic rather than redundant [^wauer2015]. The result is a dramatic increase in Parkin's E3 ligase activity, allowing it to ubiquitinate OMM substrates. Parkin-generated ubiquitin chains are themselves phosphorylated by PINK1 → more pUb → more Parkin recruitment: a positive feed-forward amplification loop [^onishi2021].

### Step 5 — Parkin substrate ubiquitination: building the poly-ubiquitin coat

Active Parkin ubiquitinates a broad set of OMM proteins, attaching K48-linked (proteasome-targeting) and K63-linked (autophagy-competent) polyubiquitin chains [^onishi2021]:

| Parkin substrate | Function | Consequence of ubiquitination |
|---|---|---|
| MFN1 / MFN2 ([[mfn1]], [[mfn2]]) | Mitochondrial outer-membrane fusion GTPases | Proteasomal degradation → blocks fusion; isolates damaged organelle |
| [[miro1]] / [[miro2]] | Adaptor linking mitochondria to kinesin motors (Miro1, dominant in neurons) and Myo19/actin-based perinuclear distribution (Miro2) | Degradation → releases mitochondrion from microtubule transport; anchors it for mitophagy. K27-chain Parkin-Ser65-dependent mechanism (Birsa 2014) demonstrated for Miro1; Miro2-specific chain-type unverified |
| VDAC1 ([[vdac1]]) | Voltage-dependent anion channel | K27-ubiquitin coat; autophagy receptor docking |
| TOMM20, TOMM40 | TOM complex subunits | Broad OMM coverage; enhances receptor recruitment |
| HK2 (hexokinase 2) | Glycolytic enzyme OMM-bound | Released to cytosol |

MFN1/2 degradation is functionally important: by preventing fusion of the damaged organelle with the healthy mitochondrial network, Parkin enforces the damaged organelle's isolation — a prerequisite for autophagosomal engulfment, since the autophagosome cannot engulf the entire network.

### Step 6 — Cargo receptor recruitment and autophagosome engulfment

The poly-ubiquitin/phospho-ubiquitin coat on the damaged mitochondrion recruits autophagy cargo receptors that bridge the tagged organelle to the growing autophagosome membrane [^lazarou2015]:

| Receptor | Ubiquitin-binding domain | LC3 interaction | Notes |
|---|---|---|---|
| **NDP52** (CALCOCO2) | SKICH domain | LIR motif (binds GABARAPL2) | **Primary** receptor; required for efficient autophagosome nucleation around damaged mitochondria |
| **OPTN** (optineurin) | UBAN domain | LIR motif (binds LC3B) | **Primary** receptor; phosphorylated by TBK1 at Ser177 → enhances LC3 binding affinity |
| **p62** / SQSTM1 ([[p62]]) | UBA domain | LIR motif | Supplementary role; important for aggregate clearance in bulk autophagy |
| TAX1BP1 | SKICH domain | LIR motif | Minor; partially redundant with NDP52 |

OPTN and NDP52 are the primary functional receptors in the PINK1/Parkin pathway; p62 is dispensable for mitophagy in multiple cell models [^lazarou2015]. **TBK1** ([[tbk1]]) phosphorylates OPTN at Ser177 during mitophagy to enhance its LC3-binding affinity — this is a regulatory step that amplifies the autophagosome-recruitment signal [^onishi2021].

The receptors directly recruit the ULK1 autophagy-initiation complex and the LC3/GABARAP family to nucleate a new autophagosome around the tagged mitochondrion. The autophagosome seals, fuses with a lysosome, and delivers the organelle for hydrolytic degradation.

---

## Branch points: PINK1-only and Parkin-independent paths

The canonical six-step model is Parkin-dependent, but two important variants exist:

**PINK1-only path:** In neurons and some other cell types, PINK1 can recruit NDP52 and OPTN directly via pUb on the OMM, bypassing Parkin entirely [^lazarou2015]. This PINK1-only path is thought to account for why neurons (which express very low Parkin) retain some mitophagy capacity. The relative contribution of the Parkin-dependent vs PINK1-only paths in vivo in aged neurons is unresolved. #gap/no-mechanism

**Alternative OMM-receptor arms:** Entirely separate receptor-mediated mitophagy pathways (BNIP3, NIX/BNIP3L, FUNDC1, BCL2L13) operate independently of PINK1/Parkin and are activated by hypoxia or developmental signals rather than ΔΨm collapse. These are covered in detail on [[mitophagy]]; this page focuses on the PINK1/Parkin axis.

---

## Aging context

### Pathway decline with age

The PINK1/Parkin pathway weakens across multiple post-mitotic tissue types with age:

- PINK1 protein levels decline in aged brain and skeletal muscle [^onishi2021].
- Parkin expression and E3 ligase activity decrease in aged dopaminergic neurons.
- Oxidized or cross-linked ubiquitin chains that are refractory to Ser65 phosphorylation accumulate, reducing pUb signal quality.
- Age-associated lysosomal dysfunction (lipofuscin accumulation, reduced cathepsin activity) impairs the terminal degradation step even when upstream signaling is intact.

The net effect is accumulation of dysfunctional mitochondria that continue to generate ROS and can trigger NLRP3 inflammasome activation → [[inflammaging]], as well as contributing to the SASP in senescent cells and the energetic deficits of [[sarcopenia]]. See [[mitophagy]] for the tissue-specific aging phenotype data.

### Genetic evidence — conservation across organisms

In *Drosophila melanogaster*, RNAi knockdown of *pink1* (dPink1) causes muscle degeneration of indirect flight muscles, dopaminergic neuron loss in the PPL1 cluster, ATP depletion, and shortened lifespan, with mitochondria that are swollen and show disintegrated cristae. Crucially, overexpression of human Parkin (hParkin) rescues both the muscle and dopaminergic phenotypes caused by dPink1 RNAi, while overexpression of DJ-1 does not [^yang2006]. Drosophila Parkin level is also significantly reduced in dPink1 RNAi animals. These findings establish that Parkin acts downstream of PINK1 in a common pathway — the *Drosophila* epistasis that was instrumental in establishing the linear PINK1→Parkin cascade as a pathway rather than two independent genes.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — PINK1 and PRKN are direct human orthologs; phospho-Ser65 ubiquitin mechanism is human-validated |
| Phenotype conserved in humans? | yes — loss-of-function mutations cause autosomal recessive Parkinson's disease in humans |
| Replicated in humans? | yes (genetic epidemiology); interventional human mitophagy data limited to surrogate endpoints |

### Parkinson's disease — pathway mutations

The PINK1/Parkin pathway has direct causal disease relevance: loss-of-function mutations in **PINK1** (PARK6, autosomal recessive) and **PRKN** (PARK2, encoding Parkin, the most common cause of juvenile-onset Parkinson's disease, autosomal recessive) cause selective dopaminergic neuron loss in the substantia nigra pars compacta.

PD-associated mutations map to specific pathway steps:

| Locus | Gene | Common mutation types | Pathway step disrupted |
|---|---|---|---|
| PARK6 | PINK1 | Missense (kinase domain), truncating | PINK1 kinase activity → fails to phosphorylate Ub-Ser65 |
| PARK2 | PRKN | Exon deletions (most common), missense | Parkin activation, E3 ligase activity |

The genetic data confirm that PINK1/Parkin-mediated mitophagy is **non-redundant** for dopaminergic neuron survival in humans over decades — the alternative receptor-mediated paths cannot compensate when the PINK1/Parkin axis is eliminated. This is the most compelling human-genetic argument that the pathway is aging-relevant, not merely a cell-biology curiosity.

Sporadic Parkinson's disease (>90% of cases) does not carry PINK1/PRKN mutations but shows evidence of mitophagy dysfunction at the cellular level — suggesting that age-related pathway decline rather than genetic abrogation can produce overlapping pathology. #gap/needs-human-replication

### Cardiac and skeletal muscle aging

Cardiomyocytes are among the most mitophagy-dependent cells: they are terminally differentiated, extremely high-energy, and cannot dilute damaged mitochondria by cell division. The PINK1/Parkin axis is the primary damage-clearance mechanism in cardiomyocytes; cardiac-specific PINK1 KO in mice produces mitochondrial dysfunction and cardiomyopathy, and Parkin overexpression is cardioprotective in ischemia-reperfusion models. For skeletal muscle, see [[mitophagy]] and [[sarcopenia]] for the mechanistic data and intervention evidence.

---

## Therapeutic targeting

### Urolithin A (indirect pathway activation)

Urolithin A is the most clinically advanced mitophagy inducer tested in humans. In the ATLAS phase 2 RCT (n=88 randomized, 79 completed; 500 mg/day and 1000 mg/day vs. placebo for 4 months), both doses improved hamstring peak torque vs. placebo; aerobic-endurance improvements were dose-dependent [^singh2022]. Mitochondrial protein biomarkers including phospho-Parkin increased at both doses, providing a biomarker signal consistent with PINK1/Parkin pathway activation, though the precise molecular target of urolithin A on the pathway has not been established. Full compound detail at [[urolithin-a]].

### Exercise

Acute exercise transiently induces mitophagy in skeletal muscle, with PINK1/Parkin contributing alongside receptor-mediated arms. Parkin translocation to mitochondria has been measured in human muscle biopsies following exercise. Whether chronic exercise training durably restores PINK1/Parkin pathway capacity in aged muscle is not firmly established. #gap/needs-replication

### PINK1 kinase activators (preclinical)

Direct PINK1 kinase activators are an active drug-discovery target in Parkinson's disease and aging biology. Compounds that stabilize PINK1 or enhance its kinase activity against pUb/Parkin are in early preclinical development. No human trial data are available as of 2026. #gap/long-term-unknown

---

## Limitations and gaps

- The relative contribution of the PINK1/Parkin arm vs. receptor-mediated (BNIP3/NIX/FUNDC1) arms to basal and stress-induced mitophagy in aged human tissues is unresolved. #gap/no-mechanism
- PINK1-only (Parkin-independent) mitophagy in neurons: how much this path compensates for Parkin's absence in aging neurons is not quantified in vivo. #gap/needs-human-replication
- Quantitative PINK1/Parkin flux measurements in post-mitotic human tissues (brain, heart) are technically extremely difficult; most human data uses surrogate biomarkers (phospho-Parkin in biopsies) or peripheral cells. #gap/needs-human-replication
- Whether pharmacological PINK1/Parkin activation can reverse or prevent age-related accumulation of dysfunctional mitochondria in humans is untested in interventional trials beyond surrogate-endpoint studies. #gap/long-term-unknown
- The SENS "MitoSENS" framing targets mtDNA deletions specifically; the relationship between PINK1/Parkin-mediated organelle clearance and mitochondrial mutant genotype selection is not straightforward. #gap/no-mechanism

---

## Related pages

- [[mitophagy]] — parent process page; covers all mitophagy arms, aging decline, disease context, and interventions in detail
- [[autophagy]] — parent macroautophagy process
- [[pink1]] — kinase subunit (R6b parallel seed)
- [[parkin]] — E3 ligase subunit (R6b parallel seed)
- [[p62]] — cargo receptor (R6b parallel seed)
- [[ndp52]] — primary cargo receptor (implicit stub)
- [[optn]] — primary cargo receptor; TBK1 substrate (implicit stub)
- [[tbk1]] — cargo receptor kinase (implicit stub)
- [[lc3]] — autophagosome membrane protein
- [[mfn1]], [[mfn2]] — Parkin substrates; mitochondrial fusion GTPases (implicit stubs)
- [[miro1]] — Parkin substrate; mitochondrial transport adaptor (implicit stub)
- [[vdac1]] — Parkin substrate (implicit stub)
- [[mitochondrial-dysfunction]] — hallmark driven by failed mitophagy
- [[parkinsons-disease]] — primary disease context for PINK1/PRKN mutations (implicit stub)
- [[urolithin-a]] — compound that activates mitophagy (compound page)
- [[sarcopenia]] — muscle phenotype exacerbated by mitophagy decline
- [[inflammaging]] — downstream consequence of accumulated dysfunctional mitochondria

---

## Footnotes

[^narendra2008]: doi:10.1083/jcb.200809125 · in-vitro · model: HeLa cells, HEK293 cells, mouse MEFs, rat cortical neurons · Narendra et al. 2008 J Cell Biol · foundational study: Parkin is selectively recruited to mitochondria with low ΔΨm and promotes their autophagic degradation via ATG5-dependent mechanism; establishes that Parkin-dependent mitophagy requires intact autophagy · local PDF available

[^onishi2021]: doi:10.15252/embj.2020104705 · review · model: multi-system · Onishi, Yamano, Sato, Matsuda & Okamoto 2021 EMBO J · comprehensive review of molecular mechanisms and physiological functions of mitophagy; covers PINK1 autophosphorylation, ubiquitin-Ser65 phosphorylation, Parkin feed-forward loop, FUNDC1/BNIP3/NIX receptor arms, aging and PD contexts · local PDF available

[^lazarou2015]: doi:10.1038/nature14893 · in-vitro · model: human HeLa and HEK293 cell lines · Lazarou et al. 2015 Nature · demonstrates NDP52 and OPTN as primary autophagy receptors downstream of PINK1-phosphorylated ubiquitin; p62 plays supplementary role; PINK1-only Parkin-independent path also demonstrated · archive: not_oa — claims not verified against full PDF #gap/no-fulltext-access

[^wauer2015]: doi:10.15252/embj.201592237 · in-vitro (structural + biochemical) · model: recombinant human Parkin (Delta86–130 crystal structure at 2.54 Å), ITC, NMR, SAXS, HeLa cells · Sauvé, Lilov, Seirafi, Vranas, Rasool, Kozlov, Sprules, Wang, Trempe & Gehring 2015 EMBO J · pUb binds Parkin RING1 at a site formed by His302 and Arg305 (confirmed by mutagenesis + ITC: H302A reduces affinity 60-fold); Ubl phosphorylation releases Ubl from RING1 and increases UbcH7 affinity; pUb and pUbl compete for RING1 binding via allostery; both phosphorylation events required for full Parkin activation · local PDF available

[^koyano2014]: doi:10.1038/nature13392 · in-vitro · model: human cell lines · Koyano et al. 2014 Nature · establishes ubiquitin Ser65 phosphorylation by PINK1 as the activating signal for Parkin; parallel paper to Kazlauskaite 2014; pUb allosterically activates Parkin · archive: not_oa — claims not verified against full PDF #gap/no-fulltext-access

[^yang2006]: doi:10.1073/pnas.0602493103 · in-vivo · model: Drosophila melanogaster (dPink1 RNAi; transgenic rescue lines) · Yang et al. 2006 PNAS · dPink1 RNAi causes muscle degeneration (IFMs), dopaminergic neuron loss (PPL1 cluster), ATP depletion, and shortened lifespan; hParkin OE rescues muscle and dopaminergic phenotypes; dParkin protein is reduced in dPink1 RNAi animals; DJ-1 OE does not rescue → establishes PINK1→Parkin epistasis order; model is RNAi knockdown, not null KO · local PDF available

[^singh2022]: doi:10.1016/j.xcrm.2022.100633 · rct · n=88 randomized (79 completed); placebo n=29, UA 500 mg n=29, UA 1000 mg n=30 · model: overweight sedentary middle-aged adults 40–64 years · Singh et al. 2022 Cell Rep Med · ATLAS trial; 4-month intervention; both doses improved hamstring strength vs. placebo (p≤0.029); aerobic-endurance gains primarily at 1000 mg/day; primary endpoint (PPO) not significant vs. placebo; phospho-Parkin biomarker increased at both doses · local PDF available
