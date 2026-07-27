# Adversarial Review — Fee-Only CFP (Iteration 4)

## Verdict (quotable)
"I ran this family's engine myself, and here is what the site doesn't tell you: the model is incapable of recommending a move. Even at a 6.6% current mortgage — golden handcuffs erased — Option A still 'wins,' because the model prices 1,300 square feet of extra living space for two growing boys at exactly zero dollars while crediting every dollar not spent with a frictionless, untaxed 7% return. The honest questions — what is the space worth to you, and will you actually invest $861 a month for 120 straight months — are the two inputs it refuses to model."

## Biggest catch
By the engine's own arithmetic, the recommended plan is the worst version of staying: set additionCost to 0 and A's net worth jumps $787K → $964K — the $120K Phase 2 destroys ~$177K of modeled terminal wealth (45% instant value loss + $83K of 15-yr interest at 7.75% + forgone compounding). The addition is financed at 7.75% — 115bp ABOVE the 6.6% move rate; the sub-3% mortgage protects only the existing $215K, not one dollar of new space. "The site's headline says stay and improve; its engine says stay and do nothing."

## Corrections demanded
1. Verdict threshold (rate < 4.5) contradicts the engine both directions (B wins raw equity at defaults; A leads even at 5.5%). Derive it or drop the pretense the calculator informs the verdict. Engine has NO input for space utility — B's incremental cost ≈ **$7.95/sqft/yr**, cheap vs any rental benchmark.
2. **Selling costs understated ~1.5pt / conveyance double-booked**: 5.5% can't contain both ~5.4-5.7% post-NAR commission AND the 1.0% conveyance Lens 5 counts separately. True exit ~6.5-7% (~$32.5-35K on $500K). (Favors staying.) Lens 6's hurdle re-adds costs the simulation already prices; Lenses 1/2/6 are the same rate-gap fact three times — "five of six lenses" overstates independence.
3. Side pot is pre-tax (~5.5% after-tax → A's lead $149K→~$137K), assumes 100% savings discipline ($861/mo × 120mo; at 50% capture A's lead halves to ~$65K), and fvMonthly's level-stream assumption overstates A ~12% at H=20 (HE loan retires yr 15) and understates C at every horizon.
4. Maintenance/insurance decorative: maintenance never touches ranking (cash only); insurance flat $2,900 across $525K/$700K homes; taxes frozen nominal 10 yrs despite Oct 2027 reval.

## model.js errors
- Side pot: level-stream fvMonthly on horizon-average difference — wrong when heTerm < horizon or for C's front-loaded savings.
- maintA/B/C feed cash only; excluded from avgMonthly/side pot/net.
- Taxes constant nominal; taxA charges addition assessment from month 1 (pre-CO; minor, against A).
- maintCarry uses un-grown currentValue (trivially understates C).
- No PMI logic if sliders push LTV > 80%.
- Verdict flip decoupled from computeOptions — engine leader is 'a' under every tested config; bars decorate, never inform.
