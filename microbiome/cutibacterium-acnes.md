---
type: microbe
aliases: [C. acnes, Propionibacterium acnes, P. acnes]
ncbi-taxonomy: 1747
phylum: Actinomycetota
family: Propionibacteriaceae
gram-stain: positive
oxygen-tolerance: aerotolerant-anaerobic
host: "Homo sapiens (skin commensal — pilosebaceous follicles)"
discovered: 1897 (Sabouraud; Unna); reclassified 2016 (Scholz & Kilian)
genome-size-mb: 2.5
key-strains: ["KPA171202 (type strain, genome reference)", "ATCC 6919", "HL001PA1 (acne-associated IA1)", "HL042PA1 (commensal IB)"]
hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "NCBI Taxonomy ID, full lineage, and Scholz 2016 reclassification verified via NCBI eutils + Crossref. PDFs read for Dreno 2024, Dreno 2020, Jung 2024, Swaney 2025, Shao 2025, Erdei 2018, Podbielski 2024, Trompezinski 2016. Yu 2024 and Scholz 2016 are not_oa — DOI/author/journal/title verified via Crossref; body claims cross-checked against verified Dreno 2024 and other locally-read sources. Mias 2023 is not_oa (download failed); abstract verified via Crossref; see #gap/no-fulltext-access on that footnote."
---


# *Cutibacterium acnes*

*Cutibacterium acnes* (formerly *Propionibacterium acnes*; reclassified in 2016 [^scholz2016]) is the **dominant commensal bacterium of sebaceous follicles on human skin**, constituting the majority of the skin microbiome on sebum-rich regions (face, scalp, upper back, chest). An aerotolerant anaerobic gram-positive rod, it colonizes pilosebaceous units and metabolizes sebum-derived triglycerides into short-chain fatty acids (primarily propionic and acetic acids) that maintain the acidic skin surface pH (~4.5–5.5) and suppress pathogen colonization. While widely known as the pathobiont associated with acne vulgaris, *C. acnes* is better understood as a **commensal whose ecological disruption — rather than simple overgrowth — drives inflammatory disease**. In the context of skin aging, it links to [[dysbiosis]] through age-dependent sebum decline that reduces *C. acnes* dominance, shifts phylotype composition, and may compromise skin barrier function and pathogen exclusion.

## Identity

| Field | Value |
|---|---|
| Species | *Cutibacterium acnes* (Tubaki & Nishida 1965) Scholz & Kilian 2016 |
| Former name | *Propionibacterium acnes* (Gilchrist 1900) Douglas & Gunter 1946 |
| NCBI Taxonomy ID | 1747 |
| Phylum | Actinomycetota (Actinobacteria) |
| Class | Actinomycetes |
| Order | Propionibacteriales |
| Family | Propionibacteriaceae |
| Gram stain | Positive |
| Morphology | Rod-shaped, non-motile, non-spore-forming, pleomorphic |
| Oxygen tolerance | Aerotolerant anaerobe (grows anaerobically; tolerates O₂ but does not require it) |
| Reference strain | KPA171202 (genome reference; ATCC 6919 is older deposited type strain) |
| Genome size | ~2.5 Mb (typical clinical isolates ~2.4–2.6 Mb) [^yu2024] |
| G+C content | ~60% (typical for Actinobacteria) |
| Named for | Cutis (skin) + bacterium; propionate production from propionibacteria |

The reclassification from *Propionibacterium* to *Cutibacterium* in 2016 resolved a long-standing phylogenetic discrepancy between 16S rRNA-based and core-genome-based phylogeny [^scholz2016]. Three new genera were proposed to replace polyphyletic *Propionibacterium*: *Acidipropionibacterium* (dairy species), *Cutibacterium* (cutaneous species including *C. acnes, C. avidum, C. granulosum*), and *Pseudopropionibacterium*. The species epithet *acnes* is retained.

## Phylotypes

