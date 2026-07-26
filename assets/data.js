/* =========================================================================
   DATA — all figures traced to the research package (July 2026).
   Research date: 2026-07-26. Map coordinates are street-level approximations
   except where noted VERIFIED. Owners are private individuals — the site
   refers to "the family," never by name.
   ========================================================================= */
const DATA = {

  property: {
    address: "10 Bob White Way, Weatogue (Simsbury), CT 06089",
    lat: 41.83798, lng: -72.82806, // VERIFIED (Redfin record)
    specs: [
      { k: "Bedrooms", v: "4", sub: "all upstairs" },
      { k: "Baths", v: "3", sub: "full (2 up · 1 down)" },
      { k: "Above-grade area", v: "1,505", sub: "sq ft" },
      { k: "Lower level", v: "1,404", sub: "sq ft · 571 finished" },
      { k: "Lot", v: "0.92", sub: "acres · R-40" },
      { k: "Built", v: "1965", sub: "raised ranch" },
      { k: "Bought 8/2020", v: "$310K", sub: "4 days on market" },
      { k: "Est. value '26", v: "~$500K", sub: "range $453–553K" },
    ],
    assessed: "$233,030",
    tax: "$7,960 / yr",
    estRange: "$453K–$553K",
  },

  // GreatSchools 0–10 + Public School Review CT rank (of 939 elementary schools)
  schools: [
    { name: "Latimer Lane", sub: "current zone · #1 in Simsbury", gs: 9.0, rank: "#36 in CT · top 5%", math: "78%", read: "82%", home: true },
    { name: "Tootin' Hills", sub: "West Simsbury", gs: 9.0, rank: "#77 in CT", math: "76%", read: "77%" },
    { name: "Central", sub: "Simsbury center", gs: 9.0, rank: "#78 in CT", math: "74%", read: "78%" },
    { name: "Squadron Line", sub: "largest · 710 students", gs: 9.0, rank: "#105 in CT", math: "73%", read: "75%" },
    { name: "Tariffville", sub: "smallest · 236 students", gs: 8.0, rank: "#225 in CT", math: "~62%", read: "~67%" },
  ],

  pipeline: [
    { k: "Elementary", v: "Latimer Lane", s: "Top-scoring in town · fresh $39M renovation · a 0.3-mi walk with a mapped footpath" },
    { k: "Middle (7–8)", v: "Henry James Memorial", s: "The only middle school in town — identical for every Simsbury address" },
    { k: "High School", v: "Simsbury High", s: "GreatSchools 10/10 · Niche A, ~#17 in CT — also town-wide" },
  ],

  // 30-yr fixed rate path — research scenarios (Fannie/MBA anchored)
  rateScenarios: {
    labels: ["Now (Jul '26)", "+1 yr", "+2 yr", "+3 yr", "+5 yr"],
    base:        [6.58, 6.40, 6.30, 6.20, 6.10],
    optimistic:  [6.58, 6.20, 5.80, 5.50, 5.30],
    pessimistic: [6.58, 6.90, 7.05, 7.10, 7.10],
  },

  options: [
    {
      id: "a", cls: "a", k: "Option A · Stay & Improve", recommended: true,
      title: "Fix comfort now; add space only if you still need it",
      score: 8.0,
      summary: "Phase 1 (~$25–50K): add central air to the existing ducts and finish the last unfinished corner of the lower level. Phase 2, only if the family still feels tight (~$75–160K): a 300–400 sq ft rear family-room addition — the lot has ~53 ft of by-right depth behind the house. Both phases are financeable with a second lien that never touches the likely ~2.9% first mortgage.",
      pros: [
        "Protects a probable sub-3% mortgage — the balance is small (~$215K) but the rate gap is the widest of the decade",
        "Keeps the Latimer Lane zone and a school the boys can walk to",
        "The lot is verified addition-friendly: ~53 ft of rear yard by right, public sewer, no wetlands mapped, flood zone X",
        "Every phase stays under the ~$120–150K spend ceiling set by the street's comps",
      ],
      cons: [
        "The house appraises as 1,505 sq ft — ANSI rules keep every lower-level dollar off the headline square footage",
        "A raised ranch can't add space cheaply above: a second story is $300–550K and off the table",
        "Construction means months of contractors, dust, and a fenced-off yard for the dog",
        "If the family truly wants 2,800+ sq ft, no sensible scope gets there — that's a move, not a project",
      ],
      foot: [ { k: "Phase 1", v: "$25–50K" }, { k: "Phase 2 (opt.)", v: "$75–160K" } ],
    },
    {
      id: "b", cls: "b", k: "Option B · Move Now",
      title: "Buy the bigger house — and pay the toll",
      score: 6.0,
      summary: "Sell (~$500K) and buy larger. The catch: in-zone inventory is thin — exactly one active Latimer-zone listing offers a real size jump (5 Lawton Dr, 3,157 sq ft, $649,900). Most bigger homes are in other elementary zones. Moving re-prices the whole balance from ~2.9% to ~6.6% and burns ~$40K+ in transaction costs, for roughly +$2,100/month all-in.",
      pros: [
        "Turnkey space immediately — no construction with two boys and a dog",
        "Solves the real constraint: a raised ranch's 1,505 sq ft ceiling",
        "One in-zone listing (5 Lawton Dr) genuinely fits the brief today",
        "Simple: one loan, one move, no contractor risk",
      ],
      cons: [
        "Forfeits a likely ~2.9% mortgage — every $100K re-borrowed at ~6.6% costs ~$216/mo extra",
        "~$40–45K sunk transaction costs + ~$3K/yr property-tax step-up",
        "No school upgrade is possible — Bob White Way already has the best-testing elementary in town",
        "Thin selection: most 2,800+ sq ft homes mean leaving the Latimer zone",
      ],
      foot: [ { k: "Friction", v: "~$40–45K" }, { k: "Monthly", v: "~+$2.1K" } ],
    },
    {
      id: "c", cls: "c", k: "Option C · Wait",
      title: "Wait 1–3 years, then move",
      score: 3.5,
      summary: "Stay cheap for ~2 years, then sell and buy. It bets against every major forecast: Fannie Mae and the MBA both keep 30-yr rates above 6% into 2028, while Hartford — Zillow's #1 hottest market — keeps compounding prices on the bigger house you'd eventually buy.",
      pros: [
        "Two more low-cost years on the ~2.9% loan",
        "Keeps the zone and the low tax basis while waiting",
        "Optionality — a Phase-1 comfort fix works fine as a bridge",
      ],
      cons: [
        "No forecaster projects sub-6% rates through 2027 — the relief being waited for isn't forecast to come",
        "The target home appreciates on a bigger base (~4–5%/yr) than the savings from ~20–40bp of rate drift",
        "Inventory is 63% below pre-pandemic norms and improving only slowly",
        "The boys spend more grade-school years in a house that already feels tight",
      ],
      foot: [ { k: "Rate relief fcast", v: "~0.2–0.4%" }, { k: "Price risk", v: "+4–5%/yr" } ],
    },
  ],

  // Filled by the adversarial review (iteration 4)
  experts: [],
  corrections: [],

  forecast: [
    { h: "1–2 Years", t: "Stays tight", inv: "Rates drift only to the low-6s; Hartford-area inventory remains ~63% below pre-pandemic; Simsbury turns over ~75 actives against ~54 sales a month (~1.4 months of supply). Homes keep selling in ~10 days.", price: "Mid-single-digit growth; Zillow's Hartford forecast is +3.9% through Oct 2026." },
    { h: "3 Years", t: "Gradual loosening", inv: "If rates reach the high-5s, some lock-in releases. The contested ~689-unit Hartford-campus plan (if approved) starts delivering — but it's mostly apartments and duplexes, not 4-bed singles.", price: "Growth decelerates toward ~2–4%/yr; affordability improves via rates, not prices. Note: Simsbury's next revaluation (~Oct 2027) resets assessments toward market." },
    { h: "5 Years", t: "More supply, still firm", inv: "An aging-owner wave gradually lists more Simsbury homes; the best odds of real selection of larger in-zone houses. School enrollment is drifting down (~3,980 district-wide), which cuts redistricting risk but signals fewer young sellers too.", price: "Real prices may flatten; nominal prices likely still grind upward." },
  ],

  // map markers — coordinates from Census geocoder (VERIFIED) unless marked ~
  listings: [
    { addr: "5 Lawton Drive", price: "$649,900", beds: "4", baths: "4", sqft: "3,157", lot: "1.07 ac", zone: true, star: "Top in-zone match",
      note: "The one active Latimer-zone listing with a real size jump — double the above-grade space, in budget, in zone.", url: "https://www.zillow.com/homedetails/5-Lawton-Dr-Simsbury-CT-06070/174081400_zpid/", lat: 41.83504, lng: -72.84250 },
    { addr: "14 Amy Lane", price: "$569,900", beds: "4", baths: "3", sqft: "2,156", lot: "—", zone: true,
      note: "In-zone colonial, +650 sq ft above grade vs today. A modest upgrade for a full move's friction.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.83371, lng: -72.83807 },
    { addr: "4 Lincoln Lane", price: "$589,900", beds: "3", baths: "4", sqft: "2,536", lot: "—", zone: true,
      note: "Weatogue, in zone, ~2,536 sq ft — but only 3 bedrooms, a step DOWN in count for a family of four.", url: "https://www.movoto.com/weatogue-ct/", lat: 41.8336, lng: -72.8262, approx: true },
    { addr: "72 Old Meadow Plain Rd", price: "$435,000", beds: "4", baths: "3", sqft: "2,193", lot: "~0.95 ac", zone: true,
      note: "Weatogue raised ranch, price cut $15K. Roughly a lateral move — shows what selling buys nearby.", url: "https://www.movoto.com/weatogue-ct/", lat: 41.8350, lng: -72.8290, approx: true },
    { addr: "8 Valley View Drive", price: "$389,000", beds: "4", baths: "3", sqft: "1,792", lot: "—", zone: true,
      note: "In-zone entry price point — smaller than the family already has. Context, not a candidate.", url: "https://www.movoto.com/weatogue-ct/", lat: 41.8402, lng: -72.8300, approx: true },
    { addr: "19 Westridge Drive", price: "$549,995", beds: "4", baths: "5", sqft: "3,028", lot: "—", zone: false, zname: "Tootin' Hills",
      note: "Big house, strong value — but it's a Tootin' Hills-zone address, so the boys change schools.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.82258, lng: -72.85749 },
    { addr: "7 Banbury Drive", price: "$594,900", beds: "4", baths: "3", sqft: "2,622", lot: "—", zone: false, zname: "Tootin' Hills",
      note: "West Simsbury; +1,100 sq ft over today but out of zone.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.84875, lng: -72.86905 },
    { addr: "369 W Mountain Road", price: "$599,000", beds: "4", baths: "3", sqft: "3,267", lot: "—", zone: false, zname: "Tootin' Hills",
      note: "Most sq ft under $600K right now — at the price of the school zone and a busier road.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.82575, lng: -72.86728 },
    { addr: "290 Old Farms Road", price: "$599,900", beds: "4", baths: "3", sqft: "2,829", lot: "—", zone: false, zname: "Squadron Line",
      note: "North Simsbury; Squadron Line zone.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.90852, lng: -72.84373 },
    { addr: "9 Branch Brook Drive", price: "$665,000", beds: "5", baths: "3", sqft: "2,513", lot: "—", zone: false, zname: "Central",
      note: "Five bedrooms, in budget — Central zone.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.88650, lng: -72.81539 },
    { addr: "28 Crestwood Road", price: "$695,000", beds: "4", baths: "3", sqft: "2,165", lot: "—", zone: false, zname: "Squadron Line",
      note: "Just listed; modest size for the price — evidence of how hot the market runs.", url: "https://www.coldwellbankerhomes.com/ct/simsbury/", lat: 41.89152, lng: -72.80870 },
    { addr: "216 Great Pond Road", price: "$700,000", beds: "4", baths: "3", sqft: "3,316", lot: "~2.4 ac", zone: false, zname: "Squadron Line",
      note: "Big house, big lot — Squadron Line zone (streets #31+).", url: "https://www.movoto.com/simsbury-ct/", lat: 41.89584, lng: -72.84098 },
    { addr: "10 Hampshire Lane", price: "$749,000", beds: "5", baths: "4", sqft: "5,023", lot: "—", zone: false, zname: "Squadron Line",
      note: "Most space for the money in town (5,023 sq ft) — Squadron Line zone.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.91165, lng: -72.81067 },
    { addr: "276 Stratton Brook Rd", price: "$799,900", beds: "5", baths: "4", sqft: "3,757", lot: "—", zone: false, zname: "Tootin' Hills",
      note: "Just listed near Stratton Brook park — Tootin' Hills zone at this street number.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.86923, lng: -72.85100 },
    { addr: "42 Holcomb Street", price: "$899,900", beds: "4", baths: "3", sqft: "2,550", lot: "—", zone: false, zname: "Squadron Line",
      note: "Top of the range; Squadron Line zone.", url: "https://www.movoto.com/simsbury-ct/", lat: 41.90451, lng: -72.83987 },
    { addr: "7 Tallwood Lane", price: "$899,900", beds: "4", baths: "3", sqft: "3,058", lot: "1.36 ac", zone: false, zname: "Central",
      note: "Weatogue address but Central zone; the priciest way to stay in the village.", url: "https://www.movoto.com/weatogue-ct/", lat: 41.8400, lng: -72.8360, approx: true },
  ],

  school_marker: { addr: "Latimer Lane Elementary", sub: "33 Mountain View Rd/Dr · walkable via the neighborhood footpath", lat: 41.84160, lng: -72.82109 },

  // Family-of-4-plus-dog fit — drive times computed via OSRM from the house
  life: [
    { k: "0.3 mi · walk", v: "Latimer Lane Elementary", s: "A mapped footpath ('Latimer Lane School path') links the neighborhood to the just-renovated, $39M school." },
    { k: "2.7 mi · 11 min", v: "Stratton Brook State Park", s: "Lifeguarded swimming pond, trails, and an accessible boardwalk. Dogs leashed on trails (not the beach)." },
    { k: "3.1 mi · 9 min", v: "Simsbury Farms", s: "235-acre town rec complex: 4-pool aquatic center, covered ice rink (youth hockey), golf, tennis, playground." },
    { k: "4.2 mi · 11 min", v: "Paw Meadow Dog Park", s: "Fenced off-leash park on Iron Horse Blvd with separate large/small-dog areas, open 6am–9pm." },
    { k: "in-neighborhood", v: "Rail-trail connector", s: "The 'Old Canal – Latimer Neighborhood Connector Trail' links toward the paved Farmington Canal Heritage Trail." },
    { k: "town-wide", v: "Boys' sports pipeline", s: "Simsbury Little League, youth soccer, football & cheer, and unusually strong hockey — two rinks including the International Skating Center." },
  ],

  movePsych: {
    intro: "The research on kids and moving has a sharp edge: what hurts children isn't changing houses — it's changing schools and friend networks. That cuts both ways here.",
    items: [
      { t: "School moves are the damaging component", d: "Registry-based cohort studies separate residential moves from school moves — school changes drive the measured harm to trajectories (Calhoun 2026; Norwegian cohort work)." },
      { t: "Frequent movers struggle more", d: "A 2008 systematic review links childhood residential mobility to behavioral and emotional problems; AACAP's clinical guidance says moves interrupt friendships and predict school problems." },
      { t: "Introverted kids feel it most", d: "Oishi & Schimmack (2010): more childhood moves predicted lower adult well-being specifically for introverts — worth weighing against each boy's temperament." },
      { t: "The escape hatch", d: "A move WITHIN the Latimer zone (e.g., 5 Lawton Dr) keeps school, friends, teams, and the walk — neutralizing most of the documented cost. Any Simsbury move keeps the same middle and high school." },
    ],
  },

  // ---- raised-ranch improvement menu (house-specific, July 2026 Hartford-County pricing) ----
  addition: {
    intro: "This is a 54×26 raised ranch: one 1,505 sq ft living level over a 1,404 sq ft lower level that already contains a 571 sq ft finished rec room with a fireplace, a third full bath, laundry — and the 2-car tuck-under garage (~480 sq ft). So the truly finishable remainder is only ~350 sq ft, and there is no cheap way up: the roof is low-pitch and the garage sits under the bedrooms. What the house lacks isn't bedrooms or baths — it has 4 and 3 — it's above-grade living space and, notably, any central air. The lot, though, is the asset: 0.92 verified-conforming acres with ~53 ft of by-right buildable depth behind the house, public sewer, no mapped wetlands.",
    ceiling: "The street's last arm's-length sale is $452,500 (Dec 2024, a larger colonial) and town-wide comps put renovated raised ranches in the low-to-mid $500s. Against a ~$500K value, the defensible improvement budget is roughly $120K — past ~$150K you are gifting value to the street.",
    septic: "Verified: 10 Bob White Way is on PUBLIC water and PUBLIC sewer (2020 MLS; independently confirmed by the 25 Bob White Way sale in Dec 2024), with natural gas in the street and a brand-new Aquarion water main laid in 2025. No septic-capacity (B100a) review applies — bedroom-adding projects are not gated by an on-site system. (Confirm the lateral with Simsbury WPCF, 860-658-3258.)",
    scenarios: [
      { key: "REC", plan: "Recommended", name: "Phase 1 — Comfort package: central air + finish the last corner", tag: "Recommended first move", get: "Add central AC (or a dual-fuel heat pump) to the existing forced-air ducts — the house has none — and finish the ~350 sq ft unfinished workshop corner of the lower level. The lower level becomes a full second living zone: rec room, playroom, bath, laundry.", lo: 25000, hi: 50000, sqft: "+250–350 sf finished · whole-house AC", recoup: "60–71% on the finish", time: "1–2 mo", note: "The highest livability-per-dollar package on the menu. A heat-pump route may qualify for EnergizeCT rebates (up to $1,000/ton — verify eligibility, since the house heats with gas).", rec: true },
      { key: "B", plan: "Phase 2", name: "Rear family-room addition (300–400 sq ft)", tag: "The only true square-footage move", get: "A 16–20 ft deep family room off the kitchen/dining wall where the deck sits, on a frost-wall foundation raised to the main-floor level; rebuild a smaller deck beside it. This is the only project that adds ANSI-countable above-grade square footage.", lo: 75000, hi: 160000, sqft: "+300–400 sf above grade", recoup: "~40–55%", time: "5–8 mo", note: "Fits inside the ~53 ft of by-right rear depth — no variance, no wetlands, no septic gate. Do it only if Phase 1 doesn't relieve the squeeze.", rec: false },
      { key: "C", plan: "Combo", name: "Comfort package + rear addition", tag: "The full solution", get: "Phase 1 and Phase 2 together: AC, a finished lower level, and a new above-grade family room — the house functionally jumps from ~2,075 to ~2,800 usable sq ft.", lo: 100000, hi: 210000, sqft: "+~700 usable sf · AC", recoup: "~45–60% blended", time: "6–9 mo", note: "The top of the range crosses the ~$150K ceiling — phase it and stop when the house feels right.", rec: false },
      { key: "D", plan: "Option", name: "Primary-suite reshuffle (4BR → 3BR)", tag: "Interior remodel", get: "Combine two of the four small bedrooms into a real primary suite using an existing full bath — the raised-ranch-specific play recommended by CT design-build firms.", lo: 30000, hi: 60000, sqft: "no new sf — better sf", recoup: "moderate (remodel-grade)", time: "2–3 mo", note: "Only if the suite matters more than the bedroom count; 3BR/3FB is still market-normal, but it narrows the resale buyer pool.", rec: false },
      { key: "E", plan: "Option", name: "Screened / 3-season room on the deck", tag: "Cheap outdoor upgrade", get: "Convert or replace the existing 322 sq ft rear deck into a screened or 3-season room.", lo: 10000, hi: 30000, sqft: "~150–250 sf seasonal", recoup: "~≤50%", time: "1–2 mo", note: "Half the year in bug-free outdoor space for a fraction of addition money — pairs well with Phase 1.", rec: false },
      { key: "F", plan: "Not advised", name: "Garage conversion + detached garage", tag: "Poor value here", get: "Convert the tuck-under garage (~480 sf) to living space and build a detached 2-car garage to replace the parking.", lo: 75000, hi: 120000, sqft: "+~480 sf below-grade class", recoup: "low — space never counts as GLA", time: "4–6 mo", note: "You pay twice (conversion + new garage) for space appraisers put on the basement line. The finishable-corner plan gets most of the benefit for a third of the cost.", rec: false },
      { key: "G", plan: "Not advised", name: "Second story (\"raise the roof\")", tag: "Over-improvement", get: "A full second floor converts the raised ranch to a colonial-scale home — roughly +1,400 sq ft.", lo: 300000, hi: 550000, sqft: "+~1,400 sf above grade", recoup: "very low on this street", time: "8–14 mo + move-out", note: "CT build-up pricing runs $280–560/sq ft. On a street whose best comp is $452,500, this is a gift to the neighborhood — if the family wants colonial space, buying one is strictly cheaper.", rec: false },
    ],
    lineItems: [
      { item: "Elevated foundation / frost walls (42-in depth)", pct: 17, note: "~$15–25K · the raised-ranch premium: the new floor must land ~4 ft above grade" },
      { item: "Framing & sheathing", pct: 13, note: "~$12–19K · tie into 1965 balloon-era framing" },
      { item: "Roof + tie-in under existing eave line", pct: 9, note: "~$8–14K · low-pitch shed roof dies into the rear wall" },
      { item: "Windows & sliders", pct: 8, note: "~$7–12K · replace the kitchen/dining sliders into the new room" },
      { item: "Siding matched to the vinyl", pct: 6, note: "~$5–9K" },
      { item: "HVAC extension", pct: 7, note: "~$6–11K · easy if Phase 1 already added AC to the ducts" },
      { item: "Electrical", pct: 7, note: "~$6–10K · panel check on a 1965 service" },
      { item: "Flooring", pct: 7, note: "~$6–10K · match the hardwoods" },
      { item: "Drywall & taping", pct: 6, note: "~$5–9K" },
      { item: "Interior trim & paint", pct: 6, note: "~$5–9K" },
      { item: "Insulation & air sealing", pct: 5, note: "~$4–8K · heavy R-values for CT winters" },
      { item: "Deck rebuild (smaller, beside the addition)", pct: 9, note: "~$8–15K · the addition takes the current deck's footprint" },
    ],
    softCosts: "On top of construction, budget ~15–25% for soft costs: design (5–15%), a structural engineer for the elevated foundation and rear-wall opening ($1.5–4K), the Simsbury permit ($16.26 per $1,000 of cost — about $1,950 on a $120K job, plus a $25 zoning review), and a 10–20% contingency on a 1965 house.",
    bottomLine: "Buy comfort before square footage. Central air plus the finished corner (~$25–50K) transforms daily life in this house for a tenth of what moving costs to transact. The rear family room (~$75–160K) is the one honest space play, and the lot makes it easy. Everything bigger — second stories, garage gymnastics — over-improves a street whose ceiling is in the low $500s.",
  },

  // ---- to-scale floor plans (assessor envelope EXACT; interior walls estimated) ----
  floorplans: {
    scaleNote: "Drawn to scale in feet (origin = front-left corner; x = width along the street, y = depth front→back). Main block 54×26 = 1,404 sf per level; ~1-ft cantilever strips bring the upper level to the assessor's exact 1,505 sf; 322 sf clipped-corner deck at the rear right.",
    disclaimer: "The EXTERIOR envelope and areas are EXACT from the Simsbury assessor's building sketch (54×26 main block; 1,404 sf lower level with 571 sf finished and a 2-bay tuck-under garage; 322 sf rear deck). INTERIOR walls are to-scale professional estimates fitted to that envelope and the verified 2020 MLS room program (4 BR + 2 baths up; rec room w/ fireplace, 3rd full bath, laundry, workshop down) — no per-room dimensions were ever published, so field-measure before design.",
    panelConsensus: "Panel consensus: Phase 1 (comfort package) is a no-drawing-needed interior project. The Phase-2 rear family room fits the verified ~53 ft of by-right rear depth with a straightforward elevated foundation; its only real design work is the rear-wall opening and the deck rebuild.",
    existing: [
      {
        id: "ex-upper", name: "Main Level — 1,505 sf (all 4 bedrooms + 2 baths)",
        canvasW: 56, canvasH: 44,
        rooms: [
          { name: "Bedroom 2", x: 0, y: 0, w: 11, h: 8 },
          { name: "Bedroom 3", x: 11, y: 0, w: 11, h: 8 },
          { name: "Hall Bath (tub)", x: 22, y: 0, w: 6, h: 8 },
          { name: "Hall", x: 6, y: 8, w: 22, h: 6 },
          { name: "Primary Bath", x: 0, y: 8, w: 6, h: 6 },
          { name: "Primary Bedroom", x: 0, y: 14, w: 14, h: 12 },
          { name: "Bedroom 4", x: 14, y: 14, w: 8, h: 12 },
          { name: "Closets / Linen", x: 22, y: 14, w: 6, h: 12 },
          { name: "Split-Foyer Entry", x: 28, y: 8, w: 6, h: 18 },
          { name: "Living Room (bay window)", x: 28, y: 0, w: 26, h: 8 },
          { name: "Kitchen (granite, sliders)", x: 34, y: 8, w: 10, h: 18 },
          { name: "Dining Room (sliders)", x: 44, y: 8, w: 10, h: 18 },
          { name: "Deck 322 sf (rebuilt ~2015)", x: 32, y: 26, w: 22, h: 15 },
        ],
      },
      {
        id: "ex-lower", name: "Lower Level — 1,404 sf (571 finished + garage)",
        canvasW: 56, canvasH: 44,
        rooms: [
          { name: "2-Car Tuck-under Garage", x: 0, y: 0, w: 22, h: 22 },
          { name: "Laundry / Slop Sink", x: 22, y: 0, w: 10, h: 8 },
          { name: "Stairs", x: 28, y: 8, w: 4, h: 10 },
          { name: "Workshop / Mech (unfinished)", x: 22, y: 8, w: 6, h: 10 },
          { name: "Rec Room (fireplace, wet-bar rough-in)", x: 32, y: 0, w: 22, h: 26 },
          { name: "Bath 3 + Hall", x: 22, y: 18, w: 10, h: 8 },
          { name: "Storage (under entry)", x: 0, y: 22, w: 22, h: 4 },
        ],
      },
    ],
    options: [
      {
        key: "REC", plan: "Phase 1", title: "Comfort package — finish the workshop corner + whole-house AC",
        verdict: "Validated — interior only",
        structural: [
          "No structural work: the ~350 sf workshop/mechanical corner is finished in place inside the existing foundation — partitions, insulation against the foundation wall, ceiling, flooring.",
          "Central air taps the existing forced-hot-air trunk lines; the condenser pad sits at grade behind the house. A dual-fuel heat pump uses the same distribution.",
          "Raised-ranch lower levels are half above grade — the existing near-grade windows make the space bright and are cheaply upgraded to egress if a sleeping room is ever wanted (IRC R310: 5.7 sf net clear).",
        ],
        conditions: [
          "Moisture first: confirm perimeter drainage and use closed-cell or foil-faced rigid foam against concrete — no bare fiberglass.",
          "Keep the mechanical zone accessible (furnace, water heater, panel) — plan the partition around service clearances.",
          "If the heat-pump route is chosen, verify EnergizeCT tier eligibility BEFORE contracting — the top rebate historically targets oil/propane displacement, and this house heats with gas.",
        ],
        levels: [
          {
            id: "rec-lower", name: "Phase 1 — Lower level after the finish", canvasW: 56, canvasH: 44,
            rooms: [
              { name: "2-Car Tuck-under Garage", x: 0, y: 0, w: 22, h: 22 },
              { name: "Laundry", x: 22, y: 0, w: 10, h: 8 },
              { name: "Stairs", x: 28, y: 8, w: 4, h: 10 },
              { name: "Playroom / Office (finished)", x: 22, y: 8, w: 6, h: 10, isNew: true },
              { name: "Rec Room (fireplace)", x: 32, y: 0, w: 22, h: 26 },
              { name: "Bath 3 + Hall", x: 22, y: 18, w: 10, h: 8 },
              { name: "Storage (under entry)", x: 0, y: 22, w: 22, h: 4 },
            ],
          },
        ],
        renderings: [],
      },
      {
        key: "B", plan: "Phase 2", title: "Rear family-room addition (18×18 shown) + rebuilt deck",
        verdict: "Validated with conditions",
        structural: [
          "New 18×18 (±) family room off the rear kitchen/dining wall, floor framed level with the main floor on 42-in frost walls (or a conditioned crawl) — the raised-ranch premium is this elevated foundation.",
          "The rear wall opening re-uses the existing slider locations where possible; a ~12–16 ft opening into the new room needs an engineered LVL or steel header with posts carried to footings.",
          "The addition takes the current deck's footprint; a new ~12×14 deck rebuilds to the left of the addition with stairs to grade.",
          "Roof: low-slope shed or hip tied under the existing eave — verify head height at the tie-in on a 1-story rear wall.",
        ],
        conditions: [
          "By-right check (verified): ~53 ft of rear depth exists before the 50-ft rear setback; an 18-ft-deep addition leaves ~35 ft of margin. No variance anticipated.",
          "Confirm no easement conflict — the 2020 MLS notes a 'Right of Way' encumbrance on the parcel; locate it on the survey before siting.",
          "Budget the deck rebuild honestly (~$8–15K) — it is part of the project, not an extra.",
        ],
        levels: [
          {
            id: "b-upper", name: "Phase 2 — Main level with rear family room", canvasW: 56, canvasH: 48,
            rooms: [
              { name: "Bedroom 2", x: 0, y: 0, w: 11, h: 8 },
              { name: "Bedroom 3", x: 11, y: 0, w: 11, h: 8 },
              { name: "Hall Bath", x: 22, y: 0, w: 6, h: 8 },
              { name: "Hall", x: 6, y: 8, w: 22, h: 6 },
              { name: "Primary Bath", x: 0, y: 8, w: 6, h: 6 },
              { name: "Primary Bedroom", x: 0, y: 14, w: 14, h: 12 },
              { name: "Bedroom 4", x: 14, y: 14, w: 8, h: 12 },
              { name: "Split-Foyer Entry", x: 28, y: 8, w: 6, h: 18 },
              { name: "Living Room", x: 28, y: 0, w: 26, h: 8 },
              { name: "Kitchen", x: 34, y: 8, w: 10, h: 18 },
              { name: "Dining Room", x: 44, y: 8, w: 10, h: 18 },
              { name: "Family Room Addition 18×18", x: 36, y: 26, w: 18, h: 18, isNew: true },
              { name: "New Deck ~12×14", x: 22, y: 26, w: 14, h: 12, isNew: true },
            ],
          },
        ],
        renderings: [],
      },
      {
        key: "D", plan: "Option", title: "Primary-suite reshuffle — two small bedrooms become one suite",
        verdict: "Situational",
        structural: [
          "Interior, non-bearing-dependent remodel: remove/relocate the partition between Bedrooms 2 and 3 (verify bearing at the center girder line), creating a ~22×8+ primary suite adjacent to the hall bath, which becomes the ensuite.",
          "The current primary + Bedroom 4 remain as the boys' rooms — the house becomes a true 3BR/3FB.",
        ],
        conditions: [
          "Bedroom count drops from 4 to 3 on any future listing — fine for this family's use, but it narrows the resale pool on a street that sells on bedroom count.",
        ],
        levels: [
          {
            id: "d-upper", name: "Option — Main level after the reshuffle", canvasW: 56, canvasH: 44,
            rooms: [
              { name: "Primary Suite (from BR 2+3)", x: 0, y: 0, w: 22, h: 8, isNew: true },
              { name: "Ensuite (was hall bath)", x: 22, y: 0, w: 6, h: 8, isNew: true },
              { name: "Hall", x: 6, y: 8, w: 22, h: 6 },
              { name: "Bath (was primary bath)", x: 0, y: 8, w: 6, h: 6 },
              { name: "Boys' Bedroom 1", x: 0, y: 14, w: 14, h: 12 },
              { name: "Boys' Bedroom 2", x: 14, y: 14, w: 8, h: 12 },
              { name: "Split-Foyer Entry", x: 28, y: 8, w: 6, h: 18 },
              { name: "Living Room", x: 28, y: 0, w: 26, h: 8 },
              { name: "Kitchen", x: 34, y: 8, w: 10, h: 18 },
              { name: "Dining Room", x: 44, y: 8, w: 10, h: 18 },
              { name: "Deck", x: 32, y: 26, w: 22, h: 15 },
            ],
          },
        ],
        renderings: [],
      },
    ],
  },

  // ---- six financial lenses ----
  financialModels: {
    intro: "Six financial lenses on the same choice — keep & improve vs buy/move vs sell — applied to this family's numbers. Inputs are anchored to late-July 2026: Freddie Mac 6.58%, a modeled ~2.9% purchase loan from August 2020 (the week PMMS hit its then-all-time low of 2.88%), Hartford's +3.9% Zillow forecast, ~7% investment returns.",
    models: [
      { n: "1 · Mortgage as an asset", favors: "Stay", how: "A below-market fixed mortgage is itself an asset — the present value of paying ~2.9% instead of ~6.6% on the remaining balance.", num: "~$215K at 2.95% costs ~$1,046/mo; re-borrowing the same balance at 6.58% over the same term costs ~$1,550/mo — a ~$500/mo, ~$6,100/yr subsidy. Its present value is roughly $55–70K.", says: "Keeping the loan is worth about $60K. A move extinguishes it — book that as a real cost of buying.", caveat: "Hinges on the unverified assumption of an unrefinanced Aug-2020 purchase loan. Verify the Note first — a refi or cash-out changes everything." },
      { n: "2 · Opportunity cost", favors: "Close call", how: "Compare 10-year terminal net worth: home equity plus freed monthly cash flow invested at ~7%.", num: "Moving costs ~+$2,100/mo all-in vs staying (Phase 1). Invested instead, that stream compounds to ~$360K over a decade — but the bigger house also compounds equity on a ~$700K base instead of ~$525K.", says: "The calculator below runs this live. At default assumptions the options land close enough that the tiebreakers — schools, rate, disruption — decide.", caveat: "Uses ONE return rate across options; the side-pot mechanic credits whichever option is cheaper, so treat small gaps as noise." },
      { n: "3 · Sell & rent", favors: "Stay (decisively)", how: "Sell, free ~$258K of equity, rent a comparable 4-bed — does that beat owning?", num: "Comparable 4BR houses in Simsbury ask $4,000–5,500/mo ($48–66K/yr). Owning all-in runs ~$22K/yr (interest ~$6.3K, tax ~$8.0K, insurance ~$2.9K, maintenance ~$5K) because the mortgage is cheap.", says: "Renting an equivalent house costs roughly 2–3× the annual cost of keeping this one. Selling to rent is the one clearly dominated strategy.", caveat: "Flips only if the actual mortgage turns out to be at market rate." },
      { n: "4 · Keep it & rent it out", favors: "Conditional", how: "Move up but keep 10 Bob White Way as a rental — cap rate, cash flow, leverage on the cheap loan.", num: "Redfin's rental AVM says ~$3,050/mo; market 4BR asks run higher ($3,995+). At ~$40K/yr gross and ~$19–24K NOI, that's a ~4–5% cap on $500K — but ~13% gross yield on the $310K basis, financed at 2.95%.", says: "Mediocre as a fresh investment, attractive purely because of the low basis and cheap debt — and only viable if the family can buy the next home without this equity.", caveat: "Landlording with two kids and a dog is a lifestyle choice; CT landlord regulation is tightening." },
      { n: "5 · Tax lens", favors: "Neutral-to-stay", how: "Map the sale and financing onto 2026 law: §121 exclusion, conveyance tax, property-tax reset.", num: "The gain (~$190K on a $310K basis) is far under the $500K married exclusion → $0 federal capital-gains tax. Real frictions: ~1.0% CT+town conveyance (~$5K at $500K) and a ~$3.1K/yr property-tax step-up ($7,960 today vs ~$11.1K on a $700K purchase).", says: "Capital-gains fear should not drive this decision — it's a non-issue. The genuine tax cost of moving is the conveyance tax plus the permanent tax reset.", caveat: "Simsbury revalues ~Oct 2027; all assessments drift toward market then, whichever option is chosen." },
      { n: "6 · IRR / breakeven", favors: "Stay & improve", how: "Treat each path as a capital project; compare the improvement's payback to the move's hurdle.", num: "Phase 1 ($25–50K at 60–71% recoup) has a net use-cost of ~$10–20K. A move must first clear ~$125–135K: ~$40–45K round-trip friction + ~$60K forfeited mortgage subsidy + ~$25–30K PV of the tax reset.", says: "The bigger house must be worth ~$130K of extra utility before its first square foot pays off. Phase 1 delivers most of the livability for a tenth of the hurdle.", caveat: "If the family genuinely needs 2,800+ sq ft, utility can absolutely clear $130K — this lens prices the toll, it doesn't forbid the road." },
    ],
    bottomLine: "Five of six lenses lean stay; none lean wait. The decisive items are the ~$130K move hurdle and the near-certain sub-3% loan — not a knockout on net worth. The honest caveat: every lens assumes the mortgage inference is right, and a family that truly wants colonial-scale space should pay the toll once, now, rather than renovate twice.",
  },

  // ---- assumption stress-test (updated after adversarial review) ----
  stress: {
    intro: "Before trusting the recommendation, here is where it could be wrong — each assumption, how load-bearing it is, and exactly what would flip the answer.",
    verdict: "STAY & IMPROVE holds as the baseline: the school argument is verified (Bob White Way → Latimer, the town's best-testing elementary), the lot's addition-feasibility is verified, and the move hurdle is large. But the case rests on one unverified number — the mortgage. Pull the statement before spending a dollar. And settle the real question first: is the pain COMFORT (no AC, dated corners → Phase 1 fixes it) or SCALE (the family wants 2,800+ sq ft → buy 5 Lawton-class space now, because no sensible project gets this house there)?",
    assumptions: [
      { a: "The family holds a ~2.9–3.0% mortgage from the Aug 2020 purchase.", status: "Unverified", load: "Highest", challenge: "Inferred from the closing date (the week PMMS printed 2.88%, its then-all-time low) — not from the actual Note. A refinance, cash-out, or ARM would change the arithmetic entirely.", flip: "If the statement shows ≥ ~4.5%, the lock-in premium mostly vanishes and Option B becomes the default for a space-hungry family." },
      { a: "The house is worth ~$500K (modeling range $453–553K).", status: "Wide range", load: "High", challenge: "Redfin's AVM says $552.8K, but the street's last actual sale is $452.5K (Dec 2024, a LARGER colonial) and no independent AVM was retrievable. The $100K spread moves equity, CLTV headroom, and the move budget.", flip: "A real CMA near $450K shrinks freed equity by ~$50K and tightens Option B's down payment math." },
      { a: "A ~$25–50K Phase 1 actually relieves the family's squeeze.", status: "Motivated", load: "Very high", challenge: "The family asked about space. Phase 1 adds comfort and finishes ~350 sq ft below grade — it adds ZERO above-grade square footage. If the true need is a bigger kitchen, mudroom, and bedrooms that fit teenagers, Phase 1 is a Band-Aid.", flip: "If the boys' bedrooms (likely ~10×11) are the pain, only Phase 2 or a move solves it — and the move solves it better per dollar of utility." },
      { a: "The street ceiling caps defensible spend near $120–150K.", status: "Estimated", load: "High", challenge: "Built from one Dec-2024 comp and reval-era assessments in a market still appreciating ~7%/yr town-wide. If renovated raised ranches now clear the mid-$500s, the ceiling is higher than modeled.", flip: "Sold comps ≥ $575K for renovated same-model homes would validate the full Combo scope (~$150–210K)." },
      { a: "Rates stay in the low-to-mid 6s; Hartford appreciation ~4%/yr.", status: "Consensus-anchored", load: "Medium", challenge: "Fannie/MBA both forecast 6%+ into 2028 and Hartford leads Zillow's 2026 hot list — but forecasts miss. A recession-driven rate collapse would rescue Option C retroactively.", flip: "Sub-5.5% rates within 2 years would make waiting look smart — no major forecaster projects it." },
      { a: "The 689-unit Hartford-campus development doesn't change the calculus.", status: "Watch item", load: "Low-medium", challenge: "The revised Silverman plan sits on the Weatogue side of town. More housing could add Latimer-zone enrollment and traffic — or add town amenities and buyers. Wetlands review is still pending.", flip: "Nothing near-term; worth watching before a Phase 2 commitment." },
    ],
    vulnerabilities: [
      "One unverified boolean — the mortgage rate — carries the whole ranking. Pull the Note first.",
      "The value estimate spans $100K (AVM vs street comp); every downstream number inherits that spread.",
      "Phase 1 solves comfort, not scale — if scale is the real complaint, the recommendation understates Option B.",
      "In-zone move inventory is one good listing deep; Option B's feasibility is partly luck-of-the-market.",
      "The interior floor plans are professional estimates — no published room dimensions exist; field-measure before design.",
    ],
  },

  assumptions: [
    { k: "Current home value", v: "$500,000 (±$50K)" },
    { k: "Modeled first mortgage", v: "$215K @ 2.95%*" },
    { k: "Today's 30-yr rate", v: "6.58% (PMMS 7/23)" },
    { k: "Home-equity (2nd lien)", v: "~7.75% fixed" },
    { k: "New home (move)", v: "$700,000" },
    { k: "Appreciation", v: "4% / yr (base)" },
    { k: "Property tax (current)", v: "$7,960/yr · 34.16 mills" },
    { k: "Effective tax on purchase", v: "~1.59% of price" },
    { k: "Selling + buying costs", v: "5.5% + 2%" },
    { k: "Insurance", v: "~$2,900/yr" },
    { k: "Horizon", v: "10 years" },
  ],

  references: [
    { key: "assessor", t: "Simsbury Assessor property record card — 10 Bob White Way (uniqueid 31406000, incl. building sketch)", u: "https://www.propertyrecordcards.com/PrintPage.aspx?towncode=128&uniqueid=31406000", cat: "Property records" },
    { key: "parcel", t: "CT Statewide Parcel Layer 2023 — 10 Bob White Way parcel polygon & attributes", u: "https://services3.arcgis.com/3FL1kr7L4LvwA2Kb/ArcGIS/rest/services/Connecticut_State_Parcel_Layer_2023/FeatureServer/0", cat: "Property records" },
    { key: "mls2020", t: "Coldwell Banker — 10 Bob White Way sold record (MLS 170307406, $310,000 on 8/7/2020; public water/sewer)", u: "https://www.coldwellbankerhomes.com/ct/simsbury/10-bob-white-way/pid_36556492/", cat: "Property records" },
    { key: "compass2020", t: "Compass — 10 Bob White Way 2020 listing (room program, 4 days on market)", u: "https://www.compass.com/listing/10-bob-white-way-simsbury-ct-06089/542825203313783593/", cat: "Property records" },
    { key: "redfinavm", t: "Redfin — 10 Bob White Way record (estimate $552,806; tax records; coordinates)", u: "https://www.redfin.com/CT/Weatogue/10-Bob-White-Way-06089/home/54003738", cat: "Property records" },
    { key: "cbh25", t: "Coldwell Banker — 25 Bob White Way sold $452,500 on 12/13/2024 (street's latest arm's-length comp; public water/sewer)", u: "https://www.coldwellbankerhomes.com/ct/simsbury/25-bob-white-way/pid_61590526/", cat: "Property records" },
    { key: "structures", t: "USA Structures (FEMA/ORNL) building-footprint layer — house position on lot", u: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/USA_Structures_View/FeatureServer/0", cat: "Property records" },
    { key: "millrate", t: "Town of Simsbury — FY2026-27 mill rate set at 33.67 (5/19/2026)", u: "https://www.simsbury-ct.gov/m/newsflash/home/detail/730", cat: "Property records" },

    { key: "streetpdf", t: "Simsbury Public Schools — Elementary Districts street listing (rev. 4/23/2025): 'Bob White Way → Latimer' (archived)", u: "http://web.archive.org/web/20260218211550/https://www.simsbury.k12.ct.us/uploaded/District_Content/Transportation/Street_Lisiting_Elem_Districts.pdf", cat: "Schools" },
    { key: "gslatimer", t: "Latimer Lane School — GreatSchools (9/10)", u: "https://www.greatschools.org/connecticut/simsbury/836-Latimer-Lane-School/", cat: "Schools" },
    { key: "psrlatimer", t: "Latimer Lane School — Public School Review (#36 of 939 CT elementaries; 78% math / 82% reading)", u: "https://www.publicschoolreview.com/latimer-lane-school-profile", cat: "Schools" },
    { key: "psrtootin", t: "Tootin' Hills — Public School Review (#77 CT)", u: "https://www.publicschoolreview.com/tootin-hills-school-profile", cat: "Schools" },
    { key: "psrcentral", t: "Central School — Public School Review (#78 CT)", u: "https://www.publicschoolreview.com/central-school-profile/06070", cat: "Schools" },
    { key: "psrsquadron", t: "Squadron Line — Public School Review (#105 CT)", u: "https://www.publicschoolreview.com/squadron-line-school-profile", cat: "Schools" },
    { key: "psrtariff", t: "Tariffville — Public School Review (#225 CT)", u: "https://www.publicschoolreview.com/tariffville-school-profile", cat: "Schools" },
    { key: "latreno", t: "Simsbury Patch — Latimer Lane's ~$39M renovation/expansion open house", u: "https://patch.com/connecticut/simsbury/simsbury-show-public-massive-school-renovation", cat: "Schools" },
    { key: "shsniche", t: "Simsbury High School — Niche (A, ~#17 CT, 2026)", u: "https://www.niche.com/k12/simsbury-high-school-simsbury-ct/rankings/", cat: "Schools" },
    { key: "tecton", t: "Simsbury facilities master plan (Tecton, 2019) — elementary enrollment −27% from the 2002 peak", u: "https://www.simsbury.k12.ct.us/uploaded/District_Content/files/Facilities_Master_Plan_and_Reconfiguration/Tecton_Presentation_04-23-19.pdf", cat: "Schools" },

    { key: "pmms", t: "Freddie Mac PMMS — 30-yr fixed 6.58% (week of 7/23/2026)", u: "https://www.freddiemac.com/pmms", cat: "Rates & market" },
    { key: "pmmshist", t: "Freddie Mac PMMS history CSV — Aug 2020 weekly prints (2.88% on 8/6/2020, then all-time low)", u: "https://www.freddiemac.com/pmms/docs/PMMS_history.csv", cat: "Rates & market" },
    { key: "mnd", t: "Mortgage News Daily — daily 30-yr index 6.81% (7/24/2026; 6.85% on 7/23 = 1-yr high)", u: "https://www.mortgagenewsdaily.com/mortgage-rates", cat: "Rates & market" },
    { key: "bankratect", t: "Bankrate — Connecticut mortgage rates (30-yr 6.63%, 7/26/2026)", u: "https://www.bankrate.com/mortgages/mortgage-rates/connecticut/", cat: "Rates & market" },
    { key: "fannie", t: "Scotsman Guide — Fannie Mae forecast: ~6.2–6.4% through 2027 ('little change for a very long time')", u: "https://www.scotsmanguide.com/news/fannie-mae-predicts-little-change-in-mortgage-rates-for-a-very-long-time/", cat: "Rates & market" },
    { key: "mba", t: "Forbes Advisor — MBA forecast: ~6.5% through 2027 into 2028", u: "https://www.forbes.com/advisor/mortgages/mortgage-interest-rates-forecast/", cat: "Rates & market" },
    { key: "fastco", t: "Fast Company — major forecasters keep rates above 6% through 2027", u: "https://www.fastcompany.com/91555790/mortgage-rates-housing-market-forecasters-staying-above-6-through-2027-unless-this-happens", cat: "Rates & market" },
    { key: "movototrends", t: "Movoto — Simsbury market trends (median sold $575K, 10 days on market, 75 actives; June 2026)", u: "https://www.movoto.com/simsbury-ct/market-trends/", cat: "Rates & market" },
    { key: "movoto", t: "Movoto — Simsbury CT active listings (captured 7/26/2026)", u: "https://www.movoto.com/simsbury-ct/", cat: "Rates & market" },
    { key: "movotoweatogue", t: "Movoto — Weatogue 06089 active listings (captured 7/26/2026)", u: "https://www.movoto.com/weatogue-ct/", cat: "Rates & market" },
    { key: "movotosold", t: "Movoto — Simsbury recently sold (Jul 2026: 4BR solds $580–915K)", u: "https://www.movoto.com/simsbury-ct/sold/", cat: "Rates & market" },
    { key: "cbhsimsbury", t: "Coldwell Banker — Simsbury listings (captured 7/26/2026)", u: "https://www.coldwellbankerhomes.com/ct/simsbury/", cat: "Rates & market" },
    { key: "cbhweatogue", t: "Coldwell Banker — Weatogue listings (captured 7/26/2026)", u: "https://www.coldwellbankerhomes.com/ct/simsbury/weatogue/", cat: "Rates & market" },
    { key: "zhvi", t: "Zillow — Simsbury home value index ~$449K, +7.4% YoY", u: "https://www.zillow.com/home-values/34004/simsbury-ct/", cat: "Rates & market" },
    { key: "hartford", t: "Zillow press — Hartford is the #1 hottest U.S. market for 2026 (+3.9% forecast; inventory 63% below pre-pandemic)", u: "https://zillow.mediaroom.com/2026-01-08-Hartford-edges-out-Buffalo-to-become-Zillows-hottest-market-for-2026", cat: "Rates & market" },
    { key: "conveyance", t: "CT conveyance tax explained — 0.75% state + 0.25% municipal at this price point", u: "https://mblawfirm.com/insights/residential-real-estate-insights/connecticut-conveyance-tax-explained/", cat: "Rates & market" },
    { key: "clever", t: "Clever — average real-estate commission post-NAR settlement (~5.4–5.7% total)", u: "https://listwithclever.com/average-real-estate-commission-rate/", cat: "Rates & market" },
    { key: "heloc", t: "Bankrate — HELOC rates (avg 7.43%, 7/22/2026)", u: "https://www.bankrate.com/home-equity/heloc-rates/", cat: "Rates & market" },
    { key: "helrate", t: "Bankrate — fixed home-equity loan rates (7.36–8.08%, 7/22/2026)", u: "https://www.bankrate.com/home-equity/home-equity-loan-rates/", cat: "Rates & market" },
    { key: "zumper", t: "Zumper — Simsbury houses for rent (4BR asks $3,995+; avg house rent $2,992, Jul 2026)", u: "https://www.zumper.com/houses-for-rent/simsbury-ct", cat: "Rates & market" },
    { key: "insurect", t: "Insure.com — CT homeowners insurance averages by dwelling value (updated 7/6/2026)", u: "https://www.insure.com/home-insurance/average-cost-of-homeowners-insurance-in-connecticut/", cat: "Rates & market" },

    { key: "zoning", t: "Simsbury Zoning Regulations §3.9 — R-40: 50-ft front / 40-ft side / 50-ft rear, 35-ft height (effective 5/21/2023; archived)", u: "http://web.archive.org/web/20230629222037/https://www.simsbury-ct.gov/sites/g/files/vyhlif9751/f/uploads/zoning_regulations_effective_special_events_in_i-1_districts_5-21-23_final_with_cover_0.pdf", cat: "Zoning & feasibility" },
    { key: "zba", t: "Simsbury ZBA legal notice 4/22/2026 — §3.9 cited; nearby addition variances granted", u: "https://www.simsbury-ct.gov/m/newsflash/Home/Detail/712", cat: "Zoning & feasibility" },
    { key: "wpca", t: "Simsbury Water Pollution Control — 'Are You Connected?' (confirm sewer lateral: 860-658-3258)", u: "https://www.simsbury-ct.gov/water-pollution-control/pages/are-you-connected", cat: "Zoning & feasibility" },
    { key: "aquarion", t: "Aquarion — 2025 Simsbury water-main replacement includes Bob White Way", u: "https://www.aquarionwater.com/community/newsroom/2025/03/18/water-infrastructure-work-to-begin-in-simsbury", cat: "Zoning & feasibility" },
    { key: "femanfhl", t: "FEMA National Flood Hazard Layer — parcel point in Zone X (minimal hazard)", u: "https://hazards.fema.gov/arcgis/rest/services/public/NFHL/MapServer", cat: "Zoning & feasibility" },
    { key: "nwi", t: "USFWS National Wetlands Inventory — no mapped wetland features within ~120 m", u: "https://fwspublicservices.wim.usgs.gov/wetlandsmapservice/rest/services/Wetlands/MapServer", cat: "Zoning & feasibility" },
    { key: "soils", t: "USDA SSURGO (SoilWeb) — parcel soils non-hydric (Udorthents-Urban; Cheshire fsl, well drained)", u: "https://casoilresource.lawr.ucdavis.edu/gmap/", cat: "Zoning & feasibility" },
    { key: "permits", t: "Simsbury Building Department — permit fee $16.26 per $1,000 of construction cost", u: "https://www.simsbury-ct.gov/391/Building-Department", cat: "Zoning & feasibility" },
    { key: "cgs53a", t: "CGS §12-53a — new construction assessed (prorated) from certificate of occupancy", u: "https://law.justia.com/codes/connecticut/title-12/chapter-203/section-12-53a/", cat: "Zoning & feasibility" },
    { key: "cgs62a", t: "CGS §12-62a — CT uniform assessment at 70% of fair market value", u: "https://law.justia.com/codes/connecticut/title-12/chapter-203/section-12-62a/", cat: "Zoning & feasibility" },

    { key: "casali", t: "Casali Companies — CT home addition costs 2026 ($125–300+/sf; scenario pricing)", u: "https://casalicompanies.com/blog/how-much-does-a-home-addition-cost-in-connecticut-in-2026", cat: "Construction costs" },
    { key: "lagace", t: "Lagace Construction — cost to build a home addition in CT (2026)", u: "https://lagaceconstruction.com/cost-to-build-home-addition-connecticut/", cat: "Construction costs" },
    { key: "fhc", t: "Fine Home Contracting — CT addition costs (build-out $150–330/sf vs build-up $280–560/sf)", u: "https://finehomecontracting.com/how-much-does-a-home-addition-cost-in-connecticut/", cat: "Construction costs" },
    { key: "hacc", t: "HomeAdditionCostCalculator — CT page (Hartford $185–330/sf; foundation & frost-depth notes)", u: "https://homeadditioncostcalculator.com/home-addition-cost-connecticut/", cat: "Construction costs" },
    { key: "blockrr", t: "Block Renovation — raised-ranch remodel guide (lower-level finish $30–60K; second story 'well into six figures')", u: "https://www.blockrenovation.com/guides/raised-ranch-remodel-ideas-challenges-tactics", cat: "Construction costs" },
    { key: "square1", t: "Square One Construction — the three raised-ranch expansion strategies", u: "https://square1cs.com/blog/raised-ranch-addition/", cat: "Construction costs" },
    { key: "renovetted", t: "RenoVetted — CT basement finishing $29–93/sf", u: "https://www.renovetted.com/cost/basement/connecticut", cat: "Construction costs" },
    { key: "dependable", t: "Dependable Energy — CT central-AC on existing ducts $6–12K+ (2026)", u: "https://dependableenergy.net/ac-installation-cost-connecticut/", cat: "Construction costs" },
    { key: "nuwatt", t: "NuWatt — CT ducted heat-pump costs & EnergizeCT 2026 rebate tiers", u: "https://nuwattenergy.com/en/connecticut/heat-pump-cost-2026", cat: "Construction costs" },
    { key: "energize", t: "EnergizeCT — residential air-source heat pump rebates", u: "https://www.energizect.com/rebates-incentives/heating-cooling/heat-pumps/residential-air-source", cat: "Construction costs" },
    { key: "hbgarage", t: "HomeBlue — Hartford detached 2-car garage cost $27–40K", u: "https://www.homeblue.com/garage/hartford-ct-cost-to-build-a-garage.htm", cat: "Construction costs" },
    { key: "superior", t: "Superior Remodelers — CT garage conversions & addition planning", u: "https://www.superiorremodelers.com/how-to-plan-home-addition-connecticut/", cat: "Construction costs" },
    { key: "modernize", t: "Modernize — egress window installation cost ($2.7–5.9K)", u: "https://modernize.com/windows/types/egress-windows-cost", cat: "Construction costs" },
    { key: "jct", t: "J.C. Tonnotti — CT sunroom/3-season costs", u: "https://www.jctonnotti.com/sunroom-addition-cost", cat: "Construction costs" },

    { key: "cvv", t: "Zonda Cost vs. Value 2025 — recoup: primary suite ~27%/16%, bath addition ~53%, basement 63–71%", u: "https://www.fixr.com/articles/cost-vs-value", cat: "Value & appraisal" },
    { key: "cvvpdf", t: "Cost vs. Value 2025 report PDF (2024 national averages table)", u: "https://lookbooklink.com/storage/14805/Cost_vs_Value_2025.pdf", cat: "Value & appraisal" },
    { key: "ansi", t: "Fannie Mae Selling Guide B4-1.3-05 — ANSI Z765: any partly below-grade level is excluded from above-grade square footage", u: "https://selling-guide.fanniemae.com/sel/b4-1.3-05/improvements-section-appraisal-report", cat: "Value & appraisal" },
    { key: "getloans", t: "'Below-grade square footage gets erased' — ANSI's effect on raised ranches", u: "https://www.getloans.com/blog/below-grade-square-footage-gets-erased/", cat: "Value & appraisal" },
    { key: "basementcredit", t: "McKissock — appraising basements (below-grade contributory value ~50–75% of GLA $/sf)", u: "https://www.mckissock.com/blog/appraisal/6-tips-appraising-basements/", cat: "Value & appraisal" },
    { key: "regression", t: "Principle of regression — the best house on a street is pulled toward its neighbors", u: "https://bostonappraisal.com/neighborhood-property-values-conformity-progression-regression/", cat: "Value & appraisal" },

    { key: "strattonbrook", t: "CT State Parks — Stratton Brook State Park (2.7 mi)", u: "https://ctparks.com/parks/stratton-brook-state-park", cat: "Family & neighborhood" },
    { key: "simsburyfarms", t: "Town of Simsbury — Simsbury Farms recreation complex", u: "https://www.simsbury-ct.gov/628/Simsbury-Farms", cat: "Family & neighborhood" },
    { key: "dogpark", t: "Paw Meadow Dog Park — 22 Iron Horse Blvd (fenced, off-leash)", u: "https://simsburyct.myrec.com/info/facilities/details.aspx?FacilityID=13466", cat: "Family & neighborhood" },
    { key: "fcht", t: "Farmington Canal Heritage Trail — Simsbury paved sections", u: "https://fchtrail.org/our-trails/", cat: "Family & neighborhood" },
    { key: "hockey", t: "Simsbury Youth Hockey Association", u: "https://www.simsburyhockey.com/", cat: "Family & neighborhood" },
    { key: "littleleague", t: "Simsbury Little League", u: "https://www.simsburylittleleague.com/", cat: "Family & neighborhood" },
    { key: "hbj689", t: "Hartford Business Journal — revised 689-unit plan for the former Hartford campus (Weatogue side)", u: "https://hartfordbusiness.com/article/revised-689-unit-simsbury-housing-plan-features-apartments-duplexes-single-family-homes/", cat: "Family & neighborhood" },

    { key: "aacap", t: "AACAP Facts for Families #14 — Children and Family Moves", u: "https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Family-Moves-014.aspx", cat: "Kids & moving research" },
    { key: "oishi", t: "Oishi & Schimmack (2010), JPSP — childhood moves and adult well-being (introversion moderates)", u: "https://www.apa.org/pubs/journals/releases/psp-98-6-980.pdf", cat: "Kids & moving research" },
    { key: "calhoun", t: "Calhoun (2026), Population, Space & Place — school moves, not residential moves, carry the harm", u: "https://onlinelibrary.wiley.com/doi/10.1002/psp.70194", cat: "Kids & moving research" },
    { key: "frontiers", t: "Frontiers in Psychology (2019) — childhood residential mobility cohort review", u: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.02311/full", cat: "Kids & moving research" },
    { key: "childmind", t: "Child Mind Institute — advice for moving with children", u: "https://childmind.org/article/advice-for-moving-with-children/", cat: "Kids & moving research" },
  ],

  // ---- calculator defaults (the financial engine reads these) ----
  model: {
    currentValue: 500000,
    currentBalance: 215000,
    currentRate: 2.95,      // THE swing variable — inferred from the Aug 2020 closing
    currentTermLeft: 24,    // yrs remaining on the original 30
    todayRate: 6.60,
    additionCost: 120000,   // Phase 1 + Phase 2 midpoint (comfort + rear family room)
    additionRecoup: 55,     // % of spend reflected in market value
    heRate: 7.75,
    heTerm: 15,
    newHomePrice: 700000,
    appreciation: 4.0,
    investReturn: 7.0,
    horizon: 10,
    millRate: 0.03481,      // FY27: 33.67 town + ~1.14 fire (est.)
    assessRatio: 0.70,
    effTaxRate: 0.0159,     // actual bill ÷ market value (2022-reval basis)
    currentTax: 8113,       // FY27 estimate
    insurance: 2900,
    maintRate: 0.01,
    sellCostPct: 0.055,
    buyCostPct: 0.02,
    waitYears: 2,
    waitApprNew: 4.5,       // target home grows a bit faster while waiting
    waitRate: 6.30,
  },
};
