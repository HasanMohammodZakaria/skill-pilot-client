"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateReview } from "@/app/lib/hooks/useCreateReview";
import StarRating from "./StarRating";

export default function ReviewForm({ blueprintId }: { blueprintId: string }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const { mutate, isPending } = useCreateReview(blueprintId);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (comment.trim().length < 3) {
      toast.error("Comment must be at least 3 characters");
      return;
    }

    mutate(
      { rating, comment },
      {
        onSuccess: () => {
          toast.success("Review submitted");
          setRating(0);
          setComment("");
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to submit review");
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 border rounded-lg p-4">
      <h3 className="font-semibold text-sm sm:text-base">Write a Review</h3>
      <StarRating value={rating} onChange={setRating} />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Share your experience with this blueprint..."
        className="w-full border rounded px-3 py-2 text-sm sm:text-base"
        rows={3}
      />
      <button
        type="submit"
        disabled={isPending}
        className="bg-black text-white px-4 py-2 rounded text-sm disabled:opacity-50"
      >
        {isPending ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}