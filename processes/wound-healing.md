---
type: process
aliases: [tissue repair, skin wound healing, cutaneous wound healing]
key-proteins: ["[[pdgf-aa]]", "[[tgf-beta]]", "[[vegf]]", "[[col1a1]]", "[[col3a1]]", "[[lox]]", "[[alpha-sma]]"]
pathways: ["[[tgf-beta-signaling]]", "[[pdgf-signaling]]", "[[vegf-signaling]]", "[[nf-kb]]"]
hallmarks: ["[[cellular-senescence]]", "[[stem-cell-exhaustion]]", "[[chronic-inflammation]]"]
caused-by: ["tissue damage / barrier disruption"]
causes: ["scar formation", "tissue regeneration"]
druggability-tier: 1   # Aging-context rationale: wound-healing impairment is a major age-related clinical burden; becaplermin (recombinant PDGF-BB) FDA-approved 1997 for lower-extremity diabetic neuropathic ulcers constitutes a clinical modulator of this process. Note: becaplermin targets PDGFRβ (PDGF-BB isoform), distinct from the PDGF-AA/PDGFRα axis mediating transient senescent-cell wound-healing benefit (Demaria 2014) — aging-context tier reflects the broader process druggability, not the specific senescent-cell mechanism.
literature-checked-through: 2026-05-19
verified: true
verified-date: 2026-05-19
verified-by: claude
verified-scope: "Demaria 2014 claims cross-checked against R39-verified study page (studies/demaria-2014-senescent-cells-wound-healing.md); Gurtner 2008 read end-to-end (local PDF confirmed); Ueda 2026, Miny 2026, Numani 2026 DOIs confirmed via Crossref/PubMed. Singer 1999 (tensile strength ~70-80%) closed-access (not_oa) — cannot verify exact figure against full text; tagged gap. Druggability-tier comment expanded to clarify aging-context reasoning and PDGF isoform distinction. No supersession candidates found (no senolytic wound-healing RCT n>100 or meta-analysis as of 2026-05-19)."
---

# Wound healing

The conserved multicellular program that restores tissue barrier function and, where possible, tissue architecture following physical injury. Skin is the canonical context — most mechanistic detail and all classic four-phase models derive from dermal/epidermal wound studies — but the same general program operates in cornea, gut mucosa, vascular intima, cardiac muscle, and skeletal muscle, with phase timing and cell-type composition varying by tissue.

Wound healing deteriorates with age across all studied organisms, contributing to the clinical burden of chronic non-healing wounds in elderly populations. Its intersection with [[cellular-senescence]] is mechanistically distinctive: transient senescence is **required** for optimal acute healing (via PDGF-AA paracrine signaling), whereas the chronic senescent-cell accumulation characteristic of aged tissue impairs healing — a canonical instance of [[antagonistic-pleiotropy]].

## The four phases

| Phase | Duration | Dominant cell types | Key signals | ECM produced |
|---|---|---|---|---|
| **Hemostasis** | Minutes–hours | Platelets, endothelial cells | Thrombin activates fibrinogen → fibrin; platelet α-granules release PDGF, TGF-β, VEGF | Fibrin/fibronectin provisional matrix |
| **Inflammation** | 1–3 days | Neutrophils (first wave, hrs–day 2); macrophages M1 then M2 | IL-1β, IL-6, TNF-α (M1); TGF-β, IL-10 (M2 switch); reactive oxygen species (neutrophil oxidative burst) | Provisional matrix retained; proteolytic debridement |
| **Proliferation** | 3–14 days | Fibroblasts, myofibroblasts, keratinocytes, endothelial cells | TGF-β1 drives myofibroblast differentiation (α-SMA+); PDGF recruits/activates fibroblasts; VEGF drives angiogenesis | Collagen III-enriched granulation tissue; [[col3a1]] predominates early |
| **Remodeling** | Weeks–>1 year | Myofibroblasts (then apoptose), macrophages | [[lox]] cross-links collagen fibers; MMP/TIMP balance governs remodeling | Collagen III → [[col1a1]] replacement; tensile strength asymptotes ~70–80% of uninjured skin at ~1 year [^singer1999] #gap/no-fulltext-access (Singer 1999 closed-access; figure widely cited but not verified against full text) |

