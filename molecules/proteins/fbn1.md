---
type: protein
aliases: [FBN1, fibrillin 1, fibrillin-1]
uniprot: P35555
ncbi-gene: 2200
hgnc: 3603
ensembl: ENSG00000166147
genage-id: null
mouse-ortholog: Fbn1
pathways: []
hallmarks: ["[[loss-of-proteostasis]]"]
sens-categories: []
known-interactors: ["[[eln]]", "[[lox]]", "[[tgf-beta]]"]
druggability-tier: null
gtex-aging-correlation: null
mr-causal-evidence: not-tested
caused-by: []
causes: ["[[skin-aging]]"]
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Zeigler 2021, Watson 1999, Matt 2008, and Trask 2000 verified against local PDFs. Chen 2005 and Matt 2009 unverifiable (not_oa / no OA URL). UniProt P35555 domain annotation cross-checked. Kielty 2005 not_oa — LTBP specificity claim not independently verified. ~3,000-variant figure corrected against LOVD/ClinVar. Losartan human-trial framing corrected to reflect mixed/null large-RCT evidence."
---

# Fibrillin-1 (FBN1)

Fibrillin-1 is the principal structural glycoprotein of extracellular microfibrils — 10–12 nm diameter polymeric assemblies that serve as the scaffold onto which elastin is deposited during elastic fiber formation. Beyond its structural role, fibrillin-1 sequesters latent TGF-β complexes in the ECM, making it a bidirectional regulator of both tissue mechanics and growth-factor bioavailability. In aged and photoaged skin, the fibrillin-1-rich microfibrillar network is substantially depleted, contributing to loss of dermal elasticity, wrinkle formation, and the aberrant elastotic material that defines [[skin-aging|solar elastosis]].

## Identity

- **UniProt:** P35555 (FBN1_HUMAN)
- **NCBI Gene:** 2200
- **HGNC:** 3603; symbol FBN1
- **Ensembl:** ENSG00000166147
- **Chromosomal location:** 15q21.1
- **Mouse ortholog:** Fbn1 (one-to-one; used in Marfan and elastic-fiber assembly models)
- **Precursor length:** 2,871 amino acids; 350 kDa glycoprotein [^uniprot-p35555] [^matt2008]
- **GenAge entry:** not present (FBN1 is not in the HAGR GenAge curated aging-gene set) #gap/needs-canonical-id

## Domain architecture

Fibrillin-1 has a highly repetitive modular structure [^zeigler2021]:

| Domain type | Count | Function |
|---|---|---|
| EGF-like domains | 47 total (43 calcium-binding) | Calcium-binding; structural rigidity; intermolecular contacts in microfibril lattice |
| TB (TGF-β-binding-protein-like) / 8-cys domains | 7 | Bind latent TGF-β complexes (LTBP family); also mediate cell-surface and BMP binding |
| Hybrid domains | 2 | Domain-interface linkers |
| N-terminal unique region | 1 | Initiates microfibrillar polymerization |

Note: Current UniProt P35555 flat-file annotation lists 40 calcium-binding EGF-like domains and 9 TB domains — counts differ from the standard published in the Marfan literature [^zeigler2021] due to evolving domain-boundary curation methodology. The Zeigler 2021 figures (43 cbEGF, 7 TB) are used here as they reflect the canonical numbering in the primary FBN1 literature. [^uniprot-p35555]

The TB domains are the structural basis for TGF-β sequestration: latent TGF-β binding proteins (LTBPs) dock onto fibrillin TB domains, tethering the latent TGF-β complex to the ECM and limiting its bioavailability [^zeigler2021].

## Function

### Microfibril scaffolding and elastic fiber assembly

Fibrillin-1 polymerizes extracellularly into 10–12 nm diameter microfibrils that display a characteristic "beads-on-a-string" periodicity of ~56 nm under electron microscopy [^kielty2005]. These microfibrils:

1. Appear early in elastic fiber assembly, before tropoelastin deposition begins.
2. Provide a scaffold to which secreted tropoelastin monomers adsorb — fibrillin-1 N-terminal domains interact directly with tropoelastin [^trask2000]. This interaction is thought to orient and concentrate tropoelastin molecules, facilitating the lateral alignment needed for efficient LOX-mediated cross-linking by [[lox]].
3. Persist as a peripheral sheath surrounding mature elastic fibers, protecting the elastin core from mechanical fatigue and proteolytic attack.

In tissues with little elastin — notably the **zonular fibers** suspending the ocular lens — microfibrils function as the sole load-bearing element.

### TGF-β sequestration (non-structural regulatory role)

