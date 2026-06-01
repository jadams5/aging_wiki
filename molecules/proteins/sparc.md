---
type: protein
aliases: [osteonectin, BM-40, ON, SPRC_HUMAN, secreted protein acidic and rich in cysteine]
uniprot: P09486
ncbi-gene: 6678
hgnc: 11219
ensembl: ENSG00000113140
genage-id: null   # not in GenAge Build 21 (307 genes, checked 2026-05-29); absent confirmed
mouse-ortholog: Sparc (MGI:98373)   # one-to-one ortholog; MGI ID confirmed via UniProt P07214 cross-reference 2026-05-29
pathways: ["[[tgf-beta-smad]]", "[[ecm-remodeling]]", "[[vegf-signaling]]"]
hallmarks: ["[[loss-of-proteostasis]]", "[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]"]
sens-categories: []
druggability-tier: 3
gtex-aging-correlation: null   # #gap/needs-gtex-age-stratified
mr-causal-evidence: not-tested
caused-by: ["[[tgf-beta-smad]]"]
causes: ["[[ecm-remodeling]]", "[[loss-of-proteostasis]]"]
literature-checked-through: 2026-05-29
verified: true
verified-date: 2026-05-29
verified-by: claude
verified-scope: "Canonical-DB identity fields (UniProt P09486, NCBI Gene 6678, HGNC 11219, Ensembl ENSG00000113140) confirmed via UniProt REST API. Mouse ortholog MGI:98373 confirmed via UniProt P07214 cross-reference. GenAge absence confirmed (SPARC not in Build 21, 307 genes). Druggability tier 3 confirmed via Open Targets (med-quality pocket SM; no approved drug, no Phase 1 clinical). Tyshkovskiy 2026 aging claims cross-checked against verified study page. Primary-source PDFs for SPARC-null knockout phenotype papers (Bradshaw 2002/2003, Rentz 2007, Gehwolf 2016, etc.) were triggered for download but remained archive-pending at verification time — knockout phenotype claims sourced from training knowledge with DOI-confirmed citations; re-verify against PDFs when downloads complete."
---

> Partially verified 2026-05-29 (claude). Identity fields confirmed via live databases; knockout-phenotype claims (Bradshaw 2002/2003 JID/PNAS, Rentz 2007 JBC, Gehwolf 2016 Sci Rep, etc.) are from training knowledge with DOI-confirmed archive entries — primary-source PDFs triggered for download but pending at verification time. Quantitative phenotype claims (fibril diameter, tensile strength, adiposity fractions) should be re-checked against source PDFs when downloads complete.

# SPARC (osteonectin / BM-40)

SPARC (Secreted Protein Acidic and Rich in Cysteine; also osteonectin, BM-40) is a **matricellular glycoprotein** — a secreted, non-structural ECM-associated protein that modulates collagen fibrillogenesis, cell-matrix adhesion (counter-adhesive function), and growth-factor signalling (VEGF, PDGF, TGF-β). It is not a load-bearing structural ECM component but a regulator of ECM assembly and tissue homeostasis. In aging biology, `Sparc` is among the conserved **down-regulated** genes in the multi-species transcriptomic-clock analysis by Tyshkovskiy et al. 2026, placing it in the "regenerative capacity" gene set alongside `Col1a1`, `Col3a1`, and `Nrep` — representing the progressive loss of ECM-maintenance and wound-healing capacity that accompanies aging across rodents and primates. [^tyshkovskiy2026-sparc]

---

## Identity

| Field | Value |
|---|---|
| UniProt | P09486 (SPRC_HUMAN) — Swiss-Prot (manually curated) |
| NCBI Gene | 6678 |
| HGNC symbol | SPARC |
| Ensembl | ENSG00000113140 |
| Mouse ortholog | Sparc (one-to-one; MGI:98373 — confirmed via UniProt P07214 cross-reference) |
| GenAge | Not in GenAge Build 21 (307 human genes; confirmed 2026-05-29) |
| OMIM | 182120 (gene); 616507 (osteogenesis imperfecta 17, autosomal recessive) |
| Chromosomal locus | 5q31.3–q32 |
| Canonical protein length | 303 amino acids (including signal peptide) |

---

## Molecular biology

### Domain architecture

SPARC is a **303 amino acid secreted glycoprotein** (UniProt P09486). Its domain structure comprises three modules:[^uniprot-p09486]

