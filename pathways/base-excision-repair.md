---
type: pathway
aliases: [BER, base excision repair pathway, short-patch BER, long-patch BER]
kegg: hsa03410
reactome: R-HSA-73884
wikipathways: null   # WikiPathways API unavailable at seed time; #gap/needs-canonical-id
key-nodes:
  - "[[ogg1]]"
  - "[[mutyh]]"
  - "[[ung]]"
  - "[[smug1]]"
  - "[[mpg]]"
  - "[[neil1]]"
  - "[[neil2]]"
  - "[[neil3]]"
  - "[[ape1]]"
  - "[[polb]]"
  - "[[xrcc1]]"
  - "[[lig3]]"
  - "[[parp1]]"
upstream: ["[[oxidative-stress]]", "[[reactive-oxygen-species]]", "[[alkylation-damage]]", "[[deamination]]"]
downstream: ["[[genomic-instability]]", "[[mtdna-mutation-accumulation]]", "[[cellular-senescence]]"]
hallmarks: ["[[genomic-instability]]", "[[mitochondrial-dysfunction]]"]
sens-categories: []
druggability-tier: 1   # PARP inhibitors (olaparib, niraparib, rucaparib) are FDA-approved; BER is a clinical drug target
caused-by:
  - "[[oxidative-stress]]"
  - "[[reactive-oxygen-species]]"
causes:
  - "[[genomic-instability]]"
  - "[[mtdna-mutation-accumulation]]"
verified: true
verified-date: 2026-05-05
verified-by: claude
verified-scope: "Krokan & Bjoras 2013 (PDF verified) and Klungland 1999 (PDF verified) and Fang & Bohr 2016 (PDF verified) claims cross-checked. de Souza-Pinto 2008 verified via PMC full text. Gredilla 2010, Gredilla 2012, Hegde 2012, Soerensen 2009 verified via PMC full text. Lindahl 1993 is closed-access (not_oa); claims retained from wiki with #gap/no-fulltext-access. Polβ 39 kDa weight claim attributed to [^lindahl1993] — unverified against closed-access source."
---

# Base excision repair (BER)

**Base excision repair** is the principal pathway for removing small, non-helix-distorting base lesions — oxidized bases (e.g., 8-oxoguanine), deaminated bases (e.g., uracil), and alkylated bases — from genomic and mitochondrial DNA. It is the dominant and best-characterized repair pathway operating on mtDNA (mitochondria lack canonical NER and MMR, though they retain limited recombination and direct reversal capacity), making it the primary line of defense against oxidative damage that drives [[mtdna]] mutation accumulation with age [^desouzapinto2008]. BER activity declines with age in multiple tissues and model organisms, directly connecting it to the [[genomic-instability]] and [[mitochondrial-dysfunction]] hallmarks.

## Pathway overview

BER is a multi-step, multi-enzyme process executed by a scaffold complex assembled at the lesion site. Two sub-pathways exist depending on the chemistry of the 5'-terminus generated after base removal:

| Sub-pathway | Resynthesis length | Key polymerase | Key ligase |
|---|---|---|---|
| **Short-patch BER** | 1 nt | [[polb]] (Polβ) | [[xrcc1]]–[[lig3]] (LIG3α) in nucleus + mitochondria; **NOT LIG1** (46BR.1G1 hypomorph cells retain normal short-patch BER per Levin 2000 / Pascucci 1999) |
| **Long-patch BER** | 2–10 nt (~70% are 2–4 nt) | Polδ / Polε / Polβ depending on context | [[lig1]] (LIG1), with FEN1 flap cleavage |

Short-patch BER is the dominant route in non-dividing (post-mitotic) cells; long-patch BER is more active in proliferating cells and depends on PCNA [^krokan2013].

## Core enzymatic steps

### Step 1 — Lesion recognition and base removal (DNA glycosylases)

A damage-specific DNA glycosylase recognizes the altered base and hydrolyzes the N-glycosidic bond, releasing the base and leaving an **abasic (AP) site**. Two glycosylase classes:

- **Monofunctional glycosylases** — excise the base only; generate a standard AP site. Examples: [[ung]] (uracil, from cytosine deamination), [[smug1]] (uracil, 5-hydroxymethyluracil), [[mpg]] (3-methyladenine, 7-methylguanine, hypoxanthine).
- **Bifunctional glycosylases** — both excise the base AND cleave the phosphodiester backbone 3' to the AP site (lyase activity), producing a 3'-phospho-α,β-unsaturated aldehyde or 3'-phosphate terminus. Examples: [[ogg1]] (8-oxoguanine, Fapy-G; bifunctional with β-lyase activity), [[neil1]], [[neil2]] (thymine glycol [Tg], Fapy-A, Fapy-G, ring-opened purines — NEIL1/2 have β,δ-lyase activity; especially relevant for clustered/stalled lesions and during replication [^krokan2013]). Note: [[neil3]] is classified as monofunctional/bifunctional (M/B) per Table 1 of Krokan 2013.

