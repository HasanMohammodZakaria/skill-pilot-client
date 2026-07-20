import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import type { ApiResponse } from "@/app/lib/types";

export function useDeleteBlueprintAdmin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      apiClient<ApiResponse<{ message: string }>>(`/api/admin/blueprints/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "blueprints"] });
    },
  });
}