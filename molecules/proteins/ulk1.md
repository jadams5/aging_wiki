---
type: protein
aliases: [ULK1, Unc-51 like autophagy activating kinase 1, ATG1, hATG1, KIAA0722]
uniprot: O75385
ncbi-gene: 8408
hgnc: 12558
mouse-ortholog: Ulk1
ensembl: ENSG00000177169
druggability-tier: 2
caused-by: []
causes: []
key-domains: [protein-kinase-domain, GABARAP-interaction-domain, C-terminal-regulatory-domain]
key-ptms: [Ser317-phosphorylation-AMPK, Ser556-phosphorylation-AMPK, Ser758-phosphorylation-mTOR, Lys162-acetylation-KAT5, Lys607-acetylation-KAT5]
pathways: ["[[autophagy]]", "[[mtor]]", "[[ampk]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[deregulated-nutrient-sensing]]", "[[loss-of-proteostasis]]"]
known-interactors: ["[[atg13]]", "[[fip200]]", "[[atg101]]", "[[beclin-1]]", "[[mtor]]", "[[ampk]]", "[[ambra1]]"]
genage-id: null
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Kim 2011 (10.1038/ncb2152), Hosokawa 2009 (10.1091/mbc.e08-12-1248), Ganley 2009 (10.1074/jbc.m900573200), Pyo 2013 (10.1038/ncomms3300), and Zhang 2025 (10.14336/AD.2025.0419) verified against primary PDFs. Hansen 2018 (10.1038/s41580-018-0033-y) unverifiable — DOI lookup failed (green OA URL unreachable); claims citing it left tagged. Canonical-DB identity fields (UniProt O75385 domain ranges, NCBI Gene 8408, HGNC 12558) cross-checked against UniProt REST API 2026-05-04."
---


# ULK1 (Unc-51 like autophagy activating kinase 1)

The apex kinase of macroautophagy initiation — integrates upstream nutrient and energy signals from [[mtor|mTORC1]] and [[ampk|AMPK]] and converts them into autophagosome nucleation. ULK1 is the mammalian ortholog of yeast Atg1, and it sits at the convergence point of the two dominant longevity-relevant signaling axes: mTORC1 inhibition (by rapamycin, caloric restriction, or starvation) releases ULK1 from tonic suppression; AMPK activation (by energy deficit) directly promotes ULK1 activity. Because autophagy declines with age and restoring autophagic flux extends lifespan in multiple model organisms, ULK1 is a central node in the aging biology network.

---

## Identity

| Field | Value |
|---|---|
| UniProt | O75385 (ULK1_HUMAN) |
| NCBI Gene | 8408 |
| HGNC | 12558 |
| Ensembl | ENSG00000177169 |
| Gene symbol | ULK1 |
| Full name | Serine/threonine-protein kinase ULK1 |
| Chromosomal location | 12q24.33 |
| Length | 1050 amino acids |
| Mouse ortholog | Ulk1 (one-to-one; high sequence conservation in kinase domain) |
| GenAge entry | null #gap/needs-canonical-id — ULK1 was not found in GenAge human subset as of 2026-05-04; check GenAge-models for worm/fly orthologs |

**Naming note:** ULK1 and ATG1 are synonyms. Literature before ~2010 often uses ATG1 (yeast-derived) or hATG1 (human ATG1). UniProt lists both as alternative names. The pathway page [[autophagy]] uses ULK1 as the canonical name.

---

## Functional domains

| Domain | Residues (human) | Function |
|---|---|---|
| Protein kinase domain | 16–278 | ATP-binding catalytic core; site of autophosphorylation and substrate phosphorylation |
| GABARAP/GABARAPL2 interaction region | 287–416 | Mediates binding to LC3 family proteins; important for selective autophagy targeting |
| Ser-rich low-complexity region | 295–317 | Contains Ser317 AMPK phosphorylation site; regulatory hotspot |
| Extended disordered region | 393–608 | Contains Ser556 and Ser638/639 phosphorylation sites |
| C-terminal domain | 828–1050 | Mediates interaction with SESN2; complex assembly scaffold |

