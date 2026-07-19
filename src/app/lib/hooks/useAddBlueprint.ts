import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse, Blueprint } from "@/app/lib/types";

type BlueprintInput = Omit<Blueprint, "_id" | "createdBy" | "createdAt" | "updatedAt">;

export function useAddBlueprint() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: BlueprintInput) => {
      const res = await apiClient<ApiResponse<Blueprint>>("/api/blueprints", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.blueprints.mine });
    },
  });
}