*C. acnes* is a highly heterogeneous species. Multi-locus sequence typing (MLST) and whole-genome sequencing identify **six phylotypes** (IA1, IA2, IB, IC, II, III) with distinct ecological roles, virulence potential, and disease associations [^dreno2024] [^yu2024]:

| Phylotype | Alternative designation | Disease association | Ecological notes |
|---|---|---|---|
| IA1 | Type 1A1 | **Acne-associated** (dominant in acne lesions) | Biofilm-forming; more virulent in skin-cell assays; encodes CAMP factor, sialidase, hyaluronidase |
| IA2 | Type 1A2 | Moderate acne association | Less characterized than IA1 |
| IB | Type 1B | Commensal-skewed | Common in healthy follicles; shoulder implant infections |
| IC | Type 1C | Rare; emerging characterization | #gap/needs-replication |
| II | Type 2 | Commensal-skewed | More common in older adults; less acne-promoting |
| III | Type 3 | Commensal-skewed | Rare; associated with healthy skin |

Acne vulgaris involves **loss of phylotype diversity**, not hyperproliferation of *C. acnes* overall — the total *C. acnes* load is comparable between acne-prone and clear skin, but the ratio shifts toward IA1 dominance [^dreno2020]. #gap/needs-replication on specific phylotype-to-disease mapping; most data are observational 16S rRNA or MLST studies.

Multi-omics analysis by Yu et al. 2024 confirmed that body site and skin disease state (acne vs atopic dermatitis vs healthy) shape *C. acnes* genomic composition through horizontal gene transfer and positive selection, with sebum-rich environments correlating with increased pro-inflammatory gene expression [^yu2024]. #gap/no-fulltext-access — specific isolate count (cited as 1,234 in seeder notes) unverified against full-text; paper is not_oa.

## Niche and ecology

### Pilosebaceous unit colonization

*C. acnes* occupies a highly specific niche: the **pilosebaceous unit** (hair follicle + sebaceous gland). The follicular canal is relatively anaerobic — oxygen tension decreases from the follicular opening toward the base, providing conditions favorable for *C. acnes* growth. Its primary carbon and energy source is sebum, a lipid mixture secreted by sebaceous glands containing triglycerides (~57%), wax esters (~26%), squalene (~12%), and free fatty acids (~15%) [^dreno2020].

Key metabolic features:
- **Lipases** (principally lipase A; encoded by *lip1/lip2*): hydrolyze sebum triglycerides into glycerol and free fatty acids (FFAs), particularly oleic, linoleic, and palmitic acids. These FFAs serve as carbon source and are antimicrobial to other organisms at low follicular pH.
- **Propionic acid production**: fermentation of amino acids and glycerol generates propionate and acetate via the Wood-Werkman cycle; these organic acids contribute to the **acidic skin surface pH (~4.5–5.5)** that inhibits pathogen growth.
- **Porphyrin production**: *C. acnes* produces coproporphyrin III and protoporphyrin IX, which are photoreactive and visible under Wood's lamp (orange-red fluorescence). Their accumulation in acne lesions contributes to follicular inflammation.

The organism depends on sebum availability. Sebum production is primarily androgen-regulated: rises sharply at adrenarche (~8 yr), peaks in early adulthood (~20s–30s), and **declines substantially post-menopause and in late middle age** in both sexes (~40–60% reduction in sebum output between age 20 and 70) [^dreno2020]. #gap/needs-replication — specific magnitude and timeline of sebum decline require confirmation against a targeted primary source.

### Competitive exclusion and skin homeostasis

In healthy skin, *C. acnes* provides several protective functions [^dreno2020] [^shao2025]:

