---
type: protein
aliases: [Mitochondrial Open Reading Frame of the 12S rRNA-c, mitochondrial-derived peptide MOTS-c, MDP, MOTSC_HUMAN, MOTS c]
uniprot: A0A0C5B5G6
ncbi-gene: 4549   # MT-RNR1 parent locus only; MOTS-c peptide has no independent NCBI Gene entry
hgnc: HGNC:7470   # MT-RNR1 parent locus; no HGNC entry specific to the MOTS-c ORF
ensembl: null     # mtDNA-encoded; no Ensembl gene ID assigned to the MOTS-c ORF
genage-id: null   # no GenAge/HAGR entry for MT-RNR1 or MOTS-c as of 2026-05-09 #gap/needs-canonical-id
is-noncoding-rna: false   # MOTS-c is a peptide translated from an ORF within the MT-RNR1 rRNA transcript; see body
pathways: ["[[ampk]]", "[[folate-cycle]]", "[[insulin-igf1]]"]
hallmarks: ["[[mitochondrial-dysfunction]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 2   # aging-context tier: no FDA-approved MOTS-c therapeutic; exogenous peptide delivery investigated in rodent models; stability and delivery barriers unresolved; see body
gtex-aging-correlation: null   # MT-RNR1 is mitochondrially encoded; GTEx does not profile mtDNA transcript aging trajectories at the ORF level; plasma decline documented via ELISA assays in cohort studies — see body #gap/needs-canonical-id
mr-causal-evidence: partial   # m.1382A>C instrument available (rs111033358; Zempo 2021); MR framework not formally applied; mtDNA population-genetic confounds limit instrument validity; see body
caused-by: []
causes: ["[[ampk]]", "[[disabled-macroautophagy]]"]
verified: true
verified-date: 2026-05-09
verified-by: claude
verified-scope: "Lee 2015, Reynolds 2021, Miller 2022, Zempo 2021 primary-source PDFs verified end-to-end; D'Souza 2020 PDF newly downloaded and verified; UniProt A0A0C5B5G6 mutagenesis data re-checked. Corrections: (1) kinesio-genomic p-value corrected from p<0.01 to p<0.05 (p=0.014); (2) UniProt mutagenesis residue 13-16 description clarified — abolishes DNA-binding but does NOT affect nuclear localisation; (3) D'Souza 2020 n per group confirmed as n=26. Identity fields (MW 2174.6 Da, formula C101H152N28O22S2, sequence MRWQEMGYIFYPRKLR) confirmed via PubChem CID 146675088."
---

# MOTS-c (endogenous peptide)

A 16-amino-acid peptide encoded by a short open reading frame embedded within the mitochondrial **12S rRNA** gene (MT-RNR1) — making it one of the only biologically active peptides translated from the mitochondrial genome [^lee2015]. MOTS-c functions as a circulating "mitokine": it is released from skeletal muscle in response to exercise and metabolic stress, declines in plasma with aging, and promotes insulin sensitivity primarily through AMPK activation via folate-cycle disruption. It is the best-characterised member of the **mitochondrial-derived peptide (MDP)** class [^miller2022jci].

**Companion page:** [[../compounds/mots-c]] covers therapeutic delivery framing, preclinical intervention evidence, and clinical-stage assessment for exogenous MOTS-c administration. This page covers the endogenous biology: gene structure, expression regulation, aging trajectory, and population genetics.

---

## Identity

| Property | Value |
|---|---|
| UniProt | A0A0C5B5G6 (MOTSC_HUMAN; Swiss-Prot reviewed) |
| Parent gene | MT-RNR1 (NCBI Gene 4549; HGNC:7470) |
| Gene type | Mitochondrial rRNA gene harbouring a peptide-coding ORF |
| Sequence | MRWQEMGYIFYPRKLR |
| Length | 16 amino acids |
| Molecular weight | 2,174.6 Da (average; consistent with two Met residues → two sulfur atoms) |
| Molecular formula | C101H152N28O22S2 |
| PubChem CID | 146675088 (exogenous form — see compound page) |
| GenAge ID | null — no HAGR entry for MT-RNR1 or MOTS-c as of 2026-05-09 |

**Identity note on `ncbi-gene: 4549`:** NCBI Gene 4549 is the MT-RNR1 gene entry (the 12S rRNA locus). The MOTS-c peptide is translated from a small ORF within this rRNA transcript; it does not have its own Gene ID. The parent-locus NCBI ID is provided for database cross-linking; queries against it will retrieve the rRNA gene, not a protein record.

**Identity note on `is-noncoding-rna: false`:** MT-RNR1 is annotated as an rRNA gene (non-coding by canonical classification), but MOTS-c is a translated *peptide*. UniProt A0A0C5B5G6 has "evidence at protein level" — it is a real protein product. The rRNA gene is a secondary scaffold; the peptide ORF within it is protein-coding. `is-noncoding-rna: false` reflects the gene *product*, not the gene *class*.

---

## Encoding and biogenesis

MOTS-c belongs to the **mitochondrial-derived peptide (MDP)** class — small peptides translated from ORFs within mitochondrial transcripts [^miller2022jci]. The MT-RNR1 gene encodes the 12S ribosomal RNA, a structural component of the mitoribosome small subunit. A 16-codon ORF within this transcript produces MOTS-c.

Biogenesis is mechanistically unusual. The standard mitochondrial genetic code uses AGA/AGG as stop codons, which would produce tandem start/stop signals within the MOTS-c ORF. UniProt A0A0C5B5G6 documents this explicitly: "usage of the mitochondrial genetic code yields tandem start and stop codons so translation must occur in the cytoplasm." The mechanism — how an MT-RNR1 transcript exits the mitochondria to be translated on cytosolic ribosomes — is not resolved [^lee2015]. #gap/no-mechanism

**MDP class context:** At least 8 MDPs have documented bioactivity. MOTS-c and humanin (also MT-RNR1-derived) are the most-studied. SHLP1–6 are encoded within 16S rRNA (MT-RNR2). All known MDPs are <25 amino acids and circulate in plasma. Levels of humanin, MOTS-c, and SHLP2 are reduced in obese and diabetic states [^merry2020].

---

## Subcellular localisation and trafficking

| Compartment | Evidence |
|---|---|
| Secreted (plasma) | Circulating MOTS-c detected by ELISA; declines with age and metabolic disease [^zheng2023] |
| Mitochondrion | Site of primary expression; consistent with MT-RNR1 transcription |
| Nucleus | Translocates from cytoplasm to nucleus under metabolic stress [^reynolds2021] |

The nuclear translocation mechanism is not characterised. UniProt mutagenesis data indicate positions 11–14 are required for both nuclear localisation and DNA binding; positions 13–16 are required for DNA binding but not for nuclear localisation. MOTS-c has no classical nuclear localisation signal [^lee2015]. #gap/no-mechanism

---

## Mechanism of action

### Folate-methionine cycle inhibition → AICAR → AMPK

The primary metabolic mechanism, demonstrated by Lee et al. 2015 [^lee2015]:

1. MOTS-c enters cells (uptake receptor unknown) and inhibits the **folate-methionine cycle** in skeletal muscle.
2. Reduced methylene-tetrahydrofolate availability impairs de novo purine synthesis.
3. AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) accumulates — a natural AMP analogue and direct AMPK activator.
4. Elevated AICAR → [[ampk]] activation → metabolic reprogramming (GLUT4 translocation, autophagy induction, mTOR suppression, mitochondrial biogenesis).

