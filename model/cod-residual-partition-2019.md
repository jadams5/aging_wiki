# Cause-of-death residual partition — CDC WONDER 2019, by sex

**Status:** DRAFT worklist (2026-06-11). Phase-0 data pull for the simulator's "Other causes"
decomposition. Feeds the planned node-adder SOP + sub-agent pipeline.

## Provenance

- Source: **CDC WONDER, Underlying Cause of Death, D76 dataset, year 2019**, grouped by ICD-10
  chapter + sub-chapter, filtered by sex (two passes, `V_D76.V7` = M / F). Targeted level-3
  pulls (individual ICD codes) for falls and the gastrointestinal split.
- Raw sub-chapter table: [`cod-2019-by-sex.tsv`](cod-2019-by-sex.tsv) (140 rows).
- Totals: **M 1,473,724 + F 1,380,923 = 2,854,647** (matches published 2019 US all-cause).
  Sub-chapter rows sum to 2,852,977 (the % denominator below; tiny gap = suppressed/rounded cells).
- **Why 2019, not 2022:** pre-COVID baseline → no pandemic outlier in the residual, and it
  harmonizes with the four chronic-disease bands (diabetes/COPD/CKD/liver) already calibrated to
  2019 in `aging-simulator.html`. (The cardiovascular/cancer/neuro/infection/extrinsic bands are
  currently on 2022 and should be re-pulled to 2019 for consistency — separate task.)
- The WONDER 113-cause recode (`D76.V4`) errors server-side ("LEFT/SUBSTRING"); sub-chapter +
  targeted level-3 is the working substitute and gives finer pathology resolution anyway.

## How the named bands map (sub-chapter resolution)

| Sim band | Sub-chapters fully captured | Notes |
|---|---|---|
| cardiovascular | I05-I09, I20-I25, I30-I51, I60-I69 | misses hypertensive I10/I12/I15, arteries I70-I78, pulmonary-heart I26-I28, veins I80-I89 |
| cancer | C00-C97 | misses uncertain/benign neoplasms D00-D48 (~0.6%) |
| neurodegeneration | G30-G31 + F01-F09 (organic dementia) | misses Parkinson's G20-G25, atrophies/ALS G10-G14 |
| infection | J09-J18 (in respiratory) + sepsis A40-A41 (in A30-A49) | misses HIV, viral hepatitis, intestinal-infectious |
| diabetes | E10-E14 | — |
| copd | J40-J47 | — |
| ckd | N00-N07, N17-N19, N25-N28 | misses other-urinary N30-N39 |
| liver | K70-K76 | — |
| extrinsic | X60-X84, V01-V99, X85-Y09, (W00-X59 **minus falls**) | falls deliberately excluded |

## Residual itemized by proposed driver-node

Pct = share of all 2019 deaths. **Driver-node** = where it should attach (existing node, or NEW).

### A. Fold into existing nodes (mechanism already in graph)
| Pathology | ICD | M | F | % | → target |
|---|---|---|---|---|---|
| Hypertensive disease | I10-I15 | 49,451 | 52,621 | 3.6% | cardiovascular (net new = I10/I12/I15; I11/I13 already in band) |
| Arteries (aortic aneurysm/dissection) | I70-I78 | 12,668 | 11,645 | 0.9% | cardiovascular |
| Pulmonary heart / embolism | I26-I28 | 7,495 | 10,996 | 0.6% | cardiovascular |
| Intestinal infarction (mesenteric ischemia) | K55 | 2,975 | 4,779 | 0.3% | cardiovascular (vascular, NOT digestive) |
| Veins / lymphatic | I80-I89 | 2,090 | 1,994 | 0.1% | cardiovascular |
| Parkinson's / movement disorders | G20-G25 | 22,577 | 14,602 | 1.3% | neurodegeneration |
| Systemic atrophies (ALS, Huntington, SMA) | G10-G14 | 4,730 | 4,036 | 0.3% | neurodegeneration |
| Viral hepatitis | B15-B19 | 2,777 | 1,508 | 0.2% | liver |
| HIV disease | B20-B24 | 3,753 | 1,291 | 0.2% | infection |
| Intestinal infections (incl. *C. difficile*) | A00-A09 | 3,019 | 4,342 | 0.3% | infection |
| **Subtotal** | | | | **~7.8%** | |

### B. New bucket WITH a causal hook → frailty / sarcopenia node
| Pathology | ICD | M | F | % | note |
|---|---|---|---|---|---|
| Falls | W00-W19 | 20,080 | 19,340 | 1.4% | sim already excludes from extrinsic ("frailty, not lifestyle") |
| Malnutrition | E40-E46 | 4,203 | 7,049 | 0.4% | |
| Senility (R54) | within R50-R68 | — | — | ~0.2% | needs level-3; R50-R68 total 5,720/8,142 |
| Aspiration pneumonitis (J69) | within J60-J70 | — | — | ~0.6% | needs level-3; J60-J70 total 11,560/8,502 |

### C. New display-only placeholders (no clean single node)
| Bucket | ICD | M | F | % |
|---|---|---|---|---|
| Other respiratory (interstitial / pulmonary fibrosis) | J80-J84 | 12,904 | 10,673 | 0.8% |
| Respiratory failure | J96-J98 | 7,584 | 8,988 | 0.6% |
| Metabolic disorders (non-diabetes endocrine) | E70-E88 | 15,330 | 13,739 | 1.0% |
| GI hemorrhage / other digestive | K90-K92 | 5,049 | 4,855 | 0.3% |
| Ileus / diverticular / other intestinal | K56-K63 | ~5,751 | ~8,694 | 0.5% |
| Pancreatitis | K85-K86 | 2,283 | 1,738 | 0.1% |
| Gallbladder / biliary | K80-K83 | 2,620 | 2,708 | 0.2% |
| Peptic ulcer | K25-K28 | 1,772 | 1,694 | 0.1% |
| Other urinary (UTI) | N30-N39 | 4,622 | 7,493 | 0.4% |
| Obesity (→ possible BMI-node link) | E65-E68 | 4,405 | 3,975 | 0.3% |

**GI demonstration (the "don't co-bucket different etiologies" point):** the single sub-chapter
K80-K86 (gallbladder + pancreas) splits into gallbladder/biliary (cholesterol-metabolism/adiposity
driven) and pancreatitis (alcohol/gallstone/triglyceride driven) — and K55 intestinal infarction,
which sits in the digestive chapter, is actually **vascular** and belongs with cardiovascular.
Three sub-chapters, three different upstream nodes.

### D. Irreducible — keep grey ("Other / unmodeled")
Perinatal (P, 10,383), congenital (Q, 9,697 — young-age, not aging), blood/immune (D50-D89, 10,815),
musculoskeletal (M, 14,548), skin (L, 5,188), substance-use mental (F10-F19, 15,163),
medical/surgical complications (Y40-Y84, 5,258), ill-defined (R95-R99, 13,284), residual symptoms.
Collectively ~5%.

## Open level-3 pulls before formalizing
1. Split falls (done: 39,420) — also split drug-overdose (X40-44/X60-64/X85/Y10-14) OUT of W00-X59 to confirm it stays in extrinsic.
2. R54 senility out of R50-R68; J69 aspiration out of J60-J70.
3. I11/I13 vs I10/I12/I15 within hypertensive (to size the true CV-net-new).

## Net effect
Group A (~7.8%) folds onto existing nodes; the frailty bucket (~2.6%) and the display placeholders
shrink the grey band to a genuinely irreducible ~5%. Each Group-A and frailty attribution plugs into
a node interventions already move.
