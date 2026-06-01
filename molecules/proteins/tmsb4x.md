---
type: protein
aliases: [thymosin beta-4, Thymosin β4, Tβ4, T-beta-4, TB4, TMSB4X, TYB4_HUMAN, ZNF67]
uniprot: P62328
ncbi-gene: 7114
hgnc: 11881
ensembl: ENSG00000205542
genage-id: null    # not listed in GenAge human or model-organism databases as of 2026-05-09 #gap/needs-canonical-id
pathways: ["[[pi3k-akt-pathway]]"]
hallmarks: []
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 2    # RGN-259 (0.1% Tβ4 ophthalmic solution) is in Phase 3 (NCT05555589, neurotrophic keratopathy) and completed Phase 2 RCTs for dry eye (Sosne 2015). No aging-indication drug exists; no approved small-molecule modulator. Tier 2 (high-quality clinical probe/biologic in late-stage trials, not FDA-approved for any indication as of 2026-05-09, and no aging-validated indication). See body for aging-context rationale.
gtex-aging-correlation: "Broad low-specificity expression (Tau=0.15) across all tissues; highest in lymphoid tissue, bone marrow, and spleen per Human Protein Atlas (immune-response cluster). No age-stratified Spearman ρ retrievable from GTEx v8 API for this Ensembl ID (ENSG00000205542) — #gap/no-gtex-aging-signal. Human Protein Atlas reports no documented age-related expression changes."
mr-causal-evidence: not-tested    # No GWAS instruments or MR studies for TMSB4X identified via PubMed, IEU OpenGWAS, or Europe PMC as of 2026-05-09.
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "UniProt P62328 canonical sequence + HGNC/NCBI/Ensembl IDs verified against REST APIs. Tan 2021 (Theranostics), Sosne 2015 OPTH (Clinical Ophthalmology), and Nguyen 2025 (IOVS) verified against full PDFs. Philp 2004 (MAD) and Sosne 2010 (FASEB J) verified against abstracts only (both not_oa). Malinda 1997, Goldstein 2015, Bjorklund 2020, Bock-Marquette 2023, Badamchian 2007 — not_oa, unverifiable against full text. NCT05555589 Phase 3 status confirmed via ClinicalTrials.gov v2 API."
---

# Thymosin β4 (TMSB4X)

Thymosin β4 (Tβ4) is the predominant member of the thymosin beta family and the major G-actin-sequestering protein in eukaryotic cells. Encoded by the X-linked gene TMSB4X (Xp22.2), the 44-aa peptide regulates the cytoplasmic pool of unpolymerized actin, and through this and actin-independent mechanisms, modulates cell migration, wound healing, angiogenesis, and anti-apoptotic signaling. It is the parent protein of the 7-aa synthetic fragment [[../compounds/tb-500]] (residues 17–23, LKKTETQ), which retains the canonical WH2 actin-binding motif but lacks the N-terminal Ac-SDKP immunomodulatory tetrapeptide.

## Identity

- **UniProt:** P62328 (TYB4_HUMAN) — Swiss-Prot (manually curated)
- **NCBI Gene:** 7114
- **HGNC symbol:** TMSB4X; full name "thymosin beta 4 X-linked"
- **Ensembl:** ENSG00000205542
- **Chromosome:** Xp22.2
- **OMIM:** 300159
- **Length:** 44 amino acids (canonical isoform per UniProt P62328)
- **GenAge:** Not listed #gap/needs-canonical-id
- **Mouse ortholog:** Tmsb4x (X-linked; one-to-one)

> **Sequence length — resolved:** The discrepancy between "43 aa" and "44 aa" in the literature is explained by Met-1 cleavage. UniProt P62328 canonical sequence is 44 aa (MSDKPDMAEIEKFDKSKLKKTETQEKNPLPSKETIEQEKQAGES), but the initiator Met-1 is co-translationally removed (annotated in UniProt under "Initiator methionine: Removed"). The mature processed chain (Ser-2 through Ges-44) is **43 aa** — this is the biologically active endogenous form and the basis for the "43 aa" convention used throughout the primary literature (Sosne 2010, Nguyen 2025, and most other sources). The "44 aa" count refers to the pre-processed sequence including Met-1. **On this page:** position numbers follow the mature-chain convention (Ser-2 = position 1), so LKKTETQ (WH2 domain) = positions **17–23**; the TB-500 fragment covers these same positions in both numbering systems relative to the mature peptide.

