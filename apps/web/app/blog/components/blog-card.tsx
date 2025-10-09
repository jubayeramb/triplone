import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../lib";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 space-y-3">
        <div className="text-xs text-gray-500">{post.date}</div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-lg font-medium text-primary hover:text-primary/80 transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-3">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block text-sm text-[#43CC73] hover:text-[#36B65A] font-medium transition-colors"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
