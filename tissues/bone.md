---
type: tissue
aliases: [bone tissue, osseous tissue, skeletal tissue]
parent-system: musculoskeletal-system
key-cell-types: ["[[osteocytes]]", "[[osteoblasts]]", "[[osteoclasts]]", "[[mesenchymal-stem-cells]]", "[[hematopoietic-stem-cells]]"]
key-aging-phenotypes: ["[[osteoporosis]]", "[[sarcopenia]]", "[[arterial-stiffening]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[chronic-inflammation]]", "[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]", "[[mitochondrial-dysfunction]]"]
verified: true
verified-date: 2026-05-23
verified-by: claude
verified-scope: "Farr 2023 JCI (local PDF, read end-to-end) and Ding 2022 eLife (local PDF, read end-to-end) verified against primary sources. Fang 2023 Calcified Tissue International (local PDF downloaded and read) verified. Farr 2020 review and Garcia-Gomez 2020 verified at abstract/metadata level (Farr 2020: PMC7541777 confirmed; Garcia-Gomez 2020: DOI corrected). Liu 2026 DOI corrected. Chen 2026 DOI added. Farr 2024 Nature Medicine Phase 2 RCT flagged as supersession candidate for senolytic bone claims. Canonical-database identity fields not independently re-verified."
literature-checked-through: 2026-05-23
---


# Bone

Bone is a dynamic mineralized connective tissue that serves simultaneously as the structural scaffold of the body, the primary reservoir for calcium and phosphate, and an endocrine organ producing hormones (particularly [[fgf23|FGF23]]) with systemic effects on the kidney, cardiovascular system, and parathyroid gland. Bone houses the [[bone-marrow]] niche that sustains lifelong hematopoiesis, and its cellular composition — osteoblasts, [[osteocytes]], osteoclasts, and bone marrow stromal cells — is continuously renewed through a tightly coupled remodeling cycle.

With aging, this coupling breaks down. Net bone loss begins in the third to fourth decade, accelerates post-menopause in women, and proceeds more slowly but inexorably in men. Concurrent with structural degradation, senescent [[osteocytes]] accumulate and secrete SASP factors that propagate local bone destruction and impair the bone marrow niche. Bone also participates in the **bone-vascular axis paradox**: as bone loses mineral, arteries paradoxically gain it — a shared mechanism involving ectopic [[runx2]] activity in vascular smooth-muscle cells and reduced inhibitory signals including [[matrix-gla-protein]] and [[osteopontin]]. These interconnected aging trajectories make bone a central tissue node in the hallmarks-of-aging framework.

---

## Anatomy at a glance

### Macrostructure: cortical vs trabecular

Adult bone contains two macroscopic compartments with distinct turnover kinetics and aging trajectories:

| Compartment | Location | Fraction of bone mass | Annual turnover | Aging trajectory |
|---|---|---|---|---|
| **Cortical (compact)** | Shafts of long bones, outer shell of all bones | ~80% | ~3%/yr | Thinning + porosity increase; trabecular bone lost first but cortical loss drives fracture risk most in men |
| **Trabecular (cancellous)** | Vertebral bodies, femoral neck, ends of long bones, inside flat bones | ~20% | ~25%/yr | Faster loss; connectivity deteriorates — trabecular plates perforate and disconnect, irreversibly weakening load-bearing structure |

Trabecular bone loss generally precedes and outpaces cortical loss in the early post-menopausal period, which is why vertebral fractures are common early. Hip fractures, driven primarily by cortical compromise, become more prevalent in later decades. #gap/unsourced — quantitative rates of compartment-specific loss in longitudinal human DXA studies need primary citation.

### Bone matrix composition

Bone matrix is a composite of:
- **~65% mineral** — predominantly hydroxyapatite (Ca₁₀(PO₄)₆(OH)₂) crystals; provides compressive stiffness
- **~25% organic** — ~90% Type I collagen (tensile toughness) + ~10% non-collagenous proteins (NCP) including [[osteopontin]], [[matrix-gla-protein]], osteocalcin, fibronectin, and bone sialoprotein
- **~10% water** — within the lacunocanalicular network; functions in ion exchange and mechanosensory fluid flow