Note: [[mutyh]] is **monofunctional** — it excises only the base (adenine mispaired with 8-oxoG) and does NOT have lyase activity; it is correctly classified in the monofunctional category [^krokan2013].

The choice of glycosylase determines the precise terminus chemistry and thus which downstream steps apply.

### Step 2 — AP site incision ([[ape1]])

[[ape1]] (APE1 / APEX1) is the dominant AP endonuclease in human cells. It cleaves the phosphodiester bond **5' to the AP site**, generating a 3'-OH terminus (suitable for polymerase extension) and a 5'-deoxyribose phosphate (5'-dRP) flap. APE1 also has 3'→5' exonuclease activity that removes the 3'-blocking terminus left by bifunctional glycosylases, converting it to a clean 3'-OH [^krokan2013].

APE1 is an abundant nuclear and mitochondrial protein; its mitochondrial targeting depends on an N-terminal signal sequence (though the exact mechanism of dual localization remains partially characterized) #gap/needs-replication.

### Step 3 — Gap filling and 5'-dRP removal ([[polb]])

[[polb]] (DNA polymerase β) executes two sequential activities in short-patch BER:

1. **dRP lyase activity** — removes the 5'-dRP flap via β-elimination, leaving a 5'-phosphate.
2. **Polymerase activity** — fills the 1-nt gap using the 3'-OH left by APE1.

Polβ is a small (39 kDa), PCNA-independent polymerase specialized for BER. It lacks proofreading and is one of the most error-prone human polymerases, but the 1-nt gap-fill context limits this [^lindahl1993].

In long-patch BER, Polδ or Polε displaces a 2–10 nt flap, which is cleaved by FEN1; this uses the PCNA sliding clamp and is more accurate.

### Step 4 — Nick ligation ([[lig1]] / [[xrcc1]]–[[lig3]])

The final ligation step is performed by different ligases in different compartments. **[[lig1]]** (LIG1) is now considered the major nuclear ligase for both short-patch and long-patch BER; evidence from Krokan 2013 and cited primary work (Simsek et al. 2011, Gao et al. 2011) shows LIG1 can efficiently substitute for the XRCC1–LIG3 complex in short-patch repair assays, whereas LIG3 cannot substitute for LIG1 in long-patch [^krokan2013].

**[[xrcc1]]** (X-ray cross-complementing protein 1) is a scaffold protein with no catalytic activity. It recruits and stimulates [[lig3]] (LIG3α) to seal the nick, as well as [[polb]], APE1, and PARP1. XRCC1 loss destabilizes LIG3α [^krokan2013]. **[[lig3]] is essential in mitochondria**, where it functions without XRCC1 (XRCC1 is absent from mitochondria; see Mitochondrial BER section below) [^desouzapinto2008].

## Mitochondrial BER

Mitochondria cannot perform canonical nucleotide excision repair (NER) or mismatch repair (MMR). BER is the **dominant and best-characterized repair pathway for mtDNA base lesions**; mitochondria also possess some recombination capacity and direct damage reversal activity, but these are limited compared to nuclear DNA [^desouzapinto2008].

Key mitochondrial BER proteins with confirmed mitochondrial isoforms:

| Protein | Nuclear role | Mitochondrial isoform |
|---|---|---|
| [[ogg1]] | 8-oxoG glycosylase | OGG1-2a (mitochondrial splice variant) |
| [[neil1]] | Fapy-G / Tg glycosylase | Yes (reported) |
| [[mutyh]] | A:8-oxoG mismatch repair | MUTYH-α1 (mitochondrial) |
| [[ape1]] | AP endonuclease | Yes (N-terminal truncated form localizes to mito) |
| Polγ ([[polg]]) | Mitochondrial replicase | Primary mtDNA polymerase; also fills BER gaps |
| XRCC1 | Scaffold | Absent from mitochondria — LIG3α functions without XRCC1 in mtDNA [^desouzapinto2008] |
| LIG3 | Nick ligation | LIG3α — the mitochondrial ligase |