1. **Pathogen exclusion**: acidic pH (~4.5–5.5) and FFA production suppress *Staphylococcus aureus* and other transient pathogens; *C. acnes* fermentation products are bacteriostatic against gram-negative organisms.
2. **Interaction with *Staphylococcus epidermidis***: *S. epidermidis* produces lactic acid and bacteriocins that modulate *C. acnes* biofilm formation; the two species co-regulate follicular homeostasis. Disruption of either (e.g., by antibiotic treatment) dysregulates both [^dreno2020].
3. **Antioxidant capacity**: cell-free supernatant of commensal *C. acnes* strains demonstrates significant DPPH and ABTS radical-scavenging activity and activates the Nrf-2 oxidative stress pathway in keratinocytes in vitro [^shao2025]. This finding positions specific commensal *C. acnes* strains as potential "skin probiotics." #gap/needs-human-replication — all evidence is in vitro.
4. **Immune education**: *C. acnes* stimulates TLR2 on keratinocytes and sebocytes at baseline, priming innate immune responses without overtly inflammatory signaling under commensal conditions. TNIP1 (TNF-α-induced protein 3-interacting protein 1) acts as a negative regulator of TLR2/TLR4 downstream of *C. acnes* stimulation, keeping immune tone calibrated [^erdei2018].

## Aging context

### Sebum decline drives C. acnes reduction with age

The most robust age-related change in *C. acnes* ecology is **quantitative decline** tracking sebum production. Cross-sectional skin microbiome studies consistently find that *C. acnes* relative abundance is highest on the face and upper trunk in young adults (20s–30s), and declines with age as sebum output falls [^jung2024] [^swaney2025]:

- Jung et al. 2024 (n=60 Korean adults — 30 aged 20–29 yr, 30 aged 60–75 yr; whole-metagenome sequencing, nasolabial fold) found older adults showed **decreased *C. acnes* dominance and increased microbial diversity** compared to younger adults, correlating with reduced skin elasticity and increased wrinkle scores [^jung2024]. #gap/needs-replication — single-cohort, cross-sectional, observational design; causal direction unestablished.
- Swaney et al. 2025 (n=59 UK adults — 30 young age [YA] 26.7 ± 4.45 yr, 29 old age [OA] 72.3 ± 4.04 yr; 16S rRNA V1-V3, face and forearm) identified *C. acnes* as one of the "key differentiating biomarkers of the skin microbiome across the lifespan" alongside *S. hominis* and diversity metrics, with site-specific dynamics (face: *C. acnes* significant decrease in OA, p=0.033; arm: significant decrease, p=0.0078) [^swaney2025]. #gap/needs-replication — observational; gender-driven effect noted (facial *C. acnes* decline significant only in female participants).

Post-menopausal women show particularly pronounced sebum reduction — estrogen influences sebaceous gland activity and sebum lipid composition. The degree to which this reduction translates to *C. acnes* depletion is plausible mechanistically but has not been quantified in a prospective longitudinal design. #gap/unsourced

### Phylotype shift with age

Age-associated reduction in *C. acnes* dominance is accompanied by a **phylotype distribution shift** — youth skin is IA1-heavy (also consistent with the higher acne prevalence in young adults), while aging shifts the residual *C. acnes* population toward IB/II/III phylotypes that are more commensal-skewed [^dreno2024]. This phylotype shift may have dual effects:

- **Reduced acne risk** in older adults (IB/II/III are less acne-promoting) — consistent with the well-known age-related decline in acne vulgaris.
- **Reduced pathogen exclusion capacity** if the commensal *C. acnes* population drops below an effective threshold, allowing *S. aureus* colonization of dry or eczematous aged skin.

The mechanistic basis for the phylotype shift is not established; it may reflect changes in sebum lipid composition, immune senescence modifying selection pressure, or microenvironmental changes in the aging follicle. #gap/no-mechanism

### Skin barrier implications

Age-related *C. acnes* decline may impair barrier function through two mechanisms:

1. **Reduced FFA production** → reduced skin surface acidity → elevated skin pH → impaired lipid-processing enzyme activity (serine proteases are pH-sensitive) → reduced barrier lipid synthesis. Skin pH rises ~0.5–1.0 units between young adulthood and late life; the microbial contribution to this shift is not quantified separately from sebocyte and cornified-envelope changes. #gap/no-mechanism
2. **Loss of competitive exclusion** → *S. aureus* colonization, which is associated with skin barrier disruption via V8 protease cleavage of desmoglein-1. The *S. aureus* – *C. acnes* ecological balance is particularly relevant to the interface between aging skin and atopic dermatitis, which increases in prevalence in older adults. #gap/needs-replication

## Inflammatory / pathogenic associations

### Acne vulgaris

*C. acnes* (predominantly phylotype IA1) drives inflammatory acne through multiple mechanisms [^dreno2020] [^mias2023]:

- **Biofilm formation** in the follicular canal, protecting bacteria from antibiotics and immune clearance.
- **NLRP3 inflammasome activation** and **Th17 pathway induction**: *C. acnes* lipases, pore-forming toxins (CAMP factors), and porphyrins activate keratinocytes and sebocytes to produce IL-1β, IL-8, IL-17A, and TNF-α.
- **TLR2/TLR4 signaling**: *C. acnes* surface molecules (lipoteichoic acid, peptidoglycan) engage TLR2 on keratinocytes, driving NF-κB-dependent cytokine release. The Th17/IL-17 axis is now understood as a central amplifier of follicular inflammation downstream of *C. acnes* recognition.

Acne is not primarily an aging disease (prevalence peaks in adolescence), but acne scarring, post-inflammatory hyperpigmentation, and late-onset acne (40s–50s, often hormone-driven) represent aging-relevant sequelae. Chronic low-grade follicular inflammation from *C. acnes* also contributes to photoaging by amplifying UV-induced cytokine cascades. #gap/unsourced — the acne-photoaging amplification claim needs a primary source.

### Prosthetic joint and device infections

*C. acnes* can shift from skin commensal to opportunistic pathogen in **deep-seated infections** — systemic bloodstream infections, bone/joint infections, and deep tissue infections — particularly in older, immunocompromised patients [^podbielski2024]. Unlike its acne pathobiont role, in systemic contexts *C. acnes* colonizes sterile anatomical compartments, often from adjacent skin. Genomic analysis of 45 isolates (18 healthy control skin isolates vs 27 clinical infection isolates) shows that infection-associated isolates distribute across phylotypes IA1, IB, and II, with **metabolic-pathway and DNA-repair gene differences** rather than classic virulence-factor differences separating commensal from infection-associated strains — no significant differences in virulence gene content were found between groups [^podbielski2024]. The distinction instead lies in single-nucleotide polymorphisms (SNPs) in housekeeping genes. Aging is a risk factor for deep-seated *C. acnes* infections through general immunosenescence. #gap/needs-replication — direct causal link between immunosenescence and *C. acnes* deep-tissue infection risk not established in longitudinal data.

### Blepharitis and ocular surface disease

*C. acnes* colonizes eyelid margins and meibomian glands; phylotype IB-associated *Cutibacterium modestum* (formerly a *C. acnes* subspecies) was first isolated from inflamed meibomian glands in 2020. Posterior blepharitis (meibomian gland dysfunction) increases in prevalence with age and contributes to dry eye syndrome. The role of *C. acnes* vs *Cutibacterium* spp. in age-associated blepharitis is an emerging area. #gap/needs-replication

## Therapeutic and intervention context

### Acne treatment (conventional)

Standard acne treatments suppress *C. acnes* or its inflammatory downstream effects:

- **Topical antibiotics** (clindamycin, erythromycin): suppress *C. acnes* growth; risk of dysbiosis and antibiotic resistance — the Dreno 2024 consensus review explicitly flags antibiotic-driven dysbiosis as a long-term concern [^dreno2024].
- **Benzoyl peroxide (BPO)**: oxidant with bactericidal action on *C. acnes*; induces less resistance than antibiotics because it is non-selective. Often combined with antibiotics.
- **Topical and systemic retinoids** (tretinoin, adapalene, isotretinoin): reduce sebum production, normalize follicular keratinization, downregulate TLR2. See [[retinoids]].
- **Salicylic acid**: keratolytic; reduces comedone formation; some antibacterial effect. See [[salicylic-acid]].

