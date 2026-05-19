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
      <p>Ashish owned the end-to-end delivery of the ERPNext transition, managing a <strong>6-member IT development team</strong> and coordinating with department heads to hit strict warehouse launch deadlines.</p>
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "By aligning IT developer sprints with operations schedules, we eliminated high-volume Excel tracking gaps and went live with zero critical launch defects."
      </div>
      <ul style="padding-left: 1.25rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
        <li><strong>PM & Team Leadership:</strong> Directed daily agile standups, resolved technical blocks, managed code reviews, and structured release versions.</li>
        <li><strong>Team Coordination:</strong> Aligned 6 developers with operations, warehousing, and finance managers.</li>
        <li><strong>Timeline Success:</strong> Delivered the complete project end-to-end in 14 weeks, matching seasonal warehouse rollout deadlines.</li>
      </ul>
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
    metrics: [
      { label: "Sprint Deadline Compliance", before: "75%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Order Processing Time", before: "48 Hours", after: "4 Hours", pct: 92, accent: "var(--accent-dark)" },
      { label: "Manual Excel Dependency", before: "100%", after: "0%", pct: 100, accent: "var(--warm)" }
    ]
  },
  "shopify-integration": {
    title: "Shopify to ERP Integration",
    subtitle: "Real-time automated syncing of sales, inventory, and refunds",
    overview: `
      <p>Managed the end-to-end integration lifecycle, aligning our <strong>6-member IT development team</strong> tasks with external e-commerce coordinators to build a secure sales and inventory sync.</p>
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Coordinated field mapping, API load testing, and accounting sign-off milestones to guarantee black-friday festive readiness."
      </div>
      <ul style="padding-left: 1.25rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
        <li><strong>PM & Team Leadership:</strong> Formulated milestone release gates, tracked API payload validations, managed the technical product backlog.</li>
        <li><strong>Team Coordination:</strong> Bridged the e-commerce API team, shopify webhooks group, and internal audit staff.</li>
        <li><strong>Timeline Success:</strong> Successfully met a high-priority festive-season code freeze milestone on-time.</li>
      </ul>
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
    metrics: [
      { label: "API Integration UAT Pass", before: "65%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Daily Reconciliation Workload", before: "4 Hours", after: "10 Mins", pct: 95, accent: "var(--accent-dark)" },
      { label: "Overselling Gaps", before: "3.5%", after: "0.0%", pct: 100, accent: "var(--warm)" }
    ]
  },
  "shiprocket-logistics": {
    title: "Shiprocket / Logistics Integration",
    subtitle: "Automating waybills, courier assignments, and reverse logistics tracking",
    overview: `
      <p>Ashish oversaw the logistics workflow automation end-to-end, guiding the <strong>IT development team</strong> and third-party API groups to speed up shipment lifecycles from packaging to dispatcher handoff.</p>
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Accelerated package fulfillment cycles by designing automated courier allocation priorities and barcode printer integrations."
      </div>
      <ul style="padding-left: 1.25rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
        <li><strong>PM & Team Leadership:</strong> Conducted sprint planning, resolved database communication blocks, tracked fulfillment release milestones.</li>
        <li><strong>Team Coordination:</strong> Aligned courier services API vendors, warehouse logistics supervisors, and developers.</li>
        <li><strong>Timeline Success:</strong> Deployed the integration within the 8-week target, ensuring zero dispatch lag during peak schedules.</li>
      </ul>
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
    metrics: [
      { label: "Sprint Velocity Target", before: "70%", after: "98%", pct: 98, accent: "var(--accent)" },
      { label: "AWB Waybill Fetch Speed", before: "5 Mins", after: "2 Secs", pct: 100, accent: "var(--accent-dark)" },
      { label: "RTO Processing Cycle", before: "48 Hours", after: "12 Hours", pct: 75, accent: "var(--warm)" }
    ]
  },
  "gst-einvoicing": {
    title: "GST E-invoicing / Finance Workflow",
    subtitle: "Compliant automated invoicing registry and invoice generation integrations",
    overview: `
      <p>Ashish coordinated the compliance integration end-to-end, working with financial auditors and the <strong>IT API team</strong> to implement secure, compliant GST e-invoicing pipelines under strict federal deadlines.</p>
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Managed strict regulatory launch freezes, securing signed government IRN hashes and QR graphics with zero compliance penalties."
      </div>
      <ul style="padding-left: 1.25rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
        <li><strong>PM & Team Leadership:</strong> Enforced audit gate-checks, handled release testing protocols, triaged tax rounding anomalies.</li>
        <li><strong>Team Coordination:</strong> Coordinated finance directors, tax advisors, treasury teams, and API development teams.</li>
        <li><strong>Timeline Success:</strong> Delivered the system compliance upgrade exactly on the first day of the fiscal quarter.</li>
      </ul>
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
    metrics: [
      { label: "On-Time Compliance Release", before: "0%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Invoice Post Speed", before: "12 Mins", after: "4 Secs", pct: 99, accent: "var(--accent-dark)" },
      { label: "Compliance Penalty Risk", before: "₹25,000", after: "₹0", pct: 100, accent: "var(--warm)" }
    ]
  },
  "inventory-quality": {
    title: "Quality / Inventory Optimization",
    subtitle: "Establishing batch-level quality checkpoints and warehouse storage optimization",
    overview: `
      <p>Led process optimization and system implementation end-to-end, guiding operations and IT teams to establish batch-level lot checks, quarantine blocks, and bin maps ahead of peak seasonal inventory spikes.</p>
      <div style="margin-top: 1rem; border-left: 3px solid var(--accent); padding-left: 0.85rem; font-style: italic; color: var(--muted); font-size: 0.88rem;">
        "Shadowed lot inspectors and led developers to configure dynamic lot sample size calculations and quarantine lock rules."
      </div>
      <ul style="padding-left: 1.25rem; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.88rem;">
        <li><strong>PM & Team Leadership:</strong> Defined project scope charters, tracked release phases, resolved operational blocks.</li>
        <li><strong>Team Coordination:</strong> Coordinated lot inspectors, warehousing supervisors, and backend data teams.</li>
        <li><strong>Timeline Success:</strong> Completed end-to-end execution ahead of peak seasonal inventory arrivals.</li>
      </ul>
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
    metrics: [
      { label: "On-Time Phase Completion", before: "80%", after: "100%", pct: 100, accent: "var(--accent)" },
      { label: "Lot-Batch Traceability Lag", before: "2 Hours", after: "Instant", pct: 100, accent: "var(--accent-dark)" },
      { label: "Production Wastage Rates", before: "4.8%", after: "1.1%", pct: 77, accent: "var(--warm)" }
    ]
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
  `;
  data.brd.forEach(req => {
    brdHtml += `
      <tr>
        <td style="font-weight: 800; color: var(--accent-dark);">${req.id}</td>
        <td>${req.desc}</td>
        <td style="font-family: monospace; font-size: 0.76rem; background: var(--surface-soft); padding: 0.4rem; border-radius: 4px; display: inline-block; margin-top: 0.4rem;">${req.rule}</td>
        <td style="color: var(--muted);">${req.uat}</td>
      </tr>
    `;
  });
  brdHtml += `
        </tbody>
      </table>
    </div>
  `;
  paneRequirements.innerHTML = brdHtml;

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
