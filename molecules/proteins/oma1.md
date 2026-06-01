---
type: protein
aliases: [overlapping with the m-AAA protease 1, MPRP-1, MPRP1, OMA1 zinc metalloprotease, ZMPOMA1]
uniprot: Q96E52
ncbi-gene: 115209
hgnc: 29661
ensembl: ENSG00000162600
genage-id: null
mouse-ortholog: Oma1
key-domains: [zinc-metalloprotease catalytic, stress-sensor transmembrane, cardiolipin-binding, N-terminal propeptide, C-terminal propeptide]
key-ptms: [autocatalytic N- and C-terminal cleavage (stress-activated; both termini cleaved resulting in complete turnover), N-terminal processing to mature ~43 kDa form (cleavage at Ala-140), Zn2+ coordination (catalytic), disulfide bond Cys407-Cys465 (redox-sensor — unsourced; not confirmed in primary PDFs reviewed)]
pathways: ["[[mitochondrial-dynamics]]", "[[integrated-stress-response]]"]
hallmarks: ["[[mitochondrial-dysfunction]]"]
sens-categories: []
known-interactors: ["[[opa1]]", "[[yme1l]]", "[[dele1]]", "[[afg3l2]]"]
druggability-tier: 3
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[mitochondrial-dysfunction]]"]
causes: ["[[mitophagy]]"]
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Primary-source PDF claims verified for Ehses 2009 (JCB), Head 2009 (JCB), Baker 2014 / EMBO J (cited as Quiros 2014 in footnotes — first-author corrected), Kaser 2003 (JBC), and Acin-Perez 2018 (Sci Transl Med) abstract+supplement. Anand 2014 (JCB, closed-access) unverifiable — tagged #gap/no-fulltext-access. Ahola 2022 (Cell Metab) verified via Europe PMC abstract only (PDF download failed repeatedly). Alavi 2022 (Pharmacol Res) and MacVicar 2016 (J Cell Sci) download failed or closed-access — tagged #gap/no-fulltext-access. Canonical-DB identity fields verified against UniProt REST + HGNC REST APIs. Disulfide bond Cys407-Cys465 claim is unsourced — tagged #gap/unsourced. druggability-tier: 3 retained as judgment assignment."
---

# OMA1

A stress-sensitive zinc metalloprotease embedded in the mitochondrial inner membrane (IMM) that serves as a stress sensor and executioner of mitochondrial shape change. OMA1 is constitutively active at low basal levels, but its activity is dramatically amplified when the IMM is depolarized, when mitochondrial ATP synthase is inhibited, when heat stress is applied, or under oxidative stress. Upon activation, OMA1 cleaves the long form of [[opa1]] (L-OPA1) at the **S1 site**, converting it to short forms (S-OPA1), collapsing the fusion capacity of the IMM and driving mitochondrial fragmentation. The OMA1/[[yme1l]] protease axis is the master rheostat controlling OPA1 isoform balance and thus the fusion-fission set-point of the mitochondrial network: YME1L cleaves L-OPA1 constitutively at the S2 site, while OMA1 cleaves at S1 under stress.

## Identity

- **UniProt:** Q96E52 (OMA1_HUMAN)
- **NCBI Gene:** 115209
- **HGNC symbol:** OMA1
- **Ensembl:** ENSG00000162600
- **Mouse ortholog:** Oma1 (one-to-one; conserved stress-activation mechanism)
- **Length:** 524 amino acids (canonical isoform, including 13-aa mitochondrial targeting sequence)

## Functional domains

| Domain | Residues (approx.) | Function |
|---|---|---|
| Mitochondrial targeting sequence | 1–13 | Import and removal post-translocation |
| N-terminal domain (matrix-facing) | 14–143 | Contains stress-sensor function (positively charged cluster 144–163 required for stress-induced activation); processed to mature form at Ala-140 upon import [^baker2014] |
| Cardiolipin-binding region | 148–167 | Membrane anchoring; cardiolipin is IMM-enriched |
| Stress-sensor transmembrane segment | 165–195 | Senses IMM depolarization (mechanism debated) |
| Transmembrane domain (IMM-spanning) | 196–216 | Anchors protease in IMM |
| Zinc metalloprotease catalytic domain | ~220–524 | HExxH zinc-binding motif; C-terminal domain faces **IMS** (not matrix) per Baker 2014 [^baker2014] |
| Disulfide Cys407–Cys465 | — | Redox-sensitive; contributes to activation gating — **unsourced; not confirmed in primary PDFs reviewed** #gap/unsourced |

