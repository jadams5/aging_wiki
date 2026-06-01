---
type: process
aliases: [senescence reversal, senescence bypass, TIS escape, therapy-induced senescence escape]
key-proteins: ["[[p53]]", "[[p21]]", "[[p16-rb-pathway]]", "[[rb]]", "[[cdkn2a]]"]
pathways: ["[[p53-pathway]]", "[[wnt-signaling]]", "[[pi3k-akt-pathway]]"]
hallmarks: ["[[cellular-senescence]]", "[[genomic-instability]]"]
selective-variants: []
druggability-tier: null
caused-by: ["[[p53-pathway]]", "[[cellular-senescence]]"]
causes: ["[[genomic-instability]]", "[[phenotypes/cancer]]"]
literature-checked-through: 2026-05-31
verified: true
verified-date: 2026-05-31
verified-by: claude
verified-scope: "Beauséjour 2003, Bajtai 2025, Gu 2025, Baker 2016, Saleh 2020, Saleh 2024, Pacifico 2021, Song 2021 verified against local PDFs. Milanovic 2018 (not_oa), Sikora 2022 (not_oa), Saleh 2022 (download failed), Pacifico 2022 (not_oa) are abstract-verified only — quantitative claims from these sources tagged #gap/no-fulltext-access in footnotes. Druggability-tier corrected to null (no aging-context drug exists for senescence-escape process itself; MDM2/CDK4-6 inhibitors are cancer drugs, not aging-context senomodulators). Supersession check: no meta-analyses or large RCTs found that supersede existing framing."
---

# Senescence Escape

The phenomenon by which cells that have entered senescent growth arrest subsequently exit, bypass, or reverse that arrest — re-entering the cell cycle. Once widely viewed as an irreversible "terminal" program, senescence is now understood to be conditionally reversible in contexts where the molecular arrest machinery is compromised or overcome. Senescence escape is central to two major aging-biology problems: (1) **oncogene-induced senescence (OIS) as a tumor-suppressive failsafe** — how cancers eventually overcome the OIS barrier during malignant progression, and (2) **therapy-induced senescence (TIS) safety** — how residual senescent tumor cells re-emerge after chemotherapy or radiation to drive aggressive relapse. Both raise implications for senolytic-therapy design and for understanding the aging-cancer paradox.

This page covers the process of escape and reversal. For the canonical arrest program itself, see [[cellular-senescence]]. For immune clearance of senescent cells as the complementary axis, see [[processes/senescence-immune-surveillance]].

---

## Senescence is conditionally reversible: the Beauséjour 2003 framework

The foundational demonstration that human cellular senescence can be reversed came from Beauséjour et al. 2003, who used lentiviral gene delivery into replicatively senescent human diploid fibroblasts (WI-38 from fetal lung; BJ from neonatal foreskin) to systematically dissect the requirements for escape [^beausejour2003]:

- **Telomerase reactivation alone was insufficient** to restore proliferation from established senescence — hTERT-expressing lentivirus conferred telomerase activity but cells neither proliferated nor lost SA-β-gal staining.
- **p53 inactivation (via GSE-22 or LgT) was sufficient to completely reverse senescence** in BJ fibroblasts, which express low p16^INK4a^ at senescence: GSE-22 and LgT each stimulated ~70–90% DNA synthesis (%LN) and restored robust proliferation (>20 additional population doublings) in S-BJ cells.
- **WI-38 fibroblasts, which express high p16^INK4a^ at senescence, could not be rescued by p53 inactivation alone.** Despite LgT and LgT-K1 stimulating DNA synthesis in 60–70% of S-WI cells, and CDK4m (a p16-insensitive CDK4 mutant) stimulating DNA synthesis in 35–40%, none of the lentiviruses alone or in combination stimulated net proliferation in S-WI cells. Silencing p16 in S-WI cells (shRNA) converted them to a BJ-like phenotype: subsequent p53 inactivation then completely reversed senescence (>70% DNA synthesis, robust growth).
- Conclusion: senescence functions as a **two-layer barrier** — p53/p21 constitutes the primary checkpoint (reversible in p16-low cells by p53 inactivation alone); p16^INK4a^/Rb constitutes a secondary, **dominant** reinforcement that cannot be overcome by p53 or pRb inactivation once p16 is substantially expressed.

