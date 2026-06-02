---
type: organ-system
aliases: [musculoskeletal system, locomotor system, MSK system]
key-organs: []
key-tissues: ["[[bone]]", "[[skeletal-muscle]]"]
key-cell-types: ["[[osteoblasts]]", "[[osteoclasts]]", "[[osteocytes]]", "[[satellite-cells]]", "[[fibroadipogenic-progenitors]]", "[[mesenchymal-stem-cells]]"]
key-aging-phenotypes: ["[[sarcopenia]]", "[[osteoporosis]]", "[[osteoarthritis]]", "[[frailty]]", "[[intervertebral-disc-degeneration]]", "[[low-back-pain]]"]
related-hallmarks: ["[[stem-cell-exhaustion]]", "[[cellular-senescence]]", "[[chronic-inflammation]]", "[[mitochondrial-dysfunction]]"]
parent-system: null
---

# Musculoskeletal System

Navigational overlay for bone, skeletal muscle, joints, and their resident cells. Loss of musculoskeletal integrity — declining muscle mass/strength and bone density — is a defining feature of physical aging and the proximate driver of [[frailty]], falls, and fractures. The bone and muscle compartments are mechanically and endocrine-coupled (the "bone-muscle unit"), and both share mesenchymal-progenitor exhaustion as an upstream cause.

## Tissues & organs

- [[bone]] — remodeling tissue; the bone-vascular axis links it to [[vascular-calcification]]
- [[skeletal-muscle]] — contractile tissue; site of [[sarcopenia]]

## Cell types

- [[osteoblasts]] — bone-forming; declining number/activity with age
- [[osteoclasts]] — bone-resorbing; relative hyperactivity drives net resorption
- [[osteocytes]] — mechanosensory hub; SOST/FGF23 source
- [[satellite-cells]] — muscle stem cells; exhaustion impairs regeneration
- [[fibroadipogenic-progenitors]] — drive fatty/fibrotic muscle degeneration
- [[mesenchymal-stem-cells]] — shared osteo/adipo/chondro progenitor (BM-MSCs); fate-drift toward adipogenesis

## Aging phenotypes

- [[sarcopenia]] — age-related muscle loss
- [[osteoporosis]] — low bone density / fragility fractures
- [[osteoarthritis]] — joint cartilage degeneration
- [[frailty]] — integrative phenotype (musculoskeletal + multisystem)
- [[intervertebral-disc-degeneration]] · [[low-back-pain]] — spinal-axis degeneration

## Key molecular axes

- Bone remodeling regulators: [[runx2]], [[sost]], [[dkk1]], [[lrp5-lrp6]], [[matrix-gla-protein]], [[fgf23]]
- Therapeutics: [[romosozumab]] (anti-sclerostin), senolytics; [[vitamin-k]] (MGP carboxylation)

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "musculoskeletal-system"
SORT file.name
```

## Missing / planned pages

- `[[cartilage]]`, `[[tendon]]`, `[[ligament]]`, `[[synovium]]`, `[[intervertebral-disc]]`, `[[joint]]` — connective/articular tissues not yet seeded #stub
- `[[chondrocytes]]`, `[[myofibers]]` — cell types not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[cardiovascular-system]] — shares the bone-vascular calcification axis
- [[stem-cell-exhaustion]] — the dominant upstream hallmark for both bone and muscle
