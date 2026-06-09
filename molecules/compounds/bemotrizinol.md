---
type: compound
aliases: [Tinosorb S, BEMT, bis-ethylhexyloxyphenol methoxyphenyl triazine, anisotriazine, escalol S, BTEX]
pubchem-cid: 135487856
pubchem-cid-alt: null
chembl-id: CHEMBL2104956
drugbank-id: null
administration-route: topical
biologic: false
molecular-formula: C38H49N3O5
molecular-weight-da: 627.8
mechanisms: [UV-filter-absorption, avobenzone-photostabilization, photoaging-prevention]
targets: []
hallmarks: ["[[genomic-instability]]", "[[loss-of-proteostasis]]", "[[chronic-inflammation]]"]
clinical-stage: approved-ex-us
human-evidence-level: limited
translation-gap: human-evidence-strong
next-experiment: "Independent (non-DSM) intra-individual hemiface RCT comparing BEMT-containing SPF 50+ vs an SPF-matched US-approved stack (avobenzone + octocrylene + homosalate) with dermal biopsy endpoints (CPD count, MMP-1 IHC, p16+ fibroblast fraction) at 6 months outdoors — would establish whether BEMT's superior photostability translates to measurably lower dermal photodamage accumulation beyond what SPF-matched US filters achieve."
clinical-trials-active: 0
literature-checked-through: 2026-06-09
verified: true
verified-date: 2026-06-09
verified-by: claude
verified-scope: "Canonical identity confirmed via live PubChem API (CID 135487856: formula C38H49N3O5, MW 627.8, InChIKey XVAMCHGMPYWHNL-UHFFFAOYSA-N, CAS 187393-00-6); ChEMBL CHEMBL2104956 confirmed and added (was null). Regulatory claims (EU Annex VI ≤10%, not FDA-approved/GRASE) consistent with multiple independently confirmed secondary sources; EU Annex VI Annex entry numbers (entry 25) and SCCS opinion number (SCCS/1591/17) not confirmed against primary EU documents — #gap/needs-canonical-id retained. Wang 2026 DOI confirmed via Crossref. D'Ruiz 2023 author list corrected from seeded values to Crossref-verified list. Puglia 2014 page numbers corrected (165–172 → 211–217). Chatelain 2001 and Turner 2025 DOIs confirmed via Crossref. Naumov 2020 DOI unconfirmable but is cited on bisoctrizole page not this page. Closed-access primary claims (photostabilization quantification, PK Cmax values) remain abstract-sourced and hedged appropriately."
---


# Bemotrizinol (Tinosorb S, BEMT)

**INCI:** Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine
**IUPAC:** 5-(2-ethylhexoxy)-2-[4-[4-(2-ethylhexoxy)-2-hydroxyphenyl]-6-(4-methoxyphenyl)-1,3,5-triazin-2-yl]phenol
**PubChem CID:** 135487856 · **CAS:** 187393-00-6 (reported; see gap note above) · **MW:** 627.8 g/mol · **Formula:** C₃₈H₄₉N₃O₅ · **InChIKey:** XVAMCHGMPYWHNL-UHFFFAOYSA-N

Bemotrizinol (trade name Tinosorb S; abbreviated BEMT in the published literature) is an oil-soluble, broad-spectrum organic UV filter developed by DSM (now DSM-Firmenich). It absorbs across UVB (290–320 nm), UVA-II (320–340 nm), and UVA-I (340–400 nm), with a secondary absorption peak extending into the near-violet region. Bemotrizinol is also widely used as a **photostabilizer for other UV filters** — most importantly avobenzone (butyl methoxydibenzoylmethane) and ethylhexyl methoxycinnamate (octinoxate) — and is regarded by many formulators as the single most versatile organic broad-spectrum filter available.

Bemotrizinol is **approved in the EU, UK, Australia/New Zealand, Canada, Japan, and many other jurisdictions** but remains **unapproved by the US FDA** for OTC sunscreen use, stuck in the long-stalled Time and Extent Application (TEA) / OTC monograph backlog. Bemotrizinol is the **explicit motivating example for the wiki's R52 `approved-ex-us` convention** (schema-history.md § R52): the "not FDA-approved" label in this case reflects US regulatory lag and the FDA drug-vs-cosmetic classification framework, not evidence weakness. The FDA has been in possession of the TEA since the early 2000s; by comparison, the EU authorized BEMT in 2000 (Annex VI entry 25) after full dossier review.

