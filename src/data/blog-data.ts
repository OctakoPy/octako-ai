export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for rich content
  author: string;
  date: string; // ISO date string
  readTime: string;
  category: "automation" | "ai" | "process" | "spreadsheets" | "general";
  tags: string[];
  featured?: boolean;
  coverImage?: string; // URL or path
}

export const blogCategories = [
  { value: "all", label: "All Posts" },
  { value: "automation", label: "Automation" },
  { value: "ai", label: "AI Integration" },
  { value: "process", label: "Process Design" },
  { value: "spreadsheets", label: "Spreadsheets" },
  { value: "general", label: "General" },
] as const;

// Add your blog posts here. Each post uses the BlogPost interface above.
// The `content` field supports HTML for rich formatting.
export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-ai-tools-collect-dust",
    title: "Why Your AI Tools Are Collecting Dust (And What to Do About It)",
    excerpt:
      "You bought the licenses, rolled out the tools, and... nothing changed. Here's the pattern we see in every company struggling with AI adoption.",
    content: `
      <p>Every week we talk to companies who spent six figures on AI tools that nobody uses. The story is always the same: leadership gets excited about AI, purchases enterprise licenses, sends a company-wide email, and waits for transformation.</p>
      <p>It never comes.</p>
      <h2>The Real Problem Isn't the Technology</h2>
      <p>The issue is never the tool itself. ChatGPT works. Copilot works. The problem is that these are horizontal tools being thrown at vertical problems.</p>
      <p>When your invoice processing workflow has three redundant approval steps, giving everyone an AI writing assistant doesn't fix anything. You've added a shiny new tool on top of a broken process.</p>
      <h2>What Actually Works</h2>
      <p>Companies that succeed with AI do something counterintuitive: they fix their processes <em>before</em> adding technology. They:</p>
      <ul>
        <li>Map their actual workflows (not the ones in the handbook)</li>
        <li>Identify where time is genuinely wasted</li>
        <li>Eliminate unnecessary steps first</li>
        <li>Then automate what remains with targeted solutions</li>
      </ul>
      <h2>The Bottom Line</h2>
      <p>Generic AI tools help you do existing work slightly faster. Process automation eliminates work that shouldn't exist in the first place. That's the difference between a tool that collects dust and a system that transforms your operations.</p>
    `,
    author: "Streamline Systems",
    date: "2025-06-15",
    readTime: "4 min read",
    category: "ai",
    tags: ["AI adoption", "enterprise tools", "process design"],
    featured: true,
  },
  {
    slug: "spreadsheet-red-flags",
    title: "5 Signs Your Spreadsheet Is a Ticking Time Bomb",
    excerpt:
      "If your business-critical spreadsheet takes more than 10 seconds to open, you have a problem. Here are the warning signs before disaster strikes.",
    content: `
      <p>We've seen it all: the 80MB Excel file that takes five minutes to open, the spreadsheet with 400 formulas that nobody understands, the "master tracker" that crashes every Tuesday.</p>
      <p>Here are the five red flags that mean your spreadsheet needs professional help—before it costs you.</p>
      <h2>1. It Takes More Than 10 Seconds to Open</h2>
      <p>If you have time to get coffee while your spreadsheet loads, it's too big for Excel. This usually means 50,000+ rows, excessive formulas, or embedded objects dragging performance.</p>
      <h2>2. Only One Person Understands How It Works</h2>
      <p>If your team has a "spreadsheet person" and everyone panics when they're on holiday, you have a single point of failure. That's not a spreadsheet—it's a liability.</p>
      <h2>3. You're Copy-Pasting Between Sheets Weekly</h2>
      <p>Manual data transfer between spreadsheets is the #1 source of errors we see. Every copy-paste is a chance for something to go wrong.</p>
      <h2>4. The Formulas Reference Other Files</h2>
      <p>Cross-file references break constantly. When someone moves, renames, or deletes a source file, your formulas silently return wrong answers.</p>
      <h2>5. You've Said "Don't Touch Row 1" or "Don't Sort Column D"</h2>
      <p>If your spreadsheet comes with verbal instructions about what not to do, it's held together with duct tape. One wrong sort and your formulas break.</p>
      <h2>What To Do About It</h2>
      <p>Most of these problems have straightforward solutions: proper database systems, automated data pipelines, or even just well-structured spreadsheets with proper validation. The fix is usually faster and cheaper than you think.</p>
    `,
    author: "Streamline Systems",
    date: "2025-06-08",
    readTime: "3 min read",
    category: "spreadsheets",
    tags: ["Excel", "spreadsheets", "data management"],
  },
  {
    slug: "automation-roi-calculator",
    title: "How to Calculate the ROI of Automating a Task",
    excerpt:
      "A simple framework to figure out if automating a repetitive task is worth the investment. Spoiler: it almost always is.",
    content: `
      <p>Before you automate anything, you should know whether it's worth it. Here's the simple formula we use with every client.</p>
      <h2>The Basic Formula</h2>
      <p><strong>Annual cost of manual work</strong> = Hours per week × 52 weeks × Hourly cost (salary + overhead)</p>
      <p><strong>Automation investment</strong> = Build cost + Annual maintenance</p>
      <p><strong>ROI</strong> = (Annual savings − Automation investment) / Automation investment × 100</p>
      <h2>A Real Example</h2>
      <p>A marketing manager spends 3 hours every Monday compiling reports from 4 platforms.</p>
      <ul>
        <li>Annual cost: 3 hours × 52 weeks × $75/hour = <strong>$11,700/year</strong></li>
        <li>Automation cost: $3,000 one-time build + $500/year maintenance</li>
        <li>First-year ROI: ($11,700 − $3,500) / $3,500 = <strong>234%</strong></li>
        <li>Every subsequent year: ($11,700 − $500) / $500 = <strong>2,240%</strong></li>
      </ul>
      <h2>When NOT to Automate</h2>
      <p>Not everything should be automated. Skip it if:</p>
      <ul>
        <li>The task takes less than 15 minutes per week</li>
        <li>The process changes frequently and unpredictably</li>
        <li>It requires genuine human judgment every time</li>
        <li>It's a one-time task (just do it manually)</li>
      </ul>
      <h2>The Hidden Benefits</h2>
      <p>ROI calculations usually undercount the value because they miss: reduced errors, faster turnaround, employee satisfaction, and the ability to scale without hiring.</p>
    `,
    author: "Streamline Systems",
    date: "2025-05-28",
    readTime: "5 min read",
    category: "automation",
    tags: ["ROI", "business case", "automation"],
    featured: true,
  },
];