OMA1 belongs to the M48 metalloprotease superfamily. Its active site faces the mitochondrial intermembrane space (IMS) — the C-terminal catalytic domain is exposed to the IMS, while the N-terminal domain is on the matrix side [^baker2014]. The mature ~43 kDa form of OMA1 arises by N-terminal processing at Ala-140 upon mitochondrial import; the protease responsible for this maturation cleavage has not been definitively identified [^baker2014]. Kaser et al. 2003 established the yeast ortholog as an M48 metallopeptidase with overlapping m-AAA protease substrate specificity [^kaser2003].

## Regulation: the stress-activation switch

OMA1 is constitutively active at low basal levels under normal IMM conditions, but activity is strongly enhanced by stress. Multiple independent stress stimuli activate OMA1 [^baker2014]:

1. **IMM depolarization** (loss of membrane potential, ΔΨm) — the most potent activator; CCCP (protonophore) or valinomycin (K+ ionophore) both activate OMA1 within minutes.
2. **ATP synthase inhibition** — oligomycin activates OMA1 at least partially; combined oligomycin + antimycin A produces strong activation; ATP depletion alone does not show strict correlation with OMA1 activation under all conditions.
3. **Heat stress** (42°C) — activates OMA1 independently of ΔΨm dissipation.
4. **Oxidative stress** (H2O2) — activates OMA1 and induces mitochondrial fragmentation in an OMA1-dependent manner.

Upon activation, OMA1 undergoes **autocatalytic self-degradation** initiated from both its N- and C-termini, resulting in complete turnover of the protein. This is not a conventional two-step activation/inactivation but a complete proteolytic elimination: once stress-activated OMA1 cleaves OPA1 and itself, the protein is fully degraded. Restoration of the mitochondrial network after stress requires de novo synthesis of OMA1 [^baker2014]. This suicide mechanism limits the duration of OMA1 activity and ensures reversibility of the fragmentation response. The positively charged amino acid cluster in the N-terminal domain (residues 144–163) outside the M48 metallopeptidase domain is required for stress-induced activation; loss of these residues abolishes stress-induced (but not constitutive) OMA1 activity [^baker2014].

| Dimension | Status |
|---|---|
| Activation mechanism conserved in humans? | yes |
| Autocatalytic self-cleavage conserved? | yes |
| Substrate (OPA1 S1/S2 cleavage sites) conserved? | yes |

## Primary substrate: OPA1 cleavage

[[opa1]] exists in two forms generated from the same polypeptide:
- **L-OPA1** (long form) — membrane-anchored; required for IMM fusion
- **S-OPA1** (short form) — soluble in intermembrane space; can tether OMM but not drive fusion

Two proteases compete to generate S-OPA1:

| Protease | Activity state | Cleavage site(s) | Outcome |
|---|---|---|---|
| [[yme1l]] (i-AAA) | Constitutively active; enhanced by nutrient sufficiency | S2 | Housekeeping S-OPA1 generation; maintains balanced morphology |
| OMA1 (IMM) | Stress-inducible; constitutively active at low level | S1 | Bulk L-OPA1 → S-OPA1 conversion under stress; drives fragmentation |

Two concurrent 2009 studies defined this dual system: Ehses et al. demonstrated that OMA1 is the principal S1 protease for stress-induced OPA1 processing [^ehses2009], confirmed by the independent Head et al. study published simultaneously [^head2009]. Baker et al. 2014 subsequently showed that OMA1 is also constitutively active at low levels (mediating basal S1 cleavage of OPA1 splice variants 1 and 7), with stress dramatically amplifying this activity [^baker2014].

**The OMA1/YME1L balance is the molecular rheostat for mitochondrial shape** [^anand2014]:
- High YME1L / low OMA1 activity → tubular, fused network
- High OMA1 activity / depleted YME1L → fragmented network
- Both ablated → constitutively fused (cannot respond to stress)

#gap/needs-replication — The precise stoichiometric relationship between L-OPA1:S-OPA1 ratios and fusion rate has not been quantitatively established in primary human cells; most data from immortalized cell lines or mouse tissue.

## OMA1-DELE1-ATF4: the integrated stress response arm

Beyond OPA1 cleavage, OMA1 cleaves **DELE1**, a mitochondrial protein. Stress-induced OMA1 activation releases a truncated DELE1 fragment into the cytoplasm, which activates **HRI** (EIF2AK1), an eIF2α kinase, triggering the [[integrated-stress-response]] and downstream [[atf4]]-mediated transcriptional reprogramming [^ahola2022].

This positions OMA1 as a **dual-output stress transducer**:
1. **Morphological output** → OPA1 cleavage → fragmentation → isolation of damaged regions → facilitates [[mitophagy]]
2. **Transcriptional output** → DELE1 cleavage → ISR → adaptive gene expression program

