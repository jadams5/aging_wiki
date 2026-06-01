---
type: process
aliases: [antibacterial autophagy, antimicrobial autophagy, selective autophagy of pathogens]
key-proteins: ["[[p62]]", "[[ndp52]]", "[[optn]]", "[[tax1bp1]]", "[[lc3]]", "[[tbk1]]", "[[galectin-8]]", "[[galectin-3]]"]
pathways: ["[[autophagy]]"]
hallmarks: ["[[disabled-macroautophagy]]", "[[chronic-inflammation]]"]
selective-variants: []
verified: true
verified-date: 2026-05-04
verified-by: claude
verified-scope: "Thurston 2009 and Levine 2011 verified against local PDFs; Gutierrez 2004 and Tumbarello 2015 verified against freshly-downloaded PDFs; Wild 2011 (Science, not_oa) and Thurston 2012 (Nature, not_oa) unverifiable — claims tagged accordingly"
---

# Xenophagy

Selective macroautophagic capture and lysosomal degradation of **intracellular pathogens** — bacteria, viruses, and parasites that breach cytosolic or vacuolar compartments of the host cell. Xenophagy is the innate immune arm of the [[autophagy]] system: it diverts the bulk degradation machinery toward microbial targets, reducing pathogen burden before adaptive immunity is mobilized. The first demonstration of xenophagy as a functional defense mechanism was published by Gutierrez et al. in 2004 using *Mycobacterium tuberculosis* in macrophages [^gutierrez2004].

Xenophagy intersects with aging biology primarily through **immunosenescence**: aged macrophages show reduced xenophagy flux, impaired TBK1 signalling, and heightened susceptibility to intracellular pathogens. Mutations in the xenophagy cargo receptor optineurin ([[optn]]) and its activating kinase TBK1 also cause ALS/FTD, linking the same molecular machinery to both antimicrobial defense and neurodegenerative disease. #gap/needs-human-replication

## Discovery

Gutierrez et al. (2004) demonstrated that *M. tuberculosis* (BCG and virulent H37Rv strains) **survives** phagosomal arrest in macrophages under normal conditions, but that pharmacological or cytokine-induced activation of [[autophagy]] (via rapamycin or IFN-γ) delivers mycobacteria to acidified autolysosomes and kills them [^gutierrez2004]. Rapamycin (mTOR inhibitor) treatment of BCG-infected macrophages reduced bacterial colony-forming units significantly and increased co-localisation of LC3+ autophagosomes with mycobacteria-containing vacuoles. This established three foundational principles:

1. The autophagy machinery can be weaponised against pathogens occupying vacuolar compartments.
2. mTOR suppression (as by nutrient deprivation or rapamycin) potentiates xenophagy.
3. Pathogens actively resist this arm of innate immunity — wild-type virulent *M. tuberculosis* is substantially more autophagy-resistant than BCG.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — cargo receptors, LC3 family, and autophagy core are conserved |
| Phenotype conserved in humans? | yes — human macrophages kill intracellular bacteria via autophagy; HIV/TB/Salmonella xenophagy documented in human cell lines |
| Replicated in humans? | partial — human cell-line and ex vivo macrophage studies; controlled in vivo human xenophagy flux data absent #gap/needs-human-replication |

## Mechanism

Xenophagy proceeds through four conceptual stages, each involving dedicated molecular sensors or receptors that are distinct from (but share machinery with) other selective autophagy subtypes.

### Stage 1 — Cytosolic pathogen detection

Two complementary detection strategies exist:

**Galectin-based damage sensing (vacuolar pathogens):** When bacteria such as *Salmonella enterica* Typhimurium escape their vacuole (the *Salmonella*-containing vacuole, SCV) — or when the vacuole is damaged by bacterial toxins — host **galectins** are rapidly recruited to the damaged membrane:

- **Galectin-8** (LGALS8): senses SCV rupture by binding exposed intraluminal glycans (specifically β-galactosides on the luminal leaflet of the damaged vacuolar membrane) [^thurston2012]. Galectin-8 then directly recruits **NDP52** ([[ndp52]]), which engages the autophagy machinery. This galectin-8 → NDP52 axis was identified by Thurston et al. 2012 as an early damage signal that precedes and is independent of ubiquitin coating [^thurston2012].
- **Galectin-3** and **galectin-9**: similarly bind damaged endolysosomal membranes; galectin-9 recruits TAX1BP1; galectin-3 recruits multiple downstream effectors including [[p62]]. These galectin arms help generate redundancy in the sensor layer. #gap/needs-replication — the relative contributions of each galectin are not cleanly resolved in human primary macrophages.