Latent TGF-β binding proteins (LTBPs) — specifically LTBP-1, with LTBP-3 and -4 also reported in the broader fibrillin literature — covalently incorporate into fibrillin-1-based microfibrils [^zeigler2021]. This interaction keeps the large latent TGF-β complex (LLC) tethered in the ECM and reduces TGF-β signaling through the canonical SMAD2/3 pathway. Loss or fragmentation of the microfibrillar network — whether from mutation (Marfan syndrome), photoaging, or proteolytic remodeling — releases TGF-β from this reservoir and elevates local [[tgf-beta|TGF-β/Smad]] signaling [^matt2008] [^zeigler2021]. The LTBP-3/-4 specificity is from the Kielty 2005 review (not_oa); Zeigler 2021 and Matt 2008 confirm LTBP-1. #gap/no-fulltext-access (Kielty 2005, doi:10.1016/S0065-3233(05)70012-7, closed-access).

This dual role (structural scaffold + growth-factor sink) means fibrillin-1 dysfunction is mechanistically upstream of both mechanical and signaling phenotypes.

## Aging context

### Microfibril depletion in photoaged dermis

Watson et al. (1999) showed that fibrillin-1-rich microfibrils are substantially reduced in photoaged forearm skin compared to sun-protected buttock skin in 16 healthy Caucasian volunteers (six male, ten female; age 24–80y) [^watson1999]:

- Confocal microscopy / immunohistochemistry: papillary dermal microfibrillar network truncated and depleted in photoaged skin. Fibrillin-rich microfibril levels were significantly decreased in both severely and minimally photoaged forearm skin compared to sun-protected sites (p<0.0001 and p<0.05, respectively).
- In situ hybridization: fibrillin-1 mRNA decreased in 8/10 moderately-to-severely photoaged subjects; fibrillin-2 mRNA unchanged — the depletion is fibrillin-1-specific and occurs at the transcriptional level.
- Location: disruption is most pronounced at the dermal-epidermal junction, where the normal candelabra-like microfibrillar arrays extending from the DEJ into the papillary dermis are severely truncated in photoaged sections.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Same fibrillin-1/microfibril biology; mouse Fbn1 is functionally interchangeable |
| Phenotype conserved in humans? | yes | Human photoaged skin the study substrate |
| Replicated in humans? | yes | Watson 1999 directly human; Chen 2005 heat-model also human in-vivo |

### Solar elastosis: aberrant FBN1 co-deposition

In chronic UV-exposed skin, fibrillin-1 protein (along with aberrant elastin) accumulates as disorganized elastotic material in the papillary and upper reticular dermis — the histological hallmark of solar elastosis. The mechanism is paradoxical: despite reduced mRNA in some compartments, fibrillin-1 protein (likely derived from dermal fibroblasts undergoing photoexposure-stress) is aberrantly deposited alongside degraded elastin. **Note on the Chen 2005 evidence**: Chen et al. studied this in an **infrared/heat** model (not direct UV), showing that heat exposure increases fibrillin-1 mRNA in the epidermis but decreases it in the dermis — uncoupling the dermal-epidermal contributions and potentially explaining compartment-specific accumulation patterns in elastosis [^chen2005]. The full solar elastosis picture (UV + IR + visible light combined) is broader than any single-wavelength experiment; see [[skin-aging]] § Histology for the integrated phenotype. MMP-12 (metalloelastase) co-upregulation suggests that proteolytic degradation of normal fibers contributes to the elastotic phenotype.

### TGF-β dysregulation in aged skin

Loss of microfibrillar integrity in aged and photoaged dermis is expected to release TGF-β from LTBP-fibrillin-1 complexes, elevating local TGF-β/Smad signaling. This could contribute to age-associated dermal fibrotic changes (increased collagen cross-linking) and altered fibroblast phenotype — the same axis that drives aortic pathology in Marfan syndrome [^matt2008]. #gap/no-mechanism — this dermal TGF-β release model is mechanistically plausible but has not been directly tested in human aged-skin biopsies with matched fibrillin-1 depletion and TGF-β signaling measurements.

## Cross-tissue roles

- **Ocular zonular fibers** — the suspensory ligament of the lens is almost entirely microfibrillar. FBN1 mutations cause ectopia lentis (lens dislocation), the characteristic ocular feature of Marfan syndrome.
- **Aortic root and great vessels** — microfibrils in the aortic media provide load-bearing support and TGF-β sequestration. Disruption → aortic root dilatation and dissection risk.
- **Periosteum and bone** — fibrillin-1 microfibrils in bone contribute to skeletal geometry; FBN1 mutations cause dolichostenomelia and arachnodactyly.

## Disease associations (FBN1 mutations)

