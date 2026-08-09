---
type: pathway
aliases: [IL-11 pathway, IL11 signaling, IL11-IL11RA-gp130 signaling]
kegg: null
kegg-secondary: []
reactome: R-HSA-6783589
wikipathways: WP2332
key-nodes: ["[[il-11]]", "[[il-11-receptor-alpha-1]]", "[[gp130]]", "[[jak1]]", "[[jak2]]", "[[tyk2]]", "[[stat3]]", "[[stat1]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]", "[[nf-kb]]", "[[ampk]]", "[[mtor]]"]
upstream: ["[[tgf-beta]]", "[[cellular-senescence]]"]
downstream: ["[[jak-stat-pathway]]", "[[ras-mapk]]", "[[pi3k-akt-pathway]]", "[[nf-kb]]", "[[ampk]]", "[[mtor]]", "[[extracellular-matrix-remodeling]]"]
hallmarks: ["[[altered-intercellular-communication]]", "[[chronic-inflammation]]", "[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]"]
sens-categories: []
druggability-tier: 2
caused-by: ["[[tgf-beta]]", "[[cellular-senescence]]"]
causes: ["[[extracellular-matrix-remodeling]]", "[[cellular-senescence]]"]
literature-checked-through: 2026-08-09
verified: true
verified-date: 2026-08-09
verified-by: claude
verified-scope: "Reactome, WikiPathways and KEGG identifiers; canonical JAK-STAT and context-dependent non-canonical topology; Schafer 2017, Ng 2021, Widjaja 2024, Tan 2024 and Wu 2026 primary-source claims; ligand-versus-receptor-null boundaries; aging-context druggability and current clinical-trial status; and PubMed/Europe PMC recency and publication-integrity searches were checked through 2026-08-09. Contradictory human-lung-fibroblast evidence and unresolved branch causality are retained explicitly."
---

# IL-11 signaling

IL-11 signaling begins when [[il-11]] binds [[il-11-receptor-alpha-1|IL11RA]] and recruits [[gp130|IL6ST/gp130]]. **Canonical signaling** refers to gp130-associated JAK1/JAK2/TYK2 activation followed by STAT3/STAT1 signaling. **Non-canonical signaling** includes RAS–MEK–ERK and, depending on cell context, PI3K–AKT and NF-κB outputs [^pathwaydb]. In the fibrosis and aging studies summarized here, ERK-dependent fibroblast activation and ERK–LKB1/AMPK–mTOR coupling are prominent; this does not mean STAT3 is absent or that ERK is universally dominant.

The frontmatter Reactome identifier (`R-HSA-6783589`) is the broader interleukin-6-family signaling pathway; the IL-11 ligand-binding event is represented more specifically by Reactome reaction `R-HSA-449976`. WikiPathways has a dedicated human IL-11 map (`WP2332`). A current KEGG text search returned no dedicated IL-11 pathway entry [^pathwaydb].

## Core topology

```text
TGF-β / tissue injury / cellular stress
                  ↓
              IL-11 secretion
                  ↓
          IL11RA + gp130 complex
             ↙             ↘
 JAK1/JAK2/TYK2          RAS–MEK–ERK
       ↓                    ↓
 STAT3 / STAT1     p90RSK → LKB1 inhibition
                            ↓
                  AMPK down, mTORC1 up
                            ↓
 translation, fibroblast activation, senescence-associated outputs
```

The precise branch balance is cell- and context-dependent. Neither the 2024 systemic-aging study nor the 2026 ovarian study fully decomposed canonical STAT3 from non-canonical ERK causality [^widjaja2024][^wu2026].

## TGF-β-to-IL-11 fibrotic relay

In primary human cardiac fibroblasts, [[tgf-beta|TGF-β1]] induced IL11 more strongly than other measured genes. Blocking or deleting the IL-11 receptor axis reduced TGF-β-driven fibroblast activation, collagen production and ERK signaling, while recombinant or fibroblast-restricted IL-11 promoted fibrosis in mice [^schafer2017]. This positioned IL-11 as an autocrine downstream relay of multiple profibrotic inputs rather than a universal upstream initiator.

The relay is not universal across fibroblast systems. Tan et al. found that IL-11 activated STAT3 and ERK in primary human lung fibroblasts but was markedly weaker than TGF-β for fibrotic protein outputs; anti-IL-11 blocked IL-11-induced pSTAT3 yet did not suppress TGF-β-induced TIMP1 or CTGF. This independent result supports context dependence and prevents treating IL-11 as an obligatory downstream mediator in every organ or injury model [^tan2024]. #gap/contradictory-evidence