## Role in aging

### OMA1 as a balance-point in aged mitochondria

Aged mitochondria accumulate chronic, low-level IMM depolarization — a consequence of electron transport chain (ETC) complex assembly deficits, accumulated mtDNA mutations ([[mtdna-heteroplasmy]]), and oxidative damage. This tonic stress chronically activates OMA1, causing constitutive L-OPA1 cleavage and a shift toward mitochondrial fragmentation [^macvicar2016].

**Consequences of age-associated OMA1 hyperactivation:**
- Constitutive fragmentation → loss of mitochondrial content mixing → accelerated accumulation of ETC defects in individual mitochondria
- Impaired fusion-mediated quality control → reduced ability to dilute damaged components
- Fragmented morphology → altered [[mitophagy]] flux: small, round fragments are more easily engulfed but the threshold for Pink1/Parkin-mediated mitophagy induction is simultaneously disrupted when ΔΨm chronically sags

**OMA1 is therefore both a responder to and an amplifier of age-related mitochondrial dysfunction.** A feedforward cycle is plausible: damaged ETC → low ΔΨm → OMA1 activation → fragmentation → reduced fusion-mediated repair → more ETC damage. #gap/no-mechanism — the quantitative contribution of this loop to the pace of age-associated mitochondrial decline has not been established in vivo.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes |
| Chronic OMA1 activation in aged tissue shown in humans? | no — only mouse aging data available |
| Replicated in humans? | no #gap/needs-human-replication |

### Cardiac protection by OMA1 ablation

The strongest disease-relevant genetic evidence comes from mouse heart failure models. Acin-Perez et al. 2018 used three independent mouse heart failure models of diverse etiologies — including tachycardiomyopathy (isoproterenol), a heart failure with preserved ejection fraction model (angiotensin II/pressure overload), and a metabolic cardiomyopathy model (high-fat diet) — and showed that **OMA1 genetic ablation protected against cardiomyocyte death in all three models** [^acinperez2018]. The protection mechanism involved reduced mitochondrial reactive oxygen species (ROS) production and preservation of mitochondrial cristae ultrastructure — both of which degrade with OMA1-driven fragmentation.

Note: The seeder originally attributed these cardiac findings to "Korwitz 2016 (JCB 10.1083/jcb.201510104)" — that DOI resolves to an unrelated mammary stem-cell paper (BUG-2). The correct cardiac protection paper is Acin-Perez 2018. The real Korwitz 2016 paper (DOI: 10.1083/jcb.201507022) is about OMA1 and neurodegeneration, not cardiac failure.

#gap/needs-human-replication — All cardiac protection evidence is in mouse; no human genetic or pharmacological OMA1-targeting data exist.

| Dimension | Status | Notes |
|---|---|---|
| Cardiac OMA1 protective data in humans? | no | Mouse only (3 models) |
| OMA1 inhibitor in clinical use? | no | No approved agent |
| Translational path? | speculative | Small-molecule OMA1 inhibitor development ongoing (preclinical) |

### The OMA1 loss paradox: context-dependence

OMA1 ablation is not unconditionally protective. In mitochondrial cardiomyopathy driven by Cox10 deficiency, OMA1 ablation worsened disease via **ferroptosis** — because loss of OMA1-mediated ISR signaling (the DELE1→ATF4 axis) abolished adaptive cytoprotection [^ahola2022]. This context-dependence complicates OMA1 inhibition as a therapeutic strategy:

- In **tachycardiomyopathy, HFpEF, and metabolic cardiomyopathy (diverse etiologies)**: OMA1 ablation is protective [^acinperez2018]
- In **primary mitochondrial disease (Complex IV deficiency)**: OMA1 ablation is harmful
- In **aging with chronic low-level depolarization**: unknown — inhibiting OMA1 might reduce fragmentation but could also impair ISR-mediated stress adaptation

#gap/contradictory-evidence — OMA1 ablation has opposite outcomes depending on the nature of the mitochondrial insult (acute energy failure vs. chronic OXPHOS deficiency). A therapeutic window for OMA1 inhibition in age-related cardiac failure requires further definition.

## Pharmacology and druggability

OMA1 is a zinc metalloprotease and therefore **predicted druggable by small-molecule active-site inhibitors** (druggability-tier: 3 per CLAUDE.md criteria — predicted druggable, no clinical-stage drug yet). No approved or clinical-stage OMA1 inhibitor exists. Drug screen development is nascent; the structural and regulatory complexity of OMA1 (autocatalytic activation, IMM topology, cardiolipin dependence) presents challenges [^alavi2022].

