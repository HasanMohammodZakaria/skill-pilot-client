import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/app/lib/api-client";
import { queryKeys } from "@/app/lib/query-keys";
import type { ReviewsResponse } from "@/app/lib/types";

export function useReviews(blueprintId: string) {
  return useQuery({
    queryKey: queryKeys.reviews.forBlueprint(blueprintId),
    queryFn: () =>
      apiClient<ReviewsResponse>(`/api/reviews/blueprints/${blueprintId}/reviews`),
  });
}