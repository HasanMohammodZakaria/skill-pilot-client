"use client";

import { useState, useEffect } from "react";
import { useAdminBlueprints } from "@/app/lib/hooks/useAdminBlueprints";
import AllBlueprintsTable from "@/app/components/dashboard/admin/AllBlueprintsTable";
import Pagination from "@/app/components/dashboard/Pagination";

export default function AdminBlueprintsPage() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearch(searchInput);
      setPage(1);
    }, 400);
    return () => clearTimeout(timeout);
  }, [searchInput]);

  const { data, isLoading, isError } = useAdminBlueprints(page, search);

  return (
    <div className="px-1 sm:px-0 space-y-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">All Blueprints</h1>
        <p className="text-sm text-gray-500 mt-1">
          {data ? `${data.pagination.total} total blueprints` : "Loading blueprints..."}
        </p>
      </div>

      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search by title..."
        className="w-full sm:w-80 border rounded px-3 py-2 text-sm"
      />

      {isError && <p className="text-red-500 text-sm">Failed to load blueprints.</p>}

      {isLoading ? (
        <div
          className="border rounded-lg p-8 text-center text-sm text-gray-500"
          style={{ borderColor: "var(--border-default)" }}
        >
          Loading...
        </div>
      ) : (
        <>
          <AllBlueprintsTable blueprints={data?.data ?? []} />
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