This two-layer architecture has important implications: a cell that has not yet strongly upregulated [[p16-rb-pathway|p16^INK4a^]] remains escape-susceptible (p53 loss alone is sufficient). Once p16 is high, neither p53 inactivation alone nor pRb inactivation alone (nor both combined) restores proliferation — though pRb-pathway inactivation (by LgT or CDK4m) can still stimulate DNA synthesis without net growth in p16-high senescent cells.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — Beauséjour 2003 is a human-cell experiment |
| Phenotype conserved in humans? | yes — human fibroblasts; in-vitro |
| Replicated in independent labs? | partial — p53/p16 two-arm model has extensive corroborating evidence in OIS/cancer literature; quantitative escape kinetics are less systematically characterized |

#gap/needs-replication — the quantitative threshold of p16 expression above which combined p53+pRb inactivation fails to restore net growth was not precisely mapped in the original study (p16-high vs p16-low was determined by western blot comparison of WI-38 vs BJ strains, not by graded expression titration). #gap/dose-response-unclear

---

## The p53/p21 and p16/Rb arms in escape biology

### p53/p21 arm (primary arrest)

Senescence initiation is predominantly mediated through stabilization of [[p53]], which drives transcription of [[p21]] (CDKN1A). p21 inhibits CDK2/cyclin-E, preventing G1→S progression. This arm is triggered by DNA damage (ATM-mediated Ser15 phosphorylation of p53), oncogene activation (ARF/MDM2 axis), and other stressors.

**Escape route:** Loss-of-function mutations in *TP53* (the most common somatic mutation in human cancer) or deletion of *CDKN1A* are sufficient to re-initiate DNA synthesis in recently-arrested senescent cells with low p16 — provided the p16/Rb arm has not yet reinforced [^beausejour2003]. In sporadic cancer progression, acquisition of *TP53* mutations following OIS is a canonical route by which pre-malignant clones escape the senescence barrier. #gap/needs-human-replication — the temporal sequence (p53 mutation before vs after OIS establishment) is inferred from cancer genomics but not yet directly tracked in vivo in human tissue.

### p16^INK4a^/Rb arm (secondary reinforcement)

p16^INK4a^ (encoded by *CDKN2A*) inhibits CDK4/6, preventing Rb phosphorylation and thus independently maintaining the E2F transcriptional arrest even if the p53/p21 arm is lost. p16 is the most age-regulated senescence marker in human tissues and is expressed exponentially with chronological age. For pathway details, see [[p16-rb-pathway]].

**Escape route:** Inactivation of the pRb pathway (by mutation, viral oncoproteins such as HPV E7, or CDK4 amplification) permits S-phase entry even in p16-high senescent cells — though without net proliferation in the Beauséjour 2003 model even when combined with p53 inactivation [^beausejour2003]. Complete bypass of p16-high senescence requires p16 itself to be eliminated (by CDKN2A deletion, promoter methylation, or shRNA knockdown), at which point p53 inactivation then restores full proliferative escape. In human cancers, *CDKN2A* deletion or promoter silencing is among the most common tumor-suppressor events, consistent with bypassing this reinforcement layer.

**Practical implication:** The clinical observation that most cancers carry mutations in both the p53/p21 and the p16/Rb axes (often as co-selected events) is consistent with the two-layer escape requirement. A single-arm hit is usually insufficient for escape from deeply-established senescence.

---

## Therapy-induced senescence (TIS) escape: a mechanism of cancer relapse

### TIS as a double-edged sword

Chemotherapy and ionizing radiation reliably induce senescence in tumor cells — this is part of their intended effect, as it terminates proliferation. The clinical concern is that this arrest is often incomplete and reversible: residual senescent tumor cells can eventually escape, re-enter the cell cycle, and drive aggressive relapse [^saleh2020].