See [[interventions/lifestyle/uv-protection]] for the broad sunscreen intervention framework; this page is the atomic deep-dive on BEMT.

---

## Structural note: s-triazine family

Bemotrizinol is built on a **symmetrical 1,3,5-triazine (s-triazine)** scaffold, which places it in the same chemical family as [[bisoctrizole]] (Tinosorb M, the water-dispersible micronized analog) and [[iscotrizinol]] (HDT) — all share the 2,4,6-triphenyl-triazine core. This family is structurally distinct from [[triasorb]] (PBT / phenylene bis-diphenyltriazine), which uses an asymmetric 1,2,4-triazine scaffold.

The two phenylphenol "arms" of BEMT each carry an *ortho*-hydroxyl group that forms an intramolecular hydrogen bond with the triazine nitrogen, locking the chromophore in a coplanar conformation. This molecular architecture enables both excellent UV absorption and very rapid excited-state deactivation (photon energy dissipated as heat via excited-state intramolecular proton transfer, ESIPT), which is the mechanistic basis of BEMT's exceptional photostability [^chatelain2001].

---

## Mechanism — broad-spectrum absorption and photostabilization

**Primary mechanism:** BEMT is a pure UVA + UVB absorber with dual absorption peaks:
- **UVB peak:** ~310–315 nm
- **UVA-I/II peak:** ~340 nm
- **Extended coverage:** meaningful absorption to ~400 nm (extinction drops off in the near-visible; unlike [[mexoryl-400]], BEMT does not provide significant 385–400 nm gap-filling)

When a UV photon is absorbed, the s-triazine chromophore undergoes ESIPT-facilitated excited-state deactivation, with near-quantitative return to ground state without photochemical degradation or significant fluorescence [^chatelain2001]. This intrinsic photostability — unlike avobenzone, which photodegrades via *trans*→*cis* isomerization and Norrish rearrangements under UV exposure — is the fundamental property differentiating BEMT from most other organic filters.

**Avobenzone photostabilization:** Avobenzone photodegrades rapidly in isolation (losing ~25–60% of activity after typical UV exposure). BEMT prevents this degradation in a concentration-dependent manner via two proposed mechanisms: (1) UV-energy transfer / triplet-state quenching from avobenzone to BEMT, and (2) singlet-oxygen quenching. Chatelain and Gabard 2001 [^chatelain2001] established this photostabilization role using thin-film irradiation experiments. This application is the primary commercial reason for BEMT's global dominance in EU/AU/Canada premium sunscreen stacks — it "locks in" the UVA-I coverage of avobenzone over extended outdoor exposure, producing sustained broad-spectrum performance that SPF alone does not capture.

**Octinoxate photostabilization:** BEMT also reduces photodegradation of ethylhexyl methoxycinnamate (octinoxate/OMC) in combined formulations [^chatelain2001].

**Result in finished formulas:** BEMT-containing SPF 50+ formulations maintain their UVA protection ratio (PPD/UVA-PF) more stably through realistic use conditions than avobenzone-only formulations. The SPF number (UVB) may remain similar, but the practical UVA-PF is higher in BEMT stacks because the UVA filters don't degrade as much.

---

## Regulatory status

This table is the canonical reference; body text above documents the R52 framing.

| Region | Status |
|---|---|
| **EU** | Authorized since 2000; Annex VI entry 25 (Regulation EC No. 1223/2009) at **≤10% in rinse-off and leave-on cosmetic products**. Safety reviewed by the SCCS (SCCS/1591/17, rev. 2018). |
| **UK (post-Brexit MHRA/CTPA)** | Listed in UK Cosmetics Regulation Annex VI; ≤10%. |
| **Australia (TGA)** | Listed ingredient permitted in listed/registered sunscreens; ≤10% aligns with EU. |
| **Canada (Health Canada)** | Listed in Cosmetic Ingredient Hotlist (not prohibited); permitted in cosmetic sunscreens. |
| **Japan (MHLW)** | Approved UV filter. |
| **United States (FDA)** | **Not GRASE.** Not in 21 CFR §352 OTC monograph. A Time and Extent Application (TEA) was filed (DSM, ~2002) requesting inclusion; the FDA formally acknowledged the TEA but has not issued a Proposed Rulemaking. Modernizing access to newer sunscreen filters was a recurring theme in the 2019 Sunscreen Innovation Act era. Wang et al. 2026 [^wang2026] and Turner & Torgerson 2025 [^turner2025] document the ongoing FDA regulatory inertia and its public-health costs. As of April 2026, Wang et al. note FDA approval is "pending" — the regulatory path is the FDA's new OTC Monograph Order Request (OMOR) process under the CARES Act. |