- **Signal peptide** (residues 1–17) — cleaved co-translationally; the mature secreted form begins at approximately residue 18.
- **Acidic N-terminal domain** (roughly residues 18–70) — low-affinity, high-capacity calcium-binding and albumin-binding region; contributes to the acidic character of the protein (pI ~4.3 for the mature form).
- **Follistatin-like (cysteine-rich) domain** (residues ~71–150; UniProt annotation: follistatin-like 71–93, Kazal-like 89–151) — contains 5 disulfide bonds in a compact inhibitory cystine-knot fold related to follistatin; binds VEGF and PDGF and mediates their anti-mitogenic/growth-inhibitory effects; heparin-binding capacity resides here.
- **Extracellular calcium-binding (EC) / EF-hand domain** (residues ~205–303; EF-hand 261–296) — high-affinity calcium-binding; collagen-binding region; two calcium-binding sites; mediates interaction with fibrillar collagens and basement membrane proteins.

The protein carries **one N-linked glycosylation site** (Asn116) and **seven disulfide bonds**. Two calcium-binding sites are defined by the EC domain; copper binding has also been reported.[^uniprot-p09486]

### Matricellular function

The matricellular protein concept (Sage, Bornstein and others) places SPARC among a group of ECM-associated proteins whose primary role is **modulatory rather than structural** — they are transiently expressed at sites of tissue injury and remodelling, where they regulate cell-matrix and cell-growth-factor interactions without contributing mechanical load-bearing function.[^bornstein2002]

**Counter-adhesive function.** SPARC is classically described as **counter-adhesive**: it disrupts focal adhesion formation, promotes cell rounding, and inhibits cell spreading and migration on fibronectin and vitronectin substrates. This is mediated through competition with adhesive matricellular proteins for integrin occupancy and through modulation of focal adhesion kinase (FAK) signalling. SPARC displaces vitronectin from its binding sites and antagonizes vitronectin-mediated integrin engagement.[^rosenblatt1997]

**Collagen fibrillogenesis regulation.** SPARC directly interacts with procollagen I and regulates its processing and incorporation into fibrillar matrices. SPARC-null dermal fibroblasts show defective procollagen I processing and produce disorganized collagen fibrils with abnormal diameter distributions. This places SPARC as a co-regulator of collagen fibril geometry, distinct from the structural role of fibrillar collagens themselves.[^rentz2007]

**Growth-factor antagonism.** The cysteine-rich follistatin-like domain binds and sequesters **VEGF** (blocking its mitogenic effect on microvascular endothelial cells)[^kupprion1998] and **PDGF**, reducing proliferative signalling in fibroblasts and endothelial cells at wound sites. SPARC is induced by TGF-β1 in dermal fibroblasts from both young and aged donors, suggesting it participates downstream of TGF-β in collagen-deposition responses.[^reed1994]

---

## Expression and tissue context

SPARC is most highly expressed in tissues with high ECM turnover and remodelling activity: **bone** (osteoblasts, where the alias "osteonectin" reflects early characterization as the major non-collagenous bone protein), **dermis** (fibroblasts), **endothelium**, **platelets**, and sites of active wound healing. It is also expressed in tendons, cartilage, gut stroma, and the pancreas.

In human skin, SPARC expression is higher in young than aged skin. In dermal fibroblast culture, recombinant SPARC increases type I collagen production, decreases MMP-1 secretion, and phosphorylates R-SMADs in a TGF-β receptor-dependent manner — establishing SPARC as a TGF-β pathway activator rather than a simple downstream effector, and suggesting that the age-associated decline in SPARC expression contributes to skin aging by reducing ECM integrity.[^ham2023]

In the context of adipose tissue, SPARC expression is elevated in adipocytes and may link obesity to altered ECM remodelling: SPARC was identified as a newly up-regulated factor in obesity, suggesting a mechanistic connection between adipose ECM stiffening and metabolic pathology.[^tartare2001] SPARC-null mice develop **increased adiposity** without significant changes in overall body weight, consistent with a role in fat depot ECM architecture and adipocyte differentiation.[^bradshaw2003-adiposity]

In the pancreas, SPARC-null mice develop impaired glucose homeostasis and reduced insulin secretory capacity, potentially through effects on islet cell-matrix interactions and GLUT2 expression, suggesting SPARC loss may contribute to a diabetes-like metabolic phenotype.[^atorrasagasti2019]