### Phase notes

**Hemostasis** is the fastest phase and the only one not primarily cellular — thrombin converts circulating fibrinogen to fibrin, which traps platelets and forms the provisional matrix. Platelet α-granules simultaneously release PDGF (both -AA and -BB isoforms), TGF-β1, TGF-β2, and VEGF, establishing the early chemotactic gradient that recruits inflammatory cells. The provisional fibrin matrix also serves as a scaffold for subsequent cell migration [^gurtner2008].

**Inflammation** requires coordinated neutrophil-to-macrophage handoff. Neutrophils clear bacteria and debris via elastase + MPO-mediated oxidative burst but also secrete proteases (MMP-8, MMP-9) that begin matrix debridement. Macrophage arrival (from circulating monocytes and tissue-resident pools) shifts the environment from pro-inflammatory M1 (microbicidal, phagocytic) toward pro-healing M2 (anti-inflammatory, growth-factor-secreting). The M1→M2 transition is obligatory for productive healing; failure to complete it is a hallmark of non-healing chronic wounds [^gurtner2008].

**Proliferation** involves three overlapping subprocesses:

1. *Fibroblast activation*: fibroblasts from the wound margin and dermis migrate into the fibrin matrix, proliferate, and remodel it into granulation tissue. Key signal: PDGF-BB from platelets and macrophages stimulates fibroblast recruitment via PDGFRβ.
2. *Myofibroblast differentiation*: a subset of wound fibroblasts differentiates into contractile α-SMA+ myofibroblasts under TGF-β1 (canonical signal), mechanical tension, and specific matrix cues. Myofibroblasts generate the contractile force that closes the wound gap.
3. *Re-epithelialization*: keratinocytes from wound margins and hair follicles migrate centripetally beneath the fibrin scab, driven by EGF, KGF (FGF-7), and TGF-α; they proliferate to restore the epidermal barrier.
4. *Angiogenesis*: capillary sprouting driven by VEGF-A and FGF-2 supplies the metabolically active granulation tissue. New capillaries later regress during remodeling.

**Remodeling** replaces the mechanically weak, collagen-III-rich granulation tissue with a more ordered type-I collagen matrix. [[lox]] (lysyl oxidase) catalyzes covalent cross-links between collagen fibers and between elastin chains. Myofibroblasts apoptose as the mechanical work is completed; residual scar tissue lacks follicular appendages. Maximum tensile strength (~80% of original) is never fully recovered because the highly ordered fibril architecture of uninjured dermis is not reconstructed [^singer1999]. #gap/no-fulltext-access (Singer 1999 is closed-access; exact figure not verifiable against full text from local archive) #gap/needs-human-replication for quantitative LOX-deficiency phenotypes in human aging.

## Transient senescence in wound healing

The role of [[cellular-senescence]] in wound healing is context-dependent: **transient, acute senescent cells are beneficial; chronic, accumulated senescent cells are pathological**.

### Demaria 2014: PDGF-AA-secreting senescent cells are required for optimal healing

Using the **p16-3MR transgenic mouse** (which allows GCV-mediated selective elimination of p16-expressing cells), Demaria et al. showed [^demaria2014]:

- Within **3 days** of a 6 mm punch biopsy, p16+ cells appear at wound edges and peak days 3–6, then resolve — a **transient** population distinct from chronically accumulated aged-tissue senescent cells.
- Both **fibroblasts and endothelial cells** undergo wound-site senescence; endothelial cells are described as the **primary** senescent population (Discussion: "wounding induces senescence in resident fibroblasts and primarily endothelial cells").
- GCV-mediated elimination of p16+ cells (25 mg/kg i.p., days 1–6 post-wounding) **delays wound closure**, with peak delay at day 6.
- p16/p21 DKO mice (unable to senesce) show the same delay, ruling out off-target GCV toxicity as the cause.
- The key [[sasp|SASP]] factor driving healing is **PDGF-AA** — not PDGF-BB, IL-6, or VEGF. Senescent-cell conditioned medium promotes myofibroblast (α-SMA+) differentiation in neighboring non-senescent fibroblasts; anti-PDGF-AA antibody blocks this effect; anti-PDGF-BB does not.
- **Topical recombinant PDGF-AA fully rescues** the GCV wound-closure delay, confirming PDGF-AA is the rate-limiting paracrine signal and that senescent cells do not drive healing via direct contraction.
- Senescent cells themselves do NOT upregulate α-SMA — their role is purely paracrine (PDGF-AA → neighboring fibroblasts → myofibroblast differentiation).