## Cross-reference: TB-500 therapeutic fragment

The 7-aa fragment [[../compounds/tb-500]] (LKKTETQ) covers the WH2 actin-binding domain at positions 17–23. All mechanistic TB-500 claims trace to full Tβ4 biology documented on this page. See the TB-500 page for:
- The fragment vs full-protein distinction
- Acetylated form (Ac-LKKTETQ) characterisation (Esposito 2012)
- Ac-LKKTE metabolite finding (Rahaman 2024, closed-access)
- WADA prohibition status and FDA 503A removal (2023)
- The NCT07487363 cardiovascular trial (RECRUITING 2026)

## Tissue expression and localization

Tβ4 is ubiquitously expressed with low tissue-specificity (Human Protein Atlas Tau = 0.15 — "detected in all" tissues). Highest mRNA and protein expression is in **lymphoid/immune tissues**: spleen, bone marrow, lymph node, appendix. This is consistent with UniProt's annotation of prominent expression in hematopoietic cell lines. Elevated levels are also reported in platelets and neutrophils in the primary literature.

**Subcellular localization:** Cytoplasm / cytoskeleton (UniProt P62328).

**No documented age-related expression change** has been reported in Human Protein Atlas or retrievable from GTEx v8 for this gene. Age-correlation data in specific tissues (e.g., cardiac, dermal) has not been systematically reported in the published literature as of 2026-05-09. #gap/no-gtex-aging-signal

## Molecular function

### G-actin sequestration (canonical)

Tβ4 is "the major actin-sequestering molecule in eukaryotic cells" [^sosne2010]. It binds G-actin (unpolymerized monomers) with ~0.5 µM Kd via its central WH2 (WASP Homology 2) domain (residues 17–23, LKKTETQ), maintaining a cytoplasmic pool of sequestered actin that can be rapidly released for filament nucleation [^malinda1997]. The equilibrium between sequestered (Tβ4-bound) G-actin and polymerized F-actin governs:

- **Lamellipodia and cell polarity** — cytoplasmic Tβ4 concentration modulates the directionality of actin-dependent cell motility
- **Wound closure** — keratinocyte and fibroblast migration rates are actin-dynamics-dependent; Tβ4 acts as a mobilizable actin reservoir

### Active sites within the 44-aa sequence

Sosne et al. 2010 mapped biological activities to discrete sub-sequences [^sosne2010]:

| Sub-sequence | Positions | Activity |
|---|---|---|
| Ac-SDKP (4 aa) | 1–4 (N-terminal) | Anti-inflammatory; reduces fibrosis; ACE substrate |
| N-terminal region (~15 aa) | 1–15 | Promotes cell survival; anti-apoptotic |
| LKKTETQ (WH2 domain) | 17–23 | Angiogenesis; wound healing; cell migration; actin sequestration |

The Ac-SDKP tetrapeptide is generated by ACE2/ACE cleavage of Tβ4 and independently inhibits hematopoietic stem cell entry into S-phase (UniProt P62328 annotation). This tetrapeptide is absent from the [[../compounds/tb-500]] fragment.

### Integrin-linked kinase (ILK) and PI3K/Akt signaling

Beyond actin sequestration, Tβ4 activates [[pi3k-akt-pathway]] via the ILK (integrin-linked kinase) / PINCH / Parvin complex. This pathway mediates Tβ4's **anti-apoptotic** effects in cardiomyocytes: at 600 ng/mL in vitro (hiPSC-derived cardiomyocytes under hypoxia), Tβ4 significantly upregulated AKT activity and Bcl-xL protein expression, reducing DNA damage (by ~50%) and TUNEL+ apoptotic cells [^tan2021]. This is an actin-independent signaling axis. The 600 ng/mL dose is a supraphysiological in-vitro concentration; in-vivo relevance at lower endogenous concentrations is not established. #gap/dose-response-unclear