**Direct ubiquitination (cytosolic pathogens):** When bacteria escape into the cytoplasm (e.g., *Listeria monocytogenes*, cytosolic *Salmonella*), host E3 ubiquitin ligases ubiquitinate bacterial surface proteins and/or bacterial outer-membrane components, generating a poly-ubiquitin coat. The ubiquitin chains — predominantly K48- and K63-linked — serve as the docking platform for cargo receptors.

### Stage 2 — Cargo receptor recruitment

Four primary selective autophagy receptors with distinct but overlapping specificities bind the ubiquitinated pathogen and bridge it to the autophagy membrane via their LC3-interacting region (LIR) motifs:

| Receptor | Gene | Binding partner | Primary link to xenophagy | Notes |
|---|---|---|---|---|
| **[[p62]]** / SQSTM1 | SQSTM1 | K63-Ub, K48-Ub (UBA domain) | Earliest described; broadly recruited to ubiquitinated bacteria | NF-κB scaffold; also involved in aggrephagy; not always required for xenophagy in cells with redundant receptors |
| **[[ndp52]]** / CALCOCO2 | CALCOCO2 | Ubiquitin (ZnF domain); Galectin-8 (SKICH domain) [^thurston2012] | Ubiquitin-binding and TBK1 recruitment established by Thurston 2009 [^thurston2009]; galectin-8-mediated recruitment to damaged SCVs established by Thurston 2012 [^thurston2012]; primary receptor for Salmonella xenophagy in HeLa cells | TBK1 phosphorylation of NDP52 enhances LC3 affinity; NDP52 selectively binds LC3C isoform (not LC3B) |
| **[[optn]]** / Optineurin | OPTN | Ubiquitin (UBAN domain, K63 preference); myosin VI | Phosphorylation at Ser177 by **TBK1** dramatically increases LC3 affinity [^wild2011]; primary functional receptor for Salmonella growth restriction in HeLa | ALS/FTD disease gene; also mediates mitophagy |
| **TAX1BP1** / CALCOCO3 | TAX1BP1 | K63-Ub (ZF2 domain, primary); K48-Ub and linear Ub also bound; myosin VI (ZF1+ZF2); galectin-9 | Required for *Salmonella* clearance alongside NDP52; TAX1BP1 siRNA causes cytosolic accumulation of ubiquitin-positive bacteria (cargo-recognition defect); single knockdown of TAX1BP1 causes stronger xenophagy defect than NDP52 alone [^tumbarello2015]; TAX1BP1 is the dominant paralogue in vertebrates (NDP52 lost from Xenopus; truncated in mice) | Also called T6BP or CALCOCO3; binds LC3B and LC3C equally (unlike NDP52 which is LC3C-selective) |

TBK1 (TANK-binding kinase 1) is the master kinase for xenophagy: it phosphorylates NDP52, OPTN (Ser177), and p62 (Ser403), enhancing their LC3 affinity and amplifying receptor clustering around the pathogen.

### Stage 3 — Autophagosome encapsulation

Receptor clustering on the pathogen surface recruits the **ULK1 complex** and the **Class III PI3K complex** (Beclin-1/VPS34), which generates PI3P locally, nucleating a phagophore that expands around the pathogen. The **ATG5–ATG12–ATG16L1 elongation complex** and **LC3 lipidation machinery** (ATG7 → ATG3 → LC3-PE) coat the growing membrane [^levine2011].

For large targets (e.g., *M. tuberculosis*-containing vacuoles ~2–4 µm), complete engulfment requires coordinated phagophore extension; partial engulfment followed by membrane sealing has been documented. **Myosin VI** (a minus-end-directed actin-based motor) is recruited by NDP52 and TAX1BP1 (via their overlapping ubiquitin/myosin VI binding sites in the zinc-finger domains) to deliver endosomal membrane components to the nascent xenophagosome [^tumbarello2015]. Crucially, myosin VI loss causes accumulation of ubiquitin-positive *Salmonella* **inside** LC3-positive autophagosomes — a later maturation/degradation defect distinct from the cargo-recognition defect caused by receptor (TAX1BP1/NDP52/OPTN) depletion.

