import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { BlueprintListResponse } from "@/app/lib/types";

export interface BlueprintListParams {
  search?: string;
  category?: string;
  difficulty?: string;
  sort?: "newest" | "oldest" | "title_asc";
  page?: number;
  limit?: number;
}

export function useBlueprintList(params: BlueprintListParams) {
  const query = new URLSearchParams();
  if (params.search) query.set("search", params.search);
  if (params.category) query.set("category", params.category);
  if (params.difficulty) query.set("difficulty", params.difficulty);
  if (params.sort) query.set("sort", params.sort);
  query.set("page", String(params.page ?? 1));
  query.set("limit", String(params.limit ?? 8));

  return useQuery({
    queryKey: queryKeys.blueprints.list(params as Record<string, string | number | undefined>),
    queryFn: () =>
      apiClient<BlueprintListResponse>(`/api/blueprints?${query.toString()}`),
    placeholderData: (prev) => prev,
  });
}