---

## SPARC in aging: conserved down-regulation across species

In the multi-species transcriptomic-clock analysis of Tyshkovskiy et al. 2026, **`Sparc` was among the conserved genes down-regulated with chronological aging and associated with higher mortality (negatively with maximum lifespan)** across mouse, rat, crab-eating macaque, and human.[^tyshkovskiy2026-sparc] The paper explicitly notes that `Sparc` "encodes a regulator of extracellular matrix (ECM) synthesis, differentiation and wound healing" and places its downregulation within the cluster of genes representing **declining regenerative capacity** with age.

The conserved down-regulated gene cluster — `Sparc`, `Nrep`, `Col1a1`, `Col3a1` — is the biological counterpart to the well-characterized conserved UP-regulated cluster (`Gpnmb`, `Cdkn1a`/p21, `Lgals3`/galectin-3, `Cst7`, `Eda2r`). The interpretation is:

- **Up cluster:** rising burden of senescence, inflammation, lysosomal stress, and SASP.
- **Down cluster:** declining capacity for ECM synthesis, structural repair, wound healing, and tissue-architecture maintenance.

SPARC's inclusion in this down-regulated set is mechanistically coherent: SPARC is required for proper collagen fibrillogenesis; its decline with age would be expected to impair both wound healing and the ongoing replacement of fragmented/cross-linked fibrillar collagens (see [[col1a1]], [[col3a1]]).

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — SPARC and its collagen-regulatory function are conserved; ECM module is present across all four species in Tyshkovskiy 2026 |
| Phenotype conserved in humans? | partial — SPARC-null phenotypes established in mice; human age-associated decline inferred from multi-species transcriptomic data (Tyshkovskiy 2026) and tendon aging studies; direct human-specific measurements sparse #gap/needs-human-replication |
| Replicated in humans? | partial — transcriptomic down-regulation across species including human (Tyshkovskiy 2026); reduced SPARC in aged human skin confirmed with in-vitro functional consequences (Ham 2023); circulating SPARC protein age-trajectory in humans not well-characterized #gap/needs-human-replication |

---

## SPARC-null mouse phenotypes

Loss-of-function studies in SPARC-null mice establish the following biological roles:

**Wound healing.** SPARC-null mice exhibit **accelerated cutaneous wound closure** compared to wild-type controls — a counter-intuitive finding given SPARC's role in collagen deposition. Mechanistically, the accelerated closure was attributed to reduced cell-matrix restraint (less counter-adhesive tension), facilitating keratinocyte and fibroblast migration, at the cost of diminished scar quality and tensile strength.[^bradshaw2002] This phenotype inverts in aged mice: in aged SPARC-null mice the angiogenic and pro-healing capacity that is enhanced in young null mice disappears, suggesting SPARC's role in tissue repair may become more critical under the reduced baseline regenerative capacity of aged tissue.[^reed2005]

**Dermal collagen architecture.** SPARC-null dermis shows **decreased collagen fibril diameter and reduced tensile strength**, establishing SPARC as required for proper fibril geometry rather than fibril formation per se.[^bradshaw2003]

**Collagen fibrillogenesis in vitro.** SPARC-null dermal fibroblasts show defective procollagen I processing, reduced association of procollagen with the cell surface, and altered fibril nucleation kinetics — demonstrating a cell-autonomous requirement for SPARC in collagen matrix assembly.[^rentz2007]

**Tendons and aging.** SPARC expression **declines with aging in tendons**, and loss of SPARC impairs collagen fibrillogenesis and mechanical strength in tendon tissue. Reduced SPARC levels in aged tendons correlate with increased adipogenic gene expression and lipid accumulation — connecting SPARC loss to the fatty infiltration phenotype observed in aged/injured musculotendinous tissue.[^gehwolf2016]

**Adiposity.** SPARC-null mice develop increased body fat as a fraction of body composition despite similar total body weight, consistent with a role for SPARC in adipocyte-ECM interactions and fat depot architecture.[^bradshaw2003-adiposity]

**Cardiac fibrosis.** SPARC is expressed by macrophages after cardiac injury and modulates collagen crosslinking and fibrotic remodelling; SPARC-null mice show reduced fibrillar collagen deposition and altered inflammatory outcomes following myocardial infarction.[^bradshaw2016-cardiac]