### Stage 4 — Lysosomal fusion and bacterial degradation

The sealed xenophagosome fuses with the lysosome via SNARE machinery (STX17/SNAP29/VAMP8), forming the xenolysosome/autolysosome. Lysosomal hydrolases (cathepsins B, D, L) and acidification (pH 4.5–5.0) degrade bacterial cell walls and proteins. Reactive oxygen species generated by lysosomal NADPH oxidase (NOX2) contribute to bactericidal activity in some contexts.

## Receptor specificity and the TBK1 axis

The four major xenophagy receptors are **functionally non-redundant in vivo** despite overlapping domain architecture. Key specificity findings:

- **NDP52** is the primary restrictor of *Salmonella* growth in epithelial cells. Thurston et al. 2009 demonstrated that NDP52 siRNA causes hyper-proliferation of intracellular *Salmonella* in HeLa cells and that NDP52 is recruited to ubiquitin-coated cytosolic bacteria via its zinc-finger domain (ubiquitin binding) [^thurston2009]; an additional galectin-8 → NDP52 recruitment pathway (independent of ubiquitin) was established later by Thurston 2012 [^thurston2012].
- **OPTN phosphorylation at Ser177 by TBK1** is functionally essential: Wild et al. 2011 showed that phospho-OPTN (pSer177) has dramatically higher LC3 affinity than unphosphorylated OPTN, and that a Ser177Ala mutant OPTN fails to restrict *Salmonella* growth, even though it still binds ubiquitin [^wild2011]. This establishes TBK1-mediated OPTN phosphorylation as a rate-limiting step for xenophagy flux.
- **TAX1BP1** acts cooperatively with NDP52 at the cargo-recognition step: TAX1BP1 siRNA causes accumulation of cytosolic ubiquitin-positive bacteria (a receptor/recognition defect), and simultaneous knockdown of TAX1BP1+NDP52 has a stronger effect than either alone, indicating partial functional redundancy [^tumbarello2015]. **Myosin VI** loss produces a distinct, later-stage defect: ubiquitin-positive bacteria accumulate *inside* LC3-positive autophagosomes, indicating a maturation/degradation failure rather than a recognition failure. Depletion of myosin VI alone causes a stronger Salmonella hyper-proliferation phenotype than simultaneous depletion of TAX1BP1 + NDP52 + OPTN (triple knockdown) [^tumbarello2015]. #gap/needs-replication — most mechanistic data is from HeLa and RPE cell lines; primary human macrophage validation is limited.

## Pathogen evasion strategies

Several major intracellular pathogens have evolved counter-strategies that specifically subvert xenophagy:

### *Mycobacterium tuberculosis*

Virulent *M. tuberculosis* resists xenophagy through multiple mechanisms:
- **Phagosomal maturation arrest**: The bacteria arrest their phagosome at an early endosomal stage (Rab5+/Rab7−), preventing maturation to the acidified phagolysosome that would activate lysosomal killing. Gutierrez et al. 2004 demonstrated that pharmacological or starvation-induced autophagy can overcome this block, forcing mycobacterial phagosomes to acquire late-endosomal/lysosomal markers (cathepsin D, LAMP-1, Vo-ATPase) and suppressing bacterial viability [^gutierrez2004].
- **ESX-1 type VII secretion system** (from later literature — not established in Gutierrez 2004 [^gutierrez2004]): the ESX-1 effector EsxA (ESAT-6) has been proposed to disrupt SNARE-mediated autophagosome–lysosome fusion; this attribution is supported by subsequent studies not yet on this wiki. #gap/unsourced — a primary source for the ESX-1/SNARE disruption claim needs to be identified and added. #gap/no-mechanism
- IFN-γ, which transcriptionally upregulates autophagy and xenophagy factors, partially overcomes this block — providing a mechanistic rationale for why impaired IFN-γ signalling in immunosenescence increases TB susceptibility [^levine2011]. #gap/needs-human-replication

### *Listeria monocytogenes*