### Bakuchiol (aging-context antibacterial)

**Bakuchiol**, a plant-derived meroterpenoid marketed as a "natural retinol alternative" for photoaged skin, is a component of a BGM complex (bakuchiol + Ginkgo biloba extract + mannitol) that has demonstrated antibacterial activity against *C. acnes* (then *P. acnes*) in vitro and reduced porphyrin counts on skin clinically [^trompezinski2016] — distinct from bakuchiol's retinoid-functional-analog mechanism on fibroblasts. The MIC of the BGM complex against *P. acnes* (strain CIP A 179) was 0.0005% for bakuchiol alone, comparable to zinc gluconate (0.12%) and erythromycin (0.0000125%). Clinical testing in 17 volunteers showed a significant decrease in porphyrin scores on the face at day 28 and day 56 (p<0.05). #gap/needs-replication — the in vitro antibacterial data for isolated bakuchiol and the clinical porphyrin reduction data are from a single industry-sponsored study; the clinical work tested BGM cream formulation (not isolated bakuchiol), and used the old *P. acnes* nomenclature. See [[bakuchiol]] for the full compound page.

In the aging context, bakuchiol's contribution (within BGM complex) to antibacterial activity against *C. acnes* is most relevant to managing late-onset acne and preventing follicular inflammation in photoaged skin, rather than to the phylotype-shift/sebum-decline dynamics described above.

### Skin microbiome-modulating interventions

- **Topical probiotics / postbiotics**: applying commensal strains (including commensal *C. acnes* phylotypes or their metabolites) to skin is under investigation as an approach to restore microbiome balance without antibiotic disruption. The Shao 2025 probiotic *C. acnes* paper (antioxidant activity, Nrf-2 activation) represents early-stage characterization of a candidate topical probiotic strain [^shao2025].
- **Oral probiotics**: the gut-skin axis hypothesis proposes that gut microbiome modulation (e.g., via *Lactobacillus* supplementation) reduces sebaceous gland inflammation via IGF-1 pathway modulation. Evidence is preliminary. See [[dysbiosis]] for the broader gut-skin axis.
- **Retinoids** (topical): reduce sebum production via PPARG suppression → net reduction of *C. acnes* substrate; normalizes follicular environment. A downstream effect of retinoid use is altered skin microbiome composition, including reduced *C. acnes* abundance. This may be desirable in acne contexts but the implications for skin aging (barrier protection, pathogen exclusion) are not well-characterized. #gap/no-mechanism #gap/long-term-unknown

## Extrapolation note

All claims on this page are from human studies (clinical, epidemiological, microbiome surveys) or human-cell in vitro experiments. *C. acnes* is a strict human/primate commensal; no relevant mouse or invertebrate model exists. Model-organism extrapolation tables are not applicable here.

## Limitations and gaps

- #gap/needs-replication — Phylotype-age distribution shift is a consistent observation across small cross-sectional studies, but no large (n>500) prospective longitudinal study tracking *C. acnes* phylotypes across the aging trajectory exists.
- #gap/no-mechanism — Molecular mechanisms linking C. acnes abundance decline to skin barrier deterioration in aged skin are inferred but not directly measured.
- #gap/needs-replication — Sebum decline magnitude and *C. acnes* decline correlation is mechanistically plausible and supported by cross-sectional microbiome data, but direct quantitative coupling in a single prospective cohort has not been published.
- #gap/long-term-unknown — Whether restoration of *C. acnes* commensal phylotypes (via topical probiotics) improves skin barrier function or reduces inflammaging in older adults has not been tested in RCTs.
- #gap/unsourced — Age-related changes in sebum lipid composition (saturated vs unsaturated FFA ratio) and their feedback on *C. acnes* growth dynamics: plausible from general sebaceous biology literature but not confirmed against a primary source on this page.
- #gap/needs-replication — The contribution of *C. acnes* colonization decline specifically to skin surface pH rise with age is not quantified separately from corneocyte and sebocyte changes.
- **Wiki coverage gap** — This page is the first skin-microbiome commensal entry in the wiki. Related stubs needed: `[[skin-microbiome-aging-shifts]]`, `[[staphylococcus-epidermidis]]`, `[[malassezia]]`, `[[sebaceous-gland]]`, `[[epidermis]]`, `[[skin-aging]]` (exists), `[[retinoids]]`, `[[salicylic-acid]]`. The [[bakuchiol]] page exists and should be updated to cross-link here.

