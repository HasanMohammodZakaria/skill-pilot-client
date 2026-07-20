"use client";

import { useState } from "react";
import { useBlueprintList } from "@/app/lib/hooks/useBlueprintList";
import type { FilterState } from "@/app/components/dashboard/user/BlueprintFilters";
import BlueprintFilters from "@/app/components/dashboard/user/BlueprintFilters";

import BlueprintCardSkeleton from "@/app/components/dashboard/user/BlueprintCardSkeleton";
import Pagination from "@/app/components/dashboard/Pagination";
import PublicBlueprintCard from "../components/dashboard/user/PublicBlueprintCard";

export default function BlueprintsPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "",
    difficulty: "",
    sort: "newest",
  });
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useBlueprintList({ ...filters, page, limit: 9 });

  function handleFilterChange(next: FilterState) {
    setFilters(next);
    setPage(1);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Blueprints</h1>

      <BlueprintFilters value={filters} onChange={handleFilterChange} />

      {isError && <p className="text-red-500">Failed to load blueprints.</p>}

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <BlueprintCardSkeleton key={i} />
          ))}
        </div>
      ) : data?.data.length === 0 ? (
        <p className="text-gray-500">No blueprints found. Try adjusting your filters.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data?.data.map((bp) => (
              <PublicBlueprintCard key={bp._id} blueprint={bp} />
            ))}
          </div>
          <Pagination
            page={data?.pagination.page ?? 1}
            totalPages={data?.pagination.totalPages ?? 1}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}