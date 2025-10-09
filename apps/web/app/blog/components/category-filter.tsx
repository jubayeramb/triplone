"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@triplone/ui/components/input";

interface CategoryFilterProps {
  categories: string[];
  onCategoryChange?: (category: string) => void;
  onSearchChange?: (search: string) => void;
}

export function CategoryFilter({
  categories,
  onCategoryChange,
  onSearchChange,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange?.(category);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    onSearchChange?.(value);
  };

  return (
    <div className="w-full space-y-4 ">
      {/* Title and Search */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-primary">
          Browse by categories
        </h2>

        <div className="relative w-[380px] flex-shrink-0">
          <Input
            type="text"
            placeholder="Search blogs"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-6 pr-12 bg-white border-gray-200 rounded-full h-12 text-sm placeholder:text-gray-500 focus:bg-white"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories Container */}
      <div className="flex items-center gap-0 px-4 py-2 bg-white rounded-full border border-gray-200">
        {categories.map((category, index) => (
          <div key={category} className="flex items-center">
            <button
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2 text-sm font-normal transition-colors whitespace-nowrap ${
                activeCategory === category
                  ? "text-primary font-medium"
                  : "text-gray-600 hover:text-primary/80"
              }`}
            >
              {category}
            </button>
            {index < categories.length - 1 && (
              <div className="h-4 w-px bg-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
