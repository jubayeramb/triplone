import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../lib";
import { Button } from "@triplone/ui/components/button";
import { Badge } from "@triplone/ui/components/badge";
import { Card } from "@triplone/ui/components/card";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { BlogPostHeader } from "./components/blog-post-header";
import { TableOfContents } from "./components/table-of-contents";
import { BlogContent } from "./components/blog-content";
import type { BlogSection } from "./components/blog-content";
import { CTASection } from "../components/cta-section";
import { RelatedArticles } from "./components/related-articles";
import { tableOfContents, blogSections, introduction } from "./lib";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Related articles (excluding current post)
  const relatedArticles = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <BlogPostHeader post={post} />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl gap-8 lg:max-w-7xl lg:grid-cols-[300px_1fr]">
          {/* Sidebar - Table of Contents */}
          <TableOfContents items={tableOfContents} />

          {/* Article Content */}
          <BlogContent introduction={introduction} sections={blogSections} />
        </div>
      </div>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* CTA Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </div>
    </div>
  );
}
