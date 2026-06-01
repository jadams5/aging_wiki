---
type: study
doi: 10.1016/j.ebiom.2018.09.015
title: "Fisetin is a senotherapeutic that extends health and lifespan"
authors: [Yousefzadeh MJ, Zhu Y, McGowan SJ, Angelini L, Fuhrmann-Stroissnigg H, Xu M, et al.]
year: 2018
journal: EBioMedicine
study-design: in-vivo
organism: mus-musculus
n-subjects: 8-9   # for the headline lifespan study; other experiments range n=3 (human explants) to 4-10
intervention: ["[[fisetin]]"]
hallmarks-tested: ["[[cellular-senescence]]"]
human-evidence: partial   # ex vivo human adipose tissue explants (n=3)
peer-reviewed: true
preregistered: false
key-findings: [senescent-cell-clearance, lifespan-extension, healthspan-improvement, cell-type-specific-senolysis, human-ex-vivo-confirmation]
local-pdf: null
verified: true
verified-date: 2026-05-04
verified-by: claude
---

# Fisetin is a senotherapeutic that extends health and lifespan

## TL;DR

Screened a panel of 10 flavonoids (plus pirfenidone control) for senolytic activity in vitro; **fisetin** was the most potent. Showed in two distinct in vivo regimens that fisetin reduces senescent-cell burden in multiple tissues of aged mice, and — when fed as a chronic diet starting at 85 weeks of age — extends both median and maximum lifespan in WT mice. Confirmed senolytic activity in **human adipose tissue explants ex vivo**. Foundational paper underpinning current human senolytic trials.

## Design

The paper contains **two distinct in vivo experiments**, often conflated:

### Experiment A — Acute senescence reduction in aged WT mice

- **Subjects:** **22–24 month old WT C57BL/6** mice (pure background)
- **Dose:** **100 mg/kg fisetin in PEG400/ethanol vehicle by oral gavage**, 5 consecutive days
- **Sacrifice:** 72 h after final dose
- **Endpoint:** SA-β-gal+ cells in inguinal fat (n = 6–7 per group)
- **Companion:** also tested in p16Ink4a-INK-ATTAC reporter mice with CyTOF-based identification of which p16+ cell types were cleared

### Experiment B — Late-life chronic intervention for lifespan

- **Subjects:** **f1 C57BL/6 × FVB/n hybrid** WT mice (NOT pure C57BL/6)
- **Treatment start:** **85 weeks of age** (~20 months; paper notes this is "roughly equivalent to age 75 years in humans")
- **Diet:** **500 ppm fisetin in chow** (~60 mg/kg/day calculated from food intake) ad libitum, vs control diet with no drug
- **n:** 8–9 mice per group
- **Statistic:** Log rank (Mantel-Cox) survival test
- **Endpoints:** lifespan (median + maximum); composite lesion scores in brain/kidney/liver/lung/forepaw; serum amylase/ALT/MCP-1; SASP factors in tissues

### Companion experiments

- **In vitro flavonoid screen:** Ercc1-/- MEFs (a progeroid model); 11 compounds at 5 μM (resveratrol, fisetin, luteolin, rutin, EGCG, curcumin, pirfenidone, apigenin, myricetin, catechin, quercetin); SA-β-gal+ readout via IN Cell Analyzer 6000.
- **Cell-type validation:** HUVECs (apoptosis via caspase 3/7 in fisetin-treated senescent HUVECs); IMR90 cells (senescence reduction).
- **Progeroid mouse studies:** Ercc1-/Δ mice (a hypomorphic progeroid model) treated with intermittent 500 ppm fisetin chow.
- **Human ex vivo:** human omental adipose tissue explants from 3 female subjects (1 lean BMI ~26, 1 obese BMI 45.6, ages 55–66) treated with 20 μM fisetin × 48 h; SA-β-gal and multiplex SASP cytokines.

## Key results

### Acute fisetin reduces senescent cells in multiple tissues

In **22–24 month WT C57BL/6 mice** (Experiment A): single 5-day course of 100 mg/kg fisetin gavage produced significant reduction in SA-β-gal+ cells in inguinal fat (Fig 4A, p<0.01).

