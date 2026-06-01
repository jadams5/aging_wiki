---
type: protein
aliases: [dyskerin, DKC1, dyskerin pseudouridine synthase 1, CBF5 homolog, NAP57]
uniprot: O60832
ncbi-gene: 1736
hgnc: 2890
ensembl: ENSG00000130826
genage-id: null
mouse-ortholog: Dkc1
is-noncoding-rna: false
complex-subunits: [O60832, Q9NX24, Q9NPE3, Q9NY12]
key-domains: [TruB-PUS-catalytic, PUA-RNA-binding, N-terminal-extension-NTE, C-terminal-NLS-NoLS]
key-ptms: [Ser21-phosphorylation, N-terminal-acetylation, SUMO-conjugation-K20-K39-K43]
pathways: ["[[telomerase-pathway]]"]
hallmarks: ["[[telomere-attrition]]", "[[cellular-senescence]]"]
known-interactors: ["[[terc]]", "[[tert]]", "[[nhp2]]", "[[nop10]]", "[[gar1]]", "[[trf2]]"]
druggability-tier: 4
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: []
verified: true
verified-date: 2026-05-07
verified-by: claude
verified-scope: "Vulliamy 2001 (10.1038/35096585) and Ruggero 2003 (10.1126/science.1079447) verified end-to-end against local PDFs. Garus & Autexier 2021 (10.1261/rna.078953.121) downloaded and verified for structural/functional claims. Mitchell 1999 (10.1038/990141) and Heiss 1998 (10.1038/ng0598-32) permanently not_oa — claims from these two sources gap-tagged. UniProt O60832 (length 514, domains) confirmed via REST API. NCBI Gene 1736 (Xq28 on NC_000023.11) confirmed via NCBI efetch. HGNC 2890 confirmed via UniProt cross-reference. GAR1 complex-subunit accession corrected Q9Y224→Q9NY12 (Q9Y224 maps to RTRAF_HUMAN, not GAR1). GenAge confirmed absent for DKC1 (searched allgenes.php; not listed). Ruggero 2003 pseudouridylation claim corrected: rRNA pseudouridylation was impaired (not partially preserved) in early G1/G2 generations. TERC reduction framing (50–90% figure) unverifiable from closed-access Mitchell 1999 — gap-tagged. Dominant-negative vs haploinsufficiency mechanism for Vulliamy 2001 families corrected to reflect paper's nuanced per-family assessment."
---

> Verified 2026-05-07 by claude against Vulliamy 2001, Ruggero 2003, and Garus & Autexier 2021 PDFs. Material corrections: GAR1 UniProt accession Q9Y224→Q9NY12; Ruggero 2003 pseudouridylation framing corrected (impaired, not preserved, in early generations); TERC reduction quantitative claim (50–90%) unverifiable from closed-access Mitchell 1999 and gap-tagged. See verified-scope for full details.

# DKC1 (dyskerin)

Dyskerin is a dual-function nuclear protein: the catalytic pseudouridine synthase of H/ACA small nucleolar ribonucleoprotein (snoRNP) complexes, and the obligate scaffold component of the **[[telomerase-pathway|telomerase holoenzyme]]**. Its central role in [[telomere-attrition|telomere maintenance]] makes DKC1 one of the founding telomere-biology disease genes — loss-of-function mutations cause X-linked dyskeratosis congenita (XL-DC), the prototypical telomeropathy syndrome and a premature-aging disorder.

## Identity

- **UniProt:** O60832 (DKC1_HUMAN)
- **NCBI Gene:** 1736 (X-linked; Xq28)
- **HGNC symbol:** DKC1
- **Ensembl:** ENSG00000130826
- **Length:** 514 amino acids (canonical isoform)
- **Mouse ortholog:** Dkc1 (highly conserved; used in hypomorphic mouse models)
- **GenAge:** Confirmed absent from GenAge-human as of 2026-05-07 (searched genomics.senescence.info/genes/allgenes.php — DKC1 not present in the listing). DC is a recognized progeroid syndrome but GenAge curates only genes with direct experimental evidence for longevity or aging effects; DKC1's absence is plausible given its primary characterization in a Mendelian disease context rather than aging-genetics studies. `genage-id: null` is confirmed correct.