*Listeria* escapes from its vacuole into the cytoplasm via listeriolysin O (LLO) and recruits host actin (via ActA) to propel itself through the cytosol. ActA coating of the bacterial surface **disguises the bacterium from autophagic recognition**: ActA-dependent actin polymerization blocks bacterial association with ubiquitin and prevents p62 recruitment and autophagic targeting [^levine2011][^bhatt2009]. Only non-motile *Listeria* (ActA-deleted mutants) are efficiently cleared by xenophagy. The precise mechanism — whether ActA physically occludes receptor-binding sites or diverts actin polymerization to mask the bacterial surface as a host organelle — is not fully resolved. #gap/no-mechanism

### *Salmonella enterica* Typhimurium

A subpopulation of *Salmonella* escapes the SCV and is targeted by xenophagy; however, the intravacuolar population manipulates the endocytic pathway to sustain its replicative niche. The bacterial effector SopF inhibits ATG16L1 recruitment, partially blocking autophagosome nucleation around the SCV.

## Role in aging and immunosenescence

### Xenophagy decline in aged macrophages

Aged macrophages show reduced autophagic flux that extends to xenophagy. Mechanistically proposed contributors include:
- Reduced expression of ATG proteins (ATG5, ATG7) in aged myeloid cells
- Impaired lysosomal acidification in aged macrophages (consistent with [[lipofuscin]] accumulation and reduced cathepsin activity)
- Chronic mTOR over-activation in aged macrophages, which suppresses ULK1-mediated autophagy initiation
- Reduced TBK1 signalling capacity, impairing phospho-OPTN(Ser177) and phospho-NDP52 amplification

The functional consequence is heightened susceptibility to intracellular bacterial pathogens in elderly individuals — a well-documented clinical epidemiological pattern for *M. tuberculosis* (TB is 2–3× more common in adults aged 65+ in high-income countries) and *Listeria* (>70% of invasive listeriosis in the EU occurs in individuals 60+). Whether impaired xenophagy specifically (vs. other immune deficits) drives this vulnerability is not yet established in controlled human studies. #gap/needs-human-replication #gap/no-mechanism

### TBK1 — bridge between xenophagy and neurodegeneration

TBK1 loss-of-function mutations are a **major Mendelian cause of ALS and frontotemporal dementia (FTD)** [^chua2022]. Because TBK1 is required for both xenophagy (via OPTN/NDP52 phosphorylation) and mitophagy (via p62 phosphorylation at Ser403 and OPTN at Ser177), ALS-associated TBK1 variants impair selective autophagy of both damaged mitochondria and (presumably) bacterial targets. This creates a mechanistic link between innate immune signalling, mitophagy, and neurodegeneration through a shared kinase.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — TBK1, OPTN, NDP52, and p62 are conserved |
| Phenotype conserved in humans? | yes — TBK1/OPTN loss-of-function causes human ALS/FTD (genetic epidemiology) |
| Replicated in humans? | yes (genetic) — xenophagy-specific flux in ALS patient macrophages not directly measured #gap/needs-replication |

### NF-κB and SASP amplification

p62 ([[p62]]) bridges xenophagy cargo recognition to NF-κB activation: p62 interacts with TRAF6 and atypical PKC isoforms to activate NF-κB, which transcriptionally upregulates inflammatory cytokines. In the context of aging, elevated chronic p62-NF-κB signalling (partly from impaired autophagy clearing p62 itself — a flux readout) contributes to [[chronic-inflammation]] / [[inflammaging]]. This is distinct from direct bacterial clearance but links failed xenophagy to the senescence-associated secretory phenotype ([[sasp]])-like inflammatory milieu of aged tissues.

## Pharmacology

### Rapamycin (mTOR inhibition)

Rapamycin and rapalogs enhance xenophagy by relieving mTOR-mediated suppression of ULK1 and downstream autophagy initiation. This was the pharmacological proof-of-concept in the founding Gutierrez 2004 study [^gutierrez2004] and has since been replicated in multiple models of intracellular bacterial infection. Rapamycin reduces *M. tuberculosis* survival in macrophage culture and in murine infection models. #gap/needs-human-replication — no controlled human trial of rapamycin as an anti-TB adjunct has been completed as of 2026.

### IFN-γ

