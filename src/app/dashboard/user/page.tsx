import { apiServer } from "@/app/lib/api-server";
import type { ApiResponse, Blueprint } from "@/app/lib/types";
import Link from "next/link";

export default async function UserOverviewPage() {
  const res = await apiServer<ApiResponse<Blueprint[]>>("/api/blueprints/mine");
  const blueprints = res.data;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Blueprints</p>
          <p className="text-2xl font-bold">{blueprints.length}</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-3">Recent Blueprints</h2>
        {blueprints.length === 0 ? (
          <p className="text-gray-500">
            No blueprints yet.{" "}
            <Link href="/dashboard/user/blueprints/new" className="text-blue-600 underline">
             Add your first one
            </Link>
          </p>
        ) : (
          <div className="space-y-2">
            {blueprints.slice(0, 5).map((bp) => (
              <div key={bp._id} className="border rounded p-3 flex justify-between">
                <span>{bp.title}</span>
                <span className="text-sm text-gray-500">{bp.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}