## See also

- [[dysbiosis]] — the hallmark of aging to which skin microbiome changes contribute; *C. acnes* shifts are the skin compartment's contribution to dysbiosis
- [[chronic-inflammation]] — TLR2/Th17-mediated follicular inflammation from *C. acnes* dysbiosis is a skin-compartment inflammaging input
- [[bakuchiol]] — retinoid-functional-analog compound with direct antibacterial activity against *C. acnes*; relevant to late-onset acne and photoaged-skin management
- [[skin-aging]] — macroscopic phenotype to which skin microbiome dysbiosis contributes
- [[skin-microbiome-aging-shifts]] — R44 sister page; broader skin microbiome context (stub)
- [[staphylococcus-epidermidis]] — R44 sister page; co-regulates follicular homeostasis with *C. acnes* (stub)
- [[malassezia]] — R44 sister page; fungal skin commensal with its own age-related dynamics (stub)
- [[salicylic-acid]] — R44 sister page; topical keratolytic targeting *C. acnes* comedogenic environment (stub)

## Footnotes

[^scholz2016]: doi:10.1099/ijsem.0.001367 · Scholz CFP, Kilian M · *Int J Syst Evol Microbiol* 2016;66(11):4422–4432 · taxonomic revision · Proposes *Cutibacterium* gen. nov. (and *Acidipropionibacterium*, *Pseudopropionibacterium*) for cutaneous propionibacteria; phylogenomic analysis confirms polyphyletic *Propionibacterium*; 455 citations per Crossref · not_oa; PDF not locally downloaded

[^yu2024]: doi:10.1016/j.chom.2024.06.002 · Yu T et al. · *Cell Host & Microbe* 2024 · multi-omics genomic study · "Multi-omics signatures reveal genomic and functional heterogeneity of Cutibacterium acnes in normal and diseased skin"; body site and skin disease shape *C. acnes* genomic diversity through HGT and selection; specific isolate count (1,234) not verified against full-text — paper is not_oa · not_oa; PDF not locally downloaded #gap/no-fulltext-access

[^dreno2024]: doi:10.1111/jdv.19540 · Dreno B, Dekio I, Baldwin H, Demessant-Flavigny AL, Dagnelie MA, Khammari A, Corvec S · *J Eur Acad Dermatol Venereol* 2024 (accepted manuscript 2023) · review (66 refs) · six *C. acnes* phylotypes (IA1, IA2, IB, IC, II, III); IA1 predominance in acne; loss of phylotype diversity as central dysbiotic trigger; antibiotic-driven dysbiosis concern; dermocosmetic microbiome-supportive strategies · PDF at 

[^dreno2020]: doi:10.1007/s40257-020-00531-1 · Dreno B, Dagnelie MA, Khammari A, Corvec S · *Am J Clin Dermatol* 2020;21(Suppl 1):S18–S24 · review · skin microbiome dysbiosis and acne; phylotype IA1 virulence (CC18 / A1 SLST); *S. epidermidis*-*C. acnes* co-regulation; antibiotic-driven dysbiosis · PDF at 