The disordered linker region between the kinase domain and the C-terminal domain (residues ~300–830) is the primary site of regulatory phosphorylation by both AMPK and mTOR. This region has no known intrinsic fold and is thought to serve as a flexible scaffold for signal integration.

---

## Key post-translational modifications

| PTM | Site (human) | Kinase | Functional consequence |
|---|---|---|---|
| Phosphorylation | Ser317 | AMPK | Activating; promotes ULK1 kinase activity |
| Phosphorylation | Ser556 | AMPK | AMPK-mediated activation site (UniProt O75385); mTOR phosphorylation of human Ser556 is not supported by Kim 2011 or UniProt annotations — remove "also mTOR" claim #gap/unsourced |
| Phosphorylation | Ser758 | mTOR (mTORC1) | Inhibitory; disrupts ULK1-AMPK interaction and suppresses ULK1 activity |
| Acetylation | Lys162 | KAT5/TIP60 | Function not fully characterized #gap/no-mechanism |
| Acetylation | Lys607 | KAT5/TIP60 | Function not fully characterized #gap/no-mechanism |
| Ubiquitination | Lys-63 linkage | Multiple E3 ligases | Degradative and non-degradative roles reported |

**Critical species-numbering caveat:** The widely-cited Kim et al. 2011 (Nature Cell Biology) characterizes AMPK-mediated phosphorylation of mouse Ulk1 at **Ser317 and Ser777** and mTOR-mediated phosphorylation at **Ser757** (mouse numbering) [^kim2011]. Per the verifier round on [[ampk]], the Ser777 mouse site is **NOT conserved in human ULK1** — it does not appear in UniProt O75385. Ser317 (mouse) corresponds to a conserved position in human ULK1 and is annotated as an AMPK substrate in UniProt. The human mTOR site is annotated at **Ser758** (one residue offset from the mouse Ser757). Whenever citing site-specific data from Kim 2011 or related papers, confirm whether mouse or human numbering applies.

#gap/needs-replication — The full complement of functionally significant phosphorylation sites in human ULK1 under physiological aging conditions has not been systematically mapped.

---

## Core mechanism: autophagy initiation

ULK1 forms the **ULK1 initiation complex** with three obligate binding partners:

- **ATG13** — scaffold protein; constitutively bound to ULK1; required for ULK1 stability and localization to the phagophore assembly site
- **FIP200 (RB1CC1)** — focal adhesion kinase family interacting protein 200 kDa; scaffolds the complex and contributes to phagophore membrane targeting
- **ATG101** — stabilizes ATG13 and is required for the complex's autophagic activity #gap/unsourced — ATG101 is NOT described in Hosokawa 2009 or Ganley 2009 (those papers characterize only ULK1–ATG13–FIP200); ATG101 was identified as a fourth subunit in subsequent work (Mercer et al. 2009, FEBS Lett; and others). Citation [^hosokawa2009][^ganley2009] removed from this claim — needs correct primary citation.

Under nutrient-replete conditions, mTORC1 associates with the ULK1 complex via RAPTOR and phosphorylates both ULK1 (at Ser758) and ATG13, keeping the complex in a low-activity state. Upon starvation or rapamycin treatment, mTORC1 dissociates from the ULK1 complex; ULK1 dephosphorylates at Ser758 and undergoes autophosphorylation, activating the complex [^hosokawa2009].

Once active, ULK1 initiates autophagy by phosphorylating downstream targets:

1. **AMBRA1** — ULK1-phosphorylated AMBRA1 activates the PI3K class III complex (VPS34-Beclin-1-ATG14L), driving PI(3)P production at the ER and phagophore nucleation
2. **Beclin-1 (BECN1)** — direct phosphorylation promotes VPS34 complex activity
3. **ATG13 and FIP200** — ULK1 autophosphorylates and transphosphorylates these subunits to amplify and sustain complex activity
4. **SQSTM1/p62** and other cargo receptors — ULK1 phosphorylates selective autophagy receptors to regulate cargo loading

### Dual regulation by mTORC1 and AMPK

The opposing phosphorylation model [^kim2011]:

```
                    nutrient-rich / high ATP
                    
    mTORC1 ──phospho-Ser758──> ULK1 [INHIBITED]
                                 │
                    starvation / low AMP:ATP ratio
                    
    AMPK ──phospho-Ser317/556──> ULK1 [ACTIVATED]
    mTORC1 dissociates
```

AMPK and mTORC1 thus exert opposing effects at the same protein, and the balance of their activities determines autophagic flux. This is the mechanistic basis for the well-established observation that nutrient starvation, AMPK-activating compounds (metformin), and mTORC1 inhibitors (rapamycin) all converge on ULK1 activation.

**Negative feedback:** Once activated, ULK1 phosphorylates AMPK subunits (PRKAA2, PRKAB1) to attenuate AMPK activity, and phosphorylates RAPTOR (a component of mTORC1) to suppress mTORC1 — constituting a negative feedback loop that tempers sustained autophagy induction (UniProt O75385).

---

## Role in aging

### Autophagy decline with age

[[Disabled-macroautophagy]] is a hallmark of aging. Autophagic flux declines across cell types and tissues with age in multiple model organisms and in humans. ULK1 lies at the apex of this decline — any mechanism that chronically elevates mTORC1 activity or suppresses AMPK activity with age will converge on reduced ULK1 activity and impaired autophagy initiation. #gap/no-mechanism — the specific upstream drivers that chronically suppress ULK1 activity in aged mammalian tissues have not been fully characterized; candidate mechanisms include elevated nutrient signaling, reduced AMPK sensitivity, and post-translational modifications that alter the AMPK–mTOR balance.

### mTOR inhibition → ULK1 → autophagy → longevity axis

The dominant mechanistic model linking mTOR inhibition to lifespan extension places ULK1 as the required intermediate:

- [[Rapamycin]] extends lifespan in worms, flies, and mice by inhibiting mTORC1
- mTORC1 inhibition releases ULK1 from Ser758-phosphorylated suppression
- Active ULK1 initiates autophagy
- Atg5 RNAi or equivalent loss-of-function abolishes the lifespan-extending effect of rapamycin in *C. elegans* and *Drosophila*, demonstrating that autophagy induction is required for the benefit [^hansen2018review] #gap/no-fulltext-access

Supporting the sufficiency direction: overexpression of Atg5 (a downstream autophagy gene) in mice activated autophagy and extended median lifespan by 17.2% (both sexes; χ²=17.32, s.e.m., p<0.001) compared to WT littermates, with improved motor function, leanness, increased insulin sensitivity, and reduced age-related pathology [^pyo2013]. #gap/needs-human-replication — no equivalent human gain-of-function data exists; the Pyo 2013 finding is mouse-specific.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ULK1 complex structure, mTOR inhibitory phosphorylation, and AMPK activating phosphorylation are conserved; key sites confirmed in UniProt O75385 |
| Phenotype conserved in humans? | partial | Autophagic flux declines with human age (multiple tissue studies); direct ULK1 activity data in aged human tissue is sparse #gap/unsourced |
| Replicated in humans? | no | No human lifespan or healthspan trial directly targeting ULK1; indirect evidence via rapamycin/everolimus trials #gap/needs-human-replication |

### ULK1 knockout models

Global Ulk1−/− mice show neonatal lethality during the suckling-to-weaning transition (failure to clear damaged mitochondria in neurons via mitophagy), demonstrating the necessity of ULK1-mediated autophagy in vivo #gap/unsourced — neonatal lethality was NOT reported in Hosokawa 2009 (which characterized MEF autophagy defects only); lethality was reported by Kundu et al. 2008 (Blood 112:1493–1502, doi:10.1182/blood-2008-01-132639) — citation [^hosokawa2009] removed; correct citation needed. Tissue-specific conditional KOs have been used to study ULK1's role in specific tissues. The embryonic/neonatal lethality phenotype complicates interpretation of global knockout lifespan studies — ULK1's contribution to mammalian aging must be inferred primarily from pathway-level evidence and downstream autophagy manipulations. #gap/needs-replication — tissue-specific conditional KOs of Ulk1 in aged animals are sparse; aging phenotypes in these models are not well characterized as of 2026.

