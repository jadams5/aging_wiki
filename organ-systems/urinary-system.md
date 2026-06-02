---
type: organ-system
aliases: [urinary system, renal system, genitourinary system]
key-organs: []
key-tissues: []
key-cell-types: []
key-aging-phenotypes: []
related-hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]", "[[cellular-senescence]]"]
parent-system: null
---

# Urinary System

Navigational overlay for the kidneys and urinary tract. Although the wiki has no dedicated kidney page yet, the kidney is already deeply embedded in the wiki's **bone-mineral endocrine axis**: it is the principal target organ of [[fgf23]] (via the [[klotho]] co-receptor), the main route of phosphate excretion, and the organ whose age-related functional decline drives [[hyperphosphatemia]] and secondary hyperparathyroidism. Renal aging (declining GFR, nephron loss, tubulointerstitial fibrosis) is therefore a hub connecting the [[endocrine-system]], [[musculoskeletal-system]], and [[cardiovascular-system]].

## Key axes (pending dedicated pages)

- **Phosphate / mineral handling:** [[fgf23]] → kidney NaPi-IIa/IIc downregulation; [[klotho]] (highly expressed in kidney; declines with age); [[hyperphosphatemia]] as the failure node
- **Vitamin D activation:** renal 1α-hydroxylase (CYP27B1) — declines with age and CKD
- Klotho is one of the most kidney-enriched anti-aging proteins; its renal loss is a proposed driver of systemic aging

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "urinary-system" OR parent-system = "renal-system"
SORT file.name
```

## Missing / planned pages

- [[kidney]] — now seeded as a **stub** (needs full content); the highest-priority page to flesh out in this system
- `[[nephron]]`, `[[bladder]]`, `[[ureter]]` — not yet seeded #stub
- `[[chronic-kidney-disease]]`, `[[renal-aging]]` — phenotypes not yet seeded #stub
- `[[podocytes]]`, `[[renal-tubular-cells]]` — cell types not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[endocrine-system]] — the kidney is the effector organ of the PTH–FGF23–Klotho–vitamin D axis
- [[klotho]] — the kidney-enriched anti-aging protein