This AMPK activation route is mechanistically distinct from: (a) AMP/ADP-sensing triggered by exercise-induced energy depletion; (b) complex-I inhibition used by metformin; and (c) direct AICAR supplementation. The folate-cycle input is the distinguishing mechanistic signature of MOTS-c.

**Verification caveat:** The folate-AICAR step was demonstrated primarily in cell culture (C2C12 myotubes) in Lee 2015. In vivo demonstration of the folate-cycle step (as opposed to alternative AMPK-activating paths) is less direct. #gap/needs-replication

### Nuclear transcriptional regulation

Under metabolic stress, MOTS-c translocates to the nucleus and regulates transcription of metabolic and proteostatic genes — including those involved in glucose transport (GLUT4), anti-inflammatory signalling (STAT3, IL-10), and stress response [^reynolds2021]. This places MOTS-c in a rare category of peptides that are both circulating hormones and intracellular transcription modulators.

---

## Exercise induction and aging trajectory

### Exercise-induced expression in humans

MOTS-c is classified as an **exerkine** — an endogenous factor released by exercise that transduces metabolic benefits to target tissues [^reynolds2021].

**Reynolds et al. 2021 (Nat Commun):** In n=10 healthy young male volunteers (24.5 ± 3.7 yr), a single bout of aerobic exercise induced an **11.9-fold increase in skeletal muscle MOTS-c** expression [^reynolds2021]. Plasma MOTS-c also increased. The authors additionally showed that MOTS-c translocates to the nucleus under metabolic stress and regulates gene programmes related to metabolic adaptation and proteostasis maintenance.