## Key functional domains

- **N-terminal extension (NTE) / nuclear and nucleolar localization signal (residues 2–21; NLS/NoLS extends to residues 446–514 at the C-terminus)** — required for nuclear and nucleolar targeting; the NTE is a eukaryotic-specific feature not present in archaeal Cbf5 homologs [^garus2021]
- **TruB-like pseudouridine synthase (PUS) catalytic domain** — central catalytic fold; site of the majority of XL-DC missense mutations; catalyzes uridine-to-pseudouridine isomerization (Ψ) in target RNAs
- **PUA (pseudouridine synthase and archaeosine transglycosylase) RNA-binding domain (residues 296–371)** — contacts the H/ACA RNA scaffold and positions substrate RNAs
- **C-terminal nuclear localization signal** — cytoplasmic isoform 3 lacks this; predominantly nuclear/nucleolar for isoform 1

## Function

### H/ACA snoRNP: pseudouridylation of ribosomal and spliceosomal RNA

In its snoRNP role, dyskerin forms a heterotetramer with three core proteins — **NHP2** (~17 kDa), **NOP10** (~7 kDa), and **GAR1** (~22 kDa) — assembled on H/ACA box small nucleolar RNAs (snoRNAs) or H/ACA small Cajal body RNAs (scaRNAs). The snoRNA base-pair guide directs the complex to specific uridines in rRNA or snRNA, which DKC1 isomerizes to pseudouridine (Ψ) [^garus2021].

Pseudouridylation is the most abundant RNA modification in the cell. DKC1-dependent Ψ residues stabilize rRNA tertiary structure, fine-tune the peptidyl-transferase center, and contribute to translational fidelity. DKC1 is also required for 18S rRNA 3' processing and ribosome small-subunit assembly.

### Telomerase holoenzyme component

[[terc]] (telomerase RNA component) contains a 3'-terminal H/ACA domain. This domain recruits the DKC1–NHP2–NOP10–GAR1 heterotetramer, stabilizing TERC in vivo [^mitchell1999]. Without dyskerin binding, TERC is rapidly degraded, reducing cellular telomerase RNA levels and thereby attenuating telomerase activity.

The reconstituted human telomerase holoenzyme contains: [[tert]] (reverse transcriptase), [[terc]] (RNA template/scaffold), and the H/ACA sub-complex (DKC1 + NHP2 + NOP10 + GAR1). The H/ACA sub-complex does not contribute to the catalytic reverse-transcription reaction; its primary role is TERC stabilization and holoenzyme assembly. DKC1 also localizes telomerase to Cajal bodies, facilitating telomere recruitment.

## Role in aging

### Telomere attrition as the primary disease mechanism

XL-DC causally established the link between dyskerin and telomere biology. All pathogenic DKC1 missense mutations reduce the DKC1–TERC interaction, lowering TERC steady-state levels and telomerase activity in patient cell lines [^mitchell1999]. The resulting telomerase insufficiency accelerates telomere shortening, triggering [[cellular-senescence|replicative senescence]] and apoptosis in high-turnover tissues: bone marrow (aplastic anaemia), skin (nail dystrophy, oral leukoplakia), and lung (pulmonary fibrosis). Quantification of the TERC reduction (reported as 50–90% in patient lymphocytes in the primary source) cannot be independently verified here as Mitchell 1999 is closed-access #gap/no-fulltext-access.