**Mechanism summary:**
```
Wound stimulus
  → Transient senescence in wound-site fibroblasts + endothelial cells (primarily endothelial)
  → SASP: PDGF-AA secreted paracrine
  → PDGFRα signaling on neighboring fibroblasts → α-SMA+ myofibroblast differentiation
  → Myofibroblast contraction + granulation tissue → wound closure
  → (Youth) Immune clearance of senescent cells → tissue resolution
  → (Aging) Incomplete clearance → persistent SASP → tissue damage
```

This paper provides the canonical molecular-level evidence that cellular senescence is subject to [[antagonistic-pleiotropy]]: the same SASP program is acutely adaptive (PDGF-AA-mediated healing) and chronically pathological (pro-inflammatory, pro-degradative senescent accumulation in aged tissue).

### Implications for senolytics timing

**Timing of senolytic administration matters.** Senolytics administered during the acute wound-healing window (days 1–6 post-injury) could theoretically deplete PDGF-AA-secreting wound-site senescent cells and impair healing. This is the pre-clinical precaution established by Demaria 2014. Conversely, for chronic wound contexts where pathological senescent-cell accumulation is the dominant problem (diabetic foot ulcers, venous stasis ulcers), senolytic + senomorphic approaches may be beneficial.

A 2026 review in *J Biochem* (Ueda et al.) focuses specifically on this dialectic in **diabetic skin**, noting that senescent dermal fibroblasts, macrophages, and adipose-tissue cells accumulate in diabetic wounds and sustain a pathological SASP that prevents the normal M1→M2 macrophage transition and impairs fibroblast contractility [^ueda2026]. This is consistent with Demaria 2014 but mechanistically distinct: in diabetic wounds, the senescent-cell burden is chronic and pre-existing, not acutely beneficial.

#gap/needs-human-replication — No human RCT has specifically tested wound healing as a primary endpoint for any senolytic compound. Context (acute healing vs. chronic wound) is likely critical for any future trial design.

## Wound healing in aging

Multiple concurrent mechanisms reduce wound-healing capacity with age [^gurtner2008]:

| Mechanism | Hallmark link | Evidence strength |
|---|---|---|
| Reduced fibroblast proliferative and migratory capacity | [[cellular-senescence]] (accumulated p16+ fibroblasts) | In-vitro; some in-vivo mouse |
| Impaired keratinocyte migration and interfollicular stem-cell stiffness loss | [[stem-cell-exhaustion]] | Mouse + early human data [^miny2026] |
| Reduced angiogenesis (↓ VEGF response, vascular rarefaction) | [[mitochondrial-dysfunction]] / endothelial aging | Predominantly mouse |
| Dysregulated macrophage M1→M2 transition (prolonged M1) | [[chronic-inflammation]] (inflammaging) | Mouse + ex-vivo human macrophage data |
| Chronic SASP from accumulated senescent cells → pro-degradative + anti-proliferative | [[cellular-senescence]] | Mouse (in-vivo); human correlative |
| Reduced growth factor signaling (PDGF, TGF-β, EGF axes) | Multiple | Mouse + human observational |

Aged skin shows a paradox: *chronic* senescent-cell burden contributes to a pro-inflammatory environment that impairs healing, while the *acute* wound-site transient senescence program may itself be impaired (reduced capacity to induce protective senescence acutely). The two phenomena are not mutually exclusive — the ratio of functional acute-senescent-cell induction to chronic pathological senescent-cell accumulation may determine the wound-healing outcome. #gap/no-mechanism for the quantitative contribution of each arm in humans.

A 2026 study (Miny et al., *Exp Dermatol*) found that interfollicular stem cells (ISCs) of the human epidermis lose a distinctive biomechanical stiffness signature with age — interpreted as a functional deterioration of the epidermal stem-cell pool that drives barrier renewal and re-epithelialization [^miny2026]. This is consistent with the [[stem-cell-exhaustion]] hallmark operating at the epidermal basal-layer level.

