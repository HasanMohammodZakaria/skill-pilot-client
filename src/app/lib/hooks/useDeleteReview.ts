import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse } from "@/app/lib/types";

export function useDeleteReview(blueprintId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reviewId: string) =>
    apiClient<ApiResponse<{ message: string }>>(`/api/reviews/${reviewId}`, {
  method: "DELETE",
}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reviews.forBlueprint(blueprintId) });
    },
  });
}