---

## Pathway membership

- [[autophagy]] — apex initiation kinase; directly activates the phagophore nucleation machinery
- [[mtor]] — direct substrate of mTORC1 (inhibitory phosphorylation at Ser758); ULK1 also feeds back to suppress mTORC1 via RAPTOR phosphorylation
- [[ampk]] — direct substrate of AMPK (activating phosphorylation at Ser317 and Ser556); ULK1 feeds back to attenuate AMPK activity

---

## Key interactors

| Interactor | Interaction type | Functional consequence |
|---|---|---|
| [[atg13]] | constitutive complex subunit | stabilizes ULK1; required for complex localization to phagophore assembly site |
| [[fip200]] | constitutive complex subunit (RB1CC1) | scaffold; phagophore membrane targeting |
| ATG101 | constitutive complex subunit | stabilizes ATG13; required for autophagic activity |
| mTORC1 (via RAPTOR) | nutrient-dependent association | mTOR phosphorylates ULK1-Ser758 to inhibit; dissociates under starvation |
| [[ampk]] | signaling kinase | phosphorylates ULK1-Ser317/556 to activate |
| [[beclin-1]] | downstream substrate | ULK1 phosphorylates Beclin-1 to activate VPS34 PI3K complex |
| [[ambra1]] | downstream substrate | ULK1-phosphorylated AMBRA1 activates PI3K class III complex at the ER |
| SESN2 | C-terminal domain interaction | sestrins link oxidative stress and AMPK to ULK1 complex |

---

## Interventions that modulate ULK1

- [[rapamycin]] — allosteric mTORC1 inhibitor; releases ULK1 from Ser758-mediated inhibition; best-validated pharmacological autophagy inducer for lifespan extension in model organisms
- Metformin / AMPK activators — activate AMPK → phospho-Ser317/556 → ULK1 activation; ULK1 is the proximate effector of metformin's autophagy-inducing effect
- Caloric restriction — reduces mTORC1 tone and activates AMPK; mechanistic route to ULK1 activation
- Exercise — activates AMPK in muscle (AMP:ATP ratio increases); ULK1 Ser317 phosphorylation detectable in skeletal muscle post-exercise [^zhang2025]

**ULK1-directed small molecules:** SBI-0206965 (ULK1/2 inhibitor, tool compound) has been used to confirm ULK1 kinase dependence in cellular autophagy assays. No ULK1 activators have progressed to clinical use as of 2026. #gap/long-term-unknown — pharmacological ULK1 activation strategies are preclinical only.

---

## Limitations and open questions

| Gap | Tag | Notes |
|---|---|---|
| Ser777 not conserved in human ULK1 | — | Kim 2011 explicitly notes "Ser 777 in the mouse Ulk1 is not conserved in human Ulk1" (Discussion); downstream translational studies must use human-specific site mapping |
| ATG101 citation requires correction | #gap/unsourced | ATG101 as a fourth ULK1-complex subunit was NOT described in Hosokawa 2009 or Ganley 2009; needs citation to the correct primary source (Mercer et al. or subsequent work) |
| Ulk1−/− neonatal lethality citation requires correction | #gap/unsourced | Lethality NOT reported in Hosokawa 2009 — that paper showed MEF autophagy defects only; lethality is from Kundu et al. 2008 Blood (doi:10.1182/blood-2008-01-132639) |
| ULK1 activity in aged human tissue | #gap/unsourced | Autophagic flux known to decline with age; direct ULK1 kinase activity measurements in human aged tissue are sparse |
| Tissue-specific Ulk1 KO aging studies | #gap/needs-replication | Global KO lethal; conditional KO aging phenotypes not well characterized |
| Human lifespan / healthspan evidence | #gap/needs-human-replication | All longevity data is model-organism; rapamycin trials address mTOR, not ULK1 specifically |
| ULK1 acetylation functional role | #gap/no-mechanism | KAT5/TIP60 acetylation at Lys162 and Lys607 — functional consequences unknown |
| GenAge entry | #gap/needs-canonical-id | ULK1 not found in GenAge human subset; GenAge-models entry for worm/fly ATG1 orthologs not cross-referenced here |

