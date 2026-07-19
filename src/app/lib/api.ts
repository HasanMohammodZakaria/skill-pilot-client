export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(`/api/backend${path}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: "Something went wrong" }));
    throw new Error(error.message || "Request failed");
  }

  return res.json();
}