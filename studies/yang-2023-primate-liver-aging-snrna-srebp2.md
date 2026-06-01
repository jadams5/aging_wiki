---
type: study
doi: 10.1093/procel/pwad039
pmid: 37378670
pmc: PMC10833472
title: "A single-nucleus transcriptomic atlas of primate liver aging uncovers the pro-senescence role of SREBP2 in hepatocytes"
authors: [Yang S, Liu C, Jiang M, Liu X, Geng L, Zhang Y, Sun S, Wang K, Yin J, Ma S, Wang S, Belmonte JCI, Zhang W, Qu J, Liu GH]
year: 2024
journal: Protein Cell
study-design: in-vivo
publication-type: research-article
volume: 15
issue: 2
pages: 98-120
organism: macaca-fascicularis
n-subjects: null
intervention: []
hallmarks-tested: ["[[cellular-senescence]]", "[[deregulated-nutrient-sensing]]", "[[chronic-inflammation]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [primate-liver-snrna-atlas, srebp2-hyperactivation-with-age, srebp2-induced-hepatocyte-senescence, zonation-resolved-hepatocyte-aging]
local-pdf: null
verified: false
verified-date: null
verified-by: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-21 from PubMed abstract + Crossref metadata. PDF not yet read end-to-end; full quantitative claims pending verification against the published full text (Gold OA, PMC10833472).

# Yang 2024 — primate liver aging snRNA-seq atlas; SREBP2 pro-senescence

Single-nucleus transcriptomic atlas of primate (*Macaca fascicularis* / cynomolgus monkey) liver aging — the first cell-type-resolved survey of how hepatocyte gene programs shift with age across the three canonical liver zonations (periportal, mid-zonal, pericentral). Identifies **hyperactivated SREBP (sterol regulatory element-binding protein) signaling as a hallmark of the aged liver**, and demonstrates causality via human primary hepatocyte transduction: forced SREBP2 activation recapitulates aging phenotypes including impaired detoxification and accelerated cellular senescence.

## Why this paper matters for the wiki

Resolves a long-standing mechanistic ambiguity in the aging-lipid-metabolism literature: **does hepatic SREBP-2 activity go up or down with age?** Cross-sectional human bulk RNA-seq (e.g., GTEx v10) shows weak, non-significant age trends for hepatic SREBF2 mRNA (Spearman ρ ≈ −0.07 in our 2026-05-21 query, n=262), but Yang's single-nucleus data tells a different story — **per-hepatocyte SREBP signaling is upregulated**, which bulk RNA-seq is methodologically blind to (cell-composition confound: aged liver has fewer hepatocytes per gram, more immune/stellate cells, so per-cell hepatocyte increases can be invisible in bulk).

This makes Yang 2024 the empirical anchor for the wiki's prior mechanistic *prediction* that age-associated mTORC1 hyperactivation would elevate SREBP-2 nuclear activity (see [[srebp-2]] § Aging relevance, prior `#gap/needs-replication`). The Peterson 2011 mTORC1–lipin-1–SREBP-2 axis + Yang 2024 phenotype together support a unified model:

```
aging → hepatic mTORC1 hyperactivity → lipin-1 cytoplasmic retention
     → SREBP-2 nuclear activity ↑ per hepatocyte (Yang 2024)
     → SREBP-2 transcribes LDLR + PCSK9 (Dubuc 2004 / Jeong 2008 feedback paradox)
     → PCSK9 protein dominates over LDLR transcriptional drive
     → net hepatic surface LDLR ↓
     → plasma LDL/ApoB clearance ↓
     → cumulative LDL exposure rises (Ference 2024 LDL-years framework)
```

The Yang result does *not* yet directly test the mTORC1 dependency (no rapamycin arm in primate liver), nor does it directly quantify hepatic LDLR/PCSK9 protein by age — those remain open mechanistic gaps.

## Key findings from abstract

1. **First single-nucleus transcriptomic atlas of primate liver aging** — cynomolgus monkey, multiple age groups, single-nucleus RNA-seq across hepatocytes + niche cells.
2. **Zonation-resolved hepatocyte aging** — gene expression fluctuations differ across the three canonical hepatocyte zonations (periportal / mid-zonal / pericentral). Aging is not uniform across the lobule.
3. **Aberrant cell–cell interactions between hepatocytes and niche cells** in aged liver.
4. **Impaired lipid metabolism + upregulation of chronic inflammation–related genes** prominently associated with declined liver function during aging.
5. **Hyperactivated SREBP signaling is a hallmark of the aged liver** — the headline mechanistic finding.
6. **Causality demonstration**: forced activation of SREBP2 in human primary hepatocytes recapitulates aging phenotypes — impaired detoxification + accelerated cellular senescence.

## Caveats and what this does NOT resolve

- **Species**: cynomolgus monkey, not human. The in vitro mechanistic follow-up uses human primary hepatocytes but with *forced* SREBP2 activation, not aged hepatocytes per se.
- **Cleavage vs transcription**: the paper reports SREBP *signaling* hyperactivation (target gene programs); the abstract does not specify whether the upstream change is nuclear-fragment abundance, SREBF2 transcript, or cleavage-rate changes. Methods need to be read for resolution.
- **mTORC1 dependency**: not tested. The mTORC1 → lipin-1 → SREBP-2 axis is mechanistic prediction; Yang shows phenotype consistent with it but not dependency.
- **LDLR/PCSK9 quantification by age**: not foregrounded in the abstract. Supplementary data may contain it but extraction is pending PDF read.
- **PCSK9 transcriptional vs post-translational regulation**: Yang's SREBP2-hyperactivation finding plus the SREBP-2 → PCSK9 SRE (Dubuc 2004, Jeong 2008) predicts elevated *PCSK9 transcript* with age, but GTEx v10 bulk RNA-seq shows ρ = +0.08 (weak, n=262 hepatocytes; not significant). The bulk-vs-snRNA discordance remains a methodological consideration.

## Verification status

- ⚠️ **Not yet PDF-verified.** Frontmatter `verified: false`. Abstract verified via PubMed efetch 2026-05-21; Crossref metadata cross-checked. Full PDF read end-to-end is pending.
- Gold OA via PMC (PMC10833472) — full text accessible without paywall, fits standard verifier workflow.
- Quantitative claims from this paper currently propagated to the wiki (Yang-2024 hyperactivation framing on [[srebp-2]], [[ldlr]], [[pcsk9]], [[lipoprotein-metabolism]]) carry inherited `verified: false` until this study page is verified.

## Extrapolation

| Dimension | Status |
|---|---|
| Mechanism conserved in humans? | yes — primates share the SREBP-2 / SCAP / INSIG / S1P / S2P machinery one-to-one with humans; cynomolgus is the closest standard NHP model to humans |
| Phenotype conserved in humans? | partial — the hyperactivation signal is primate-anchored; human in-vivo confirmation in aged liver biopsies/autopsy is not yet published |
| Replicated in humans? | no — single primate cohort + human in-vitro mechanistic follow-up; human in-vivo aged-liver replication absent |

## Cross-references

- [[srebp-2]] — primary entity page; aging-relevance section now cites this study as direct empirical anchor for SREBP-2 hyperactivation
- [[ldlr]] — receives downstream effect; aging-relevance reframed around PCSK9-feedback dominance
- [[pcsk9]] — co-induced by SREBP-2; this paper supports the PCSK9-elevation-with-age claim mechanistically
- [[lipoprotein-metabolism]] — pathway-level aging section now anchored on Yang 2024
- [[deregulated-nutrient-sensing]] — hallmark in which the mTORC1-SREBP-2 axis is embedded
- [[cellular-senescence]] — Yang's causality demonstration directly links SREBP-2 to hepatocyte senescence
- [[cardiovascular-aging]] — downstream phenotype linking hepatic SREBP-2 dysregulation to plasma LDL trajectory

## Methods (from abstract; full extraction pending)

- **Species**: *Macaca fascicularis* (cynomolgus monkey)
- **Modality**: single-nucleus RNA sequencing (snRNA-seq)
- **Tissue**: liver (cell-type-resolved; hepatocytes across three zonations + niche cells)
- **Validation**: human primary hepatocytes with forced SREBP2 activation
- **Outcomes**: gene expression atlas; SREBP2 pathway activity; cellular senescence markers; detoxification function