**Therapeutic angle:** A selective OMA1 inhibitor active in cardiac tissue under ischemia/pressure overload might reduce acute cardiomyocyte death. This is a preclinical hypothesis, not validated in humans.

#gap/needs-human-replication — No human genetics (GWAS, Mendelian randomization) linking OMA1 variants to cardiac outcomes have been published. #gap/long-term-unknown — The safety of chronic OMA1 suppression (given its dual role in morphology and ISR) is not established.

## Pathway membership and cross-references

- [[mitochondrial-dynamics]] — OMA1 drives the stress-induced fragmentation branch of this pathway
- [[integrated-stress-response]] — OMA1 → DELE1 cleavage → HRI → eIF2α phosphorylation → [[atf4]]
- [[mitophagy]] — OMA1-driven fragmentation facilitates organelle isolation for [[pink1-parkin-pathway]] engulfment
- [[mitochondrial-dysfunction]] — hallmark node; OMA1 hyperactivation is both a downstream consequence and an upstream amplifier

## Key interactors

- [[opa1]] — primary substrate; OMA1 cleaves L-OPA1 at the **S1 site** to generate S-OPA1 [^ehses2009][^head2009][^baker2014]
- [[yme1l]] — counterbalancing i-AAA protease; YME1L cleaves L-OPA1 constitutively at **S2** under nutrient-replete conditions; OMA1 and YME1L together control L-OPA1:S-OPA1 ratio [^baker2014]
- [[drp1]] — GTPase fission effector; OMA1-driven fragmentation shifts the balance toward DRP1-mediated fission. OMA1 and DRP1 act on the same fragmentation outcome but via distinct mechanisms (inner-membrane fusion loss vs. outer-membrane fission)
- [[dele1]] — ISR relay substrate; OMA1 cleaves DELE1 to generate the cytoplasmic HRI-activating fragment
- [[afg3l2]] — m-AAA protease; stabilizes L-OPA1 isoforms under constitutive conditions (loss of AFG3L1/AFG3L2 triggers OMA1-mediated L-OPA1 loss) [^ehses2009]; role in OMA1 maturation is not established in primary sources reviewed

## Limitations and gaps

- **No human aging expression data** — whether OMA1 transcript or protein levels change with age in human tissues has not been reported in large-scale resources (GTEx aging analysis, Human Protein Atlas aging cohort). `gtex-aging-correlation:` field left null. #gap/needs-human-replication
- **No Mendelian randomization data** — OMA1 has not been tested as a causal node in MR analyses for cardiac or aging outcomes. `mr-causal-evidence: not-tested`.
- **Context-dependent biology** — the OMA1 inhibition / ablation data yield opposite outcomes in different cardiac pathology models; a unified therapeutic frame does not yet exist.
- **No clinical-stage drug** — druggability-tier 3 (predicted by domain homology to druggable metalloproteases); no small-molecule OMA1 inhibitor has entered clinical trials.
- **GenAge status** — OMA1 appears in GenAge-models only as a yeast ortholog (YKR087C homolog; 70% lifespan decrease on deletion); no human GenAge entry. `genage-id: null`.
- [[yme1l]] — co-seeded implicit stub; this page does not yet exist. #stub
- [[heart-failure]] — implicit stub; referenced from Acin-Perez 2018 context. #stub
- **Korwitz 2016 DOI-title mismatch (BUG-2 resolved)** — user-supplied DOI 10.1083/jcb.201510104 resolved to an unrelated mammary stem-cell/Numb paper. The actual Korwitz 2016 paper is DOI 10.1083/jcb.201507022, "Loss of OMA1 delays neurodegeneration by preventing stress-induced OPA1 processing in mitochondria" (PMID 26783299) — this is a neurodegeneration paper, not a cardiac paper. The cardiac protection claim is from Acin-Perez et al. 2018 (doi:10.1126/scitranslmed.aan4935), correctly cited here. If Korwitz 2016 neurodegeneration findings are relevant, that paper should be cited separately.
- **HGNC ID corrected** — seeder used HGNC 23858 (incorrect); verified against HGNC REST API: correct ID is HGNC:29661.

## Footnotes

[^kaser2003]: doi:10.1074/jbc.M305584200 · Käser M et al. · *J Biol Chem* 2003 · in-vitro + in-vivo (yeast) · original characterization of yeast Oma1 (YKR087c) as a novel membrane metallopeptidase in the IMM with activities overlapping with the m-AAA protease; shows Oma1 forms a high-molecular-mass complex (~300 kDa) in the IM; establishes M48 metallopeptidase family membership; yeast-only study — claims about mammalian OMA1 N-terminal processing cannot be derived from this paper

