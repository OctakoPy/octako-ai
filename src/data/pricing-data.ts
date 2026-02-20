export interface PricingCategory {
  title: string;
  items: string[];
}

export const fixedDeliverables: PricingCategory[] = [
  {
    title: "Data Cleanup & Transformation",
    items: [
      "Reformatting messy datasets into standardized formats",
      "Consolidating multiple spreadsheets into one master file",
      "Converting between file formats (Excel → CSV, PDF → structured data, etc.)",
      "Deduplicating records and fixing inconsistent data",
      "Cleaning imported data (removing special characters, standardizing dates/currencies)",
    ],
  },
  {
    title: "Audit & Compliance Tasks",
    items: [
      "Generating audit-ready reports from raw data",
      "Cross-referencing transactions against multiple sources",
      "Flagging discrepancies in expense reports or invoices",
      "Creating compliance documentation from scattered records",
      "Reconciling accounts across different systems",
    ],
  },
  {
    title: "Spreadsheet Fixes & Optimization",
    items: [
      "Fixing broken formulas and circular references",
      "Optimizing slow spreadsheets (50,000+ rows)",
      "Building automated templates with proper validation",
      "Converting manual spreadsheets into self-updating dashboards",
      "Creating reusable calculators and tools",
    ],
  },
  {
    title: "Document Processing",
    items: [
      "Extracting data from PDFs, scanned documents, or images (OCR)",
      "Batch converting/renaming files according to naming conventions",
      "Parsing invoices, receipts, or contracts into structured data",
      "Generating standardized documents from templates",
      "Organizing and categorizing large document libraries",
    ],
  },
  {
    title: "Report Generation",
    items: [
      "Building one-time custom reports from multiple data sources",
      "Creating presentation-ready charts and visualizations",
      "Formatting raw data exports into readable formats",
      "Generating executive summaries from detailed datasets",
      "Building comparison reports (period-over-period, budget vs. actual)",
    ],
  },
  {
    title: "Data Migration & Integration",
    items: [
      "Moving data from one system to another (one-time)",
      "Combining data from multiple platforms into unified format",
      "Preparing data for import into new software",
      "Creating CSV/Excel templates for bulk uploads",
      "Historical data cleanup before system migration",
    ],
  },
  {
    title: "One-Time Automations",
    items: [
      "Building a script to process a backlog of files",
      "Creating a macro for a specific recurring task",
      "Setting up automated email workflows",
      "Configuring integrations between two systems",
      "Building data validation rules and quality checks",
    ],
  },
];

export const customSystems: PricingCategory[] = [
  {
    title: "Workflow Automation Systems",
    items: [
      "Multi-step processes that connect different tools",
      "Automated approval workflows",
      "Trigger-based actions (when X happens, do Y automatically)",
      "Complex data pipelines running continuously",
      "Systems that integrate with your existing software",
    ],
  },
  {
    title: "AI Integration Projects",
    items: [
      "Custom chatbots trained on your data",
      "Intelligent document analysis systems",
      "Automated decision-making tools",
      "Predictive analytics dashboards",
      "Smart routing and categorization systems",
    ],
  },
  {
    title: "Process Redesign & Implementation",
    items: [
      "Analyzing and mapping current workflows",
      "Designing optimized processes",
      "Building the automation infrastructure",
      "Training your team",
      "Iterating based on real-world usage",
    ],
  },
  {
    title: "Custom Dashboards & Reporting",
    items: [
      "Real-time dashboards pulling from multiple sources",
      "Automated reporting systems (daily/weekly/monthly)",
      "Executive KPI tracking with alerts",
      "Custom analytics platforms",
      "Self-service data tools for your team",
    ],
  },
  {
    title: "Enterprise Integrations",
    items: [
      "Connecting your CRM, accounting, project management, etc.",
      "Building data sync between systems",
      "Creating unified data warehouses",
      "Implementing business intelligence solutions",
      "API integrations and custom connectors",
    ],
  },
];
