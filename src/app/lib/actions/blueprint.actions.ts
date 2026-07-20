import type { Blueprint } from "@/app/lib/types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export async function getFeaturedBlueprints(): Promise<Blueprint[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/blueprints/featured`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    return json.data as Blueprint[];
  } catch {
    return [];
  }
}