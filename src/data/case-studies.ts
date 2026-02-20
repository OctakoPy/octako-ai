export interface CaseStudy {
  badge?: string;
  title: string;
  client: string;
  task: string;
  solution: string;
  results: string[];
  metrics: string[];
  accentColor: "pink" | "purple" | "cyan" | "green" | "orange";
}

export const caseStudies: CaseStudy[] = [
  {
    title: "The Weekly Report Problem",
    client: "Marketing manager at mid-size company",
    task: "Every Monday, spend 2 hours copying data from 5 different platforms into a spreadsheet, then formatting it for the executive team.",
    solution: "Automated data pipeline that pulls from all platforms, generates formatted report, emails it automatically every Monday at 8am.",
    results: ["2 hours → 5 minutes"],
    metrics: ["📊 Time Saved: 104 hours/year"],
    accentColor: "cyan",
  },
  {
    badge: "Case Study",
    title: "The Invoice Processing Nightmare",
    client: "Finance team at growing SaaS company",
    task: "Manually enter data from 200+ monthly invoices, cross-reference with purchase orders, flag discrepancies, update accounting system.",
    solution: "AI document processor extracts all invoice data, automatically matches to POs, flags anomalies, updates systems.",
    results: ["40 hours/month → 4 hours"],
    metrics: [
      "📊 Time Saved: 432 hours/year",
      "💰 Cost Saved: Eliminated need to hire additional person as volume increased",
    ],
    accentColor: "purple",
  },
  {
    badge: "Case Study",
    title: "The Customer Support Backlog",
    client: "E-commerce company with 500+ daily inquiries",
    task: "Team of 4 manually sorting, categorizing, and responding to all customer inquiries.",
    solution: "AI routing system + automated responses for common questions + integrated knowledge base.",
    results: [
      "70% of inquiries resolved without human involvement",
      "Response time: 6 hours → 4 minutes for most queries",
      "Team now handles 3x volume with same headcount",
    ],
    metrics: ["📊 3x increase in capacity with same team size"],
    accentColor: "pink",
  },
  {
    badge: "Case Study",
    title: "The Spreadsheet That Ran The Business",
    client: "Operations manager at logistics company",
    task: "Master spreadsheet with 50,000 rows, 200 formulas, takes 5 minutes to open, crashes frequently, used by entire team.",
    solution: "Built proper database system with automated data entry, real-time dashboards, proper security.",
    results: [
      "Instant access to data (no loading time)",
      "10+ people can work simultaneously",
      "Automated updates (no more manual entry)",
      "Historical tracking (was lost in old spreadsheet)",
    ],
    metrics: [
      "📊 From 5-minute load times to instant access",
      "💾 10+ concurrent users vs 1 at a time",
    ],
    accentColor: "green",
  },
];