[^jung2024]: doi:10.3390/microorganisms12112179 · Jung Y et al. · *Microorganisms* 2024 · observational · n=60 Korean adults (n=30 aged 20–29 yr vs n=30 aged 60–75 yr; 50% male each group); whole-metagenome sequencing, nasolabial fold swabs · aging-induced decrease in *C. acnes* dominance (83.14 ± 22.18% in younger vs 60.55 ± 35.68% in older; p=0.007) and increased diversity (Shannon, Simpson, Chao1 all p<0.001) correlating with reduced skin elasticity and increased wrinkles · gold OA; PDF at 

[^swaney2025]: doi:10.3389/fragi.2025.1644012 · Swaney MH, Newman DJ, Mao J, Hilton AC, Worthington T, Li M · *Front Aging* 2025;6:1644012 · observational · n=59 UK adults (n=30 YA 26.7±4.45 yr; n=29 OA 72.3±4.04 yr); 16S rRNA V1-V3, face and antecubital fossa (arm) · *C. acnes* identified as key differentiating biomarker of skin microbiome across lifespan alongside *S. hominis* and diversity metrics; site-specific dynamics (face and arm differ); gender is a significant driving factor for facial changes · gold OA; PDF at 

[^mias2023]: doi:10.1111/jdv.18794 · Mias C, Mengeaud V, Bessou-Touya S, Duplan H · *J Eur Acad Dermatol Venereol* 2023 · review · IA1 phylotype predominance activates Th17 pathway; loss of diversity as central driver of acne inflammation · not_oa; PDF not locally downloaded #gap/no-fulltext-access

[^podbielski2024]: doi:10.3389/fcimb.2024.1433783 · Podbielski A, Köller T, Warnke P, Barrantes I, Kreikemeyer B · *Front Cell Infect Microbiol* 2024;14:1433783 · genomic (WGS, n=45 isolates: 18 healthy control skin + 27 clinical deep-seated infections) · commensal vs clinical isolate distinction via SNPs in housekeeping genes; infection isolates distribute across IA1, IB, II; no significant virulence-gene-content differences; metabolic-pathway and DNA-repair gene differences drive clinical vs commensal genomics · gold OA; PDF at 

[^shao2025]: doi:10.1111/jocd.70105 · Shao L et al. · *J Cosmet Dermatol* 2025;24:e70105 · in-vitro · commensal *C. acnes* CCSM0331 cell-free supernatant; DPPH/ABTS radical scavenging; Nrf-2 activation in keratinocytes; short-chain fatty acids and antioxidant enzymes · PDF locally available 

[^erdei2018]: doi:10.3389/fimmu.2018.02155 · Erdei L, Bolla BS, Bozó R, Tax G, Urbán E, Kemény L, Szabó K · *Front Immunol* 2018;9:2155 · in-vitro + ex vivo organotypic skin model · HPV-KER cells, NHEK cells; TNIP1 (TNFAIP3-interacting protein 1) as negative regulator of NF-κB downstream of TLR2/TLR4 *C. acnes* stimulation; TNIP1 expression dose-dependent, strain-independent; ATRA (all-trans retinoic acid) increases TNIP1, reduces TLR2-driven TNFα/CCL5 and attenuates TLR4-dependent inflammation · PDF at 

[^trompezinski2016]: doi:10.2147/CCID.S110655 · Trompezinski S, Weber S, Cadars B, Larue F, Ardiet N, Chavagnac-Bonneville M, Sayag M, Jourdan E · *Clin Cosmet Investig Dermatol* 2016;9:233–239 · in-vitro + ex vivo + clinical · BGM complex (bakuchiol + Ginkgo biloba extract + mannitol); MIC of bakuchiol vs *P. acnes* CIP A 179 = 0.0005%; clinical n=17 volunteers (aged 19–34 yr, oily skin, mild-to-moderate acne); BGM cream reduced porphyrin scores at day 28 and day 56 (p<0.05); modulates sebum fatty acid composition (squalene, linoleic acid normalized) · Note: antibacterial effect is for BGM complex / bakuchiol as isolated compound; full formulation clinical data; industry-sponsored (NAOS/Bioderma) · PDF at 
