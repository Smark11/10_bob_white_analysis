# Simsbury CT Market Research — Raw Data Report (Iteration 1)

**Research date: 2026-07-26. Confidence flags: VERIFIED (page fetched directly or exact figure in retrieved source), VERIFIED-SNIPPET (figure from search-result summary of a real page), INFERRED, UNVERIFIED.**

## 1. MORTGAGE RATES (as of 2026-07-23 to 2026-07-26)

**Freddie Mac PMMS** (fetched directly, https://www.freddiemac.com/pmms) — VERIFIED
- 30-yr fixed: **6.58%** (week of Jul 23, 2026); prior week 6.55%; year-ago 6.74%
- 15-yr fixed: **5.96%** (Jul 23, 2026)
- July 2026 weekly track (VERIFIED-SNIPPET): Jul 2 = 6.43% (7-week low), Jul 9 = 6.49%, Jul 16 = 6.55%, Jul 23 = 6.58% — drifting UP through July. Sources: https://freddiemac.gcs-web.com/news-releases/news-release-details/mortgage-rates-average-655, https://www.foxbusiness.com/economy/mortgage-rates-july-16-2026

**Mortgage News Daily daily index** (fetched directly, https://www.mortgagenewsdaily.com/mortgage-rates, dated Jul 24, 2026) — VERIFIED
- 30-yr fixed: **6.81%** (down 0.04; hit **6.85% on Jul 23 — highest in over a year**)
- 15-yr fixed: 6.34% | 30-yr jumbo: 6.90% | 7/6 SOFR ARM: 6.39% | FHA: 6.37% | VA: 6.39%
- 52-week range for 30-yr: 5.99%–6.85%

**Bankrate — Connecticut-specific** (fetched directly, https://www.bankrate.com/mortgages/mortgage-rates/connecticut/, dated Jul 26, 2026) — VERIFIED
- CT 30-yr fixed: **6.63%**; CT 15-yr: 5.94%; CT 30-yr refi: 6.52%; national 30-yr APR per Bankrate: 6.81%
- 5/1 ARM ~6.22–6.64% depending on source (VERIFIED-SNIPPET, https://www.noradarealestate.com/blog/todays-mortgage-rates-july-26-2026-update/ and NerdWallet)

**Takeaway for model**: use ~6.5–6.6% (PMMS) as the July 2026 move-scenario rate; daily retail rates ran 6.6–6.85% in late July. ~6.5% is now the optimistic edge of the range.

## 2. SIMSBURY MARKET STATS

**Movoto market trends, June 2026 data** (fetched directly, https://www.movoto.com/simsbury-ct/market-trends/) — VERIFIED
- Median sold price: **$575,000**; 54 homes sold in June (55 prior yr)
- Median days on market: **10** (12 a year ago) — extremely fast
- Active inventory: **75 listings** town-wide; 7 with price reductions
- Median list price $575K–589K (July 2026), $233/sqft, median size 2,314 sqft (Movoto main page, VERIFIED)

**Zillow** (VERIFIED-SNIPPET; page 403s on direct fetch, https://www.zillow.com/home-values/34004/simsbury-ct/): typical home value (ZHVI) **$448,920, +7.4% YoY** (mid-2026 data; exact month not confirmed — approximate).

**Redfin submarkets** (VERIFIED-SNIPPET; pages 403 on direct fetch):
- West Simsbury (06092): median sale **$692K, +42.4% YoY** (small-sample volatility likely; ~30 days on market) — https://www.redfin.com/city/26717/CT/West-Simsbury/housing-market
- Simsbury Center: median **$430K, -12.8% YoY**, ~41 days — https://www.redfin.com/city/25809/CT/Simsbury-Center/housing-market
- CT statewide sale-to-list **102.5%** (May 2026), ~2 months supply — https://www.redfin.com/state/Connecticut/housing-market
- CAUTION: Redfin submarket YoY swings are small-sample; vintage of snippets uncertain (Dec 2025–Mar 2026?).

**Sale-to-list evidence**: 8 David Dr sold **22% over list** May 28, 2026 (VERIFIED-SNIPPET, homes.com/movoto sold pages). Town-wide sale-to-list ratio UNVERIFIED; over-ask sales clearly common. Months of inventory: 75 active ÷ ~54 sales/mo ≈ **1.4 months** (INFERRED from two VERIFIED numbers).

## 3. ACTIVE LISTINGS — 4+BR, ~$500K–$900K (captured 2026-07-26)

Source pages (both fetched directly, cross-confirming): Movoto https://www.movoto.com/simsbury-ct/ + p-2, Coldwell Banker https://www.coldwellbankerhomes.com/ct/simsbury/. Lat/lng geocoded via US Census Bureau geocoder on 2026-07-26 — VERIFIED coordinates. Lot sizes not shown on search pages — mostly absent.

| Address | Price | Bd/Ba | SqFt | Lat, Lng | Flags |
|---|---|---|---|---|---|
| 14 Amy Ln, Simsbury 06070 | $569,900 | 4/3 | 2,156 | 41.83371, -72.83807 | VERIFIED (Movoto) |
| 19 Westridge Dr, Simsbury 06070 | $549,995 | 4/5 | 3,028 | 41.82258, -72.85749 | VERIFIED (Movoto) |
| 7 Banbury Rd, West Simsbury 06092 | $594,900 | 4/3 | 2,622 | 41.84875, -72.86905 | VERIFIED (Movoto) |
| 369 W Mountain Rd, West Simsbury 06092 | $599,000 | 4/3 | 3,267 | 41.82575, -72.86728 | VERIFIED (Movoto) |
| 290 Old Farms Rd, Simsbury 06070 | $599,900 | 4/3 | 2,829 | 41.90852, -72.84373 | VERIFIED (Movoto) |
| 5 Lawton Dr, Simsbury 06070 | $649,900 | 4/4 | 3,157 | 41.83504, -72.84250 | VERIFIED (Movoto + Zillow https://www.zillow.com/homedetails/5-Lawton-Dr-Simsbury-CT-06070/174081400_zpid/) |
| 9 Branch Brook Dr, Simsbury 06070 | $665,000 | 5/3 | 2,513 | 41.88650, -72.81539 | VERIFIED (Movoto) |
| 181 Farms Village Rd, W Simsbury 06092 | $675,000 | 4/4 | 3,106 | 41.86942, -72.84397 | VERIFIED (Movoto) |
| 28 Crestwood Rd, Simsbury 06070 | $695,000 | 4/3 | 2,165 | 41.89152, -72.80870 | VERIFIED (Coldwell Banker, "Just Listed") |
| 216 Great Pond Rd, Simsbury 06070 | $700,000 | 4/3 | 3,316 | 41.89584, -72.84098 | VERIFIED (Movoto). Redfin cache stale (https://www.redfin.com/CT/Simsbury/216-Great-Pond-Rd-06070/home/53999283: "off market, 3,280 sqft, 2.42 ac"); lot ~2.42 ac per Redfin record. |
| 184 Westledge Rd, W Simsbury 06092 | $725,000 | 5/4 | 4,627 | 41.89302, -72.86985 | VERIFIED both pages, "Just Listed." DISCREPANCY: stale Redfin record says 2,934 sqft, 7.7-ac lot (https://www.redfin.com/CT/West-Simsbury/184-Westledge-Rd-06092/home/53999938). Flag sqft as conflicting. |
| 10 Hampshire Ln, Simsbury 06070 | $749,000 | 5/4 | 5,023 | 41.91165, -72.81067 | VERIFIED (Movoto) |
| 276 Stratton Brook Rd, Simsbury 06092 | $799,900 | 5/4 | 3,757 | 41.86923, -72.85100 | VERIFIED (Movoto + CBH "Just Listed") |
| 158 Westledge Rd, W Simsbury 06092 | $875,000 | 4/4 | 4,233 | 41.88981, -72.87069 | VERIFIED (Movoto) |
| 42 Holcomb St, Simsbury 06070 | $899,900 | 4/3 | 2,550 | 41.90451, -72.83987 | VERIFIED (Movoto) |

Near-range context: 86 Simsbury Manor Dr $469,900 4/3 2,023 sqft (just under range, Weatogue-adjacent); 207 Great Pond Rd $1,125,000 4/3 5,192 sqft; 15 Hop Brook Rd $1,025,000 5/6 4,991 sqft (stretch-over). All VERIFIED on Movoto/CBH pages 2026-07-26. 06089 (Weatogue) listings scarce — only 37 Deer Park Rd, Weatogue $439,000 3/2 (below spec). School-zone assignment per listing NOT verified — check against Simsbury schools zoning separately.

## 4. RECENT SOLDS — 4+BR, last ~6 months

Source: https://www.movoto.com/simsbury-ct/sold/ (fetched directly 2026-07-26) — all VERIFIED:
- 19 Westwood Dr — $580,000, 4/2, 1,895 sqft, sold 07/25/26
- 12 Linda Ln — $735,000, 5/3, 3,382 sqft, sold 07/21/26
- 1 Fairfield Ln — $580,000, 4/3, 2,502 sqft, sold 07/19/26
- 20 Saxton Brook Dr — $632,500, 4/4, 3,550 sqft, sold 07/17/26
- 50 Fox Den Rd — $902,000, 4/3, 3,496 sqft, sold 07/15/26
- 28 Deepwood Rd — $645,000, 5/3, 2,751 sqft, sold 07/15/26
- 22 Joshua Dr — $1,570,000, 4/6, 7,160 sqft, sold 07/12/26
- 1 W Mary Dr — $915,000, 5/4, 4,451 sqft, sold 06/25/26
- 17 Climax Rd — $641,000, 3/3, 2,894 sqft, sold 07/17/26 (3BR, context)
- 8 David Dr — $585,000, 4/2.5, sold 05/28/26, **22% over list** (VERIFIED-SNIPPET, homes.com); 2 North Dr — $507,500, 4/2.5, sold 12/23/25 (VERIFIED-SNIPPET)

Calibration read (INFERRED): typical 4BR ~2,000–2,500 sqft trades ~$580–650K; 4–5BR 3,300+ sqft trades $735–915K. Upgrade target $650–900K is realistic.

## 5. TRANSACTION COSTS OF MOVING (CT)

- **CT state conveyance tax (seller)**: 0.75% on first $800K; 1.25% on $800K–$2.5M; 2.25% above. **Municipal**: 0.25% (Simsbury is NOT a 0.5% targeted-investment city). Simsbury seller at $600K pays 1.0% = $6,000. VERIFIED-SNIPPET: https://mblawfirm.com/insights/residential-real-estate-insights/connecticut-conveyance-tax-explained/, https://bhhlegal.com/ct-conveyance-tax/, https://easternctrealtors.com/selling/conveyance-tax-rates/ (2026-07-26).
- **Commissions post-NAR settlement**: national average total ~5.4–5.7% (Feb 2026 survey: 5.70% = 2.88% list + 2.82% buy side; Clever: 2.98%/2.73%). VERIFIED-SNIPPET: https://listwithclever.com/average-real-estate-commission-rate/, https://www.offerpad.com/articles/real-estate-commission-rates-2026/. CT-specific average UNVERIFIED.
- **Moving costs**: local 4BR move ~$1,400–$5,100 (local avg ~$1,250–2,500). VERIFIED-SNIPPET: https://www.imoving.com/blog/before-your-move/cost-to-move-a-4-bedroom-house/, https://lugg.com/blog/moving-cost-calculator.
- Buy-side closing (attorney, recording, title): UNVERIFIED, typically ~1–2% in CT (INFERRED).

## 6. RATE FORECASTS (informs "wait" option)

- **Fannie Mae** (May 2026, VERIFIED via https://www.scotsmanguide.com/news/fannie-mae-predicts-little-change-in-mortgage-rates-for-a-very-long-time/, 2026-05-14): 30-yr averages **6.3% H2 2026**, drifts to **6.2% by 2027** and stays; Fed funds anchored 3.5–3.75% through 2027. July 2026 updates: 6.4% end-2026 → 6.3% 2027 → 6.2% Q4 2027 (VERIFIED-SNIPPET, TheStreet/Forbes).
- **MBA**: 30-yr **~6.5% through 2027 and into 2028** (VERIFIED-SNIPPET, https://www.forbes.com/advisor/mortgages/mortgage-interest-rates-forecast/, Scotsman Guide).
- **Consensus**: Fannie, MBA, Wells Fargo all above 6.0% through at least 2027 (VERIFIED-SNIPPET, https://www.fastcompany.com/91555790/mortgage-rates-housing-market-forecasters-staying-above-6-through-2027-unless-this-happens).
- Implication for "wait" (INFERRED): no forecaster projects sub-6% by 2027; waiting buys at most ~20–40bp of rate relief while Simsbury prices rose ~7% YoY.

**Known gaps/unverifiables**: Simsbury-specific sale-to-list ratio and formal months-of-supply (inferred 1.4 mo); lot sizes for most actives; school-zone per listing; Redfin snippet vintage; CT-specific commission averages. Redfin/Zillow/Realtor.com/TheStreet block direct fetching (403) — those figures are search-snippet grade.
