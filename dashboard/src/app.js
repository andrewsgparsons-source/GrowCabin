/* ============================================================
   GrowCabin Dashboard — app.js
   Sidebar-wizard pattern with section-based navigation
   ============================================================ */

(function () {
  "use strict";

  // ── Section configurations ──
  var sections = {
    overview: {
      label: "Overview",
      dashboard: [
        { label: "Crop Types", value: "2" },
        { label: "Prototype Stage", value: "0" },
        { label: "Revenue Streams", value: "4", accent: true },
        { label: "Target Price", value: "~£600–1,100" }
      ],
      steps: [
        { label: "What is GrowCabin?", icon: "1" },
        { label: "Core Concept", icon: "2" },
        { label: "Value Proposition", icon: "3" },
        { label: "Key Decisions", icon: "4" }
      ]
    },
    mushrooms: {
      label: "Mushrooms 🍄",
      theme: "mush",
      dashboard: [
        { label: "Lead Species", value: "Oyster" },
        { label: "Target RH", value: "85–92%" },
        { label: "Cycle Speed", value: "~3 wks", accent: true },
        { label: "FAE Cycle", value: "10 min" }
      ],
      steps: [
        { label: "Overview", icon: "📊" },
        { label: "Species", icon: "🍄" },
        { label: "Growing Conditions", icon: "💧" },
        { label: "The Recipe Model", icon: "📋" },
        { label: "Prototype Plan", icon: "🔧" }
      ]
    },
    microgreens: {
      label: "Microgreens 🌱",
      theme: "micro",
      dashboard: [
        { label: "Lead Format", value: "Micros" },
        { label: "Light Cycle", value: "16h/8h" },
        { label: "Cycle Speed", value: "7–14 d", accent: true },
        { label: "Watering", value: "Bottom" }
      ],
      steps: [
        { label: "Overview", icon: "📊" },
        { label: "Crop Types", icon: "🌱" },
        { label: "Growing Conditions", icon: "☀️" },
        { label: "The Recipe Model", icon: "📋" },
        { label: "Prototype Plan", icon: "🔧" }
      ]
    },
    hardware: {
      label: "Hardware",
      dashboard: [
        { label: "Controller", value: "ESP32" },
        { label: "Sensors", value: "3–4" },
        { label: "Actuators", value: "3", accent: true },
        { label: "Control", value: "Hysteresis" }
      ],
      steps: [
        { label: "Overview", icon: "📊" },
        { label: "Platform Overview", icon: "1" },
        { label: "Sensors", icon: "2" },
        { label: "Actuators", icon: "3" },
        { label: "Control Logic", icon: "4" },
        { label: "Cost Bands", icon: "5" }
      ]
    },
    business: {
      label: "Business",
      dashboard: [
        { label: "Revenue Streams", value: "4" },
        { label: "Essential Tier", value: "~£599" },
        { label: "Enhanced Tier", value: "~£899", accent: true },
        { label: "Go-to-Market", value: "Controls" }
      ],
      steps: [
        { label: "Overview", icon: "📊" },
        { label: "Business Model", icon: "1" },
        { label: "Pricing Bands", icon: "2" },
        { label: "Target Customer", icon: "3" },
        { label: "Subscription", icon: "4" }
      ]
    },
    roadmap: {
      label: "Roadmap",
      dashboard: [
        { label: "Current Phase", value: "M0" },
        { label: "Next", value: "P0" },
        { label: "Timeline", value: "8–14 wks", accent: true },
        { label: "Design Partners", value: "5–10" }
      ],
      steps: [
        { label: "Overview", icon: "📊" },
        { label: "Milestone View", icon: "1" },
        { label: "Milestone 0 — Decisions", icon: "2" },
        { label: "Prototype 0 — Instrument", icon: "3" },
        { label: "Prototype 1 — Close Loop", icon: "4" }
      ]
    },
    archive: {
      label: "Archive",
      dashboard: [
        { label: "Total Docs", value: "60+" },
        { label: "Categories", value: "8" },
        { label: "Status", value: "Preserved", accent: true },
        { label: "Active Use", value: "Dashboard" }
      ],
      steps: [
        { label: "All Documents", icon: "📁" }
      ]
    }
  };

  // ── State ──
  var currentSection = "overview";
  var activeStep = null;

  // ── DOM refs ──
  var sectionSelect = document.getElementById("sectionSelect");
  var dashSummary = document.getElementById("dashSummary");
  var navSteps = document.getElementById("navSteps");
  var flyout = document.getElementById("flyout");
  var flyoutTitle = document.getElementById("flyoutTitle");
  var flyoutBody = document.getElementById("flyoutBody");
  var flyoutClose = document.getElementById("flyoutClose");

  // ── Render dashboard summary strip ──
  function renderDashboard(sec) {
    var items = sec.dashboard;
    var row1 = items.slice(0, 2);
    var row2 = items.slice(2, 4);

    function renderItem(d) {
      var cls = "gc-dash-item" + (d.accent ? " accent" : "");
      return '<div class="' + cls + '">' +
        '<span class="gc-dash-label">' + d.label + '</span>' +
        '<span class="gc-dash-value">' + d.value + '</span>' +
        '</div>';
    }

    var html = '<div class="gc-dash-row">';
    row1.forEach(function (d) { html += renderItem(d); });
    html += '</div>';
    if (row2.length) {
      html += '<div class="gc-dash-row">';
      row2.forEach(function (d) { html += renderItem(d); });
      html += '</div>';
    }
    dashSummary.innerHTML = html;
  }

  // ── Render nav steps ──
  function renderSteps(sec) {
    var theme = sec.theme || "";
    var html = "";
    sec.steps.forEach(function (s) {
      var themeClass = theme ? " " + theme + "-theme" : "";
      html += '<button class="gc-step' + themeClass + '" data-step="' + s.label + '">';
      html += '<span class="gc-step-num">' + s.icon + '</span>';
      html += '<span class="gc-step-label">' + s.label + '</span>';
      html += '<span class="gc-step-arrow">›</span>';
      html += '</button>';
    });
    navSteps.innerHTML = html;

    navSteps.querySelectorAll(".gc-step").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var stepName = btn.getAttribute("data-step");
        openFlyout(stepName);
        setActiveStep(btn);
      });
    });
  }

  function setActiveStep(btn) {
    navSteps.querySelectorAll(".gc-step").forEach(function (b) {
      b.classList.remove("active");
    });
    if (btn) btn.classList.add("active");
  }

  // ── Switch section ──
  function switchSection(key) {
    currentSection = key;
    var sec = sections[key];
    renderDashboard(sec);
    renderSteps(sec);
    closeFlyout();

    // Auto-open the first step
    if (sec.steps && sec.steps.length > 0) {
      var firstStepName = sec.steps[0].label;
      var firstBtn = navSteps.querySelector('.gc-step');
      if (firstBtn) {
        openFlyout(firstStepName);
        setActiveStep(firstBtn);
      }
    }
  }

  sectionSelect.addEventListener("change", function () {
    switchSection(this.value);
  });

  // ── Flyout open/close ──
  function openFlyout(stepName) {
    flyoutTitle.textContent = stepName;
    flyoutBody.innerHTML = "";

    var result = getFlyoutContent(currentSection, stepName);
    flyoutBody.innerHTML = result.html;
    flyout.classList.add("open");

    if (result.afterRender) {
      setTimeout(result.afterRender, 50);
    }
  }

  function closeFlyout() {
    flyout.classList.remove("open");
    setActiveStep(null);
  }

  flyoutClose.addEventListener("click", closeFlyout);

  // ── Content Router ──
  function getFlyoutContent(section, step) {
    var key = section + "::" + step;

    // === SECTION OVERVIEWS ===
    if (key === "mushrooms::Overview") {
      return { html:
        '<div class="gc-section-header">Mushroom Growing — At a Glance</div>' +
        '<div class="gc-card">' +
          '<h3>🍄 What This Section Covers</h3>' +
          '<p>Everything about mushroom cultivation in the GrowCabin system — species selection, environmental requirements, the recipe model that automates growing conditions, and the prototype plan.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Key Facts</h3>' +
          '<ul>' +
            '<li><strong>Lead species:</strong> Oyster mushrooms (fastest, most forgiving)</li>' +
            '<li><strong>Cycle time:</strong> ~3 weeks from inoculation to harvest</li>' +
            '<li><strong>Critical controls:</strong> Humidity (85–92%), FAE, CO₂</li>' +
            '<li><strong>Revenue potential:</strong> Oyster £8–12/kg retail</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Quick Navigation</h3>' +
          '<ul>' +
            '<li><strong>Species</strong> — Which mushrooms to grow and why</li>' +
            '<li><strong>Growing Conditions</strong> — Temperature, humidity, airflow requirements</li>' +
            '<li><strong>The Recipe Model</strong> — How automated growing profiles work</li>' +
            '<li><strong>Prototype Plan</strong> — Build and test roadmap</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "microgreens::Overview") {
      return { html:
        '<div class="gc-section-header">Microgreens — At a Glance</div>' +
        '<div class="gc-card">' +
          '<h3>🌱 What This Section Covers</h3>' +
          '<p>Microgreen cultivation in the GrowCabin — crop selection, light and watering requirements, the recipe model for automated growing, and prototype planning.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Key Facts</h3>' +
          '<ul>' +
            '<li><strong>Lead format:</strong> Microgreens (not baby leaf)</li>' +
            '<li><strong>Cycle time:</strong> 7–14 days seed to harvest</li>' +
            '<li><strong>Critical controls:</strong> Light (16h/8h), bottom watering, airflow</li>' +
            '<li><strong>Fast turnaround</strong> means rapid iteration during prototyping</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Quick Navigation</h3>' +
          '<ul>' +
            '<li><strong>Crop Types</strong> — Which microgreens and why</li>' +
            '<li><strong>Growing Conditions</strong> — Light, water, temperature needs</li>' +
            '<li><strong>The Recipe Model</strong> — Automated growth profiles</li>' +
            '<li><strong>Prototype Plan</strong> — Build and test roadmap</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "hardware::Overview") {
      return { html:
        '<div class="gc-section-header">Hardware Platform — At a Glance</div>' +
        '<div class="gc-card">' +
          '<h3>🔧 What This Section Covers</h3>' +
          '<p>The physical hardware that makes GrowCabin work — the ESP32 controller, sensors for environment monitoring, actuators for climate control, and the logic that ties it all together.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Key Facts</h3>' +
          '<ul>' +
            '<li><strong>Controller:</strong> ESP32 (WiFi + BLE, low power, proven)</li>' +
            '<li><strong>Sensors:</strong> 3–4 (temperature, humidity, CO₂, light)</li>' +
            '<li><strong>Actuators:</strong> 3 (humidifier, FAE fan, heater/cooler)</li>' +
            '<li><strong>Control method:</strong> Hysteresis (simple, reliable, no PID tuning)</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Quick Navigation</h3>' +
          '<ul>' +
            '<li><strong>Platform Overview</strong> — Architecture and design choices</li>' +
            '<li><strong>Sensors</strong> — What we measure and how</li>' +
            '<li><strong>Actuators</strong> — What we control and how</li>' +
            '<li><strong>Control Logic</strong> — The decision-making brain</li>' +
            '<li><strong>Cost Bands</strong> — Component pricing tiers</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "business::Overview") {
      return { html:
        '<div class="gc-section-header">Business Model — At a Glance</div>' +
        '<div class="gc-card">' +
          '<h3>💼 What This Section Covers</h3>' +
          '<p>How GrowCabin makes money — the hardware + subscription model, pricing tiers, target customers, and go-to-market strategy.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Key Facts</h3>' +
          '<ul>' +
            '<li><strong>Revenue streams:</strong> 4 (hardware, subscriptions, recipes, accessories)</li>' +
            '<li><strong>Essential tier:</strong> ~£599 (hardware + basic recipes)</li>' +
            '<li><strong>Enhanced tier:</strong> ~£899 (premium sensors + app features)</li>' +
            '<li><strong>Subscription:</strong> Recipe library + cloud logging</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Quick Navigation</h3>' +
          '<ul>' +
            '<li><strong>Business Model</strong> — Revenue structure and strategy</li>' +
            '<li><strong>Pricing Bands</strong> — Essential vs Enhanced breakdown</li>' +
            '<li><strong>Target Customer</strong> — Who buys and why</li>' +
            '<li><strong>Subscription</strong> — Recurring revenue model</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "roadmap::Overview") {
      return { html:
        '<div class="gc-section-header">Roadmap — At a Glance</div>' +
        '<div class="gc-card">' +
          '<h3>🗺️ What This Section Covers</h3>' +
          '<p>The development timeline from decisions through prototyping to market — milestones, deliverables, and current progress.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Key Facts</h3>' +
          '<ul>' +
            '<li><strong>Current phase:</strong> M0 (Milestone 0 — Decisions)</li>' +
            '<li><strong>Next phase:</strong> P0 (Prototype 0 — Instrument)</li>' +
            '<li><strong>Timeline:</strong> 8–14 weeks to working prototype</li>' +
            '<li><strong>Design partners:</strong> Target 5–10 early testers</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Quick Navigation</h3>' +
          '<ul>' +
            '<li><strong>Milestone View</strong> — Full timeline overview</li>' +
            '<li><strong>Milestone 0</strong> — Key decisions to lock down</li>' +
            '<li><strong>Prototype 0</strong> — First instrumented cabin</li>' +
            '<li><strong>Prototype 1</strong> — Closed-loop control</li>' +
          '</ul>' +
        '</div>'
      };
    }

    // === OVERVIEW ===
    if (key === "overview::What is GrowCabin?") {
      return { html:
        '<div class="gc-highlight">A controlled-environment home growing system for repeatable mushroom and microgreen harvests using recipe-driven environment control.</div>' +
        '<div class="gc-card">' +
          '<h3>The Problem</h3>' +
          '<p>Home growing fails because climate control is inconsistent. Humidity and airflow are hard to balance, contamination is common, outcomes vary wildly between runs, and the setup burden is too high.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>The Solution</h3>' +
          '<p>GrowCabin gives you <strong>repeatable harvests through recipe-driven environment control</strong>. Instead of trial-and-error, you load a recipe (species + stages + setpoints) and the system maintains the right conditions automatically.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Two Crop Paths</h3>' +
          '<ul>' +
            '<li><strong>Mushrooms</strong> — Humidity + FAE + CO₂ control. Oyster first, then Lion\'s Mane.</li>' +
            '<li><strong>Microgreens</strong> — Light + airflow + watering control. Fast 7–14 day cycles.</li>' +
          '</ul>' +
          '<p style="margin-top:8px">Same hardware platform, different recipes.</p>' +
        '</div>'
      };
    }

    if (key === "overview::Core Concept") {
      return { html:
        '<div class="gc-section-header">Sense → Decide → Actuate → Log</div>' +
        '<div class="gc-flow">' +
          '<div class="gc-flow-step"><span class="flow-icon">📡</span><span class="flow-label">Sense</span></div>' +
          '<span class="gc-flow-arrow">→</span>' +
          '<div class="gc-flow-step"><span class="flow-icon">🧠</span><span class="flow-label">Decide</span></div>' +
          '<span class="gc-flow-arrow">→</span>' +
          '<div class="gc-flow-step"><span class="flow-icon">⚡</span><span class="flow-label">Actuate</span></div>' +
          '<span class="gc-flow-arrow">→</span>' +
          '<div class="gc-flow-step"><span class="flow-icon">📝</span><span class="flow-label">Log</span></div>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>How It Works</h3>' +
          '<ul>' +
            '<li><strong>Sense:</strong> Temperature, humidity, CO₂, light — continuous monitoring</li>' +
            '<li><strong>Decide:</strong> Rules + hysteresis compare readings against recipe setpoints</li>' +
            '<li><strong>Actuate:</strong> Fan, humidifier, lights respond to maintain target bands</li>' +
            '<li><strong>Log:</strong> Every reading and action is timestamped for repeatability and support</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>The Recipe Model</h3>' +
          '<p>A recipe defines: <strong>stages</strong> (incubation → fruiting), <strong>target ranges</strong> (RH 85–92%), <strong>schedules</strong> (FAE every 10 min), and <strong>safety limits</strong>. Stage switching is manual in v0. The recipe is versioned so you can trace what worked.</p>' +
        '</div>'
      };
    }

    if (key === "overview::Value Proposition") {
      return { html:
        '<div class="gc-highlight">"GrowCabin gives you repeatable harvests through recipe-driven environment control."</div>' +
        '<div class="gc-kpi-grid">' +
          '<div class="gc-kpi earth"><div class="gc-kpi-icon">🎯</div><div class="gc-kpi-value">Predictable</div><div class="gc-kpi-label">Climate Bands</div></div>' +
          '<div class="gc-kpi green"><div class="gc-kpi-icon">📋</div><div class="gc-kpi-value">Guided</div><div class="gc-kpi-label">Stage Control</div></div>' +
          '<div class="gc-kpi earth"><div class="gc-kpi-icon">📊</div><div class="gc-kpi-value">Logged</div><div class="gc-kpi-label">Every Run</div></div>' +
          '<div class="gc-kpi sage"><div class="gc-kpi-icon">🧠</div><div class="gc-kpi-value">Low Effort</div><div class="gc-kpi-label">vs DIY Setups</div></div>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Success Metrics (First Phase)</h3>' +
          '<ul>' +
            '<li>Time-to-harvest consistency</li>' +
            '<li>Yield per tray/block</li>' +
            '<li>Failure/contamination rate</li>' +
            '<li>Minutes per day of user effort</li>' +
            '<li>Running cost (kWh + water)</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "overview::Key Decisions") {
      return { html:
        '<div class="gc-section-header">Open Decisions</div>' +
        '<div class="gc-card">' +
          '<h3>🍄 First Mushroom Species</h3>' +
          '<p><strong>Recommendation: Oyster</strong> — highest beginner success (score 26/30), fastest cycles, most tolerant of early control imperfections. Lion\'s Mane queued as second species.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>🌱 Greens Format</h3>' +
          '<p><strong>Recommendation: Microgreens trays</strong> — score 26.5/30 vs 21 for baby leaf. Faster 7–14 day cycles, simpler watering, better fit for early prototyping.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>🏗️ Architecture</h3>' +
          '<p>Single chamber supporting both crop types via recipe switching. One SKU, simpler marketing. Shared sensors and actuators, different control profiles per crop.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>💰 Pricing Posture</h3>' +
          '<p>Controls-first offer (customer provides enclosure). Essential tier ~£599–699, Enhanced ~£899–1,099. Full shed bundle deferred to later phase.</p>' +
        '</div>'
      };
    }

    // === MUSHROOMS ===
    if (key === "mushrooms::Species") {
      return { html:
        '<div class="gc-section-header mush">Species Selection</div>' +
        '<div class="gc-card mush">' +
          '<h3>🥇 Lead Species: Oyster (Pleurotus spp.)</h3>' +
          '<p>Scored <strong>26.0/30</strong> across six dimensions. Best beginner profile, fastest learning loops, tolerant of early control imperfections.</p>' +
          '<div style="margin-top:10px">' +
            '<span class="gc-tag">Robust</span>' +
            '<span class="gc-tag">Fast Cycle</span>' +
            '<span class="gc-tag">Beginner-Friendly</span>' +
          '</div>' +
        '</div>' +
        '<table class="gc-spec-table mush">' +
          '<thead><tr><th>Species</th><th>Robustness</th><th>Beginner</th><th>Speed</th><th>Contam</th><th>Market</th><th>Total</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Oyster</strong></td><td>4.5</td><td>4.5</td><td>4.5</td><td>4.0</td><td>4.0</td><td><strong>26.0</strong></td></tr>' +
            '<tr><td>Lion\'s Mane</td><td>3.5</td><td>3.5</td><td>3.5</td><td>3.0</td><td>4.5</td><td>21.5</td></tr>' +
            '<tr><td>Shiitake</td><td>3.0</td><td>3.0</td><td>2.5</td><td>3.0</td><td>4.0</td><td>18.5</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card mush">' +
          '<h3>Expansion Queue</h3>' +
          '<p>Once Prototype 1 is stable with Oyster, Lion\'s Mane is the next species. Shiitake requires longer cycles and tighter control — queued for later.</p>' +
        '</div>'
      };
    }

    if (key === "mushrooms::Growing Conditions") {
      return { html:
        '<div class="gc-section-header mush">Growing Conditions — Oyster</div>' +
        '<table class="gc-spec-table mush">' +
          '<thead><tr><th>Parameter</th><th>Fruiting Range</th><th>Critical</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Relative Humidity</td><td>85–92%</td><td>&gt;95% causes condensation</td></tr>' +
            '<tr><td>Temperature</td><td>16–21°C</td><td>&gt;30°C is dangerous</td></tr>' +
            '<tr><td>CO₂</td><td>500–1,200 ppm</td><td>&gt;1,500 ppm causes deformed caps</td></tr>' +
            '<tr><td>Fresh Air Exchange</td><td>Every 10 min / 45–90s</td><td>Stale air = leggy stems</td></tr>' +
            '<tr><td>Light</td><td>Indirect / ambient</td><td>Not primary driver</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card mush">' +
          '<h3>Key Risks</h3>' +
          '<ul>' +
            '<li><strong>Contamination</strong> — biggest failure mode. Clean surfaces, filtered air, good hygiene.</li>' +
            '<li><strong>Condensation</strong> — over-humidification creates standing water. Hysteresis + min-off timers prevent this.</li>' +
            '<li><strong>CO₂ build-up</strong> — causes elongated stems, small caps. FAE scheduling solves this.</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "mushrooms::The Recipe Model") {
      return { html:
        '<div class="gc-section-header mush">Recipe: mushroom-oyster-v0</div>' +
        '<div class="gc-card mush">' +
          '<h3>Stage-Based Control</h3>' +
          '<p>Each recipe defines sequential stages with their own setpoints. Stage switching is manual in v0 (press a button when you see pins forming).</p>' +
        '</div>' +
        '<table class="gc-spec-table mush">' +
          '<thead><tr><th>Stage</th><th>RH %</th><th>Temp °C</th><th>CO₂ ppm</th><th>Duration</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Incubation</strong></td><td>80–90</td><td>20–24</td><td>—</td><td>10–14 days</td></tr>' +
            '<tr><td><strong>Pinning</strong></td><td>85–95</td><td>14–18</td><td>&lt;1,000</td><td>3–5 days</td></tr>' +
            '<tr><td><strong>Fruiting</strong></td><td>85–92</td><td>16–21</td><td>500–1,200</td><td>5–10 days</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card mush">' +
          '<h3>Control Rules (Fruiting Example)</h3>' +
          '<ul>' +
            '<li>Humidifier ON below 85% RH, OFF above 92%</li>' +
            '<li>Min ON time: 45s, min OFF time: 60s (prevents chatter)</li>' +
            '<li>If RH &gt;95% for 3+ min: force OFF, trigger FAE burst</li>' +
            '<li>FAE: 45–90s every 10 min, adjusted if CO₂ &gt;1,200 ppm</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "mushrooms::Prototype Plan") {
      return { html:
        '<div class="gc-section-header mush">Mushroom Prototype Path</div>' +
        '<div class="gc-card mush">' +
          '<h3>P0 — Instrument &amp; Learn</h3>' +
          '<ul>' +
            '<li>Sensor logging: temp/RH (+ optional CO₂)</li>' +
            '<li>Manual humidity and FAE control</li>' +
            '<li>Capture failure modes, condensation patterns</li>' +
            '<li>Goal: understand the environment before automating</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card mush">' +
          '<h3>P1 — Close the Loop</h3>' +
          '<ul>' +
            '<li>Humidity control loop (hysteresis + timers)</li>' +
            '<li>FAE scheduling (time-based, CO₂-aware if sensor present)</li>' +
            '<li>Recipe v0 implementation with stage setpoints</li>' +
            '<li>Telemetry logging tied to recipe version</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card mush">' +
          '<h3>Exit Criteria</h3>' +
          '<p>RH in target band &gt;70% of run time. No sustained &gt;95% episodes. At least one repeatable harvest with explainable logs.</p>' +
        '</div>'
      };
    }

    // === MICROGREENS ===
    if (key === "microgreens::Crop Types") {
      return { html:
        '<div class="gc-section-header micro">Greens Format Selection</div>' +
        '<div class="gc-card micro">' +
          '<h3>🥇 Lead Format: Microgreens Trays</h3>' +
          '<p>Scored <strong>26.5/30</strong> — fastest cycle times (7–14 days), simplest watering, best fit for early-stage constraints.</p>' +
          '<div style="margin-top:10px">' +
            '<span class="gc-tag">Fast Cycle</span>' +
            '<span class="gc-tag">Simple Control</span>' +
            '<span class="gc-tag">Low Risk</span>' +
          '</div>' +
        '</div>' +
        '<table class="gc-spec-table micro">' +
          '<thead><tr><th>Format</th><th>Cycle</th><th>Reliability</th><th>Control</th><th>Watering</th><th>Market</th><th>Total</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Microgreens</strong></td><td>5.0</td><td>4.5</td><td>4.5</td><td>4.5</td><td>4.0</td><td><strong>26.5</strong></td></tr>' +
            '<tr><td>Baby Leaf</td><td>3.5</td><td>3.5</td><td>3.5</td><td>3.0</td><td>4.0</td><td>21.0</td></tr>' +
            '<tr><td>Hybrid</td><td>4.0</td><td>3.5</td><td>3.0</td><td>3.0</td><td>4.5</td><td>21.5</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card micro">' +
          '<h3>Baby Leaf — Future Phase</h3>' +
          '<p>Longer cycles, more complex watering needs. Queued for expansion once microgreens prototype is stable.</p>' +
        '</div>'
      };
    }

    if (key === "microgreens::Growing Conditions") {
      return { html:
        '<div class="gc-section-header micro">Growing Conditions — Microgreens</div>' +
        '<table class="gc-spec-table micro">' +
          '<thead><tr><th>Parameter</th><th>Target</th><th>Notes</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Light Schedule</td><td>16h on / 8h off</td><td>Grow-out phase; blackout for germination</td></tr>' +
            '<tr><td>Light Intensity</td><td>Moderate LED</td><td>Full-spectrum grow lights preferred</td></tr>' +
            '<tr><td>Temperature</td><td>18–24°C</td><td>Room temp usually fine</td></tr>' +
            '<tr><td>Airflow</td><td>Gentle, continuous</td><td>Prevents damping-off / mould</td></tr>' +
            '<tr><td>Watering</td><td>Bottom-watering</td><td>Manual in v0; avoids wetting foliage</td></tr>' +
            '<tr><td>Humidity</td><td>50–70%</td><td>Lower than mushrooms to reduce mould</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card micro">' +
          '<h3>Key Risks</h3>' +
          '<ul>' +
            '<li><strong>Damping-off</strong> — fungal disease from stagnant air + excess moisture. Solved by airflow control.</li>' +
            '<li><strong>Leggy growth</strong> — insufficient light causes stretched, weak stems. Proper LED schedule prevents this.</li>' +
            '<li><strong>Mould</strong> — warm + humid + still air = mould. Ventilation is critical.</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "microgreens::The Recipe Model") {
      return { html:
        '<div class="gc-section-header micro">Recipe: greens-microgreens-v0</div>' +
        '<div class="gc-card micro">' +
          '<h3>Stage-Based Control</h3>' +
          '<p>Simpler than mushrooms — two main stages with distinct light and watering profiles.</p>' +
        '</div>' +
        '<table class="gc-spec-table micro">' +
          '<thead><tr><th>Stage</th><th>Light</th><th>Water</th><th>Airflow</th><th>Duration</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Germination</strong></td><td>Blackout / dark</td><td>Mist / bottom</td><td>Minimal</td><td>2–4 days</td></tr>' +
            '<tr><td><strong>Grow-out</strong></td><td>16h/8h cycle</td><td>Bottom-water daily</td><td>Gentle continuous</td><td>5–10 days</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card micro">' +
          '<h3>Shared Recipe Schema</h3>' +
          '<p>Uses the same recipe format as mushrooms — same stage/target/actuation structure, different parameters. The schema supports both crop types natively.</p>' +
        '</div>'
      };
    }

    if (key === "microgreens::Prototype Plan") {
      return { html:
        '<div class="gc-section-header micro">Microgreens Prototype Path</div>' +
        '<div class="gc-card micro">' +
          '<h3>P2 — Light &amp; Air</h3>' +
          '<ul>' +
            '<li>LED light schedule (16/8 programmable cycle)</li>' +
            '<li>Airflow fan for damping-off prevention</li>' +
            '<li>Manual bottom-watering with logging</li>' +
            '<li>Temperature monitoring (passive — room temp)</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card micro">' +
          '<h3>P3 — Watering Automation (Future)</h3>' +
          '<ul>' +
            '<li>Automated bottom-watering on schedule</li>' +
            '<li>Moisture sensor feedback</li>' +
            '<li>Full recipe automation from germination to harvest</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card micro">' +
          '<h3>Tray Specs (v0 Assumption)</h3>' +
          '<p>Standard small/medium microgreen trays. Exact dimensions to be locked. Bottom-watering compatible. Stackable for germination blackout phase.</p>' +
        '</div>'
      };
    }

    // === HARDWARE ===
    if (key === "hardware::Platform Overview") {
      return { html:
        '<div class="gc-section-header">Shared Hardware Platform</div>' +
        '<div class="gc-highlight">One platform, two crop modes. Same sensors and actuators, different recipes.</div>' +
        '<div class="gc-card">' +
          '<h3>Architecture</h3>' +
          '<p>Single-chamber design supporting both mushrooms and microgreens via recipe switching. The hardware is shared — the <em>software recipe</em> determines what each actuator does.</p>' +
          '<ul>' +
            '<li><strong>Mushroom mode:</strong> Humidity + FAE + CO₂ focus</li>' +
            '<li><strong>Microgreen mode:</strong> Light + airflow + watering focus</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Two Tiers</h3>' +
          '<ul>' +
            '<li><strong>Tier E (Essential):</strong> Mushroom-first control proof. Simple hysteresis, basic sensors, timer-based scheduling.</li>' +
            '<li><strong>Tier S (Smart):</strong> Adds CO₂ sensor, ESP32 rule engine, continuous logging, optional remote view.</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "hardware::Sensors") {
      return { html:
        '<div class="gc-section-header">Sensor Stack</div>' +
        '<table class="gc-spec-table">' +
          '<thead><tr><th>Function</th><th>Tier E</th><th>Tier S</th><th>Notes</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Air Temp + RH</td><td>DHT22</td><td>SCD40/SCD41</td><td>SCD also provides CO₂</td></tr>' +
            '<tr><td>CO₂</td><td>Optional</td><td>Recommended</td><td>Critical for mushroom morphology</td></tr>' +
            '<tr><td>Door/Open</td><td>Optional reed</td><td>Recommended</td><td>Explains log anomalies</td></tr>' +
            '<tr><td>Light (greens)</td><td>Not needed</td><td>Optional</td><td>Only for greens path</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card">' +
          '<h3>Sampling</h3>' +
          '<p>30-second sensor sample interval. All readings logged with timestamps. Recipe version tagged in every log entry for traceability.</p>' +
        '</div>'
      };
    }

    if (key === "hardware::Actuators") {
      return { html:
        '<div class="gc-section-header">Actuation Stack</div>' +
        '<table class="gc-spec-table">' +
          '<thead><tr><th>Function</th><th>Component</th><th>Mode</th><th>Notes</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Fresh Air Exchange</td><td>2× 100mm inline fans</td><td>Scheduled + override</td><td>Intake low, exhaust high</td></tr>' +
            '<tr><td>Humidity</td><td>4–6L ultrasonic humidifier</td><td>Hysteresis on/off</td><td>Maintains RH band</td></tr>' +
            '<tr><td>Lighting</td><td>LED grow light panel</td><td>Timer schedule</td><td>Greens path only</td></tr>' +
            '<tr><td>Watering</td><td>TBD (manual v0)</td><td>Schedule (future)</td><td>Greens path only</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card">' +
          '<h3>Safety</h3>' +
          '<ul>' +
            '<li>RCD-protected power path</li>' +
            '<li>IP-aware placement for humid environments</li>' +
            '<li>Cable glands and sealed penetrations</li>' +
            '<li>Sensor timeout failsafe: humidifier OFF, fan safe cycle</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "hardware::Control Logic") {
      return { html:
        '<div class="gc-section-header">Control Strategy</div>' +
        '<div class="gc-card">' +
          '<h3>Rules + Hysteresis (v0)</h3>' +
          '<p>Start with the simplest reliable approach. No PID, no ML — just clear if/then rules with time guards.</p>' +
          '<ul>' +
            '<li><strong>Humidity loop:</strong> ON below low threshold, OFF above high threshold, with min on/off timers</li>' +
            '<li><strong>FAE scheduling:</strong> Time-based cycles (45–90s every 10 min), CO₂-aware adjustments if sensor present</li>' +
            '<li><strong>Light schedule:</strong> Simple timer (16h/8h for greens)</li>' +
            '<li><strong>Stage switching:</strong> Manual button in v0 (automated detection later)</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Telemetry Logging</h3>' +
          '<p>Every control action logged with: timestamp, sensor readings, actuator state, reason code (e.g. <code>low_rh</code>, <code>co2_high</code>, <code>condensation_guard</code>), recipe version + stage ID.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Future Path</h3>' +
          '<p>Stage schedules → adaptive tuning → optimisation/learning. Only add complexity when it materially improves outcomes.</p>' +
        '</div>'
      };
    }

    if (key === "hardware::Cost Bands") {
      return { html:
        '<div class="gc-section-header">Prototype Cost Bands</div>' +
        '<table class="gc-spec-table">' +
          '<thead><tr><th>Configuration</th><th>Estimated Cost</th></tr></thead>' +
          '<tbody>' +
            '<tr><td>Lean chamber P0 (sensors + manual)</td><td>~£300–500</td></tr>' +
            '<tr><td>Budget shed + Essential controls</td><td>~£1,198</td></tr>' +
            '<tr><td>Budget shed + Enhanced controls</td><td>~£1,340</td></tr>' +
            '<tr><td>Better shed + Essential controls</td><td>~£1,607</td></tr>' +
            '<tr><td>Better shed + Enhanced controls</td><td>~£1,749</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card">' +
          '<h3>v0 Strategy</h3>' +
          '<p>Start with <strong>controls kit only</strong> (no shed). Customer provides enclosure. This keeps logistics simple and lets us iterate on the control system without the complexity of physical structures.</p>' +
        '</div>'
      };
    }

    // === BUSINESS ===
    if (key === "business::Business Model") {
      return { html:
        '<div class="gc-section-header">Revenue Architecture</div>' +
        '<div class="gc-kpi-grid">' +
          '<div class="gc-kpi earth"><div class="gc-kpi-icon">📦</div><div class="gc-kpi-value">Hardware</div><div class="gc-kpi-label">Kit / Bundle Sale</div></div>' +
          '<div class="gc-kpi green"><div class="gc-kpi-icon">🔄</div><div class="gc-kpi-value">Consumables</div><div class="gc-kpi-label">Filters, Parts, Kits</div></div>' +
          '<div class="gc-kpi earth"><div class="gc-kpi-icon">📱</div><div class="gc-kpi-value">Subscription</div><div class="gc-kpi-label">Recipes + Support</div></div>' +
          '<div class="gc-kpi sage"><div class="gc-kpi-icon">⭐</div><div class="gc-kpi-value">Premium</div><div class="gc-kpi-label">Support + Install</div></div>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>The Flywheel</h3>' +
          '<p>Sell device → Onboard recipe → Monitor grow cycles → Better outcomes → Referrals → More sales. Subscription layer delivers continuous improvements (recipes, analytics, support) and generates predictable revenue.</p>' +
        '</div>'
      };
    }

    if (key === "business::Pricing Bands") {
      return { html:
        '<div class="gc-section-header">v0 Pricing Bands</div>' +
        '<div class="gc-card">' +
          '<h3>Offer A — Controls Kit Only (v0 Focus)</h3>' +
          '<p>Customer provides their own enclosure. We sell the brains.</p>' +
          '<table class="gc-spec-table" style="margin-top:10px">' +
            '<thead><tr><th>Tier</th><th>Price Band</th><th>Includes</th></tr></thead>' +
            '<tbody>' +
              '<tr><td><strong>Essential</strong></td><td>£599–£699</td><td>Temp/RH sensor, fans, humidifier, basic timer control</td></tr>' +
              '<tr><td><strong>Enhanced</strong></td><td>£899–£1,099</td><td>+ CO₂ sensor, ESP32 controller, smart scheduling, logging</td></tr>' +
            '</tbody>' +
          '</table>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Offer B — Full System Bundle (Future)</h3>' +
          '<p>£2,199–£3,499 including shed/enclosure. Deferred until control system is proven and install process is repeatable.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Why Controls-First?</h3>' +
          '<ul>' +
            '<li>Lower complexity than shipping physical structures</li>' +
            '<li>Faster iteration with design partners</li>' +
            '<li>Cleaner support boundaries</li>' +
            '<li>Fits current cost model</li>' +
          '</ul>' +
        '</div>'
      };
    }

    if (key === "business::Target Customer") {
      return { html:
        '<div class="gc-section-header">Target Customer</div>' +
        '<div class="gc-card">' +
          '<h3>Primary: Home Growers</h3>' +
          '<p>People who want reliable outcomes with low daily effort. They\'re interested in growing their own food but frustrated by inconsistent results from DIY setups.</p>' +
          '<ul>' +
            '<li>Willing to invest in quality equipment</li>' +
            '<li>Value consistency over complexity</li>' +
            '<li>Want guidance, not just tools</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Early Wedge: Mushroom-First Users</h3>' +
          '<p>The "mushroom curious" segment is growing fast. These users value consistency and contamination-risk reduction above all else.</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Future Expansion</h3>' +
          '<p>Prosumer growers → schools/education → restaurants with micro-farm ambitions. Each requires different onboarding but shares the same platform.</p>' +
        '</div>'
      };
    }

    if (key === "business::Subscription") {
      return { html:
        '<div class="gc-section-header">Subscription Tiers</div>' +
        '<table class="gc-spec-table">' +
          '<thead><tr><th>Tier</th><th>Features</th></tr></thead>' +
          '<tbody>' +
            '<tr><td><strong>Basic</strong></td><td>Recipe library, grow reminders, troubleshooting guides</td></tr>' +
            '<tr><td><strong>Plus</strong></td><td>Advanced analytics, "what happened?" explanations, grow history</td></tr>' +
            '<tr><td><strong>Pro</strong></td><td>Remote support (with consent), alerts, best-practice tuning</td></tr>' +
          '</tbody>' +
        '</table>' +
        '<div class="gc-card">' +
          '<h3>Why It Works</h3>' +
          '<ul>' +
            '<li>Higher grow success → happier customers → more referrals</li>' +
            '<li>Predictable recurring revenue</li>' +
            '<li>Natural vehicle for continuous recipe improvements</li>' +
            '<li>Support and analytics create real retention value</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Open Question</h3>' +
          '<p>What value is free vs paid? Local-first vs cloud features? Liability boundaries — what do we promise vs what is guidance?</p>' +
        '</div>'
      };
    }

    // === ROADMAP ===
    if (key === "roadmap::Milestone View") {
      return { html:
        '<div class="gc-section-header">Project Timeline</div>' +
        '<div class="gc-timeline">' +
          '<div class="gc-milestone active">' +
            '<h4>Milestone 0 — Decisions</h4>' +
            '<div class="ms-time">Weeks 1–2</div>' +
            '<p>Lock species, greens format, architecture, pricing posture. Clear the decision backlog before building anything.</p>' +
          '</div>' +
          '<div class="gc-milestone">' +
            '<h4>Prototype 0 — Instrument &amp; Learn</h4>' +
            '<div class="ms-time">Weeks 2–6</div>' +
            '<p>Sensor logging, manual control, capture failure modes and KPIs. Understand the environment before automating.</p>' +
          '</div>' +
          '<div class="gc-milestone">' +
            '<h4>Prototype 1 — Close the Loop</h4>' +
            '<div class="ms-time">Weeks 6–14</div>' +
            '<p>Humidity control loop, FAE scheduling, recipe v0 implementation. First automated grow with logged telemetry.</p>' +
          '</div>' +
          '<div class="gc-milestone">' +
            '<h4>Design Partners</h4>' +
            '<div class="ms-time">Parallel from Week 4</div>' +
            '<p>10–20 interviews, 5–10 design partners. Landing page + waitlist. Real user feedback driving iteration.</p>' +
          '</div>' +
          '<div class="gc-milestone">' +
            '<h4>Investor Package</h4>' +
            '<div class="ms-time">Post-P1 (Week 14+)</div>' +
            '<p>1-page brief + lean deck. Proof package with demo, KPI table, photos/videos. Evidence-based pitch.</p>' +
          '</div>' +
        '</div>'
      };
    }

    if (key === "roadmap::Milestone 0 — Decisions") {
      return { html:
        '<div class="gc-section-header">M0 — Clear the Decision Backlog</div>' +
        '<div class="gc-card">' +
          '<h3>Decisions to Lock</h3>' +
          '<ul>' +
            '<li>✅ Mushroom species → <strong>Oyster</strong> (recommended)</li>' +
            '<li>✅ Greens format → <strong>Microgreens trays</strong> (recommended)</li>' +
            '<li>✅ Architecture → <strong>Single chamber, recipe-switched</strong></li>' +
            '<li>⏳ Isolation tier → Tier 1 or 2? (stabilised vs managed exchange)</li>' +
            '<li>⏳ Pricing posture → Controls-first (recommended)</li>' +
            '<li>⏳ Brand form → "Grow Cabin" vs "GrowCabin"</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Exit Criteria</h3>' +
          '<p>All six decisions locked with rationale documented. No more "we should decide" items blocking prototype work.</p>' +
        '</div>'
      };
    }

    if (key === "roadmap::Prototype 0 — Instrument") {
      return { html:
        '<div class="gc-section-header">P0 — Instrument &amp; Learn</div>' +
        '<div class="gc-card">' +
          '<h3>Goals</h3>' +
          '<ul>' +
            '<li>Deploy sensors (temp/RH, optional CO₂, door sensor)</li>' +
            '<li>Manual control — you turn humidifier and fans on/off</li>' +
            '<li>Log everything: sensor readings, manual actions, observations</li>' +
            '<li>Capture KPIs: failure modes, condensation patterns, contamination events</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>What We Learn</h3>' +
          '<p>How fast does RH drift? How much does opening the door affect conditions? Where does condensation form? What\'s the real baseline before automation?</p>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Hardware Needed</h3>' +
          '<p>DHT22 or SCD40 sensor, basic data logger or ESP32, enclosure (existing tent/box is fine). Budget: ~£100–200 for instrumentation.</p>' +
        '</div>'
      };
    }

    if (key === "roadmap::Prototype 1 — Close Loop") {
      return { html:
        '<div class="gc-section-header">P1 — Closed-Loop Control</div>' +
        '<div class="gc-card">' +
          '<h3>Humidity Loop</h3>' +
          '<ul>' +
            '<li>Hysteresis control: ON below 85%, OFF above 92%</li>' +
            '<li>Min on/off timers prevent chatter (45s/60s)</li>' +
            '<li>Condensation guard: force OFF + FAE burst if &gt;95% for 3 min</li>' +
            '<li>States: IDLE → HUMIDIFYING → LOCKOUT_OFF → SAFE_DRYDOWN</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>FAE Scheduling</h3>' +
          '<ul>' +
            '<li>Time-based: 45–90s every 10 minutes</li>' +
            '<li>CO₂-aware: increase duty if &gt;1,200 ppm, high-vent if &gt;1,500 ppm</li>' +
            '<li>RH coordination: pause non-critical FAE if RH too low</li>' +
          '</ul>' +
        '</div>' +
        '<div class="gc-card">' +
          '<h3>Validation</h3>' +
          '<ul>' +
            '<li>RH in target band &gt;70% of run time</li>' +
            '<li>No sustained &gt;95% RH episodes</li>' +
            '<li>No visible standing water from loop behaviour</li>' +
            '<li>All transitions explainable from logs</li>' +
          '</ul>' +
        '</div>'
      };
    }

    // === ARCHIVE ===
    if (key === "archive::All Documents") {
      return { html:
        '<div class="gc-archive-note">These are the original research and planning documents generated during project scaffolding. They contain detailed analysis but are preserved here for reference rather than active use. The dashboard above distils the essential content.</div>' +

        '<div class="gc-archive-group">' +
          '<h4>📋 Core Project</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/PROJECT.md">PROJECT.md — Main project overview</a></li>' +
            '<li><a href="../docs/ONE_PAGE_BRIEF_V0.md">ONE_PAGE_BRIEF_V0.md — One-page brief</a></li>' +
            '<li><a href="../docs/ROADMAP.md">ROADMAP.md — Roadmap</a></li>' +
            '<li><a href="../docs/LOG-CHAT-SUMMARY.md">LOG-CHAT-SUMMARY.md — Conversation log</a></li>' +
            '<li><a href="../docs/SNIPPETS.md">SNIPPETS.md — Key snippets from chat</a></li>' +
            '<li><a href="../docs/KPIS.md">KPIS.md — KPI definitions</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🍄 Mushroom Research</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/MUSHROOM_SPECIES_SELECTION_MATRIX_V0.md">MUSHROOM_SPECIES_SELECTION_MATRIX_V0.md — Species scoring</a></li>' +
            '<li><a href="../docs/CONTAMINATION_CLEANABILITY_PRINCIPLES_V0.md">CONTAMINATION_CLEANABILITY_PRINCIPLES_V0.md — Cleanability principles</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🌱 Greens Research</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/GREENS_FORMAT_SELECTION_MATRIX_V0.md">GREENS_FORMAT_SELECTION_MATRIX_V0.md — Format scoring</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🏗️ Architecture &amp; Design</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/ARCHITECTURE_ONE_VS_TWO_CHAMBERS_MATRIX_V0.md">ARCHITECTURE_ONE_VS_TWO_CHAMBERS_MATRIX_V0.md — One vs two chambers</a></li>' +
            '<li><a href="../docs/ISOLATION_TIER_SELECTION_MATRIX_V0.md">ISOLATION_TIER_SELECTION_MATRIX_V0.md — Isolation tier selection</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_OVERVIEW.md">PRODUCT_DESIGN_OVERVIEW.md — Product design overview</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_ENV_CONTROL.md">PRODUCT_DESIGN_ENV_CONTROL.md — Environmental control</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_INSULATION.md">PRODUCT_DESIGN_INSULATION.md — Insulation design</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_RACKING.md">PRODUCT_DESIGN_RACKING.md — Racking systems</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_SHED_ENCLOSURE.md">PRODUCT_DESIGN_SHED_ENCLOSURE.md — Shed/enclosure design</a></li>' +
            '<li><a href="../docs/PRODUCT_DESIGN_APP_BACKEND.md">PRODUCT_DESIGN_APP_BACKEND.md — App &amp; backend</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🔧 Prototype Designs</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/PROTOTYPE_0_INSTRUMENTATION_RUNBOOK.md">PROTOTYPE_0_INSTRUMENTATION_RUNBOOK.md — P0 runbook</a></li>' +
            '<li><a href="../docs/PROTOTYPE_1_HUMIDITY_LOOP_DESIGN.md">PROTOTYPE_1_HUMIDITY_LOOP_DESIGN.md — P1 humidity loop</a></li>' +
            '<li><a href="../docs/PROTOTYPE_1_FAE_SCHEDULING_DESIGN.md">PROTOTYPE_1_FAE_SCHEDULING_DESIGN.md — P1 FAE scheduling</a></li>' +
            '<li><a href="../docs/PROTOTYPE_2_LIGHTING_STRATEGY.md">PROTOTYPE_2_LIGHTING_STRATEGY.md — P2 lighting</a></li>' +
            '<li><a href="../docs/PROTOTYPE_2_WATERING_STRATEGY.md">PROTOTYPE_2_WATERING_STRATEGY.md — P2 watering</a></li>' +
            '<li><a href="../docs/PROTOTYPING_STAGES.md">PROTOTYPING_STAGES.md — Prototyping stages overview</a></li>' +
            '<li><a href="../docs/PROTOTYPE_COMPONENT_OPTIONS_V1.md">PROTOTYPE_COMPONENT_OPTIONS_V1.md — Component options</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>📋 Recipes &amp; Schemas</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/RECIPE_SCHEMA_V0.md">RECIPE_SCHEMA_V0.md — Recipe schema draft</a></li>' +
            '<li><a href="../docs/MVP_STACK_V0.md">MVP_STACK_V0.md — MVP component matrix</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>💰 Business &amp; Commercial</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/BUSINESS_MODEL.md">BUSINESS_MODEL.md — Business model</a></li>' +
            '<li><a href="../docs/PRICING_BANDS_V0.md">PRICING_BANDS_V0.md — Pricing bands</a></li>' +
            '<li><a href="../docs/COSTS.md">COSTS.md — Cost overview</a></li>' +
            '<li><a href="../docs/COSTS_JAMES_SYNTHESIS.md">COSTS_JAMES_SYNTHESIS.md — Cost synthesis</a></li>' +
            '<li><a href="../docs/MARKETING.md">MARKETING.md — Marketing</a></li>' +
            '<li><a href="../docs/SEGMENTATION_TEST_PLAN.md">SEGMENTATION_TEST_PLAN.md — Segmentation test plan</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🎯 Investor &amp; Startup</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/INVESTOR_PACK.md">INVESTOR_PACK.md — Investor pack</a></li>' +
            '<li><a href="../docs/INVESTOR_PROOF_PACK_CHECKLIST.md">INVESTOR_PROOF_PACK_CHECKLIST.md — Proof pack checklist</a></li>' +
            '<li><a href="../docs/INVESTOR_ROUTE.md">INVESTOR_ROUTE.md — Route to first investor</a></li>' +
            '<li><a href="../docs/STARTUP_SETUP_UK.md">STARTUP_SETUP_UK.md — UK startup setup</a></li>' +
            '<li><a href="../docs/STARTUP_STRUCTURE_DECISION_MATRIX_UK_V0.md">STARTUP_STRUCTURE_DECISION_MATRIX_UK_V0.md — Structure decision</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🏢 Operations &amp; Process</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/OPS_MEMORY.md">OPS_MEMORY.md — Operations memory</a></li>' +
            '<li><a href="../docs/ORG_STRUCTURE.md">ORG_STRUCTURE.md — Organisation structure</a></li>' +
            '<li><a href="../docs/STAKEHOLDERS.md">STAKEHOLDERS.md — Stakeholders</a></li>' +
            '<li><a href="../docs/PROCESS_DEV.md">PROCESS_DEV.md — Process development</a></li>' +
            '<li><a href="../docs/PRODUCT_DEV.md">PRODUCT_DEV.md — Product development</a></li>' +
            '<li><a href="../docs/PRODUCT_PROCESS_DEV.md">PRODUCT_PROCESS_DEV.md — Product process dev</a></li>' +
            '<li><a href="../docs/SMART_FARMING_SOURCES.md">SMART_FARMING_SOURCES.md — Smart farming sources</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🤝 Partners</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/PARTNERS.md">PARTNERS.md — Partners overview</a></li>' +
            '<li><a href="../docs/PARTNERS_UK_SHORTLIST_V0.md">PARTNERS_UK_SHORTLIST_V0.md — UK shortlist</a></li>' +
            '<li><a href="../docs/PARTNER_SCORING_RUBRIC_V0.md">PARTNER_SCORING_RUBRIC_V0.md — Scoring rubric</a></li>' +
            '<li><a href="../docs/PARTNER_SHORTLIST_TEMPLATE.md">PARTNER_SHORTLIST_TEMPLATE.md — Shortlist template</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>🎬 Promo &amp; Brand</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/PROMO_VIDEO_30S_SCRIPT_AND_SHOTLIST_V0.md">PROMO_VIDEO_30S_SCRIPT_AND_SHOTLIST_V0.md — 30s promo script</a></li>' +
            '<li><a href="../docs/PROMO_VIDEO_AI.md">PROMO_VIDEO_AI.md — AI promo video</a></li>' +
            '<li><a href="../docs/BRAND_NAME_FORM_DECISION_V0.md">BRAND_NAME_FORM_DECISION_V0.md — Brand name decision</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>📂 Decisions &amp; Briefings</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/DECISION_CARD_NEXT_5.md">DECISION_CARD_NEXT_5.md — Next 5 decisions</a></li>' +
            '<li><a href="../docs/BRIEFINGS.md">BRIEFINGS.md — Briefings index</a></li>' +
            '<li><a href="../docs/BRIEFING_PROMPT_TEMPLATE.md">BRIEFING_PROMPT_TEMPLATE.md — Briefing template</a></li>' +
            '<li><a href="../docs/BRIEFING_PROMPT_DELTA_2026-02-10.md">BRIEFING_PROMPT_DELTA_2026-02-10.md — Briefing delta</a></li>' +
            '<li><a href="../docs/GPT-PRIOR-CHAT-2026-02-10.md">GPT-PRIOR-CHAT-2026-02-10.md — Prior GPT chat</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>📥 Inbound Research</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/inbound-james-2026-02-10/README.md">README.md — Inbound notes index</a></li>' +
            '<li><a href="../docs/inbound-james-2026-02-10/DESIGN-ENGINEER-ROLE.md">DESIGN-ENGINEER-ROLE.md — Design engineer role</a></li>' +
            '<li><a href="../docs/inbound-james-2026-02-10/PROJECT-LOG.md">PROJECT-LOG.md — Project log</a></li>' +
            '<li><a href="../docs/inbound-james-2026-02-10/budget-grow-sheds.md">budget-grow-sheds.md — Budget grow sheds</a></li>' +
            '<li><a href="../docs/inbound-james-2026-02-10/environmental-control-bom.md">environmental-control-bom.md — Environmental control BOM</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="gc-archive-group">' +
          '<h4>📝 Briefing Reports</h4>' +
          '<ul class="gc-archive-list">' +
            '<li><a href="../docs/briefings/briefing-2026-02-10-1421-family.md">briefing-2026-02-10-1421-family.md — Family briefing</a></li>' +
            '<li><a href="../docs/briefings/briefing-2026-02-10-1913-progress-update.md">briefing-2026-02-10-1913-progress-update.md — Progress update</a></li>' +
            '<li><a href="../docs/briefings/briefing-2026-02-11-1617-verbatim-gpt-output.md">briefing-2026-02-11-1617-verbatim-gpt-output.md — Verbatim GPT output</a></li>' +
          '</ul>' +
        '</div>'
      };
    }

    // Default fallback
    return { html: '<div class="gc-card"><h3>Coming Soon</h3><p>Content for this section is being developed.</p></div>' };
  }

  // ── Initialize ──
  switchSection("overview");

})();
