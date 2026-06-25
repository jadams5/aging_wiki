---
type: protein
aliases: [INHBA, inhibin beta A, activin A, activin beta-A chain, erythroid differentiation protein]
uniprot: P08476
ncbi-gene: 3624
hgnc: 6066
ensembl: ENSG00000122641
genage-id: null
mouse-ortholog: Inhba
is-noncoding-rna: false
complex-subunits: []
key-domains: [signal-peptide, propeptide-LAP, TGF-beta-family-cystine-knot, mature-domain]
key-ptms: [N-linked-glycosylation, disulfide-bonds, furin-site-cleavage]
pathways: ["[[tgf-beta]]", "[[bmp-signaling]]", "[[smad2-smad3]]"]
hallmarks: ["[[cellular-senescence]]", "[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
sens-categories: []
known-interactors: ["[[myostatin]]", "[[gdf11]]", "[[smad2-smad3]]"]
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: ["[[cellular-senescence]]"]
causes: ["[[sarcopenia]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-06-25
verified: true
verified-date: 2026-06-25
verified-by: claude
verified-scope: "Canonical identity fields verified against live UniProt REST API (P08476 confirmed), HGNC REST API (HGNC:6066 confirmed symbol INHBA, location 7p14.1), NCBI Gene (3624 confirmed), Ensembl (ENSG00000122641 confirmed), mouse ortholog NCBI Gene 16323 (Inhba, chromosome 13 confirmed). Schafer 2020 (10.1172/jci.insight.133668) verified against full PDF: 7-factor panel composition confirmed (GDF15, FAS, OPN, TNFR1, ACTIVIN A, CCL3, IL-15); community cohort n=267 confirmed; total study n=343 confirmed; activin A age-correlation r=0.67 confirmed. Hoeper 2023 STELLAR (10.1056/NEJMoa2213558) verified against PubMed abstract: n=163 sotatercept + 160 placebo (323 total) confirmed; 6MWD +34.4m vs +1.0m, difference 40.8m p<0.001 confirmed; 8 of 9 secondary endpoints confirmed. Xu 2015 (10.7554/eLife.12997) verified against PMC full XML: fabricated n=80 corrected — actual per-group N=8-15 across multiple distinct experiments; mechanism confirmed. Ding 2017 (10.1002/jcsm.12145) verified against PubMed abstract: p38β MAPK → C/EBPβ → atrogin-1/UBR2 mechanism confirmed; 1-hour onset confirmed; MuRF1 upregulation noted as p38 MAPK-independent (wiki body corrected to remove MuRF1 from p38-dependent claim). Prokopidis 2026 (10.1093/gerona/glag140) verified against PubMed abstract: n=1,345 confirmed; no significant activin A difference confirmed; direction corrected — sarcopenic adults show reduced IGF-1 (SMD -0.40) and elevated GDF-15 (SMD +0.26). Chen 2014 (10.1096/fj.13-245894) closed-access — not verified; #gap/no-fulltext-access retained. Menthena 2011, Zhou 2019, Wang 2024 MR, Morvan 2017, Di Rocco 2023 cross-checked against PubMed abstracts only."
---


# INHBA / Activin A

Activin A is a homodimeric TGF-β superfamily ligand — two inhibin βA chains (encoded by INHBA) joined by disulfide bonds — that acts as a potent suppressor of adipogenesis, a driver of skeletal muscle catabolism, and an emerging central node of the **senescence-associated secretory phenotype (SASP)**. In aging, senescent fat progenitors and other cell types accumulate and secrete elevated activin A, which acts in a paracrine fashion to inhibit local adipogenesis and impair metabolic function [^xu2015]. Circulating activin A rises with age and disease burden, and a 7-factor SASP panel including activin A predicts adverse surgical and mortality outcomes better than chronological age alone [^schafer2020]. Clinically, the activin/ActRII signaling axis is targeted by **sotatercept** (FDA-approved March 2024 for pulmonary arterial hypertension) and **garetosmab** (anti-activin A; Phase 3 in fibrodysplasia ossificans progressiva), establishing druggability tier 1 for aging-context use.

---

## Identity

- **UniProt:** P08476 (INHBA_HUMAN), Swiss-Prot manually reviewed entry
- **Gene symbol:** INHBA (inhibin subunit beta A)
- **NCBI Gene:** 3624
- **HGNC:** 6066 (symbol INHBA); chromosomal location 7p14.1
- **Ensembl:** ENSG00000122641 (MANE-Select transcript ENST00000242208.5)
- **Mouse ortholog:** Inhba (NCBI Gene 16323; MGI:96570); one-to-one ortholog on mouse chromosome 13
- **GenAge:** not listed — activin A is not a curated GenAge human aging gene; aging relevance is SASP and disease-context driven
- **Precursor length:** 426 amino acids (canonical)
- **Mature chain:** residues 311–426 (116 aa); N-terminal signal peptide (aa 1–20) and propeptide/LAP (aa 21–310) removed by furin-site cleavage

---

## Dimer biology and ligand naming

INHBA encodes a single gene product that participates in three distinct dimeric ligands with opposite or distinct biological actions:

| Dimer | Composition | Historical name | Primary effect |
|---|---|---|---|
| βA:βA | INHBA + INHBA | **Activin A** | Activates ActRII/ALK4 → SMAD2/3; pro-atrophic in muscle; inhibits adipogenesis; FSH-stimulating |
| βA:βB | INHBA + INHBB | **Activin AB** | Broadly similar to activin A; less studied in muscle/fat aging contexts |
| αβA | INHA + INHBA | **Inhibin A** | Binds betaglycan (TGFBR3) + ActRII but **does NOT activate SMAD2/3**; functionally antagonizes activin A for FSH regulation |

**Critical distinction:** Inhibin A (formed with the alpha subunit INHA) and activin A (the INHBA homodimer) have opposite effects on pituitary FSH secretion and divergent actions in peripheral tissues. The gene INHBA encodes the shared βA subunit, but the activin A page concerns the **βA homodimer only**. Follistatin (FST) and FSTL3 are the primary extracellular antagonists of activin A (see § Antagonists below).

---

## Protein structure and processing

Activin A is a member of the TGF-β superfamily, sharing the canonical cystine-knot architecture with [[myostatin]] (GDF-8), [[gdf11]] (BMP-11), TGF-β1/2/3, and BMPs. Post-translational processing:

1. **Signal peptide cleavage** (aa 1–20) — directs into the secretory pathway
2. **Furin-site cleavage** — separates the N-terminal latency-associated propeptide (LAP/prodomain) from the C-terminal mature domain
3. **Disulfide-linked homodimerization** — the two mature βA chains (residues 311–426) form the active dimer via five conserved disulfide bonds; the cystine-knot motif is essential for receptor binding
4. **N-linked glycosylation** — stabilizes secreted form

Unlike myostatin, activin A's prodomain does not form a strongly latent complex; activin A is typically secreted in a more readily available active form than myostatin.

---

## Receptor system and signaling

Activin A signals through the canonical **TGF-β/activin arm** of the [[smad2-smad3]] pathway:

1. Activin A dimer binds type-II receptors **ACVR2A** (ActRIIA) or **ACVR2B** (ActRIIB) — ACVR2B has higher affinity in skeletal muscle
2. Ligand-bound type-II receptor recruits and transphosphorylates type-I receptor **ACVR1B** (ALK4; predominant) or ALK5/ALK7 in some contexts
3. Active type-I receptor phosphorylates **SMAD2** and **SMAD3** at the C-terminal SXS motif
4. pSMAD2/3 associates with SMAD4, translocates to nucleus, and activates target gene programs:
   - In **muscle:** atrophy genes (atrogin-1/FBXO32, UBR2) via p38β MAPK; autophagy markers (LC3-II); MuRF1/TRIM63 upregulated by activin A via a p38 MAPK-independent mechanism [^ding2017]; suppresses mTORC1-driven protein synthesis
   - In **adipocyte progenitors:** represses adipogenic transcription factors (PPARγ, C/EBPα), blocking differentiation
   - In **inflammatory contexts:** amplifies cytokine production via crosstalk with NF-κB
5. **SMAD7** is transcriptionally induced as negative feedback, attenuating the signal

This receptor-effector system is **shared with [[myostatin]] and [[gdf11]]**, creating competitive signaling. The receptor overlap is why pan-ActRII blockers (bimagrumab, sotatercept) simultaneously block multiple TGF-β superfamily ligands.

### Antagonists (extracellular neutralization)

| Antagonist | Gene | Mechanism | Notes |
|---|---|---|---|
| Follistatin | FST | High-affinity binding; blocks receptor engagement | Three isoforms (FST-288/303/315); FST-315 is main circulating form; also antagonizes myostatin and GDF11 |
| Follistatin-like 3 | FSTL3 | Related to FST; partially redundant | Serum FSTL3 rises with fat mass/inflammation |
| Betaglycan | TGFBR3 | Presents inhibin A to ActRII → competitive inhibition of activin A | Tissue-specific; dominant in gonads/pituitary |

[[aav-follistatin]] gene therapy overexpresses FST as a broad-spectrum TGF-β/activin/myostatin antagonist — its muscle-hypertrophic effect exceeds myostatin knockout alone, partly attributable to simultaneous activin A neutralization.

---

## Role in aging

### 1. Activin A as a SASP factor — senescent fat progenitors

The most directly aging-relevant mechanistic finding: senescent fat progenitor cells accumulate in [[tissues/white-adipose-tissue|white adipose tissue]] with age and secrete activin A as a key SASP component. Activin A then acts in a paracrine fashion to **inhibit [[processes/adipogenesis|adipogenesis]]** in neighboring non-senescent progenitors [^xu2015].

Key findings from Xu et al. 2015 (eLife; multiple cohorts — N=6 human fat progenitor donors, N=8/group 18-month INK-ATTAC mice, N=8-15/group 22-month ruxolitinib experiments; INK-ATTAC transgenic model):
- Conditioned medium from senescent human fat progenitors inhibited adipogenesis; anti-activin A antibody **partially reversed** this inhibition
- Ruxolitinib (JAK1/2 inhibitor) reduced circulating activin A in 22-month-old mice, **preserved fat mass**, reduced lipotoxicity, and improved insulin sensitivity
- Fat mass loss in aged animals is thus attributable partly to SASP-activin A acting as a paracrine anti-adipogenic signal

**Mechanistic framing:** This positions activin A as a link between the [[cellular-senescence]] hallmark and metabolic aging (loss of functional fat depot → ectopic lipid deposition → insulin resistance). #gap/needs-human-replication — The paracrine adipogenesis-inhibition mechanism is demonstrated in primary human cells in vitro but has not been confirmed in human aging in vivo.

### 2. SASP panel and aging/clinical risk

Activin A is one of seven SASP proteins in a validated panel that predicted postsurgical adverse outcomes, hospitalization, and mortality in human cohorts, outperforming chronological age as a predictor [^schafer2020]. Activin A concentrations rose with chronological age (cross-sectional, ages 20–90) and were elevated in frail older adults. This provides population-level evidence that circulating activin A tracks biological aging burden in humans. #gap/needs-replication — the panel was validated in surgical cohorts; replication in general community cohorts is needed.

### 3. Muscle catabolism and cachexia

Activin A is one of the most potent negative regulators of skeletal muscle mass in the TGF-β superfamily [^chen2014]. Elevating circulating activin A in mice by AAV-mediated overexpression produced dose-dependent weight loss and muscle wasting resembling cachexia; crucially, the muscle wasting was **fully reversible** upon discontinuation of the activin A signal [^chen2014].

At the mechanistic level, activin A induces muscle atrophy via p38β MAPK → C/EBPβ → upregulation of atrogin-1 (FBXO32/MAFbx) and UBR2 ubiquitin ligases, with a rapid onset (detectable within 1 hour in C2C12 myotubes). MuRF1/TRIM63 is also upregulated by activin A, but via a p38 MAPK-independent pathway; MuRF1 did not appear responsible for activin A-induced myosin heavy chain loss and myotube atrophy in this study. Genetic deletion of p38β in muscle conferred resistance to activin A-induced atrophy [^ding2017].

**Convergence with myostatin:** Both activin A and [[myostatin]] use ACVR2B/ALK4/SMAD2/3 to drive muscle atrophy gene programs. In aged muscle, follistatin (FST) falls while myostatin and activin A rise, shifting net signaling toward catabolism. This convergence is why ACVR2B-blocking antibodies (bimagrumab) that block both ligands show stronger muscle-mass responses than myostatin-selective approaches.

**Evidence in COPD:** Human patients with COPD-associated skeletal muscle wasting showed significantly elevated serum activin A versus controls, with activin A levels inversely correlated with fat-free mass index [^zhou2019]. This provides cross-disease human evidence that activin A elevation accompanies muscle wasting in a condition that shares molecular features with aging-related cachexia. #gap/needs-replication (single study, n=138; COPD cohort specifically)

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | ACVR2B/ALK4/SMAD2/3 axis identical; activin A structure highly conserved |
| Phenotype conserved in humans? | partial | AAV-overexpression cachexia is mouse model; human equivalent is disease states (cancer, COPD cachexia) not clean physiological aging |
| Replicated in humans? | in-progress | garetosmab FOP trials; bimagrumab obesity+metabolic trials; no aging-cachexia primary trial |

### 4. Fibrosis and tissue remodeling

Activin A promotes fibroblast activation and collagen deposition via SMAD2/3 — a mechanism shared with TGF-β1 but potentially acting in contexts (adipose tissue, liver) where canonical TGF-β1 signaling is less dominant. Elevated activin A in aged adipose and muscle contributes to age-related tissue fibrosis, which itself impairs stem cell niche function and tissue regeneration. #gap/no-mechanism — the relative contribution of activin A versus TGF-β1/3 to age-specific fibrosis patterns is not established.

### 5. Liver regeneration aging model

In aged rats, activin A expression increases and upregulates p15^INK4b, a CDK inhibitor, in hepatocytes. This inhibited proliferation of adult hepatocytes while young fetal liver progenitors remained unresponsive to activin A — suggesting that activin A may set a regeneration ceiling that rises with age [^menthena2011]. This is a model-organism result without clear human translation. #gap/needs-human-replication

---

## Activin A rises with age — population evidence

The Schafer 2020 JCI Insight cohort study (community-based n=267, ages 20–90; surgical cohorts n=97 aortic stenosis + n=36 ovarian cancer; total n=343 across all groups) found rising circulating activin A with age cross-sectionally (Spearman r=0.67, q<0.001) [^schafer2020]. A 2026 systematic review and meta-analysis (26 studies, n=1,345 sarcopenic adults) found **no significant difference** in circulating activin A between sarcopenic and non-sarcopenic older adults (standardized mean difference not significant), suggesting that while activin A tracks global aging burden, it may not selectively discriminate sarcopenia from non-sarcopenic aging [^prokopidis2026]. The biomarkers that did discriminate were **reduced IGF-1** (sarcopenic vs non-sarcopenic: SMD −0.40, 95% CI −0.54 to −0.27; p<0.01) and **elevated GDF-15** (SMD +0.26, 95% CI +0.03 to +0.50; p=0.03).

This apparent discrepancy likely reflects: (1) sarcopenic individuals are already aged (both groups have elevated activin A vs. young baseline), and (2) activin A rises broadly with aging/senescence burden rather than specifically with muscle-loss phenotype.

---

## Pharmacology and therapeutic targeting

### Aging-context druggability-tier rationale

**Tier 1** is assigned because:

1. **Sotatercept** (Merck/Acceleron; ACE-011 — a fusion protein of ActRIIA extracellular domain with IgG1 Fc) was **FDA-approved March 2024** (brand: Winrevair) for pulmonary arterial hypertension (PAH). In the STELLAR Phase 3 RCT (n=323; 1:1 sotatercept vs. placebo), sotatercept produced a 34.4 m improvement in 6-minute walk distance vs. 1.0 m for placebo (difference 40.8 m; p<0.001); 8 of 9 secondary endpoints favored sotatercept [^hoeper2023stellar]. Mechanism: sotatercept acts as a decoy receptor for activin A and related ligands (including activin B, GDF11) via ActRIIA, restoring the balance between pro-proliferative BMP signaling and anti-proliferative activin/TGF-β signaling in the pulmonary vasculature.

2. **Garetosmab** (REGN2477; Regeneron) — a monoclonal antibody that specifically targets activin A (not the receptor). Phase 3 trial in fibrodysplasia ossificans progressiva (FOP) — OPTIMA (NCT05394116) — is active. Phase 2 (Di Rocco et al. 2023, Nature Medicine; n=44) did not meet its primary endpoint for lesion activity (P=0.0741) but prevented new heterotopic ossification (0% vs 40.9% in crossover group; P=0.0027) [^dirocco2023]. Garetosmab is also in Phase 2 (COURAGE trial, NCT06299098) in obesity in combination with trevogrumab (anti-myostatin) and semaglutide.

**The aging-indication gap:** Neither sotatercept nor garetosmab has a licensed or primary-development aging/sarcopenia indication as of 2026. Sotatercept's PAH indication is cardiovascular, not aging per se, but establishes proof of pathway druggability at the clinical level. The tier-1 designation reflects this depth of clinical pharmacological tractability, consistent with the wiki's aging-context convention (see [[mtor]] tier-1 precedent via rapamycin).

### Bimagrumab — ActRII dual blockade

Bimagrumab (BYM338; Novartis) is an anti-ActRIIA/IIB antibody that simultaneously blocks both type-II activin receptors, neutralizing activin A, activin B, myostatin, and GDF11 signaling to muscle. Single-receptor blockade is insufficient — simultaneous ActRIIA + ActRIIB blockade is required for maximal muscle hypertrophy [^morvan2017]. Bimagrumab demonstrated lean mass gains and fat mass loss in Phase 2 trials in obesity/type 2 diabetes. In sarcopenia specifically, the Phase 2 trial showed lean mass increase without significant functional improvement (see [[myostatin]] for trial-failure pattern). Status: stalled in sarcopenia; the metabolic/obesity pivot is active.

### Downstream implications for follistatin gene therapy

[[aav-follistatin]] sequesters activin A (alongside myostatin and GDF11) extracellularly. The follistatin-overexpression phenotype in mice exceeds myostatin knockout alone, with the excess plausibly attributable to activin A neutralization. This makes activin A a likely **co-target** of AAV-follistatin even though the therapeutic rationale is primarily framed around myostatin.

---

## Mendelian randomization and causal evidence

**`mr-causal-evidence: not-tested`** — No published Mendelian randomization study using germline instruments for INHBA has established causal relationships for activin A in aging-relevant outcomes. A 2024 study (Wang 2024, Frontiers in Endocrinology) found no causal relationship between activin A levels and diabetes by two-sample MR [^wang2024mr]. No MR study has tested activin A causally in sarcopenia, lifespan, or adipose aging phenotypes. The receptor gene ACVR2A has been implicated in a GWAS/colocalization study of dizziness (2026), but this is not directly relevant to the muscle/fat/senescence axis here.

#gap/needs-replication — Germline genetic instruments for circulating activin A are available in principle (cis-pQTLs from UK Biobank) but no aging-endpoint MR study published as of 2026-06-25.

---

## Pathway connections

- **[[tgf-beta]]** — activin A is a TGF-β superfamily member; signals through the same SMAD2/3 arm as TGF-β1/2/3 but via distinct type-II receptors (ACVR2A/B rather than TβRII)
- **[[smad2-smad3]]** — direct downstream effectors; phospho-SMAD2/3 drive atrophy gene programs in muscle and anti-adipogenic programs in fat progenitors
- **[[bmp-signaling]]** — activin A opposes BMP/SMAD1/5/8 signaling; in the pulmonary vasculature, restoring BMP/activin balance (via sotatercept) is the therapeutic mechanism in PAH
- **[[sasp]]** — activin A is a SASP component; elevated in conditioned medium from senescent human fat progenitors (Xu 2015); member of the Schafer 2020 7-factor SASP aging panel

---

## Cross-references

- [[myostatin]] — closest TGF-β superfamily paralog for muscle biology; shared ACVR2B receptor; do not conflate
- [[gdf11]] — related family member; shares ActRII signaling; now considered distinct from activin A aging biology despite early conflation
- [[smad2-smad3]] — canonical intracellular transducers
- [[tgf-beta]] — parent pathway
- [[bmp-signaling]] — sibling pathway; activin A/BMP balance is clinically relevant (sotatercept PAH mechanism)
- [[aav-follistatin]] — gene therapy that neutralizes activin A (alongside myostatin) as co-target
- [[sasp]] — activin A is a core SASP constituent in fat progenitors and possibly other senescent cell types
- [[cellular-senescence]] — senescent cells are the upstream source of paracrine activin A in aged adipose tissue
- [[sarcopenia]] — downstream phenotypic consequence of chronic activin A elevation in muscle
- [[studies/xu-2015-senescent-cells-adipogenesis]] — primary source for fat progenitor/SASP/activin A/adipogenesis link (seeded in parallel; may be stub)

---

## Limitations and open gaps

- #gap/needs-human-replication — Paracrine adipogenesis inhibition via senescent cell-secreted activin A is demonstrated in primary human cells in vitro and mouse in vivo models; not confirmed by human intervention studies.
- #gap/needs-human-replication — Liver regeneration aging model (Menthena 2011) is rat; human hepatocyte aging and activin A have not been systematically studied.
- #gap/dose-response-unclear — Circulating activin A rises broadly with aging but the quantitative trajectory across the human lifespan in healthy individuals is not well-characterized by longitudinal cohort data; cross-sectional studies (Schafer 2020) are available but single time-point.
- #gap/needs-replication — COPD-cachexia human data (Zhou 2019, single study n=138) requires replication; causal directionality (activin A as driver vs. marker of wasting) is not established.
- #gap/no-mechanism — The relative contribution of activin A versus TGF-β1/3 versus myostatin to age-specific fibrosis in adipose and muscle is not formally resolved.
- #gap/contradictory-evidence — The 2026 meta-analysis (Prokopidis 2026) found no significant difference in circulating activin A between sarcopenic and non-sarcopenic elders, conflicting with the mechanistic narrative of activin A as a sarcopenia driver. This may reflect assay heterogeneity, the fact that both groups are aged (and thus both have elevated activin A vs. young), or that muscle catabolism is mediated locally rather than by circulating concentrations.
- `mr-causal-evidence: not-tested` — No published MR study has established causal relationships for activin A levels in aging phenotypes.
- `gtex-aging-correlation: null` — tissue-by-age GTEx correlation not yet populated; #gap/needs-tissue-expression-data

---

## Footnotes

[^xu2015]: [[studies/xu-2015-senescent-cells-adipogenesis]] · doi:10.7554/eLife.12997 · PMID 26687007 · PMC4758946 · Xu M, Palmer AK, Ding H, Weivoda MM, et al. (Kirkland JL lab) · *eLife* 2015 · multiple cohorts: N=6 human fat progenitor donors; N=8/group 18-month INK-ATTAC clearance experiment; N=8–15/group 22-month ruxolitinib in vivo experiments · in-vivo + in-vitro · model: aged C57BL/6 mice + INK-ATTAC transgenic mice + human primary fat progenitors · senescent fat progenitors secrete activin A; anti-activin A antibody partially restored adipogenesis in conditioned-medium experiments; ruxolitinib (JAK1/2 inhibitor) reduced circulating activin A, preserved fat mass, reduced lipotoxicity, improved insulin sensitivity in 22-month-old mice; gold OA (PMC open access)

[^schafer2020]: doi:10.1172/jci.insight.133668 · PMID 32554926 · Schafer MJ, Zhang X, Kumar A, et al. · *JCI Insight* 2020 · cross-sectional (n=267, ages 20–90) + prospective surgical cohort (n=97 aortic stenosis; n=36 ovarian cancer; n=343 total across all groups) · observational · model: human population + surgical cohort · 7-factor SASP panel (GDF15, FAS, OPN, TNFR1, ACTIVIN A, CCL3, IL-15) predicted adverse postsurgical events better than age alone; activin A age-correlation r=0.67, q<0.001; activin A concentrations correlated with frailty index in nonsurgical and ovarian cancer groups; gold OA

[^chen2014]: doi:10.1096/fj.13-245894 · Chen JL, Walton KL, Winbanks CE, Murphy KT, et al. · *FASEB Journal* 2014 (published 2013 online) · in-vivo (mouse, AAV-mediated activin A overexpression) · model: C57BL/6 mice · activin A characterized as most potent negative regulator of muscle mass among TGF-β proteins tested; dose-dependent weight loss −12.4% vs +10% controls; muscle wasting + fibrosis fully reversible; mechanism involves ActRIIB pathway; 200 citations (OpenAlex); closed-access #gap/no-fulltext-access

[^ding2017]: doi:10.1002/jcsm.12145 · PMID 27897407 · PMC5377410 · Ding H, Zhang G, Sin KW, Liu Z, Lin RK, Li M, Li YP · *J Cachexia Sarcopenia Muscle* 2017;8(2):202–212 · in-vitro (C2C12 myotubes) + in-vivo (mouse) · model: mouse (p38β knockout + WT) · activin A activates p38β MAPK → C/EBPβ → upregulation of atrogin-1 (MAFbx/FBXO32) and UBR2 within 1 hour; MuRF1 also upregulated by activin A but via p38 MAPK-independent mechanism and not responsible for myosin heavy chain loss; p38β MAPK inhibition (SB202190) and muscle-specific p38β knockout conferred resistance to activin A-induced atrophy; gold OA (PMC open access)

[^zhou2019]: doi:10.6061/clinics/2019/e981 · PMID 31271588 · Zhou X, et al. · *Clinics (São Paulo)* 2019 · case-control · n=78 COPD + 60 controls · model: human · elevated serum activin A in COPD with skeletal muscle wasting; activin A inversely correlated with fat-free mass index and BMI; TNF-α co-elevated; single study requiring replication #gap/needs-replication

[^hoeper2023stellar]: doi:10.1056/NEJMoa2213558 · PMID 36877098 · Hoeper MM, Badesch DB, Ghofrani HA, et al. · *N Engl J Med* 2023;388(16):1478–1490 · Phase 3 RCT (STELLAR; NCT04576988) · n=323 (163 sotatercept + 160 placebo) · model: patients with pulmonary arterial hypertension (WHO functional class II or III) on stable background therapy · primary endpoint: 6-minute walk distance change at 24 weeks: +34.4 m (95% CI 33.0–35.5) sotatercept vs. +1.0 m (95% CI −0.3 to 3.5) placebo (Hodges-Lehmann difference 40.8 m; 95% CI 27.5–54.1; p<0.001); first 8 of 9 secondary endpoints significantly improved with sotatercept; PAH-SYMPACT Cognitive/Emotional Impacts domain was not significantly improved; FDA-approved March 2024 as Winrevair

[^dirocco2023]: doi:10.1038/s41591-023-02561-8 · Di Rocco M, Baujat G, Boulanger C, et al. · *Nature Medicine* 2023;29(10):2615–2624 · Phase 2 RCT · n=44 (fibrodysplasia ossificans progressiva) · model: human · garetosmab (anti-activin A monoclonal antibody) did not meet primary endpoint (lesion activity, P=0.0741) but prevented new heterotopic ossification in Period 2 crossover (0% vs 40.9%, P=0.0027); notable AEs: epistaxis, madarosis, skin abscesses; 5 deaths in open-label phase

[^morvan2017]: doi:10.1073/pnas.1707811114 · Morvan F, Rondeau JM, Zou C, et al. · *PNAS* 2017 · in-vitro + in-vivo (mouse) · simultaneous ActRIIA + ActRIIB blockade required for maximal muscle hypertrophy; single-receptor blockade produces only partial response; provides mechanistic rationale for bimagrumab's dual-receptor design

[^menthena2011]: doi:10.1053/j.gastro.2011.01.053 · Menthena A, Koehler CI, Sandhu JS, et al. · *Gastroenterology* 2011 · fetal liver cell transplantation in rats of varying ages · in-vivo (rat) · activin A rises in aging rat liver; upregulates p15^INK4b inhibiting adult hepatocyte proliferation; young stem cells unresponsive to activin A; suggests activin A sets regeneration ceiling in aging liver #gap/needs-human-replication

[^wang2024mr]: doi:10.3389/fendo.2024.1414585 · PMID 39280004 · Wang M · *Front Endocrinol* 2024 · two-sample Mendelian randomization · model: human genetics (GWAS instruments) · no causal relationship between diabetes and plasma activin A by IVW, Egger, weighted median, and weighted mode methods; limited to diabetes endpoint — no aging/sarcopenia/lifespan outcomes tested

[^prokopidis2026]: doi:10.1093/gerona/glag140 · PMID 42202210 · Prokopidis K, Deane CS, Baoubbou Z, Beaudart C · *J Gerontol A* 2026 · systematic review and meta-analysis · n=1,345 sarcopenic adults, 48.3% female, mean age 67.9–88.1 years (26 observational studies) · no significant difference in circulating activin A between sarcopenic and non-sarcopenic older adults; sarcopenic adults showed reduced IGF-1 (SMD −0.40, 95% CI −0.54 to −0.27, p<0.01) and elevated GDF-15 (SMD +0.26, 95% CI +0.03 to +0.50, p=0.03); contradicts simple "elevated circulating activin A → sarcopenia" narrative for circulating protein #gap/contradictory-evidence
