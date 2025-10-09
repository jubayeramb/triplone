import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../lib";

interface FeaturedPostProps {
  post: BlogPost;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">The Latest</h2>
      <div className="space-y-5 border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
        <div className="relative h-[280px] w-full rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-3">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-2xl font-medium text-primary hover:text-primary/80 transition-colors mb-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 leading-relaxed text-sm">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block text-[#43CC73] hover:text-[#3DBDB4] font-medium transition-colors text-sm">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