**Mitochondrial gap-filling polymerase — revised.** Earlier literature (de Souza-Pinto 2008 and predecessors) emphasized Polγ as the dominant mtBER gap-filling polymerase, with Polβ assumed mitochondrially excluded. Baptiste et al. 2021 [^baptiste2021] (verified during R32a POLB-page verification) directly contradicts this: in Polb⁻/⁻ MEFs and with purified proteins, **POLβ outperforms POLγ in mitochondrial single-nucleotide gap-filling by ~3-fold in concentration efficiency and ~30-fold in time-to-completion** (POLβ at 3 nM completes gap-filling in ~1 min; POLγ at 10 nM leaves unfilled gaps even at 30 min). POLβ does enter mitochondria despite lacking a canonical MTS — likely via co-import with binding partners. The mtBER gap-filling consensus has shifted toward Polβ being the major (not absent) mitochondrial BER polymerase. XRCC1 is still absent from mitochondria; LIG3α operates without its nuclear scaffolding partner.

## Aging relevance

### OGG1 decline and 8-oxoG accumulation

[[ogg1]] is the primary glycosylase for 8-oxoguanine (8-oxoG), the most abundant oxidative DNA lesion and a major source of G→T transversion mutations. OGG1 activity has been reported to decline with age in several rodent tissues, and 8-oxoG levels increase in aged tissues correspondingly [^gredilla2010brain] [^hegde2012]. This is one of the most direct mechanistic links between oxidative stress and age-associated mutation accumulation.

| Dimension | Status |
|---|---|
| Pathway conserved in humans? | yes — BER enzymes are highly conserved; 8-oxoG accumulates in aged human tissues |
| Phenotype conserved in humans? | partial — OGG1 activity decline shown in rodents; human aged-tissue data limited |
| Replicated in humans? | in-progress — human studies exist but are limited in sample size #gap/needs-human-replication |

### Mitochondrial BER decline

Mitochondrial BER activity (measured as multiple DNA glycosylase activities in isolated mitochondria from mouse brain) declines significantly with age in cortex (p≤0.003 for glycosylase activities), but only minor changes were observed in hippocampus over the same period [^gredilla2010brain]. Synaptosomal BER also declined progressively with normal aging (p≤0.01 for total BER capacity); notably, the 3xTgAD Alzheimer's disease model showed no significant BER changes at either pre-symptomatic (3 months) or symptomatic (12 months) ages, indicating the synaptosomal decline is a feature of normal aging rather than AD-specific pathology [^gredilla2012synapto]. DNA glycosylase activities also decrease with age in *Podospora anserina*, a fungal aging model, suggesting this may be a conserved aging signature across taxa [^soerensen2009].

This decline is mechanistically significant because the mitochondrial ETC generates superoxide as a by-product of normal respiration, creating an ongoing local oxidative environment that continuously challenges mtDNA integrity. A decline in the pathway that exclusively repairs that damage creates a positive-feedback loop: mtDNA damage → respiratory chain dysfunction → more ROS → more mtDNA damage #gap/no-mechanism (full loop mechanistically established in mouse; human equivalent under-studied).

### Connection to the free-radical theory of aging

BER, and specifically mitochondrial BER, is the molecular pathway most directly implicated in the [[hypotheses/free-radical-theory-of-aging]]. Oxidative damage to mtDNA (not directly repaired by NER or MMR) accumulates with age and is proposed to drive the somatic mtDNA heteroplasmy increases seen in aged post-mitotic tissues (heart, brain, muscle). See [[mitochondrial-dysfunction]] for the full mechanistic treatment.

## PARP1, NAD+, and the aging connection

[[parp1]] (poly(ADP-ribose) polymerase 1) is a DNA strand break sensor that participates in single-strand break repair (SSBR). It binds DNA strand breaks (including nicks generated as BER intermediates), becomes activated, and synthesizes poly(ADP-ribose) (PAR) chains on target proteins including itself, [[xrcc1]], and histones. However, its exact role specifically in BER (as opposed to SSBR) remains unsettled: Krokan & Bjoras 2013 note that "PARP1 and XRCC1 participate, but apparently not in all types of short-patch BER" and that PARP1-depleted cells exposed to alkylating agents affecting BER showed no impairment of BER itself (only SSBR was affected) [^krokan2013]. PARP1 is therefore better characterized as a SSBR sensor that overlaps with BER at the level of nick intermediates, rather than a canonical BER co-factor for all lesion types.

**Aging-relevant consequence:** Hyperactivated PARP1 during periods of elevated DNA damage consumes large quantities of NAD+. Since NAD+ is also the cofactor for the [[sirtuin]] deacetylases (SIRT1–SIRT7), sustained PARP1 activation can deplete the NAD+ pool, impairing sirtuin function and mitochondrial quality control. This forms a proposed DNA-repair–NAD+–sirtuin–mitophagy axis relevant to aging. Note that Fang & Bohr 2016 specifically document this axis via ATM (not PARP1): ATM loss depletes NAD+ via PARP1 hyperactivation and compromises mitophagy, and NAD+ repletion rescues both defects [^fangbohr2016]. The degree to which PARP1-mediated NAD+ depletion (vs. ATM-driven or other mechanisms) contributes to human aging remains an open question #gap/needs-human-replication.

