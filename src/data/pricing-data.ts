export interface PricingCategory {
  title: string;
  items: string[];
}

export const fixedDeliverables: PricingCategory[] = [
  {
    title: "One-Time Automation Setup",
    items: [
      "Process Automation Sprint: Building a permanent 'Hands-Off' workflow for a specific manual task",
      "App-to-App Integration: A one-time 'bridge' setup to sync data between two disconnected tools",
      "Automated Lead Capture: Setting up a system that instantly routes website leads to your CRM or Inbox",
      "Bulk Content Distribution: Creating a one-off system to schedule or post a large backlog of updates",
      "Automated Report Delivery: Building a 'Set-it-and-Forget-it' weekly summary of your business numbers",
    ],
  },
  {
    title: "Data Auditing & Recovery",
    items: [
      "Legacy Data Cleanup: Rectifying years of inconsistent customer or sales records",
      "One-time Database De-duplication: Identifying and merging duplicate entries across files",
      "System Migration Prep: Formatting and standardizing data for new software imports",
      "Cross-Platform Consolidation: Merging multiple data sources into a single master file",
      "Historical Record Standardization: Fixing errors in phone numbers, addresses, and naming",
    ],
  },
  {
    title: "High-Volume Document Processing",
    items: [
      "Batch Document Digitization: Converting a backlog of PDFs or scans into organized data",
      "Mass Document Generation: Creating hundreds of personalized contracts or reports at once",
      "Automated Data Extraction: Pulling specific line items from a library of legacy files",
      "Bulk File Organization: Renaming and filing thousands of items into a structured system",
      "Historical Invoice Audit: Extracting data from a year's worth of receipts into a master log",
    ],
  },
  {
    title: "AI Asset Implementation",
    items: [
      "Custom Command Dashboard: Building an automated master spreadsheet for permanent use",
      "Corporate Prompt Library: Developing a set of high-performance AI prompts for staff",
      "One-time Competitive Data Scrape: Extracting specific market or pricing data from the web",
      "Custom Utility Development: Creating a one-off script to solve a niche business problem",
      "AI Knowledge Base Creation: Turning training folders into a single, indexed 'Searchable Expert' doc",
    ],
  },
  {
    title: "Business Intelligence Reporting",
    items: [
      "One-time Market Analysis Report: An AI-driven deep dive into competitor offerings",
      "Financial Anomaly Report: A one-time audit of logs to identify errors or double-billings",
      "Customer Sentiment Analysis: Turning a backlog of reviews into a structured insights report",
      "Meeting Archive Synthesis: Turning a backlog of Zoom recordings into a task-oriented database",
      "Historical Performance Audit: A one-time deep dive report into your past 12 months of data",
    ],
  },
];

export const customSystems: PricingCategory[] = [
  {
    title: "Automated Operations Engines",
    items: [
      "End-to-End Department Workflows: Connecting Sales, Marketing, and Ops into one flow",
      "Hands-free Approval Systems: Automated routing for contracts, expenses, or hiring",
      "Intelligent Lead Management: Automatically scoring, sorting, and assigning new leads",
      "Custom Data Pipelines: Continuously moving and syncing data between all company tools",
      "Operational 'Safety Nets': Systems that monitor your business and alert you to errors",
    ],
  },
  {
    title: "Proprietary AI Knowledge Systems",
    items: [
      "Internal Company 'Brain': AI assistants trained on your private manuals and data",
      "Automated Triage Systems: AI that reads incoming requests and routes them to the right person",
      "Smart Content Engines: Systems that draft personalized responses or reports based on your style",
      "AI-Enhanced Document Analysis: Large-scale systems for auditing or summarizing archives",
      "Custom Client Concierge: AI-powered support tools built for your specific customer needs",
    ],
  },
  {
    title: "Business Architecture & Design",
    items: [
      "Process Mapping & Blueprinting: Designing the 'Digital Map' of how your business runs",
      "Infrastructure Architecture: Building the underlying tech stack for a new department",
      "Workflow Optimization: Rebuilding inefficient manual processes into automated assets",
      "System Implementation & Handover: Full build-out and training for your internal team",
      "Scalability Sprints: Upgrading your current tools to handle 10x the current volume",
    ],
  },
  {
    title: "Real-Time Intelligence Hubs",
    items: [
      "Executive Decision Dashboards: Live views of your most important business KPIs",
      "Unified Performance Tracking: Pulling data from every tool into one central 'Health' view",
      "Automated Board Reporting: Systems that generate and send monthly reports automatically",
      "Revenue & Expense Monitoring: Real-time tracking of cash flow across multiple platforms",
      "Self-Service Data Portals: Giving your team the tools to find their own answers instantly",
    ],
  },
  {
    title: "Unified Enterprise Infrastructure",
    items: [
      "The 'Single Source of Truth': Connecting CRM, Finance, and HR into one unified system",
      "Master Data Synchronization: Ensuring your customer data is identical across every app",
      "Custom API Connectors: Building bridges for software that doesn't 'talk' natively",
      "Centralized Data Warehousing: Organizing all company data for long-term storage and use",
      "Automated Compliance & Audit Logs: Building a permanent digital paper trail for every action",
    ],
  },
];
