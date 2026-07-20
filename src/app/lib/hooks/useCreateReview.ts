import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ApiResponse, Review } from "@/app/lib/types";

export function useCreateReview(blueprintId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { rating: number; comment: string }) =>
      apiClient<ApiResponse<Review>>(`/api/reviews/blueprints/${blueprintId}/reviews`, {
        method: "POST",
        body: JSON.stringify(data),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.reviews.forBlueprint(blueprintId) });
    },
  });
}