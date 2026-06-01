---
type: protein
aliases: [SMPD1, ASMase, sphingomyelin phosphodiesterase 1, acid sphingomyelinase, ASM]
uniprot: P17405
ncbi-gene: 6609
hgnc: 11120
ensembl: ENSG00000166311
genage-id: null
pathways: ["[[sphingolipid-metabolism]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[cellular-senescence]]", "[[chronic-inflammation]]"]
sens-categories: []
complex-subunits: []
is-noncoding-rna: false
druggability-tier: 1
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-06
verified-by: claude
verified-scope: "Identity fields (UniProt P17405, NCBI Gene 6609, HGNC 11120, Ensembl ENSG00000166311, EC 3.1.4.12) confirmed against UniProt REST API. Enzyme function, subcellular locations, and disease associations confirmed against UniProt P17405. Olipudase alfa FDA approval year (2022) confirmed via FDA API (BLA761261); indication broadened to type A/B and type B per EMA EPAR. Kornhuber 2008 mechanism description confirmed via PubMed abstract (PMID 18027916); footnote compound count corrected from 64 to 26 new FIASMAs per paper abstract. Kornhuber 2008 PDF is closed-access (not_oa) — full-text not readable; footnote count correction made from abstract. Ceramide biomarker claims and aging-trajectory quantitative claims unverified (no primary source in wiki; tagged below). Senolytic-lysosomal hypothesis correctly tagged as preliminary/speculative."
---

# Acid Sphingomyelinase (ASM / SMPD1)

A lysosomal hydrolase that catalyzes the hydrolysis of sphingomyelin to ceramide and phosphocholine within the acidic environment of lysosomes. Encoded by the *SMPD1* gene; the same gene also produces a secreted form (S-ASM) via differential trafficking. Deficiency causes **Niemann-Pick disease types A and B** (ASMD), making this protein clinically established. **In aging biology**, ASM is increasingly recognized as a node connecting sphingolipid metabolism, lysosomal function, cellular senescence, and the inflammatory response — and as a druggable target via the **FIASMA class** of indirect inhibitors that includes paroxetine, fluoxetine, sertraline, and other SSRIs.

## Identity

- **UniProt:** P17405
- **NCBI Gene ID:** 6609
- **HGNC:** 11120 (SMPD1)
- **Ensembl:** ENSG00000166311
- **EC:** 3.1.4.12
- **Subcellular location:** lysosome (L-ASM, acidic compartment) and secreted form (S-ASM, neutral pH active)
- **Length:** 631 aa (full-length precursor); processing yields mature L-ASM
- **Disease association (germline):** Niemann-Pick disease types A (severe, neurological, infantile-lethal) and B (milder, visceral)

## Function

ASM catalyzes the hydrolytic cleavage of **sphingomyelin** into **ceramide + phosphocholine**. This is the primary intracellular route for ceramide generation from membrane sphingomyelin pools (vs. *de novo* synthesis from serine + palmitoyl-CoA via SPT, or salvage from sphingosine).

**Two functionally distinct forms** from the same gene:
- **Lysosomal ASM (L-ASM)** — acidic-pH-optimal; lysosomal turnover of sphingomyelin; required for lysosomal function and cellular ceramide homeostasis
- **Secreted ASM (S-ASM)** — released into extracellular space and circulating plasma; neutral-pH-active variant (zinc-dependent); generates ceramide on outer plasma membrane and in extracellular vesicles

Both forms are encoded by *SMPD1*; differential glycosylation and trafficking yield the two functional pools.

## Aging-relevant biology

### Ceramide accumulation in aged tissues

Ceramide — the direct product of ASM activity — is a **bioactive sphingolipid** that:
- Acts as a second messenger for stress signaling (apoptosis, senescence, inflammation)
- Forms ceramide-rich platforms on cell membranes that cluster receptors (TNF-R1, FAS, etc.) and amplify pro-apoptotic signaling
- Accumulates with age in many tissues including brain, vascular endothelium, and skeletal muscle
- Drives mitochondrial dysfunction at high concentrations
- Promotes senescence-associated secretory phenotype ([[sasp]]) in some models

Aged individuals show increased plasma ceramide species (C16, C18, C24:1) — these are emerging as plasma biomarkers of cardiovascular risk independent of cholesterol. The Mayo Clinic Ceramide Score (Cer16, Cer18, Cer24:1, Cer24:0) is one validated panel. #gap/unsourced — no primary source ingested; verify against the Laaksonen et al. 2016 Mayo ceramide score literature before relying on specific species composition.

### S-ASM as biomarker of inflammation and CV disease

Plasma secreted-ASM activity is **elevated in:**
- Coronary artery disease
- Heart failure
- Type 2 diabetes
- Sepsis and acute critical illness
- Chronic stress (cortisol-driven)
- Aging (gradual increase)

S-ASM activity may be both a marker AND a driver of these conditions — it generates extracellular ceramide that participates in vascular inflammation and endothelial dysfunction.

### Lysosomal function

L-ASM is essential for normal lysosomal membrane composition. Reduced L-ASM activity (whether genetic in NPD-B carriers or pharmacological via FIASMAs) leads to:
- Sphingomyelin accumulation in lysosomes
- Altered lysosomal pH and membrane stability
- Modulated autophagy flux (effects context-dependent)
- Lysosomal storage disease in homozygous deficient states