## Therapeutic interventions

### Topical growth factors

**Becaplermin (Regranex)** — recombinant human PDGF-BB. FDA-approved 1997 for lower-extremity diabetic neuropathic ulcers. Mechanism: PDGFRβ-mediated fibroblast and monocyte/macrophage chemotaxis and proliferation. PDGF-BB is distinct from the wound-site-senescent-cell isoform (PDGF-AA); both signal through fibroblasts but via different receptor subunits (PDGFRβ vs PDGFRα). #gap/needs-replication — direct comparison of PDGF-AA vs PDGF-BB topical efficacy in aged wound models has not been performed post-Demaria 2014.

### Peptide therapeutics

- **[[bpc-157]]** — synthetic pentadecapeptide; preclinical evidence for accelerating wound healing in rat models via upregulation of growth hormone receptor expression and EGF/VEGF pathways. Human evidence limited. #gap/needs-human-replication
- **[[tb-500]]** — synthetic fragment of thymosin β4 (Tβ4); promotes actin polymerization, keratinocyte and endothelial cell migration; preclinical wound-healing evidence (rat models). Human evidence absent for wound-healing indication. #gap/needs-human-replication
- **[[ghk-cu]]** — copper-binding tripeptide (Gly-His-Lys); endogenous plasma peptide; promotes fibroblast migration and proliferation, collagen and elastin synthesis, and wound healing in rodent and in-vitro models. Human evidence limited to cosmetic formulation studies. #gap/needs-human-replication
- **[[ll-37]]** — cathelicidin antimicrobial peptide; dual antimicrobial + wound-healing function; induces keratinocyte and endothelial migration; some evidence for role in re-epithelialization; topical LL-37 studies in diabetic wound models (preclinical). #gap/needs-human-replication

### Senolytics (timing-dependent)

[[senolytics]] ([[fisetin]], [[dasatinib]] + [[quercetin]]) are in principle candidates for improving wound healing in aged skin by reducing the chronic senescent-cell burden — **but must be timed to avoid the acute healing window** (days 1–14 post-injury), where PDGF-AA-secreting senescent cells are required per Demaria 2014.

A 2026 in-vivo paper in diabetic mice (Numani et al., *Adv Wound Care*; DOI: 10.1177/21621918261426580) reported that topical fisetin reduces cutaneous senescent-cell burden and improves wound closure — a context where the chronic pathological senescent-cell program predominates. #gap/needs-human-replication and the generalizability to non-diabetic aged wounds requires separate evaluation.

## Pathological wound-healing states

**Chronic non-healing wounds** — diabetic foot ulcers, venous stasis ulcers, pressure ulcers. Common features: arrested in the inflammatory phase, failure of M1→M2 transition, biofilm colonization, excessive MMP activity degrading growth factors and matrix. Senescent-cell accumulation is a candidate contributor (Ueda 2026) [^ueda2026].

**Hypertrophic scarring and keloids** — pathological fibroproliferative responses driven by TGF-β overactivation, myofibroblast persistence, and failure of apoptosis-mediated myofibroblast clearance during remodeling. Mechanically distinct from normal scarring: keloids extend beyond the original wound boundary.

**Fetal scarless healing** — fetal wounds (before the third trimester) heal without scar formation. Proposed mechanisms: (1) collagen-III-enriched fetal wound milieu enabling more ordered matrix deposition; (2) attenuated inflammatory response (reduced TGF-β1/TGF-β2 signaling; relatively elevated TGF-β3); (3) sterile, low-oxygen amniotic environment. A target for scar-reduction research.

## Extrapolation from mouse models

The Demaria 2014 PDGF-AA findings rest entirely on the p16-3MR mouse model.

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Senescence, PDGF-AA/PDGFRα signaling, and myofibroblast biology are conserved in human skin; PDGF-AA promotes human fibroblast-to-myofibroblast differentiation |
| Phenotype conserved in humans? | partial | p16+ senescent cells appear at human wound sites (histological evidence); whether acute depletion impairs human healing is untested; aged human wounds do heal more slowly and show reduced PDGF signaling — consistent but not causal |
| Replicated in humans? | no | No human equivalent of the p16-3MR GCV experiment exists; no senolytic wound-healing RCT has been completed |

