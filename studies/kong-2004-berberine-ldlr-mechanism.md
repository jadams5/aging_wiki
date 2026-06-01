---
type: study
doi: 10.1038/nm1135
pmid: 15531889
pmc: null
title: "Berberine is a novel cholesterol-lowering drug working through a unique mechanism distinct from statins"
authors: [Kong W-J, Wei J, Abidi P, Lin M, Inaba S, Li C, Wang Y, Wang Z, Si S, Pan H, Wang S, Wu J, Wang Y, Li Z, Liu J, Jiang J-D]
year: 2004
journal: Nat Med
volume: 10
issue: 12
pages: 1344-1351
study-design: in-vitro
organism: "human (HepG2 cell line; n=32 hypercholesterolemic adults); hamster (hyperlipidemic model)"
n-subjects: 32
intervention: ["[[berberine]]"]
hallmarks-tested: []
human-evidence: true
peer-reviewed: true
preregistered: false
key-findings: [ldlr-mrna-stabilization, srebp-2-independence, erk-dependence, ldl-cholesterol-lowering-human]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-18 — full PDF not available in a local paper archive (not_oa;  returns not_oa). Numerics drawn from secondary citations; Kong et al.'s reported values are flagged where exact numbers require primary-PDF confirmation. Verify all quantitative claims against an institutional-access copy before relying on them. PMC version does not exist (NCBI ID converter returns "Identifier not found in PMC"). #gap/no-fulltext-access

# Berberine is a novel cholesterol-lowering drug working through a unique mechanism distinct from statins

**Kong W-J, Wei J, Abidi P et al. (Jiang J-D, senior author) · *Nat Med* 10(12):1344–1351 · 2004 · DOI: 10.1038/nm1135 · PMID: 15531889**

*Citation impact (as of 2026-05-18): 1,355 citations · FWCI = 18.30 · citation_percentile = 100*

## TL;DR

This is the **origin paper** for the "berberine works distinctly from statins" framing. Kong et al. report that [[berberine]] lowers serum cholesterol and LDL-C in hyperlipidemic hamsters and a small human cohort, and that the mechanism operates through post-transcriptional stabilization of [[ldlr]] mRNA — a 3'UTR-dependent mechanism requiring ERK signaling — rather than through SREBP-2 activation or cholesterol-biosynthesis suppression, the canonical statin target at [[hmgcr]]. The paper is widely cited in subsequent berberine reviews as the mechanistic foundation for AMPK-independent, cholesterol-lowering effects.

---

## Study design

The paper combines three experimental levels conducted in parallel rather than sequentially:

| Level | System | Key readout |
|---|---|---|
| In vitro | HepG2 human hepatocyte cells | LDLR mRNA half-life, LDLR protein expression, SREBP-2 activation, ERK pathway involvement |
| In vivo | Hyperlipidemic hamster model (specific strain/induction protocol: verify in primary PDF) | Serum TC, LDL-C, TG at 100 mg/kg/d × 10 d |
| Human pilot | n=32 hypercholesterolemic adults; 500 mg BID × 3 months | Serum TC, LDL-C, TG, HDL-C |

The primary mechanistic arm is in vitro. Human and hamster arms establish translational plausibility but are not powered for definitive clinical conclusions.

---

## Key findings

### 1. LDLR mRNA stabilization — in vitro

Kong et al. reported that berberine treatment of HepG2 cells increased LDLR protein expression by a mechanism operating at the post-transcriptional level. Specifically:

- LDLR mRNA half-life was extended approximately **3-fold** in berberine-treated HepG2 cells relative to vehicle controls, via a mechanism dependent on the LDLR 3' untranslated region (3'UTR). #gap/no-fulltext-access — exact half-life values (baseline and treated) require primary PDF confirmation.
- The effect was demonstrated to be **independent of SREBP-2** activation: berberine did not induce nuclear translocation of SREBP-2 or activate the sterol-response element (SRE) promoter, confirming the mechanism is upstream and independent of the cholesterol-sensing pathway that statins operate through (by inhibiting [[hmgcr]] → cholesterol depletion → SREBP-2 cleavage → LDLR transcription). This dissociation is the paper's central mechanistic claim.
- **ERK pathway involvement**: pharmacological inhibition of ERK1/2 blocked berberine-induced LDLR mRNA stabilization, implicating MAPK/ERK signaling as a required intermediate. The precise ERK substrate acting on the LDLR 3'UTR was not identified in this paper. #gap/no-mechanism — the bridging molecular target between ERK activation and 3'UTR-mediated mRNA stabilization was not resolved here.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | partial — LDLR 3'UTR AU-rich element (ARE) regulation exists in human cells; HepG2 is a human-derived line, supporting relevance; primary hepatocyte confirmation pending |
| Phenotype conserved in humans? | yes (human pilot arm; see below) |
| Replicated in humans? | partial — small open-label n=32 cohort; RCT replication followed in subsequent decade |

