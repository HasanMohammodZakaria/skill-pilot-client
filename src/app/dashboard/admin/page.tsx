import AdminStatsCharts from "@/app/components/dashboard/admin/AdminStatsCharts";
import { apiServer } from "@/app/lib/api-server";
import type { ApiResponse, AdminStats } from "@/app/lib/types";


export default async function AdminOverviewPage() {
  const res = await apiServer<ApiResponse<AdminStats>>("/api/admin/stats");
  const stats = res.data;

  return (
    <div className="space-y-6 px-1 sm:px-0">
      <h1 className="text-xl sm:text-2xl font-bold">Admin Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div
          className="border rounded-lg p-4 sm:p-6"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs sm:text-sm text-gray-500">Total Users</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{stats.totalUsers}</p>
        </div>
        <div
          className="border rounded-lg p-4 sm:p-6"
          style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
        >
          <p className="text-xs sm:text-sm text-gray-500">Total Blueprints</p>
          <p className="text-2xl sm:text-3xl font-bold mt-1">{stats.totalBlueprints}</p>
        </div>
      </div>

      <AdminStatsCharts
        categoryDistribution={stats.categoryDistribution}
        difficultyDistribution={stats.difficultyDistribution}
      />
    </div>
  );
}