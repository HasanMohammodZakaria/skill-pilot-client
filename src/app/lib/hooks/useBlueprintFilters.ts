import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import type { BlueprintFiltersResponse } from "@/app/lib/types";

export function useBlueprintFilterOptions() {
  return useQuery({
    queryKey: ["blueprints", "filters"],
    queryFn: () => apiClient<BlueprintFiltersResponse>("/api/blueprints/filters"),
    staleTime: 5 * 60 * 1000,
  });
}