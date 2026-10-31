/* ==========================================================================
   ASHISH PRAJAPATI — PORTFOLIO CLIENT CONTROLLER
   Integrated Case Study Registry, Spec Drawer, and Dynamic Interactions
   ========================================================================== */

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const filterButtons = document.querySelectorAll(".filter-btn");
const caseCards = document.querySelectorAll(".case-card");
const resumeLinks = document.querySelectorAll(".resume-download");

// Redefined Technical & PM Hybrid Case Studies Database Registry (Matching Resume)
const caseStudyDetails = {
  "shopify-integration": {
    title: "Shopify–ERP Order-to-Cash Integration",
    subtitle: "E-commerce | O2C: Webhook sync engine for 100+ daily orders",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>E-commerce orders (100+ daily) were manually exported from Shopify and re-entered into ERP, creating duplicate entries.</li>
          <li>High-volume flash campaigns caused a <strong>3.5% overselling gap</strong> due to sync lag, while daily reconciliation took <strong>4 hours</strong>.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Chief Executive Officer (CEO), E-Commerce Sales Manager, Finance Controller, and 6-member IT developer team.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Analyzed order workflows from checkout to fulfillment; authored detailed <strong>BRD/FRD</strong> functional specifications.</li>
          <li>Mapped customer, SKU, tax, and item-level fields between Shopify JSON payloads and ERPNext ledgers.</li>
          <li>Defined automated <strong>CGST/SGST/IGST</strong> tax splits, queue retry logic, and exception handling protocols.</li>
          <li>Led Postman API load-testing, SQL validation scripts, and sync log audits through production go-live.</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Eliminated manual order entry completely; boosted order sync accuracy by <strong>30%</strong>.</li>
          <li>Cut daily finance reconciliation from <strong>4 hours to 10 minutes</strong>.</li>
          <li>Completely closed the 3.5% overselling gap across 14,000+ campaign orders.</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Mapped customer, SKU, and tax fields, supported Postman testing and SQL validation to achieve 30% higher order sync accuracy."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-O2C-01", desc: "Automate webhook listener for Shopify 'orders/create' event to trigger real-time ERP Sales Order ingestion.", rule: "Verify HMAC SHA256 signature; reject unauthorized payloads with 401.", uat: "Fired mock webhook payload; verified Sales Order created in ERP under 1.5s." },
      { id: "REQ-O2C-02", desc: "Dynamic tax split mapping (CGST, SGST, IGST) based on customer destination province code.", rule: "If shipping_province != company_state -> Apply IGST; else split CGST/SGST 50/50.", uat: "Simulated out-of-state order; verified tax ledgers balanced precisely." },
      { id: "REQ-O2C-03", desc: "Idempotent transaction control to prevent double billing or duplicate stock decrements.", rule: "Shopify Order ID enforced as unique SQL database constraint in ERP.", uat: "Fired duplicate webhook POST; verified system returned HTTP 200 without creating second record." }
    ],
    flow: [
      { step: "1", title: "As-Is Process Mapping & Discovery", desc: "Documented manual CSV export-import handoffs between Shopify and billing teams." },
      { step: "2", title: "API Schema & Field Mapping (BRD/FRD)", desc: "Authored field-by-field source-to-target mapping with data type transformations." },
      { step: "3", title: "Sprint Execution & IT Team Lead", desc: "Guided 6-developer team on middleware queue retries, rate limiting, and exception logging." },
      { step: "4", title: "UAT, SQL Validation & Go-Live", desc: "Conducted Postman edge-case testing, verified 100+ simulated orders, and executed launch." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Shopify JSON to ERP Field Mapping Schema</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Core mapping matrix governing e-commerce transactions into ERPNext accounting ledgers.</p>
      <div class="brd-table-wrapper">
        <table class="brd-table">
          <thead>
            <tr>
              <th style="width: 25%;">Shopify Source Field</th>
              <th style="width: 25%;">ERPNext Target Field</th>
              <th style="width: 15%;">Data Type</th>
              <th style="width: 35%;">Transformation &amp; Validation Rule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>order.id</code></td>
              <td><code>shopify_order_id</code></td>
              <td>String</td>
              <td>Unique SQL constraint in ERP to prevent duplicate order ingestion.</td>
            </tr>
            <tr>
              <td><code>line_items[].sku</code></td>
              <td><code>item_code</code></td>
              <td>String</td>
              <td>Validate SKU exists in ERP Item Master; flag exception if unmapped.</td>
            </tr>
            <tr>
              <td><code>shipping_address.province_code</code></td>
              <td><code>place_of_supply</code></td>
              <td>String</td>
              <td>Map 2-letter state code to Indian GST state code for tax determination.</td>
            </tr>
            <tr>
              <td><code>total_discounts</code></td>
              <td><code>discount_amount</code></td>
              <td>Decimal</td>
              <td>Apportion discount proportionally across item rows to prevent tax rounding drift.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Order Sync Accuracy", before: "70%", after: "100%", pct: 100, accent: "var(--metric)" },
      { label: "Daily Reconciliation Workload", before: "4 Hours", after: "10 Mins", pct: 95, accent: "var(--accent)" },
      { label: "Overselling Gap", before: "3.5%", after: "0.0%", pct: 100, accent: "var(--metric-dark)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Manual CSV entry resulted in 4 hours daily reconciliation and 3.5% overselling during flash promotions. <br/><strong>After:</strong> Real-time webhook architecture achieved 30% higher sync accuracy with zero manual entry. <br/><strong>Verification Window:</strong> Audited across 14,000+ orders during peak quarterly sales."
  },

  "quality-inspection": {
    title: "Quality Inspection Automation",
    subtitle: "Operations | Quality: Replacing Excel inspection with ERP grading",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>Refurbishment testing relied on paper checklists and spreadsheets, taking <strong>24 minutes per laptop</strong>.</li>
          <li>Hardware component grading lacked digital enforcement, leading to <strong>26% missed Material Requests (MRs)</strong>.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Head of Production, Quality Assurance Lead, Warehouse Supervisors, and CEO.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Conducted shop-floor time-and-motion studies to map testing bottlenecks and grading discrepancies.</li>
          <li>Specified functional requirements for automated hardware data capture and digital grading checklists in ERPNext.</li>
          <li>Engineered automated Material Request (MR) triggers when defective components failed QA parameters.</li>
          <li>Planned UAT dry runs with technicians and authored standard operating procedures (SOPs).</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Cut inspection turnaround time from <strong>24 to 11 minutes per laptop</strong> (<strong>54% faster</strong>).</li>
          <li>Reduced missed Material Requests from <strong>26% to 8–10%</strong>.</li>
          <li>Accelerated device throughput by over 115% without adding QA headcount.</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Replaced paper/Excel inspection with automated hardware data capture, cutting inspection time from 24 to 11 minutes (54% faster)."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-QA-01", desc: "Automate hardware spec retrieval (CPU, RAM, Battery Health) via diagnostic utility into ERP QA DocType.", rule: "Parse JSON payload; populate read-only hardware fields directly in inspection ticket.", uat: "Plugged diagnostic USB; confirmed hardware parameters auto-populated in 3 seconds." },
      { id: "REQ-QA-02", desc: "Auto-trigger Material Request (MR) upon any component grade failure (e.g., Battery < 80% or faulty keyboard).", rule: "If parameter_status == 'FAIL' -> Generate draft MR for replacement SKU tied to device serial.", uat: "Logged failed battery parameter; verified draft MR created and routed to warehouse picking queue." }
    ],
    flow: [
      { step: "1", title: "Shop-Floor Shadowing & Baseline", desc: "Shadowed QA technicians; timed each test parameter to identify 24-minute inspection baseline." },
      { step: "2", title: "Grading Matrix & Spec Authoring", desc: "Authored functional grading criteria (Grade A/B/C) and auto-MR business rules." },
      { step: "3", title: "IT Team Lead & Utility Integration", desc: "Guided IT developers on USB diagnostic parser script and ERPNext Quality Inspection doctype." },
      { step: "4", title: "Floor Training & Operational Rollout", desc: "Trained 18 floor technicians on digital checklists and verified 0 missed MRs in initial cohort." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Inspection Grading &amp; Auto-MR Flow Logic</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">System logic governing device pass/fail decisions and automated warehouse triggers.</p>
      <div style="background: var(--surface-soft); border: 1px solid var(--line-strong); padding: 1.2rem; border-radius: var(--radius); font-family: monospace; font-size: 0.8rem; line-height: 1.7; color: var(--text-secondary); overflow-x: auto;">
        [Device Arrives at QA Station] <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--&gt; [Run Auto-Diagnostic Script] --&gt; Auto-populate CPU, RAM, SSD, Battery Health<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--&gt; [Physical Checklist: Display / Keyboard / Chassis]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Evaluate Parameters]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--- (All Passed) -----------&gt; [Assign Cosmetic Grade A/B] --&gt; [Move to Finished Goods Inventory]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--- (Defect Detected) ------&gt; [Trigger Auto-MR for Required Part] --&gt; [Route to Repair Bay]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+--&gt; [Lock Device Serial until QA Re-test]
      </div>
    `,
    metrics: [
      { label: "QA Inspection Time", before: "24 Mins", after: "11 Mins", pct: 54, accent: "var(--metric)" },
      { label: "Missed Material Requests", before: "26%", after: "8%", pct: 69, accent: "var(--accent)" },
      { label: "Daily QA Throughput", before: "45 Units", after: "98 Units", pct: 100, accent: "var(--brand-indigo)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Manual paper checklists took 24 mins per device with 26% missed material requests. <br/><strong>After:</strong> Automated capture reduced inspection to 11 mins and missed MRs to 8–10%. <br/><strong>Measurement Window:</strong> Audited across 3,200+ laptop refurbishments over 4 months."
  },

  "gst-einvoicing": {
    title: "GST E-Invoicing & Bank Payment Workflow",
    subtitle: "Finance | Compliance: One-click IRN generation & payable control",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>Manual GST calculations on accounting spreadsheets took <strong>12 minutes per invoice</strong>.</li>
          <li>Copying government IRN numbers manually created rounding errors and <strong>₹25,000+ penalty risks</strong>.</li>
          <li>Unstructured refund approvals resulted in payment delays and audit friction.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Chief Financial Officer (CFO), Corporate Tax Auditors, Payable Accountants, and Bank Ops.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Documented government GST e-invoicing API schemas, mandatory HSN validations, and 15-character GSTIN regex rules.</li>
          <li>Specified one-click GST e-invoice generation and automated bank payment file creation in ERPNext.</li>
          <li>Authored SQL validation scripts to audit payable ledgers and refund authorization hierarchies.</li>
          <li>Supervised sandbox integration testing with federal tax servers and managed user adoption.</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Generated government IRN and signed QR codes in <strong>4 seconds</strong> (down from 12 mins).</li>
          <li>Eliminated <strong>₹25,000+ regulatory compliance penalty risks</strong> with 100% filing accuracy.</li>
          <li>Accelerated customer refund approval cycle by <strong>40%</strong>.</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Specified one-click GST e-invoice generation from ERP, improving compliance accuracy and speeding up refund processing by 40%."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-FIN-01", desc: "Pre-submission schema validation for corporate GSTIN, 8-digit HSN codes, and state tax splits.", rule: "Halt API dispatch and display validation toast if HSN.length != 8 or GSTIN regex fails.", uat: "Simulated submission with invalid GSTIN; verified clear error toast prevented API reject." },
      { id: "REQ-FIN-02", desc: "Direct API retrieval and embedding of government IRN hash and Base64 QR code on invoice PDFs.", rule: "Store IRN, Ack No, and QR in encrypted ERP fields; render on invoice template.", uat: "Generated test invoice; scanned QR on physical printout with mobile tax app to confirm valid government IRN." }
    ],
    flow: [
      { step: "1", title: "Compliance Mapping", desc: "Collaborated with tax auditors to document federal schema constraints and tax rates." },
      { step: "2", title: "Payload Specification (FRD)", desc: "Authored JSON payload specs mapping invoice line items to government tax schema." },
      { step: "3", title: "Bank API & Sandbox Testing", desc: "Tested batch payment generation and verified IRN generation under simulated API load." },
      { step: "4", title: "Go-Live & Adoption", desc: "Trained accounting team, cut paper logging completely, and executed go-live." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Tax Schema Validation &amp; Error Handling Matrix</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Pre-submission validation rules preventing government portal rejects.</p>
      <div class="brd-table-wrapper">
        <table class="brd-table">
          <thead>
            <tr>
              <th style="width: 25%;">Validation Objective</th>
              <th style="width: 25%;">Target DB Field</th>
              <th style="width: 30%;">Logic Checking Rule</th>
              <th style="width: 20%;">Fail Trigger Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>GSTIN Regex</strong></td>
              <td><code>customer_gstin</code></td>
              <td>15-character alphanumeric statutory regex.</td>
              <td>Block submit; flag invoice "Invalid Tax ID".</td>
            </tr>
            <tr>
              <td><strong>HSN Digit Check</strong></td>
              <td><code>item.hsn_code</code></td>
              <td>Must equal exactly 8 numeric digits.</td>
              <td>Lock item row; require correct HSN master selection.</td>
            </tr>
            <tr>
              <td><strong>Tax Split Equality</strong></td>
              <td><code>cgst_rate</code>, <code>sgst_rate</code></td>
              <td>Intra-state: CGST amount must equal SGST amount.</td>
              <td>Halt API request; alert Finance Controller.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Invoice IRN Generation Speed", before: "12 Mins", after: "4 Secs", pct: 99, accent: "var(--metric)" },
      { label: "Refund Processing Cycle", before: "7 Days", after: "4.2 Days", pct: 40, accent: "var(--accent)" },
      { label: "Tax Compliance Risk", before: "₹25,000", after: "₹0", pct: 100, accent: "var(--metric-dark)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Manual paper filing took 12 mins per invoice with periodic penalty risks. <br/><strong>After:</strong> One-click automated API posting registers IRNs in 4 seconds. <br/><strong>Measurement Window:</strong> Checked across 3,500+ invoices across consecutive quarters."
  },

  "auto-procurement": {
    title: "Auto-Procurement & Cost Optimisation",
    subtitle: "Procurement | Supply Chain: Demand-based automated purchase planning",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>Procurement orders relied on manual spreadsheet forecasts, leading to recurring stockouts of critical repair parts.</li>
          <li>Excess capital was locked in slow-moving component batches with zero visibility into consumption velocity.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Supply Chain Director, Head of Procurement, Refurbishment Supervisors, and CEO.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Evaluated solution options (manual buffer stock vs automated demand planning).</li>
          <li>Formulated dynamic reorder algorithms factoring average consumption rates, active repair queue requirements, and vendor lead times.</li>
          <li>Authored BRDs for an automated purchase requisition engine with vendor price history benchmarking.</li>
          <li>Built exception dashboards highlighting low-stock alerts and purchase price deviations.</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Supported an estimated <strong>8–12% procurement cost optimisation</strong> through volume aggregation and vendor benchmarks.</li>
          <li>Reduced stockouts on critical parts (displays, motherboards) by over <strong>65%</strong>.</li>
          <li>Decreased capital tied in obsolete component inventory by <strong>22%</strong>.</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Defined demand-based procurement logic using consumption trends, pending repair needs, and vendor price history, supporting 8–12% cost savings."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-PROC-01", desc: "Dynamic Reorder Point (ROP) calculation engine based on 30-day moving average consumption + buffer.", rule: "ROP = (Avg Daily Consumption * Vendor Lead Time Days) + Safety Buffer.", uat: "Simulated component draw-down; verified draft Purchase Order auto-generated when stock breached ROP." },
      { id: "REQ-PROC-02", desc: "Vendor Price Comparison matrix auto-highlighting lowest verified quote on draft PO.", rule: "Fetch past 3 purchase invoices per SKU; flag quote if > 5% above historical minimum.", uat: "Entered vendor quote 8% above benchmark; verified system highlighted deviation for manager sign-off." }
    ],
    flow: [
      { step: "1", title: "Historical Data Analysis", desc: "Extracted 12 months of procurement data using SQL to identify consumption trends and price variances." },
      { step: "2", title: "Demand Algorithm & BRD", desc: "Defined mathematical demand logic linking active repair tickets with lead-time buffers." },
      { step: "3", title: "ERPNext Purchase Module Sprints", desc: "Led IT team in configuring auto-reorder levels, approval thresholds, and vendor price lists." },
      { step: "4", title: "Quarterly Pilot & Sign-off", desc: "Piloted with top 50 high-turnover SKUs; verified 8–12% cost savings before facility-wide rollout." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Demand Planning Logic &amp; Reorder Formula</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Algorithmic rule matrix controlling automated purchase order generation.</p>
      <div class="brd-table-wrapper">
        <table class="brd-table">
          <thead>
            <tr>
              <th style="width: 20%;">Variable</th>
              <th style="width: 35%;">Source / Calculation</th>
              <th style="width: 45%;">System Application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>Daily Velocity (V)</code></td>
              <td>Sum of parts consumed over 30 days ÷ 30</td>
              <td>Dynamic rolling rate recalculated nightly by background cron.</td>
            </tr>
            <tr>
              <td><code>Lead Time (L)</code></td>
              <td>Vendor Master average dispatch delay (days)</td>
              <td>Configured per component supplier contract.</td>
            </tr>
            <tr>
              <td><code>Active Demand (D)</code></td>
              <td>Count of repair tickets currently awaiting part</td>
              <td>Queried in real-time from QA diagnostic backlog.</td>
            </tr>
            <tr>
              <td><code>Reorder Level</code></td>
              <td><code>(V × L) + Safety Stock + D</code></td>
              <td>When Active Stock &lt; Reorder Level -> Auto-generate Draft Purchase Order.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Procurement Cost Optimisation", before: "0%", after: "10.5%", pct: 100, accent: "var(--metric)" },
      { label: "Repair Part Stockout Incidence", before: "32%", after: "8%", pct: 75, accent: "var(--accent)" },
      { label: "Slow-Moving Inventory Capital", before: "₹18L", after: "₹14L", pct: 22, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Manual spreadsheet orders caused frequent stockouts and 8–12% pricing inefficiencies across disparate vendors. <br/><strong>After:</strong> Algorithmic demand calculation stabilized inventory and lowered procurement costs by 8–12%. <br/><strong>Measurement Window:</strong> Evaluated across 85 high-value component categories over two quarters."
  },

  "component-tracking": {
    title: "Component Tracking & Inventory Control",
    subtitle: "Inventory | Governance: Digital tracking across refurbishment lifecycle",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>Unrecorded component movements during refurbishment caused <strong>~6% repacking leakage</strong>.</li>
          <li>Floor technicians lacked serialized tracking, making it impossible to identify which parts were installed in which devices.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Warehouse Incharge, Refurbishment Supervisors, Quality Auditors, and CEO.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Conducted root-cause analysis on inventory leakage; mapped component movement from warehouse to technician bins.</li>
          <li>Designed an ERP serialization and consumption tracking process linking every part issued, consumed, or replaced to a specific device serial number.</li>
          <li>Defined strict quantity restrictions, mismatch alerts, and digital audit trails.</li>
          <li>Authored floor SOPs and trained inventory clerks on barcode scanner issue workflows.</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Substantially mitigated <strong>~6% repacking leakage</strong> and inventory discrepancies.</li>
          <li>Established <strong>100% component-to-device traceability</strong> across 12,000+ refurbished units.</li>
          <li>Reduced missing parts and rework cases by over <strong>70%</strong>.</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Built an ERP process to track parts issued, consumed, returned, and replaced, defining quantity restrictions to reduce ~6% repacking leakage."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-INV-01", desc: "Mandate device serial number linkage for all high-value component stock issues (RAM, SSD, Screen).", rule: "Stock Entry issue cannot be submitted without validating valid active Device Serial in ERP.", uat: "Attempted to issue SSD without device serial; system threw hard validation block." },
      { id: "REQ-INV-02", desc: "Automated Defective Part Return gate requiring physical quarantine scan before issuing replacement.", rule: "Limit replacement component issuance to 1:1 against returned defective lot barcode.", uat: "Simulated replacement request without scrap return; verified system prevented second part dispatch." }
    ],
    flow: [
      { step: "1", title: "Leakage Root-Cause Analysis", desc: "Audited warehouse scrap bins and technician benches to trace sources of 6% repacking leakage." },
      { step: "2", title: "Traceability Architecture (FRD)", desc: "Specified serial-level linking between Bill of Materials (BOM) items and finished devices." },
      { step: "3", title: "Barcode Scanner Validation", desc: "Supervised developers in integrating USB barcode scanners with ERP Stock Entry screens." },
      { step: "4", title: "Governance Rollout", desc: "Enforced digital gate rules; eliminated untracked floor withdrawals within first month." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Serialized Consumption Governance Flow</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Process gates preventing untracked component withdrawals and repacking leakage.</p>
      <div style="background: var(--surface-soft); border: 1px solid var(--line-strong); padding: 1.2rem; border-radius: var(--radius); font-family: monospace; font-size: 0.8rem; line-height: 1.7; color: var(--text-secondary); overflow-x: auto;">
        [Technician Requests Part for Unit #SN-9821] <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Scan Device Barcode in ERP] --&gt; Checks Unit QA Defect Log for Authorized Part<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--- (Part Authorized) ------&gt; [Scan Part Serial Barcode] --&gt; [Issue to Technician]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--- (Unauthorized Part) ----&gt; [SYSTEM BLOCK: Reason Code & Supervisor PIN Required]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Part Installed on Unit] --&gt; Serialized Component ID bound to Unit History Ledger<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--&gt; Defective Part Scanned &amp; Deposited in Quarantine Warehouse Bins<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+--&gt; 100% Traceability Logged in SQL Audit Trail
      </div>
    `,
    metrics: [
      { label: "Repacking Leakage Rate", before: "6.2%", after: "0.8%", pct: 87, accent: "var(--metric)" },
      { label: "Component Traceability", before: "30%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Missing Component Incidents", before: "48/mo", after: "4/mo", pct: 92, accent: "var(--metric-dark)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Unmonitored bench withdrawals led to ~6% repacking leakage and untraceable parts swaps. <br/><strong>After:</strong> Serialized linking established 100% part lineage and reduced missing parts by >70%. <br/><strong>Measurement Window:</strong> Checked across 12,000 components and 450 refurbishment batches."
  },

  "shiprocket-logistics": {
    title: "Logistics Integration & Workflow Governance",
    subtitle: "Shiprocket | Warehouse: Automated courier assignment & 3PL governance",
    overview: `
      <div class="drawer-section">
        <h4>Problem Statement</h4>
        <ul>
          <li>Dispatch staff spent <strong>25 clicks per shipment</strong> copying customer addresses, weight details, and booking carriers.</li>
          <li>AWB waybill generation took 5 minutes per package, creating heavy bottlenecks during evening cargo dispatches.</li>
        </ul>
        <h4>Stakeholders Engaged</h4>
        <ul>
          <li>Logistics Director, Warehouse Packing Lead, Dispatch Desk Clerks, Customer Support Lead.</li>
        </ul>
        <h4>My Role &amp; Exact Contribution</h4>
        <ul>
          <li>Mapped the full fulfillment lifecycle from packaging station to courier handoff.</li>
          <li>Authored technical specifications for Shiprocket API integration directly inside ERPNext.</li>
          <li>Designed automated courier selection rules optimizing for delivery speed, pin-code reach, and cheapest shipping rate.</li>
          <li>Configured ERP webhook listeners to retrieve AWB waybills instantly upon packing state validation.</li>
        </ul>
        <h4>Quantifiable Business Impact</h4>
        <ul>
          <li>Reduced shipment booking effort from <strong>25 clicks to 3 clicks</strong> (<strong>88% reduction</strong>).</li>
          <li>Accelerated AWB waybill fetch speed from <strong>5 minutes to 2 seconds</strong>.</li>
          <li>Shortened Return-to-Origin (RTO) processing cycles by <strong>75%</strong> (48 hrs to 12 hrs).</li>
        </ul>
        <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
          "Supported Shiprocket API integration and movement restrictions, reducing shipment booking effort from 25 clicks to 3."
        </div>
      </div>
    `,
    brd: [
      { id: "REQ-SHIP-01", desc: "Trigger automated PDF shipping labels and AWB waybills upon warehouse order validation.", rule: "Send weight and dimensions to Shiprocket API immediately upon packing state change.", uat: "Verified PDF print payload returns within 2 seconds of status click." },
      { id: "REQ-SHIP-02", desc: "Dynamic reverse logistics WhatsApp status updates on package rejections/delays.", rule: "Dispatch RTO (Return to Origin) trigger to customers within 15 mins.", uat: "Simulated non-delivery exception; verified WhatsApp outbound message logged." }
    ],
    flow: [
      { step: "1", title: "Fulfillment Flow Shadowing", desc: "Analyzed manual handoffs between packing racks, dispatch desks, and 3PL cargo trucks." },
      { step: "2", title: "Webhook Specifications", desc: "Drafted precise status maps integrating 9 external courier milestones directly into ERPNext." },
      { step: "3", title: "Hardware Scanner Trial", desc: "Supervised developers in integrating barcode scanner hardware with sandbox API endpoints." },
      { step: "4", title: "SOP Rollout & Deployment", desc: "Shipped production version on-time and conducted dispatch staff training sessions." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable: Courier Allocation Matrix &amp; UAT Log</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Verification trace demonstrating automated carrier selection and test outcomes.</p>
      <div class="brd-table-wrapper">
        <table class="brd-table">
          <thead>
            <tr>
              <th style="width: 15%;">UAT ID</th>
              <th style="width: 35%;">Test Scenario Description</th>
              <th style="width: 25%;">Expected System Output</th>
              <th style="width: 15%;">Result</th>
              <th style="width: 10%;">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>TC-SHIP-01</strong></td>
              <td>Simulate shipment request &lt; 1kg to Metro Zone pin code.</td>
              <td>Auto-allocate cheapest Air carrier; print AWB label.</td>
              <td>Delhivery Air selected. Label printed in 1.8s.</td>
              <td style="color: var(--metric); font-weight: 800;">PASS</td>
            </tr>
            <tr>
              <td><strong>TC-SHIP-02</strong></td>
              <td>Simulate shipment request with invalid Zip code digits.</td>
              <td>Throw HTTP 422 error and flag ERP record as "Hold".</td>
              <td>API returned validation error. Document flagged.</td>
              <td style="color: var(--metric); font-weight: 800;">PASS</td>
            </tr>
            <tr>
              <td><strong>TC-SHIP-03</strong></td>
              <td>Simulate webhook callback for non-delivery / RTO.</td>
              <td>Change state to "RTO Initiated"; queue customer alert.</td>
              <td>State changed. Customer alert logged in CRM.</td>
              <td style="color: var(--metric); font-weight: 800;">PASS</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Shipment Booking Clicks", before: "25 Clicks", after: "3 Clicks", pct: 88, accent: "var(--metric)" },
      { label: "AWB Waybill Fetch Speed", before: "5 Mins", after: "2 Secs", pct: 100, accent: "var(--accent)" },
      { label: "RTO Processing Cycle", before: "48 Hours", after: "12 Hours", pct: 75, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Clerks took 25 manual clicks and 5 minutes per order to generate shipping labels. <br/><strong>After:</strong> Direct integration automated courier selection in 3 clicks and 2 seconds. <br/><strong>Measurement Window:</strong> Audited across 5,800 package deliveries over 60 days."
  }
};

// Mobile Menu Toggle
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    });
  });
}