IFN-γ is an endogenous xenophagy inducer: it transcriptionally upregulates LRG-47/IRGM (immunity-related GTPases) and other autophagy effectors, and enhances xenophagic flux in macrophages. The decline in IFN-γ responsiveness with age (a documented immunosenescence feature) is consistent with reduced xenophagy capacity. #gap/no-mechanism — the specific molecular steps linking IFN-γ receptor → TBK1/OPTN axis in aged macrophages are uncharacterized.

### Caloric restriction

Caloric restriction reduces mTOR activity and increases AMPK signalling, which collectively upregulate autophagy including xenophagy. Whether CR specifically enhances xenophagy in aged animals at the organismal level (not just in young models) has not been tested directly. #gap/needs-human-replication

## Measurement notes

- **Xenophagy flux** is typically measured by colony-forming unit (CFU) assays of intracellular bacteria ± autophagy inhibitors (3-methyladenine, bafilomycin A1, ATG5 siRNA). A decrease in intracellular CFU that is reversed by autophagy inhibition is considered evidence of xenophagy-mediated killing.
- **LC3 co-localisation** with bacteria-containing vacuoles (by immunofluorescence or live GFP-LC3) provides spatial evidence of autophagosomal targeting but does not confirm degradation.
- **Receptor co-localisation** with ubiquitin-coated bacteria (p62/NDP52/OPTN puncta) is a widely used early-step readout.
- Distinction from **LC3-associated phagocytosis (LAP)**: LAP recruits LC3 to the outer face of phagosomes (single-membrane, Rubicon-dependent) rather than forming a canonical double-membrane autophagosome; LAP occurs in parallel with xenophagy and is mechanistically distinct. Distinguishing the two requires EM or Rubicon/ATG14L1 co-localisation experiments.

## Limitations and gaps

- Most mechanistic xenophagy data is from epithelial cell lines (HeLa, U2OS) or murine macrophage lines; validation in primary human macrophages — especially aged primary macrophages — is limited. #gap/needs-human-replication
- Quantitative xenophagy flux in aged human macrophages has not been directly measured; the aging-immunosenescence connection is inferred from indirect evidence (reduced autophagy protein expression + clinical epidemiology). #gap/no-mechanism
- Receptor redundancy vs. non-redundancy differs by cell type and pathogen; the dominant receptor for each pathogen in the relevant primary human cell type is not always established. #gap/needs-replication
- Whether boosting xenophagy pharmacologically (e.g., via mTOR inhibition) has beneficial effects on infectious disease outcomes in elderly humans is untested. #gap/long-term-unknown
- The molecular mechanism by which *M. tuberculosis* ESX-1 blocks autophagosome–lysosome fusion is incompletely resolved at the molecular level. #gap/no-mechanism

## Related pages

- [[autophagy]] — parent process; bulk macroautophagy machinery
- [[mitophagy]] — overlapping cargo receptors OPTN, NDP52, p62, TAX1BP1 with shared TBK1 axis
- [[p62]] — cargo receptor; NF-κB link; Nrf2 activator
- [[ndp52]] — primary receptor for galectin-8-mediated xenophagy; R6e parallel seed
- [[optn]] — TBK1-phosphorylated receptor; ALS disease gene; R6e parallel seed
- [[tbk1]] — master xenophagy/mitophagy kinase; ALS/FTD Mendelian gene (implicit stub)
- [[tax1bp1]] — fourth canonical receptor; myosin VI co-factor (implicit stub)
- [[galectin-8]] — early damage sensor for ruptured vacuolar membranes (implicit stub)
- [[disabled-macroautophagy]] — hallmark linked to aging; xenophagy is an arm of this failure
- [[chronic-inflammation]] — downstream of impaired xenophagy via p62–NF-κB axis
- [[sasp]] — context for p62–NF-κB contribution to aging inflammation
- [[immunosenescence]] — phenotype of aged immune decline that encompasses xenophagy failure (implicit stub)
- [[inflammaging]] — chronic low-grade inflammation of aging; partly p62/NF-κB mediated

## Footnotes

[^gutierrez2004]: doi:10.1016/j.cell.2004.11.038 · in-vitro · model: RAW 264.7 murine macrophages + BCG/H37Rv *M. tuberculosis*; also validated in bone marrow-derived and human peripheral blood monocyte-derived macrophages · Gutierrez et al. 2004 Cell · founding xenophagy paper; starvation and rapamycin (50 µg/ml) + IFN-γ activate autophagic killing of mycobacteria; virulent H37Rv is suppressed by autophagy induction but paper does not identify ESX-1 as the evasion mechanism (ESX-1/EsxA attribution is from later literature) · archive: bronze OA (downloaded)