With aging, advanced glycation end-products (AGEs) accumulate in the collagen scaffold — cross-linking collagen fibrils abnormally, reducing post-yield toughness and increasing brittleness. AGE accumulation in the lacunocanalicular network also impairs osteocyte mechanosensing [^liu2026-age-canalicular]. Hydroxyapatite crystal size increases and mineral substitution patterns shift, further altering mechanical properties.

---

## Cellular composition

| Cell type | Origin | Function | Aging notes |
|---|---|---|---|
| **[[osteocytes]]** | Osteoblast differentiation / entombment | Mechanosensing; SOST/sclerostin secretion (Wnt inhibitor); FGF23 secretion; LCN maintenance | 95% of bone cells; apoptosis accumulates; senescent subset drives SASP; micropetrosis (empty lacunae) increases — see [[osteocytes]] |
| **Osteoblasts** | BMSCs via [[runx2]] + [[bmp-2]] signaling | Collagenous matrix secretion; mineralization; transition to osteocyte or bone-lining cell | Reduced number and activity with age; BMSC fate drift toward adipogenesis (see below) — see [[osteoblasts]] |
| **Osteoclasts** | Monocyte/macrophage lineage via RANKL signaling | Bone resorption; releases growth factors during resorption lacuna | Relative hyperactivity vs osteoblasts in aging — net resorption; regulated by RANKL/OPG ratio — see [[osteoclasts]] |
| **BMSCs** (marrow stromal) | Mesenchymal lineage | Osteoblast + adipocyte + chondrocyte precursors; niche support | Age-associated lineage drift: PPAR-γ elevation + Wnt/β-catenin decline → adipogenesis predominance → marrow fat expansion — see [[mesenchymal-stem-cells|BMSCs]] |
| **[[hematopoietic-stem-cells]]** | Hematopoietic niche in marrow | Blood cell production; reside in endosteal + perivascular niches | HSC pool aging documented on [[bone-marrow]] and [[hematopoietic-stem-cells]]; cross-link for full detail |

---

## Bone remodeling cycle

The remodeling cycle maintains bone mass and repairs micro-damage. It proceeds in four phases and takes ~4–6 months in young adults:

1. **Activation** — osteocyte apoptosis or mechano-signal → RANKL elevation → osteoclast recruitment
2. **Resorption** — osteoclasts dissolve mineral and digest collagen; release of TGF-β, IGF-1, BMPs from matrix
3. **Reversal** — TRAP+ mononuclear cells prepare the resorption pit; coupling signals recruited
4. **Formation** — osteoblasts recruited by released growth factors; deposit new collagenous osteoid; mineralize

**Coupling** (resorption → formation) is critical: the growth factors released during osteoclast resorption (TGF-β, IGF-1, [[bmp-2]]) recruit and activate osteoblasts. Uncoupling with age — driven by SASP, reduced osteoblast numbers, and impaired BMP/Wnt signaling — produces the net bone loss of aging.

Key molecular regulators:
- **RANKL (TNFSF11)** → RANK on osteoclast precursors → osteoclastogenesis. RANKL produced by osteoblasts and [[osteocytes]].
- **Osteoprotegerin (OPG)** — decoy receptor produced by osteoblasts; blocks RANKL → RANK; the OPG/RANKL ratio is the master remodeling switch.
- **SOST / sclerostin** — secreted by [[osteocytes]]; inhibits Wnt/β-catenin in osteoblasts → reduces bone formation. The pharmacological target of romosozumab (anti-sclerostin mAb, FDA 2019).
- **[[bmp-2]]** — drives BMSC → osteoblast differentiation via SMAD1/5/8 → [[runx2]] expression.
- **[[runx2]]** — master osteoblast TF; required for osteoblast commitment and osteocyte differentiation; paradoxically upregulated in VSMCs in calcifying arteries (see bone-vascular paradox below).

---

## Mineral metabolism axis

Bone is the primary systemic reservoir for calcium (99% of body calcium) and phosphate (85% of body phosphate). The mineral homeostasis hormonal axis involves:

