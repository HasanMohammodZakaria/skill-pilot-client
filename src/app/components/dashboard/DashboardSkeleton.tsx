export default function DashboardSkeleton() {
  return (
    <div className="flex min-h-screen animate-pulse">
      <div
        className="hidden md:block w-64 border-r p-4 space-y-3"
        style={{ borderColor: "var(--border-default)" }}
      >
        <div className="h-8 bg-gray-700/40 rounded" />
        <div className="h-8 bg-gray-700/40 rounded" />
        <div className="h-8 bg-gray-700/40 rounded" />
      </div>

      <div className="flex-1 flex flex-col">
        <div
          className="h-16 border-b px-4 sm:px-6 flex items-center justify-end gap-3"
          style={{ borderColor: "var(--border-default)" }}
        >
          <div className="h-8 w-24 bg-gray-700/40 rounded" />
        </div>

        <main className="flex-1 p-4 sm:p-6 space-y-4">
          <div className="h-8 w-48 bg-gray-700/40 rounded" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <div className="w-full aspect-video bg-gray-700/40" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-700/40 rounded w-3/4" />
                  <div className="h-3 bg-gray-700/40 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}