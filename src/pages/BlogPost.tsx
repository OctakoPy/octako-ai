import { useParams, Link, Navigate } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { AnimateIn } from "@/components/AnimateIn";
import { blogPosts, blogCategories } from "@/data/blog-data";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categoryColorMap: Record<string, string> = {
  automation: "bg-accent-purple/10 text-accent-purple",
  ai: "bg-accent-pink/10 text-accent-pink",
  process: "bg-accent-cyan/10 text-accent-cyan",
  spreadsheets: "bg-accent-green/10 text-accent-green",
  general: "bg-muted text-muted-foreground",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) return <Navigate to="/blog" replace />;

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;
  const categoryLabel = blogCategories.find((c) => c.value === post.category)?.label;

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 gradient-hero relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="section-container relative z-10 max-w-3xl">
          <AnimateIn>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6"
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <Badge className={`mb-4 ${categoryColorMap[post.category]} border-0`}>
              {categoryLabel}
            </Badge>
            <h1 className="text-hero-mobile md:text-hero text-primary-foreground mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
              <span>{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <AnimateIn>
            <article
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-li:text-muted-foreground
                prose-strong:text-foreground
                prose-em:text-foreground
                prose-a:text-accent-purple prose-a:no-underline hover:prose-a:underline
                prose-ul:list-disc prose-ol:list-decimal"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimateIn>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Prev / Next Navigation */}
          <nav className="mt-12 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex flex-col p-4 rounded-lg border border-border hover:border-accent-purple/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <ArrowLeft size={12} /> Previous
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent-purple transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : <div />}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex flex-col items-end text-right p-4 rounded-lg border border-border hover:border-accent-purple/50 transition-colors"
              >
                <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  Next <ArrowRight size={12} />
                </span>
                <span className="text-sm font-medium text-foreground group-hover:text-accent-purple transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </nav>

          {/* CTA */}
          <div className="mt-16 rounded-xl gradient-cta p-8 text-center">
            <h3 className="text-xl font-bold text-primary-foreground mb-2">
              Ready to stop doing work that shouldn't exist?
            </h3>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Let's talk about automating your specific workflow.
            </p>
            <Button variant="outline-white" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogPost;
