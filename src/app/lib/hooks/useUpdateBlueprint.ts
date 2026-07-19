import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse, Blueprint } from "@/app/lib/types";

type BlueprintInput = Omit<Blueprint, "_id" | "createdBy" | "createdAt" | "updatedAt">;

export function useUpdateBlueprint() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: BlueprintInput }) => {
      const res = await apiClient<ApiResponse<{ message: string }>>(`/api/blueprints/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      return res;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blueprints.mine });
      queryClient.invalidateQueries({ queryKey: queryKeys.blueprints.detail(variables.id) });
    },
  });
}