**Ocular fibrosis.** SPARC silencing (siRNA) markedly reduces post-operative fibrosis in conjunctiva by inhibiting TGF-β/Smad2/3-mediated collagen deposition — establishing SPARC as a downstream effector of TGF-β fibrotic signalling in ocular tissue.[^seet2018][^fan2021]

---

## Druggability (aging-context tier 3)

SPARC receives **tier 3** (predicted druggable but no validated aging-specific clinical probe) on the aging-context convention. Rationale:

- SPARC is a **secreted matricellular glycoprotein**: its primary druggable activities are extracellular protein–protein interactions (with collagens, VEGF, PDGF, and integrins) rather than an intracellular enzymatic active site. Small-molecule targeting of such interactions is feasible in principle but substantially harder than kinase or receptor inhibition.
- No FDA-approved drug targets SPARC specifically. No validated high-quality probe for aging/ECM indications exists.
- **siRNA knockdown** is the best current tool (Seet et al. 2018, ocular fibrosis context) — this establishes molecular druggability but not a pharmacologically deployable probe.
- An indirect angle: SPARC's role as a TGF-β target gene means TGF-β pathway modulators will affect SPARC levels. For aging ECM purposes, whether restoring SPARC expression in aged tissue would rescue regenerative capacity is an untested hypothesis. #gap/needs-human-replication #gap/no-mechanism
- **Context-dependence note:** SPARC's role is not uniformly pro-regenerative. In cardiovascular contexts, SPARC deletion attenuates cardiac injury from aging, myocardial infarction, and pressure overload — and elevated plasma SPARC correlates with hypertension, obesity, and hsCRP.[^toba2024] This suggests SPARC may be a net-detrimental proinflammatory factor in diseased cardiac tissue, contrasting with its pro-regenerative role in skin and tendon ECM. The therapeutic valence of SPARC manipulation depends strongly on tissue context and disease state.

---

## Gaps

- SPARC protein levels in human plasma/serum across the adult lifespan are not well characterized; the Tyshkovskiy 2026 down-regulation signal is at the **transcriptomic** level. Circulating SPARC as a human aging biomarker has not been validated in a large cohort (contrast GPNMB UK Biobank n=50,117). #gap/needs-human-replication
- Whether restoring SPARC expression in aged tissues would rescue collagen fibril geometry, wound healing, or tendon integrity is untested in normally-aging animals. #gap/no-mechanism
- `gtex-aging-correlation` (Spearman ρ, age-stratified) not yet queried from GTEx v10 API. #gap/needs-gtex-age-stratified
- Whether the aging-associated SPARC down-regulation is driven by epigenetic silencing, transcription-factor loss, or microRNA upregulation is unknown. #gap/no-mechanism
- Mendelian randomization of SPARC on longevity/mortality outcomes has not been published. #gap/no-mechanism
- SPARC's therapeutic valence is tissue- and disease-context dependent: it is pro-regenerative in skin/tendon ECM aging but proinflammatory and potentially deleterious in cardiac disease contexts (SPARC deletion attenuates cardiac aging injury). Any therapeutic strategy targeting SPARC must account for this bidirectionality. #gap/contradictory-evidence

---

## Related pages

- [[col1a1]] · [[col3a1]] · [[nrep]] · [[transcriptomic-clock-tage]] · [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]]
- [[tgf-beta-smad]] · [[ecm-remodeling]] · [[vegf-signaling]]
- [[loss-of-proteostasis]] · [[altered-intercellular-communication]] · [[stem-cell-exhaustion]]
- [[gpnmb]] · [[p21]] · [[lgals3]] (members of the conserved UP-regulated aging gene set)

---

## Footnotes

[^tyshkovskiy2026-sparc]: [[studies/tyshkovskiy-2026-universal-transcriptomic-hallmarks]] · n=11,165 transcriptomes, 4 species · meta-analysis (multi-species transcriptomic-clock elastic-net + gene-trait mixed-effects) · model: mouse/rat/macaque/human, multi-tissue · `Sparc` conserved in the down-regulated regenerative-capacity gene set (alongside `Nrep`, `Col1a1`, `Col3a1`); negatively associated with chronological age and expected mortality (positively associated with maximum lifespan). *Pre-verified on the study page.*

