export const queryKeys = {
  blueprints: {
    mine: ["blueprints", "mine"] as const,
    detail: (id: string) => ["blueprints", id] as const,
  },
  admin: {
    stats: ["admin", "stats"] as const,
    users: ["admin", "users"] as const,
  },
};