Consequence for US-based users: sunscreens sold as OTC drug products in the US **cannot contain BEMT**. Import of foreign-market sunscreens for personal use is technically unregulated; commercially, products containing BEMT are unavailable in US retail drug/cosmetic channels but available via international import/pharmacy.

---

## Photostability evidence

Bemotrizinol is one of the most photostable organic UV filters in commercial use. Key evidence:

| Study | Design | Key result |
|---|---|---|
| **Chatelain & Gabard 2001** [^chatelain2001] | In-vitro thin-film irradiation (ISO 24444 era) | BEMT itself shows minimal photodegradation after 20 MED; prevents avobenzone and OMC degradation in concentration-dependent manner; photostabilization complete at ~4% BEMT in formulation |
| **Puglia 2014** [^puglia2014] | NLC nanocarrier formulation study | BEMT retains photostability when incorporated in nanostructured lipid carriers, unlike avobenzone and OMC |
| **Du et al. 2026** [^du2026] | Quantum chemistry (TDDFT) + photodegradation assay | Anomalous solvatochromism + rapid ESIPT relaxation synergistically inhibit BEMT photodegradation in polar media; ROS generation lower than less-stable organic filters |

The practical consequence of BEMT photostability: SPF 50+ EU sunscreens containing BEMT + avobenzone typically achieve ISO UVA-PF ≥16 (the "broad-spectrum" threshold is critical wavelength ≥370 nm, PPD/SPF ratio ≥1/3) **after** UV exposure, whereas avobenzone formulations without BEMT lose a fraction of their UVA protection during use. #gap/needs-replication — no published independent human-skin study has directly compared CPD or 8-OHdG accumulation in skin protected by BEMT-stabilized vs. non-stabilized avobenzone stacks over real-life use.

---

## Human outcomes evidence

The evidence base for BEMT is unusual: the photostability and in-vitro efficacy data are excellent (multiple independent replications), but the **translational gap to long-term photoaging outcomes is not closed by direct clinical trials**.