[^uniprot-p09486]: UniProt P09486 (SPRC_HUMAN), Swiss-Prot manually curated entry, accessed 2026-05-29 · protein function, domain annotation (follistatin-like 71–93, Kazal-like 89–151, EF-hand 261–296), subcellular localisation, PTM sites, disulfide-bond topology, signal peptide (residues 1–17), N-glycosylation Asn116. *Background claim — pending verifier PDF cross-check.*

[^bornstein2002]: doi:10.1080/03008200290001050 · Bornstein P, Sage EH · Connect Tissue Res 2002 · review · n/a · concept of matricellular proteins (SPARC, osteopontin, tenascin, thrombospondin) as modulatory rather than structural ECM components. *Background claim — archive pending.*

[^rosenblatt1997]: doi:10.1042/bj3240311 · Rosenblatt S, Bassuk JA, Alpers CE, Sage EH, Timpl R, Preissner KT · Biochem J 1997 · in-vitro · characterizes SPARC counter-adhesive function via competition with vitronectin for integrin binding; establishes BM-40/SPARC as antagonist of vitronectin-mediated adhesion. *Background claim — archive pending.*

[^rentz2007]: doi:10.1074/jbc.m700167200 · Rentz TJ, Poobalarahi F, Bornstein P, Sage EH, Bradshaw AD · J Biol Chem 2007 · in-vitro (SPARC-null dermal fibroblasts) · SPARC-null cells show defective procollagen I association with cell surface and impaired fibril nucleation; SPARC regulates processing of procollagen I and collagen fibrillogenesis. *DOI confirmed in archive (fwci 7.82, cited_by 155); pending verifier download.*

[^kupprion1998]: doi:10.1074/jbc.273.45.29635 · Kupprion C, Motamed K, Sage EH · J Biol Chem 1998 · in-vitro · SPARC inhibits VEGF-stimulated microvascular endothelial cell proliferation; anti-mitogenic activity resides in the follistatin-like cysteine-rich domain. *DOI confirmed in archive (fwci 10.22, cited_by 281); pending verifier download.*

[^reed1994]: doi:10.1002/jcp.1041580121 · Reed MJ, Vernon RB, Abrass IB, Sage EH · J Cell Physiol 1994 · in-vitro (human dermal fibroblasts, young vs aged donors) · TGF-β1 induces SPARC and type I collagen expression equivalently in fibroblasts from young and aged donors; fibroblast intrinsic TGF-β responsiveness preserved with aging. *DOI confirmed in archive (cited_by 178); closed access, pending verifier download.*

[^tartare2001]: doi:10.1074/jbc.m010634200 · Tartare-Deckert S, Chavey C, Monthouel MN, Gautier N, Van Obberghen E · J Biol Chem 2001 · in-vivo/in-vitro (mouse adipose, cell culture) · SPARC newly identified as up-regulated in obesity; adipocyte SPARC expression elevated; suggests SPARC participates in adipose ECM remodelling in metabolic disease. *Background claim — archive pending.*

[^bradshaw2003-adiposity]: doi:10.1073/pnas.1030790100 · Bradshaw AD, Graves DC, Motamed K, Sage EH · PNAS 2003 · in-vivo (SPARC-null mice) · SPARC-null mice develop increased adiposity without significant differences in overall body weight; fat depot mass and adipocyte size increased; establishes SPARC role in adipocyte/ECM homeostasis. *DOI confirmed in archive (fwci 7.33, cited_by 220); pending verifier download.*

[^bradshaw2002]: doi:10.1177/002215540205000101 · Bradshaw AD, Reed MJ, Carbon JG, Pinney E, Sage EH · J Histochem Cytochem 2002 · in-vivo (SPARC-null mice) · SPARC-null mice exhibit accelerated cutaneous wound closure vs wild-type; reduced SPARC expression diminishes cell-matrix adhesive restraint, facilitating migration at the cost of fibril quality. *DOI confirmed in archive (fwci 7.08, cited_by 161); pending verifier download.*

[^bradshaw2003]: doi:10.1046/j.1523-1747.2003.12241.x · Bradshaw AD, Puolakkainen P, Dasgupta J, Davidson JM, Wight TN, Sage EH · J Invest Dermatol 2003 · in-vivo (SPARC-null mice) · SPARC-null dermis shows decreased collagen fibril diameter and reduced tensile strength vs wild-type; SPARC required for normal dermal collagen fibril geometry. *DOI confirmed in archive (fwci 7.78, cited_by 232); pending verifier download.*

