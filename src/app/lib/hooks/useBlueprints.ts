import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse, Blueprint } from "@/app/lib/types";

export function useBlueprints() {
  return useQuery({
    queryKey: queryKeys.blueprints.mine,
    queryFn: async () => {
      const res = await apiClient<ApiResponse<Blueprint[]>>("/api/blueprints/mine");
      return res.data;
    },
  });
}