**Woodhead & Merry 2021 (BBA Gen Subj):** Acute high-intensity exercise increases both humanin and MOTS-c in muscle and plasma; MOTS-c treatment produces adaptations overlapping with those of physical activity [^woodhead2021].

Whether MOTS-c is causally responsible for a component of exercise's aging benefits (versus being a correlated marker) is not established. #gap/no-mechanism

### Age-related trajectory: plasma vs. muscle compartment dissociation

The relationship between aging and MOTS-c expression is compartment-dependent:

- **Plasma MOTS-c:** Declines with aging and in metabolic disease states (obesity, T2D) across multiple cohort samples [^zheng2023; ^merry2020]. This decline is the basis for the "MOTS-c as aging biomarker" framing.
- **Skeletal muscle MOTS-c:** Paradoxically, D'Souza et al. 2020 found muscle MOTS-c mRNA expression was ~1.5-fold **higher** in older (70–81 yr) and middle-aged (45–55 yr) men compared to young (18–30 yr) participants (n=26 per group; observational cross-sectional; healthy sedentary-to-recreationally-active males free from cardiovascular or metabolic disease; plasma MOTS-c simultaneously declined by ~11–21%) [^dsouza2020]. This increase associated with slow-type (type I) myofibre composition, which increases with age. The authors propose that muscle upregulation may represent a compensatory response to age-related metabolic dysfunction, with inadequate secretion into plasma, or that compartment-specific processing differs with age.

This plasma/muscle dissociation is an unresolved mechanistic gap and complicates simple "MOTS-c declines with aging" narratives. #gap/contradictory-evidence

---

## Aging and hallmark connections

### Mitochondrial dysfunction hallmark

MOTS-c expression originates in the mitochondrial genome. Aging-associated mtDNA mutation accumulation and declining mitochondrial biogenesis (reduced TFAM, reduced PGC-1α activity) impair mitochondrial transcription, plausibly reducing MOTS-c output. MOTS-c levels may therefore serve as a proxy for mitochondrial transcriptional health — declining with the [[mitochondrial-dysfunction]] hallmark even before frank mitochondrial dysfunction is measurable via standard assays.

### Deregulated nutrient sensing hallmark

MOTS-c activates [[ampk]] — the canonical energy sensor that is dysregulated with aging (reduced AMPKα protein, blunted activation under energy stress). Via AMPK, MOTS-c feeds into the [[deregulated-nutrient-sensing]] hallmark axis:
- AMPK suppresses mTORC1 (anti-anabolic / pro-autophagy)
- AMPK activates ULK1 → [[disabled-macroautophagy]] reversal
- AMPK promotes mitochondrial biogenesis (PGC-1α phosphorylation)
- AMPK improves insulin sensitivity (GLUT4 translocation)

The folate-AICAR-AMPK mechanism is orthogonal to canonical AMPK activators (metformin via complex I; exercise via AMP/ADP), raising the theoretical possibility of additive effects in combination strategies, though no combination study has been conducted. #gap/needs-replication

---

## Longevity genetics: the m.1382A>C polymorphism

A natural mtDNA single-nucleotide variant (m.1382A>C, rs111033358), found in East Asian populations (haplogroup D4b2), encodes a K14Q amino-acid substitution at position 14 of MOTS-c. This K14Q variant shows reduced insulin-sensitising efficacy in vitro and in vivo [^zempo2021].

**Population findings (Zempo 2021, n=27,527):**
- Pooled meta-analysis across three Japanese cohorts (J-MICC, MEC, TMM): C-allele males had significantly higher T2D prevalence (OR 1.34, 95% CI 1.14–1.54; p<0.01); no association in females.
- The male effect was driven by sedentary men: in J-MICC, C-allele men in the lowest physical-activity tertile had 65% greater T2D prevalence than A-allele counterparts (A-allele 11.2% vs C-allele 18.5%; p=0.014). Higher physical activity negated the difference — a kinesio-genomic interaction.
- **Centenarian analysis (n=736 centenarians vs controls):** C-allele frequency 7.7% centenarians vs 7.5% controls — **no enrichment**. Authors concluded the variant "is unlikely to be involved with exceptional longevity."

