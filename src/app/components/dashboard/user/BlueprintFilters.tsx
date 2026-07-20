"use client";

import { useState, useEffect } from "react";

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

  // debounce search input
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
        className="flex-1 border rounded px-3 py-2 text-sm sm:text-base"
      />

      <select
        value={value.category}
        onChange={(e) => onChange({ ...value, category: e.target.value })}
        className="border rounded px-3 py-2 text-sm sm:text-base"
      >
        <option value="">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
        <option value="Mobile Development">Mobile Development</option>
        <option value="DevOps">DevOps</option>
        <option value="Design">Design</option>
      </select>

      <select
        value={value.difficulty}
        onChange={(e) => onChange({ ...value, difficulty: e.target.value })}
        className="border rounded px-3 py-2 text-sm sm:text-base"
      >
        <option value="">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select
        value={value.sort}
        onChange={(e) => onChange({ ...value, sort: e.target.value as FilterState["sort"] })}
        className="border rounded px-3 py-2 text-sm sm:text-base"
      >
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
        <option value="title_asc">Title (A-Z)</option>
      </select>
    </div>
  );
}