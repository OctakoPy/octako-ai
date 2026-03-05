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
    number: ">80%",
    title: "of organizations report no tangible impact on enterprise-level EBIT from gen AI",
    context:
      "While adoption is scaling rapidly, the leap from experimentation to material bottom-line value remains a significant hurdle for the vast majority of companies.",
    source: "McKinsey Global Survey: The state of AI, March 2025",
    accentColor: "pink",
  },
{
    number: "61%",
    title: "of organizations see cost reductions in Supply Chain and Inventory Management",
    context:
      "Efficiency gains are accelerating; a majority of organizations now report clear cost-saving benefits as they move past initial pilots into operational functions.",
    source: "McKinsey Global Survey: The state of AI, March 2025",
    accentColor: "orange",
  },
{
    "number": "1.7x",
    "title": "higher revenue growth achieved by AI value generators",
    "context": "Companies that prioritize end-to-end workflow reinvention over simple automation are pulling away, widening the financial performance gap between themselves and incremental movers.",
    "source": "BCG Build for the Future Global Study, September 2025",
    "accentColor": "purple"
  },
{
    "number": "70%",
    "title": "of AI value is now concentrated in core business functions",
    "context": "The most significant impacts are no longer in support roles, but in the 'engine room' of the business: R&D, manufacturing, supply chain, and sales.",
    "source": "BCG Build for the Future Global Study, September 2025",
    "accentColor": "cyan"
  },
{
    "number": "50%",
    "title": "increase in employee access to sanctioned AI tools in just one year",
    "context": "Corporate access has expanded from 40% to 60% of the workforce. However, despite this rapid rollout, fewer than 60% of those with access actually use these tools in their daily workflows.",
    "source": "Deloitte State of AI in the Enterprise, January 2026",
    "accentColor": "green"
  },
  {
  "number": "84%",
  "title": "of companies have not yet redesigned jobs or the nature of work itself around AI capabilities",
  "context": "Despite high expectations for automation, most enterprises are currently prioritizing worker fluency and education over the deeper structural work of rearchitecting roles, workflows, and career paths.",
  "source": "Deloitte State of AI in the Enterprise, January 2026",
  "accentColor": "pink"
}
];