PARP inhibitors (olaparib, niraparib, rucaparib, talazoparib) are FDA-approved for cancer (BRCA1/2-deficient tumors exploit BER dependence — "synthetic lethality"). Their potential as geroprotectors or BER modulators in aging is unexplored in humans; preclinical data are limited #gap/needs-human-replication #gap/long-term-unknown.

## Cross-pathway interactions

- **[[mtor]]** — mTOR signaling upregulates anabolic pathways, but its interaction with BER is indirect; mTOR inhibition (rapamycin) reduces oxidative stress load by improving mitochondrial quality control via autophagy, which may reduce the substrate burden on BER. No direct mTOR–BER regulatory link established.
- **[[p53-pathway]]** — p53 physically interacts with OGG1 and APE1 and stimulates their activities; p53 may coordinate BER with cell-cycle arrest decisions in response to oxidative damage.
- **[[cellular-senescence]]** — persistent BER intermediate accumulation (unligated nicks, AP sites) can activate ATM/ATR → p53/p21 → senescence. BER failure is therefore a possible trigger of the [[senescence-associated-secretory-phenotype|SASP]].
- **[[nucleotide-excision-repair]]** — NER handles bulky, helix-distorting lesions; BER handles small lesions. The pathways are largely independent but share APE1 as a back-up AP endonuclease for NER-generated AP sites.
- **[[mitophagy]]** — Accumulation of mtDNA damage beyond BER capacity can trigger mitophagy; conversely, impaired mitophagy leaves cells with damaged mitochondria that generate more ROS and thus more BER substrate.

## Therapeutic angle

| Target | Agent | Stage | Aging relevance |
|---|---|---|---|
| PARP1/2 | Olaparib, niraparib, rucaparib, talazoparib | FDA-approved (oncology) | Synthetic lethality in BRCA-mut tumors; role in aging unexplored |
| OGG1 (activator) | SU0268 and related tool compounds | Preclinical | Proposed to reduce 8-oxoG accumulation; no clinical data |
| APE1 | APE1 inhibitors (cancer) / APE1 activators (protective) | Preclinical | Both gain- and loss-of-function proposed for different disease contexts; aging angle unclear |

#gap/dose-response-unclear — No dose-response data in aged humans for any BER modulator. #gap/long-term-unknown — Long-term effects of PARP inhibition on BER capacity and mtDNA integrity in aging tissues unknown.

## Limitations and gaps

- `#gap/needs-human-replication` — OGG1 activity decline with age is shown primarily in rodents; large-scale human tissue data are lacking.
- `#gap/needs-replication` — APE1 dual nuclear/mitochondrial localization mechanism is partially characterized; mitochondrial targeting signal is disputed.
- `#gap/no-mechanism` — Scaffold organization of mitochondrial BER is not fully established; XRCC1 is confirmed absent (de Souza-Pinto 2008), but the alternative scaffold architecture for LIG3α in the mitochondrial matrix is not yet characterized.
- `#gap/no-mechanism` — How PARP1 hyperactivation and NAD+ depletion quantitatively contribute to the age-associated decline in sirtuin function vs. other NAD+-consuming pathways (CD38, SARM1) is unresolved.
- `#gap/long-term-unknown` — Whether pharmacological enhancement of BER in aged organisms would extend healthspan or lifespan has not been tested.
- `#gap/needs-canonical-id` — WikiPathways ID for human BER pathway not confirmed (API unavailable at seed time); verify via https://www.wikipathways.org/.

## Footnotes

[^krokan2013]: doi:10.1101/cshperspect.a012583 · Krokan HE, Bjoras M · *Cold Spring Harb Perspect Biol* 2013 · review · n=N/A · model: human/mammalian BER · 1,215 citations; primary reference for BER mechanism · full PDF verified 2026-05-05; key points confirmed: ≥11 mammalian glycosylases; MUTYH is monofunctional; long-patch gap 2–10 nt; PARP1 role in BER unsettled; LIG1 now considered major nuclear short-patch ligase, LIG3 essential in mitochondria

[^lindahl1993]: doi:10.1038/362709a0 · Lindahl T · *Nature* 1993 · review · n=N/A · model: various · 5,524 citations; landmark paper establishing spontaneous DNA damage rates and their biological significance; closed-access (not_oa per archive) — claims unverified against PDF #gap/no-fulltext-access