A large number of unique pathogenic FBN1 variants have been catalogued (predominantly missense affecting cysteine residues in EGF-like domains); LOVD lists 1,681 unique public variants (2,417 total including duplicate reports) as of 2026 [^lovd-fbn1], while ClinVar reports 9,445 total submissions across all clinical classifications. The "~3,000 pathogenic variants" figure cited in older review literature is not directly verifiable from current database counts and has been removed. #gap/unsourced — a precise count of classified-pathogenic-only variants requires a dedicated ClinVar/ClinGen query. The disease spectrum reflects both structural loss-of-function and TGF-β dysregulation [^zeigler2021]:

| Disease | Inheritance | Key features |
|---|---|---|
| **Marfan syndrome (MFS)** | Autosomal dominant | Aortic root aneurysm, ectopia lentis, dolichostenomelia, dural ectasia |
| Weill-Marchesani syndrome 2 (WMS2) | AD/AR | Short stature, brachydactyly, ectopia lentis (opposite skeletal phenotype to MFS) |
| Isolated ectopia lentis | AD | Lens subluxation only |
| Stiff skin syndrome | AD | Excess fibrillin-1 deposition → fibrotic plaques |
| Geleophysic dysplasia 2 / Acromicric dysplasia | AD | Short stature + shortened extremities |
| Marfanoid-progeroid-lipodystrophy | AD | Progeroid features; caused by neonatal asprosin-truncating alleles |

The opposing skeletal phenotypes of MFS (tall, long limbs) vs. WMS2/geleophysic dysplasia (short, stubby) reflect differential effects on TGF-β vs. BMP signaling, demonstrating that the TB-domain interactions regulate multiple growth-factor axes.

## Pharmacology and druggability

FBN1 itself is not a druggable target in the conventional sense — it is a secreted structural polymer. No aging-skin-validated drug modulates fibrillin-1 levels therapeutically. Druggability-tier: null; `#gap/needs-canonical-id` for Open Targets entry.

**Downstream pathway modulation (Marfan context):**

Angiotensin-II type 1 receptor blockers (ARBs), particularly **losartan**, reduce TGF-β activation downstream of fibrillin-1 dysfunction. In mouse Marfan models (Fbn1 C1039G/+), losartan fully prevented aortic root dilatation and maintained aortic wall architecture comparable to wild-type [^matt2008]. However, translation to humans has been mixed: multiple large randomized controlled trials — including the PHN trial (n=608), Marfan-Sartan (n=303), and a Spanish parallel trial (n=140) — found no significant benefit of losartan over atenolol (beta-blocker) for aortic-root dilatation rate [^zeigler2021]. The COMPARE trial (n=233) and a 2020 meta-analysis (8 RCTs, n=1,381) found ARBs non-inferior to beta-blockers, with combination ARB+beta-blocker therapy potentially advantageous [^kang2020]. The mechanism is AT1R antagonism → reduced AngII-driven TGF-β secretion and activation, not structural microfibril rescue. Losartan is disease-modifying in the Marfan mouse context but its human benefit remains contested; it has not been validated or proposed for aging-skin applications.

#gap/needs-human-replication — TGF-β-axis intervention for FBN1-depletion-associated skin aging has no clinical trial data.

## Relationship to sister ECM proteins

Fibrillin-1 functions in concert with two closely related ECM proteins that each have their own wiki pages:

- **[[eln]]** (elastin / tropoelastin) — the structural core of elastic fibers; deposited onto the fibrillin-1 microfibrillar scaffold. LOX cross-links tropoelastin within the microfibril-organized assembly.
- **[[lox]]** (lysyl oxidase) — the enzyme responsible for oxidative cross-linking of both tropoelastin (into insoluble elastin) and procollagen. FBN1, ELN, and LOX constitute the three-component core of the elastic fiber assembly machinery.

The three are co-regulated in dermal fibroblasts and co-deplete in photoaged skin. See also [[dermis]] for the tissue-level ECM organization context.

## Pathway and hallmark membership

- **[[loss-of-proteostasis]]** — ECM proteostasis failure: fibrillin-1 microfibril fragmentation + aberrant elastotic re-deposition represents a tissue-level failure to maintain organized ECM architecture, a form of extracellular proteostasis loss parallel to intracellular protein-aggregate accumulation.
- **[[tgf-beta]]** (pathway) — fibrillin-1 is an upstream regulator of TGF-β bioavailability via LTBP tethering.
- **[[skin-aging]]** (phenotype) — FBN1 depletion is one of the earliest and most specific molecular correlates of photoaged dermis.

## Limitations and gaps

