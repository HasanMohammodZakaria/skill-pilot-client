"use client";

import { useReviews } from "@/app/lib/hooks/useReviews";
import ReviewList from "./ReviewList";
import ReviewForm from "./ReviewForm";



export default function ReviewSection({
  blueprintId,
  isLoggedIn,
}: {
  blueprintId: string;
  isLoggedIn: boolean;
}) {
  const { data, isLoading } = useReviews(blueprintId);

  return (
    <div className="space-y-6 pt-4 border-t" style={{ borderColor: "var(--border-default)" }}>
      {isLoading ? (
        <p className="text-sm text-gray-500">Loading reviews...</p>
      ) : (
        <ReviewList
          reviews={data?.data ?? []}
          averageRating={data?.meta.averageRating ?? 0}
          totalReviews={data?.meta.totalReviews ?? 0}
        />
      )}

      {isLoggedIn ? (
        <ReviewForm blueprintId={blueprintId} />
      ) : (
        <p className="text-sm text-gray-500">Log in to write a review.</p>
      )}
    </div>
  );
}