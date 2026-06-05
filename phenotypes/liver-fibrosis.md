---
type: phenotype
aliases: [hepatic fibrosis, hepatic scarring, liver scarring]
icd-10: K74.0
icd-11: null # #gap/needs-canonical-id — WHO ICD-11 browser was not directly accessible during seeding; ICD-11 code for hepatic fibrosis (likely DA9Z.1 range) needs fresh verification against the ICD-11 Coding Tool
affected-tissues: ["[[liver]]"]
underlying-hallmarks:
 - "[[cellular-senescence]]"
 - "[[chronic-inflammation]]"
 - "[[altered-intercellular-communication]]"
 - "[[stem-cell-exhaustion]]"
typical-onset: "Depends on etiology; chronic injury from any cause over 5–20+ years; faster in older patients, heavy alcohol use, or metabolic disease"
prevalence-65plus: null # #gap/needs-canonical-id — clean population-wide fibrosis prevalence in 65+ is not available from a single authoritative source; advanced fibrosis in T2DM patients ~19.5% globally (Wongtrakul 2024, n=244,858); broader 65+ population figure unavailable
literature-checked-through: 2026-06-05
verified: true
verified-date: 2026-06-05
verified-by: claude
verified-scope: "Krizhanovsky 2008 (full PDF): mouse strain (7–9-wk female), p53-KO p=0.008, DKO p<0.01, NK ligands corrected to MICA+ULBP2, 20-day resolution timeline confirmed; #gap/no-fulltext-access tag removed. Bird 2018 (full PDF): 87% figure confirmed from ΔMdm2Hep model (not acetaminophen/CCl₄); footnote model corrected. Amor 2020 (full PDF): uPAR-CAR-T CCl₄ + NASH liver fibrosis models confirmed; NAB targeting confirmed. Li 2020 (full PDF): not cited on this page; no corrections needed here. Poynard 2001 and Pradat 2007: closed-access, full text inaccessible; rate claims (0.133 units/yr; 0.13/0.36 by infection age) unverifiable — tagged #gap/no-fulltext-access. ICD-11 browser not machine-accessible; #gap/needs-canonical-id retained. ICD-10 K74.0: standard clinical coding, not independently cross-checked against ICD-10-CM tabular."
---

# Liver Fibrosis

The pathological accumulation of excess extracellular matrix (ECM) — primarily type I and type III collagen — in the [[liver]] following chronic parenchymal injury. Liver fibrosis is not a single disease but a common final response to diverse insults: chronic alcohol use, viral hepatitis (HBV, HCV), [[masld|metabolic dysfunction-associated steatotic liver disease (MASLD)]], autoimmune hepatitis, cholestatic disease, and others. It progresses through defined stages from mild portal fibrosis through bridging fibrosis to cirrhosis — the irreversible reorganization of hepatic architecture into regenerative nodules encircled by fibrotic bands. Critically, fibrosis is reversible in its pre-cirrhotic stages; cirrhosis is largely not [^arthur2002].

Aging lowers the threshold for fibrosis development and accelerates progression: fibrosis rates increase with age at infection across all studied chronic liver diseases, and fibrosis resolution after injury removal is slower and less complete in older patients [^pradat2007][^poynard2001]. The cellular mechanism of fibrosis — [[hepatic-stellate-cells|hepatic stellate cell (HSC)]] activation to collagen-producing myofibroblasts — is directly modulated by cellular senescence in ways that both limit and sustain fibrosis depending on context.

---

## Staging systems

### METAVIR (hepatitis C; most widely used)

The METAVIR system was developed to standardize assessment of chronic hepatitis C on liver biopsy [^metavir1994]. It assigns a fibrosis score (F0–F4) and activity score (A0–A3):

| METAVIR Stage | Histology | Clinical significance |
|---|---|---|
| F0 | No fibrosis | Normal |
| F1 | Portal fibrosis without septa | Mild; low progression risk |
| F2 | Portal fibrosis with rare septa | Significant fibrosis |
| F3 | Numerous septa without cirrhosis | Bridging fibrosis; high progression risk |
| F4 | Cirrhosis | Irreversible reorganization; portal hypertension risk |

Stages F0–F3 are considered pre-cirrhotic and potentially reversible with treatment of the underlying cause. Stage F4 (cirrhosis) involves extensive architectural remodeling that is largely irreversible, though compensated cirrhosis can be stabilized and decompensation prevented [^bataller2005].

