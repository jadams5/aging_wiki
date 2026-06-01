---
type: protein
aliases: [MTTP, MTP, microsomal triglyceride transfer protein large subunit]
uniprot: P55157
ncbi-gene: 4547
hgnc: 7467
ensembl: ENSG00000138823
complex-subunits: ["P07237"]
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
pathways: ["[[lipoprotein-metabolism]]"]
hallmarks: ["[[altered-intercellular-communication]]"]
sens-categories: []
caused-by: []
causes: []
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Cuchel 2013 Lancet (pivotal Phase 3) verified against full PDF — key corrections applied (median→mean for LDL-C reduction; ApoB correction; NMRS n=20 steatosis data confirmed; transaminase AE data confirmed). Canonical-DB identity fields verified via UniProt REST API (P55157, P07237) and NCBI Gene. Closed-access sources (Wetterau 1985, 1990, 1992; Sharp 1993) verified via Crossref metadata + PubMed abstract only; full-text claims for these papers remain unverified (#gap/no-fulltext-access). Ricci 1995 PDF download failed (403); Narcisi 1995 verified via PubMed efetch (PMID 8533758 confirmed)."
literature-checked-through: 2026-05-09
---

# MTP / MTTP (Microsomal Triglyceride Transfer Protein)

The obligate lipid-loading factor for ApoB-containing lipoprotein particles — the gatekeeper of VLDL secretion in hepatocytes and chylomicron assembly in enterocytes. Loss-of-function causes [[abetalipoproteinemia]] (Bassen-Kornzweig syndrome), the Mendelian extreme of absent ApoB secretion. Pharmacological target of [[lomitapide]] (Juxtapid), the only FDA-approved direct ApoB-secretion inhibitor, used in homozygous [[familial-hypercholesterolemia]] where the [[ldlr]] pathway is non-functional.

## Identity

- **UniProt:** P55157 (MTP_HUMAN)
- **HGNC:** 7467 (symbol: MTTP)
- **NCBI Gene:** 4547
- **Ensembl:** ENSG00000138823
- **Gene locus:** Chromosome 4q23
- **Canonical isoform:** 894 amino acids (~99 kDa); precursor includes ER signal peptide
- **Mouse ortholog:** Mttp (one-to-one ortholog; lipid-transfer function conserved)

## Structure — obligate heterodimer

MTP exists as a non-covalent heterodimer in the lumen of the rough endoplasmic reticulum [^wetterau1990pdi]:

| Subunit | Gene | UniProt | MW | Role |
|---|---|---|---|---|
| Large subunit | MTTP | P55157 | ~99 kDa | Lipid-transfer catalytic activity |
| Small subunit (PDI) | P4HB | P07237 | ~57 kDa | Chaperone; required for large-subunit folding and stability |

PDI (protein disulfide isomerase) is essential — dissociation of the heterodimer abolishes lipid-transfer activity. A 30-amino-acid truncation of the large subunit that disrupts PDI interaction is sufficient to cause abetalipoproteinemia [^ricci1995]. PDI participates simultaneously in classical ER disulfide-bond catalysis and MTP-complex structural maintenance; MTP does not monopolize PDI in the ER.

**Subcellular location:** ER lumen (rough ER) of hepatocytes and enterocytes. Also detected at the Golgi (UniProt annotation).

## Function

### Core mechanism: ApoB lipid-loading in the ER

MTP catalyzes transfer of neutral lipids — primarily triglyceride and cholesterol ester, with lower efficiency for phospholipid — between phospholipid surfaces [^wetterau1985]. In the context of lipoprotein biosynthesis:

1. **Hepatocytes (VLDL):** As [[apob|ApoB-100]] (4536 aa) is co-translationally translocated into the ER lumen, MTP loads triglyceride and cholesterol ester onto the nascent polypeptide. Without this lipidation, ApoB-100 misfolds and is rapidly degraded by ER-associated degradation (ERAD). MTP loading rescues ApoB-100 from proteasomal degradation, permitting assembly into pre-VLDL particles [^sharp1993].

2. **Enterocytes (chylomicrons):** MTP loads dietary triglyceride and cholesterol ester onto [[apob|ApoB-48]] (the N-terminal 48% of ApoB-100, encoded by the same gene after intestinal ApoB mRNA editing). Same structural mechanism, different ApoB isoform.

3. **Two-step model:** Initial cotranslational lipidation produces a small ApoB-lipid particle. A second MTP-mediated step fuses cytosolic lipid droplets to expand the particle to mature VLDL or chylomicron size. The second step is less well characterized than the first. #gap/no-mechanism for the lipid-droplet fusion process in detail.

### Lipid-transfer substrate hierarchy

MTP transfers neutral lipids in the order: triglyceride > cholesterol ester >> phospholipid [^wetterau1985]. This substrate preference is functionally critical — TG is the bulk energy cargo of VLDL particles.

## Genetic disorders

### Abetalipoproteinemia (ABL)

- **Genetics:** Autosomal recessive; homozygous or compound heterozygous LOF mutations in MTTP. ICD-10: E78.6. Also called Bassen-Kornzweig syndrome.
- **Molecular basis:** Absent or non-functional MTP → ApoB-100 and ApoB-48 cannot be stabilized → no VLDL, LDL, or chylomicron secretion [^wetterau1992].
- **Gene defects characterized:** Over 30 distinct MTTP mutations documented, including nonsense, frameshift, splice-site, and missense variants that disrupt PDI interaction [^narcisi1995][^ricci1995].
- **Plasma phenotype:** Undetectable ApoB, undetectable VLDL/LDL/IDL/chylomicrons, very low total cholesterol, near-zero plasma triglycerides (postprandial or fasting).
- **Clinical phenotype:** Fat malabsorption (steatorrhea), failure to thrive in infancy, severe fat-soluble vitamin deficiency (A, D, E, K), retinitis pigmentosa (photoreceptor degeneration from vitamin E deficiency), spinocerebellar ataxia, peripheral neuropathy, acanthocytosis on peripheral blood smear. Progressive neurological deterioration if untreated.
- **Treatment:** Aggressive vitamin E megadose supplementation (100–300 mg/kg/day or up to 10,000 IU/day), plus vitamins A, D, K; low-fat diet with MCT oil substitution. Early high-dose vitamin E treatment substantially reduces neurological morbidity; neurological damage is not fully reversible once established.
- **Prevalence:** Rare — estimated ~1:1,000,000; fewer than 200 cases formally reported in the literature as of early 2020s. #gap/unsourced — registry-based global count not located; figure is from clinical review consensus.

### Heterozygous MTTP variants

Heterozygous carriers of MTTP mutations have normal to near-normal ApoB levels — one functional allele is sufficient. Common non-coding variants (e.g., -493G/T promoter polymorphism, rs1800591) show modest associations with plasma triglyceride and ApoB levels in population studies but do not cause disease. Familial hypobetalipoproteinemia (FHBL) is more frequently caused by truncating APOB mutations than by MTTP defects [^schonfeld1995].

## Therapeutic targeting — lomitapide

### Mechanism of action

[[Lomitapide]] (brand: Juxtapid; generic: lomitapide mesylate) is a small-molecule inhibitor that binds directly to the MTP large subunit, blocking lipid transfer [^cuchel2013lancet]. This reduces MTP-mediated ApoB-100 lipidation in hepatocytes → destabilizes ApoB-100 → reduces VLDL secretion → reduces circulating LDL-C. The mechanism is entirely LDLR-independent, making lomitapide effective in null/null HoFH patients with no functional LDLR.

### Regulatory approval

- FDA approved December 2012 for adults with homozygous familial hypercholesterolemia (HoFH) as an adjunct to diet and other lipid-lowering treatments, including LDL apheresis.
- EMA approved under orphan-drug designation for HoFH.
- Restricted to REMS program in the US due to hepatotoxicity risk.

### Pivotal efficacy data

In the Phase 3 single-arm open-label study (n=29, HoFH patients; 26-week efficacy phase; 78-week total treatment) [^cuchel2013lancet]:
- Mean LDL-C reduction: **−50%** from baseline at week 26 (95% CI −62, −39; p<0.001); 23/29 subjects completed both the efficacy phase (26 weeks) and full study (78 weeks)
- Apolipoprotein B reduction: −49% from baseline at week 26 (p<0.0001)
- All patients on background lipid-lowering therapy (statins, ezetimibe ± LDL apheresis)
- One-arm design; no placebo comparator (ethical constraint in this ultra-rare disease)

### Adverse effects and dose-limiting toxicity

- **Hepatic steatosis** — the primary dose-limiting toxicity. Blocking VLDL secretion traps triglyceride in the liver → dose-dependent hepatic fat accumulation. Mean hepatic fat (NMRS; n=20 evaluable) increased from 1.0% at baseline to 8.6% at week 26, with no further increase through week 78 (8.3%). Long-term consequences on hepatic fibrosis remain unknown. **Boxed warning** for hepatotoxicity.
- **Elevated transaminases** — 10/29 subjects experienced ALT and/or AST >3× ULN; 4/29 had ALT elevations >5× ULN. All elevations were managed by dose reduction or temporary interruption; no subject permanently discontinued treatment due to liver abnormalities.
- **Gastrointestinal effects** — steatorrhea, diarrhea, nausea (from reduced intestinal fat absorption via ApoB-48 suppression); mitigated by strict very-low-fat diet adherence.
- **Cost:** ~$300,000+/year in US; orphan-drug pricing limits real-world use.

### Safety note for aging-context interpretation

The hepatic-steatosis liability is mechanistically inherent to MTP inhibition — any agent that blocks hepatic TG export will promote hepatic lipid accumulation. This toxicity profile sharply limits the applicability of MTP inhibition outside HoFH; broader use as a cardiovascular-risk-reduction strategy in non-HoFH populations is not considered viable at therapeutic lomitapide doses. #gap/long-term-unknown — whether sustained lomitapide-induced hepatic steatosis progresses to steatohepatitis or fibrosis is not established from available trial durations.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | MTP-ApoB assembly mechanism is conserved across mammals |
| Phenotype conserved in humans? | yes | ABL identical presentation in humans; drug efficacy demonstrated in humans |
| Replicated in humans? | yes | Lomitapide Phase 3 data; ABL phenotype well-documented |

## Aging relevance

MTP is a constitutive metabolic enzyme, not a canonical aging driver. Its aging relevance is indirect:

1. **ApoB-particle production declines modestly with age** — postprandial chylomicron-remnant clearance is prolonged in older adults; whether reduced enterocyte MTP activity contributes is not well established. #gap/no-mechanism
2. **[[ldl]] and [[apob]] as cardiovascular aging mediators** — MTP is the rate-limiting step upstream of the entire ApoB-particle production chain. Atherosclerotic cardiovascular disease (driven by ApoB-containing particle accumulation) is the leading cause of mortality in older adults; MTP's role is permissive rather than specifically age-regulated.
3. **Lomitapide as an LDLR-bypass concept** — mechanistically notable because it achieves LDL-C reduction in patients where statins and PCSK9i are partially or completely ineffective (null/null LDLR HoFH). The hepatic-steatosis liability forecloses this approach for general aging-risk management.

## Pathway membership

- [[lipoprotein-metabolism]] — central node in ApoB-particle assembly; upstream of all VLDL/LDL production steps
- Downstream of: SREBP-2-driven lipogenic gene expression ([[srebp-2]])
- Upstream of: [[apob]] secretion → VLDL → [[ldl]] → [[atherosclerosis]] risk

## Key interactors

- [[apob]] — direct interaction with nascent ApoB polypeptide in ER lumen; MTP is required for ApoB stabilization
- PDI (P4HB) — obligate heterodimer partner; structural and chaperone role
- PRAP1 — reported UniProt interaction; function in MTP complex not well characterized #gap/no-mechanism

## Cross-references

- [[ldlr]] — therapeutic bypass target; lomitapide works regardless of LDLR status
- [[familial-hypercholesterolemia]] — primary therapeutic indication
- [[apoe]] — ApoE on lipoprotein remnants; chylomicron-remnant clearance context
- [[apoc3]] — chylomicron/VLDL triglyceride clearance; parallel to MTP in chylomicron context
- [[atherosclerosis]] — downstream consequence of ApoB-particle overproduction

## Limitations and gaps

- `#gap/long-term-unknown` — Long-term hepatic safety of lomitapide (steatohepatitis, fibrosis progression) not established beyond Phase 3 trial duration (78 weeks total: 26-week efficacy phase + 52-week safety phase). Hepatic fat stabilized at week 26 but fibrosis endpoint was not assessed.
- `#gap/needs-human-replication` — Role of age-related changes in MTP expression/activity in postprandial lipemia of aging; mechanistic data only from animal or cell models.
- `#gap/no-mechanism` — PRAP1 interaction with MTP heterodimer: functional significance unknown.
- `#gap/unsourced` — Global ABL case count; registry-based estimate not located.
- `#gap/needs-canonical-id` — `genage-id:` not assigned (MTTP is not a primary aging gene in HAGR/GenAge; no entry expected). Field omitted intentionally.

## Footnotes

[^wetterau1985]: doi:10.1016/0009-3084(85)90068-4 · Wetterau JR, Zilversmit DB · *Chem Phys Lipids* 1985 · in-vitro (bovine liver microsomes) · foundational purification and characterization of MTP lipid-transfer activity; established substrate hierarchy (TG > CE >> PL) · archive: confirmed (not_oa)

[^wetterau1990pdi]: doi:10.1016/s0021-9258(19)38742-3 · Wetterau JR, Combs KA, Spinner SN, Joiner BJ · *J Biol Chem* 1990 · in-vitro (biochemical) · demonstrated PDI is an obligate component of the MTP complex · archive: confirmed (not_oa)

[^wetterau1992]: doi:10.1126/science.1439810 · Wetterau JR et al. · *Science* 1992 · observational (human ABL patients) · absence of MTP in intestinal biopsies of ABL patients; established MTP as the causative gene · archive: confirmed (not_oa)

[^sharp1993]: doi:10.1038/365065a0 · Sharp D et al. · *Nature* 1993 · molecular biology (MTTP cloning + ABL mutation analysis) · cloned MTTP; identified LOF mutations in ABL patients; established ABL as an MTTP-deficiency disease · archive: confirmed (not_oa)

[^ricci1995]: doi:10.1074/jbc.270.24.14281 · Ricci B et al. · *J Biol Chem* 1995 · in-vitro (mutagenesis) · 30-aa truncation of MTTP large subunit disrupts PDI interaction and abolishes lipid-transfer activity; structure-function insight · archive: download failed (HTTP 403); metadata confirmed via archive (hybrid OA) · #gap/no-fulltext-access

[^narcisi1995]: Narcisi TM et al. · *Am J Hum Genet* 1995 · PMID:8533758 · observational (human genetics) · characterized MTTP mutations in ABL families · DOI not confirmed via Crossref; cite by PMID until DOI resolved. #gap/needs-canonical-id

[^schonfeld1995]: doi:10.1146/annurev.nu.15.070195.000323 · Schonfeld G · *Annu Rev Nutr* 1995 · review · comprehensive review of hypobetalipoproteinemias; distinguishes APOB-mutation FHBL from MTTP-deficiency ABL · archive: confirmed (not_oa)

[^cuchel2013lancet]: doi:10.1016/s0140-6736(12)61731-0 · Cuchel M et al. · *Lancet* 2013 Jan 5; 381(9860):40–46 · n=29 enrolled, 23 completed 78 weeks · single-arm open-label phase 3 · model: HoFH adults (18+) on background LLT at 11 centers (USA, Canada, South Africa, Italy) · mean LDL-C −50% (95% CI −62, −39; p<0.001) at week 26; ApoB −49%; mean hepatic fat 1.0%→8.6% (NMRS, n=20) at week 26, stable to week 78; 10/29 ALT/AST >3× ULN (all managed without permanent discontinuation) · archive: confirmed (downloaded)