Saleh et al. have outlined TIS as a dormancy mechanism over a series of papers [^saleh2020][^saleh2022][^saleh2024]:
- TIS is now recognized as one of three overlapping tumor dormancy programs (alongside quiescence and diapause), each representing a distinct growth-arrest state with different escape kinetics.
- Escaped TIS cells typically acquire "more ominous malignant phenotypes" than pre-treatment parental cells, consistent with selection pressure during the senescent dormancy period.
- The reversibility of TIS argues for deploying senolytics or senescence-exit blockers as adjuncts to chemotherapy/radiation to prevent escape-mediated relapse.

Bajtai et al. 2025 (Molecular Cancer) studied TIS escape systematically across four breast cancer cell lines (MCF7, T47D, MDA-MB-231, Hs578T), using high-dose doxorubicin (DOX) to induce TIS in each [^bajtai2025]:
- TIS functions as a "transient drug resistance mechanism" — only 0.29–8.2% of cells survived DOX (the surviving REPOP population re-entered the cell cycle weeks later), but all four lines escaped TIS consistently.
- Escaped (REPOP) cells were transcriptomically nearly identical to parental (CTR) cells, while TIS cells formed a distinct cluster in PCA; bulk RNA-seq showed 929 shared DEGs (mostly upregulated, only 33/929 = 3.5% downregulated) in TIS vs CTR across all four lines.
- Of 63 FDA-approved anticancer compounds screened for cytotoxicity, 17 were non-toxic at tested concentrations in all cell states; of the remaining 46 active compounds, TIS cells exhibited resistance to **23 (roughly half)** in at least three of four cell lines — a broad, mechanistically diverse resistance program.
- GSEA revealed upregulation of KRAS signaling gene sets (KRAS Signaling UP and DN) in TIS cells across all four lines; this is described as a "potential KRAS-driven escape mechanism" and the downstream molecular effectors remain unresolved. #gap/needs-replication

### Stemness reprogramming after TIS: the Milanovic 2018 finding

The most cited mechanistic insight into the danger of TIS escape comes from Milanovic et al. 2018 (Nature) using chemotherapy-induced senescence in B-cell lymphoma models [^milanovic2018]:

- Senescent B-cell lymphoma cells exhibited marked upregulation of an **adult tissue stem-cell transcriptional signature**, including activated **Wnt signaling**.
- When cells escaped senescence, the escaped population showed **strongly enhanced, Wnt-dependent clonogenic growth potential** compared to chemotherapy-exposed non-senescent controls.
- In in-vivo transplantation experiments, previously-senescent cells exhibited **much higher tumor-initiation potential** than non-senescent equivalents.
- The finding was extended to acute lymphoblastic and myeloid leukemia models, where TIS reprogrammed bulk tumor cells into **self-renewing, leukemia-initiating stem cells**.
- Clinical correlation: gene signatures consistent with this senescence-driven stemness reprogramming were enriched in relapse tumor samples.

This is the canonical demonstration that TIS does not merely arrest tumor cells temporarily — it can actively reprogram them toward a more dangerous phenotype, constituting a mechanistic rationale for preventing TIS escape rather than relying on it as a therapeutic strategy [^milanovic2018].

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — Wnt/stemness axis corroborated in human sample correlations; full mechanistic demonstration is in mouse/human lymphoma cell lines |
| Phenotype conserved in humans? | partial — relapse-sample enrichment is correlational; prospective clinical validation of the TIS-stemness-relapse sequence is not established |
| Replicated in humans? | in-progress — clinical trials incorporating senolytic adjuncts post-chemotherapy are in planning/early phases #gap/needs-replication |

### Glutamine as a metabolic vulnerability for TIS escape

Pacifico et al. 2021 (Aging, Albany NY) identified **glutamine as a critical metabolic requirement** for escape from TIS across multiple cancer cell lines [^pacifico2021]:

- Glutamine depletion dose-dependently inhibited escape from TIS and reduced the CD44+/CD24−/low stem-cell subpopulation in all five cell lines studied (MCF-7, A549, MDA-MB-231, and two murine lines).
- Escaped cells overexpressed **SLC1A5** (ASCT2), a high-affinity glutamine transporter, at 2–6.5-fold at the protein level vs parental cells, along with NANOG (stem-cell marker); SLC1A5 inhibitor GPNA abolished TIS escape.
- **Glutamine synthetase (GS)** expression conferred independence from exogenous glutamine by synthesizing it de novo from ammonia + glutamate — accounting for why some cells escaped even under low-glutamine conditions.
- Glutamine serves dual escape-enabling functions: nitrogen provision for de novo nucleotide synthesis (rescue experiments with nucleosides confirmed this) and broader metabolic/signaling roles including stem-cell maintenance.

A follow-up by the same group (Pacifico & Arra 2022, Biochemical Pharmacology) showed that the anticancer agent trabectedin suppressed glutamine-dependent escape by interfering with glutamine metabolism [^pacifico2022]. These findings define a metabolic vulnerability in the TIS-escape window and suggest glutamine pathway inhibition as a potential adjunct strategy.

#gap/needs-replication — the glutamine-dependence results are from in-vitro cell-line models; in-vivo validation and translation to human tumor physiology are not established.

---

## Polyploid giant cancer cells and depolyploidization as an escape route

Therapy-induced polyploidization (TIP) — the generation of cells with greater than diploid DNA content — frequently co-occurs with TIS. The relationship between these two phenomena is the subject of active investigation [^sikora2022].

Key observations:

- High-dose DNA-damaging therapy can drive tumor cells into a **polyploid giant cancer cell (PGCC) state**, characterized by massively enlarged nuclei, multinucleation, and a senescence-like arrest.
- PGCCs are associated with **unfavorable clinical outcomes** and disease recurrence across multiple cancer types [^song2021].
- Depolyploidization — the process by which polyploid giant cells reduce their DNA content through asymmetric/amitotic division — can generate daughter cells with near-diploid DNA content that resume proliferative growth. These "escaper" daughter cells may have gained mutations or chromosomal rearrangements generated during the polyploid state, potentially acquiring more aggressive properties.
- The mechanistic link between TIS and TIP: it has been proposed (Sikora et al. 2022) that senescence-like arrest in polyploid cells and the eventual escape via depolyploidization represent a single biological program rather than independent events [^sikora2022].

#gap/no-mechanism — the molecular trigger for depolyploidization (the transition from the PGCC state back to near-diploid proliferating daughters) is not well characterized. #gap/needs-replication — the frequency and cancer-type specificity of this escape route in human clinical samples is not systematically established; most data are from cell-line and xenograft models.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — PGCC states described in human cancer biopsies; depolyploidization mechanism is mostly from cell-line models |
| Phenotype conserved in humans? | partial — PGCC frequency correlates with poor prognosis in clinical datasets, but direct evidence of depolyploidization as the escape mechanism in human tumor evolution is inferential |
| Replicated in humans? | no (mechanistic) — awaits intravital imaging or longitudinal clonal-genomics evidence in human tissue |

---

## Senescence escape and tumor suppression: OIS as an unstable barrier

