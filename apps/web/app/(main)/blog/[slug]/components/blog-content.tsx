import { Badge } from "@triplone/ui/components/badge";
import { Twitter, Facebook, Linkedin, Share2 } from "lucide-react";

export interface BlogSection {
  id: string;
  title: string;
  content: string | string[];
  type?: "h2" | "h3";
  badge?: string;
  listItems?: Array<{
    title?: string;
    description: string;
  }>;
}

interface BlogContentProps {
  introduction: string;
  sections: BlogSection[];
}

export function BlogContent({ introduction, sections }: BlogContentProps) {
  return (
    <>

    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <p className="mb-12 text-base leading-relaxed text-gray-600 sm:text-lg">
        {introduction}
      </p>

      {/* Dynamic Sections */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          {/* Section Title with Optional Badge */}
          <div className="mb-4 flex items-start gap-3">
            {section.type === "h3" ? (
              <h3 className="text-2xl font-semibold text-[#0F4A4A]">
                {section.title}
              </h3>
            ) : (
              <h2 className="text-3xl font-medium text-[#0F4A4A]">
                {section.title}
              </h2>
            )}
            {section.badge && (
              <Badge
                variant="secondary"
                className="rounded-md bg-[#4ECDC4] px-2 py-1 text-xs font-medium text-white hover:bg-[#45b8b0]"
              >
                {section.badge}
              </Badge>
            )}
          </div>

          {/* Section Content */}
          {typeof section.content === "string" ? (
            <p className="leading-relaxed text-gray-600">{section.content}</p>
          ) : (
            section.content.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 leading-relaxed text-gray-600 last:mb-0"
              >
                {paragraph}
              </p>
            ))
          )}

          {/* List Items (for dishes, tips, etc.) */}
          {section.listItems && (
            <ul className="mt-4 space-y-3">
              {section.listItems.map((item, index) => (
                <li key={index} className="text-gray-600">
                  {item.title ? (
                    <>
                      <span className="font-medium text-gray-900">
                        {item.title}:
                      </span>{" "}
                      {item.description}
                    </>
                  ) : (
                    item.description
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* Divider */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        {/* Share Section */}
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-[#0F4A4A]">
            Share this article
          </h3>
          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Twitter className="h-4 w-4 text-gray-600" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] hover:bg-[#1665D8] transition-colors">
              <Facebook className="h-4 w-4 text-white" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Linkedin className="h-4 w-4 text-gray-600" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Share2 className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </article>
    </>
  );
}