// Case Studies Category Filtering
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    caseCards.forEach(card => {
      const categories = (card.dataset.category || "").split(" ");
      const isVisible = filter === "all" || categories.includes(filter);
      card.hidden = !isVisible;
    });

    // Re-balance grid layout symmetry
    formatGridSymmetry();
  });
});

// Resume Blob Download Driver
resumeLinks.forEach(link => {
  link.addEventListener("click", async event => {
    event.preventDefault();

    const url = link.href;
    const fileName = link.getAttribute("download") || "Ashish_Prajapati_Resume.pdf";

    try {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error("Resume PDF could not be fetched.");

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const temporaryLink = document.createElement("a");

      temporaryLink.href = objectUrl;
      temporaryLink.download = fileName;
      document.body.appendChild(temporaryLink);
      temporaryLink.click();
      temporaryLink.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      window.location.href = url;
    }
  });
});

// Grid Symmetrical Spanning Adjustments
function formatGridSymmetry() {
  if (window.innerWidth <= 1024) {
    caseCards.forEach(card => card.classList.remove("span-two"));
    return;
  }
  const visibleCards = Array.from(caseCards).filter(card => !card.hidden);
  caseCards.forEach(card => card.classList.remove("span-two"));
  if (visibleCards.length % 2 !== 0 && visibleCards.length > 0) {
    visibleCards[visibleCards.length - 1].classList.add("span-two");
  }
}