CyTOF in p16Ink4a-INK-ATTAC mice (Fig 4C) showed **cell-type-specific senolysis** — significant reductions in p16+ cells among:
- c-Kit+ mesenchymal stem/progenitor cells
- CD4+ T lymphocytes
- CD8+ T lymphocytes
- NK1.1+ NK cells
- CD146+CD31+ endothelial cells

But **no significant effect** on p16+ macrophages or dendritic cells. **Fisetin is not a pan-senolytic** — it acts on specific cell populations.

Independent confirmation via CENP-B+ cell quantification (Fig 4D) in the same populations.

### Late-life fisetin extends lifespan in WT mice

In **85-week-old f1 C57BL/6;FVB/n WT mice** (Experiment B; n=8–9/group): chronic 500 ppm fisetin chow extended both **median and maximum lifespan** (Fig 5A,B; Log rank test, *p<0.05). This is the headline lifespan finding.

### Healthspan markers improved in old WT mice

- Composite lesion scores reduced in brain, kidney, lung (Fig 5D; n=3–8/group)
- Serum amylase (pancreatic marker) and ALT (liver enzyme) significantly reduced
- Serum MCP-1 (a SASP factor) reduced
- Liver HNE adducts (oxidative stress marker) reduced
- Liver GSH:GSSG ratio improved (antioxidant capacity)
- Tissue SASP marker expression reduced in fat, spleen, liver, kidney, and peripheral CD3+ T cells (Fig 5F-J)

### Human ex vivo confirmation

Human adipose tissue explants treated with 20 μM fisetin × 48 h showed:
- Significant reduction in SA-β-gal+ cells (Fig 4E, p<0.01)
- Significant reduction in conditioned-media IL-6, IL-8, and MCP-1 (Fig 4F)
- IL-10 and GM-CSF not significantly affected

n=3 subjects only — preliminary but mechanistically supportive of human translatability.

## Proposed mechanism

The paper does **not** identify a single direct molecular target. Discussion notes:

- Fisetin "blocks the PI3K/AKT/mTOR pathway" (citing prior work, ref 80) — disrupting this pathway is one of the SCAP (Senescent-Cell Anti-Apoptotic Pathway) targeting strategies.
- Fisetin is a topoisomerase inhibitor and increases hSIRT1 catalytic activity in vitro.
- Acts as a direct ROS scavenger and inhibits TNFα, IL-6, NF-κB activity.
- **Cell-type-dependent mode of action:** in HUVECs fisetin induces apoptosis (caspase 3/7); in MEFs it reduces senescence markers without cell killing — apoptotic senolysis vs senomorphic depending on cell type.

The paper does **not** position fisetin as a Bcl-xL/Bcl-2 inhibitor (that mechanism applies to Navitoclax / A1331852, mentioned as a separate senolytic class).

## Pharmacokinetics

The Discussion cites half-lives of **0.09 h (rapid) and 3.1 h (terminal)** for fisetin (compared to 3.1 h for quercetin). This is extremely short. Authors argue the persistent effect after intermittent dosing favors a "hit-and-run" senolytic mechanism (one-time elimination of senescent cells) rather than continuous-occupancy receptor pharmacology.

Average dietary fisetin intake in Japan is reported as ~0.4 mg/day — orders of magnitude below the experimental doses.

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | Senescence biology and SASP conserved; PI3K/AKT/mTOR conserved |
| Phenotype conserved in humans? | partial | Human ex vivo explants show senescent-cell clearance + SASP reduction (n=3); whole-organism effect untested in vivo |
| Replicated in humans? | in-progress | Multiple human trials initiated post-publication; see [[fisetin]] § Human evidence for current NCT registry status |

## Limitations

- Lifespan study used a hybrid background (F1 C57BL/6;FVB/n), not the more common pure C57BL/6. Strain-effect generalizability is uncertain.
- Lifespan study n is small (8–9/group). Replication in larger cohorts would strengthen confidence.
- Human evidence is ex vivo only (n=3). No in vivo human pharmacodynamic data in this paper.
- Mechanism-of-action remains incompletely resolved despite the in vivo phenotype.
- Authors have a financial interest disclosed (patents on senolytic drugs, owned by Mayo Clinic; J.L.K., T.T., Y.Z., M.X., and T.P. listed as conflict).
- "No adverse effects of fisetin have been reported, even when given at high doses" — author claim, but the paper does not include a dedicated long-term safety arm.

## Cited by

[Auto-populated by Obsidian backlinks panel]
