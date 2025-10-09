import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../lib";

interface TopReadsProps {
  posts: BlogPost[];
}

export function TopReads({ posts }: TopReadsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-primary">Top Reads</h2>
      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="flex gap-4 group border border-gray-200 rounded-2xl p-3 bg-white hover:shadow-md transition-shadow"
          >
            <div className="relative h-[88px] w-[88px] flex-shrink-0 rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h3 className="text-sm font-medium text-primary group-hover:text-primary/80 transition-colors leading-snug">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span className="text-[#43CC73]">{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