[^ehses2009]: doi:10.1083/jcb.200906084 · Ehses S et al. · *J Cell Biol* 2009 · in-vitro (mammalian cells) + in-vivo (mouse) · n>3 independent cell lines · first demonstration that OMA1 mediates stress-induced OPA1 processing at the **S1 site** in mammalian cells (paper conclusion: "OMA1 as the peptidase responsible for the inducible cleavage of OPA1 at processing site S1"); showed that OMA1 KO abolishes depolarization-induced L-OPA1 → S-OPA1 conversion; also showed OMA1 is epistatic to m-AAA protease

[^head2009]: doi:10.1083/jcb.200906083 · Head B et al. · *J Cell Biol* 2009 · in-vitro (mammalian cells) · n=3–5 independent experiments · concurrent independent confirmation that OMA1 cleaves OPA1 at the **S1 site** (exon 5); OMA1 siRNA inhibited inducible OPA1 cleavage by 56% (mean of 5 experiments, SD=12%); showed OMA1 slows apoptotic OPA1 cleavage and cytochrome c release; published same issue as Ehses 2009

[^anand2014]: doi:10.1083/jcb.201308006 · Anand R et al. · *J Cell Biol* 2014 · in-vitro + in-vivo (mouse) · defined the competitive OMA1/YME1L axis as the quantitative controller of L-OPA1:S-OPA1 balance and mitochondrial morphology set-point; showed that ablating both proteases yields constitutively fused mitochondria · **closed-access — unverifiable against full PDF** #gap/no-fulltext-access

[^baker2014]: doi:10.1002/embj.201386474 · Baker MJ, Lampe PA et al. · *EMBO J* 2014 · in-vitro (mammalian cells, MEFs, HEK293) · characterizes stress-induced OMA1 autocatalytic activation and complete self-degradation from both N- and C-termini; identifies N-terminal positively-charged domain (residues 144–163) as essential stress-sensor outside the M48 catalytic domain; shows mature OMA1 is ~43 kDa (N-terminal cleavage at Ala-140); defines CCCP, valinomycin, heat stress (42°C), H2O2, and oligomycin+antimycin as independent activating stimuli; shows OMA1 cleaves OPA1 at S1 constitutively and inducibly; demonstrates OMA1 active site faces the IMS

[^quiros2014]: doi:10.1002/embj.201386474 · Baker MJ, Lampe PA et al. · *EMBO J* 2014 · [same paper as ^baker2014; legacy footnote key retained for link integrity — see ^baker2014 for full citation]

[^macvicar2016]: doi:10.1242/jcs.159186 · MacVicar T & Langer T · *J Cell Sci* 2016 · review · synthesizes OPA1 processing biology; frames excessive OMA1 activity as a driver of pathological fragmentation and cell death; links to aging and neurodegenerative contexts · **closed-access — unverifiable against full PDF** #gap/no-fulltext-access

[^acinperez2018]: doi:10.1126/scitranslmed.aan4935 · Acin-Perez R et al. · *Sci Transl Med* 2018 · in-vivo (mouse, OMA1-KO; three independent HF models of diverse etiologies: tachycardiomyopathy [isoproterenol], HFpEF [angiotensin II/pressure overload], metabolic cardiomyopathy [high-fat diet]) · OMA1 ablation protected against cardiomyocyte death in all three models; mechanism: reduced mitochondrial ROS production and preservation of cristae ultrastructure · abstract confirmed: "Loss of OMA1 protects cardiomyocytes from death in three murine models of heart failure with diverse etiologies"

[^ahola2022]: doi:10.1016/j.cmet.2022.08.017 · Ahola S et al. · *Cell Metab* 2022 · in-vivo (mouse, cardiac-specific Cox10-KO; OXPHOS Complex IV deficiency cardiomyopathy model) · OMA1 or DELE1 ablation worsened disease via ferroptosis: loss of OMA1→DELE1→ATF4 ISR axis impaired cardiac glutathione metabolism, reduced GPX4 accumulation, increased lipid peroxidation, culminating in ferroptosis; establishes context-dependence of OMA1 inhibition strategy · **PDF download failed repeatedly — verified via Europe PMC abstract** #gap/no-fulltext-access

[^alavi2022]: doi:10.1016/j.phrs.2022.106063 · Alavi MV · *Pharmacol Res* 2022 · review · discusses OMA1 structure-function challenges for drug screen design; no approved small-molecule inhibitor; structural and regulatory complexity is the key bottleneck · **PDF download failed — OA status green but no candidate URLs found** #gap/no-fulltext-access