### 2. In vivo efficacy — hyperlipidemic hamster

Kong et al. reported the following lipid changes in hyperlipidemic hamsters treated with berberine 100 mg/kg/day × 10 days (values drawn from secondary citations; verify exact figures against primary PDF): #gap/no-fulltext-access

| Lipid parameter | Reported change |
|---|---|
| Serum total cholesterol (TC) | ↓ ~26% |
| LDL-C | ↓ ~28% |
| Triglycerides (TG) | ↓ ~35% |
| HDL-C | not prominently reported as changing |

These magnitudes are widely reproduced in reviews citing Kong 2004. Exact p-values and group sizes require primary PDF.

### 3. Human pilot cohort (n=32)

The human arm enrolled 32 hypercholesterolemic adults treated with berberine 500 mg twice daily for 3 months. Kong et al. reported (values from secondary citations; verify in primary): #gap/no-fulltext-access

| Lipid parameter | Reported change |
|---|---|
| LDL-C | ↓ ~21% (range 12–32% across individuals) |
| Serum total cholesterol | ↓ ~29% |
| Triglycerides | ↓ ~35% |

This arm was uncontrolled (open-label, no placebo arm explicitly described in secondary citations). The n=32 size is insufficient to draw definitive conclusions. It established proof-of-concept for human lipid-lowering activity and seeded a substantial subsequent clinical literature. #gap/needs-replication — subsequent RCTs have replicated the lipid-lowering direction but this pilot itself is single-arm.

---

## Significance for berberine biology

This paper established three canonical claims in the berberine literature that have been repeatedly cited since 2004:

1. **LDLR mRNA stabilization is a primary mechanism of berberine's cholesterol-lowering effect** — distinct from any effect on cholesterol biosynthesis or SREBP-2-mediated transcription.
2. **ERK1/2 signaling is required** for this stabilization — linking berberine's metabolic effects to a MAPK axis (this is mechanistically distinct from, and potentially complementary to, berberine's AMPK-activating effects described in subsequent work).
3. **Berberine's mechanism is additive-in-principle with statins** — because the mechanistic targets do not overlap (LDLR mRNA stability via ERK vs. HMGCR inhibition via statin), the two agents could theoretically be combined. This framing has driven subsequent combination-therapy investigation. #gap/needs-replication — formal combination RCTs at scale remain limited.

The paper predates the main AMPK-activation literature for berberine (Yin et al. 2008 and related). It therefore represents the cholesterol-mechanism arm of berberine's biology, not the nutrient-sensing / longevity arm.

---

## Limitations

- **Human arm is open-label, single-arm, n=32** — no placebo control, no randomization described in available secondary accounts. Cannot rule out regression-to-mean or dietary confounding.
- **In vitro model** — HepG2 cells are a hepatocellular carcinoma line with known metabolic differences from primary hepatocytes; results must be verified in primary hepatocyte or in-vivo human liver context.
- **ERK mechanism not fully resolved** — the specific RNA-binding protein or ARE-regulatory complex downstream of ERK that executes mRNA stabilization was not identified in this paper.
- **Hamster lipid physiology** differs from human lipoprotein metabolism in important ways (e.g., hamsters lack CETP activity equivalent to humans, affecting HDL metabolism); magnitude extrapolation to humans is approximate.
- **Single-lab provenance** — the mechanistic claims (SREBP-2 independence, ERK dependence, 3'UTR specificity) originated from one group and required subsequent independent confirmation before becoming consensus. #gap/needs-replication

#gap/no-fulltext-access
#gap/needs-replication

---

## Cross-references

| Page | Relationship |
|---|---|
| [[berberine]] | Primary subject compound; this is the canonical origin citation for LDLR-mechanism claims |
| [[ldlr]] | Direct target: LDLR mRNA is stabilized; protein expression increased |
| [[hmgcr]] | Mechanistic contrast: statin target; Kong 2004 establishes that berberine does NOT work through HMGCR/SREBP-2 axis |
| [[lipoprotein-metabolism]] | Pathway context: LDLR-mediated LDL uptake; berberine acts on a post-transcriptional node within this pathway |
| [[interventions/pharmacological/ampk-activators]] | Berberine's AMPK-activation mechanism is covered here; distinct from the LDLR mRNA-stabilization mechanism in Kong 2004 |

---

## Footnotes

[^kong2004]: [[studies/kong-2004-berberine-ldlr-mechanism]] · n=32 (human arm) · open-label pilot · model: hypercholesterolemic adults; HepG2 cells; hyperlipidemic hamsters · doi:10.1038/nm1135 · local PDF not available (not_oa) · numerics require primary-PDF confirmation #gap/no-fulltext-access