---

## Footnotes

[^kim2011]: [[studies/kim-2011-ampk-mtor-ulk1]] · doi:10.1038/ncb2152 · n=N/A (biochemical + cell-based) · in-vitro + in-vivo (MEFs and mouse tissue) · model: HEK293, MEFs, mouse skeletal muscle · key finding: AMPK directly phosphorylates Ulk1 at Ser317 and Ser777 (mouse); mTOR phosphorylates Ulk1 at Ser757 (mouse); Ser757 phosphorylation disrupts AMPK-ULK1 interaction; Ser777 site NOT conserved in human ULK1 (see caveat above) · 6,816 citations · locally downloaded (green OA)

[^hosokawa2009]: [[studies/hosokawa-2009-ulk1-atg13-fip200-mtor]] · doi:10.1091/mbc.e08-12-1248 · n=N/A (biochemical + cell-based) · in-vitro · model: HEK293T, MEF, HeLa, NIH3T3 cells · key finding: ULK1–Atg13–FIP200 form a stable ~3 MDa complex (ATG101 not described here — identified in subsequent work); mTORC1 associates with the complex in a nutrient-dependent manner via RAPTOR and phosphorylates ULK1 and Atg13; rapamycin/starvation triggers ULK1 dephosphorylation and complex activation; Ulk1−/− MEFs show autophagy defect on starvation (neonatal lethality NOT reported here — that is from Kundu et al. 2008 Blood) · 1,995 citations · locally downloaded (green OA)

[^ganley2009]: [[studies/ganley-2009-ulk1-atg13-fip200-essential]] · doi:10.1074/jbc.m900573200 · n=N/A (biochemical + cell-based) · in-vitro · model: MEF and 293T cells · key finding: ULK1·ATG13·FIP200 triple complex is essential for starvation-induced autophagy; FIP200 and ATG13 individually and additively stimulate ULK1 kinase activity; mTOR directly phosphorylates ULK1 and ATG13; ULK1 kinase activity required for autophagosome formation · 1,512 citations · locally downloaded (hybrid OA)

[^pyo2013]: [[studies/pyo-2013-atg5-lifespan]] · doi:10.1038/ncomms3300 · n=65 WT + 70 Atg5 Tg (combined sexes, line no. 25; replicated in 3 additional lines) · in-vivo (mouse) · p<0.001 (log-rank) · model: ubiquitous Atg5 overexpressor (C57BL/6 background; pCAGGS promoter) · key finding: Atg5 Tg mice showed 17.2% median lifespan extension (both sexes), elevated autophagy markers, leanness, improved insulin sensitivity, improved motor function, and reduced age-related organ pathology · 689 citations · locally downloaded (green OA)

[^hansen2018review]: [[studies/hansen-2018-autophagy-longevity]] · doi:10.1038/s41580-018-0033-y · review (Nat Rev Mol Cell Biol) · n=N/A · model: review across C. elegans, Drosophila, mouse data · key claim: Atg5/Atg7 RNAi abolishes lifespan extension by mTOR inhibition in worms and flies, establishing autophagy as a required downstream effector of mTOR inhibition-mediated longevity · 715 citations · #gap/no-fulltext-access — DOI lookup failed on two attempts (green OA URL at https://doi.org/10.17863/cam.25782 unreachable by downloader); claims citing this footnote are unverified against the full text

[^zhang2025]: doi:10.14336/AD.2025.0419 · review (Aging and Disease 2025/2026) · n=N/A · model: narrative review of exercise–AMPK–mTOR–autophagy literature focused on sarcopenic obesity · key claim: exercise-induced ATP depletion activates AMPK, which phosphorylates ULK1 (including at Ser317 and Ser555) to initiate autophagy; review does not present original primary exercise + ULK1 Ser317 muscle data — all claims are syntheses of cited rodent studies · note: caution warranted — this is a secondary review, not primary exercise physiology data · locally downloaded (gold OA)