- **PTH (parathyroid hormone)** — elevated in response to hypocalcemia → stimulates osteoclast activity → liberates calcium; stimulates renal calcium reabsorption + phosphate wasting; stimulates 1,25(OH)₂D synthesis
- **Vitamin D (1,25-dihydroxyvitamin D₃ / calcitriol)** — promotes intestinal calcium and phosphate absorption; stimulates osteoblast activity
- **[[fgf23|FGF23]]** — produced predominantly by [[osteocytes]]; suppresses renal phosphate reabsorption (phosphaturia) and suppresses 1,25(OH)₂D synthesis; the counter-regulatory phosphaturic hormone. Requires [[klotho]] as obligate co-receptor. **FGF23 rises with age and CKD**, contributing to low calcitriol, secondary hyperparathyroidism, and downstream cardiovascular risk.

---

## Aging-relevant changes

### 1. Bone mineral density decline

Peak BMD is attained in the late second to early third decade, varies substantially by sex, ethnicity, and habitual loading. Thereafter:
- Women: ~0.5–1%/yr loss; accelerates markedly in the first 5–10 years post-menopause (estrogen loss removes the osteoclast-suppressive effect of estrogen → OPG downregulation → RANKL-driven resorption surge)
- Men: ~0.3–0.5%/yr loss, continuous but unaccelerated, driven partly by age-associated testosterone decline

The clinical threshold for [[osteoporosis]] is T-score ≤ −2.5 (DXA, WHO criteria).

### 2. Osteocyte apoptosis and micropetrosis

Individual [[osteocytes]] can survive for decades in stable cortical bone, but apoptosis accumulates with age, particularly in cortical bone. Dead osteocytes leave behind empty lacunae that progressively fill with hydroxyapatite (micropetrosis) — increasing local mineral density while eliminating the living mechanosensory cell. Micropetrosis correlates with cortical porosity and impairs fluid flow through the lacunocanalicular network, diminishing the mechanosensory signal that drives Wnt-dependent bone formation. #gap/needs-replication — quantitative human cortical micropetrosis rate with age needs dedicated citation.

### 3. Senescent osteocyte accumulation and Bone-SASP

A subset of aging osteocytes enter cellular senescence (p16^INK4a+^ / p21^CIP1+^) rather than dying by apoptosis. Senescent osteocytes are disproportionately pro-resorptive: they produce SASP factors (IL-6, IL-8, MMP-3, MMP-13, RANKL) that recruit osteoclasts, suppress adjacent osteoblast function, and propagate senescence to neighboring osteocytes [^farr2020-review].

The "Bone-SASP" concept (Fang et al. 2023) formalizes the idea that osteocyte-derived SASP factors act both locally (within bone) and systemically (on the marrow niche) to amplify bone loss beyond what stochastic osteocyte death alone would produce [^fang2023-bone-sasp]. Critically, the senescent signal propagates: Farr et al. 2023 (JCI) showed that in aged mice, local (osteocyte-specific, DMP1-Cre × p16-LOX-ATTAC) senolysis improved lumbar spine trabecular bone formation but had no significant effect on femur trabecular or cortical parameters, bone resorption, or marrow adiposity. Systemic senolysis (p16-INK-ATTAC, pan-tissue p16⁺ clearance) improved both spine and femur parameters and additionally reduced bone resorption and marrow adipocyte numbers — benefits absent with local senolysis alone. Furthermore, only systemic senolysis significantly reduced Rankl expression in whole bone, implying that non-osteocyte senescent cells are important RANKL sources in aging bone. Transplantation of senescent fibroblasts (~10⁶ cells i.p.) into young adult (4-month-old) male C57BL/6 mice (n=11/group) induced senescence in distant host osteocytes at 60 days post-transplant (confirmed by TAF assay), establishing that circulating SASP factors from non-skeletal senescent cells can propagate senescence to osteocytes in vivo [^farr2023-jci].

