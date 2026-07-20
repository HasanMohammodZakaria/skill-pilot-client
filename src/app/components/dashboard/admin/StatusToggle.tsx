"use client";

import { toast } from "react-toastify";
import { useUpdateBlueprintStatus } from "@/app/lib/hooks/useUpdateBlueprintStatus";

export default function StatusToggle({
  id,
  status,
}: {
  id: string;
  status: "published" | "draft";
}) {
  const { mutate, isPending } = useUpdateBlueprintStatus();

  function handleToggle() {
    const newStatus = status === "published" ? "draft" : "published";
    mutate(
      { id, status: newStatus },
      {
        onSuccess: () => toast.success(`Blueprint set to ${newStatus}`),
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to update status"),
      }
    );
  }

  const isPublished = status === "published";

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className="px-2.5 py-1 rounded-full text-xs font-medium transition-opacity hover:opacity-80 disabled:opacity-50"
      style={{
        backgroundColor: isPublished ? "rgba(34,197,94,0.15)" : "rgba(250,204,21,0.15)",
        color: isPublished ? "#22c55e" : "#facc15",
      }}
    >
      {isPending ? "..." : isPublished ? "Published" : "Draft"}
    </button>
  );
}