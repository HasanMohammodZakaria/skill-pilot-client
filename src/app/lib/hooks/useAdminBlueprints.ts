import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { AdminBlueprintListResponse } from "@/app/lib/types";

export function useAdminBlueprints(page: number, search: string) {
  const query = new URLSearchParams();
  query.set("page", String(page));
  query.set("limit", "10");
  if (search) query.set("search", search);

  return useQuery({
    queryKey: queryKeys.admin.blueprints(page, search),
    queryFn: () => apiClient<AdminBlueprintListResponse>(`/api/admin/blueprints?${query.toString()}`),
    placeholderData: (prev) => prev,
  });
}