import { useState } from "react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn, StaggerChildren, StaggerItem } from "@/components/AnimateIn";
import { blogPosts, blogCategories } from "@/data/blog-data";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryColorMap: Record<string, string> = {
  automation: "bg-accent-purple/10 text-accent-purple",
  ai: "bg-accent-pink/10 text-accent-pink",
  process: "bg-accent-cyan/10 text-accent-cyan",
  spreadsheets: "bg-accent-green/10 text-accent-green",
  general: "bg-muted text-muted-foreground",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured);

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-8 sm:pt-16 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10">
          <AnimateIn>
            <h1 className="text-hero-mobile md:text-hero text-primary-foreground mb-4">Blog</h1>
            <p className="text-body-lg text-primary-foreground/70 max-w-2xl">
              Practical insights on automation, AI, and fixing broken workflows.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="section-padding bg-background">
          <div className="section-container">
            <AnimateIn>
              <Link
                to={`/blog/${featured.slug}`}
                className="block group rounded-2xl border-2 border-border bg-card p-8 md:p-12 hover:border-accent-purple hover:shadow-lg transition-all duration-300"
              >
                <Badge className={`mb-4 ${categoryColorMap[featured.category]} border-0`}>
                  Featured
                </Badge>
                <h2 className="text-section-mobile md:text-section mb-4 group-hover:text-accent-purple transition-colors">
                  {featured.title}
                </h2>
                <p className="text-body-lg text-muted-foreground mb-6 max-w-3xl">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {new Date(featured.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {featured.readTime}
                  </span>
                </div>
              </Link>
            </AnimateIn>
          </div>
        </section>
      )}

      {/* Filter + Grid */}
      <section className="section-padding surface-bg">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {blogCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.value
                    ? "bg-accent-purple text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No posts in this category yet. Check back soon!
            </p>
          ) : (
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <StaggerItem key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex flex-col h-full rounded-xl border border-border bg-card p-6 hover:border-accent-purple/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <Badge className={`self-start mb-3 ${categoryColorMap[post.category]} border-0 text-xs`}>
                      {blogCategories.find((c) => c.value === post.category)?.label}
                    </Badge>
                    <h3 className="text-card-title mb-2 group-hover:text-accent-purple transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-purple opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight size={14} />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