### Ishak score (6-point scale)

The Ishak scoring system provides finer resolution (0–6 stages), especially useful for clinical trials and capturing partial regression. Ishak stages 5–6 correspond to cirrhosis. The broader Ishak scale is more sensitive to change in intervention studies.

### Non-invasive alternatives

Liver biopsy is the historical gold standard but is invasive and subject to sampling error. Non-invasive markers now in clinical use include:
- **Vibration-controlled transient elastography (FibroScan)** — liver stiffness (kPa) correlates with fibrosis stage
- **FIB-4 index** — combines age, platelet count, AST, ALT; age is an explicit component (FIB-4 = [Age × AST] / [Platelets × √ALT]), meaning FIB-4 rises with age independently of fibrosis [^gap-fib4-age] 
- **APRI** (AST-to-platelet ratio index)
- **Enhanced Liver Fibrosis (ELF) panel** — serum markers of matrix turnover (TIMP-1, PIIINP, hyaluronic acid)

The age-dependence of FIB-4 is clinically relevant: older patients have systematically higher FIB-4 scores that may overestimate fibrosis stage. Adjusted thresholds for patients ≥65 years have been proposed. #gap/needs-replication — the optimal FIB-4 cutoff for older adults is not yet standardized across guidelines.

---

## Mechanism — hepatic stellate cell activation

The central cellular mechanism of liver fibrosis is [[hepatic-stellate-cells|hepatic stellate cell (HSC)]] activation. HSCs reside in the perisinusoidal space of Dissé in a quiescent state, storing vitamin A as retinyl esters. Upon injury, a sequence of paracrine signals — primarily from damaged hepatocytes (DAMPs, HMGB1, reactive oxygen species), activated [[kupffer-cells|Kupffer cells]] (TGF-β1, PDGF-BB, TNF-α), and [[liver-sinusoidal-endothelial-cells|LSECs]] losing their quiescence-maintaining NO signal — drives HSC activation [^bataller2005]:

1. **Initiation**: DAMPs from dead hepatocytes activate Kupffer cells via TLR4/TLR9; lipid peroxidation products (4-HNE, MDA) from steatotic hepatocytes directly activate HSC
2. **Perpetuation via TGF-β1**: Kupffer-cell-derived TGF-β1 binds TGFβRII/TGFβRI → SMAD2/3 phosphorylation → nuclear translocation → transcription of COL1A1, COL1A2, ACTA2 (αSMA), TIMP-1 (which suppresses collagenase activity), and PAI-1
3. **Perpetuation via PDGF**: PDGF-BB → PDGFRB → PI3K/AKT → HSC proliferation and chemotaxis
4. **Activated HSC autocrine loops**: TGF-β1 and PDGF-BB produced by activated HSCs reinforce activation in a feed-forward manner

The net result is sustained collagen I/III deposition combined with suppressed ECM degradation (TIMP-1 inhibits MMPs) — producing progressive scar accumulation.

**Mechanistic depth resides on [[hepatic-stellate-cells]].** This page summarizes the pathway; the HSC page carries the full activation cascade, marker biology, and NK-cell clearance mechanisms.

---

## The senescence paradox

A central complexity in liver fibrosis biology is the **dual role of cellular senescence** in HSCs [^krizhanovsky2008][^zhangsena2021]:

### Senescence limits fibrosis (Krizhanovsky 2008)

In CCl₄-induced mouse liver fibrosis (7–9-week-old female C57BL/6 mice), activated HSCs spontaneously enter a senescent state (p21+/p16+, reduced proliferation). Critically, mice with impaired HSC senescence (p53 knockout, p=0.008 vs WT; or DKO p53/INK4a-ARF, p<0.01 vs WT) developed **more severe fibrosis** — demonstrating that senescent HSCs are anti-fibrotic per cell (reduced collagen synthesis) and are efficiently cleared by NK cells via NKG2D (ligands MICA and ULBP2) and TRAIL pathways, allowing fibrosis resolution; in WT animals fibrosis was almost undetectable by 20 days post-CCl₄ [^krizhanovsky2008].