Oncogene-induced senescence (OIS) is widely understood as a tumor-suppressive mechanism: when a proto-oncogene (RAS, BRAF^V600E^, MYC) is activated in a normal cell, the ARF/MDM2/p53 axis drives that cell into senescence, arresting clonal expansion. Pre-malignant lesions (benign nevi, early adenomas, Barrett's esophagus) contain abundant p16^+^ OIS cells [^saleh2020].

However, OIS is a **probabilistic barrier, not an absolute one:**

- OIS efficacy depends on the intact two-arm machinery (p53 + p16/Rb); inactivation of either arm tilts the cell toward escape.
- The longer cells remain in the OIS state, the greater the accumulated mutagenic pressure — prolonged SASP (via ROS, secreted cytokines) increases the probability of secondary mutations that inactivate p53 or delete CDKN2A.
- SASP can promote paracrine senescence in neighboring cells (see [[cellular-senescence]] § SASP), amplifying tissue-level inflammation and creating a microenvironment permissive for eventual escape.

The Gu et al. 2025 (Nature) study of MASH-to-hepatocellular carcinoma (HCC) progression illustrates the OIS-to-cancer trajectory [^gu2025]:
- p53 target gene **FBP1** (fructose-1,6-bisphosphatase 1) is elevated in senescent MASH hepatocytes, reinforcing their arrest; FBP1 normally recruits protein phosphatase 2A catalytic subunit (PP2AC) to AKT, suppressing AKT activity.
- In emerging HCC, FBP1 is suppressed via two mechanisms: (1) DNMT1-mediated promoter hypermethylation (in 62.8% of human HCCs) and (2) ERK-mediated phosphorylation at Ser271 triggering TRIM28 ubiquitin-ligase-dependent proteasomal degradation.
- The mechanistic axis is: **NRF2 activation → ERK induction → FBP1 phosphorylation/degradation → AKT disinhibition → MDM2 Ser166 phosphorylation by AKT → p53 proteasomal degradation**, removing both arms of senescence arrest in HCC progenitor cells.
- IHC analysis in **83 human HCCs** showed FBP1 downregulation in 71%, strongly correlating with AKT activation, p53 downregulation, and poor survival.
- This demonstrates that the hepatocyte OIS barrier is subject to a definable metabolic/signaling override (the NRF2-FBP1-AKT-p53 switch), operative in both mice and humans, not merely stochastic mutation accumulation.

#gap/needs-replication — the NRF2-FBP1-AKT-p53 axis as a general OIS-escape mechanism in non-liver tissues has not been established; Gu 2025 is liver/MASH-specific.

---

## Senolytic safety: the sublethal-exposure concern

Senolytic therapy aims to eliminate senescent cells by exploiting their pro-survival pathways (SCAPs — Senescent-Cell Anti-Apoptotic Pathways). A mechanistic concern — though direct experimental evidence in the specific context of senolytics is thin — is that **sublethal senolytic exposure** could perturb the anti-apoptotic/arrest balance without achieving complete cell killing, potentially permitting escape rather than clearance:

**Theoretical concern:** If a senolytic dose is sufficient to partially destabilize SCAP-mediated survival without triggering caspase-mediated apoptotic commitment, the altered cell might re-enter the cycle in a genomically unstable state rather than dying. This is analogous to the TIS-escape scenario but provoked by the senolytic agent rather than chemotherapy.

**What is known:**
- The p53/p21 arm of senescence arrest is analytically separable from the SASP and from BCL-family-mediated survival (see [[cellular-senescence]] § Core molecular machinery). A senolytic targeting BCL-xL (navitoclax, A-1331852) acts on the SCAP survival arm and does not directly re-engage or suppress the arrest checkpoint. In principle, if survival support is partially removed but arrest is also partially destabilized, the net outcome is uncertain.
- Bajtai et al. 2025 showed that TIS breast cancer cells are resistant to 23 of 46 (roughly half) tested active FDA-approved compounds [^bajtai2025], indicating the senescent state confers broad multi-drug resistance — including partial resistance to navitoclax in some cell lines. In the in-vivo TNBC model (Brca1−/−;p53−/− FVB mice), the combination of DOXIL + navitoclax failed to improve survival vs DOXIL alone (p=0.3888), demonstrating that the navitoclax senolytic strategy did not prevent TIS-mediated tumor escape in this model.
- The Beauséjour 2003 framework implies that escape probability is governed by the p16 expression level at time of intervention: high-p16 senescent cells resist proliferative escape even after combined p53+pRb inactivation [^beausejour2003]. If senolytics preferentially clear low-p16 (recently-arrested) senescent cells and spare high-p16 cells (consistent with reported cell-type selectivity), the remaining population may be biased toward cells that are less escape-prone.

**Current status:** There is no published experimental demonstration that senolytic-treated (but surviving) senescent cells escape with higher frequency than untreated senescent cells, in vivo or in vitro. This concern is extrapolated from TIS-escape biology and first-principles reasoning. #gap/no-mechanism #gap/needs-replication

---

## Relevance to the aging-cancer paradox

The aging-cancer paradox describes the apparent contradiction: aging increases cancer risk (mutagenic load accumulation, chronic inflammation), yet very old tissues often show depleted regenerative capacity rather than runaway hyperplasia. Senescence escape is a central mechanism in resolving this paradox at the cellular level:

1. **Protective arm:** OIS restrains early pre-malignant clones. Young, immunocompetent tissue efficiently clears OIS cells via NK-cell and macrophage surveillance, preventing accumulation and avoiding both chronic SASP damage and escape opportunity.

2. **Failure arm:** With aging, two failures compound: (a) immune surveillance of senescent cells declines ([[cellular-senescence]] § Two arms of intervention), allowing OIS cells to persist longer in the pre-malignant barrier state — extending the time window in which secondary mutations (p53 loss, CDKN2A deletion) can accumulate; and (b) SASP-driven paracrine inflammation creates a tumor-permissive microenvironment. When escape finally occurs in aged tissue, the resulting tumor faces a less immunocompetent host, is frequently more aggressive (stemness reprogramming during prolonged senescence), and arises in an inflamed stroma already remodeled by years of chronic SASP.

3. **Senolytic therapy implication:** Clearing OIS cells early (before secondary mutations accumulate) would theoretically interrupt the escape-mediated tumor-initiation pathway. Baker 2016 (INK-ATTAC) showed in two cohorts of wild-type aging mice (mixed C57BL/6-129Sv/E and congenic C57BL/6 backgrounds) that chronic AP20187-mediated p16^+^ cell clearance increased tumor latency but did NOT reduce tumor incidence or spectrum at autopsy — consistent with escape having already occurred in some clones before the clearance intervention, or with p16^+^ cells not being the obligate bottleneck for all tumor types [^baker2016_ref]. TIS-escape considerations add urgency to the "clear senescent cells early" argument.

For comprehensive treatment of this paradox, see [[cellular-senescence]] § Aging-cancer paradox and [[phenotypes/cancer]].

---

## Limitations and gaps

- #gap/needs-human-replication — All primary mechanistic work on senescence reversal (Beauséjour 2003) was performed in human fibroblast cell culture. In-vivo reversal of senescence in intact human tissue has not been demonstrated; inferences about cancer progression are from tumor evolution data.
- #gap/needs-replication — The Milanovic 2018 senescence-stemness reprogramming finding is from mouse/human lymphoma models; independent confirmation across cancer types is partial and observational.
- #gap/no-mechanism — The precise molecular trigger for depolyploidization (PGCC escape to near-diploid daughters) is not characterized.
- #gap/no-mechanism — The molecular threshold at which the p16/Rb reinforcement becomes sufficient to prevent proliferative escape even after p53 loss has not been systematically mapped.
- #gap/no-mechanism — Whether and how senolytic SCAP disruption might perturb the arrest machinery and permit escape is unexplored experimentally; the concern is currently theoretical.
- #gap/long-term-unknown — The long-term cancer risk from chronic senolytic therapy in humans has not been studied; preclinical models do not show increased tumor incidence with periodic senolytic dosing, but human data are absent.
- #gap/contradictory-evidence — TIS was historically viewed as a durable anti-tumor mechanism; recent data (Milanovic 2018, Bajtai 2025, Saleh series) position it as a double-edged or predominantly dangerous program. Whether TIS is net-beneficial or net-harmful in clinical oncology remains contested, particularly given that it is obligately triggered by standard chemotherapy.

---

## Footnotes

[^beausejour2003]: doi:10.1093/emboj/cdg417 · Beauséjour CM et al. (Campisi lab) 2003 · in-vitro (human diploid fibroblasts WI-38 and BJ; lentiviral rescue experiments) · *EMBO J* Vol.22 No.16 pp.4212–4222 · p53 inactivation (GSE-22, LgT) sufficient for complete senescence reversal in p16-low S-BJ cells (70–90% %LN, >20 PDs); p16-high S-WI cells resist all rescue attempts including combined p53+pRb inactivation (DNA synthesis stimulated 60–70% but no proliferation); p16 knockdown converts S-WI to a BJ-like phenotype permitting p53-inactivation rescue; two-layer model established · local PDF verified 2026-05-31

[^milanovic2018]: doi:10.1038/nature25167 · Milanovic M et al. (Schmitt lab) 2018 · in-vivo (mouse Eµ-Myc B-cell lymphoma) + in-vitro + human relapse-sample correlation · *Nature* 553:96–100 · TIS upregulates adult tissue stem-cell signature and Wnt signaling; escaped cells show strongly enhanced Wnt-dependent clonogenic growth vs chemotherapy-exposed non-senescent controls; in-vivo tumor-initiation potential much higher in previously-senescent cells; relapse-sample enrichment corroborated; extended to AML and ALL models · NOT in local archive (not_oa) — abstract-level verification only; specific limiting-dilution tumor-initiation numbers not verified from full text #gap/no-fulltext-access

[^saleh2020]: doi:10.3390/cancers12040822 · Saleh T et al. 2020 · review · *Cancers (Basel)* 12(4):822 · TIS as "old friend become enemy"; comprehensive review of 63+ FDA-approved agents inducing TIS; escape enables dormancy and aggressive relapse; senolytic elimination as adjunct proposed · local PDF verified 2026-05-31

[^saleh2022]: doi:10.1038/s41416-022-01787-6 · Saleh T & Gewirtz DA 2022 · review/perspective · *Br J Cancer* · TIS as tumor dormancy mechanism; escape leads to recurrence · NOT in local archive (download failed) — abstract-level verification only #gap/no-fulltext-access

[^saleh2024]: doi:10.1080/15384101.2024.2364579 · Saleh T 2024 · perspective · *Cell Cycle* 23(6):713–721 · TIS escape confirmed by recent experiments (including Bajtai 2025 and others cited therein); undermines tumor-suppressor framing; "senescence escape" defined as resumption of proliferation from fully-arrested state (distinct from senescence reversal); pharmacologic targeting of TIS escape proposed · local PDF verified 2026-05-31

[^bajtai2025]: doi:10.1186/s12943-025-02310-0 · Bajtai E et al. 2025 · in-vitro (MCF7, T47D, MDA-MB-231, Hs578T; bulk RNA-seq, scRNA-seq, surface proteomics) + in-vivo (Brca1−/−;p53−/− FVB mouse TNBC model) · *Mol Cancer* 24:128 · TIS is a transient drug resistance mechanism; 0.29–8.2% cells survived DOX but all lines escaped; TIS cells transcriptomically distinct from CTR and REPOP (929 shared TIS DEGs, 96.5% upregulated); of 46 active FDA-approved compounds tested, TIS cells resisted 23 (≈half) in ≥3/4 lines; KRAS signaling gene sets upregulated in TIS (potential escape mechanism, not fully resolved); navitoclax (DOXIL + navitoclax) failed to improve survival vs DOXIL alone in vivo (p=0.3888) · local PDF verified 2026-05-31

[^sikora2022]: doi:10.1016/j.semcancer.2020.11.015 · Sikora E et al. 2022 · review · *Semin Cancer Biol* · therapy-induced polyploidization and TIS are mechanistically linked; PGCC escape via depolyploidization as relapse route · NOT in local archive (not_oa) — abstract-level verification only #gap/no-fulltext-access

[^song2021]: doi:10.3389/fonc.2021.724781 · Song Y et al. 2021 · review · *Front Oncol* 11:724781 · polyploid giant cancer cells (PGCCs); stress-induced formation via endocycle, endomitosis, and cell-cell fusion; repopulation via neosis (asymmetric cytokinesis producing near-diploid daughters); association with poor prognosis, stemness, and drug resistance · local PDF verified 2026-05-31

[^pacifico2021]: doi:10.18632/aging.203495 · Pacifico F et al. 2021 · in-vitro (MCF-7, A549, MDA-MB-231, ID8 murine ovarian, TS/A murine mammary) · *Aging (Albany NY)* 13(17):20962–20983 · glutamine depletion dose-dependently inhibits TIS escape across all five cell lines; escaped clones overexpress glutamine transporter SLC1A5 (2–6.5-fold at protein level vs parental MCF-7) and NANOG; glutamine synthetase (GS) mediates resistance to glutamine deprivation, conferring exogenous-glutamine-independence; SLC1A5 inhibitor GPNA abolishes TIS escape; glutamine provides nitrogen for nucleotide biosynthesis (rescue by nucleosides); stem-cell subpopulation (CD44+/CD24−/low) is glutamine-dependent and reduced by Gln deprivation · local PDF verified 2026-05-31

[^pacifico2022]: doi:10.1016/j.bcp.2022.115159 · Pacifico F et al. 2022 · in-vitro · *Biochem Pharmacol* · trabectedin downregulates both SLC1A5 (glutamine transporter) and glutamine synthetase, targeting the glutamine-dependent cancer stem-like population; suppresses TIS escape and reduces stem-cell subpopulation; proposed as chemotherapy adjuvant · NOT in local archive (not_oa) — abstract-level verification only #gap/no-fulltext-access

[^gu2025]: doi:10.1038/s41586-024-08317-9 · Gu L et al. 2025 · in-vivo (MUP-uPA Fbp1ΔHep and Nrf2Act-Hep mice + NRASG12V HTVI; multiple mouse HCC models) + human (n=83 HCCs by IHC; CPTAC proteomic database) · *Nature* 637(8045):461–469 · FBP1 (p53-target gluconeogenic enzyme) elevated in senescent MASH hepatocytes; suppressed in 71% of human HCCs via DNMT1-mediated promoter methylation (62.8% of HCCs) and ERK-phosphorylation/TRIM28-mediated proteasomal degradation; mechanistic axis: NRF2 activation → ERK induction → FBP1 phospho-Ser271 → TRIM28-ubiquitylation → proteasomal degradation → AKT disinhibition (FBP1 normally recruits PP2AC to suppress AKT) → MDM2 Ser166 phospho by AKT → p53 degradation; FBP1 downregulation correlates with AKT activation, p53/p21/p16 loss, and poor survival; FBP1 reconstitution suppresses NRASG12V-induced HCC in Fbp1ΔHep mice · local PDF verified 2026-05-31

[^baker2016_ref]: doi:10.1038/nature16932 · Baker DJ et al. 2016 · in-vivo (INK-ATTAC transgenic mice; two cohorts: mixed C57BL/6-129Sv/E background and congenic C57BL/6; AP20187 bi-weekly from 12 months) · *Nature* 530(7589):184–189 · AP20187 cleared p16^+^ cells, extended median lifespan 24–27% (both cohorts), extended healthspan across multiple organs; tumor latency increased but tumor incidence and spectrum at autopsy were NOT reduced; median lifespan extension in tumor-free mice was 24–42%, indicating lifespan benefit not solely tumor-protective · local PDF verified 2026-05-31

---

## Cross-references

**Hallmarks and processes:**
- [[cellular-senescence]] — canonical arrest program; SCAP architecture; aging-cancer paradox treatment
- [[processes/senescence-immune-surveillance]] — immune clearance of senescent cells (complementary axis; seeding in parallel)
- [[sasp]] — secretory phenotype that amplifies the pro-escape microenvironment via paracrine spreading
- [[dna-damage-response]] — upstream trigger shared by TIS and OIS; p53/p21 arm initiation

**Proteins:**
- [[p53]] — primary arrest checkpoint; loss-of-function is the dominant escape route
- [[p21]] — p53 effector; CDK2 inhibition
- [[p16-rb-pathway]] — secondary reinforcement arm; CDK4/6 inhibition → Rb → E2F arrest

**Pathways:**
- [[p53-pathway]] — growth-arrest initiation; OIS ARF/MDM2 axis
- [[wnt-signaling]] — upregulated in TIS-escaped cells (Milanovic 2018)

**Phenotypes and interventions:**
- [[phenotypes/cancer]] — downstream consequence of escape failure; OIS → cancer progression
- [[interventions/pharmacological/senolytics]] — intended to eliminate senescent cells before escape; sublethal-dose concern
