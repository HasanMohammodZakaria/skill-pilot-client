import type { Review } from "@/app/lib/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export async function getFeaturedReviews(): Promise<Review[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/reviews/featured`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    return json.data as Review[];
  } catch {
    return [];
  }
}