### Post-translational modifications

Per UniProt P62328 (positions in canonical 44-aa numbering, including Met-1):
- **N-terminal acetylation** — Ser-2 (after Met-1 cleavage); the N-acetylserine form is the predominant endogenous peptide
- **Phosphorylation** — Ser-2, Thr-23, Ser-31, Thr-34
- **Lys acetylation** — Lys-4, Lys-12 (alternate), Lys-26, Lys-32, Lys-39
- **Sumoylation** — Lys-12 (SUMO2 glycyl-lysine isopeptide, alternate with acetylation)

## Role in wound healing and tissue repair

Tβ4 was characterized as a multi-function wound repair agent primarily by the Goldstein / Kleinman laboratory. Key evidence from full-protein studies:

### Dermal and corneal wound healing

Philp et al. 2004 demonstrated in rodent excisional wound and corneal angiogenesis models that full Tβ4 protein accelerated wound closure, promoted angiogenesis, and induced hair follicle development — with effects observed "in both normal and aged rodents" [^philp2004]. This remains the most-cited in vivo wound-healing study for the full protein.

Tβ4 occurs naturally in human tears (0.5–7 µg/mL) and saliva (0.2–3.6 µg/mL); concentrations peak in the 25–35 age group, consistent with a role in endogenous mucosal repair [^badamchian2007].

### Angiogenesis

Malinda, Goldstein & Kleinman 1997 showed Tβ4 acts as a chemoattractant for human umbilical vein endothelial cells (4–6 fold enhanced migration in vitro), stimulating matrix metalloproteinase production and angiogenic sprouting [^malinda1997]. This is an actin-sequestration-coupled mechanism.

### Cardiac repair (post-MI)

