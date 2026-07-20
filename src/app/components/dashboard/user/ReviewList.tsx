import type { Review } from "@/app/lib/types";
import StarRating from "./StarRating";

export default function ReviewList({
  reviews,
  averageRating,
  totalReviews,
}: {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h3 className="font-semibold text-sm sm:text-base">Reviews ({totalReviews})</h3>
        {totalReviews > 0 && (
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <StarRating value={Math.round(averageRating)} readOnly />
            <span>{averageRating.toFixed(1)}</span>
          </div>
        )}
      </div>

      {reviews.length === 0 ? (
        <p className="text-sm text-gray-500">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <div key={review._id} className="border rounded-lg p-3 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{review.userName}</span>
                <StarRating value={review.rating} readOnly />
              </div>
              <p className="text-sm text-gray-500">{review.comment}</p>
              <p className="text-xs text-gray-600">{new Date(review.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}