Osteocyte ablation experiments (Ding et al. 2022, eLife) confirmed the causal role of osteocyte presence for bone and marrow homeostasis: **partial** ablation of DMP1-positive osteocytes (DMP1cre × Rosa26-DTA heterozygotes; complete ablation is perinatally lethal) caused severe osteoporosis, sarcopenia, degenerative kyphosis, and shortened lifespan (~20–40 weeks vs >2 years in wild-type), accompanied by SASP induction in both mesenchymal (osteoblast-lineage) and hematopoietic (myeloid-lineage) cells as shown by single-cell RNA sequencing [^ding2022-elife]. Myeloid-biased hematopoiesis and impaired lymphopoiesis (reduced B cells, expanded neutrophils and monocytes) co-occurred, demonstrating that osteocyte depletion reshapes the marrow niche at the lineage-commitment level. This cross-tissue consequence of osteocyte dysfunction mechanistically links bone aging to the broader marrow niche dysfunction documented on [[bone-marrow]].

### 4. BMSC adipogenic lineage drift

With age, bone marrow stromal cells (BMSCs) — the osteoblast precursor pool — shift toward adipogenic differentiation. Mechanistic drivers include:
- Elevated PPAR-γ expression (pro-adipogenic) vs reduced Wnt/β-catenin (pro-osteogenic)
- Reduced [[runx2]] activity (key osteoblast TF) in BMSCs
- SASP-mediated inhibitory cytokines (IL-6, TNF-α) that suppress RUNX2 and BMP signaling

The result is marrow fat expansion (yellow marrow replacement), reduced osteoblast output, and impaired bone formation. BMSC-derived marrow adipocytes also modify the hematopoietic niche. #gap/unsourced — quantitative human BMSC adipogenic shift data need primary citation.

### 5. FGF23 dysregulation

Osteocyte stress and [[klotho]] decline elevate circulating [[fgf23|FGF23]] with age. Elevated FGF23:
- Suppresses renal calcitriol synthesis → secondary hyperparathyroidism
- Stimulates left ventricular hypertrophy via FGFR4 signaling (Klotho-independent)
- Associates independently with cardiovascular mortality across community and CKD populations

Cross-reference [[fgf23]] (verified) for the full quantitative evidence base. The aging-associated FGF23 rise represents a systemic endocrine signature of bone-mineral axis stress.

### 6. The bone-vascular axis paradox

A consistent clinical observation across populations: **bone mineral density loss and vascular calcification are positively correlated** — where one is worse, so is the other — despite being superficially antagonistic processes [^garcia-gomez2020]. This is the "calcification paradox."

Shared mechanistic underpinnings include:

- **[[runx2]] mislocalization** — in young bone, RUNX2 drives osteoblast differentiation and is absent in vascular smooth muscle cells (VSMCs). In aging and CKD, VSMCs ectopically upregulate RUNX2 → undergo osteogenic trans-differentiation → vascular mineralization. Meanwhile, reduced RUNX2 function in BMSCs contributes to osteoblast insufficiency. The same TF drives opposing misregulation in two tissues simultaneously.
- **[[matrix-gla-protein]] (MGP) insufficiency** — MGP is a potent inhibitor of tissue calcification; its activity requires vitamin K-dependent carboxylation. Deficiency (dietary or CKD-driven) simultaneously permits vascular calcification and impairs bone mineral regulation. See [[matrix-gla-protein]].
- **[[osteopontin]]** — secreted by osteocytes; inhibits hydroxyapatite nucleation in soft tissues; altered in aging.
- **Bone-derived extracellular vesicles** — aged bone matrix releases EVs that carry crystalline mineral and calcification-promoting cargo; a 2022 Nature Communications study showed these EVs function as systemic messengers for the calcification paradox, promoting vascular calcification while reflecting ongoing bone demineralization. #gap/needs-replication — single study; mechanistic chain not fully characterized.

For full discussion of the vascular side, see [[processes/vascular-calcification]].

---

## Key aging phenotypes

- **[[osteoporosis]]** — T-score ≤ −2.5; clinically manifests as fragility fractures (hip > vertebral > wrist)
- **Osteopenia** — T-score −1.0 to −2.5; subclinical bone loss; high population prevalence in 50–65 year olds
- **Fragility fracture** — fracture from low-energy trauma (≤ fall from standing height); hip fractures carry ~20–30% one-year mortality in the elderly
- **[[sarcopenia]]** — bone and muscle are mechanically coupled; bone loss and muscle loss co-occur in "osteosarcopenia"; mechanostimulus from muscle contraction is required to suppress osteocyte sclerostin and sustain Wnt-driven bone formation

