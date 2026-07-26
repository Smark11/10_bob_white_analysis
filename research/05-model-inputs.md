# Financial Model Inputs — 10 Bob White Way (Iteration 2 synthesis, computed 2026-07-26)

## Mortgage inference (the swing variable)

Purchase: **Aug 7-10, 2020, $310,000** (VERIFIED, assessor + MLS). Freddie PMMS Aug 2020 ≈ 2.88–2.99% (pending exact verification). Scenarios (30-yr fixed, 71 payments elapsed through Jul 2026):

| Down | Loan | Rate | P&I/mo | Balance Jul 2026 | Term left |
|---|---|---|---|---|---|
| 20% | $248,000 | 2.9% | $1,032 | $214,512 | ~24.1 yr |
| 20% | $248,000 | 3.0% | $1,046 | $214,981 | ~24.1 yr |
| 10% | $279,000 | 3.0% | $1,176 | $241,854 | ~24.1 yr |
| 5% | $294,500 | 3.0% | $1,242 | $255,290 | ~24.1 yr |

**Model defaults: balance $215,000 @ 2.95%, 24 yr left** (20% down assumption; INFERRED — flag prominently; refi/cash-out/ARM unknown).

Rate penalty of moving: at today's 6.58% vs 2.95%, **+$216/mo per $100K borrowed (~$3,580/yr per $100K)** — steeper than the Clover Lane case (~$197).

## Value

- Redfin AVM $552,806 (VERIFIED) vs street's last arm's-length comp $452,500 (Dec 2024, 25 BWW — a LARGER 2,409 sf colonial).
- Street sales trajectory: 6 BWW (near-twin raised ranch, 1,512 sf) $375,000 Apr 2021; 17 BWW (1,854 sf RR) $410,000 Oct 2021; 21 BWW (1,963 sf colonial) $400,000 Jul 2023; 25 BWW (2,409 sf colonial) $452,500 Dec 2024.
- Simsbury median sold rose to $575K (Jun 2026); ZHVI +7.4% YoY. 6 BWW at $375K Apr 2021 + ~30-35% town appreciation since ≈ $490-505K for a near-twin (INFERRED).
- **Model default currentValue: $500,000** (range $460–553K). The AVM is the high edge; comp-anchored ~$470-500K.
- **Street ceiling**: best house on street (2,475 sf colonial) appraised $408K in 2022 ≈ $560-600K market today (INFERRED via ~1.45-1.5× reval-to-market drift). Defensible post-project value ceiling ≈ **$575-625K**; spend ceiling ≈ $100-150K.

## Taxes — improved treatment vs old model

- FY25-26 bill: **$7,960** (VERIFIED) = assessed $233,030 × 34.16 mills. FY26-27 ≈ $8,113 (33.67 town + ~1.14 fire, INFERRED).
- Assessments date to the **2022 revaluation** → effective tax on MARKET value ≈ $7,960/$500K ≈ **1.6%**, NOT 70%×34.8 mills (2.44%) — the old model overstated new-home taxes by ~50%. A $700K purchase (similar vintage) carries a 2022-based assessment too → est. ~$11.1K/yr, not $17.1K.
- Model: use `effTaxRate ≈ 0.016` of market value for the new-home tax; keep 70%×mills only for the ADDITION's added assessment (new construction is assessed at ~70% of added value: interim assessment CGS 12-53a — verify). Addition tax drag: $100K added value → +$2,437/yr at 34.81 mills.
- Reval risk: next Simsbury reval ~Oct 2027 (5-yr cycle from 2022) — assessments jump toward market; affects ALL options roughly proportionally.

## Move scenario (Option B) baseline

- Sell $500K − 5.5% costs = $472,500 net; − $215K payoff = **$257,500 freed equity**.
- Buy $700K: − 2% buy costs → down $243,500, loan $456,500 @ 6.58% → **P&I $2,909/mo** (vs current ~$1,032-1,046).
- Sunk transaction cost ≈ $27.5K sell + $14K buy ≈ **$41,500** round trip.
- New tax ≈ $11.1K/yr (+$3.2K/yr vs today). 
- Monthly delta ≈ +$1,880 P&I + $265 tax ≈ **+$2,100/mo total** for ~+1,300-1,800 sqft.

## Wait scenario (Option C)

- Forecasts: Fannie 6.2-6.3% 2027; MBA ~6.5% through 2028. Waiting 2 yrs buys ~20-40bp; prices +4-7%/yr compound on a larger base. Same structure as Clover Lane: weak option.

## Financing an addition (from 02-addition-costs)

- Home-equity loan 7.36–8.08% fixed; HELOC ~7.43%. Model `heRate: 7.75`, 15-yr term.
- CLTV check: $500K × 80% = $400K − $215K = **$185K second-lien headroom** at 80% CLTV (~$235K at 90%). A $100-150K project is comfortably financeable WITHOUT touching the 2.95% first — unlike Clover Lane, no CLTV gate at the recommended scope.

## Model defaults (draft for data.js `model`)

```
currentValue: 500000, currentBalance: 215000, currentRate: 2.95, currentTermLeft: 24,
todayRate: 6.6, additionCost: 120000, additionRecoup: 55, heRate: 7.75, heTerm: 15,
newHomePrice: 700000, appreciation: 4.0, investReturn: 7.0, horizon: 10,
millRate: 0.03481, assessRatio: 0.70, effTaxRate: 0.0159, currentTax: 8113,
insurance: 2600 (pending verification), maintRate: 0.01,
sellCostPct: 0.055, buyCostPct: 0.02, waitYears: 2, waitApprNew: 4.5, waitRate: 6.3
```

## The core thesis shape (parallel to Clover Lane, sharper here)

1. Already in Latimer zone (top 5% CT, $39M-renovated, walkable) — moving buys zero school upgrade; leaving the zone is a downgrade.
2. Likely ~2.9-3.0% mortgage — deeper handcuffs than Clover Lane; moving re-prices to 6.6% (+$216/mo per $100K).
3. Family of 4 already has 4BR/3 FULL baths — the gap is above-grade LIVING space (1,505 sf), not bedrooms — an addition can target exactly that.
4. Street ceiling (~$575-625K post-project) caps defensible spend near $100-150K; the house was bought at $310K with ~$285K equity.
5. Move-up costs ~$41.5K friction + rate reset (~$60-70K PV on the balance) + ~$3.2K/yr tax step — hurdle ≈ $110-140K before the bigger house itself.
```
