export const queryKeys = {
  blueprints: {
    mine: ["blueprints", "mine"] as const,
    detail: (id: string) => ["blueprints", id] as const,
    list: (params: Record<string, string | number | undefined>) =>
      ["blueprints", "list", params] as const,
  },
  reviews: {
    forBlueprint: (blueprintId: string) => ["reviews", blueprintId] as const,
  },
  admin: {
    stats: ["admin", "stats"] as const,
    users: ["admin", "users"] as const,
  },
};