| Dimension | Status |
|---|---|
| HSC senescence limits fibrosis conserved in humans? | partial — confirmed in human MASH liver by snRNA-seq [^yashaswini2024]; CCl₄ mechanism is rodent; extrapolation to other etiologies partial |
| NK clearance of senescent HSCs in humans? | partial — NKG2D/TRAIL mechanism confirmed in human HSC co-culture; in-vivo human demonstration lacking |
| Replicated beyond CCl₄ model? | not fully — single etiology (CCl₄) in the Krizhanovsky study; extension to MASH, viral, alcoholic fibrosis requires model-specific confirmation |

### SASP sustains fibrosis (the other side)

Senescent HSCs, while producing less collagen themselves, secrete a SASP (IL-6, IL-8, MMP-3, TGF-β, PAI-1) that can sustain activation of neighboring non-senescent HSCs and amplify hepatic inflammation. The net balance between these effects depends on context:

| Context | Dominant effect |
|---|---|
| Acute/resolving fibrosis, intact NK surveillance | Anti-fibrotic: reduced HSC collagen + NK clearance permits resolution |
| Chronic fibrosis + impaired NK activity (as in aging) | Pro-inflammatory: SASP sustains paracrine activation; senescent cells accumulate |
| Advanced cirrhosis / HCC microenvironment | SASP cytokines (IL-6, TNF-α, EGF) contribute to tumor-permissive state |

### CAR T cell targeting of senescent cells in fibrosis

Amor et al. 2020 demonstrated in mouse models that CAR T cells targeting uPAR (a senescent-cell surface marker) efficiently eliminated senescent cells and **reversed fibrosis markers** in both chemically-induced and diet-induced liver fibrosis models [^amor2020]. This proof of concept aligns with the prediction from the Krizhanovsky framework: clearing the SASP-secreting senescent HSC population restores a resolution-competent microenvironment. #gap/needs-human-replication — both studies are mouse-only; no human liver fibrosis senolytic CAR T trial exists as of 2026-06-05.

---

## Fibrosis reversibility

Liver fibrosis is reversible in pre-cirrhotic stages; cirrhosis (F4 / Ishak 5–6) is largely not, though decompensation can be prevented [^arthur2002].

**Mechanisms of reversal:**
- Removal of the injurious stimulus (viral clearance, alcohol cessation, weight loss) eliminates the pro-fibrogenic signal
- Activated HSC apoptosis (Fas/FasL, TRAIL signaling) clears myofibroblasts
- NK-cell-mediated clearance of remaining activated and senescent HSCs
- MMP reactivation (restored when TIMP-1 declines) degrades accumulated ECM

**Human evidence for reversibility:**
- Post-HCV-SVR with direct-acting antivirals: paired biopsy studies consistently show fibrosis regression in F2–F3 patients; some F4 (compensated cirrhosis) patients show partial regression over years, but absolute cirrhosis reversal is uncommon
- In MASLD: weight loss ≥10% of body weight is associated with fibrosis improvement on paired biopsy in clinical trials

**Limits:** In advanced cirrhosis (F4), the formation of regenerative nodules, vascular remodeling (porto-systemic shunts), and the loss of normal hepatic architecture are not reversed even with complete cessation of the injury. The critical threshold beyond which reversibility is lost is not precisely defined.

---

## Aging and the fibrosis threshold

Aging independently lowers the threshold for fibrosis development and accelerates its rate of progression through several converging mechanisms:

### Age accelerates fibrosis progression in chronic liver disease

Older age at infection is an independent risk factor for faster fibrosis progression across all studied chronic liver diseases. In 2,313 untreated HCV patients, Poynard et al. found that "the majority of fibrosis progression occurred in those aged fifty years or older," with older age at infection being one of three independent acceleration factors alongside heavy alcohol use and male sex [^poynard2001]. Pradat et al. confirmed an age-dependent progression pattern in 247 untreated HCV patients: untreated, most patients are expected to develop cirrhosis by approximately age 65, with faster per-year progression rates in those infected at older ages [^pradat2007].

### Mechanisms — why aging accelerates fibrosis

1. **LSEC pseudocapillarization lowers HSC activation threshold.** Age-related loss of LSEC fenestrae and subendothelial collagen deposition disrupts constitutive NO-mediated HSC quiescence signals, making HSCs more readily activated by the same injurious stimuli (see [[liver]] § LSEC section). #gap/needs-human-replication — direct mechanistic demonstration of pseudocapillarization-driven threshold lowering in aged human liver is lacking; inference from rodent models [^bataller2005]

