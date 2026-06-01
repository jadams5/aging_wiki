---
type: study
doi: 10.1126/science.adp5056
pmid: 41066557
pmc: null
title: "A cGAS-mediated mechanism in naked mole-rats potentiates DNA repair and delays aging"
authors: [Chen Y, Chen Z, Wang H, Cui Z, Li KL, Song Z, Chen L, Sun X, Xu X, Zhang Y, Tan L, Yuan J, Tan R, Luo MH, Sun FL, Liu H, Jiang Y, Mao Z]
year: 2025
journal: Science
study-design: in-vitro+in-vivo
organism: multiple
n-subjects: null
intervention: ["[[cgas]]"]
hallmarks-tested: ["[[genomic-instability]]", "[[cellular-senescence]]"]
human-evidence: false
peer-reviewed: true
preregistered: false
key-findings: [cgas-hr-suppression-loss-nmr, four-amino-acid-divergence, trim41-ubiquitination-weakened, p97-segregase-interaction-weakened, prolonged-chromatin-retention, fanci-rad50-interaction-enhancement, rad50-recruitment-potentiation, hr-repair-potentiation, lifespan-extension-by-aa-substitution]
local-pdf: null
verified: false
verified-date: null
verified-by: null
verified-scope: null
---

> ⚠️ Auto-extracted by Claude on 2026-05-12 from the Crossref/Europe PMC abstract — full PDF is closed-access and not available in a local paper archive. Quantitative claims (specific n's, p-values, effect sizes) CANNOT be verified without the PDF. #gap/no-fulltext-access — flag for re-verification if full text becomes available.

# A cGAS-mediated mechanism in naked mole-rats potentiates DNA repair and delays aging

**Chen Y, Chen Z, Wang H, Cui Z, Li KL, Song Z, Chen L, Sun X, Xu X, Zhang Y, Tan L, Yuan J, Tan R, Luo MH, Sun FL, Liu H, Jiang Y, Mao Z · *Science* · 2025 · DOI: 10.1126/science.adp5056 · PMID: 41066557**

## TL;DR

Naked mole-rat (NMR) cGAS has lost the HR-suppressive function that human and mouse cGAS exert in the nucleus. Four amino acid changes during NMR evolution weaken the ubiquitination signal (via TRIM41) and segregase interaction (via P97) that normally evict cGAS from chromatin after DNA damage. The result is prolonged chromatin retention of NMR cGAS, which enhances FANCI–RAD50 interaction and drives RAD50 recruitment to damage sites — potentiating homologous recombination repair. The same four amino acids appear sufficient to mediate cGAS's function in delaying cellular, tissue, and organismal aging, and manipulating cGAS in this axis is proposed as a longevity intervention. This is a mechanistic complement to the [[zhang-2023-nmrhas2-mouse-healthspan|NMR HAS2 xenogeneic-transfer result]], establishing a second distinct molecular pathway by which NMR biology provides superior genome maintenance.

## Background

cGAS was originally characterized as a cytosolic DNA sensor: free cytoplasmic DNA (e.g., from damaged mitochondria, micronuclei, or pathogens) binds cGAS, triggering synthesis of the second messenger cGAMP, which activates [[cgas-sting|STING → IRF3 → type I IFN]] [^sun2013]. This function is conserved across human, mouse, and NMR.

However, it emerged that a pool of cGAS also resides in the nucleus, where it has a second — and seemingly paradoxical — function: **nuclear cGAS suppresses homologous recombination repair** [^liu2018]. The mechanistic model from Liu et al. 2018 is that nuclear cGAS occupies chromatin and physically obstructs the assembly of HR repair complexes at DNA double-strand breaks (DSBs), thereby impairing HR fidelity and promoting tumorigenesis. This nuclear-suppressive role was demonstrated in human and mouse cells; it established cGAS as a dual-function protein whose net effect on genome stability is context- and compartment-dependent.

The NMR is the longest-lived rodent (~30 years lifespan vs ~3 for comparably-sized mice) and maintains strikingly low cancer rates and preserved genome integrity throughout its extended lifespan [see [[heterocephalus-glaber]]]. Whether the NMR's superior DNA repair capacity involves evolutionarily modified canonical repair regulators — not just quantitative upregulation — was unexplored prior to Chen et al. 2025.

## Key claims (abstract-derived)

All claims below are sourced from the published abstract. Quantitative specifics (n's, p-values, effect sizes) are not available without the full text and are therefore not reported here [^chen2025].

- **NMR cGAS lacks the HR-suppressive function** of its human and mouse homologs — this divergence is the central finding of the study [^chen2025].
- The functional difference maps to **four amino acid substitutions** that arose during NMR evolution [^chen2025].
- The four-AA changes **weaken TRIM41-mediated ubiquitination** of NMR cGAS. TRIM41 is an E3 ubiquitin ligase; reduced ubiquitination of NMR cGAS presumably prevents its proteasomal targeting or chromatin eviction signal [^chen2025].
- The four-AA changes also **weaken interaction with the segregase P97** (also known as VCP/p97). P97 extracts ubiquitinated proteins from chromatin; impaired P97 engagement means NMR cGAS is not efficiently stripped from chromatin after DNA damage [^chen2025].
- Consequently, NMR cGAS undergoes **prolonged chromatin retention** upon DNA damage relative to human or mouse cGAS [^chen2025].
- Prolonged chromatin retention of NMR cGAS **enhances the interaction between repair factors FANCI and RAD50** at damage sites [^chen2025]. FANCI is a Fanconi anemia pathway component and intra-S checkpoint effector; RAD50 is the core ATPase of the [[mrn-complex|MRN complex]] (MRE11–RAD50–NBS1), which is the primary sensor and initial processor of DSBs.
- Enhanced FANCI–RAD50 interaction **facilitates RAD50 recruitment to damage sites**, amplifying local MRN complex assembly and potentiating HR repair [^chen2025].
- The same four amino acids **mediate cGAS's function in antagonizing cellular and tissue aging** — the mechanistic link between the HR-potentiation phenotype and the aging phenotype converges on these four residues [^chen2025].
- The four-AA substitutions are associated with **lifespan extension** in the experimental system [^chen2025]. (Whether this is from AA substitution of NMR cGAS expressed in mouse/human cells, or characterization of NMR in vivo, or both, is not clear from the abstract alone.)
- The authors propose that **manipulating cGAS constitutes a mechanism for life-span extension** more broadly, implying that the four-AA variant or mimics of its downstream effects could be interventionally useful [^chen2025].

## Mechanism summary

The mechanistic model implied by the abstract:

```
DNA damage (DSB)
       |
       v
cGAS recruited to chromatin
       |
       +--> [Human/mouse] TRIM41 ubiquitinates cGAS
       |           --> P97 extracts ubiquitinated cGAS from chromatin
       |           --> RAPID chromatin eviction
       |           --> HR suppressed (cGAS-mediated obstruction relieved but HR complex poorly assembled?)
       |
       +--> [NMR] TRIM41 ubiquitination WEAKENED (4-AA divergence)
                   --> P97 interaction WEAKENED
                   --> PROLONGED chromatin retention of cGAS
                   --> Enhanced FANCI - RAD50 interaction at damage sites
                   --> Increased RAD50 / MRN complex recruitment
                   --> HR repair POTENTIATED
                   --> Superior genome maintenance --> delayed aging + extended lifespan
```

The model presents NMR cGAS as a scaffold that, when retained at damage sites, actively promotes rather than obstructs HR factor assembly. This is a functional inversion of the human/mouse nuclear cGAS behavior described by Liu et al. 2018 [^liu2018]. The shared four amino acids are therefore a regulatory switch: in the human/mouse configuration they enable chromatin eviction and HR suppression; in the NMR configuration their alteration converts nuclear cGAS from an HR inhibitor into an HR facilitator.

It is worth noting that the cytosolic DNA-sensing function of cGAS (the canonical STING-pathway arm) is presumably preserved in NMR — the four-AA change is localized to the chromatin/ubiquitination interface, not the catalytic cGAMP synthesis domain. Whether NMR's prolonged chromatin retention of cGAS alters its availability for cytosolic immune signaling is an open question (see Gaps, below) #gap/no-mechanism.

## Implications for the wiki

This paper creates or extends content relevance across several atomic pages:

- **[[heterocephalus-glaber]]** — adds a second well-characterized molecular mechanism (cGAS four-AA HR potentiation) to the NMR longevity portfolio alongside HMM-HA, p15/p16 hybrid ARF, and the STING-attenuation literature. The NMR is accumulating a picture of convergent, multi-pathway genome maintenance superiority.
- **[[cgas-sting]]** — fundamental reframing: NMR data show that nuclear cGAS has a species-modifiable function distinct from cytosolic STING activation. The cGAS-STING page should note the nuclear HR-suppression/facilitation axis and the NMR four-AA divergence as a case study. The Liu 2018 and Chen 2025 papers together establish that nuclear cGAS is a **bimodal regulator** of genome stability whose direction of effect is evolutionarily tunable.
- **[[homologous-recombination]]** — identifies nuclear cGAS retention as a novel positive regulator of HR, upstream of FANCI–RAD50 interaction. Adds a new mechanistic entry in the HR-regulation section (alongside ATM/ATR, BRCA1/2, the MRN complex, and RPA).
- **[[mrn-complex]]** — RAD50 recruitment to DSBs is now shown to be potentiated by cGAS-scaffolded FANCI interaction. This upstream scaffold model adds context to the MRN initial-damage-sensing narrative. The mrn-complex page should note this regulatory layer.
- **[[genomic-instability]]** — provides a concrete molecular example of how species-level variation in genome maintenance machinery contributes to divergent aging trajectories. Relevant to the hallmark's mechanistic tier.
- **[[cellular-senescence]]** — the abstract states that the four-AA variant mediates antagonism of "cellular and tissue aging"; cellular senescence is a downstream consequence of accumulated DNA damage and unresolved DSBs, so potentiated HR repair plausibly reduces senescence burden. This is an indirect connection; direct evidence for cGAS four-AA variant reducing senescence markers is not available from the abstract alone. #gap/no-mechanism

## Knowledge gaps

1. **Full text needed for all quantitative claims.** No n's, p-values, doses, percent effects, or lifespan-extension magnitudes can be confirmed without the PDF. The paper is closed-access (Science); re-verification is blocked until full text is available. #gap/no-fulltext-access

2. **Replication in human cell lines.** The abstract focuses on NMR vs human/mouse comparison and in-vivo NMR data. Whether introducing the four-AA substitution into human cGAS recapitulates the HR-potentiation phenotype in human cells — and whether it is safe (i.e., does not impair antiviral immune sensing) — is the immediate translational question. #gap/needs-human-replication

3. **Antiviral-immunity phenotype in NMR is unclear.** Prolonged nuclear chromatin retention of cGAS could in principle reduce the pool available for cytosolic DNA sensing upon viral challenge. Whether NMR has a compensatory mechanism or altered antiviral response phenotype is not addressed in the abstract. This is a critical safety consideration for any translational strategy. #gap/no-mechanism

4. **Translational route is undefined.** The abstract proposes cGAS manipulation as a life-span extension mechanism but does not specify whether this would require small-molecule modulation of TRIM41 activity, P97-cGAS interaction disruption, gene editing to introduce the four-AA variant, or some other approach. Each route has distinct feasibility, safety, and specificity challenges. #gap/no-mechanism

5. **Causal directionality of lifespan extension.** Whether the lifespan extension associated with the four-AA variant is specifically mediated by improved HR repair vs secondary effects (e.g., altered innate immune tone, modified senescence burden, off-target chromatin changes) cannot be determined from the abstract. Rescue experiments with HR-null backgrounds would be definitive. #gap/needs-replication

6. **Mouse model vs NMR in-vivo vs cell-line basis.** The abstract describes both in-vitro (biochemical/mechanistic) and in-vivo (lifespan) data, but it is not clear from the abstract alone whether the lifespan claim is from mice engineered to carry the NMR four-AA variant, from NMR themselves, or from a shorter-lived surrogate. Full text would disambiguate. #gap/no-fulltext-access

## Extrapolation to humans

| Dimension | Status | Notes |
|---|---|---|
| Pathway conserved in humans? | yes | cGAS, TRIM41, P97/VCP, FANCI, and RAD50 are all expressed in human cells; the HR pathway is fully conserved |
| Phenotype conserved in humans? | unknown | Whether human cells engineered with the NMR four-AA cGAS show potentiated HR has not been reported in the abstract |
| Replicated in humans? | no | No human data; all work is in NMR-derived comparisons, cell lines, and/or mouse systems |

#gap/needs-human-replication

## See also

- [[heterocephalus-glaber]] — NMR model organism; longevity portfolio; HMM-HA, p15/p16 hybrid, cGAS-HR axis
- [[cgas-sting]] — dual-function biology; cytosolic sensing vs nuclear HR regulation; Liu 2018 prior work
- [[homologous-recombination]] — pathway page; RAD50 recruitment mechanism; cGAS as novel positive regulator
- [[mrn-complex]] — MRE11–RAD50–NBS1 complex; initial DSB sensing; cGAS-scaffolded recruitment
- [[genomic-instability]] — hallmark; DNA repair capacity as aging driver
- [[cellular-senescence]] — downstream consequence of impaired DSB repair; indirect cGAS connection
- [[zhang-2023-nmrhas2-mouse-healthspan]] — companion NMR longevity paper; xenogeneic HAS2 transfer framework; establishes multi-mechanism NMR precedent

---

[^chen2025]: [[studies/chen-2025-nmr-cgas-hr-repair]] · n=NR · in-vitro+in-vivo · model: multiple (cell lines + mouse + naked mole rat tissue) · Chen Y et al. · *Science* 2025 · doi:10.1126/science.adp5056 · PMID:41066557 · **#gap/no-fulltext-access**

[^sun2013]: doi:10.1126/science.1232458 · Sun L, Wu J, Du F, Chen X, Chen ZJ · *Science* 339:786–791 · 2013 · 4,556 citations · local PDF available in a local paper archive · in-vitro · characterized cGAS as a cytosolic DNA sensor that synthesizes cGAMP and activates the type I interferon pathway; seminal cGAS discovery paper.

[^liu2018]: [[studies/liu-2018-nuclear-cgas-hr-suppression]] · n=NR · in-vitro+in-vivo · doi:10.1038/s41586-018-0629-6 · PMID:30356214 · Liu H et al. · *Nature* · 2018 · model: human cell lines + mouse xenograft · 611 citations · closed-access; not in a local paper archive · "Nuclear cGAS suppresses DNA repair and promotes tumorigenesis"; established that nuclear cGAS inhibits HR in human and mouse cells; key prior-art paper contextualizing the NMR four-AA divergence as a reversal of this suppressive function. **#gap/no-fulltext-access**
