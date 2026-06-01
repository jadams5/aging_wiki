---
type: protein
aliases: [LOX, protein-lysine 6-oxidase, lysyl oxidase]
uniprot: P28300
ncbi-gene: 4015
hgnc: 6664
ensembl: ENSG00000113083
genage-id: null
mouse-ortholog: Lox
pathways: []
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
druggability-tier: 2
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[loss-of-proteostasis]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "UniProt P28300 structural/catalytic fields verified against UniProt API. Vachhani 2025, Staiculescu 2017, Yao 2022, Foote 2024 verified against full PDFs. Herchenhan 2015 and Liu 2004 DOIs corrected via PubMed efetch (wrong DOIs in original). Cenizo 2006 (PMID 16842595) and Moulin 2017 (PMID 27396912) verified at abstract level via PubMed efetch — both closed-access (not_oa); full-PDF verification of fibroblast cell counts and RT-PCR quantitative details not possible. Behmoaras 2008, Jiang 2014, Szauter 2005, Remus 2012 not re-read (closed-access or lower-priority downstream claims). Schmelzer 2020 not re-read (review; pending download at time of verification)."
---

# LOX (Protein-lysine 6-oxidase)

LOX is the extracellular enzyme that makes collagen and elastin fibers mechanically functional. By oxidatively deaminating lysine and hydroxylysine residues on nascent collagen and tropoelastin, LOX generates reactive allysine intermediates that spontaneously condense into covalent inter-chain cross-links — the chemical bonds that convert soluble monomers into load-bearing fibers. Declining LOX activity with age reduces the formation of new enzymatic cross-links in the dermis and arterial wall, contributing to progressive mechanical failure of the ECM. This decline is partially offset — and mechanically complicated — by a parallel rise in non-enzymatic AGE cross-links via the [[advanced-glycation-end-products]] pathway.

## Identity

- **UniProt:** P28300 (LYOX_HUMAN)
- **NCBI Gene:** 4015
- **HGNC:** 6664
- **Ensembl:** ENSG00000113083
- **EC number:** 1.4.3.13
- **Chromosome:** 5q23.1
- **Mouse ortholog:** Lox (one-to-one; high sequence conservation)
- **Gene name:** LOX (official HGNC symbol)

## Structure and catalytic mechanism

LOX is synthesized as an inactive **pro-LOX** precursor (~46.9 kDa, 417 amino acids). The domain organization is:

| Region | Residues | Function |
|---|---|---|
| Signal peptide | 1–21 | Directs secretion |
| Propeptide | 22–168 | Inhibitory; removed extracellularly |
| Catalytic domain | 169–417 | Copper-binding + LTQ cofactor |
| Lysyl-oxidase-like core | 213–417 | Core oxidase fold |

**BMP-1 cleavage** — the procollagen C-proteinase BMP-1 (bone morphogenetic protein-1) cleaves the propeptide at residue 168 extracellularly, releasing the active ~32–39 kDa mature LOX. This cleavage does not increase intrinsic enzymatic activity but increases collagen binding. A secondary cleavage by ADAMTS2/ADAMTS14 at residues 218–219 reduces collagen-binding activity [^uniprot-p28300].

**Cofactors — two obligate inorganic/organic co-factors:**

