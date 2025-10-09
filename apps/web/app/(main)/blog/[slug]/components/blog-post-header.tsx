import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import type { BlogPost } from "../../lib";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="mr-1 h-5 w-5 " />
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold leading-tight text-[#0F4C5C] sm:text-4xl max-w-[900px] mx-auto">
              {post.title}
            </h1>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
              <span>By {post.author}</span>
              <span className="text-gray-400">|</span>
              <span>Last Updated : {post.date}</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b max-w-7xl mx-auto" />
    </>
  );
}
