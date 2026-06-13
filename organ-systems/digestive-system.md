---
type: organ-system
aliases: [digestive system, gastrointestinal system, GI system, gastrointestinal tract]
key-organs: []
key-tissues: ["[[gingiva]]", "[[periodontal-ligament]]", "[[alveolar-bone]]"]
key-cell-types: []
key-aging-phenotypes: ["[[type-2-diabetes]]", "[[periodontitis]]", "[[gingival-recession]]", "[[tooth-loss]]"]
related-hallmarks: ["[[dysbiosis]]", "[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
parent-system: null
---

# Digestive System

Navigational overlay for the gastrointestinal tract — from the **oral cavity** (its first segment) through liver, pancreas, and the gut microbiome. The best-developed aging biology in this system is currently the **gut microbiome** — its compositional drift, barrier failure ("leaky gut"), and contribution to inflammaging are an active research front and a dedicated hallmark ([[dysbiosis]]). The **oral/periodontal** cluster is the second well-developed area (see below). Solid-organ pages (liver, intestine, pancreas) are largely planned.

## Processes & barrier biology

- [[gut-barrier]] — intestinal barrier integrity; "leaky gut" and systemic inflammaging
- [[gut-microbiome-aging-shifts]] — age-related compositional change
- [[oral-microbiome-aging-shifts]] — age-related compositional change in the oral/subgingival niche

## Oral cavity & periodontium

The mouth is the entry segment of the digestive tract and the second-best-developed aging cluster in this system. The supporting apparatus of the tooth (the **periodontium**) is built from three atomic tissues, and its age-associated breakdown produces a graded sequence of phenotypes.

- Tissues: [[gingiva]] (gums) · [[periodontal-ligament]] (PDL; tooth-suspending fibers + PDL stem cells) · [[alveolar-bone]] (tooth-bearing bone; also skeletal — cross-linked to [[bone]])
- Microbiology: [[oral-microbiome-aging-shifts]] · [[porphyromonas-gingivalis]] (keystone pathogen)
- Phenotypes (graded sequence): [[gingival-recession]] (receding gums) → [[periodontitis]] → [[tooth-loss]]/edentulism → masticatory dysfunction feeding [[frailty]] and [[sarcopenia]]

## Microbiome (atomic taxa)

- [[firmicutes-bacteroidetes-ratio]] — the most-cited aging microbiome metric
- [[akkermansia-muciniphila]] · [[bifidobacterium]] · [[lactobacillus]] — taxa with aging-relevant shifts
- [[porphyromonas-gingivalis]] — keystone oral pathogen (periodontitis; oral→systemic axis)
- [[ewingella-americana]] — lower-vertebrate-derived therapeutic candidate

## Aging phenotypes

- [[type-2-diabetes]] — metabolic disease with strong gut-microbiome and pancreatic-islet components (shared with [[endocrine-system]])
- [[periodontitis]] · [[gingival-recession]] · [[tooth-loss]] — oral/periodontal aging phenotypes (see Oral cavity cluster above)

## Related interventions

- Dietary: [[caloric-restriction]], [[ketogenic-diet]], [[phosphate-additive-reduction]]; prebiotics/postbiotics/FMT

## Auto-aggregated tissue members

```dataview
LIST FROM "tissues"
WHERE parent-system = "digestive-system"
SORT file.name
```

## Missing / planned pages

- [[liver]] and [[pancreas]] — now seeded as **stubs** (need full content); liver has an ingested primate snRNA aging study ([[studies/yang-2023-primate-liver-aging-snrna-srebp2]])
- `[[intestine]]`, `[[stomach]]`, `[[colon]]`, `[[esophagus]]`, `[[gallbladder]]` — solid-organ/segment pages not yet seeded #stub
- `[[enterocytes]]`, `[[intestinal-stem-cells]]`, `[[hepatocytes]]` — cell types not yet seeded #stub

## See also

- [[by-organ-system]] — index of all body-system MOCs
- [[dysbiosis]] — the gut-microbiome hallmark
- [[endocrine-system]] — pancreatic islets / glucose homeostasis overlap