---

## Interventions (brief; depth on intervention and compound pages)

| Intervention | Mechanism | Evidence level |
|---|---|---|
| Resistance / impact exercise | Mechanostimulus → osteocyte fluid shear → SOST suppression → Wnt activation → bone formation | Strong; multiple RCT meta-analyses in postmenopausal women [^chen2026-meta] |
| Vitamin D + calcium adequacy | Substrate; suppresses PTH-driven resorption | Strong for fracture prevention in deficient populations; weaker in replete |
| Bisphosphonates | Osteoclast apoptosis-induction → reduces resorption | Pharmacological standard-of-care; strong RCT evidence |
| Denosumab (anti-RANKL mAb) | Blocks RANKL → RANK → suppresses osteoclastogenesis | Phase 3+ evidence; approved; rebound bone loss on discontinuation |
| Romosozumab (anti-sclerostin mAb) | Blocks SOST → Wnt disinhibition → anabolic + antiresorptive dual mechanism | FDA approved 2019; cardiovascular safety signal (see [[osteocytes]] for mechanism) |
| Teriparatide (intermittent PTH 1-34) | Intermittent PTH → net anabolic (vs continuous PTH → catabolic) | Phase 3; significant BMD gain and fracture risk reduction |
| Senolytics (dasatinib + quercetin) | Senescent osteocyte clearance | Preclinical mouse: improved spine trabecular BV/TV [^farr2023-jci]; Phase 2 RCT (n=60 postmenopausal women): primary endpoint (CTx bone resorption) did not differ from control at 20 weeks (p=0.611); P1NP formation marker transiently increased at 2–4 weeks in the overall group; exploratory analysis in high-senescent-burden tertile showed P1NP ↑ (+34%, p=0.035) and CTx ↓ (−11%, p=0.049) at **2 weeks** post-dosing, plus radius BMD ↑ (+2.7%, p=0.004) at **20 weeks** [^farr2024-phase2-rct] — **supersession candidate: clinical result mixed; patient-stratified benefit hypothesis requires prospective testing** |
| [[interventions/lifestyle/mediterranean-diet|Mediterranean diet]] | Adequate calcium, vitamin K2 (MGP carboxylation), polyphenols | Observational association with lower osteoporosis risk; causal evidence limited |

---

## Hallmark connections

| Hallmark | Bone mechanism |
|---|---|
| [[cellular-senescence]] | Senescent osteocyte accumulation → Bone-SASP → RANKL elevation + osteoblast suppression + marrow niche disruption |
| [[chronic-inflammation]] | Osteocyte SASP drives local and systemic inflammatory cytokines (IL-6, TNF-α, IL-1β) that suppress bone formation and promote resorption |
| [[stem-cell-exhaustion]] | BMSC adipogenic drift → reduced osteoblast pool; HSC niche degradation in marrow |
| [[deregulated-nutrient-sensing]] | FGF23-Klotho-PTH axis dysregulation; impaired calcium/phosphate sensing; [[mtor]] and [[insulin-igf1]] signaling modulate osteoblast function |
| [[mitochondrial-dysfunction]] | Osteoblast and osteocyte energy demand is high; mitochondrial ROS drives osteoblast apoptosis; documented in aged rodent bone #gap/needs-human-replication |

---

## Limitations and gaps

- `#gap/needs-human-replication` — senolytic clearance of senescent osteocytes for fracture prevention; mitochondrial dysfunction role in human osteocyte biology
- `#gap/needs-replication` — bone-derived extracellular vesicles as systemic calcification paradox messengers (single Nature Comms 2022 study); quantitative micropetrosis rates in human cortical aging
- `#gap/unsourced` — BMSC adipogenic-shift quantitative data in humans; cortical vs trabecular longitudinal loss rates in humans
- `#gap/dose-response-unclear` — optimal vitamin K2 dose for MGP carboxylation and vascular/bone benefit
- The osteocyte single-cell aging atlas does not yet exist; Tabula Muris Senis bone-marrow captures stromal/endosteal cells, not embedded osteocytes — see [[osteocytes]] for detail