2. **Accumulation of senescent hepatocytes amplifies the SASP-driven profibrogenic environment.** Senescent hepatocytes (accumulating with age and chronic injury) produce TGF-β, IL-6, and PAI-1 that activate HSCs. Paracrine senescence spread via TGF-β — whereby SASP from initially senescent hepatocytes induces senescence in adjacent cells — further expands the profibrotic milieu [^bird2018]. In a hepatocyte-specific Mdm2-deletion (ΔMdm2Hep) mouse model of hepatocellular senescence, macrophage ablation reduced hepatic TGFβ1 expression by 87%, establishing macrophage-derived TGFβ1 as the principal driver of paracrine senescence spread to uninjured hepatocytes; blocking TGFβR1 restored regeneration and improved survival in acetaminophen-injury models [^bird2018]. #gap/needs-human-replication — paracrine-senescence-driven fibrosis amplification is established in mouse acute liver injury models; direct human mechanistic data are limited to biopsy histology

3. **Impaired fibrosis resolution in aged liver.** The same NK-cell immunosenescence that allows senescent cells to persist also impairs the NK-mediated clearance of senescent HSCs that drives fibrosis resolution (see [[hepatic-stellate-cells]] § Fibrosis resolution). Post-injury HSC apoptosis rates may also be reduced in aged liver; this has not been directly quantified in humans. #gap/unsourced — direct quantitative comparison of fibrosis resolution kinetics by age in humans using paired biopsies

4. **Blunted regeneration shifts repair toward scarring.** As hepatocyte regenerative capacity declines with age (see [[liver]] § Declining regenerative capacity), the liver's default response to injury shifts from regeneration-dominant toward fibrosis-dominant repair. In aged mouse liver, partial hepatectomy produces less proliferative response and more collagen deposition relative to young adults [^bataller2005].

5. **FIB-4 score systematically overestimates fibrosis in older patients.** Because age is an explicit term in the FIB-4 formula, older patients (≥65) have elevated FIB-4 scores even at equivalent histological fibrosis stages — a clinical measurement artefact that can lead to overdiagnosis and inappropriate treatment escalation. #gap/dose-response-unclear — optimal age-adjusted FIB-4 thresholds are under active study

---

## Progression to hepatocellular carcinoma

Advanced fibrosis and cirrhosis are the dominant risk factors for [[hepatocellular-carcinoma|hepatocellular carcinoma (HCC)]]. Incidence of HCC rises steeply in cirrhotic patients (annual incidence ~2–4% in viral-etiology cirrhosis). The mechanism is multi-factorial:

- Cirrhotic regenerative nodules accumulate genomic instability via repeated replication cycles after hepatocyte death
- SASP from senescent HSCs (and senescent hepatocytes) creates a tumor-permissive microenvironment via IL-6, TNF-α, and growth factors
- Immunosenescence of NK and cytotoxic T cells impairs surveillance of senescent (potentially pre-neoplastic) hepatocytes
- Portal hypertension (a consequence of cirrhosis-related vascular remodeling) itself promotes genomic instability in hepatocytes under chronic hypoxic stress

For HCC-specific content, see [[hepatocellular-carcinoma]].

---

## Relationship to MASLD

[[masld|MASLD]] (metabolic dysfunction-associated steatotic liver disease) is the dominant etiology of chronic liver disease in aging populations. MASLD-associated fibrosis follows the same HSC-driven mechanism but with additional metabolic amplifiers:
- Lipid peroxidation products from steatotic hepatocytes (4-HNE, MDA) are potent HSC activators
- Hepatocyte senescence secondary to ER stress and oxidative damage in steatotic cells amplifies the SASP-driven profibrogenic signal
- Insulin resistance sustains Kupffer cell inflammatory activation via portal LPS sensitization
- Senescence-associated 13-HODE (produced by senescent hepatocytes/macrophages) inhibits catalase and activates SREBP1-mediated lipogenesis, sustaining the lipotoxic environment that drives HSC activation [^duan2023]

Advanced fibrosis prevalence in type-2 diabetes patients is approximately 19.5% globally, varying by region (up to 60.5% in West Asia populations) [^wongtrakul2024]. This underlines the intersection of metabolic disease, aging, and fibrosis burden.

