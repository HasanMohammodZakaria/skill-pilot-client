export default function BlueprintCardSkeleton() {
  return (
    <div className="border rounded-lg overflow-hidden animate-pulse">
      <div className="w-full aspect-video bg-gray-700/40" />
      <div className="p-3 sm:p-4 space-y-2">
        <div className="h-4 bg-gray-700/40 rounded w-3/4" />
        <div className="h-3 bg-gray-700/40 rounded w-1/2" />
        <div className="flex gap-2 pt-2">
          <div className="h-3 bg-gray-700/40 rounded w-10" />
          <div className="h-3 bg-gray-700/40 rounded w-10" />
        </div>
      </div>
    </div>
  );
}