[^reed2005]: doi:10.1002/jcp.20348 · Reed MJ, Puolakkainen P, Lane TF, Dickerson D, Bornstein P, Sage EH · J Cell Physiol 2005 · in-vivo (aged SPARC-null vs wild-type mice) · enhanced angiogenic capacity characteristic of young SPARC-null mice disappears with age; suggests aging context erases the SPARC-null pro-healing phenotype. *Background claim — archive pending.*

[^gehwolf2016]: doi:10.1038/srep32635 · Gehwolf R, Wagner A, Bradshaw AD, Traweger A · Sci Rep 2016 · in-vivo (tendon, aging mouse + SPARC-null mouse) · SPARC expression declines with aging in tendons; SPARC loss impairs collagen fibrillogenesis and mechanical strength; aged tendons with reduced SPARC show increased adipogenic gene expression and lipid accumulation. *DOI confirmed in archive (fwci 2.24, cited_by 52); pending verifier download.*

[^bradshaw2016-cardiac]: doi:10.1016/j.yjmcc.2015.11.014 · Bradshaw AD · J Mol Cell Cardiol 2016 · review (in-vivo mouse data incorporated) · SPARC expressed by macrophages at cardiac injury sites; modulates collagen crosslinking and fibrillar ECM deposition; SPARC-null mice show blunted fibrillar collagen response to cardiac injury. *DOI confirmed in archive (fwci 4.76, cited_by 52); closed access, pending verifier download.*

[^seet2018]: doi:10.1136/bjophthalmol-2018-311937 · Seet LF, Wong TT · Br J Ophthalmol 2018 · in-vivo (mouse conjunctiva) · SPARC siRNA silencing markedly reduces collagen deposition and post-operative fibrosis in operated conjunctiva; establishes SPARC as a downstream TGF-β effector in ocular fibrosis and a therapeutic anti-scarring target. *DOI confirmed in archive (fwci 2.32, cited_by 26); pending verifier download.*

[^fan2021]: doi:10.1016/j.abb.2021.109049 · Fan J, Chen Y · Arch Biochem Biophys 2021 · in-vitro (human pterygium fibroblasts) · SPARC knockdown suppresses TGF-β1-induced fibrotic markers and Smad2/3 activation; SPARC acts upstream of or in parallel with Smad2/3 in the TGF-β fibrosis cascade. *Background claim — archive pending.*

[^atorrasagasti2019]: doi:10.1042/cs20180714 · Atorrasagasti C, Onorato A, Gimeno ML et al. · Clin Sci 2019 · in-vivo (SPARC-null mice) · SPARC-null mice develop impaired glucose homeostasis and reduced insulin secretion; GLUT2 expression in islets dramatically reduced; establishes SPARC requirement for normal pancreatic beta-cell function and metabolic homeostasis. *DOI confirmed in archive (fwci 6.33, cited_by 43); pending verifier download.*

[^toba2024]: doi:10.1152/ajpheart.00565.2024 · Toba H, Takai S · Am J Physiol Heart Circ Physiol 2024 · review · SPARC acts as a proinflammatory factor in cardiovascular disease contexts; SPARC deletion attenuates cardiac injury from aging, myocardial infarction, and pressure overload; elevated plasma SPARC correlates positively with hypertension, obesity, and hsCRP in clinical studies. Contrasts with SPARC's pro-regenerative role in skin/tendon ECM — tissue and disease context determines therapeutic valence. *Added 2026-05-29 during recency check.*

[^ham2023]: doi:10.3390/ijms241512179 · Ham SM, Song MJ, Yoon HS, Lee DH, Chung JH, Lee ST · Int J Mol Sci 2023 · in-vitro + human tissue (foreskin fibroblasts, young vs aged skin samples) · SPARC expression higher in young skin vs aged skin; recombinant SPARC increases type I collagen production and decreases MMP-1 in fibroblasts; SPARC activates R-SMAD phosphorylation via TGF-β receptor type 1; SPARC-induced ECM effects reversed by TGF-βR1 inhibitor. *Added 2026-05-29 during recency check; OA via PMC (PMCID PMC10419001).*