---

## Hallmark connections

| Hallmark | Mechanism in liver fibrosis |
|---|---|
| [[cellular-senescence]] | Senescent HSCs paradoxically limit fibrosis (reduced collagen) but sustain SASP-driven profibrogenic signaling; senescent hepatocytes amplify HSC activation via TGF-β SASP; accumulation with age impairs fibrosis resolution |
| [[chronic-inflammation]] | Kupffer cell inflammaging (NF-κB, IL-6, TNF-α) provides sustained TGF-β1 and PDGF-BB to HSCs; SASP from senescent cells amplifies hepatic inflammatory tone |
| [[altered-intercellular-communication]] | Paracrine senescence relay (hepatocyte → HSC via HMGB1 and TGF-β); LSEC-to-HSC quiescence signals lost with pseudocapillarization; senescent HSC SASP drives non-autonomous HSC activation |
| [[stem-cell-exhaustion]] | Age-related decline in hepatocyte regenerative capacity shifts injury-repair balance from regeneration toward fibrosis; HSC senescence impairs the cellular machinery of fibrosis resolution |

---

## Therapeutic landscape

No anti-fibrotic therapy has been approved specifically for liver fibrosis independent of the underlying disease treatment. The field strategy is:

1. **Remove the cause** (antiviral therapy, alcohol abstinence, weight loss) — fibrosis regression follows in pre-cirrhotic stages
2. **Suppress HSC activation** (TGF-β/PDGF pathway inhibitors) — multiple clinical-stage candidates; pleiotropic effects limit efficacy
3. **Clear senescent HSCs** — uPAR/CD206-targeted senolytics (preclinical only) [^amor2020][^yashaswini2024]
4. **Restore NK surveillance** — impaired NK-mediated HSC clearance is an actionable gap #gap/long-term-unknown
5. **Partial epigenetic reprogramming** — mRNA-LNP-OSK delivery to hepatocytes partially reversed fibrosis markers in a mouse model; early-stage preclinical [^zhang2026osk]

**Status:** No HSC-specific or fibrosis-specific therapy has completed a phase 3 trial for a pure anti-fibrotic indication. The field waits on MASLD/MASH anti-fibrotic trials (obeticholic acid, resmetirom, lanifibranor) that include fibrosis as a primary endpoint — see [[masld]] for updates.

---

## Limitations and gaps

- `#gap/needs-canonical-id` — ICD-11 code for hepatic fibrosis not confirmed; WHO ICD-11 browser not directly accessible during seeding; verify against ICD-11 Coding Tool
- `#gap/needs-canonical-id` — clean prevalence-65plus figure from a single authoritative source is unavailable; best available is advanced-fibrosis-in-T2DM (~19.5%) not age-specific population-wide fibrosis
- `#gap/needs-human-replication` — all major mechanistic claims (LSEC pseudocapillarization → HSC threshold lowering; paracrine senescence spread via TGF-β; NK-mediated senescent HSC clearance in vivo; CAR T uPAR fibrosis reversal) are established primarily in rodent models
- `#gap/needs-replication` — Krizhanovsky 2008 senescence-limits-fibrosis finding established in CCl₄ model only; model-specific replication in MASLD, alcoholic, and viral fibrosis contexts required
- `#gap/unsourced` — direct quantitative comparison of fibrosis resolution kinetics by age in humans (paired biopsy studies stratified by age)
- `#gap/dose-response-unclear` — optimal age-adjusted FIB-4 thresholds for patients ≥65 years not yet standardized across major hepatology guidelines
- `#gap/long-term-unknown` — long-term anti-fibrotic efficacy and safety of senolytic approaches (CAR T, pharmacological senolytics) in human liver fibrosis are unknown

---

## Cross-references

