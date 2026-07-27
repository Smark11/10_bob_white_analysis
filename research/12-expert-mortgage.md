# Adversarial Review — Mortgage Loan Officer (Iteration 4)

## Verdict (quotable)
"This draft does what every smart-money analysis does: it builds a castle on an unpulled loan statement. The arithmetic inside the model is mostly honest — I verified the mortgage-as-asset PV myself — but the draft quietly assumes the best borrower in America: 20% down, a 2.88%-week rate nobody who closed August 7 actually locked, and a second-lien market that prices a $30K loan like a $150K one. Every assumption leans the same direction: toward 'stay.'"

## Biggest catch
"~$185K of second-lien headroom, no CLTV gate" is only true at the midpoint. At $453K value: 80% CLTV → **$147K** headroom — Phase-2 top ($160K) and the Combo ($150–210K) ARE gated. If the family did 5–10% down in 2020: balance $242–255K → headroom **$107–120K** at the low value; even the default $120K project then needs 85–90% CLTV pricing at 8.5%+, not 7.75%.

## Corrections demanded
1. Replace "no CLTV gate" with "no gate at the $500K/$215K midpoint" + publish the matrix; Combo breaches 80% CLTV in most cells.
2. **Rate-asset PV horizon mismatch**: ~$65K is a 24-year-hold number (verified); over the model's own 10-year horizon the asset is ≈ **$49K** → move hurdle ~$110–120K, not $125–135K. Disclose refi optionality for a mover.
3. Small-loan HE pricing: use ~8.10–8.25% for Phase 1 ($25–50K notes price at Bankrate's top, 8.08%); keep 7.75% only for $100K+ scope.
4. Lock-date: contract ~June 2020 → locked Jun–Jul when PMMS was ~3.02–3.16% (+0.8 pts assumed). Realistic note band **3.0–3.25%**, not 2.95%; trims rate asset ~$4–8K. Add the unmodeled FHA branch: 3.5%-down FHA → ~$265K balance + life-of-loan 0.85% MIP → effective ~3.85%, uncomfortably close to the 4.5% flip threshold. "Pull the Note" can't be a footnote.

## Engine/math findings
- **BUG — flat insurance across options** (model.js: B and C use m.insurance=2900): a $700K CT house insures ~$3,800–4,300/yr. Understates B's carry ~$1,000–1,400/yr (~$14K + side-pot effects/10yr). Favors Move; fixing strengthens Stay.
- **INCONSISTENCY — side pot ignores maintenance**: `cash` includes maintenance, `avgMonthly` (drives side pot) excludes it; ~$140/mo difference A vs B → ~**$24K** more side pot for Stay if included. Fixing strengthens Stay.
- Internal inconsistency: assumptions "$7,960 @34.16" vs model.currentTax 8113 (FY27); insurance "~$2,900" flat for $500K and $700K houses.
- P&I mismatch: stated ~$1,046/mo is the 3.0% row; 2.95%/$248K pays ~$1,039.
- No PMI logic: default B is 65% LTV (fine — verified), but sliders can push past 80% and the model silently omits PMI (0.3–0.6%/yr).
- **No DTI/income feasibility check anywhere**: B's PITI ≈ $4,080/mo → requires ~**$115–135K gross income** at 36–43% DTI with no other debts; keep-and-rent (lens 4) requires qualifying while carrying both liens.