---

## Cross-references

- [[osteocytes]] — terminally differentiated bone cells; FGF23 source; SOST source; senescence hub (sibling-seeded 2026-05-23)
- [[runx2]] — master osteoblast TF; ectopic VSMC expression drives vascular calcification (sibling-seeded 2026-05-23)
- [[bmp-2]] — drives BMSC → osteoblast commitment (sibling-seeded 2026-05-23)
- [[osteopontin]] — non-collagenous bone matrix protein; soft-tissue calcification inhibitor (sibling-seeded 2026-05-23)
- [[matrix-gla-protein]] — potent vascular and soft-tissue calcification inhibitor; vitamin K-dependent (sibling-seeded 2026-05-23)
- [[fgf23]] — bone-derived phosphaturic hormone; elevated in aging (verified 2026-05-23)
- [[klotho]] — obligate FGF23 co-receptor; declines with age
- [[bone-marrow]] — marrow niche (existing tissue page, verified)
- [[hematopoietic-stem-cells]] — resides in bone marrow niche (existing, verified-partial)
- [[mesenchymal-stem-cells]] — BMSC osteoblast precursors (existing cell-type page)
- [[processes/vascular-calcification]] — the arterial side of the bone-vascular axis paradox (sibling-seeded 2026-05-23)
- [[arterial-stiffening]] — downstream cardiovascular phenotype; mechanistically linked via FGF23 + vascular calcification
- [[cellular-senescence]], [[chronic-inflammation]], [[stem-cell-exhaustion]], [[deregulated-nutrient-sensing]] — hallmark pages
- [[interventions/lifestyle/exercise]] — resistance training as anabolic bone stimulus
- [[interventions/lifestyle/mediterranean-diet]] — dietary pattern associated with bone health

---

## Footnotes

[^liu2026-age-canalicular]: doi:10.1016/j.bone.2026.117890 · PMID 41962789 · Liu CJ et al. · in-vivo · model: senile osteoporosis mouse (C57BL/6J, age not specified in summary) · *Bone* 2026 Aug · AGE accumulation in osteocyte canalicular network associates with deterioration of canalicular physical properties; impaired fluid flow → reduced mechanosensing · DOI confirmed via PubMed esummary 2026-05-23 (corrected from 117400 → 117890); not in local archive

[^farr2020-review]: doi:10.1007/s11914-020-00619-x · PMID 32794138 · PMC7541777 · Farr JN, Kaur J, Doolittle ML, Khosla S · review · *Current Osteoporosis Reports* 2020 Oct · narrative review of osteocyte cellular senescence; documents p16/p21 accumulation in aged bone and downstream SASP-driven resorption promotion · PMC confirmed 2026-05-23; DOI lookup failed (404 at PMC URL); PMC7541777 available as verification fallback

[^fang2023-bone-sasp]: doi:10.1007/s00223-023-01100-4 · PMID 37256358 · PMC10230496 · Fang CL, Liu B, Wan M · review · *Calcified Tissue International* 2023 · formalizes "Bone-SASP" concept; osteocyte SASP acts locally on bone remodeling and systemically on marrow niche; includes glucocorticoid-induced bone damage and osteoarthritis mechanisms; links bone aging SASP to broader inflammaging · local PDF downloaded and verified at concept level 2026-05-23

[^ding2022-elife]: doi:10.7554/eLife.81480 · PMID 36305580 · Ding P, Gao C, Gao Y et al. · in-vivo · model: DMP1cre × Rosa26-DTA heterozygotes (DTAhet); **partial** osteocyte ablation (complete ablation is perinatally lethal) · *eLife* 2022;11:e81480 · partial osteocyte depletion caused severe osteoporosis, sarcopenia, degenerative kyphosis (apparent by 13 weeks), and shortened lifespan (~20–40 weeks vs >2 years WT); scRNA-seq confirmed SASP induction in mesenchymal (osteoblast-lineage) and hematopoietic (myeloid-lineage) cells; myeloid-biased hematopoiesis with expanded neutrophils/monocytes and impaired B-cell lymphopoiesis; causal demonstration that osteocyte dysfunction drives tissue-wide aging phenotypes via SASP · local PDF downloaded and verified 2026-05-23

