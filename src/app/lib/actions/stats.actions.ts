import type { PlatformStats } from "@/app/lib/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export async function getPlatformStats(): Promise<PlatformStats> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/stats`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return { totalBlueprints: 0, totalUsers: 0, totalReviews: 0 };
    }

    const json = await res.json();
    return json.data as PlatformStats;
  } catch {
    return { totalBlueprints: 0, totalUsers: 0, totalReviews: 0 };
  }
}