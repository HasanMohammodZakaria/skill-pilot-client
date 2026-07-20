"use client";

import { useState, useEffect } from "react";
import { useBlueprintFilterOptions } from "@/app/lib/hooks/useBlueprintFilters";

export interface FilterState {
  search: string;
  category: string;
  difficulty: string;
  sort: "newest" | "oldest" | "title_asc";
}

export default function BlueprintFilters({
  value,
  onChange,
}: {
  value: FilterState;
  onChange: (next: FilterState) => void;
}) {
  const [searchInput, setSearchInput] = useState(value.search);
  const { data: filterOptions } = useBlueprintFilterOptions();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchInput !== value.search) {
        onChange({ ...value, search: searchInput });
      }
    }, 400);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search blueprints..."
        className="flex-1 border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
      />

      <select
        value={value.category}
        onChange={(e) => onChange({ ...value, category: e.target.value })}
        className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
      >
        <option value="">All Categories</option>
        {filterOptions?.data.categories.map((c) => (
          <option key={c.value} value={c.value}>
            {c.value} ({c.count})
          </option>
        ))}
      </select>

      <select
        value={value.difficulty}
        onChange={(e) => onChange({ ...value, difficulty: e.target.value })}
        className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
      >
        <option value="">All Levels</option>
        {filterOptions?.data.difficulties.map((d) => (
          <option key={d.value} value={d.value}>
            {d.value} ({d.count})
          </option>
        ))}
      </select>

      <select
        value={value.sort}
        onChange={(e) => onChange({ ...value, sort: e.target.value as FilterState["sort"] })}
        className="border rounded px-3 py-2 text-sm sm:text-base w-full sm:w-auto"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="title_asc">Title (A-Z)</option>
      </select>
    </div>
  );
}