Wu et al. extended the relay to primary human [[ovarian-stromal-fibroblasts]]: TGF-β1 strongly induced IL11, recombinant IL-11 activated collagen/myofibroblast programs, and reported IL-11 neutralization or ERK inhibition attenuated culture phenotypes. The antibody concentration and ERK-inhibitor identity are unresolved across Methods, figure labels and source data. Human ovarian stiffness and IL-11 rose together with age, but human causality remains untested [^wu2026].

## Aging-system evidence

Widjaja et al. reported that age-associated tissue IL-11 coincided with ERK–p90RSK activation, inhibitory LKB1 phosphorylation, lower AMPK activity and higher mTORC1/p70S6K/S6 signaling. Germline loss or X203 antibody treatment shifted these readouts in the opposite direction and improved multiple mouse healthspan phenotypes [^widjaja2024]. Pharmacological and cell-culture experiments support the chain, but a single linear pathway should not be assumed: white-adipose beiging, weight loss, fibrosis reduction and senescence markers may have distinct mediators.

## Ovarian matrix-stiffness loop

The current preclinical model is:

1. Aging or ovarian pathology raises TGF-β/IL-11 in stromal fibroblasts.
2. IL11RA–gp130–ERK signaling promotes fibroblast activation and collagen-I-rich matrix deposition.
3. A stiffer matrix directly impairs follicle growth and granulosa-cell proliferation/steroidogenesis in culture.
4. Reduced ovarian function and local injury may further reinforce stromal activation.

Mouse receptor deletion and adult RNA knockdown interrupt several steps, but the feedback loop and its directionality have not been demonstrated longitudinally in women [^wu2026].

## Intervention status

Research tools include ligand-neutralizing X203, receptor-neutralizing X209, *Il11*/*Il11ra1* knockout, siIl11 lipid nanoparticles and AAV-shIl11ra1. LASN01, a clinical IL11RA antibody distinct from X209, completed phase 1/2a and phase 2 non-aging studies. Separate non-aging programs include ligand-directed BI 765423 and 9MW3811 and the TSLP/IL-11 bispecific HB0056; three direct or bispecific IL-11-inhibition trials were actively recruiting on the checked date [^clinical]. No human study tested geroprotection, lifespan or ovarian aging. Open Targets and registry evidence therefore support aging-context tier 2, not clinical validation for aging [^druggability]. See [[anti-il-11-antibodies]].

Complete ligand and receptor loss are also not phenotypically interchangeable. In the directly compared mouse lines, homozygous *Il11* loss caused female infertility and smaller litters from knockout males, whereas craniosynostosis-like and trabecular-bone phenotypes reported with *Il11ra1* loss were absent from the ligand-null line [^ng2021].

## Gaps

- Cell-type necessity for lifespan and metabolic effects is unknown.
- Relative JAK/STAT3 versus ERK contribution is unresolved across organs.
- It is unknown whether treatment reverses established late ovarian fibrosis or mainly prevents progression.
- Complete pathway loss impairs development and reproduction in some models; dose, duration and therapeutic window for older adults remain undefined. #gap/no-mechanism #gap/dose-response-unclear #gap/long-term-unknown #gap/needs-human-replication

## Footnotes

[^schafer2017]: [[studies/schafer-2017-il11-cardiovascular-fibrosis]] · doi:10.1038/nature24676 · Schafer S et al. · *Nature* 2017;552:110–115
[^widjaja2024]: [[studies/widjaja-2024-il11-healthspan-lifespan]] · doi:10.1038/s41586-024-07701-9 · Widjaja AA et al. · *Nature* 2024;632:157–165
[^wu2026]: [[studies/wu-2026-il11-ovarian-stiffness]] · doi:10.1038/s43587-026-01159-2 · Wu M et al. · *Nature Aging* 2026;6:1395–1416
[^ng2021]: [[studies/ng-2021-il11-il11ra1-loss-of-function]] · doi:10.1038/s41598-021-93623-9 · Ng B et al. · *Scientific Reports* 2021;11:14088 · ligand-versus-receptor knockout comparison
[^tan2024]: doi:10.3389/fimmu.2024.1293883 · Tan Y et al. · *Frontiers in Immunology* 2024;15:1293883 · primary human lung fibroblast experiments
[^pathwaydb]: Reactome R-HSA-6783589 and reaction R-HSA-449976; WikiPathways WP2332; KEGG pathway search · human curated pathway records accessed 2026-08-09
[^clinical]: ClinicalTrials.gov NCT05331300 and NCT06226545 (LASN01); NCT07036523 (BI 765423); NCT05740475 and NCT07576608 (9MW3811); NCT06612970 (HB0056) · registry records accessed 2026-08-09 · all are non-aging programs
[^druggability]: Open Targets Platform records for IL11, IL11RA, IL6ST and STAT3 · accessed 2026-08-09 · wiki tier is aging-context specific
