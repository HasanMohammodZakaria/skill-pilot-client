import { apiServer } from "@/app/lib/api-server";
import type { ApiResponse, AdminStats } from "@/app/lib/types";

export default async function AdminOverviewPage() {
  const res = await apiServer<ApiResponse<AdminStats>>("/api/admin/stats");
  const stats = res.data;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Blueprints</p>
          <p className="text-2xl font-bold">{stats.totalBlueprints}</p>
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Category বিভাজন</h2>
        <div className="space-y-1">
          {stats.categoryDistribution.map((c) => (
            <div key={c._id} className="flex justify-between text-sm border-b py-1">
              <span>{c._id}</span>
              <span>{c.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-semibold mb-2">Difficulty বিভাজন</h2>
        <div className="space-y-1">
          {stats.difficultyDistribution.map((d) => (
            <div key={d._id} className="flex justify-between text-sm border-b py-1">
              <span>{d._id}</span>
              <span>{d.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}