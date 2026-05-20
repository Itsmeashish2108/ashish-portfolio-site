const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const filterButtons = document.querySelectorAll(".filter-btn");
const caseCards = document.querySelectorAll(".case-card");
const resumeLinks = document.querySelectorAll(".resume-download");

// Redefined Technical & PM Hybrid Case Studies Database Registry
const caseStudyDetails = {
  "erp-workflow": {
    title: "ERP Workflow Automation",
    subtitle: "Transitioning manual operations to structured ERPNext flows",
    overview: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Problem Statement</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Legacy manual Excel-based tracking across receiving, inventory, QA, and dispatches led to a 48-hour order latency, frequent stock mismatch discrepancies, and zero auditability.</p>
      
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Stakeholders Involved</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Chief Operating Officer (COO), Warehouse Supervisors, Purchase Managers, and Finance Directors.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Legacy Process (Before)</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Receiving staff manually logged incoming parts on clipboards, compiling spreadsheets weekly and emailing them to procurement, causing severe delays and duplicate entry gaps.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">My Exact Contribution &amp; Role</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Served as the lead Business Systems Analyst. Shadowed warehouse staff, mapped current-state bottlenecks, authored detailed BRD/FRD functional specs, defined role permissions, configured double-gate financial approvals, and directed IT developer sprints.</p>
      
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Aligned 6 backend developers with operations schedules, eliminating manual Excel tracking and hitting the warehouse launch timeline."
      </div>
    `,
    brd: [
      { id: "REQ-01", desc: "Dual role approval hierarchy for purchasing transactions exceeding ₹50,000.", rule: "Finance Manager + COO verification required.", uat: "Fired mock purchase orders; confirmed double-gate block." },
      { id: "REQ-02", desc: "Inventory validation rules to restrict warehouse pickers from dispatching unapproved raw stock.", rule: "Trigger system error on unreleased batches.", uat: "Simulated quarantine dispatch; verified system error thrown." }
    ],
    flow: [
      { step: "1", title: "Discovery & Scope Definition", desc: "Shadowed warehouse operatives and mapped manual entry pipelines to define scope baseline." },
      { step: "2", title: "BRD / FRD Drafting", desc: "Authored detailed functional specification documents outlining approval workflows and roles." },
      { step: "3", title: "Sprint Execution & Team Lead", desc: "Structured developers' backlog, allocated tasks, triaged bugs daily, and maintained speed." },
      { step: "4", title: "UAT Sign-off & Release", desc: "Coordinated user acceptance dry runs, cleared defect backlogs, and executed clean go-live." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable Excerpt: Dual-Gate Approval Routing Matrix</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Requirement excerpt mapping conditional validation triggers and action paths.</p>
      <div class="brd-table-wrapper">
        <table class="brd-table">
          <thead>
            <tr>
              <th style="width: 25%;">Trigger Event</th>
              <th style="width: 25%;">Condition</th>
              <th style="width: 30%;">System Action</th>
              <th style="width: 20%;">Owner Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>PO Submit Request</strong></td>
              <td>PO Value &lt; ₹50,000</td>
              <td>Auto-approve transaction; update inventory stock ledgers immediately.</td>
              <td>Warehouse Clerk</td>
            </tr>
            <tr>
              <td><strong>PO Submit Request</strong></td>
              <td>PO Value &ge; ₹50,000</td>
              <td>Lock item editing. Route to Finance approval queue.</td>
              <td>Finance Manager</td>
            </tr>
            <tr>
              <td><strong>Finance Approves</strong></td>
              <td>PO Value &ge; ₹2,50,000</td>
              <td>Route to COO queue for secondary digital signature.</td>
              <td>Chief Operating Officer</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Sprint Deadline Compliance", before: "75%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Order Processing Time", before: "48 Hours", after: "4 Hours", pct: 92, accent: "var(--accent-dark)" },
      { label: "Manual Excel Dependency", before: "100%", after: "0%", pct: 100, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> 48 hours order-to-ship latency using paper GRNs and spreadsheet lists. <br/><strong>After:</strong> Real-time ERPNext entry dropped order processing to 4 hours. <br/><strong>Measurement Timeframe:</strong> Checked over a 12-week post-deployment window auditing 1,200 purchase orders and 8,500 line items."
  },
  "shopify-integration": {
    title: "Shopify to ERP Integration",
    subtitle: "Real-time automated syncing of sales, inventory, and refunds",
    overview: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Problem Statement</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Overselling on high-volume items during sales campaigns (3.5% overselling rate), paired with tedious manual spreadsheet reconciliation (4 hours/day) and state tax miscalculations.</p>
      
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Stakeholders Involved</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">E-commerce Sales Director, Finance Controllers, Customer Support Supervisors.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Legacy Process (Before)</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Orders were manually exported as CSVs from Shopify and imported into the ERP database twice daily, creating lags during which out-of-stock items remained purchasable.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">My Exact Contribution &amp; Role</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Mapped data fields between Shopify JSON payloads and ERP database ledgers. Defined automated CGST/SGST/IGST tax splits, configured Shopify webhook sync scripts, and conducted Postman API load-testing under simulated traffic surges.</p>
      
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Coordinated field mapping, API load testing, and accounting sign-off milestones to guarantee holiday sales readiness."
      </div>
    `,
    brd: [
      { id: "REQ-03", desc: "Real-time inventory synchronization cron triggered upon order execution.", rule: "Sync inventory levels every 10 mins.", uat: "Confirmed inventory quantity decremented instantly in Postman webhook logs." },
      { id: "REQ-04", desc: "Automate dynamic tax split mapping (CGST/SGST/IGST) based on customer state address fields.", rule: "If Shipping State != Warehouse State -> Apply IGST.", uat: "Simulated out-of-state checkout; verified IGST ledger entry balances." }
    ],
    flow: [
      { step: "1", title: "API Mapping & Schema Discovery", desc: "Documented source-to-target schema mapping between Shopify and ERPNext database structures." },
      { step: "2", title: "Middleware Architecture Sprints", desc: "Guided backend IT developers in implementing queue retries for database server spikes." },
      { step: "3", title: "Postman Payload Testing", desc: "Led strict integration tests simulating rounding anomalies, tax rounding gaps, and refunds." },
      { step: "4", title: "On-Time Black Friday Go-Live", desc: "Executed the release freeze checklist, going live with zero reconciliation data leaks." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable Excerpt: Shopify JSON to ERP Field Mapping Schema</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Field-level registry defining integration parameters, types, and transformation rules.</p>
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
              <td>Primary unique key constraint in ERP to prevent double ingestion.</td>
            </tr>
            <tr>
              <td><code>total_price</code></td>
              <td><code>grand_total</code></td>
              <td>Decimal</td>
              <td>Verify currency rate splits and apply local tax calculation rules.</td>
            </tr>
            <tr>
              <td><code>shipping_address.province</code></td>
              <td><code>shipping_state</code></td>
              <td>String</td>
              <td>Translate standard postal codes (e.g. "KA") to ERP state database records ("Karnataka").</td>
            </tr>
            <tr>
              <td><code>line_items[].price</code></td>
              <td><code>rate</code></td>
              <td>Decimal</td>
              <td>Enforce check: <code>Rate = Price - (Discount / Qty)</code> to prevent ledger imbalances.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "API Integration UAT Pass", before: "65%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Daily Reconciliation Workload", before: "4 Hours", after: "10 Mins", pct: 95, accent: "var(--accent-dark)" },
      { label: "Overselling Gaps", before: "3.5%", after: "0.0%", pct: 100, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> E-commerce clerk spent 4 hours daily matching Shopify CSV orders with local billing ledgers. <br/><strong>After:</strong> Fully automated webhook integrations cut manual daily reconciliation workload to 10 minutes. <br/><strong>Measurement Timeframe:</strong> Measured across 14,000+ orders processed during the Black Friday campaign."
  },
  "shiprocket-logistics": {
    title: "Shiprocket / Logistics Integration",
    subtitle: "Automating waybills, courier assignments, and reverse logistics tracking",
    overview: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Problem Statement</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Packing clerks spent 5 minutes per order manually copying shipping information to select carriers and print barcodes, causing severe logistics backlogs during peak shipping schedules.</p>
      
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Stakeholders Involved</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Logistics Director, Warehouse Dispatch Team, Customer Operations Lead.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Legacy Process (Before)</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">After packing an item, clerks had to open the Shiprocket console, input variables manually, download shipping labels, print them, and email the tracking number to customer support.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">My Exact Contribution &amp; Role</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Designed the shipping automated routing workflow (selecting cheapest shipping partners based on zone/weight). Defined ERP webhook listeners for AWB waybill fetches, supervised developers in barcode scanner hardware tests, and authored the warehouse SOP.</p>
      
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Spearheaded logistics automation by mapping external API milestones directly into our core ERP dashboard, speeding up processing cycles."
      </div>
    `,
    brd: [
      { id: "REQ-05", desc: "Trigger automated PDF shipping labels and AWB waybills upon warehouse order validation.", rule: "Send weight and dimensions to Shiprocket API immediately upon packing state change.", uat: "Verified PDF print payload returns within 2 seconds of status click." },
      { id: "REQ-06", desc: "Dynamic reverse logistics WhatsApp status updates on package rejections/delays.", rule: "Dispatch RTO (Return to Origin) trigger to customers within 15 mins.", uat: "Simulated non-delivery exception; verified WhatsApp outbound message logged." }
    ],
    flow: [
      { step: "1", title: "Fulfillment Flow Shadowing", desc: "Analyzed manual handoffs between packing racks, dispatch desks, and 3PL cargo trucks." },
      { step: "2", title: "Webhook Specifications", desc: "Drafted precise status maps integrating 9 external courier milestones directly into ERPNext." },
      { step: "3", title: "Hardware Scanner Trial", desc: "Supervised developers in integrating barcode scanner hardware with sandbox API endpoints." },
      { step: "4", title: "SOP Rollout & Deployment", desc: "Shipped the production version on-time and conducted floor staff training sessions." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable Excerpt: UAT Scenario Executions Log</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Verification trace demonstrating test cases, expected system outputs, and actual outcomes.</p>
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
              <td>Simulate shipment request &lt; 1kg to Metro Zone address.</td>
              <td>Auto-allocate cheapest Air carrier; print AWB label.</td>
              <td>Delhivery Air selected. Label printed in 1.8s.</td>
              <td style="color: green; font-weight: 800;">PASS</td>
            </tr>
            <tr>
              <td><strong>TC-SHIP-02</strong></td>
              <td>Simulate shipment request with invalid Zip code digits.</td>
              <td>Throw HTTP 422 error and flag ERP record as "Hold".</td>
              <td>API returned validation error. Document flagged.</td>
              <td style="color: green; font-weight: 800;">PASS</td>
            </tr>
            <tr>
              <td><strong>TC-SHIP-03</strong></td>
              <td>Simulate webhook callback for non-delivery / RTO.</td>
              <td>Change state to "RTO Initiated"; queue customer WhatsApp.</td>
              <td>State changed. WhatsApp dispatch logged in CRM.</td>
              <td style="color: green; font-weight: 800;">PASS</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "Sprint Velocity Target", before: "70%", after: "98%", pct: 98, accent: "var(--accent)" },
      { label: "AWB Waybill Fetch Speed", before: "5 Mins", after: "2 Secs", pct: 100, accent: "var(--accent-dark)" },
      { label: "RTO Processing Cycle", before: "48 Hours", after: "12 Hours", pct: 75, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Clerks spent 5 minutes copy-pasting fields per dispatch order. <br/><strong>After:</strong> Direct integration fetches AWB labels in 2 seconds upon ERP document state updates. <br/><strong>Measurement Timeframe:</strong> Audited 5,800 package deliveries across 60 days of operations post-deployment."
  },
  "gst-einvoicing": {
    title: "GST E-invoicing / Finance Workflow",
    subtitle: "Compliant automated invoicing registry and invoice generation integrations",
    overview: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Problem Statement</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Manual calculations of corporate tax invoices created rounding discrepancies, compliance audit delays (12 minutes/invoice), and regulatory penalty risks during tax filing periods.</p>
      
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Stakeholders Involved</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Chief Financial Officer (CFO), Accounting Auditors, billing and collection staff.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Legacy Process (Before)</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">The accounting department manually computed tax line items on Excel sheets, uploaded files to government utility portals, and copied generated IRN hashes back to records manually.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">My Exact Contribution &amp; Role</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Documented strict regulatory compliance constraints (e.g. HSN codes, mandatory fields). Mapped billing fields to E-invoice registry API schemas, authored SQL audit validation scripts, and monitored API error logs during UAT trial phases.</p>
      
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Supervised integration testing and compliance constraints to secure signed government IRN hashes and QR PDFs with zero regulatory penalties."
      </div>
    `,
    brd: [
      { id: "REQ-07", desc: "HSN classification and tax configuration validation prior to invoice execution.", rule: "Block invoice generation if HSN field length != 8 digits.", uat: "Simulated draft post with blank HSN; system correctly threw validation popup." },
      { id: "REQ-08", desc: "Securely retrieve signed government IRN hashes and QR graphics, embedding them onto physical invoice PDFs.", rule: "Fetch base64 image payload from API and store in tax attachments ledger.", uat: "Scanned test PDF QR code via phone; verified seamless redirect to government portal." }
    ],
    flow: [
      { step: "1", title: "Compliance Requirements", desc: "Coordinated with corporate tax advisors to document exact government validation schemas." },
      { step: "2", title: "API Payload Specifications", desc: "Mapped invoice billing fields to comply with federal data registry payload arrays." },
      { step: "3", title: "Sandbox Capacity Testing", desc: "Directed IT developers in running large bulk invoice uploads to test sandbox throughput under load." },
      { step: "4", title: "Quarter-Start Rollout", desc: "Launched e-invoicing live for all accounting transactions, replacing paper logging." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable Excerpt: Tax API Schema Validation Controls</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">Pre-submission schema validation checks written to prevent government API rejects.</p>
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
              <td><strong>GSTIN Check</strong></td>
              <td><code>billing_gstin</code></td>
              <td>Must match 15-character regulatory regex.</td>
              <td>Block submit; display error toast.</td>
            </tr>
            <tr>
              <td><strong>HSN Digit Check</strong></td>
              <td><code>items.hsn_code</code></td>
              <td>Length must equal exactly 8 digits.</td>
              <td>Lock item. Flag invoice as "QA Fail".</td>
            </tr>
            <tr>
              <td><strong>Tax Ledger Check</strong></td>
              <td><code>cgst_rate</code>, <code>sgst_rate</code></td>
              <td>CGST amount must equal SGST amount.</td>
              <td>Halt API request; alert Finance manager.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    metrics: [
      { label: "On-Time Compliance Release", before: "0%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Invoice Post Speed", before: "12 Mins", after: "4 Secs", pct: 99, accent: "var(--accent-dark)" },
      { label: "Compliance Penalty Risk", before: "₹25,000", after: "₹0", pct: 100, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Manual paper uploads and clipboard reconciliation created a 12-minute processing delay per invoice. <br/><strong>After:</strong> Fully integrated API posting registers IRN numbers in 4 seconds. <br/><strong>Measurement Timeframe:</strong> Checked across 3,500+ tax documents validated over the Q1 fiscal quarter."
  },
  "inventory-quality": {
    title: "Quality / Inventory Optimization",
    subtitle: "Establishing batch-level quality checkpoints and warehouse storage optimization",
    overview: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Problem Statement</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Incoming raw materials lacked systematic quality checkpoints, leading to high production scrap rates (4.8%) and a 2-hour delay in flagging defective items.</p>
      
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Stakeholders Involved</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Quality Control (QC) Director, Warehouse Operators, Production Supervisors.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Legacy Process (Before)</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Incoming inspectors logged defects on paper forms, storing them in cabinets. If an item failed, there was no digital lock preventing it from being picked and sent to assembly lines.</p>

      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">My Exact Contribution &amp; Role</h4>
      <p style="font-size: 0.88rem; line-height: 1.6; margin-bottom: 1rem;">Mapped shop-floor material paths, mapped batch-lot relationships, configured math formulas for lot sample size calculations, set quarantine flags in ERP Next, and ran staff training sessions.</p>
      
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Created digital quarantine gates inside the inventory module, blocking substandard components from production."
      </div>
    `,
    brd: [
      { id: "REQ-09", desc: "Mandate checklist validations for incoming vendor raw goods prior to bin storage allocation.", rule: "Generate lot checklist size based on standard square-root sample protocol.", uat: "Verified inspection tickets generated dynamic checkboxes matching batch quantity." },
      { id: "REQ-10", desc: "Lock out quarantine goods from active e-commerce and retail dispatch stock allocations.", rule: "Set inventory availability flag to 'false' if QA check fails.", uat: "Simulated customer sales pick; verified quarantined batch was hidden from options." }
    ],
    flow: [
      { step: "1", title: "Material Flow Shadowing", desc: "Shadowed receiving gates and cargo bays to map gaps in raw material checkpoints." },
      { step: "2", title: "Dynamic Checklist Specs", desc: "Mapped mathematical lot sampling rules to create interactive checklists in ERPNext." },
      { step: "3", title: "UAT Quarantine Verification", desc: "Ran system orders to ensure quarantine blocks restrict goods from e-commerce picking paths." },
      { step: "4", title: "Seasonal Launch Handoff", desc: "Deployed digital checks and trained lot operators prior to high-volume seasonal intakes." }
    ],
    artifact: `
      <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Sanitized Deliverable Excerpt: Material QA &amp; Quarantine Flowchart</h4>
      <p style="font-size: 0.88rem; color: var(--muted); margin-bottom: 1rem;">System tracking checkpoints from vendor receiving dock to final active inventory bins.</p>
      <div style="background: var(--bg); border: 1px solid var(--line); padding: 1.2rem; border-radius: var(--radius); font-family: monospace; font-size: 0.78rem; line-height: 1.6; color: var(--text); overflow-x: auto;">
        [Incoming Vendor Stock] <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Receiving Bay: Check PO & Qty] --(Mismatch)--&gt; [Reject Delivery]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v (PO Verified)<br/>
        [Create Temp GRN & Assign Lot ID]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Move to Quarantine Warehouse Zone] --&gt; [Trigger Inspection Checklist]<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;|<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;+-----------------------+-----------------------+<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;| (QA Passed) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| (QA Failed)<br/>
        &nbsp;&nbsp;&nbsp;&nbsp;v &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v<br/>
        [Set Stock Flag: Available] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Set Stock Flag: Quarantined]<br/>
        [Release to Active Storage Bins] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Lock from Picking/Dispatch]<br/>
        [Update ERP Stock Balance Ledger] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Assign Return to Vendor Form]<br/>
      </div>
    `,
    metrics: [
      { label: "On-Time Phase Completion", before: "80%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Lot-Batch Traceability Lag", before: "2 Hours", after: "Instant", pct: 100, accent: "var(--accent-dark)" },
      { label: "Production Wastage Rates", before: "4.8%", after: "1.1%", pct: 77, accent: "var(--warm)" }
    ],
    metricsProof: "<strong>Baseline:</strong> Defective incoming components took 2 hours to trace and isolate manually, creating 4.8% scrap rates. <br/><strong>After:</strong> Digital quarantine rules blocked picking paths instantly, dropping scrap to 1.1%. <br/><strong>Measurement Timeframe:</strong> Checked across 450 raw material batches and 12,000 components."
  }
};

// Menu Toggle
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
  if (window.innerWidth <= 980) {
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
  let brdHtml = `
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
      </table>
    </div>
  `;
  // Let's populate table body manually so it stays correct
  let brdRowsHtml = "";
  data.brd.forEach(req => {
    brdRowsHtml += `
      <tr>
        <td style="font-weight: 800; color: var(--accent-dark);">${req.id}</td>
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
      <div style="margin-top: 2rem; border-top: 1px solid var(--line); padding-top: 1.5rem;">
        <h4 style="margin-bottom: 0.5rem; font-size: 0.94rem;">Measurement Context &amp; Proof</h4>
        <p style="font-size: 0.86rem; color: var(--muted); line-height: 1.6;">${data.metricsProof}</p>
      </div>
    `;
  }
  paneMetrics.innerHTML = metricsHtml;

  // Initialize view tabs
  switchTab("overview");

  drawer.classList.add("open");
  drawerOverlay.classList.add("open");
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

document.querySelectorAll(".view-specs-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".case-card");
    const caseKey = card.dataset.caseKey;
    openDrawer(caseKey);
  });
});

// Programmatic Back to Top Smooth Scroll Fix
const backToTopLink = document.querySelector('a[href="#top"]');
if (backToTopLink) {
  backToTopLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Intersection Observer for animations
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