See `model-organisms/_extrapolation-guide.md` for evaluation rubric.

## Limitations and gaps

- **No human RCT directly testing the transient-senescence / PDGF-AA axis.** The entire mechanistic framework is mouse-derived. #gap/needs-human-replication
- **Senolytic timing window in human acute wounds is undefined.** Preclinical caution established; human wound-specific senolytic trial data absent. #gap/dose-response-unclear for senolytic timing
- **Macrophage M1→M2 transition mechanism in aged human wounds.** Mouse data support impaired transition; human ex-vivo evidence limited; interventional evidence absent. #gap/needs-human-replication
- **Relative contributions of fibroblast vs. endothelial senescent populations** to PDGF-AA secretion at wound sites were not separately quantified in Demaria 2014. #gap/needs-replication
- **Peptide therapeutics (BPC-157, TB-500, GHK-Cu)** lack adequate human RCT data for wound-healing indications; most evidence is preclinical rodent. #gap/needs-human-replication
- **Quantitative LOX-deficiency contribution to age-related scar quality** — human data absent; extrapolated from mouse and in-vitro. #gap/needs-human-replication
- **col3a1 page** — referenced in granulation-tissue ECM context but no wiki page yet. #stub

## Cross-references

**Related processes:** [[sasp]], [[cellular-senescence]], [[replicative-senescence]], [[autophagy]]

**Key cell types:** [[dermal-fibroblasts]], [[keratinocytes]]

**Tissues:** [[skin]], [[dermis]], [[epidermis]]

**Molecules:** [[col1a1]], [[col3a1]] (stub), [[lox]] (stub), [[pdgf-aa]] (stub), [[tgf-beta]] (stub)

**Hallmarks:** [[cellular-senescence]], [[chronic-inflammation]], [[stem-cell-exhaustion]], [[antagonistic-pleiotropy]]

**Interventions/compounds:** [[bpc-157]], [[tb-500]], [[ghk-cu]], [[ll-37]], [[fisetin]], [[dasatinib]], [[quercetin]], [[senolytics]]

**Phenotypes/pathology:** [[skin-aging]]

**Key study:** [[studies/demaria-2014-senescent-cells-wound-healing]]

---

## Footnotes

[^singer1999]: doi:10.1056/NEJM199909023411006 · PMID 10471461 · Singer AJ, Clark RAF · *N Engl J Med* 1999;341(10):738–746 · review · model: human — classic review of cutaneous wound healing phases; tensile strength asymptote (~70–80% at 1 year) and four-phase model definitions; **closed-access — not in local archive; tensile strength figure not verified against full text** #gap/no-fulltext-access

[^gurtner2008]: doi:10.1038/nature07039 · Gurtner GC, Werner S, Barrandon Y, Longaker MT · *Nature* 2008;453:314–321 · review · model: human + mouse — comprehensive review of wound repair and regeneration biology including aging context; **end-to-end verified 2026-05-19** (local PDF). Note: Gurtner uses three stages (inflammation / new tissue formation / remodelling); the four-phase model including hemostasis as a distinct phase follows Singer 1999 convention.

[^demaria2014]: [[studies/demaria-2014-senescent-cells-wound-healing]] · n≥4/group (wound closure); n=3–5 (molecular assays) · in-vivo + in-vitro · p<0.05 (wound delay; PDGF-AA rescue) · model: p16-3MR transgenic mus-musculus; 6 mm dorsal punch biopsy; GCV senescent-cell ablation; R39 verified 2026-05-19

[^ueda2026]: doi:10.1093/jb/mvag006 · Ueda N et al. · *J Biochem* 2026 · review · model: diabetic skin (mouse + human correlative) — role of cellular senescence (fibroblast, macrophage, adipose-tissue) in diabetic wound-healing impairment; senolytic/senomorphic therapeutic approaches; **not OA; not end-to-end verified**

[^miny2026]: doi:10.1111/exd.70268 · Miny S et al. · *Exp Dermatol* 2026 · in-vitro + ex-vivo · model: human epidermal biopsies (atomic force microscopy) — interfollicular stem cells lose biomechanical stiffness signature with age; consistent with stem-cell-exhaustion contribution to impaired re-epithelialization; **DOI confirmed via PubMed; not locally downloaded**