window.addEventListener("resize", formatGridSymmetry);
formatGridSymmetry();

// Case Studies Drawer UI Driver
const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawer-overlay");
const drawerClose = document.getElementById("drawer-close");
const drawerTitle = document.getElementById("drawer-title");
const drawerSubtitle = document.getElementById("drawer-subtitle");
const drawerTabButtons = document.querySelectorAll(".drawer-tab");
const drawerPanes = document.querySelectorAll(".drawer-pane");

const paneOverview = document.getElementById("pane-overview");
const paneRequirements = document.getElementById("pane-requirements");
const paneProcess = document.getElementById("pane-process");
const paneArtifacts = document.getElementById("pane-artifacts");
const paneMetrics = document.getElementById("pane-metrics");

function openDrawer(caseKey) {
  const data = caseStudyDetails[caseKey];
  if (!data) return;

  drawerTitle.textContent = data.title;
  drawerSubtitle.textContent = data.subtitle;

  // Overview Pane
  paneOverview.innerHTML = data.overview;

  // Requirements Table
  let brdRowsHtml = "";
  data.brd.forEach(req => {
    brdRowsHtml += `
      <tr>
        <td style="font-weight: 800; color: var(--accent);">${req.id}</td>
        <td>${req.desc}</td>
        <td><span style="font-family: monospace; font-size: 0.76rem; background: var(--surface-soft); padding: 0.4rem; border-radius: 4px; display: inline-block;">${req.rule}</span></td>
        <td style="color: var(--muted);">${req.uat}</td>
      </tr>
    `;
  });
  
  paneRequirements.innerHTML = `
    <div class="brd-table-wrapper">
      <table class="brd-table">
        <thead>
          <tr>
            <th style="width: 15%;">Req ID</th>
            <th style="width: 40%;">Requirement Description</th>
            <th style="width: 25%;">System Rule</th>
            <th style="width: 20%;">UAT Scenario</th>
          </tr>
        </thead>
        <tbody>
          ${brdRowsHtml}
        </tbody>
      </table>
    </div>
  `;

  // Process Flows (PM & Milestones)
  let flowHtml = `<div class="step-list">`;
  data.flow.forEach(step => {
    flowHtml += `
      <div class="step-item">
        <div class="step-number">${step.step}</div>
        <div class="step-details">
          <div class="step-title">${step.title}</div>
          <p class="step-desc">${step.desc}</p>
        </div>
      </div>
    `;
  });
  flowHtml += `</div>`;
  paneProcess.innerHTML = flowHtml;

  // Sanitized Artifacts
  paneArtifacts.innerHTML = data.artifact || "<p>No artifact available.</p>";

  // Metrics Charts (Impact & Metrics)
  let metricsHtml = `<div style="display: flex; flex-direction: column; gap: 1.5rem;">`;
  data.metrics.forEach((metric, index) => {
    metricsHtml += `
      <div class="metric-bar-group">
        <div class="metric-bar-header">
          <span class="metric-bar-label">${metric.label}</span>
          <span class="metric-bar-values">Before: <span style="text-decoration: line-through; color: var(--muted);">${metric.before}</span> &rarr; After: <span style="font-weight: 800; color: ${metric.accent};">${metric.after}</span></span>
        </div>
        <div class="metric-track">
          <div class="metric-fill" id="metric-fill-${index}" style="width: 0%; background: ${metric.accent};"></div>
        </div>
      </div>
    `;
  });
  metricsHtml += `</div>`;
  if (data.metricsProof) {
    metricsHtml += `
      <div style="margin-top: 2rem; border-top: 1px solid var(--line-strong); padding-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem; color: var(--text);">Measurement Context &amp; Proof</h4>
        <p style="font-size: 0.86rem; color: var(--muted); line-height: 1.6;">${data.metricsProof}</p>
      </div>
    `;
  }
  paneMetrics.innerHTML = metricsHtml;

  // Initialize view tabs
  switchTab("overview");

  drawer.classList.add("open");
  drawerOverlay.classList.add("open");
  document.body.classList.add("drawer-open");
  document.documentElement.classList.add("drawer-open");
  document.body.style.overflow = "hidden";

  // Trigger metrics animations
  setTimeout(() => {
    data.metrics.forEach((metric, index) => {
      const bar = document.getElementById(`metric-fill-${index}`);
      if (bar) bar.style.width = `${metric.pct}%`;
    });
  }, 100);
}

function switchTab(tabId) {
  drawerTabButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  drawerPanes.forEach(pane => {
    pane.classList.toggle("active", pane.id === `pane-${tabId}`);
  });
}

function closeDrawer() {
  drawer.classList.remove("open");
  drawerOverlay.classList.remove("open");
  document.body.classList.remove("drawer-open");
  document.documentElement.classList.remove("drawer-open");
  document.body.style.overflow = "";
}

// Drawer Event Listeners
drawerTabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    switchTab(btn.dataset.tab);
  });
});

if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && drawer && drawer.classList.contains("open")) {
    closeDrawer();
  }
});

document.querySelectorAll(".view-specs-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".case-card");
    const caseKey = card.dataset.caseKey;
    openDrawer(caseKey);
  });
});

// Intersection Observer for scroll animations
function revealVisibleItems() {
  document.querySelectorAll(".reveal").forEach(item => item.classList.add("visible"));
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
} else {
  revealVisibleItems();
}

// Topbar Active Nav Scrollspy
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollPosition = window.pageYOffset + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}, { passive: true });
