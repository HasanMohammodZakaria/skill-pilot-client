"use client";

import { useBlueprints } from "@/app/lib/hooks/useBlueprints";
import BlueprintCard from "@/app/components/dashboard/user/BlueprintCard";
import Link from "next/link";

export default function MyBlueprintsPage() {
  const { data: blueprints, isLoading, isError } = useBlueprints();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="text-red-500">Failed to load blueprints.</p>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold">My Blueprints</h1>
        <Link
          href="/dashboard/user/blueprints/new"
          className="bg-black text-white px-4 py-2 rounded text-center text-sm sm:text-base"
        >
          + Add Blueprint
        </Link>
      </div>

      {blueprints?.length === 0 ? (
        <p className="text-gray-500">No blueprints yet. Add your first one.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blueprints?.map((bp) => (
            <BlueprintCard key={bp._id} blueprint={bp} />
          ))}
        </div>
      )}
    </div>
  );
}