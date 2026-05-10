const metrics = [
  { value: "54%", label: "Faster inspection", detail: "Inspection time reduced from 24 to 11 minutes per laptop." },
  { value: "13 min", label: "Saved per laptop", detail: "Manual inspection effort reduced through ERP + NJQCA automation." },
  { value: "100+", label: "Daily orders automated", detail: "Webhook-based Shopify to ERP order sync." },
  { value: "40%", label: "Faster refunds", detail: "Refund workflow improvements reduced processing time." },
  { value: "30%", label: "Better order accuracy", detail: "Improved O2C sync reliability and exception handling." },
  { value: "8-12%", label: "Procurement optimization", detail: "Demand and vendor-price logic supported cost optimization." },
  { value: "25 -> 3", label: "Shipment clicks", detail: "Reduced shipment booking effort from 25 clicks to 3." },
  { value: "6", label: "IT team coordination", detail: "Coordinated a 6-member IT development team for ERP delivery." }
];

const projects = [
  {
    title: "Shopify-ERP Sales Order Integration",
    category: "integration",
    status: "Featured",
    summary: "Automated sales order creation and improved O2C reliability for 100+ daily Shopify orders.",
    bullets: [
      "Mapped Shopify order, customer, SKU, tax, and item-level fields to ERP structures.",
      "Supported webhook-based instant order sync, SQL validation, Postman testing, failure logs, and email alerts.",
      "Reduced manual entry, duplicate/missed orders, and improved order sync accuracy by 30%."
    ],
    tags: ["Shopify", "ERPNext", "Webhooks", "Postman", "SQL", "O2C"]
  },
  {
    title: "Quality Inspection Automation Program",
    category: "automation",
    status: "Flagship",
    summary: "Standardized inspection, automated grading, and improved Material Request traceability.",
    bullets: [
      "Defined A/B/C/D grading logic, inspection scoring, validations, and auto-MR triggers.",
      "Mapped NJQCA hardware capture into ERP and ran Excel vs ERP parallel testing.",
      "Reduced inspection time from 24 to 11 minutes and missed MRs from 26% to 8-10%."
    ],
    tags: ["ERPNext", "NJQCA", "SQL", "UAT", "Material Request", "Automation"]
  },
  {
    title: "GST E-Invoicing & Bank Payment Workflow",
    category: "finance",
    status: "FinTech-facing",
    summary: "Designed one-click GST e-invoice generation and structured payment workflow visibility.",
    bullets: [
      "Defined ERP-to-GST API mapping, tax validation, GSTIN checks, IRN update flow, and error scenarios.",
      "Supported Postman testing, SQL validation, payable dashboards, vendor-wise insights, and finance UAT.",
      "Improved compliance accuracy, approval visibility, and payment workflow control."
    ],
    tags: ["GST", "IRN", "Bank APIs", "Compliance", "Postman", "SQL"]
  },
  {
    title: "Auto Procurement & Cost Optimization Engine",
    category: "operations",
    status: "Analytics",
    summary: "Enabled demand-based purchasing using consumption trends, pending repairs, and vendor pricing.",
    bullets: [
      "Gathered finance and procurement requirements for purchase history and vendor price visibility.",
      "Defined demand-based logic and SQL validation reports for purchasing recommendations.",
      "Supported 8-12% procurement cost optimization and improved working capital utilization."
    ],
    tags: ["Procurement", "Inventory", "Vendor Pricing", "SQL", "Demand Planning"]
  },
  {
    title: "Component Tracking & Inventory Control System",
    category: "operations",
    status: "Project Library",
    summary: "Created ERP-based tracking for issue, use, return, and replacement of refurbishment components.",
    bullets: [
      "Mapped warehouse and production movement workflows with quantity controls and audit trails.",
      "Defined mismatch alerts, validation rules, and exception handling to improve accountability.",
      "Improved inventory accuracy and reduced missing component/repacking cases."
    ],
    tags: ["Inventory", "Audit Trail", "Validation", "Warehouse", "ERPNext"]
  },
  {
    title: "Sub-BOM Dependency & Component Relationship System",
    category: "operations",
    status: "Business Rules",
    summary: "Structured component compatibility logic for accurate repair decisions and reduced rework.",
    bullets: [
      "Mapped component relationships with repair, inspection, inventory, and IT stakeholders.",
      "Broke dependency logic into manageable rules and prioritized high-impact combinations.",
      "Improved BOM clarity and reduced incorrect component combinations."
    ],
    tags: ["BOM", "Sub-BOM", "Business Rules", "UAT", "ERP"]
  },
  {
    title: "LMS Integration within ERP",
    category: "automation",
    status: "Planned / In Progress",
    summary: "Designed ERP-integrated learning workflows for onboarding, assessments, progress tracking, and certification.",
    bullets: [
      "Defined course creation, role-based training, assessments, and employee record integration.",
      "Planned phased rollout with high-impact modules first.",
      "Expected to reduce onboarding dependency and improve process adherence visibility."
    ],
    tags: ["LMS", "Training", "Onboarding", "ERP Roadmap"]
  },
  {
    title: "SQLite Biometric Data Integration",
    category: "integration",
    status: "Data Sync",
    summary: "Designed a sync approach to make local biometric attendance data available centrally.",
    bullets: [
      "Designed extraction from local SQLite attendance data.",
      "Mapped data to central attendance records for reporting and tracking.",
      "Improved attendance data availability for centralized reporting."
    ],
    tags: ["SQLite", "Attendance", "Data Extraction", "Reporting"]
  }
];

