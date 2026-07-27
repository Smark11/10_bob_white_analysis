/* =========================================================================
   APP — render data, wire the live calculator, charts, map, scroll motion.
   Chart series palette (validated for CVD + contrast on the paper surface):
     A #2E8B6A · B #D2622A · C #5578C0 · accent #B98A2E
   ========================================================================= */
(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };

  /* ---------- formatting ---------- */
  const moneyK = (n) => {
    n = Math.round(n);
    const s = n < 0 ? "-" : "";
    const a = Math.abs(n);
    if (a >= 1e6) return s + "$" + (a / 1e6).toFixed(a >= 1e7 ? 1 : 2).replace(/\.?0+$/, "") + "M";
    if (a >= 1e3) return s + "$" + Math.round(a / 1e3) + "K";
    return s + "$" + a;
  };
  const moneyFull = (n) => (n < 0 ? "-$" : "$") + Math.abs(Math.round(n)).toLocaleString();
  const pct = (n) => Number(n).toFixed(2).replace(/\.?0+$/, "") + "%";

  /* ===================== STATIC RENDERS ===================== */
  function renderProperty() {
    const wrap = $("#specs");
    DATA.property.specs.forEach(s => {
      wrap.appendChild(el("div", "spec", `<div class="k">${s.k}</div><div class="v">${s.v}${s.sub ? ` <small>${s.sub}</small>` : ""}</div>`));
    });
  }

  function renderSchools() {
    const wrap = $("#schoolBars");
    DATA.schools.forEach(s => {
      const row = el("div", "sbar" + (s.home ? " is-home" : ""));
      row.innerHTML = `
        <div class="sbar__name">${s.name}${s.home ? '<span class="home-flag">Their zone</span>' : ""}<small>${s.sub}</small></div>
        <div class="sbar__track"><i class="sbar__fill" data-w="${s.gs * 10}" title="Math ${s.math} · Reading ${s.read} · ${s.rank}"></i></div>
        <div class="sbar__score">${s.gs.toFixed(1)}<span style="font-size:.6em;color:var(--muted)">/10</span></div>`;
      wrap.appendChild(row);
    });
    const pl = $("#pipeline");
    DATA.pipeline.forEach(p => pl.appendChild(el("div", "pnode", `<div class="k">${p.k}</div><div class="v">${p.v}</div><div class="s">${p.s}</div>`)));
  }

  function renderOptions() {
    const wrap = $("#optCards");
    DATA.options.forEach(o => {
      const dots = Array.from({ length: 10 }, (_, i) => `<i class="${i < Math.round(o.score) ? "on" : ""}"></i>`).join("");
      const card = el("div", `opt opt--${o.cls}`);
      card.innerHTML = `
        ${o.recommended ? '<span class="opt__rec">★ Recommended</span>' : ""}
        <div class="opt__k">${o.k}</div>
        <div class="opt__title">${o.title}</div>
        <div class="opt__score"><span class="num">${o.score}</span><span class="den">/10</span><span class="scoredots">${dots}</span></div>
        <p class="opt__sum">${o.summary}</p>
        <ul class="opt__list pros">${o.pros.map(p => `<li>${p}</li>`).join("")}</ul>
        <ul class="opt__list cons">${o.cons.map(c => `<li>${c}</li>`).join("")}</ul>
        <div class="opt__foot">${o.foot.map(f => `<div><div class="k">${f.k}</div><div class="v">${f.v}</div></div>`).join("")}</div>`;
      wrap.appendChild(card);
    });
  }

  function renderExperts() {
    const wrap = $("#expCards");
    if (!DATA.experts || !DATA.experts.length) { const s = $("#experts"); if (s) s.style.display = "none"; return; }
    DATA.experts.forEach(e => {
      const c = el("div", "exp");
      c.innerHTML = `
        <div class="exp__head">
          <div class="exp__avatar" style="background:${e.color}">${e.initials}</div>
          <div class="exp__role">${e.role}<small>${e.sub}</small></div>
        </div>
        <p class="exp__verdict">“${e.verdict}”</p>
        <div class="exp__catch"><div class="k">${e.catchTitle}</div><p>${e.catch}</p></div>`;
      wrap.appendChild(c);
    });
    const cl = $("#corrections");
    (DATA.corrections || []).forEach((c, i) => cl.appendChild(el("li", null, `<span class="num">${String(i + 1).padStart(2, "0")}</span><span class="ct">${c}</span>`)));
  }

  function renderListings() {
    const wrap = $("#listings");
    DATA.listings.forEach(l => {
      const c = el("div", "lcard" + (l.star ? " is-star" : ""));
      c.innerHTML = `
        ${l.star ? `<span class="lcard__star">★ ${l.star}</span>` : ""}
        <div class="lcard__top">
          <div class="lcard__price">${l.price}</div>
          <span class="lcard__zone ${l.zone ? "in" : "out"}">${l.zone ? "Latimer" : (l.zname || "Other zone")}</span>
        </div>
        <div class="lcard__addr">${l.addr}</div>
        <div class="lcard__specs"><span>${l.beds} bd</span><span>${l.baths} ba</span><span>${l.sqft} sqft</span>${l.lot && l.lot !== "—" ? `<span>${l.lot}</span>` : ""}</div>
        ${l.status ? `<div class="lcard__status">● ${l.status}</div>` : ""}
        <div class="lcard__note">${l.note}</div>
        <a class="lcard__link" href="${l.url}" target="_blank" rel="noopener">View source →</a>`;
      wrap.appendChild(c);
    });
  }

  function renderForecast() {
    const wrap = $("#timeline");
    DATA.forecast.forEach(f => {
      wrap.appendChild(el("div", "tl", `
        <div class="tl__h">${f.h}</div>
        <div class="tl__t">${f.t}</div>
        <div class="tl__row"><div class="k">Inventory</div><div class="v">${f.inv}</div></div>
        <div class="tl__row"><div class="k">Prices</div><div class="v">${f.price}</div></div>`));
    });
  }

  function renderLife() {
    const wrap = $("#lifeGrid"); if (!wrap) return;
    DATA.life.forEach(p => wrap.appendChild(el("div", "pnode", `<div class="k">${p.k}</div><div class="v">${p.v}</div><div class="s">${p.s}</div>`)));
    const psy = $("#psychCards");
    if (psy && DATA.movePsych) {
      $("#psychIntro").textContent = DATA.movePsych.intro;
      DATA.movePsych.items.forEach(it => psy.appendChild(el("div", "psy", `<div class="psy__t">${it.t}</div><p>${it.d}</p>`)));
    }
  }

  function renderAddition() {
    const A = DATA.addition;
    $("#additionIntro").textContent = A.intro;
    $("#additionCeiling").textContent = A.ceiling;
    $("#additionSoft").innerHTML = "<b>Soft costs & contingency.</b> " + A.softCosts;
    $("#additionSeptic").innerHTML = "<b>✓ Public water &amp; sewer — no septic gate.</b> " + A.septic;
    $("#additionBottom").innerHTML = "“" + A.bottomLine + "”<span class=\"by\">— Improvement menu · bottom line</span>";

    const rec = A.scenarios.find(s => s.rec);
    $("#additionRec").innerHTML = `
      <div>
        <div class="k">★ Recommended first move for this house</div>
        <div class="t">${rec.name}</div>
        <p>${rec.get} ${rec.note}</p>
      </div>
      <div class="price"><div class="n">${moneyK(rec.lo)}–${moneyK(rec.hi)}</div><div class="s">all-in · ${rec.time}</div></div>`;

    const wrap = $("#additionScenarios");
    A.scenarios.forEach(s => {
      const over = s.lo >= 150000;
      const card = el("div", "add-card" + (s.rec ? " is-rec" : "") + (over ? " over" : ""));
      card.innerHTML = `
        <div class="add-card__tag">${s.plan ? '<span class="plan-badge">' + s.plan + '</span> ' : ""}${s.rec ? "★ " : ""}${s.tag}</div>
        <div class="add-card__name">${s.name}</div>
        <div class="add-card__cost">${moneyK(s.lo)}–${moneyK(s.hi)}</div>
        <div class="add-card__get">${s.get}</div>
        <div class="add-card__meta"><span>${s.sqft}</span><span>recoup ${s.recoup}</span><span>${s.time}</span></div>
        <div class="add-card__note">${s.note}</div>`;
      wrap.appendChild(card);
    });

    const maxPct = Math.max(...A.lineItems.map(x => x.pct));
    const li = $("#additionLineItems");
    A.lineItems.forEach(x => {
      const row = el("div", "lineitem");
      row.innerHTML = `
        <div class="lineitem__top"><span class="lineitem__lab">${x.item}</span><span class="lineitem__pct">${x.pct}%</span></div>
        <div class="lineitem__track"><i class="lineitem__fill" data-w="${Math.round(x.pct / maxPct * 100)}"></i></div>
        <div class="lineitem__note">${x.note}</div>`;
      li.appendChild(row);
    });
  }

  function buildAdditionChart() {
    if (!window.Chart) return;
    const items = DATA.addition.scenarios.slice().sort((a, b) => a.lo - b.lo);
    const labels = items.map(s => (s.rec ? "★ " : "") + (s.short || s.name));
    const data = items.map(s => [s.lo, s.hi]);
    const colors = items.map(s => s.hi <= 150000 ? "#2E8B6A" : (s.lo >= 150000 ? "#D2622A" : "#B98A2E"));
    const ceiling = {
      id: "ceil",
      afterDatasetsDraw(chart) {
        const x = chart.scales.x.getPixelForValue(150000);
        const { top, bottom } = chart.chartArea, ctx = chart.ctx;
        ctx.save(); ctx.strokeStyle = "#B0461E"; ctx.setLineDash([5, 4]); ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(x, top); ctx.lineTo(x, bottom); ctx.stroke();
        ctx.setLineDash([]); ctx.fillStyle = "#B0461E"; ctx.font = "600 10px 'Spline Sans Mono'";
        ctx.fillText("~$150K street ceiling", x + 5, top + 11); ctx.restore();
      },
    };
    new Chart($("#additionChart"), {
      type: "bar",
      data: { labels, datasets: [{ label: "Cost range", data, backgroundColor: colors, borderRadius: 5, barThickness: 17 }] },
      options: {
        indexAxis: "y", responsive: true, maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { backgroundColor: "#20201B", callbacks: { label: (c) => ` ${moneyK(c.raw[0])} – ${moneyK(c.raw[1])}` } },
        },
        scales: {
          x: { min: 0, grid: { color: "#E4DCCB" }, ticks: { font: { family: "Spline Sans Mono", size: 10 }, color: "#63604F", callback: (v) => moneyK(v) } },
          y: { grid: { display: false }, ticks: { font: { family: "Spline Sans Mono", size: 10.5 }, color: "#56544A" } },
        },
      },
      plugins: [ceiling],
    });
  }

  /* ---------- to-scale floor plans ---------- */
  function fpName(n) {
    return n.replace(/\([^)]*\)/g, "").replace(/\s*—.*$/, "").replace(/\s+/g, " ").trim();
  }
  function fpSvg(level) {
    const ppf = 13, pad = 24;
    const W = level.canvasW, H = level.canvasH;
    const vbW = Math.round(W * ppf + pad * 2), vbH = Math.round(H * ppf + pad * 2);
    const PX = v => Math.round(pad + v * ppf);
    let b = "";
    (level.rooms || []).forEach(r => {
      const x = PX(r.x), y = PX(r.y), w = Math.round(r.w * ppf), h = Math.round(r.h * ppf);
      const aux = /deck|storage|stairs/i.test(r.name);
      const cls = r.isNew ? "fpr fpr--new" : (aux ? "fpr fpr--aux" : "fpr");
      b += `<rect class="${cls}" x="${x}" y="${y}" width="${w}" height="${h}" rx="2"/>`;
      const cx = x + w / 2, cy = y + h / 2;
      const small = r.w < 8 || r.h < 7;
      b += `<text class="fpr-n${small ? " sm" : ""}" x="${cx}" y="${cy - (small ? 1 : 5)}">${fpName(r.name)}</text>`;
      if (!small) b += `<text class="fpr-d" x="${cx}" y="${cy + 10}">${Math.round(r.w)}×${Math.round(r.h)}</text>`;
      if (r.isNew) b += `<text class="fpr-tag" x="${x + w - 3}" y="${y + 12}">NEW</text>`;
    });
    const sy = vbH - 10, sx0 = pad, sx1 = pad + 10 * ppf;
    b += `<line class="fp-scale" x1="${sx0}" y1="${sy}" x2="${sx1}" y2="${sy}"/><text class="fp-scaletx" x="${sx0}" y="${sy - 4}">10 ft</text>`;
    b += `<text class="fp-edge" x="${pad}" y="${pad - 9}">front / Bob White Way · driveway at left</text>`;
    return `<svg viewBox="0 0 ${vbW} ${vbH}" class="fp-svg" role="img" aria-label="${level.name} — to-scale floor plan">${b}</svg>`;
  }
  function fpCard(level) {
    const c = el("div", "fp-card");
    c.innerHTML = `<div class="fp-card__title">${level.name}</div>` + fpSvg(level);
    return c;
  }
  function archVclass(v) { v = (v || "").toLowerCase(); return /not advised/.test(v) ? "bad" : (/condition|situational/.test(v) ? "cond" : "ok"); }
  function renderFloorplans() {
    const F = DATA.floorplans; if (!F) return;
    $("#plansDisclaim").textContent = F.disclaimer;
    const pc = $("#plansConsensus"); if (pc) pc.textContent = F.panelConsensus || "";
    const ex = $("#plansExisting");
    F.existing.forEach(L => ex.appendChild(fpCard(L)));
    const wrap = $("#plansOptions");
    F.options.forEach(op => {
      const block = el("div", "optplan r");
      const badge = op.plan ? `<span class="plan-badge">${op.plan}</span> ` : "";
      const rec = op.key === "REC" ? ' <span class="tag pine" style="vertical-align:middle">Recommended</span>' : "";
      block.innerHTML = `<h3 class="optplan__h">${badge}${op.title}${rec}</h3><div class="arch-verdict ${archVclass(op.verdict)}">Feasibility — ${op.verdict}</div>`;
      const body = el("div", "optplan__body");
      const plansCol = el("div", "optplan__plans");
      (op.levels || []).forEach(L => plansCol.appendChild(fpCard(L)));
      body.appendChild(plansCol);
      const hasRenders = op.renderings && op.renderings.length;
      if (hasRenders) {
        const rcol = el("div", "optplan__renders");
        op.renderings.forEach(r => {
          const rd = el("div", "render");
          rd.innerHTML = `<img src="images/${r.img}" alt="${r.cap}" loading="lazy" onerror="this.closest('.render').style.display='none'"><div class="render__cap">${r.cap}</div>`;
          rcol.appendChild(rd);
        });
        body.appendChild(rcol);
      } else {
        body.classList.add("optplan__body--single");
      }
      block.appendChild(body);
      if ((op.structural && op.structural.length) || (op.conditions && op.conditions.length)) {
        const notes = el("div", "arch-notes");
        let h = "";
        if (op.structural && op.structural.length) h += `<div class="arch-col"><div class="arch-k">Scope &amp; structure</div><ul>${op.structural.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
        if (op.conditions && op.conditions.length) h += `<div class="arch-col"><div class="arch-k">Conditions &amp; risks</div><ul>${op.conditions.map(t => `<li>${t}</li>`).join("")}</ul></div>`;
        notes.innerHTML = h;
        block.appendChild(notes);
      }
      wrap.appendChild(block);
    });
  }

  function renderFinancialModels() {
    const F = DATA.financialModels; if (!F) return;
    $("#modelsIntro").textContent = F.intro;
    $("#modelsBottom").innerHTML = "“" + F.bottomLine + "”<span class=\"by\">— across all six lenses</span>";
    const w = $("#modelCards");
    F.models.forEach(m => {
      const c = el("div", "model-card");
      c.innerHTML = `
        <div class="model-card__top"><div class="model-card__n">${m.n}</div><span class="model-card__favors">Favors: ${m.favors}</span></div>
        <div class="model-card__row"><span class="mk">How it works</span><span class="mv">${m.how}</span></div>
        <div class="model-card__row"><span class="mk">The numbers</span><span class="mv">${m.num}</span></div>
        <div class="model-card__row"><span class="mk">What it says</span><span class="mv">${m.says}</span></div>
        <div class="model-card__caveat">Caveat — ${m.caveat}</div>`;
      w.appendChild(c);
    });
  }

  function renderStress() {
    const S = DATA.stress; if (!S) { const s = $("#stress"); if (s) s.style.display = "none"; return; }
    $("#stressIntro").textContent = S.intro;
    $("#stressVerdict").innerHTML = `<div class="k">Does the recommendation hold?</div><p>${S.verdict}</p>`;
    const w = $("#stressList");
    S.assumptions.forEach(x => {
      const ok = /verified|consensus/i.test(x.status);
      const it = el("div", "stress-item");
      it.innerHTML = `
        <div class="stress-item__head"><span class="stress-a">${x.a}</span><span class="stress-badge ${ok ? "ok" : "warn"}">${x.status}</span></div>
        <div class="stress-meta">Load-bearing: <b>${x.load}</b></div>
        <p class="stress-ch">${x.challenge}</p>
        <p class="stress-flip"><b>Flips if:</b> ${x.flip}</p>`;
      w.appendChild(it);
    });
    const v = $("#stressVuln");
    S.vulnerabilities.forEach(t => v.appendChild(el("li", null, t)));
  }

  function renderVerdictExtras() {
    const checklist = [
      ["Pull the mortgage statement", "rate, balance, term — the entire ranking rests on the inferred ~2.9%. One phone call settles it"],
      ["Name the real pain: comfort or scale?", "no AC and a dated corner → Phase 1 fixes it for ~$25–50K; wanting 2,800+ sq ft → that's a move, not a project"],
      ["Inspect the ducts before pricing the AC", "the 2020 MLS said baseboard heat; the 2026 assessor card says forced air — if AC-sized ducts exist, cooling is $6–15K; if not, $15–30K"],
      ["Get a real CMA, not an AVM", "the time-adjusted estimate is ~$525K, but it's an adjustment exercise — a local agent's comp run replaces it in an afternoon"],
      ["Confirm the sewer lateral & the right-of-way", "the street is sewered per two MLS records; call Simsbury WPCF (860-658-3258) and locate the deeded right-of-way on a survey before siting any addition"],
      ["Price the heat-pump rebate before contracting", "EnergizeCT's top tier (up to $10K) historically targets oil/propane displacement — verify what a gas-heated home qualifies for"],
      ["Get 2–3 fixed-price bids for each phase", "not cost-plus — and carry 15–20% contingency on a 1965 house"],
      ["Watch 5 Lawton Drive-class listings", "if a true in-zone 3,000 sq ft home appears in budget while bids are out, re-run the calculator before committing"],
      ["Field-measure before design", "the floor plans here fit the assessor envelope exactly, but no interior dimensions were ever published"],
    ];
    const cl = $("#checklist");
    checklist.forEach(([t, d]) => cl.appendChild(el("li", null, `<span class="box">✓</span><span class="tx"><b>${t}</b> — ${d}</span>`)));

    const flips = [
      "The statement shows an effective rate ≥ ~4.5% — refi, cash-out, ARM, or the FHA branch (3.5% down + life-of-loan MIP ≈ 3.9% effective, already close) — and the lock-in premium mostly vanishes.",
      "The family's honest answer is “we want 2,800+ square feet” — no sensible project gets a 54×26 raised ranch there; buy the space once.",
      "A CMA lands near $450K — freed equity shrinks ~$50K and Option B's math tightens; near $575K — the improvement ceiling rises and the Combo scope becomes defensible.",
      "Bids for the rear addition come back over ~$180K while a 5 Lawton-class in-zone listing sits on the market.",
      "The survey puts the deeded right-of-way through the rear yard — the addition site moves or dies.",
      "Rates genuinely break below ~5.5% — refinance-and-stay strengthens, but so does the buyer pool competing for every in-zone listing.",
    ];
    const fl = $("#flips");
    flips.forEach(f => fl.appendChild(el("div", "flip", f)));
  }

  function renderMethodology() {
    const a = $("#assumptions");
    DATA.assumptions.forEach(x => a.appendChild(el("li", null, `<span class="k">${x.k}</span><span class="v">${x.v}</span>`)));
    const wrap = $("#references");
    window.__refmap = {};
    if (wrap && DATA.references) {
      let n = 0;
      DATA.references.forEach(r => {
        n++;
        if (r.key) window.__refmap[r.key] = n;
        const it = el("div", "ref-item"); it.id = "ref-" + n;
        it.innerHTML = `<span class="ref-n">${n}.</span><span class="ref-body"><a href="${r.u}" target="_blank" rel="noopener">${r.t}</a><span class="ref-tag">${r.cat}</span></span>`;
        wrap.appendChild(it);
      });
      const rc = $("#refCount"); if (rc) rc.textContent = n + " sources";
    }
    document.querySelectorAll("[data-cite]").forEach(c => {
      const nums = c.getAttribute("data-cite").split(",").map(k => window.__refmap[k.trim()]).filter(Boolean);
      if (!nums.length) { c.style.display = "none"; return; }
      c.innerHTML = nums.map(nn => `<a href="#ref-${nn}">${nn}</a>`).join(",");
    });
  }

  /* ===================== CALCULATOR ===================== */
  const CONTROLS = [
    { key: "currentRate", label: "Their current mortgage rate", sub: "★ the swing variable", min: 2.5, max: 7.5, step: 0.05, fmt: "pct" },
    { key: "currentBalance", label: "Mortgage balance remaining", min: 100000, max: 400000, step: 5000, fmt: "money" },
    { key: "currentValue", label: "Current home value", sub: "time-adjusted as-is ~$525K", min: 425000, max: 600000, step: 5000, fmt: "money" },
    { key: "additionCost", label: "Improvement budget — Option A", min: 25000, max: 300000, step: 5000, fmt: "money" },
    { key: "additionRecoup", label: "Improvement resale recoup", sub: "% of spend added to value", min: 20, max: 80, step: 5, fmt: "pctRaw" },
    { key: "newHomePrice", label: "New home price — Option B", min: 450000, max: 900000, step: 10000, fmt: "money" },
    { key: "spaceValue", label: "What the extra space is worth", sub: "$/mo credited to B & C — the honest input", min: 0, max: 1500, step: 50, fmt: "permo" },
    { key: "todayRate", label: "Today's 30-yr mortgage rate", min: 5, max: 8, step: 0.05, fmt: "pct" },
    { key: "heRate", label: "Home-equity loan rate", min: 6, max: 10, step: 0.05, fmt: "pct" },
    { key: "appreciation", label: "Home appreciation / yr", min: 0, max: 8, step: 0.5, fmt: "pct" },
    { key: "investReturn", label: "Investment return / yr", sub: "opportunity cost of cash flow", min: 3, max: 10, step: 0.5, fmt: "pct" },
  ];
  const fmtVal = (v, f) => f === "money" ? moneyK(v) : f === "pctRaw" ? Math.round(v) + "%" : f === "permo" ? "$" + Math.round(v) + "/mo" : pct(v);
  const state = Object.assign({}, DATA.model);

  function buildControls() {
    const wrap = $("#controls");
    CONTROLS.forEach(c => {
      const row = el("div", "ctrl");
      row.innerHTML = `
        <div class="ctrl__top">
          <div class="ctrl__lab">${c.label}${c.sub ? `<small>${c.sub}</small>` : ""}</div>
          <div class="ctrl__val" id="val-${c.key}">${fmtVal(state[c.key], c.fmt)}</div>
        </div>
        <input type="range" id="in-${c.key}" min="${c.min}" max="${c.max}" step="${c.step}" value="${state[c.key]}" aria-label="${c.label}" aria-valuetext="${fmtVal(state[c.key], c.fmt)}">`;
      wrap.appendChild(row);
      $(`#in-${c.key}`, row).addEventListener("input", (e) => {
        state[c.key] = parseFloat(e.target.value);
        const t = fmtVal(state[c.key], c.fmt);
        $(`#val-${c.key}`).textContent = t;
        e.target.setAttribute("aria-valuetext", t);
        recompute();
      });
    });
    $("#resetBtn").addEventListener("click", () => {
      Object.assign(state, DATA.model);
      CONTROLS.forEach(c => { const t = fmtVal(state[c.key], c.fmt); const inp = $(`#in-${c.key}`); inp.value = state[c.key]; inp.setAttribute("aria-valuetext", t); $(`#val-${c.key}`).textContent = t; });
      recompute();
    });
  }

  const OPT_COLOR = { a: "#2E8B6A", b: "#D2622A", c: "#5578C0" };
  const OPT_LIGHT = { a: "#8AC4AB", b: "#E9A77E", c: "#9DB3DF" };
  const OPT_NAME = { a: "Stay & Improve (A)", b: "Move Now (B)", c: "Wait (C)" };
  let netChart;

  function renderCalcCards(r) {
    const wrap = $("#calcCards");
    wrap.innerHTML = "";
    [["a", r.A], ["b", r.B], ["c", r.C]].forEach(([id, o]) => {
      const card = el("div", `ccard ccard--${id}`);
      card.innerHTML = `
        <h4>${OPT_NAME[id]}</h4>
        <div class="crow"><span class="l">Net worth @10yr</span><span class="n big">${moneyK(o.net)}</span></div>
        <div class="crow"><span class="l">Stabilized monthly</span><span class="n">${moneyFull(o.monthly)}</span></div>
        <div class="crow"><span class="l">10-yr cash cost</span><span class="n">${moneyK(o.cash)}</span></div>
        <div class="crow"><span class="l">Home equity @10yr</span><span class="n">${moneyK(o.equity)}</span></div>`;
      wrap.appendChild(card);
    });
  }

  function recompute() {
    const r = computeOptions(state);
    // The verdict follows the site's thesis: Stay & Improve while a low first-mortgage
    // rate is held; it flips to Move when that advantage is gone. The dollar spread is
    // context, never the verdict.
    const bar = $("#verdictBar");
    const lockedIn = state.currentRate < 4.5;
    const aLeads = r.leader === "a";
    const close = r.spreadPct < 10;
    const penaltyPerYr = Math.max(0, (state.todayRate - state.currentRate) / 100 * state.currentBalance);
    if (lockedIn && (aLeads || close)) {
      bar.style.background = "#1F5744";
      $("#verdictText").textContent = "Stay & Improve";
      $("#verdictNote").innerHTML = aLeads
        ? (close
          ? `The 10-year dollars are about even (within <b>${r.spreadPct.toFixed(1)}%</b>) — so the tiebreakers decide, and at ${pct(state.currentRate)} they favor staying: the family keeps the Latimer zone, the walkable school, and a mortgage worth ~<b>${moneyFull(penaltyPerYr)}/yr</b> vs today's ${pct(state.todayRate)}.`
          : `Staying leads by <b>${moneyK(r.max - r.min)}</b> over 10 years <i>and</i> keeps the zone and the low ${pct(state.currentRate)} rate.`)
        : `At a space value of <b>$${Math.round(state.spaceValue)}/mo</b> the dollars tip slightly toward moving — but within <b>${r.spreadPct.toFixed(1)}%</b>, inside this model's noise. At ${pct(state.currentRate)} the tiebreakers still favor staying; if that space number is real and durable, treat this as a genuine coin-flip and tour the next Lawton-class listing.`;
    } else {
      bar.style.background = "#A84A1F";
      $("#verdictText").textContent = "Move Now";
      $("#verdictNote").innerHTML = lockedIn
        ? `Even with the low ${pct(state.currentRate)} rate, at these settings the bigger house wins by <b>${moneyK(r.max - r.min)}</b> — the space value you've set outweighs the golden handcuffs. That is the honest trade.`
        : `At ${pct(state.currentRate)} there's no cheap mortgage left to protect — the main reason to stay is gone, so buying the larger <i>in-zone</i> home is the better call. ${close ? `The 10-year dollars stay close (within ${r.spreadPct.toFixed(1)}%), so it comes down to turnkey space vs. a build.` : `The numbers agree: the leader wins by <b>${moneyK(r.max - r.min)}</b>.`}`;
    }
    renderCalcCards(r);
    $("#assumeNote").innerHTML = state.currentRate < 4.5
      ? `<b>Lock-in active:</b> at ${pct(state.currentRate)}, keeping the first mortgage (Option A) is worth roughly <b>${moneyFull((state.todayRate - state.currentRate) / 100 * state.currentBalance)}/yr</b> vs re-borrowing at today's ${pct(state.todayRate)}. That's the engine behind staying — and it's inferred from the Aug-2020 closing date, not verified. Pull the statement.`
      : `<b>No lock-in benefit:</b> at ${pct(state.currentRate)} the current rate isn't low, so staying loses its financial engine — moving (B) becomes the space-per-dollar play. This is exactly why verifying the real rate is step #1.`;
    $("#assumeNote").innerHTML += ` <b>Space value:</b> B and C are credited $${Math.round(state.spaceValue)}/mo for the bigger house's extra space (A gets a quarter-credit when its budget includes the rear addition) — the input the CFP reviewer proved was missing. Side-pot returns are pre-tax and assume full savings discipline.`;
    updateNetChart(r);
  }

  function updateNetChart(r) {
    const labels = ["Stay & Improve", "Move Now", "Wait"];
    const equity = [r.A.equity, r.B.equity, r.C.equity];
    const side = [r.A.side, r.B.side, r.C.side];
    const space = [r.A.space, r.B.space, r.C.space];
    if (!window.Chart) return;
    if (netChart) {
      netChart.data.datasets[0].data = equity;
      netChart.data.datasets[1].data = side;
      netChart.data.datasets[2].data = space;
      netChart.update();
      return;
    }
    netChart = new Chart($("#netChart"), {
      type: "bar",
      data: {
        labels,
        datasets: [
          { label: "Home equity", data: equity, backgroundColor: [OPT_COLOR.a, OPT_COLOR.b, OPT_COLOR.c], borderRadius: 6, stack: "s" },
          { label: "Invested cash-flow difference", data: side, backgroundColor: [OPT_LIGHT.a, OPT_LIGHT.b, OPT_LIGHT.c], borderRadius: 6, stack: "s" },
          { label: "Space-utility credit", data: space, backgroundColor: ["#DCEDE4", "#F6DFCC", "#DDE5F4"], borderRadius: 6, stack: "s" },
        ],
      },
      options: chartOpts({ stacked: true, money: true }),
    });
  }

  /* ===================== STATIC CHARTS ===================== */
  function chartOpts({ stacked = false, money = false } = {}) {
    return {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { labels: { font: { family: "Spline Sans Mono", size: 10 }, color: "#56544A", boxWidth: 12, padding: 14 } },
        tooltip: {
          backgroundColor: "#20201B", titleFont: { family: "Hanken Grotesk" }, bodyFont: { family: "Spline Sans Mono" },
          callbacks: money ? { label: (c) => ` ${c.dataset.label}: ${moneyK(c.parsed.y)}` } : undefined,
        },
      },
      scales: {
        x: { stacked, grid: { display: false }, ticks: { font: { family: "Spline Sans Mono", size: 11 }, color: "#807C6C" } },
        y: { stacked, grid: { color: "#E4DCCB" }, ticks: { font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C", callback: money ? (v) => moneyK(v) : undefined } },
      },
    };
  }

  function buildRateChart() {
    if (!window.Chart) return;
    const s = DATA.rateScenarios;
    const mk = (label, data, color, dash) => ({ label, data, borderColor: color, backgroundColor: color, tension: .35, borderWidth: 2.5, borderDash: dash || [], pointRadius: 3, pointHoverRadius: 5 });
    new Chart($("#rateChart"), {
      type: "line",
      data: { labels: s.labels, datasets: [
        mk("Optimistic (rates fall)", s.optimistic, "#2E8B6A"),
        mk("Base case (Fannie/MBA consensus)", s.base, "#20201B", [6, 4]),
        mk("Pessimistic (rates rise)", s.pessimistic, "#D2622A"),
      ] },
      options: Object.assign(chartOpts(), {
        scales: {
          x: { grid: { display: false }, ticks: { font: { family: "Spline Sans Mono", size: 11 }, color: "#807C6C" } },
          y: { grid: { color: "#E4DCCB" }, ticks: { font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C", callback: (v) => v + "%" }, suggestedMin: 5, suggestedMax: 7.5 },
        },
      }),
    });
  }

  function parsePrice(str) {
    const k = /K/i.test(str), m = /M/i.test(str);
    const nums = (str.match(/[\d,.]+/g) || []).map(x => parseFloat(x.replace(/,/g, ""))).filter(n => !isNaN(n));
    if (!nums.length) return null;
    let v = nums.reduce((a, b) => a + b, 0) / nums.length;
    if (m) v *= 1e6; else if (k || v < 10000) v *= 1000;
    return v;
  }
  function buildScatter() {
    if (!window.Chart) return;
    const pts = (zone) => DATA.listings.filter(l => l.zone === zone).map(l => {
      const p = parsePrice(l.price), s = parseFloat(String(l.sqft).replace(/,/g, ""));
      return p && s ? { x: s, y: p, addr: l.addr } : null;
    }).filter(Boolean);
    new Chart($("#scatterChart"), {
      type: "scatter",
      data: { datasets: [
        { label: "In Latimer zone", data: pts(true), backgroundColor: "#2E8B6A", pointRadius: 7, pointHoverRadius: 9 },
        { label: "Other Simsbury zone", data: pts(false), backgroundColor: "#5C6B71", pointRadius: 7, pointHoverRadius: 9 },
        { label: "10 Bob White Way (today)", data: [{ x: 1505, y: 525000, addr: "10 Bob White Way · 1,505 sf above grade" }], backgroundColor: "#B98A2E", pointStyle: "rectRot", pointRadius: 11, pointHoverRadius: 13 },
        { label: "After Phase 1 + 2 (~$150K)", data: [{ x: 1855, y: 585000, addr: "10 Bob White Way + rear addition" }], backgroundColor: "#B98A2E", pointStyle: "star", pointRadius: 12, pointHoverRadius: 14 },
      ] },
      options: Object.assign(chartOpts(), {
        plugins: {
          legend: { labels: { font: { family: "Spline Sans Mono", size: 10 }, color: "#56544A", boxWidth: 12, padding: 12, usePointStyle: true } },
          tooltip: { backgroundColor: "#20201B", callbacks: { label: (c) => ` ${c.raw.addr}: ${moneyK(c.parsed.y)} · ${c.parsed.x.toLocaleString()} sqft` } },
        },
        scales: {
          x: { title: { display: true, text: "Above-grade square feet (as listed)", font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C" }, grid: { color: "#E4DCCB" }, ticks: { font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C", callback: (v) => (v / 1000) + "k" } },
          y: { title: { display: true, text: "Price", font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C" }, grid: { color: "#E4DCCB" }, ticks: { font: { family: "Spline Sans Mono", size: 10 }, color: "#807C6C", callback: (v) => moneyK(v) } },
        },
      }),
    });
  }

  /* ===================== MAP ===================== */
  function buildMap() {
    if (!window.L) return;
    const map = L.map("map", { scrollWheelZoom: false }).setView([41.868, -72.835], 12);
    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; OpenStreetMap &copy; CARTO', maxZoom: 19,
    }).addTo(map);

    const dot = (color, r = 9, weight = 2) => ({ radius: r, fillColor: color, color: "#fff", weight, opacity: 1, fillOpacity: 1 });

    L.circleMarker([DATA.property.lat, DATA.property.lng], dot("#B98A2E", 12, 3)).addTo(map)
      .bindPopup(`<div class="pop"><div class="pop__price">10 Bob White Way</div><div class="pop__addr">The current home · already in the Latimer zone · a 0.3-mi walk to school</div><span class="pop__zone in">Latimer Lane zone</span></div>`);
    const sm = DATA.school_marker;
    L.circleMarker([sm.lat, sm.lng], dot("#3b3b34", 10, 3)).addTo(map)
      .bindPopup(`<div class="pop"><div class="pop__price" style="font-size:1.05rem">${sm.addr}</div><div class="pop__addr">${sm.sub}</div></div>`);
    DATA.listings.forEach(l => {
      const color = l.zone ? "#2E8B6A" : "#5C6B71";
      L.circleMarker([l.lat, l.lng], dot(color, l.star ? 11 : 8)).addTo(map)
        .bindPopup(`<div class="pop">
          <div class="pop__price">${l.price}</div>
          <div class="pop__addr">${l.addr}</div>
          <div class="pop__specs"><span>${l.beds} bd</span><span>${l.baths} ba</span><span>${l.sqft} sqft</span></div>
          <span class="pop__zone ${l.zone ? "in" : "out"}">${l.zone ? "Latimer Lane zone" : (l.zname || "Other") + " zone"}</span><br>
          <a class="pop__link" href="${l.url}" target="_blank" rel="noopener">View source →</a>
        </div>`);
    });
    map.on("click", () => map.scrollWheelZoom.enable());
  }

  /* ===================== MOTION ===================== */
  function motion() {
    const prog = $("#progress"), nav = $("#nav");
    const onScroll = () => {
      const h = document.documentElement;
      const sc = h.scrollTop / (h.scrollHeight - h.clientHeight);
      prog.style.width = (sc * 100) + "%";
      nav.classList.toggle("scrolled", h.scrollTop > 40);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const forceReveal = !("IntersectionObserver" in window) || location.search.indexOf("reveal") > -1 || window.matchMedia("print").matches;
    if (forceReveal) {
      document.querySelectorAll(".r").forEach(n => n.classList.add("in"));
      document.querySelectorAll(".sbar__fill, .lineitem__fill").forEach(f => { f.style.width = f.dataset.w + "%"; });
      if (location.search.indexOf("reveal") > -1) { const h = document.querySelector(".hero"); if (h) h.style.minHeight = "760px"; }
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          e.target.querySelectorAll?.(".sbar__fill, .lineitem__fill").forEach(f => { f.style.width = f.dataset.w + "%"; });
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".r").forEach(n => io.observe(n));
    const sb = $("#schoolBars"); if (sb) io.observe(sb);
  }

  /* ===================== INIT ===================== */
  document.addEventListener("DOMContentLoaded", () => {
    renderProperty(); renderSchools(); renderOptions(); renderAddition(); renderFloorplans(); renderFinancialModels(); renderStress(); renderExperts();
    renderListings(); renderForecast(); renderLife(); renderVerdictExtras(); renderMethodology();
    buildControls(); recompute();
    buildRateChart(); buildScatter(); buildAdditionChart(); buildMap();
    motion();
  });
})();