[^thurston2009]: doi:10.1038/ni.1800 · in-vitro · model: HeLa cells + *Salmonella enterica* Typhimurium · Thurston et al. 2009 Nature Immunology · identifies NDP52 as a novel cytosolic autophagy receptor for ubiquitin-coated *Salmonella*; NDP52 binds ubiquitin via its zinc-finger domain and recruits TBK1 complexes (via Nap1/Sintbad adaptors); NDP52 siRNA causes hyper-proliferation of intracellular bacteria; NDP52 detected on ubiquitin-coated bacteria in LAMP1-negative (cytosolic) compartment · note: galectin-8 recruitment to NDP52 is from Thurston 2012, not this paper · local PDF available

[^wild2011]: doi:10.1126/science.1205405 · in-vitro · model: HeLa/U2OS cells + *Salmonella enterica* Typhimurium · Wild et al. 2011 Science · TBK1 phosphorylates OPTN at Ser177 → dramatically enhanced LC3 affinity; Ser177Ala mutant fails to restrict bacterial growth despite intact ubiquitin binding; OPTN is rate-limiting xenophagy receptor in this system · archive: not_oa #gap/no-fulltext-access — claims not independently verified against full PDF

[^thurston2012]: doi:10.1038/nature10744 · in-vitro · model: HeLa cells + *Salmonella enterica* Typhimurium · Thurston et al. 2012 Nature · galectin-8 binds damaged SCV membranes (exposed β-galactosides) and directly recruits NDP52 as an early pathogen-detection signal independent of ubiquitin coating; galectin-8 KD impairs xenophagy · archive: not_oa #gap/no-fulltext-access — claims not independently verified against full PDF

[^levine2011]: doi:10.1038/nature09782 · review · model: multi-system (in-vitro + in-vivo + human epidemiology) · Levine B, Mizushima N & Virgin HW 2011 Nature Vol 469 pp 323–335 · comprehensive review of autophagy in immunity and inflammation; covers xenophagy mechanisms, IFN-γ, bacterial evasion (ActA/Listeria; IcsB/Shigella; mycobacterial evasion strategies), and host–pathogen co-evolution; Table 1 catalogs key autophagy proteins and their immune functions · local PDF available; note: task brief cited wrong DOI (10.1016/j.cell.2010.12.024 = Chromatin Remodeling SnapShot); corrected to 10.1038/nature09782

[^tumbarello2015]: doi:10.1371/journal.ppat.1005174 · in-vitro · model: HeLa/RPE cells + *Salmonella* Typhimurium; also MEFs from myosin VI KO (Snell's waltzer) mice · Tumbarello et al. 2015 PLoS Pathogens · TAX1BP1 is a novel xenophagy receptor recruited to ubiquitin-positive cytosolic Salmonella via its ZF2 domain; TAX1BP1 siRNA causes accumulation of ubiquitin-positive bacteria (cargo-recognition defect); myosin VI loss causes distinct later-stage defect — ubiquitin-positive bacteria accumulate *inside* LC3-positive autophagosomes (maturation defect); myosin VI KD causes stronger *Salmonella* hyper-proliferation than simultaneous triple KD of TAX1BP1+NDP52+OPTN; ubiquitin-binding site in all three receptors overlaps with myosin VI binding site · gold OA (downloaded)

[^bhatt2009]: doi:10.4161/auto.5.8.10177 · in-vitro · model: murine macrophages + *L. monocytogenes* · Bhatt 2009 Autophagy · ActA coating of cytosolic *Listeria* is required for autophagy evasion; ActA-deficient mutants are efficiently captured by autophagy · bronze OA (pending download)

[^chua2022]: doi:10.1080/15548627.2021.1926656 · review · model: ALS patient cohorts + cell-culture · Chua, De Calbiac, Kabashi & Barmada 2022 Autophagy · TBK1 loss-of-function mutations are frequent in familial ALS; TBK1 regulates selective autophagy (xenophagy and mitophagy) via OPTN/NDP52/p62 phosphorylation; mechanistic links to neurodegeneration reviewed · pending download
