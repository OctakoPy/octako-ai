export interface StatCard {
  number: string;
  title: string;
  context: string;
  source: string;
  sourceUrl?: string;
  accentColor: "pink" | "purple" | "cyan" | "orange" | "green";
}

export const statistics: StatCard[] = [
  {
    number: "70%",
    title: "of Fortune 500 companies deployed enterprise AI tools like Copilot",
    context:
      "Despite massive enterprise adoption, most companies report these tools sitting largely unused. The gap between purchase and actual utilization is staggering.",
    source: "Bain & Company analysis, reported in Harvard Business Review, January 2025",
    accentColor: "pink",
  },
  {
    number: "80%",
    title: "report no material impact on earnings or productivity",
    context:
      "Even among Fortune 500 companies that deployed enterprise AI, the vast majority cannot point to any measurable improvement in their bottom line or operational efficiency.",
    source: "Bain & Company analysis, reported in Harvard Business Review, January 2025",
    accentColor: "purple",
  },
  {
    number: "$1.4M",
    title: "spent on 4,000 Copilot licenses—only 47 people actually used it",
    context:
      "This real example shows what happens when companies buy tools without fixing workflows first. The executives even exempted themselves for 'strategic focus requiring minimal digital distraction.'",
    source: "McKinsey research, reported in Financial Times, January 2025",
    accentColor: "orange",
  },
  {
    number: "95%",
    title: "of enterprise AI pilots fail to deliver measurable value",
    context:
      "MIT researchers found that while nearly every large company runs AI pilots, only 5% achieve rapid revenue acceleration. The problem isn't the technology—it's that companies automate the wrong things without redesigning workflows.",
    source: "MIT Sloan research, reported in MIT Sloan Management Review, 2025",
    accentColor: "cyan",
  },
  {
    number: "42%",
    title: "of companies abandoned their AI initiatives in 2025",
    context:
      "After initial enthusiasm, nearly half of companies gave up on their AI projects due to poor implementation, lack of clear ROI, and failure to integrate with existing processes.",
    source: "McKinsey State of AI Report 2024-2025",
    accentColor: "green",
  },
];