const skillGroups = [
  { title: "Business Analysis", items: ["Requirement gathering", "Gap analysis", "RCA", "BRD / FRD", "Process flows", "User stories", "Acceptance criteria", "RTM", "SOPs", "UAT planning"] },
  { title: "Systems & Integrations", items: ["ERPNext / Frappe", "Shopify", "Shiprocket", "GST e-invoicing", "Bank APIs", "Webhooks", "API mapping", "Error handling"] },
  { title: "Data & Validation", items: ["SQL queries", "ERP reports", "Reconciliation", "Validation checks", "Data mapping", "Exception analysis", "Operational dashboards"] },
  { title: "Project Delivery", items: ["Sprint planning", "Stakeholder management", "Development coordination", "Go-live support", "User training", "Change management"] },
  { title: "Domains", items: ["Order-to-cash", "Payments", "Refunds", "Finance operations", "Procurement", "Inventory", "Warehouse", "Quality inspection", "Refurbishment"] },
  { title: "Portfolio Keywords", items: ["SaaS workflows", "FinTech operations", "Payments", "Reconciliation", "Compliance", "Workflow automation", "Integration testing", "Product requirements"] }
];

const metricsGrid = document.querySelector("#metricsGrid");
const projectGrid = document.querySelector("#projectGrid");
const skillGrid = document.querySelector("#skillGrid");

function renderMetrics() {
  metricsGrid.innerHTML = metrics.map(metric => `
    <article class="metric-card reveal">
      <div class="metric-value">${metric.value}</div>
      <div class="metric-label">${metric.label}</div>
      <p>${metric.detail}</p>
    </article>
  `).join("");
}

function renderProjects(filter = "all") {
  const visibleProjects = filter === "all" ? projects : projects.filter(project => project.category === filter);
  projectGrid.innerHTML = visibleProjects.map(project => `
    <article class="project-card reveal" data-category="${project.category}">
      <div class="project-meta"><span>${project.status}</span><span>${project.category}</span></div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <ul>${project.bullets.map(item => `<li>${item}</li>`).join("")}</ul>
      <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
  observeRevealItems();
}

function renderSkills() {
  skillGrid.innerHTML = skillGroups.map(group => `
    <article class="skill-card reveal">
      <h3>${group.title}</h3>
      <ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

function observeRevealItems() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

renderMetrics();
renderProjects();
renderSkills();
observeRevealItems();

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});
