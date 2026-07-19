import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse } from "@/app/lib/types";

export function useDeleteBlueprint() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      apiClient<ApiResponse<{ message: string }>>(`/api/blueprints/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blueprints.mine });
    },
  });
}