[^farr2023-jci]: doi:10.1172/JCI162519 · PMID 36809340 · Farr JN, Saul D, Doolittle ML et al., Khosla S · in-vivo · model: aged C57BL/6 mice (20 months); local model: DMP1-Cre⁺/⁻ × p16-LOX-ATTAC (osteocyte-specific); systemic model: p16-INK-ATTAC · *Journal of Clinical Investigation* 2023;133(8):e162519 · AP20187 10 mg/kg twice-weekly i.p. for 4 months; local-model n=15 females + 10 males per group; systemic-model comparison from prior publication; transplant arm: ~10⁶ Sn/non-Sn fibroblasts i.p. into 4-month-old male C57BL/6 WT mice (n=11/group) · local senolysis improved lumbar spine trabecular BV/TV (via increased bone formation) but had no effect on femur trabecular/cortical bone, resorption, or marrow adiposity; systemic senolysis improved both spine and femur parameters AND reduced resorption and marrow adipocyte numbers; Rankl reduction was systemic-only; transplanted Sn cells induced TAF⁺ osteocyte senescence in young host mice at 60 days post-transplant, confirming non-cell-autonomous SASP propagation · local PDF verified end-to-end 2026-05-23

[^garcia-gomez2020]: doi:10.1016/j.arteri.2019.03.008 · PMID 31221532 · García-Gómez MC, Vilahur G · review · *Clínica e Investigación en Arteriosclerosis* 2020 Jan-Feb · narrative review of shared osteoporosis/vascular calcification mechanisms; summarizes epidemiological and mechanistic overlap including RUNX2, MGP, estrogen withdrawal, and inflammation · DOI corrected 2026-05-23 (was 2020.01.002; correct suffix is 2019.03.008 per PubMed record for PMID 31221532); closed-access (not_oa); verified at abstract/metadata level only

[^chen2026-meta]: doi:10.7150/ijms.130435 · PMID 42158825 · Chen KH et al. · systematic-review and meta-analysis · *International Journal of Medical Sciences* 2026 · nutritional supplementation combined with exercise for musculoskeletal health in women across reproductive stages; includes postmenopausal bone density outcomes · DOI confirmed via PubMed esummary 2026-05-23; cited for intervention-evidence framing only; primary fracture-endpoint RCT data for exercise requires dedicated bone-exercise meta-analysis citation #gap/needs-replication

[^farr2024-phase2-rct]: doi:10.1038/s41591-024-03096-2 · PMID 38956196 · PMC11705617 · Farr JN, Atkinson EJ, Achenbach SJ et al., Khosla S · phase-2 rct · n=60 postmenopausal women · *Nature Medicine* 2024;30(9):2605-2612 · intermittent dasatinib + quercetin (D+Q) vs placebo; primary endpoint CTx bone resorption at 20 weeks: no significant difference (median D+Q −4.1% vs control −7.7%; p=0.611); P1NP bone formation transiently increased relative to control at 2 weeks (+16%, p=0.020) and 4 weeks (+16%, p=0.024) but not at 20 weeks; exploratory high-senescent-burden tertile (T-cell p16 mRNA): D+Q increased P1NP (+34%, p=0.035) and reduced CTx (−11%, p=0.049) at **2 weeks** post-dosing; radius BMD increased +2.7% (p=0.004) at **20 weeks** (the only BMD signal at the 20-week timepoint); no serious adverse events · **TIMING CORRECTION 2026-05-23 via osteoporosis-phenotype verifier pass**: original footnote stated all three tertile metrics at 20 weeks; correct PDF reading is P1NP/CTx at 2 weeks + BMD at 20 weeks · **SUPERSESSION CANDIDATE** relative to preclinical-only framing: first human RCT of senolytics for bone; primary endpoint negative in overall group; exploratory biomarker-stratified benefit suggests senescent cell burden may need to be pre-selected; prospective stratified trial needed