This reverses a prior small-sample report (n=96 centenarians) that had suggested C-allele enrichment. The Zempo 2021 expanded cohort is the authoritative source [^zempo2021]. #gap/contradictory-evidence (earlier n=96 claim superseded by n=736+27,527 data)

**MR-causal-evidence rationale:** The m.1382A>C variant provides an instrument for the MOTS-c K14Q substitution, but formal Mendelian randomization has not been published. Additionally, mtDNA population genetics are subject to selection confounds and LD with other mtDNA variants in haplogroup D4b2, limiting instrument validity. `mr-causal-evidence: partial` (instrument available; formal MR study pending; mtDNA LD confound unresolved).

---

## Key PTMs and functional residues

No post-translational modifications of endogenous MOTS-c are documented in UniProt A0A0C5B5G6. Mutagenesis studies identify critical regions:
- **Positions 11–14** — required for both nuclear localisation and DNA binding (abolishing these four residues eliminates both activities; UniProt mutagenesis evidence)
- **Positions 13–16** — required for DNA binding but NOT for nuclear localisation (abolishing these four residues abolishes DNA-binding activity while nuclear translocation is preserved; UniProt mutagenesis evidence)
- **Position 14 (Lys → Gln, K14Q)** — natural m.1382A>C variant; reduces insulin-sensitising activity in vitro and in vivo [^zempo2021]

#gap/unsourced — No systematic PTM mapping of endogenous MOTS-c has been published; the mutagenesis data above comes from recombinant/synthetic peptide experiments.

---

## Limitations and knowledge gaps

- #gap/no-mechanism — Mechanism of cellular uptake of secreted MOTS-c is unknown (no receptor identified).
- #gap/no-mechanism — Nuclear translocation mechanism is uncharacterised; no classical NLS; specific DNA-binding targets not catalogued genome-wide.
- #gap/no-mechanism — How MT-RNR1 transcript exits mitochondria to be translated on cytosolic ribosomes is unresolved (UniProt A0A0C5B5G6 explicitly flags this).
- #gap/needs-replication — Folate-AICAR mechanism demonstrated primarily in cell culture; in vivo confirmation of folate-cycle step needs independent replication.
- #gap/contradictory-evidence — Plasma MOTS-c declines with age, but skeletal muscle MOTS-c mRNA increases ~1.5-fold in older men [^dsouza2020]; compartment-specific regulation mechanism unknown.
- #gap/contradictory-evidence — Earlier centenarian-enrichment claim (n=96) superseded by Zempo 2021 null finding (n=736). The claim that m.1382A>C associates with longevity should be treated as falsified in that population.
- #gap/needs-canonical-id — No GenAge/HAGR entry for MT-RNR1 or MOTS-c as of 2026-05-09; no Ensembl ORF-level ID.
- #gap/needs-human-replication — All interventional evidence for exogenous MOTS-c is rodent or in vitro; see [[../compounds/mots-c]] for clinical-stage assessment.

---

## Cross-references

- [[../compounds/mots-c]] — therapeutic delivery, preclinical intervention evidence, clinical-stage assessment (R36)
- [[ampk]] — primary downstream pathway; MOTS-c → AICAR → AMPK activation
- [[mitochondrial-dysfunction]] — hallmark; MOTS-c expression reflects mtDNA transcriptional capacity
- [[deregulated-nutrient-sensing]] — hallmark; MOTS-c → AMPK → nutrient-sensing normalisation
- [[insulin-igf1]] — intersecting pathway; MOTS-c improves insulin sensitivity via AMPK
- [[disabled-macroautophagy]] — downstream hallmark; AMPK activation de-represses autophagy (ULK1 phosphorylation)
- [[folate-cycle]] — immediate upstream mechanism (implicit stub — page does not exist yet)
- [[tfam]] — mitochondrial transcription regulator; upstream of MT-RNR1 expression
- [[pgc-1alpha]] — regulates mitochondrial biogenesis; indirectly upstream of MOTS-c output

**Implicit stubs created by this page:**
- `[[folate-cycle]]` — referenced as MOTS-c's primary mechanism target; no wiki page exists

---

## Footnotes

[^lee2015]: doi:10.1016/j.cmet.2015.02.009 · Lee C, Zeng J, Drew BG, Sallam T, Martin-Montalvo A, Wan J, Kim SJ, Mehta H, Hevener AL, de Cabo R, Cohen P · *Cell Metabolism* 2015;21(3):443–454 · in-vivo (mouse) + in-vitro · model: CD-1 mice (HFD) and C57BL/6J mice (aged, 12 months); C2C12 myotubes · Discovery paper: identified 16-aa MOTS-c from MT-RNR1 ORF; demonstrated folate-cycle inhibition → AICAR → AMPK mechanism; prevented diet-induced obesity and reversed age-dependent insulin resistance · local PDF available in a local paper archive (692 citations; impact percentile 100)

