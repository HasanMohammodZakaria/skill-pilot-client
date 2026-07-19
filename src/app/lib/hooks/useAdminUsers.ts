import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse, AdminUser } from "@/app/lib/types";

export function useAdminUsers() {
  return useQuery({
    queryKey: queryKeys.admin.users,
    queryFn: async () => {
      const res = await apiClient<ApiResponse<AdminUser[]>>("/api/admin/users");
      return res.data;
    },
  });
}