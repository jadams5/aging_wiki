---
type: compound
aliases: [doxycycline hyclate, doxycycline monohydrate, Oracea, Periostat, Vibramycin, Doryx, sub-antimicrobial dose doxycycline, SDD, anti-inflammatory dose doxycycline]
pubchem-cid: 54671203
pubchem-cid-alt: null
chembl-id: CHEMBL1433
drugbank-id: DB00254
cas-number: 564-25-0
administration-route: oral
biologic: false
mechanisms: [anti-inflammatory, extracellular-matrix-remodeling]
targets: ["[[mmp-1]]", "[[mmp-3]]", "[[mmp-9]]"]
hallmarks: ["[[chronic-inflammation]]", "[[loss-of-proteostasis]]"]
clinical-stage: fda-approved
human-evidence-level: strong
translation-gap: human-evidence-strong
next-experiment: "Head-to-head RCT of sub-antimicrobial doxycycline 40 mg MR vs vehicle in photodamaged forearm skin with quantitative collagen histomorphometry as primary endpoint — would establish whether anti-MMP activity translates to measurable photoaging reversal independently of the anti-inflammatory rosacea endpoint."
clinical-trials-active: 3
literature-checked-through: 2026-06-27
verified: true
verified-date: 2026-06-27
verified-by: claude
verified-scope: "PubChem CID 54671203, ChEMBL CHEMBL1433, DrugBank DB00254, and CAS 564-25-0 confirmed against live databases. Van Zuuren 2019 verified against full PDF. Moullan 2015 and Molenaars 2020 verified against full PDFs (both downloaded and read end-to-end). Del Rosso 2007 lesion-count numbers cross-checked against verified rosacea.md (verified: true); PK Cmax ~0.5 µg/mL claim in the table not independently confirmed against full Del Rosso 2007 PDF (closed-access). Golub 1998 and Caton 2011 mechanism/periodontitis claims not independently verified against full PDFs (both closed-access). Morales-Ojeda 2026 patient-count and study-design numbers confirmed against PubMed abstract."
---

# Doxycycline

A second-generation tetracycline **antibiotic** by drug class, seeded here for its **non-antimicrobial biology**: at sub-antimicrobial doses, doxycycline is a potent anti-inflammatory agent and a direct inhibitor of matrix metalloproteinases (MMPs), properties that are mechanistically independent of its antibacterial activity. FDA-approved at 40 mg modified-release (Oracea) for inflammatory rosacea — the first oral drug approved for a dermatological indication at a dose deliberately maintained below the minimum antibacterial threshold — and at 20 mg twice daily (Periostat) as a periodontitis adjunct. These two properties connect doxycycline to the [[skin-aging]] photoaging axis (UV→MMP→collagen loss) and to [[rosacea]] management. A third layer — doxycycline inhibits the mitoribosome — is documented below as an emerging confounder and speculative longevity mechanism.

*Antibiotic indications (pneumonia, Lyme disease, malaria prophylaxis, chlamydia, acne) are noted briefly at the end of this page but are outside the primary scope.*

---

## Identity

- **PubChem CID:** 54671203 (doxycycline anhydrous free base; confirmed molecular formula C22H24N2O8, MW 444.4 g/mol, InChIKey SGKRLCUYIXIAHR-AKNGSSGZSA-N)
- **ChEMBL ID:** CHEMBL1433 (pref_name: DOXYCYCLINE ANHYDROUS; max phase 4; first approval 1967)
- **DrugBank ID:** DB00254 (confirmed via PubChem synonym cross-reference)
- **CAS number:** 564-25-0 (anhydrous free base; confirmed via PubChem synonyms — note: doxycycline hyclate has a distinct CAS 7164-70-7)
- **Drug class:** second-generation tetracycline; broad-spectrum bacteriostatic antibiotic; MMP inhibitor
- **Pharmaceutical forms:** doxycycline hyclate (most common oral form; used in Oracea, Vibramycin, generic capsules) and doxycycline monohydrate (Monodox, Adoxa, generic tablets); this page uses the free-base CID (54671203) which covers the shared pharmacophore of both salt forms. The hyclate and monohydrate have distinct PubChem CIDs not recorded here.