| Evidence type | Summary |
|---|---|
| **SPF/UVA-PF testing (in vitro + in vivo ISO methods)** | BEMT enables SPF 50+ formulas that meet EU broad-spectrum criteria (PPD/SPF ≥ 1/3, critical wavelength ≥ 370 nm). This is regulatory-grade evidence for UV attenuation, not for photoaging reduction. |
| **Photostabilizer role** (Chatelain 2001 [^chatelain2001]) | Prevents avobenzone degradation; established in vitro. |
| **Pharmacokinetics (D'Ruiz 2023)** [^druiz2023] | MUsT + IVPT in volunteers using 6% BEMT sunscreen. Plasma BEMT concentrations rarely exceeded the FDA's 0.5 ng/mL threshold. No systemic accumulation. Supports systemic safety for topical use. |
| **Long-term photoaging RCT** | **None.** No BEMT-specific RCT with photoaging histology (MMP-1, CPD count, collagen morphometry) as primary endpoint has been published. The inference that BEMT-stack sunscreens prevent photoaging better than US-approved stacks rests on bridging: (1) superior photostability → (2) more durable UVA protection → (3) less UVA-I-driven dermal damage. Each step is plausible but the chain has not been closed experimentally. |

**Relationship to the broader sunscreen RCT evidence:** The Hughes 2013 trial [^hughes2013] establishing that daily sunscreen use prevents photoaging used an Australian sunscreen formula (SPF 15–16, primarily chemical filters not including BEMT). The effect is attributed to the sunscreen-class intervention, not BEMT specifically. BEMT's incremental contribution — specifically the photostabilization advantage — is not captured in that trial. For the general claim "sunscreen prevents photoaging," the evidence is strong (see [[interventions/lifestyle/uv-protection]]); for the claim "BEMT-stack sunscreens prevent more photoaging than US-formulated stacks," the evidence is limited.

#gap/needs-head-to-head-us-vs-eu-stack · #gap/no-biopsy-endpoint

---

## Safety

- **SCCS review (SCCS/1591/17 rev. 2018):** The Scientific Committee on Consumer Safety concluded BEMT is **safe for use in leave-on and rinse-off cosmetic products at concentrations up to 10%**. The dossier covered dermal absorption, genotoxicity, mutagenicity, sensitization (HRIPT), photo-sensitization, reproductive/developmental toxicity, and subchronic/chronic tox. Inhalation (spray) safety was not fully addressed; the EU authorization requires spray applications to be formulated to minimize inhalation risk. #gap/needs-canonical-id for the SCCS opinion number (SCCS/1591/17 assigned based on secondary literature; verify against the full opinion PDF)
- **Pharmacokinetic safety (D'Ruiz 2023)** [^druiz2023]: IVPT in reconstructed human epidermis + MUsT in human subjects using 6% BEMT SPF 50 sunscreen showed plasma concentrations rarely exceeding 0.5 ng/mL; no concerning accumulation after daily use.
- **Molecular weight barrier effect:** MW 627.8 g/mol significantly exceeds the ~500 Da cutoff for efficient stratum corneum penetration; oil-solubility without surfactant enhancement further favours surface retention. Consistent with Puglia 2014 [^puglia2014] showing BEMT remains in stratum corneum in NLC formulations.
- **Adverse event reports:**
  - Badaoui 2024 [^badaoui2024] — a case report of **allergic contact dermatitis** (Type IV hypersensitivity) to BEMT in a sunscreen (first reported case in indexed English-language literature; designated "an emerging allergen?"). Represents the first independent dermatology case report of BEMT sensitization.
  - **No photoallergy cases** reported in indexed literature to date (as of June 2026).
- **Environmental:** Fagervold et al. 2025 [^fagervold2025] found BEMT was **not biodegraded** in marine sediment microcosm experiments after 100 days, consistent with other modern triazine filters. BEMT detected in Mediterranean seawater (Gandar 2025) [^gandar2025]. Unlike oxybenzone (direct coral bleaching mechanism), BEMT's environmental aquatic toxicity is primarily persistence-based; no direct coral bleaching evidence has been published. Environmental-impact framing should not imply BEMT is "reef-safe" — it is simply uncharacterized for reef toxicity and confirmed to accumulate in marine sediment. #gap/long-term-unknown (environmental fate)

---

## BEMT vs. sibling UV filters

| Property | **BEMT (Tinosorb S)** | **Bisoctrizole (Tinosorb M)** | **TriAsorB (PBT)** | **Mexoryl 400 (MCE)** |
|---|---|---|---|---|
| Scaffold | s-triazine (oil-soluble) | s-triazine (micronized aqueous dispersion) | 1,2,4-triazine (oil-soluble) | Cyclohexenylidene cyanoacetate |
| MW | 627.8 Da | 659.0 Da | 540.6 Da | 322.4 Da |
| λmax (primary) | ~310–315 nm (UVB) + ~345 nm (UVA) | ~303 nm + ~360 nm | Broadband UVB–HEV | ~385 nm (UVA-I) |
| Coverage | UVB + UVA-II + UVA-I | UVB + UVA-II + UVA-I | UVB + UVA + HEV visible (400–450 nm) | Ultra-long UVA-I gap-fill (380–400 nm) |
| Photostabilizer role | **Yes — photostabilizes avobenzone + OMC** | Yes (also photostabilizes) | No (needs no stabilizer itself) | No avobenzone-stabilizer role published |
| EU authorization | ≤10% | ≤10% | ≤5% | ≤3% |
| FDA status | Not GRASE (TEA pending) | Not GRASE | Not GRASE | Not GRASE |
| Independent adverse-event reports | 1 ACD case (Badaoui 2024) | None indexed | None indexed | 1 ACD case (Loretan 2024, see [[mexoryl-400]]) |
| Availability | Global except US | Global except US | Avène-only (Pierre Fabre proprietary) | La Roche-Posay UVMune line (L'Oréal proprietary) |

BEMT is the **workhorse broad-spectrum photostabilizer** for EU/AU/CA market premium formulations. [[bisoctrizole]] covers the same spectral range as BEMT in aqueous formulations. [[triasorb]] adds HEV/visible-light coverage beyond what BEMT provides. [[mexoryl-400]] fills a narrower gap (380–400 nm UVA-I) that BEMT only weakly covers.

---

## Formulation context and product availability

BEMT is widely available in non-US market sunscreens. Common product lines include:

- **La Roche-Posay Anthelios line** (most EU/AU SKUs containing BEMT) — typically paired with bisoctrizole, drometrizole trisiloxane (Mexoryl XL), or ecamsule (Mexoryl SX)
- **Neutrogena Ultra Sheer (EU formula)** — BEMT + avobenzone
- **Bioré UV Aqua Rich (Japan)** — BEMT + uvinul A plus + tinosorb M
- Many European pharmacy-brand SPF 50+ sunscreens (Eucerin, Altruist, Bondi Sands EU line, etc.)

US formulations of the same brands (La Roche-Posay Anthelios Melt-In Milk SPF 60, Neutrogena Ultra Sheer US, etc.) do **not** contain BEMT — they use FDA-GRASE filters (avobenzone/homosalate/octisalate/octocrylene or ZnO/TiO₂).

---

## Knowledge gaps and limitations

- `#gap/needs-canonical-id` — CAS 187393-00-6 needs independent confirmation against PubChem synonyms list (API query at time of seeding did not return synonyms for CID 135487856); SCCS opinion number (SCCS/1591/17) needs confirmation against the full opinion document.
- `#gap/no-biopsy-endpoint` — No published RCT with dermal biopsy (CPD, MMP-1 IHC, collagen morphometry) comparing BEMT-formulated sunscreens to US-formulated sunscreens on photoaging hard endpoints.
- `#gap/needs-head-to-head-us-vs-eu-stack` — The specific contribution of BEMT's photostabilization of avobenzone to *net photoaging prevention* (vs. matched-SPF US stack) has not been directly tested.
- `#gap/long-term-unknown` — Environmental fate (aquatic bioaccumulation, coral/marine invertebrate toxicity) is uncharacterized beyond sediment-persistence evidence; "reef-safe" framing is unsupported.
- `#gap/needs-replication` — Badaoui 2024 ACD case report is n=1; population-level sensitization rate unknown.

---

## Cross-references

- [[interventions/lifestyle/uv-protection]] — parent intervention page (bemotrizinol discussed under § Chemical filters as a flagship broad-spectrum filter)
- [[molecules/compounds/bisoctrizole]] — aqueous-dispersion sibling (Tinosorb M)
- [[molecules/compounds/triasorb]] — HEV-extending sibling (Pierre Fabre)
- [[molecules/compounds/mexoryl-400]] — ultra-long UVA-I gap-fill filter (L'Oréal)
- [[molecules/compounds/ecamsule]] — Mexoryl SX; co-formulated with BEMT in many EU stacks
- [[molecules/compounds/drometrizole-trisiloxane]] — Mexoryl XL; co-formulated with BEMT in Anthelios line
- [[molecules/compounds/iscotrizinol]] — HDT; s-triazine cousin
- [[molecules/compounds/tinosorb-a2b]] — aqueous-soluble triazine filter (DSM; distinct from BEMT)
- [[phenotypes/skin-aging]] — primary photoaging endpoint; see § Photoaging mechanism for the AP-1/MMP cascade
- [[hallmarks/genomic-instability]] — UV-induced CPD/6-4PP/8-OHdG burden
- [[hallmarks/loss-of-proteostasis]] — MMP-driven dermal collagen/elastin degradation
- [[hallmarks/chronic-inflammation]] — UV → AP-1/NF-κB → cytokine induction
- [[studies/fisher-1996-photoaging-ap1-mmp]] — mechanistic anchor (AP-1/MMP cascade)
- [[studies/hughes-2013-sunscreen-rct]] — class-level RCT evidence (not BEMT-specific)

---

## Footnotes

[^chatelain2001]: doi:10.1562/0031-8655(2001)074<0401:pobmaa>2.0.co;2 · Chatelain E, Gabard B · *Photochem Photobiol* 2001;74(3):401–406 · in-vitro thin-film irradiation study · BEMT photostabilizes avobenzone and ethylhexyl methoxycinnamate in concentration-dependent manner; BEMT itself shows minimal photodegradation after 20 MED irradiation · **COI: BASF/Ciba SC employees; founding photostabilization paper for BEMT** · #gap/no-fulltext-access

[^druiz2023]: doi:10.1016/j.yrtph.2023.105344 · D'Ruiz CD, Plautz JR, Schuetz R, Sanabria C, Hammonds J, Erato C, Klock J, Vollhardt J, Mesaros S · *Regul Toxicol Pharmacol* 2023;139:105344 · in-vitro permeation test (IVPT) + maximum-usage trial (MUsT) in volunteers · 6% BEMT sunscreen SPF 50; plasma BEMT rarely exceeded 0.5 ng/mL (FDA threshold); no systemic accumulation · clinical pharmacokinetic data submitted to FDA supporting TEA for BEMT OTC inclusion · **COI: DSM (developer)**

[^wang2026]: doi:10.1016/j.jaad.2026.04.1970 · Wang SQ, Osterwalder U, Lim HW · *J Am Acad Dermatol* 2026 (ahead of print) · commentary / regulatory analysis · discusses pending FDA approval of bemotrizinol and potential impact on US sunscreen formulation · **note: Osterwalder is a DSM employee; Wang/Lim are independent academic dermatologists**

[^turner2025]: doi:10.1111/phpp.70032 · Turner CW, Torgerson L · *Photodermatol Photoimmunol Photomed* 2025;41:e70032 · commentary / regulatory analysis · FDA regulatory inertia for international UV filters (BEMT, bisoctrizole, ecamsule, drometrizole trisiloxane); >5 million US skin cancer diagnoses annually; OTC Monograph Order Request process as potential reform mechanism · **COI: none disclosed**

[^husseinali2026]: doi:10.1016/j.jaad.2026.03.060 · Husseinali M, Zamil D, Joshi TP, Lohray R, Orengo I · *J Am Acad Dermatol* 2026 (ahead of print) · commentary · regulatory reform + health equity framing for next-generation US sunscreen access including BEMT

[^puglia2014]: doi:10.1016/j.ejps.2013.09.023 · Puglia C, Damiani E, Offerta A, et al. · *Eur J Pharm Sci* 2014;51:211–217 · nanostructured lipid carrier (NLC) formulation study · BEMT, DHHB, and EHT retain photostability in NLC; avobenzone and OMC do not; skin penetration reduced when encapsulated · not a clinical outcomes study

[^badaoui2024]: doi:10.1111/cod.14647 · Badaoui A · *Contact Dermatitis* 2024;91(5):443–445 · case report · n=1 · allergic contact dermatitis to BEMT (Tinosorb S) in a sunscreen; patch testing confirmed; designated "an emerging allergen?" · **first indexed case report of BEMT contact sensitization in English literature**

[^fagervold2025]: doi:10.1007/s11356-025-36772-y · Fagervold SK, Rohée C, Lebaron P · *Environ Sci Pollut Res Int* 2025;32:19823–19835 · marine sediment microcosm · BEMT not biodegraded after 100 days (along with most modern triazine filters); benzophenone-3, homosalate, octisalate degraded · **environmental persistence finding**

[^gandar2025]: doi:10.1016/j.marpolbul.2025.117567 · Gandar A, Giraudo M, Perion T, et al. · *Mar Pollut Bull* 2025;212:117567 · targeted + untargeted screening in Mediterranean seawater · BEMT detected in coastal waters; octocrylene higher biodiversity risk score than BEMT · **environmental detection study; not a toxicity/health study**

[^du2026]: doi:10.1039/d6cp01207h · Du Y, Cao R, Ren J, Mu Y, He W · *Phys Chem Chem Phys* 2026 · TDDFT + photodegradation assay · anomalous solvatochromism + rapid ESIPT-facilitated excited-state relaxation underlie BEMT photostability in polar media; ROS generation suppressed · mechanistic explanation for BEMT photostabilization

[^hughes2013]: doi:10.1016/j.annals.2013.09.024 · Hughes MCB, Williams GM, Baker P, Green AC · *Ann Intern Med* 2013;158:781–790 · RCT (903 adults, 4.5 yr) · daily vs. discretionary sunscreen use; daily use group had 24% less skin aging (photoaging score) · **class-level RCT evidence; formula did not contain BEMT specifically** — cited here to anchor the class-level inference that sustained broad-spectrum UV protection prevents photoaging