In aging, lysosomal dysfunction is a feature of [[loss-of-proteostasis]] and [[cellular-senescence]] (senescent cells have enlarged dysfunctional lysosomes — the basis of the SA-β-gal stain at pH 6.0). FIASMAs preferentially accumulate in dysfunctional lysosomes — a hypothetical mechanism for the **preliminary senolytic-like activity** observed in some FIASMA screening studies. `#gap/needs-replication`

### Connection to cellular senescence

Several mechanistic links:
- Ceramide accumulation drives senescence in some cell models (especially stress-induced and oxidative)
- ASM activity is required for some forms of stress-induced senescence
- Lysosomal disruption preferentially affects senescent cells (basis of FIASMA senolytic hypothesis)
- Senescent cells exhibit enlarged dysfunctional lysosomes, the same compartment where FIASMAs accumulate

This makes ASM an interesting candidate target for senolytic-adjacent strategies, though the FIASMA approach has not been validated as a clinical senolytic strategy.

## Druggability

**Tier 1** — clinical-stage drugs targeting ASM exist, both directly and via FIASMA mechanism:

### Direct targeting (enzyme replacement)
- **Olipudase alfa (Xenpozyme®)** — recombinant human ASM enzyme replacement therapy; FDA-approved August 2022 (BLA761261) for non-CNS manifestations of ASMD in patients with type A/B or type B. The first approved therapy for ASMD. Drug cannot cross the blood-brain barrier, hence the non-CNS restriction.

### Indirect inhibition (FIASMA class)

The **FIASMA** (Functional Inhibitor of Acid SphingoMyelinase) class comprises weakly basic, lipophilic compounds (cationic amphiphilic substances) that accumulate in lysosomes and functionally inhibit ASM by inducing detachment from the inner lysosomal membrane with subsequent inactivation (rather than direct active-site binding) [^kornhuber2008]. This class includes many widely-prescribed psychotropic and other drugs:

**Aging-context tier-1 rationale.** Olipudase alfa (Xenpozyme) is FDA-approved (2022) for non-CNS manifestations of Niemann-Pick disease (ASMD), not for an aging-rejuvenation indication. The aging-context tier-1 designation reflects the senescence-adjacent biology engaged via FIASMA-class indirect inhibition (lysosomal ceramide accumulation, SASP modulation, and the preliminary senolytic-like activity hypothesis) plus the broad off-target FIASMA activity of FDA-approved psychotropics (paroxetine, fluoxetine, sertraline). Strict Open Targets `Approved Drug = true` for an aging indication does not apply.

| Drug class | Examples |
|---|---|
| SSRIs | [[paroxetine]], fluoxetine, sertraline (latter two: planned pages) |
| Tricyclic antidepressants | amitriptyline, desipramine, imipramine |
| Antipsychotics | chlorpromazine, perphenazine |
| Antimalarials | chloroquine, hydroxychloroquine |
| Antihistamines | promethazine |

The therapeutic implications for aging biology are an active research area:
- Some retrospective cohort studies suggest FIASMA users have favorable outcomes in COVID-19, certain cancers, and possibly cardiovascular disease — but **selection bias is a major concern** in these analyses
- Preclinical evidence supports FIASMA → reduced ceramide → reduced inflammation in some models
- Direct geroprotective claims for FIASMAs in humans remain **hypothetical**. `#gap/needs-human-replication`

## Cross-references

- **Compounds:**
  - [[paroxetine]] — FIASMA; SSRI
  - Fluoxetine, sertraline, amitriptyline (planned pages)
- **Hallmarks:**
  - [[loss-of-proteostasis]] — lysosomal function and sphingolipid balance
  - [[cellular-senescence]] — ceramide drives stress-induced senescence; lysosomal disruption in senescent cells
  - [[chronic-inflammation]] — ceramide as inflammatory signaling molecule
- **Pathways:**
  - [[sphingolipid-metabolism]] (planned stub — page does not exist yet; wikilink retained as forward reference)

## Limitations and gaps

- **No published large-cohort human longitudinal study** linking FIASMA exposure duration to aging biomarker trajectories. `#gap/needs-human-replication`
- **FIASMA → senolytic** hypothesis is mechanistically attractive but at preliminary in vitro evidence stage. `#gap/needs-replication`
- **S-ASM as aging biomarker** — emerging area; validated panels exist for CV disease but not for general "aging trajectory."
- **Tissue-specific aging effects** of ASM are heterogeneous and not yet systematically mapped. `#gap/no-mechanism`
- **Olipudase alfa and aging** — no studies have examined whether long-term enzyme replacement in NPD-B patients produces aging-relevant downstream effects.

## Footnotes

[^kornhuber2008]: doi:10.1021/jm070524a · Kornhuber J, Tripal P, Reichel M, Terfloth L, Bleich S, Wiltfang J, Gulbins E. (2008) "Identification of new functional inhibitors of acid sphingomyelinase using a structure-property-activity relation model." *J Med Chem* 51(2):219–37 · in-vitro · SPAR model (structure-property-activity relation); characterized 26 new functional ASM inhibitors including paroxetine, fluoxetine, sertraline, doxepine, nortriptyline, maprotiline; mechanism: detachment of ASM from inner lysosomal membranes → inactivation · PDF: closed-access (not_oa) — abstract verified via PubMed PMID 18027916