- #gap/needs-human-replication — Direct causal test linking fibrillin-1 microfibril depletion to reduced dermal TGF-β sequestration in aged human skin has not been performed with matched biopsy data.
- #gap/needs-replication — The Chen 2005 UV/heat modulation data is a single study with limited n; molecular mechanisms not fully resolved. Chen 2005 is not_oa — not verified against PDF. #gap/no-fulltext-access
- #gap/no-mechanism — Why FBN1 mRNA is transcriptionally downregulated by UV but the protein accumulates as elastotic material remains incompletely explained (likely involves differential proteolysis of normal-architecture microfibrils vs. re-secretion under stress).
- #gap/unsourced — The ~3,000-variant figure in prior literature is inconsistent with current LOVD (1,681 unique variants) and ClinVar (9,445 submissions, all classifications). A query restricted to pathogenic/likely-pathogenic classifications in ClinVar/ClinGen would resolve the precise count; removed from body text pending that query.
- The GenAge HAGR database does not list FBN1 as a curated aging gene, reflecting that aging evidence is primarily observational (photoaging) rather than genetic longevity modulation. #gap/needs-canonical-id (no GenAge ID).

## Footnotes

[^uniprot-p35555]: UniProt P35555 (FBN1_HUMAN), reviewed Swiss-Prot entry, accessed 2026-05-19 · canonical sequence 2,871 aa · current flat-file annotation: 47 EGF-like domains (40 calcium-binding), 9 TB domains, 2 hybrid domains — note discrepancy with published literature counts (43 cbEGF, 7 TB) attributed to evolving domain-boundary curation
[^kielty2005]: doi:10.1016/S0065-3233(05)70012-7 · Kielty CM et al. · *Advances in Protein Chemistry* 2005 · review · model: molecular/structural biology of fibrillin microfibrils · citation percentile 99 · **not_oa — not verified against PDF** #gap/no-fulltext-access
[^trask2000]: doi:10.1074/jbc.M003665200 · Trask TM et al. · *J Biol Chem* 2000 · in-vitro (solid-phase binding assay) · model: recombinant fibrillin-1/2 N-terminal domains + tropoelastin · n=not applicable (biochemical assay) · PDF verified 2026-05-19
[^watson1999]: doi:10.1046/j.1523-1747.1999.00562.x · Watson RE et al. · *J Invest Dermatol* 1999 · observational · n=16 human subjects (6M/10F; age 24–80y) · model: photoaged human forearm vs. sun-protected buttock biopsies · p<0.0001 (severe photoaging) and p<0.05 (minimal photoaging) for microfibril reduction by IHC · PDF verified 2026-05-19
[^chen2005]: doi:10.1111/j.0022-202X.2004.23550.x · Chen Z et al. · *J Invest Dermatol* 2005 · in-vivo (human skin, heat irradiation) · model: human forearm skin, n not reported in abstract · **not_oa — not verified against PDF** #gap/no-fulltext-access
[^matt2008]: doi:10.1016/j.jtcvs.2007.08.047 · Matt P et al. · *J Thorac Cardiovasc Surg* 2008 · review · model: Marfan mouse (Fbn1 C1039G/+) + clinical context · conclusion: losartan prevents aortic root dilatation in mouse; human RCT data then pending · PDF verified 2026-05-19
[^matt2009]: doi:10.1161/CIRCULATIONAHA.108.841981 · Matt P et al. · *Circulation* 2009 · **not downloadable (no OA URL available) — not verified against PDF** #gap/no-fulltext-access · cited for losartan TGF-β suppression in MFS; claims should be treated as unverified pending access
[^zeigler2021]: doi:10.1007/978-3-030-80614-9_8 · Zeigler SM et al. · *Adv Exp Med Biol* 2021 · review · model: Marfan syndrome pathophysiology (FBN1 + TGF-β) · covers losartan human RCT landscape (PHN n=608; Marfan-Sartan n=303; COMPARE n=233; AIMS n=192) · PDF verified 2026-05-19
[^kang2020]: doi:10.1016/j.jfma.2019.04.015 · Kang YN et al. · *J Formosan Med Assoc* 2020 · meta-analysis · 8 RCTs · n=1,381 MFS patients · conclusion: ARB-only therapy not inferior to beta-blocker-only; ARB+BB combination potentially superior; no significant difference in aortic-root dilatation rate between losartan and atenolol monotherapy · PMID: 31003918
[^lovd-fbn1]: LOVD (Leiden Open Variation Database) FBN1 gene page · https://databases.lovd.nl/shared/genes/FBN1 · accessed 2026-05-19 · 1,681 unique public DNA variants; 2,417 total public variant reports; 1,173 individuals with public variants
