---
type: organ-system
aliases: [endocrine system, hormonal system]
key-organs: ["[[thyroid]]", "[[parathyroid]]"]
key-tissues: ["[[thyroid]]", "[[parathyroid]]"]
key-cell-types: []
key-aging-phenotypes: ["[[type-2-diabetes]]"]
related-hallmarks: ["[[deregulated-nutrient-sensing]]", "[[altered-intercellular-communication]]"]
parent-system: null
---

# Endocrine System

Navigational overlay for the hormone-secreting glands and their systemic signaling axes. Endocrine aging ("endocrinosenescence") is pervasive: the somatotropic (GH/IGF-1), thyroid, gonadal, adrenal, and mineral-regulating axes all drift with age. Two of these axes are mechanistically central to this wiki — **deregulated nutrient sensing** (insulin/IGF-1, the most evolutionarily conserved longevity pathway) and the **bone-mineral endocrine axis** (PTH–FGF23–Klotho–vitamin D), which links the endocrine, skeletal, and cardiovascular systems.

## Glands & organs

- [[thyroid]] — T3/T4 + calcitonin; subclinical hypothyroidism and the age-rising TSH set-point are common and clinically consequential
- [[parathyroid]] — PTH; secondary hyperparathyroidism is a major driver of age-related bone loss

## Aging phenotypes

- [[type-2-diabetes]] — the dominant endocrine-metabolic aging disease (insulin resistance)

## Key signaling axes

- **Nutrient sensing:** [[insulin-igf1]], [[mtor]], [[ampk]] — see [[deregulated-nutrient-sensing]]
- **Bone-mineral endocrine axis:** [[fgf23]] (osteocyte → kidney), [[klotho]] (co-receptor; declines with age), [[hyperphosphatemia]], [[matrix-gla-protein]], [[vitamin-k]] — connects endocrine ↔ [[musculoskeletal-system]] ↔ [[cardiovascular-system]]

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "endocrine-system"
SORT file.name
```

## Missing / planned pages

- [[pancreas]] — now seeded as a **stub** (endocrine islets; shared with [[digestive-system]])
- `[[adrenal-gland]]`, `[[pituitary]]`, `[[hypothalamus]]`, `[[pineal-gland]]`, `[[gonads]]` — glands not yet seeded #stub
- `[[hypothyroidism]]`, `[[secondary-hyperparathyroidism]]`, `[[menopause]]`, `[[andropause]]` — endocrine aging phenotypes not yet seeded #stub
- `[[growth-hormone]]`, `[[cortisol]]`, `[[thyroid-follicular-cells]]` — not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[deregulated-nutrient-sensing]] — the insulin/IGF-1 longevity axis
- [[musculoskeletal-system]] · [[cardiovascular-system]] — connected via the PTH–FGF23–Klotho mineral axis
- [[reproductive-system]] — gonadal hormone decline (menopause/andropause)
