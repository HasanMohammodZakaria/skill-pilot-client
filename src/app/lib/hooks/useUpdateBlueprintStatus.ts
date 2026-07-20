import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import type { ApiResponse } from "@/app/lib/types";

export function useUpdateBlueprintStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: "published" | "draft" }) =>
      apiClient<ApiResponse<{ message: string }>>(`/api/admin/blueprints/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blueprints"] });
    },
  });
}