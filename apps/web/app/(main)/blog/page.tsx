import { blogPosts, topReads, categories } from "./lib";
import { FeaturedPost } from "./components/featured-post";
import { TopReads } from "./components/top-reads";
import { CategoryFilter } from "./components/category-filter";
import { BlogCard } from "./components/blog-card";
import { CTASection } from "./components/cta-section";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  if (!featuredPost) return null;
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Featured Post */}
            <div>
              <FeaturedPost post={featuredPost} />
            </div>

            {/* Top Reads Sidebar */}
            <div>
              <TopReads posts={topReads} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <CategoryFilter categories={categories} />

        {/* Blog Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16">
          <CTASection />
        </div>
      </div>
    </div>
  );
}
