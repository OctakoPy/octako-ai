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

// Blog posts are hidden for now - add content here when ready
export const blogPosts: BlogPost[] = [];