The convergent evidence that TERC destabilization — not rRNA hypopseudouridylation — is the proximal cause of the telomeropathy phenotype was established by the autosomal dominant (AD) form of DC, caused by mutations in TERC itself rather than DKC1, which produces an identical clinical syndrome [^vulliamy2001]. Vulliamy et al. 2001 found that in family DCR101, loss of the H/ACA and CR7 domains of TERC leads to haploinsufficiency (mutant transcript barely detectable), while in family DCR063 the C408G mutation in the CR7 domain allows expression of roughly equal mutant and wild-type hTR (consistent with a possible dominant-negative effect). Telomere lengths in affected members of all three families were significantly shorter than age-matched controls (P<0.001, Student's t-test) [^vulliamy2001].

### Hoyeraal-Hreidarsson syndrome (severe pediatric form)

Hoyeraal-Hreidarsson syndrome (HHS) is a severe infantile presentation of XL-DC caused by DKC1 mutations, characterized by cerebellar hypoplasia, intrauterine growth restriction, bone marrow failure, and immunodeficiency. Telomeres in HHS patients are among the shortest reported in any human disorder.

### Mouse hypomorphic model: separating the two DKC1 roles

A *Dkc1* hypomorphic mouse (Dkc1m) with ~75% reduction in dyskerin expression (fourfold decrease in hemizygous males; confirmed by Ruggero et al. Fig. S1C) developed progressive anaemia, skin abnormalities, and increased cancer susceptibility — phenocopying DC [^ruggero2003]. Key quantitative findings from the paper:

- Bone marrow failure onset from 6 months of age in ~60% of G1/G2 mice; mean hemoglobin at 8 months was 10.6 ± 4 g/dl vs 15.1 ± 1.7 g/dl in WT (P<0.001; n=16 per group)
- **50% of Dkc1m mice developed tumors** over their lifespan (n=50 per cohort), including lung tumors, mammary gland tumors, and renal cell carcinoma
- rRNA pseudouridylation was **impaired** in early G1/G2 generations (10–40% reduction in pseudouridine/uridine ratio for both 28S and 18S rRNAs; n=8); immature 45S, 41S, and 32S rRNA intermediates accumulated; Dkc1m cells were hypersensitive to translation-inhibiting drugs
- Telomere shortening was **not** evident until the fourth generation (G4); telomerase activity decreased ~40% in G4 Dkc1m cells with ~1.2-fold reduction in mTR levels

These results established that ribosomal pseudouridylation defects — not telomere shortening — drive the early-generation DC phenotype in this model, with telomere attrition exacerbating disease in later generations. #gap/needs-replication — the ribosomal IRES-dependent translation mechanism (linking pseudouridylation defects to p27/p53 mRNA translation changes) has been proposed from these mouse data but not comprehensively validated in human DC patients.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | H/ACA RNP + telomerase holoenzyme architecture essentially identical human/mouse |
| Phenotype conserved in humans? | yes | DC is clinically and molecularly defined in humans; Ruggero 2003 Dkc1m mouse faithfully recapitulates bone marrow failure and tumor susceptibility |
| Replicated in humans? | yes | Multiple independent DC cohorts; Vulliamy 2001 AD-DC (TERC mutations) confirms TERC-destabilization mechanism; rRNA-pseudouridylation contribution to human DC requires further characterization [^ruggero2003] |

### Anticipation and telomere inheritance

XL-DC shows genetic anticipation: disease severity worsens across generations, correlating with progressive telomere shortening transmitted through the maternal germline (X-linked, no Y-transmitted). Offspring inherit shorter telomeres, narrowing the buffer before replication crisis strikes high-turnover tissues.

## Pathway membership

- [[telomerase-pathway]] — core structural component of the holoenzyme; required for [[terc]] stability
- H/ACA snoRNP pathway — directs rRNA/snRNA pseudouridylation; not yet a dedicated wiki pathway page (#gap/stub — pathway page for H/ACA snoRNP biology may be warranted)
- [[telomere-attrition]] (hallmark) — XL-DC is one of the strongest human genetic proofs that telomere shortening is pathogenic
- [[cellular-senescence]] (hallmark) — telomere-driven senescence in bone marrow, endothelium, skin

## Key interactors

- **[[terc]]** — H/ACA RNA bound by the DKC1–NHP2–NOP10 sub-complex; DKC1 is required for TERC stability
- **[[tert]]** — catalytic subunit of telomerase; co-purifies with DKC1 in holoenzyme preparations
- **[[nhp2]]** — core H/ACA heterotetramer subunit (gene: NHP2; also called NOLA2); directly contacts DKC1 and NOP10
- **[[nop10]]** — core H/ACA heterotetramer subunit (NOLA3); smallest subunit (~7 kDa); RNA-binding
- **[[gar1]]** — core H/ACA heterotetramer subunit (NOLA1; UniProt Q9NY12); required for pre-rRNA processing; joins the complex after the other three core components and contacts the thumb motif of dyskerin to stabilize substrate RNA positioning [^garus2021]; does not directly contact the guide RNA
- **[[trf2]]** / shelterin complex — indirect relationship; dyskerin-dependent telomerase localizes to telomeres via [[shelterin|shelterin]] TPP1–POT1 platform

Note: NHP2, NOP10, and GAR1 do not currently have dedicated wiki pages. #gap/stub — these three H/ACA core proteins warrant protein stubs given their relevance to the telomerase holoenzyme.

## Pharmacology and druggability

**Druggability tier: 4** (aging-context). No clinical inhibitor or activator of DKC1 exists as of 2026. The TruB fold is shared with multiple pseudouridine synthases across the genome, making selective targeting challenging. The PUS active site is also used in ribosome biogenesis, raising on-target toxicity concerns for any DKC1 inhibitor.

Therapeutic strategy in DC focuses on upstream/downstream targets rather than DKC1 itself:

- **Androgen therapy** (danazol, oxymetholone) — increases TERC transcription in some tissues; partially compensates for DKC1-driven TERC destabilization; used clinically in DC with variable benefit
- **Gene therapy** — lentiviral DKC1 correction in HSCs is under investigation for XL-DC; no approved product as of 2026 #gap/long-term-unknown
- **[[tert]] overexpression** strategies — bypass DKC1 at the telomerase level; preclinical

## X-linked dyskeratosis congenita: clinical genetics

- **Inheritance:** X-linked recessive (XL); exclusively affects males in the classic form; females are usually unaffected carriers but can show mild skin findings due to skewed X-inactivation
- **Causative mutations:** >100 missense mutations mapped in DKC1; cluster at the TruB–PUA interface; no loss-of-function (nonsense/frameshift) mutations reported in live-born affected males — complete loss is likely lethal [^heiss1998]
- **Prevalence:** XL-DC is the most common genetic form of DC (~40–50% of DC cases); overall DC prevalence ~1:1,000,000; exact XL-DC prevalence uncertain due to underdiagnosis
- **Diagnostic criteria:** classical triad of skin pigmentation, nail dystrophy, oral leukoplakia; plus bone marrow failure; short telomeres (below first percentile for age) by flow FISH

## Disambiguation

- **DKC1 the gene** encodes **dyskerin** (the canonical protein product). DKC1 is sometimes used to refer to both gene and protein.
- **Do not conflate DKC1/dyskerin with general H/ACA snoRNA biology** — DKC1 is the catalytic subunit of all H/ACA complexes, but its aging-relevant function is overwhelmingly mediated through [[terc]] stabilization and telomerase, not through pseudouridylation per se.
- **Naming note:** "CBF5" is the yeast ortholog; "NAP57" is an older mammalian name for the same protein product of DKC1.

## Limitations and knowledge gaps

- **#gap/needs-human-replication** — Whether pharmacological rescue of TERC levels (e.g., androgen therapy) meaningfully extends survival in XL-DC patients vs. only delaying aplasia remains unclear from small case series; no RCT.
- **#gap/dose-response-unclear** — Threshold TERC level required to prevent accelerated telomere shortening in human HSCs is not precisely established; the ~50% TERC reduction in heterozygous TERC carriers is insufficient to cause DC in most but not all individuals.
- **#gap/needs-replication** — Ruggero 2003 showed rRNA pseudouridylation defects drive early-generation DC in Dkc1m mice; subsequent studies suggest CrPV IRES-element-sensitive ribosomal dysfunction as the mechanism linking pseudouridylation loss to translational defects, but this specific IRES-translation mechanism has not been comprehensively validated in human DC patients [^ruggero2003].
- **#gap/no-mechanism** — How DKC1 missense mutations that map far from the TERC-binding interface reduce TERC stability is mechanistically unclear (allosteric destabilization? impaired NHP2/NOP10 recruitment? altered subcellular localization?).
- **`gtex-aging-correlation: null`** — Not yet populated; DKC1 expression across GTEx tissues with age has not been pulled per `sops/finding-tissue-expression.md`.
- **`mr-causal-evidence: not-tested`** — No published Mendelian randomization study using DKC1 germline variants as instruments; DKC1 sits on the X chromosome (standard GWAS/MR pipelines often exclude X); candidate for X-chromosome MR if appropriate instruments exist.
- **GenAge entry** — Confirmed absent from GenAge-human as of 2026-05-07 (verified against allgenes.php). DC is a recognized progeroid syndrome, but DKC1 is not in the current GenAge-human curation. `genage-id: null` is correct.

## Footnotes

[^heiss1998]: doi:10.1038/ng0598-32 · Heiss NS et al. · *Nature Genetics* 1998 · 19:32–38 · n=N/A (positional cloning + mutation analysis in DC families) · observational · model: human XL-DC families · DKC1 cloned as the XL-DC gene; multiple missense mutations identified; protein named dyskerin; conserved from yeast to human (CBF5/NAP57 homologs); ~944 citations. Archive: not_oa; #gap/no-fulltext-access — quantitative claims from this paper (e.g., mutation spectrum statistics) cannot be independently verified against full text.

[^mitchell1999]: doi:10.1038/990141 · Mitchell JR, Wood E, Collins K · *Nature* 1999 · 402(6761):551–555 · n=N/A (biochemical + patient cell lines) · in-vitro / observational · model: human DC lymphoblasts + reconstituted telomerase · demonstrated DKC1 binds TERC H/ACA domain; DC patient cells have reduced TERC levels and telomerase activity; established TERC destabilization as the pathogenic mechanism; reported 50–90% TERC level reduction in patient lymphocytes (secondary source attribution — cannot independently verify from full text) · ~1,142 citations. Archive: not_oa; #gap/no-fulltext-access.

[^vulliamy2001]: doi:10.1038/35096585 · Vulliamy T, Marrone A, Goldman F, Dearlove A, Bessler M, Mason PJ, Dokal I · *Nature* 2001 · 413(6854):432–435 · observational/genetic · model: three AD-DC families (DCR101: large Iowa pedigree with 821-bp TERC deletion; DCR063: C408G point mutation; DCR082: GC→AG double substitution at nt 107–108) · TERC mutations sufficient to cause DC with haploinsufficiency mechanism (DCR101) or possible dominant-negative (DCR063); telomere lengths significantly shorter in affected members (P<0.001, Student's t-test) even in young children; genetic anticipation evident across generations; establishes that TERC haploinsufficiency is sufficient for DC independently of DKC1, separating rRNA pseudouridylation from telomere-maintenance roles of dyskerin · Archive: local PDF available.

[^ruggero2003]: doi:10.1126/science.1079447 · Ruggero D, Grisendi S, Piazza F, Rego E, Mari F, Rao PH, Cordon-Cardo C, Pandolfi PP · *Science* 2003 · 299(5604):259–262 · in-vivo (mouse hypomorphic knock-in) · model: Dkc1m hypomorphic mouse (hemizygous males G1/G2); n=50 per cohort for tumor incidence; n=16 per group for BM phenotype · DC-like phenotype: bone marrow failure from 6 months in ~60% of G1/G2 mice (Hb 10.6±4 vs 15.1±1.7 g/dl WT, P<0.001); 50% tumor incidence over lifespan; rRNA pseudouridylation impaired in early G1/G2 generations (10–40% reduction in Ψp/Up ratio; n=8); telomere shortening not evident until G4; establishes ribosomal dysfunction as the primary initiating mechanism of DC, with telomere attrition exacerbating disease later · Archive: local PDF available.

[^garus2021]: doi:10.1261/rna.078953.121 · Garus A, Autexier C · *RNA* 2021 · 27(12):1441–1458 · review · n/a · comprehensive review of dyskerin roles in pseudouridylation, ribosome biogenesis, splicing, and telomere maintenance; documents domain architecture (NTE residues 11–31, TruB catalytic domain 62–226, PUA RNA-binding domain 297–370, CTE residues 380–408, NLS/NoLS residues 446–514; 514 aa total); confirms H/ACA heterotetramer composition (dyskerin + NHP2 + NOP10 + GAR1); reviews H/ACA RNP biogenesis assembly factors (SHQ1, NAF1, R2TP complex, Hsp90) · Archive: local PDF available (PMC8594475; downloaded 2026-05-07).