- [[liver]] — verified tissue page; fibrosis is the canonical hepatic aging phenotype; pseudocapillarization, HSC senescence, and SASP sections are relevant
- [[hepatic-stellate-cells]] — the mechanistic partner page; HSC activation cascade, marker biology, Krizhanovsky senescence paradox, NK clearance, and Yashaswini 2024 are fully developed there
- [[kupffer-cells]] — paracrine source of TGF-β1 and PDGF-BB driving HSC activation (stub)
- [[liver-sinusoidal-endothelial-cells]] — quiescence-maintaining niche neighbors lost with pseudocapillarization (stub)
- [[masld]] — dominant upstream etiology in aging populations (stub)
- [[hepatocellular-carcinoma]] — downstream complication of cirrhosis (stub)
- [[tgf-beta]] — master profibrogenic pathway
- [[cellular-senescence]] — hallmark; dual-context fibrosis paradox
- [[chronic-inflammation]] — hallmark; Kupffer cell and SASP contributions
- [[altered-intercellular-communication]] — hallmark; paracrine senescence relay
- [[processes/senescence-immune-surveillance]] — NK cell clearance of senescent HSCs
- [[sasp]] — SASP composition of senescent HSCs; fibrosis-sustaining vs resolution signals

---

## Footnotes

[^bataller2005]: doi:10.1172/JCI24282 · Bataller R, Brenner DA · "Liver fibrosis" · J Clin Invest 115(2):209-218 · 2005 · review· foundational review covering HSC activation by TGF-β and PDGF, fibrosis epidemiology including age as risk factor, LSEC niche signals, and fibrosis staging

[^krizhanovsky2008]: doi:10.1016/j.cell.2008.06.049 · Krizhanovsky V, Yon M, Dickins RA, Hearn S, Simon J, Miething C, Yee H, Zender L, Lowe SW · "Senescence of Activated Stellate Cells Limits Liver Fibrosis" · Cell 134(4):657-667 · 2008 · in-vivo · model: CCl₄ liver fibrosis, 7–9-wk female mice; p53-KO (p=0.008 vs WT), p53/INK4a-ARF DKO (p<0.01 vs WT) · key finding: impaired HSC senescence worsens fibrosis; senescent HSCs reduced collagen synthesis and were cleared by NK cells via NKG2D (ligands MICA + ULBP2) and TRAIL; WT fibrosis near-undetectable by 20 days post-CCl₄ cessation

[^zhangsena2021]: doi:10.1016/j.mad.2021.111572 · Zhang M, Serna-Salas S, Damba T, Borghesan M, Demaria M, Moshage H · "Hepatic stellate cell senescence in liver fibrosis: Characteristics, mechanisms and perspectives" · Mech Ageing Dev 199:111572 · 2021 · review· covers senescent HSC dual pro- and anti-fibrotic roles, SASP composition, detection methods, and therapeutic perspectives

[^yashaswini2024]: doi:10.1016/j.jhep.2024.03.014 · Yashaswini CN, Qin T, Bhattacharya D, et al. (Friedman SL corresponding) · "Phenotypes and ontogeny of senescent hepatic stellate cells in metabolic dysfunction-associated steatohepatitis" · J Hepatol 81(2):207-217 · 2024 · observational (snRNA-seq + flow cytometry + IHC) · model: human MASH liver biopsies · key finding: uPAR and CD206 identify senescent HSCs arising from activated (not quiescent) HSCs; these cells have reduced COL1A1 and are candidate senolytic targets · #gap/no-fulltext-access

[^poynard2001]: doi:10.1016/s0168-8278(00)00097-0 · Poynard T, Ratziu V, Charlotte F, Goodman Z, McHutchison J, Albrecht J · "Rates and risk factors of liver fibrosis progression in patients with chronic hepatitis C" · J Hepatol 34(5):730-739 · 2001 · observational · n=2,313 untreated HCV patients · key finding: fibrosis progression concentrated in patients ≥50 years; older age at infection, heavy alcohol (≥50 g/day), and male sex were three independent acceleration factors; rate estimates: 0.133 METAVIR units/year overall · #gap/no-fulltext-access — closed-access; quantitative rates unverified against full text

[^pradat2007]: doi:10.1111/j.1478-3231.2006.01430.x · Pradat P, Voirin N, Tillmann HL, Chevallier M, Trépo C · "Progression to cirrhosis in hepatitis C patients: an age-dependent process" · Liver Int 27(3):335-339 · 2007 · observational · n=247 untreated HCV patients · key finding: untreated HCV patients are expected to develop cirrhosis at approximately age 65 irrespective of infection age; progression rate increased with older age at infection (0.13 METAVIR units/year for infection ≤19 yr vs 0.36 units/year for infection ≥37 yr) · #gap/no-fulltext-access — closed-access; quantitative rates unverified against full text