---

## Framing: sub-antimicrobial vs antimicrobial dosing

The defining principle of this page is the **dose threshold separating antibacterial from anti-inflammatory activity**:

| Dose | Plasma Cmax | Antibacterial? | Anti-inflammatory / anti-MMP? |
|---|---|---|---|
| 100–200 mg/day (antibiotic course) | ~3–4 µg/mL | Yes; above MIC for most organisms | Yes (co-occurring) |
| 40 mg MR once daily (Oracea; sub-antimicrobial) | ~0.5 µg/mL | No; sub-MIC sustained | Yes (preserved) |
| 20 mg twice daily (Periostat; sub-antimicrobial) | Sub-MIC | No | Yes — MMP inhibition in GCF |

The Oracea formulation (30 mg immediate-release + 10 mg delayed-release beads in a single capsule) was specifically engineered to maintain stable sub-MIC plasma concentrations across the 24-hour dosing interval. At 40 mg MR, antibiotic selection pressure is considered negligible; no antibiotic resistance emergence was detected in Phase 3 trials [^delrosso2007]. The anti-inflammatory and anti-MMP effects persist because they are mediated by different molecular mechanisms than the 70S ribosome inhibition responsible for antibacterial activity.

---

## Mechanisms of action (non-antimicrobial)

### Anti-MMP activity

Doxycycline directly inhibits matrix metalloproteinases — particularly [[mmp-1]] (collagenase-1), MMP-8 (neutrophil collagenase), [[mmp-9]] (gelatinase B), and MMP-13 (collagenase-3) — through two independent mechanisms [^golub1998]:

1. **Zinc chelation at the MMP catalytic domain:** doxycycline's hydroxyl and carbonyl groups chelate the catalytic Zn²⁺ ion required for MMP proteolytic activity, blocking the active site independently of the tetracycline antibiotic pharmacophore.
2. **Pro-MMP activation suppression:** tetracyclines reduce oxidative activation of latent pro-MMPs (zymogen conversion), preventing generation of active enzyme from the inactive precursor.

These mechanisms are independent of antibacterial activity — chemically modified tetracyclines (CMTs) stripped of their antibiotic pharmacophore retain full MMP inhibitory potency [^golub1998]. Among the natural tetracyclines, doxycycline is the most potent MMP inhibitor.

**Skin-aging connection:** The UV→AP-1/NF-κB→MMP cascade is the central molecular mechanism of photoaging collagen loss, documented in detail on [[skin-aging]]: sub-erythemogenic UVB activates AP-1 and NF-κB in human dermis within hours, transcriptionally inducing MMP-1 and MMP-9 by 50–80% [see [[skin-aging]] footnotes, Fisher 1996]. Doxycycline's zinc-chelation-based MMP inhibition could theoretically reduce UV-driven collagen fragmentation, but no clinical RCT has tested this with a skin collagen endpoint. The photoaging anti-MMP rationale is mechanistic extrapolation; human evidence is absent. #gap/needs-human-replication

| Dimension | Status |
|---|---|
| Anti-MMP mechanism characterised in humans? | yes — zinc chelation in purified assays; MMP inhibitory activity confirmed in human gingival crevicular fluid ex vivo [^golub1998] |
| Collagen preservation in aging skin (clinical)? | no — not yet tested with biopsy endpoint in any RCT |
| Replicated for rosacea anti-inflammatory endpoint? | yes — two independent Phase 3 RCTs; Cochrane GRADE moderate-to-high [^delrosso2007][^vanzuuren2019] |

Cross-target pages: [[mmp-1]], [[mmp-3]], [[mmp-9]].

### Anti-inflammatory signalling

Beyond MMP inhibition, sub-antimicrobial doxycycline suppresses multiple pro-inflammatory pathways [^golub1998]:

- **Neutrophil chemotaxis and oxidative burst:** reduces neutrophil migration into inflamed tissue and suppresses ROS production from stimulated neutrophils — directly relevant to the rosacea inflammatory lesion.
- **Cytokine suppression:** reduces IL-1β, IL-6, and TNF-α production in gingival tissue and skin biopsies.
- **NF-κB modulation:** attenuates NF-κB-driven transcription of inflammatory mediators in keratinocytes and fibroblasts.
- **Prostaglandin E2 pathway:** reduces PGE2 via indirect effects on cyclooxygenase expression.

In the rosacea context, these mechanisms suppress the cathelicidin/KLK5-driven inflammatory amplification loop (see [[rosacea]]) that drives papulopustular lesions and contributes to fixed erythema. The anti-inflammatory benefit is the mechanism underlying FDA approval, not MMP inhibition per se.

### Mitochondrial translation inhibition — confounder and speculative longevity biology

Doxycycline — along with all tetracycline-class antibiotics — inhibits the **mitoribosome (55S ribosome)** in eukaryotic mitochondria, because mitochondria retain prokaryotic-origin ribosomes that share structural homology with the bacterial 70S target of tetracyclines [^moullan2015].

**What this means:**

- Moullan et al. 2015 (*Cell Reports*, n=multiple model organisms) demonstrated that even low tetracycline concentrations trigger **mitonuclear protein imbalance** across human cells, *C. elegans*, *Drosophila*, mice, and plants: mitochondrial-encoded OXPHOS subunits fall relative to nuclear-encoded subunits, activating the mitochondrial unfolded protein response (UPR^mt) [^moullan2015]. The authors issued an explicit call for caution in any biomedical research using doxycycline as a Tet-on/Tet-off inducible control — the drug is not metabolically inert at typical induction concentrations.
- **The longevity connection:** Molenaars et al. 2020 (*Cell Metabolism*) showed that inhibiting mitochondrial translation — genetically (*mrps-5* RNAi in *C. elegans*) or pharmacologically (doxycycline in mammalian K562 cells and germ-free mouse liver) — **co-represses** cytosolic translation via an ATF4/*atf-5*-dependent signalling cascade, conserved from worms to mice [^molenaars2020]. This links two longevity pathways: slowing cytosolic translation (the established mTOR-inhibition pathway) and slowing mitochondrial translation (mitoribosome inhibition) converge on the same downstream mechanism. The lifespan extension seen with *mrps-5* RNAi in worms is mediated through ATF4/*atf-5*-dependent cytosolic translation repression, not through UPR^mt (confirmed using an *atfs-1* mutant unable to mount UPR^mt, which retained the translational phenotype and partially retained longevity). Doxycycline-induced worm lifespan extension, first reported in Houtkooper et al. 2013, is consistent with this mechanism.
- Whether this translational imbalance is beneficial or harmful — or even detectable at therapeutic human doses — is entirely unstudied in clinical contexts. Doxycycline's plasma half-life (~18–22 h) and tissue accumulation at 40 mg MR could produce sustained mitoribosome engagement in target tissues, but human mitochondrial proteomic data at therapeutic doxycycline doses do not exist. #gap/needs-human-replication #gap/no-mechanism

**Framing discipline:** The mitoribosome inhibition is simultaneously (1) a well-documented experimental confounder warranting caution in longevity research and (2) a speculative longevity mechanism that remains untested in humans. Both framings are recorded here without privileging either.

---

## FDA-approved non-antimicrobial indications

### Inflammatory rosacea — Oracea (40 mg doxycycline MR, once daily)

The pivotal evidence: two Phase 3 randomised double-blind placebo-controlled trials (combined n=537: 269 doxycycline 40 mg MR, 268 placebo; 16-week treatment) [^delrosso2007]:

| Parameter | Doxycycline 40mg MR | Placebo | Significance |
|---|---|---|---|
| Mean lesion reduction, study 301 | −11.8 lesions | −5.9 lesions | p<0.001 |
| Mean lesion reduction, study 302 | −9.5 lesions | −4.3 lesions | p<0.001 |
| Sub-MIC plasma confirmed? | yes | — | [^delrosso2007] |
| Antibiotic resistance signal? | none detected | — | [^delrosso2007] |

The 2019 Cochrane systematic review (van Zuuren et al., 152 studies, 20,944 participants) assessed doxycycline 40 mg MR at **GRADE moderate-to-high certainty** for papulopustular lesion reduction in rosacea — higher certainty than topical metronidazole (moderate) but lower than topical azelaic acid (high certainty) and topical ivermectin (high certainty) [^vanzuuren2019]. Within the doxycycline evidence, the IGA clear/almost-clear outcome reached high certainty while the lesion-count mean difference reached moderate certainty; the abstract summary of moderate-to-high reflects this outcome-level split. Oracea is the only oral doxycycline formulation FDA-approved for an anti-inflammatory (non-antibiotic) dermatological indication.

Cross-links: [[rosacea]], [[erythema]].

### Periodontitis adjunct — Periostat (20 mg doxycycline HCl, twice daily)

FDA-approved 1998 as an adjunct to scaling and root planing for adult chronic periodontitis. Mechanism: MMP suppression in gingival crevicular fluid (GCF). Sub-antimicrobial doxycycline reduces MMP-8 (neutrophil collagenase — the dominant GCF collagenase) and MMP-9 activity in GCF, limiting connective tissue breakdown independent of any antimicrobial effect [^golub1998][^caton2011].

Clinical data: multiple RCTs (reviewed by Caton & Ryan 2011) demonstrated significant improvements in probing depth, clinical attachment level, and gingival bleeding on probing vs mechanical treatment alone, sustained over 9-month follow-up; no antibiotic resistance emergence at the sub-antimicrobial dose [^caton2011]. The MMP-8-focused mechanism (different from MMP-1/MMP-3 in skin) makes Periostat a proof-of-concept that anti-MMP doxycycline activity translates to a collagen-preservation clinical endpoint — at least in the periodontium.

---

## Human evidence summary

| Indication | Design | n | Endpoint | Evidence |
|---|---|---|---|---|
| Papulopustular rosacea | Phase 3 RCTs (×2), 16 wk [^delrosso2007] | 537 | Inflammatory lesion count | GRADE moderate-to-high [^vanzuuren2019]; strong |
| Chronic periodontitis | Multiple RCTs [^caton2011] | Various | Probing depth, attachment level | GRADE moderate; strong |
| Skin photoaging / collagen | No RCT | — | Collagen histomorphometry | Not established; #gap/needs-human-replication |
| Abdominal aortic aneurysm | Systematic review, 2 RCTs [^moralesojena2026] | 515 (mean age 71) | Aneurysm expansion rate | Biochemical MMP-9 reduction confirmed; clinical efficacy limited |

**Critical framing from Morales-Ojeda 2026 (systematic review):** A 2026 systematic review (10 studies, 2 RCTs, 515 patients, mean age 71) found that doxycycline reduces MMP-9 and acute-phase reactants biochemically but showed **limited clinical efficacy for limiting AAA growth** [^moralesojena2026]. This disconnect between biochemical MMP inhibition and structural tissue outcomes is a direct caution against assuming that doxycycline's anti-MMP activity will automatically produce photoaging reversal or dermal collagen preservation in clinical settings. The rosacea anti-inflammatory benefit is robustly established; MMP-mediated structural outcomes (AAA wall, skin collagen) have variable human translation. #gap/contradictory-evidence

---

## Active clinical trials (ClinicalTrials.gov, query 2026-06-27)

Three active/recruiting studies for doxycycline in anti-inflammatory or rosacea indications:

| NCT | Status | Focus |
|---|---|---|
| NCT04108897 — Microbiome in rosacea (Johns Hopkins) | Active, not recruiting | Skin and gut microbiome changes with doxycycline doses in rosacea; dose-response design |
| NCT05296837 — ORBS ocular rosacea (UCSF) | Active, not recruiting | Sub-antimicrobial 40 mg vs antibiotic 200 mg vs placebo for ocular rosacea — directly tests dose-specific mechanism |
| NCT04504123 — MMP-9 inhibition for wet AMD (U Iowa) | Recruiting | Oral doxycycline for persistent subretinal fluid in age-related macular degeneration; MMP-9 as primary biomarker — tests anti-MMP translation to an ocular structural endpoint |

NCT04504123 is notable because it directly tests the anti-MMP mechanism for a structural aging endpoint. Results will provide human-in-vivo evidence on whether doxycycline MMP inhibition translates beyond the gingival/periodontitis context established by Periostat.

---

## Pharmacokinetics

- **Oral bioavailability:** ~93% — substantially higher than first-generation tetracyclines, which are significantly reduced by dairy and food via divalent cation chelation in the gut
- **Half-life:** 18–22 hours; enables once-daily dosing (the formulation basis for Oracea)
- **Plasma protein binding:** ~90% (primarily albumin)
- **Distribution:** wide; penetrates gingival tissue, synovial fluid, dermis, lung, and reproductive organs
- **Modified-release pharmacokinetics (Oracea):** 30 mg IR layer gives early Cmax ~0.5 µg/mL; 10 mg DR layer extends absorption; combined profile maintains sub-MIC concentrations across 24 hours
- **Chelation interactions:** doxycycline still binds divalent cations (Ca²⁺, Mg²⁺, Fe³⁺, Al³⁺) — avoid co-administration with antacids, dairy, and iron supplements within 2 hours of dosing; effect is less severe than with tetracycline or oxytetracycline
- **Drug interactions:** CYP3A4 induction by doxycycline can reduce efficacy of warfarin, oral contraceptives; increases lithium levels; consult prescribing information for full list
- **Elimination:** mixed biliary/fecal (major) and renal (minor); dose adjustment not required for mild-to-moderate renal impairment

---

## Brief note: antibiotic indications

Doxycycline is a first-line or alternative antibiotic for community-acquired pneumonia (*Mycoplasma*, *Chlamydophila*, *Legionella*), early Lyme disease, Rocky Mountain spotted fever, sexually transmitted infections (chlamydia, non-gonococcal urethritis), malaria prophylaxis (100 mg/day), and inflammatory acne (100–200 mg/day for limited courses). These operate through bacterial 70S ribosome inhibition, not MMP inhibition, and are outside the primary scope of this wiki page. Standard prescribing information and clinical guidelines document these fully.

**Safety at antibiotic doses:** esophageal ulceration (inadequate fluid intake with capsule), photosensitivity (UV sensitisation — clinically relevant at 100–200 mg/day; minor at 40 mg MR), and rare hepatotoxicity. **Pregnancy Category D** — contraindicated; causes permanent tooth discolouration and enamel hypoplasia in children exposed in utero or during tooth development. At 40 mg MR, Phase 3 safety profile was comparable to placebo [^delrosso2007].

---

## Effects on aging hallmarks

| Hallmark | Effect | Evidence |
|---|---|---|
| [[chronic-inflammation]] | Reduces papulopustular lesions in rosacea; suppresses MMP activity, cytokines (IL-1β, IL-6, TNF-α), and neutrophil activation; anti-MMP in GCF (periodontitis) | Strong RCT evidence for rosacea and periodontitis [^delrosso2007][^caton2011]; mechanism in inflammaging context inferred |
| [[loss-of-proteostasis]] | Anti-MMP activity preserves connective tissue ECM integrity in periodontium (clinical) and may slow collagen fragmentation in photoaged dermis (mechanistic only) | [^golub1998][^caton2011]; dermal endpoint not tested in RCT #gap/needs-human-replication |

---

## Limitations and gaps

1. **No photoaging RCT:** No randomised trial has assessed sub-antimicrobial doxycycline with skin collagen histomorphometry, photoaging scoring, or wrinkle measurement as a primary endpoint. The mechanistic rationale (anti-MMP → collagen preservation) is coherent but unconfirmed in human skin. #gap/needs-human-replication

2. **MMP biochemistry does not guarantee structural efficacy:** Morales-Ojeda 2026 shows that doxycycline reduces MMP-9 biochemically in AAA but does not translate to clinically meaningful aneurysm growth limitation [^moralesojena2026]. The same caveat applies to skin photoaging. #gap/contradictory-evidence

3. **Mitoribosome inhibition: human clinical significance unknown:** Whether therapeutic doxycycline doses (40 mg MR, months to years) produce meaningful mitoribosome inhibition in human target tissues, and whether this is beneficial (ATF4-mediated cytosolic translation repression as a longevity-relevant signal per Molenaars 2020) or harmful (mitochondrial insufficiency), is entirely unstudied. The Moullan 2015 / Molenaars 2020 findings are in eukaryotic cell and organism models, not therapeutic-dose human populations. #gap/needs-human-replication #gap/no-mechanism

4. **Long-term safety beyond 16 weeks limited:** Phase 3 RCTs studied 16-week courses. Continuous sub-antimicrobial doxycycline for 1+ years in a healthy aging or rosacea-management context has limited long-term safety data. Periostat data extend to 9 months but are in a periodontitis (not healthy aging) population. #gap/long-term-unknown

5. **PK Cmax at 40 mg MR:** The tabulated ~0.5 µg/mL is consistent with the known Oracea pharmacokinetic profile but was not independently confirmed against the Del Rosso 2007 full text (closed-access). Recommend verification on next access to the paper or the original Phase 3 IND package.

6. **Older adult subgroup data absent:** The pivotal rosacea RCTs enrolled predominantly 30–60-year-olds; treatment response and safety in patients >65 are not separately characterised for either rosacea or periodontitis.

---

## Cross-references

- [[rosacea]] — primary approved indication; cathelicidin/KLK5 inflammatory axis; doxycycline in the therapeutic landscape section
- [[skin-aging]] — UV→MMP→collagen fragmentation axis; anti-MMP photoaging rationale
- [[erythema]] — facial erythema context, including persistent redness in rosacea
- [[mmp-1]] — primary collagenase target in dermal collagen fragmentation
- [[mmp-3]] — secondary MMP target; stromelysin I
- [[mmp-9]] — gelatinase B; primary anti-MMP target in periodontitis and AAA contexts
- [[chronic-inflammation]] — primary hallmark target
- [[loss-of-proteostasis]] — secondary hallmark via ECM collagen axis
- [[interventions/pharmacological/retinoids]] — the other major anti-MMP class in photoaged skin (AP-1 transrepression mechanism, distinct from doxycycline's zinc-chelation route); comparison useful for understanding the two pharmacological approaches to the UV→MMP→collagen axis

---

## Footnotes

[^delrosso2007]: doi:10.1016/j.jaad.2006.11.021 · PMID 17367893 · Del Rosso JQ, Webster GF, Jackson M, Rendon M, Rich P, Torok H, Bradshaw M · *J Am Acad Dermatol* 2007 May;56(5):791–802 · rct · n=537 combined (269 doxycycline 40 mg MR, 268 placebo) from two Phase 3 double-blind trials (studies 301 and 302); 16-week treatment; mean inflammatory lesion count reduction −11.8 vs −5.9 (study 301, p<0.001) and −9.5 vs −4.3 (study 302, p<0.001); sub-MIC plasma levels confirmed throughout; no antibiotic resistance emergence detected; safety profile comparable to placebo; 220+ citations

[^vanzuuren2019]: doi:10.1111/bjd.17590 · PMID 30585305 · van Zuuren EJ, Fedorowicz Z, Tan J, van der Linden MMD, Arents BWM, Carter B, Charland L · *Br J Dermatol* 2019;181(1):65–79 · systematic review with GRADE · 152 studies, 20,944 participants (mean age 48.6 yr; 12,575 women vs 5,313 men); doxycycline 40 mg MR for papulopustular rosacea: GRADE moderate-to-high (IGA clear/almost-clear endpoint: high; lesion-count MD endpoint: moderate; discussed as "moderate-certainty" in the Discussion for systemic treatments); azelaic acid: high; topical ivermectin: high; topical metronidazole: moderate; IPL/laser: low-to-moderate; brimonidine for erythema: high. PDF verified 2026-06-27.

[^golub1998]: doi:10.1177/08959374980120010501 · PMID 9972117 · Golub LM, Lee HM, Ryan ME, Giannobile WV, Payne J, Sorsa T · *Adv Dent Res* 1998 Nov;12(2):12–26 · review · Tetracyclines inhibit MMP-1, -8, -9, and -13 via Zn²⁺ chelation at the catalytic domain plus ROS-mediated pro-MMP activation suppression; effect is independent of antibacterial activity (established with chemically modified tetracyclines that lack antibacterial activity but retain full MMP inhibitory potency); doxycycline is the most potent natural tetracycline MMP inhibitor in the class; mechanistic foundation for the Periostat FDA approval

[^caton2011]: doi:10.1016/j.phrs.2010.12.003 · PMID 21182947 · Caton J, Ryan ME · *Pharmacol Res* 2011 Feb;63(2):114–120 · review · Clinical evidence synthesis for sub-antimicrobial dose doxycycline (SDD; Periostat 20 mg twice daily) as adjunct to scaling and root planing in chronic periodontitis; multiple RCTs documenting significant improvements in probing depth, clinical attachment level, and gingival crevicular fluid MMP-8 activity vs mechanical treatment alone; 9-month data available; no antibiotic resistance emergence at SDD dose

[^moullan2015]: doi:10.1016/j.celrep.2015.02.034 · PMID 25772356 · Moullan N, Mouchiroud L, Wang X, Ryu D, Williams EG, Mottis A, Jovaisaite V, Frochaux MV, Quiros PM, Deplancke B, Houtkooper RH, Auwerx J · *Cell Reports* 2015;10(10):1681–1691 · in-vitro + in-vivo · model: human cell lines, *C. elegans*, *Drosophila melanogaster*, mice, plants · Tetracyclines including doxycycline trigger mitonuclear protein imbalance by inhibiting the mitoribosome at pharmacological concentrations; even low doses activate UPR^mt across eukaryotic models; explicit call for caution in longevity research using doxycycline as a Tet-on/Tet-off inducible control; drug is not metabolically inert at typical induction concentrations

[^molenaars2020]: doi:10.1016/j.cmet.2020.01.011 · PMID 32084377 · Molenaars M, Janssens GE, Williams EG et al. (Houtkooper RH, lead/last author) · *Cell Metabolism* 2020 Mar 3;31(3):549–563.e7 · in-vivo · model: *C. elegans* (mrps-5 RNAi) + mammalian K562 cells (doxycycline) + germ-free C57BL/6J mice (doxycycline in vivo) · Inhibiting mitochondrial translation genetically or pharmacologically (doxycycline) **co-represses** cytosolic translation via ATF4/*atf-5*; mechanism is independent of UPR^mt (shown with *atfs-1* mutant); lifespan extension from *mrps-5* RNAi in worms is ATF4/*atf-5*-dependent; links mitoribosome-inhibition and mTOR-inhibition longevity pathways through shared cytosolic-translation repression; provides mechanistic context for why doxycycline mitoribosome inhibition may be longevity-relevant at the right dose — not yet demonstrated in humans. Correction note: an earlier seeding draft incorrectly stated cytosolic translation is "increased" upon mitoribosome inhibition; the paper shows the opposite (co-repression).

[^moralesojena2026]: doi:10.1177/17085381251379296 · PMID 41167482 · Morales-Ojeda L, Montero-Arcila S, Paul L, Nunes V, Malgor EA, Jacobs DL, Malgor RD · *Vascular* 2026;34(3):587–597 · systematic review · 10 studies (2 RCTs; 515 patients; mean age 71 years) · Doxycycline reduces MMP-9 and acute-phase reactants biochemically in abdominal aortic aneurysm context but shows limited clinical efficacy for limiting aneurysm growth in the two included RCTs; explicitly documents the biochemical-vs-structural translational disconnect; illustrates the general caveat that plasma/tissue MMP biomarker reduction does not guarantee clinically meaningful structural ECM outcomes