1. **Copper (Cu²⁺)** — coordinated by residues His-292, His-294, and His-296 in the catalytic domain; absolutely required for catalytic activity. This is why copper deficiency (dietary or genetic) causes connective tissue laxity resembling LOX loss-of-function.
2. **Lysyl-tyrosylquinone (LTQ) cofactor** — an autocatalytically generated quinone cross-link between Lys-320 (ε-amino) and Tyr-355 (2',4',5'-topaquinone) within the catalytic domain [^uniprot-p28300]. LTQ is unique to the LOX family (contrasts with the TPQ cofactor in other copper amine oxidases). The cofactor is the reactive species that accepts the lysine side-chain and executes the oxidative deamination.

**Reaction:**
```
L-lysyl-[collagen/elastin] + O₂ + H₂O → allysyl-[collagen/elastin] + H₂O₂ + NH₄⁺
```

The allysyl (ε-aldehyde) product spontaneously condenses with neighboring lysine or allysyl residues to form Schiff bases and aldol condensation products, which mature into pyridinium cross-links (hydroxylysyl pyridinoline HP, lysyl pyridinoline LP) in collagen and **desmosine/isodesmosine** in elastin [^schmelzer2020]. These mature cross-links are stable, covalent, and irreversible under physiological conditions.

**Key PTMs (pro-LOX):** N-linked glycosylation at Asn-81, Asn-97, Asn-144; tyrosine sulfation at Tyr-187 (enhances collagen binding).

## LOX family context

LOX is the founding member of a five-enzyme family: **LOX, LOXL1, LOXL2, LOXL3, LOXL4**. All share the C-terminal copper amine oxidase domain and catalytic mechanism. Key distinctions:

- **LOX** — high expression during embryonic development, then declines; secreted; BMP-1 activated; primary role in collagen + elastin cross-linking during tissue formation and remodeling.
- **LOXL1** — more persistent expression through adulthood; critical for elastic fiber maintenance (LOXL1-null mice have severely defective elastin architecture and pelvic organ prolapse [^liu2004]); subject to age-related promoter methylation in skin fibroblasts [^moulin2017].
- **LOXL2/3/4** — contain scavenger receptor cysteine-rich (SRCR) N-terminal domains; implicated in fibrosis and cancer ECM remodeling.

## Expression and localization

LOX is a **secreted extracellular protein** that acts in the ECM immediately adjacent to the producing cell. Principal tissue sources: heart, skeletal muscle, aortic wall, lung, placenta, kidney, pancreas. In skin, both LOX and LOXL proteins are present in dermis and epidermis, associated with elastic fibers [^noblesse2004].

## Role in aging

### Declining LOX/LOXL expression in aged tissues

LOX and LOXL mRNA levels are reduced in adult skin fibroblasts compared with fibroblasts from children, as quantified by RT-PCR; LOXL expression is more strongly affected by age than LOX itself [^cenizo2006]. In rat aorta, LOX expression peaks during early postnatal development (when collagen and elastin fiber assembly is occurring) and declines sharply thereafter; LOXL1 expression persists longer but also falls during aging [^behmoaras2008]. Decreased expression during aging in urogenital tissues contributes to failed elastic fiber assembly and pelvic floor disorders [^jiang2014].

Separately, LOXL1 promoter methylation by DNMT3A has been documented in aged human skin fibroblasts — providing an epigenetic mechanism for the observed transcriptional silencing [^moulin2017]. This positions LOX-family decline as partly an [[epigenetic-alterations]] phenomenon.

**Functional consequence:** Reduced LOX activity means new collagen and elastin fibers cannot be properly cross-linked. Pre-existing fiber networks (assembled during development) remain, but with less mechanical reserve. Tissue repair and remodeling after injury are impaired [^herchenhan2015].

### The competing-cross-linker caveat

Aging involves two mechanistically opposed cross-linking trajectories that partially cancel each other at the tissue level:

| Cross-link type | Enzyme | Trend with age | Chemistry | Effect on mechanics |
|---|---|---|---|---|
| Enzymatic (HP/LP, desmosine) | LOX family | Decreases | Pyridinium / desmosine | Loss of ordered, load-optimal cross-links |
| Non-enzymatic ([[glucosepane]], [[pentosidine]]) | None (spontaneous) | Increases | Maillard-derived | Accumulation of stiff, brittle cross-links |

The net mechanical outcome in aged dermis and arterial wall is therefore **not simple weakness** but a shift toward more brittle, less elastic behavior: fewer enzymatic cross-links (which are organized and positioned to transmit load optimally) and more AGE cross-links (which form stochastically and impede elastin recoil). See [[advanced-glycation-end-products]] and [[glucosepane]] for the non-enzymatic pathway.

### Skin aging context

LOX activity decline is hypothesized to contribute to the mechanical decline of aged dermis — including loss of tensile strength, reduced elastic recoil, and impaired wound healing [^szauter2005]. The claim on [[dermis]] that LOX activity declines with age is anchored here; see `#gap/unsourced` resolution note below.

#gap/needs-human-replication — Current evidence for LOX expression decline is largely from fibroblast cell culture and rodent models; direct enzymatic activity measurements in aged vs young human dermis tissue biopsies are limited.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | LOX gene/protein highly conserved; copper-LTQ mechanism identical |
| Phenotype conserved in humans? | partial | LOX-null lethality from elastin defects is rodent; human loss-of-function variants → aortic aneurysm (not full lethality) |
| Replicated in humans? | partial | Expression decline confirmed in human fibroblasts; tissue-level activity data sparse |

## Cross-tissue relevance

LOX is not dermis-specific — its substrates (collagen I/III, elastin) are the principal structural proteins of all connective-tissue-rich organs:

- **[[cardiac-fibrosis]]** — LOX expression correlates with perivascular and interstitial fibrosis; the relationship is complex (LOX enables initial scar formation, but excessive LOX/LOXL2 in pathological fibrosis stiffens the myocardium)
- **Arterial wall** — LOX decline with age impairs elastic fiber maintenance; in one study, restoring OGG1 (base excision repair) in aged vessels upregulated LOX and normalized arterial compliance, implicating oxidative DNA damage as an upstream driver of vascular LOX decline [^foote2024]
- **Bone** — LOX cross-links osteoid collagen; impaired cross-linking reduces bone toughness independently of mineral density
- **Pulmonary fibrosis / systemic sclerosis** — LOXL2 overexpression is a key driver of fibrotic ECM stiffening; this is the primary therapeutic target context for LOX inhibitors

## LOX-null phenotype and disease associations

**LOX-knockout mouse (Lox⁻/⁻):** Perinatal lethality from cardiovascular and pulmonary abnormalities within a few hours of birth [^staiculescu2017]. Newborn Lox⁻/⁻ mice have fragmented elastic laminae and disorganized smooth muscle cells in the ascending aorta, with altered mechanical properties. This phenotype establishes that LOX is non-redundant for aortic wall integrity during development — LOXL1-4 cannot compensate.

**LOX heterozygous (Lox⁺/⁻):** Viable, but with reduced cross-linking capacity; cutis laxa-like phenotype has been reported in some contexts.

**Human LOX variants (UniProt):** Multiple pathogenic variants in LOX cause **Familial Thoracic Aortic Aneurysm 10 (AAT10)**. The Ile-280 variant (S→I substitution at position 280) reduces LOX activity by ~50%; Met-298→Arg (rs876657852) is also classified as an AAT10 pathogenic variant; quantitative activity data for Met-298→Arg are not available in UniProt [^uniprot-p28300]. Consistent with the mouse data, the primary human phenotype of LOX haploinsufficiency is aortic — not dermal — consistent with the much slower turnover of arterial ECM compared with skin.

**β-APN + angiotensin II mouse model:** Combined LOX/LOXL inhibition with BAPN plus angiotensin II infusion induces 90% abdominal aortic aneurysm incidence in apoE-KO mice, demonstrating the causal role of LOX family activity in aortic wall stability [^remus2012].

## Pharmacology and druggability

**Druggability: tier 2** — No FDA-approved LOX inhibitor; probe-quality inhibitors exist and have reached early-phase clinical trials.

**β-Aminopropionitrile (BAPN)** — classical irreversible LOX inhibitor; the toxic principle of *Lathyrus odoratus* (sweet pea) seeds, causing **lathyrism** (connective tissue failure) in animals consuming large quantities. Mechanism: BAPN reacts with the LTQ cofactor, permanently inactivating the enzyme. Used experimentally to create LOX-deficient animal models.

**PXS-5505 (Pharmaxis)** — a small-molecule pan-LOX inhibitor (inhibits LOX, LOXL1, LOXL2, LOXL3, LOXL4). In rodent systemic sclerosis models, PXS-5505 normalizes collagen/elastin cross-link formation and reduces fibrosis in skin, lung, heart, kidney, and liver [^yao2022]. A Phase I/IIa trial in advanced myelofibrosis patients (n=24) demonstrated tolerability and preliminary evidence of bone marrow collagen reduction over 24 weeks [^vachhani2025]. **Note: myelofibrosis, not aging** — this is the current clinical development context.

**Aging-context tier-2 rationale:** High-quality inhibitors (BAPN, PXS-5505) and an active clinical program exist, but the clinical program is in fibrotic disease (myelofibrosis, systemic sclerosis), not aging-rejuvenation. No LOX activator or stabilizer has reached clinical trials for aging indications. For aging, the therapeutic logic would be to increase LOX activity (or prevent its age-related decline), not inhibit it — the opposite direction from current clinical use.

#gap/long-term-unknown — Whether LOX activators or LOXL1-promoter demethylating strategies can restore functional ECM cross-linking in aged tissue is unestablished; dill-extract and Origanum-extract studies are preliminary in vitro/ex vivo only [^cenizo2006][^moulin2017].

## Pathway membership and protein interactions

Key direct interactors (UniProt-curated):
- **[[eln]]** (elastin) — primary substrate; LOX initiates desmosine cross-link formation in tropoelastin
- **[[col1a1]]** / **[[col3a1]]** — primary collagen substrates; HP/LP cross-link formation depends on LOX
- **[[fbn1]]** (fibrillin-1) — interacts with the LOX propeptide region; important for elastic fiber scaffolding
- EFEMP2 (fibulin-4), FBLN5 (fibulin-5) — fibulin chaperones that co-localize LOX with tropoelastin during elastic fiber assembly
- TGM2 (transglutaminase 2) — parallel cross-linking enzyme; may co-operate or compete at ECM substrates

## Footnotes

[^uniprot-p28300]: UniProt P28300 (LYOX_HUMAN), accessed 2026-05-19 · Swiss-Prot curated · catalytic mechanism, domain structure, cofactors, PTMs, BMP-1 cleavage site, and AAT10 disease variants

[^szauter2005]: doi:10.1016/j.patbio.2004.12.033 · Szauter KM et al. · *Pathol Biol* 2005 · n=not applicable · review · model: skin development and aging — describes multifunctional LOX roles and age-associated expression changes; locally unavailable (not_oa)

[^cenizo2006]: doi:10.1111/j.1600-0625.2006.00442.x · Cenizo V et al. · *Exp Dermatol* 2006 · PMID 16842595 · n=cell cultures · in-vitro · model: human skin fibroblasts — RT-PCR quantification showing LOX and LOXL mRNA levels decline in fibroblasts from adult skin compared with children; LOXL is noted as more affected by age than LOX; locally unavailable (not_oa) #gap/no-fulltext-access

[^moulin2017]: doi:10.1089/rej.2016.1832 · Moulin L et al. · *Rejuvenation Res* 2017 · PMID 27396912 · n=cell cultures · in-vitro · model: aged vs young human skin fibroblasts — ChIP showed higher DNMT3A binding to LOXL1 promoter in aged cells, concomitant with decreased LOXL1 mRNA and increased promoter methylation; luciferase reporter confirmed DNMT3A reduces LOXL1 transcriptional activity; Origanum majorana extract identified as DNMT3A inhibitor that restores LOXL1 secretion in aged fibroblasts; locally unavailable (not_oa) #gap/no-fulltext-access

[^behmoaras2008]: doi:10.1089/rej.2008.0760 · Behmoaras J et al. · *Rejuvenation Res* 2008 · n=rat tissues across lifespan · in-vivo · model: rat aorta — LOX expression peaks postnatally then declines sharply; LOXL1 persists longer; suggests different temporal roles; locally unavailable (not_oa)

[^jiang2014]: doi:10.1111/jog.12455 · Jiang Y et al. · *J Obstet Gynaecol Res* 2014 · PMID 25131766 · in-vivo · model: aging mice urogenital tissue — LOX family gene expression declines with age; #gap/needs-replication (single study, one tissue system)

[^noblesse2004]: doi:10.1111/j.0022-202x.2004.22330.x · Noblesse E, Cenizo V et al. · *J Invest Dermatol* 2004 · n=tissue samples · observational · model: human skin (dermis/epidermis) + skin equivalent — LOX and LOXL present in both dermis and epidermis, associated with elastic fibers

[^schmelzer2020]: doi:10.1002/iub.2213 · Schmelzer CEH, Hedtke T, Heinz A · *IUBMB Life* 2020 · review · model: elastin biochemistry — comprehensive review of elastin cross-link chemistry (desmosine/isodesmosine formation via LOX-initiated allysine condensation)

[^liu2004]: doi:10.1038/ng1297 · Liu X et al. · *Nat Genet* 2004 · PMID 14745449 · n=LOXL1-KO mice · in-vivo · model: mouse — LOXL1-null mice show failed elastin fiber deposition post partum, pelvic organ prolapse, enlarged lung airspaces, loose skin, and vascular abnormalities; LOXL1 localizes to elastogenesis sites and interacts with fibulin-5; establishes LOXL1 as non-redundant for elastic fiber maintenance

[^herchenhan2015]: doi:10.1074/jbc.M115.641670 · Herchenhan A et al. · *J Biol Chem* 2015 · PMID 25979340 · in-vitro (tendon) · model: human tenocyte-derived tendon constructs + BAPN inhibition — LOX inhibition produces structurally abnormal collagen fibrils with irregular profiles and widely dispersed diameters; establishes necessity of LOX for ordered fibrillogenesis and mechanical strength development

[^staiculescu2017]: doi:10.1152/ajpheart.00712.2016 · Staiculescu MC et al. · *Am J Physiol Heart Circ Physiol* 2017 · PMID 28550176 · in-vivo · model: Lox⁻/⁻ newborn mouse — fragmented elastic laminae, disorganized SMCs, altered aortic mechanical properties; Lox⁻/⁻ mice die within hours of birth from cardiovascular and pulmonary abnormalities; AA and DA show tortuosity, aneurysms, and patent ductus arteriosus; gene set enrichment analysis showed upregulation of ECM regulator genes in Lox⁻/⁻ aortas

[^remus2012]: doi:10.1152/ajpheart.00217.2012 · Remus EW et al. · *Am J Physiol Heart Circ Physiol* 2012 · PMID 22904155 · n=apoE-KO mice · in-vivo · model: mouse (BAPN + AngII) — 90% AAA incidence; establishes LOX family activity as critical for aortic stability

[^foote2024]: doi:10.1093/cvr/cvae091 · Foote K et al. · *Cardiovasc Res* 2024 · PMID 38717632 · in-vivo + in-vitro · model: aged mouse aorta (ages 22–72 wk) and human donor aortas — Ogg1 overexpression upregulates LOX and normalizes arterial compliance/distensibility parameters to levels of 72 wk mice; ECM proteomics identified LOX and WISP2 as key OGG1-regulated ECM proteins; in humans, 8-oxo-G increases with vascular stiffness while active OGG1 reduces with age; implicates BER/oxidative DNA damage as upstream driver of vascular LOX decline

[^yao2022]: doi:10.3390/ijms23105533 · Yao Y et al. · *Int J Mol Sci* 2022 · PMID 35628342 · in-vivo · model: rodent systemic sclerosis (bleomycin skin + multiple organ models) — PXS-5505 pan-LOX inhibitor (15 mg/kg oral) significantly reduced LOX overexpression, dermal thickness, and α-SMA; normalized collagen/elastin crosslink formation and reduced fibrosis in skin, lung, heart, kidney, and liver; LOX and LOXL2 protein both elevated in SSc patient biopsies vs healthy controls

[^vachhani2025]: doi:10.3324/haematol.2024.287231 · Vachhani P et al. · *Haematologica* 2025 · PMID 40241543 · n=24 (CEP; 27 total enrolled across DEP+CEP) · phase-1/2a · model: relapsed/refractory myelofibrosis — dose escalation established 200 mg BID as the CEP dose based on achieving >90% mean trough LOX/LOXL2 inhibition in plasma; 54% (13/24) completed 24 weeks; 92% of adverse events grade 1–2; one fatal on-treatment adverse event (febrile neutropenia → multi-organ failure, not considered treatment-related); preliminary BM collagen reduction observed; clinical context is fibrosis, not aging

## Limitations and gaps

- #gap/needs-human-replication — Direct tissue-level LOX enzymatic activity data in aged vs young human dermis (not cell culture) is limited; the aging claim rests primarily on fibroblast cell culture (Cenizo 2006, Moulin 2017) and rat aorta (Behmoaras 2008) rather than human tissue biopsies with enzymatic assays.
- #gap/no-mechanism — The upstream signals that reduce LOX expression during aging are not fully characterized (DNMT3A-mediated LOXL1 methylation is one mechanism; whether equivalent promoter-silencing operates for LOX itself is unstudied).
- #gap/dose-response-unclear — What level of LOX activity is sufficient to maintain functional ECM cross-linking in aged skin vs arterial wall is not established.
- The [[dermis]] claim that "LOX activity declines in aged human dermis" is anchored to the Cenizo 2006 mRNA decline in human skin fibroblast culture [^cenizo2006] — an mRNA decline, not a direct enzymatic activity measurement in tissue biopsies. #gap/needs-replication — direct enzymatic activity measurements in aged vs young human dermis tissue biopsies are needed to confirm the inferred activity decline.
- The aging-direction therapeutic problem: current clinical LOX inhibitors (for fibrosis) run in the opposite direction from what would be needed to reverse age-related LOX decline. No LOX activator has entered clinical development.