[^reynolds2021]: doi:10.1038/s41467-020-20790-0 · Reynolds JC, Lai RW, Woodhead JST, Joly JH, Mitchell CJ, Cameron-Smith D, Lu R, Cohen P, Graham NA, Benayoun BA, Merry TL, Lee C · *Nature Communications* 2021;12(1):470 · in-vivo (mouse) + human observational (exercise) · n=10 (human exercise cohort; healthy young males 24.5 ± 3.7 yr); n=10–19 per group (aged C57BL/6N mice) · 11.9-fold muscle MOTS-c induction in humans post-exercise; nuclear translocation under metabolic stress; late-life treatment (15 mg/kg/day IP 3×/week, ~24 mo C57BL/6N) improved grip strength, gait, walking capacity; lifespan trend ns · local PDF available in a local paper archive

[^miller2022jci]: doi:10.1172/JCI158449 · Miller B, Kim SJ, Kumagai H, Mehta HH, Xiang W, Liu J, Bar-Shai A, Basisty N, Schilling B, Cohen P · *Journal of Clinical Investigation* 2022;132(8):e158449 · review · n/a · Comprehensive review of 8 MDPs as metabolic signal transducers; MOTS-c, humanin, SHLP1–6; aging decline and disease associations · local PDF available in a local paper archive (91 citations; fwci 22.4)

[^zempo2021]: doi:10.18632/aging.202529 · Zempo H, Kim SJ, Fuku N, et al. (27 authors) · *Aging* 2021;13(2):1692–1703 · observational (3 Japanese cohorts) + functional · n=27,527 total (J-MICC n=11,852, MEC n=3,387, TMM n=12,288) · m.1382A>C K14Q variant: pooled OR 1.34 (95% CI 1.14–1.54) for T2D in males (pooled n=11,244 men); kinesio-genomic interaction: C-allele sedentary men T2D prevalence 18.5% vs A-allele 11.2%, p=0.014 (p<0.05); centenarian cohort n=736 found no enrichment (C-allele 7.7% vs 7.5% controls); earlier n=96 centenarian claim superseded · local PDF verified in a local paper archive

[^merry2020]: doi:10.1152/ajpendo.00249.2020 · Merry TL, Chan A, Woodhead JST, Reynolds JC, Kumagai H, Kim SJ, Lee C · *American Journal of Physiology–Endocrinology and Metabolism* 2020;319(4):E541–E548 · review · n/a · Eight MDPs; circulating MOTS-c, humanin, SHLP2 reduced in obesity/diabetes; exercise induction · PMID 32776825

[^dsouza2020]: doi:10.18632/aging.102944 · D'Souza RF, Woodhead JST, Hedges CP, Zeng N, Wan J, Kumagai H, Lee C, Cohen P, Cameron-Smith D, Mitchell CJ, Merry TL · *Aging* 2020;12(6):5244–5261 · observational cross-sectional · n=26 per group · healthy males (sedentary to recreationally active; free from cardiovascular or metabolic disease; no medications): young (18–30 yr), middle-aged (45–55 yr), older (70–81 yr, two cohorts) · Skeletal muscle MOTS-c protein ~1.5-fold higher in older and middle-aged vs young; plasma MOTS-c declined with age (~11% middle-aged; ~21% older); muscle increase associated with type-I slow-twitch myofibre composition (MYH7); plasma and muscle MOTS-c dissociated in middle-aged and older groups · PMID 32182209; PDF verified in a local paper archive 2026-05-09

[^woodhead2021]: doi:10.1016/j.bbagen.2021.130011 · Woodhead JST, Merry TL · *Biochimica et Biophysica Acta – General Subjects* 2021 · review · Acute high-intensity exercise increases humanin and MOTS-c in muscle and plasma; MOTS-c treatment recapitulates physical-activity adaptations · PMID 34520826

[^zheng2023]: doi:10.3389/fendo.2023.1120533 · Zheng Y, Wei Z, Wang T · *Frontiers in Endocrinology* 2023 · review · n/a · Plasma MOTS-c declines with aging; exercise-mimetic and metabolic protection roles; review of therapeutic potential · PMID 36761202
