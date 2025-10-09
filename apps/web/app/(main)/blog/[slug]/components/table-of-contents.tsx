import { Badge } from "@triplone/ui/components/badge";

export interface TableOfContentsItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="lg:sticky lg:top-8 lg:self-start">
      <div className="rounded-lg bg-[#EEF7F7] p-6">
        <div className="mb-6 flex items-center gap-2">
          <h3 className="text-lg font-semibold text-[#1A3D3D]">
            Table of content
          </h3>
          <Badge
            variant="secondary"
            className="rounded-full bg-teal-500 px-2 py-0.5 text-xs text-white hover:bg-teal-600"
          >
            {items.length} chapters
          </Badge>
        </div>
        <nav>
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 transition-colors hover:text-teal-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
