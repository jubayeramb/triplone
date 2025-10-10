import Image from "next/image";
import Link from "next/link";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";

export interface RelatedArticle {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  author: string;
  date: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) {
    return null;
  }

  return (

    <div className="bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Related Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-teal-100 text-teal-700 hover:bg-teal-200"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {article.author} • {article.date}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
