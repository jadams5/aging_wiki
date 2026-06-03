---
type: organ-system
aliases: [reproductive system, genital system, gonadal system]
key-organs: ["[[ovary]]", "[[testis]]", "[[uterus]]", "[[breast]]", "[[prostate]]"]
key-tissues: ["[[ovary]]", "[[testis]]", "[[uterus]]", "[[breast]]", "[[prostate]]"]
key-cell-types: ["[[oocytes]]", "[[granulosa-cells]]", "[[theca-cells]]", "[[leydig-cells]]", "[[sertoli-cells]]", "[[spermatogonial-stem-cells]]"]
key-aging-phenotypes: ["[[menopause]]", "[[andropause]]", "[[vasomotor-symptoms]]", "[[genitourinary-syndrome-menopause]]", "[[premature-ovarian-insufficiency]]", "[[polycystic-ovary-syndrome]]", "[[endometriosis]]", "[[turner-syndrome]]"]
related-hallmarks: ["[[altered-intercellular-communication]]", "[[stem-cell-exhaustion]]", "[[genomic-instability]]"]
parent-system: null
---

# Reproductive System

Navigational overlay for the gonads and reproductive organs. This system is a planned area of the wiki. Reproductive aging is notable for being the earliest and most abrupt organ-system aging in humans — **ovarian aging / menopause** typically completes decades before other systems fail, making the ovary a model of accelerated aging and a target of "ovarian rejuvenation" research. Gonadal hormone decline (estrogen, testosterone) has system-wide consequences, most prominently the post-menopausal acceleration of bone loss ([[osteoporosis]]) and cardiovascular risk.

## Key aging themes

- **Ovarian aging:** declining follicle reserve and oocyte quality; the [[ovary]] is the fastest-aging human organ, completing functional senescence ([[menopause]]) decades before other systems. Driven by depletion of a fixed [[oocytes|oocyte]] pool and [[granulosa-cells|granulosa-cell]] dysfunction.
- **Female hormone withdrawal:** [[estradiol]] and [[progesterone]] decline at menopause → systemic downstream aging (bone, cardiovascular, skin, brain, genitourinary).
- **Andropause:** gradual testosterone decline; effects on muscle ([[sarcopenia]]) and bone *(pending dedicated pages)*.
- **Systemic hormone-withdrawal effects:** estrogen loss → osteoclast disinhibition → [[osteoporosis]] (see [[parathyroid]], [[osteoclasts]]); links to [[endocrine-system]]

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "reproductive-system"
SORT file.name
```

## Seeded members

> The full sex-differential coverage (mechanisms, sex-bias in diseases, hypotheses) is mapped by the [[sex-differences-in-aging]] framework MOC; this overlay lists the anatomical reproductive members.

**Female axis**
- Tissues/organs: [[ovary]], [[uterus]], [[breast]]
- Cell types: [[oocytes]], [[granulosa-cells]], [[theca-cells]]
- Phenotypes: [[menopause]], [[vasomotor-symptoms]], [[genitourinary-syndrome-menopause]], [[premature-ovarian-insufficiency]], [[polycystic-ovary-syndrome]], [[endometriosis]], [[turner-syndrome]]
- Hormones: [[estradiol]], [[progesterone]]
- Estrogen-signaling proteins: [[esr1]] (ERα), [[esr2]] (ERβ), [[gper]] (membrane ER), [[cyp19a1]] (aromatase)
- Ovarian-reserve marker: [[amh]]

**Male axis**
- Tissues/organs: [[testis]], [[prostate]]
- Cell types: [[leydig-cells]], [[sertoli-cells]], [[spermatogonial-stem-cells]]
- Phenotype: [[andropause]] (late-onset hypogonadism)
- Hormone: [[testosterone]]

**Shared gonadotropins:** [[fsh]] (menopause endocrine signature), [[lh]]

**Hormone-replacement interventions:** [[hormone-replacement-therapy]] (MHT), [[testosterone-replacement-therapy]], [[aromatase-inhibitors]], [[selective-estrogen-receptor-modulators]]

## Missing / planned pages

- `[[gonads]]` — umbrella organ stub
- `[[androgen-receptor]]`, `[[amhr2]]`, `[[inhibin]]`, `[[insl3]]` — endocrine proteins not yet seeded #stub
- `[[hypothalamic-pituitary-gonadal-axis]]`, `[[steroidogenesis]]`, `[[gnrh-signaling]]` — pathway pages #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[endocrine-system]] — gonadal hormone axes (HPG axis)
- [[musculoskeletal-system]] — estrogen/testosterone withdrawal accelerates bone and muscle loss
