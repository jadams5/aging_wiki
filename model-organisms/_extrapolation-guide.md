---
type: framework
aliases: [model organism extrapolation, mouse-to-human translation]
covers: [model-organisms, studies]
---

# Model organism → human extrapolation guide

The wiki uses primary results from model organisms (mouse, worm, fly, yeast, killifish, naked mole rat) to inform claims about human aging. **Whether and when these extrapolate is a first-class question.** This page defines the rubric.

This page is the **data layer**: per-organism divergence catalog, the three-dimension rubric, and case-level pitfalls. The companion synthesis is [[hypotheses/translation-failure-of-aging-interventions]] (Mode B conceptual frame), which organizes *why* the pattern of mouse-success / human-modest-or-null persists across cases and what would update the field's confidence in mouse-validated interventions. Use this page to ask "is this specific extrapolation safe?"; use the hypothesis page to ask "should we expect the next mouse result to translate, and what general barriers apply?"

---

## The three-dimension rubric

For every claim derived from a non-human study, attach a small extrapolation table:

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes / partial / no / unknown |
| Phenotype conserved in humans? | yes / partial / no / unknown |
| Replicated in humans? | yes / no / in-progress / contradicted |

### What "yes / partial / no" means

**Pathway conserved** — Are the molecular components (genes, proteins, regulatory motifs) functionally orthologous in humans?

- *yes* — Direct human ortholog with conserved domain structure and demonstrated equivalent function (e.g., mTOR is mTOR in mouse and human).
- *partial* — Ortholog exists but with notable functional divergence (e.g., mouse vs human telomerase regulation, mouse vs human p16 dynamics).
- *no* — No clear ortholog or function is performed by an unrelated mechanism in humans.
- *unknown* — Ortholog exists, function in humans uncharacterized.

**Phenotype conserved** — Does the *organism-level* effect manifest similarly?

- *yes* — Human aging shows the same phenotype on the same approximate timescale (allowing for lifespan scaling).
- *partial* — Phenotype occurs in humans but with different magnitude, kinetics, or tissue distribution.
- *no* — Phenotype absent or qualitatively different in humans (e.g., mouse cardiomyocyte regeneration capacity).
- *unknown* — Hasn't been adequately measured in humans.

**Replicated in humans** — Has the specific intervention or observation been tested in humans?

- *yes* — Independent human study showed the same direction of effect.
- *no* — Not yet attempted in humans.
- *in-progress* — Trial registered (cite NCT number).
- *contradicted* — Human study failed to replicate or showed opposite effect.

---

## Per-organism extrapolation profiles

Each model-organism page (`mus-musculus.md`, `caenorhabditis-elegans.md`, etc.) should include:

1. **Genome similarity to human** (% with one-to-one orthologs)
2. **Lifespan ratio** (their lifespan vs human lifespan, for time-scaling)
3. **Conserved systems** — bullet list of well-conserved pathways relevant to aging
4. **Divergent systems** — bullet list of known major divergences (with refs)
5. **Strengths** — what the model is uniquely good at
6. **Failure modes** — known cases where the model misled aging research

### Quick reference (to be expanded per page)

| Organism | Lifespan | % orthologs | Best for | Known divergences from human |
|---|---|---|---|---|
| [[mus-musculus]] (mouse) | 2–3 yr | ~85% | mammalian physiology, transgenics, lifespan studies | telomere biology, immune aging, microbiome, drug metabolism |
| [[rattus-norvegicus]] (rat) | 2–4 yr | ~85% | cardiovascular, behavioral aging | similar to mouse divergences |
| [[caenorhabditis-elegans]] (worm) | 2–3 wk | ~40% | longevity genes, autophagy, IIS pathway | no adaptive immunity, no circulatory system, post-mitotic adult |
| [[drosophila-melanogaster]] (fly) | 1–2 mo | ~60% | nutrient sensing, neurodegeneration | open circulatory, no humoral immunity |
| [[saccharomyces-cerevisiae]] (yeast) | days–weeks (chronological); ~25 generations (replicative) | ~30% | basic cellular machinery, autophagy, sirtuin discovery | no multicellularity, no tissue context |
| [[nothobranchius-furzeri]] (killifish) | GRZ ~9 wk median; wild strains 5–8 mo | vertebrate | short-lived vertebrate, brain aging | aquatic, ectothermic |
| [[heterocephalus-glaber]] (naked mole rat) | 30+ yr | mammal, similar to mouse | extreme longevity, cancer resistance | eusocial, hypoxia-adapted, ectothermic-ish |

---

## Common extrapolation pitfalls

These cases historically misled translation; flag them when relevant.

- **Telomere biology** — Lab mice (C57BL/6) have telomeres 5–10× longer than humans and constitutive telomerase in many somatic tissues; telomere attrition is *not* a major aging driver in standard mouse strains. Wild-derived strains and telomerase-knockout mice are better models.
- **Caloric restriction effect size** — CR extends lifespan ~30–40% in mice; the largest controlled human trial (CALERIE) found no lifespan effect at 2 years and modest healthspan markers. Effect-size translation appears poor.
- **C. elegans IIS extrapolation** — `daf-2` mutants live 2× as long; the human IGF1R analog has *much* smaller effects. The pathway is conserved; the magnitude is not.
- **Senolytic dosing** — Mouse-effective doses for D+Q and fisetin are mg/kg orders of magnitude higher than typical human supplement doses; pharmacokinetic translation is non-trivial.
- **Mouse SASP composition differs from human SASP** — SASP factor lists from mouse studies should be cross-checked against human cell senescence data.
- **Drug metabolism (CYP differences)** — mouse CYP3A vs human CYP3A4 substrate specificity differs; some compounds metabolized to active form in mouse aren't in humans.

---

## When to deprioritize a model-organism finding

Treat a finding as low-confidence-for-human-application if any of these apply:

- Pathway is *not* conserved in humans (#gap/no-human-ortholog)
- Pathway is conserved but the relevant phenotype is *not* observed in human aging
- Effect size in the model relies on a feature humans lack (e.g., adult tissue regeneration capacity in fish/amphibians)
- Multiple mammalian models disagree
- Original study is preliminary (single lab, small n, no replication)

Tag with `#gap/needs-human-replication` and surface in `gaps/`.