Tβ4 activates dormant epicardial progenitor cells in the adult heart and promotes cardiomyocyte survival post-ischemia. In a porcine MI model (Yorkshire-landrace swine, ~13 kg, 4 groups: MI n=8, Tb4 n=9, CM n=8, Tb4+CM n=8), Tβ4 was delivered via gelatin microspheres alone or in combination with hiPSC-derived cardiomyocytes. The key result: **only the Tb4+CM combination group showed significant improvement in LVEF and reduced scar area at week 4 vs MI controls** (p<0.05); Tb4 alone (without hiPSC-CMs) improved scar area but did not significantly improve LVEF vs the MI group. Co-treatment significantly enhanced hiPSC-CM engraftment (p<0.01 vs CM alone), induced vasculogenesis, and proliferation of cardiomyocytes and endothelial cells. Arrhythmia analysis across all 4 MI groups showed significant overall variation (Fisher's exact test p=0.038), but pairwise comparisons between any two groups were not significant; hiPSC-CM transplantation did not increase arrhythmia vs Tb4 alone. No tumor formation was observed in immunosuppressed animals (whole-body MRI at week 12). In vitro, 600 ng/mL Tβ4 protected hiPSC-CMs from hypoxia-induced damage via AKT upregulation and Bcl-xL expression [^tan2021]. Bjørklund et al. 2020 reviewed the pleiotropic cardioprotective mechanisms including inflammatory modulation [^bjorklund2020]. Bock-Marquette et al. 2023 proposed that Tβ4 administration can reactivate embryonic epicardial programs in adult mice, suggesting potential "anti-aging regenerative" applications through developmental-program re-engagement [^bockmarquette2023]. #gap/needs-human-replication

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | WH2 domain + ILK/Akt axis conserved; Tβ4 sequence ~100% conserved mammal-human |
| Phenotype conserved in humans? | partial | Human tear/wound data exist; cardiac repair is porcine/rodent model only |
| Replicated in humans? | limited | Phase 2 RCT evidence for ophthalmic wound healing (primary endpoints failed; secondary endpoints significant — see Therapeutics); cardiac/musculoskeletal repair not yet tested in human RCTs |

## Aging context

### What is known

1. **Cardiac aging:** Bock-Marquette et al. 2023 proposed Tβ4 as a candidate "anti-aging regenerative" factor based on its ability to reactivate embryonic cardiac programs in adult mice post-MI [^bockmarquette2023]. Citation count is low (8 per OpenAlex); interpretation is speculative.
2. **Wound healing in aged animals:** Philp et al. 2004 noted that Tβ4 "promotes angiogenesis and wound repair in both normal and aged rodents" and also promotes hair growth in aged rodents — the only primary source directly comparing aged vs young contexts [^philp2004]. Specific aged-animal n's and statistics are not available from the abstract; paper is closed-access. #gap/no-fulltext-access
3. **Tear/saliva concentration peak at 25–35:** The age-associated decline in Tβ4 concentrations in human biofluids beyond this peak has not been quantified in the literature; the Badamchian 2007 observation is descriptive [^badamchian2007].
4. **No age-related expression data in GTEx or Protein Atlas** for any tissue. #gap/no-gtex-aging-signal

### What is not known

- Whether endogenous Tβ4 levels decline systematically with aging in tissue compartments relevant to repair (dermis, myocardium, CNS)
- Whether Tβ4 supplementation modifies aging trajectories (healthspan, lifespan) in any model organism — no DrugAge entry found
- Whether changes in Tβ4 expression drive or reflect aging hallmarks rather than being an epiphenomenon of tissue damage repair
- Human observational data on circulating Tβ4 vs age

Tβ4 has **no direct hallmark linkage** with primary-source-grade evidence as of 2026-05-09. The `hallmarks: []` field is intentionally empty. Plausible indirect links exist via [[chronic-inflammation]] (anti-inflammatory Ac-SDKP activity) and [[stem-cell-exhaustion]] (cardiac progenitor activation), but these are not yet substantiated with aging-specific primary data. #gap/needs-human-replication

## Therapeutics derived from Tβ4

### RGN-259 (ophthalmic solution, full Tβ4)

RGN-259 is a 0.1% topical Tβ4 ophthalmic formulation developed by RegeneRx Biopharmaceuticals.

- **Phase 2 RCT (dry eye):** n=72 (36 per arm), 28-day treatment; **primary endpoints (inferior corneal staining and ocular discomfort at visit 5) did not reach significance (P=0.2586 and P=0.2210)**; 27% reduction in discomfort scores in the CAE at day 28 (secondary endpoint, P=0.0244); significant reductions in central corneal staining (P=0.0075) and superior corneal staining (P=0.0210) vs placebo; inferior corneal staining and conjunctival staining improvements were not significant; 2 mild ocular TEAEs in Tβ4 group (neither suspected drug-related); no subjects withdrew due to drug adverse effects [^sosne2015a]
- **Phase 2 RCT (severe dry eye):** 9-patient multicenter trial; 35.1% reduction ocular discomfort; 59.1% reduction corneal fluorescein staining vs vehicle at day 56 [^sosne2015b]
- **Phase 3 (RECRUITING):** NCT05555589 (SEER-2) — "Assessment of the Safety and Efficacy of 0.1% RGN-259 Ophthalmic Solution for Neurotrophic Keratopathy" — n=70 estimated; sponsor: ReGenTree LLC; completion date 2026-05-30; FDA approval pending. Note: Nguyen et al. 2025 describe this as "an ongoing phase 2 clinical trial" but ClinicalTrials.gov lists it as Phase 3 (verified 2026-05-09) [^nguyen2025]

### TB-500 (LKKTETQ fragment)

See [[../compounds/tb-500]] for full coverage. Summary: synthetic 7-aa WH2-domain fragment; Phase 1/2 cardiovascular trial (NCT07487363, RECRUITING); no approved indication; FDA removed from 503A compounding list (2023); WADA-prohibited.

### Native Tβ4 clinical development (non-ophthalmic)

Goldstein & Kleinman 2015 reviewed potential applications in cardiac repair, kidney/liver disease, and spinal cord injury [^goldstein2015]. None of these indications had advanced beyond Phase 1/2 as of that review; current status of the cardiac and CNS programs is not confirmed in this draft. #gap/needs-canonical-id

## Druggability tier rationale

**Tier 2** (aging-context). RGN-259 (full Tβ4 ophthalmic) has completed Phase 2 human RCTs with positive results and is in Phase 3 for an approved corneal disease indication — this establishes clinical-stage tractability. However:
- No FDA-approved Tβ4-targeting drug exists for any indication
- No aging-validated indication (corneal repair is not an aging hallmark indication)
- No aging-indication human trial of the full protein or the TB-500 fragment is registered

Aging-context tier 2 is appropriate (high-quality clinical probe / biologic in late-stage development, no aging-validated approved drug). If RGN-259 receives FDA approval, reconsider tier 1 for the ophthalmology indication; aging-context tier would remain 2 unless an aging-specific indication is pursued.

## Knowledge gaps

- `#gap/no-gtex-aging-signal` — No age-stratified expression data available via GTEx v8 API for ENSG00000205542; Human Protein Atlas does not document age-related changes. Systematic tissue survey of Tβ4 with aging has not been published.
- `#gap/needs-human-replication` — All cardiac repair, musculoskeletal, and CNS neuroprotection evidence is preclinical (rodent/porcine). Only human evidence is ophthalmic RCTs (RGN-259, dry eye/neurotrophic keratopathy).
- `#gap/needs-canonical-id` — GenAge entry absent; RGN-259 cardiac and CNS program current regulatory status not confirmed in this draft.
- `#gap/no-mechanism` — Whether the age-related repair-capacity decline is causally linked to Tβ4 availability is not established. Correlation between Tβ4 biofluid levels and aging is reported only descriptively.
- `#gap/needs-replication` — The Bock-Marquette 2023 "anti-aging regenerative" framing for Tβ4 (n=8 citations) is a single-group proposal; no independent replication of developmental-program reactivation in aging cardiac tissue.

## Cross-references

- [[../compounds/tb-500]] — 7-aa therapeutic fragment (LKKTETQ, positions 17–23)
- [[pi3k-akt-pathway]] — ILK/PINCH/Akt downstream signaling axis
- [[chronic-inflammation]] — Ac-SDKP N-terminal tetrapeptide (ACE substrate) has anti-inflammatory/anti-fibrotic activity; plausible hallmark link, not yet primary-source-confirmed
- [[stem-cell-exhaustion]] — cardiac progenitor cell activation is an argued mechanism; evidence preclinical only
- [[actin-cytoskeleton]] — implicit stub; actin G/F equilibrium pathway has no dedicated wiki page yet

## Footnotes

[^philp2004]: doi:10.1016/j.mad.2003.11.005 · Philp D, Goldstein AL, Kleinman HK · *Mechanisms of Ageing and Development* 2004 Feb; 125(2):113–5 · PMID: 15037013 · in-vivo · model: normal and aged rodents (excisional wound + corneal angiogenesis + hair growth); full-protein Tβ4 (43 aa, mature chain); promotes angiogenesis, wound repair, and hair growth in both normal and aged rodents; specific group sizes and statistics not available from abstract · archive: confirmed (not_oa) #gap/no-fulltext-access

[^sosne2010]: doi:10.1096/fj.09-142307 · Sosne G, Qiu P, Goldstein AL, Wheater M · *FASEB Journal* 2010 · review / in-vitro domain-mapping · model: short synthetic peptides from Tβ4 sequence; mapped angiogenesis, wound healing, anti-inflammatory activities to discrete sub-sequences; identified WH2 domain (aa 17–23 in mature-chain numbering; LKKTETQ) as actin-binding + angiogenesis-promoting core; paper uses 43-aa numbering (mature chain, Met-1 removed) · archive: confirmed (not_oa)

[^malinda1997]: doi:10.1096/fasebj.11.6.9194528 · Malinda KM, Goldstein AL, Kleinman HK · *FASEB Journal* 1997 · in-vitro · model: human umbilical vein endothelial cells; Boyden chamber migration assay; Tβ4 showed 4–6 fold enhanced directional migration; mechanism involves G-actin interaction and MMP production · archive: confirmed (not_oa)

[^goldstein2015]: doi:10.1517/14712598.2015.1011617 · Goldstein AL, Kleinman HK · *Expert Opinion on Biological Therapy* 2015 · review · covers cardiac, renal, liver, spinal cord, ophthalmic Tβ4 clinical development programs; no quantitative primary data · archive: confirmed (not_oa)

[^badamchian2007]: doi:10.1196/annals.1415.046 · Badamchian M et al. · *Annals of the New York Academy of Sciences* 2007 · observational human · model: human saliva and tear samples; Tβ4 detected in tears at 0.5–7 µg/mL and saliva at 0.2–3.6 µg/mL; concentrations peak in 25–35 age group; proposed role in mucosal wound repair · archive: confirmed (not_oa) #gap/no-fulltext-access

[^tan2021]: doi:10.7150/thno.56757 · Tan SH, Loo SJ et al. · *Theranostics* 2021 · in-vivo (porcine MI model) + in-vitro · model: Yorkshire-landrace swine (~13 kg), 4 groups (MI n=8, Tb4 n=9, CM n=8, Tb4+CM n=8); Tβ4 delivered via gelatin microspheres; 600 ng/mL Tβ4 protected hiPSC-CMs from hypoxia via AKT/Bcl-xL upregulation in vitro; in vivo: **only Tb4+CM combination** significantly improved LVEF and reduced scar area at week 4 vs MI (p<0.05); Tb4 alone reduced scar but did not significantly improve LVEF; combination significantly enhanced engraftment (p<0.01 vs CM alone) and vasculogenesis; arrhythmia: overall Fisher p=0.038 across 4 groups, no pairwise significance; no tumorigenesis (whole-body MRI week 12) · archive: downloaded

[^bjorklund2020]: doi:10.2174/0929867326666190716125456 · Bjørklund G et al. · *Current Medicinal Chemistry* 2020 · review · pleiotropic cardiac Tβ4 mechanisms reviewed; no new primary data · archive: confirmed (not_oa)

[^bockmarquette2023]: doi:10.1016/j.intimp.2023.109741 · Bock-Marquette I et al. · *International Immunopharmacology* 2023 · in-vivo (mouse) · model: mouse embryos + adult mice post-coronary ligation; Tβ4 reactivates embryonic epicardial programs; increased cardiac neovascularization; proposed anti-aging regenerative framing · n=8 citations (OpenAlex, 2026-05-09) · archive: confirmed (not_oa)

[^sosne2015a]: doi:10.2147/OPTH.S80954 · Sosne G, Ousler GW · *Clinical Ophthalmology* 2015 · Phase 2 RCT · n=72 (n=36 per arm); 28-day treatment; **primary endpoints (inferior corneal staining + ocular discomfort at day 29) did not reach significance**; secondary endpoints: 27% reduction discomfort in CAE at day 28 (P=0.0244); central corneal staining –0.37 vs +0.16 placebo (P=0.0075); superior corneal staining P=0.0210; inferior staining and conjunctival staining differences NS; 2 mild ocular TEAEs in Tβ4 group (none suspected drug-related); no withdrawals due to drug AEs · archive: downloaded

[^sosne2015b]: doi:10.1097/ICO.0000000000000379 · Sosne G, Dunn SP, Kim C · *Cornea* 2015 · Phase 2 RCT · n=15 (9 eyes RGN-259; 6 vehicle); 56-day treatment; 35.1% reduction ocular discomfort; 59.1% reduction total corneal fluorescein staining vs control at day 56 · archive: confirmed (not_oa)

[^nguyen2025]: doi:10.1167/iovs.66.14.31 · Nguyen J, Verma S, Vuong VT et al. · *Investigative Ophthalmology & Visual Science* 2025 · preclinical (C57BL/6J mouse alkali burn model + in-vitro hTCEpi) · references NCT05555589 as "an ongoing phase 2 clinical trial" (their ref 17) though ClinicalTrials.gov lists it as Phase 3 RECRUITING (confirmed 2026-05-09); reports engineered tandem tTb4 superior to standard Tβ4 in corneal healing efficacy; FDA approval still pending · archive: downloaded