[^desouzapinto2008]: doi:10.1016/j.dnarep.2008.03.011 · de Souza-Pinto NC, Wilson DM III, Stevnsner TV, Bohr VA · *DNA Repair* 2008 · review · n=N/A · model: mammalian (human, rodent) · mitochondrial BER and neurodegeneration; mitochondria possess BER plus limited recombination and direct reversal but not NER/MMR; XRCC1 absent from mitochondria; Polγ confirmed as sole mtDNA polymerase for gap-filling; 98 citations · verified via PMC full text (PMC4625841)

[^hegde2012]: doi:10.1016/j.mad.2012.01.005 · Hegde ML, Mantha AK, Hazra TK, Bhakat KK, Mitra S, Szczesny B · *Mech Ageing Dev* 2012 · review · n=N/A · model: human/mammalian · oxidative genome damage in aging and neurodegeneration; review article — limited original quantitative data; claims about OGG1 activity decline in brain mitochondria attributed to Gredilla et al. 2010; 135 citations · verified via PMC full text (PMC3351531)

[^gredilla2010brain]: doi:10.1016/j.neurobiolaging.2008.07.004 · Gredilla R, Garm C, Holm R, Bohr VA, Stevnsner T · *Neurobiol Aging* 2010 · in-vivo · model: male mouse (4 age groups: 1, 5, 10, 15–20 months; cortex, hippocampus, cerebellum) · significant decline in mitochondrial DNA glycosylase activities (UNG1, OGG1, NTH1, NEIL) and mtAPE in cortex with age (p≤0.003); only minor changes in hippocampus; 65 citations · verified via PMC full text (PMC2858237)

[^gredilla2012synapto]: doi:10.1016/j.neurobiolaging.2010.06.019 · Gredilla R, Weissman L, Yang JL, Bohr VA, Stevnsner T · *Neurobiol Aging* 2012 · in-vivo · model: 129B6F1 mice (3 age groups: 5 weeks, 5 months, 23 months); 3xTgAD mice (3 months and 12 months) vs wild-type · total BER activity declines progressively with normal aging in synaptosomes (p≤0.01); UNG1 activity declined ~40% by 5 months; NO significant BER changes in 3xTgAD mice at either age; 41 citations · verified via PMC full text (PMC3041866)

[^soerensen2009]: doi:10.1016/j.mad.2009.05.003 · Soerensen M, Gredilla R, Müller-Ohldach M, Werner A, Bohr VA, Osiewacz HD, Stevnsner T · *Mech Ageing Dev* 2009 · in-vivo · model: *Podospora anserina* (filamentous fungus) · mitochondrial DNA glycosylase activities (dUracil, 5-OHdUracil, 8oxodG, 5-OHdUracil-bubble) all significantly lower in senescent vs juvenile state (p=0.02–0.04); long-lived mutants showed lower activities than wild-type; 20 citations · verified via PMC full text (PMC2764052)

[^klungland1999]: doi:10.1073/pnas.96.23.13300 · Klungland A, Rosewell I, Hollenbach S, Larsen E, Daly G, Epe B, Seeberg E, Lindahl T, Barnes DE · *PNAS* 1999 · in-vivo · model: OGG1-/- mouse · accumulation of premutagenic DNA lesions in mice lacking OGG1; 794 citations

[^fangbohr2016]: doi:10.1080/15548627.2016.1257467 · Fang EF, Bohr VA · *Autophagy* 2017 · autophagic punctum (2-page commentary) · n=N/A · model: C. elegans (atm-1 mutants) + primary rat neurons + Atm-/- mouse · ATM loss → PARP1 hyperactivation → NAD+ depletion → SIRT1 inactivation → compromised mitophagy; NAD+ repletion rescues mitophagy in ATM-deficient neurons; focus is ATM-specific, not general BER-PARP1 axis; 49 citations · verified against full PDF 2026-05-05

[^baptiste2021]: doi:10.1016/j.dnarep.2021.103050 · Baptiste BA et al. · *DNA Repair* 2021 · in-vitro (purified proteins) + ex-vivo (Polb-/- MEFs) · POLβ outperforms POLγ in mitochondrial single-nucleotide gap-filling: POLβ at 3 nM completes gap-filling in 1 min; POLγ at 10 nM leaves unfilled gaps at 30 min · contradicts the de Souza-Pinto 2008-era assumption that mtBER gap-filling is exclusively POLγ; supports POLβ as the major mtBER polymerase via mitochondrial co-import. Verified during R32a POLB-page verification.
