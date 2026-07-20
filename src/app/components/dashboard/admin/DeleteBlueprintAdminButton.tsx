"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useDeleteBlueprintAdmin } from "@/app/lib/hooks/useDeleteBlueprintAdmin";

export default function DeleteBlueprintAdminButton({ id, title }: { id: string; title: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutate, isPending } = useDeleteBlueprintAdmin();

  function handleConfirmDelete() {
    mutate(id, {
      onSuccess: () => {
        toast.success("Blueprint deleted");
        setIsModalOpen(false);
      },
      onError: (err) => {
        toast.error(err instanceof Error ? err.message : "Failed to delete blueprint");
      },
    });
  }

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="text-red-500 hover:underline text-xs sm:text-sm">
        Delete
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => !isPending && setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-lg p-6 space-y-4"
            style={{ backgroundColor: "var(--bg-surface)", color: "var(--text-primary)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold">Delete Blueprint</h2>
            <p className="text-sm" style={{ color: "var(--text-secondary, #999)" }}>
              Are you sure you want to delete <span className="font-medium">&quot;{title}&quot;</span>? This
              action cannot be undone.
            </p>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setIsModalOpen(false)}
                disabled={isPending}
                className="px-4 py-2 rounded text-sm border disabled:opacity-50"
                style={{ borderColor: "var(--border-default)" }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={isPending}
                className="px-4 py-2 rounded text-sm bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
              >
                {isPending ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}