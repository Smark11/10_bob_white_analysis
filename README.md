# 10 Bob White Way — Add On or Move? Decision Report

A self-contained static site answering one question for a family of four (two boys, a dog) at 10 Bob White Way, Weatogue (Simsbury), CT: **add on to the 1965 raised ranch, move to a larger home, or wait?**

**Live site:** https://smark11.github.io/10_bob_white_analysis/

## Recommendation

**Stay & improve — verify the mortgage first.** Phase 1 (~$32–60K): whole-house cooling (gated on a duct inspection) + finish the last unfinished corner of the lower level. Phase 2 (~$110–185K all-in, only if the squeeze survives Phase 1): a rear family-room addition on the lot's ~53 ft of by-right rear depth. Moving is the right answer if the family honestly values the extra ~1,300 sq ft near $1,000/month or the mortgage turns out not to be cheap. Waiting is rejected.

The pivotal verified facts:
- **Bob White Way → Latimer Lane** (top-scoring elementary in Simsbury, top 5% in CT, $39M renovation, 0.3-mi walk) — moving buys zero school upgrade; middle/high are town-wide.
- The family bought in **August 2020** — likely a ~3.1% mortgage ("golden handcuffs"); moving re-prices everything at ~6.6%.
- The 0.92-acre lot is fully conforming with ~53 ft of by-right buildable rear depth, public sewer, no mapped wetlands, flood zone X.

## How it was built (July 26, 2026)

Five research→develop→analyze iterations:
1. **Broad research** — 4 parallel agents: property records, market/rates, construction costs, schools/family fit.
2. **Deep dives** — 4 agents: assessor building-sketch decode (exact 54×26 envelope), raised-ranch strategy costing + the ANSI Z765 below-grade rule, school-zone checks of every listing against the district's own street list, parcel-polygon/zoning/GIS feasibility.
3. **Build** — data/model/render architecture (below), CVD-validated chart palette, to-scale floor plans.
4. **Adversarial review** — four expert reviewers (realtor, GC, mortgage officer, CFP) attacked the draft; their 12 corrections are encoded in the site (re-priced phases, time-adjusted valuation, engine fixes, the space-value slider).
5. **Verification** — rendered QA, citation/anchor checks, fact-check pass, mobile check.

## Architecture

Plain HTML/CSS/JS, no build system. Libraries via CDN (Leaflet 1.9.4, Chart.js 4.4.1).

- `site/index.html` — section shells + narrative copy; `<sup class="cite" data-cite="...">` resolve against reference keys at render time.
- `site/assets/data.js` — one `DATA` object: the single source of truth for every figure, listing, expert quote, floor plan, and citation (81 sources).
- `site/assets/model.js` — pure financial engine; simulates options A/B/C month-by-month (equity + invested side pot + space-utility credit).
- `site/assets/app.js` — renderers, live calculator, charts, map.
- `research/` — the full research package (13 reports), with every figure flagged VERIFIED / INFERRED / UNVERIFIED and dated.

```bash
# serve locally
python3 -m http.server 8000 --directory site
# force all scroll-reveal animations (screenshots/QA): append ?reveal
```

## Data integrity

Real data and real URLs actually retrieved (2026-07-26); anything unverifiable is flagged and timestamped in place. The modeled ~3.1% mortgage is **inferred, not confirmed** — the site repeatedly tells the family to pull the loan statement first. Imagery is AI-generated and illustrative; it does not depict the actual home. The property's owners are not named anywhere on the site.
