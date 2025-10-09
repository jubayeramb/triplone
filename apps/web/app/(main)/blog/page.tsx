import { blogPosts, topReads, categories } from "./lib";
import { FeaturedPost } from "./components/featured-post";
import { TopReads } from "./components/top-reads";
import { CategoryFilter } from "./components/category-filter";
import { BlogCard } from "./components/blog-card";
import { CTASection } from "./components/cta-section";

export default function BlogPage() {
  const featuredPost = blogPosts[0]!;
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <CategoryFilter categories={categories} />

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
