"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#3b82f6", "#facc15", "#22c55e", "#ef4444", "#a855f7", "#06b6d4", "#f97316"];

export default function AdminStatsCharts({
  categoryDistribution,
  difficultyDistribution,
}: {
  categoryDistribution: { _id: string; count: number }[];
  difficultyDistribution: { _id: string; count: number }[];
}) {
  const categoryData = categoryDistribution.map((c) => ({ name: c._id, count: c.count }));
  const difficultyData = difficultyDistribution.map((d) => ({ name: d._id, value: d.count }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div
        className="border rounded-lg p-4 sm:p-6"
        style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
      >
        <h2 className="font-semibold text-sm sm:text-base mb-4">Blueprints by Category</h2>
        {categoryData.length === 0 ? (
          <p className="text-sm text-gray-500">No data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#9ca3af" }} interval={0} angle={-20} textAnchor="end" height={60} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#9ca3af" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8, fontSize: 12 }}
              />
              <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      <div
        className="border rounded-lg p-4 sm:p-6"
        style={{ borderColor: "var(--border-default)", backgroundColor: "var(--bg-surface)" }}
      >
        <h2 className="font-semibold text-sm sm:text-base mb-4">Blueprints by Difficulty</h2>
        {difficultyData.length === 0 ? (
          <p className="text-sm text-gray-500">No data yet.</p>
        ) : (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={difficultyData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label={(entry) => `${entry.name}: ${entry.value}`}
              >
                {difficultyData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8, fontSize: 12 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}