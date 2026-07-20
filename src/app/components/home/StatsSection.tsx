import { FiBookOpen, FiUsers, FiStar } from "react-icons/fi";
import { getPlatformStats } from "@/app/lib/actions/stats.actions";

export default async function StatsSection() {
  const stats = await getPlatformStats();

  const items = [
    {
      icon: <FiBookOpen size={22} />,
      value: stats.totalBlueprints,
      label: "Learning Blueprints",
    },
    {
      icon: <FiUsers size={22} />,
      value: stats.totalUsers,
      label: "Active Learners",
    },
    {
      icon: <FiStar size={22} />,
      value: stats.totalReviews,
      label: "Reviews Shared",
    },
  ];

  return (
    <section
      className="w-full py-14 sm:py-20"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item) => (
            <div
              key={item.label}
              className="card flex flex-col items-center text-center gap-3 p-6 sm:p-8"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--brand-primary) 15%, transparent)",
                  color: "var(--brand-primary)",
                }}
              >
                {item.icon}
              </div>
              <p
                className="stat-value text-3xl sm:text-4xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {item.value.toLocaleString()}+
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}