[^arthur2002]: doi:10.1053/gast.2002.33367 · Arthur MJP · "Reversibility of liver fibrosis and cirrhosis following treatment for hepatitis C" · Gastroenterology 122(5):1525-1528 · 2002 · review· key finding: pre-cirrhotic fibrosis is reversible after successful hepatitis C treatment; cirrhosis reversal is limited; mechanism involves MMP reactivation and HSC apoptosis after stimulus removal

[^metavir1994]: PMID:8020885 · French METAVIR Cooperative Study Group · "Intraobserver and interobserver variations in liver biopsy interpretation in patients with chronic hepatitis C" · Hepatology 20(1) · 1994 · observational · n=30 biopsies, 10 pathologists · established reproducibility of METAVIR staging system; five features including fibrosis showed "almost perfect or substantial" concordance

[^bird2018]: doi:10.1126/scitranslmed.aan1230 · Bird TG, Müller M, Boulter L et al. · "TGFβ inhibition restores a regenerative response in acute liver injury by suppressing paracrine senescence" · Sci Transl Med 10(454):eaan1230 · 2018 · in-vivo · model: mouse ΔMdm2Hep (hepatocyte-specific Mdm2 deletion via AAV8-TBG-Cre) + acetaminophen + CCl₄ injury models + human acute liver failure biopsies · key finding: macrophage ablation in ΔMdm2Hep model reduced hepatic TGFβ1 expression by 87%, establishing macrophage-derived TGFβ1 as principal driver of paracrine senescence spread to uninjured hepatocytes; TGFβR1 blockade restored regeneration and improved survival in acetaminophen model; human biopsy evidence of hepatocyte senescence proportional to disease severity

[^amor2020]: doi:10.1038/s41586-020-2403-9 · Amor C, Feucht J, Leibold J, et al. · "Senolytic CAR T cells reverse senescence-associated pathologies" · Nature 583(7814):127-132 · 2020 · in-vivo · model: mouse CCl₄-induced liver fibrosis + diet-induced fibrosis + lung fibrosis + other senescence models · key finding: uPAR-targeting CAR T cells efficiently eliminated senescent cells; restored tissue function and reversed fibrosis markers in liver models

[^duan2023]: doi:10.1038/s41467-023-44026-z · Duan J, Dong W, Wang G et al. · "Senescence-associated 13-HODE production promotes age-related liver steatosis by directly inhibiting catalase activity" · Nat Commun 14(1):8151 · 2023 · in-vivo + in-vitro · model: aged mouse + primary hepatocytes · key finding: senescent hepatocytes/macrophages secrete 13-HODE via ALOX15, directly inhibiting catalase (KD ~2.4 µM) and activating SREBP1-mediated lipogenesis, providing a mechanistic link between hepatocyte senescence, lipotoxicity, and HSC-activating oxidative environment

[^wongtrakul2024]: doi:10.1111/jgh.16666 · Wongtrakul W, Niltwat S, Charatcharoenwitthaya P, Karaketklang K, Charatcharoenwitthaya P · "Global prevalence of advanced fibrosis in patients with type 2 diabetes mellitus: a systematic review and meta-analysis" · J Gastroenterol Hepatol 39(11) · 2024 · meta-analysis · n=244,858 patients across 113 studies · key finding: global prevalence of advanced fibrosis in T2DM patients 19.5%; significant regional variation (West Asia 60.5%, North America 15.8%)

[^zhang2026osk]: doi:10.1016/j.jconrel.2025.114569 · Zhang C, Bai Y, Yin Q, Li J, Huang K, Qiu M · "Hepatocyte-specific partial cellular reprogramming via selective OSK mRNA lipid nanoparticle attenuates liver fibrosis" · J Control Release 379:114569 · 2026 · in-vivo · model: mouse liver fibrosis · key finding: H4T3_F6 ionizable LNP carrying OSK mRNA transiently reprogrammed fibrotic hepatocytes to a progenitor-like state, reducing fibrogenic mediators and ECM deposition; proof-of-concept for mRNA-LNP partial reprogramming in fibrosis · #gap/needs-replication

[^gap-fib4-age]: #gap/unsourced — age-dependence of FIB-4 overestimating fibrosis in ≥65 year olds is clinically recognized but the specific adjusted cutoffs vary by publication; a single primary citation for the proposed ≥65 threshold adjustment needs to be identified and cited here
